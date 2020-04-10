# Deleting User Permissions<a name="EN-US_TOPIC_0230408674"></a>

Run the  **REVOKE**  statement to delete the permissions of a user, but the user will not be deleted.

```
REVOKE privilege ON databasename.tablename FROM 'username'@'hostname';
```

The parameters in the  **REVOKE**  statement are the same as those in the  **GRANT**  statement.

To use the  **REVOKE**  statement, you must have the global CREATE USER or UPDATE permission for the database.

## Example<a name="section207605920321"></a>

\#Delete the INSERT permission of local user userexample.

```
> REVOKE INSERT ON *.* FROM 'userexample'@'localhost';
```

