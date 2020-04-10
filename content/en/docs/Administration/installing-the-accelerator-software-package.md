# Installing the Accelerator Software Package<a name="EN-US_TOPIC_0231142819"></a>

## Prerequisites<a name="section21702605"></a>

-   The remote SSH login tool has been installed on the local PC.
-   The openEuler OS has been installed.
-   The RPM tool is running properly.
-   OpenSSL 1.1.1a or a later version has been installed.

    You can run the following commands to query the version number of OpenSSL:

    -   openssl version


## Procedure<a name="section61105724"></a>

1.  Log in to the openEuler OS CLI as user  **root**.
2.  Create a directory for storing accelerator engine software packages.
3.  Use SSH to copy all accelerator engine software package to the created directory.
4.  In the directory, run the  **rpm -ivh**  command to install the accelerator engine software packages.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >Install the  **libwd**  package first because the  **libkae**  package installation depends on the  **libwd**  package.  

    ```
    rpm -ivh uacce*.rpm hisi*.rpm libwd-*.rpm libkae*.rpm
    ```

    ```
    Verifying...                          ################################# [100%]
    Preparing...                          ################################# [100%]
    checking installed modules
    uacce modules start to install
    Updating / installing...
       1:uacce-1.2.10-4.oe1               ################################# [ 14%]
    uacce modules installed
       2:libwd-1.2.10-3.oe1               ################################# [ 29%]
       3:libkae-1.2.10-3.oe1              ################################# [ 43%]
    checking installed modules
    hisi_hpre modules start to install
       4:hisi_hpre-1.2.10-4.oe1           ################################# [ 57%]
    hisi_hpre modules installed
    checking installed modules
    hisi_rde modules start to install
       5:hisi_rde-1.2.10-4.oe1            ################################# [ 71%]
    hisi_rde modules installed
    checking installed modules
    hisi_sec2 modules start to install
       6:hisi_sec2-1.2.10-4.oe1           ################################# [ 86%]
    hisi_sec2 modules installed
    checking installed modules
    hisi_zip modules start to install
       7:hisi_zip-1.2.10-4.oe1            ################################# [100%]
    hisi_zip modules installed
    ```

5.  Run the  **rpm -qa**  command to check whether the accelerator software packages have been installed properly. Run the  **rpm -ql**  command to check whether files in the software packages are correct. The following is an example:

    ```
    rpm -qa|grep -E "hisi|uacce|libwd|libkae"
    ```

    ```
    hisi_rde-1.2.10-4.oe1.aarch64
    hisi_sec2-1.2.10-4.oe1.aarch64
    libkae-1.2.10-3.oe1.aarch64
    hisi_hpre-1.2.10-4.oe1.aarch64
    uacce-1.2.10-4.oe1.aarch64
    libwd-1.2.10-3.oe1.aarch64
    hisi_zip-1.2.10-4.oe1.aarch64
    ```

    ```
    rpm -ql uacce hisi* libwd* libkae
    ```

    ```
    /lib/modules/4.19.90-2003.4.0.0036.oe1.aarch64/extra/hisi_qm.ko
    /lib/modules/4.19.90-2003.4.0.0036.oe1.aarch64/extra/uacce.ko
    /etc/modprobe.d/hisi_hpre.conf
    /lib/modules/4.19.90-2003.4.0.0036.oe1.aarch64/extra/hisi_hpre.ko
    /etc/modprobe.d/hisi_rde.conf
    /lib/modules/4.19.90-2003.4.0.0036.oe1.aarch64/extra/hisi_rde.ko
    /etc/modprobe.d/hisi_sec2.conf
    /lib/modules/4.19.90-2003.4.0.0036.oe1.aarch64/extra/hisi_sec2.ko
    /etc/modprobe.d/hisi_zip.conf
    /lib/modules/4.19.90-2003.4.0.0036.oe1.aarch64/extra/hisi_zip.ko
    /usr/include/warpdrive/config.h
    /usr/include/warpdrive/include/uacce.h
    /usr/include/warpdrive/smm.h
    /usr/include/warpdrive/wd.h
    /usr/include/warpdrive/wd_bmm.h
    /usr/include/warpdrive/wd_cipher.h
    /usr/include/warpdrive/wd_comp.h
    /usr/include/warpdrive/wd_dh.h
    /usr/include/warpdrive/wd_digest.h
    /usr/include/warpdrive/wd_rsa.h
    /usr/lib64/libwd.so.1.2.10
    /usr/local/lib/engines-1.1/libkae.so.1.2.10
    ```

6.  Restart the system or run commands to manually load the accelerator engine drivers to the kernel in sequence, and check whether the drivers are successfully loaded.

    ```
    # modprobe uacce 
    # lsmod | grep uacce 
    # modprobe hisi_qm
    # lsmod | grep hisi_qm 
    # modprobe hisi_qm
    # modprobe hisi_sec2 # Loads the hisi_sec2 driver to the kernel based on the configuration file in /etc/modprobe.d/hisi_sec2.conf.
    # modprobe hisi_hpre # Loads the hisi_hpre driver to the kernel based on the configuration file in /etc/modprobe.d/hisi_hpre.conf.
    ```


## Setting Environment Variables<a name="section135512333542"></a>

Run the following command to export the environment variable \(If you have specified the installation directory, use the actual installation directory instead of  **/usr/local**\):

```
export OPENSSL_ENGINES=/usr/local/lib/engines-1.1
```

## Performing the Post-Installation Check<a name="section13080605"></a>

Run the  **rpm -qa**  command to check whether the accelerator engine software packages are successfully installed.

If the command output contains  _software package name_**-**_version number_**-**, the software package is successfully installed. The following is an example:

```
rpm -qa|grep -E "hisi|uacce|libwd|libkae"
```

```
hisi_rde-1.2.10-4.oe1.aarch64
hisi_sec2-1.2.10-4.oe1.aarch64
libkae-1.2.10-3.oe1.aarch64
hisi_hpre-1.2.10-4.oe1.aarch64
uacce-1.2.10-4.oe1.aarch64
libwd-1.2.10-3.oe1.aarch64
hisi_zip-1.2.10-4.oe1.aarch64
```

