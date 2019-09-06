# 安装GCC<a name="ZH-CN_TOPIC_0186902368"></a>

## 前提条件<a name="zh-cn_topic_0179586527_section62054258459"></a>

需要root权限，已设置 openEuler 的repo软件源。

## 操作步骤<a name="section1377610254816"></a>

通过DNF进行安装，采取如下步骤。

1.  查找repo源中提供的GCC版本

    ```
    # dnf search gcc
    ```

    回显如下，说明repo源中提供的GCC版本为7.3.0。

    ```
    Last metadata expiration check: 1:21:28 ago on Tue 03 Sep 2019 08:20:58 AM EDT.
    ========================================================= Name Exactly Matched: gcc ==========================================================
    gcc.aarch64 : Various compilers (C, C++, Objective-C, Java, ...)
    ======================================================== Name & Summary Matched: gcc =========================================================
    gcc-c++.aarch64 : C++ support for GCC
    gcc-objc.aarch64 : Objective-C support for GCC
    gcc-objc++.aarch64 : Objective-C++ support for GCC
    libgcc.aarch64 : GCC version 7.3.0 shared support library
    libgcc.aarch64 : GCC version 7.3.0 shared support library
    ============================================================= Name Matched: gcc ==============================================================
    gcc-gfortran.aarch64 : Fortran support
    ============================================================ Summary Matched: gcc ============================================================
    libgomp.aarch64 : GCC OpenMP v3.0 shared support library
    libgomp.aarch64 : GCC OpenMP v3.0 shared support library
    ```

2.  选择想要安装的版本进行安装，这里安装7.3.0版本的GCC，命令如下：

    ```
    # dnf install gcc-7.3.0*
    ```


## 安装后检查<a name="zh-cn_topic_0179586527_section229216573163"></a>

安装完成后，可以使用如下命令查询版本。

```
# gcc --version
```

正常打印，表示安装成功。

```
gcc (GCC) 7.3.0
Copyright (C) 2017 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

