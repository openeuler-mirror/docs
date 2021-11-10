# OpenStack Victoria Deployment Guide

## OpenStack

OpenStack is an open source cloud computing infrastructure software project developed by the community. It provides an operating platform or tool set for deploying the cloud, offering scalable and flexible cloud computing for organizations.

As an open source cloud computing management platform, OpenStack consists of several major components, such as Nova, Cinder, Neutron, Glance, Keystone, and Horizon. OpenStack supports almost all cloud environments. The project aims to provide a cloud computing management platform that is easy-to-use, scalable, unified, and standardized. OpenStack provides an infrastructure as a service (IaaS) solution that combines complementary services, each of which provides an API for integration.

The official Yum source of openEuler 21.09 supports the Openstack Victoria version. You can configure the official Yum source and then deploy OpenStack by following the instructions of this document.

## Preparing the Environment
### Environment Configuration

Add controller in the `/etc/hosts` file, for example, for node IP `10.0.0.11`, add the following information:

```shell
10.0.0.11   controller
```

### Installing the SQL Database

1. Run the following command to install the software package:
   
   ```plain
   # yum install mariadb mariadb-server python-PyMySQL
   ```

2. Run the following command to create and edit the `/etc/my.cnf.d/openstack.cnf` file:
   
   ```
   vim /etc/my.cnf.d/openstack.cnf
   ```
   
   Copy the following content to the file (set **bind-address** to the management IP address of the controller node):
   
   ```
   [mysqld]
   bind-address = 10.0.0.11
   default-storage-engine = innodb
   innodb_file_per_table = on
   max_connections = 4096
   collation-server = utf8_general_ci
   character-set-server = utf8
   ```

3. Run the following command to start the database service and enable it to automatically start upon system boot:
   
   ```
   # systemctl enable mariadb.service
   # systemctl start mariadb.service
   ```

### Installing RabbitMQ

1. Run the following command to install the software package:
   
   ```
   #yum install rabbitmq-server
   ```

2. Start the RabbitMQ service and enable it to automatically start upon system boot.
   
   ```
   #systemctl enable rabbitmq-server.service
   #systemctl start rabbitmq-server.service
   ```

3. Add an OpenStack user.
   
   ```
   #rabbitmqctl add_user openstack RABBIT_PASS
   ```

4. Replace **RABBIT\_PASS** with the password of the OpenStack user.

5. Run the following command to set the permission of the **openstack** user so that the user can perform configuration, write, and read operations:
   
   ```
   #rabbitmqctl set_permissions openstack ".*" ".*" ".*"
   ```

### Installing Memcached

1. Run the following command to install the target software package:
   
   ```
   #yum install memcached python3-memcached
   ```

2. Run the following command to edit the `/etc/sysconfig/memcached` file:
   
   ```
   #vim /etc/sysconfig/memcached
   OPTIONS="-l 127.0.0.1,::1,controller"
   ```
   
   Change the value of **OPTIONS** to the actual management IP address of the controller node.

3. Run the following command to start the Memcached service and enable it to automatically start upon system boot:
   
   ```
   # systemctl enable memcached.service
   # systemctl start memcached.service
   ```

## Installing OpenStack

### Installing Keystone

1. Log in to the database as the **root** user. Create the **keystone** database, and grant permissions to the user.
   
   ```
   # mysql -u root -p
   MariaDB [(none)]> CREATE DATABASE keystone;
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON keystone.* TO 'keystone'@'localhost' \
   IDENTIFIED BY 'KEYSTONE_DBPASS';
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON keystone.* TO 'keystone'@'%' \
   IDENTIFIED BY 'KEYSTONE_DBPASS';
   MariaDB [(none)]> exit
   ```
   
   Replace **KEYSTONE\_DBPASS** with the password of the **keystone** database.

2. Run the following command to install the software package:
   
   ```
   #yum install openstack-keystone httpd mod_wsgi
   ```

3. Edit the `/etc/keystone/keystone.conf` file to configure the **keystone** database. In the **\[database]** section, configure the database entry. In the **\[token]** section, configure the token provider.
   
   ```
   # vim /etc/keystone/keystone.conf
   [database]
   connection = mysql+pymysql://keystone:KEYSTONE_DBPASS@controller/keystone
   [token]
   provider = fernet
   ```
   
   Replace **KEYSTONE\_DBPASS** with the password of the **keystone** database.

4. Run the following command to synchronize the database.
   
   ```
   su -s /bin/sh -c "keystone-manage db_sync" keystone
   ```

5. Run the following command to initialize the Fernet keystore:
   
   ```
   # keystone-manage fernet_setup --keystone-user keystone --keystone-group keystone
   # keystone-manage credential_setup --keystone-user keystone --keystone-group keystone
   ```

6. Run the following commands to enable the identity service:
   
   ```
   # keystone-manage bootstrap --bootstrap-password ADMIN_PASS \
   --bootstrap-admin-url http://controller:5000/v3/ \
   --bootstrap-internal-url http://controller:5000/v3/ \
   --bootstrap-public-url http://controller:5000/v3/ \
   --bootstrap-region-id RegionOne
   ```
   
   Replace **ADMIN\_PASS** with the password of the **admin** user.

7. Edit the `/etc/httpd/conf/httpd.conf` file and configure the Apache HTTP server.
   
   ```
   #vim /etc/httpd/conf/httpd.conf
   ```
   
   Enable **ServerName** to reference the controller node:
   
   ```
   ServerName controller
   ```
   
   If **ServerName** does not exist, create it.

8. Run the following command to create a link for the `/usr/share/keystone/wsgi-keystone.conf` file:
   
   ```
   #ln -s /usr/share/keystone/wsgi-keystone.conf /etc/httpd/conf.d/
   
   #vim /etc/httpd/conf.d/wsgi-keystone.conf
   ```

9. After the installation is complete, run the following command to start the Apache HTTP service:
   
   ```
   # systemctl enable httpd.service
   # systemctl start httpd.service
   ```

10. Run the following command to set environment variables:
    
    ```
    $ export OS_USERNAME=admin
    $ export OS_PASSWORD=ADMIN_PASS
    $ export OS_PROJECT_NAME=admin
    $ export OS_USER_DOMAIN_NAME=Default
    $ export OS_PROJECT_DOMAIN_NAME=Default
    $ export OS_AUTH_URL=http://controller:5000/v3
    $ export OS_IDENTITY_API_VERSION=3
    ```
    
    Replace **ADMIN\_PASS** with the password set in the **keystone-manage bootstrap** command.

