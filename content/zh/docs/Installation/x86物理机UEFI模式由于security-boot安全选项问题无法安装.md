# x86物理机UEFI模式由于security boot安全选项问题无法安装<a name="ZH-CN_TOPIC_0231663576"></a>

## 问题现象<a name="section17737537102215"></a>

x86物理机安装系统时，由于设置了BIOS选项security boot 为enable（默认是disable），导致系统一直停留在“No bootable device”提示界面，无法继续安装，如[图1](#fig115949762617)所示。

**图 1**  “No bootable device”提示界面<a name="fig115949762617"></a>  
![](figures/No-bootable-device-提示界面.png "No-bootable-device-提示界面")

## 原因分析<a name="section1129713599228"></a>

开启security boot后，主板会验证引导程序及操作系统 ，若没有用对应的私钥进行签名，则无法通过主板上内置公钥的认证。

## 解决方法<a name="section7927961239"></a>

进入BIOS，设置security boot为disable，重新安装即可。

1.  系统启动时，按“F11”，输入密码“Admin@9000”进入BIOS。

    ![](figures/BIOS.png)

2.  选择进入Administer Secure Boot。

    ![](figures/security.png)

3.  设置Enforce Secure Boot为Disabled。

    ![](figures/选择.png)

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >设置security boot为disable之后，保存退出，重新安装即可。  


