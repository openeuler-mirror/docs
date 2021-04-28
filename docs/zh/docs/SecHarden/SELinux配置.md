# SELinux配置

## 概述

自主访问控制DAC（Discretionary Access Control）基于用户、组和其他权限，决定一个资源是否能被访问的因素是某个资源是否拥有对应用户的权限，它不能使系统管理员创建全面和细粒度的安全策略。SELinux（Security-Enhanced Linux）是Linux内核的一个模块，也是Linux的一个安全子系统。SELinux的实现了强制访问控制MAC（Mandatory Access Control ），每个进程和系统资源都有一个特殊的安全标签，资源能否被访问除了DAC规定的原则外，还需要判断每一类进程是否拥有对某一类资源的访问权限。

openEuler默认使用SELinux提升系统安全性。SELinux分为三种模式：

-   permissive：SELinux仅打印告警而不强制执行。
-   enforcing：SELinux安全策略被强制执行。
-   disabled：不加载SELinux安全策略。

## 配置说明
openEuler默认开启SELinux，且默认模式为enforcing，用户可以通过修改/etc/selinux/config中配置项SELINUX的值变更SELinux模式。

-   关闭SELinux策略的配置如下：

    ```
    SELINUX=disabled
    ```

-   使用permissive策略的配置如下：

    ```
    SELINUX=permissive
    ```


>![](./public_sys-resources/icon-note.gif) **说明：**   
>disabled与另两种模式切换时需重启系统生效。  
>```  
># reboot  
>```  

## SELinux相关命令

-   查询SELinux模式。例如下述查询的SELinux模式为Permissive：

    ```
    # getenforce
    Permissive
    ```

-   设置SELinux模式，0表示permissive模式，1表示enforcing模式，例如设置为enforcing模式的命令如下。该命令不能设置disabled模式，且系统重启后，恢复到/etc/selinux/config中设置的模式。

    ```
    # setenforce 1
    ```

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

## SELinux策略约束

SELinux是一个策略集中式的强制访问控制安全机制，selinux-policy会为操作系统中常用软件指定规则，因此部分软件的使用会受到一些约束，对于这些受到约束的软件，用户可以在关闭SELinux的情况下使用，如果需要在开启SELinux的情况下使用，可能需要进行规则适配。例如：

-   使用freeradius连接sqlite，SELinux策略限制了sqlite数据库文件需要位于/var/lib/radiusd目录下，且SELinux标签为radiusd_var_lib_t。如果用户想将数据库文件放在其他位置，需要自行适配规则。