11. Run the following commands to create the domain, project, user, and role:
    
    Create a domain named **example**.
    
    ```
    $ openstack domain create --description "An Example Domain" example
    ```
    
    Note: The domain **default** has been created in **keystone-manage bootstrap**.
    
    Create a project named **service**.
    
    ```
    $ openstack project create --domain default --description "Service Project" service
    ```
    
    Create a non-admin project named **myproject**, a user named **myuser**, and a role named **myrole**. Add the **myrole** role to **myproject** and **myuser**.
    
    ```
    $ openstack project create --domain default --description "Demo Project" myproject
    $ openstack user create --domain default --password-prompt myuser
    $ openstack role create myrole
    $ openstack role add --project myproject --user myuser myrole
    ```

12. Perform the verification.
    
    Cancel the temporary environment variables **OS\_AUTH\_URL** and **OS\_PASSWORD**.
    
    ```
    $ unset OS_AUTH_URL OS_PASSWORD
    ```
    
    Request a token for the **admin** user:
    
    ```
    $ openstack --os-auth-url http://controller:5000/v3 \
    --os-project-domain-name Default --os-user-domain-name Default \
    --os-project-name admin --os-username admin token issue
    ```
    
    Request a token for the **myuser** user:
    
    ```
    $ openstack --os-auth-url http://controller:5000/v3 \
    --os-project-domain-name Default --os-user-domain-name Default \
    --os-project-name myproject --os-username myuser token issue
    ```

13. Create the environment script for the OpenStack client.
    
    Create environment variable scripts for the **admin** and **demo** users.
    
    ```
    # vim admin-openrc
    export OS_PROJECT_DOMAIN_NAME=Default
    export OS_USER_DOMAIN_NAME=Default
    export OS_PROJECT_NAME=admin
    export OS_USERNAME=admin
    export OS_PASSWORD=ADMIN_PASS
    export OS_AUTH_URL=http://controller:5000/v3
    export OS_IDENTITY_API_VERSION=3
    export OS_IMAGE_API_VERSION=2
    #
    ```
    
    ```
    # vim demo-openrc
    export OS_PROJECT_DOMAIN_NAME=Default
    export OS_USER_DOMAIN_NAME=Default
    export OS_PROJECT_NAME=myproject
    export OS_USERNAME=myuser
    export OS_PASSWORD=DEMO_PASS
    export OS_AUTH_URL=http://controller:5000/v3
    export OS_IDENTITY_API_VERSION=3
    export OS_IMAGE_API_VERSION=2
    ```
    
    Replace **ADMIN\_PASS** with the password of the **admin** user.
    
    Replace **DEMO\_PASS** with the password of the **myuser** user.
    
    Run the following script to load environment variables:
    
    ```
    $ source admin-openrc
    ```

### Installing Glance

1. Create a database, service credentials, and API endpoints.
   
   Create a database.
   
   Log in to the database as the **root** user. Create the **glance** database, and grant permissions to the database.
   
   ```
   $ mysql -u root -p
   MariaDB [(none)]> CREATE DATABASE glance;
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON glance.* TO 'glance'@'localhost' \
   IDENTIFIED BY 'GLANCE_DBPASS';
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON glance.* TO 'glance'@'%' \
   IDENTIFIED BY 'GLANCE_DBPASS';
   MariaDB [(none)]> exit
   ```
   
   Replace **GLANCE\_DBPASS** with the password of the **glance** database.
   
   ```
   $ source admin-openrc
   ```
   
   Run the following commands to create the **glance** service credential, create the **glance** user, and add the **admin** role to the **glance** user:
   
   ```
    $ openstack user create --domain default --password-prompt glance
    $ openstack role add --project service --user glance admin
    $ openstack service create --name glance --description "OpenStack Image" image
   ```
   
   Create API endpoints for the image service.
   
   ```
    $ openstack endpoint create --region RegionOne image public http://controller:9292
    $ openstack endpoint create --region RegionOne image internal http://controller:9292
    $ openstack endpoint create --region RegionOne image admin http://controller:9292
   ```

2. Perform the installation and configuration.
   
   Install the software package:
   
   ```
    #yum install openstack-glance openstack-glance-api
   ```
   
   Configure Glance:
   
   Edit the **/etc/glance/glance-api.conf** file:
   
   In the **\[database]** section, configure the database entry.
   
   In the **\[keystone\_authtoken]** and **\[paste\_deploy]** sections, configure the identity authentication service entry.
   
   In the **\[glance\_store]** section, configure the local file system storage and the location where image files are stored.
   
   ```
    # vim /etc/glance/glance-api.conf
    [database]
    # ...
    connection = mysql+pymysql://glance:GLANCE_DBPASS@controller/glance
    [keystone_authtoken]
    # ...
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
    # ...
    flavor = keystone
    [glance_store]
    # ...
    stores = file,http
    default_store = file
    filesystem_store_datadir = /var/lib/glance/images/
   ```
   
   In the preceding command, replace **GLANCE\_DBPASS** with the password of the **glance** database, and replace **GLANCE\_PASS** with the password of the **glance** user.
   
   Synchronize the database:
   
   ```
    su -s /bin/sh -c "glance-manage db_sync" glance
   ```
   
   Run the following command to start the image service:
   
   ```
    # systemctl enable openstack-glance-api.service
    # systemctl start openstack-glance-api.service
   ```

3. Perform the verification.
   
   Download the image.
   
   ```
   $ source admin-openrc
   # Note: If the Kunpeng architecture is used in your environment, download the ARM64 image.
   $ wget http://download.cirros-cloud.net/0.4.0/cirros-0.4.0-x86_64-disk.img
   ```
   
   Upload the image to the image service.
   
   ```
   $ glance image-create --name "cirros" --file cirros-0.4.0-x86_64-disk.img --disk-format qcow2 --container-format bare --visibility=public
   ```
   
   Confirm the image upload and verify the attributes.
   
   ```
   $ glance image-list
   ```

### Installing Placement

