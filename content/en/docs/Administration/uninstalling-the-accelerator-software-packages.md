# Uninstalling the Accelerator Software Packages<a name="EN-US_TOPIC_0231142823"></a>

## Scenario<a name="section2994698"></a>

You do not need the accelerator engine software or you want to install new accelerator engine software.

## Procedure<a name="section26952287"></a>

1.  Use SSH to log in to the Linux CLI as user  **root**.
2.  Restart the system or run commands to manually uninstall the accelerator drivers loaded to the kernel, and check whether the drivers are successfully uninstalled.

    ```
    # lsmod | grep uacce 
    uacce                36864  3 hisi_sec2,hisi_qm,hisi_hpre 
    # rmmod hisi_hpre 
    # rmmod hisi_sec2  
    # rmmod hisi_qm 
    # rmmod uacce 
    # lsmod | grep uacce 
    #
    ```

3.  Run the  **rpm -e**  command to uninstall the accelerator engine software packages. The following is an example:

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >Due to the dependency relationships, the  **libkae**  package must be uninstalled before the  **libwd**  package.  

    ![](figures/en-us_image_0231143196.png)

    ![](figures/en-us_image_0231143197.png)

4.  Run the  **rpm -qa |grep**  command to check whether the uninstallation is successful.

    ![](figures/en-us_image_0231143198.png)


