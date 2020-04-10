# Restoring a Database<a name="EN-US_TOPIC_0230408681"></a>

Run the  **mysqldump**  command to restore the database.

Back up one or more tables:

```
mysql -h hostname -P portnumber -u username -ppassword databasename < infile
```

In the preceding information:

-   _hostname_: host name.
-   _portnumber_: port number.
-   _username_: name of a user.
-   _password_: password.
-   _databasename_: database name.
-   _infile_:  **outfile**  parameter in the  **mysqldump **command.

## Example<a name="section207605920321"></a>

\#Restore a database.

```
# mysql -h 192.168.202.144 -P 3306 -uroot -p123456 -t db1 < db1.sql
```

