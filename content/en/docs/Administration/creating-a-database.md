# Creating a Database<a name="EN-US_TOPIC_0230590568"></a>

You can use the  **CREATE DATABASE**  statement or the  **createdb**  command to create a role. The  **createdb**  command encapsulates the  **CREATE DATABASE**  statement and needs to be executed on the shell GUI instead of the database GUI.

```
CREATE DATABASE databasename;
```

```
createdb databasename
```

In the preceding command,  **databasename**  indicates the database name.

To use this command, you must have the CREATEDB permission.

## Example<a name="section207605920321"></a>

\# Create a database named  **database1**.

```
postgres=# CREATE DATABASE database1;
```

