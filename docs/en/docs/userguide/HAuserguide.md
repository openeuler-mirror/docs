# Installing, Deploying, and Using HA

<!-- TOC -->
- [Installing, Deploying, and Using HA](#ha的安装部署与使用)
  - [Installation and Configuration](#安装与配置)
    - [Modifying the Host Name and the /etc/hosts File](#修改主机名称及etchosts文件)
    - [Configuring the Yum Source](#配置yum源)
    - [Installing HA Software Package Components](#安装ha软件包组件)
    - [Setting the hacluster User Password](#设置hacluster用户密码)
    - [Modifying the `/etc/corosync/corosync.conf` File](#修改etccorosynccorosyncconf文件)
    - [Managing Services](#管理服务)
      - [Disabling the Firewall](#关闭防火墙)
      - [Managing the pcs Service](#管理pcs服务)
      - [Managing the pacemaker Service](#管理pacemaker服务)
      - [Managing the corosync Service](#管理corosync服务)
    - [Performing Node Authentication](#节点鉴权)
    - [Accessing the Front-End Management Platform](#访问前端管理平台)
  - [Quick User Guide](#快速使用指南)
    - [Login Page](#登陆页面)
    - [Home Page](#主页面)
    - [Managing Nodes](#节点鉴权)
      - [Node](#节点)
    - [Preference Setting](#首选项配置)
      - [Adding Resources](#添加资源)
        - [Adding Common Resources](#添加普通资源)
        - [Adding Group Resources](#添加组资源)
        - [Adding Clone Resources](#添加克隆资源)
      - [Editing Resources](#编辑资源)
      - [Setting Resource Relationships](#设置资源关系)
      - [ACLS](#acls)
    
    <!-- /TOC -->


## Installation and Configuration

- Environment preparation: At least two physical machines or VMs with openEuler 20.03 LTS SP1 installed are required. (This section uses two physical machines or VMs as an example.) For details, see the *openEuler 20.03 LTS SP1 Installation Guide*.

### Modifying the Host Name and the /etc/hosts File

- **Note: You need to perform the following operations on both hosts. The following takes the operation on one host as an example.**

Before using the HA software, ensure that the host name has been changed and all host names have been written into the **/etc/hosts** file.

- Run the following command to change the host name:

```
# hostnamectl set-hostname ha1
```

- Edit the **/etc/hosts** file and write the following fields:

```
172.30.30.65 ha1
172.30.30.66 ha2
```

### Configuring the Yum Source

After the system is successfully installed, the Yum source is configured by default. The file location information is stored in the `/etc/yum.repos.d/openEuler.repo` file. The HA software package uses the following sources:

```
[OS]
name=OS
baseurl=http://repo.openeuler.org/openEuler-20.03-LTS-SP1/OS/$basearch/
enabled=1
gpgcheck=1
gpgkey=http://repo.openeuler.org/openEuler-20.03-LTS-SP1/OS/$basearch/RPM-GPG-KEY-openEuler

[everything]
name=everything
baseurl=http://repo.openeuler.org/openEuler-20.03-LTS-SP1/everything/$basearch/
enabled=1
gpgcheck=1
gpgkey=http://repo.openeuler.org/openEuler-20.03-LTS-SP1/everything/$basearch/RPM-GPG-KEY-openEuler

[EPOL]
name=EPOL
baseurl=http://repo.openeuler.org/openEuler-20.03-LTS-SP1/EPOL/$basearch/
enabled=1
gpgcheck=1
gpgkey=http://repo.openeuler.org/openEuler-20.03-LTS-SP1/OS/$basearch/RPM-GPG-KEY-openEuler
```

### Installing HA Software Package Components

```
# yum install corosync pacemaker pcs fence-agents fence-virt corosync-qdevice sbd drbd drbd-utils -y
```

### Setting the hacluster User Password

```
# passwd hacluster
```

### Modifying the `/etc/corosync/corosync.conf` File

```
totem {
        version: 2
        cluster_name: hacluster
         crypto_cipher: none
        crypto_hash: none
}
logging {         
        fileline: off
        to_stderr: yes
        to_logfile: yes
        logfile: /var/log/cluster/corosync.log
        to_syslog: yes
        debug: on
       logger_subsys {
               subsys: QUORUM
               debug: on
        }
}
quorum {
           provider: corosync_votequorum
           expected_votes: 2
           two_node: 1
       }
nodelist {
       node {
               name: ha1
               nodeid: 1
               ring0_addr: 172.30.30.65
               }
        node {
               name: ha2
               nodeid: 2
               ring0_addr: 172.30.30.66
               }
        }
```

### Managing Services

#### Disabling the Firewall

```
# systemctl stop firewalld
```

Change the status of SELINUX in the **/etc/selinux/config** file to **disabled**.

```
# SELINUX=disabled
```

#### Managing the pcs Service

- Run the following command to start the **pcs** service:

```
# systemctl start pcsd
```

- Run the following command to query service status:

```
# systemctl status pcsd
```

The service is started successfully if the following information is displayed:

![](./figures/HA-pcs.png)

#### Managing the pacemaker Service

- Run the following command to start the **pacemaker** service:

```
# systemctl start pacemaker
```

- Run the following command to query service status:

```
# systemctl status pacemaker
```

The service is started successfully if the following information is displayed:

![](./figures/HA-pacemaker.png)

#### Managing the corosync Service

- Run the following command to start the **corosync** service:

```
# systemctl start corosync
```

- Run the following command to query service status:

```
# systemctl status corosync
```

The service is started successfully if the following information is displayed:

![](./figures/HA-corosync.png)

### Performing Node Authentication

- **Note: Perform this operation on only one node.**

```
# pcs host auth ha1 ha2
```

### Accessing the Front-End Management Platform

After the preceding services are started, open the browser (Chrome or Firefox is recommended) and enter `https://IP:2224` in the address box.

## Quick User Guide

### Login Page

The username is `hacluster` and the password is the one set on the host.

![](./figures/HA-login.png)

### Home Page

The home page is the **MANAGE CLUSTERS** page, which includes four functions: remove, add existing, destroy, and create new clusters.

![](./figures/HA-home-page.png)

### Managing Nodes

#### Node

You can add and remove nodes. The following describes how to add an existing node.

![](./figures/HA-existing-nodes.png)

Node management includes the following functions: start, stop, restart, standby, maintenance, and configure Fencing. You can view the enabled services and running resources of the node and manage the node.

![](./figures/HA-node-setting1.png) ![](./figures/HA-node-setting2.png)

### Preference Setting

You can perform the following operations using command lines. The following is a simple example. Run the `pcs --help` command to query more commands available.

```
# pcs property set stonith-enabled=false
# pcs property set no-quorum-policy=ignore
```

Run the `pcs property` command to view all settings.

![](./figures/HA-firstchoice-cmd.png)

- Change the default status of **No Quorum Policy** to **ignore**, and the default status of **Stonith Enabled** to **false**, as shown in the following figure:

![](./figures/HA-firstchoice.png)

#### Adding Resources

##### Adding Common Resources

The multi-option drop-down list box in the system supports keyword matching. You can enter the keyword of the item to be configured and quickly select it.

Apache and IPaddr are used as examples.

Run the following commands to add the Apache and IPaddr resources:

```
# pcs resource create httpd ocf:heartbeat:apache
# pcs resource create IPaddr ocf:heartbeat:IPaddr2 ip=172.30.30.67
```

Run the following command to check the cluster resource status:

```
# pcs status
```

![](./figures/HA-pcs-status.png)

![](./figures/HA-add-resource.png)

- Add Apache resources.

![](./figures/HA-apache.png)

- The resources are successfully added if the following information is displayed:

![](./figures/HA-apache-suc.png)

- The resources are created and started successfully, and run on a node, for example, **ha1**. The Apache page is displayed.

![](./figures/HA-apache-show.png)

- Add IPaddr resources.

![](./figures/HA-ipaddr.png)

- The resources are successfully added if the following information is displayed:

![](./figures/HA-ipaddr-suc.png)

- The resources are created and started successfully, and run on a node, for example, **ha1**. The HA web login page is displayed, and you can log in to the page and perform operations. When the resources are switched to **ha2**, the web page can still be accessed.

![](./figures/HA-ipaddr-show.png)

##### Adding Group Resources

When you add group resources, at least one common resource is needed in the cluster. Select one or more resources and click **Create Group**.

- **Note: Group resources are started in the sequence of subresources. Therefore, you need to select subresources in sequence.**

![](./figures/HA-group.png)

The resources are successfully added if the following information is displayed:

![](./figures/HA-group-suc.png)

##### Adding Clone Resources

![](./figures/HA-clone.png)

The resources are successfully added if the following information is displayed:

![](./figures/HA-clone-suc.png)

#### Editing Resources

- **Enable**: Select a target resource that is not running from the resource node list. Enable the resource.
- **Disable**: Select a target resource that is running from the resource node list. Disable the resource.
- **Clearup**: Select a target resource from the resource node list and clear the resource.
- **Porting**: Select a target resource from the resource node list. The resource must be a common resource or group resource that is running. You can port the resource to a specified node.
- **Rollback**: Select a target resource from the resource node list. Before rolling back a resource, ensure that the resource has been ported. You can clear the porting settings of the resource and roll the resource back to the original node. After you click the button, the status of the resource item in the list is the same as that when the resource is enabled.
- **Remove**: Select a target resource from the resource node list and remove the resource.

You can perform the preceding resource operations on the page shown in the following figure:

![](./figures/HA-resoure-set.png)

#### Setting Resource Relationships

The resource relationship is used to set restrictions for target resources. Resource restrictions are classified as follows: **resource location**, **resource colocation**, and **resource ordering**.

- **Resource location**: Set the runlevel of nodes in the cluster to determine the node where the resource runs during startup or switchover. The runlevels are Master and Slave in descending order.
- **Resource colocation**: Indicate whether the target resource and other resources in the cluster are running on the same node. For resources on the same node, the resource must run on the same node as the target resource. For resources on mutually exclusive nodes, the resource and the target resource must run on different nodes.
- **Resource ordering**: Set the ordering in which the target resource and other resources in the cluster are started. The preamble resource must run before the target resource runs. The postamble resource can run only after the target resource runs.

After adding common resources or group resources, you can perform the preceding resource operations on the page shown in the following figure:

![](./figures/HA-resource-relationship.png)

#### ACLS

ACLS is an access control list. You can click **Add** to add a user and manage the user access.

![](./figures/HA-ACLS.png)