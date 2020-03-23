# 配置Host NUMA<a name="ZH-CN_TOPIC_0187048013"></a>

为提升虚拟机性能，在虚拟机启动前，用户可以通过虚拟机XML配置文件为虚拟机指定主机的NUMA节点，使虚拟机内存分配在指定的NUMA节点上。本特性一般与vCPU绑定一起使用，从而避免vCPU远端访问内存。

## 操作步骤<a name="section13996950155118"></a>

-   查看host的NUMA拓扑结构：

    ```
     # numactl -H
    available: 4 nodes (0-3)
    node 0 cpus: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
    node 0 size: 31571 MB
    node 0 free: 17095 MB
    node 1 cpus: 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31
    node 1 size: 32190 MB
    node 1 free: 28057 MB
    node 2 cpus: 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47
    node 2 size: 32190 MB
    node 2 free: 10562 MB
    node 3 cpus: 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63
    node 3 size: 32188 MB
    node 3 free: 272 MB
    node distances:
    node   0   1   2   3
      0:  10  15  20  20
      1:  15  10  20  20
      2:  20  20  10  15
      3:  20  20  15  10
    ```

-   在虚拟机XML配置文件中添加numatune字段，创建并启动虚拟机。例如使用主机上的NUMA node 0给虚拟机分配内存，配置参数如下：

    ```
      <numatune>
        <memory mode="strict" nodeset="0"/>
      </numatune>
    ```

    假设虚拟机的vCPU也绑定在NODE0的物理CPU上，就可以避免由于vCPU访问远端内存带来的性能下降。

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >-   分配给虚拟机的内存不要超过该NUMA节点剩余的可用内存，否则可能导致虚拟机启动失败。  
    >-   建议虚拟机内存和vCPU都绑定在同一NUMA节点，避免vCPU访问远端内存造成性能下降。例如将上例中vCPU也绑定在NUMA node 0上。  


