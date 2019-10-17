# 验证FTP服务是否搭建成功<a name="ZH-CN_TOPIC_0186991369"></a>

可以使用openEuler提供的FTP客户端进行验证。命令和回显如下，根据提示输入用户名（用户为系统中存在的用户）和密码。如果显示Login successful，即说明FTP服务器搭建成功。

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

