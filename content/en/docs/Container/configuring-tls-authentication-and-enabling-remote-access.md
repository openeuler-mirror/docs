# Configuring TLS Authentication and Enabling Remote Access<a name="EN-US_TOPIC_0184808049"></a>

## Description<a name="en-us_topic_0183092517_section142111513104513"></a>

iSulad is designed in C/S mode. By default, the iSulad daemon process listens only on the local/var/run/isulad.sock. Therefore, you can run commands to operate containers only on the local client iSula. To enable iSula's remote access to the container, the iSulad daemon process needs to listen on the remote access port using TCP/IP. However, listening is performed only by simply configuring tcp ip:port. In this case, all IP addresses can communicate with iSulad by calling  **isula -H tcp://**_remote server IP address_**:port**, which may cause security problems. Therefore, it is recommended that a more secure version, namely Transport Layer Security \(TLS\), be used for remote access.

## Generating TLS Certificate<a name="en-us_topic_0183092517_section992244212139"></a>

-   Example of generating a plaintext private key and certificate

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


-   Example of generating an encrypted private key and certificate request file

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


## APIs<a name="en-us_topic_0183092517_section6889142610137"></a>

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

## Restrictions<a name="en-us_topic_0183092517_section4153102261410"></a>

The server supports the following modes:

-   Mode 1 \(client verified\): tlsverify, tlscacert, tlscert, tlskey
-   Mode 2 \(client not verified\): tls, tlscert, tlskey

The client supports the following modes:

-   Mode 1 \(verify the identity based on the client certificate, and verify the server based on the specified CA\): tlsverify, tlscacert, tlscert, tlskey
-   Mode 2 \(server verified\): tlsverify, tlscacert

Mode 1 is used for the server, and mode 2 for the client if the two-way authentication mode is used for communication.

Mode 2 is used for the server and the client if the unidirectional authentication mode is used for communication.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>-   If RPM is used for installation, the server configuration can be modified in the  **/etc/isulad/daemon.json**  and  **/etc/sysconfig/iSulad**  files.  
>-   Two-way authentification is recommended as it is more secure than non-authentication or unidirectional authentication.  
>-   GRPC open-source component logs are not taken over by iSulad. To view gRPC logs, set the environment variables  **gRPC\_VERBOSITY**  and  **gRPC\_TRACE**  as required.  
>    

## Example<a name="en-us_topic_0183092517_section953765812481"></a>

On the server:

```
 isulad -H=tcp://0.0.0.0:2376 --tlsverify --tlscacert ~/.iSulad/ca.pem --tlscert ~/.iSulad/server-cert.pem --tlskey ~/.iSulad/server-key.pem
```

On the client:

```
 isula version -H=tcp://$HOSTIP:2376 --tlsverify --tlscacert ~/.iSulad/ca.pem --tlscert ~/.iSulad/cert.pem --tlskey ~/.iSulad/key.pem
```

