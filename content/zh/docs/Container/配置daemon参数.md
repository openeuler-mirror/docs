# 配置daemon参数<a name="ZH-CN_TOPIC_0184808196"></a>

可以通过在/etc/docker/daemon.json文件中添加配置项自定义配置参数，相关配置项以及如何使用可以通过dockerd --help查看。配置示例如下：

```
cat /etc/docker/daemon.json 
{        
    "debug": true,        
    "storage-driver": "overlay2",        
    "storage-opts": ["overlay2.override_kernel_check=true"] 
}
```

