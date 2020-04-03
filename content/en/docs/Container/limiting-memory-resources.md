# Limiting Memory Resources<a name="EN-US_TOPIC_0184808177"></a>

1.  Configure memory resources for running a lightweight VM.

    Configuring the memory resources of a lightweight VM is to configure the memory for running the VM. The secure container uses  **--annotation com.github.containers.virtcontainers.sandbox\_mem**  to configure the memory resources for running the lightweight VM. This option can be configured only on the pause container.

    ```
    docker run -tid --runtime kata-runtime --network none --annotation io.kubernetes.docker.type=podsandbox --annotation com.github.containers.virtcontainers.sandbox_mem=<memory-size> <pause-image> <command>
    ```

    Example:

    ```
    #Start a pause container and use --annotation com.github.containers.virtcontainers.sandbox_mem=4G to allocate 4 GB memory to the lightweight VM.
    docker run -tid --runtime kata-runtime --network none --annotation io.kubernetes.docker.type=podsandbox --annotation com.github.containers.virtcontainers.sandbox_mem=4G busybox sleep 999999
    1532c3e59e7a45cd6b419aa1db07dd0069b0cdd93097f8944177a25e457e4297
    
    #View the memory information of the lightweight VM and check whether the memory size is the same as that configured in the com.github.containers.virtcontainers.sandbox_mem file.
    docker exec 1532c3e free -m
                  total        used        free      shared  buff/cache   available
    Mem:           3950          20        3874          41          55        3858
    Swap:             0           0           0
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   If the memory size of a lightweight VM is not set using  **--annotation com.github.containers.virtcontainers.sandbox\_mem**, the lightweight VM uses 1 GB memory by default.  
    >-   The minimum memory size of a pod in a secure container is 1 GB, and the maximum memory size is 256 GB. If the memory size allocated to a user exceeds 256 GB, an undefined error may occur. Currently, secure containers do not support the scenario where the memory size exceeds 256 GB.  

2.  Configure memory resources for running a container.

    The method of configuring memory resources for running a container is the same as that for the open-source Docker container. You can configure memory resource limitation parameters in the  **docker run**  command.

    <a name="en-us_topic_0182219834_table11321051171213"></a>
    <table><thead align="left"><tr id="en-us_topic_0182219834_row5321251121219"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182219834_p1208737146"><a name="en-us_topic_0182219834_p1208737146"></a><a name="en-us_topic_0182219834_p1208737146"></a><strong id="en-us_topic_0182219834_b142172544447"><a name="en-us_topic_0182219834_b142172544447"></a><a name="en-us_topic_0182219834_b142172544447"></a>Parameter</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182219834_p1332145111210"><a name="en-us_topic_0182219834_p1332145111210"></a><a name="en-us_topic_0182219834_p1332145111210"></a><strong id="en-us_topic_0182219834_b956575511443"><a name="en-us_topic_0182219834_b956575511443"></a><a name="en-us_topic_0182219834_b956575511443"></a>Description</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182219834_row1532175119122"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182219834_p15321251191214"><a name="en-us_topic_0182219834_p15321251191214"></a><a name="en-us_topic_0182219834_p15321251191214"></a>-m/--memory</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182219834_p232951121217"><a name="en-us_topic_0182219834_p232951121217"></a><a name="en-us_topic_0182219834_p232951121217"></a>Sets the memory size that can be used by the container process.</p>
    <div class="note" id="en-us_topic_0182219834_note04024417164"><a name="en-us_topic_0182219834_note04024417164"></a><a name="en-us_topic_0182219834_note04024417164"></a><span class="notetitle"> NOTE: </span><div class="notebody"><a name="en-us_topic_0182219834_ul16187123721710"></a><a name="en-us_topic_0182219834_ul16187123721710"></a><ul id="en-us_topic_0182219834_ul16187123721710"><li>When memory hot swap is disabled, the value of <strong id="en-us_topic_0182219834_b57585884515"><a name="en-us_topic_0182219834_b57585884515"></a><a name="en-us_topic_0182219834_b57585884515"></a>-m</strong> must be less than or equal to the memory size allocated when the lightweight VM is started.</li></ul>
    </div></div>
    </td>
    </tr>
    </tbody>
    </table>

3.  Configure memory hot add.

    The memory hot add function is also configured by the  **enable\_cpu\_memory\_hotplug**  option in the kata-runtime configuration file  **config.toml**. For details, see  [3](limiting-cpu-resources.md#en-us_topic_0183903699_li2167326144011).

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >Currently, memory resources support hot add only.  

    The  **-m**  option is reused in kata-runtime to implement the memory hot add function. The sum of the  **-m**  options of all containers in a pod is collected to determine the number of memories to be hot added to a lightweight VM. 

    Example:

    ```
    #Start a pause container. By default, 1 GB memory is allocated to the lightweight VM.
    docker run -tid --runtime kata-runtime --network none --annotation io.kubernetes.docker.type=podsandbox busybox sleep 999999
    99b78508ada3fa7dcbac457bb0f6e3784e64e7f7131809344c5496957931119f
    
    #View the memory size of the lightweight VM after the pause container is started.
    docker exec 99b78508ada free -m
                  total        used        free      shared  buff/cache   available
    Mem:            983          18         914          36          50         908
    Swap:             0           0           0
    
    #Start a new container in the same pod and run the -m command to set the memory size required by the container to 4 GB.
    docker run -tid --runtime kata-runtime --network none -m 4G --annotation io.kubernetes.docker.type=container --annotation io.kubernetes.sandbox.id=99b78508ada3fa7dcbac457bb0f6e3784e64e7f7131809344c5496957931119f busybox sleep 999999
    c49461745a712b2ef3127fdf43b2cbb034b7614e6060b13db12b7a5ff3c830c8
    
    #View the memory size of the lightweight VM.
    docker exec c49461745 free -m
                  total        used        free      shared  buff/cache   available
    Mem:           4055          69        3928          36          57        3891
    Swap:             0           0           0
    
    #After deleting the container where the CPU is hot added, check the memory size of the lightweight VM.
    docker rm -f c49461745
    c49461745
    
    #The hot added memory does not support the hot add function. Therefore, after the hot added memory container is deleted from the lightweight VM, the memory is still 4 GB.
    docker exec 99b78508ada free -m
                  total        used        free      shared  buff/cache   available
    Mem:           4055          69        3934          36          52        3894
    Swap:             0           0           0
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The pause container is only a placeholder container and does not have any workload. Therefore, the memory allocated to the lightweight VM during startup can be shared by other containers. You only need to hot add 3 GB memory to the lightweight VM for the new container started in the preceding example.  


