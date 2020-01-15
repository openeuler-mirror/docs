# 使用VNC密码登录<a name="ZH-CN_TOPIC_0183154318"></a>

## 概述<a name="section144491542114"></a>

当虚拟机操作系统安装部署完成之后，用户可以通过VNC协议远程登录虚拟机，从而对虚拟机进行管理操作。

## 前提条件<a name="section681443510250"></a>

使用RealVNC、TightVNC等客户端登录虚拟机，在登录虚拟机之前需要获取如下信息：

-   虚拟机所在主机的IP地址。
-   确保客户端所在的环境可以访问到主机的网络。
-   虚拟机的VNC侦听端口，该端口一般在客户机启动时自动分配，一般为5900 + x（x为正整数，按照虚拟机启动的顺序递增，且5900对用户不可见）。
-   如果VNC设置了密码，还需要获取虚拟机的VNC密码。

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >为虚拟机VNC配置密码，需要编辑虚拟机XML配置文件，即为graphics元素新增一个passwd属性，属性的值为要配置的密码。例如，将虚拟机的VNC密码配置为n8VfjbFK的XML配置参考如下：  
    >```  
    >    <graphics type='vnc' port='5900' autoport='yes' listen='0.0.0.0' keymap='en-us' passwd='n8VfjbFK'>  
    >      <listen type='address' address='0.0.0.0'/>  
    >    </graphics>  
    >```  


## 操作步骤<a name="section12444183634118"></a>

1.  查询虚拟机使用的VNC端口号。例如名称为_openEulerVM_的虚拟机，命令如下：

    ```
    # virsh vncdisplay openEulerVM
    :3
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >登录 VNC 需要配置防火墙规则，允许 VNC 端口的连接。参考命令如下，其中_X_  为数值“5900 + 端口号” ，例如本例中为5903。  
    >```  
    >firewall-cmd --zone=public --add-port=X/tcp  
    >```  

2.  打开VncViewer软件，输入主机IP和端口号。格式为“主机IP:端口号”，例如：“10.133.205.53:3”。
3.  单击“确定”输入VNC密码（可选），登录到虚拟机VNC进行操作。

