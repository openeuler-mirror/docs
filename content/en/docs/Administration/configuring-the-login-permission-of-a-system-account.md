# Configuring the Login Permission of a System Account<a name="EN-US_TOPIC_0229622720"></a>

Generally, users need to restrict the login permission of some accounts. You can set the restriction as required.

Two files are used to restrict the login of system accounts. The default files are as follows:

-   /etc/vsftpd/ftpusers: This file is managed by the PAM module and is determined by the settings of the /etc/pam.d/vsftpd file.
-   /etc/vsftpd/user\_list: This file is set by userlist\_file in vsftpd.conf and is provided by vsftpd.

Both files must exist and have the same content. You can write the accounts whose UIDs are smaller than 500 to the two files by referring to the /etc/passwd. Each line indicates an account.

To restrict the login of system accounts, add the accounts to /etc/vsftpd/ftpusers and /etc/vsftpd/user\_list.

Open the user\_list file to view the account information in the current file. The command and output are as follows:

```
# vim /etc/vsftpd/user_list
root
bin
daemon
adm
lp
sync
shutdown
halt
mail
news
uucp
operator
games
nobody
```

