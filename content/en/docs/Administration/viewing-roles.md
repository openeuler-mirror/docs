# Viewing Roles<a name="EN-US_TOPIC_0230590562"></a>

You can run the  **SELECT**  statement or the PostgreSQL meta-command  **\\du**  to view the role.

```
SELECT rolename FROM pg_roles;
```

```
\du
```

In the preceding command,  _rolename_  indicates the role name.

## Example<a name="section207605920321"></a>

\#View the  **roleexample1**  role.

```
postgres=# SELECT roleexample1 from pg_roles;
```

\#View the existing roles.

```
postgres=# \du
```

