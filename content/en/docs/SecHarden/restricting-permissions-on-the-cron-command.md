# Restricting Permissions on the  **cron**  Command<a name="EN-US_TOPIC_0192977553"></a>

## Description<a name="en-us_topic_0152100335_sd1be7f48ab304e97b21867e554f115dd"></a>

The  **cron**  command is used to create a routine task. Users who can run the  **cron**  command must be specified to protect the system from being attacked.

## Implementation<a name="en-us_topic_0152100335_s138659793af743d082dce3e785546b5b"></a>

1.  Delete the  **/etc/cron.deny**  file.

    ```
    rm -f /etc/at.deny
    ```

2.  Run the following command to change the ownership of the  **/etc/cron.allow**  file to  **root:root**:

    ```
    chown root:root /etc/cron.allow
    ```

3.  Set that only user  **root**  can operate file  **/etc/cron.allow**.

    ```
    chmod og-rwx /etc/cron.allow
    ```


