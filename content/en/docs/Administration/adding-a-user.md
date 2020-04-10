# Adding a User<a name="EN-US_TOPIC_0229622747"></a>

## useradd Command<a name="en-us_topic_0151921027_s11c439e7f97c41bcb54c2dfa86a6da72"></a>

Run the  **useradd**  command as the user  **root**  to add user information to the system. In the command,  _options_  indicates related parameters and  _user\_name_  indicates the user name.

```
useradd [options] user_name
```

## User Information Files<a name="en-us_topic_0151921027_s68e83f5c1af5415cb6a505f1a80a4bf2"></a>

The following files contain user account information:

-   /etc/passwd: user account information
-   /etc/shadow file: user account encryption information
-   /etc/group file: group information
-   /etc/default/useradd: default configurations
-   /etc/login.defs: system wide settings
-   /etc/skel: default directory that holds initial configuration files

## Example<a name="en-us_topic_0151921027_s2bad5f04f3dc4c7db52b9d5d24649268"></a>

For example, to create a user named user\_example, run the following command as the user  **root**:

```
# useradd user_example
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>If no prompt is displayed, the user is successfully created. After the user is created, run the  **passwd**  command to assign a password to the user. A new account without a password will be banned.  

To view information about the new user, run the  **id**  command:

```
# id user_example
uid=502(user_example)    gid=502(user_example)    groups=502(user_example)
```

To change the password of the user\_example, run the following command:

```
# passwd user_example
```

Then, enter the password and confirm it as prompted:

```
# passwd user_example
Changing password for user user_example.
New password:
Retype new password:
passwd: all authentication tokens updated successfully.
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>If the command output contains** BAD PASSWORD: The password fails the dictionary check - it is too simplistic/sytematic**, the password is too simple and needs to be reset.  

