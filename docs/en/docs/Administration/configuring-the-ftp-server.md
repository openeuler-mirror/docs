# Configuring the FTP Server

[[toc]]

## General Introduction

### FTP Overview
File Transfer Protocol \(FTP\) is one of the earliest transmission protocols on the Internet. It is used to transfer files between the server and client. FTP allows users to access files on a remote system using a set of standard commands without logging in to the remote system. In addition, the FTP server provides the following functions:

-   Subscriber classification

    By default, the FTP server classifies users into real users, guest users, and anonymous users based on the login status. The three types of users have different access permissions. Real users have complete access permissions, while anonymous users have only the permission to downloading resources.

-   Command records and log file records

    FTP can use the syslogd to record data, including historical commands and user transmission data \(such as the transmission time and file size\). Users can obtain log information from the /var/log/ directory.

-   Restricting the access scope of users

    FTP can limit the work scope of a user to the home directory of the user. After a user logs in to the system through FTP, the root directory displayed by the system is the home directory of the user. This environment is called change root \(chroot for short\). In this way, users can access only the main directory, but not important directories such as /etc, /home, and /usr/local. This protects the system and keeps the system secure.


### Port Used by the FTP Server
The FTP service requires multiple network ports. The server uses the following ports:

-   Command channel. The default port number is 21.
-   Data channel. The default port number is 20.

Port 21 is used to receive connection requests from the FTP client, and port 20 is used by the FTP server to proactively connect to the FTP client.

### Introduction to vsftpd
FTP has a long history and uses the unencrypted transmission mode, and is therefore considered insecure. This section describes the Very Secure FTP Daemon \(vsftpd\), to use FTP in a more secure way.

The vsftpd is introduced to build a security-centric FTP server. The vsftpd is designed with the following features:

-   The startup user of the vsftpd service is a common user who has low system permission. In addition, the vsftpd service uses chroot to change the root directory, preventing the risk of misusing system tools.
-   Any vsftpd command that requires high execution permission is controlled by a special upper-layer program. The upper-layer program has low permission and does not affect the system.
-   vsftpd integrates most of the extra commands \(such as dir, ls, and cd\) used by FTP. Generally, the system does not need to provide extra commands, which are secure for the system.

## Using vsftpd

### Installing vsftpd
To use the vsftpd service, you need to install the vsftpd software. If the yum source has been configured, run the following command as the root user to install the vsftpd service:

```
# dnf install vsftpd
```

### Service Management
To start, stop, or restart the vsftpd service, run the corresponding command as the root user.

- Starting vsftpd services

    ```
    # systemctl start vsftpd
    ```

    You can run the netstat command to check whether communication port 21 is enabled. If the following information is displayed, the vsftpd service has been enabled.

    ```
    # netstat -tulnp | grep 21
    tcp6       0      0 :::21                   :::*                    LISTEN      19716/vsftpd
    ```

    >![](./public_sys-resources/icon-note.gif) **NOTE:**   
    >If the **netstat** command does not exist, run the **dnf install net-tools** command to install the **net-tools** software and then run the **netstat** command.  

-   Stopping the vsftpd services

    ```
    # systemctl stop vsftpd
    ```


-   Restarting the vsftpd service

    ```
    # systemctl restart vsftpd
    ```


## Configuring vsftpd



### vsftpd Configuration Files

