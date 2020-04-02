# train<a name="EN-US_TOPIC_0213225909"></a>

## Function<a name="section124121426195015"></a>

Use the collected data to train the model. Collect data of at least two workload types during training. Otherwise, an error is reported.

## Format<a name="section1019897115110"></a>

**atune-adm train**  <OPTIONS\>

## Parameter Description<a name="section4591487175"></a>

-   OPTIONS

    <a name="en-us_topic_0210923699_table847613161310"></a>
    <table><thead align="left"><tr id="en-us_topic_0210923699_row349814169120"><th class="cellrowborder" valign="top" width="23.87%" id="mcps1.1.3.1.1"><p id="en-us_topic_0210923699_p1549841614116"><a name="en-us_topic_0210923699_p1549841614116"></a><a name="en-us_topic_0210923699_p1549841614116"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="76.13%" id="mcps1.1.3.1.2"><p id="en-us_topic_0210923699_p84988168119"><a name="en-us_topic_0210923699_p84988168119"></a><a name="en-us_topic_0210923699_p84988168119"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0210923699_row13499181612118"><td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0210923699_p24993163119"><a name="en-us_topic_0210923699_p24993163119"></a><a name="en-us_topic_0210923699_p24993163119"></a>--data_path, -d</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.13%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0210923699_p134991316818"><a name="en-us_topic_0210923699_p134991316818"></a><a name="en-us_topic_0210923699_p134991316818"></a>Path for storing CSV files required for model training</p>
    </td>
    </tr>
    <tr id="en-us_topic_0210923699_row149914161115"><td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0210923699_p14991516914"><a name="en-us_topic_0210923699_p14991516914"></a><a name="en-us_topic_0210923699_p14991516914"></a>--output_file, -o</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.13%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0210923699_p049916166114"><a name="en-us_topic_0210923699_p049916166114"></a><a name="en-us_topic_0210923699_p049916166114"></a>Model generated through training</p>
    </td>
    </tr>
    </tbody>
    </table>


## Example<a name="section5961238145111"></a>

Use the CSV file in the  **data**  directory as the training input. The generated model  **new-model.m**  is stored in the  **model**  directory.

```
# atune-adm train --data_path /home/data --output_file /usr/libexec/atuned/analysis/models/new-model.m 
```

