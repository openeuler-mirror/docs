# General Introduction<a name="EN-US_TOPIC_0229622728"></a>

## FTP Overview<a name="section1172116276544"></a>

File Transfer Protocol \(FTP\) is one of the earliest transmission protocols on the Internet. It is used to transfer files between the server and client. FTP allows users to access files on a remote system using a set of standard commands without logging in to the remote system. In addition, the FTP server provides the following functions:

-   Subscriber classification

    By default, the FTP server classifies users into real users, guest users, and anonymous users based on the login status. The three types of users have different access permissions. Real users have complete access permissions, while anonymous users have only the permission to downloading resources.

-   Command records and log file records

    FTP can use the syslogd to record data, including historical commands and user transmission data \(such as the transmission time and file size\). Users can obtain log information from the /var/log/ directory.

-   Restricting the access scope of users

    FTP can limit the work scope of a user to the home directory of the user. After a user logs in to the system through FTP, the root directory displayed by the system is the home directory of the user. This environment is called change root \(chroot for short\). In this way, users can access only the main directory, but not important directories such as /etc, /home, and /usr/local. This protects the system and keeps the system secure.


## Port Used by the FTP Server<a name="section10740173919526"></a>

The FTP service requires multiple network ports. The server uses the following ports:

-   Command channel. The default port number is 21.
-   Data channel. The default port number is 20.

Port 21 is used to receive connection requests from the FTP client, and port 20 is used by the FTP server to proactively connect to the FTP client.

## Introduction to vsftpd<a name="section05971938175317"></a>

FTP has a long history and uses the unencrypted transmission mode, and is therefore considered insecure. This section describes the Very Secure FTP Daemon \(vsftpd\), to use FTP in a more secure way.

The vsftpd is introduced to build a security-centric FTP server. The vsftpd is designed with the following features:

-   The startup user of the vsftpd service is a common user who has low system permission. In addition, the vsftpd service uses chroot to change the root directory, preventing the risk of misusing system tools.
-   Any vsftpd command that requires high execution permission is controlled by a special upper-layer program. The upper-layer program has low permission and does not affect the system.
-   vsftpd integrates most of the extra commands \(such as dir, ls, and cd\) used by FTP. Generally, the system does not need to provide extra commands, which are secure for the system.