1. Create a database, service credentials, and API endpoints.
   
   Create a database.
   
   Access the database as the **root** user. Create the **placement** database, and grant permissions.
   
   ```
   $ mysql -u root -p
   MariaDB [(none)]> CREATE DATABASE placement;
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON placement.* TO 'placement'@'localhost' \
   IDENTIFIED BY 'PLACEMENT_DBPASS';
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON placement.* TO 'placement'@'%' \
   IDENTIFIED BY 'PLACEMENT_DBPASS';
   MariaDB [(none)]> exit
   ```
   
   Replace **PLACEMENT\_DBPASS** with the password of the **placement** database.
   
   ```
   $ source admin-openrc
   ```
   
   Run the following commands to create the placement service credentials, create the **placement** user, and add the **admin** role to the **placement** user:
   
   Create the Placement API Service.
   
   ```
   $ openstack user create --domain default --password-prompt placement
   $ openstack role add --project service --user placement admin
   $ openstack service create --name placement --description "Placement API" placement
   ```
   
   Create API endpoints of the Placement service.
   
   ```
   $ openstack endpoint create --region RegionOne placement public http://controller:8778
   $ openstack endpoint create --region RegionOne placement internal http://controller:8778
   $ openstack endpoint create --region RegionOne placement admin http://controller:8778
   ```

2. Perform the installation and configuration.
   
   Install the software package:
   
   ```
   yum install openstack-placement-api
   ```
   
   Configure Placement:
   
   Edit the **/etc/placement/placement.conf** file:
   
   In the **\[placement\_database]** section, configure the database entry.
   
   In **\[api]** and **\[keystone\_authtoken]** sections, configure the identity authentication service entry.
   
   ```
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
   
   Replace **PLACEMENT\_DBPASS** with the password of the **placement** database, and replace **PLACEMENT\_PASS** with the password of the **placement** user.
   
   Synchronize the database:
   
   ```
   #su -s /bin/sh -c "placement-manage db sync" placement
   ```
   
   Start the httpd service.
   
   ```
   #systemctl restart httpd
   ```

3. Perform the verification.
   
   Run the following command to check the status:
   
   ```
   $ . admin-openrc
   $ placement-status upgrade check
   ```
   
   Run the following command to install **osc-placement** and list the available resource types and features:
   
   ```
   $ yum install python3-osc-placement
   $ openstack --os-placement-api-version 1.2 resource class list --sort-column name
   $ openstack --os-placement-api-version 1.6 trait list --sort-column name
   ```

### Installing Nova

1. Create a database, service credentials, and API endpoints.
   
   Create a database.
   
   Access the database as the **root** user. Create the **nova**, **nova\_api**, and **nova\_cell0** databases and grant permissions.
   
   ```
   $ mysql -u root -p
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
   
   Replace **NOVA\_DBPASS** with the password of the **nova** database.
   
   Run the following commands to create Nova service credentials, create a **nova** user, and add the **admin** role to the **nova** user:
   
   ```
   $ . admin-openrc
   $ openstack user create --domain default --password-prompt nova
   $ openstack role add --project service --user nova admin
   $ openstack service create --name nova --description "OpenStack Compute" compute
   ```
   
   Create API endpoints for the computing service.
   
   ```
   $ openstack endpoint create --region RegionOne compute public http://controller:8774/v2.1
   $ openstack endpoint create --region RegionOne compute internal http://controller:8774/v2.1
   $ openstack endpoint create --region RegionOne compute admin http://controller:8774/v2.1
   ```

2. Perform the installation and configuration.
   
   Install the software package:
   
   ```
   # yum install openstack-nova-api openstack-nova-conductor \
   openstack-nova-novncproxy openstack-nova-scheduler openstack-nova-compute
   ```
   
   Configure Nova:
   
   Edit the **/etc/nova/nova.conf** file.
   
   In the **\[default]** section, enable the computing and metadata APIs, configure the RabbitMQ message queue entry, and set **my\_ip**.
   
   In the **\[api\_database]** and **\[database]** sections, configure the database entry.
   
   In the **\[api]** and **\[keystone\_authtoken]** sections, configure the identity service entry.
   
   In the **\[vnc]** section, enable and configure the entry for the remote console.
   
   In the **\[glance]** section, configure the API address for the image service.
   
   In the **\[oslo\_concurrency]** section, configure the lock path.
   
   In the **\[placement]** section, configure the entry of the Placement service.
   
   ```
   # vim /etc/nova/nova.conf
   [DEFAULT]
   # ...
   enabled_apis = osapi_compute,metadata
   transport_url = rabbit://openstack:RABBIT_PASS@controller:5672/
   my_ip = 10.0.0.11
   [api_database]
   # ...
   connection = mysql+pymysql://nova:NOVA_DBPASS@controller/nova_api
   [database]
   # ...
   connection = mysql+pymysql://nova:NOVA_DBPASS@controller/nova
   [api]
   # ...
   auth_strategy = keystone
   [keystone_authtoken]
   # ...
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
   # ...
   server_listen = $my_ip
   server_proxyclient_address = $my_ip
   novncproxy_base_url = http://controller:6080/vnc_auto.html
   [glance]
   # ...
   api_servers = http://controller:9292
   [oslo_concurrency]
   # ...
   lock_path = /var/lib/nova/tmp
   [placement]
   # ...
   region_name = RegionOne
   project_domain_name = Default
   project_name = service
   auth_type = password
   user_domain_name = Default
   auth_url = http://controller:5000/v3
   username = placement
   password = PLACEMENT_PASS
   [neutron]
   # ...
   auth_url = http://controller:5000
   auth_type = password
   project_domain_name = default
   user_domain_name = default
   region_name = RegionOne
   project_name = service
   username = neutron
   password = NEUTRON_PASS
   ```
   
   Replace **RABBIT\_PASS** with the password of the **openstack** user in RabbitMQ.
   
   Set **my\_ip** to the management IP address of the controller node.
   
   Replace **NOVA\_DBPASS** with the password of the **nova** database.
   
   Replace **NOVA\_PASS** with the password of the **nova** user.
   
   Replace **PLACEMENT\_PASS** with the password of the **placement** user.
   
   Replace **NEUTRON\_PASS** with the password of the **neutron** user.
   
   Run the following command to synchronize the **nova-api** database:
   
   ```
   su -s /bin/sh -c "nova-manage api_db sync" nova
   ```
   
   Run the following command to register the **cell0** database:
   
   ```
   su -s /bin/sh -c "nova-manage cell_v2 map_cell0" nova
   ```
   
   Create the **cell1** cell:
   
   ```
   su -s /bin/sh -c "nova-manage cell_v2 create_cell --name=cell1 --verbose" nova
   ```
   
   Synchronize the **nova** database:
   
   ```
   su -s /bin/sh -c "nova-manage db sync" nova
   ```
   
   Verify whether **cell0** and **cell1** are correctly registered:
   
   ```
   su -s /bin/sh -c "nova-manage cell_v2 list_cells" nova
   ```
   
   Check whether VM hardware acceleration (x86 architecture) is supported:
   
   ```
   $ egrep -c '(vmx|svm)' /proc/cpuinfo
   ```
   
   If the returned value is **0**, hardware acceleration is not supported. You need to configure libvirt to use QEMU instead of KVM.
   
   ```
   # vim /etc/nova/nova.conf
   [libvirt]
   # ...
   virt_type = qemu
   ```
   
   If the returned value is **1** or a larger value, hardware acceleration is supported, and no extra configuration is required.
   
   Start the computing service and its dependencies, and enable the service to start automatically upon system boot.
   
   ```
   # systemctl enable \
   openstack-nova-api.service \
   openstack-nova-scheduler.service \
   openstack-nova-conductor.service \
   openstack-nova-novncproxy.service
   # systemctl start \
   openstack-nova-api.service \
   openstack-nova-scheduler.service \
   openstack-nova-conductor.service \
   openstack-nova-novncproxy.service
   ```
   
   ```
   # systemctl enable libvirtd.service openstack-nova-compute.service
   # systemctl start libvirtd.service openstack-nova-compute.service
   ```
   
   Add the compute nodes to the **cell** database:
   
   Check whether the compute node exists:
   
   ```
   $ . admin-openrc
   $ openstack compute service list --service nova-compute
   ```
   
   Register a compute node:
   
   ```
   #su -s /bin/sh -c "nova-manage cell_v2 discover_hosts --verbose" nova
   ```

