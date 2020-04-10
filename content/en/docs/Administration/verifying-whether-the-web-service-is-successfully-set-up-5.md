# Verifying Whether the Web Service Is Successfully Set Up<a name="EN-US_TOPIC_0230790877"></a>

After the web server is set up, perform the following operations to check whether the web server is set up successfully:

1.  Run the following command to check the IP address of the server:

    ```
    # ifconfig
    ```

    If the following information is displayed, the IP address of the server is  **192.168.1.60**.

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

2.  Configure the firewall.

    ```
    # firewall-cmd --add-service=http --permanent
    success
    # firewall-cmd --reload
    success
    ```

3.  Verify whether the web server is successfully set up. You can select the Linux or Windows operating system for verification.
    -   Using the Linux OS

        Run the following command to check whether the web page can be accessed. If the service is successfully set up, the web page can be accessed.

        ```
        curl http://192.168.1.60
        ```

        Run the following command to check whether the command output is  **0**. If the command output is  **0**, the Nginx server is successfully set up.

        ```
        echo $?
        ```

    -   Using the Windows OS

        Open the browser and enter the following address in the address box. If the web page can be accessed, the Nginx server is successfully set up.

        http://_192.168.1.60_

        If the port number is changed, enter the address in the following format:

        http://_192.168.1.60: port number_



