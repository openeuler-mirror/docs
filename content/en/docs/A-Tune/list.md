# list<a name="EN-US_TOPIC_0213225902"></a>

## Function<a name="section124121426195015"></a>

Query the supported workload types, profiles, and the values of Active.

## Format<a name="section1019897115110"></a>

**atune-adm list**

## Example<a name="section5961238145111"></a>

```
# atune-adm list

Support WorkloadTypes:
+-----------------------------------+------------------------+-----------+
| WorkloadType                      | ProfileName            | Active    |
+===================================+========================+===========+
| default                           | default                | true      |
+-----------------------------------+------------------------+-----------+
| webserver                         | ssl_webserver          | false     |
+-----------------------------------+------------------------+-----------+
| big_database                      | database               | false     |
+-----------------------------------+------------------------+-----------+
| big_data                          | big_data               | false     |
+-----------------------------------+------------------------+-----------+
| in-memory_computing               | in-memory_computing    | false     |
+-----------------------------------+------------------------+-----------+
| in-memory_database                | in-memory_database     | false     |
+-----------------------------------+------------------------+-----------+
| single_computer_intensive_jobs    | compute-intensive      | false     |
+-----------------------------------+------------------------+-----------+
| communication                     | rpc_communication      | false     |
+-----------------------------------+------------------------+-----------+
| idle                              | default                | false     |
+-----------------------------------+------------------------+-----------+

```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>If the value of Active is  **true**, the profile is activated. In the example, the profile of the default type is activated.  

