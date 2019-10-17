# 使用vsftpd<a name="ZH-CN_TOPIC_0184749975"></a>

## 安装vsftpd<a name="section99431953811"></a>

使用vsftpd需要安装vsftpd软件，在已经配置yum源的情况下，通过root权限执行如下命令，即可完成vsftpd的安装。

```
# dnf install vsftpd
```

## 管理vsftpd服务<a name="section1731910191272"></a>

启动、停止和重启vsftpd服务，请在root权限下执行对应命令。

-   启动vsftpd服务

    ```
    # systemctl start vsftpd
    ```

    可以通过netstat命令查看通信端口21是否开启，如下显示说明vsftpd已经启动。

    ```
    # netstat -tulnp | grep 21
    tcp6       0      0 :::21                   :::*                    LISTEN      19716/vsftpd
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >如果没有netstat命令，可以执行如下命令安装后再使用netstat：  
    >```  
    >dnf install net-tools  
    >```  

-   停止vsftpd服务

    ```
    # systemctl stop vsftpd
    ```


-   重启vsftpd服务

    ```
    # systemctl restart vsftpd
    ```


