# Restoring a Database<a name="EN-US_TOPIC_0230590573"></a>

Run the  **psql**  command to restore the database.

```
psql [option]... [databasename [username]] < infile
```

In the preceding information:

-   _databasename_: database name. If this parameter is not specified, the environment variable  **PGDATABASE**  is used. If that environment variable is not specified, use the username that initiates the connection.
-   _username_: name of a user.
-   _infile_:  **outfile**  parameter in the  **pg\_dump**  command.
-   _option_: parameter option of the  **psql**  command. Multiple parameters can be separated by spaces. The common parameters of the  **psql**  command are as follows:
    -   **-f **_filename_**, --file=**_filename_: specified output file. If this parameter is ignored, the standard output is used.
    -   **-d, --dbname=**_databasename_: database to be dumped.
    -   **-h, --host=**_hostname_: specifies the hostname.
    -   **-p, --port=**_portnumber_: port number.
    -   **-U, --username=**_username_: username of the connection.
    -   **-W, --password**: forces PostgreSQL to prompt for a password before connecting to a database.


The  **psql**  command cannot be used to automatically create the  **databasename**  database. Therefore, you need to create the  **databasename**  database before running the  **psql**  command to restore the database.

## Example<a name="section207605920321"></a>

\#Import the  **db1.sql**  script file to the newdb database of the postgres user on the host  **192.168.202.144**  through port  **3306**.

```
$ createdb newdb
$ psql -h 192.168.202.144 -p 3306 -U postgres -W -d newdb < db1.sql
```

