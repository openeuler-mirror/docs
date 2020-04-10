# Configuring Welcome Information<a name="EN-US_TOPIC_0229622719"></a>

To use the vsftpd service normally, the welcome information file must exist. To configure the welcome.txt file of the vsftp service, perform the following steps:

1.  Open the vsftpd.conf configuration file, add the welcome information to the file, save the file, and exit.

    ```
    # vim /etc/vsftpd/vsftpd.conf
    ```

    The following configuration lines need to be added:

    ```
    banner_file=/etc/vsftpd/welcome.txt
    ```

2.  Create welcome information. Specifically, open the welcome.txt file, write the welcome information, save the file, and exit.

    ```
    # vim /etc/vsftpd/welcome.txt
    ```

    The following is an example:

    ```
    Welcome to this FTP server!
    ```


