# Setting the GRUB2 Encryption Password<a name="EN-US_TOPIC_0192977562"></a>

## Description<a name="en-us_topic_0152100368_sffe3ed626ae841b7b16f89c6aa9b9414"></a>

GRand Unified Bootloader \(GRUB\) is an operating system boot manager used to boot different systems \(such as Windows and Linux\). GRUB2 is an upgraded version of GRUB.

When starting the system, you can modify the startup parameters of the system on the GRUB2 screen. To ensure that the system startup parameters are not modified randomly, you need to encrypt the GRUB2 screen. The startup parameters can be modified only when the correct GRUB2 password is entered.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>The default password of GRUB2 is  **openEuler\#12**. You are advised to change the default password upon the first login and periodically update the password. If the password is leaked, startup item configurations may be modified, causing the system startup failure.   

## Implementation<a name="en-us_topic_0152100368_s5d157781b13643698428f55895548e33"></a>

1.  Run the  **grub2-mkpasswd-pbkdf2**  command to generate an encrypted password.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >SHA-512 is used as the GRUB2 encryption algorithm.  

    ```
    # grub2-mkpasswd-pbkdf2
    Enter password: 
    Reenter password: 
    PBKDF2 hash of your password is 
    grub.pbkdf2.sha512.10000.5A45748D892672FDA02DD3B6F7AE390AC6E6D532A600D4AC477D25C7D087644697D8A0894DFED9D86DC2A27F4E01D925C46417A225FC099C12DBD3D7D49A7425.2BD2F5BF4907DCC389CC5D165DB85CC3E2C94C8F9A30B01DACAA9CD552B731BA1DD3B7CC2C765704D55B8CD962D2AEF19A753CBE9B8464E2B1EB39A3BB4EAB08
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >Enter the same password in the  **Enter password**  and  **Reenter password**  lines.  
    >After  **openEuler\#12**  is encrypted by  **grub2-mkpasswd-pbkdf2**, the output is  **grub.pbkdf2.sha512.10000.5A45748D892672FDA02DD3B6F7AE390AC6E6D532A600D4AC477D25C7D087644697D8A0894DFED9D86DC2A27F4E01D925C46417A225FC099C12DBD3D7D49A7425.2BD2F5BF4907DCC389CC5D165DB85CC3E2C94C8F9A30B01DACAA9CD552B731BA1DD3B7CC2C765704D55B8CD962D2AEF19A753CBE9B8464E2B1EB39A3BB4EAB08**. The ciphertext is different each time.  

2.  Open  **/boot/efi/EFI/openEuler/grub.cfg**  in a vi editor. Append the following fields to the beginning of  **/boot/efi/EFI/openEuler/grub.cfg**.

    ```
    set superusers="root"
    password_pbkdf2 root grub.pbkdf2.sha512.10000.5A45748D892672FDA02DD3B6F7AE390AC6E6D532A600D4AC477D25C7D087644697D8A0894DFED9D86DC2A27F4E01D925C46417A225FC099C12DBD3D7D49A7425.2BD2F5BF4907DCC389CC5D165DB85CC3E2C94C8F9A30B01DACAA9CD552B731BA1DD3B7CC2C765704D55B8CD962D2AEF19A753CBE9B8464E2B1EB39A3BB4EAB08
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   The  **superusers**  field is used to set the account name of the super GRUB2 administrator.  
    >-   The first parameter following the  **password\_pbkdf2**  field is the GRUB2 account name, and the second parameter is the encrypted password of the account.  


