# 虚拟CPU和虚拟内存<a name="ZH-CN_TOPIC_0184192749"></a>

## 概述<a name="section1023314510213"></a>

本节介绍虚拟CPU和虚拟内存的常用配置。

## 元素介绍<a name="section9646175951313"></a>

-   vcpu：虚拟处理器的个数。
-   memory：虚拟内存的大小。

    属性unit：指定内存单位，属性值支持KiB（2<sup>10</sup>  字节），MiB（2<sup>20</sup>  字节），GiB（2<sup>30</sup>  字节），TiB（2<sup>40</sup>  字节）等。

-   cpu：虚拟处理器模式。

    属性mode：表示虚拟CPU的模式，属性值host-passthrough表示虚拟CPU的架构和特性与主机保持一致。

    子元素topology：元素cpu的子元素，用于描述虚拟CPU模式的拓扑结构。

    -   子元素topology的属性socket、cores、threads分别描述了虚拟机具有多少个cpu socket，每个cpu socket中包含多少个处理核心（core），每个处理器核心具有多少个超线程（thread），属性值为正整数且三者的乘积等于虚拟CPU的个数。


## 配置示例<a name="section10403123219155"></a>

例如，虚拟CPU个数为4，处理模式为host-passthrough，虚拟内存为8GiB，4个CPU分布在两个CPU socket中，且不支持超线程的配置如下：

```
<domain type='kvm'>
    ...
    <vcpu>4</vcpu>
    <memory unit='GiB'>8</memory>
    <cpu mode='host-passthrough'>
        <topology sockets='2' cores='2' threads='1'/>
    </cpu>
...
</domain>
```

