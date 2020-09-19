# isula-build容器镜像构建

## 概述

### 简介

isula-build是iSula团队推出的容器镜像构建工具，安装部署过程简单，通过Dockerfile文件可以迅速构建出容器镜像。其中，isula-build提供命令行工具，isula-builder常驻后台，处理客户端请求。

- 该工具目前所支持功能：
  1. ctr-img，构建容器镜像。
     1. build，根据给定dockerfile构建出容器镜像。
     2. images，列出本地容器镜像。
     3. import，导入容器基础镜像。
     4. load，导入层叠镜像。
     5. rm，删除本地镜像。
     6. save，导出容器镜像至本地磁盘。
     7. tag，给本地容器镜像打tag。
  2. login，登陆容器镜像仓库。
  3. logout，登出容器镜像仓库。
  4. version，查看版本号。
- isula-build包含主要特性：
  1. 兼容Dockerfile语法。
  3. 支持文件系统扩展属性，如Selinux、IMA、EVM等。
  4. 支持多种镜像导出格式，可以直接将构建镜像结果推送至iSulad或docker。

### 快速引导

#### 安装部署

- rpm包安装

  ```
  sudo rpm -ivh isula-build-*.rpm && systemctl start isula-build
  ```

- yum安装

  推荐该方式，只需要配置openEuler yum源即可。

  ```
  sudo yum install -y isula-build && systemctl start isula-build
  ```

  说明：

  isula-build 构建时依赖 runc，当你安装时需要再安装单独的docker-runc或完整的docker-engine。

#### 示例

- 新建buildDir目录，在该目录下创建一个dockerfile文件，内容如下：

  ```
  FROM busybox:latest
  MAINTAINER "someone"
  RUN ["touch", "bar"]
  LABEL foo=bar
  EXPOSE 8888/udp
  EXPOSE 9999/tcp
  ENV a=hello
  ARG word
  ADD ./* /home/
  COPY ./* /home/dir1/
  VOLUME ["var/log"]
  STOPSIGNAL 15
  HEALTHCHECK  --interval=5m --timeout=3s --retries=1 
  CMD ["pwd"]
  SHELL ["pwd"]
  ```

- 在该目录下使用isula-build构建镜像，过程如下：

  ```
  $ sudo isula-build ctr-img build -f dockerfile .
  STEP  1: FROM busybox:latest
  STEP  2: MAINTAINER "someone"
  STEP  3: RUN ["touch", "bar"]
  STEP  4: LABEL foo=bar
  STEP  5: EXPOSE 8888/udp
  STEP  6: EXPOSE 9999/tcp
  STEP  7: ENV a=hello
  STEP  8: ARG word
  STEP  9: ADD ./* /home/
  STEP 10: COPY ./* /home/dir1/
  STEP 11: VOLUME ["var/log"]
  STEP 12: STOPSIGNAL 15
  STEP 13: HEALTHCHECK --interval=5m --timeout=3s --retries=1 CMD ["pwd"]
  STEP 14: SHELL ["pwd"]
  Getting image source signatures
  Copying blob sha256:e9235582825a2691b1c91a96580e358c99acfd48082cbf1b92fd2ba4a791efc3
  Copying blob sha256:dc3bca97af8b81508c343b13a08493c7809b474dc25986fcbae90c6722201be3
  Copying config sha256:9ec92a8819f9da1b06ea9ff83307ff859af2959b70bfab101f6a325b1a211549
  Writing manifest to image destination
  Storing signatures
  Build success with image id: 9ec92a8819f9da1b06ea9ff83307ff859af2959b70bfab101f6a325b1a211549
  ```

- 列出所构建镜像。

  ```
  $ sudo isula-build ctr-img images
  -----------------  -----------  ----------------  ----------------------------------------------    
      REPOSITORY         TAG          IMAGE ID                       CREATED        
  ------------------  ----------  ----------------  ----------------------------------------------       
         foo            latest      9ec92a8819f9        2020-06-11 07:45:39.265106109 +0000 UTC
  ```

- 删除镜像。

  ```
  $ sudo isula-build ctr-img rm 9ec92a8819f9
  Deleted: sha256:86567f7a01b04c662a9657aac436e8d63ecebb26da4252abb016d177721fa11b
  ```

#### 重点特性

- isula-build兼容dockerfile语法。
- isula-build可以将构建好的容器镜像直接导入到iSulad、dockerd、registry和本地tar包。

  

#### 集成

