# Deleting Users<a name="EN-US_TOPIC_0231470880"></a>

Use the  **DROP USER**  statement to delete one or more user accounts and related permissions.

```
DROP USER 'username1'@'hostname1' [,'username2'@'hostname2']...;
```

>![](public_sys-resources/icon-caution.gif) **CAUTION:**   
>The deletion of users does not affect the tables, indexes, or other database objects that they have created, because the database does not record the accounts that have created these objects.  

The  **DROP USER**  statement can be used to delete one or more database accounts and their original permissions.

To use the  **DROP USER**  statement, you must have the  **DELETE**  permission on the database or the global  **CREATE USER**  permission.

In the  **DROP USER**  statement, if the hostname of an account is not specified, the hostname is  **%**  by default.

## Example<a name="section207605920321"></a>

\#Delete the local user  **userexample**.

```
> DROP USER 'userexample'@'localhost';
```

