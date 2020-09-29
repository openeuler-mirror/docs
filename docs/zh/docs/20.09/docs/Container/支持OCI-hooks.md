# 支持OCI hooks

## 描述

支持在容器的生命周期中，运行OCI标准hooks。包括三种类型的hooks：

-   prestart hook：在执行isula start命令之后，而在容器的1号进程启动之前，被执行。
-   poststart hook：在容器1号进程启动之后，而在isula start命令返回之前，被执行。
-   poststop hook：在容器被停止之后，但是在停止命令返回之前，被执行。

OCI hooks的配置格式规范如下：

-   path：格式是字符串，必须项，必须为绝对路径，指定的文件必须有可执行权限。
-   args：格式是字符串数组，可选项，语义和execv的args一致。
-   env：格式是字符串数组，可选项，语义和环境变量一致，内容为键值对，如："PATH=/usr/bin"。
-   timeout：格式是整数，可选项，必须大于0，表示钩子执行的超时时间。如果钩子进程运行时间超过配置的时间，那么钩子进程会被杀死。

hook的配置为json格式，一般存放在json结尾的文件中，示例如下：

```
{
        "prestart": [
            {
                "path": "/usr/bin/echo",
                "args": ["arg1", "arg2"],
                "env":  [ "key1=value1"],
                "timeout": 30
            },
            {
                "path": "/usr/bin/ls",
                "args": ["/tmp"]
            }
        ],
        "poststart": [
            {
                "path": "/usr/bin/ls",
                "args": ["/tmp"],
                "timeout": 5
            }
        ],
        "poststop": [
            {
                "path": "/tmp/cleanup.sh",
                "args": ["cleanup.sh", "-f"]
            }
        ]
}
```

## 接口

isulad和isula都提供了hook的接口，isulad提供了默认的hook配置，会作用于所有容器；而isula提供的hook接口，只会作用于当前创建的容器。

isulad提供的默认OCI hooks配置：

-   通过/etc/isulad/daemon.json配置文件的hook-spec配置项设置hook配置的文件路径："hook-spec": "/etc/default/isulad/hooks/default.json"。
-   通过isulad --hook-spec参数设置hook配置的文件路径。

isula提供的OCI hooks配置：

-   isula create --hook-spec：指定hook配置的json文件的路径。
-   isula run --hook-spec：指定hook配置的json文件的路径。

run的配置其实也是在create阶段生效了。

## 使用限制

-   hook-spec指定的路径必须是绝对路径。
-   hook-spec指定的文件必须存在。
-   hook-spec指定的路径对应的必须是普通文本文件，格式为json。
-   hook-spec指定的文件大小不能超过10MB。
-   hooks配置的path字段必须为绝对路径。
-   hooks配置的path字段指定文件必须存在。
-   hooks配置的path字段指定文件必须有可执行权限。
-   hooks配置的path字段指定文件的owner必须是root。
-   hooks配置的path字段指定文件必须只有root有写权限。
-   hooks配置的timeout必须大于0。

      