3. Perform the verification.
   
   ```
   $ . admin-openrc
   ```
   
   List service components to verify that each process is successfully started and registered.
   
   ```
   $ openstack compute service list
   ```
   
   List the API endpoints in the identity service and verify the connection to the identity service.
   
   ```
   $ openstack catalog list
   ```
   
   List the images in the image service and verify the connections:
   
   ```
   $ openstack image list
   ```
   
   Check whether the cells and placement APIs are running properly and whether other prerequisites are met.
   
   ```
   #nova-status upgrade check
   ```

### Installing Neutron

1. Create a database, service credentials, and API endpoints.
   
   Create a database.
   
   Access the database as the **root** user, create the **neutron** database, and grant permissions.
   
   ```
   $ mysql -u root -p
   MariaDB [(none)]> CREATE DATABASE neutron;
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON neutron.* TO 'neutron'@'localhost' \
   IDENTIFIED BY 'NEUTRON_DBPASS';
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON neutron.* TO 'neutron'@'%' \
   IDENTIFIED BY 'NEUTRON_DBPASS';
   MariaDB [(none)]> exit
   ```
   
   Replace **NEUTRON\_DBPASS** with the password of the **neutron** database.
   
   ```
   $ . admin-openrc
   ```
   
   Run the following commands to create the **neutron** service credential, create the **neutron** user, and add the **admin** role to the **neutron** user:
   
   Create the **neutron** service credential.
   
   ```
   $ openstack user create --domain default --password-prompt neutron
   $ openstack role add --project service --user neutron admin
   $ openstack service create --name neutron --description "OpenStack Networking" network
   ```
   
   Create API endpoints of the network services.
   
   ```
   $ openstack endpoint create --region RegionOne network public http://controller:9696
   $ openstack endpoint create --region RegionOne network internal http://controller:9696
   $ openstack endpoint create --region RegionOne network admin http://controller:9696
   ```

2. Install and configure the self-service network.
   
   Install the software package:
   
   ```
   # yum install openstack-neutron openstack-neutron-ml2 \
   openstack-neutron-linuxbridge ebtables ipset
   ```
   
   Configure Neutron:
   
   Edit the **/etc/neutron/neutron.conf** file:
   
   In the **\[database]** section, configure the database entry.
   
   In the **\[default]** section, enable the ML2 and router plug-ins. Allow IP address overlapping, and configure the RabbitMQ message queue entry.
   
   In the **\[default]** and **\[keystone]** sections, configure the identity authentication service entry.
   
   In the **\[default]** and **\[nova]** sections, enable the network to notify the change of the computing network topology.
   
   In the **\[oslo\_concurrency]** section, configure the lock path.
   
   ```
   # vim /etc/neutron/neutron.conf
   [database]
   # ...
   connection = mysql+pymysql://neutron:NEUTRON_DBPASS@controller/neutron
   [DEFAULT]
   # ...
   core_plugin = ml2
   service_plugins = router
   allow_overlapping_ips = true
   transport_url = rabbit://openstack:RABBIT_PASS@controller
   auth_strategy = keystone
   notify_nova_on_port_status_changes = true
   notify_nova_on_port_data_changes = true
   [keystone_authtoken]
   # ...
   www_authenticate_uri = http://controller:5000
   auth_url = http://controller:5000
   memcached_servers = controller:11211
   auth_type = password
   project_domain_name = default
   user_domain_name = default
   project_name = service
   username = neutron
   password = NEUTRON_PASS
   [nova]
   # ...
   auth_url = http://controller:5000
   auth_type = password
   project_domain_name = default
   user_domain_name = default
   region_name = RegionOne
   project_name = service
   username = nova
   password = NOVA_PASS
   [oslo_concurrency]
   # ...
   lock_path = /var/lib/neutron/tmp
   ```
   
   Replace **NEUTRON\_DBPASS** with the password of the **neutron** database.
   
   Replace **RABBIT\_PASS** with the password of the **openstack** user in RabbitMQ.
   
   Replace **NEUTRON\_PASS** with the password of the **neutron** user.
   
   Replace **NOVA\_PASS** with the password of the **nova** user.
   
   Configure the ML2 plug-in.
   
   Edit the **/etc/neutron/plugins/ml2/ml2\_conf.ini** file.
   
   In the **\[ml2]** section, enable the flat, VLAN, and VXLAN networks, enable the bridge and layer-2 population mechanism, and enable the port security extension driver.
   
   In the **\[ml2\_type\_flat]** section, configure the flat network as the provider virtual network.
   
   In the **\[ml2\_type\_vxlan]** section, configure the VXLAN network identifier range.
   
   In the **\[securitygroup]** section, set **ipset**.
   
   ```
   # vim /etc/neutron/plugins/ml2/ml2_conf.ini
   [ml2]
   # ...
   type_drivers = flat,vlan,vxlan
   tenant_network_types = vxlan
   mechanism_drivers = linuxbridge,l2population
   extension_drivers = port_security
   [ml2_type_flat]
   # ...
   flat_networks = provider
   [ml2_type_vxlan]
   # ...
   vni_ranges = 1:1000
   [securitygroup]
   # ...
   enable_ipset = true
   ```
   
   Configure the Linux bridge agent:
   
   Edit the **/etc/neutron/plugins/ml2/linuxbridge\_agent.ini** file:
   
   In the **\[linux\_bridge]** section, map the provider virtual network to the physical network API.
   
   In the **\[vxlan]** section, enable the VXLAN network. Configure the IP address of the physical network API that processes the coverage network, and enable layer-2 population.
   
   In the **\[securitygroup]** section, enable the security group and configure the **linux bridge iptables** firewall driver.
   
   ```
   # vim /etc/neutron/plugins/ml2/linuxbridge_agent.ini
   [linux_bridge]
   physical_interface_mappings = provider:PROVIDER_INTERFACE_NAME
   [vxlan]
   enable_vxlan = true
   local_ip = OVERLAY_INTERFACE_IP_ADDRESS
   l2_population = true
   [securitygroup]
   # ...
   enable_security_group = true
   firewall_driver = neutron.agent.linux.iptables_firewall.IptablesFirewallDriver
   ```
   
   Replace **PROVIDER\_INTERFACE\_NAME** with the physical network API.
   
   Replace **OVERLAY\_INTERFACE\_IP\_ADDRESS** with the management IP address of the controller node.
   
   Configure the Layer 3 proxy.
   
   Edit the **/etc/neutron/l3\_agent.ini** file:
   
   In the **\[default]** section, set the API driver to **linuxbridge**.
   
   ```
   # vim /etc/neutron/l3_agent.ini
   [DEFAULT]
   # ...
   interface_driver = linuxbridge
   ```
   
   Configures the DHCP agent:
   
   Edit the **/etc/neutron/dhcp\_agent.ini** file.
   
   In the **\[default]** section, configure the linuxbridge interface driver and Dnsmasq DHCP driver. Enable the isolated metadata.
   
   ```
   # vim /etc/neutron/dhcp_agent.ini
   [DEFAULT]
   # ...
   interface_driver = linuxbridge
   dhcp_driver = neutron.agent.linux.dhcp.Dnsmasq
   enable_isolated_metadata = true
   ```
   
   Configure the metadata proxy.
   
   Edit the **/etc/neutron/metadata\_agent.ini** file.
   
   In the **\[default]**, configure the metadata host and shared secret.
   
   ```
   # vim /etc/neutron/metadata_agent.ini
   [DEFAULT]
   # ...
   nova_metadata_host = controller
   metadata_proxy_shared_secret = METADATA_SECRET
   ```
   
   Replace **METADATA\_SECRET** with a proper metadata agent secret.

