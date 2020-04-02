# define<a name="EN-US_TOPIC_0213225905"></a>

## Function<a name="section124121426195015"></a>

Add a user-defined workload type and the corresponding profile optimization item.

## Format<a name="section1019897115110"></a>

**atune-adm define**  <WORKLOAD\_TYPE\> <PROFILE\_NAME\> <PROFILE\_PATH\>

## Example<a name="section5961238145111"></a>

Add a workload type. Set workload type to  **test\_type**, profile name to  **test\_name**, and configuration file of an optimization item to  **example.conf**.

```
# atune-adm define test_type test_name ./example.conf
```

The  **example.conf**  file can be written as follows \(the following optimization items are optional and are for reference only\). You can also run the  **atune-adm info**  command to view how the existing profile is written.

```
[main]
# list its parent profile
[tip]
# the recommended optimization, which should be performed manunaly
[check]
# check the environment
[affinity.irq]
# to change the affinity of irqs
[affinity.task]
# to change the affinity of tasks
[bios]
# to change the bios config
[bootloader.grub2]
# to change the grub2 config
[kernel_config]
# to change the kernel config
[script]
# the script extention of cpi
[sysctl]
# to change the /proc/sys/* config
[sysfs]
# to change the /sys/* config
[systemctl]
# to change the system service config
[ulimit]
# to change the resources limit of user
```

