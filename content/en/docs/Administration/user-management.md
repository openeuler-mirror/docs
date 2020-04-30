# User Management

In Linux, each common user has an account, including the user name, password, and home directory. There are also special users created for specific purposes, and the most important special user is the admin account whose default user name is root. In addition, Linux provides user groups so that each user belongs to at least one group, facilitating permission management.

The control of users and user groups is a core element of openEuler security management. This topic introduces the user and group management commands and explains how to assign privileges to common users in graphical user interface and on command lines.
<!-- TOC -->

- [User Management](#user-management)
    - [Adding a User](#adding-a-user)
        - [useradd Command](#useradd-command)
        - [User Information Files](#user-information-files)
        - [Example](#example)
    - [Modifying a User Account](#modifying-a-user-account)
        - [Changing a Password](#changing-a-password)
        - [Changing User's Login Shell](#changing-users-login-shell)
        - [Changing the Home Directory](#changing-the-home-directory)
        - [Changing a UID](#changing-a-uid)
        - [Changing Account Expiry Date](#changing-account-expiry-date)
    - [Deleting Users](#deleting-users)
    - [Granting Rights to a Common User](#granting-rights-to-a-common-user)

<!-- /TOC -->


## Adding a User

### useradd Command
Run the  **useradd**  command as the user  **root**  to add user information to the system. In the command,  _options_  indicates related parameters and  _user\_name_  indicates the user name.

```
useradd [options] user_name
```

### User Information Files
The following files contain user account information:

-   /etc/passwd: user account information
-   /etc/shadow file: user account encryption information
-   /etc/group file: group information
-   /etc/default/useradd: default configurations
-   /etc/login.defs: system wide settings
-   /etc/skel: default directory that holds initial configuration files

### Example
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
>If the command output contains **BAD PASSWORD: The password fails the dictionary check - it is too simplistic/sytematic**, the password is too simple and needs to be reset.  

## Modifying a User Account

### Changing a Password
Common users can change their passwords using the  **passwd**  command. Only the admin is allowed to use the  **passwd username**  command to change passwords for other users.

### Changing User's Login Shell
Common users can use the  **chsh**  command to change their login shell. Only the admin is allowed to run the  **chsh username**  command to change login shell for other users.

Users can also run the  **usermod**  command as the user  **root**  to modify the shell information. In the command,  _new\_shell\_path_  indicates the target shell path, and  _username_  indicates the user name to be modified. Change them based on the site requirements.

```
usermod -s new_shell_path username
```

For example, to change the shell of user\_example to csh, run the following command:

```
# usermod -s /bin/csh user_example
```

### Changing the Home Directory
-   To change the home directory, run the following command as the user  **root**. In the command,  _new\_home\_directory_  indicates the created target home directory, and  _username_  indicates the user name to be changed. Change them based on the site requirements.

    ```
    usermod -d new_home_directory username
    ```

-   To move the content in the current home directory to a new one, run the usermod command with the -m option:

    ```
    usermod -d new_home_directory -m username
    ```


### Changing a UID
To change the user ID, run the following command as the user  **root**. In the command,  _UID_  indicates the target user ID and  _username_  indicates the user name. Change them based on the site requirements.

```
usermod -u UID username
```

The usermod command can change a user's UID in all files and directories under the user's home directory. However, for files outside the user's home directory, their owners can only be changed using the  **chown**  command.

### Changing Account Expiry Date
If the shadow password is used, run the following command as the user  **root**  to change the validity period of an account. In the command,  _MM_,  _DD_, and  _YY_  indicate the month, day, and year, respectively, and  _username_  indicates the user name. Change them based on the site requirements.

```
usermod -e MM/DD/YY username
```

## Deleting Users

Run the  **userdel**  command as the user  **root**  to delete an existing user.

For example, run the following command to delete user Test:

```
# userdel Test
```

If you also need to delete the user's home directory and all contents in the directory, run the  **userdel**  command with the -r option to delete them recursively.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>You are not advised to directly delete a user who has logged in to the system. To forcibly delete a user, run the  **userdel -f** _Test_  command.  

## Granting Rights to a Common User

The  **sudo**  command allows common users to execute commands that can be executed only by administrator accounts.

The  **sudo**  command allows the user specified in the  **/etc/sudoers**  file to execute the administrator account commands. For example, an authorized common user can run:

```
sudo /usr/sbin/useradd newuserl
```

The  **sudo**  command can specify a common user that has been added to the  **/etc/sudoers**  file to process tasks as required.

The information configured in the  **/etc/sudoers**  file is as follows:

-   Blank lines or comment lines starting with  **\#**: Have no specific functions.
-   Optional host alias lines: Create the name of a host list. The lines must start with  **Host\_Alias**. The host names in the list must be separated by commas \(,\). For example:

    ```
    Host_Alias  linux=ted1,ted2
    ```

    **ted1**  and  **ted2**  are two host names, which can be called  **linux**.


-   Optional user alias lines: Create the name of a user list. The lines must start with  **User\_Alias**. The user names in the list must be separated by commas \(,\). The user alias lines have the same format as the host alias lines.
-   Optional command alias lines: Create the name of a command list. The lines must start with  **Cmnd\_Alias**. The commands in the list must be separated by commas \(,\).
-   Optional running mode alias lines: Create the name of a user list. The difference is that such alias can enable a user in the list to run the  **sudo**  command.
-   Necessary declaration lines for user access:

    The declaration syntax for user access is as follows:

    ```
    user host = [ run as user ] command list
    ```

    Set the user to a real user name or a defined user alias, and set the host to a real host name or a defined host alias. By default, all the commands executed by sudo are executed as user  **root**. If you want to use another account, you can specify it.  **command list**  is either a command list separated by commas \(,\) or a defined command alias. For example:

    ```
    ted1   ted2=/sbin/shutdown
    ```

    In this example, ted1 can run the shutdown command on ted2.

    ```
    newuser1 ted1=(root) /usr/sbin/useradd,/usr/sbin/userdel
    ```

    This indicates that newuser1 on the ted1 host can run the  **useradd**  and  **userdel**  commands as the user  **root**.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   You can define multiple aliases in a line and separate them with colons \(:\).  
    >-   You can add an exclamation mark \(!\) before a command or a command alias to make the command or the command alias invalid.  
    >-   There are two keywords: ALL and NOPASSWD. ALL indicates all files, hosts, or commands, and NOPASSWD indicates that no password is required.  
    >-   By modifying user access, you can change the access permission of a common user to be the same as that of the user  **root**. Then, you can grant rights to the common user.  


The following is an example of the  **sudoers**  file:

```
#sudoers files
#User alias specification
User_Alias ADMIN=ted1:POWERUSER=globus,ted2
#user privilege specification
ADMIN ALL=ALL
POWERUSER ALL=ALL,!/bin/su
```

In the preceding information:

-   User\_Alias ADMIN=ted1:POWERUSER=globus,ted2

    Two aliases ADMIN and POWERUSER are defined.

-   ADMIN ALL=ALL

    ADMIN can run all commands as the user  **root**  on all hosts.

-   POWERUSER ALL=ALL,!/bin/su

    POWERUSER can run all commands except the  **su**  command as the user  **root**  on all hosts.

