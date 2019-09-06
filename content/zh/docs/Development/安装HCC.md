# 安装HCC<a name="ZH-CN_TOPIC_0186524176"></a>

## 3.1 操作步骤<a name="zh-cn_topic_0176345777_section186151290"></a>

您可以使用HCC安装包将HCC安装到当前用户权限下的任何位置，而不会影响其他编译器的使用。

1.  使用个人账户登录已准备好的x86 Linux服务器，并进入到任意具有当前用户权限的安装目录_。_
2.  将获取的HCC安装包gcc-7.3.0-x86\_64\_aarch64-linux-gnu.tar.gz拷贝至您想要安装的目录。此处以目录为/path/to/your/dir为例，请根据实际修改。

    命令如下所示：

    ```
    cp gcc-7.3.0-x86_64_aarch64-linux-gnu.tar.gz /path/to/your/dir
    ```

3.  解压缩安装包。

    命令如下所示：

    ```
    tar zxvf gcc-7.3.0-x86_64_aarch64-linux-gnu.tar.gz
    ```

4.  设置环境变量。

    设置环境变量命令如下所示。

    ```
    export PATH=/path/to/your/dir/gcc-7.3.0-x86_64_aarch64-linux-gnu/bin:$PATH
    ```

    HCC提供的编译工具在/path/to/your/dir/gcc-7.3.0-x86\_64\_aarch64-linux-gnu/bin目录下。


## 3.2 安装后检查<a name="zh-cn_topic_0176345777_section18510172914301"></a>

HCC安装完成后，可以执行 aarch64-linux-gnu-gcc --version 命令查询HCC编译器版本。

命令回显如下所示，表示安装成功。

```
aarch64-linux-gnu-gcc (Compiler CPU V200R005C00SPC030B003) 7.3.0
Copyright (C) 2017 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

