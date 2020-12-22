#Local Volume Management

<!-- TOC -->

- [Local Volume Management](#local-volume-management)
    - [Overview](#overview)
    - [Precautions](#precautions)
    - [Usage](#usage)
        - [Using the -v Option to Mount Data](#using-the--v-option-to-mount-data)
            - [**Format**](#format)
            - [**Functions**](#functions)
            - [**Parameter Description**](#parameter-description)
            - [**Examples**](#examples)
        - [Using the --mount Option to Mount Data](#using-the---mount-option-to-mount-data)
            - [**Format**](#format-1)
            - [**Functions**](#functions-1)
            - [**Parameter Description**](#parameter-description-1)
            - [**Examples**](#examples-1)
        - [Reusing the Mounting Configuration in Other Containers](#reusing-the-mounting-configuration-in-other-containers)
            - [**Format**](#format-2)
            - [**Functions**](#functions-2)
            - [**Parameter Description**](#parameter-description-2)
            - [**Examples**](#examples-2)
        - [Using the Anonymous Volume in an Image](#using-the-anonymous-volume-in-an-image)
        - [Querying a Volume](#querying-a-volume)
            - [**Format**](#format-3)
            - [**Functions**](#functions-3)
            - [**Parameter Description**](#parameter-description-3)
            - [**Examples**](#examples-3)
        - [Deleting a Volume](#deleting-a-volume)
            - [**Format**](#format-4)
            - [**Functions**](#functions-4)
            - [**Parameter Description**](#parameter-description-4)
            - [**Examples**](#examples-4)
        - [Precautions](#precautions-1)
            - [Conflict Combination Rules](#conflict-combination-rules)
            - [Differences Between iSula and Docker](#differences-between-isula-and-docker)

<!-- /TOC -->

## Overview

After a container managed by iSula is destroyed, all data in the container is destroyed. If you want to retain data after the container is destroyed, a data persistence mechanism is required. iSula allows files, directories, or volumes on a host to be mounted to a container at runtime. You can write the data to be persisted to the mount point in the container. After the container is destroyed, the files, directories, and volumes on the host are retained. If you need to delete a file, directory, or volume on the host, you can manually delete the file or directory, or run the iSula command to delete the volume. Currently, the iSula supports only local volume management. Local volumes are classified into named volumes and anonymous volumes. A volume whose name is specified by a user is called a named volume. If a user does not specify a name for a volume, iSula automatically generates a name (a 64-bit random number) for the volume, that is, an anonymous volume.

The following describes how to use iSula to manage local volumes.

## Precautions

- The volume name contains 2 to 64 characters and complies with the regular expression ^[a-zA-Z0-9][a-zA-Z0-9_.-]{1,63}$. That is, the first character of the volume name must be a letter or digit, and other characters can be letters, digits, underscores (_), periods (.), and hyphens (-).
- During container creation, if data exists at the mount point of the container corresponding to the volume, the data is copied to the volume by default. If the iSula breaks down or restarts or the system is powered off during the copy process, the data in the volume may be incomplete. In this case, you need to manually delete the volume or the data in the volume to ensure that the data is correct and complete.

## Usage

### Using the -v Option to Mount Data

#### **Format**

```shell
isula run -v [SRC:]DST[:MODE,MODE...] IMAGE
```

#### **Functions**

When you create and run a container, use the -v/--volume option to mount the files, directories, or volumes on the host to the container for data persistence.

#### **Parameter Description**
- SRC: Path of the file, directory, or volume to be mounted on the host. If the value is an absolute path, a file or folder on the host is mounted. If the value is a volume name, a volume is mounted. If this parameter is not specified, an anonymous volume is mounted. If a folder or volume does not exist, iSula creates a folder or volume and then mounts it.
- DST: Mount path in the container. The value must be an absolute path.
- MODE: When the source to be mounted is a directory or file, the valid parameters are ro, rw, z, Z, private, rprivate, slave, rslave, shared, and rshared. Only one parameter of the same type can be configured. If the source is a volume, the valid parameters are ro, rw, z, Z, and nocopy. Only one parameter of the same type can be configured. Use commas (,) to separate multiple attributes. The parameters are described as follows:

| Parameter | Description |
| -------- | -----------------------------------------------|
| ro | The mount point in the container is mounted in read-only mode. |
| rw | The mount point in the container is mounted in read/write mode. |
| z | If SELinux is enabled, add the SELinux share label during mounting. |
| Z | If SELinux is enabled, add the SELinux private label during mounting. |
| private | The mount point in the container is mounted in private propagation mode. |
| rprivate | The mount point in the container is recursively mounted in private propagation mode. |
| slave | The mount point in the container is mounted in subordinate propagation mode. |
| rslave | The mount point in the container is recursively mounted in subordinate propagation mode. |
| shared | The mount point in the container is mounted in shared propagation mode. |
| rshared | The mount point in the container is recursively mounted in shared propagation mode. |
| nocopy | Data at the mount point is not copied. If this parameter is not set, data is copied by default. In addition, if data already exists in the volume, the data will not be copied. |


#### **Examples**
Run the container based on BusyBox, create or mount a volume named vol to the /vol directory of the container, and set the mount point to read-only. In addition, if data exists at the mount point in the container, the data is not copied.
```shell
isula run -v vol:/vol:ro,nocopy busybox
```

### Using the --mount Option to Mount Data

#### **Format**
```shell
isula run --mount [type=TYPE,][src=SRC,]dst=DST[,KEY=VALUE] busybox
```

#### **Functions**
When you create and run a container, use the --mount option to mount the files, directories, or volumes on the host to the container for data persistence.

#### **Parameter Description**
- type: Type of data mounted to the container. The value can be bind, volume, or squashfs. If this parameter is not specified, the default value is volume.
- src: Path of the file, directory, or volume to be mounted on the host. If the value is an absolute path, the file or directory on the host is mounted. If the value is a volume name, a volume is mounted. If this parameter is not specified, the volume is an anonymous volume. If a folder or volume does not exist, iSula creates a file or volume and then mounts it. The keyword src is also called source.
- dst: Mount path in the container. The value must be an absolute path. The keyword dst is also called destination or target.
- KEY=VALUE: Parameter of --mount. The values are as follows:

| KEY | VALUE |
| ------------------------------ | --------------------------------------------------------------------------- |
| selinux-opts/bind-selinux-opts | z or Z. z indicates that if SELinux is enabled, the SELinux share label is added during mounting. Z indicates that if SELinux is enabled, the SELinux private label is added during mounting.
| ro/readonly                    | 0/false indicates that the mount is read/write. 1/true indicates that the mount is read-only. If this parameter is not specified, the mount is read-only. The parameter is supported only when type is set to bind. |
| volume-nocopy | Data at the mount point is not copied. If this parameter is not specified, data is copied by default. In addition, if data already exists in the volume, the data will not be copied. This parameter is supported only when type is set to volume. |

#### **Examples**
Run the container based on BusyBox, create or mount a volume named vol to the /vol directory of the container, and set the mount point to read-only. In addition, if data exists at the mount point in the container, the data is not copied.
```shell
isula run --mount type=volume,src=vol,dst=/vol,ro=true,volume-nocopy=true busybox
```

### Reusing the Mounting Configuration in Other Containers

#### **Format**
```shell
isula run --volumes-from CON1[:MODE] busybox
```

#### **Functions**
When you create and run a container, use the --volumes-from option to indicate that the mount point configuration includes that of the CON1 container. You can set multiple --volumes-from options.

#### **Parameter Description**
- CON1: Name or ID of the container whose mount point is reused.
- MODE: If the value is ro, the mount point is read-only. If the value is rw, the mount point is read/write.

#### **Examples**
Assume that a container named container1 has been configured with a volume vol1 to the container directory /vol1, and a container named container2 has been configured with a volume vol2 to the container directory /vol2. Run a new container to reuse the mounting configuration of container1 and container2. That is, volume vol1 is mounted to the /vol1 directory of the container, and volume vol2 is mounted to the /vol2 directory of the container.
```shell
isula run --volumes-from container1 --volumes-from container2 busbyox
```

### Using the Anonymous Volume in an Image

You do not need to perform any configuration to use the anonymous volume in the image. If an anonymous volume is configured in the image, iSula automatically creates an anonymous volume and mounts it to the specified path in the image at container runtime. You can write data to the mount point of an anonymous volume in a container for data persistence.

### Querying a Volume

#### **Format**
```shell
isula volume ls [OPTIONS]
```

#### **Functions**
This command is used to query all volumes managed by iSula.

#### **Parameter Description**
Option:
- -q,--quit: If this parameter is not specified, only the volume driver information and volume name are queried by default. If this parameter is specified, only the volume name is queried.

#### **Examples**
This command is used to query all volumes managed by iSula and return only the volume name.
```shell
isula volume ls -q
```

### Deleting a Volume

#### **Format**
```
isula volume rm [OPTIONS] VOLUME [VOLUME...]
isula volume prune [OPTIONS]
```

#### **Functions**
- rm: deletes a specified volume. If the volume is used by a container, the volume fails to be deleted.
- prune: deletes all volumes that are not used by containers.

#### **Parameter Description**
OPTIONS in the prune command:
- -f,--force: specifies that the system does not display a message asking you whether to delete the volume. By default, a risk message is displayed. You need to enter y to continue the operation.

#### **Examples**
Delete volumes vol1 and vol2.
```shell
isula volume rm vol1 vol2
```
Delete all unused volumes in the following format. No risk message is displayed.
```shell
isula volume prune -f
```

### Precautions

#### Conflict Combination Rules
If a volume mount point conflict occurs, perform the following operations:
- If configurations of -v and --mount conflict, a failure message is returned.
- If the configuration obtained from --volumes-from conflicts with the -v or --mount configuration, the configuration is discarded.
- If the anonymous volume configuration in the image conflicts with the -v, --mount, or --volumes-from configuration, the configuration is discarded.

#### Differences Between iSula and Docker
| iSula Behavior | Docker Behavior |
| ------------------------------------------- | ------------------------------------------- |
| The volume name can contain a maximum of 64 characters. | The length of the volume name is not limited. |
| If the source to be mounted does not exist, the --mount parameter is created. | If the source to be mounted does not exist, an error is reported. |
| The --mount parameter supports the z or Z parameter configuration in bind-selinux-opts and selinux-opts. | The --mount parameter does not support the parameter configuration in the bind-selinux-opts and selinux-opts. |
| Rules for combining mount point conflicts are not processed. | The anonymous volume specified by -v is processed as the anonymous volume in the image. |
| The volume prune command displays the space that has been reclaimed. | The volume prune command does not display the space that has been reclaimed. |
| -v, --mount, and --volumes-from are configured in hostconfig, and the anonymous volume is configured in config. | The anonymous volume specified by -v is configured in config, and other configurations are configured in hostconfig. |
