# 限制CPU资源<a name="ZH-CN_TOPIC_0184808176"></a>

1.  配置轻量级虚拟机CPU运行资源

    对轻量级虚拟机的CPU资源配置即虚拟机运行的vcpu配置，安全容器使用--annotation com.github.containers.virtcontainers.sandbox\_cpu配置轻量级虚拟机运行CPU资源，该参数仅可配置在pause容器上：

    ```
    docker run -tid --runtime kata-runtime --network none --annotation io.kubernetes.docker.type=podsandbox --annotation com.github.containers.virtcontainers.sandbox_cpu=<cpu-nums> <pause-image> <command>
    ```

    举例：

    ```
    # 启动一个pause容器
    docker run -tid --runtime kata-runtime --network none --annotation io.kubernetes.docker.type=podsandbox --annotation com.github.containers.virtcontainers.sandbox_cpu=4 ubuntu-arm64 bash
    be3255a3f66a35508efe419bc52eccd3b000032b9d8c9c62df611d5bdc115954
    
    # 进入容器查看CPU信息，查看CPU个数是否与com.github.containers.virtcontainers.sandbox_cpu配置的CPU个数相等
    docker exec be32 lscpu
    Architecture:        aarch64
    Byte Order:          Little Endian
    CPU(s):              4
    On-line CPU(s) list: 0-3
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           4
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >CPU个数可以设置的最大值为当前OS上可供运行的CPU值（除去隔离核），最小值为0.5个CPU。  

2.  配置容器CPU运行资源

    配置容器CPU运行资源与开源docker容器配置CPU运行资源的方式相同，可以通过docker run命令中CPU资源限制相关的参数进行配置：

    <a name="zh-cn_topic_0183903699_table11321051171213"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0183903699_row5321251121219"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0183903699_p1208737146"><a name="zh-cn_topic_0183903699_p1208737146"></a><a name="zh-cn_topic_0183903699_p1208737146"></a><strong id="zh-cn_topic_0183903699_b1243812519152"><a name="zh-cn_topic_0183903699_b1243812519152"></a><a name="zh-cn_topic_0183903699_b1243812519152"></a>参数</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0183903699_p1332145111210"><a name="zh-cn_topic_0183903699_p1332145111210"></a><a name="zh-cn_topic_0183903699_p1332145111210"></a><strong id="zh-cn_topic_0183903699_b12491112818158"><a name="zh-cn_topic_0183903699_b12491112818158"></a><a name="zh-cn_topic_0183903699_b12491112818158"></a>含义</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0183903699_row1532175119122"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0183903699_p15321251191214"><a name="zh-cn_topic_0183903699_p15321251191214"></a><a name="zh-cn_topic_0183903699_p15321251191214"></a>--cpu-shares</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0183903699_p232951121217"><a name="zh-cn_topic_0183903699_p232951121217"></a><a name="zh-cn_topic_0183903699_p232951121217"></a>设置容器能使用的CPU时间比例。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0183903699_row1232125121218"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0183903699_p43265191210"><a name="zh-cn_topic_0183903699_p43265191210"></a><a name="zh-cn_topic_0183903699_p43265191210"></a>--cpus</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0183903699_p193217517128"><a name="zh-cn_topic_0183903699_p193217517128"></a><a name="zh-cn_topic_0183903699_p193217517128"></a>设置容器可以使用的 CPU 个数。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0183903699_row173275113128"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0183903699_p43295116127"><a name="zh-cn_topic_0183903699_p43295116127"></a><a name="zh-cn_topic_0183903699_p43295116127"></a>--cpu-period</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0183903699_p16321151161215"><a name="zh-cn_topic_0183903699_p16321151161215"></a><a name="zh-cn_topic_0183903699_p16321151161215"></a>设置容器进程的调度周期。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0183903699_row188213501157"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0183903699_p158831150161512"><a name="zh-cn_topic_0183903699_p158831150161512"></a><a name="zh-cn_topic_0183903699_p158831150161512"></a>--cpu-quota</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0183903699_p12883750151511"><a name="zh-cn_topic_0183903699_p12883750151511"></a><a name="zh-cn_topic_0183903699_p12883750151511"></a>设置每个容器进程调度周期内能够使用的CPU时间。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0183903699_row1475055510158"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0183903699_p5750145515159"><a name="zh-cn_topic_0183903699_p5750145515159"></a><a name="zh-cn_topic_0183903699_p5750145515159"></a>--cpuset-cpus</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0183903699_p1750125561520"><a name="zh-cn_topic_0183903699_p1750125561520"></a><a name="zh-cn_topic_0183903699_p1750125561520"></a>设置容器进程可以使用的CPU列表。</p>
    <div class="note" id="zh-cn_topic_0183903699_note1610940172310"><a name="zh-cn_topic_0183903699_note1610940172310"></a><a name="zh-cn_topic_0183903699_note1610940172310"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0183903699_p1410950132311"><a name="zh-cn_topic_0183903699_p1410950132311"></a><a name="zh-cn_topic_0183903699_p1410950132311"></a>安全容器使用 --cpuset-cpus 参数绑定CPU时，CPU的编号不能超过安全容器对应的轻量级虚机中CPU的个数减1（轻量级虚机中CPU的编号从0开始）。</p>
    </div></div>
    </td>
    </tr>
    <tr id="zh-cn_topic_0183903699_row830172021620"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0183903699_p173012012166"><a name="zh-cn_topic_0183903699_p173012012166"></a><a name="zh-cn_topic_0183903699_p173012012166"></a>--cpuset-mems</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0183903699_p129461755102515"><a name="zh-cn_topic_0183903699_p129461755102515"></a><a name="zh-cn_topic_0183903699_p129461755102515"></a><span>设定该容器进程可以访问的内存节点。</span></p>
    <div class="note" id="zh-cn_topic_0183903699_note17106188267"><a name="zh-cn_topic_0183903699_note17106188267"></a><a name="zh-cn_topic_0183903699_note17106188267"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0183903699_p21015188261"><a name="zh-cn_topic_0183903699_p21015188261"></a><a name="zh-cn_topic_0183903699_p21015188261"></a>安全容器不支持多NUMA架构和配置，使用NUMA memory的--cpuset-mems参数只能配置为0。</p>
    </div></div>
    </td>
    </tr>
    </tbody>
    </table>

3.  配置CPU热插拔功能

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >安全容器CPU热插拔功能需要虚拟化组件qemu支持CPU热插拔。  

    kata-runtime配置文件config.toml中**enable\_cpu\_memory\_hotplug**选项负责开启和禁用CPU和内存热插拔。默认取值为false，表示禁用CPU和内存热插拔功能；取值为true，表示开启CPU和内存热插拔功能。

    kata-runtime中复用了**--cpus**选项实现了CPU热插拔的功能，通过统计Pod中所有容器的**--cpus**选项的和，然后确定需要热插多少个CPU到轻量级虚机中。

    举例：

    ```
    # 启动一个pause容器，轻量级虚机默认分配了1个vcpu
    docker run -tid --runtime kata-runtime --network none --annotation io.kubernetes.docker.type=podsandbox ubuntu bash
    77b40fb72f63b11dd3fcab2f6dabfc7768295fced042af8c7ad9c0286b17d24f
    
    # 查看启动完pause容器后轻量级虚机中CPU个数
    docker exec 77b40fb72f6 lscpu
    Architecture:          x86_64
    CPU op-mode(s):        32-bit, 64-bit
    Byte Order:            Little Endian
    CPU(s):                1
    On-line CPU(s) list:   0
    Thread(s) per core:    1
    Core(s) per socket:    1
    Socket(s):             1
    
    # 在同一个Pod中启动新的容器并通过--cpus设置容器需要的CPU数量为4
    docker run -tid --runtime kata-runtime --network none --cpus 4 --annotation io.kubernetes.docker.type=container --annotation io.kubernetes.sandbox.id=77b40fb72f63b11dd3fcab2f6dabfc7768295fced042af8c7ad9c0286b17d24f ubuntu bash
    7234d666851d43cbdc41da356bf62488b89cd826361bb71d585a049b6cedafd3
    
    # 查看当前轻量级虚机中CPU的个数
    docker exec 7234d6668 lscpu
    Architecture:          x86_64
    CPU op-mode(s):        32-bit, 64-bit
    Byte Order:            Little Endian
    CPU(s):                4
    On-line CPU(s) list:   0-3
    Thread(s) per core:    1
    Core(s) per socket:    1
    Socket(s):             4
    
    # 删除热插了CPU的容器后，查看轻量级虚机中CPU的个数
    docker rm -f 7234d666851d
    7234d666851d
    
    docker exec 77b40fb72f6  lscpu
    Architecture:          x86_64
    CPU op-mode(s):        32-bit, 64-bit
    Byte Order:            Little Endian
    CPU(s):                1
    On-line CPU(s) list:   0
    Thread(s) per core:    1
    Core(s) per socket:    1
    Socket(s):             1
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >由于pause容器只是一个占位容器没有工作负载，所以轻量级虚机启动时默认分配的1个CPU可以被其它容器共享，因此上面例子中启动的新容器只需要再热插3个CPU到轻量级虚机中即可。  

    -   当停止热插了CPU的容器后，启动容器时热插进去的CPU也会被拔出。


