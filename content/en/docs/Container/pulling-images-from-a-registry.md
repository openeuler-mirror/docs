# Pulling Images from a Registry<a name="EN-US_TOPIC_0184808125"></a>

## Description<a name="en-us_topic_0183111389_section1580545185615"></a>

Pull images from a registry to the local host.

## Usage<a name="en-us_topic_0183111389_section161563816572"></a>

```
isula pull [OPTIONS] NAME[:TAG|@DIGEST]
```

## Parameters<a name="en-us_topic_0183111389_section10141195225710"></a>

For details about parameters in the  **pull**  command, see  [Table 3](command-line-parameters.md#en-us_topic_0189976507_table157501230181515).

## Example<a name="en-us_topic_0183111389_section13707195105818"></a>

```
$ isula pull localhost:5000/official/busybox
Image "localhost:5000/official/busybox" pulling
Image "localhost:5000/official/busybox@sha256:bf510723d2cd2d4e3f5ce7e93bf1e52c8fd76831995ac3bd3f90ecc866643aff" pulled
```

