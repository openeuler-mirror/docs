# Deleting a Role<a name="EN-US_TOPIC_0230590564"></a>

You can use the  **DROP ROLE**  statement or  **dropuser**  command to delete a role. The  **dropuser**  command encapsulates the  **DROP ROLE**  statement and needs to be executed on the shell GUI instead of the database GUI.

```
DROP ROLE rolename;
```

```
dropuser rolename
```

In the preceding command,  _rolename_  indicates the role name.

## Example<a name="section207605920321"></a>

\#Delete the  **userexample1**  role.

```
postgres=# DROP ROLE userexample1;
```

\#Delete the  **userexample2**  role.

```
[postgres@localhost ~]$ dropuser userexample2
```