3. Configure the computing service.
   
   Edit the **/etc/nova/nova.conf** file.
   
   In the **\[neutron]** section, configure access parameters, enable the metadata proxy, and configure secret.
   
   ```
   # vim /etc/nova/nova.conf
   [neutron]
   # ...
   auth_url = http://controller:5000
   auth_type = password
   project_domain_name = default
   user_domain_name = default
   region_name = RegionOne
   project_name = service
   username = neutron
   password = NEUTRON_PASS
   service_metadata_proxy = true
   metadata_proxy_shared_secret = METADATA_SECRET
   ```
   
   Replace **NEUTRON\_PASS** with the password of the **neutron** user.
   
   Replace **METADATA\_SECRET** with a proper metadata agent secret.

4. Complete the installation.
   
   Add a link:
   
   ```
   #ln -s /etc/neutron/plugins/ml2/ml2_conf.ini /etc/neutron/plugin.ini
   ```
   
   Synchronize the database:
   
   ```
   # su -s /bin/sh -c "neutron-db-manage --config-file /etc/neutron/neutron.conf \
   --config-file /etc/neutron/plugins/ml2/ml2_conf.ini upgrade head" neutron
   ```
   
   Run the following command to restart the computing API service:
   
   ```
   #systemctl restart openstack-nova-api.service
   ```
   
   Start the network service and enable the service to start automatically upon system boot.
   
   ```
   # systemctl enable neutron-server.service \
   neutron-linuxbridge-agent.service neutron-dhcp-agent.service \
   neutron-metadata-agent.service
   # systemctl start neutron-server.service \
   neutron-linuxbridge-agent.service neutron-dhcp-agent.service \
   neutron-metadata-agent.service
   # systemctl enable neutron-l3-agent.service
   # systemctl start neutron-l3-agent.service
   ```

5. Perform the verification.
   
   Run the following command to list the neutron agents:
   
   ```
   $ openstack network agent list
   ```

### Installing Cinder

1. Create a database, service credentials, and API endpoints.
   
   Create a database.
   
   Access the database as the **root** user. Create the **cinder** database, and grant permissions.
   
   ```
   $ mysql -u root -p
   MariaDB [(none)]> CREATE DATABASE cinder;
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON cinder.* TO 'cinder'@'localhost' \
   IDENTIFIED BY 'CINDER_DBPASS';
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON cinder.* TO 'cinder'@'%' \
   IDENTIFIED BY 'CINDER_DBPASS';
   MariaDB [(none)]> exit
   ```
   
   Replace **CINDER\_DBPASS** with the password for the **cinder** database.
   
    ```
    $ source admin-openrc
    ```
   
   Create Cinder service credentials:
   
   Create the **cinder** user.
   
   Add the **admin** role to the **cinder** user.
   
   Create the **cinderv2** and **cinderv3** services.
   
   ```
   $ openstack user create --domain default --password-prompt cinder
   $ openstack role add --project service --user cinder admin
   $ openstack service create --name cinderv2 --description "OpenStack Block Storage" volumev2
   $ openstack service create --name cinderv3 --description "OpenStack Block Storage" volumev3
   ```
   
   Create API endpoints for the block storage service.
   
   ```
   $ openstack endpoint create --region RegionOne volumev2 public http://controller:8776/v2/%s
   $ openstack endpoint create --region RegionOne volumev2 internal http://controller:8776/v2/%s
   $ openstack endpoint create --region RegionOne volumev2 admin http://controller:8776/v2/%s
   $ openstack endpoint create --region RegionOne volumev3 public http://controller:8776/v3/%s
   $ openstack endpoint create --region RegionOne volumev3 internal http://controller:8776/v3/%s
   $ openstack endpoint create --region RegionOne volumev3 admin http://controller:8776/v3/%s
   ```

