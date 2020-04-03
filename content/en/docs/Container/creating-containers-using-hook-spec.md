# Creating Containers Using hook-spec<a name="EN-US_TOPIC_0184808227"></a>

## Principles and Application Scenarios<a name="en-us_topic_0182302401_section17774133012472"></a>

Docker supports the extended features of hooks. The execution of hook applications and underlying runC complies with the OCI standards. For details about the standards, visit  [https://github.com/opencontainers/runtime-spec/blob/master/config.md\#hooks](https://github.com/opencontainers/runtime-spec/blob/master/config.md#hooks).

There are three types of hooks: prestart, poststart, and poststop. They are respectively used before applications in the container are started, after the applications are started, and after the applications are stopped.

## API Reference<a name="en-us_topic_0182302401_section163912517476"></a>

The  **--hook-spec**  parameter is added to the  **docker run**  and  **create**  commands and is followed by the absolute path of the  **spec**  file. You can specify the hooks to be added during container startup. These hooks will be automatically appended after the hooks that are dynamically created by Docker \(currently only libnetwork prestart hook\) to execute programs specified by users during the container startup or destruction.

The structure of  **spec**  is defined as follows:

```
// Hook specifies a command that is run at a particular event in the lifecycle of a container
type Hook struct{       
               Path    string   `json:"path"`    
               Args    []string `json:"args,omitempty"`    
               Env     []string `json:"env,omitempty"`      
               Timeout *int     `json:"timeout,omitempty"`
}
// Hooks for container setup and teardown
type  Hooks struct{
               // Prestart is a list of hooks to be run before the container process is executed.
               // On Linux, they are run after the container namespaces are created.         
               Prestart []Hook `json:"prestart,omitempty"`
               // Poststart is a list of hooks to be run after the container process is started.         
               Poststart []Hook `json:"poststart,omitempty"`
               // Poststop is a list of hooks to be run after the container process exits.         
               Poststop []Hook `json:"poststop,omitempty"`
}
```

-   The  **Path**,  **Args**, and  **Env**  parameters are mandatory.
-   **Timeout**  is optional, while you are advised to set this parameter to a value ranging from 1 to 120. The parameter type is int. Floating point numbers are not allowed.
-   The content of the  **spec**  file must be in JSON format as shown in the preceding example. If the format is incorrect, an error is reported.
-   Both  **docker run --hook-spec /tmp/hookspec.json **_xxx_, and  **docker create --hook-spec /tmp/hookspec.json **_xxx_** && docker start **_xxx_  can be used.

## Customizing Hooks for a Container<a name="en-us_topic_0182302401_section379153820471"></a>

Take adding a NIC during the startup as an example. The content of the  **hook spec**  file is as follows:

```
{
    "prestart": [
         {
             "path": "/var/lib/docker/hooks/network-hook",             
             "args": ["network-hook", "tap0", "myTap"],             
             "env": [],
             "timeout": 5
         }
     ],
     "poststart":[],     
     "poststop":[]
}
```

Specify prestart hook to add the configuration of a network hook. The path is  **/var/lib/docker/hooks/network-hook**.  **args**  indicates the program parameters. Generally, the first parameter is the program name, and the second parameter is the parameter accepted by the program. For the network-hook program, two parameters are required. One is the name of the NIC on the host, and the other is the name of the NIC in the container.

  

-   Precautions
    1.  The  **hook**  path must be in the** hooks**  folder in the  **graph**  directory \(**--graph**\) of Docker. Its default value is  **/var/lib/docker/hooks**. You can run the  **docker info**  command to view the root path.

        ```
        [root@localhost ~]# docker info 
        ... 
        Docker Root Dir: /var/lib/docker 
        ...
        ```

        This path may change due to the user's manual configuration and the use of user namespaces \(**daemon --userns-remap**\). After the symbolic link of the path is parsed, the parsed path must start with  _Docker Root Dir_**/hooks**  \(for example,  **/var/lib/docker/hooks**\). Otherwise, an error message is displayed.

    2.  The  **hook**  path must be an absolute path because daemon cannot properly process a relative path. In addition, an absolute path meets security requirements.
    3.  The information output by the hook program to stderr is output to the client and affects the container lifecycle \(for example, the container may fail to be started\). The information output to stdout is ignored.
    4.  Do not reversely call Docker instructions in hooks.
    5.  The execute permission must have been granted on the configured hook execution file. Otherwise, an error is reported during hook execution.
    6.  The execution time of the hook operation must be as short as possible. If the prestart period is too long \(more than 2 minutes\), the container startup times out. If the poststop period is too long \(more than 2 minutes\), the container is abnormal.

        The known exceptions are as follows: When the  **docker stop**  command is executed to stop a container and the clearing operation is performed after 2 minutes, the hook operation is not complete. Therefore, the system waits until the hook operation is complete \(the process holds a lock\). As a result, all operations related to the container stop responding. The operations can be recovered only after the hook operation is complete. In addition, the two-minute timeout processing of the  **docker stop**  command is an asynchronous process. Therefore, even if the  **docker stop**  command is successfully executed, the container status is still  **up**. The container status is changed to  **exited**  only after the hook operation is completed.



-   Suggestions
    1.  You are advised to set the hook timeout threshold to a value less than 5s.
    2.  You are advised to configure only one prestart hook, one poststart hook, and one poststop hook for each container. If too many hooks are configured, the container startup may take a long time.
    3.  You are advised to identify the dependencies between multiple hooks. If required, you need to adjust the sequence of the hook configuration files according to the dependencies. The execution sequence of hooks is based on the sequence in the configured  **spec**  file.


## Multiple  **hook-spec**<a name="en-us_topic_0182302401_section117021756114712"></a>

If multiple hook configuration files are available and you need to run multiple hooks, you must manually combine these files into a configuration file and specify the new configuration file by using the  **--hook-spec**  parameter. Then all hooks can take effect. If multiple  **--hook-spec**  parameters are configured, only the last one takes effect.

Configuration examples:

The content of the  **hook1.json**  file is as follows:

```
# cat /var/lib/docker/hooks/hookspec.json 
{
    "prestart": [
        {
            "path": "/var/lib/docker/hooks/lxcfs-hook",             
            "args": ["lxcfs-hook", "--log", "/var/log/lxcfs-hook.log"],             
            "env": []
        }
     ],     
     "poststart":[],     
     "poststop":[]
}
```

The content of the  **hook2.json**  file is as follows:

```
# cat /etc/isulad-tools/hookspec.json 
{
      "prestart": [
         {
               "path": "/docker-root/hooks/docker-hooks",             
               "args": ["docker-hooks", "--state", "prestart"],             
               "env": []
         }
       ],     
       "poststart":[],     
       "poststop":[
          {
               "path": "/docker-root/hooks/docker-hooks",             
               "args": ["docker-hooks", "--state", "poststop"],             
               "env": []
          }
        ]
}
```

The content in JSON format after manual combination is as follows:

```
{
       "prestart":[
          {
                "path": "/var/lib/docker/hooks/lxcfs-hook",             
                "args": ["lxcfs-hook", "--log", "/var/log/lxcfs-hook.log"],             
                "env": []
           },         
           {
                "path": "/docker-root/hooks/docker-hooks",             
                "args": ["docker-hooks", "--state", "prestart"],             
                "env": []
           }
        ],     
        "poststart":[],     
        "poststop":[
            {
                "path": "/docker-root/hooks/docker-hooks",             
                "args": ["docker-hooks", "--state", "poststop"],             
                "env": []
            }
         ]
}
```

Docker daemon reads the binary values of hook in actions such as prestart in the hook configuration files in sequence based on the array sequence and executes the actions. Therefore, you need to identify the dependencies between multiple hooks. If required, you need to adjust the sequence of the hook configuration files according to the dependencies.

## Customizing Default Hooks for All Containers<a name="en-us_topic_0182302401_section2667144518474"></a>

Docker daemon can receive the  **--hook-spec**  parameter. The semantics of  **--hook-spec**  is the same as that of  **--hook-spec**  in  **docker create**  or  **docker run**. You can also add hook configurations to the  **/etc/docker/daemon.json**  file.

```
{
     "hook-spec": "/tmp/hookspec.json"
}
```

When a container is running, hooks specified in  **--hook-spec**  defined by daemon are executed first, and then hooks customized for each container are executed.

