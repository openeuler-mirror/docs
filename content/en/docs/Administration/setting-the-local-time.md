# Setting the Local Time<a name="EN-US_TOPIC_0229622750"></a>

## Overview<a name="section218404017405"></a>

In the openEuler system, vsftpd uses the Greenwich Mean Time \(GMT\) time by default, which may be different from the local time. For example, the GMT time is 8 hours later than the Beijing time. You need to change the GMT time to the local time. Otherwise, the server time and client time are inconsistent, which may cause errors during file upload and download.

## Setting Method<a name="section31691555151212"></a>

To set the vsftpd time to the local time, perform the following steps:

1.  Open the vsftpd.conf file and change the value of use\_localtime to  **YES**. Run the following command:

    ```
    # vim /etc/vsftpd/vsftpd.conf
    ```

    Modify the file contents as follows:

    ```
    use_localtime=YES
    ```

2.  Restart the vsftpd service.

    ```
    # systemctl restart vsftpd
    ```

3.  Set the vsftpd service to start automatically upon power-on.

    ```
    # systemctl enable vsftpd
    ```


