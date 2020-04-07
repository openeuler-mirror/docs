# Other Common Configuration Items<a name="EN-US_TOPIC_0230805516"></a>

## Overview<a name="section891512161392"></a>

In addition to system resources and virtual devices, other elements need to be configured in the XML configuration file. This section describes how to configure these elements.

## Elements<a name="section5884430104314"></a>

-   **iothreads**: specifies the number of  **iothread**, which can be used to accelerate storage device performance.

-   **on\_poweroff**: action taken when a VM is powered off.
-   **on\_reboot**: action taken when a VM is rebooted.
-   **on\_crash**: action taken when a VM is on crash.
-   **clock**: indicates the clock type.

    **offset**  attribute: specifies the VM clock synchronization type. The value can be  **localtime**,  **utc**,  **timezone**, or  **variable**.


## Configuration Example<a name="section416341234917"></a>

Configure two  **iothread**  for the VM to accelerate storage device performance.

```
<iothreads>2</iothreads>
```

Destroy the VM when it is powered off.

```
<on_poweroff>destroy</on_poweroff>
```

Restart the VM.

```
<on_reboot>restart</on_reboot>
```

Restart the VM when it is crashed.

```
<on_crash>restart</on_crash>
```

The clock uses the  **utc**  synchronization mode.

```
<clock offset='utc'/>
```

