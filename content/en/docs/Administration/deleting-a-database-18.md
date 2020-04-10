# Deleting a Database<a name="EN-US_TOPIC_0230408679"></a>

You can run the  **DROP DATABASE**  statement to delete a database.

>![](public_sys-resources/icon-caution.gif) **CAUTION:**   
>Exercise caution when deleting a database. Once a database is deleted, all tables and data in the database will be deleted.  

```
DROP DATABASE databasename;
```

In the preceding command,  **databasename**  indicates the database name.

The  **DROP DATABASE**  command is used to delete an existing database. After this command is executed, all tables in the database are deleted, but the user permissions of the database are not automatically deleted.

To use  **DROP DATABASE**, you need the  **DROP**  permission on the database.

**DROP SCHEMA**  is a synonym of  **DROP DATABASE**.

## Example<a name="section207605920321"></a>

\#Delete the  **databaseexample**  database.

```
> DROP DATABASE databaseexample;
```

