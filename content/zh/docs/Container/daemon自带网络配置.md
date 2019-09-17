# daemon自带网络配置<a name="ZH-CN_TOPIC_0184808198"></a>

-   Docker daemon使用--bip参数指定docker0网桥的网段之后，如果在下一次重启的时候去掉--bip参数，docker0网桥会沿用上一次的--bip配置，即使重启之前已经删除docker0网桥。原因是docker会保存网络配置并在下一次重启的时候默认恢复上一次配置。
-   Docker network create 并发创建网络的时候，可以创建具有相同名字的两个网络。原因是docker network是通过id来区分的，name只是个便于识别的别名而已，不保证唯一性。
-   Docker在桥接bridge网络模式下，Docker容器是通过宿主机上的NAT模式，建立与宿主机之外世界的通信。Docker Daemon在启动一个容器时，每在宿主机上映射一个端口都会启动一个docker-proxy进程来实现访问代理。建议用户在使用这种userland-proxy时，只映射必须的端口，减少docker-proxy进行端口映射所消耗的资源。

