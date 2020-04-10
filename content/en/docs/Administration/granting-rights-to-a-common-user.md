# Granting Rights to a Common User<a name="EN-US_TOPIC_0229622694"></a>

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


