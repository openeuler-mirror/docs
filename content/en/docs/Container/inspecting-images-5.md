# Inspecting Images<a name="EN-US_TOPIC_0184808134"></a>

## Description<a name="en-us_topic_0183111397_section15141105818"></a>

After the configuration information of an image is returned, you can use the  **-f**  parameter to filter the information as needed.

## Usage<a name="en-us_topic_0183111397_section1485216151011"></a>

```
isula inspect [options] CONTAINER|IMAGE [CONTAINER|IMAGE...]
```

## Parameters<a name="en-us_topic_0183111397_section03005271815"></a>

For details about parameters in the  **inspect**  command, see  [Table 7](command-line-parameters.md#en-us_topic_0189976507_table73237211516).

## Example<a name="en-us_topic_0183111397_section10782439315"></a>

```
$ isula inspect -f "{{json .created}}" test:v1
"2018-03-01T15:55:44.322987811Z"
```

