# SELinux配置

## 概述

自主访问控制DAC（Discretionary Access Control）基于用户、组和其他权限，决定一个资源是否能被访问的因素是某个资源是否拥有对应用户的权限，它不能使系统管理员创建全面和细粒度的安全策略。SELinux（Security-Enhanced Linux）是Linux内核的一个模块，也是Linux的一个安全子系统。SELinux的实现了强制访问控制MAC（Mandatory Access Control ），每个进程和系统资源都有一个特殊的安全标签，资源能否被访问除了DAC规定的原则外，还需要判断每一类进程是否拥有对某一类资源的访问权限。

openEuler默认使用SELinux提升系统安全性。SELinux分为三种模式：

-   permissive：SELinux仅打印告警而不强制执行。
-   enforcing：SELinux安全策略被强制执行。
-   disabled：不加载SELinux安全策略。

## 配置说明

-   获取当前SELinux运行状态：
    ```
    # getenforce
    Enforcing
    ```

-   SELinux开启的前提下，设置运行状态为enforcing模式：
    ```
    # setenforce 1
    # getenforce
    Enforcing
    ```

-   SELinux开启的前提下，设置运行状态为permissive模式：
    ```
    # setenforce 0
    # getenforce
    Permissive
    ```

-   SELinux开启的前提下，设置当前SELinux运行状态为disabled（关闭SELinux，需要重启系统）。
    1. 修改SELinux配置文件/etc/selinux/config，设置“SELINUX=disabled”。
    ```
    # cat /etc/selinux/config | grep "SELINUX="
    SELINUX=disabled
    ```
    2. 重启系统：
    ```
    # reboot
    ```
    3. 状态切换成功：
    ```
    # getenforce
    Disabled
    ```

-   SELinux关闭的前提下，设置SELinux运行状态为permissive：
    1. 修改SELinux配置文件/etc/selinux/config，设置“SELINUX=permissive”：
    ```
    # cat /etc/selinux/config | grep "SELINUX="
    SELINUX=permissive
    ```
    2. 在根目录下创建.autorelabel文件：
    ```
    # touch /.autorelabel
    ```
    3. 重启系统，此时系统会重启两次：
    ```
    # reboot
    ```
    4. 状态切换成功：
    ```
    # getenforce
    Permissive
    ```

-   SELinux关闭的前提下，设置SELinux运行状态为enforcing：
    1. 按照上一步骤所述，设置SELinux运行状态为permissive。
    2. 修改SELinux配置文件/etc/selinux/config，设置“SELINUX=enforcing”：
    ```
    # cat /etc/selinux/config | grep "SELINUX="
    SELINUX=enforcing
    ```
    3. 重启系统：
    ```
    # reboot
    ```
    4. 状态切换成功：
    ```
    # getenforce
    Enforcing
    ```

## SELinux相关命令

-   查询运行SELinux的系统状态。SELinux status表示SELinux的状态，enabled表示启用SELinux，disabled表示关闭SELinux。Current mode表示SELinux当前的安全策略。

    ```
    # sestatus
    SELinux status:                 enabled
    SELinuxfs mount:                /sys/fs/selinux
    SELinux root directory:         /etc/selinux
    Loaded policy name:             targeted
    Current mode:                   enforcing
    Mode from config file:          enforcing
    Policy MLS status:              enabled
    Policy deny_unknown status:     allowed
    Memory protection checking:     actual (secure)
    Max kernel policy version:      31
    ```

## 注意事项

-   如用户需使能SELinux功能，建议通过dnf升级方式将selinux-policy更新为最新版本，否则应用程序有可能无法正常运行。升级命令示例：

    ```
    dnf update selinux-policy -y
    ```
    
-   如果用户由于SELinux配置不当（如误删策略或未配置合理的规则或安全上下文）导致系统无法启动，可以在启动参数中添加selinux=0，关闭SELinux功能，系统即可正常启动。
