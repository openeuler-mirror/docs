# User Permission Control<a name="EN-US_TOPIC_0184808028"></a>

## Function Description<a name="en-us_topic_0182200843_section87111452174118"></a>

A container engine supports TLS for user identity authentication, which is used to control user permissions. Currently, container engines can connect to the authz plug-in to implement permission control.

## API Description<a name="en-us_topic_0182200843_section194932664212"></a>

You can configure the startup parameters of the iSulad container engine to specify the permission control plug-in. The default daemon configuration file is  **/etc/isulad/daemon.json**.

<a name="en-us_topic_0182200843_table19691237182514"></a>
<table><thead align="left"><tr id="en-us_topic_0182200843_row3969103710257"><th class="cellrowborder" valign="top" width="24.779999999999998%" id="mcps1.1.4.1.1"><p id="en-us_topic_0182200843_p1996983712519"><a name="en-us_topic_0182200843_p1996983712519"></a><a name="en-us_topic_0182200843_p1996983712519"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="43.47%" id="mcps1.1.4.1.2"><p id="en-us_topic_0182200843_p197083782512"><a name="en-us_topic_0182200843_p197083782512"></a><a name="en-us_topic_0182200843_p197083782512"></a>Example</p>
</th>
<th class="cellrowborder" valign="top" width="31.75%" id="mcps1.1.4.1.3"><p id="en-us_topic_0182200843_p163741918172615"><a name="en-us_topic_0182200843_p163741918172615"></a><a name="en-us_topic_0182200843_p163741918172615"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0182200843_row169701737132511"><td class="cellrowborder" valign="top" width="24.779999999999998%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0182200843_p313573395910"><a name="en-us_topic_0182200843_p313573395910"></a><a name="en-us_topic_0182200843_p313573395910"></a>--authorization-plugin</p>
</td>
<td class="cellrowborder" valign="top" width="43.47%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0182200843_p1318314512594"><a name="en-us_topic_0182200843_p1318314512594"></a><a name="en-us_topic_0182200843_p1318314512594"></a>"authorization-plugin":  "authz-broker"</p>
</td>
<td class="cellrowborder" valign="top" width="31.75%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0182200843_p19601904015"><a name="en-us_topic_0182200843_p19601904015"></a><a name="en-us_topic_0182200843_p19601904015"></a>User permission authentication plug-in. Currently, only authz-broker is supported.</p>
</td>
</tr>
</tbody>
</table>

## Constraints<a name="en-us_topic_0182200843_section357173917264"></a>

-   User permission policies need to be configured for authz. The default policy file is  **/var/lib/authz-broker/policy.json**. This file can be dynamically modified and the modification will take effect immediately without restarting the plug-in service.
-   A container engine can be started by user  **root**. If some commands used are enabled for by common users, common users may obtain excessive permissions. Therefore, exercise caution when performing such operations. Currently, running the  **container\_attach**,  **container\_create**, and  **container\_exec\_create**  commands may cause risks.
-   Some compound operations, such as running  **isula exec**  and  **isula inspect**  or running and  **isula attach**  and  **isula inspect**, depend on the permission of  **isula inspect**. If a user does not have this permission, an error is reported.
-   Using SSL/TLS encryption channels hardens security but also reduces performance. For example, the delay increases, more CPU resources are consumed, and encryption and decryption require higher throughput. Therefore, the number of concurrent executions decreases compared with non-TLS communication. According to the test result, when the ARM server \(Cortex-A72 64-core\) is almost unloaded, TLS is used to concurrently start a container. The maximum number of concurrent executions is 200 to 250.
-   If  **--tlsverify**  is specified on the server, the default path where authentication files store is  **/etc/isulad**. The default file names are  **ca.pem**,  **cert.pem**, and  **key.pem**.

## Example<a name="en-us_topic_0182200843_section1473104610423"></a>

1.  Ensure that the authz plug-in is installed on the host. If the authz plug-in is not installed, run the following command to install and start the authz plug-in service:

    ```
    [root@localhost ~]# yum install authz
    [root@localhost ~]# systemctl start authz
    ```

