# Installation Methods<a name="EN-US_TOPIC_0183154307"></a>

## Prerequisites<a name="section384419253224"></a>

-   The yum source has been configured. For details, see  _openEuler 20.03 LTS Administrator Guide_.
-   Only the administrator has permission to perform the installation.

## Procedure<a name="section69303417316"></a>

1.  Install the QEMU component.

    ```
    # yum install -y qemu
    ```

2.  Install the libvirt component.

    ```
    # yum install -y libvirt
    ```

3.  Start the libvirtd service.

    ```
    # systemctl start libvirtd
    ```


>![](public_sys-resources/icon-note.gif) **NOTE:**   
>The KVM module is integrated in the openEuler kernel and does not need to be installed separately.  

