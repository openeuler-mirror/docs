# Loading Images<a name="EN-US_TOPIC_0184808132"></a>

## Description<a name="en-us_topic_0183111395_section15590511125913"></a>

Load images based on the  **manifest**  files of embedded images. The value of  **--type**  must be set to  **embedded**.

## Usage<a name="en-us_topic_0183111395_section18519112211596"></a>

```
isula load [OPTIONS] --input=FILE --type=TYPE
```

## Parameters<a name="en-us_topic_0183111395_section19828183395920"></a>

For details about parameters in the  **load**  command, see  [Table 5](command-line-parameters.md#en-us_topic_0189976507_table99761512187).

## Example<a name="en-us_topic_0183111395_section14212545135918"></a>

```
$ isula load -i test.manifest --type embedded
Load image from "/root/work/bugfix/tmp/ci_testcase_data/embedded/img/test.manifest" success
```

