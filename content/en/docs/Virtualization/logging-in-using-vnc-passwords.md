# Logging In Using VNC Passwords<a name="EN-US_TOPIC_0183154318"></a>

## Overview<a name="section144491542114"></a>

After the OS is installed on a VM, you can remotely log in to the VM using VNC to manage the VM.

## Prerequisites<a name="section681443510250"></a>

Before logging in to a VM using a client, such as RealVNC or TightVNC, ensure that:

-   You have obtained the IP address of the host where the VM resides.
-   The environment where the client resides can access the network of the host.
-   You have obtained the VNC listening port of the VM. This port is automatically allocated when the client is started. Generally, the port number is  **5900 + x**  \(_x_  is a positive integer and increases in ascending order based on the VM startup sequence.  **5900**  is invisible to users.\)
-   If a password has been set for the VNC, you also need to obtain the VNC password of the VM.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >To set a password for the VM VNC, edit the XML configuration file of the VM. That is, add the  **passwd**  attribute to the  **graphics**  element and set the attribute value to the password to be configured. For example, to set the VNC password of the VM to  **n8VfjbFK**, configure the XML file as follows:  
    >```  
    >    <graphics type='vnc' port='5900' autoport='yes' listen='0.0.0.0' keymap='en-us' passwd='n8VfjbFK'>  
    >      <listen type='address' address='0.0.0.0'/>  
    >    </graphics>  
    >```  


## Procedure<a name="section12444183634118"></a>

1.  Query the VNC port number used by the VM. For example, if the VM name is  _openEulerVM_, run the following command:

    ```
    # virsh vncdisplay openEulerVM
    :3
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >To log in to the VNC, you need to configure firewall rules to allow the connection of the VNC port. The reference command is as follows, where  _X_  is  **5900 + Port number**, for example,  **5903**.  
    >```  
    >firewall-cmd --zone=public --add-port=X/tcp  
    >```  

2.  Start the VncViewer software and enter the IP address and port number of the host. The format is  **host IP address:port number**, for example,  **10.133.205.53:3**.
3.  Click  **OK**  and enter the VNC password \(optional\) to log in to the VM VNC.