关于iSulad和docker的集成，详情见[与容器引擎集成](#与容器引擎集成)。

### 注意事项

关于相关约束限制以及与docker build的区别详情见[使用注意事项](#使用注意事项)。



## 使用指南

### 配置

isula-builder 包含如下配置文件：

- /etc/isula-build/configuration.toml：isula-builder 总配置文件，包含设置 isula-builder 日志级别、持久化目录和运行时目录、OCI runtime等。
  1. debug：设置是否打开debug日志，可选参数：true、false。
  2. loglevel：设置日志级别，可选参数：“debug”、“info”、“warn”、“error”。
  3. run_root：设置运行时数据根目录。
  4. data_root：设置本地持久化目录。
  5. runtime：设置runtime种类，目前支持runc。
- /etc/isula-build/storage.toml: 本地持久化存储的配置文件，包含所使用的存储驱动的配置。
  1. driver：存储驱动类型，目前支持overlay2。
  2. runroot：临时存储目录。
  3. graphroot：可读写的镜像存储目录。
  4. 更多设置可参考 [containers-storage.conf.5.md](https://github.com/containers/storage/blob/master/docs/containers-storage.conf.5.md)。
- /etc/isula-build/registries.toml : 针对各个镜像仓库的配置文件，含可用的镜像仓库列表、镜像仓库黑名单。
  1. registries.search：镜像仓库搜索域，在此list的镜像仓库可以被感知，不在此列的不被感知。
  2. registries.insecure：可访问的不安全镜像仓库地址，在此列表中的镜像仓库将不会通过鉴权，不推荐使用。
  3. 更多设置可参考 [containers-registries.conf.5.md](https://github.com/containers/image/blob/master/docs/containers-registries.conf.5.md)。
- /etc/isula-build/policy.json：镜像pull/push策略文件。注：当前不支持对其进行配置

在启动 isula-builder 服务之前，先对服务按需配置，在还未熟悉配置的情况下，也可以直接使用rpm包安装的默认配置直接启动服务。

说明：

以上配置文件，isula-build 支持最大 1M 的配置文件。

### 启动服务

#### 通过systemd启动

1. 配置需在上述配置文件中进行修改。

   - 启动 isula-build 服务：

     ```
     systemctl start isula-build.service
     ```

   - 停止 isula-build 服务：

     ```
     systemctl stop isula-build.service
     ```

   - 重启 isula-builder 服务：

     ```
     systemctl restart isula-build.service
     ```

   - 查看 isula-build 服务的运行日志：

     ```
     journalctl -u isula-build
     ```

2. 修改完配置文件后，需使用如下命令使配置生效。

   ```
   systemctl daemon-reload
   ```

#### 直接运行二进制启动

部分配置可通过isula-builder的flag进行设置，例如：

```
isula-builder --dataroot "/var/lib/isula-build" --debug=false
```

#### isula-builder目前支持的flags

```
      --dataroot string         persistent dir (default "/var/lib/isula-build")  
  -D, --debug                   print debugging information (default true)  
  -h, --help                    help for isula-builder      
      --log-level string        The log level to be used. Either "debug", "info", "warn" or "error". (default "info")      
      --runroot string          runtime dir (default "/var/run/isula-build")      
      --storage-driver string   storage-driver (default "overlay")      
      --storage-opt strings     storage driver option (default [overlay.mountopt=nodev])      
      --version                 version for isula-builder
```

- -d, --debug: 是否开启调测模式。
- --log-level: 日志级别，支持 "debug", "info", "warn" or "error"，默认为 "info"。
- --dataroot: 本地持久化路径，默认为"/var/lib/isula-build/"。
- --runroot: 运行时路径，默认为"/var/run/isula-build/"。
- --storage-driver：底层存储驱动类型。
- --storage-opt: 底层存储驱动配置。

当命令行启动参数中传递了与配置文件相同的配置选项，优先使用命令行参数启动。

### 子命令使用

目前 isula-build提供了如下对于容器镜像（ctr-img）操作的功能：

- build，根据给定dockerfile构建出容器镜像。
- images，列出本地容器镜像。
- import，导入容器基础镜像。
- load，导入层叠镜像。
- rm，删除本地容器镜像。
- save, 导出层叠镜像至本地磁盘。
- tag，给本地容器镜像打tag。

同时提供了如下通用指令：

- info，查看isula-build的运行环境和系统信息。
- login，登入远端容器镜像仓库。
- logout，从远端容器镜像仓库登出。
- version，查看isula-build和isula-builder的版本号。
- completion（隐式提供），生成bash环境命令补全脚本。

#### 容器镜像构建

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

    使用方式如下：

    ```
    $ sudo isula-build ctr-img build -f Dockerfile --build-static='build-time=2020-05-23 10:55:33' .
    ```

    以此方式，同一环境多次构建出来的容器镜像和镜像ID均会保持一致。

- **--iidfile**

  将构建的镜像ID输出到文件，用法：

  ```
  isula-build ctr-img build --iidfile testfile
  ```

  ```
  $ sudo isula-build ctr-img build -f Dockerfile_arg --iidfile testfile
  
  $ cat testfile
  76cbeed38a8e716e22b68988a76410eaf83327963c3b29ff648296d5cd15ce7b
  ```

- **-o, --output**

  目前 -o, --output 支持如下形式：

  - `isulad:image:tag`：将构建成功的镜像直接推送到 iSulad。比如：`-o isulad:busybox:latest`。同时需要注意如下约束：
    - isula-build 和 iSulad 必须在同一个节点上
    - tag必须配置
    - isula-build client端需要将构建成功的镜像暂存成 /var/tmp/isula-build-tmp-%v.tar 再导入至 iSulad，用户需要保证 /var/tmp/ 目录有足够磁盘空间
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

#### 查看本地持久化构建镜像

可通过images命令查看当前本地持久化存储的镜像：

```
$ sudo isula-build ctr-img images
----------------------------------------------  -----------  -----------------  --------------------------  ------------ 
REPOSITORY                                      TAG          IMAGE ID           CREATED                     SIZE
----------------------------------------------  -----------  -----------------  --------------------------  ------------ 
localhost:5000/library/alpine                   latest       a24bb4013296       2020-20-19 19:59:197        5.85 MB 
<none>                                          <none>       39b62a3342ee       2020-20-38 38:66:387        1.45 MB
----------------------------------------------  -----------  -----------------  --------------------------  ------------
```

#### 导入容器基础镜像

openEuler会随版本发布一个容器基础镜像，比如openEuler-docker.x86_64.tar.xz。可以通过ctr-img import指令将它导入。

命令原型如下：

```
isula-build ctr-img import [flags]
```

使用举例：

```
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

#### 导入层叠镜像

层叠镜像指的是通过 docker save 或 isula-build ctr-img save 等指令，将一个构建完成的镜像保存至本地之后，镜像压缩包内是一层一层 layer.tar 的镜像包。可以通过 ctr-img load 指令将它导入至 isula-build。

命令原型如下：

```
isula-build ctr-img load [flags]
```

使用举例如下：

```
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

#### 删除本地持久化镜像

可通过rm命令删除当前本地持久化存储的镜像

目前支持的flags有：

```
Flags:  
  -a, --all     remove all images  
  -h, --help    help for rm 
  -p, --prune   remove all untagged images
```

这些flags分别：

- -a, --all：删除所有本地持久化存储的镜像。

- -p, --prune：删除所有没有tag的本地持久化存储的镜像。

  使用举例：

  ```
  isula-build ctr-img rm -p
  ```

  ```
  $ sudo isula-build ctr-img rm -p
  Deleted: sha256:78731c1dde25361f539555edaf8f0b24132085b7cab6ecb90de63d72fa00c01d
  Deleted: sha256:eeba1bfe9fca569a894d525ed291bdaef389d28a88c288914c1a9db7261ad12c
  ```

#### 导出层叠镜像

可通过save命令导出层叠镜像到本地磁盘。命令原型如下：

```
isula-build ctr-img save [REPOSITORY:TAG]|imageID -o xx.tar
```

通过镜像名字/tag进行导出：

```
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

通过ImageID进行导出：

```
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

#### 查看运行环境与系统信息

可以通过“isula-build info”指令查看

命令原型如下：

```
isula-build info [flags]
```

支持如下Flags：

- -H, --human-readable  布尔值，以常用内存表示格式打印内存信息，使用1000次幂

  使用举例：

  ```
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

#### 与远程镜像仓库认证

可以通过 login 或 logout 命令来与远程镜像仓库交互

- **Login 使用**：

  ```
  isula-build login mydockerhub.io
  ```

  你可以运行 login 命令来登录远程镜像仓库

  目前支持的flag有：

  ```
  Flags:  
    -p, --password-stdin    Read password from stdin  
    -u, --username string   Username to access registry
  ```

  通过stdin输入密码：

  ```
  $ cat creds.txt | sudo isula-build login -u cooper -p mydockerhub.io
  Login Succeeded
  ```

  通过交互式输入密码：

  ```
  $ sudo isula-build login mydockerhub.io -u cooper
  Password:
  Login Succeeded
  ```

- **Logout 使用**：

  ```
  isula-build logout mydockerhub.io
  ```

  你可以运行 logout 命令来登出远程镜像仓库。

  目前支持的flag有：

  ```
  Flags:  
    -a, --all   Logout all registries
  ```

  Flags解释如下：

  -a, --all：登出所有的镜像仓库。

  ```
  $ sudo isula-build logout -a  
    Removed authentications
  ```

#### 版本查询

可通过version命令查看当前版本信息：

```
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



### 与容器引擎集成

isula-build可以与iSulad和docker集成，将构建好的容器镜像导入到容器引擎的本地存储中。

#### 与iSulad集成

支持将构建成功的镜像直接导出到iSulad。命令行举例：

```
$ sudo isula-build ctr-img build -f Dockerfile -o isulad:busybox:2.0
```

通过在-o参数中指定iSulad，将构建好的容器镜像导出到iSulad，可以通过isula images查询。

说明：

要求isula-build和iSulad在同一节点。

#### 与Docker集成

支持将构建成功的镜像直接导出到Docker daemon。命令行举例：

```
$ sudo isula-build ctr-img build -f Dockerfile -o docker-daemon:busybox:2.0
```

通过在-o参数中指定docker-daemon，将构建好的容器镜像导出到docker, 可以通过docker images查询。

说明：

要求isula-build和Docker在同一节点。



## 使用注意事项

本章节主要介绍在使用isula-build构建镜像时相关的约束和限制，以及与docker build的差异。

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

- isula-build兼容dockerfile语法，但与docker build相比，使用isula-build进行镜像构建和docker build的差异如下：
  1. 在每一个镜像构建stage完成后做一次提交，而不是按行提交。
  2. isula-build暂不支持缓存。
  3. 仅RUN指令在构建容器中执行。
  4. 目前不支持history。
  5. isula-build的stage name支持以数字开头。
  6. isula-build的stage name最长可为64个字符。
  7. ADD指令目前不支持远端URL形式。
  8. 暂不支持对单次构建进行资源限额，可采取对isula-builder配置资源限额的方式进行限制。
- isula-build与docker的其它差异如下：
  1. 统计镜像大小时，isula-build是直接计算每层tar包大小之和，而docker是通过解压tar遍历diff目录计算文件大小之和，因此通过`isula-build ctr-img images`查看的镜像大小与`docker images`的显示上有一定差异。

### 与Dockerfile语法上的差异

1. 暂不支持ADD指令提供的来源是远端url。

   

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

1. isula-build 所有的操作均需要使用 root 权限。

2. isula-build 运行涉及文件权限如下表所示：

   | **文件路径**                                | **文件/文件夹权限** | **说明**                                                     |
   | ------------------------------------------- | ------------------- | ------------------------------------------------------------ |
   | /usr/bin/isula-build                        | 550                 | 命令行工具二进制文件。                                       |
   | /usr/bin/isula-builder                      | 550                 | 服务端isula-builder进程二进制文件。                          |
   | /usr/lib/systemd/system/isula-build.service | 640                 | systemd配置文件，用于管理isula-build服务。                   |
   | /etc/isula-build/configuration.toml         | 600                 | isula-builder 总配置文件，包含设置 isula-builder 日志级别、持久化目录和运行时目录、OCI runtime等。 |
   | /etc/isula-build/policy.json                | 600                 | 签名验证策略文件的语法文件。                                 |
   | /etc/isula-build/registries.toml            | 600                 | 针对各个镜像仓库的配置文件，含可用的镜像仓库列表、镜像仓库黑名单。 |
   | /etc/isula-build/storage.toml               | 600                 | 本地持久化存储的配置文件，包含所使用的存储驱动的配置。       |
   | /var/run/isula_build.sock                   | 600                 | 服务端isula-builder的本地套接字。                            |
   | /var/lib/isula-build                        | 700                 | 本地持久化目录。                                             |
   | /var/run/isula-build                        | 700                 | 本地运行时目录。                                             |
   | /var/tmp/isula-build-tmp-*.tar              | 600                 | 镜像导出至iSulad时的本地暂存目录。                           |

   