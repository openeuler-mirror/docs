# Related Commands of dnf<a name="EN-US_TOPIC_0229622787"></a>

The dnf command can automatically parse the dependency between packages during installation and upgrade. The common usage method is as follows:

```
dnf <command> <packages name>
```

Common commands are as follows:

-   Installation

    ```
    dnf install <packages name>
    ```

-   Upgrade

    ```
    dnf update <packages name>
    ```

-   Rollback

    ```
    dnf downgrade <packages name>
    ```

-   Checking for update

    ```
    dnf check-update
    ```

-   Uninstallation

    ```
    dnf remove <packages name>
    ```

-   Query

    ```
    dnf search <packages name>
    ```

-   Local installation

    ```
    dnf localinstall <absolute path to package name>
    ```

-   Viewing historical records

    ```
    dnf history
    ```

-   Clearing cache records

    ```
    dnf clean all
    ```

-   Updating cache

    ```
    dnf makecache
    ```


