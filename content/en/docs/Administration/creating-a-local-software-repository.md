# Creating a Local Software Repository<a name="EN-US_TOPIC_0229622801"></a>

To create a local repository of software sources, perform the following steps.

1.  Install the createrepo software package. Run the following command as the root user:

    ```
    dnf install createrepo
    ```

2.  Copy the required software packages to a directory, for example, /mnt/local\_repo/.
3.  Run the following command to create a software source:

    ```
    createrepo --database /mnt/local_repo
    ```


