#  pkgship

[[toc]]

## 介绍

pkgship是一款管理OS软件包依赖关系，提供依赖和被依赖关系完整图谱的查询工具，能提供软件包依赖查询、生命周期管理、补丁查询等功能。

- 软件包依赖查询：方便社区人员在软件包引入、更新和删除的时候了解软件的影响范围。
- 补丁查询：方便社区人员了解openEuler软件包的补丁情况以及提取补丁内容，详细内容请参见[patch-tracking](./../userguide/patch-tracking.md)。

## 架构

系统采用flask-restful开发，架构图如下。

![avatar](./images/packagemanagement.png)

## 软件下载

- Repo源挂载正式发布地址：https://repo.openeuler.org/
- 源码获取地址：https://gitee.com/openeuler/pkgship
- rpm包版本获取地址：https://117.78.1.88/project/show/openEuler:Mainline

## 运行环境

- 可用内存700M以上
- python版本 3.8及以上
- Elasticsearch 版本7.10.1
- Redis

## 安装工具

**1、pkgship工具安装**

您可通过如下两种方式完成工具安装。

- 通过dnf挂载repo源实现
    先使用dnf挂载pkgship软件在所在repo源（具体方法可参考[应用开发指南](./../ApplicationDev/开发环境准备.md)），然后执行如下指令下载以及安装pkgship及其依赖。

    ```
    dnf install pkgship
    ```

- 通过安装rpm包实现 
    先下载pkgship的rpm包，然后执行如下命令进行安装（其中“x.x-x”表示版本号，请用实际情况代替）。

    ```
    rpm -ivh pkgship-x.x-x.oe1.noarch.rpm
    ```

    或者

    ```
    dnf install pkgship-x.x-x.oe1.noarch.rpm
    ```

**2、Elasticsearch和Redis安装**

如果环境没有安装Elasticsearch或者Redis，可以在pkgship安装之后执行以下自动化脚本来安装。

脚本路径默认为`/etc/pkgship/auto_install_pkgship_requires.sh`，您可执行如下命令安装Elasticsearch或者Redis。

- 安装Elasticsearch

    ```
    /bin/bash auto_install_pkgship_requires.sh elasticsearch
    ```

- 安装Redis

    ```
    /bin/bash auto_install_pkgship_requires.sh redis
    ```

## 配置参数

1. 系统的默认配置文件存放在 `/etc/pkgship/packge.ini`，请根据实际情况对相应参数进行配置。

```
vim /etc/pkgship/package.ini
[SYSTEM-系统配置]
; 初始化数据库时导入的yaml文件存放位置，该yaml中记录导入的sqlite文件位置。
init_conf_path=/etc/pkgship/conf.yaml

; 数据库端口。
query_port=8090

; 数据库ip地址。
query_ip_addr=127.0.0.1

; 远程服务的地址，命令行可以直接调用远程服务来完成数据请求。
remote_host=https://api.openeuler.org/pkgmanage

; 初始化和下载临时文件存放目录，不会长时间占用，建议可用空间至少1G。
temporary_directory=/opt/pkgship/tmp/

[LOG-日志]
; 业务日志存放路径。
log_path=/var/log/pkgship/

; 打印日志级别，支持如下：
; INFO DEBUG WARNING ERROR CRITICAL
log_level=INFO

[UWSGI-Web服务器配置]
; 操作日志路径。
daemonize=/var/log/pkgship-operation/uwsgi.log
; 前后端传输数据大小。
buffer-size=65536
; 网络连接超时时间。
http-timeout=600
; 服务响应时间。
harakiri=600

[REDIS-缓存配置]
; Redis缓存服务器的地址可以是已发布的可以正常访问的域或IP地址。
;链接地址默认为127.0.0.1
redis_host=127.0.0.1

;Redis缓存服务器的端口，默认为6379
redis_port=6379

;Redis服务器一次允许的最大连接数
redis_max_connections=10

[DATABASE-数据库]
;数据库类型，默认为elastic，目前只支持elasticsearch
database_engine_type=elastic

;数据库访问地址，默认为本机地址
database_host=127.0.0.1

;数据库访问端口，默认为9200
database_port=9200
```

2. 您可根据如下示例创建初始化数据库的yaml文件`conf.yaml`,文件默认存放在 `/etc/pkgship/` 路径下，pkgship会通过该配置读取要建立的数据库名称以及需要导入的sqlite文件，也支持配置sqlite文件所在的repo地址。

