# analysis<a name="ZH-CN_TOPIC_0213225932"></a>

## 功能描述<a name="section124121426195015"></a>

采集系统的实时统计数据进行负载类型识别，并进行自动优化。

## 命令格式<a name="section1019897115110"></a>

**atune-adm analysis**  \[OPTIONS\]

## 参数说明<a name="section16755152320311"></a>

-   OPTIONS

    <a name="table17341193974513"></a>
    <table><thead align="left"><tr id="row11341739154514"><th class="cellrowborder" valign="top" width="23.87%" id="mcps1.1.3.1.1"><p id="p3341183964511"><a name="p3341183964511"></a><a name="p3341183964511"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="76.13%" id="mcps1.1.3.1.2"><p id="p73410399457"><a name="p73410399457"></a><a name="p73410399457"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row334110395452"><td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.1.3.1.1 "><p id="p9341639104517"><a name="p9341639104517"></a><a name="p9341639104517"></a>--model, -m</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.13%" headers="mcps1.1.3.1.2 "><p id="p23414394459"><a name="p23414394459"></a><a name="p23414394459"></a>用户自训练产生的新模型</p>
    </td>
    </tr>
    </tbody>
    </table>


## 使用示例<a name="section5961238145111"></a>

-   使用默认的模型进行分类识别

    ```
    # atune-adm analysis
    ```

-   使用自训练的模型进行识别

    ```
    # atune-adm analysis --model /usr/libexec/atuned/analysis/models/new-model.m
    ```


