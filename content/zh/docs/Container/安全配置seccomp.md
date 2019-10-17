# 安全配置seccomp<a name="ZH-CN_TOPIC_0184808205"></a>

在做容器网络性能测试时发现，Docker相对于原生内核namespace性能有所下降，经分析开启seccomp后，系统调用（如：sendto）不会通过system\_call\_fastpath进行，而是调用tracesys，这会带来性能大幅下降。因此，建议在有高性能要求的业务的容器场景下关闭seccomp，示例如下：

```
docker run -itd --security-opt seccomp=unconfined busybox:latest
```

