# Usage Guide<a name="EN-US_TOPIC_0184808149"></a>

Use  **--security-opt**  to transfer the configuration file to the container where system calls need to be filtered.

```
isula run -itd --security-opt seccomp=/path/to/seccomp/profile.json rnd-dockerhub.huawei.com/official/busybox
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>1.  When the configuration file is transferred to the container by using  **--security-opt**  during container creation, the default configuration file \(**/etc/isulad/seccomp\_default.json**\) is used.  
>2.  When  **--security-opt**  is set to  **unconfined**  during container creation, system calls are not filtered for the container.  
>3.  **/path/to/seccomp/profile.json**  must be an absolute path.  

## Obtaining the Default Seccomp Configuration of a Common Container<a name="en-us_topic_0183112366_section16304185318140"></a>

-   Start a common container \(or a container with  **--cap-add**\) and check its default permission configuration.

    ```
    cat /etc/isulad/seccomp_default.json | python -m json.tool > profile.json
    ```

    The  **seccomp**  field contains many  **syscalls**  fields. Then extract only the  **syscalls**  fields and perform the customization by referring to the customization of the seccomp configuration file.

    ```
    "defaultAction": "SCMP_ACT_ERRNO",
    "syscalls": [
    {
    "action": "SCMP_ACT_ALLOW",
    "name": "accept"
    },
    {
    "action": "SCMP_ACT_ALLOW",
    "name": "accept4"
    },
    {
    "action": "SCMP_ACT_ALLOW",
    "name": "access"
    },
    {
    "action": "SCMP_ACT_ALLOW",
    "name": "alarm"
    },
    {
    "action": "SCMP_ACT_ALLOW",
    "name": "bind"
    },
    ]...
    ```


-   Check the seccomp configuration that can be identified by the LXC.

    ```
    cat /var/lib/isulad/engines/lcr/74353e38021c29314188e29ba8c1830a4677ffe5c4decda77a1e0853ec8197cd/seccomp
    ```

    ```
    ...
    waitpid allow
    write allow
    writev allow
    ptrace allow
    personality allow [0,0,SCMP_CMP_EQ,0]
    personality allow [0,8,SCMP_CMP_EQ,0]
    personality allow [0,131072,SCMP_CMP_EQ,0]
    personality allow [0,131080,SCMP_CMP_EQ,0]
    personality allow [0,4294967295,SCMP_CMP_EQ,0]
    ...
    ```


## Customizing the Seccomp Configuration File<a name="en-us_topic_0183112366_section1684042215"></a>

When starting a container, use  **--security-opt**  to introduce the seccomp configuration file. Container instances will restrict the running of system APIs based on the configuration file. Obtain the default seccomp configuration of common containers, obtain the complete template, and customize the configuration file by referring to this section to start the container.

```
isula run --rm -it --security-opt seccomp:/path/to/seccomp/profile.json rnd-dockerhub.huawei.com/official/busybox
```

The configuration file template is as follows:

```
{
"defaultAction": "SCMP_ACT_ALLOW",
"syscalls": [
{
"name": "syscall-name",
"action": "SCMP_ACT_ERRNO",
"args": null
}
]
}
```

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>-   **defaultAction**  and  **syscalls**: The types of their corresponding actions are the same, but their values must be different. The purpose is to ensure that each syscall has a default action. Clear definitions in the syscall array shall prevail. As long as the values of  **defaultAction**  and  **action**  are different, no action conflicts will occur. The following actions are supported:  
>    **SCMP\_ACT\_ERRNO**: forbids calling syscalls and displays error information.  
>    **SCMP\_ACT\_ALLOW**: allows calling syscalls.  
>-   **syscalls**: array, which can contain one or more syscalls.  **args**  is optional.  
>-   **name**: syscalls to be filtered.  
>-   **args**: array. The definition of each object in the array is as follows:  
>    ```  
>    type Arg struct {  
>    Index    uint     `json:"index"`     // Parameter ID. Take open(fd, buf, len) as an example. The fd corresponds to 0 and buf corresponds to 1.  
>    Value    uint64   `json:"value"`     // Value to be compared with the parameter.  
>    ValueTwo uint64   `json:"value_two"` // It is valid only when Op is set to MaskEqualTo. After the bitwise AND operation is performed on the user-defined value and the value of Value, the result is compared with the value of ValueTwo. If they are the same, the action is executed.  
>    Op       Operator `json:"op"`  
>    }  
>    ```  
>    The value of  **Op**  in  **args**  can be any of the following:  
>    "SCMP\_CMP\_NE":  NotEqualTo  
>    "SCMP\_CMP\_LT":  LessThan  
>    "SCMP\_CMP\_LE":  LessThanOrEqualTo  
>    "SCMP\_CMP\_EQ":  EqualTo  
>    "SCMP\_CMP\_GE":  GreaterThanOrEqualTo  
>    "SCMP\_CMP\_GT":  GreaterThan  
>    "SCMP\_CMP\_MASKED\_EQ": MaskEqualTo  