```
dbname: openEuler-20.03   #数据库名称
src_db_file: /etc/pkgship/repo/openEuler-20.09/src  #源码包所在的本地路径
bin_db_file: /etc/pkgship/repo/openEuler-20.09/bin  #二进制包所在的本地路径
priority: 1 #数据库优先级

dbname: openEuler-20.09
src_db_file: https://repo.openeuler.org/openEuler-20.09/source  #源码包所在的repo源
bin_db_file: https://repo.openeuler.org/openEuler-20.09/everything/aarch64 #二进制包所在的repo源
priority: 2
```

> **说明：**
> 如需更改存放路径，请更改package.ini下的 init_conf_path 选项。
> 不支持直接配置sqlite文件路径。

## 服务启动和停止

pkgship有systemctl和pkgshipd两种启停方式，其中systemctl方式启动可以有异常停止自启动的机制。

- systemctl方式启停命令为：
    ```
    systemctl start pkgship.service 
    systemctl stop pkgship.service 
    systemctl restart pkgship.service 
    ```
- pkgshipd启停命令为：
    ```
    pkgshipd start
    pkgshipd stop
    ```

>**说明：** 
> 每次起停周期内仅支持一种方式，不允许两种操作同时使用。

## 工具使用

1. 数据库初始化

   > 使用场景：服务启动后，为了能查询对应的数据库（比如openEuler-20.09， openEuler-21.03）中的包信息及包依赖关系，需要将这些数据库通过createrepo生成的sqlite（分为源码库和二进制库）导入进服务内，生成对应的包信息json体然后插入Elasticsearch对应的数据库中。数据库名为根据config.yaml中配置的dbname生成的dbname-source/binary，[-filepath]为可选参数。

   ```
   pkgship init [-filepath path]
   ```

   > 参数说明：
   > -filepath：指定初始化配置文件config.yaml的路径，可以使用相对路径和绝对路径，不带参数则使用默认配置初始化。

2. 单包查询

   用户可查询源码包或者二进制包(packagename)在指定数据库表（database）中的具体信息。

   > 使用场景：用户可查询源码包或者二进制包在指定数据库中的具体信息，packagename,database为必选参数,-s为可选参数。

   ```
   pkgship pkginfo $packageName $database [-s]
   ```

   > 参数说明：
   > packagename：指定要查询的软件包名。
   > database：指定具体的数据库名称。
   >
   > -s: 指定`-s`将查询的是`src`源码包信息;若未指定 默认查询`bin`二进制包信息

3. 所有包查询

   查询数据库下包含的所有包的信息。

   > 使用场景：用户可查询指定数据库下包含的所有软件包信息。其中tablename为必选参数，-s为可选参数。

   ```
   pkgship list $database [-s]
   ```

   > 参数说明：
   > database：指定具体的数据库名称。
   > -s: 指定`-s`将查询的是`src`源码包信息;若未指定 默认查询`bin`二进制包信息

4. 安装依赖查询

   查询二进制包(binaryName)的安装依赖。

   > 使用场景：用户需要安装某个二进制包A时，需要将该二进制包A的安装依赖B，及B的安装依赖C等等，直至所有的安装依赖全部安装到系统才能成功安装二进制包A。因此，在用户安装二进制包A之前，可能会需要查询二进制包A的所有安装依赖。该命令提供了此功能，允许用户根据平台默认的优先级在多个数据库之间进行查询；同时也支持用户自定义数据库查询优先级。

   ```
   pkgship installdep [$binaryName $binaryName1 $binaryName2...] [-dbs] [db1 db2...] [-level] $level
   ```

   > 参数说明：
   > binaryName：需要查询安装的依赖的二进制包名字,支持传多个；必传参数。
   >
   > -dbs： 指定需要查询的database优先级,不传按照系统默认优先级搜索；可选参数。
   >
   > -level：指定需要查询的依赖层级,不传默认为0，查询所有层级；可选参数。

