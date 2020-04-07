# Configuring Guest NUMA<a name="EN-US_TOPIC_0187048014"></a>

Many service software running on VMs is optimized for the NUMA architecture, especially for large-scale VMs. openEuler provides the Guest NUMA feature to display the NUMA topology in VMs. You can identify the structure to optimize the performance of service software and ensure better service running.

When configuring guest NUMA, you can specify the location of vNode memory on the host to implement memory block binding and vCPU binding so that the vCPU and memory on the vNode are on the same physical NUMA node.

## Procedure<a name="section1941914260160"></a>

After Guest NUMA is configured in the VM XML configuration file, you can view the NUMA topology on the VM.  **<numa\>**  is mandatory for Guest NUMA.

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

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   **<numa\>**  provides the NUMA topology function for VMs.  **cell id**  indicates the vNode ID,  **cpus**  indicates the vCPU ID, and  **memory**  indicates the memory size on the vNode.  
>-   If you want to use Guest NUMA to provide better performance, configure <**numatune\>**  and  **<cputune\>**  so that the vCPU and memory are distributed on the same physical NUMA node.  
>    -   **cellid**  in  **<numatune\>**  corresponds to  **cell id**  in  **<numa\>**.  **mode**  can be set to  **strict**  \(apply for memory from a specified node strictly. If the memory is insufficient, the application fails.\),  **preferred**  \(apply for memory from a node first. If the memory is insufficient, apply for memory from another node\), or  **interleave**  \(apply for memory from a specified node in cross mode\).;  **nodeset**  indicates the specified physical NUMA node.  
>    -   In  **<cputune\>**, you need to bind the vCPU in the same  **cell id**  to the physical NUMA node that is the same as the  **memnode**.  

