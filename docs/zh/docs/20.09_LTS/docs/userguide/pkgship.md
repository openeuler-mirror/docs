# pkgship

<!-- TOC -->

- [pkgship](#pkgship)
    - [介绍](#介绍)
    - [架构](#架构)
    - [软件下载](#软件下载)
    - [运行环境](#运行环境)
    - [安装工具](#安装工具)
    - [配置参数](#配置参数)
    - [服务启动和停止](#服务启动和停止)
    - [工具使用](#工具使用)

<!-- /TOC -->

## 介绍
pkgship是一款管理OS软件包依赖关系，提供依赖和被依赖关系完整图谱的查询工具，pkgship提供软件包依赖查询、生命周期管理、补丁查询等功能。

1. 软件包依赖查询：方便社区人员在软件包引入、更新和删除的时候了解软件的影响范围。
2. 生命周期管理：跟踪上游软件包发布状态，方便维护人员了解当前软件状态，及时升级到合理的版本。
3. 补丁查询：方便社区人员了解openEuler软件包的补丁情况以及提取补丁内容，详细内容请参见[patch-tracking](./patch-tracking.md)。

## 架构

系统采用flask-restful开发，使用SQLAlchemy ORM查询框架。

![avatar](./images/pkgship_outline.png)

## 软件下载

* Repo源挂载正式发布地址：<https://repo.openeuler.org/>
* 源码获取地址：<https://gitee.com/openeuler/openEuler-Advisor/tree/master/packageship>
* rpm包版本获取地址：<https://117.78.1.88/project/show/openEuler:Mainline>

## 运行环境

* 可用内存700M以上
* python版本 3.8及以上
* sqlite版本 3.32及以上

## 安装工具
工具安装可通过以下两种方式中的任意一种实现。

* 方法一，通过dnf挂载repo源实现。  
 先使用dnf挂载pkgship软件在所在repo源（具体方法可参考[应用开发指南](https://openeuler.org/zh/docs/20.09/docs/ApplicationDev/%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87.html)），然后执行如下指令下载以及安装pkgship及其依赖。

    ```bash
    dnf install pkgship
    ```
* 方法二，通过安装rpm包实现。
 先下载pkgship的rpm包，然后执行如下命令进行安装（其中“x.x-x”表示版本号，请用实际情况代替）。

    ```bash
    rpm -ivh pkgship-x.x-x.oe1.noarch.rpm
    ```

    或者

    ```bash
    dnf install pkgship-x.x-x.oe1.noarch.rpm
    ```

## 配置参数

1. 在配置文件中对相应参数进行配置，系统的默认配置文件存放在 /etc/pkgship/packge.ini，请根据实际情况进行配置更改。

    ```basn
    vim /etc/pkgship/package.ini
    ```

    ```ini
    [系统配置]

    ; 初始化数据库时导入的yaml文件存放位置，该yaml中记录导入的sqlite文件位置
    init_conf_path=/etc/pkgship/conf.yaml

    ; 存放成功导入的sqlite文件的地址
    data_base_path=/var/run/pkgship_dbs

    ; 写接口
    write_port=8080

    ; 读接口
    query_port=8090

    ; 写权限访问ip
    write_ip_addr=127.0.0.1

    ; 读权限访问ip
    query_ip_addr=127.0.0.1

    ; 远程服务的地址，命令行可以直接调用远程服务来完成数据请求, 只需在每个命令行后加 -remote参数
    remote_host=https://api.openeuler.org/pkgmanage

    [LOG]

    ; 日志存放路径
    log_path=/var/log/pkgship/

    ; 打印日志级别，支持如下：
    ; INFO DEBUG WARNING ERROR CRITICAL
    log_level=INFO

    ; 日志名称
    log_name=log_info.log

    ; 日志文件大小达到上限后动态创建的日志的数量
    backup_count=10

    ; 每个日志文件的大小
    max_bytes=314572800

    [UWSGI服务配置]

    ; uwsgi 日志路径
    daemonize=/var/log/uwsgi.log

    ; 前后端传输数据大小
    buffer-size=65536

    ; HTTP Connection time
    http-timeout=600

    ; Server response time
    harakiri=600

    [TIMEDTASK]

    ; 是否开启定时任务
    open=True

    ; 设定定时任务触发的时间
    hour=3
    minute=0

    [LIFECYCLE]
    ; 每个包的yaml地址的存储远程地址
    warehouse_remote=https://gitee.com/openeuler/openEuler-Advisor/raw/master/upstream-info/

    ; 在执行定时任务时，可以打开多线程执行，并且可以根据服务器的配置设置线程池中的线程数
    pool_workers=10

    ; 仓库的名字
    warehouse=src-openeuler

    ```

2. 创建初始化数据库的yaml配置文件：
    conf.yaml 文件默认存放在 /etc/pkgship/ 路径下，pkgship会通过该配置读取要建立的数据库名称以及需要导入的sqlite文件。conf.yaml 示例如下所示。

    ```yaml
    - dbname: openEuler-20.09
      src_db_file: /etc/pkgship/src.sqlite
      bin_db_file: /etc/pkgship/bin.sqlite
      lifecycle: enable
      priority: 1
    ```

  > 如需更改存放路径，请更改package.ini下的 init_conf_path 选项。

## 服务启动和停止

pkgship使用uWSGI web服务器,启动和停止命令如下所示,可指定只启动读（写）服务，或同时启动。

```bash
pkgshipd start [manage/selfpkg]

pkgshipd stop [manage/selfpkg]
```

## 工具使用

1. 数据库初始化。  
   > 使用场景：服务启动后，为了能查询对应的数据库（比如mainline， openEuler-20.09）中的包信息及包依赖关系，需要将这些数据库通过createrepo生成的sqlite（分为源码库和二进制库）导入进服务内，生成对应的db文件。当conf.yaml里配置数据库的参数项lifecycle声明为enable的时候，在lifecycle.db中会生成一张对应的表，用于记录数据库信息，后续需要读取数据库表名称(tablename)的操作会从此文件读取，[-filepath]为可选参数。

    ```bash
    pkgship init [-filepath path]
    ```

    > 参数说明：  
    > -filepath：指定初始化配置文件的路径，可以使用相对路径和绝对路径，不带参数则使用默认配置初始化。

2. 单包查询。

    用户可查询具体源码包(packagename)在指定数据库表（tablename）中的信息。
    > 使用场景：用户可查询具体源码包在指定数据库中的信息，packagename,tablename为必选参数。  

    ```bash
    pkgship single packagename tablename
    ```

    > 参数说明：  
    > packagename：指定要查询的源码包名。   
    > tablename：指定具体的数据库名称。

3. 所有包查询。

    查询数据库下包含的所有包的信息。
    > 使用场景：用户可查询指定数据库下包含的所有软件包信息。其中tablename为必选参数，[-packagename],[-maintainer]为可选参数。

    ```bash
    pkgship list tablename [-packagename pkgName] [-maintainer maintainer]
    ```

    > 参数说明：  
    > tablename：指定具体的数据库名称。  
    > -packagename：可以匹配到包名中包含参数字符串的包。  
    > -maintainer：可以匹配到maintainer为参数的包。

4. 安装依赖查询。

    查询二进制包(binaryName)的安装依赖。
    > 使用场景：用户需要安装某个二进制包A时，需要将该二进制包A的安装依赖B，及B的安装依赖C等等，直至所有的安装依赖全部安装到系统才能成功安装二进制包A。因此，在用户安装二进制包A之前，可能会需要查询二进制包A的所有安装依赖。该命令提供了此功能，允许用户根据平台默认的优先级在多个数据库之间进行查询；同时也支持用户自定义数据库查询优先级。

    ```bash
    pkgship installdep binaryName [-dbs dbName1 dbName2...]
    ```

   > 参数说明：  
   > -dbs：具体指定查询数据库的顺序优先级，dbName为具体的数据库名称。

5. 编译依赖查询。

    查询源码包(sourceName)的所有编译依赖。
    > 使用场景：用户要编译某个源码包A的时候，需要安装源码包A的编译依赖B, 要成功安装编译依赖B需要获取B的所有安装依赖。因此，在用户编译源码包A之前，可能会需要查询源码包的编译依赖以及这些编译依赖的所有安装依赖。该命令提供了此功能，允许用户根据平台默认的优先级在多个数据库之间进行查询;同时也支持用户自定义数据库查询优先级。

    ```bash
    pkgship builddep sourceName [-dbs dbName1 dbName2...]
    ```

   > 参数说明：  
   > -dbs：具体指定查询数据库的顺序优先级，dbName为具体的数据库名称。

6. 自编译自安装依赖查询。

    查询指定二进制包(binaryName)或源码包(sourceName )的安装及编译依赖，其中[pkgName]为查询的二进制包或者源码包的名称。当查询二进制包时，可以查询到该二进制包的所有安装依赖以及该二进制包对应的源码包的编译依赖，及这些编译依赖的所有安装依赖；当查询源码包时，可以查询该源码包的编译依赖，及这些编译依赖的所有安装依赖，并且查询该源码包生成的所有二进制包的所有安装依赖。同时，配合对应参数使用，该命令也支持查询软件包的自编译依赖查询，和包含子包的依赖查询。

    > 使用场景：如果开发者想在现有的版本库的基础上引入新的软件包，应同时引入该软件包的所有编译、安装依赖。该命令提供开发者一个同时查询这两种依赖关系的功能，能让开发者知晓该软件包会引入哪些其他的包，该命令支持查询二进制包和源码包。

    ```bash
     pkgship selfbuild [pkgName] [-dbs dbName1 dbName2 ] [-t source] [-s 1] [-w 1]
    ```

    > 参数说明：  
    > -dbs 指定数据库优先级,dbName为具体的数据库名称，使用示例如下。  

    >  ``` bash
    > pkgship selfbuild pkgName -dbs dbName1 dbName2 
    >  ```

    > -t source/binary 指定查询包名pkgName为源码包还是二进制包，不加-t时，默认为二进制包。  
    > -s 增加该参数表示查询软件包的所有安装依赖和所有编译依赖（即编译依赖的源码包的编译依赖），以及所有编译依赖的安装依赖。其中-s参数后面的0表示不查询自编译依赖，1表示查询自编译依赖，默认为0，可以指定1。如果不增加-s参数表示只查询软件包的所有安装依赖和一层编译依赖，以及一层编译依赖的所有安装依赖，查询自编译使用示例如下。

    > ```bash
    > pkgship selfbuild pkgName -t source -s 1
    > ```

    > -w 增加该参数表示引入某个二进制包的时候，查询结果会显示出该二进制包对应的源码包以及该源码包生成的所有二进制包。其中-w参数后面的0表示不查询对应子包，1表示查询对应子包，默认为0，可以指定1。如果不增加-w参数表示引入某个二进制包的时候，查询结果只显示对应的源码包，查询子包使用示例如下。

    > ```bash
    > pkgship selfbuild pkgName -w 1
    > ```

7. 被依赖查询。  
    查询源码包(sourceName)在某数据库(dbName)中被哪些包所依赖。
    > 使用场景：针对软件源码包A，在升级或删除的情况下会影响哪些软件包，可通过该命令查询。该命令会显示源码包A生成的所有二进制包被哪些源码包（比如B）编译依赖，被哪些二进制包（比如C1）安装依赖；以及B生成的二进制包及C1被哪些源码包（比如D）编译依赖，被哪些二进制包（比如E1）安装依赖，以此类推，遍历这些二进制包的被依赖，[-w 0/1]为可选参数，使用示例如下。
    ```bash
     pkgship bedepend sourceName dbName [-w 1]
    ```

    > 参数说明:  
    > -w （0/1）：当命令后不带配置参数或者[-w 0] 时，查询结果默认不包含对应二进制包的子包；当命令后带配置参数[-w 1] 时，不仅会查询二进制包C1的被依赖关系，还会进一步去查询C1对应的源码包C生成的其他二进制包（比如：C2,C3）的被依赖关系。

8. 包信息记录修改。
    > 使用场景: 用户可以修改指定源码包的维护人和维护级别。[-packagename],[-maintainer],[-maintainlevel],[-filefolder],[--batch]为可选参数。

    当前有两种修改方式：  
    第一种，通过指定源码包名(packagename)，修改源码包的维护人(Newmaintainer)和维护级别(Newmaintainlevel)，示例如下。
    ```bash
    pkgship updatepkg [-packagename packagename] [-maintainer Newmaintainer] [-maintainlevel Newmaintainlevel]
    ```
    > 参数说明:    
    > -packagename：指定需要维护的包名。  
    > -maintainer：指定更新包的维护人。  
    > -maintainlevel：指定更新包的维护级别，值在1～4之间，默认为1。  
  
    第二种，通过指定文件路径(path)，批量更新包的维护人和维护级别, 该命令必须指定添加--batch参数，示例如下。
    ```bash
    pkgship updatepkg [--batch] [-filefolder path]
    ```
    > 参数说明:    
    > -filefolder: 指定存放包信息的yaml文件，指定的目录仅能包含更新的yaml文件。    
    > --batch：指定批量更新，需要和[-filefolder]参数项一起使用。      

    用户可以通过创建文件名A.yaml指定包名为A，指定yaml内容来修改包信息。  
    包信息的yaml格式如下：
    ```
    maintainer：Newmaintainlevel
    maintainlevel： Newmaintainlevel
    ```

9. 数据库删除。
    > 使用场景: 删除指定数据库(dbName)。

    ```bash
    pkgship rm dbName
    ```

10. 表信息查询。
    > 使用场景: 查看当前生命周期数据库中存在的所有数据表。

    ```bash
     pkgship tables
    ```

11. issue查询。
    > 使用场景: 查看所有的源码包下的所有issue的信息。可选参数[-packagename],[-issue_type],[-issue_status],[-maintainer],[-page N],[-pagesize pageSize]。

    ```bash
     pkgship issue [-packagename pkgName],[-issue_type issueType],[-issue_status issueStatus],[-maintainer maintainer],[-page N],[-pagesize pageSize]
    ```

    > 参数说明:  
    > -packagename: 指定包名进行模糊查询。  
    > -issue_type: 指定issue类型进行查询。  
    > -issue_status: 指定issue状态进行查询。  
    > -maintainer: 指定维护人进行查询。  
    > -page: 指定查询第N页的数据。  
    > -pagesize: 指定每页显示的数据条目数pageSize。  

    ```bash
    指定包名进行模糊查询示例:
    pkgship issue -packagename pkgName
    ```

    ```bash
    指定issue类型进行查询示例:
    pkgship issue -issue_type issueType
    ```

    ```bash
    指定issue状态进行查询示例:
    pkgship issue -issue_status issueStatus
    ```

    ```bash
    指定维护人进行查询示例:
    pkgship issue -maintainer maintainer
    ```

    ```bash
    指定查询第N页的数据示例:
    pkgship issue -page N
    ```

    ```bash
    指定每页显示的数据条目数pageSize示例:
    pkgship issue -pagesize pageSize
    ```

12. 更新软件包的生命周期。

    > 使用场景: 用户可指定更新生命周期表中所有软件包的issue信息，维护人和维护级别。可选参数[--issue],[--package]。

    ```bash
    pkgship update [--issue] [--package]
    ```

    > 参数说明:  
    > --issue: 指定更新生命周期表中所有软件包的issue信息，根据生命周期中表的软件包名去gitee爬取软件包对应的issue信息。  
    > --package: 指定更新生命周期表中所有软件包的生命周期，维护人和维护级别。

    ```bash
    更新生命周期表中所有软件包的issue信息示例:
    pkgship update --issue
    ```

    ```bash
    更新生命周期表中所有软件包的生命周期，维护人和维护级别示例:
    pkgship update --package
    ```
