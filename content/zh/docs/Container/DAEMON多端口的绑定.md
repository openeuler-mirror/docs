# DAEMON多端口的绑定<a name="ZH-CN_TOPIC_0184808048"></a>

## 描述<a name="zh-cn_topic_0183074344_section1297635115590"></a>

daemon端可以绑定多个unix socket或者tcp端口，并在这些端口上监听，客户端可以通过这些端口和daemon端进行交互。

## 接口<a name="zh-cn_topic_0183074344_section778202914013"></a>

用户可以在/etc/isulad/daemon.json文件的hosts字段配置一个或者多个端口。当然用户也可以不指定hosts。

```
{
    "hosts": [
        "unix:///var/run/isulad.sock",
        "tcp://localhost:5678",
        "tcp://127.0.0.1:6789"
    ]
}
```

用户也可以在/etc/sysconfig/iSulad中通过-H或者--host配置端口。用户同样可以不指定hosts。

```
OPTIONS='-H unix:///var/run/isulad.sock --host tcp://127.0.0.1:6789'
```

如果用户在daemon.json文件及iSulad中均未指定hosts，则daemon在启动之后将默认监听unix:///var/run/isulad.sock。

## 限制<a name="zh-cn_topic_0183074344_section172611258112"></a>

-   用户不可以在/etc/isulad/daemon.json和/etc/sysconfig/iSuald两个文件中同时指定hosts，如果这样做将会出现错误，isulad无法正常启动；

    ```
    unable to configure the isulad with file /etc/isulad/daemon.json: the following directives are specified both as a flag and in the configuration file: hosts: (from flag: [unix:///var/run/isulad.sock tcp://127.0.0.1:6789], from file: [unix:///var/run/isulad.sock tcp://localhost:5678 tcp://127.0.0.1:6789])
    ```

-   若指定的host是unix socket，则必须是合法的unix socket，需要以"unix://"开头，后跟合法的socket绝对路径；
-   若指定的host是tcp端口，则必须是合法的tcp端口，需要以"tcp://"开头，后跟合法的IP地址和端口，IP地址可以为localhost；
-   可以指定至多10个有效的端口，超过10个则会出现错误，isulad无法正常启动。

