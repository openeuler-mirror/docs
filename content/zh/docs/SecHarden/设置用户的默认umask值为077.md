# 设置用户的默认umask值为077<a name="ZH-CN_TOPIC_0192977561"></a>

## 说明<a name="zh-cn_topic_0152100253_s597cadfb7d0c4e8db5803ff197f652fa"></a>

umask值用于为用户新创建的文件和目录设置缺省权限。如果umask的值设置过小，会使群组用户或其他用户的权限过大，给系统带来安全威胁。因此设置所有用户默认的umask值为0077，即用户创建的目录默认权限为700，文件的默认权限为600。umask值代表的是权限的“补码”，umask值和权限的换算方法请参见[umask值含义](umask值含义.md)。

>![](public_sys-resources/icon-note.gif) **说明：**   
>openEuler默认已设置用户的默认umask值为077。  

## 实现<a name="zh-cn_topic_0152100253_s4d3a22f9ecc347ac80092d595e459f2c"></a>

1.  分别在/etc/bashrc文件和/etc/profile.d/目录下的所有文件中加入“umask 0077”。

    ```
    echo "umask 0077" >> $FILE
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >_$FILE_  为具体的文件名，例如：echo "umask 0077" \>\> /etc/bashrc  

2.  设置/etc/bashrc文件和/etc/profile.d/目录下所有文件的属主为root，群组为root。

    ```
    chown root.root $FILE
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >_$FILE_  为具体的文件名，例如：chown root.root /etc/bashrc  


