# Hardening the  **su**  Command<a name="EN-US_TOPIC_0192977573"></a>

## Description<a name="en-us_topic_0152100183_s4abbceaa69104838a02b61689dfba3ce"></a>

To enhance system security and prevent the environment variables of the current user from being brought into other environments when you run the  **su**  command to switch to another user, this item has been configured by default in openEuler. The  **PATH**  variable is always initialized when the  **su**  command is used to switch users.

## Implementation<a name="en-us_topic_0152100183_s319870312e214c8eb2ac00d2e81c4f93"></a>

Modify the  **/etc/login.defs**  file. The configuration is as follows:

```
ALWAYS_SET_PATH=yes
```

