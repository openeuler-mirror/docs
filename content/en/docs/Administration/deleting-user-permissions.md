# Deleting User Permissions<a name="EN-US_TOPIC_0230590566"></a>

You can use the  **REVOKE**  statement to revoke the permissions previously granted to one or more roles.

Revoke the table operation permission from a role.

```
REVOKE [ GRANT OPTION FOR ] { { SELECT | INSERT | UPDATE | DELETE | REFERENCES | TRIGGER } [,...] | ALL [ PRIVILEGES ] } ON [ TABLE ] tablename [, ...] FROM { rolename | GROUP groupname | PUBLIC } [, ...]
```

Revoke the sequence operation permission from a role.

```
REVOKE [ GRANT OPTION FOR ] { { USAGE | SELECT | UPDATE } [,...] | ALL [ PRIVILEGES ] } ON SEQUENCE sequencename [, ...] FROM { rolename | GROUP groupname | PUBLIC } [, ...] [ CASCADE | RESTRICT ]  
```

Revoke the database operation permission from a role.

```
REVOKE [ GRANT OPTION FOR ] { { CREATE | CONNECT | TEMPORARY | TEMP } [,...] | ALL [ PRIVILEGES ] } ON DATABASE databasename [, ...] FROM { rolename | GROUP groupname | PUBLIC } [, ...] [ CASCADE | RESTRICT ] 
```

Revoke the function operation permission from a role.

```
REVOKE [ GRANT OPTION FOR ] { EXECUTE | ALL [ PRIVILEGES ] } ON FUNCTION funcname ( [ [ argmode ] [ argname ] argtype [, ...] ] ) [, ...] FROM { rolename | GROUP groupname | PUBLIC } [, ...] [ CASCADE | RESTRICT ] 
```

Revoke the procedural language operation permission from a role.

```
REVOKE [ GRANT OPTION FOR ] { USAGE | ALL [ PRIVILEGES ] } ON LANGUAGE langname [, ...] FROM { rolename | GROUP groupname | PUBLIC } [, ...] [ CASCADE | RESTRICT ] 
```

Revoke the schema operation permission from a role.

```
REVOKE [ GRANT OPTION FOR ] { { CREATE | USAGE } [,...] | ALL [ PRIVILEGES ] } ON SCHEMA schemaname [, ...] FROM { rolename | GROUP groupname | PUBLIC } [, ...] [ CASCADE | RESTRICT ]  
```

Revoke the tablespace operation permission from a role.

```
REVOKE [ GRANT OPTION FOR ] { CREATE | ALL [ PRIVILEGES ] } ON TABLESPACE tablespacename [, ...] FROM { rolename | GROUP groupname | PUBLIC } [, ...] [ CASCADE | RESTRICT ] 
```

Revoke the member relationship of rolename1 from rolename2.

```
REVOKE [ ADMIN OPTION FOR ] rolename1 [, ...] FROM rolename2 [, ...] [ CASCADE | RESTRICT ]
```

In the preceding information:

-   **GRANT OPTION FOR**: The permission cannot be granted to others, but permission itself is not revoked.
-   **SELECT**,  **INSERT**,  **UPDATE**,  **DELETE**,  **REFERENCES**,  **TRIGGER**,  **USAGE**,  **CREATE**,  **CONNECT**,  **TEMPORARY**,  **TEMP**,  **EXECUTE**, and  **ALL \[**_PRIVILEGES_**\]**  indicate user operation permissions.  **ALL \[**_PRIVILEGES_**\]**  indicates all permissions, the  _PRIVILEGES_  keyword is optional in PostgreSQL, but it is required in strict SQL statements.
-   **ON**  clause: specifies the object on which the permission is revoked.
-   _tablename_: table name.
-   **FROM**  clause: specifies the role whose permission is revoked.
-   _rolename_,  _rolename1_, and  _rolename2_: role names.
-   _groupname_: name of a role group.
-   **PUBLIC**: revokes the implicitly defined groups that have all roles. However, this does not mean that all roles lose the permissions. The permissions directly obtained and the permissions obtained through a group are still valid.
-   _sequencename_: sequence name.
-   **CASCADE**: revokes all dependent permissions.
-   **RESTRICT**: does not revoke all dependent permissions.
-   _databasename_: database name.
-   **funcname \(**_\[\[argmode\] \[argname\] argtype \[, ...\]\]_**\)**: function name and its parameters.
-   _langname_: procedural language name.
-   _schemaname_: schema name.
-   _tablespacename_: tablespace name.
-   **ADMIN OPTION FOR**: The transferred authorization is not automatically revoked.

## Example<a name="section207605920321"></a>

\#Grant the CREATE permission on database1 to userexample.

```
# GRANT CREATE ON DATABASE database1 TO userexample; 
```

\#Grant all permissions on table1 to all users.

```
# GRANT ALL PRIVILEGES ON TABLE table1 TO PUBLIC; 
```

