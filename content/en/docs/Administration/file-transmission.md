# File Transmission<a name="EN-US_TOPIC_0229622711"></a>

## Overview<a name="section8433148461"></a>

This section describes how to transfer files after the vsftpd service is started.

## Connecting to the Server<a name="section842892013308"></a>

**Command Format**

**ftp**  \[_hostname_  |  _ip-address_\]

**hostname**  indicates the name of the server, and  **ip-address**  indicates the IP address of the server.

**Requirements**

Run the following command on the command-line interface \(CLI\) of the openEuler OS:

```
ftp ip-address
```

Enter the user name and password as prompted. If the following information is displayed after the authentication is successful, the FTP connection is successful. In this case, you have accessed the directory of the connected server.

```
ftp>
```

At this prompt, you can enter different commands to perform related operations.

-   Display the current IP address of the server.

    ```
    ftp>pwd
    ```

-   Display the local path. You can upload the files in this path to the corresponding location on the FTP server.

    ```
    ftp>lcd
    ```

-   Exit the current window and return to the local Linux terminal.

    ```
    ftp>!
    ```


## Downloading a File<a name="section791812619323"></a>

Generally, the get or mget command is used to download files.

**How to use get**

-   Function description: Transfers files from a remote host to a local host.
-   Command format:  **get**  \[_remote-file_\] \[_local-file_\]

    _remote-file_  indicates a remote file, and  _local-file_  indicates a local file.

-   For example, to obtain the /usr/your/openEuler.htm file on the remote server, run the following command:

    ```
    ftp> get /usr/your/openEuler.htm
    ```


**How to use mget**

-   Function description: Receives a batch of files from the remote host to the local host.
-   Command format:  **mget**  \[_remote-file_\]

    _remote-file_  indicates a remote file.

-   For example, to obtain all files in the /usr/your/ directory on the server, run the following command:

    ```
    ftp> cd /usr/your/
    ftp> mget *.*
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   In this case, a message is displayed each time a file is downloaded. To block the prompt information, run the  **prompt off**  command before running the  **mget \*.\***  command.  
    >-   The files are downloaded to the current directory on the Linux host. For example, if you run the ftp command in /usr/my/, all files are downloaded to /usr/my/.  


## Uploading a file<a name="section1630433133010"></a>

Generally, the put or mput command is used to upload files.

**How to use put**

-   Function: Transfers a local file to a remote host.
-   Command format:  **put**  \[_local-file_\] \[_remote-file_\]

    _remote-file_  indicates a remote file, and  _local-file_  indicates a local file.

-   For example, run the following command to transfer the local Euler.htm file to the remote host /usr/your/ and change the file name to openEuler.htm:

    ```
    ftp> put Euler.htm /usr/your/openEuler.htm
    ```


**How to use mput**

-   Function: Transfers a batch of files from the local host to a remote host.
-   Command format:  **mput**  \[_local-file_\]

    _local-file_  indicates a local file.

-   For example, run the following command to upload all HTM files in the local directory to the /usr/your/ directory on the server:

    ```
    ftp> cd /usr/your
    ftp> mput *.htm
    ```


## Deleting a File<a name="section1010011483409"></a>

Generally, the  **delete**  or  **mdelete**  command is used to delete a file.

**How to use delete**

-   Function description: Deletes one or more files from the remote server.
-   Command format:  **delete**  \[_remote-file_\]

    _remote-file_  indicates a remote file.

-   For example, to delete the openFile from the remote server, run the following command:

    ```
    ftp> delete openFile
    ```


**How to use mdelete**

-   Function description: Deletes files from a remote server. This function is used to delete files in batches.
-   Command format:  **mdelete**  \[_remote-file_\]

    _remote-file_  indicates a remote file.

-   For example, to delete all files whose names start with  **a**, run the following command:

    ```
    ftp> mdelete a*
    ```


## Disconnecting from the Server<a name="section1612795815438"></a>

Run the bye command to disconnect from the server.

```
ftp> bye 
```

