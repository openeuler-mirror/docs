# sVirt Protection<a name="EN-US_TOPIC_0225484581"></a>

## Overview<a name="section157954293316"></a>

In a virtualization environment that uses the discretionary access control \(DAC\) policy only, malicious VMs running on hosts may attack the hypervisor or other VMs. To improve security in virtualization scenarios, openEuler uses sVirt for protection. sVirt is a security protection technology based on SELinux. It is applicable to KVM virtualization scenarios. A VM is a common process on the host OS. In the hypervisor, the sVirt mechanism labels QEMU processes corresponding to VMs with SELinux labels. In addition to types which are used to label virtualization processes and files, different categories are used to label different VMs. Each VM can access only file devices of the same category. This prevents VMs from accessing files and devices on unauthorized hosts or other VMs, thereby preventing VM escape and improving host and VM security.

## Enabling sVirt Protection<a name="section135982744319"></a>

1.  Enable SELinux on the host.
    1.  Log in to the host.
    2.  Enable the SELinux function on the host.
        1.  Modify the system startup parameter file  **grub.cfg**  to set  **selinux**  to  **1**.

            ```
            selinux=1
            ```

        2.  Modify  **/etc/selinux/config**  to set the  **SELINUX**  to  **enforcing**.

            ```
            SELINUX=enforcing
            ```

    3.  Restart the host.

        ```
        # reboot
        ```



1.  Create a VM where the sVirt function is enabled.
    1.  Add the following information to the VM configuration file:

        ```
        <seclabel type='dynamic' model='selinux' relabel='yes'/>
        ```

        Or check whether the following configuration exists in the file:

        ```
        <seclabel type='none' model='selinux'/>
        ```

    2.  Create a VM.

        ```
        # virsh define openEulerVM.xml
        ```

2.  Check whether sVirt is enabled.

    Run the following command to check whether sVirt protection has been enabled for the QEMU process of the running VM. If  **svirt\_t:s0:c**  exists, sVirt protection has been enabled.

    ```
    # ps -eZ|grep qemu |grep "svirt_t:s0:c"
    system_u:system_r:svirt_t:s0:c200,c947 11359 ? 00:03:59 qemu-kvm
    system_u:system_r:svirt_t:s0:c427,c670 13790 ? 19:02:07 qemu-kvm
    ```


