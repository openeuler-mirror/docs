# isula-transform Container Migration Tool

The isula-transform container migration tool is launched together with iSulad 2.0. It is used to migrate containers started by the Docker container engine to the iSulad engine for management. After the migration is complete, you can use iSulad to manage container lifecycles.

<!-- TOC -->

- [isula-transform Container Migration Tool](#isula-transform-container-migration-tool)
    - [Quick Guide](#quick-guide)
        - [Installation and Deployment](#installation-and-deployment)
        - [Example](#example)
    - [Usage Guidelines](#usage-guidelines)
        - [Usage](#usage)
        - [Parameter Description](#parameter-description)
        - [Precautions](#precautions)
    - [Appendix](#appendix)
        - [Communication Matrix and Permission Description](#communication-matrix-and-permission-description)
            - [Communication Matrix](#communication-matrix)
            - [File and Permission](#file-and-permission)

<!-- /TOC -->

## Quick Guide

### Installation and Deployment

Perform the following steps to install isula-transform:

- Installation through yum (Recommended)

  ``` shell
  sudo yum install -y isula-transform
  ```

* Installation through RPM

  ``` shell
  sudo rpm -ivh isula-transform-0.9.1-1.oe1.x86_64.rpm
  ```

  Note: The isula-transform running depends on the iSulad and Docker Engine. If you use RPM installation mode, ensure that iSulad and Docker Engine have been installed in the environment.


### Example

The following example describes how to migrate containers started by the Docker container engine to the iSulad engine for management.

1. Start a Docker container in the host network, and mount the data volume.

    ``` shell
    $ mkdir /tmp/test && echo "hello isula 2.0" > /tmp/test/hello.txt
    $ sudo docker run -tid --network host -v /tmp/test:/test rnd-dockerhub.huawei.com/official/ubuntu bash
    b7ebc79a83297d781069308311cd1456539ab663fc284c80386a941af1a78685
    $ sudo docker exec b7ebc7 cat /test/hello.txt
    hello isula 2.0
    $ sudo docker exec b7ebc7 bash -c "echo 'hello isula-transform' > /root/world.txt"
    $ sudo docker exec b7ebc7 cat /root/world.txt
    hello isula-transform
    ```

2. Use isula-transform to migrate the container (specify the first several digits or the full container ID).

    ``` shell
    $ sudo isula-transform b7ebc7
    transform b7ebc7: success
    ```

3. Restart iSulad to view the container.

    ``` shell
    $ systemctl restart isulad && sudo isula ps -a
    CONTAINER ID    IMAGE                                       COMMAND CREATED         STATUS                      PORTS   NAMES
    b7ebc79a8329    rnd-dockerhub.huawei.com/official/ubuntu    "bash"  8 minutes ago   Exited (0) 2 minutes ago            inspiring_dirac
    ```

4. Start the container and check data. If the container is started with complete data, it is migrated successfully.

    ``` shell
    $ sudo isula start b7ebc7
    $ sudo isula exec b7ebc7 cat /test/hello.txt
    hello isula 2.0
    $ sudo isula exec b7ebc7 cat /root/world.txt
    hello isula-transform
    ```

5. Delete the container.

    ``` shell
    $ sudo isula rm -f b7ebc7
    b7ebc79a83297d781069308311cd1456539ab663fc284c80386a941af1a78685
    $ sudo isula ps -a
    CONTAINER ID    IMAGE   COMMAND CREATED STATUS  PORTS   NAMES
    ```

## Usage Guidelines

### Usage

isula-transform supports the following functions:

1. Migrate a specified container.

    Run the following command to migrate a specified Docker container by specifying its container ID:

    ``` shell
    isula-transform [OPTIONS] container_id [container_id...]
    ```

    Multiple container IDs can be specified at a time. To use a short ID, ensure that the short ID is unique.

2. Migrate all containers.

    Add the --all option to migrate all Docker containers in running or pause state:

    ``` shell
    isula-transform [OPTIONS] --all 
    ```

    If both the container ID and the --all option are specified, isula-transform ignores the input container ID.

For details about other configurable parameters, see [Parameter Description](#parameter-description).

### Parameter Description

OPTIONS in the preceding commands indicates optional parameters. For details, see the following table:

| Option | Description                                       |
| -------------- | :----------------------------------------------------------- |
| --log | Log file path. Default value: /var/log/isula-kits/transform.log |
| --log-level | The lowest level of output logs. Values can be debug, info, warn, and error. Default value: info |
| --docker-graph | Docker graph path. Default value: /var/lib/docker |
| --docker-state | Docker state path. Default value: /var/run/docker |


### Precautions

- isula-transform applies to non-cluster scenarios. In cluster scenarios such as Kubernetes, you are advised to configure the iSulad engine and start a new container.
- isula-transform supports the migration of containers created by Docker 18.09. Containers must be in running or pause state.
- After migration, the original Docker container is in pause state. You can determine its lifecycle.
- isula-transform requires that the migrated Docker container be started using --network=host or reuse the network stack of the container started in the host network. In the latter scenario, both containers need to be migrated, and the parent container needs to be started first after the migration.
- If the shared namespace (pid, ipc) is involved, both parent and child containers need to be migrated. After the migration, the parent container needs to be started first.
- If the cgroup-parent is specified, the cgroup created by the Docker engine for the migrated Docker container has not been destroyed, the iSulad engine cannot create cgroups for the new container. The new container can only be started after the migrated Docker container has been stopped or deleted
- Docker container's parameters that are not supported by the iSula container will be discarded after migration.

## Appendix

### Communication Matrix and Permission Description

#### Communication Matrix

When isula-transform is running, it functions as a client to access dockerd on the server. isula-transform and dockerd communicate with each other through the Unix socket file. The path is as follows:

| Server | Socket path |
|---|:---|
|dockerd|/var/run/docker.sock|

#### File and Permission

- The root permission is required for running isula-transform.
- The following table lists file permissions involved in isula-transform running.

    | File Path | Permission | Description |
    |:---|---|:---|
    |/usr/bin/isula-transform|0550| Executable binary file|
    |/Var/log/isula-kits/transform.log|0600| Default isula-transform log file|
