# Modifying a Role<a name="EN-US_TOPIC_0230590563"></a>

## Modifying a Username<a name="section1073791423118"></a>

Use the  **ALTER ROLE**  statement to modify an existing role name.

```
ALTER ROLE oldrolername RENAME TO newrolename;
```

In the preceding information:

-   _oldrolername_: original role name.
-   _newrolename_: new role name.

## Example of Modifying a User<a name="section207605920321"></a>

\#Change the role name  **roleexample1**  to  **roleexapme2**.

```
# ALTER ROLE roleexample1 RENAME TO roleexample2;
```

## Modifying a User Password<a name="section1748013397259"></a>

Use the  **ALTER ROLE**  statement to modify the login password of a role.

```
ALTER ROLE rolename PASSWORD 'password'
```

In the preceding information:

-   _rolename_: indicates a role name.
-   _password_: password.

## Example of Modifying the Password of a Role<a name="section1363017121058"></a>

\#Modify the password of  **roleexample1**  to  **456789**.

```
# ALTER ROLE roleexample1 WITH PASSWORD '456789';
```

