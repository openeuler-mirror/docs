# Installing PostgreSQL<a name="EN-US_TOPIC_0230050747"></a>

1.  Configure the local yum source. For details, see  [Configuring the Repo Server](configuring-the-repo-server.md).
2.  Clear the cache.

    ```
    #dnf clean all
    ```

3.  Create a cache.

    ```
    #dnf makecache
    ```

4.  Install the PostgreSQL server.

    ```
    #dnf install postgresql-server
    ```

5.  Check the installed RPM package.

    ```
    #rpm -qa | grep postgresql
    ```


