# Semi-automatic Installation Guide<a name="EN-US_TOPIC_0229291256"></a>

## Environment Requirements<a name="section624913414504"></a>

The environment requirements for semi-automatic installation of openEuler using kickstart are as follows:

-   PM/VM \(for details about how to create VMs, see the documents from corresponding vendors\): includes the computer where kickstart is used for automatic installation and the computer where the kickstart tool is installed.
-   Httpd: stores the kickstart file.
-   ISO: openEuler-1.0-base-aarch64-dvd.iso

## Procedure<a name="section195901411145117"></a>

To use kickstart to perform semi-automatic installation of openEuler, perform the following steps:

**Environment Preparation**

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>Before the installation, ensure that the firewall of the HTTP server is disabled. Run the following command to disable the firewall:  
>```  
>iptables -F  
>```

1.  Install httpd and start the service.

    ```
    # dnf install httpd -y
    # systemctl start httpd
    # systemctl enable httpd
    ```

2.  Run the following commands to prepare the kickstart file:

    ```
    # mkdir /var/www/html/ks
    #vim /var/www/html/ks/openEuler-ks.cfg ===>The file can be obtained by modifying the anaconda-ks.cfg file automatically generated from openEuler, or can be created using the system-config-kickstart tool.
    ====================================
    ***Modify the following information as required.***
    #version=DEVEL
    ignoredisk --only-use=sda
    autopart --type=lvm
    # Partition clearing information
    clearpart --none --initlabel
    # Use text mode install
    text
    # Use CDROM installation media
    cdrom
    # Keyboard layouts
    keyboard --vckeymap=cn --xlayouts='cn'
    # System language
    lang zh_CN.UTF-8
    
    # Network information
    network  --bootproto=dhcp --device=enp4s0 --ipv6=auto --activate
    network  --hostname=openeuler.com
    # Root password
    rootpw --iscrypted $6$fQE83lxEZ48Or4zc$j7/PlUMHn29yTjCD4Fi44WTZL/RzVGxJ/7MGsZMl6QfE3KjIVT7M4UrhFXbafvRq2lUddAFcyWHd5WRmXfEK20
    # Run the Setup Agent on first boot
    firstboot --enable
    # Do not configure the X Window System
    skipx
    # System services
    services --disabled="chronyd"
    # System timezone
    timezone Asia/Shanghai --isUtc--nontp
    
    %packages
    @^minimal-environment
    @standard
    
    %end
    
    %anaconda
    pwpolicy root --minlen=8 --minquality=1 --notstrict --nochanges --notempty
    pwpolicy user --minlen=8 --minquality=1 --notstrict --nochanges --emptyok
    pwpolicy luks --minlen=8 --minquality=1 --notstrict --nochanges --notempty
    %end
    
    %post
    #enable kdump
    sed  -i "s/ ro / ro crashkernel=1024M,high /" /boot/efi/EFI/openEuler/grub.cfg
    %end
    =====================================
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The method of generating the password ciphertext is as follows:  
    >\# python3  
    >Python 3.7.0 \(default, Apr  1 2019, 00:00:00\)  
    >\[GCC 7.3.0\] on linux  
    >Type "help", "copyright", "credits" or "license" for more information.  
    >\>\>\> import crypt  
    >\>\>\> passwd = crypt.crypt\("myPasswd"\)  
    >\>\>\> print\(passwd\)  
    >$6$63c4tDmQGn5SDayV$mZoZC4pa9Jdt6/ALgaaDq6mIExiOO2EjzomB.Rf6V1BkEMJDcMddZeGdp17cMyc9l9ML9ldthytBEPVcnboR/0  

3.  Mount the ISO image file to the CD-ROM drive of the computer where openEuler is to be installed.

    If you want to install openEuler through the NFS, specify the path \(which is  **cdrom**  by default\) of installation source in the kickstart file.


**Installing the System**

1.  The installation selection dialog box is displayed.
    1.  On the installation wizard page in  [Starting the Installation](starting-the-installation.html), select  **Install openEuler 1.0 with text mode**  and press  **e**.
    2. Add  **inst.ks=http://server ip/ks/openEuler-ks.cfg**  to the startup parameters.

        ![](figures/19.png)

    3. Press  **Ctrl**+**x**  to start the automatic installation.

2.  Verify that the installation is complete.

    After the installation is complete, the system automatically restarts. Then, the installation page is displayed again. Shut down the computer and change startup option to start from the hard disk preferentially.

    ![](figures/en-us_image_0221430309.png)


