# Libvirt Authentication<a name="EN-US_TOPIC_0225484580"></a>

## Overview<a name="section148709206175"></a>

When a user uses libvirt remote invocation but no authentication is performed, any third-party program that connects to the host's network can operate VMs through the libvirt remote invocation mechanism. This poses security risks. To improve system security, openEuler provides the libvirt authentication function. That is, users can remotely invoke a VM through libvirt only after identity authentication. Only specified users can access the VM, thereby protecting VMs on the network.

## Enabling Libvirt Authentication<a name="section1459575321614"></a>

By default, the libvirt remote invocation function is disabled on openEuler. This following describes how to enable the libvirt remote invocation and libvirt authentication functions.

1.  Log in to the host.
2.  Modify the libvirt service configuration file  **/etc/libvirt/libvirtd.conf**  to enable the libvirt remote invocation and libvirt authentication functions. For example, to enable the TCP remote invocation that is based on the Simple Authentication and Security Layer \(SASL\) framework, configure parameters by referring to the following:

    ```
    #Transport layer security protocol. The value 0 indicates that the protocol is disabled, and the value 1 indicates that the protocol is enabled. You can set the value as needed.
    listen_tls = 0
    #Enable the TCP remote invocation. To enable the libvirt remote invocation and libvirt authentication functions, set the value to 1.
    listen_tcp = 1
    #User-defined protocol configuration for TCP remote invocation. The following uses sasl as an example.
    auth_tcp = "sasl" 
    ```

3.  Modify the  **/etc/sasl2/libvirt.conf**  configuration file to set the SASL mechanism and SASLDB.

    ```
    #Authentication mechanism of the SASL framework.
    mech_list: digest-md5
    #Database for storing usernames and passwords
    sasldb_path: /etc/libvirt/passwd.db
    ```

4.  Add the user for SASL authentication and set the password. Take the user  **userName**  as an example. The command is as follows:

    ```
    # saslpasswd2 -a libvirt userName
    Password:
    Again (for verification):
    ```

5.  Modify the  **/etc/sysconfig/libvirtd**  configuration file to enable the libvirt listening option.

    ```
    LIBVIRTD_ARGS="--listen"
    ```

6.  Restart the libvirtd service to make the modification to take effect.

    ```
    # systemctl restart libvirtd
    ```

7.  Check whether the authentication function for libvirt remote invocation takes effect. Enter the username and password as prompted. If the libvirt service is successfully connected, the function is successfully enabled.

    ```
    # virsh -c qemu+tcp://192.168.0.1/system
    Please enter your authentication name: openeuler
    Please enter your password:
    Welcome to virsh, the virtualization interactive terminal.
    
    Type:  'help' for help with commands
           'quit' to quit
    
    virsh #
    ```


## Managing SASL<a name="section1090541121219"></a>

The following describes how to manage SASL users.

-   Query an existing user in the database.

    ```
    # sasldblistusers2 -f /etc/libvirt/passwd.db
    user@localhost.localdomain: userPassword
    ```

-   Delete a user from the database.

    ```
    # saslpasswd2 -a libvirt -d user
    ```


