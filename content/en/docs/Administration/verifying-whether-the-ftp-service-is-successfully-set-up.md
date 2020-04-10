# Verifying Whether the FTP Service Is Successfully Set Up<a name="EN-US_TOPIC_0229622775"></a>

You can use the FTP client provided by openEuler for verification. The command and output are as follows. Enter the user name \(an existing user in the system\) and password as prompted. If the message "Login successful" is displayed, the FTP server is successfully set up.

```
# dnf install ftp
# ftp localhost
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

