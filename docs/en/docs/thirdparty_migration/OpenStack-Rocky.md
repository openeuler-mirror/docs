# OpenStack-Rocky Deployment Guide

<!-- TOC -->
- [OpenStack-Rocky Deployment Guide](#openstack-rocky-deployment-guide)
  - [Introduction to OpenStack](#introduction-to-openstack)
  
  - [Preparing the Environment](#preparing-the-environment)
    - [Configuring OpenStack Yum Source](#configuring-openStack-yum-source)
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
    
    - [Installing Trove](#installing-trove)

<!-- /TOC -->

## Introduction to OpenStack

OpenStack is an open source cloud computing infrastructure software project developed by the community. It provides an operating platform or tool set for deploying the cloud, offering scalable and flexible cloud computing capabilities for organizations.

As an open source cloud computing management platform, OpenStack consists of several major components, such as Nova, Cinder, Neutron, Glance, Keystone, and Horizon. OpenStack supports almost all cloud environments. The project aims to provide a cloud computing management platform that is easy-to-use, scalable, unified, and standardized. OpenStack provides an infrastructure as a service (IaaS) solution that combines complementary services, each of which provides an API for integration.

The third-party oepkg Yum source certified by openEuler 20.03 LTS SP2 supports OpenStack-Rocky. You can configure the oepkg Yum source and deploy OpenStack based on this document.

## Preparing the Environment

### Configuring OpenStack Yum Source

Configure third-party oepkg source that is certified by 20.03 LTS SP2. The following uses x86\_64 as an example.

```shell
$ cat << EOF >> /etc/yum.repos.d/OpenStack_Rocky.repo
[openstack_rocky]
name=OpenStack_Rocky
baseurl=https://repo.oepkgs.net/openEuler/rpm/openEuler-20.03-LTS-SP2/budding-openeuler/openstack/rocky/x86_64/
gpgcheck=0
enabled=1
EOF
```

```shell
$ yum clean all && yum makecache
```

### Configuring the Environment

Add controller information in `/etc/hosts`. For example, if the node IP address is `10.0.0.11`, add the following information:

```
10.0.0.11   controller
```

### Installing the SQL Database

1. Run the following command to install the software package:
   
   ```shell
   $ yum install mariadb mariadb-server python2-PyMySQL
   ```

2. Create a file named `/etc/my.cnf.d/openstack.cnf` and edit it.
   
   Copy the following content to the file (set **bind-address** to the management IP address of the controller node):
   
   ```ini
   [mysqld]
   bind-address = 10.0.0.11
   default-storage-engine = innodb
   innodb_file_per_table = on
   max_connections = 4096
   collation-server = utf8_general_ci
   character-set-server = utf8
   ```

3. Start the database service and enable it to automatically start upon system boot:
   
   ```shell
   $ systemctl enable mariadb.service
   $ systemctl start mariadb.service
   ```

### Installing RabbitMQ

1. Run the following command to install the software package:
   
   ```shell
   $ yum install rabbitmq-server
   ```

2. Start the RabbitMQ service and enable it to automatically start upon system boot.
   
   ```shell
   $ systemctl enable rabbitmq-server.service
   $ systemctl start rabbitmq-server.service
   ```

3. Add an OpenStack user.
   
   ```shell
   $ rabbitmqctl add_user openstack RABBIT_PASS
   ```

4. Replace **RABBIT\_PASS** with the password of the OpenStack user.

5. Run the following command to set the permission of the **openstack** user so that the user can perform configuration, write, and read operations:
   
   ```shell
   $ rabbitmqctl set_permissions openstack ".*" ".*" ".*"
   ```

### Installing Memcached

1. Run the following command to install the target software package:
   
   ```shell
   $ yum install memcached python2-memcached
   ```

2. Edit the `/etc/sysconfig/memcached` file and add the following content:
   
   ```shell
   OPTIONS="-l 127.0.0.1,::1,controller"
   ```
   
   Change the value of **OPTIONS** to the actual management IP address of the controller node.

3. Run the following command to start the Memcached service and enable it to automatically start upon system boot:
   
   ```shell
   $ systemctl enable memcached.service
   $ systemctl start memcached.service
   ```

## Installing OpenStack

### Installing Keystone

1. Log in to the database as the **root** user. Create the Keystone database, and grant permissions to the user.
   
   ```shell
   $ mysql -u root -p
   ```
   
   ```sql
   MariaDB [(none)]> CREATE DATABASE keystone;
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON keystone.* TO 'keystone'@'localhost' \
   IDENTIFIED BY 'KEYSTONE_DBPASS';
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON keystone.* TO 'keystone'@'%' \
   IDENTIFIED BY 'KEYSTONE_DBPASS';
   MariaDB [(none)]> exit
   ```
   
   Replace **KEYSTONE\_DBPASS** with the password of the Keystone database.

2. Run the following command to install the software package:
   
   ```shell
   $ yum install openstack-keystone httpd mod_wsgi
   ```

3. Edit the `/etc/keystone/keystone.conf` file to configure Keystone. In the **\[database]** section, configure the database entry. In the **\[token]** section, configure the token provider.
   
   ```ini
   [database]
   connection = mysql+pymysql://keystone:KEYSTONE_DBPASS@controller/keystone
   [token]
   provider = fernet
   ```
   
   Replace **KEYSTONE\_DBPASS** with the password of the Keystone database.

4. Run the following command to synchronize the database.
   
   ```shell
   su -s /bin/sh -c "keystone-manage db_sync" keystone
   ```

5. Run the following command to initialize the Fernet keystore:
   
   ```shell
   $ keystone-manage fernet_setup --keystone-user keystone --keystone-group keystone
   $ keystone-manage credential_setup --keystone-user keystone --keystone-group keystone
   ```

6. Run the following commands to enable the identity service:
   
   ```shell
   $ keystone-manage bootstrap --bootstrap-password ADMIN_PASS \
   --bootstrap-admin-url http://controller:5000/v3/ \
   --bootstrap-internal-url http://controller:5000/v3/ \
   --bootstrap-public-url http://controller:5000/v3/ \
   --bootstrap-region-id RegionOne
   ```
   
   Replace **ADMIN\_PASS** with the password of the **admin** user.

7. Edit the `/etc/httpd/conf/httpd.conf` file and configure the Apache HTTP server.
   
   ```shell
   $ vim /etc/httpd/conf/httpd.conf
   ```
   
   Enable **ServerName** to reference the controller node:
   
   ```
   ServerName controller
   ```
   
   If **ServerName** does not exist, create it.

8. Run the following command to create a link for the `/usr/share/keystone/wsgi-keystone.conf` file:
   
   ```shell
   $ ln -s /usr/share/keystone/wsgi-keystone.conf /etc/httpd/conf.d/
   ```

9. After the installation is complete, run the following command to start the Apache HTTP service:
   
   ```shell
   $ systemctl enable httpd.service
   $ systemctl start httpd.service
   ```

10. Install the OpenStack client.
    
    ```shell
    $ yum install python2-openstackclient
    ```

11. Create the environment script for the OpenStack client.
    
    Run the following command to create environment variable script for the **admin** user:
    
    ```shell
    # vim admin-openrc
    
    export OS_PROJECT_DOMAIN_NAME=Default
    export OS_USER_DOMAIN_NAME=Default
    export OS_PROJECT_NAME=admin
    export OS_USERNAME=admin
    export OS_PASSWORD=ADMIN_PASS
    export OS_AUTH_URL=http://controller:5000/v3
    export OS_IDENTITY_API_VERSION=3
    export OS_IMAGE_API_VERSION=2
    ```
    
    Replace **ADMIN\_PASS** with the password of user **admin** that is set in the preceding `keystone-manage bootstrap` command. Run the following script to load environment variables:
    
    ```shell
    $ source admin-openrc
    ```

12. Run the following commands to create the domains, projects, users, and roles:
    
    Create a domain named **example**.
    
    ```shell
    $ openstack domain create --description "An Example Domain" example
    ```
    
    Note: The domain **default** has been created in **keystone-manage bootstrap**.
    
    Create a project named **service**.
    
    ```shell
    $ openstack project create --domain default --description "Service Project" service
    ```
    
    Create a non-admin project named **myproject**, a user named **myuser**, and a role named **myrole**. Add the **myrole** role to **myproject** and **myuser**.
    
    ```shell
    $ openstack project create --domain default --description "Demo Project" myproject
    $ openstack user create --domain default --password-prompt myuser
    $ openstack role create myrole
    $ openstack role add --project myproject --user myuser myrole
    ```

13. Perform verification.
    
    Cancel the temporary environment variables **OS\_AUTH\_URL** and **OS\_PASSWORD**.
    
    ```shell
    $ unset OS_AUTH_URL OS_PASSWORD
    ```
    
    Request a token for the **admin** user:
    
    ```shell
    $ openstack --os-auth-url http://controller:5000/v3 \
    --os-project-domain-name Default --os-user-domain-name Default \
    --os-project-name admin --os-username admin token issue
    ```
    
    Request a token for the **myuser** user:
    
    ```shell
    $ openstack --os-auth-url http://controller:5000/v3 \
    --os-project-domain-name Default --os-user-domain-name Default \
    --os-project-name myproject --os-username myuser token issue
    ```

### Installing Glance

1. Create a database, service credentials, and API endpoints.
   
   Create a database.
   
   Log in to the database as the **root** user. Create the **glance** database and grant proper access to the **glance** database.
   
   ```shell
   $ mysql -u root -p
   ```
   
   ```sql
   MariaDB [(none)]> CREATE DATABASE glance;
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON glance.* TO 'glance'@'localhost' \
   IDENTIFIED BY 'GLANCE_DBPASS';
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON glance.* TO 'glance'@'%' \
   IDENTIFIED BY 'GLANCE_DBPASS';
   MariaDB [(none)]> exit
   ```
   
   Replace **GLANCE\_DBPASS** with the password of the **glance** database.
   
   ```shell
   $ source admin-openrc
   ```
   
   Run the following commands to create the **glance** service credential, create the **glance** user, and add the **admin** role to the **glance** user:
   
   ```shell
   $ openstack user create --domain default --password-prompt glance
   $ openstack role add --project service --user glance admin
   $ openstack service create --name glance --description "OpenStack Image" image
   ```
   
   Create API endpoints for the image service.
   
   ```shell
   $ openstack endpoint create --region RegionOne image public http://controller:9292
   $ openstack endpoint create --region RegionOne image internal http://controller:9292
   $ openstack endpoint create --region RegionOne image admin http://controller:9292
   ```

2. Perform the installation and configuration.
   
   Install the software package:
   
   ```shell
    $ yum install openstack-glance
   ```
   
   Configure Glance:
   
   Open the `/etc/glance/glance-api.conf` file.
   
   In the **\[database]** section, configure the database entry.
   
   In the **\[keystone\_authtoken]** and **\[paste\_deploy]** sections, configure the identity service entry.
   
   In the **\[glance\_store]** section, configure the local file system storage and the location where image files are stored.
   
   ```ini
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
   
   Open the `/etc/glance/glance-registry.conf` file.
   
   In the **\[database]** section, configure the database entry.
   
   In the **\[keystone\_authtoken]** and **\[paste\_deploy]** sections, configure the identity service entry.
   
   ```ini
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
   ```
   
   In the preceding command, replace **GLANCE\_DBPASS** with the password of the **glance** database, and replace **GLANCE\_PASS** with the password of the **glance** user.
   
   Synchronize the database:
   
   ```shell
    $ su -s /bin/sh -c "glance-manage db_sync" glance
   ```
   
   Run the following command to start the image service:
   
   ```shell
    $ systemctl enable openstack-glance-api.service openstack-glance-registry.service
    $ systemctl start openstack-glance-api.service openstack-glance-registry.service
   ```

3. Perform verification.
   
   Download the image.
   
   ```shell
    $ source admin-openrc
   #Note: If the Kunpeng architecture is used, download the image of the ARM64 version.
   $ wget http://download.cirros-cloud.net/0.4.0/cirros-0.4.0-x86_64-disk.img
   ```
   
   Upload the image to the image service.
   
   ```shell
   $ glance image-create --name "cirros" --file cirros-0.4.0-x86_64-disk.img --disk-format qcow2 --container-format bare --visibility=public
   ```
   
   Confirm the image upload and verify the attributes.
   
   ```shell
   $ glance image-list
   ```

### Installing Nova

1. Create a database, service credentials, and API endpoints.
   
   Create a database.
   
   Access the database as the **root** user. Create the **nova**, **nova\_api**, and **nova\_cell0** databases and grant permissions.
   
   ```shell
   $ mysql -u root -p
   ```
   
   ```SQL
   MariaDB [(none)]> CREATE DATABASE nova_api;
   MariaDB [(none)]> CREATE DATABASE nova;
   MariaDB [(none)]> CREATE DATABASE nova_cell0;
   MariaDB [(none)]> CREATE DATABASE placement;
   
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
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON placement.* TO 'placement'@'localhost' \
   IDENTIFIED BY 'PLACEMENT_DBPASS';
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON placement.* TO 'placement'@'%' \
   IDENTIFIED BY 'PLACEMENT_DBPASS';
   MariaDB [(none)]> exit
   ```
   
   Replace **NOVA\_DBPASS** and **PLACEMENT\_DBPASS** with the passwords for the Nova and Placement databases.
   
   Run the following commands to create Nova service credentials, create a **nova** user, and add the **admin** role to the **nova** user:
   
   ```shell
   $ . admin-openrc
   $ openstack user create --domain default --password-prompt nova
   $ openstack role add --project service --user nova admin
   $ openstack service create --name nova --description "OpenStack Compute" compute
   ```
   
   Create API endpoints for the computing service.
   
   ```shell
   $ openstack endpoint create --region RegionOne compute public http://controller:8774/v2.1
   $ openstack endpoint create --region RegionOne compute internal http://controller:8774/v2.1
   $ openstack endpoint create --region RegionOne compute admin http://controller:8774/v2.1
   ```
   
   Create the **placement** user and add the **admin** role to the **placement** user.
   
   ```shell
   $ openstack user create --domain default --password-prompt placement
   $ openstack role add --project service --user placement admin
   ```
   
   Create the **placement** service credential and API service endpoint.
   
   ```shell
   $ openstack service create --name placement --description "Placement API" placement
   $ openstack endpoint create --region RegionOne placement public http://controller:8778
   $ openstack endpoint create --region RegionOne placement internal http://controller:8778
   $ openstack endpoint create --region RegionOne placement admin http://controller:8778
   ```

2. Perform the installation and configuration.
   
   Install the software package:
   
   ```shell
   $ yum install openstack-nova-api openstack-nova-conductor \
     openstack-nova-novncproxy openstack-nova-scheduler openstack-nova-compute \
     openstack-nova-placement-api openstack-nova-console
   ```
   
   Configure Nova:
   
   Open the `/etc/nova/nova.conf` file.
   
   In the **\[DEFAULT]** section, enable the computing and metadata APIs, configure the RabbitMQ message queue entrance, configure **my\_ip**, and enable the network service Neutron.
   
   In the **\[api\_database]**, **\[database]**, and **\[placement\_database]** sections, configure the database entry.
   
   In the **\[api]** and **\[keystone\_authtoken]** sections, configure the identity service entry.
   
   In the **\[vnc]** section, enable and configure the entry for the remote console.
   
   In the **\[glance]** section, configure the API address for the image service.
   
   In the **\[oslo\_concurrency]** section, configure the lock path.
   
   In the **\[placement]** section, configure the entry of the Placement service.
   
   ```ini
   [DEFAULT]
   # ...
   enabled_apis = osapi_compute,metadata
   transport_url = rabbit://openstack:RABBIT_PASS@controller:5672/
   my_ip = 10.0.0.11
   use_neutron = true
   firewall_driver = nova.virt.firewall.NoopFirewallDriver
   compute_driver = libvirt.LibvirtDriver
   instances_path = /var/lib/nova/instances/
   [api_database]
   # ...
   connection = mysql+pymysql://nova:NOVA_DBPASS@controller/nova_api
   [database]
   # ...
   connection = mysql+pymysql://nova:NOVA_DBPASS@controller/nova
   [placement_database]
   # ...
   connection = mysql+pymysql://placement:PLACEMENT_DBPASS@controller/placement
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
   project_domain_name = Default
   user_domain_name = Default
   region_name = RegionOne
   project_name = service
   username = neutron
   password = NEUTRON_PASS
   ```
   
   Replace **RABBIT\_PASS** with the password of the **openstack** user in RabbitMQ.
   
   Set **my\_ip** to the management IP address of the controller node.
   
   Replace **NOVA\_DBPASS** with the password of the **nova** database.
   
   Replace **PLACEMENT\_DBPASS** with the password of the Placement database.
   
   Replace **NOVA\_PASS** with the password of the **nova** user.
   
   Replace **PLACEMENT\_PASS** with the password of the **placement** user.
   
   Replace **NEUTRON\_PASS** with the password of the **neutron** user.
   
   Open `/etc/httpd/conf.d/00-nova-placement-api.conf` and add the Placement API access configuration.
   
   ```xml
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
   $ systemctl restart httpd
   ```
   
   Run the following command to synchronize the **nova-api** database:
   
   ```shell
   $ su -s /bin/sh -c "nova-manage api_db sync" nova
   ```
   
   Run the following command to register the **cell0** database:
   
   ```shell
   $ su -s /bin/sh -c "nova-manage cell_v2 map_cell0" nova
   ```
   
   Create the **cell1** cell:
   
   ```shell
   $ su -s /bin/sh -c "nova-manage cell_v2 create_cell --name=cell1 --verbose" nova
   ```
   
   Synchronize the **nova** database:
   
   ```shell
   $ su -s /bin/sh -c "nova-manage db sync" nova
   ```
   
   Verify whether **cell0** and **cell1** are correctly registered:
   
   ```shell
   su -s /bin/sh -c "nova-manage cell_v2 list_cells" nova
   ```
   
   Check whether VM hardware acceleration (x86 architecture) is supported:
   
   ```shell
   $ egrep -c '(vmx|svm)' /proc/cpuinfo
   ```
   
   If the returned value is **0**, hardware acceleration is not supported. You need to configure libvirt to use QEMU instead of KVM. **Notes:** For an ARM64 server, set `cpu_mode` to `custom`, `cpu_model` to `cortex-a72`.
   
   ```ini
   # vim /etc/nova/nova.conf
   [libvirt]
   # ...
   virt_type = qemu
   cpu_mode = custom
   cpu_model = cortex-a72
   ```
   
   If the returned value is **1** or a larger value, hardware acceleration is supported, and no extra configuration is required.
   
   ***Notice***
   
   **If the ARM64 structure is used, run the following command on the `compute` node:**
   
   ```shell
   mkdir -p /usr/share/AAVMF
   ln -s /usr/share/edk2/aarch64/QEMU_EFI-pflash.raw \
         /usr/share/AAVMF/AAVMF_CODE.fd
   ln -s /usr/share/edk2/aarch64/vars-template-pflash.raw \
         /usr/share/AAVMF/AAVMF_VARS.fd
   chown nova:nova /usr/share/AAVMF -R
   
   vim /etc/libvirt/qemu.conf
   
   nvram = ["/usr/share/AAVMF/AAVMF_CODE.fd:/usr/share/AAVMF/AAVMF_VARS.fd",
        "/usr/share/edk2/aarch64/QEMU_EFI-pflash.raw:/usr/share/edk2/aarch64/vars-template-pflash.raw"
   ]
   ```
   
   Start the computing service and its dependencies, and enable the service to start automatically upon system boot.
   
   ```shell
   $ systemctl enable \
   openstack-nova-api.service \
   openstack-nova-scheduler.service \
   openstack-nova-conductor.service \
   openstack-nova-novncproxy.service
   $ systemctl start \
   openstack-nova-api.service \
   openstack-nova-scheduler.service \
   openstack-nova-conductor.service \
   openstack-nova-novncproxy.service
   ```
   
   ```bash
   $ systemctl enable libvirtd.service openstack-nova-compute.service
   $ systemctl start libvirtd.service openstack-nova-compute.service
   ```
   
   Add the compute nodes to the **cell** database:
   
   Check whether the compute node exists:
   
   ```bash
   $ . admin-openrc
   $ openstack compute service list --service nova-compute
   ```
   
   Register a compute node:
   
   ```bash
   $ su -s /bin/sh -c "nova-manage cell_v2 discover_hosts --verbose" nova
   ```

3. Perform verification.
   
   ```shell
   $ . admin-openrc
   ```
   
   List service components to verify that each process is successfully started and registered.
   
   ```shell
   $ openstack compute service list
   ```
   
   List the API endpoints in the identity service and verify the connection to the identity service.
   
   ```shell
   $ openstack catalog list
   ```
   
   List the images in the image service and verify the connections:
   
   ```shell
   $ openstack image list
   ```
   
   Check whether the cells and placement APIs are running properly and whether other prerequisites are met.
   
   ```shell
   $ nova-status upgrade check
   ```

### Installing Neutron

1. Create a database, service credentials, and API endpoints.
   
   Create a database.
   
   Access the database as the **root** user, create the **neutron** database, and grant permissions.
   
   ```shell
   $ mysql -u root -p
   ```
   
   ```sql
   MariaDB [(none)]> CREATE DATABASE neutron;
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON neutron.* TO 'neutron'@'localhost' \
   IDENTIFIED BY 'NEUTRON_DBPASS';
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON neutron.* TO 'neutron'@'%' \
   IDENTIFIED BY 'NEUTRON_DBPASS';
   MariaDB [(none)]> exit
   ```
   
   Replace **NEUTRON\_DBPASS** with the password of the **neutron** database.
   
   ```shell
   $ . admin-openrc
   ```
   
   Run the following commands to create the **neutron** service credential, create the **neutron** user, and add the **admin** role to the **neutron** user:
   
   Create the **neutron** service credential.
   
   ```shell
   $ openstack user create --domain default --password-prompt neutron
   $ openstack role add --project service --user neutron admin
   $ openstack service create --name neutron --description "OpenStack Networking" network
   ```
   
   Create API endpoints of the network services.
   
   ```shell
   $ openstack endpoint create --region RegionOne network public http://controller:9696
   $ openstack endpoint create --region RegionOne network internal http://controller:9696
   $ openstack endpoint create --region RegionOne network admin http://controller:9696
   ```

2. Install and configure the self-service network.
   
   Install the software package:
   
   ```shell
   $ yum install openstack-neutron openstack-neutron-ml2 \
   openstack-neutron-linuxbridge ebtables ipset
   ```
   
   Configure Neutron:
   
   Edit the **/etc/neutron/neutron.conf** file:
   
   In the **\[database]** section, configure the database entry.
   
   In the **\[default]** section, enable the ML2 and router plug-ins. Allow IP address overlapping, and configure the RabbitMQ message queue entry.
   
   In the **\[default]** and **\[keystone]** sections, configure the identity service entry.
   
   In the **\[default]** and **\[nova]** sections, enable the network to notify the change of the computing network topology.
   
   In the **\[oslo\_concurrency]** section, configure the lock path.
   
   ```ini
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
   project_domain_name = Default
   user_domain_name = Default
   project_name = service
   username = neutron
   password = NEUTRON_PASS
   [nova]
   # ...
   auth_url = http://controller:5000
   auth_type = password
   project_domain_name = Default
   user_domain_name = Default
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
   
   ```ini
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
   
   ```ini
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
   
   ```ini
   [DEFAULT]
   # ...
   interface_driver = linuxbridge
   ```
   
   Configures the DHCP agent:
   
   Edit the **/etc/neutron/dhcp\_agent.ini** file.
   
   In the **\[default]** section, configure the Linux bridge API driver and Dnsmasq DHCP driver. Enable the isolated metadata.
   
   ```ini
   [DEFAULT]
   # ...
   interface_driver = linuxbridge
   dhcp_driver = neutron.agent.linux.dhcp.Dnsmasq
   enable_isolated_metadata = true
   ```
   
   Configure the metadata proxy.
   
   Edit the **/etc/neutron/metadata\_agent.ini** file.
   
   In the **\[default]**, configure the metadata host and shared secret.
   
   ```ini
   [DEFAULT]
   # ...
   nova_metadata_host = controller
   metadata_proxy_shared_secret = METADATA_SECRET
   ```
   
   Replace **METADATA\_SECRET** with a proper metadata agent secret.

3. Configure the computing service.
   
   Edit the **/etc/nova/nova.conf** file.
   
   In the **\[neutron]** section, configure access parameters, enable the metadata proxy, and configure secret.
   
   ```ini
   [neutron]
   # ...
   auth_url = http://controller:5000
   auth_type = password
   project_domain_name = Default
   user_domain_name = Default
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
   
   Add the link for the configuration file:
   
   ```shell
   $ ln -s /etc/neutron/plugins/ml2/ml2_conf.ini /etc/neutron/plugin.ini
   ```
   
   Synchronize the database:
   
   ```shell
   $ su -s /bin/sh -c "neutron-db-manage --config-file /etc/neutron/neutron.conf \
   --config-file /etc/neutron/plugins/ml2/ml2_conf.ini upgrade head" neutron
   ```
   
   Run the following command to restart the computing API service:
   
   ```shell
   $ systemctl restart openstack-nova-api.service
   ```
   
   Start the network service and enable the service to start automatically upon system boot.
   
   ```shell
   $ systemctl enable neutron-server.service \
   neutron-linuxbridge-agent.service neutron-dhcp-agent.service \
   neutron-metadata-agent.service
   $ systemctl start neutron-server.service \
   neutron-linuxbridge-agent.service neutron-dhcp-agent.service \
   neutron-metadata-agent.service
   $ systemctl enable neutron-l3-agent.service
   $ systemctl start neutron-l3-agent.service
   ```

5. Perform verification.
   
   Run the following command to list the neutron agents:
   
   ```shell
   $ openstack network agent list
   ```

### Installing Cinder

1. Create a database, service credentials, and API endpoints.
   
   Create a database.
   
   Access the database as the **root** user. Create the **cinder** database, and grant permissions.
   
   ```shell
   $ mysql -u root -p
   MariaDB [(none)]> CREATE DATABASE cinder;
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON cinder.* TO 'cinder'@'localhost' \
   IDENTIFIED BY 'CINDER_DBPASS';
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON cinder.* TO 'cinder'@'%' \
   IDENTIFIED BY 'CINDER_DBPASS';
   MariaDB [(none)]> exit
   ```
   
   Replace **CINDER\_DBPASS** with the password for the **cinder** database.
   
   ```shell
   $ source admin-openrc
   ```
   
   Create Cinder service credentials:
   
   Create the **cinder** user.
   
   Add the **admin** role to the **cinder** user.
   
   Create the **cinderv2** and **cinderv3** services.
   
   ```shell
   $ openstack user create --domain default --password-prompt cinder
   $ openstack role add --project service --user cinder admin
   $ openstack service create --name cinderv2 --description "OpenStack Block Storage" volumev2
   $ openstack service create --name cinderv3 --description "OpenStack Block Storage" volumev3
   ```
   
   Create API endpoints for the block storage service.
   
   ```shell
   $ openstack endpoint create --region RegionOne volumev2 public http://controller:8776/v2/%\(project_id\)s
   $ openstack endpoint create --region RegionOne volumev2 internal http://controller:8776/v2/%\(project_id\)s
   $ openstack endpoint create --region RegionOne volumev2 admin http://controller:8776/v2/%\(project_id\)s
   $ openstack endpoint create --region RegionOne volumev3 public http://controller:8776/v3/%\(project_id\)s
   $ openstack endpoint create --region RegionOne volumev3 internal http://controller:8776/v3/%\(project_id\)s
   $ openstack endpoint create --region RegionOne volumev3 admin http://controller:8776/v3/%\(project_id\)s
   ```

2. Install and configure the controller node.
   
   Install the software package:
   
   ```shell
   $ yum install openstack-cinder
   ```
   
   Configure Cinder:
   
   Open the `/etc/cinder/cinder.conf` file.
   
   In the **\[database]** section, configure the database entry.
   
   In the **\[DEFAULT]** section, configure the RabbitMQ message queue entry and **my\_ip**.
   
   In the **\[DEFAULT]** and **\[keystone\_authtoken]** sections, configure the identity service entry.
   
   In the **\[oslo\_concurrency]** section, configure the lock path.
   
   ```ini
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
   project_domain_name = Default
   user_domain_name = Default
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
   
   ```shell
   $ su -s /bin/sh -c "cinder-manage db sync" cinder
   ```
   
   Configure the block storage for the compute nodes.
   
   Edit the **/etc/nova/nova.conf** file.
   
   ```ini
   [cinder]
   os_region_name = RegionOne
   ```
   
   Complete the installation.
   
   Restart the computing API service.
   
   ```shell
   $ systemctl restart openstack-nova-api.service
   ```
   
   Start the block storage service.
   
   ```shell
   $ systemctl enable openstack-cinder-api.service openstack-cinder-scheduler.service
   $ systemctl start openstack-cinder-api.service openstack-cinder-scheduler.service
   ```

3. Install and configure the storage node (LVM).
   
   Install the software package:
   
   ```shell
   $ yum install lvm2 device-mapper-persistent-data scsi-target-utils python2-keystone \
   openstack-cinder-volume
   ```
   
   Create the LVM physical volume **/dev/sdb**.
   
   ```shell
   $ pvcreate /dev/sdb
   ```
   
   Create the LVM volume group **cinder-volumes**.
   
   ```shell
   $ vgcreate cinder-volumes /dev/sdb
   ```
   
   Edit the **/etc/lvm/lvm.conf** file.
   
   In the **devices** section, add filtering to allow the **/dev/sdb** device to reject other devices.
   
   ```ini
   devices {
   
   # ...
   
   filter = [ "a/sdb/", "r/.*/"]
   ```
   
   Open the `/etc/cinder/cinder.conf` file.
   
   In the **\[lvm]** section, configure the LVM backend using the LVM driver, cinder-volumes volume group, iSCSI protocol, and appropriate iSCSI services.
   
   In the **\[DEFAULT]** section, enable the LVM backend and configure the location of the API of the image service.
   
   ```ini
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
   
   ***Notice***
   
   If Cinder uses tgtadm to attach volumes, modify **/etc/tgt/tgtd.conf** to ensure that tgtd can discover the iSCSI target of the cinder-volume.
   
   ```
   include /var/lib/cinder/volumes/*
   ```
   
   Complete the installation.
   
   ```shell
   $ systemctl enable openstack-cinder-volume.service tgtd.service iscsid.service
   $ systemctl start openstack-cinder-volume.service tgtd.service iscsid.service
   ```

4. Install and configure a storage node (ceph RBD).
   
   Install the software package:
   
   ```shell
   $ yum install ceph-common python2-rados python2-rbd python2-keystone openstack-cinder-volume
   ```
   
   In the **\[DEFAULT]** section, enable the LVM backend and configure the location of the API of the image service.
   
   ```ini
   [DEFAULT]
   enabled_backends = ceph-rbd
   ```
   
   Add the ceph rbd configuration. The configuration block name is the same as that in **enabled\_backends**.
   
   ```ini
   [ceph-rbd]
   glance_api_version = 2
   rados_connect_timeout = -1
   rbd_ceph_conf = /etc/ceph/ceph.conf
   rbd_flatten_volume_from_snapshot = False
   rbd_max_clone_depth = 5
   rbd_pool = <RBD_POOL_NAME>  # RBD storage pool name.
   rbd_secret_uuid = <rbd_secret_uuid> # Randomly generate a secret UUID.
   rbd_store_chunk_size = 4
   rbd_user = <RBD_USER_NAME>
   volume_backend_name = ceph-rbd
   volume_driver = cinder.volume.drivers.rbd.RBDDriver
   ```
   
   Configure the ceph client on the storage node. Ensure that the **/etc/ceph/** directory contains the ceph cluster access configuration, including **ceph.conf** and **keyring**.
   
   ```shell
   [root@openeuler ~]# ll /etc/ceph
   -rw-r--r-- 1 root root   82 Jun 16 17:11 ceph.client.<rbd_user>.keyring
   -rw-r--r-- 1 root root 1.5K Jun 16 17:11 ceph.conf
   -rw-r--r-- 1 root root   92 Jun 16 17:11 rbdmap
   ```
   
   Check whether the ceph cluster is accessible on the storage node.
   
   ```shell
   [root@openeuler ~]# ceph --user cinder -s
     cluster:
       id:     b7b2fac6-420f-4ec1-aea2-4862d29b4059
       health: HEALTH_OK
   
     services:
       mon: 3 daemons, quorum VIRT01,VIRT02,VIRT03
       mgr: VIRT03(active), standbys: VIRT02, VIRT01
       mds: cephfs_virt-1/1/1 up  {0=VIRT03=up:active}, 2 up:standby
       osd: 15 osds: 15 up, 15 in
   
     data:
       pools:   7 pools, 1416 pgs
       objects: 5.41M objects, 19.8TiB
       usage:   49.3TiB used, 59.9TiB / 109TiB avail
       pgs:     1414 active
   
     io:
       client:   2.73MiB/s rd, 22.4MiB/s wr, 3.21kop/s rd, 1.19kop/s wr
   ```
   
   Start the service.
   
   ```shell
   $ systemctl enable openstack-cinder-volume.service
   $ systemctl start openstack-cinder-volume.service
   ```

5. Install and configure the backup service.
   
   Edit the **/etc/cinder/cinder.conf** file.
   
   In the **\[DEFAULT]** section, configure the backup options.
   
   ```ini
   [DEFAULT]
   # ...
   # Note: openEuler 21.03 does not provide the OpenStack Swift software package. You need to install it by yourself, or use another backup backend, such as NFS. The NFS has been tested and can be used properly.
   backup_driver = cinder.backup.drivers.swift.SwiftBackupDriver
   backup_swift_url = SWIFT_URL
   ```
   
   Replace **SWIFT\_URL** with the URL of the object storage service. The URL can be found through the object storage API endpoint.
   
   ```shell
   $ openstack catalog show object-store
   ```
   
   Complete the installation.
   
   ```shell
   $ systemctl enable openstack-cinder-backup.service
   $ systemctl start openstack-cinder-backup.service
   ```

6. Perform verification.
   
   List service components and verify that each step is successful.
   
   ```shell
   $ source admin-openrc
   $ openstack volume service list
   ```
   
   Note: Currently, the Swift component is not supported. If possible, you can configure the interconnection with Ceph.

### Installing Horizon

1. Installing Software Packages
   
   ```shell
   $ yum install openstack-dashboard
   ```

2. Open the `/usr/share/openstack-dashboard/openstack_dashboard/local/local_settings.py` file.
   
   Modify the variables.
   
   ```ini
   ALLOWED_HOSTS = ['*', ]
   OPENSTACK_HOST = "controller"
   OPENSTACK_KEYSTONE_URL = "http://%s:5000/v3" % OPENSTACK_HOST
   OPENSTACK_KEYSTONE_MULTIDOMAIN_SUPPORT = True
   SESSION_ENGINE = 'django.contrib.sessions.backends.cache'
   CACHES = {
       'default': {
            'BACKEND': 'django.core.cache.backends.memcached.MemcachedCache',
            'LOCATION': 'controller:11211',
       }
   }
   ```
   
   Add the variables.
   
   ```ini
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

3. Modify the **/etc/httpd/conf.d/openstack-dashboard.conf** file.
   
   ```xml
   WSGIDaemonProcess dashboard
   WSGIProcessGroup dashboard
   WSGISocketPrefix run/wsgi
   WSGIApplicationGroup %{GLOBAL}
   
   WSGIScriptAlias /dashboard /usr/share/openstack-dashboard/openstack_dashboard/wsgi/django.wsgi
   Alias /dashboard/static /usr/share/openstack-dashboard/static
   
   <Directory /usr/share/openstack-dashboard/openstack_dashboard/wsgi>
     Options All
     AllowOverride All
     Require all granted
   </Directory>
   
   <Directory /usr/share/openstack-dashboard/static>
     Options All
     AllowOverride All
     Require all granted
   </Directory>
   ```

4. Run the following command in the **/usr/share/openstack-dashboard** directory:
   
   ```shell
   $ ./manage.py compress
   ```

5. Restart the httpd service.
   
   ```shell
   $ systemctl restart httpd
   ```

6. Open a browser and enter **http://***\<host\_ip>* in the address box to log in to Horizon.

### Installing Tempest

Tempest is an integration test service of OpenStack. You are advised to use Tempest if you need to fully and automatically test the functions of the installed OpenStack environment. Otherwise, the installation is not required.

1. Installing Tempest
   
   ```shell
   $ yum install openstack-tempest
   ```

2. Initializing the Directories
   
   ```shell
   $ tempest init mytest
   ```

3. Modify the configuration file.
   
   ```shell
   $ cd mytest
   $ vi etc/tempest.conf
   ```
   
   Information about the current OpenStack environment needs to be configured in the **tempest.conf** file. For details, see the [Sample Configuration File](https://docs.openstack.org/tempest/latest/sampleconf.html).

4. Performing the Test
   
   ```shell
   $ tempest run
   ```

### Installing Ironic

Ironic is the bare metal service of OpenStack. You are advised to use Ironic if you need to deploy a bare metal server. Otherwise, the installation is not required.

1. Set the database.
   
   The bare metal service stores information in the database. Create an Ironic database that can be accessed by the **ironic** user and replace **Ironic\_DBPASSWORD** with a proper password.
   
   ```shell
   $ mysql -u root -p 
   ```
   
   ```sql
   MariaDB [(none)]> CREATE DATABASE ironic CHARACTER SET utf8; 
   
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON ironic.* TO 'ironic'@'localhost' \     
   IDENTIFIED BY 'IRONIC_DBPASSWORD'; 
   
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON ironic.* TO 'ironic'@'%' \     
   IDENTIFIED BY 'IRONIC_DBPASSWORD';
   ```

2. Install and configure components.
   
   ##### Create the service user and perform verification.
   
   1\. Create the bare metal service users.
   
   ```shell
   $ openstack user create --password IRONIC_PASSWORD \ 
   --email ironic@example.com ironic 
   $ openstack role add --project service --user ironic admin 
   $ openstack service create --name ironic --description \ 
   "Ironic baremetal provisioning service" baremetal 
   
   $ openstack service create --name ironic-inspector --description     "Ironic inspector baremetal provisioning service" baremetal-introspection 
   $ openstack user create --password IRONIC_INSPECTOR_PASSWORD --email ironic_inspector@example.com ironic_inspector 
   $ openstack role add --project service --user ironic-inspector admin
   ```
   
   2\. Create the bare metal service access portals.
   
   ```shell
   $ openstack endpoint create --region RegionOne baremetal admin http://$IRONIC_NODE:6385 
   $ openstack endpoint create --region RegionOne baremetal public http://$IRONIC_NODE:6385 
   $ openstack endpoint create --region RegionOne baremetal internal http://$IRONIC_NODE:6385 
   $ openstack endpoint create --region RegionOne baremetal-introspection internal http://$IRONIC_NODE:5050/v1 
   $ openstack endpoint create --region RegionOne baremetal-introspection public http://$IRONIC_NODE:5050/v1 
   $ openstack endpoint create --region RegionOne baremetal-introspection admin http://$IRONIC_NODE:5050/v1
   ```
   
   ##### Configuring the ironic-api Service
   
   Configuration file path: **/etc/ironic/ironic.conf**
   
   1\. Set **connection** to the database location, as shown in the following example. Replace **IRONIC\_DBPASSWORD** with the password of the **ironic** user and **DB\_IP** with the IP address of the database server.
   
   ```ini
   [database] 
   
   # The SQLAlchemy connection string used to connect to the 
   # database (string value) 
   
   connection = mysql+pymysql://ironic:IRONIC_DBPASSWORD@DB_IP/ironic
   ```
   
   2\. Configure the ironic-api service to use the RabbitMQ message broker and replace **RPC\_***\** with the address and credential of RabbitMQ.
   
   ```ini
   [DEFAULT] 
   
   # A URL representing the messaging driver to use and its full 
   # configuration. (string value) 
   
   transport_url = rabbit://RPC_USER:RPC_PASSWORD@RPC_HOST:RPC_PORT/
   ```
   
   You can also use JSON-RPC to replace RabbitMQ.
   
   3\. Configure the credential for the ironic-api service to use the identity service. Replace **PUBLIC\_IDENTITY\_IP** with the public IP address of the identity server, and replace **PRIVATE\_IDENTITY\_IP** with the private IP address of the identity server. Replace **Ironic\_PASSWORD** with the password of user **ironic** in the identity service.
   
   ```ini
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
   $ ironic-dbsync --config-file /etc/ironic/ironic.conf create_schema
   ```
   
   5\. Restart the ironic-api service.
   
   ```shell
   $ systemctl restart openstack-ironic-api
   ```
   
   ##### Configuring the ironic-conductor Service
   
   1\. Replace **HOST\_IP** with the IP address of the conductor host.
   
   ```ini
   [DEFAULT] 
   
   # IP address of this host. If unset, will determine the IP 
   # programmatically. If unable to do so, will use "127.0.0.1". 
   # (string value) 
   
   my_ip=HOST_IP
   ```
   
   2\. Configure the database location. The configuration of ironic-conductor must be the same as that of ironic-api. Replace **IRONIC\_DBPASSWORD** with the password of the **ironic** user and **DB\_IP** with the IP address of the database server.
   
   ```ini
   [database] 
   
   # The SQLAlchemy connection string to use to connect to the 
   # database. (string value) 
   
   connection = mysql+pymysql://ironic:IRONIC_DBPASSWORD@DB_IP/ironic
   ```
   
   3\. Configure the ironic-api service to use the RabbitMQ. The configuration of ironic-conductor service must be the same as that of ironic-api. Replace **RPC\_***\** with the address and credential of RabbitMQ.
   
   ```ini
   [DEFAULT] 
   
   # A URL representing the messaging driver to use and its full 
   # configuration. (string value) 
   
   transport_url = rabbit://RPC_USER:RPC_PASSWORD@RPC_HOST:RPC_PORT/
   ```
   
   You can also use JSON-RPC to replace RabbitMQ.
   
   4\. Configure credentials to access other OpenStack services.
   
   To communicate with other OpenStack services, the service user need to use the OpenStack Identity service for authentication when the bare metal service requests other services. The credentials for these users must be configured in each configuration file associated with the respective service.
   
   **\[neutron]** - Access the OpenStack network service.  
**\[glance]** - Access the OpenStack image service.  
**\[swift]** - Access the OpenStack object storage service.  
**\[cinder]** - Access the OpenStack block storage service.  
**\[inspector]** - Access the introspection service of OpenStack bare metal service.  
**\[service\_catalog]** - A special item used to store the credentials used by the bare metal service to discover its own API URL endpoints registered in the OpenStack identity service catalog.
   
   For simplicity, you can use the same service user for all services. For backward compatibility, this user must be the same as that configured in **\[keystone\_authtoken]** of the ironic-api service. This is not mandatory. You can create and configure different service users for each service.
   
   In the following example, the configuration for the authentication information for users to access the OpenStack network service is:
   
   Network services are deployed in the identity service domain named "RegionOne". Only public endpoint APIs are registered in the service catalog.
   
   A specific CA SSL certificate is used for HTTPS connection when requested.
   
   The same service user with ironic-api service is configured.
   
   The dynamic password authentication plug-in discovers the appropriate version of the authentication service API based on other options.
   
   ```ini
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
   
   By default, to communicate with other services, the bare metal service attempts to discover the appropriate endpoint of the service through the service catalog of the authentication service. If you want to use a different endpoint for a specific service, specify the **endpoint\_override** option in the bare metal service configuration file.
   
   ```ini
   [neutron] 
   # ...
   endpoint_override = <NEUTRON_API_ADDRESS>
   ```
   
   5\. Configure allowed drivers and hardware types.
   
   Configure **enabled\_hardware\_types** to set the hardware types allowed by the ironic-conductor service.
   
   ```ini
   [DEFAULT] 
   enabled_hardware_types = ipmi 
   ```
   
   Configure the hardware API.
   
   ```ini
   enabled_boot_interfaces = pxe
   enabled_deploy_interfaces = direct,iscsi
   enabled_inspect_interfaces = inspector
   enabled_management_interfaces = ipmitool
   enabled_power_interfaces = ipmitool
   ```
   
   Configure API default values.
   
   ```ini
   [DEFAULT]
   default_deploy_interface = direct
   default_network_interface = neutron
   ```
   
   If any driver that uses Direct Deploy is enabled, you must install and configure the Swift backend of the image service. The Ceph object gateway (RADOS gateway) is also supported as a backend for the image service.
   
   6\. Restart the ironic-conductor service.
   
   ```shell
   $ systemctl restart openstack-ironic-conductor
   ```
   
   ##### Configure the ironic-inspector service.
   
   Configuration file path: `/etc/ironic-inspector/inspector.conf`.
   
   1\. Create a database.
   
   ```shell
   $ mysql -u root -p 
   ```
   
   ```sql
   MariaDB [(none)]> CREATE DATABASE ironic_inspector CHARACTER SET utf8; 
   
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON ironic_inspector.* TO 'ironic_inspector'@'localhost' \     IDENTIFIED BY 'IRONIC_INSPECTOR_DBPASSWORD'; 
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON ironic_inspector.* TO 'ironic_inspector'@'%' \     
   IDENTIFIED BY 'IRONIC_INSPECTOR_DBPASSWORD';
   ```
   
   2\. Set **connection** to the database location, as shown in the following example. Replace **IRONIC\_INSPECTOR\_DBPASSWORD** with the password of the **ironic\_inspector** user and **DB\_IP** with the IP address of the database server.
   
   ```ini
   [database] 
   backend = sqlalchemy 
   connection = mysql+pymysql://ironic_inspector:IRONIC_INSPECTOR_DBPASSWORD@DB_IP/ironic_inspector
   ```
   
   3\. Configure the communication address of the message queue.
   
   ```ini
   [DEFAULT]
   transport_url = rabbit://RPC_USER:RPC_PASSWORD@RPC_HOST:RPC_PORT/
   ```
   
   4\. Configure Keystone authentication.
   
   ```ini
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
   
   5\. Configure the ironic inspector dnsmasq service.
   
   ```ini
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
   $ systemctl enable --now openstack-ironic-inspector.service 
   $ systemctl enable --now openstack-ironic-inspector-dnsmasq.service
   ```

3. Create a deploy
   
   Currently, ramdisk images can be created using ironic python agent builder. This section describes how to use this tool to build deploy images used by ironic. 
   
   ##### Installing ironic-python-agent-builder
   
   2. Install the tool.
      
      ```shell
      $ pip install ironic-python-agent-builder
      ```
   
   3. Modify the Python interpreter in the following file:
      
      ```shell
      $ /usr/bin/yum /usr/libexec/urlgrabber-ext-down
      ```
   
   4. Install other necessary tools.
      
      ```shell
      $ yum install git
      ```
      
      `DIB` depends on `semanage`. Before creating an image, check whether the `semanage --help` command is available. If no such command is displayed, it.
      
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
      #Install.
      [root@localhost ~]# yum install policycoreutils-python
      ```
   
   ##### Creating the Image
   
   If the `aarch64` architecture is used, add the following information:
   
   ```shell
   $ export ARCH=aarch64
   ```
   
   ###### Common Image
   
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
   
   Examples:
   
   ```shell
   $ ironic-python-agent-builder centos -o /mnt/ironic-agent-ssh -b origin/stable/rocky
   ```
   
   ###### Allowing SSH Login
   
   Initialize environment variables and create an image.
   
   ```shell
   $ export DIB_DEV_USER_USERNAME=ipa \
   $ export DIB_DEV_USER_PWDLESS_SUDO=yes \
   $ export DIB_DEV_USER_PASSWORD='123'
   $ ironic-python-agent-builder centos -o /mnt/ironic-agent-ssh -b origin/stable/rocky -e selinux-permissive -e devuser
   ```
   
   ###### Specifying the Code Repositories
   
   Initialize the corresponding environment variables and create an image.
   
   ```ini
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

```shell
$ yum install openstack-kolla openstack-kolla-ansible
```

After the installation, you can use commands including `kolla-ansible`, `kolla-build`, `kolla-genpwd` and `kolla-mergepwd`.

### Installing Trove

Trove is a database service provided by OpenStack. You are advised to use Trove if you use the database service provided by OpenStack. Otherwise, the installation is not required.

1. Set the database.
   
   The database service stores information in the database. Create a **trove** user to access the **trove** database. Replace **TROVE\_DBPASSWORD** with the corresponding password.
   
   ```shell
   $ mysql -u root -p
   ```
   
   ```sql
   MariaDB [(none)]> CREATE DATABASE trove CHARACTER SET utf8;
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON trove.* TO 'trove'@'localhost' \
   IDENTIFIED BY 'TROVE_DBPASSWORD';
   MariaDB [(none)]> GRANT ALL PRIVILEGES ON trove.* TO 'trove'@'%' \
   IDENTIFIED BY 'TROVE_DBPASSWORD';
   ```

2. Create the service user and perform verification.
   
   1\. Create a Trove service user.
   
   ```shell
   $ openstack user create --password TROVE_PASSWORD \
                         --email trove@example.com trove
   $ openstack role add --project service --user trove admin
   $ openstack service create --name trove
                            --description "Database service" database
   ```
   
   **Note:** Replace `TROVE_PASSWORD` with the password of the `trove` user.
   
   2\. Create the database service access .
   
   ```shell
   $ openstack endpoint create --region RegionOne database public http://$TROVE_NODE:8779/v1.0/%\(tenant_id\)s
   $ openstack endpoint create --region RegionOne database internal http://$TROVE_NODE:8779/v1.0/%\(tenant_id\)s
   $ openstack endpoint create --region RegionOne database admin http://$TROVE_NODE:8779/v1.0/%\(tenant_id\)s
   ```
   
   **Note:** Replace `$TROVE_NODE` with the API service deployment node of the Trove.

3. Install and configure Trove components.
   
   1\. Install the Trove package.
   
   ```shell
   $ yum install openstack-trove python-troveclient
   ```
   
   2\. Configure `/etc/trove/trove.conf`.
   
   ```ini
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
   project_domain_name = Default
   user_domain_name = Default
   project_name = service
   username = trove
   password = TROVE_PASS
   
   ```
   
   **Note:**
   
   - Set `bind_host` of the `[Default]` group to the IP address of the Trove node.
   - `nova_compute_url` and `cinder_url` are the endpoints created in Keystone by Nova and Cinder.
   - `nova_proxy_XXX` shows the information about a user who can access the Nova service. In the preceding example, the `admin` user is used as an example.
   - `transport_url` is the connection information for `RabbitMQ`. Replace `RABBIT_PASS` with the RabbitMQ password.
   - The `connection` in the `[database]` group is the information about the database created for Trove in MySQL.
   - Replace `TROVE_PASS` of the Trove user information with the password of the actual Trove user.
   
   3\. Configure `/etc/trove/trove-taskmanager.conf`.
   
   ```ini
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
4. Configure `/etc/trove/trove-conductor.conf`.
   
   ```ini
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
   
   5\. Configure `/etc/trove/trove-guestagent.conf`.
   
   ```ini
   [DEFAULT]
   rabbit_host = controller
   rabbit_password = RABBIT_PASS
   nova_proxy_admin_user = admin
   nova_proxy_admin_pass = ADMIN_PASS
   nova_proxy_admin_tenant_name = service
   trove_auth_url = http://controller/identity_admin/v2.0
   ```
   
   **Note:** `guestagent` is an independent component of Trove and needs to be built into the VM image created by the Trove through Nova. After a database instance is created, the guest agent process is started to report heartbeat messages to the Trove through the message queue (RabbitMQ). Therefore, you need to configure the RabbitMQ user name and password.
   
   6\. Generate `Trove` database table.
   
   ```shell
   $ su -s /bin/sh -c "trove-manage db_sync" trove
   ```

4. Complete the installation and configuration.  
1\. Configure the automatic startup of the Trove service.
   
   ```shell
   $ systemctl enable openstack-trove-api.service \
   openstack-trove-taskmanager.service \
   openstack-trove-conductor.service 
   ```
   
   2\. Start the service.
   
   ```shell
   $ systemctl start openstack-trove-api.service \
   openstack-trove-taskmanager.service \
   openstack-trove-conductor.service
   ```