2.  To enable this function, configure the container engine and TLS certificate. You can use OpenSSL to generate the required certificate.

    ```
    #SERVERSIDE
     
    # Generate CA key
    openssl genrsa -aes256 -passout "pass:$PASSWORD" -out "ca-key.pem" 4096
    # Generate CA
    openssl req -new -x509 -days $VALIDITY -key "ca-key.pem" -sha256 -out "ca.pem" -passin "pass:$PASSWORD" -subj "/C=$COUNTRY/ST=$STATE/L=$CITY/O=$ORGANIZATION/OU=$ORGANIZATIONAL_UNIT/CN=$COMMON_NAME/emailAddress=$EMAIL"
    # Generate Server key
    openssl genrsa -out "server-key.pem" 4096
     
    # Generate Server Certs.
    openssl req -subj "/CN=$COMMON_NAME" -sha256 -new -key "server-key.pem" -out server.csr
     
    echo "subjectAltName = DNS:localhost,IP:127.0.0.1" > extfile.cnf
    echo "extendedKeyUsage = serverAuth" >> extfile.cnf
     
    openssl x509 -req -days $VALIDITY -sha256 -in server.csr -passin "pass:$PASSWORD" -CA "ca.pem" -CAkey "ca-key.pem" -CAcreateserial -out "server-cert.pem" -extfile extfile.cnf
     
    #CLIENTSIDE
     
    openssl genrsa -out "key.pem" 4096
    openssl req -subj "/CN=$CLIENT_NAME" -new -key "key.pem" -out client.csr
    echo "extendedKeyUsage = clientAuth" > extfile.cnf
    openssl x509 -req -days $VALIDITY -sha256 -in client.csr -passin "pass:$PASSWORD" -CA "ca.pem" -CAkey "ca-key.pem" -CAcreateserial -out "cert.pem" -extfile extfile.cnf
    ```

    If you want to use the preceding content as the script, replace the variables with the configured values. If the parameter used for generating the CA is empty, set it to  **"**.  **PASSWORD**,  **COMMON\_NAME**,  **CLIENT\_NAME**, and  **VALIDITY**  are mandatory.

3.  When starting the container engine, add parameters related to the TLS and authentication plug-in and ensure that the authentication plug-in is running properly. In addition, to use TLS authentication, the container engine must be started in TCP listening mode instead of the Unix socket mode. The configuration on the container demon is as follows:

    ```
    {
        "tls": true,
        "tls-verify": true,
        "tls-config": {
               "CAFile": "/root/.iSulad/ca.pem",
               "CertFile": "/root/.iSulad/server-cert.pem",
               "KeyFile":"/root/.iSulad/server-key.pem"
        },
        "authorization-plugin": "authz-broker"
    }
    ```

4.  Configure policies. For the basic authorization process, all policies are stored in the  **/var/lib/authz-broker/policy.json**  configuration file. The configuration file can be dynamically modified without restarting the plug-in. Only the SIGHUP signal needs to be sent to the authz process. In the file, a line contains one JSON policy object. The following provides policy configuration examples:

    -   All users can run all iSuald commands:  **\{"name":"policy\_0","users":\[""\],"actions":\[""\]\}**
    -   Alice can run all iSulad commands:  **\{"name":"policy\_1","users":\["alice"\],"actions":\[""\]\}**
    -   A blank user can run all iSulad commands:  ** \{"name":"policy\_2","users":\[""\],"actions":\[""\]\}**
    -   Alice and Bob can create new containers:  **\{"name":"policy\_3","users":\["alice","bob"\],"actions":\["container\_create"\]\}**
    -   service\_account can read logs and run  **docker top**:  **\{"name":"policy\_4","users":\["service\_account"\],"actions":\["container\_logs","container\_top"\]\}**
    -   Alice can perform any container operations:  **\{"name":"policy\_5","users":\["alice"\],"actions":\["container"\]\}**
    -   Alice can perform any container operations, but the request type can only be  **get**:  **\{"name":"policy\_5","users":\["alice"\],"actions":\["container"\], "readonly":true\}**

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   **action**  indicates that regular expressions are supported.  
    >-   **users**  indicates that regular expressions are not supported.  
    >-   Users configured in  **users**  must be unique. That is, a user cannot match multiple rules.  

5.  After updating the configurations, configure TLS parameters on the client to connect to the container engine. That is, access the container engine with restricted permissions.

    ```
    [root@localhost ~]#  isula version --tlsverify --tlscacert=/root/.iSulad/ca.pem --tlscert=/root/.iSulad/cert.pem --tlskey=/root/.iSulad/key.pem  -H=tcp://127.0.0.1:2375
    ```

    If you want to use the TLS authentication for default client connection, move the configuration file to  **\~/.iSulad**  and set the  **ISULAD\_HOST**  and  **ISULAD\_TLS\_VERIFY**  variables \(rather than transferring  **-H=tcp://$HOST:2375**  and -**-tlsverify**  during each call\).

    ```
    [root@localhost ~]# mkdir -pv ~/.iSulad
    [root@localhost ~]# cp -v {ca,cert,key}.pem ~/.iSulad 
    [root@localhost ~]# export ISULAD_HOST=localhost:2375 ISULAD_TLS_VERIFY=1
    [root@localhost ~]# isula version
    ```


