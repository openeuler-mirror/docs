# Limiting CPU Resources<a name="EN-US_TOPIC_0184808176"></a>

1.  Configure CPU resources for running a lightweight VM.

    Configuring CPU resources of a lightweight VM is to configure the vCPUs for running the VM. The secure container uses  **--annotation com.github.containers.virtcontainers.sandbox\_cpu**  to configure the CPU resources for running the lightweight VM. This option can be configured only on the pause container.

    ```
    docker run -tid --runtime kata-runtime --network none --annotation io.kubernetes.docker.type=podsandbox --annotation com.github.containers.virtcontainers.sandbox_cpu=<cpu-nums> <pause-image> <command>
    ```

    Example:

    ```
    #Start a pause container.
    docker run -tid --runtime kata-runtime --network none --annotation io.kubernetes.docker.type=podsandbox --annotation com.github.containers.virtcontainers.sandbox_cpu=4 busybox sleep 999999
    be3255a3f66a35508efe419bc52eccd3b000032b9d8c9c62df611d5bdc115954
    
    #Access the container and check whether the number of CPUs is the same as that configured in the com.github.containers.virtcontainers.sandbox_cpu file.
    docker exec be32 lscpu
    Architecture:        aarch64
    Byte Order:          Little Endian
    CPU(s):              4
    On-line CPU(s) list: 0-3
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           4
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The maximum number of CPUs that can be configured is the number of CPUs \(excluding isolated cores\) that can run on the OS. The minimum number of CPUs is 0.5.  

2.  Configure CPU resources for running a container.

    The method of configuring CPU resources for a container is the same as that for an open-source Docker container. You can configure CPU resources by setting the following parameters in the  **docker run**  command:

    <a name="en-us_topic_0183903699_table11321051171213"></a>
    <table><thead align="left"><tr id="en-us_topic_0183903699_row5321251121219"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="en-us_topic_0183903699_p1208737146"><a name="en-us_topic_0183903699_p1208737146"></a><a name="en-us_topic_0183903699_p1208737146"></a><strong id="en-us_topic_0183903699_b16155132818307"><a name="en-us_topic_0183903699_b16155132818307"></a><a name="en-us_topic_0183903699_b16155132818307"></a>Parameter</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="en-us_topic_0183903699_p1332145111210"><a name="en-us_topic_0183903699_p1332145111210"></a><a name="en-us_topic_0183903699_p1332145111210"></a><strong id="en-us_topic_0183903699_b1448362915301"><a name="en-us_topic_0183903699_b1448362915301"></a><a name="en-us_topic_0183903699_b1448362915301"></a>Description</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0183903699_row1532175119122"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0183903699_p15321251191214"><a name="en-us_topic_0183903699_p15321251191214"></a><a name="en-us_topic_0183903699_p15321251191214"></a>--cpu-shares</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0183903699_p232951121217"><a name="en-us_topic_0183903699_p232951121217"></a><a name="en-us_topic_0183903699_p232951121217"></a>Sets the percentage of CPU time that can be used by the container.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0183903699_row1232125121218"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0183903699_p43265191210"><a name="en-us_topic_0183903699_p43265191210"></a><a name="en-us_topic_0183903699_p43265191210"></a>--cpus</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0183903699_p193217517128"><a name="en-us_topic_0183903699_p193217517128"></a><a name="en-us_topic_0183903699_p193217517128"></a>Sets the number of CPUs that can be used by the container.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0183903699_row173275113128"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0183903699_p43295116127"><a name="en-us_topic_0183903699_p43295116127"></a><a name="en-us_topic_0183903699_p43295116127"></a>--cpu-period</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0183903699_p16321151161215"><a name="en-us_topic_0183903699_p16321151161215"></a><a name="en-us_topic_0183903699_p16321151161215"></a>Sets the scheduling period of the container process.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0183903699_row188213501157"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0183903699_p158831150161512"><a name="en-us_topic_0183903699_p158831150161512"></a><a name="en-us_topic_0183903699_p158831150161512"></a>--cpu-quota</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0183903699_p12883750151511"><a name="en-us_topic_0183903699_p12883750151511"></a><a name="en-us_topic_0183903699_p12883750151511"></a>Sets the CPU time that can be used by the container process in a scheduling period.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0183903699_row1475055510158"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0183903699_p5750145515159"><a name="en-us_topic_0183903699_p5750145515159"></a><a name="en-us_topic_0183903699_p5750145515159"></a>--cpuset-cpus</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0183903699_p1750125561520"><a name="en-us_topic_0183903699_p1750125561520"></a><a name="en-us_topic_0183903699_p1750125561520"></a>Sets the list of CPUs that can be used by the container process.</p>
    <div class="note" id="en-us_topic_0183903699_note1610940172310"><a name="en-us_topic_0183903699_note1610940172310"></a><a name="en-us_topic_0183903699_note1610940172310"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0183903699_p1410950132311"><a name="en-us_topic_0183903699_p1410950132311"></a><a name="en-us_topic_0183903699_p1410950132311"></a>When the secure container uses the <strong id="en-us_topic_0183903699_b209151346113119"><a name="en-us_topic_0183903699_b209151346113119"></a><a name="en-us_topic_0183903699_b209151346113119"></a>--cpuset-cpus</strong> option to bind a CPU, the CPU ID cannot exceed the number of CPUs in the lightweight VM corresponding to the secure container minus 1. (The CPU ID in the lightweight VM starts from 0.)</p>
    </div></div>
    </td>
    </tr>
    <tr id="en-us_topic_0183903699_row830172021620"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0183903699_p173012012166"><a name="en-us_topic_0183903699_p173012012166"></a><a name="en-us_topic_0183903699_p173012012166"></a>--cpuset-mems</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0183903699_p129461755102515"><a name="en-us_topic_0183903699_p129461755102515"></a><a name="en-us_topic_0183903699_p129461755102515"></a>Sets the memory node that can be accessed by the container process.</p>
    <div class="note" id="en-us_topic_0183903699_note17106188267"><a name="en-us_topic_0183903699_note17106188267"></a><a name="en-us_topic_0183903699_note17106188267"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0183903699_p21015188261"><a name="en-us_topic_0183903699_p21015188261"></a><a name="en-us_topic_0183903699_p21015188261"></a>Secure containers do not support the multi-NUMA architecture and configuration. The <strong id="en-us_topic_0183903699_b42249243323"><a name="en-us_topic_0183903699_b42249243323"></a><a name="en-us_topic_0183903699_b42249243323"></a>--cpuset-mems</strong> option of NUMA memory can only be set to <strong id="en-us_topic_0183903699_b20916154219322"><a name="en-us_topic_0183903699_b20916154219322"></a><a name="en-us_topic_0183903699_b20916154219322"></a>0</strong>.</p>
    </div></div>
    </td>
    </tr>
    </tbody>
    </table>

3.  Configure CPU hot swap.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The CPU hot swap function of the secure container requires the virtualization component QEMU.  

    The  **enable\_cpu\_memory\_hotplug**  option in the kata-runtime configuration file  **config.toml**  is used to enable or disable CPU and memory hot swap. The default value is  **false**, indicating that CPU and memory hot swap is disabled. If the value is  **true**, CPU and memory hot swap is enabled.

    The  **--cpus**  option is reused in kata-runtime to implement the CPU hot swap function. The total number of  **--cpus**  options of all containers in a pod is calculated to determine the number of CPUs to be hot added to the lightweight VM.

    Example:

    ```
    #Start a pause container. By default, one vCPU is allocated to a lightweight VM.
    docker run -tid --runtime kata-runtime --network none --annotation io.kubernetes.docker.type=podsandbox busybox sleep 999999
    77b40fb72f63b11dd3fcab2f6dabfc7768295fced042af8c7ad9c0286b17d24f
    
    #View the number of CPUs in the lightweight VM after the pause container is started.
    docker exec 77b40fb72f6 lscpu
    Architecture:          x86_64
    CPU op-mode(s):        32-bit, 64-bit
    Byte Order:            Little Endian
    CPU(s):                1
    On-line CPU(s) list:   0
    Thread(s) per core:    1
    Core(s) per socket:    1
    Socket(s):             1
    
    #Start a new container in the same pod and run the --cpus command to set the number of CPUs required by the container to 4.
    docker run -tid --runtime kata-runtime --network none --cpus 4 --annotation io.kubernetes.docker.type=container --annotation io.kubernetes.sandbox.id=77b40fb72f63b11dd3fcab2f6dabfc7768295fced042af8c7ad9c0286b17d24f busybox sleep 999999
    7234d666851d43cbdc41da356bf62488b89cd826361bb71d585a049b6cedafd3
    
    #View the number of CPUs in the current lightweight VM.
    docker exec 7234d6668 lscpu
    Architecture:          x86_64
    CPU op-mode(s):        32-bit, 64-bit
    Byte Order:            Little Endian
    CPU(s):                4
    On-line CPU(s) list:   0-3
    Thread(s) per core:    1
    Core(s) per socket:    1
    Socket(s):             4
    
    #View the number of CPUs in the lightweight VM after deleting the container where CPUs are hot added.
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

      

      

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The pause container is only a placeholder container and does not have any workload. Therefore, when a lightweight VM is started, the CPU allocated by default can be shared by other containers. Therefore, you only need to hot add three CPUs to the lightweight VM for the new container started in the preceding example.  

    -   After the container where the CPU is hot added is stopped, the CPU is removed when the container is started.