5. 编译依赖查询

   查询源码包(sourceName)的所有编译依赖。

   > 使用场景：用户要编译某个源码包A的时候，需要安装源码包A的编译依赖B, 要成功安装编译依赖B需要获取B的所有安装依赖。因此，在用户编译源码包A之前，可能会需要查询源码包的编译依赖以及这些编译依赖的所有安装依赖。该命令提供了此功能，允许用户根据平台默认的优先级在多个数据库之间进行查询;同时也支持用户自定义数据库查询优先级。

   ```
   pkgship builddep [$sourceName $sourceName1 $sourceName2..] -dbs [db1 db2 ..] [-level] $level
   ```

   > 参数说明：
   > sourceName：需要查询编译依赖的源码包名字,支持多个查询；必传参数。
   >
   > -dbs： 指定需要查询的database优先级,不传按照系统默认优先级搜索；可选参数。
   >
   > -level：指定需要查询的依赖层级,不传默认为0，查询所有层级；可选参数。

6. 自编译自安装依赖查询

   查询指定二进制包(binaryName)或源码包(sourceName )的安装及编译依赖，其中[pkgName]为查询的二进制包或者源码包的名称。当查询二进制包时，可以查询到该二进制包的所有安装依赖以及该二进制包对应的源码包的编译依赖，及这些编译依赖的所有安装依赖；当查询源码包时，可以查询该源码包的编译依赖，及这些编译依赖的所有安装依赖，并且查询该源码包生成的所有二进制包的所有安装依赖。同时，配合对应参数使用，该命令也支持查询软件包的自编译依赖查询，和包含子包的依赖查询。

   > 使用场景：如果开发者想在现有的版本库的基础上引入新的软件包，应同时引入该软件包的所有编译、安装依赖。该命令提供开发者一个同时查询这两种依赖关系的功能，能让开发者知晓该软件包会引入哪些其他的包，该命令支持查询二进制包和源码包。

   ```
    pkgship selfdepend [$pkgName1 $pkgName2 $pkgName3 ..] [-dbs] [db1 db2..] [-b] [-s] [-w]
   ```

   > 参数说明：
   >
   > pkgName：需要查询安装的依赖的二进制包名字,支持传多个；必传参数。
   >
   > -dbs： 指定需要查询的database优先级,不传按照系统默认优先级搜索；可选参数。
   >
   > -b：指定`-b`表示查询的包是二进制,不指定默认查询源码包；可选参数。
   >
   > -s： 指定-s表示查询软件包的所有安装依赖和所有编译依赖（即编译依赖的源码包的编译依赖），以及所有编译依赖的安装依赖；如果不增加-s参数表示只查询软件包的所有安装依赖和一层编译依赖，以及一层编译依赖的所有安装依赖；可选参数。
   >
   > -w：指定-s表示引入某个二进制包的时候，查询结果会显示出该二进制包对应的源码包以及该源码包生成的所有二进制包；如果不指定-w参数表示引入某个二进制包的时候，查询结果只显示对应的源码包；可选参数。

7. 被依赖查询
   查询源码包(sourceName)在某数据库(dbName)中被哪些包所依赖。

   > 使用场景：针对软件源码包A，在升级或删除的情况下会影响哪些软件包，可通过该命令查询。该命令会显示源码包A生成的所有二进制包被哪些源码包（比如B）编译依赖，被哪些二进制包（比如C1）安装依赖；以及B生成的二进制包及C1被哪些源码包（比如D）编译依赖，被哪些二进制包（比如E1）安装依赖，以此类推，遍历这些二进制包的被依赖。

   ```
    pkgship bedepend dbName [$pkgName1 $pkgName2 $pkgName3] [-w] [-b] [-install/build]
   ```

   > 参数说明:
   >
   > dbName：需要查询依赖关系的仓库，不支持多个；必选参数。
   >
   > -w ：当不指定-w 时，查询结果默认不包含对应二进制包的子包；当命令后指定配置参数[-w] 时，不仅会查询二进制包C1的被依赖关系，还会进一步去查询C1对应的源码包C生成的其他二进制包（比如：C2,C3）的被依赖关系；可选参数。
   >
   > -b：指定`-b`表示查询的包是二进制,默认查询源码包；可选参数。
   >
   > -install/build：指定`-install`表示查询的是安装被依赖,指定`-build`表示查询的是编译被依赖，默认查全部, 不能`-install`和`-build`同时存在；可选参数。

8. 数据库信息

   > 使用场景，查看Elasticsearch中初始化了哪些数据库，该功能会按照优先级顺序返回已经初始化的数据库列表。

   `pkgship db`

9. 获取版本号

   > 使用场景：获取pkgship软件的版本号。

   `pkgship -v`