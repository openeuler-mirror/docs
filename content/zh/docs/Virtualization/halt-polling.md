# halt-polling<a name="ZH-CN_TOPIC_0187048018"></a>

## 概述<a name="section167677162718"></a>

在计算资源充足的情况下，为使虚拟机获得接近物理机的性能，可以使用halt-polling特性。此时vCPU因halt触发vm-exit后，并不会立即调用scheduler，把计算资源让给其他主机侧进程；而是会根据配置先polling一段时间，若该vCPU在polling期间被唤醒，那么vCPU可以直接vm-entry执行Guest任务，而不用从主机侧的idle进程唤醒，减少了调度流程的开销，一定程度上提高了虚拟机系统的性能。

>![](public_sys-resources/icon-note.gif) **说明：**   
>halt-polling的机制保证虚拟机的vCPU线程的及时响应，但在虚拟机空载的时候，主机侧也会polling，导致主机看到vCPU所在CPU占用率比较高，而实际虚拟机内部CPU占用率并不高。  

## 操作步骤<a name="section104069317271"></a>

通过sysfs可以动态修改vCPU用于halt-polling的时间，默认配置为500000，单位为ns。

```
# echo 400000 > /sys/module/kvm/parameters/halt_poll_ns
```

