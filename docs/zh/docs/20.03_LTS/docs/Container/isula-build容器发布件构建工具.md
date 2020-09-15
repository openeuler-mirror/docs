# isula-build: 容器发布件构建工具

## 概述

isula-build是iSula容器团队推出的容器发布件构建工具，安装部署过程简单，目前支持通过Dockerfile文件快速构建容器镜像。

isula-build采用服务端/客户端模式，其中，isula-build为客户端，提供了命令行工具，isula-builder 服务端常驻后台，处理客户端请求。

## 安装 isula-build

- yum安装

  推荐该方式，只需要配置openEuler yum源即可。

  ```sh
  sudo yum install -y isula-build
  ```
  
- rpm包安装

  ```sh
  sudo rpm -ivh isula-build-*.rpm
  ```

说明：

isula-build 构建 Dockerfile 内的 RUN 指令时依赖可执行文件 runc ，需要 isula-build 的运行环境上预装好 runc。安装方式视用户使用场景而定，如果用户不需要使用完整的 docker-engine 工具链，则可以仅安装 docker-runc rpm包：

```sh
sudo yum install -y docker-runc
```

如果用户同样会使用完整的 docker-engine 工具链，则可以安装 docker-engine rpm包，它同样会包含可执行文件 runc ：

```sh
sudo yum install -y docker-engine
```



## 简单的使用示例

以下提供一个简单的使用示例，介绍从Dockerfile文件的编写，到通过它进行容器镜像的构建，到查看构建完成之后的容器镜像，最终将它从本地进行删除。

1. 新建一个目录，在该目录下创建 Dockerfile 文件，内容如下：


```dockerfile
FROM alpine:latest
LABEL foo=bar
COPY ./* /home/dir1/
```

2. 在该目录下使用 isula-build 构建镜像，过程如下：

```sh
$ sudo isula-build ctr-img build -f dockerfile .
STEP  1: FROM alpine:latest
STEP  2: LABEL foo=bar
STEP  3: COPY ./* /home/dir1/
Getting image source signatures
Copying blob sha256:e9235582825a2691b1c91a96580e358c99acfd48082cbf1b92fd2ba4a791efc3
Copying blob sha256:dc3bca97af8b81508c343b13a08493c7809b474dc25986fcbae90c6722201be3
Copying config sha256:9ec92a8819f9da1b06ea9ff83307ff859af2959b70bfab101f6a325b1a211549
Writing manifest to image destination
Storing signatures
Build success with image id: 9ec92a8819f9da1b06ea9ff83307ff859af2959b70bfab101f6a325b1a211549
```

3. 列出所构建镜像。

```sh
$ sudo isula-build ctr-img images
-----------------  -----------  ----------------  ----------------------------------------------    
    REPOSITORY         TAG          IMAGE ID                       CREATED        
------------------  ----------  ----------------  ----------------------------------------------       
       foo            latest      9ec92a8819f9        2020-06-11 07:45:39.265106109 +0000 UTC
```

4. 删除镜像。

```sh
$ sudo isula-build ctr-img rm 9ec92a8819f9
Deleted: sha256:86567f7a01b04c662a9657aac436e8d63ecebb26da4252abb016d177721fa11b
```



## 使用指南

### 配置 isula-build 服务端

在安装完 isula-build 软件包之后，systemd 管理服务会以 isula-build 软件包自带的 isula-build 服务端默认配置启动 isula-build 服务。如果 isula-build 服务端的默认配置文件不能满足用户的需求，可以参考如下介绍进行定制化配置。需要注意的是，修改完默认配置之后，需要重启 isula-build 服务端使新配置生效，具体操作可参考下一章节。

目前 isula-build 服务端包含如下配置文件：

- /etc/isula-build/configuration.toml：isula-builder 总体配置文件，用于设置 isula-builder 日志级别、持久化目录和运行时目录、OCI runtime等。其中各参数含义如下：
  - debug：设置是否打开debug日志，可选参数：true、false。
  - loglevel：设置日志级别，可选参数：“debug”、“info”、“warn”、“error”。
  - run_root：设置运行时数据根目录。
  - data_root：设置本地持久化目录。
  - runtime：设置runtime种类，目前支持runc。

