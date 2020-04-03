# Restricting Permissions on the  **at**  Command<a name="EN-US_TOPIC_0192977552"></a>

## Description<a name="en-us_topic_0152100391_s537ff0b05b114d12a100992eb3adee78"></a>

The  **at**  command is used to create a scheduled task. Users who can run the  **at**  command must be specified to protect the system from being attacked.

## Implementation<a name="en-us_topic_0152100391_s3681c3be654d40558aefb25645ccb765"></a>

1.  Delete the  **/etc/at.deny**  file.

    ```
    rm -f /etc/at.deny
    ```

2.  Run the following command to change the ownership of file  **/etc/at.allow**  file to  **root:root**.

    ```
    chown root:root /etc/at.allow
    ```

3.  Set that only user  **root**  can operate file  **/etc/at.allow**.

    ```
    chmod og-rwx /etc/at.allow
    ```


