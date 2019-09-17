# docker-engine容器引擎的配置<a name="ZH-CN_TOPIC_0184808166"></a>

为了让docker-engine容器引擎支持新的容器运行时kata-runtime，需要通过以下步骤对docker-engine容器引擎进行配置：

1.  请保证环境上所有的软件包（docker-engine、kata-containers）都已经安装完毕。
2.  停止docker-engine。

    ```
    systemctl stop docker
    ```

3.  修改docker-engine的配置文件/etc/docker/daemon.json，并新增如下配置：

    ```
    {
      "runtimes": {
        "kata-runtime": {
          "path": "/usr/bin/kata-runtime",
          "runtimeArgs": [
              "--kata-config",
              "/usr/share/defaults/kata-containers/configuration.toml"
            ]
        }
      }
    }
    ```

4.  重新启动docker-engine。

    ```
    systemctl start docker
    ```


