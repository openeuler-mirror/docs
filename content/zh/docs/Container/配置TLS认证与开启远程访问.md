# 配置TLS认证与开启远程访问<a name="ZH-CN_TOPIC_0184808049"></a>

## 描述<a name="zh-cn_topic_0183092517_section142111513104513"></a>

iSulad采用C/S模式进行设计，在默认情况，iSulad守护进程isulad只侦听本地/var/run/isulad.sock，因此只能在本地通过客户端isula执行相关命令操作容器。为了能使isula可以远程访问容器，isulad守护进程需要通过tcp:ip的方式侦听远程访问的端口。然而，仅通过简单配置tcp ip:port进行侦听，这样会导致所有的ip都可以通过调用isula -H tcp://<remote server ip\>:port与isulad通信，容易导致安全问题，因此推荐使用较安全版本的TLS\(**Transport Layer Security - 安全传输层协议**）方式进行远程访问。

## 生成TLS证书<a name="zh-cn_topic_0183092517_section992244212139"></a>

-   明文私钥和证书生成方法示例

    ```
    #!/bin/bash
    set -e
    echo -n "Enter pass phrase:"
    read password
    echo -n "Enter public network ip:"
    read publicip
    echo -n "Enter host:"
    read HOST
    
    echo " => Using hostname: $publicip, You MUST connect to iSulad using this host!"
    
    mkdir -p $HOME/.iSulad
    cd $HOME/.iSulad
    rm -rf $HOME/.iSulad/*
    
    echo " => Generating CA key"
    openssl genrsa -passout pass:$password -aes256 -out ca-key.pem 4096
    echo " => Generating CA certificate"
    openssl req -passin pass:$password -new -x509 -days 365 -key ca-key.pem -sha256 -out ca.pem -subj "/C=CN/ST=zhejiang/L=hangzhou/O=Huawei/OU=iSulad/CN=iSulad@huawei.com"
    echo " => Generating server key"
    openssl genrsa -passout pass:$password -out server-key.pem 4096
    echo " => Generating server CSR"
    openssl req -passin pass:$password -subj /CN=$HOST -sha256 -new -key server-key.pem -out server.csr
    echo subjectAltName = DNS:$HOST,IP:$publicip,IP:127.0.0.1 >> extfile.cnf
    echo extendedKeyUsage = serverAuth >> extfile.cnf
    echo " => Signing server CSR with CA"
    openssl x509 -req -passin pass:$password -days 365 -sha256 -in server.csr -CA ca.pem -CAkey ca-key.pem -CAcreateserial -out server-cert.pem -extfile extfile.cnf
    echo " => Generating client key"
    openssl genrsa -passout pass:$password -out key.pem 4096
    echo " => Generating client CSR"
    openssl req -passin pass:$password -subj '/CN=client' -new -key key.pem -out client.csr
    echo " => Creating extended key usage"
    echo extendedKeyUsage = clientAuth > extfile-client.cnf
    echo " => Signing client CSR with CA"
    openssl x509 -req -passin pass:$password -days 365 -sha256 -in client.csr -CA ca.pem -CAkey ca-key.pem -CAcreateserial -out cert.pem -extfile extfile-client.cnf
    rm -v client.csr server.csr extfile.cnf extfile-client.cnf
    chmod -v 0400 ca-key.pem key.pem server-key.pem
    chmod -v 0444 ca.pem server-cert.pem cert.pem
    ```


