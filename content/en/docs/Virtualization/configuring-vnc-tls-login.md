# Configuring VNC TLS Login<a name="EN-US_TOPIC_0197360151"></a>

## Overview<a name="section79531434145820"></a>

By default, the VNC server and client transmit data in plaintext. Therefore, the communication content may be intercepted by a third party. To improve security, openEuler allows the VNC server to configure the Transport Layer Security \(TLS\) mode for encryption and authentication. TLS implements encrypted communication between the VNC server and client to prevent communication content from being intercepted by third parties.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   To use the TLS encryption authentication mode, the VNC client must support the TLS mode \(for example, TigerVNC\). Otherwise, the VNC client cannot be connected.  
>-   The TLS encryption authentication mode is configured at the host level. After this feature is enabled, the TLS encryption authentication mode is enabled for the VNC clients of all VMs running on the host.  

## Procedure<a name="section1476192218237"></a>

To enable the TLS encryption authentication mode for the VNC, perform the following steps:

1.  Log in to the host where the VNC server resides, and edit the corresponding configuration items in the  **/etc/libvirt/qemu.conf**  configuration file of the server. The configuration is as follows:

    ```
    vnc_listen = "x.x.x.x"                    # "x.x.x.x" indicates the listening IP address of the VNC. Set this parameter based on the site requirements. The VNC server allows only the connection requests from clients whose IP addresses are in this range.
    vnc_tls = 1                        # If this parameter is set to 1, VNC TLS is enabled.
    vnc_tls_x509_cert_dir = "/etc/pki/libvirt-vnc"                           # Specify /etc/pki/libvirt-vnc as the path for storing the certificate.
    vnc_tls_x509_verify = 1                              #If this parameter is set to 1, the X509 certificate is used for TLS authentication.
    ```

2.  Create a certificate and a private key file for the VNC. The following uses GNU TLS as an example.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >To use GNU TLS, install the gnu-utils software package in advance.  

    1.  Create a certificate file issued by the Certificate Authority \(CA\).

        ```
        # certtool --generate-privkey > ca-key.pem
        ```

    1.  Create a self-signed public and private key for the CA certificate.  _Your organization name_  indicates the organization name, which is specified by the user.

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

        In the preceding generated file,  **ca-cert.pem**  is the generated CA public key, and** ca-key.pem**  is the generated CA private key. The CA must keep them properly to prevent disclosure.

    2.  Issue a certificate to the VNC server.  **Client Organization Name**  indicates the actual service name, for example,  **cleint.foo.com**. Set this parameter based on the site requirements.

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

        In the preceding generated file,  **server-key.pem**  is the private key of the VNC server, and  **server-cert.pem**  is the public key of the VNC server.

    3.  Issue a certificate to the VNC client.

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

        In the preceding generated file,  **client-key.pem**  is the private key of the VNC client, and  **client-cert.pem**  is the public key of the VNC client. The generated public and private key pairs need to be copied to the VNC client.

3.  Shut down the VM to be logged in to and restart the libvirtd service on the host where the VNC server resides.

    ```
    # systemctl restart libvirtd
    ```

4.  Save the generated server certificate to the specified directory on the VNC server and grant the read and write permissions on the certificate only to  the current user.

    ```
    # sudo mkdir -m 750 /etc/pki/libvirt-vnc
    # cp ca-cert.pem /etc/pki/libvirt-vnc/ca-cert.pem
    # cp server-cert.pem /etc/pki/libvirt-vnc/server-cert.pem
    # cp server-key.pem /etc/pki/libvirt-vnc/server-key.pem
    # chmod 0600 /etc/pki/libvirt-vnc/*
    ```

5.  Copy the generated client certificates  **ca-cert.pem**,  **client-cert.pem**, and  **client-key.pem**  to the VNC client. After the TLS certificate of the VNC client is configured, you can use VNC TLS to log in to the VM.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   For details about how to configure the VNC client certificate, see the usage description of each client.  
    >-   For details about how to log in to the VM, see Logging In Using VNC Passwords.  