You can modify the vsftpd configuration file to control user permissions.  [Table 1](#table1541615718372)  describes the vsftpd configuration files. You can modify the configuration files as required. You can run the man command to view more parameter meanings.

**Table  1**  vsftpd configuration files

|  Configuration File   |Description  |
|:---  |:----  |
| /etc/vsftpd/vsftpd.conf|Main configuration file of the vsftpd process. The configuration format is Parameter=Parameter value. The parameter and parameter value cannot be empty.<br/>You can run the following command to view details about the vsftpd.conf file:<br/>man 5 vsftpd.conf |
| /etc/pam.d/vsftpd | Pluggable authentication modules (PAMs) are used for identity authentication and restrict some user operations. |
| /etc/vsftpd/ftpusers |List of users who are not allowed to use the vsftpd. By default, the system account is also in this file. Therefore, the system account cannot use vsftpd by default. |
| /etc/vsftpd/user_list |List of users who are allowed or not allowed to log in to the vsftpd server. Whether the file takes effect depends on the following parameters in the main configuration file vsftpd.conf:<br /><br/>userlist_enable: indicates whether to enable the userlist mechanism. The value YES indicates that the userlist mechanism is enabled. In this case, the userlist_deny configuration is valid. The value NO indicates that the userlist mechanism is disabled.<br/>userlist_deny: indicates whether to forbid users in the user list to log in. YES indicates that users in the user list are forbidden to log in. NO indicates that users in the command are allowed to log in.<br/><br />For example, if userlist_enable is set to YES and userlist_deny is set to YES, all users in the user list cannot log in.。 |
| /etc/vsftpd/chroot_list |Whether to restrict the user list in the home directory. By default, this file does not exist. You need to create it manually. It is the value of chroot_list_file in the vsftpd.conf file.<br /><br/>The function of this parameter is determined by the following parameters in the vsftpd.conf file:<br/>chroot_local_user: indicates whether to restrict all users to the home directory. The value YES indicates that all users are restricted to the home directory, and the value NO indicates that all users are not restricted to the home directory.<br/>chroot_list_enable: indicates whether to enable the list of restricted users. The value YES indicates that the list is enabled, and the value NO indicates that the list is disabled.<br/><br />For example, if chroot_local_user is set to YES, chroot_list_enable is set to YES, and chroot_list_file is set to /etc/vsftpd/chroot_list, all users are restricted to their home directories, and users in chroot_list are not restricted. |
| /usr/sbin/vsftpd | Unique execution file of vsftpd. |
| /var/ftp/ |  Default root directory for anonymous users to log in. The root directory is related to the home directory of the ftp user.|


### Default Configuration Description

>![](./public_sys-resources/icon-note.gif) **NOTE:**   
>The configuration content in this document is for reference only. You can modify the content based on the site requirements \(for example, security hardening requirements\).  

In the openEuler system, vsftpd does not open to anonymous users by default. Run the vim command to view the main configuration file. The content is as follows:

```
$ vim /etc/vsftpd/vsftpd.conf
anonymous_enable=NO
local_enable=YES
write_enable=YES
local_umask=022
dirmessage_enable=YES
xferlog_enable=YES
connect_from_port_20=YES
xferlog_std_format=YES
listen=NO
listen_ipv6=YES
pam_service_name=vsftpd
userlist_enable=YES
```

[Table 2](#table18185162512499)  describes the parameters.

**Table  2**  Parameter description

|  Parameter   |Description  |
|:---  |:----  |
|  anonymous_enable| Indicates whether to allow anonymous users to log in. YES indicates that anonymous users are allowed to log in; NO indicates that anonymous users are not allowed to log in. |
| local_enable | Whether to allow local users to log in. YES indicates that local users are allowed to log in. NO indicates that local users are not allowed to log in. |
| write_enable | Whether to allow the login user to have the write permission. YES indicates that the upload and write function is enabled, and NO indicates that the function is disabled. |
| local_umask | Indicates the umask value when a local user adds a profile. |
| dirmessage_enable | Indicates whether to display the contents that users need to pay attention to when a user accesses a directory. The options are YES (yes) and NO (no). |
| xferlog_enable |  Indicates whether to record file upload and download operations. The options are YES (record operations) and NO (not record operations).|
| connect_from_port_20 |  Indicates whether port 20 is used for data transmission in port mode. YES indicates that port 20 is used, and NO indicates that port 20 is not used.|
| xferlog_std_format | Indicates whether the transfer log file is written in the standard xferlog format. The options are YES (yes) and NO (no). |
| listen | Indicates whether the vsftpd service is started in standalone mode. The options are YES (yes) and NO (no). |
| pam_service_name | Support for PAM management. The value is a service name, for example, vsftpd. |
| userlist_enable | Indicates whether to support account login control in the /etc/vsftpd/user_list file. The options are YES (yes) and NO (no). |
|  tcp_wrappers| Indicates whether to support the firewall mechanism of the TCP Wrappers. The options are YES (yes) and NO (no). |
|listen_ipv6  | Indicates whether to listen to IPv6 FTP requests. The options are YES (yes) and NO (no). listen and listen_ipv6 cannot be enabled at the same time. |


### Setting the Local Time

#### Overview
In the openEuler system, vsftpd uses the Greenwich Mean Time \(GMT\) time by default, which may be different from the local time. For example, the GMT time is 8 hours later than the Beijing time. You need to change the GMT time to the local time. Otherwise, the server time and client time are inconsistent, which may cause errors during file upload and download.

#### Setting Method
To set the vsftpd time to the local time, perform the following steps as the **root** user:

1.  Open the vsftpd.conf file and change the value of use\_localtime to  **YES**. Run the following command:

    ```
    # vim /etc/vsftpd/vsftpd.conf
    ```

    Modify the file contents as follows:

    ```
    use_localtime=YES
    ```

2.  Restart the vsftpd service.

    ```
    # systemctl restart vsftpd
    ```

3.  Set the vsftpd service to start automatically upon power-on.

    ```
    # systemctl enable vsftpd
    ```


### Configuring Welcome Information

To use the vsftpd service normally, the welcome information file must exist. To configure the welcome.txt file of the vsftp service, perform the following steps as the **root** user:

1.  Open the vsftpd.conf configuration file, add the welcome information to the file, save the file, and exit.

    ```
    # vim /etc/vsftpd/vsftpd.conf
    ```

    The following configuration lines need to be added:

    ```
    banner_file=/etc/vsftpd/welcome.txt
    ```

2.  Create welcome information. Specifically, open the welcome.txt file, write the welcome information, save the file, and exit.

    ```
    # vim /etc/vsftpd/welcome.txt
    ```

    The following is an example:

    ```
    Welcome to this FTP server!
    ```


### Configuring the Login Permission of a System Account

Generally, users need to restrict the login permission of some accounts. You can set the restriction as required.

Two files are used to restrict the login of system accounts. The default files are as follows:

-   /etc/vsftpd/ftpusers: This file is managed by the PAM module and is determined by the settings of the /etc/pam.d/vsftpd file.
-   /etc/vsftpd/user\_list: This file is set by userlist\_file in vsftpd.conf and is provided by vsftpd.

Both files must exist and have the same content. You can write the accounts whose UIDs are smaller than 500 to the two files by referring to the /etc/passwd. Each line indicates an account.

To restrict the login of system accounts, add the accounts to /etc/vsftpd/ftpusers and /etc/vsftpd/user\_list as the **root** user.

Open the user\_list file to view the account information in the current file. The command and output are as follows:

```
$ vim /etc/vsftpd/user_list
root
bin
daemon
adm
lp
sync
shutdown
halt
mail
news
uucp
operator
games
nobody
```

## Verifying Whether the FTP Service Is Successfully Set Up

You can use the FTP client provided by openEuler for verification. The command and output are as follows. Enter the user name \(an existing user in the system\) and password as prompted. If the message "Login successful" is displayed, the FTP server is successfully set up.

```
$ ftp localhost
Trying 127.0.0.1...
Connected to localhost (127.0.0.1).
220-Welcome to this FTP server!
220
Name (localhost:root): USERNAME
331 Please specify the password.
Password:
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp> bye
221 Goodbye.
```

>![](./public_sys-resources/icon-note.gif) **NOTE:**   
>If the **ftp** command does not exist, run the **dnf install ftp** command as the **root** user to install the **ftp** software and then run the **ftp** command.  

## Configuring a Firewall

To open the FTP service to the Internet, you need to configure the firewall and SElinux as the **root** user.

```
# firewall-cmd --add-service=ftp --permanent
success
# firewall-cmd --reload
success
# setsebool -P ftpd_full_access on
```

## File Transmission

### Overview
This section describes how to transfer files after the vsftpd service is started.

### Connecting to the Server
**Command Format**

**ftp**  \[_hostname_  |  _ip-address_\]

**hostname**  indicates the name of the server, and  **ip-address**  indicates the IP address of the server.

**Requirements**

Run the following command on the command-line interface \(CLI\) of the openEuler OS:

```
$ ftp ip-address
```

Enter the user name and password as prompted. If the following information is displayed after the authentication is successful, the FTP connection is successful. In this case, you have accessed the directory of the connected server.

```
ftp>
```

At this prompt, you can enter different commands to perform related operations.

-   Display the current path of the server.

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


### Downloading a File
Generally, the get or mget command is used to download files.

**How to use get**

-   Function description: Transfers files from a remote host to a local host.
-   Command format:  **get**  \[_remote-file_\] \[_local-file_\]

    _remote-file_  indicates a remote file, and  _local-file_  indicates a local file.

-   For example, run the following command to obtain the /home/openEuler/openEuler.htm file on the remote server to the local directory /home/myopenEuler/ and change the file name to myopenEuler.htm

    ```
    ftp> get /home/openEuler/openEuler.htm /home/myopenEuler/myopenEuler.htm
    ```


**How to use mget**

-   Function description: Receives a batch of files from the remote host to the local host.
-   Command format:  **mget**  \[_remote-file_\]

    _remote-file_  indicates a remote file.

-   For example, to obtain all files in the /home/openEuler/ directory on the server, run the following command:

    ```
    ftp> cd /home/openEuler/
    ftp> mget *.*
    ```

    >![](./public_sys-resources/icon-note.gif) **NOTE:**   
    >-   In this case, a message is displayed each time a file is downloaded. To block the prompt information, run the  **prompt off**  command before running the  **mget \*.\***  command.  
    >-   The files are downloaded to the current directory on the Linux host. For example, if you run the ftp command in /home/myopenEuler/, all files are downloaded to /home/myopenEuler/.  


### Uploading a file
Generally, the put or mput command is used to upload files.

**How to use put**

-   Function: Transfers a local file to a remote host.
-   Command format:  **put**  \[_local-file_\] \[_remote-file_\]

    _remote-file_  indicates a remote file, and  _local-file_  indicates a local file.

-   For example, run the following command to transfer the local myopenEuler.htm file to the remote host /home/openEuler/ and change the file name to openEuler.htm:

    ```
    ftp> put myopenEuler.htm /home/openEuler/openEuler.htm
    ```


**How to use mput**

-   Function: Transfers a batch of files from the local host to a remote host.
-   Command format:  **mput**  \[_local-file_\]

    _local-file_  indicates a local file.

-   For example, run the following command to upload all HTM files in the local directory to the /home/openEuler/ directory on the server:

    ```
    ftp> cd /home/openEuler/
    ftp> mput *.htm
    ```


### Deleting a File
Generally, the  **delete**  or  **mdelete**  command is used to delete a file.

**How to use delete**

-   Function description: Deletes one or more files from the remote server.
-   Command format:  **delete**  \[_remote-file_\]

    _remote-file_  indicates a remote file.

-   For example, to delete the /home/openEuler/openEuler.htm from the remote server, run the following command:

    ```
    ftp> cd /home/openEuler/
    ftp> delete openEuler.htm
    ```


**How to use mdelete**

-   Function description: Deletes files from a remote server. This function is used to delete files in batches.
-   Command format:  **mdelete**  \[_remote-file_\]

    _remote-file_  indicates a remote file.

-   For example, to delete all files whose names start with  **a** from the /home/openEuler/ directory on the remote server, run the following command:

    ```
    ftp> cd /home/openEuler/
    ftp> mdelete a*
    ```


### Disconnecting from the Server
Run the bye command to disconnect from the server.

```
ftp> bye 
```
