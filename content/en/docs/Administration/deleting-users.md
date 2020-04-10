# Deleting Users<a name="EN-US_TOPIC_0229622748"></a>

Run the  **userdel**  command as the user  **root**  to delete an existing user.

For example, run the following command to delete user Test:

```
# userdel Test
```

If you also need to delete the user's home directory and all contents in the directory, run the  **userdel**  command with the -r option to delete them recursively.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>You are not advised to directly delete a user who has logged in to the system. To forcibly delete a user, run the  **userdel -f **_Test_  command.  