2. Install and configure the controller node.
   
   Install the software package:
   
   ```
   #yum install openstack-cinder
   ```
   
   Configure Cinder:
   
   Edit the **/etc/cinder/cinder.conf** file.
   
   In the **\[database]** section, configure the database entry.
   
   In the **\[DEFAULT]** section, configure the RabbitMQ message queue entry and **my\_ip**.
   
   In the **\[DEFAULT]** and **\[keystone\_authtoken]** sections, configure the identity authentication service entry.
   
   In the **\[oslo\_concurrency]** section, configure the lock path.
   
   ```
   # vim /etc/cinder/cinder.conf
   [database]
   # ...
   connection = mysql+pymysql://cinder:CINDER_DBPASS@controller/cinder
   [DEFAULT]
   # ...
   transport_url = rabbit://openstack:RABBIT_PASS@controller
   auth_strategy = keystone
   my_ip = 10.0.0.11
   [keystone_authtoken]
   # ...
   www_authenticate_uri = http://controller:5000
   auth_url = http://controller:5000
   memcached_servers = controller:11211
   auth_type = password
   project_domain_name = default
   user_domain_name = default
   project_name = service
   username = cinder
   password = CINDER_PASS
   [oslo_concurrency]
   # ...
   lock_path = /var/lib/cinder/tmp
   ```
   
   Replace **CINDER\_DBPASS** with the password of the **cinder** database.
   
   Replace **RABBIT\_PASS** with the password of the **openstack** user in RabbitMQ.
   
   Set **my\_ip** to the management IP address of the controller node.
   
   Replace **CINDER\_PASS** with the password of the **cinder** user.
   
   Synchronize the database:
   
   ```
   su -s /bin/sh -c "cinder-manage db sync" cinder
   ```
   
   Configure the block storage for the compute nodes.
   
   Edit the **/etc/nova/nova.conf** file.
   
   ```
   # vim /etc/nova/nova.conf
   [cinder]
   os_region_name = RegionOne
   ```
   
   Complete the installation.
   
   Restart the computing API service.
   
   ```
   systemctl restart openstack-nova-api.service
   ```
   
   Start the block storage service.
   
   ```
   # systemctl enable openstack-cinder-api.service openstack-cinder-scheduler.service
   # systemctl start openstack-cinder-api.service openstack-cinder-scheduler.service
   ```