- /etc/isula-build/storage.toml: 本地持久化存储的配置文件，包含所使用的存储驱动的配置。
  - driver：存储驱动类型，目前支持overlay2。
  
    更多设置可参考 [containers-storage.conf.5.md](https://github.com/containers/storage/blob/master/docs/containers-storage.conf.5.md)。
  
- /etc/isula-build/registries.toml : 针对各个镜像仓库的配置文件。
  - registries.search：镜像仓库搜索域，在此list的镜像仓库可以被感知，不在此列的不被感知。
  - registries.insecure：可访问的不安全镜像仓库地址，在此列表中的镜像仓库将不会通过鉴权，不推荐使用。
 
    更多设置可参考 [containers-registries.conf.5.md](https://github.com/containers/image/blob/master/docs/containers-registries.conf.5.md)。
  
- /etc/isula-build/policy.json：镜像pull/push策略文件。注：当前不支持对其进行配置

说明：以上配置文件，isula-build 支持最大 1M 的配置文件。

### 管理 isula-build 服务端

目前 openEuler 采用 systemd 管理软件服务，isula-build 软件包已经自带了 systemd 的服务文件，用户安装完 isula-build 软件包之后可以直接通过 systemd 工具对它进行服务启停等操作。用户同样可以手动启动 isula-build 服务端软件。需要注意的是，同一个节点上不可以同时启动多个 isula-build 服务端软件。

#### 通过 systemd 管理

用户可以通过如下 systemd 的标准指令控制 isula-build 服务的启动、停止、重启等动作：

- 启动 isula-build 服务：

```sh
sudo systemctl start isula-build.service
```

- 停止 isula-build 服务：

```sh
sudo systemctl stop isula-build.service
```

- 重启 isula-builder 服务：

```sh
sudo systemctl restart isula-build.service
```


isula-build 软件包安装的 systemd 服务文件保存在 `/usr/lib/systemd/system/isula-build.service`。如果用户需要修改 isula-build 服务的 systemd 配置，可以修改该文件，执行如下命令使配置生效，之后再根据上面提到的 systemd 管理指令重启 isula-build 服务

```sh
sudo systemctl daemon-reload
```

#### 直接运行 isula-build 服务端

通过手动运行 isula-build 服务端的方式启动 isula-builder，可通过直接配置 isula-build 服务端的 flag 对其进行设置，例如：

```sh
sudo isula-builder --dataroot "/var/lib/isula-build" --debug=false
```

isula-build 服务端目前支持的flags如下：

- -D, --debug: 是否开启调测模式。
- --log-level: 日志级别，支持 "debug", "info", "warn" or "error"，默认为 "info"。
- --dataroot: 本地持久化路径，默认为"/var/lib/isula-build/"。
- --runroot: 运行时路径，默认为"/var/run/isula-build/"。
- --storage-driver：底层存储驱动类型。
- --storage-opt: 底层存储驱动配置。

说明：当命令行启动参数中传递了与配置文件相同的配置选项，优先使用命令行参数启动。



### isula-build 子命令使用

目前 isula-build 提供如下命令行指令：

- ctr-img，容器镜像管理。含如下子命令
  - build，根据给定dockerfile构建出容器镜像。
  - images，列出本地容器镜像。
  - import，导入容器基础镜像。
  - load，导入层叠镜像。
  - rm，删除本地容器镜像。
  - save, 导出层叠镜像至本地磁盘。
  - tag，给本地容器镜像打tag。

- info，查看isula-build的运行环境和系统信息。
- login，登录远端容器镜像仓库。
- logout，退出远端容器镜像仓库。
- version，查看isula-build和isula-builder的版本号。

以下按照上述维度依次详细介绍这些命令行指令的使用。

#### ctr-img: 容器镜像管理

isula-build 将所有容器镜像管理相关命令划分在子命令 `ctr-img` 下，命令原型为：

```
isula-build ctr-img [command]
```



##### build: 容器镜像构建

```
isula-build ctr-img build
```

其中 build 包含如下 flags：

1. --build-arg：string列表，构建过程中需要用到的变量。
2. --build-static：KV值，构建二进制一致性。目前包含如下K值：
   1. build-time：string，使用固定时间戳来构建容器镜像；时间戳格式为“YYYY-MM-DD HH-MM-SS”。
3. -f, --filename：string，Dockerfile的路径，不指定则是使用当前路径的Dockerfile文件。
4. --iidfile：string，输出 image ID 到本地文件。
5. -o, --output：string，镜像导出的方式和路径。
6. --proxy：布尔值，继承主机侧环境的proxy环境变量（默认为true）。
7. --tag：string，设置构建成功的镜像的tag值。
8. --cap-add：string列表，构建过程中RUN指令所需要的权限。

以下为各个 flags 的详解。

- **--build-arg**

  从命令行接受参数作为Dockerfile中的参数，用法：

  ```
  isula-build ctr-img build --build-arg foo=bar -f Dockerfile
  ```

  ```
  $ echo "This is bar file" > bar.txt
  $ cat Dockerfile_arg
  FROM busybox
  ARG foo
  ADD ${foo}.txt .
  RUN cat ${foo}.txt
  $ sudo isula-build ctr-img build --build-arg foo=bar -f Dockerfile_arg
  STEP  1: FROM busybox
  Getting image source signatures
  Copying blob sha256:8f52abd3da461b2c0c11fda7a1b53413f1a92320eb96525ddf92c0b5cde781ad
  Copying config sha256:e4db68de4ff27c2adfea0c54bbb73a61a42f5b667c326de4d7d5b19ab71c6a3b
  Writing manifest to image destinationStoring signatures
  STEP  2: ARG foo
  STEP  3: ADD ${foo}.txt .
  STEP  4: RUN cat ${foo}.txt
  This is bar file
  Getting image source signatures
  Copying blob sha256:6194458b07fcf01f1483d96cd6c34302ffff7f382bb151a6d023c4e80ba3050a
  Copying blob sha256:6bb56e4a46f563b20542171b998cb4556af4745efc9516820eabee7a08b7b869
  Copying config sha256:39b62a3342eed40b41a1bcd9cd455d77466550dfa0f0109af7a708c3e895f9a2
  Writing manifest to image destination
  Storing signatures
  Build success with image id: 39b62a3342eed40b41a1bcd9cd455d77466550dfa0f0109af7a708c3e895f9a2
  ```

- **--build-static**

  指定为静态构建，则isula-build会消除所有时间戳差异，同时消除其他构建过程差异，包括：容器ID、hsotname等, 最终构建出能满足BEP要求的容器镜像。

  在使用isula-build进行容器镜像构建时，假如给 build 子命令一个固定的时间戳，并在限定如下条件的时候：

  - 构建环境前后保持一致。
  - 构建Dockerfile前后保持一致。
  - 构建产生的中间数据前后保持一致。
  - 构建命令相同。
  - 第三方库版本一致。

  对于容器镜像构建，isula-build支持相同的Dockerfile。如果构建环境相同，则多次构建生成的镜像内容和镜像ID相同。

  --build-static接受k=v形式的键值对选项，当前支持的选项有：

  - build-time：字符串类型。构建静态镜像的固定时间戳，格式为“YYYY-MM-DD HH-MM-SS”。时间戳影响diff层创建修改时间的文件属性。

    使用示例如下：

    ```sh
    $ sudo isula-build ctr-img build -f Dockerfile --build-static='build-time=2020-05-23 10:55:33' .
    ```

    以此方式，同一环境多次构建出来的容器镜像和镜像ID均会保持一致。

- **--iidfile**

  将构建的镜像ID输出到文件，用法：

  ```
  isula-build ctr-img build --iidfile filename
  ```
  
  使用示例如下：

  ```sh
  $ sudo isula-build ctr-img build -f Dockerfile_arg --iidfile testfile
  
  $ cat testfile
  76cbeed38a8e716e22b68988a76410eaf83327963c3b29ff648296d5cd15ce7b
  ```

- **-o, --output**

  目前 -o, --output 支持如下形式：

  - `isulad:image:tag`：将构建成功的镜像直接推送到 iSulad。比如：`-o isulad:busybox:latest`。同时需要注意如下约束：
    - isula-build 和 iSulad 必须在同一个节点上
    - tag必须配置
    - isula-build client端需要将构建成功的镜像暂存成 `/var/tmp/isula-build-tmp-%v.tar` 再导入至 iSulad，用户需要保证 `/var/tmp/` 目录有足够磁盘空间
  - `docker-daemon:image:tag`：将构建成功的镜像直接推送到 Docker daemon。比如：`-o docker-daemon:busybox:latest`。同时需要注意如下约束：
    - isula-build 和 docker 必须在同一个节点上
    - tag必须配置
  - `docker://registry.example.com/repository:tag`：将构建成功的镜像直接推送到远端镜像仓库。比如：`-o docker://localhost:5000/library/busybox:latest`。
  - `docker-archive:<path>/<filename>:image:tag`：将构建成功的镜像以Docker image的格式保存至本地。比如：`-o docker-archive:/root/image.tar:busybox:latest`。

  除去各个flags之外，build子命令的命令行最后还会接收一个argument，该argument类型是string，意义为context，即该Dockerfile构建环境的上下文。该参数默认值为isula-build被执行的当前路径。该路径会影响 .dockerignore 和 Dockerfile的ADD/COPY指令 所检索的路径。

- **--proxy**

  选择构建时RUN指令启动的容器是否从环境上继承proxy相关环境变量"http_proxy","https_proxy","ftp_proxy","no_proxy","HTTP_PROXY","HTTPS_PROXY","FTP_PROXY","NO_PROXY"，默认为true。

  当用户在Dockerfile配置proxy相关ARG或ENV，将覆盖所继承的环境变量。

  注意：若client与daemon不在同一个终端运行，所能继承的环境变量为daemon所在终端的环境变量。

- **--tag**

  设置镜像构建成功之后，该镜像在本地磁盘存储时的tag。

- **--cap-add**

  添加构建过程中RUN指令所需权限，用法：

  ```
  isula-build ctr-img build --cap-add CAP_SYS_ADMIN --cap-add CAP_SYS_PTRACE -f Dockerfile
  ```

说明：

isula-build最大支持并发构建100个容器镜像、支持Dockerfile最大1M、支持 .dockerignore 最大 1M

##### image: 查看本地持久化构建镜像

可通过images命令查看当前本地持久化存储的镜像：

```sh
$ sudo isula-build ctr-img images
----------------------------------------------  -----------  -----------------  --------------------------  ------------ 
REPOSITORY                                      TAG          IMAGE ID           CREATED                     SIZE
----------------------------------------------  -----------  -----------------  --------------------------  ------------ 
localhost:5000/library/alpine                   latest       a24bb4013296       2020-20-19 19:59:197        5.85 MB 
<none>                                          <none>       39b62a3342ee       2020-20-38 38:66:387        1.45 MB
----------------------------------------------  -----------  -----------------  --------------------------  ------------
```

##### import: 导入容器基础镜像

openEuler会随版本发布一个容器基础镜像，比如openEuler-docker.x86_64.tar.xz。可以通过ctr-img import指令将它导入。

命令原型如下：

```
isula-build ctr-img import [flags]
```

使用举例：

```sh
$ sudo isula-build ctr-img import ./openEuler-docker.x86_64.tar.xz openeuler:20.03
Import success with image id: 7317851cd2ab33263eb293f68efee9d724780251e4e92c0fb76bf5d3c5585e37
$ sudo isula-build ctr-img images
----------------------------------------------  --------------------  -----------------  ------------------------  ------------ 
REPOSITORY                                      TAG                   IMAGE ID           CREATED                   SIZE
----------------------------------------------  --------------------  -----------------  ------------------------  ------------ 
openeuler                                       20.03                 7317851cd2ab       2020-08-01 06:25:34       500 MB
----------------------------------------------  --------------------  -----------------  ------------------------  ------------
```

说明：

isula-build 支持导入最大1G的容器基础镜像

##### load: 导入层叠镜像

层叠镜像指的是通过 docker save 或 isula-build ctr-img save 等指令，将一个构建完成的镜像保存至本地之后，镜像压缩包内是一层一层 layer.tar 的镜像包。可以通过 ctr-img load 指令将它导入至 isula-build。

命令原型如下：

```
isula-build ctr-img load [flags]
```

使用示例如下：

```sh
$ sudo isula-build ctr-img load -i ubuntu.tarGetting image source signatures
Copying blob sha256:cf612f747e0fbcc1674f88712b7bc1cd8b91cf0be8f9e9771235169f139d507c
Copying blob sha256:f934e33a54a60630267df295a5c232ceb15b2938ebb0476364192b1537449093
Copying blob sha256:943edb549a8300092a714190dfe633341c0ffb483784c4fdfe884b9019f6a0b4
Copying blob sha256:e7ebc6e16708285bee3917ae12bf8d172ee0d7684a7830751ab9a1c070e7a125
Copying blob sha256:bf6751561805be7d07d66f6acb2a33e99cf0cc0a20f5fd5d94a3c7f8ae55c2a1
Copying blob sha256:c1bd37d01c89de343d68867518b1155cb297d8e03942066ecb44ae8f46b608a3
Copying blob sha256:a84e57b779297b72428fc7308e63d13b4df99140f78565be92fc9dbe03fc6e69
Copying blob sha256:14dd68f4c7e23d6a2363c2320747ab88986dfd43ba0489d139eeac3ac75323b2
Copying blob sha256:a2092d776649ea2301f60265f378a02405539a2a68093b2612792cc65d00d161
Copying blob sha256:879119e879f682c04d0784c9ae7bc6f421e206b95d20b32ce1cb8a49bfdef202
Copying blob sha256:e615448af51b848ecec00caeaffd1e30e8bf5cffd464747d159f80e346b7a150
Copying blob sha256:f610bd1e9ac6aa9326d61713d552eeefef47d2bd49fc16140aa9bf3db38c30a4
Copying blob sha256:bfe0a1336d031bf5ff3ce381e354be7b2bf310574cc0cd1949ad94dda020cd27
Copying blob sha256:f0f15db85788c1260c6aa8ad225823f45c89700781c4c793361ac5fa58d204c7
Copying config sha256:c07ddb44daa97e9e8d2d68316b296cc9343ab5f3d2babc5e6e03b80cd580478e
Writing manifest to image destination
Storing signatures
Loaded image as c07ddb44daa97e9e8d2d68316b296cc9343ab5f3d2babc5e6e03b80cd580478e
```

说明：

- isula-build load命令仅支持导入包含单个层叠镜像的镜像压缩文件
- isula-build 支持导入最大50G的容器层叠镜像

##### rm: 删除本地持久化镜像

可通过rm命令删除当前本地持久化存储的镜像。命令原型为：

```
isula-build ctr-img rm IMAGE [IMAGE...] [FLAGS]
```

目前支持的 flags 为：

- -a, --all：删除所有本地持久化存储的镜像。

- -p, --prune：删除所有没有tag的本地持久化存储的镜像。

使用示例如下：

```sh
$ sudo isula-build ctr-img rm -p
Deleted: sha256:78731c1dde25361f539555edaf8f0b24132085b7cab6ecb90de63d72fa00c01d
Deleted: sha256:eeba1bfe9fca569a894d525ed291bdaef389d28a88c288914c1a9db7261ad12c
```

##### save: 导出层叠镜像

可通过save命令导出层叠镜像到本地磁盘。命令原型如下：

```
isula-build ctr-img save [REPOSITORY:TAG]|imageID -o xx.tar
```

以下示例通过 `image/tag` 的形式将镜像进行导出：

```sh
$ sudo isula-build ctr-img save busybox:latest -o busybox.tar
Getting image source signatures
Copying blob sha256:50644c29ef5a27c9a40c393a73ece2479de78325cae7d762ef3cdc19bf42dd0a
Copying blob sha256:824082a6864774d5527bda0d3c7ebd5ddc349daadf2aa8f5f305b7a2e439806f
Copying blob sha256:5f70bf18a086007016e948b04aed3b82103a36bea41755b6cddfaf10ace3c6ef
Copying config sha256:21c3e96ac411242a0e876af269c0cbe9d071626bdfb7cc79bfa2ddb9f7a82db6
Writing manifest to image destination
Storing signatures
Save success with image: busybox:latest
```

以下示例通过 `ImageID` 的形式将镜像进行导出：

```sh
$ sudo isula-build ctr-img save 21c3e96ac411 -o busybox.tar
Getting image source signatures
Copying blob sha256:50644c29ef5a27c9a40c393a73ece2479de78325cae7d762ef3cdc19bf42dd0a
Copying blob sha256:824082a6864774d5527bda0d3c7ebd5ddc349daadf2aa8f5f305b7a2e439806f
Copying blob sha256:5f70bf18a086007016e948b04aed3b82103a36bea41755b6cddfaf10ace3c6ef
Copying config sha256:21c3e96ac411242a0e876af269c0cbe9d071626bdfb7cc79bfa2ddb9f7a82db6
Writing manifest to image destination
Storing signatures
Save success with image: 21c3e96ac411
```

#### info: 查看运行环境与系统信息

可以通过“isula-build info”指令查看 isula-build 目前的运行环境与系统信息。命令原型如下：

```
isula-build info [flags]
```

支持如下Flags：

- -H, --human-readable  布尔值，以常用内存表示格式打印内存信息，使用1000次幂

使用示例：

```sh
  $ sudo 
  isula-build info -H
  General:  
    MemTotal:     7.63 GB  
    MemFree:      757 MB  
    SwapTotal:    8.3 GB  
    SwapFree:     8.25 GB  
    OCI Runtime:  runc  
    DataRoot:     /var/lib/isula-build/  
    RunRoot:      /var/run/isula-build/  
    Builders:     0  
    Goroutines:   12
  Store:  
    Storage Driver:     overlay  
    Backing Filesystem: extfs
  Registry:  
    Search Registries:   
      oepkgs.net
    Insecure Registries:    
      localhost:5000    
      oepkgs.net
```

#### login: 登录远端镜像仓库

用户可以运行 login 命令来登录远程镜像仓库。命令原型如下：

```
isula-build login SERVER [FLAGS]
```

目前支持的flag有：

```
Flags:  
  -p, --password-stdin    Read password from stdin  
  -u, --username string   Username to access registry
```

通过stdin输入密码：

```sh
$ cat creds.txt | sudo isula-build login -u cooper -p mydockerhub.io
Login Succeeded
```

通过交互式输入密码：

```sh
$ sudo isula-build login mydockerhub.io -u cooper
Password:
Login Succeeded
```

#### logout: 退出远端镜像仓库

用户可以运行 logout 命令来登出远程镜像仓库。命令原型如下：

```
isula-build logout [SERVER] [FLAGS]
```

目前支持的flag有：

```
Flags:  
  -a, --all   Logout all registries
```

使用示例如下：

```sh
$ sudo isula-build logout -a  
  Removed authentications
```

#### version: 版本查询

可通过version命令查看当前版本信息：

```sh
$ sudo isula-build version
Client:
  Version:       0.9.2
  Go Version:    go1.13.3
  Git Commit:    ccb2a13
  Built:         Sat Aug 22 08:06:47 2020
  OS/Arch:       linux/amd64

Server:
  Version:       0.9.2
  Go Version:    go1.13.3
  Git Commit:    ccb2a13
  Built:         Sat Aug 22 08:06:47 2020
  OS/Arch:       linux/amd64
```



说明：

isula-build completion 和 isula-builder completion 命令用于生成bash命令补全脚本。该命令为命令行框架隐式提供，不会显示在help信息中。



### 直接集成容器引擎

isula-build可以与iSulad和docker集成，将构建好的容器镜像导入到容器引擎的本地存储中。

#### 与iSulad集成

支持将构建成功的镜像直接导出到iSulad。命令行举例：

```sh
$ sudo isula-build ctr-img build -f Dockerfile -o isulad:busybox:2.0
```

通过在-o参数中指定iSulad，将构建好的容器镜像导出到iSulad，可以通过isula images查询。

说明：

要求isula-build和iSulad在同一节点。

#### 与Docker集成

支持将构建成功的镜像直接导出到Docker daemon。命令行举例：

```sh
$ sudo isula-build ctr-img build -f Dockerfile -o docker-daemon:busybox:2.0
```

通过在-o参数中指定docker-daemon，将构建好的容器镜像导出到docker, 可以通过docker images查询。

说明：

要求isula-build和Docker在同一节点。



## 使用注意事项

本章节主要介绍在使用 isula-build 工具时相关的约束和限制，以及与 docker 相关指令上的行为差异。

### 约束和限制

1. 直接导出镜像到iSulad或docker daemon时，必须指定tag。
2. 直接导出镜像到iSulad时，isula-build client端需要将构建成功的镜像暂存成 `/var/tmp/isula-build-tmp-%v.tar` 再导入至 iSulad，用户需要保证 /var/tmp/ 目录有足够磁盘空间；同时如果在导出过程中 isula-build client进程被KILL或Ctrl+C终止，需要依赖用户手动清理 `/var/tmp/isula-build-tmp-%v.tar` 文件。
3. 用户需保证OCI runtime(runc)可执行文件的安全性，避免被恶意替换。
4. isula-build不支持将持久化工作目录dataroot配置在内存盘上，比如tmpfs。
5. isula-build目前仅支持使用overlay2为底层graphdriver。
6. isula-build当前仅支持Docker镜像。
7. 用户需保证Dockerfile文件的权限为仅当前用户可读写，避免别的用户进行篡改。
8. 目前仅支持使用主机网络。
9. 导出的镜像压缩格式，目前仅支持tar.gz格式。
10. stage name不能以数字开头、stage name的长度限制为64个字符

### 与docker差异

- isula-build 兼容 dockerfile 语法，但与 docker build 所支持的指令和构建行为相比，存在如下差异：
  - isula-build 在每一个镜像构建stage完成后做一次提交，而不是每执行 Dockerfile的一行就提交一次。
  - isula-build 暂不支持构建缓存。
  - isula-build 仅在构建RUN指令时会启动构建容器。
  - 目前不支持docker镜像格式的history功能。
  - isula-build 的stage name支持以数字开头。
  - isula-build 的stage name最长可为64个字符。
  - isula-build 暂不支持对单次Dockerfile的构建进行资源限制。如有资源限制需求，可通过对 isula-builder 服务端配置资源限额的方式进行限制。
- isula-build 与 docker 其它指令的差异如下：
  - 通过`isula-build ctr-img images`查看的镜像大小与`docker images`的显示上有一定差异。这是因为统计镜像大小时，isula-build是直接计算每层tar包大小之和，而docker是通过解压tar遍历diff目录计算文件大小之和，因此存在统计上的差异。

### 与Dockerfile语法上的差异

- isula-build 目前不支持Dockerfile里的ADD指令提供的数据来源是远端url。

   
  

## 附录

### 命令行参数说明

**表1** ctr-img build 命令参数列表

| **命令**      | **参数**       | **说明**                                                     |
| ------------- | -------------- | ------------------------------------------------------------ |
| ctr-img build | --build-arg    | string列表，构建过程中需要用到的变量                         |
|               | --build-static | KV值，构建二进制一致性。目前包含如下K值：- build-time：string，使用固定时间戳来构建容器镜像；时间戳格式为“YYYY-MM-DD HH-MM-SS” |
|               | -f, --filename | string，Dockerfile的路径，不指定则是使用当前路径的Dockerfile文件 |
|               | --iidfile      | string，输出 image ID 到本地文件                             |
|               | -o, --output   | string，镜像导出的方式和路径                                 |
|               | --proxy        | 布尔值，继承主机侧环境的proxy环境变量（默认为true）          |
|               | --tag          | string，给构建的镜像添加tag                                  |
|               | --cap-add      | string列表，构建过程中RUN指令所需要的权限                    |

**表2** ctr-img load 命令参数列表

| **命令**     | **参数**    | **说明**                          |
| ------------ | ----------- | --------------------------------- |
| ctr-img load | -i, --input | string，需要导入的本地tar包的路径 |

**表3** ctr-img rm 命令参数列表

| **命令**   | **参数**    | **说明**                                      |
| ---------- | ----------- | --------------------------------------------- |
| ctr-img rm | -a, --all   | 布尔值，删除所有本地持久化存储的镜像          |
|            | -p, --prune | 布尔值，删除所有没有tag的本地持久化存储的镜像 |

**表4** ctr-img save 命令参数列表

| **命令**     | **参数**     | **说明**                           |
| ------------ | ------------ | ---------------------------------- |
| ctr-img save | -o, --output | string，镜像导出后在本地的存储路径 |

**表5** login 命令参数列表

| **命令** | **参数**             | **说明**                                                |
| -------- | -------------------- | ------------------------------------------------------- |
| login    | -p, --password-stdin | 布尔值，是否通过stdin读入密码；或采用交互式界面输入密码 |
|          | -u, --username       | string，登陆镜像仓库所使用的用户名                      |

**表6** logout 命令参数列表

| **命令** | **参数**  | **说明**                             |
| -------- | --------- | ------------------------------------ |
| logout   | -a, --all | 布尔值，是否登出所有已登陆的镜像仓库 |

### 通信矩阵

isula-build两个组件进程之间通过unix socket套接字文件进行通信，无端口通信。

### 文件与权限

- isula-build 所有的操作均需要使用 root 权限。


   
