# Viewing System Information

-   Run the following command to view the system information:

    ```
    $ cat /etc/os-release
    ```

    For example, the command and output are as follows:

    ```
    $ cat /etc/os-release
    NAME="openEuler"
    VERSION="20.09"
    ID="openEuler"
    VERSION_ID="20.09"
    PRETTY_NAME="openEuler 20.09"
    ANSI_COLOR="0;31"
    ```


-   View system resource information.

    Run the following command to view the CPU information:

    ```
    $ lscpu
    ```

    Run the following command to view the memory information:

    ```
    $ free
    ```

    Run the following command to view the disk information:

    ```
    $ fdisk -l
    ```


