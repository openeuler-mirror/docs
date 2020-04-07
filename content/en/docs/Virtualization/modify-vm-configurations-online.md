# Modify VM Configurations Online<a name="EN-US_TOPIC_0183154312"></a>

## Overview<a name="section244251312151"></a>

After a VM is created, users can modify VM configurations. This process is called online modification of VM configuration. After the configuration is modified online, the new VM configuration file is persistent and takes effect after the VM is shut down and restarted.

The format of the command for modifying VM configuration is as follows:

```
virsh edit <VMInstance>
```

The  **virsh edit**  command is used to edit the XML configuration file corresponding to  **domain**  to update VM configuration.  **virsh edit**  uses the  **vi**  program as the default editor. You can specify the editor type by modifying the environment variable  _EDITOR_  or  _VISUAL_. By default,  **virsh edit**  preferentially uses the text editor specified by the environment variable  _VISUAL_.

## Procedure<a name="section1277519434154"></a>

1.  \(Optional\) Set the editor of the  **virsh edit**  command to  **vim**.

    ```
    # export VISUAL=vim
    ```

2.  Run the  **virsh edit**  command to open the XML configuration file of the  _openEulerVM_.

    ```
    # virsh edit openEulerVM
    ```

3.  Modify the VM configuration file.
4.  Save the VM configuration file and exit.
5.  Reboot the VM for the configuration to take effect.

    ```
    # virsh reboot openEulerVM
    ```


