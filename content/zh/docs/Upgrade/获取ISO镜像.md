# 获取ISO镜像<a name="ZH-CN_TOPIC_0227389895"></a>

## 下载ISO镜像<a name="section18587122144716"></a>

-   通过跨平台文件传输工具下载ISO镜像
    1.  登录openEuler社区，网址为：[https://openeuler.org](https://openeuler.org)。
    2.  单击“下载”，进入下载页面。
    3.  单击“获取ISO：”后面的“Link”，显示下载列表。
    4.  <a name="li12471102810496"></a>单击“openEuler-20.03-LTS-everything-aarch64-dvd.iso”将openEuler发布包下载到本地。
    5.  <a name="li1585718426494"></a>单击“openEuler-20.03-LTS-everything-aarch64-dvd.iso.sha256sum”将openEuler校验文件下载到本地。
    6.  登录待升级的openEuler操作系统，新建用于存放发布包和检验文件的目录,如“/home/iso”。

        ```
        mkdir /home/iso
        ```

    7.  使用跨平台文件传输工具（如WinSCP）将本地的openEuler发布包和校验文件上传到待升级openEuler操作系统。

-   通过wget命令下载ISO镜像
    1.  登录openEuler社区，网址为：[https://openeuler.org](https://openeuler.org)。
    2.  单击“下载”，进入下载页面。
    3.  单击“获取ISO：”后面的“Link”，显示下载列表。
    4.  右键单击“openEuler-20.03-LTS-everything-aarch64-dvd.iso”，单击“复制链接地址”，将openEuler发布包地址记录好。
    5.  右键单击“openEuler-20.03-LTS-everything-aarch64-dvd.iso.sha256sum”，单击“复制链接地址”，将openEuler校验文件地址记录好。
    6.  登录待升级的openEuler操作系统，新建用于存放发布包和检验文件的目录,如“/home/iso”，并切换到该目录。

        ```
        mkdir /home/iso
        cd /home/iso
        ```

    7.  使用**wget**命令远程下载发布包和检验文件，命令中的  _ipaddriso_  和  _ipaddrisosum_  分别为[4](#li12471102810496)和[5](#li1585718426494)中记录的地址。

        ```
        wget ipaddriso
        wget ipaddrisosum
        ```



## 发布包完整性校验<a name="section104307331869"></a>

1.  获取校验文件中的校验值。

    ```
    cat openEuler-20.03-LTS-everything-aarch64-dvd.iso.sha256sum
    ```

2.  计算openEuler发布包的sha256校验值。

    ```
    sha256sum openEuler-20.03-LTS-everything-aarch64-dvd.iso
    ```

    命令执行完成后，输出校验值。

3.  对比步骤1和步骤2计算的校验值是否一致。

    如果校验值一致说明iso文件完整性没有破坏，如果校验值不一致则可以确认文件完整性已被破坏，需要重新获取。


