# Viewing Users<a name="EN-US_TOPIC_0231470878"></a>

Run the  **SHOW GRANTS**  or  **SELECT**  statement to view one or more users.

View a specific user:

```
SHOW GRANTS [FOR 'username'@'hostname'];
```

```
SELECT USER,HOST,PASSWORD FROM mysql.user WHERE USER='username';
```

View all users:

```
SELECT USER,HOST FROM mysql.user;
```

In the preceding information:

-   _username_: name of a user.
-   _hostname_: host name.

## Example<a name="section207605920321"></a>

\#View the user  **userexample1**.

```
> SHOW GRANTS FOR 'userexample1'@'localhost';
```

\#View all users in the MySQL database.

```
> SELECT USER,HOST FROM mysql.user;
```

