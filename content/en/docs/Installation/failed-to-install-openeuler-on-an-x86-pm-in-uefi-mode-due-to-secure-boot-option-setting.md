# Failed to Install openEuler on an x86 PM in UEFI Mode due to Secure Boot Option Setting<a name="EN-US_TOPIC_0231663576"></a>

## Symptom<a name="section17737537102215"></a>

During the installation of openEuler on an x86 PM in UEFI mode, the system stays at the "No bootable device" page and the installation cannot continue because  **secure boot**  is set to  **enabled**  \(by default, it is set to  **disabled**\), as shown in  [Figure 1](#fig115949762617).

**Figure  1**  Dialog box showing "No bootable device" <a name="fig115949762617"></a>  
![](figures/dialog-box-showing-no-bootable-device.png "dialog-box-showing-no-bootable-device")

## Possible Cause<a name="section1129713599228"></a>

After  **secure boot**  is set to  **enabled**, the mainboard verifies the boot program and OS. If the boot program and OS are not signed using the corresponding private key, the boot program and OS cannot pass the authentication of the built-in public key on the mainboard.

## Solution<a name="section7927961239"></a>

Access the BIOS, set  **secure boot**  to  **disabled**, and reinstall the openEuler.

1.  During the system startup, press  **F11**  and enter the password  **Admin@9000**  to access the BIOS.

    ![](figures/bios.png)

2.  Choose  **Administer Secure Boot**.

    ![](figures/security.png)

3.  Set  **Enforce Secure Boot**  to  **Disabled**.

    ![](figures/选择.png)

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >After  **Enforce Secure Boot**  is set to  **Disabled**, save the settings, and exit. Then, reinstall the system.  


