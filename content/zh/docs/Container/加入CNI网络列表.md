# 加入CNI网络列表<a name="ZH-CN_TOPIC_0184808074"></a>

如果iSulad配置了--network-plugin=cni，而且设置了default网络平面配置，那么在启动Pod的时候，会自动把Pod加入到default网络平面。如果在Pod的配置中配置了附加网络配置，那么启动Pod的时候也会把Pod加入到这些附加网络平面中。

Pod配置中和网络相关的还有port\_mappings项，用于设置Pod的端口映射关系。配置方式如下：

```
"port_mappings":[
     { 
         "protocol": 1,
         "container_port": 80,
         "host_port": 8080
      }
]
```

-   protocal：表示映射使用的协议，支持tcp（用0标识）、udp（用1标识）；
-   container\_port：表示容器映射出去的port；
-   host\_port：表示映射到主机的port。

