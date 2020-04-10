# Upgrading the Accelerator Software Packages<a name="EN-US_TOPIC_0231142822"></a>

## Scenario<a name="section19089375"></a>

You can run the  **rpm -Uvh**  command to upgrade the accelerator software.

## Procedure<a name="section37586652"></a>

1.  Download the latest accelerator engine software packages from the openEuler community.
2.  Use SSH to log in to the Linux CLI as user  **root**.
3.  Save the downloaded software packages to a directory.
4.  In the directory, run the  **rpm -Uvh**  command to upgrade the accelerator driver package and engine library package. The following is an example:

    The command and output are as follows:

    ![](figures/en-us_image_0231143189.png)

    ![](figures/en-us_image_0231143191.png)

5.  Run the  **rpm -qa**  command to check whether the upgrade is successful. Ensure that the queried version is the latest version.

    ![](figures/en-us_image_0231143193.png)

    ![](figures/en-us_image_0231143195.png)

6.  Restart the system or run the following commands to manually uninstall the drivers of the earlier version, load the drivers of the latest version, and check whether the new drivers are successfully loaded.

    ```
    Uninstall the existing drivers.
    # lsmod | grep uacce 
    uacce                 262144  3 hisi_hpre,hisi_sec2,hisi_qm 
    # 
    # rmmod hisi_hpre 
    # rmmod hisi_sec2 
    # rmmod hisi_qm 
    # rmmod uacce 
    # lsmod | grep uacce 
    # 
    Load the new drivers.# modprobe uacce
    # modprobe hisi_qm# modprobe hisi_sec2 #Loads the hisi_sec2 driver to the kernel based on the configuration file in /etc/modprobe.d/hisi_sec2.conf.
    # modprobe hisi_hpre  #Loads the hisi_hpre driver to the kernel based on the configuration file in /etc/modprobe.d/hisi_hpre.conf.
    # lsmod | grep uacce 
    uacce                36864  3 hisi_sec2,hisi_qm,hisi_hpre
    ```


