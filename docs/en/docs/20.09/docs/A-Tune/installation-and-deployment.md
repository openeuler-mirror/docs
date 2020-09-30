# Installation and Deployment

This chapter describes how to install and deploy A-Tune.

- [Installation and Deployment](#installation-and-deployment)
    - [Software and Hardware Requirements](#software-and-hardware-requirements)
    - [Environment Preparation](#environment-preparation)
    - [A-Tune Installation](#a-tune-installation)
        - [Installation Modes](#installation-modes)
        - [Installation Procedure](#installation-procedure)
    - [A-Tune Deployment](#a-tune-deployment)
    - [Starting A-Tune](#starting-a-tune)
    - [Starting A-Tune engine](#starting-a-tune-engine)




## Software and Hardware Requirements

### Hardware Requirement

-   Huawei Kunpeng 920 processor

### Software Requirement

-   OS: openEuler 20.09

## Environment Preparation

For details about installing an openEuler OS, see  _openEuler 20.09 Installation Guide_.

## A-Tune Installation

This chapter describes the installation modes and methods of the A-Tune.

### Installation Modes

A-Tune can be installed in single-node or distributed mode.

-   Single-node mode

    The client and server are installed on the same system.

-   Distributed mode

    The client and server are installed on different systems.


The installation modes are as follows:

![](./figures/en-us_image_0231122163.png)

  

### Installation Procedure

To install the A-Tune, perform the following steps:

1.  Mount an openEuler ISO file.

    ```
    # mount openEuler-20.09-aarch64-dvd.iso /mnt
    ```

2.  Configure the local yum source.

    ```
    # vim /etc/yum.repos.d/local.repo
    ```

    The configured contents are as follows:

    ```
    [local]
    name=local
    baseurl=file:///mnt
    gpgcheck=1
    enabled=1
    ```

3.  Import the GPG public key of the RPM digital signature to the system.

    ```
    # rpm --import /mnt/RPM-GPG-KEY-openEuler
    ```


4. Install an A-Tune server.

    >![](./public_sys-resources/icon-note.gif) **NOTE:**   
    >In this step, both the server and client software packages are installed. For the single-node deployment, skip  **Step 5**.  

    ```
    # yum install atune -y
    # yum install atune-engine -y
    ```

5.  For a distributed mode, install an A-Tune client on associated server.

    ```
    # yum install atune-client -y
    ```

6.  Check whether the installation is successful.

    ```
    # rpm -qa | grep atune
    atune-client-xxx
    atune-db-xxx
    atune-xxx
    atune-engine-xxx
    ```
    
    If the preceding information is displayed, the installation is successful.


## A-Tune Deployment

This chapter describes how to deploy A-Tune.



### Overview

The configuration items in the A-Tune configuration file  **/etc/atuned/atuned.cnf**  are described as follows:

- A-Tune service startup configuration

    You can modify the parameter value as required.

    -   **protocol**: Protocol used by the gRPC service. The value can be  **unix**  or  **tcp**.  **unix**  indicates the local socket communication mode, and  **tcp**  indicates the socket listening port mode. The default value is  **unix**.
    -   **address**: Listening IP address of the gRPC service. The default value is  **unix socket**. If the gRPC service is deployed in distributed mode, change the value to the listening IP address.
    -   **port**: Listening port of the gRPC server. The value ranges from 0 to 65535. If **protocol** is set to **unix**, you do not need to set this parameter.
    -   **connect**: IP address list of the nodes where the A-Tune is located when the A-Tune is deployed in a cluster. IP addresses are separated by commas (,).
    -   **rest_host**: Listening address of the REST service. The default value is localhost.
    -   **rest_port**: Listening port of the REST service. The value ranges from 0 to 65535. The default value is 8383.
    -   **engine_host**: IP address for connecting to the A-Tune engine service of the system.
    -   **engine_port**: Port for connecting to the A-Tune engine service of the system.
    -   **sample_num**: Number of samples collected when the system executes the analysis process. The default value is 20.
    -   **interval**: Interval for collecting samples when the system executes the analysis process. The default value is 5s.
    -   **grpc_tls**: Indicates whether to enable SSL/TLS certificate verification for the gRPC service. By default, this function is disabled. After grpc_tls is enabled, you need to set the following environment variables before running the **atune-adm** command to communicate with the server:
        -   export ATUNE_TLS=yes
        -   export ATUNED_CACERT=<Path of the client CA certificate>
        -   export ATUNED_CLIENTCERT=<Client certificate path>
        -   export ATUNED_CLIENTKEY=<Client key path>
        -   export ATUNED_SERVERCN=server
    -   **tlsservercafile**: Path of the gPRC server's CA certificate.
    -   **tlsservercertfile**: Path of the gPRC server certificate.
    -   **tlsserverkeyfile**: Path of the gPRC server key.
    -   **rest_tls**: Indicates whether to enable SSL/TLS certificate verification for the REST service. This function is enabled by default.
    -   **tlsrestcacertfile**: Path of the server's CA certificate of the REST service.
    -   **tlsrestservercertfile**: Path of the server certificate of the REST service.
    -   **tlsrestserverkeyfile**: Indicates the key path of the REST service.
    -   **engine_tls**: Indicates whether to enable SSL/TLS certificate verification for the A-Tune engine service. This function is enabled by default..
    -   **tlsenginecacertfile**: Path of the client CA certificate of the A-Tune engine service.
    -   **tlsengineclientcertfile**: Client certificate path of the A-Tune engine service.
    -   **tlsengineclientkeyfile**: Client key path of the A-Tune engine service.

-   System information

    System is the parameter information required for system optimization. You must modify the parameter information according to the actual situation.

    -   **disk**: Disk information to be collected during the analysis process or specified disk during disk optimization.
    -   **network**: NIC information to be collected during the analysis process or specified NIC during NIC optimization.
    -   **user**: User name used for ulimit optimization. Currently, only the user  **root**  is supported.
    
-   Log information

    Change the log level as required. The default log level is info. Log information is recorded in the **/var/log/messages** file.

-   Monitor information

    Hardware information that is collected by default when the system is started.
    
-   Tuning information

    Tuning is the parameter information required for offline tuning.
    
    -   **noise**: Evaluation value of Gaussian noise.
    -   **sel_feature**: Indicates whether to enable the function of generating the importance ranking of offline tuning parameters. By default, this function is disabled.


#### Example

```
#################################### server ############################### 
 # atuned config 
 [server] 
 # the protocol grpc server running on 
 # ranges: unix or tcp 
 protocol = unix 

 # the address that the grpc server to bind to
 # default is unix socket /var/run/atuned/atuned.sock
 # ranges: /var/run/atuned/atuned.sock or ip address
 address = /var/run/atuned/atuned.sock 

 # the atune nodes in cluster mode, separated by commas
 # it is valid when protocol is tcp
 # connect = ip01,ip02,ip03

 # the atuned grpc listening port
 # the port can be set between 0 to 65535 which not be used
 # port = 60001

 # the rest service listening port, default is 8383
 # the port can be set between 0 to 65535 which not be used
 rest_host = localhost
 rest_port = 8383

 # the tuning optimizer host and port, start by engine.service
 # if engine_host is same as rest_host, two ports cannot be same
 # the port can be set between 0 to 65535 which not be used
 engine_host = localhost
 engine_port = 3838

 # when run analysis command, the numbers of collected data.
 # default is 20
 sample_num = 20

 # interval for collecting data, default is 5s
 interval = 5

 # enable gRPC authentication SSL/TLS
 # default is false
 # grpc_tls = false
 # tlsservercafile = /etc/atuned/grpc_certs/ca.crt
 # tlsservercertfile = /etc/atuned/grpc_certs/server.crt
 # tlsserverkeyfile = /etc/atuned/grpc_certs/server.key

 # enable rest server authentication SSL/TLS
 # default is true
 rest_tls = true
 tlsrestcacertfile = /etc/atuned/rest_certs/ca.crt
 tlsrestservercertfile = /etc/atuned/rest_certs/server.crt
 tlsrestserverkeyfile = /etc/atuned/rest_certs/server.key

 # enable engine server authentication SSL/TLS
 # default is true
 engine_tls = true
 tlsenginecacertfile = /etc/atuned/engine_certs/ca.crt
 tlsengineclientcertfile = /etc/atuned/engine_certs/client.crt
 tlsengineclientkeyfile = /etc/atuned/engine_certs/client.key


 #################################### log ############################### 
 [log]
 # either "debug", "info", "warn", "error", "critical", default is "info"
 level = info

 #################################### monitor ############################### 
 [monitor]
 # with the module and format of the MPI, the format is {module}_{purpose}
 # the module is Either "mem", "net", "cpu", "storage"
 # the purpose is "topo"
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
 
 #################################### tuning ###############################
 # tuning configs
 [tuning]
 noise = 0.000000001
 sel_feature = false
```

The configuration items in the configuration file **/etc/atuned/engine.cnf** of the A-Tune engine are described as follows:

- Startup configuration of the A-Tune engine service

  You can modify the parameter value as required.

  -   **engine_host**: Listening address of the A-Tune engine service. The default value is localhost.
  -   **engine_port**: Listening port of the A-Tune engine service. The value ranges from 0 to 65535. The default value is 3838.
  -   **engine_tls**: Indicates whether to enable SSL/TLS certificate verification for the A-Tune engine service. This function is enabled by default.
  -   **tlsenginecacertfile**: Path of the server CA certificate of the A-Tune engine service.
  -   **tlsengineservercertfile**: Path of the server certificate of the A-Tune engine service.
  -   **tlsengineserverkeyfile**: Server key path of the A-Tune engine service.

- Log information

  Change the log level as required. The default log level is info. Log information is recorded in the **/var/log/messages** file.


#### Example

```
#################################### engine ###############################
 [server]
 # the tuning optimizer host and port, start by engine.service
 # if engine_host is same as rest_host, two ports cannot be same
 # the port can be set between 0 to 65535 which not be used
 engine_host = localhost
 engine_port = 3838

 # enable engine server authentication SSL/TLS
 # default is true
 engine_tls = true
 tlsenginecacertfile = /etc/atuned/engine_certs/ca.crt
 tlsengineservercertfile = /etc/atuned/engine_certs/server.crt
 tlsengineserverkeyfile = /etc/atuned/engine_certs/server.key

 #################################### log ###############################
 [log]
 # either "debug", "info", "warn", "error", "critical", default is "info"
 level = info
```

## Starting A-Tune

After the A-Tune is installed, you need to start the A-Tune service.

- Start the atuned service.

  ```
  # systemctl start atuned
  ```


- Query the atuned service status.

  ```
  # systemctl status atuned
  ```

  If the following command output is displayed, the service is started successfully:

  ![](./figures/en-us_image_0214540398.png)

## Starting A-Tune engine

To use AI functions, you need to start the A-Tune engine service.

-   Start the atune-engine service.

    ```
    # systemctl start atune-engine
    ```


-   Query the atune-engine service status.

    ```
    # systemctl status atune-engine
    ```

    If the following command output is displayed, the service is started successfully:

    ![](./figures/en-us_image_0245342444.png)


