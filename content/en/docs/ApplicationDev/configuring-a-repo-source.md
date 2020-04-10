# Configuring a Repo Source<a name="EN-US_TOPIC_0229243686"></a>

You can configure a repo source by directly obtaining the repo source file or by mounting an ISO file.

## Configuring a Repo Source by Directly Obtaining the Repo Source File<a name="section741752013396"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>openEuler provides multiple repo source files. This section uses the OS repo source file of the AArch64 architecture as an example.  

1.  Go to the yum source directory.

    ```
    cd /etc/yum.repos.d
    ```

2.  Create and edit the  **local.repo**  file. Configure the repo source file as the yum source.

    ```
    vi local.repo
    ```

    Edit the  **local.repo**  file as follows:

    \[basiclocal\]

    name=basiclocal

    baseurl=http://repo.openeuler.org/openEuler-20.03-LTS/OS/aarch64/

    enabled=1

    gpgcheck=0


## Configuring a Repo Source by Mounting an ISO File<a name="section85510354615"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>This section uses the  **openEuler-20.03-LTS-aarch64-dvd.iso**  image file and  **openEuler-20.03-LTS-aarch64-dvd.iso.sha256sum**  verification file as examples. Modify them based on the actual requirements.  

1.  Download the ISO image.
    -   Download an ISO image using a cross-platform file transfer tool.
        1.  Log in to the openEuler community at  [https://openeuler.org](https://openeuler.org).
        2.  Click  **Download**. 
        3.  Click the link provided after **Download ISO**. The download list is displayed.
        4.  Select the version to be downloaded, for example, openEuler 20.03 LTS. Then, click  **openEuler-20.03-LTS**. The download list is displayed.
        5.  Click  **ISO**. The ISO download list is displayed.
            -   **aarch64**: ISO image file of the AArch64 architecture
            -   **x86\_64**: ISO image file of the x86\_64 architecture
            -   **source**: ISO image file of the openEuler source code

        6.  Click  **aarch64**.
        7.  Click  **openEuler-20.03-LTS-aarch64-dvd.iso**  to download the openEuler release package to the local host.
        8.  Click  **openEuler-20.03-LTS-aarch64-dvd.iso.sha256sum**  to download the openEuler verification file to the local host.
        9.  Log in to the openEuler OS and create a directory for storing the release package and verification file, for example,  **/home/iso**.

            ```
            mkdir /home/iso
            ```

        10. Use a cross-platform file transfer tool \(such as WinSCP\) to upload the local openEuler release package and verification file to the target openEuler OS.

    -   Run the  **wget**  command to download the ISO image.
        1.  Log in to the openEuler community at  [https://openeuler.org](https://openeuler.org).
        2.  Click  **Download**. 
        3.  Click the link provided after **Download ISO**. The download list is displayed.
        4.  Select the version to be downloaded, for example, openEuler 20.03 LTS. Then, click  **openEuler-20.03-LTS**. The download list is displayed.
        5.  Click  **ISO**. The ISO download list is displayed.
            -   **aarch64**: ISO image file of the AArch64 architecture
            -   **x86\_64**: ISO image file of the x86\_64 architecture
            -   **source**: ISO image file of the openEuler source code

        6.  Click  **aarch64**.
        7.  <a name="li62369349505"></a>Right-click  **openEuler-20.03-LTS-aarch64-dvd.iso**  and choose  **Copy URL**  from the shortcut menu to copy the address of the openEuler release package.
        8.  <a name="li9236203405015"></a>Right-click  **openEuler-20.03-LTS-aarch64-dvd.iso.sha256sum**  and choose  **Copy URL**  from the shortcut menu to copy the address of the openEuler verification file.
        9.  Log in to the openEuler OS, create a directory \(for example,  **/home/iso**\) for storing the release package and verification file, and switch to the directory.

            ```
            mkdir /home/iso
            cd /home/iso
            ```

        10. Run the  **wget**  command to remotely download the release package and verification file. In the command,  **ipaddriso**  and  **ipaddrisosum**  are the addresses copied in  [1.g](#li62369349505)  and  [1.h](#li9236203405015).

            ```
            wget ipaddriso
            wget ipaddrisosum
            ```


2.  Release Package Integrity Check
    1.  Obtain the verification value in the verification file.

        ```
        cat openEuler-20.03-LTS-aarch64-dvd.iso.sha256sum
        ```

    2.  Calculate the SHA256 verification value of the openEuler release package.

        ```
        sha256sum openEuler-20.03-LTS-aarch64-dvd.iso 
        ```

        After the command is run, the verification value is displayed.

    3.  Check whether the values calculated in step 1 and step 2 are consistent.

        If the verification values are consistent, the .iso file is not damaged. If they are inconsistent, the file is damaged and you need to obtain the file again.

3.  Mount the ISO image file and configure it as a repo source.

    Run the  **mount**  command to mount the image file.

    The following is an example:

    ```
    # mount /home/iso/openEuler-20.03-LTS-aarch64-dvd.iso /mnt/
    ```

    The mounted  **mnt**  directory is as follows:

    ```
    .
    │── boot.catalog
    │── docs
    │── EFI
    │── images
    │── Packages
    │── repodata
    │── TRANS.TBL
    └── RPM-GPG-KEY-openEuler
    ```

    In the preceding command,  **Packages**  indicates the directory where the RPM package is stored,  **repodata**  indicates the directory where the repo source metadata is stored, and  **RPM-GPG-KEY-openEuler**  indicates the public key for signing openEuler.

    The mounted directory can be configured as the yum source. Create the \*\*\*.repo configuration file \(with the extension .repo\) in the  **/etc/yum.repos.d/**  directory.

    The following is an example:

    Create the openEuler.repo file in the  **/etc/yum.repos.d**  directory and use the local image mounting directory as the yum source. The content of the openEuler.repo file is as follows:

    ```
    [base]
    name=base
    baseurl=file:///mnt
    enabled=1
    gpgcheck=1
    gpgkey=file:///mnt/RPM-GPG-KEY-openEuler
    ```

    ****

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   **gpgcheck**  indicates whether to enable the GNU privacy guard \(GPG\) to check the validity and security of the source of RPM packages.  **1**  indicates that the GPG check is enabled.  **0**  indicates that the GPG check is disabled. If this option is not specified, the GPG check is enabled by default.  
    >-   **gpgkey**  is the storage path of the signed public key.  


