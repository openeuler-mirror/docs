# Granting Permissions to a User<a name="EN-US_TOPIC_0231470881"></a>

Run the  **GRANT**  statement to grant permissions to a new user.

```
GRANT privileges ON databasename.tablename TO 'username'@'hostname';
```

In the preceding information:

-   **ON**  clause: specifies the object and level on which the permission is granted.
-   _privileges_: indicates the operation permissions of a user, such as  **SELECT**, INSERT, and  **UPDATE**. To grant all permissions to a user, use  **ALL**.
-   _databasename_: database name.
-   _tablename_: table name.
-   **TO**  clause: sets the user password and specifies the user to whom the permission is granted.
-   _username_: name of a user.
-   _hostname_: host name.

To grant the user the permission to operate all databases and tables, use asterisks \(\*\), for example,  **\*.\***.

If you specify a password for an existing user in the  **TO**  clause, the new password will overwrite the original password.

If the permission is granted to a non-existent user, a  **CREATE USER**  statement is automatically executed to create the user, but the password must be specified for the user.

## Example<a name="section207605920321"></a>

\#Grant the  **SELECT**  and  **INSERT**  permissions to local user  **userexample**.

```
> GRANT SELECT,INSERT ON *.* TO 'userexample'@'localhost'; 
```

