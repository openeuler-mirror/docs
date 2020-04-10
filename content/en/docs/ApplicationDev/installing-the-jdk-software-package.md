# Installing the JDK Software Package<a name="EN-US_TOPIC_0229243735"></a>

1.  Run the  **dnf list installed | grep jdk**  command to check whether the JDK software is installed.

    ```
    dnf list installed | grep jdk
    ```

    Check the command output. If the command output contains "jdk", the JDK has been installed. If no such information is displayed, the software is not installed.

2.  Clear the cache.

    ```
    dnf clean all
    ```

3.  Create a cache.

    ```
    dnf makecache
    ```

4.  Query the JDK software package that can be installed.

    ```
    dnf search jdk | grep jdk
    ```

    View the command output and install the  **java-x.x.x-openjdk-devel.aarch64**  software package.  **x.x.x**  indicates the version number.

5.  Install the JDK software package. The following uses the  **java-1.8.0-openjdk-devel**  software package as an example.

    ```
    dnf install java-1.8.0-openjdk-devel.aarch64
    ```

6.  Query information about the JDK software.

    ```
    java -version
    ```

    Check the command output. If the command output contains "openjdk version "1.8.0\_232"", the JDK has been correctly installed. In the command output,  **1.8.0\_232**  indicates the JDK version.


