# Installing MySQL<a name="EN-US_TOPIC_0231470873"></a>

1.  Configure the local yum source. For details, see  [Configuring the Repo Server](configuring-the-repo-server.md).
2.  Clear the cache.

    ```
    #dnf clean all
    ```

3.  Create a cache.

    ```
    #dnf makecache
    ```

4.  Install the MySQL server.

    ```
    #dnf install mysql
    ```

5.  Check the installed RPM package.

    ```
    #rpm -qa | grep mysql
    ```