-   加密私钥和证书请求文件生成方法示例

    ```
    #!/bin/bash
    
    echo -n "Enter public network ip:"
    read publicip
    echo -n "Enter pass phrase:"
    read password
    
    # remove certificates from previous execution.
    rm -f *.pem *.srl *.csr *.cnf
    
    
    # generate CA private and public keys
    echo 01 > ca.srl
    openssl genrsa -aes256 -out ca-key.pem -passout pass:$password 2048
    openssl req -subj '/C=CN/ST=zhejiang/L=hangzhou/O=Huawei/OU=iSulad/CN=iSulad@huawei.com' -new -x509 -days $DAYS -passin pass:$password -key ca-key.pem -out ca.pem
    
    # create a server key and certificate signing request (CSR)
    openssl genrsa -aes256 -out server-key.pem -passout pass:$PASS 2048
    openssl req -new -key server-key.pem -out server.csr -passin pass:$password -subj '/CN=iSulad'
    
    echo subjectAltName = DNS:iSulad,IP:${publicip},IP:127.0.0.1 > extfile.cnf
    echo extendedKeyUsage = serverAuth >> extfile.cnf
    # sign the server key with our CA
    openssl x509 -req -days $DAYS -passin pass:$password -in server.csr -CA ca.pem -CAkey ca-key.pem -out server-cert.pem -extfile extfile.cnf
    
    # create a client key and certificate signing request (CSR)
    openssl genrsa -aes256 -out key.pem -passout pass:$password 2048
    openssl req -subj '/CN=client' -new -key key.pem -out client.csr -passin pass:$password
    
    # create an extensions config file and sign
    echo extendedKeyUsage = clientAuth > extfile.cnf
    openssl x509 -req -days 365 -passin pass:$password -in client.csr -CA ca.pem -CAkey ca-key.pem -out cert.pem -extfile extfile.cnf
    
    # remove the passphrase from the client and server key
    openssl rsa -in server-key.pem -out server-key.pem -passin pass:$password
    openssl rsa -in key.pem -out key.pem -passin pass:$password
    
    # remove generated files that are no longer required
    rm -f ca-key.pem ca.srl client.csr extfile.cnf server.csr
    ```


## 接口<a name="zh-cn_topic_0183092517_section6889142610137"></a>

```
{
    "tls": true,
    "tls-verify": true,
    "tls-config": {
		"CAFile": "/root/.iSulad/ca.pem",
		"CertFile": "/root/.iSulad/server-cert.pem",
		"KeyFile":"/root/.iSulad/server-key.pem"
    }
}
```

## 限制<a name="zh-cn_topic_0183092517_section4153102261410"></a>

服务端支持的模式如下：

-   模式1（验证客户端）：tlsverify, tlscacert, tlscert, tlskey。
-   模式2（不验证客户端）：tls, tlscert, tlskey。

客户端支持的模式如下:

-   模式1\(使用客户端证书进行身份验证，并根据给定的CA验证服务器\)：tlsverify, tlscacert, tlscert, tlskey。
-   模式2\(验证服务器\)：tlsverify, tlscacert。

如果需要采用双向认证方式进行通讯，则服务端采用模式1，客户端采用模式1；

如果需要采用单向认证方式进行通讯，则服务端采用模式2，客户端采用模式2。

>![](public_sys-resources/icon-notice.gif) **须知：**   
>-   采用RPM安装方式时，服务端配置可通过/etc/isulad/daemon.json以及/etc/sysconfig/iSulad配置修改  
>-   相比非认证或者单向认证方式，双向认证具备更高的安全性，推荐使用双向认证的方式进行通讯  
>-   GRPC开源组件日志不由iSulad进行接管，如果需要查看GRPC相关日志，请按需设置GRPC\_VERBOSITY和GRPC\_TRACE环境变量  

## 示例<a name="zh-cn_topic_0183092517_section953765812481"></a>

服务端：

```
 isulad -H=tcp://0.0.0.0:2376 --tlsverify --tlscacert ~/.iSulad/ca.pem --tlscert ~/.iSulad/server-cert.pem --tlskey ~/.iSulad/server-key.pem
```

客户端：

```
 isula version -H=tcp://$HOSTIP:2376 --tlsverify --tlscacert ~/.iSulad/ca.pem --tlscert ~/.iSulad/cert.pem --tlskey ~/.iSulad/key.pem
```

