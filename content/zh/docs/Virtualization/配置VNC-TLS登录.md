# 配置VNC TLS登录<a name="ZH-CN_TOPIC_0197360151"></a>

## 概述<a name="section79531434145820"></a>

VNC服务端和客户端默认采用明文方式进行数据传输，因此通信内容可能被第三方截获。为了提升安全性，openEuler支持VNC服务端配置TLS模式进行加密认证。TLS（Tansport Layer Security）即传输层安全，可以实现VNC服务端和客户端之间加密通信，从而防止通信内容被第三方截获。

>![](public_sys-resources/icon-note.gif) **说明：**   
>-   使用TLS加密认证模式需要VNC客户端支持TLS模式（例如TigerVNC），否则无法连接到VNC客户端。  
>-   TLS加密认证模式配置粒度为主机服务器级别，开启该特性后，主机上正在运行的所有虚拟机对应的VNC客户端都将开启TLS加密认证模式。  

## 操作步骤<a name="section1476192218237"></a>

VNC开启TLS加密认证模式的操作步骤如下：

1.  登录VNC服务端所在主机登录VNC服务端所在主机，开启或修改服务端配置文件/etc/libvirt/qemu.conf中对应的配置项。相关配置内容如下所示：

    ```
    vnc_listen = "x.x.x.x"          # "x.x.x.x"为VNC的侦听地址，请用户根据实际配置，VNC服务端只允许该地址或地址段范围内的客户端连接请求
    vnc_tls = 1                     # 配置为1，表示开启VNC TLS支持
    vnc_tls_x509_cert_dir = "/etc/pki/libvirt-vnc"        #指定证书存放的路径为/etc/pki/libvirt-vnc
    vnc_tls_x509_verify = 1                               #配置为1，表示TLS认证使用X509证书
    ```

2.  为VNC创建证书和私钥文件。此处以GNU TLS为例进行说明。

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >使用GNU TLS，请提前安装好gnu-utils软件包。  

    1.  制作证书颁发机构CA（Certificate Authority）的证书文件。

        ```
        # certtool --generate-privkey > ca-key.pem
        ```

    1.  制作自签名的CA证书公私钥。_其中Your organization name_为机构名，由用户指定。

        ```
        # cat > ca.info<<EOF
        cn = Your organization name 
        ca
        cert_signing_key
        EOF
        ```

        ```
        # certtool --generate-self-signed \
                 --load-privkey ca-key.pem \
                 --template ca.info \
                 --outfile ca-cert.pem
        ```

        上述生成文件，ca-cert.pem是生成的CA公钥，ca-key.pem是生成的CA私钥，需要由CA妥善保管防止泄露。

    2.  为VNC服务端颁发证书。其中_Client Organization Name_为实际的服务名称，例如cleint.foo.com，需要用户根据实际指定。

        ```
        # cat > server.info<<EOF
        cn = Server Organization Name
        tls_www_server
        encryption_key
        signing_key
        EOF
        ```

        ```
        # certtool --generate-privkey > server-key.pem
        # certtool --generate-certificate \
                   --load-ca-certificate ca-cert.pem \
                   --load-ca-privkey ca-key.pem \
                   --load-privkey server-key.pem \
                   --template server.info \
                   --outfile server-cert.pem
        ```

        上述生成文件，server-key.pem是VNC服务端的私钥，server-cert.pem是VNC服务端的公钥。

    3.  为VNC客户端颁发证书。

        ```
        # cat > client.info<<EOF
        cn = Client Organization Name
        tls_www_client
        encryption_key
        signing_key
        EOF
        ```

        ```
        # certtool --generate-privkey > client-key.pem
        # certtool --generate-certificate \
                   --load-ca-certificate ca-cert.pem \
                   --load-ca-privkey ca-key.pem \
                   --load-privkey client-key.pem \
                   --template client.info \
                   --outfile client-cert.pem
        ```

        上述生成文件，client-key.pem是VNC客户端的私钥，client-cert.pem是VNC客户端的公钥，生成的公私钥对需要拷贝到VNC客户端。

3.  关闭需要被登录的虚拟机，重启VNC服务端所在主机的libvirtd服务。

    ```
    # systemctl restart libvirtd
    ```

4.  将生成的服务端证书放置到VNC服务端指定目录并将证书的权限改为只允许当前用户读写。

    ```
    # sudo mkdir -m 750 /etc/pki/libvirt-vnc
    # cp ca-cert.pem /etc/pki/libvirt-vnc/ca-cert.pem
    # cp server-cert.pem /etc/pki/libvirt-vnc/server-cert.pem
    # cp server-key.pem /etc/pki/libvirt-vnc/server-key.pem
    # chmod 0600 /etc/pki/libvirt-vnc/*
    ```

5.  将生成的客户端证书ca-cert.pem，client-cert.pem和client-key.pem拷贝到VNC客户端。配置VNC客户端的TLS证书后即可使用VNC TLS登录。

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >-   VNC客户端证书的配置请参见各客户端对应的使用说明，由用户自行配置。  
    >-   登录虚拟机的方式请参见“使用VNC密码登录”。  


