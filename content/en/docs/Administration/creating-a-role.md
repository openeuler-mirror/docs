# Creating a Role<a name="EN-US_TOPIC_0230590561"></a>

You can use the  **CREATE ROLE**  statement or  **createuser**  command to create a role. The  **createuser**  command encapsulates the  **CREATE ROLE**  statement and needs to be executed on the shell GUI instead of the database GUI.

```
CREATE ROLE rolename [ [ WITH ] option [ ... ] ];
```

```
createuser rolename
```

In the preceding information:

-   **rolename**: indicates a role name.
-   Parameters of the  _option_  are as follows:
    -   **SUPERUSER | NOSUPERUSER**: determines whether a new role is a superuser. If this parameter is not specified, the default value** NOSUPERUSER**  is used, indicating that the role is not a superuser.
    -   **CREATEDB | NOCREATEDB**: specifies whether a role can create a database. If this parameter is not specified, the default value  **NOCREATEDB**  is used, indicating that the role cannot create a database.
    -   **CREATEROLE | NOCREATEROLE**: determines whether a role can create roles. If this parameter is not specified, the default value  **NOCREATEROLE**  is used, indicating that the role cannot create roles.
    -   **INHERIT | NOINHERIT**: determines whether a role inherits the other roles' permissions in the group to which the role belongs. A role with the INHERIT attribute can automatically use any permissions that have been assigned to its direct or indirect group. If this parameter is not specified, the default value  **INHERIT**  is used.
    -   **LOGIN | NOLOGIN**: determines whether a role can log in. A role with the LOGIN attribute can be considered as a user. A role without this attribute can be used to manage database permissions but is not a user. If this attribute is not specified, the default value  **NOLOGIN**  is used. However, if  **CREATE USER**  instead of  **CREATE ROLE**  is used to create a role, the LOGIN attribute is used by default.
    -   **\[ENCRYPTED | UNENCRYPTED\] PASSWORD'password'**: password of a role. The password is valid only for roles with the LOGIN attribute.  **ENCRYPTED | UNENCRYPTED**: determines whether to encrypt the password. If this parameter is not specified, the value  **ENCRYPTED**  is used, that is, the password is encrypted.
    -   **VALID UNTIL'timestamp'**: specifies the timestamp when the password of a role expires. If this parameter is not specified, the password is permanently valid.
    -   **IN ROLE rolename1**: lists one or more existing roles. The new role  _rolename_  will be added to and become a member of  **rolename1**.
    -   **ROLE rolename2**: lists one or more existing roles. These roles will be automatically added as members of the new role  _rolename_. That is, the new role is a user group.


To run this command, you must have the CREATEROLE permission or is the database superuser.

## Example<a name="section207605920321"></a>

\#Create a role  **roleexample1**  who can log in.

```
postgres=# CREATE ROLE roleexample1 LOGIN;
```

\#Create a role  **roleexample2**  with the password  **123456**.

```
postgres=# CREATE ROLE roleexample2 WITH LOGIN PASSWORD '123456';
```

\#Create a role named  **roleexample3**.

```
[postgres@localhost ~]$ createuser roleexample3
```

