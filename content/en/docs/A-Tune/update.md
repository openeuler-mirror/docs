# update<a name="EN-US_TOPIC_0213225906"></a>

## Function<a name="section124121426195015"></a>

Update an optimization item of a workload type to the content in the  **new.conf**  file.

## Format<a name="section1019897115110"></a>

**atune-adm update**  <WORKLOAD\_TYPE\> <PROFILE\_NAME\> <PROFILE\_FILE\>

## Example<a name="section5961238145111"></a>

Update the workload type to  **test\_type**  and the optimization item of test\_name to  **new.conf**.

```
# atune-adm update test_type test_name ./new.conf
```

