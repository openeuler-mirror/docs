# Logging In to a Registry<a name="EN-US_TOPIC_0184808123"></a>

## Description<a name="en-us_topic_0183111387_section71502175515"></a>

The  **isula login**  command is run to log in to a registry. After successful login, you can run the  **isula pull**  command to pull images from the registry. If the registry does not require a password, you do not need to run this command before pulling images.

## Usage<a name="en-us_topic_0183111387_section63262635520"></a>

```
isula login [OPTIONS] SERVER
```

## Parameters<a name="en-us_topic_0183111387_section1691194220558"></a>

For details about parameters in the  **login**  command, see  [Table 1](command-line-parameters.md#en-us_topic_0189976507_table2711184314112).

## Example<a name="en-us_topic_0183111387_section192534542553"></a>

```
$ isula login -u abc my.csp-edge.com:5000

Login Succeeded
```

