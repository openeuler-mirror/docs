# isula-transform 容器迁移工具

isula-transform 容器迁移工具配合 iSulad 2.0 推出。用于将 Docker 容器引擎拉起的容器转换迁移到 iSulad 引擎管理。迁移完成后，可以通过 iSulad 完成容器生命周期管理等功能。

<!-- TOC -->

* [快速引导](#快速引导)
    * [安装部署](#安装部署)
    * [使用示例](#使用示例)
* [使用指南](#使用指南)
    * [用法介绍](#用法介绍)
    * [参数说明](#参数说明)
    * [注意事项](#注意事项)
* [附录](#附录)
    * [通信矩阵及权限说明](#通信矩阵及权限说明)
        * [通信矩阵](#通信矩阵)
        * [文件与权限](#文件与权限)

<!-- /TOC -->

## 快速引导

### 安装部署

安装 isula-transform 可参考如下方法：

- yum 安装（推荐）

  ``` shell
  sudo yum install -y isula-transform
  ```

* rpm 安装

  ``` shell
  sudo rpm -ivh isula-transform-0.9.1-1.oe1.x86_64.rpm
  ```

  说明：isula-transform 运行依赖于 isulad 和 docker-engine，采用 rpm 安装时请确保环境中已安装 isulad 和 docker-engine。


### 使用示例

这里给出将 Docker 容器引擎拉起的容器迁移到 iSulad 引擎管理的示例。

1. 以 host 网络启动一个 Docker 容器，并挂载数据卷。

    ``` shell
    $ mkdir /tmp/test && echo "hello isula 2.0" > /tmp/test/hello.txt
    $ sudo docker run -tid --network host -v /tmp/test:/test rnd-dockerhub.huawei.com/official/ubuntu bash
    b7ebc79a83297d781069308311cd1456539ab663fc284c80386a941af1a78685
    $ sudo docker exec b7ebc7 cat /test/hello.txt
    hello isula 2.0
    $ sudo docker exec b7ebc7 bash -c "echo 'hello isula-transform' > /root/world.txt"
    $ sudo docker exec b7ebc7 cat /root/world.txt
    hello isula-transform
    ```

2. 使用 isula-transform 工具迁移该容器(指定容器 id 前几位或全 id)。

    ``` shell
    $ sudo isula-transform b7ebc7
    transform b7ebc7: success
    ```

3. 重启 isulad，可查看到该容器。

    ``` shell
    $ systemctl restart isulad && sudo isula ps -a
    CONTAINER ID    IMAGE                                       COMMAND CREATED         STATUS                      PORTS   NAMES
    b7ebc79a8329    rnd-dockerhub.huawei.com/official/ubuntu    "bash"  8 minutes ago   Exited (0) 2 minutes ago            inspiring_dirac
    ```

4. 启动容器并检查数据。容器启动成功且数据完整，说明容器迁移成功。

    ``` shell
    $ sudo isula start b7ebc7
    $ sudo isula exec b7ebc7 cat /test/hello.txt
    hello isula 2.0
    $ sudo isula exec b7ebc7 cat /root/world.txt
    hello isula-transform
    ```

5. 删除容器。

    ``` shell
    $ sudo isula rm -f b7ebc7
    b7ebc79a83297d781069308311cd1456539ab663fc284c80386a941af1a78685
    $ sudo isula ps -a
    CONTAINER ID    IMAGE   COMMAND CREATED STATUS  PORTS   NAMES
    ```

## 使用指南

### 用法介绍

isula-transform 支持两种用法:

1. 迁移指定容器

    通过指定容器 id 的形式，isula-transform 可以迁移指定的 Docker 容器，用法如下：

    ``` shell
    isula-transform [OPTIONS] container_id [container_id...]
    ```

    可同时指定多个容器 id，支持短 id 格式，但需要保证短 id 唯一性。

2. 迁移所有容器

    通过配置 --all 参数，isula-transform 将会迁移所有 running 和 pause 状态的 Docker 容器，用法如下：

    ``` shell
    isula-transform [OPTIONS] --all 
    ```

    若指定 --all 参数后同时指定了容器 id，isula-transform 会忽略传入的容器 id。

其他可配置参数请参见 [参数说明](#参数说明)。

### 参数说明

用法介绍中的OPTIONS 为 isula-transform 的可选参数，具体含义请参见下表。

| 参数           | 说明                                                         |
| -------------- | :----------------------------------------------------------- |
| --log          | 指定日志文件的路径, 未配置取默认值 /var/log/isula-kits/transform.log                                           |
| --log-level    | 指定输出日志的最低级别，可配置项目包括：debug info warn error，默认为 info 级别 |
| --docker-graph | docker graph 路径，未配置取默认值 /var/lib/docker            |
| --docker-state | docker state 路径，未配置取默认值 /var/run/docker            |


### 注意事项

- isula-transform 适用非集群场景，Kubernetes 等集群场景下，建议配置 iSulad 引擎之后拉起新容器。
- isula-transform 目前支持对 Docker 18.09 版本创建的容器进行迁移，容器需要处于 running 或者 pause 状态。
- isula-transform 完成迁移后原 Docker 容器会处于 pause 状态，由用户决定原 Docker 容器的生命周期。
- isula-transform 要求被迁移的 Docker 容器以 --network=host 启动， 或者复用以 host 网络启动的容器的网络栈。后者场景中，两个容器均需要被迁移，且迁移后需要首先启动父容器。
- 涉及到共享 namespace （pid，ipc）和 cgroup 嵌套（cgroup-parent）时，父子容器均需要被迁移，且迁移后需要首先启动父容器。
- iSula 容器相对于 Docker 容器不支持的配置参数，isula-transform 迁移后会丢弃。

## 附录

### 通信矩阵及权限说明

#### 通信矩阵

isula-transform 运行时会作为客户端访问服务端 dockerd，isula-transform 和 dockerd 之间通过 unix socket 套接字文件进行通信，路径如下：

|服务端|socket 路径|
|---|:---|
|dockerd|/var/run/docker.sock|

#### 文件与权限

- isula-transform 运行需要 root 权限。
- isula-transform 运行涉及文件权限如下表所示：

    |文件路径|权限|说明|
    |:---|---|:---|
    |/usr/bin/isula-transform|0550|可执行二进制文件|
    |/var/log/isula-kits/transform.log|0600|isula-transform 默认日志文件|
