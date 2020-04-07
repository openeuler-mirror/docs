# Logging Out of a Registry<a name="EN-US_TOPIC_0184808124"></a>

## Description<a name="en-us_topic_0183111388_section103427106563"></a>

The  **isula logout**  command is run to log out of a registry. If you run the  **isula pull**  command to pull images from the registry after logging out of the system, the image will fail to be pulled because you are not authenticated.

## Usage<a name="en-us_topic_0183111388_section749452010564"></a>

```
isula logout SERVER
```

## Parameters<a name="en-us_topic_0183111388_section12531230175614"></a>

For details about parameters in the  **logout**  command, see  [Table 2](command-line-parameters.md#en-us_topic_0189976507_table184058282137).

## Example<a name="en-us_topic_0183111388_section18981040155617"></a>

```
$ isula logout my.csp-edge.com:5000
Logout Succeeded
```

