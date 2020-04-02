# Querying the Service Version<a name="EN-US_TOPIC_0184808142"></a>

## Description<a name="en-us_topic_0183074345_section1289732214455"></a>

The  **isula version**  command is run to query the version of the iSulad service.

## Usage<a name="en-us_topic_0183074345_section1230615614486"></a>

```
isula version
```

## Example<a name="en-us_topic_0183074345_section1463661214504"></a>

Query the version information.

```
isula version
```

If the iSulad service is running properly, you can view the information about versions of the client, server, and  **OCI config**.

```
Client:
  Version:      1.0.31
  Git commit:   fa7f9902738e8b3d7f2eb22768b9a1372ddd1199
  Built:        2019-07-30T04:21:48.521198248-04:00

Server:
  Version:      1.0.31
  Git commit:   fa7f9902738e8b3d7f2eb22768b9a1372ddd1199
  Built:        2019-07-30T04:21:48.521198248-04:00

OCI config:
  Version:      1.0.0-rc5-dev
  Default file: /etc/default/isulad/config.json
```

If the iSulad service is not running, only the client information is queried and a message is displayed indicating that the connection times out.

```
Client:
  Version:      1.0.31
  Git commit:   fa7f9902738e8b3d7f2eb22768b9a1372ddd1199
  Built:        2019-07-30T04:21:48.521198248-04:00

Can not connect with server.Is the iSulad daemon running on the host?
```

Therefore, the  **isula version**  command is often used to check whether the iSulad service is running properly.

