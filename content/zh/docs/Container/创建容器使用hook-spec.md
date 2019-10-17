# 创建容器使用hook-spec<a name="ZH-CN_TOPIC_0184808227"></a>

## 原理及使用场景<a name="zh-cn_topic_0182302401_section17774133012472"></a>

docker支持hook的扩展特性，hook应用与底层runc的执行过程中，遵循OCI标准：[https://github.com/opencontainers/runtime-spec/blob/master/config.md\#hooks](https://github.com/opencontainers/runtime-spec/blob/master/config.md#hooks)  。

hook主要有三种类型：prestart，poststart，poststop。分别作用于容器内用户应用程序启动之前，容器应用程序启动之后，容器应用程序停止之后。

## 接口参考<a name="zh-cn_topic_0182302401_section163912517476"></a>

当前为docker run和create命令增加了参数“--hook-spec”，后面接spec文件的绝对路径，可以指定容器启动时的需要添加的hook，这些hook会自动附加在docker自己动态创建的hook后面（当前docker只有一个libnetwork的prestart hook），随容器的启动/销毁过程执行用户指定的程序。

spec的结构体定义为：

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

-   Spec文件的path、args、env 都是必填信息；
-   Timeout选填\(建议配置\)，参数类型为int，不接受浮点数，范围为\[1, 120\]。
-   Spec内容应该是json格式的，格式不对会报错，示例参考前面。
-   使用的时候既可以\`docker run --hook-spec /tmp/hookspec.json xxx\`, 也可以 \`docker create --hook-spec /tmp/hookspec.json xxx && docker start xxx\`。

## 为容器定制特有的hook<a name="zh-cn_topic_0182302401_section379153820471"></a>

以启动过程中添加一个网卡的过程来说明。下面是相应的hook spec文件内容：

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

指定prestart hook增加一个网络hook的执行。路径是/var/lib/docker/hooks/network-hook，args代表程序的参数，第一个参数一般是程序名字，第二个是程序接受的参数。对于network-hook这个hook程序，需要两个参数，第一个是主机上的网卡名字，第二个是在容器内的网卡重命名。

-   注意事项
    1.  hook path必须为docker的graph目录（--graph）下的hooks文件夹下，默认一般为 /var/lib/docker/hooks，可以通过docker info命令查看root路径。

        ```
        [root@localhost ~]# docker info 
        ... 
        Docker Root Dir: /var/lib/docker 
        ...
        ```

        这个路径可能会跟随用户手动配置，以及user namespace的使用（daemon --userns-remap）而变化。 path进行软链接解析后，必须以Docker Root Dir/hooks开头（如本例中使用 /var/lib/docker/hooks开头），否则会直接报错。

    2.  hooks path必须指定绝对路径，因为这个是由daemon处理，相对路径对daemon无意义。同时绝对路径也更满足安全要求。
    3.  hook程序打印到stderr的输出会打印给客户端并对容器的声明周期产生影响（比如启动失败），而输出到stdout的打印信息会被直接忽略。
    4.  严禁在hook里反向调用docker的指令。
    5.  配置的hook执行文件必须要有可执行权限，否则hook执行会报错。
    6.  使用hook时，执行时间应尽量短。如果hook中的prestart时间过长（超过2分钟），则会导致容器启动超时失败，如果hook中的poststop时间过长（超过2分钟），也会导致容器异常。

        目前已知的异常如下：执行docker stop命令停止容器时，2分钟超时执行清理时，由于hook还没执行结束，因此会等待hook执行结束（该过程持有锁），从而导致和该容器相关的操作都会卡住，需要等到hook执行结束才能恢复。另外，由于docker stop命令的2分钟超时处理是异步的过程，因此即使docker stop命令返回了成功，容器的状态也依然是up状态，需要等到hook执行完后状态才会修改为exited。



-   使用建议
    1.  建议配置hook的Timeout超时时间阈值，超时时间最好在5s以内。
    2.  建议不要配置过多hook，每个容器建议prestart、poststart、poststop这三个hook都只配置一个，过多hook会导致启动时间长。
    3.  建议用户识别多个hook之间的依赖关系，如果存在依赖关系，在组合hook配置文件时要根据依赖关系灵活调整顺序，hook的执行顺序是按照配置的spec文件上的先后顺序。


## 多个hook-spec<a name="zh-cn_topic_0182302401_section117021756114712"></a>

当有多个hook配置文件，要运行多个hook时，用户必须自己手工将多个hook配置文件组合成一个配置文件，使用--hook-spec参数指定此合并后的配置文件，方可生效所有的hook；如果配置多个--hook-spec参数，则只有最后一个生效。

配置举例：

hook1.json内容如下：

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

hook2.json内容如下：

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

手工合并后的json内容如下：

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

需要注意的是，docker daemon会按照数组顺序依次读取hook配置文件中prestart等action中的hook二进制，进行执行动作。用户需要识别多个hook之间的依赖关系，如果有依赖关系，在组合hook配置文件时要根据依赖关系灵活调整顺序。

## 为所有容器定制默认的hook<a name="zh-cn_topic_0182302401_section2667144518474"></a>

Docker daemon同样可以接收--hook-spec的参数，--hook-spec的语义与docker create/run的--hook-spec参数相同，这里不再复述。也可以在/etc/docker/daemon.json里添加hook配置：

```
{
     "hook-spec": "/tmp/hookspec.json"
}
```

容器在运行时，会首先执行daemon定义的--hook-spec中指定的hooks，然后再执行每个容器单独定制的hooks。

