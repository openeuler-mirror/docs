# Forestalling Unauthorized System Restart by Holding Down  **Ctrl**,  **Alt**, and  **Delete**<a name="EN-US_TOPIC_0192977559"></a>

## Description<a name="en-us_topic_0152100184_s1cfc95ad48354d7c99b199b3b2195eb0"></a>

By default, you can restart the OS by holding down  **Ctrl**,  **Alt**, and  **Delete**. Disabling this feature can prevent data loss caused by misoperations.

## Implementation<a name="en-us_topic_0152100184_s5f42085a686a409c9100b25f21d2490d"></a>

Shield the  **Ctrl+Alt+Del**  response function of the kernel keyboard.

```
rm -f /etc/systemd/system/ctrl-alt-del.target
rm -f /usr/lib/systemd/system/ctrl-alt-del.target
```

  

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>The following file is reserved because the Xen driver needs to be invoked and the system cannot respond to the  **Ctrl+Alt+Del**  operation. Therefore, there is no impact.  
>/usr/lib/systemd/system/ctrl-alt-del.target  

