# Restricting Permissions on the  **sudo**  Command<a name="EN-US_TOPIC_0225746610"></a>

## Description<a name="en-us_topic_0152100407_sc1bdabc3003d41a18eb03334f6708974"></a>

A common user can use the  **sudo**  command to run commands as the user  **root**. To harden system security, it is necessary to restrict permissions on the  **sudo**  command. Only user  **root**  can use the  **sudo**  command.

## Implementation<a name="en-us_topic_0152100407_s9cb4ace0385747ee9889affa53bef9dc"></a>

Modify the  **/etc/sudoers**  file to restrict permissions on the  **sudo**  command. Comment out the following configuration line:

```
#%wheel ALL=(ALL)       ALL
```

