# Backing Up a Database<a name="EN-US_TOPIC_0231470888"></a>

Run the  **mysqldump**  command to back up the database.

Back up one or more tables:

```
mysqldump [options] databasename [tablename ...] > outfile
```

Back up one or more databases:

```
mysqldump [options] -databases databasename ... > outfile
```

Back up all databases:

```
mysqldump [options] -all-databases > outputfile
```

In the preceding information:

-   _databasename_: database name.
-   _tablename_: name of a data table.
-   _outfile_: database backup file.
-   _options_: parameter option of the  **mysqldump**  command. Multiple parameters can be separated by spaces. The common parameters of the  **mysqldump**  command are as follows:
    -   **-u, --user=**_username_: specifies the username.
    -   **-p, --password\[=**_password_**\]**: specifies the password.
    -   **-P, --port=**_portnumber_: specifies the port number.
    -   **-h, --host=**_hostname_: specifies the hostname.
    -   **-r, --result-file=**_filename_: saves the export result to a specified file, which is equivalent to  **\>**.
    -   **-t**: backs up data only.
    -   **-d**: backs up the table structure only.


## Example<a name="section207605920321"></a>

\#Back up all the databases of user  **root**  on port  **3306**  of the host whose IP address is  **192.168.202.144**  to the  **alldb.sql**  file.

```
# mysqldump -h 192.168.202.144 -P 3306 -uroot -p123456 --all-databases > alldb.sql
```

\#Back up the db1 database of user  **root**  on port  **3306**  of the host whose IP address is  **192.168.202.144**  to the  **db1.sql**  file.

```
# mysqldump -h 192.168.202.144 -P 3306 -uroot -p123456 --databases db1 > db1.sql
```

\#Back up the tb1 table of the db1 database of user  **root**  on port  **3306**  of the host whose IP address is  **192.168.202.144**  to the  **db1tb1.sql**  file.

```
# mysqldump -h 192.168.202.144 -P 3306 -uroot -p123456 db1 tb1 > db1tb1.sql
```

\#Back up only the table structure of the db1 database of user  **root**  on port  **3306**  of the host whose IP address is  **192.168.202.144**  to the  **db1.sql**  file.

```
# mysqldump -h 192.168.202.144 -P 3306 -uroot -p123456 -d db1 > db1.sql
```

\#Back up only the table structure of the db1 database of user  **root**  on port  **3306**  of the host whose IP address is  **192.168.202.144**  to the  **db1.sql**  file.

```
# mysqldump -h 192.168.202.144 -P 3306 -uroot -p123456 -t db1 > db1.sq
```

