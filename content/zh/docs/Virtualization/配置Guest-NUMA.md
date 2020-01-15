# 配置Guest NUMA<a name="ZH-CN_TOPIC_0187048014"></a>

虚拟机中运行的很多业务软件都针对NUMA架构进行了性能优化，尤其是对于大规格虚拟机，这种优化的作用更明显。openEuler提供了Guest NUMA特性，在虚拟机内部呈现出NUMA拓扑结构。用户可以通过识别这个结构，对业务软件的性能进行优化，从而保证业务更好的运行。

配置Guest NUMA时可以指定vNode的内存在HOST上的分配位置，实现内存的分块绑定，同时配合vCPU绑定，使vNode上的vCPU和内存在同一个物理NUMA node上。

## 操作步骤<a name="section1941914260160"></a>

在虚拟机的XML配置文件中，配置了Guest NUMA后，就可以在虚拟机内部查看NUMA拓扑结构。numa项是Guest NUMA的必配项。

```
  <cputune>
    <vcpupin vcpu='0' cpuset='0-3'/>
    <vcpupin vcpu='1' cpuset='0-3'/>
    <vcpupin vcpu='2' cpuset='16-19'/>
    <vcpupin vcpu='3' cpuset='16-19'/>
  </cputune>
  <numatune>
    <memnode cellid="0" mode="strict" nodeset="0"/>
    <memnode cellid="1" mode="strict" nodeset="1"/>
  </numatune>
  [...]
  <cpu>
    <numa>
      <cell id='0' cpus='0-1' memory='2097152'/>
      <cell id='1' cpus='2-3' memory='2097152'/>
    </numa>
  </cpu>
```

>![](public_sys-resources/icon-note.gif) **说明：**   
>-   numa项提供虚拟机内部呈现NUMA拓扑功能，“cell id”表示vNode编号，“cpus”表示vCPU编号，“memory”表示对应vNode上的内存大小。  
>-   如果希望通过Guest NUMA提供更好的性能，则需要配置numatune和cputune，使vCPU和对应的内存分布在同一个物理NUMA NODE上：  
>-   numatune中的“cellid”和numa中的“cell id”是对应的；“mode”可以配置为“strict”（严格从指定node上申请内存，内存不够则失败）、“preferred”（优先从某一node上申请内存，如果不够则从其他node上申请）、“interleave”（从指定的node上交叉申请内存）；“nodeset”表示指定物理NUMA NODE。  
>-   cputune中需要将同一cell id中的vCPU绑定到与memnode相同的物理NUMA NODE上。  

