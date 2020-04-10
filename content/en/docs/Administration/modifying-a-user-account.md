# Modifying a User Account<a name="EN-US_TOPIC_0229622697"></a>

## Changing a Password<a name="en-us_topic_0151921036_sd4ca20effd4a43568429e865b27eaa8e"></a>

Common users can change their passwords using the  **passwd**  command. Only the admin is allowed to use the  **passwd username**  command to change passwords for other users.

## Changing User's Login Shell<a name="en-us_topic_0151921036_sacc71044bcfa400aa4c28aaff0dc9721"></a>

Common users can use the  **chsh**  command to change their login shell. Only the admin is allowed to run the  **chsh username**  command to change login shell for other users.

Users can also run the  **usermod**  command as the user  **root**  to modify the shell information. In the command,  _new\_shell\_path_  indicates the target shell path, and  _username_  indicates the user name to be modified. Change them based on the site requirements.

```
usermod -s new_shell_path username
```

For example, to change the shell of user\_example to csh, run the following command:

```
# usermod -s /bin/csh user_example
```

## Changing the Home Directory<a name="en-us_topic_0151921036_se0afe3a359274e7e9cff9f1574aca343"></a>

-   To change the home directory, run the following command as the user  **root**. In the command,  _new\_home\_directory_  indicates the created target home directory, and  _username_  indicates the user name to be changed. Change them based on the site requirements.

    ```
    usermod -d new_home_directory username
    ```

-   To move the content in the current home directory to a new one, run the usermod command with the -m option:

    ```
    usermod -d new_home_directory -m username
    ```


## Changing a UID<a name="en-us_topic_0151921036_sddb73179ed6f4f9f9677e2b0957820b3"></a>

To change the user ID, run the following command as the user  **root**. In the command,  _UID_  indicates the target user ID and  _username_  indicates the user name. Change them based on the site requirements.

```
usermod -u UID username
```

The usermod command can change a user's UID in all files and directories under the user's home directory. However, for files outside the user's home directory, their owners can only be changed using the  **chown**  command.

## Changing Account Expiry Date<a name="en-us_topic_0151921036_sbdcb59dafe5b4c2799f5c7e5ba81601d"></a>

If the shadow password is used, run the following command as the user  **root**  to change the validity period of an account. In the command,  _MM_,  _DD_, and  _YY_  indicate the month, day, and year, respectively, and  _username_  indicates the user name. Change them based on the site requirements.

```
usermod -e MM/DD/YY username
```

