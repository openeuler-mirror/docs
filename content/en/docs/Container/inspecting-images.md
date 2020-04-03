# Inspecting Images<a name="EN-US_TOPIC_0184808129"></a>

## Description<a name="en-us_topic_0183111393_section7370111865810"></a>

After the configuration information of an image is returned, you can use the  **-f**  parameter to filter the information as needed.

## Usage<a name="en-us_topic_0183111393_section7154330115816"></a>

```
isula inspect [options] CONTAINER|IMAGE [CONTAINER|IMAGE...]
```

## Parameters<a name="en-us_topic_0183111393_section1368424465811"></a>

For details about parameters in the  **inspect**  command, see  [Table 7](command-line-parameters.md#en-us_topic_0189976507_table73237211516).

## Example<a name="en-us_topic_0183111393_section471813585589"></a>

```
$ isula inspect -f "{{json .image.id}}" rnd-dockerhub.huawei.com/official/busybox
"e4db68de4ff27c2adfea0c54bbb73a61a42f5b667c326de4d7d5b19ab71c6a3b"
```

