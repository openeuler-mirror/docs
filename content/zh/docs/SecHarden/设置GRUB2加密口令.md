# 设置GRUB2加密口令<a name="ZH-CN_TOPIC_0192977562"></a>

## 说明<a name="zh-cn_topic_0152100368_sffe3ed626ae841b7b16f89c6aa9b9414"></a>

GRUB是GRand UnifiedBootloader的缩写，它是一个操作系统启动管理器，用来引导不同系统（如Windows、Linux），GRUB2是GRUB的升级版。

系统启动时，可以通过GRUB2界面修改系统的启动参数。为了确保系统的启动参数不被任意修改，需要对GRUB2界面进行加密，仅在输入正确的GRUB2口令时才能修改启动参数。

>![](public_sys-resources/icon-note.gif) **说明：**   
>GRUB2默认设置的口令为openEuler\#12，建议用户首次登录时修改默认密码并定期更新，避免密码泄露后，启动选项被篡改，导致系统启动异常。  

## 实现<a name="zh-cn_topic_0152100368_s5d157781b13643698428f55895548e33"></a>

1.  使用grub2-mkpasswd-pbkdf2命令生成加密的口令

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >GRUB2加密算法使用sha512。  

    ```
    # grub2-mkpasswd-pbkdf2
    Enter password: 
    Reenter password: 
    PBKDF2 hash of your password is 
    grub.pbkdf2.sha512.10000.5A45748D892672FDA02DD3B6F7AE390AC6E6D532A600D4AC477D25C7D087644697D8A0894DFED9D86DC2A27F4E01D925C46417A225FC099C12DBD3D7D49A7425.2BD2F5BF4907DCC389CC5D165DB85CC3E2C94C8F9A30B01DACAA9CD552B731BA1DD3B7CC2C765704D55B8CD962D2AEF19A753CBE9B8464E2B1EB39A3BB4EAB08
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >在Enter password和Reenter password输入相同的口令。  
    >grub.pbkdf2.sha512.10000.5A45748D892672FDA02DD3B6F7AE390AC6E6D532A600D4AC477D25C7D087644697D8A0894DFED9D86DC2A27F4E01D925C46417A225FC099C12DBD3D7D49A7425.2BD2F5BF4907DCC389CC5D165DB85CC3E2C94C8F9A30B01DACAA9CD552B731BA1DD3B7CC2C765704D55B8CD962D2AEF19A753CBE9B8464E2B1EB39A3BB4EAB08为openEuler\#12经过grub2-mkpasswd-pbkdf2加密后的输出，每次输出的密文不同。  

2.  使用vi工具打开/boot/efi/EFI/openEuler/grub.cfg的开始位置追加如下字段：

    ```
    set superusers="root"
    password_pbkdf2 root grub.pbkdf2.sha512.10000.5A45748D892672FDA02DD3B6F7AE390AC6E6D532A600D4AC477D25C7D087644697D8A0894DFED9D86DC2A27F4E01D925C46417A225FC099C12DBD3D7D49A7425.2BD2F5BF4907DCC389CC5D165DB85CC3E2C94C8F9A30B01DACAA9CD552B731BA1DD3B7CC2C765704D55B8CD962D2AEF19A753CBE9B8464E2B1EB39A3BB4EAB08
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >-   superusers字段用于设置GRUB2的超级管理员的账户名。  
    >-   password\_pbkdf2字段后的参数，第1个参数为GRUB2的账户名，第2个为该账户的加密口令。  


