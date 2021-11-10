# Viewing System Information

-   View the system information.

    ```
    $ cat /etc/os-release
    ```

    For example, the command and output are as follows:

    ```
    $ cat /etc/os-release
    NAME="openEuler"
    VERSION="21.09"
    ID="openEuler"
    VERSION_ID="21.09"
    PRETTY_NAME="openEuler 21.09"
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


-   View the real-time system resource information.

    ```
    $ top
    ```