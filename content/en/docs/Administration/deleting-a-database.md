# Deleting a Database<a name="EN-US_TOPIC_0230590571"></a>

You can run the  **DROP DATABASE**  statement or  **dropdb**  command to delete a database. The  **dropdb**  command encapsulates the  **DROP DATABASE**  statement and needs to be executed on the shell GUI instead of the database GUI.

>![](public_sys-resources/icon-caution.gif) **CAUTION:**   
>Exercise caution when deleting a database. Once a database is deleted, all tables and data in the database will be deleted.  

```
DROP DATABASE databasename;
```

```
dropdb databasename
```

In the preceding command,  **databasename**  indicates the database name.

The  **DROP DATABASE**  statement deletes the system directory items of the database and the file directories that contain data.

**DROP DATABASE**  can be executed only by the super administrator or database owner.

## Example<a name="section207605920321"></a>

\#Delete the  **databaseexample**  database.

```
# DROP DATABASE databaseexample;
```

