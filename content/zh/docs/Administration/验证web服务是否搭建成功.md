# 验证web服务是否搭建成功<a name="ZH-CN_TOPIC_0186985201"></a>

Web服务器搭建完成后，可以通过如下方式验证是否搭建成功。

1.  查看服务器的IP地址，命令如下：

    ```
    # ifconfig
    ```

    回显信息如下，说明服务器IP为 192.168.1.60。

    ```
    enp3s0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
    inet 192.168.1.60  netmask 255.255.255.0  broadcast 192.168.1.255
    inet6 fe80::5054:ff:fe95:499f  prefixlen 64  scopeid 0x20<link>
    ether 52:54:00:95:49:9f  txqueuelen 1000  (Ethernet)
    RX packets 150713207  bytes 49333673733 (45.9 GiB)
    RX errors 0  dropped 43  overruns 0  frame 0
    TX packets 2246438  bytes 203186675 (193.7 MiB)
    TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
    
    enp4s0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
    ether 52:54:00:7d:80:9e  txqueuelen 1000  (Ethernet)
    RX packets 149937274  bytes 44652889185 (41.5 GiB)
    RX errors 0  dropped 1102561  overruns 0  frame 0
    TX packets 0  bytes 0 (0.0 B)
    TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
    
    lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
    inet 127.0.0.1  netmask 255.0.0.0
    inet6 ::1  prefixlen 128  scopeid 0x10<host>
    loop  txqueuelen 1000  (Local Loopback)
    RX packets 37096  bytes 3447369 (3.2 MiB)
    RX errors 0  dropped 0  overruns 0  frame 0
    TX packets 37096  bytes 3447369 (3.2 MiB)
    TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
    ```

2.  配置防火墙：

    ```
    # firewall-cmd --add-service=http --permanent
    success
    # firewall-cmd --reload
    success
    ```

3.  验证web服务器是否搭建成功，用户可选择Linux或Windows系统进行验证。
    -   使用Linux系统验证

        执行如下命令，查看是否可以访问网页信息，服务搭建成功时，该网页可以正常访问。

        ```
        curl https://192.168.1.60
        ```

        执行如下命令，查看命令返回值是否为0，返回值为0，说明httpd服务器搭建成功。

        ```
        echo $?
        ```

    -   使用Windows系统验证

        打开浏览器，在地址栏输入如下地址，如果能正常访问网页，说明httpd服务器搭建成功。

        https://_192.168.1.60_

        如果修改了端口号，输入地址格式如下：

        https://_192.168.1.60:端口号_



