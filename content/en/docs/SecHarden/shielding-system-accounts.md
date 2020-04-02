# Shielding System Accounts<a name="EN-US_TOPIC_0192977567"></a>

## Description<a name="en-us_topic_0152100215_se1f26187360344f39f6cc8282ff636e7"></a>

Accounts excluding user accounts are system accounts. System accounts cannot be used for logins or performing other operations. Therefore, system accounts must be shielded.

## Implementation<a name="en-us_topic_0152100215_s54bf64c9c67a44169f3c33c9c71b79b7"></a>

Modify the shell of a system account to  **/sbin/nologin**.

```
usermod -L -s /sbin/nologin $systemaccount
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>_$systemaccount_  indicates the system account.  

