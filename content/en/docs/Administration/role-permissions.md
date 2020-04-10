# Role Permissions<a name="EN-US_TOPIC_0230590565"></a>

You can use the  **GRANT**  statement to grant permissions to a role.

Grant the table operation permission to a role.

```
GRANT { { SELECT | INSERT | UPDATE | DELETE | REFERENCES | TRIGGER } [,...] | ALL [ PRIVILEGES ] } ON [ TABLE ] tablename [, ...] TO { rolename | GROUP groupname | PUBLIC } [, ...] [ WITH GRANT OPTION ]
```

Grant the sequence operation permission to a role.

```
GRANT { { USAGE | SELECT | UPDATE } [,...] | ALL [ PRIVILEGES ] } ON SEQUENCE sequencename [, ...] TO { rolename | GROUP groupname | PUBLIC } [, ...] [ WITH GRANT OPTION ] 
```

Grant the database operation permission to a role.

```
GRANT { { CREATE | CONNECT | TEMPORARY | TEMP } [,...] | ALL [ PRIVILEGES ] } ON DATABASE databasename [, ...] TO { rolename | GROUP groupname | PUBLIC } [, ...] [ WITH GRANT OPTION ]  
```

Grant the function operation permission to a role.

```
GRANT { EXECUTE | ALL [ PRIVILEGES ] } ON FUNCTION funcname ( [ [ argmode ] [ argname ] argtype [, ...] ] ) [, ...] TO { rolename | GROUP groupname | PUBLIC } [, ...] [ WITH GRANT OPTION ]  
```

Grant the operation permission of the procedural language to a role.

```
GRANT { USAGE | ALL [ PRIVILEGES ] } ON LANGUAGE langname [, ...] TO { rolename | GROUP groupname | PUBLIC } [, ...] [ WITH GRANT OPTION ]  
```

Grant the schema operation permission to a role.

```
GRANT { { CREATE | USAGE } [,...] | ALL [ PRIVILEGES ] } ON SCHEMA schemaname [, ...] TO { rolename | GROUP groupname | PUBLIC } [, ...] [ WITH GRANT OPTION ]  
```

Grant the tablespace operation permission to a role.

```
GRANT { CREATE | ALL [ PRIVILEGES ] } ON TABLESPACE tablespacename [, ...] TO { rolename | GROUP groupname | PUBLIC } [, ...] [ WITH GRANT OPTION ] 
```

Assign the member relationship of rolename1 to rolename2.

```
GRANT rolename1 [, ...] TO rolename2 [, ...] [ WITH ADMIN OPTION ]
```

In the preceding information:

-   **SELECT**,  **INSERT**,  **UPDATE**,  **DELETE**,  **REFERENCES**,  **TRIGGER**,  **USAGE**,  **CREATE**,  **CONNECT**,  **TEMPORARY**,  **TEMP**,  **EXECUTE**, and  **ALL \[**_PRIVILEGES_**\]**  indicate user operation permissions.  **ALL \[**_PRIVILEGES_**\]**  indicates all permissions, the  _PRIVILEGES_  keyword is optional in PostgreSQL, but it is required in strict SQL statements.
-   **ON**  clause: specifies the object on which the permission is granted.
-   **tablename**: table name.
-   **TO**  clause: specifies the role to which the permission is granted.
-   **rolename**,  **rolename1**, and  **rolename2**: role names.
-   **groupname**: name of a role group.
-   **PUBLIC**: indicates that the permission is granted to all roles, including users who may be created later.
-   **WITH GRANT OPTION**: indicates that the recipient of a permission can grant the permission to others. This option cannot be assigned to PUBLIC.
-   **sequencename**: sequence name.
-   **databasename**: database name.
-   **funcname \(\[\[argmode\] \[argname\] argtype \[, ...\]\]\)**: function name and its parameters.
-   **langname**: procedural language name.
-   **schemaname**: schema name.
-   **tablespacename**: tablespace name.
-   **WITH ADMIN OPTION**: A member can assign the member relationship of a role to other roles and cancel the member relationship of other roles.

## Example<a name="section207605920321"></a>

\#Grant the CREATE permission on database1 to userexample.

```
# GRANT CREATE ON DATABASE database1 TO userexample; 
```

\#Grant all permissions on table1 to all users.

```
# GRANT ALL PRIVILEGES ON TABLE table1 TO PUBLIC; 
```

