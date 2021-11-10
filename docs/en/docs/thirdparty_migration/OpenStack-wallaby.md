# OpenStack-Wallaby Deployment Guide

<!-- TOC -->

- [OpenStack-Wallaby Deployment Guide](#openstack-wallaby-deployment-guide)
  - [OpenStack](#openstack)
  - [Conventions](#conventions)
  - [Preparing the Environment](#preparing-the-environment)
    - [Environment Configuration](#environment-configuration)
    - [Installing the SQL Database](#installing-the-sql-database)
    - [Installing RabbitMQ](#installing-rabbitmq)
    - [Installing Memcached](#installing-memcached)
  - [Installing OpenStack](#installing-openstack)
    - [Installing Keystone](#installing-keystone)
    - [Installing Glance](#installing-glance)
    - [Installing Placement](#installing-placement)
    - [Installing Nova](#installing-nova)
    - [Installing Neutron](#installing-neutron)
    - [Installing Cinder](#installing-cinder)
    - [Installing Horizon](#installing-horizon)
    - [Installing Tempest](#installing-tempest)
    - [Installing Ironic](#installing-ironic)
    - [Installing Kolla](#installing-kolla)
    - [Installing Trove](#installing-trove)
    - [Installing Swift](#installing-swift)
    <!-- /TOC -->

## OpenStack

OpenStack is an open source cloud computing infrastructure software project developed by the community. It provides an operating platform or tool set for deploying the cloud, offering scalable and flexible cloud computing for organizations.

As an open source cloud computing management platform, OpenStack consists of several major components, such as Nova, Cinder, Neutron, Glance, Keystone, and Horizon. OpenStack supports almost all cloud environments. The project aims to provide a cloud computing management platform that is easy-to-use, scalable, unified, and standardized. OpenStack provides an infrastructure as a service (IaaS) solution that combines complementary services, each of which provides an API for integration.

The official source of openEuler 21.09 now supports OpenStack Wallaby. You can configure the Yum source then deploy OpenStack by following the instructions of this document.

## Conventions

OpenStack supports multiple deployment modes. This document includes two deployment modes: `All in One` and `Distributed`. The conventions are as follows:

`ALL in One` mode:

```text
Ignores all possible suffixes.
```

`Distributed` mode:

```text
A suffix of `(CTL)` indicates that the configuration or command applies only to the `control node`.
A suffix of `(CPT)` indicates that the configuration or command applies only to the `compute node`.
A suffix of `(STG)` indicates that the configuration or command applies only to the `storage node`.
In other cases, the configuration or command applies to both the `control node` and `compute node`.
```

***Note***

The services involved in the preceding conventions are as follows:

- Cinder
- Nova
- Neutron

## Preparing the Environment

### Environment Configuration

1. Configure the openEuler 21.09 official Yum source. Enable the EPOL software repository to support OpenStack.

    ```shell
    cat << EOF >> /etc/yum.repos.d/21.09-OpenStack_Wallaby.repo
    [OS]
    name=OS
    baseurl=http://repo.openeuler.org/openEuler-21.09/OS/$basearch/
    enabled=1
    gpgcheck=1
    gpgkey=http://repo.openeuler.org/openEuler-21.09/OS/$basearch/RPM-GPG-KEY-openEuler

    [everything]
    name=everything
    baseurl=http://repo.openeuler.org/openEuler-21.09/everything/$basearch/
    enabled=1
    gpgcheck=1
    gpgkey=http://repo.openeuler.org/openEuler-21.09/everything/$basearch/RPM-GPG-KEY-openEuler

    [EPOL]
    name=EPOL
    baseurl=http://repo.openeuler.org/openEuler-21.09/EPOL/main/$basearch/
    enabled=1
    gpgcheck=1
    gpgkey=http://repo.openeuler.org/openEuler-21.09/OS/$basearch/RPM-GPG-KEY-openEuler
    EOF

    yum clean all && yum makecache
    ```

2. Change the host name and mapping.

    Set the host name of each node:

    ```shell
    hostnamectl set-hostname controller                                                            (CTL)
    hostnamectl set-hostname compute                                                               (CPT)
    ```

    Assuming the IP address of the controller node is `10.0.0.11` and the IP address of the compute node (if any) is `10.0.0.12`, add the following information to the `/etc/hosts` file:

    ```shell
    10.0.0.11   controller
    10.0.0.12   compute
    ```

### Installing the SQL Database

1. Run the following command to install the software package:

    ```shell
    yum install mariadb mariadb-server python3-PyMySQL
    ```

2. Run the following command to create and edit the `/etc/my.cnf.d/openstack.cnf` file:

    ```shell
    vim /etc/my.cnf.d/openstack.cnf

    [mysqld]
    bind-address = 10.0.0.11
    default-storage-engine = innodb
    innodb_file_per_table = on
    max_connections = 4096
    collation-server = utf8_general_ci
    character-set-server = utf8
    ```

    ***Note***

    **`bind-address` is set to the management IP address of the controller node.**

3. Run the following commands to start the database service and configure it to automatically start upon system boot:

    ```shell
    systemctl enable mariadb.service
    systemctl start mariadb.service
    ```

4. (Optional) Configure the default database password:

    ```shell
    mysql_secure_installation
    ```

    ***Note***

    **Perform operations as prompted.**

### Installing RabbitMQ

1. Run the following command to install the software package:

    ```shell
    yum install rabbitmq-server
    ```

2. Start the RabbitMQ service and configure it to automatically start upon system boot:

    ```shell
    systemctl enable rabbitmq-server.service
    systemctl start rabbitmq-server.service
    ```

3. Add the OpenStack user:

    ```shell
    rabbitmqctl add_user openstack RABBIT_PASS
    ```

    ***Note***

    **Replace `RABBIT_PASS` to set the password for the openstack user.**

4. Run the following command to set the permission of the openstack user to allow the user to perform configuration, write, and read operations:

    ```shell
    rabbitmqctl set_permissions openstack ".*" ".*" ".*"
    ```

### Installing Memcached

1. Run the following command to install the dependency package:

    ```shell
    yum install memcached python3-memcached
    ```

2. Open the `/etc/sysconfig/memcached` file in insert mode.

    ```shell
    vim /etc/sysconfig/memcached

    OPTIONS="-l 127.0.0.1,::1,controller"
    ```

3. Run the following command to start the Memcached service and configure it to automatically start upon system boot:

    ```shell
    systemctl enable memcached.service
    systemctl start memcached.service
    ```

    ***Note***

    **After the service is started, you can run `memcached-tool controller stats` to ensure that the service is started properly and available. You can replace `controller` with the management IP address of the controller node.**

## Installing OpenStack

### Installing Keystone

1. Create the **keyston** database and grant permissions:

    ``` sql
    mysql -u root -p

    MariaDB [(none)]> CREATE DATABASE keystone;
    MariaDB [(none)]> GRANT ALL PRIVILEGES ON keystone.* TO 'keystone'@'localhost' \
    IDENTIFIED BY 'KEYSTONE_DBPASS';
    MariaDB [(none)]> GRANT ALL PRIVILEGES ON keystone.* TO 'keystone'@'%' \
    IDENTIFIED BY 'KEYSTONE_DBPASS';
    MariaDB [(none)]> exit
    ```

    ***Note***

    **Replace `KEYSTONE_DBPASS` to set the password for the keystone database.**

2. Install the software package:

    ```shell
    yum install openstack-keystone httpd mod_wsgi
    ```

3. Configure Keystone:

    ```shell
    vim /etc/keystone/keystone.conf

    [database]
    connection = mysql+pymysql://keystone:KEYSTONE_DBPASS@controller/keystone

    [token]
    provider = fernet
    ```

    ***Description***

    In the **[database]** section, configure the database entry .

    In the **[token]** section, configure the token provider .

    ***Note:***

    **Replace `KEYSTONE_DBPASS` with the password of the keystone database.**

4. Synchronize the database:

    ```shell
    su -s /bin/sh -c "keystone-manage db_sync" keystone
    ```

5. Initialize the Fernet keystore:

    ```shell
    keystone-manage fernet_setup --keystone-user keystone --keystone-group keystone
    keystone-manage credential_setup --keystone-user keystone --keystone-group keystone
    ```

6. Start the service:

    ```shell
    keystone-manage bootstrap --bootstrap-password ADMIN_PASS \
    --bootstrap-admin-url http://controller:5000/v3/ \
    --bootstrap-internal-url http://controller:5000/v3/ \
    --bootstrap-public-url http://controller:5000/v3/ \
    --bootstrap-region-id RegionOne
    ```

    ***Note***

    **Replace `ADMIN_PASS` to set the password for the admin user.**

7. Configure the Apache HTTP server:

    ```shell
    vim /etc/httpd/conf/httpd.conf

    ServerName controller
    ```

    ```shell
    ln -s /usr/share/keystone/wsgi-keystone.conf /etc/httpd/conf.d/
    ```

    ***Description***

    Configure `ServerName` to use the control node.

    ***Note***
    **If the `ServerName` item does not exist, create it.

8. Start the Apache HTTP service:

    ```shell
    systemctl enable httpd.service
    systemctl start httpd.service
    ```

9. Create environment variables:

    ```shell
    cat << EOF >> ~/.admin-openrc
    export OS_PROJECT_DOMAIN_NAME=Default
    export OS_USER_DOMAIN_NAME=Default
    export OS_PROJECT_NAME=admin
    export OS_USERNAME=admin
    export OS_PASSWORD=ADMIN_PASS
    export OS_AUTH_URL=http://controller:5000/v3
    export OS_IDENTITY_API_VERSION=3
    export OS_IMAGE_API_VERSION=2
    EOF
    ```

    ***Note***

    **Replace `ADMIN_PASS` with the password of the admin user.**

10. Create domains, projects, users, and roles in sequence.The python3-openstackclient must be installed first:

    ```shell
    yum install python3-openstackclient
    ```

    Import the environment variables:

    ```shell
    source ~/.admin-openrc
    ```

    Create the project `service`. The domain `default` has been created during keystone-manage bootstrap.

    ```shell
    openstack domain create --description "An Example Domain" example
    ```

    ```shell
    openstack project create --domain default --description "Service Project" service
    ```

    Create the (non-admin) project `myproject`, user `myuser`, and role `myrole`, and add the role `myrole` to `myproject` and `myuser`.

    ```shell
    openstack project create --domain default --description "Demo Project" myproject
    openstack user create --domain default --password-prompt myuser
    openstack role create myrole
    openstack role add --project myproject --user myuser myrole
    ```

11. Perform the verification.

    Cancel the temporary environment variables `OS_AUTH_URL` and `OS_PASSWORD`.

    ```shell
    source ~/.admin-openrc
    unset OS_AUTH_URL OS_PASSWORD
    ```

    Request a token for the **admin** user:

    ```shell
    openstack --os-auth-url http://controller:5000/v3 \
    --os-project-domain-name Default --os-user-domain-name Default \
    --os-project-name admin --os-username admin token issue
    ```

    Request a token for user **myuser**:

    ```shell
    openstack --os-auth-url http://controller:5000/v3 \
    --os-project-domain-name Default --os-user-domain-name Default \
    --os-project-name myproject --os-username myuser token issue
    ```

### Installing Glance

1. Create the database, service credentials, and the API endpoints.

    Create the database:

    ```sql
    mysql -u root -p

    MariaDB [(none)]> CREATE DATABASE glance;
    MariaDB [(none)]> GRANT ALL PRIVILEGES ON glance.* TO 'glance'@'localhost' \
    IDENTIFIED BY 'GLANCE_DBPASS';
    MariaDB [(none)]> GRANT ALL PRIVILEGES ON glance.* TO 'glance'@'%' \
    IDENTIFIED BY 'GLANCE_DBPASS';
    MariaDB [(none)]> exit
    ```

    ***Note:***

    **Replace `GLANCE_DBPASS` to set the password for the glance database.**

    Create the service credential:

    ```shell
    source ~/.admin-openrc

    openstack user create --domain default --password-prompt glance
    openstack role add --project service --user glance admin
    openstack service create --name glance --description "OpenStack Image" image
    ```

    Create the API endpoints for the image service:

    ```shell
    openstack endpoint create --region RegionOne image public http://controller:9292
    openstack endpoint create --region RegionOne image internal http://controller:9292
    openstack endpoint create --region RegionOne image admin http://controller:9292
    ```

2. Install the software package:

    ```shell
    yum install openstack-glance
    ```

3. Configure Glance:

    ```shell
    vim /etc/glance/glance-api.conf

    [database]
    connection = mysql+pymysql://glance:GLANCE_DBPASS@controller/glance

    [keystone_authtoken]
    www_authenticate_uri  = http://controller:5000
    auth_url = http://controller:5000
    memcached_servers = controller:11211
    auth_type = password
    project_domain_name = Default
    user_domain_name = Default
    project_name = service
    username = glance
    password = GLANCE_PASS

    [paste_deploy]
    flavor = keystone

    [glance_store]
    stores = file,http
    default_store = file
    filesystem_store_datadir = /var/lib/glance/images/
    ```

    ***Description:***

    In the **[database]** section, configure the database entry.

    In the **[keystone_authtoken]** and **[paste_deploy]** sections, configure the identity authentication service entry.

    In the **[glance_store]** section, configure the local file system storage and the location of image files.

    ***Note***

    **Replace `GLANCE_DBPASS` with the password of the glance database.**

    **Replace `GLANCE_PASS` with the password of user glance.**

4. Synchronize the database:

    ```shell
    su -s /bin/sh -c "glance-manage db_sync" glance
    ```

5. Start the service:

    ```shell
    systemctl enable openstack-glance-api.service
    systemctl start openstack-glance-api.service
    ```

6. Perform the verification.

    Download the image:

    ```shell
    source ~/.admin-openrc
    
    wget http://download.cirros-cloud.net/0.4.0/cirros-0.4.0-x86_64-disk.img
    ```

    ***Note***

    **If the Kunpeng architecture is used in your environment, download the image of the AArch64 version. the Image cirros-0.5.2-aarch64-disk.img has been tested.**

    Upload the image to the image service:

    ```shell
    openstack image create --disk-format qcow2 --container-format bare \
                           --file cirros-0.4.0-x86_64-disk.img --public cirros
    ```

    Confirm the image upload and verify the attributes:

    ```shell
    openstack image list
    ```

### Installing Placement

1. Create a database, service credentials, and API endpoints.

    Create a database.

    Access the database as the **root** user. Create the **placement** database, and grant permissions.

    ```shell
    mysql -u root -p
    MariaDB [(none)]> CREATE DATABASE placement;
    MariaDB [(none)]> GRANT ALL PRIVILEGES ON placement.* TO 'placement'@'localhost' \
    IDENTIFIED BY 'PLACEMENT_DBPASS';
    MariaDB [(none)]> GRANT ALL PRIVILEGES ON placement.* TO 'placement'@'%' \
    IDENTIFIED BY 'PLACEMENT_DBPASS';
    MariaDB [(none)]> exit
    ```

    **Note**:

    **Replace `PLACEMENT_DBPASS` to set the password for the placement database.**

    ```shell
    source admin-openrc
    ```

    Run the following commands to create the Placement service credentials, create the **placement** user, and add the **admin** role to the **placement** user:

    Create the Placement API Service.

    ```shell
    openstack user create --domain default --password-prompt placement
    openstack role add --project service --user placement admin
    openstack service create --name placement --description "Placement API" placement
    ```

    Create API endpoints of the Placement service.

    ```shell
    openstack endpoint create --region RegionOne placement public http://controller:8778
    openstack endpoint create --region RegionOne placement internal http://controller:8778
    openstack endpoint create --region RegionOne placement admin http://controller:8778
    ```

2. Perform the installation and configuration.

    Install the software package:

    ```shell
    yum install openstack-placement-api
    ```

    Configure Placement:

    Edit the **/etc/placement/placement.conf** file:

    In the **[placement_database]** section, configure the database entry.

    In **[api]** and **[keystone_authtoken]** sections, configure the identity authentication service entry.

    ```shell
    # vim /etc/placement/placement.conf
    [placement_database]
    # ...
    connection = mysql+pymysql://placement:PLACEMENT_DBPASS@controller/placement
    [api]
    # ...
    auth_strategy = keystone
    [keystone_authtoken]
    # ...
    auth_url = http://controller:5000/v3
    memcached_servers = controller:11211
    auth_type = password
    project_domain_name = Default
    user_domain_name = Default
    project_name = service
    username = placement
    password = PLACEMENT_PASS
    ```

    Replace **PLACEMENT_DBPASS** with the password of the **placement** database, and replace **PLACEMENT_PASS** with the password of the **placement** user.

    Synchronize the database:

    ```shell
    su -s /bin/sh -c "placement-manage db sync" placement
    ```

    Start the httpd service.

    ```shell
    systemctl restart httpd
    ```

3. Perform the verification.

    Run the following command to check the status:

    ```shell
    . admin-openrc
    placement-status upgrade check
    ```

    Run the following command to install osc-placement and list the available resource types and features:

    ```shell
    yum install python3-osc-placement
    openstack --os-placement-api-version 1.2 resource class list --sort-column name
    openstack --os-placement-api-version 1.6 trait list --sort-column name
    ```

### Installing Nova

1. Create a database, service credentials, and API endpoints.

    Create a database.

    ```sql
    mysql -u root -p                                                                               (CTL)

    MariaDB [(none)]> CREATE DATABASE nova_api;
    MariaDB [(none)]> CREATE DATABASE nova;
    MariaDB [(none)]> CREATE DATABASE nova_cell0;
    MariaDB [(none)]> GRANT ALL PRIVILEGES ON nova_api.* TO 'nova'@'localhost' \
    IDENTIFIED BY 'NOVA_DBPASS';
    MariaDB [(none)]> GRANT ALL PRIVILEGES ON nova_api.* TO 'nova'@'%' \
    IDENTIFIED BY 'NOVA_DBPASS';
    MariaDB [(none)]> GRANT ALL PRIVILEGES ON nova.* TO 'nova'@'localhost' \
    IDENTIFIED BY 'NOVA_DBPASS';
    MariaDB [(none)]> GRANT ALL PRIVILEGES ON nova.* TO 'nova'@'%' \
    IDENTIFIED BY 'NOVA_DBPASS';
    MariaDB [(none)]> GRANT ALL PRIVILEGES ON nova_cell0.* TO 'nova'@'localhost' \
    IDENTIFIED BY 'NOVA_DBPASS';
    MariaDB [(none)]> GRANT ALL PRIVILEGES ON nova_cell0.* TO 'nova'@'%' \
    IDENTIFIED BY 'NOVA_DBPASS';
    MariaDB [(none)]> exit
    ```

    **Note**:

    **Replace `NOVA_DBPASS` to set the password for the nova database.**

    ```shell
    source ~/.admin-openrc                                                                         (CTL)
    ```

    Run the following command to create the Nova service certificate:

    ```shell
    openstack user create --domain default --password-prompt nova                                  (CTL)
    openstack role add --project service --user nova admin                                         (CTL)
    openstack service create --name nova --description "OpenStack Compute" compute                 (CTL)
    ```

    Create a Nova API endpoint.

    ```shell
    openstack endpoint create --region RegionOne compute public http://controller:8774/v2.1        (CTL)
    openstack endpoint create --region RegionOne compute internal http://controller:8774/v2.1      (CTL)
    openstack endpoint create --region RegionOne compute admin http://controller:8774/v2.1         (CTL)
    ```

2. Install the software packages:

    ```shell
    yum install openstack-nova-api openstack-nova-conductor \                                      (CTL)
    openstack-nova-novncproxy openstack-nova-scheduler 

    yum install openstack-nova-compute                                                             (CPT)
    ```

    **Note**:

    **If the ARM64 architecture is used, you also need to run the following command:**

    ```shell
    yum install edk2-aarch64                                                                       (CPT)
    ```

3. Configure Nova:

    ```shell
    vim /etc/nova/nova.conf

    [DEFAULT]
    enabled_apis = osapi_compute,metadata
    transport_url = rabbit://openstack:RABBIT_PASS@controller:5672/
    my_ip = 10.0.0.1
    use_neutron = true
    firewall_driver = nova.virt.firewall.NoopFirewallDriver
    compute_driver=libvirt.LibvirtDriver                                                           (CPT)
    instances_path = /var/lib/nova/instances/                                                      (CPT)
    lock_path = /var/lib/nova/tmp                                                                  (CPT)

    [api_database]
    connection = mysql+pymysql://nova:NOVA_DBPASS@controller/nova_api                              (CTL)

    [database]
    connection = mysql+pymysql://nova:NOVA_DBPASS@controller/nova                                  (CTL)

    [api]
    auth_strategy = keystone

    [keystone_authtoken]
    www_authenticate_uri = http://controller:5000/
    auth_url = http://controller:5000/
    memcached_servers = controller:11211
    auth_type = password
    project_domain_name = Default
    user_domain_name = Default
    project_name = service
    username = nova
    password = NOVA_PASS

    [vnc]
    enabled = true
    server_listen = $my_ip
    server_proxyclient_address = $my_ip
    novncproxy_base_url = http://controller:6080/vnc_auto.html                                     (CPT)

    [libvirt]
    virt_type = qemu                                                                               (CPT)
    cpu_mode = custom                                                                              (CPT)
    cpu_model = cortex-a72                                                                         (CPT)

    [glance]
    api_servers = http://controller:9292

    [oslo_concurrency]
    lock_path = /var/lib/nova/tmp                                                                  (CTL)

    [placement]
    region_name = RegionOne
    project_domain_name = Default
    project_name = service
    auth_type = password
    user_domain_name = Default
    auth_url = http://controller:5000/v3
    username = placement
    password = PLACEMENT_PASS

    [neutron]
    auth_url = http://controller:5000
    auth_type = password
    project_domain_name = default
    user_domain_name = default
    region_name = RegionOne
    project_name = service
    username = neutron
    password = NEUTRON_PASS
    service_metadata_proxy = true                                                                  (CTL)
    metadata_proxy_shared_secret = METADATA_SECRET                                                 (CTL)
    ```

    Description

    In the **[default]** section, enable the compute and metadata APIs, configure the RabbitMQ message queue entry, configure **my_ip**, and enable the network service **neutron**.

    In the **[api_database]** and **[database]** sections, configure the database entry.

    In the **[api]** and **[keystone_authtoken]** sections, configure the identity service entry.

    In the **[vnc]** section, enable and configure the entry for the remote console.

    In the **[glance]** section, configure the API address for the image service.

    In the **[oslo_concurrency]** section, configure the lock path.

    In the **[placement]** section, configure the entry of the Placement service.

    **Note**:

    **Replace `RABBIT_PASS` with the password of the openstack user in RabbitMQ.**

    **Set `my_ip` to the management IP address of the controller node.**

    **Replace `NOVA_DBPASS` with the password of the nova database.**

    **Replace `NOVA_PASS` with the password of the nova user.**

    **Replace `PLACEMENT_PASS` with the password of the placement user.**

    **Replace `NEUTRON_PASS` with the password of the neutron user.**

    **Replace `METADATA_SECRET` with a proper metadata agent secret.**

    Others

    Check whether VM hardware acceleration (x86 architecture) is supported:

    ```shell
    egrep -c '(vmx|svm)' /proc/cpuinfo                                                             (CPT)
    ```

    If the returned value is **0**, hardware acceleration is not supported. You need to configure libvirt to use QEMU instead of KVM.

    ```shell
    vim /etc/nova/nova.conf                                                                        (CPT)

    [libvirt]
    virt_type = qemu
    ```

    If the returned value is **1** or a larger value, hardware acceleration is supported, and no extra configuration is required.

    **Note**:

    **If the ARM64 architecture is used, you also need to run the following command:**

    ```shell
    vim /etc/libvirt/qemu.conf

    nvram = ["/usr/share/AAVMF/AAVMF_CODE.fd: \
             /usr/share/AAVMF/AAVMF_VARS.fd", \
             "/usr/share/edk2/aarch64/QEMU_EFI-pflash.raw: \
             /usr/share/edk2/aarch64/vars-template-pflash.raw"]

    vim /etc/qemu/firmware/edk2-aarch64.json

    {
        "description": "UEFI firmware for ARM64 virtual machines",
        "interface-types": [
            "uefi"
        ],
        "mapping": {
            "device": "flash",
            "executable": {
                "filename": "/usr/share/edk2/aarch64/QEMU_EFI-pflash.raw",
                "format": "raw"
            },
            "nvram-template": {
                "filename": "/usr/share/edk2/aarch64/vars-template-pflash.raw",
                "format": "raw"
            }
        },
        "targets": [
            {
                "architecture": "aarch64",
                "machines": [
                    "virt-*"
                ]
            }
        ],
        "features": [

        ],
        "tags": [

        ]
    }

    (CPT)
    ```

4. Synchronize the database.

    Run the following command to synchronize the **nova-api** database:

    ```shell
    su -s /bin/sh -c "nova-manage api_db sync" nova                                                (CTL)
    ```

    Run the following command to register the **cell0** database:

    ```shell
    su -s /bin/sh -c "nova-manage cell_v2 map_cell0" nova                                          (CTL)
    ```

    Create the **cell1** cell:

    ```shell
    su -s /bin/sh -c "nova-manage cell_v2 create_cell --name=cell1 --verbose" nova                 (CTL)
    ```

    Synchronize the **nova** database:

    ```shell
    su -s /bin/sh -c "nova-manage db sync" nova                                                    (CTL)
    ```

    Verify whether **cell0** and **cell1** are correctly registered:

    ```shell
    su -s /bin/sh -c "nova-manage cell_v2 list_cells" nova                                         (CTL)
    ```

    Add compute node to the OpenStack cluster:

    ```shell
    su -s /bin/sh -c "nova-manage cell_v2 discover_hosts --verbose" nova                           (CPT)
    ```

5. Start the services:

    ```shell
    systemctl enable \                                                                             (CTL)
    openstack-nova-api.service \
    openstack-nova-scheduler.service \
    openstack-nova-conductor.service \
    openstack-nova-novncproxy.service

    systemctl start \                                                                              (CTL)
    openstack-nova-api.service \
    openstack-nova-scheduler.service \
    openstack-nova-conductor.service \
    openstack-nova-novncproxy.service
    ```

    ```shell
    systemctl enable libvirtd.service openstack-nova-compute.service                               (CPT)
    systemctl start libvirtd.service openstack-nova-compute.service                                (CPT)
    ```

6. Perform the verification.

    ```shell
    source ~/.admin-openrc                                                                         (CTL)
    ```

    List the service components to verify that each process is successfully started and registered:

    ```shell
    openstack compute service list                                                                 (CTL)
    ```

    List the API endpoints in the identity service to verify the connection to the identity service:

    ```shell
    openstack catalog list                                                                         (CTL)
    ```

    List the images in the image service to verify the connections:

    ```shell
    openstack image list                                                                           (CTL)
    ```

    Check whether the cells are running properly and whether other prerequisites are met.

    ```shell
    nova-status upgrade check                                                                      (CTL)
    ```

### Installing Neutron

1. Create the database, service credentials, and API endpoints.

    Create the database:

    ```sql
    mysql -u root -p                                                                               (CTL)

    MariaDB [(none)]> CREATE DATABASE neutron;
    MariaDB [(none)]> GRANT ALL PRIVILEGES ON neutron.* TO 'neutron'@'localhost' \
    IDENTIFIED BY 'NEUTRON_DBPASS';
    MariaDB [(none)]> GRANT ALL PRIVILEGES ON neutron.* TO 'neutron'@'%' \
    IDENTIFIED BY 'NEUTRON_DBPASS';
    MariaDB [(none)]> exit
    ```

    ***Note***

    **Replace `NEUTRON_DBPASS` to set the password for the neutron database.**

    ```shell
    source ~/.admin-openrc                                                                         (CTL)
    ```

    Create the **neutron** service credential:

    ```shell
    openstack user create --domain default --password-prompt neutron                               (CTL)
    openstack role add --project service --user neutron admin                                      (CTL)
    openstack service create --name neutron --description "OpenStack Networking" network           (CTL)
    ```

    Create the API endpoints of the Neutron service:

    ```shell
    openstack endpoint create --region RegionOne network public http://controller:9696             (CTL)
    openstack endpoint create --region RegionOne network internal http://controller:9696           (CTL)
    openstack endpoint create --region RegionOne network admin http://controller:9696              (CTL)
    ```

2. Install the software packages:

    ```shell
    yum install openstack-neutron openstack-neutron-linuxbridge ebtables ipset \                   (CTL)
    openstack-neutron-ml2
    ```

    ```shell
    yum install openstack-neutron-linuxbridge ebtables ipset                                       (CPT)
    ```

3. Configure Neutron.

    Set the main configuration items:

    ```shell
    vim /etc/neutron/neutron.conf

    [database]
    connection = mysql+pymysql://neutron:NEUTRON_DBPASS@controller/neutron                         (CTL)

    [DEFAULT]
    core_plugin = ml2                                                                              (CTL)
    service_plugins = router                                                                       (CTL)
    allow_overlapping_ips = true                                                                   (CTL)
    transport_url = rabbit://openstack:RABBIT_PASS@controller
    auth_strategy = keystone
    notify_nova_on_port_status_changes = true                                                      (CTL)
    notify_nova_on_port_data_changes = true                                                        (CTL)
    api_workers = 3                                                                                (CTL)

    [keystone_authtoken]
    www_authenticate_uri = http://controller:5000
    auth_url = http://controller:5000
    memcached_servers = controller:11211
    auth_type = password
    project_domain_name = Default
    user_domain_name = Default
    project_name = service
    username = neutron
    password = NEUTRON_PASS

    [nova]
    auth_url = http://controller:5000                                                              (CTL)
    auth_type = password                                                                           (CTL)
    project_domain_name = Default                                                                  (CTL)
    user_domain_name = Default                                                                     (CTL)
    region_name = RegionOne                                                                        (CTL)
    project_name = service                                                                         (CTL)
    username = nova                                                                                (CTL)
    password = NOVA_PASS                                                                           (CTL)

    [oslo_concurrency]
    lock_path = /var/lib/neutron/tmp
    ```

    ***Description***

    Configure the database entry in the **[database]** section.

    Enable the ML2 and router plugins, allow IP address overlapping, and configure the RabbitMQ message queue entry in the **[default]** section.

    Configure the identity authentication service entry in the **[default]** and **[keystone]** sections.

    Enable the network to notify the change of the compute network topology in the **[default]** and **[nova]** sections.

    Configure the lock path in the **[oslo_concurrency]** section.

    ***Note***

    **Replace `NEUTRON_DBPASS` with the password of the neutron database.**

    **Replace `RABBIT_PASS` with the password of the openstack user in RabbitMQ.**

    **Replace `NEUTRON_PASS` with the password of the neutron user.**

    **Replace `NOVA_PASS` with the password of the nova user.**

    Configure the ML2 plugin:

    ```shell
    vim /etc/neutron/plugins/ml2/ml2_conf.ini

    [ml2]
    type_drivers = flat,vlan,vxlan
    tenant_network_types = vxlan
    mechanism_drivers = linuxbridge,l2population
    extension_drivers = port_security

    [ml2_type_flat]
    flat_networks = provider

    [ml2_type_vxlan]
    vni_ranges = 1:1000

    [securitygroup]
    enable_ipset = true
    ```

    Create the symbolic link for /etc/neutron/plugin.ini.

    ```shell
    ln -s /etc/neutron/plugins/ml2/ml2_conf.ini /etc/neutron/plugin.ini
    ```

    **Note**

    **Enable flat, vlan, and vxlan networks, enable the linuxbridge and l2population mechanisms, and enable the port security extension driver in the [ml2] section.**

    **Configure the flat network as the provider virtual network in the [ml2_type_flat] section.**

    **Configure the range of the VXLAN network identifier in the [ml2_type_vxlan] section.**

    **Set ipset enabled in the [securitygroup] section.**

    **Remarks**

    **The actual configurations of l2 can be modified based as required. In this example, the provider network + linuxbridge is used.**

    Configure the Linux bridge agent:

    ```shell
    vim /etc/neutron/plugins/ml2/linuxbridge_agent.ini

    [linux_bridge]
    physical_interface_mappings = provider:PROVIDER_INTERFACE_NAME

    [vxlan]
    enable_vxlan = true
    local_ip = OVERLAY_INTERFACE_IP_ADDRESS
    l2_population = true

    [securitygroup]
    enable_security_group = true
    firewall_driver = neutron.agent.linux.iptables_firewall.IptablesFirewallDriver
    ```

    ***Description***

    Map the provider virtual network to the physical network interface in the **[linux_bridge]** section.

    Enable the VXLAN overlay network, configure the IP address of the physical network interface that processes the overlay network, and enable layer-2 population in the **[vxlan]** section.

    Enable the security group and configure the linux bridge iptables firewall driver in the **[securitygroup]** section.

    ***Note***

    **Replace `PROVIDER_INTERFACE_NAME` with the physical network interface.**

    **Replace `OVERLAY_INTERFACE_IP_ADDRESS` with the management IP address of the controller node.**

    Configure the Layer-3 agent:

    ```shell
    vim /etc/neutron/l3_agent.ini                                                                  (CTL)

    [DEFAULT]
    interface_driver = linuxbridge
    ```

    ***Description***

    Set the interface driver to linuxbridge in the **[default]** section.

    Configure the DHCP agent:

    ```shell
    vim /etc/neutron/dhcp_agent.ini                                                                (CTL)

    [DEFAULT]
    interface_driver = linuxbridge
    dhcp_driver = neutron.agent.linux.dhcp.Dnsmasq
    enable_isolated_metadata = true
    ```

    ***Description***

    In the **[default]** section, configure the linuxbridge interface driver and Dnsmasq DHCP driver, and enable the isolated metadata.

    Configure the metadata agent:

    ```shell
    vim /etc/neutron/metadata_agent.ini                                                            (CTL)

    [DEFAULT]
    nova_metadata_host = controller
    metadata_proxy_shared_secret = METADATA_SECRET
    ```

    ***Description***

    In the **[default]**, configure the metadata host and the shared secret.

    ***Note***

    **Replace `METADATA_SECRET` with a proper metadata agent secret.**

4. Configure Nova:

    ```shell
    vim /etc/nova/nova.conf

    [neutron]
    auth_url = http://controller:5000
    auth_type = password
    project_domain_name = Default
    user_domain_name = Default
    region_name = RegionOne
    project_name = service
    username = neutron
    password = NEUTRON_PASS
    service_metadata_proxy = true                                                                  (CTL)
    metadata_proxy_shared_secret = METADATA_SECRET                                                 (CTL)
    ```

    ***Description***

    In the **[neutron]** section, configure the access parameters, enable the metadata agent, and configure the secret.

    ***Note***

    **Replace `NEUTRON_PASS` with the password of the neutron user.**

    **Replace `METADATA_SECRET` with a proper metadata agent secret.**

5. Synchronize the database:

    ```shell
    su -s /bin/sh -c "neutron-db-manage --config-file /etc/neutron/neutron.conf \
    --config-file /etc/neutron/plugins/ml2/ml2_conf.ini upgrade head" neutron
    ```

6. Run the following command to restart the compute API service:

    ```shell
    systemctl restart openstack-nova-api.service
    ```

7. Start the network service:

    ```shell
    systemctl enable neutron-server.service neutron-linuxbridge-agent.service \                    (CTL)
    neutron-dhcp-agent.service neutron-metadata-agent.service \
    systemctl enable neutron-l3-agent.service
    systemctl restart openstack-nova-api.service neutron-server.service                            (CTL)
    neutron-linuxbridge-agent.service neutron-dhcp-agent.service \
    neutron-metadata-agent.service neutron-l3-agent.service

    systemctl enable neutron-linuxbridge-agent.service                                             (CPT)
    systemctl restart neutron-linuxbridge-agent.service openstack-nova-compute.service             (CPT)
    ```

8. Perform the verification.

    Run the following command to verify whether the Neutron agent is started successfully:

    ```shell
    openstack network agent list
    ```

### Installing Cinder

1. Create the database, service credentials, and API endpoints.

    Create the database:

    ```sql
    mysql -u root -p

    MariaDB [(none)]> CREATE DATABASE cinder;
    MariaDB [(none)]> GRANT ALL PRIVILEGES ON cinder.* TO 'cinder'@'localhost' \
    IDENTIFIED BY 'CINDER_DBPASS';
    MariaDB [(none)]> GRANT ALL PRIVILEGES ON cinder.* TO 'cinder'@'%' \
    IDENTIFIED BY 'CINDER_DBPASS';
    MariaDB [(none)]> exit
    ```

    ***Note***

    **Replace `CINDER_DBPASS` to set the password for the cinder database.**

    ```shell
    source ~/.admin-openrc
    ```

    Create the Cinder service credentials:

    ```shell
    openstack user create --domain default --password-prompt cinder
    openstack role add --project service --user cinder admin
    openstack service create --name cinderv2 --description "OpenStack Block Storage" volumev2
    openstack service create --name cinderv3 --description "OpenStack Block Storage" volumev3
    ```

    Create the API endpoints for the block storage service:

    ```shell
    openstack endpoint create --region RegionOne volumev2 public http://controller:8776/v2/%\(project_id\)s
    openstack endpoint create --region RegionOne volumev2 internal http://controller:8776/v2/%\(project_id\)s
    openstack endpoint create --region RegionOne volumev2 admin http://controller:8776/v2/%\(project_id\)s
    openstack endpoint create --region RegionOne volumev3 public http://controller:8776/v3/%\(project_id\)s
    openstack endpoint create --region RegionOne volumev3 internal http://controller:8776/v3/%\(project_id\)s
    openstack endpoint create --region RegionOne volumev3 admin http://controller:8776/v3/%\(project_id\)s
    ```

2. Install the software packages:

    ```shell
    yum install openstack-cinder-api openstack-cinder-scheduler                                    (CTL)
    ```

    ```shell
    yum install lvm2 device-mapper-persistent-data scsi-target-utils rpcbind nfs-utils \           (STG)
                openstack-cinder-volume openstack-cinder-backup
    ```

3. Prepare the storage devices. The following is an example:

    ```shell
    pvcreate /dev/vdb
    vgcreate cinder-volumes /dev/vdb
    
    vim /etc/lvm/lvm.conf


    devices {
    ...
    filter = [ "a/vdb/", "r/.*/"]
    ```
    
    ***Description***
    
    In the **devices** section, add filters to allow the **/dev/vdb** devices and reject other devices.

4. Prepare the NFS:

    ```shell
    mkdir -p /root/cinder/backup

    cat << EOF >> /etc/export
    /root/cinder/backup 192.168.1.0/24(rw,sync,no_root_squash,no_all_squash)
    EOF

    ```

5. Configure Cinder:

    ```shell
    vim /etc/cinder/cinder.conf

    [DEFAULT]
    transport_url = rabbit://openstack:RABBIT_PASS@controller
    auth_strategy = keystone
    my_ip = 10.0.0.11
    enabled_backends = lvm                                                                         (STG)
    backup_driver=cinder.backup.drivers.nfs.NFSBackupDriver                                        (STG)
    backup_share=HOST:PATH                                                                         (STG)

    [database]
    connection = mysql+pymysql://cinder:CINDER_DBPASS@controller/cinder

    [keystone_authtoken]
    www_authenticate_uri = http://controller:5000
    auth_url = http://controller:5000
    memcached_servers = controller:11211
    auth_type = password
    project_domain_name = Default
    user_domain_name = Default
    project_name = service
    username = cinder
    password = CINDER_PASS

    [oslo_concurrency]
    lock_path = /var/lib/cinder/tmp

    [lvm]
    volume_driver = cinder.volume.drivers.lvm.LVMVolumeDriver                                      (STG)
    volume_group = cinder-volumes                                                                  (STG)
    iscsi_protocol = iscsi                                                                         (STG)
    iscsi_helper = tgtadm                                                                          (STG)
    ```

    ***Description***

    In the **[database]** section, configure the database entry.

    In the **[DEFAULT]** section, configure the RabbitMQ message queue entry and **my_ip**.

    In the **[DEFAULT]** and **[keystone_authtoken]** sections, configure the identity authentication service entry.

    In the **[oslo_concurrency]** section, configure the lock path.

    ***Note***

    **Replace `CINDER_DBPASS` with the password of the cinder database.**

    **Replace `RABBIT_PASS` with the password of the openstack user in RabbitMQ.**

    **Set `my_ip` to the management IP address of the controller node.**

    **Replace `CINDER_PASS` with the password of the cinder user.**

    **Replace `HOST:PATH` with the host IP address and the shared path of the NFS.**

6. Synchronize the database:

    ```shell
    su -s /bin/sh -c "cinder-manage db sync" cinder                                                (CTL)
    ```

7. Configure Nova:

    ```shell
    vim /etc/nova/nova.conf                                                                        (CTL)

    [cinder]
    os_region_name = RegionOne
    ```

8. Restart the compute API service:

    ```shell
    systemctl restart openstack-nova-api.service
    ```

9. Start the Cinder service:

    ```shell
    systemctl enable openstack-cinder-api.service openstack-cinder-scheduler.service               (CTL)
    systemctl start openstack-cinder-api.service openstack-cinder-scheduler.service                (CTL)
    ```

    ```shell
    systemctl enable rpcbind.service nfs-server.service tgtd.service iscsid.service \              (STG)
                     openstack-cinder-volume.service \
                     openstack-cinder-backup.service
    systemctl start rpcbind.service nfs-server.service tgtd.service iscsid.service \               (STG)
                    openstack-cinder-volume.service \
                    openstack-cinder-backup.service
    ```

    ***Note***

    If the Cinder volumes are mounted using tgtadm, modify the /etc/tgt/tgtd.conf file as follows to ensure that tgtd can discover the iscsi target of cinder-volume.

    ```shell
    include /var/lib/cinder/volumes/*
    ```

10. Perform the verification:

    ```shell
    source ~/.admin-openrc
    openstack volume service list
    ```

### Installing Horizon

1. Install the software package:

    ```shell
    yum install openstack-dashboard
    ```

2. Modify the file.

    Modify the variables:

    ```text
    vim /etc/openstack-dashboard/local_settings

    OPENSTACK_HOST = "controller"
    ALLOWED_HOSTS = ['*', ]

    SESSION_ENGINE = 'django.contrib.sessions.backends.cache'

    CACHES = {
    'default': {
         'BACKEND': 'django.core.cache.backends.memcached.MemcachedCache',
         'LOCATION': 'controller:11211',
        }
    }

    OPENSTACK_KEYSTONE_URL = "http://%s:5000/v3" % OPENSTACK_HOST
    OPENSTACK_KEYSTONE_MULTIDOMAIN_SUPPORT = True
    OPENSTACK_KEYSTONE_DEFAULT_DOMAIN = "Default"
    OPENSTACK_KEYSTONE_DEFAULT_ROLE = "user"

    OPENSTACK_API_VERSIONS = {
        "identity": 3,
        "image": 2,
        "volume": 3,
    }
    ```

3. Restart the httpd service:

    ```shell
    systemctl restart httpd.service memcached.service
    ```

4. Perform the verification.
    Open the browser, enter <http://HOSTIP/dashboard/> in the address bar, and log in to Horizon.

    ***Note***

    **Replace `HOSTIP` with the management plane IP address of the controller node.**

### Installing Tempest

Tempest is the integrated test service of OpenStack. If you need to run a fully automatic test of the functions of the installed OpenStack environment, you are advised to use Tempest. Otherwise, you can choose not to install it.

1. Install Tempest:

    ```shell
    yum install openstack-tempest
    ```

2. Initialize the directory:

    ```shell
    tempest init mytest
    ```

3. Modify the configuration file:

    ```shell
    cd mytest
    vi etc/tempest.conf
    ```

    Configure the current OpenStack environment information in **tempest.conf**. For details, see the [official example](https://docs.openstack.org/tempest/latest/sampleconf.html).

4. Perform the test:

    ```shell
    tempest run
    ```

5. (Optional) Install the tempest extensions.
   The OpenStack services have provided some tempest test packages. You can install these packages to enrich the tempest test content. In Wallaby, extension tests for Cinder, Glance, Keystone, Ironic and Trove are provided. You can run the following command to install and use them:
   ```
   yum install python3-cinder-tempest-plugin python3-glance-tempest-plugin python3-ironic-tempest-plugin python3-keystone-tempest-plugin python3-trove-tempest-plugin
   ```

### Installing Ironic

Ironic is the bare metal service of OpenStack. If you need to deploy bare metal machines, Ironic is recommended. Otherwise, you can choose not to install it.

1. Set the database.

   The bare metal service stores information in the database. Create a **ironic** database that can be accessed by the **ironic** user and replace **IRONIC_DBPASSWORD** with a proper password.

   ```sql
   mysql -u root -p
   
   MariaDB [(none)]> CREATE DATABASE ironic CHARACTER SET utf8;
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON ironic.* TO 'ironic'@'localhost' \
   IDENTIFIED BY 'IRONIC_DBPASSWORD';
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON ironic.* TO 'ironic'@'%' \
   IDENTIFIED BY 'IRONIC_DBPASSWORD';
   ```

2. Create service user authentication.

   1. Create the bare metal service user:

   ```shell
   openstack user create --password IRONIC_PASSWORD \
                         --email ironic@example.com ironic
   openstack role add --project service --user ironic admin
   openstack service create --name ironic
                            --description "Ironic baremetal provisioning service" baremetal

   openstack service create --name ironic-inspector --description     "Ironic inspector baremetal provisioning service" baremetal-introspection
   openstack user create --password IRONIC_INSPECTOR_PASSWORD --email ironic_inspector@example.com ironic_inspector
   openstack role add --project service --user ironic-inspector admin
   ```

   2. Create the bare metal service access entries:

   ```shell
   openstack endpoint create --region RegionOne baremetal admin http://$IRONIC_NODE:6385
   openstack endpoint create --region RegionOne baremetal public http://$IRONIC_NODE:6385
   openstack endpoint create --region RegionOne baremetal internal http://$IRONIC_NODE:6385
   openstack endpoint create --region RegionOne baremetal-introspection internal http://172.20.19.13:5050/v1
   openstack endpoint create --region RegionOne baremetal-introspection public http://172.20.19.13:5050/v1
   openstack endpoint create --region RegionOne baremetal-introspection admin http://172.20.19.13:5050/v1
   ```

3. Configure the ironic-api service.

   Configuration file path: **/etc/ironic/ironic.conf**

   1. Use **connection** to configure the location of the database as follows. Replace **IRONIC_DBPASSWORD** with the password of user **ironic** and replace **DB_IP** with the IP address of the database server.

   ```shell
   [database]
   
   # The SQLAlchemy connection string used to connect to the
   # database (string value)
   
   connection = mysql+pymysql://ironic:IRONIC_DBPASSWORD@DB_IP/ironic
   ```

   2. Configure the ironic-api service to use the RabbitMQ message broker. Replace **RPC_\*** with the detailed address and the credential of RabbitMQ.

   ```shell
   [DEFAULT]
   
   # A URL representing the messaging driver to use and its full
   # configuration. (string value)
   
   transport_url = rabbit://RPC_USER:RPC_PASSWORD@RPC_HOST:RPC_PORT/
   ```

   You can also use json-rpc instead of RabbitMQ.

   3. Configure the ironic-api service to use the credential of the identity authentication service. Replace **PUBLIC_IDENTITY_IP** with the public IP address of the identity authentication server and **PRIVATE_IDENTITY_IP** with the private IP address of the identity authentication server, replace **IRONIC_PASSWORD** with the password of the **ironic** user in the identity authentication service.

   ```shell
   [DEFAULT]
   
   # Authentication strategy used by ironic-api: one of
   # "keystone" or "noauth". "noauth" should not be used in a
   # production environment because all authentication will be
   # disabled. (string value)
   
   auth_strategy=keystone
   host = controller
   memcache_servers = controller:11211
   enabled_network_interfaces = flat,noop,neutron
   default_network_interface = noop
   transport_url = rabbit://openstack:RABBITPASSWD@controller:5672/
   enabled_hardware_types = ipmi
   enabled_boot_interfaces = pxe
   enabled_deploy_interfaces = direct
   default_deploy_interface = direct
   enabled_inspect_interfaces = inspector
   enabled_management_interfaces = ipmitool
   enabled_power_interfaces = ipmitool
   enabled_rescue_interfaces = no-rescue,agent
   isolinux_bin = /usr/share/syslinux/isolinux.bin
   logging_context_format_string = %(asctime)s.%(msecs)03d %(process)d %(levelname)s %(name)s [%(global_request_id)s %(request_id)s %(user_identity)s] %(instance)s%(message)s
   
   [keystone_authtoken]
   # Authentication type to load (string value)
   auth_type=password
   # Complete public Identity API endpoint (string value)
   www_authenticate_uri=http://PUBLIC_IDENTITY_IP:5000
   # Complete admin Identity API endpoint. (string value)
   auth_url=http://PRIVATE_IDENTITY_IP:5000
   # Service username. (string value)
   username=ironic
   # Service account password. (string value)
   password=IRONIC_PASSWORD
   # Service tenant name. (string value)
   project_name=service
   # Domain name containing project (string value)
   project_domain_name=Default
   # User's domain name (string value)
   user_domain_name=Default
   
   [agent]
   deploy_logs_collect = always
   deploy_logs_local_path = /var/log/ironic/deploy
   deploy_logs_storage_backend = local
   image_download_source = http
   stream_raw_images = false
   force_raw_images = false
   verify_ca = False
   
   [oslo_concurrency]
   
   [oslo_messaging_notifications]
   transport_url = rabbit://openstack:123456@172.20.19.25:5672/
   topics = notifications
   driver = messagingv2
   
   [oslo_messaging_rabbit]
   amqp_durable_queues = True
   rabbit_ha_queues = True
   
   [pxe]
   ipxe_enabled = false
   pxe_append_params = nofb nomodeset vga=normal coreos.autologin ipa-insecure=1
   image_cache_size = 204800
   tftp_root=/var/lib/tftpboot/cephfs/
   tftp_master_path=/var/lib/tftpboot/cephfs/master_images
   
   [dhcp]
   dhcp_provider = none
   ```

   4. Create the bare metal service database table:

   ```shell
   ironic-dbsync --config-file /etc/ironic/ironic.conf create_schema
   ```

   5. Restart the ironic-api service:

   ```shell
   sudo systemctl restart openstack-ironic-api
   ```

4. Configure the ironic-conductor service.

   1. Replace **HOST_IP** with the IP address of the conductor host.

   ```shell
   [DEFAULT]
   
   # IP address of this host. If unset, will determine the IP
   # programmatically. If unable to do so, will use "127.0.0.1".
   # (string value)
   
   my_ip=HOST_IP
   ```

   2. Specifies the location of the database. ironic-conductor must use the same configuration as ironic-api. Replace **IRONIC_DBPASSWORD** with the password of user **ironic** and replace **DB_IP** with the IP address of the database server.

   ```shell
   [database]
   
   # The SQLAlchemy connection string to use to connect to the
   # database. (string value)
   
   connection = mysql+pymysql://ironic:IRONIC_DBPASSWORD@DB_IP/ironic
   ```

   3. Configure the ironic-api service to use the RabbitMQ message broker. ironic-conductor must use the same configuration as ironic-api. Replace **RPC_\*** with the detailed address and the credential of RabbitMQ.

   ```shell
   [DEFAULT]
   
   # A URL representing the messaging driver to use and its full
   # configuration. (string value)
   
   transport_url = rabbit://RPC_USER:RPC_PASSWORD@RPC_HOST:RPC_PORT/
   ```

   You can also use json-rpc instead of RabbitMQ.

   4. Configure the credentials to access other OpenStack services.

   To communicate with other OpenStack services, the bare metal service needs to use the service users to get authenticated by the OpenStack Identity service when requesting other services. The credentials of these users must be configured in each configuration file associated to the corresponding service.

   ```shell
   [neutron] - Accessing the OpenStack network services.
   [glance] - Accessing the OpenStack image service.
   [swift] - Accessing the OpenStack object storage service.
   [cinder] - Accessing the OpenStack block storage service.
   [inspector] Accessing the OpenStack bare metal introspection service.
   [service_catalog] - A special item to store the credential used by the bare metal service. The credential is used to discover the API URL endpoint registered in the OpenStack identity authentication service catalog by the bare metal service.
   ```

   For simplicity, you can use one service user for all services. For backward compatibility, the user name must be the same as that configured in [keystone_authtoken] of the ironic-api service. However, this is not mandatory. You can also create and configure a different service user for each service.

   In the following example, the authentication information for the user to access the OpenStack network service is configured as follows:

   ```shell
   The network service is deployed in the identity authentication service domain named RegionOne. Only the public endpoint interface is registered in the service catalog.
   
   A specific CA SSL certificate is used for HTTPS connection when sending a request.
   
   The same service user as that configured for ironic-api.
   
   The dynamic password authentication plugin discovers a proper identity authentication service API version based on other options.
   ```

   ```shell
   [neutron]
   
   # Authentication type to load (string value)
   auth_type = password
   # Authentication URL (string value)
   auth_url=https://IDENTITY_IP:5000/
   # Username (string value)
   username=ironic
   # User's password (string value)
   password=IRONIC_PASSWORD
   # Project name to scope to (string value)
   project_name=service
   # Domain ID containing project (string value)
   project_domain_id=default
   # User's domain id (string value)
   user_domain_id=default
   # PEM encoded Certificate Authority to use when verifying
   # HTTPs connections. (string value)
   cafile=/opt/stack/data/ca-bundle.pem
   # The default region_name for endpoint URL discovery. (string
   # value)
   region_name = RegionOne
   # List of interfaces, in order of preference, for endpoint
   # URL. (list value)
   valid_interfaces=public
   ```

   By default, to communicate with other services, the bare metal service attempts to discover a proper endpoint of the service through the service catalog of the identity authentication service. If you want to use a different endpoint for a specific service, specify the endpoint_override option in the bare metal service configuration file.

   ```shell
   [neutron] ... endpoint_override = <NEUTRON_API_ADDRESS>
   ```

   5. Configure the allowed drivers and hardware types.

   Set enabled_hardware_types to specify the hardware types that can be used by ironic-conductor:

   ```shell
   [DEFAULT] enabled_hardware_types = ipmi
   ```

   Configure hardware interfaces:

   ```shell
   enabled_boot_interfaces = pxe enabled_deploy_interfaces = direct,iscsi enabled_inspect_interfaces = inspector enabled_management_interfaces = ipmitool enabled_power_interfaces = ipmitool
   ```

   Configure the default value of the interface:

   ```shell
   [DEFAULT] default_deploy_interface = direct default_network_interface = neutron
   ```

   If any driver that uses Direct Deploy is enabled, you must install and configure the Swift backend of the image service. The Ceph object gateway (RADOS gateway) can also be used as the backend of the image service.

   6. Restart the ironic-conductor service:

   ```shell
   sudo systemctl restart openstack-ironic-conductor
   ```

5. Configure the ironic-inspector service.

   Configuration file path: **/etc/ironic-inspector/inspector.conf**.

   1. Create the database:

   ```shell
   # mysql -u root -p
   
   MariaDB [(none)]> CREATE DATABASE ironic_inspector CHARACTER SET utf8;
   
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON ironic_inspector.* TO 'ironic_inspector'@'localhost' \     IDENTIFIED BY 'IRONIC_INSPECTOR_DBPASSWORD';
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON ironic_inspector.* TO 'ironic_inspector'@'%' \
   IDENTIFIED BY 'IRONIC_INSPECTOR_DBPASSWORD';
   ```

   2. Use **connection** to configure the location of the database as follows. Replace **IRONIC_INSPECTOR_DBPASSWORD** with the password of user **ironic_inspector** and replace **DB_IP** with the IP address of the database server:

   ```shell
   [database]
   backend = sqlalchemy
   connection = mysql+pymysql://ironic_inspector:IRONIC_INSPECTOR_DBPASSWORD@DB_IP/ironic_inspector
   min_pool_size = 100
   max_pool_size = 500
   pool_timeout = 30
   max_retries = 5
   max_overflow = 200
   db_retry_interval = 2
   db_inc_retry_interval = True
   db_max_retry_interval = 2
   db_max_retries = 5
   ```

   3. Configure the communication address of the message queue:

   ```shell
   [DEFAULT] 
   transport_url = rabbit://RPC_USER:RPC_PASSWORD@RPC_HOST:RPC_PORT/
   
   ```

   4. Configure the Keystone authentication:

   ```shell
   [DEFAULT]
   
   auth_strategy = keystone
   timeout = 900
   rootwrap_config = /etc/ironic-inspector/rootwrap.conf
   logging_context_format_string = %(asctime)s.%(msecs)03d %(process)d %(levelname)s %(name)s [%(global_request_id)s %(request_id)s %(user_identity)s] %(instance)s%(message)s
   log_dir = /var/log/ironic-inspector
   state_path = /var/lib/ironic-inspector
   use_stderr = False
   
   [ironic]
   api_endpoint = http://IRONIC_API_HOST_ADDRRESS:6385
   auth_type = password
   auth_url = http://PUBLIC_IDENTITY_IP:5000
   auth_strategy = keystone
   ironic_url = http://IRONIC_API_HOST_ADDRRESS:6385
   os_region = RegionOne
   project_name = service
   project_domain_name = Default
   user_domain_name = Default
   username = IRONIC_SERVICE_USER_NAME
   password = IRONIC_SERVICE_USER_PASSWORD
   
   [keystone_authtoken]
   auth_type = password
   auth_url = http://control:5000
   www_authenticate_uri = http://control:5000
   project_domain_name = default
   user_domain_name = default
   project_name = service
   username = ironic_inspector
   password = IRONICPASSWD
   region_name = RegionOne
   memcache_servers = control:11211
   token_cache_time = 300
   
   [processing]
   add_ports = active
   processing_hooks = $default_processing_hooks,local_link_connection,lldp_basic
   ramdisk_logs_dir = /var/log/ironic-inspector/ramdisk
   always_store_ramdisk_logs = true
   store_data =none
   power_off = false
   
   [pxe_filter]
   driver = iptables
   
   [capabilities]
   boot_mode=True
   ```

   5. Configure the ironic inspector dnsmasq service:

   ```shell
   #Configuration file path: /etc/ironic-inspector/dnsmasq.conf
   port=0
   interface=enp3s0                 #Replace with the actual listening network interface.
   dhcp-range=172.20.19.100,172.20.19.110 #Replace with the actual DHCP IP address range.
   bind-interfaces
   enable-tftp
   
   dhcp-match=set:efi,option:client-arch,7
   dhcp-match=set:efi,option:client-arch,9
   dhcp-match=aarch64, option:client-arch,11
   dhcp-boot=tag:aarch64,grubaa64.efi
   dhcp-boot=tag:!aarch64,tag:efi,grubx64.efi
   dhcp-boot=tag:!aarch64,tag:!efi,pxelinux.0
   
   tftp-root=/tftpboot                       #Replace with the actual tftpboot directory.
   log-facility=/var/log/dnsmasq.log
   ```

   6. Disable DHCP for the subnet of the ironic provision network.

   ```
   openstack subnet set --no-dhcp 72426e89-f552-4dc4-9ac7-c4e131ce7f3c
   ```

   7. Initializs the database of the ironic-inspector service.

   Run the following command on the controller node:

   ```
   ironic-inspector-dbsync --config-file /etc/ironic-inspector/inspector.conf upgrade
   ```

   8. Start the service:

   ```shell
   systemctl enable --now openstack-ironic-inspector.service
   systemctl enable --now openstack-ironic-inspector-dnsmasq.service
   ```

6. Configure the httpd service.

   1. Create the root directory of the httpd used by Ironic, and set the owner and owner group. The directory path must be the same as the path specified by the **http_root** configuration item in the **[deploy]** group in **/etc/ironic/ironic.conf**.
   
      ```
      mkdir -p /var/lib/ironic/httproot ``chown ironic.ironic /var/lib/ironic/httproot
      ```
   
      
   
   2. Install and configure the httpd Service.
   
      
   
      1. Install the httpd service. If the httpd service is already installed, skip this step.
   
         ```
         yum install httpd -y
         ```
   
         
   
      2. Create the **/etc/httpd/conf.d/openstack-ironic-httpd.conf** file. The file content is as follows:
   
         ```
         Listen 8080
          
         <VirtualHost *:8080>
             ServerName ironic.openeuler.com
          
             ErrorLog "/var/log/httpd/openstack-ironic-httpd-error_log"
             CustomLog "/var/log/httpd/openstack-ironic-httpd-access_log" "%h %l %u %t \"%r\" %>s %b"
          
             DocumentRoot "/var/lib/ironic/httproot"
             <Directory "/var/lib/ironic/httproot">
                 Options Indexes FollowSymLinks
                 Require all granted
             </Directory>
             LogLevel warn
             AddDefaultCharset UTF-8
             EnableSendfile on
         </VirtualHost>
         
         ```
   
         The listening port must be the same as the port specified by **http_url** in the **[deploy]** section of **/etc/ironic/ironic.conf**.
   
      3. Restart the httpd service:
   
         ```
         systemctl restart httpd
         ```
   
         
   
7. Create the deploy ramdisk image.

   The ramdisk image of Wallaby can be created using the ironic-python-agent service or disk-image-builder tool. You can also use the latest ironic-python-agent-builder provided by the community. You can also use other tools.
   To use the Wallaby native tool, you need to install the corresponding software package.

   ```shell
   yum install openstack-ironic-python-agent
   or
   yum install diskimage-builder
   ```

   For details, see the [official document](https://docs.openstack.org/ironic/queens/install/deploy-ramdisk.html).

   The following describes how to use the ironic-python-agent-builder to build the deploy image used by ironic.

   1. Install ironic-python-agent-builder.


        1. Install the tool:
    
            ```shell
            pip install ironic-python-agent-builder
            ```
    
        2. Modify the python interpreter in the following files:
    
            ```shell
            /usr/bin/yum /usr/libexec/urlgrabber-ext-down
            ```
    
        3. Install the other necessary tools:
    
            ```shell
            yum install git
            ```
    
            `DIB` depends on the `semanage` command. Therefore, check whether the `semanage --help` command is available before creating an image. If the system displays a message indicating that the command is unavailable, install the command:
    
            ```shell
            # Check which package needs to be installed.
            [root@localhost ~]# yum provides /usr/sbin/semanage
            Loaded plug-in: fastestmirror
            Loading mirror speeds from cached hostfile
            * base: mirror.vcu.edu
            * extras: mirror.vcu.edu
            * updates: mirror.math.princeton.edu
            policycoreutils-python-2.5-34.el7.aarch64 : SELinux policy core python utilities
            Source: base
            Matching source: 
            File name: /usr/sbin/semanage
            # Install.
            [root@localhost ~]# yum install policycoreutils-python
            ```

   2. Create the image.

        For `arm` architecture, add the following information:
        ```shell
        export ARCH=aarch64
        ```

        Basic usage:

        ```shell
        usage: ironic-python-agent-builder [-h] [-r RELEASE] [-o OUTPUT] [-e ELEMENT]
                                            [-b BRANCH] [-v] [--extra-args EXTRA_ARGS]
                                            distribution

        positional arguments:
            distribution          Distribution to use

        optional arguments:
            -h, --help            show this help message and exit
            -r RELEASE, --release RELEASE
                                Distribution release to use
            -o OUTPUT, --output OUTPUT
                                Output base file name
            -e ELEMENT, --element ELEMENT
                                Additional DIB element to use
            -b BRANCH, --branch BRANCH
                                If set, override the branch that is used for ironic-
                                python-agent and requirements
            -v, --verbose         Enable verbose logging in diskimage-builder
            --extra-args EXTRA_ARGS
                                Extra arguments to pass to diskimage-builder
        ```

        Example:

        ```shell
        ironic-python-agent-builder centos -o /mnt/ironic-agent-ssh -b origin/stable/rocky
        ```

   3. Allow SSH login.

        Initialize the environment variables and create the image:

        ```shell
        export DIB_DEV_USER_USERNAME=ipa \
        export DIB_DEV_USER_PWDLESS_SUDO=yes \
        export DIB_DEV_USER_PASSWORD='123'
        ironic-python-agent-builder centos -o /mnt/ironic-agent-ssh -b origin/stable/rocky -e selinux-permissive -e devuser
        ```

   4. Specify the code repository.

        Initialize the corresponding environment variables and create the image:

        ```shell
        # Specify the address and version of the repository.
        DIB_REPOLOCATION_ironic_python_agent=git@172.20.2.149:liuzz/ironic-python-agent.git
        DIB_REPOREF_ironic_python_agent=origin/develop
        
        # Clone code from Gerrit.
        DIB_REPOLOCATION_ironic_python_agent=https://review.opendev.org/openstack/ironic-python-agent
        DIB_REPOREF_ironic_python_agent=refs/changes/43/701043/1
        ```

        Reference: [source-repositories](https://docs.openstack.org/diskimage-builder/latest/elements/source-repositories/README.html).

        The specified repository address and version are verified successfully.
        
   5. Note

The template of the PXE configuration file of the native OpenStack does not support the ARM64 architecture. You need to modify the native OpenStack code.

In Wallaby, Ironic provided by the community does not support the boot from ARM 64-bit UEFI PXE. As a result, the format of the generated grub.cfg file (generally in /tftpboot/) is incorrect, causing the PXE boot failure.

The generated incorrect configuration file is as follows:

![erro](/Users/andy_lee/Downloads/erro.png)

As shown in the preceding figure, in the ARM architecture, the commands for searching for the vmlinux and ramdisk images are **linux** and **initrd**, respectively. The command in red in the preceding figure is the UEFI PXE startup command in the x86 architecture.

You need to modify the code logic for generating the grub.cfg file.

The following TLS error is reported when Ironic sends a request to IPA to query the command execution status:

By default, both IPA and Ironic of Wallaby have TLS authentication enabled to send requests to each other. Disable TLS authentication according to the description on the official website.

1. Add **ipa-insecure=1** to the following configuration in the Ironic configuration file (**/etc/ironic/ironic.conf**):

```
[agent]
verify_ca = False
 
[pxe]
pxe_append_params = nofb nomodeset vga=normal coreos.autologin ipa-insecure=1
```

2. Add the IPA configuration file **/etc/ironic_python_agent/ironic_python_agent.conf** to the ramdisk image and configure the TLS as follows:

**/etc/ironic_python_agent/ironic_python_agent.conf** (The **/etc/ironic_python_agent** directory must be created in advance.)

```
[DEFAULT]
enable_auto_tls = False
```

Set the permission:

```
chown -R ipa.ipa /etc/ironic_python_agent/
```

3. Modify the startup file of the IPA service and add the configuration file option.

   vim usr/lib/systemd/system/ironic-python-agent.service

   ```
   [Unit]
   Description=Ironic Python Agent
   After=network-online.target
    
   [Service]
   ExecStartPre=/sbin/modprobe vfat
   ExecStart=/usr/local/bin/ironic-python-agent --config-file /etc/ironic_python_agent/ironic_python_agent.conf
   Restart=always
   RestartSec=30s
    
   [Install]
   WantedBy=multi-user.target
   ```

   

### Installing Kolla

Kolla provides the OpenStack service with the container-based deployment function that is ready for the production environment. The Kolla and Kolla-ansible services are introduced in openEuler in version 21.09.

The installation of Kolla is simple. You only need to install the corresponding RPM packages:

```
yum install openstack-kolla openstack-kolla-ansible
```

After the installation is complete, you can run commands such as `kolla-ansible`, `kolla-build`, `kolla-genpwd`, `kolla-mergepwd`.

### Installing Trove
Trove is the database service of OpenStack. If you need to use the database service provided by OpenStack, Trove is recommended. Otherwise, you can choose not to install it.

1. Set the database.

   The database service stores information in the database. Create a **trove** database that can be accessed by the **trove** user and replace **TROVE_DBPASSWORD** with a proper password.

   ```sql
   mysql -u root -p
   
   MariaDB [(none)]> CREATE DATABASE trove CHARACTER SET utf8;
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON trove.* TO 'trove'@'localhost' \
   IDENTIFIED BY 'TROVE_DBPASSWORD';
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON trove.* TO 'trove'@'%' \
   IDENTIFIED BY 'TROVE_DBPASSWORD';
   ```

2. Create service user authentication.

   1. Create the **Trove** service user.

   ```shell
   openstack user create --password TROVE_PASSWORD \
                         --email trove@example.com trove
   openstack role add --project service --user trove admin
   openstack service create --name trove
                            --description "Database service" database
   ```
   **Description:** Replace `TROVE_PASSWORD` with the password of the `trove` user.

   2. Create the **Database** service access entry

   ```shell
   openstack endpoint create --region RegionOne database public http://controller:8779/v1.0/%\(tenant_id\)s
   openstack endpoint create --region RegionOne database internal http://controller:8779/v1.0/%\(tenant_id\)s
   openstack endpoint create --region RegionOne database admin http://controller:8779/v1.0/%\(tenant_id\)s
   ```

3. Install and configure the **Trove** components.
   1. Install the **Trove** package:
   ```shell script
   yum install openstack-trove python-troveclient
   ```
   2. Configure `trove.conf`:
   ```shell script
   vim /etc/trove/trove.conf
   
   [DEFAULT]
   bind_host=TROVE_NODE_IP
   log_dir = /var/log/trove
   network_driver = trove.network.neutron.NeutronDriver
   management_security_groups = <manage security group>
   nova_keypair = trove-mgmt
   default_datastore = mysql
   taskmanager_manager = trove.taskmanager.manager.Manager
   trove_api_workers = 5
   transport_url = rabbit://openstack:RABBIT_PASS@controller:5672/
   reboot_time_out = 300
   usage_timeout = 900
   agent_call_high_timeout = 1200
   use_syslog = False
   debug = True
   
   # Set these if using Neutron Networking
   network_driver=trove.network.neutron.NeutronDriver
   network_label_regex=.*
   
   
   transport_url = rabbit://openstack:RABBIT_PASS@controller:5672/
   
   [database]
   connection = mysql+pymysql://trove:TROVE_DBPASS@controller/trove
   
   [keystone_authtoken]
   project_domain_name = Default
   project_name = service
   user_domain_name = Default
   password = trove
   username = trove
   auth_url = http://controller:5000/v3/
   auth_type = password
   
   [service_credentials]
   auth_url = http://controller:5000/v3/
   region_name = RegionOne
   project_name = service
   password = trove
   project_domain_name = Default
   user_domain_name = Default
   username = trove
   
   [mariadb]
   tcp_ports = 3306,4444,4567,4568
   
   [mysql]
   tcp_ports = 3306
   
   [postgresql]
   tcp_ports = 5432
   ```
   **Description:**
   - In the `[Default]` section, set `bind_host` to the IP address of the node where Trove is deployed.
   - `nova_compute_url` and `cinder_url` are endpoints created by Nova and Cinder in Keystone.
   - `nova_proxy_XXX` is a user who can access the Nova service. In the preceding example, the `admin` user is used.
   - `transport_url` is the `RabbitMQ` connection information, and `RABBIT_PASS` is the RabbitMQ password.
   - In the `[database]` section, `connection` is the information of the database created for Trove in MySQL.
   - Replace `TROVE_PASS` in the Trove user information with the password of the **trove** user.

   5. Configure `trove-guestagent.conf`:
   ```shell script
   vim /etc/trove/trove-guestagent.conf
   
   [DEFAULT]
   log_file = trove-guestagent.log
   log_dir = /var/log/trove/
   ignore_users = os_admin
   control_exchange = trove
   transport_url = rabbit://openstack:RABBIT_PASS@controller:5672/
   rpc_backend = rabbit
   command_process_timeout = 60
   use_syslog = False
   debug = True
   
   [service_credentials]
   auth_url = http://controller:5000/v3/
   region_name = RegionOne
   project_name = service
   password = TROVE_PASS
   project_domain_name = Default
   user_domain_name = Default
   username = trove
   
   [mysql]
   docker_image = your-registry/your-repo/mysql
   backup_docker_image = your-registry/your-repo/db-backup-mysql:1.1.0
   ```
   ** Description:** `guestagent` is an independent component in Trove and needs to be pre-built into the virtual machine image created by Trove using Nova.
   After the database instance is created, the guestagent process is started to report heartbeat messages to the Trove through the message queue (RabbitMQ).
   Therefore, you need to configure the user name and password of the RabbitMQ.
   ** Since Victoria, Trove uses a unified image to run different types of databases. The database service runs in the Docker container of the Guest VM.**
   - `transport_url` is the `RabbitMQ` connection information, and `RABBIT_PASS` is the RabbitMQ password.
   - Replace `TROVE_PASS` in the Trove user information with the password of the **trove** user.

   6. Generate the `Trove` database table.
   ```shell script
   su -s /bin/sh -c "trove-manage db_sync" trove
   ```
4. Complete the installation and configuration.
   1. Configure the **Trove** service to automatically start:
   ```shell script
   systemctl enable openstack-trove-api.service \
   openstack-trove-taskmanager.service \
   openstack-trove-conductor.service 
   ```
   2. Start the service:
   ```shell script
   systemctl start openstack-trove-api.service \
   openstack-trove-taskmanager.service \
   openstack-trove-conductor.service
   ```
### Installing Swift

Swift provides a scalable and highly available distributed object storage service, which is suitable for storing unstructured data in large scale.

1. Create the service credentials and API endpoints.

    Create the service credential:
    
    ``` shell
    #Create the swift user.
    openstack user create --domain default --password-prompt swift                 
    #Add the admin role for the swift user.
    openstack role add --project service --user swift admin                        
    #Create the swift service entity.
    openstack service create --name swift --description "OpenStack Object Storage" object-store        															  
    ```

    Create the Swift API endpoints.
    
    ```shell
    openstack endpoint create --region RegionOne object-store public http://controller:8080/v1/AUTH_%\(project_id\)s                            
    openstack endpoint create --region RegionOne object-store internal http://controller:8080/v1/AUTH_%\(project_id\)s                            
    openstack endpoint create --region RegionOne object-store admin http://controller:8080/v1                                                  
    ```


2. Install the software packages:

    ```shell
    yum install openstack-swift-proxy python3-swiftclient python3-keystoneclient python3-keystonemiddleware memcached  (CTL)
    ```
    
3. Configure the proxy-server.
   
   The Swift RPM package contains a **proxy-server.conf** file which is basically ready to use. You only need to change the values of **ip** and swift **password** in the file.

    ***Note***

    **Replace password with the password you set for the swift user in the identity service.**
   
4. Install and configure the storage node. (STG)

    Install the supported program packages:
    ```shell
    yum install xfsprogs rsync
    ```

    Format the /dev/vdb and /dev/vdc devices into XFS:

    ```shell
    mkfs.xfs /dev/vdb
    mkfs.xfs /dev/vdc
    ```
    
    Create the mount point directory structure:
    
    ```shell
    mkdir -p /srv/node/vdb
    mkdir -p /srv/node/vdc
    ```
    
    Find the UUID of the new partition:
    
    ```shell
    blkid
    ```

    Add the following to the **/etc/fstab** file:

    ```shell
    UUID="<UUID-from-output-above>" /srv/node/vdb xfs noatime 0 2
    UUID="<UUID-from-output-above>" /srv/node/vdc xfs noatime 0 2
    ```

    Mount the devices:
    
    ```shell
    mount /srv/node/vdb
    mount /srv/node/vdc
    ```
    ***Note***

    **If the disaster recovery function is not required, you only need to create one device and skip the following rsync configuration.**

    (Optional) Create or edit the **/etc/rsyncd.conf** file to include the following content:

    ```shell
    [DEFAULT]
    uid = swift
    gid = swift
    log file = /var/log/rsyncd.log
    pid file = /var/run/rsyncd.pid
    address = MANAGEMENT_INTERFACE_IP_ADDRESS
    
    [account]
    max connections = 2
    path = /srv/node/
    read only = False
    lock file = /var/lock/account.lock
    
    [container]
    max connections = 2
    path = /srv/node/
    read only = False
    lock file = /var/lock/container.lock
    
    [object]
    max connections = 2
    path = /srv/node/
    read only = False
    lock file = /var/lock/object.lock
    ```
    **Replace `MANAGEMENT_INTERFACE_IP_ADDRESS` with the management network IP address of the storage node.**

    Start the rsyncd service and configure it to start upon system startup.

    ```shell
    systemctl enable rsyncd.service
    systemctl start rsyncd.service
    ```

5. Install and configure the components on storage nodes. (STG)

    Install the software packages:

    ```shell
    yum install openstack-swift-account openstack-swift-container openstack-swift-object
    ```

    Edit **account-server.conf**, **container-server.conf**, and **object-server.conf** in the **/etc/swift directory** and replace **bind_ip** with the management network IP address of the storage node.

    Ensure the proper ownership of the mount point directory structure.

    ```shell
    chown -R swift:swift /srv/node
    ```

    Create the recon directory and ensure that it has the correct ownership.

    ```shell
    mkdir -p /var/cache/swift
    chown -R root:swift /var/cache/swift
    chmod -R 775 /var/cache/swift
    ```
   
6. Create the account ring. (CTL)

    Switch to the `/etc/swift` directory:

    ```shell
    cd /etc/swift
    ```
    
    Create the basic `account.builder` file:
    
    ```shell
    swift-ring-builder account.builder create 10 1 1
    ```
    
    Add each storage node to the ring:
    
    ```shell
    swift-ring-builder account.builder add --region 1 --zone 1 --ip STORAGE_NODE_MANAGEMENT_INTERFACE_IP_ADDRESS --port 6202  --device DEVICE_NAME --weight DEVICE_WEIGHT
    ```
    
    **Replace `STORAGE_NODE_MANAGEMENT_INTERFACE_IP_ADDRESS` with the management network IP address of the storage node. Replace `DEVICE_NAME` with the name of the storage device on the same storage node.**
    
    ***Note***
    **Repeat this command to each storage device on each storage node.**
    
    Verify the ring contents:
    
    ```shell
    swift-ring-builder account.builder
    ```
    
    Rebalance the ring:
    
    ```shell
    swift-ring-builder account.builder rebalance
    ```
    
7. Create the container ring. (CTL)
   
    Switch to the `/etc/swift` directory:
    
    Create the basic `container.builder` file:
    
    ```shell
       swift-ring-builder container.builder create 10 1 1
    ```
    
    Add each storage node to the ring:
    
    ```shell
    swift-ring-builder container.builder \
      add --region 1 --zone 1 --ip STORAGE_NODE_MANAGEMENT_INTERFACE_IP_ADDRESS --port 6201 \
      --device DEVICE_NAME --weight 100
    
    ```
    
    **Replace `STORAGE_NODE_MANAGEMENT_INTERFACE_IP_ADDRESS` with the management network IP address of the storage node. Replace `DEVICE_NAME` with the name of the storage device on the same storage node.**
    
    ***Note***
    **Repeat this command to every storage devices on every storage nodes.**
    
    Verify the ring contents:
    
    ```shell
    swift-ring-builder container.builder
    ```
    
    Rebalance the ring:
    
    ```shell
    swift-ring-builder account.builder rebalance
    ```
    
8. Create the object ring. (CTL)
   
    Switch to the `/etc/swift` directory:
    
    Create the basic `object.builder` file:
    
       ```shell
       swift-ring-builder object.builder create 10 1 1
       ```
    
    Add each storage node to the ring:
    
    ```shell
     swift-ring-builder object.builder \
      add --region 1 --zone 1 --ip STORAGE_NODE_MANAGEMENT_INTERFACE_IP_ADDRESS --port 6200 \
      --device DEVICE_NAME --weight 100
    ```
    
    **Replace `STORAGE_NODE_MANAGEMENT_INTERFACE_IP_ADDRESS` with the management network IP address of the storage node. Replace `DEVICE_NAME` with the name of the storage device on the same storage node.**
    
    ***Note***
    **Repeat this command to every storage devices on every storage nodes.**
    
    Verify the ring contents:
    
    ```shell
    swift-ring-builder object.builder
    ```
    
    Rebalance the ring:
    
    ```shell
    swift-ring-builder account.builder rebalance
    ```

    Distribute ring configuration files:

    Copy `account.ring.gz`, `container.ring.gz`, and `object.ring.gz` to the `/etc/swift` directory on each storage node and any additional nodes running the proxy service.
    
    
    
9.  Complete the installation.
   
    Edit the `/etc/swift/swift.conf` file:
    
    ``` shell
    [swift-hash]
    swift_hash_path_suffix = test-hash
    swift_hash_path_prefix = test-hash
    
    [storage-policy:0]
    name = Policy-0
    default = yes
    ```
    
    **Replace test-hash with a unique value.**
    
    Copy the `swift.conf` file to the `/etc/swift` directory on each storage node and any additional nodes running the proxy service.
    
    Ensure correct ownership of the configuration directory on all nodes:
    
    ```shell
    chown -R root:swift /etc/swift
    ```
    
    On the controller node and any additional nodes running the proxy service, start the object storage proxy service and its dependencies, and configure them to start upon system startup.
    
    ```shell
    systemctl enable openstack-swift-proxy.service memcached.service
    systemctl start openstack-swift-proxy.service memcached.service
    ```
    
    On the storage node, start the object storage services and configure them to start upon system startup.
    
    ```shell
    systemctl enable openstack-swift-account.service openstack-swift-account-auditor.service openstack-swift-account-reaper.service openstack-swift-account-replicator.service
    
    systemctl start openstack-swift-account.service openstack-swift-account-auditor.service openstack-swift-account-reaper.service openstack-swift-account-replicator.service
    
    systemctl enable openstack-swift-container.service openstack-swift-container-auditor.service openstack-swift-container-replicator.service openstack-swift-container-updater.service
    
    systemctl start openstack-swift-container.service openstack-swift-container-auditor.service openstack-swift-container-replicator.service openstack-swift-container-updater.service
    
    systemctl enable openstack-swift-object.service openstack-swift-object-auditor.service openstack-swift-object-replicator.service openstack-swift-object-updater.service
    
    systemctl start openstack-swift-object.service openstack-swift-object-auditor.service openstack-swift-object-replicator.service openstack-swift-object-updater.service
    ```
