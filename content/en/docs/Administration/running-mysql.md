# Running MySQL<a name="EN-US_TOPIC_0231470874"></a>

1.  Modify the configuration file.
    1.  Create the  **my.cnf**  file and change the file paths \(including the software installation path  **basedir**  and data path  **datadir**\) based on the actual situation.

        ```
        #vi /etc/my.cnf
        ```

        Edit the  **my.cnf**  file as follows:

        ```
        [mysqld_safe]
        log-error=/data/mysql/log/mysql.log
        pid-file=/data/mysql/run/mysqld.pid
        [mysqldump]
        quick
        [mysql]
        no-auto-rehash
        [client]
        default-character-set=utf8
        [mysqld]
        basedir=/usr/local/mysql
        socket=/data/mysql/run/mysql.sock
        tmpdir=/data/mysql/tmp
        datadir=/data/mysql/data
        default_authentication_plugin=mysql_native_password
        port=3306
        user=mysql
        ```

    2.  Ensure that the  **my.cnf**  file is correctly modified.

        ```
        #cat /etc/my.cnf
        ```

        ![](figures/en-us_image_0231563132.png)

        >![](public_sys-resources/icon-caution.gif) **CAUTION:**   
        >In the configuration file,  **basedir**  specifies the software installation path. Change it based on actual situation.  

    3.  Change the group and user of the  **/etc/my.cnf**  file to  **mysql:mysql**.

        ```
        #chown mysql:mysql /etc/my.cnf
        ```

2.  Configure environment variables.
    1.  Add the path of the MySQL binary files to the  **PATH**  parameter.

        ```
        #echo export  PATH=$PATH:/usr/local/mysql/bin  >> /etc/profile
        ```

        >![](public_sys-resources/icon-caution.gif) **CAUTION:**   
        >In the command,  **/usr/local/mysql/bin**  is the absolute path of the  **bin**  files in the MySQL software installation directory. Change it based on actual situation.  

    2.  Run the following command to make the environment variables take effect:

        ```
        #source /etc/profile
        ```

3.  <a name="li15634560582"></a>Initialize the database.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The second line from the bottom contains the initial password, which will be used when you log in to the database.  

    ```
    #mysqld --defaults-file=/etc/my.cnf --initialize
    2020-03-18T03:27:13.702385Z 0 [System] [MY-013169] [Server] /usr/local/mysql/bin/mysqld (mysqld 8.0.17) initializing of server in progress as process 34014
    2020-03-18T03:27:24.112453Z 5 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: iNat=)#V2tZu
    2020-03-18T03:27:28.576003Z 0 [System] [MY-013170] [Server] /usr/local/mysql/bin/mysqld (mysqld 8.0.17) initializing of server has completed
    ```

    If the command output contains "initializing of server has completed", the database has been initialized. In the command output, "iNat=\)\#V2tZu" in "A temporary password is generated for root@localhost: iNat=\)\#V2tZu" is the initial password.

4.  Start the database.

    >![](public_sys-resources/icon-caution.gif) **CAUTION:**   
    >Start MySQL as user  **mysql**  if it is the first time to start the database service. If you start MySQL as user  **root**, a message will be displayed indicating that the  **mysql.log**  file is missing. If you start MySQL as user  **mysql**, the  **mysql.log**  file will be generated in the  **/data/mysql/log**  directory. No error will be displayed if you start the database as user  **root**  again.  

    1.  Modify the file permission.

        ```
        #chmod 777 /usr/local/mysql/support-files/mysql.server
        ```

    2.  Start MySQL.

        ```
        #cp /usr/local/mysql/support-files/mysql.server /etc/init.d/mysql
        #chkconfig mysql on
        ```

        Start MySQL as user  **mysql**.

        ```
        #su - mysql
        $service mysql start
        ```

5.  Log in to the database.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   Enter the initial password generated during database initialization \([3](#li15634560582)\).  
    >-   If MySQL is installed by using an RPM package obtained from the official website, the  **mysqld**  file is located in the  **/usr/sbin**  directory. Ensure that the directory specified in the command is correct.  

    ```
    $/usr/local/mysql/bin/mysql -uroot -p  -S /data/mysql/run/mysql.sock
    ```

    ![](figures/en-us_image_0231563134.png)

6.  Configure the database accounts and passwords.
    1.  After logging in to the database, change the password of user  **root**  for logging in to the database.

        ```
        mysql>alter user 'root'@'localhost' identified by "123456";
        ```

    2.  Create a user  **root**  for all the other hosts in the domain.

        ```
        mysql>create user 'root'@'%' identified by '123456';
        ```

    3.  Grant permissions to the user  **root**.

        ```
        mysql>grant all privileges on *.* to 'root'@'%';
        mysql>flush privileges;
        ```

        ![](figures/en-us_image_0231563135.png)

7.  Exit the database.

    Run the  **\\q**  or  **exit**  command to exit the database.

    ```
    mysql>exit
    ```

    ![](figures/en-us_image_0231563136.png)


