# Modifying Users<a name="EN-US_TOPIC_0230408671"></a>

## Modifying a Username<a name="section1073791423118"></a>

Run the  **RENAME USER**  statement to change one or more existing usernames.

```
RENAME USER 'oldusername'@'hostname' TO 'newusername'@'hostname';
```

In the preceding information:

-   _oldusername_: original username.
-   _newusername_: new username.
-   _hostname_: host name.

The  **RENAME USER**  statement is used to rename an existing account. If the original account does not exist in the system or the new account exists, an error will occur when the statement is executed.

To use the  **RENAME USER**  statement, you must have the UPDATE permission on the database or the global CREATE USER permission.

## Example of Modifying a User<a name="section207605920321"></a>

\# Change the username  **userexample1**  to  **userexample2**  and change the hostname to  **locahost**.

```
> RENAME USER 'userexample1'@'localhost' TO 'userexample2'@'localhost';
```

## Modifying a User Password<a name="section1748013397259"></a>

Use the  **SET PASSWORD**  statement to modify the login password of a user.

```
SET PASSWORD FOR 'username'@'hostname' = PASSWORD('newpassword');
```

In the preceding information:

-   **FOR 'username'@'hostname'**: specifies the username and hostname whose password is to be changed. This parameter is optional.
-   **PASSWORD\('newpassword'\)**: indicates that the  **PASSWORD\(\)**  function is used to set a new password. That is, the new password must be transferred to the  **PASSWORD\(\)**  function for encryption.

>![](public_sys-resources/icon-caution.gif) **CAUTION:**   
>The  **PASSWORD\(\)**  function is a unidirectional encryption function. Once encrypted, the original plaintext cannot be decrypted.  

If the  **FOR**  clause is not added to the  **SET PASSWORD**  statement, the password of the current user is changed.

The  **FOR**  clause must be given in the format of  **'**_username_**'@'**_hostname_**'**, where  _username_  indicates the username of the account and  _hostname_  indicates the hostname of the account.

The account whose password is to be changed must exist in the system. Otherwise, an error occurs when the statement is executed.

## Example of Changing a User Password<a name="section1363017121058"></a>

\#Change the password of user  **userexample**  whose hostname is  **locahost**  to  **0123456**.

```
> SET PASSWORD FOR 'userexample'@'localhost' = PASSWORD('0123456') ;
```

