# OpenStack-Queens Deployment Guide

<!-- TOC -->
- [OpenStack-Queens Deployment Guide](#openstack-queens-deployment-guide)
  - [Introduction to OpenStack](#introduction-to-openstack)
  - [Conventions](#conventions)
  - [Preparing the Environment](#preparing-the-environment)
    - [Configuring the Environment](#configuring-the-environment)
    - [Installing the SQL Database](#installing-the-sql-database)
    - [Installing RabbitMQ](#installing-rabbitmq)
    - [Installing Memcached](#installing-memcached)
  - [Installing OpenStack](#installing-openstack)
    - [Installing Keystone](#installing-keystone)
    - [Installing Glance](#installing-glance)
    - [Installing Nova](#installing-nova)
    - [Installing Neutron](#installing-neutron)
    - [Installing Cinder](#installing-cinder)
    - [Installing Horizon](#installing-horizon)
    - [Installing Tempest](#installing-tempest)
    - [Installing Ironic](#installing-ironic)
    - [Installing Kolla](#installing-kolla)
    - [Inalling Trove](#installing-trove)

<!-- /TOC -->
## Introduction to OpenStack

OpenStack is an open source cloud computing infrastructure software project developed by the community. It provides an operating platform or tool set for deploying the cloud, offering scalable and flexible cloud computing capabilities for organizations.

As an open source cloud computing management platform, OpenStack consists of several major components, such as Nova, Cinder, Neutron, Glance, Keystone, and Horizon. OpenStack supports almost all cloud environments. The project aims to provide a cloud computing management platform that is easy-to-use, scalable, unified, and standardized. OpenStack provides an infrastructure as a service (IaaS) solution that combines complementary services, each of which provides an API for integration.

The third-party oepkg Yum source certified by openEuler 20.03 LTS SP2 supports Openstack-Queens. You can configure the oepkg Yum source and deploy OpenStack based on this document.

## Conventions

OpenStack supports multiple deployment modes. This document supports two deployment modes: `ALL in One` and `Distributed`. The conventions are as follows:

`ALL in One` mode:

```text
Ignore all possible suffixes.
```

`Distributed` mode:

```text
The suffix "CTL" indicates that the configuration or command applies only to the control node.
The suffix "CPT" indicates that the configuration or command applies only to compute nodes.
Otherwise, the configuration or command applies to both the controller node and compute nodes.
```

***Note***

The services involved in the above conventions are as follows:

- Cinder
- Nova
- Neutron

## Preparing the Environment

### Configuring the Environment

1. Configure the third-party oepkg source that is certified by 20.03 LTS SP2.
   
   ```shell
   cat << EOF >> /etc/yum.repos.d/OpenStack_Queens.repo
   [openstack_queens]
   name=OpenStack_Queens
   baseurl=https://repo.oepkgs.net/openEuler/rpm/openEuler-20.03-LTS-SP2/budding-openeuler/openstack/queens/$basearch/
   gpgcheck=0
   enabled=1
   EOF
   
   yum clean all && yum makecache
   ```

2. Modify the host names and mappings.
   
   Set the host name of each node.
   
   ```shell
   hostnamectl set-hostname controller                                                            (CTL)
   hostnamectl set-hostname compute                                                               (CPT)
   ```
   
   Assume that the IP address of the controller node is `10.0.0.11` and the IP address of the compute node (if any) is `10.0.0.12`, add the following information in `/etc/hosts`:
   
   ```shell
   10.0.0.11   controller
   10.0.0.12   compute
   ```

### Installing the SQL Database

1. Run the following command to install the software package:
   
   ```shell
   yum install mariadb mariadb-server python2-PyMySQL
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
   
   **Set `bind-address` to the management IP address of the controller node.**

3. Start the database service and enable it to automatically start upon system boot:
   
   ```shell
   systemctl enable mariadb.service
   systemctl start mariadb.service
   ```

4. (Optional) Configure the default password for the database.
   
   ```shell
   mysql_secure_installation
   ```
   
   ***Note***
   
   **Follow the prompts.**

### Installing RabbitMQ

1. Run the following command to install the software package:
   
   ```shell
   yum install rabbitmq-server
   ```

2. Start the RabbitMQ service and enable it to automatically start upon system boot.
   
   ```shell
   systemctl enable rabbitmq-server.service
   systemctl start rabbitmq-server.service
   ```

3. Add an OpenStack user.
   
   ```shell
   rabbitmqctl add_user openstack RABBIT_PASS
   ```
   
   ***Note***
   
   **Replace `RABBIT_PASS` with the password of the OpenStack user.**

4. Run the following command to set the permission of the **openstack** user so that the user can perform configuration, write, and read operations:
   
   ```shell
   rabbitmqctl set_permissions openstack ".*" ".*" ".*"
   ```

### Installing Memcached

1. Run the following command to install the target software package:
   
   ```shell
   yum install memcached python2-memcached
   ```

2. Edit the `/etc/sysconfig/memcached` file.
   
   ```shell
   vim /etc/sysconfig/memcached
   
   OPTIONS="-l 127.0.0.1,::1,controller"
   ```

3. Run the following command to start the Memcached service and enable it to automatically start upon system boot:
   
   ```shell
   systemctl enable memcached.service
   systemctl start memcached.service
   ```
   
   After the service is started, you can run the `memcached-tool controller stats` command to ensure that the service is available. Replace `controller` with the management IP address of the controller node.

## Installing OpenStack

### Installing Keystone

1. Create the **keystone** database and grant access to the **keystone** database.
   
   ```sql
   mysql -u root -p
   
   MariaDB [(none)]> CREATE DATABASE keystone;
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON keystone.* TO 'keystone'@'localhost' \
   IDENTIFIED BY 'KEYSTONE_DBPASS';
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON keystone.* TO 'keystone'@'%' \
   IDENTIFIED BY 'KEYSTONE_DBPASS';
   MariaDB [(none)]> exit
   ```
   
   ***Note***
   
   **Replace `KEYSTONE_DBPASS` with the password of the keystone database.**

2. Install the software package.
   
   ```shell
   yum install openstack-keystone httpd python2-mod_wsgi
   ```

3. Configure the Keystone.
   
   ```shell
   vim /etc/keystone/keystone.conf
   
   [database]
   connection = mysql+pymysql://keystone:KEYSTONE_DBPASS@controller/keystone
   
   [token]
   provider = fernet
   ```
   
   **Note**
   
   In the **\[database]** section, configure the database entry.
   
   In the **\[token]** section, configure the token provider.
   
   ***Notes:***
   
   **Replace `KEYSTONE_DBPASS` with the password of the keystone database.**

4. Synchronize the database.
   
   ```shell
   su -s /bin/sh -c "keystone-manage db_sync" keystone
   ```

5. Initialize the Fernet keystore.
   
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
   
   **Replace `ADMIN_PASS` with the password of the admin user.**

7. Configure the Apache HTTP server.
   
   ```shell
   vim /etc/httpd/conf/httpd.conf
   
   ServerName controller
   ```
   
   ```shell
   ln -s /usr/share/keystone/wsgi-keystone.conf /etc/httpd/conf.d/
   ```
   
   **Note**
   
   Configure the `ServerName` item to reference the controller node.
   
   Create the `ServerName` item if it does not exist.

8. Start Apache HTTP services.
   
   ```shell
   systemctl enable httpd.service
   systemctl start httpd.service
   ```

9. Create environment variable configurations.
   
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

10. Create python2-openstackclient before creating the domain, projects, users, and roles.
    
    ```
    yum install python2-openstackclient
    ```
    
    Import environmental variables.
    
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
    
    Create a non-admin project `myproject`, user `myuser`, and role `myrole`, and add role `myrole` to `myproject` and `myuser`.
    
    ```shell
    openstack project create --domain default --description "Demo Project" myproject
    openstack user create --domain default --password-prompt myuser
    openstack role create myrole
    openstack role add --project myproject --user myuser myrole
    ```

11. Perform verification.
    
    Cancel the temporary environment variables **OS\_AUTH\_URL** and **OS\_PASSWORD**.
    
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
    
    Request a token for the **myuser** user:
    
    ```shell
    openstack --os-auth-url http://controller:5000/v3 \
    --os-project-domain-name Default --os-user-domain-name Default \
    --os-project-name myproject --os-username myuser token issue
    ```

### Installing Glance

1. Create a database, service credentials, and API endpoints.
   
   Create a database.
   
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
   
   **Replace `GLANCE_DBPASS` with the password of the **glance** database.**
   
   Create service credentials.
   
   ```shell
   source ~/.admin-openrc
   
   openstack user create --domain default --password-prompt glance
   openstack role add --project service --user glance admin
   openstack service create --name glance --description "OpenStack Image" image
   ```
   
   Create API endpoints for the image service.
   
   ```shell
   openstack endpoint create --region RegionOne image public http://controller:9292
   openstack endpoint create --region RegionOne image internal http://controller:9292
   openstack endpoint create --region RegionOne image admin http://controller:9292
   ```

2. Install the software package.
   
   ```shell
   yum install openstack-glance
   ```

3. Configure the **glance** database.
   
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
   
   ```shell
   vim /etc/glance/glance-registry.conf
   
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
   
   ***Note:***
   
   In the **\[database]** section, configure the database entry.
   
   In the **\[keystone\_authtoken]** and **\[paste\_deploy]** sections, configure the entry for the identity service.
   
   In the **\[glance\_store]** section, configure the local file system storage and the location where image files are stored.
   
   **Replace `GLANCE_DBPASS` with the password of the glance database.**
   
   **Replace `GLANCE_PASS` with the password of the glance user.**
   
4. Synchronize the database.
   
   ```shell
   su -s /bin/sh -c "glance-manage db_sync" glance
   ```

5. Start the service.
   
   ```shell
   systemctl enable openstack-glance-api.service openstack-glance-registry.service
   systemctl start openstack-glance-api.service openstack-glance-registry.service
   ```

6. Perform verification.
   
   Download the image.
   
   ```shell
   source ~/.admin-openrc
   
   wget http://download.cirros-cloud.net/0.4.0/cirros-0.4.0-x86_64-disk.img
   ```
   
   ***Note***
   
   **If the Kunpeng architecture is used, download the image of the ARM64 version.**
   
   Upload the image to the image service.
   
   ```shell
   openstack image create --disk-format qcow2 --container-format bare \
                          --file cirros-0.4.0-x86_64-disk.img --public cirros
   ```
   
   Confirm the image upload and verify the attributes.
   
   ```shell
   openstack image list
   ```

### Installing Nova

1. Create a database, service credentials, and API endpoints.
   
   Create a database.
   
   ```sql
   mysql -u root -p                                                                               (CPT)
   
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
   
   ***Note***
   
   **Replace NOVA_DBPASS with the password of the nova database.**
   
   ```shell
   source ~/.admin-openrc                                                                         (CPT)
   ```
   
   Create Nova service credentials.
   
   ```shell
   openstack user create --domain default --password-prompt nova                                  (CTP)
   openstack role add --project service --user nova admin                                         (CPT)
   openstack service create --name nova --description "OpenStack Compute" compute                 (CPT)
   ```
   
   Create Placement service credentials.
   
   ```shell
   openstack user create --domain default --password-prompt placement                             (CPT)
   openstack role add --project service --user placement admin                                    (CPT)
   openstack service create --name placement --description "Placement API" placement              (CPT)
   ```
   
   Create Nova API endpoints.
   
   ```shell
   openstack endpoint create --region RegionOne compute public http://controller:8774/v2.1        (CPT)
   openstack endpoint create --region RegionOne compute internal http://controller:8774/v2.1      (CPT)
   openstack endpoint create --region RegionOne compute admin http://controller:8774/v2.1         (CPT)
   ```
   
   Create Placement API endpoints.
   
   ```shell
   openstack endpoint create --region RegionOne placement public http://controller:8778           (CPT)
   openstack endpoint create --region RegionOne placement internal http://controller:8778         (CPT)
   openstack endpoint create --region RegionOne placement admin http://controller:8778            (CPT)
   ```

2. Install software packages.
   
   ```shell
   yum install openstack-nova-api openstack-nova-conductor openstack-nova-console \
   openstack-nova-novncproxy openstack-nova-scheduler openstack-nova-placement-api                (CTL)
   
   yum install openstack-nova-compute                                                             (CPT)
   ```
   
   ***Note***
   
   **If the ARM64 structure is used, run the following command:**
   
   ```shell
   yum install edk2-aarch64                                                                       (CPT)
   ```

3. Configures the Nova.
   
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
   cpu_model = cortex-a7                                                                          (CPT)
   
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
   
   **Description**
   
   In the **\[default]** section, enable the compute and metadata APIs, configure the RabbitMQ message queue entrance, **my\_ip**, and enable the network service Neutron.
   
   In the **\[api\_database]** and **\[database]** sections, configure the database entry.
   
   In the **\[api]** and **\[keystone\_authtoken]** sections, configure the identity service entry.
   
   In the **\[vnc]** section, enable and configure the entry for the remote console.
   
   In the **\[glance]** section, configure the API address for the image service.
   
   In the **\[oslo\_concurrency]** section, configure the lock path.
   
   In the **\[placement]** section, configure the entry of the Placement service.
   
   ***Note***
   
   **Replace `RABBIT_PASS` with the password of the openstack user in RabbitMQ.**
   
   **Set `my_ip` to the management IP address of the controller node.**
   
   **Replace `NOVA_DBPASS` with the password of the nova database.**
   
   **Replace `NOVA_PASS` with the password of the nova user.**
   
   **Replace `PLACEMENT_PASS` with the password of the placement user.**
   
   **Replace `NEUTRON_PASS` with the password of the neutron user.**
   
   **Replace `METADATA_SECRET` with a proper metadata agent secret.**
   
   **Exception**
   
   Manually add the Placement API access configuration.
   
   ```shell
   vim /etc/httpd/conf.d/00-nova-placement-api.conf                                               (CTL)
   
   <Directory /usr/bin>
      <IfVersion >= 2.4>
         Require all granted
      </IfVersion>
      <IfVersion < 2.4>
         Order allow,deny
         Allow from all
      </IfVersion>
   </Directory>
   ```
   
   Restart the httpd service.
   
   ```shell
   systemctl restart httpd                                                                        (CTL)
   ```
   
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
   
   ***Note***
   
   **If the ARM64 structure is used, run the following command:**
   
   ```shell
   mkdir -p /usr/share/AAVMF
   chown nova:nova /usr/share/AAVMF
   
   ln -s /usr/share/edk2/aarch64/QEMU_EFI-pflash.raw \
         /usr/share/AAVMF/AAVMF_CODE.fd                                                         (CPT)
   ln -s /usr/share/edk2/aarch64/vars-template-pflash.raw \
         /usr/share/AAVMF/AAVMF_VARS.fd                                                           (CPT)
   
   vim /etc/libvirt/qemu.conf
   
   nvram = ["/usr/share/AAVMF/AAVMF_CODE.fd: \
            /usr/share/AAVMF/AAVMF_VARS.fd", \
            "/usr/share/edk2/aarch64/QEMU_EFI-pflash.raw: \
            /usr/share/edk2/aarch64/vars-template-pflash.raw"]                                    (CPT)
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
   
   Add a compute node to the OpenStack cluster.
   
   ```shell
   su -s /bin/sh -c "nova-manage cell_v2 discover_hosts --verbose" nova                           (CPT)
   ```

5. Start the service.
   
   ```shell
   systemctl enable \                                                                             (CTL)
   openstack-nova-api.service \
   openstack-nova-consoleauth.service \
   openstack-nova-scheduler.service \
   openstack-nova-conductor.service \
   openstack-nova-novncproxy.service
   
   systemctl start \                                                                              (CTL)
   openstack-nova-api.service \
   openstack-nova-consoleauth.service \
   openstack-nova-scheduler.service \
   openstack-nova-conductor.service \
   openstack-nova-novncproxy.service
   ```
   
   ```shell
   systemctl enable libvirtd.service openstack-nova-compute.service                               (CPT)
   systemctl start libvirtd.service openstack-nova-compute.service                                (CPT)
   ```

6. Perform verification.
   
   ```shell
   source ~/.admin-openrc                                                                         (CTL)
   ```
   
   List service components to verify that each process is successfully started and registered.
   
   ```shell
   openstack compute service list                                                                 (CTL)
   ```
   
   List the API endpoints in the identity service and verify the connection to the identity service.
   
   ```shell
   openstack catalog list                                                                         (CTL)
   ```
   
   List the images in the image service and verify the connections:
   
   ```shell
   openstack image list                                                                            (CTL)
   ```
   
   Check whether the cells and placement APIs are running properly and whether other prerequisites are met.
   
   ```shell
   nova-status upgrade check                                                                       (CTL)
   ```

### Installing Neutron

1. Create a database, service credentials, and API endpoints.
   
   Create a database.
   
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
   
   **Replace `NEUTRON_DBPASS` with the password of the neutron database.**
   
   ```shell
   source ~/.admin-openrc                                                                         (CTL)
   ```
   
   Create the **neutron** service credential.
   
   ```shell
   openstack user create --domain default --password-prompt neutron                               (CTL)
   openstack role add --project service --user neutron admin                                      (CTL)
   openstack service create --name neutron --description "OpenStack Networking" network           (CTL)
   ```
   
   Create API endpoints of the Neutron service.
   
   ```shell
   openstack endpoint create --region RegionOne network public http://controller:9696             (CTL)
   openstack endpoint create --region RegionOne network internal http://controller:9696           (CTL)
   openstack endpoint create --region RegionOne network admin http://controller:9696              (CTL)
   ```

2. Install the software package:
   
   ```shell
   yum install openstack-neutron openstack-neutron-linuxbridge-agent ebtables ipset \             (CTL)
               openstack-neutron-l3-agent openstack-neutron-dhcp-agent \
               openstack-neutron-metadata-agent
   ```
   
   ```shell
   yum install openstack-neutron-linuxbridge-agent ebtables ipset                                       (CPT)
   ```

3. Configures the Neutron.
   
   Configure the main body.
   
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
   
   ***Description**
   
   In the **\[database]** section, configure the database entry.
   
   In the **\[default]** section, enable the ML2 and router plug-ins. Allow IP address overlapping, and configure the RabbitMQ message queue entry.
   
   In the **\[default]** and **\[keystone]** sections, configure the identity service entry.
   
   In the **\[default]** and **\[nova]** sections, enable the network to notify the change of the computing network topology.
   
   In the **\[oslo\_concurrency]** section, configure the lock path.
   
   ***Note***
   
   **Replace `NEUTRON_DBPASS` with the password of the neutron database.**
   
   **Replace `RABBIT_PASS` with the password of the openstack user in RabbitMQ.**
   
   **Replace `NEUTRON_PASS` with the password of the neutron user.**
   
   **Replace `NOVA_PASS` with the password of the nova user.**
   
   Configure the ML2 plug-in.
   
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
   
   Create a symbolic link to **/etc/neutron/plugin.ini.**
   
   ```shell
   ln -s /etc/neutron/plugins/ml2/ml2_conf.ini /etc/neutron/plugin.ini
   ```
   
   **Note**
   
   **In the \[ml2] section, enable the flat, VLAN, and VXLAN networks, enable the Linux bridge and L2 population mechanisms, and enable the port security extension driver.**
   
   **In the \[ml2\_type\_flat] section, configure the flat network as the provider virtual network.**
   
   **In the \[ml2\_type\_vxlan] section, configure the VXLAN network identifier range.**
   
   **In the \[securitygroup] section, set ipset.**
   
   **Supplement**
   
   **The L2 configuration can be modified as required. In this document, the provider network and Linux bridge are used.**
   
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
   
   **Description**
   
   In the **\[linux\_bridge]** section, map the Provider virtual network to the physical network API.
   
   In the **\[vxlan]** section, enable the VXLAN network. Configure the IP address of the physical network API that processes the coverage network, and enable layer-2 population.
   
   In the **\[securitygroup]** section, enable the security group and configure the **linux bridge iptables** firewall driver.
   
   ***Note***
   
   **Replace `PROVIDER_INTERFACE_NAME` with the physical network API.**
   
   **Replace `OVERLAY_INTERFACE_IP_ADDRESS` with the management IP address of the controller node.**
   
   Configure the Layer 3 proxy.
   
   ```shell
   vim /etc/neutron/l3_agent.ini                                                                   (CTL)
   
   [DEFAULT]
   interface_driver = linuxbridge
   ```
   
   **Description**
   
   In the **\[default]** section, set the API driver to **linuxbridge**.
   
   Configures the DHCP agent:
   
   ```shell
   vim /etc/neutron/dhcp_agent.ini                                                                (CTL)
   
   [DEFAULT]
   interface_driver = linuxbridge
   dhcp_driver = neutron.agent.linux.dhcp.Dnsmasq
   enable_isolated_metadata = true
   ```
   
   **Description**
   
   In the **\[default]** section, configure the Linux bridge API driver and Dnsmasq DHCP driver. Enable the isolated metadata.
   
   Configure the metadata proxy.
   
   ```shell
   vim /etc/neutron/metadata_agent.ini                                                            (CTL)
   
   [DEFAULT]
   nova_metadata_host = controller
   metadata_proxy_shared_secret = METADATA_SECRET
   ```
   
   **Description**
   
   In the **\[default]** section, configure the metadata host and shared secret.
   
   ***Note***
   
   **Replace `METADATA_SECRET` with a proper metadata agent secret.**

4. Configures Nova.
   
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
   
   **Description**
   
   In the **\[neutron]** section, configure access parameters, enable the metadata proxy, and configure secret.
   
   ***Note***
   
   **Replace `NEUTRON_PASS` with the password of the neutron user.**
   
   **Replace `METADATA_SECRET` with a proper metadata agent secret.**

5. Synchronize the database.
   
   ```shell
   su -s /bin/sh -c "neutron-db-manage --config-file /etc/neutron/neutron.conf \
   --config-file /etc/neutron/plugins/ml2/ml2_conf.ini upgrade head" neutron
   ```

6. Run the following command to restart the computing API service:
   
   ```shell
   systemctl restart openstack-nova-api.service
   ```

7. Start network services.
   
   ```shell
   systemctl enable openstack-neutron-server.service \                                            (CTL)
   openstack-neutron-linuxbridge-agent.service openstack-neutron-dhcp-agent.service \
   openstack-neutron-metadata-agent.service openstack-neutron-l3-agent.service
   systemctl restart openstack-nova-api.service openstack-neutron-server.service                  (CTL)
   openstack-neutron-linuxbridge-agent.service openstack-neutron-dhcp-agent.service \
   openstack-neutron-metadata-agent.service openstack-neutron-l3-agent.service
   
   systemctl enable openstack-neutron-linuxbridge-agent.service                                   (CPT)
   systemctl restart openstack-neutron-linuxbridge-agent.service openstack-nova-compute.service   (CPT)
   ```

8. Perform verification.
   
   Run the following command to list the neutron agents:
   
   ```shell
   openstack network agent list
   ```

### Installing Cinder

1. Create a database, service credentials, and API endpoints.
   
   Create a database.
   
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
   
   **Replace `CINDER_DBPASS` with the password of the cinder database.**
   
   ```shell
   source ~/.admin-openrc
   ```
   
   Create Cinder service credentials:
   
   ```shell
   openstack user create --domain default --password-prompt cinder
   openstack role add --project service --user cinder admin
   openstack service create --name cinderv2 --description "OpenStack Block Storage" volumev2
   openstack service create --name cinderv3 --description "OpenStack Block Storage" volumev3
   ```
   
   Create API endpoints for the block storage service.
   
   ```shell
    openstack endpoint create --region RegionOne volumev2 public http://controller:8776/v2/%\(project_id\)s
    openstack endpoint create --region RegionOne volumev2 internal http://controller:8776/v2/%\(project_id\)s
    openstack endpoint create --region RegionOne volumev2 admin http://controller:8776/v2/%\(project_id\)s
    openstack endpoint create --region RegionOne volumev3 public http://controller:8776/v3/%\(project_id\)s
    openstack endpoint create --region RegionOne volumev3 internal http://controller:8776/v3/%\(project_id\)s
    openstack endpoint create --region RegionOne volumev3 admin http://controller:8776/v3/%\(project_id\)s
   ```

2. Install the software package:
   
   ```shell
   yum install openstack-cinder-api openstack-cinder-scheduler                                    (CTL)
   ```
   
   ```shell
   yum install lvm2 device-mapper-persistent-data scsi-target-utils rpcbind nfs-utils \           (CPT)
               openstack-cinder-volume openstack-cinder-backup
   ```

3. Prepare storage devices. The following is an example:
   
   ```shell
   pvcreate /dev/vdb
   vgcreate cinder-volumes /dev/vdb
   
   vim /etc/lvm/lvm.conf
   
   
   devices {
   ...
   filter = [ "a/vdb/", "r/.*/"]
   ```
   
   **Description**
   
   In the **devices** section, add filtering to allow the /dev/vdb device to reject other devices.

4. Prepare NFS.
   
   ```shell
   mkdir -p /root/cinder/backup
   
   cat << EOF >> /etc/export
   /root/cinder/backup 192.168.1.0/24(rw,sync,no_root_squash,no_all_squash)
   EOF
   
   ```

5. Configure the Cinder.
   
   ```shell
   vim /etc/cinder/cinder.conf
   
   [DEFAULT]
   transport_url = rabbit://openstack:RABBIT_PASS@controller
   auth_strategy = keystone
   my_ip = 10.0.0.11
   enabled_backends = lvm                                                                         (CPT)
   backup_driver=cinder.backup.drivers.nfs.NFSBackupDriver                                        (CPT)
   backup_share=HOST:PATH                                                                         (CPT)
   
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
   volume_driver = cinder.volume.drivers.lvm.LVMVolumeDriver                                      (CPT)
   volume_group = cinder-volumes                                                                  (CPT)
   iscsi_protocol = iscsi                                                                         (CPT)
   iscsi_helper = tgtadm                                                                          (CPT)
   ```
   
   **Description**
   
   In the **\[database]** section, configure the database entry.
   
   In the **\[DEFAULT]** section, configure the RabbitMQ message queue entry and **my\_ip**.
   
   In the **\[DEFAULT]** and **\[keystone\_authtoken]** sections, configure the identity service entry.
   
   In the **\[oslo\_concurrency]** section, configure the lock path.
   
   ***Note***
   
   **Replace `CINDER_DBPASS` with the password of the cinder database.**
   
   **Replace `RABBIT_PASS` with the password of the openstack user in RabbitMQ.**
   
   **Set `my_ip` to the management IP address of the controller node.**
   
   **Replace `CINDER_PASS` with the password of the cinder user.**
   
   **Replace `HOST:PATH` with the host IP address of the NFS and the password of the shared path user.**

6. Synchronize the database.
   
   ```shell
   su -s /bin/sh -c "cinder-manage db sync" cinder                                                (CTL)
   ```

7. Configure Nova.
   
   ```shell
   vim /etc/nova/nova.conf                                                                        (CTL)
   
   [cinder]
   os_region_name = RegionOne
   ```

8. Restart the computing API service.
   
   ```shell
   systemctl restart openstack-nova-api.service
   ```

9. Start the Cinder service.
   
   ```shell
   systemctl enable openstack-cinder-api.service openstack-cinder-scheduler.service               (CTL)
   systemctl start openstack-cinder-api.service openstack-cinder-scheduler.service                (CTL)
   ```
   
   ```shell
   systemctl enable rpcbind.service nfs-server.service tgtd.service iscsid.service \              (CPT)
                    openstack-cinder-volume.service \
                    openstack-cinder-backup.service
   systemctl start rpcbind.service nfs-server.service tgtd.service iscsid.service \               (CPT)
                   openstack-cinder-volume.service \
                   openstack-cinder-backup.service
   ```
   
   ***Note***
   
   If Cinder uses tgtadm to attach volumes, modify **/etc/tgt/tgtd.conf** to ensure that tgtd can discover the iSCSI target of cinder-volume.
   
   ```
   include /var/lib/cinder/volumes/*
   ```

10. Perform verification.
    
    ```shell
    source ~/.admin-openrc
    openstack volume service list
    ```

### Installing Horizon

1. Install the software package.
   
   ```shell
   yum install openstack-dashboard
   ```

2. Modify the file.
   
   Modify the variables.
   
   ```text
   vim /etc/openstack-dashboard/local_settings
   
   ALLOWED_HOSTS = ['*', ]
   OPENSTACK_HOST = "controller"
   OPENSTACK_KEYSTONE_URL = "http://%s:5000/v3" % OPENSTACK_HOST
   ```

3. Restart the httpd service.
   
   ```shell
   systemctl restart httpd
   ```

4. Perform verification.  
Open a browser and enter <http://HOSTIP/dashboard/> in the address bar to log in to Horizon.
   
   ***Note***
   
   **Replace HOSTIP with the management plane IP address of the controller node.**

### Installing Tempest

Tempest is an integration test service of OpenStack. You are advised to use Tempest if you need to fully and automatically test the functions of the installed OpenStack environment. Otherwise, the installation is not required.

1. Install Tempest.
   
   ```shell
   yum install openstack-tempest
   ```

2. Initialize the catalog.
   
   ```shell
   tempest init mytest
   ```

3. Modify the configuration file.
   
   ```shell
   cd mytest
   vi etc/tempest.conf
   ```
   
   Information about the current OpenStack environment needs to be configured in **tempest.conf**. For details, see the [Sample Configuration File](https://docs.openstack.org/tempest/latest/sampleconf.html).

4. Performing the Test
   
   ```shell
   tempest run
   ```

### Installing Ironic

Ironic is a bare metal service of OpenStack. You are advised to use Ironic if you need to deploy a bare metal server. Otherwise, the installation is not required.

1. Set the database.
   
   The bare metal service stores information in the database. Create an Ironic database that can be accessed by the **ironic** user and replace **Ironic\_DBPASSWORD** with a proper password.
   
   ```sql
   mysql -u root -p
   
   MariaDB [(none)]> CREATE DATABASE ironic CHARACTER SET utf8;
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON ironic.* TO 'ironic'@'localhost' \
   IDENTIFIED BY 'IRONIC_DBPASSWORD';
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON ironic.* TO 'ironic'@'%' \
   IDENTIFIED BY 'IRONIC_DBPASSWORD';
   ```

2. Create the service user and perform verification.
   
   1\. Create the bare metal service users.
   
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
   
   2\. Create the bare metal service access portals.
   
   ```shell
   openstack endpoint create --region RegionOne baremetal admin http://$IRONIC_NODE:6385
   openstack endpoint create --region RegionOne baremetal public http://$IRONIC_NODE:6385
   openstack endpoint create --region RegionOne baremetal internal http://$IRONIC_NODE:6385
   openstack endpoint create --region RegionOne baremetal-introspection internal http://172.20.19.13:5050/v1
   openstack endpoint create --region RegionOne baremetal-introspection public http://172.20.19.13:5050/v1
   openstack endpoint create --region RegionOne baremetal-introspection admin http://172.20.19.13:5050/v1
   ```

3. Configuring the ironic-api Service
   
   Configuration file path: **/etc/ironic/ironic.conf**
   
   1\. Set **connection** to the database location, as shown in the following example. Replace **IRONIC\_DBPASSWORD** with the password of the **ironic** user and **DB\_IP** with the IP address of the database server.
   
   ```shell
   [database]
   
   # The SQLAlchemy connection string used to connect to the
   # database (string value)
   
   connection = mysql+pymysql://ironic:IRONIC_DBPASSWORD@DB_IP/ironic
   ```
   
   2\. Configure the ironic-api service to use the RabbitMQ message broker and replace **RPC_\*** with the address and credential of RabbitMQ.
   
   ```shell
   [DEFAULT]
   
   # A URL representing the messaging driver to use and its full
   # configuration. (string value)
   
   transport_url = rabbit://RPC_USER:RPC_PASSWORD@RPC_HOST:RPC_PORT/
   ```
   
   You can also use JSON-RPC to replace RabbitMQ.
   
   3\. Configure the credential for the ironic-api service to use the identity service. Replace **PUBLIC\_IDENTITY\_IP** with the public IP address of the server of the identity service, and replace **PRIVATE\_IDENTITY\_IP** with the private IP address of the identity service server. Replace **Ironic\_PASSWORD** with the password of user **ironic**.
   
   ```shell
   [DEFAULT]
   
   # Authentication strategy used by ironic-api: one of
   # "keystone" or "noauth". "noauth" should not be used in a
   # production environment because all authentication will be
   # disabled. (string value)
   
   auth_strategy=keystone
   
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
   ```
   
   4\. Create a database table for the bare metal service.
   
   ```shell
   ironic-dbsync --config-file /etc/ironic/ironic.conf create_schema
   ```
   
   5\. Restart the ironic-api service.
   
   ```shell
   sudo systemctl restart openstack-ironic-api
   ```

4. Configuring the ironic-conductor Service
   
   1\. Replace **HOST\_IP** with the IP address of the conductor host.
   
   ```shell
   [DEFAULT]
   
   # IP address of this host. If unset, will determine the IP
   # programmatically. If unable to do so, will use "127.0.0.1".
   # (string value)
   
   my_ip=HOST_IP
   ```
   
   2\. Configure the database location. The configuration of ironic-conductor must be the same as that of ironic-api. Replace **IRONIC\_DBPASSWORD** with the password of the **ironic** user and **DB\_IP** with the IP address of the database server.
   
   ```shell
   [database]
   
   # The SQLAlchemy connection string to use to connect to the
   # database. (string value)
   
   connection = mysql+pymysql://ironic:IRONIC_DBPASSWORD@DB_IP/ironic
   ```
   
   3\. Configure the ironic-api service to use the RabbitMQ. The configuration of ironic-conductor service must be the same as that of ironic-api. Replace **RPC\_***\** with the address and credential of RabbitMQ.
   
   ```shell
   [DEFAULT]
   
   # A URL representing the messaging driver to use and its full
   # configuration. (string value)
   
   transport_url = rabbit://RPC_USER:RPC_PASSWORD@RPC_HOST:RPC_PORT/
   ```
   
   You can also use JSON-RPC to replace RabbitMQ.
   
   4\. Configure credentials to access other OpenStack services.
   
   To communicate with other OpenStack services, the service user needs to use the OpenStack Identity service for authentication when the bare metal service requests other services. The credentials for these users must be configured in each configuration file associated with the respective service.
   
   ```shell
   [neutron] - Access OpenStack network service.
   [glance] - Access the OpenStack image service.
   [swift] - Access the OpenStack object storage service.
   [cinder] Access the OpenStack block storage service.
   [inspector] - Access the OpenStack inspection service of the bare metal service.
   [service_catalog] - A special item used to store the credentials used by the bare metal service to discover its own API URL endpoints registered in the OpenStack identity service catalog.
   ```
   
   For simplicity, you can use the same service user for all services. For backward compatibility, this user must be the same as that configured in **\[keystone\_authtoken]** of the ironic-api service. This is not mandatory. You can create and configure different service users for each service.
   
   In the following example, the configuration for the authentication information for users to access the OpenStack network service is:
   
   ```shell
   Network services are deployed in the identity service domain named "RegionOne". Only public endpoint APIs are registered in the service catalog.
   
   A specific CA SSL certificate is used for HTTPS connection when requested.
   
   The same service user with ironic-api service is configured.
   
   The dynamic password authentication plug-in discovers the appropriate version of the identity service API based on other options.
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
   
   By default, to communicate with other services, the bare metal service attempts to discover the appropriate endpoints of the service through the service catalog of the identity service. If you want to use a different endpoint for a specific service, specify the **endpoint\_override** option in the bare metal service configuration file.
   
   ```shell
   [neutron] ... endpoint_override = <NEUTRON_API_ADDRESS>
   ```
   
   5\. Configure allowed drivers and hardware types.
   
   Configure **enabled\_hardware\_types** to set the hardware types allowed by the ironic-conductor service.
   
   ```shell
   [DEFAULT] enabled_hardware_types = ipmi
   ```
   
   Configure the hardware API.
   
   ```shell
   enabled_boot_interfaces = pxe enabled_deploy_interfaces = direct,iscsi enabled_inspect_interfaces = inspector enabled_management_interfaces = ipmitool enabled_power_interfaces = ipmitool
   ```
   
   Configure API default values.
   
   ```shell
   [DEFAULT] default_deploy_interface = direct default_network_interface = neutron
   ```
   
   If any driver that uses Direct Deploy is enabled, you must install and configure the Swift backend of the . The Ceph object gateway (RADOS gateway) can also be used as a backend for the image service.
   
   6\. Restart the ironic-conductor service.
   
   ```shell
   sudo systemctl restart openstack-ironic-conductor
   ```

5. Configure the ironic-conductor service.
   
   Configuration file path: **/etc/ironic-inspector/inspector.conf**
   
   1\. Create a database.
   
   ```shell
   # mysql -u root -p
   
   MariaDB [(none)]> CREATE DATABASE ironic_inspector CHARACTER SET utf8;
   
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON ironic_inspector.* TO 'ironic_inspector'@'localhost' \     IDENTIFIED BY 'IRONIC_INSPECTOR_DBPASSWORD';
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON ironic_inspector.* TO 'ironic_inspector'@'%' \
   IDENTIFIED BY 'IRONIC_INSPECTOR_DBPASSWORD';
   ```
   
   2\. Set **connection** to the database location, as shown in the following example. Replace **IRONIC\_INSPECTOR\_DBPASSWORD** with the password of the **ironic\_inspector** user and **DB\_IP** with the IP address of the database server.
   
   ```shell
   [database]
   backend = sqlalchemy
   connection = mysql+pymysql://ironic_inspector:IRONIC_INSPECTOR_DBPASSWORD@DB_IP/ironic_inspector
   ```
   
   3\. Configure the communication address of the message queue.
   
   ```shell
   [DEFAULT] transport_url = rabbit://RPC_USER:RPC_PASSWORD@RPC_HOST:RPC_PORT/
   ```
   
   4\. Configure Keystone authentication.
   
   ```shell
   [DEFAULT]
   
   auth_strategy = keystone
   
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
   ```
   
   5\. Configure the ironic inspector Dnsmasq service.
   
   ```shell
   #Configuration file path: /etc/ironic-inspector/dnsmasq.conf
   port=0
   interface=enp3s0                         #Replace it with the actual listening network API.
   dhcp-range=172.20.19.100,172.20.19.110   #Replace it with the actual DHCP address range.
   bind-interfaces
   enable-tftp
   
   dhcp-match=set:efi,option:client-arch,7
   dhcp-match=set:efi,option:client-arch,9
   dhcp-match=aarch64, option:client-arch,11
   dhcp-boot=tag:aarch64,grubaa64.efi
   dhcp-boot=tag:!aarch64,tag:efi,grubx64.efi
   dhcp-boot=tag:!aarch64,tag:!efi,pxelinux.0
   
   tftp-root=/tftpboot                       #Replace it with the actual tftpboot directory.
   log-facility=/var/log/dnsmasq.log
   ```
   
   6\. Enable the services.
   
   ```shell
   systemctl enable --now openstack-ironic-inspector.service
   systemctl enable --now openstack-ironic-inspector-dnsmasq.service
   ```

6. Create a deploy ramdisk image.
   
   RAMDisk images of OpenStack-Queens can be created using the ironic-python-agent service or disk-image-builder tool, or the latest ironic-python-agent-builder in the community. You can also use other tools. If the native tool of OpenStack-Queens RAMDisk is used, you need to install the corresponding software package.
   
   ```
   yum install openstack-ironic-python-agent
   Or
   yum install diskimage-builder
   ```
   
   For details, see the [official document](https://docs.openstack.org/ironic/queens/install/deploy-ramdisk.html).
   
   This section describes how to use ironic-python-agent-builder to build the deploy image used by Ironic.
   
   1. Install ironic-python-agent-builder.
      
      1. Install the tool.
         
         ```shell
         pip install ironic-python-agent-builder
         ```
      
      2. Modify the Python interpreter in the following file:
         
         ```shell
         /usr/bin/yum /usr/libexec/urlgrabber-ext-down
         ```
      
      3. Install other necessary tools.
         
         ```shell
         yum install git
         ```
         
         `DIB` depends on `semanage`. Before creating an image, check whether the `semanage --help` command is available. If no such command is displayed, install it.
         
         ```shell
         #Query the package to be installed.
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
         #Installation
         [root@localhost ~]# yum install policycoreutils-python
         ```
   
   2. Create the image.
      
      If the `arm` architecture is used, add the following information:
      
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
      
      Initialize environment variables and create the image.
      
      ```shell
      export DIB_DEV_USER_USERNAME=ipa \
      export DIB_DEV_USER_PWDLESS_SUDO=yes \
      export DIB_DEV_USER_PASSWORD='123'
      ironic-python-agent-builder centos -o /mnt/ironic-agent-ssh -b origin/stable/rocky -e selinux-permissive -e devuser
      ```
   
   4. Specify a code repository.
      
      Initialize the corresponding environment variables and create an image.
      
      ```shell
      #Specify the repository address and version.
      DIB_REPOLOCATION_ironic_python_agent=git@172.20.2.149:liuzz/ironic-python-agent.git
      DIB_REPOREF_ironic_python_agent=origin/develop
      
      #Clone code directly from Gerrit.
      DIB_REPOLOCATION_ironic_python_agent=https://review.opendev.org/openstack/ironic-python-agent
      DIB_REPOREF_ironic_python_agent=refs/changes/43/701043/1
      ```
      
      For details, see [source-repositories](https://docs.openstack.org/diskimage-builder/latest/elements/source-repositories/README.html).
      
      The verification of the specified repository address and version is successful.

### Installing Kolla

Kolla provides container-based deployment for OpenStack services in the production environment. The Kolla and Kolla-ansible services are introduced in openEuler 20.03 LTS SP2.

The installation of Kolla is simple. You only need to install the corresponding RPM package.

```
yum install openstack-kolla openstack-kolla-ansible
```

After the installation, you can use commands including `kolla-ansible`, `kolla-build`, `kolla-genpwd`, and `kolla-mergepwd`.

### Installing Trove

Trove is a database service provided by OpenStack. You are advised to use Trove if you use the database service provided by OpenStack. Otherwise, the installation is not required.

1. Set the database.
   
   The database service stores information in the database. Create a **trove** user to access the **trove** database. Replace **TROVE\_DBPASSWORD** with a proper password.
   
   ```sql
   mysql -u root -p
   
   MariaDB [(none)]> CREATE DATABASE trove CHARACTER SET utf8;
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON trove.* TO 'trove'@'localhost' \
   IDENTIFIED BY 'TROVE_DBPASSWORD';
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON trove.* TO 'trove'@'%' \
   IDENTIFIED BY 'TROVE_DBPASSWORD';
   ```

2. Create the service user and perform verification.
   
   1\. Create a Trove service user.
   
   ```shell
   openstack user create --password TROVE_PASSWORD \
                         --email trove@example.com trove
   openstack role add --project service --user trove admin
   openstack service create --name trove
                            --description "Database service" database
   ```
   
   **Note:** Replace `TROVE_PASSWORD` with the password of the `trove` user.
   
   2\. Create a database service access portal.
   
   ```shell
   openstack endpoint create --region RegionOne database public http://$TROVE_NODE:8779/v1.0/%\(tenant_id\)s
   openstack endpoint create --region RegionOne database internal http://$TROVE_NODE:8779/v1.0/%\(tenant_id\)s
   openstack endpoint create --region RegionOne database admin http://$TROVE_NODE:8779/v1.0/%\(tenant_id\)s
   ```
   
   **Note:** Replace `$TROVE_NODE` with the API service deployment node of the Trove.

3. Install and configure Trove components.  
1\. Install the Trove package.
   
   ```shell script
   yum install openstack-trove python-troveclient
   ```
   
   2. Configure `trove.conf`.
   
   ```shell script
   vim /etc/trove/trove.conf
   
   [DEFAULT]
   bind_host=TROVE_NODE_IP
   log_dir = /var/log/trove
   
   auth_strategy = keystone
   # Config option for showing the IP address that nova doles out
   add_addresses = True
   network_label_regex = ^NETWORK_LABEL$
   api_paste_config = /etc/trove/api-paste.ini
   
   trove_auth_url = http://controller:35357/v3/
   nova_compute_url = http://controller:8774/v2
   cinder_url = http://controller:8776/v1
   
   nova_proxy_admin_user = admin
   nova_proxy_admin_pass = ADMIN_PASS
   nova_proxy_admin_tenant_name = service
   taskmanager_manager = trove.taskmanager.manager.Manager
   use_nova_server_config_drive = True
   
   # Set these if using Neutron Networking
   network_driver=trove.network.neutron.NeutronDriver
   network_label_regex=.*
   
   
   transport_url = rabbit://openstack:RABBIT_PASS@controller:5672/
   
   [database]
   connection = mysql+pymysql://trove:TROVE_DBPASS@controller/trove
   
   [keystone_authtoken]
   www_authenticate_uri = http://controller:5000/v3/
   auth_url=http://controller:35357/v3/
   #auth_uri = http://controller/identity
   #auth_url = http://controller/identity_admin
   auth_type = password
   project_domain_name = default
   user_domain_name = default
   project_name = service
   username = trove
   password = TROVE_PASS
   
   ```
   
   **Note:**
   
   - Set `bind_host` in the `[Default]` section to the IP address of the Trove node in the group.
   - `nova_compute_url` and `cinder_url` are endpoints created in Keystone for Nova and Cinder.
   - `nova_proxy_XXX` shows the information about a user who can access the Nova service. In the preceding example, the `admin` user is used as an example.
   - `transport_url` is the connection information of `RabbitMQ`. Replace `RABBIT_PASS` with the RabbitMQ password.
   - `connection` in the `[database]` section is the information about the database created for Trove in the MySQL.
   - Replace `TROVE_PASS` with the actual password of the **trove** user.
   
   3. Configure `trove-taskmanager.conf`.
   
   ```shell script
   vim /etc/trove/trove-taskmanager.conf
   
   [DEFAULT]
   log_dir = /var/log/trove
   trove_auth_url = http://controller/identity/v2.0
   nova_compute_url = http://controller:8774/v2
   cinder_url = http://controller:8776/v1
   transport_url = rabbit://openstack:RABBIT_PASS@controller:5672/
   
   [database]
   connection = mysql+pymysql://trove:TROVE_DBPASS@controller/trove
   ```
   
   **Note:** Refer to the configuration of `trove.conf`.
   
   4. Configure `trove-conductor.conf`.
   
   ```shell script
   vim /etc/trove/trove-conductor.conf
   
   [DEFAULT]
   log_dir = /var/log/trove
   trove_auth_url = http://controller/identity/v2.0
   nova_compute_url = http://controller:8774/v2
   cinder_url = http://controller:8776/v1
   transport_url = rabbit://openstack:RABBIT_PASS@controller:5672/
   
   [database]
   connection = mysql+pymysql://trove:trove@controller/trove
   ```
   
   **Note:** Refer to the configuration of `trove.conf`.
   
   5. Configure `trove-guestagent.conf`.
   
   ```shell script
   vim /etc/trove/trove-guestagent.conf
   [DEFAULT]
   rabbit_host = controller
   rabbit_password = RABBIT_PASS
   nova_proxy_admin_user = admin
   nova_proxy_admin_pass = ADMIN_PASS
   nova_proxy_admin_tenant_name = service
   trove_auth_url = http://controller/identity_admin/v2.0
   ```
   
   **Note:** `guestagent` is an independent component of Trove and needs to be built into the VM image created by the Trove through Nova. After a database instance is created, the guest agent process is started to report heartbeat messages to the Trove through the message queue (RabbitMQ). Therefore, you need to configure the RabbitMQ user name and password.
   
   6. Generate the `Trove` database table.
   
   ```shell script
   su -s /bin/sh -c "trove-manage db_sync" trove
   ```

4. Complete the installation and configuration.
   
   1. Configure the automatic startup of the Trove service.
   
   ```shell script
   systemctl enable openstack-trove-api.service \
   openstack-trove-taskmanager.service \
   openstack-trove-conductor.service 
   ```
   
   2. Start the service.
   
   ```shell script
   systemctl start openstack-trove-api.service \
   openstack-trove-taskmanager.service \
   openstack-trove-conductor.service
   ```