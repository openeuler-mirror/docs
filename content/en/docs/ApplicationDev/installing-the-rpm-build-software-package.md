# Installing the rpm-build Software Package<a name="EN-US_TOPIC_0229243726"></a>

1.  Run the  **dnf list installed | grep rpm-build**  command to check whether the rpm-build software is installed.

    ```
    dnf list installed | grep rpm-build
    ```

    Check the command output. If the command output contains "rpm-build", the software has been installed. If no such information is displayed, the software is not installed.

2.  Clear the cache.

    ```
    dnf clean all
    ```

3.  Create a cache.

    ```
    dnf makecache
    ```

4.  Install the rpm-build package.

    ```
    dnf install rpm-build
    ```

5.  Query the rpm-build software version.

    ```
    rpmbuild --version
    ```


