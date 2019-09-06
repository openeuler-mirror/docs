# 安装JDK<a name="ZH-CN_TOPIC_0186524183"></a>

## 前提条件<a name="zh-cn_topic_0179586527_section62054258459"></a>

需要root权限，已设置openEuler的repo源。

## 操作步骤<a name="zh-cn_topic_0179586527_section122921349114519"></a>

1.  查找repo提供的JDK版本，命令如下：

    ```
     dnf search java|grep jdk
    ```

2.  从输出中选择想要安装的JDK版本进行安装，安装命令如下：

    ```
    dnf install java-1.8.0-openjdk.aarch64
    ```


## 安装后检查<a name="zh-cn_topic_0179586527_section229216573163"></a>

JDK安装完成后，可以使用如下命令查询默认的JDK版本。

```
java -version
```

输出如下所示，表示安装成功。

```
openjdk version "1.8.0_222"
OpenJDK Runtime Environment (build 1.8.0_222-Huawei_JDK_V100R001C00B039-b10)
OpenJDK 64-Bit Server VM (build 25.222-b10, mixed mode)
```

