# halt-polling<a name="ZH-CN_TOPIC_0187048018"></a>

## 概述<a name="section167677162718"></a>

在计算资源充足的情况下，为使虚拟机获得接近物理机的性能，可以使用halt-polling特性。没有使用halt-polling特性时，当vCPU空闲退出后，主机会把CPU资源分配给其他进程使用。当主机开启halt-polling特性时，虚拟机vCPU处于空闲时会polling一段时间，polling的时间由具体配置决定。若该vCPU在polling期间被唤醒，可以不从主机侧调度而继续运行，减少了调度流程的开销，从而在一定程度上提高了虚拟机系统的性能。

>![](public_sys-resources/icon-note.gif) **说明：**   
>halt-polling的机制保证虚拟机的vCPU线程的及时响应，但在虚拟机空载的时候，主机侧也会polling，导致主机看到vCPU所在CPU占用率比较高，而实际虚拟机内部CPU占用率并不高。  

## 操作指导<a name="section104069317271"></a>

系统默认开启了halt-polling特性，polling的时间默认为500000ns。用户可以通过文件halt\_poll\_ns内容动态修改vCPU用于halt-polling的时间，单位为ns。

例如设置polling时间为400000的命令如下：

```
# echo 400000 > /sys/module/kvm/parameters/halt_poll_ns
```