3. Install and configure the storage node.
   
   Install the software package:
   
   ```
   yum install lvm2 device-mapper-persistent-data targetcli python3-keystone
   ```
   
   Start the service:
   
   ```
   # systemctl enable lvm2-lvmetad.service
   # systemctl start lvm2-lvmetad.service
   ```
   
   Create the LVM physical volume **/dev/sdb**.
   
   ```
   pvcreate /dev/sdb
   ```
   
   Create the LVM volume group **cinder-volumes**.
   
   ```
   vgcreate cinder-volumes /dev/sdb
   ```
   
   Edit the **/etc/lvm/lvm.conf** file.
   
   In the **devices** section, add filtering to allow the **/dev/sdb** device to reject other devices.
   
   devices {
   
   ...
   
   filter = \[ "a/sdb/", "r/.\*/"]
   
   Edit the **/etc/cinder/cinder.conf** file.
   
   In the **\[lvm]** section, configure the LVM backend using the LVM driver, cinder-volumes volume group, iSCSI protocol, and appropriate iSCSI services.
   
   In the **\[DEFAULT]** section, enable the LVM backend and configure the location of the API of the image service.
   
   ```
   [lvm]
   volume_driver = cinder.volume.drivers.lvm.LVMVolumeDriver
   volume_group = cinder-volumes
   target_protocol = iscsi
   target_helper = lioadm
   [DEFAULT]
   # ...
   enabled_backends = lvm
   glance_api_servers = http://controller:9292
   ```
   
   Complete the installation.
   
   ```
   # systemctl enable openstack-cinder-volume.service target.service
   # systemctl start openstack-cinder-volume.service target.service
   ```

4. Install and configure the backup service.
   
   Edit the **/etc/cinder/cinder.conf** file.
   
   In the **\[DEFAULT]** section, configure the backup options.
   
   ```
   [DEFAULT]
   # ...
   # Note: openEuler 21.09 does not provide the OpenStack Swift software package. You need to install it manually. Alternatively, you can use another backup backend, for example, NFS. The NFS has been tested and verified and can be used properly.
   backup_driver = cinder.backup.drivers.swift.SwiftBackupDriver
   backup_swift_url = SWIFT_URL
   ```
   
   Replace **SWIFT\_URL** with the URL of the object storage service. The URL can be found through the object storage API endpoint.
   
   ```
   $ openstack catalog show object-store
   ```
   
   Complete the installation.
   
   ```
   # systemctl enable openstack-cinder-backup.service
   # systemctl start openstack-cinder-backup.service
   ```

5. Perform the verification.
   
   List service components and verify that each step is successful.
   
   ```
   $ source admin-openrc
   $ openstack volume service list
   ```
   
   Note: Currently, the Swift component is not supported. If possible, you can configure the interconnection with Ceph.

### Installing Horizon

1. Install the software package:
   
   ```plain
   yum install openstack-horizon
   ```

2. Modify the `/usr/share/openstack-dashboard/openstack_dashboard/local/local_settings.py` file.
   
   Modify the variables.
   
   ```plain
   ALLOWED_HOSTS = ['*', ]
   OPENSTACK_HOST = "controller"
   OPENSTACK_KEYSTONE_URL = "http://%s:5000/v3" % OPENSTACK_HOST
   ```
   
   Add variables.
   
   ```plain
   OPENSTACK_API_VERSIONS = {
       "identity": 3,
       "image": 2,
       "volume": 3,
   }
   WEBROOT = "/dashboard/"
   COMPRESS_OFFLINE = True
   OPENSTACK_KEYSTONE_DEFAULT_DOMAIN = "default"
   OPENSTACK_KEYSTONE_DEFAULT_ROLE = "admin"
   LOGIN_URL = '/dashboard/auth/login/'
   LOGOUT_URL = '/dashboard/auth/logout/'
   ```

3. Run the following command in the **/usr/share/openstack-dashboard** directory:
   
   ```plain
   ./manage.py compress
   ```

4. Restart the httpd service.
   
   ```plain
   systemctl restart httpd
   ```

5. Perform the verification
   Open a browser and enter **http://***\<host\_ip>* in the address box to log in to Horizon.

### Installing Tempest

Tempest is the integrated test service of OpenStack. If you need to run a fully automatic test of the functions of the installed OpenStack environment, you are advised to use Tempest. Otherwise, you can choose not to install it.

1. Install Tempest:
    ```
    yum install openstack-tempest
    ```
2. Initialize the directory:

    ```
    tempest init mytest
    ```
3. Modify the configuration file:

    ```
    cd mytest
    vi etc/tempest.conf
    ```
    Configure the current OpenStack environment information in **tempest.conf**. For details, see the [official example](https://docs.openstack.org/tempest/latest/sampleconf.html).

4. Perform the test:

    ```
    tempest run
    ```

### Installing Ironic

Ironic is the bare metal service of OpenStack. If you need to deploy bare metal machines, you are advised to use Ironic. Otherwise, you can choose not to install it.

1. Set the database.

   The bare metal service stores information in the database. Create a **ironic** database that can be accessed by the **ironic** user and replace **IRONIC_DBPASSWORD** with a proper password.

   ```
   # mysql -u root -p MariaDB [(none)]> CREATE DATABASE ironic CHARACTER SET utf8; 
   
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON ironic.* TO 'ironic'@'localhost' \     
   IDENTIFIED BY 'IRONIC_DBPASSWORD'; 
   
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON ironic.* TO 'ironic'@'%' \     
   IDENTIFIED BY 'IRONIC_DBPASSWORD';
   ```

2. Install and configure the components.

   ##### Creating Service User Authentication

   1. Create the bare metal service user:

   ```
   $ openstack user create --password IRONIC_PASSWORD \ 
   --email ironic@example.com ironic 
   $ openstack role add --project service --user ironic admin 
   $ openstack service create --name ironic --description \ 
   "Ironic baremetal provisioning service" baremetal 
   
   $ openstack service create --name ironic-inspector --description     "Ironic inspector baremetal provisioning service" baremetal-introspection 
   $ openstack user create --password IRONIC_INSPECTOR_PASSWORD --email ironic_inspector@example.com ironic_inspector 
   $ openstack role add --project service --user ironic-inspector admin
   ```

   2. Create the bare metal service access entries:

   ```
   $ openstack endpoint create --region RegionOne baremetal admin http://$IRONIC_NODE:6385 
   $ openstack endpoint create --region RegionOne baremetal public http://$IRONIC_NODE:6385 
   $ openstack endpoint create --region RegionOne baremetal internal http://$IRONIC_NODE:6385 
   $ openstack endpoint create --region RegionOne baremetal-introspection internal http://172.20.19.13:5050/v1 
   $ openstack endpoint create --region RegionOne baremetal-introspection public http://172.20.19.13:5050/v1 
   $ openstack endpoint create --region RegionOne baremetal-introspection admin http://172.20.19.13:5050/v1
   ```

   ##### Configuring the ironic-api Service

   Configuration file path: **/etc/ironic/ironic.conf**.

   1. Use **connection** to configure the location of the database as follows. Replace **IRONIC_DBPASSWORD** with the password of user **ironic** and replace **DB_IP** with the IP address of the database server.

   ```
   [database] 
   
   # The SQLAlchemy connection string used to connect to the 
   # database (string value) 
   
   connection = mysql+pymysql://ironic:IRONIC_DBPASSWORD@DB_IP/ironic
   ```

   2. Configure the ironic-api service to use the RabbitMQ message broker. Replace **RPC_\*** with the detailed address and the credential of RabbitMQ.

   ```
   [DEFAULT] 
   
   # A URL representing the messaging driver to use and its full 
   # configuration. (string value) 
   
   transport_url = rabbit://RPC_USER:RPC_PASSWORD@RPC_HOST:RPC_PORT/
   ```

   You can also use json-rpc instead of RabbitMQ.

   3. Configure the ironic-api service to use the credential of the identity authentication service. Replace **PUBLIC_IDENTITY_IP** with the public IP address of the identity authentication server and **PRIVATE_IDENTITY_IP** with the private IP address of the identity authentication server, replace **IRONIC_PASSWORD** with the password of the **ironic** user in the identity authentication service.

   ```
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

   4. Create the bare metal service database table:

   ```
   $ ironic-dbsync --config-file /etc/ironic/ironic.conf create_schema
   ```

   5. Restart the ironic-api service:

   ```
   sudo systemctl restart openstack-ironic-api
   ```

   ##### Configuring the ironic-conductor Service.

   1. Replace **HOST_IP** with the IP address of the conductor host.

   ```
   [DEFAULT] 
   
   # IP address of this host. If unset, will determine the IP 
   # programmatically. If unable to do so, will use "127.0.0.1". 
   # (string value) 
   
   my_ip=HOST_IP
   ```

   2. Specifies the location of the database. ironic-conductor must use the same configuration as ironic-api. Replace **IRONIC_DBPASSWORD** with the password of user **ironic** and replace DB_IP with the IP address of the database server.

   ```
   [database] 
   
   # The SQLAlchemy connection string to use to connect to the 
   # database. (string value) 
   
   connection = mysql+pymysql://ironic:IRONIC_DBPASSWORD@DB_IP/ironic
   ```

   3. Configure the ironic-api service to use the RabbitMQ message broker. ironic-conductor must use the same configuration as ironic-api. Replace **RPC_\*** with the detailed address and the credential of RabbitMQ.

   ```
   [DEFAULT] 
   
   # A URL representing the messaging driver to use and its full 
   # configuration. (string value) 
   
   transport_url = rabbit://RPC_USER:RPC_PASSWORD@RPC_HOST:RPC_PORT/
   ```

   You can also use json-rpc instead of RabbitMQ.

   4. Configure the credentials to access other OpenStack services.

   To communicate with other OpenStack services, the bare metal service needs to use the service users to get authenticated by the OpenStack Identity service when requesting other services. The credentials of these users must be configured in each configuration file associated to the corresponding service.

   ```
   [neutron] - Accessing the OpenStack network services.
   [glance] - Accessing the OpenStack image service.
   [swift] - Accessing the OpenStack object storage service.
   [cinder] - Accessing the OpenStack block storage service.
   [inspector] Accessing the OpenStack bare metal introspection service.
   [service_catalog] - A special item to store the credential used by the bare metal service. The credential is used to discover the API URL endpoint registered in the OpenStack identity authentication service catalog by the bare metal service.
   ```

   For simplicity, you can use one service user for all services. For backward compatibility, the user name must be the same as that configured in **[keystone_authtoken]** of the ironic-api service. However, this is not mandatory. You can also create and configure a different service user for each service.

   In the following example, the authentication information for the user to access the OpenStack network service is configured as follows:

   ```
   The network service is deployed in the identity authentication service domain named RegionOne. Only the public endpoint interface is registered in the service catalog.
   
   A specific CA SSL certificate is used for HTTPS connection when sending a request.
   
   The same service user as that configured for ironic-api.
   
   The dynamic password authentication plugin discovers a proper identity authentication service API version based on other options.
   ```

   ```
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

   ```
   [neutron] ... endpoint_override = <NEUTRON_API_ADDRESS>
   ```

   5. Configure the allowed drivers and hardware types.

   Set enabled_hardware_types to specify the hardware types that can be used by ironic-conductor:

   ```
   [DEFAULT] enabled_hardware_types = ipmi 
   ```

   Configure hardware interfaces:

   ```
   enabled_boot_interfaces = pxe enabled_deploy_interfaces = direct,iscsi enabled_inspect_interfaces = inspector enabled_management_interfaces = ipmitool enabled_power_interfaces = ipmitool
   ```

   Configure the default value of the interface:

   ```
   [DEFAULT] default_deploy_interface = direct default_network_interface = neutron
   ```

   If any driver that uses Direct Deploy is enabled, you must install and configure the Swift backend of the image service. The Ceph object gateway (RADOS gateway) can also be used as the backend of the image service.

   6. Restart the ironic-conductor service.

   ```
   sudo systemctl restart openstack-ironic-conductor
   ```

   ##### Configuring the ironic-inspector Service

   Configuration file path: **/etc/ironic-inspector/inspector.conf**

   1. Create the database:

   ```
   # mysql -u root -p 
   
   MariaDB [(none)]> CREATE DATABASE ironic_inspector CHARACTER SET utf8; 
   
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON ironic_inspector.* TO 'ironic_inspector'@'localhost' \     IDENTIFIED BY 'IRONIC_INSPECTOR_DBPASSWORD'; 
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON ironic_inspector.* TO 'ironic_inspector'@'%' \     
   IDENTIFIED BY 'IRONIC_INSPECTOR_DBPASSWORD';
   ```

   2. Use **connection** to configure the location of the database as follows. Replace **IRONIC_INSPECTOR_DBPASSWORD** with the password of user **ironic_inspector** and replace **DB_IP** with the IP address of the database server.

   ```
   [database] 
   backend = sqlalchemy 
   connection = mysql+pymysql://ironic_inspector:IRONIC_INSPECTOR_DBPASSWORD@DB_IP/ironic_inspector
   ```

   3. Configure the communication address of the message queue:

   ```
   [DEFAULT] transport_url = rabbit://RPC_USER:RPC_PASSWORD@RPC_HOST:RPC_PORT/
   ```

   4. Configure the Keystone authentication:

   ```
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
   project_domain_name = default 
   user_domain_name = default 
   username = IRONIC_SERVICE_USER_NAME 
   password = IRONIC_SERVICE_USER_PASSWORD
   ```

   5. Configure the ironic inspector dnsmasq service:

   ```
   # Configuration file path: /etc/ironic-inspector/dnsmasq.conf
   port=0 
   interface=enp3s0 #Replace with the actual listening network interface.
   dhcp-range=172.20.19.100,172.20.19.110 #Replace with the actual DHCP IP address range.
   bind-interfaces 
   enable-tftp 
   
   dhcp-match=set:efi,option:client-arch,7 
   dhcp-match=set:efi,option:client-arch,9 
   dhcp-match=aarch64, option:client-arch,11 
   dhcp-boot=tag:aarch64,grubaa64.efi 
   dhcp-boot=tag:!aarch64,tag:efi,grubx64.efi 
   dhcp-boot=tag:!aarch64,tag:!efi,pxelinux.0 
   
   tftp-root=/tftpboot #Replace with the actual tftpboot directory.
   log-facility=/var/log/dnsmasq.log
   ```

   6. Start the services:

   ```
   $ systemctl enable --now openstack-ironic-inspector.service 
   $ systemctl enable --now openstack-ironic-inspector-dnsmasq.service
   ```

3. Creatie the deploy ramdisk Image.

   Currently, you can use the ironic python agent builder to build the ramdisk image. The following describes how to use this tool to build the deploy image used by ironic.

   ##### Installing ironic-python-agent-builder

   1. Install Python 3 on the local host, switch the local Python to Python 3, and resolve the problems after the switching (for example, the Yum source cannot be used).

      ```
      yum install python36
      ```

   2. Install the tool:

      ```
      pip install ironic-python-agent-builder
      ```

   3. Modify the python interpreter in the following file:

      ```
      /usr/bin/yum /usr/libexec/urlgrabber-ext-down
      ```

   4. Install the other necessary tools:

      ```
      yum install git
      ```

      `DIB` depends on the `semanage` command. Therefore, check whether the `semanage --help` command is available before creating an image. If the system displays a message indicating that the command is unavailable, install the command:

      ```
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

   ##### Creating the Image

   According to the test result, only version 8 is supported for CentOS. In addition, centos8-minimal lacks some NIC drivers. As a result, all NICs are in the down state after the Dell physical machine is started. Therefore, CentOS 8 is used in the example. Add the following environment variables:

   ```
   export DIB_PYTHON_VERSION=3 \ 
   export DIB_RELEASE=8 \ 
   export DIB_YUM_MINIMAL_CREATE_INTERFACES
   ```

   For `arm` architecture, add the following information in addition:

   ```
   export ARCH=aarch64
   ```

   ###### Common Image

   Basic usage:

   ```
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

   ```
   ironic-python-agent-builder centos -o /mnt/ironic-agent-ssh -b origin/stable/rocky
   ```

   ###### Allowing SSH login

   Initialize the environment variables and create the image:

   ```
   export DIB_DEV_USER_USERNAME=ipa \
   export DIB_DEV_USER_PWDLESS_SUDO=yes \
   export DIB_DEV_USER_PASSWORD='123'
   ironic-python-agent-builder centos -o /mnt/ironic-agent-ssh -b origin/stable/rocky -e selinux-permissive -e devuser
   ```

   ###### Specifying the Code Repository

   Initialize the corresponding environment variables and create the image:

   ```
   # Specify the address and version of the repository.
   DIB_REPOLOCATION_ironic_python_agent=git@172.20.2.149:liuzz/ironic-python-agent.git
   DIB_REPOREF_ironic_python_agent=origin/develop
    
   # Clone code from Gerrit.
   DIB_REPOLOCATION_ironic_python_agent=https://review.opendev.org/openstack/ironic-python-agent
   DIB_REPOREF_ironic_python_agent=refs/changes/43/701043/1
   ```

   Reference: [source-repositories](https://docs.openstack.org/diskimage-builder/latest/elements/source-repositories/README.html).

   The specified repository address and version are verified successfully.
