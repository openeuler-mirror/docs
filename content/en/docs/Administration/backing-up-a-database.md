# Backing Up a Database<a name="EN-US_TOPIC_0230590572"></a>

Run the  **pg\_dump**  command to back up the database and dump the database to a script file or another archive file.

```
pg_dump [option]... [databasename] > outfile
```

In the preceding information:

-   _databasename_: database name. If this parameter is not specified, the environment variable  **PGDATABASE**  is used. If that environment variable is not specified, use the username that initiates the connection.
-   _outfile_: database backup file.
-   _option_: parameter option of the  **pg\_dump**  command. Multiple parameters can be separated by spaces. The common parameters of the  **pg\_dump**  command are as follows:
    -   **-f **_filename_**, --file=**_filename_: specified output file. If this parameter is ignored, the standard output is used.
    -   **-d, --dbname=**_databasename_: database to be dumped.
    -   **-h, --host=**_hostname_: specifies the hostname.
    -   **-p, --port=**_portnumber_: port number.
    -   **-U, --username=**_username_: username of the connection.
    -   **-W, --password**: forces PostgreSQL to prompt for a password before connecting to a database.


## Example<a name="section207605920321"></a>

\#Back up the database1 database of user  **postgres**  on port  **3306**  of the host whose IP address is  **192.168.202.144**  to the  **db1.sql**  file.

```
$ pg_dump -h 192.168.202.144 -p 3306 -U postgres -W database1 > db1.sql
```

