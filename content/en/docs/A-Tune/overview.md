# Overview<a name="EN-US_TOPIC_0213178456"></a>

The configuration items in the A-Tune configuration file  **/etc/atuned/atuned.cnf**  are described as follows:

-   A-Tune service startup configuration

    You can modify the parameter value as required.

    -   **protocol**: Protocol used by the gRPC service. The value can be  **unix**  or  **tcp**.  **unix**  indicates the local socket communication mode, and  **tcp**  indicates the socket listening port mode. The default value is  **unix**.

    -   **address**: Listening IP address of the gRPC service. The default value is  **unix socket**. If the gRPC service is deployed in distributed mode, change the value to the listening IP address.
    -   **port**: Listening port of the gRPC server. The value ranges from 0 to 65535. If  **protocol**  is set to  **unix**, you do not need to set this parameter.
    -   **rest\_port**: Listening port of the system REST service. The value ranges from 0 to 65535.
    -   **sample\_num**: Number of samples collected when the system executes the analysis process.

-   System information

    System is the parameter information required for system optimization. You must modify the parameter information according to the actual situation.

    -   **disk**: Disk information to be collected during the analysis process or specified disk during disk optimization.
    -   **network**: NIC information to be collected during the analysis process or specified NIC during NIC optimization.
    -   **user**: User name used for ulimit optimization. Currently, only the user  **root**  is supported.
    -   **tls**: SSL/TLS certificate verification for the gRPC and HTTP services of A-Tune. This is disabled by default. After TLS is enabled, you need to set the following environment variables before running the  **atune-adm**  command to communicate with the server:
        -   export ATUNE\_TLS=yes
        -   export ATUNE\_CLICERT=<Client certificate path\>

    -   **tlsservercertfile**: path of the gPRC server certificate.
    -   **tlsserverkeyfile**: gPRC server key path.
    -   **tlshttpcertfile**: HTTP server certificate path.
    -   **tlshttpkeyfile**: HTTP server key path.
    -   **tlshttpcacertfile**: CA certificate path of the HTTP server.

-   Log information

    Change the log path and level based on the site requirements. By default, the log information is stored in  **/var/log/messages**.

-   Monitor information

    Hardware information that is collected by default when the system is started.


## Example<a name="section616213774714"></a>

```
#################################### server ###############################
# atuned config
[server]
# the protocol grpc server running on
# ranges: unix or tcp
protocol = unix

# the address that the grpc server to bind to
# default is unix socket /var/run/atuned/atuned.sock
# ranges: /var/run/atuned/atuned.sock or ip 
address = /var/run/atuned/atuned.sock

# the atuned grpc listening port, default is 60001
# the port can be set between 0 to 65535 which not be used
port = 60001

# the rest service listening port, default is 8383
# the port can be set between 0 to 65535 which not be used
rest_port = 8383

# when run analysis command, the numbers of collected data.
# default is 20
sample_num = 20

# Enable gRPC and http server authentication SSL/TLS
# default is false
# tls = true
# tlsservercertfile = /etc/atuned/server.pem
# tlsserverkeyfile = /etc/atuned/server.key
# tlshttpcertfile = /etc/atuned/http/server.pem
# tlshttpkeyfile = /etc/atuned/http/server.key
# tlshttpcacertfile = /etc/atuned/http/cacert.pem

#################################### log ###############################
# Either "debug", "info", "warn", "error", "critical", default is "info"
level = info

#################################### monitor ###############################
[monitor]
# With the module and format of the MPI, the format is {module}_{purpose}
# The module is Either "mem", "net", "cpu", "storage"
# The purpose is "topo"
module = mem_topo, cpu_topo

#################################### system ###############################
# you can add arbitrary key-value here, just like key = value
# you can use the key in the profile
[system]
# the disk to be analysis
disk = sda

# the network to be analysis
network = enp189s0f0

user = root
```

