# Daemon Multi-Port Binding<a name="EN-US_TOPIC_0184808048"></a>

## Description<a name="en-us_topic_0183074344_section1297635115590"></a>

The daemon can bind multiple UNIX sockets or TCP ports and listen on these ports. The client can interact with the daemon through these ports.

## Port<a name="en-us_topic_0183074344_section778202914013"></a>

Users can configure one or more ports in the hosts field in the  **/etc/isulad/daemon.json**  file, or choose not to specify hosts.

```
{
    "hosts": [
        "unix:///var/run/isulad.sock",
        "tcp://localhost:5678",
        "tcp://127.0.0.1:6789"
    ]
}
```

Users can also run the  **-H**  or  **--host**  command in the  **/etc/sysconfig/iSulad**  file to configure a port, or choose not to specify hosts.

```
OPTIONS='-H unix:///var/run/isulad.sock --host tcp://127.0.0.1:6789'
```

If hosts are not specified in the  **daemon.json**  file and iSulad, the daemon listens on  **unix:///var/run/isulad.sock**  by default after startup.

## Restrictions<a name="en-us_topic_0183074344_section172611258112"></a>

-   Users cannot specify hosts in the  **/etc/isulad/daemon.json**  and  **/etc/sysconfig/iSuald**  files at the same time. Otherwise, an error will occur and iSulad cannot be started.

    ```
    unable to configure the isulad with file /etc/isulad/daemon.json: the following directives are specified both as a flag and in the configuration file: hosts: (from flag: [unix:///var/run/isulad.sock tcp://127.0.0.1:6789], from file: [unix:///var/run/isulad.sock tcp://localhost:5678 tcp://127.0.0.1:6789])
    ```

-   If the specified host is a UNIX socket, the socket must start with  **unix://**  followed by a valid absolute path.
-   If the specified host is a TCP port, the TCP port number must start with  **tcp://**  followed by a valid IP address and port number. The IP address can be that of the local host.
-   A maximum of 10 valid ports can be specified. If more than 10 ports are specified, an error will occur and iSulad cannot be started.

