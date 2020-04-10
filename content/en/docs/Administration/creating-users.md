# Creating Users<a name="EN-US_TOPIC_0230408669"></a>

Run the  **CREATE USER**  statement to create one or more users and set corresponding passwords.

```
CREATE USER 'username'@'hostname' IDENTIFIED BY 'password';
```

In the preceding information:

-   _username_: name of a user.
-   _host_: hostname, that is, the name of the host where the user connects to the database. As a local user, you can set the parameter to  **localhost**. If the host name is not specified during user creation, the host name is  **%**  by default, indicating a group of hosts.
-   _password_: password for logging in to the server. The password can be null. If the password is null, the user can log in to the server without entering the password. This method, however, is not recommended because it provides low security.

To use the  **CREATE USER**  statement, you must have the INSERT permission on the database or the global CREATE USER permission.

After a user account is created using the  **CREATE USER**  statement, a record is added to the user table in the database. If the account to be created exists, an error will occur during statement execution.

A new user has few permissions and can perform only operations that do not require permissions. For example, a user can run the  **SHOW**  statement to query the list of all storage engines and character sets.

## Example<a name="section207605920321"></a>

\#Create a local user whose password is 123456 and username is userexample1.

```
> CREATE USER 'userexample1'@'localhost' IDENTIFIED BY '123456';
```

\#Create a user whose password is 123456, username is userexample2, and hostname is 192.168.1.100.

```
> CREATE USER 'userexample2'@'192.168.1.100' IDENDIFIED BY '123456';
```

