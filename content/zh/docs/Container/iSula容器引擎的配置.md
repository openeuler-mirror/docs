# iSula容器引擎的配置<a name="ZH-CN_TOPIC_0226309119"></a>

与docker-engine容器引擎类似，为了让iSula容器引擎支持新的容器运行时kata-runtime，需要通过以下步骤对iSula容器引擎进行配置：

1.  请保证环境上所有的软件包（iSulad、kata-containers）都已经安装完毕。
2.  停止isulad。

    ```
    systemctl stop isulad
    ```

3.  修改iSula容器引擎的配置文件/etc/isulad/daemon.json，并新增如下配置：

    ```
    {
      "runtimes": {
        "kata-runtime": {
          "path": "/usr/bin/kata-runtime",
          "runtime-args": [
              "--kata-config",
              "/usr/share/defaults/kata-containers/configuration.toml"
            ]
        }
      }
    }
    ```

4.  重新启动isulad。

    ```
    systemctl start isulad
    ```


