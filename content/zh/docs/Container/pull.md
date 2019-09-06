# pull<a name="ZH-CN_TOPIC_0184808270"></a>

用法：**docker pull \[OPTIONS\] NAME\[:TAG\]**

功能：从一个镜像库（官方的或私有的）中拉取一个镜像

选项：

-a, --all-tags=false    下载一个镜像仓库的所有镜像（一个镜像仓库可以被打多个标签，比如一个ubuntu镜像库，可能有多个标签如ubuntu:14.04,ubuntu:13.10,ubuntu:latest等，使用-a选项后，将所有标签的ubuntu镜像拉取下来）

示例：

1.  从官方镜像库中拉取nginx镜像

    ```
    $ sudo docker pull nginx
    Using default tag: latest
    latest: Pulling from official/nginx
    94ed0c431eb5: Pull complete
    9406c100a1c3: Pull complete
    aa74daafd50c: Pull complete
    Digest: sha256:788fa27763db6d69ad3444e8ba72f947df9e7e163bad7c1f5614f8fd27a311c3
    Status: Downloaded newer image for nginx:latest
    ```

    拉取镜像时会检测所依赖的层是否存在，如果存在就用本地的层。

2.  从私有镜像库中拉取镜像

    从私有镜像库中拉取Fedora镜像，比如所使用的私有镜像库的地址是192.168.1.110:5000：

    ```
    $ sudo docker pull 192.168.1.110:5000/fedora
    ```


