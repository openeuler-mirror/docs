# 安装并配置osc<a name="ZH-CN_TOPIC_0229243692"></a>

## 前提条件<a name="zh-cn_topic_0184337289_zh-cn_topic_0179586527_section62054258459"></a>

需要root权限，已设置openEuler的repo软件源。

## 操作步骤<a name="zh-cn_topic_0184337289_section1377610254816"></a>

1.  使用root用户安装osc命令行工具及依赖。

    ```
    # dnf install osc build
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >编译RPM软件包的过程中会依赖build。  

2.  配置osc。
    1.  打开\~/.oscrc，命令如下：

        ```
        # vi ~/.oscrc
        ```

    2.  在\~/.oscrc中添加user和pass字段，如下所示，它们的取值  _userName_ _和_ _passWord_  分别是用户在OBS网页（[http://openeuler-build.huawei.com/](http://openeuler-build.huawei.com/)）上已经注册的账号和密码。

        ```
        [general]
        apiurl = http://openeuler-build.huawei.com/
        no_verify = 1
        [http://openeuler-build.huawei.com/]
        user=userName
        pass=passWord
        ```

    3.  如果域名openeuler-build.openeuler.org无法解析，则可以在/etc/hosts文件中手动添加如下一行。其中，  _ip-address_  是obs的ip地址，为http://117.78.1.88/。

        ```
        ip-address openeuler-build.openeuler.org
        ```



