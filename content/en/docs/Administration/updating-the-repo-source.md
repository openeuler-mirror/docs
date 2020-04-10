# Updating the Repo Source<a name="EN-US_TOPIC_0229622710"></a>

You can update the repo source in either of the following ways:

-   Use the ISO file of the new version to update the existing repo source. The method is the same as that for creating a repo source. That is, mount the image or copy the image to the local directory.
-   Add rpm packages to the Packages directory of the repo source and update the repo source. You can run the createrepo command to update the repo source.

    ```
    dnf install createrepo
    createrepo --update --workers=10 /srv/repo
    ```

    In this command, --update indicates the update, and --workers indicates the number of threads, which can be customized.


