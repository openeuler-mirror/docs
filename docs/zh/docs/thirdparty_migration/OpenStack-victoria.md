# openEuler21.03系统部署openstack-victoria参考

# 前言

openEuler21.03发布，官方yum源中已经对openstack-victoria版本做了支持，用户可以配置好官方yum源后根据此文档进行部署。

### 软件介绍

#### OpenStack 简介

OpenStack 是一个社区，也是一个项目。它提供了一个部署云的操作平台或工具集，为组织提供可扩展的、灵活的云计算。

作为一个开源的云计算管理平台，OpenStack 由nova、cinder、neutron、glance、keystone、horizon等几个主要的组件组合起来完成具体工作。OpenStack 支持几乎所有类型的云环境，项目目标是提供实施简单、可大规模扩展、丰富、标准统一的云计算管理平台。OpenStack 通过各种互补的服务提供了基础设施即服务（IaaS）的解决方案，每个服务提供 API 进行集成。

# OpenStackVictoria版本部署

## 环境准备

### SQL database安装

安装软件包：

```plain
# yum install mariadb mariadb-server python-PyMySQL
```
配置SQL database：
创建并编辑 /etc/my.cnf.d/openstack.cnf 文件

vim /etc/my.cnf.d/openstack.cnf

```
[mysqld]
bind-address = 10.0.0.11
default-storage-engine = innodb
innodb_file_per_table = on
max_connections = 4096
collation-server = utf8_general_ci
character-set-server = utf8
```
bind-address设置为控制节点的管理IP地址

启动database服务，并为其配置开机自启动：

```
# systemctl enable mariadb.service
# systemctl start mariadb.service
```
### RabbitMQ 安装

安装软件包：

```
#yum install rabbitmq-server
```
启动RabbitMQ服务，并为其配置开机自启动：

```
#systemctl enable rabbitmq-server.service
#systemctl start rabbitmq-server.service
```
添加penstack用户：

```
#rabbitmqctl add_user openstack RABBIT_PASS
```
替换RABBIT_PASS，为openstack用户设置密码

设置openstack用户权限，允许进行配置、写、读：

```
#rabbitmqctl set_permissions openstack ".*" ".*" ".*"
```
### Memcached 安装

安装软件包：

```
#yum install memcached python3-memcached
```
配置Memcached：

编辑 /etc/sysconfig/memcached 文件

```
#vim /etc/sysconfig/memcached
OPTIONS="-l 127.0.0.1,::1,controller"
```
更改OPTIONS，配置服务使用控制节点的管理IP地址

启动Memcached服务，并为其配置开机启动：

```
# systemctl enable memcached.service
# systemctl start memcached.service
```
# OpenStack服务安装

### Keystone安装

1、创建数据库

作为root用户访问数据库，创建keystone数据库并授权

```
# mysql -u root -p
MariaDB [(none)]> CREATE DATABASE keystone;
MariaDB [(none)]> GRANT ALL PRIVILEGES ON keystone.* TO 'keystone'@'localhost' \
IDENTIFIED BY 'KEYSTONE_DBPASS';
MariaDB [(none)]> GRANT ALL PRIVILEGES ON keystone.* TO 'keystone'@'%' \
IDENTIFIED BY 'KEYSTONE_DBPASS';
MariaDB [(none)]> exit
```
替换KEYSTONE_DBPASS，为Keystone数据库设置密码

2、安装和配置

安装软件包：

```
#yum install openstack-keystone httpd mod_wsgi
```
配置keystone：

编辑 /etc/keystone/keystone.conf 文件：

在[database]部分，配置数据库入口

在[token]部分，配置token provider

```
# vim /etc/keystone/keystone.conf
[database]
connection = mysql+pymysql://keystone:KEYSTONE_DBPASS@controller/keystone
[token]
provider = fernet
```
替换KEYSTONE_DBPASS为Keystone数据库的密码

同步数据库：

```
su -s /bin/sh -c "keystone-manage db_sync" keystone
```
初始化Fernet密钥仓库：

```
# keystone-manage fernet_setup --keystone-user keystone --keystone-group keystone
# keystone-manage credential_setup --keystone-user keystone --keystone-group keystone
```
启动身份服务：

```
# keystone-manage bootstrap --bootstrap-password ADMIN_PASS \
--bootstrap-admin-url http://controller:5000/v3/ \
--bootstrap-internal-url http://controller:5000/v3/ \
--bootstrap-public-url http://controller:5000/v3/ \
--bootstrap-region-id RegionOne
```
替换ADMIN_PASS，为admin用户设置密码

3、配置Apache HTTP server

编辑 /etc/httpd/conf/httpd.conf 文件：

配置ServerName项引用控制节点

```
#vim /etc/httpd/conf/httpd.conf
```
ServerName controller

如果ServerName项不存在则需要创建

为 /usr/share/keystone/wsgi-keystone.conf 文件创建链接：

#ln -s /usr/share/keystone/wsgi-keystone.conf /etc/httpd/conf.d/

#vim /etc/httpd/conf.d/wsgi-keystone.conf

...

TraceEnable off

LoadModule wsgi_module /usr/lib64/httpd/modules/mod_wsgi_python3.so

...

4、完成安装

启动Apache HTTP服务：

```
# systemctl enable httpd.service
# systemctl start httpd.service
```
设置环境变量：

```
$ export OS_USERNAME=admin
$ export OS_PASSWORD=ADMIN_PASS
$ export OS_PROJECT_NAME=admin
$ export OS_USER_DOMAIN_NAME=Default
$ export OS_PROJECT_DOMAIN_NAME=Default
$ export OS_AUTH_URL=http://controller:5000/v3
$ export OS_IDENTITY_API_VERSION=3
```
替换ADMIN_PASS为keystone-manage bootstrap命令中设置的密码

5、创建domain, projects, users, roles

创建domain ‘example’：

```
$ openstack domain create --description "An Example Domain" example
```

注：domain ‘default’在keystone-manage bootstrap时已创建

创建project ‘service’：

```
$ openstack project create --domain default --description "Service Project" service
```

创建（non-admin）project ’myproject‘，user ’myuser‘ 和 role ’myrole‘，为‘myproject’和‘myuser’添加角色‘myrole’：

```
$ openstack project create --domain default --description "Demo Project" myproject
$ openstack user create --domain default --password-prompt myuser
$ openstack role create myrole
$ openstack role add --project myproject --user myuser myrole
```
6、验证

取消临时环境变量OS_AUTH_URL和OS_PASSWORD：

```
$ unset OS_AUTH_URL OS_PASSWORD
```

为admin用户请求token：

```
$ openstack --os-auth-url http://controller:5000/v3 \
--os-project-domain-name Default --os-user-domain-name Default \
--os-project-name admin --os-username admin token issue
```

为myuser用户请求token：

```
$ openstack --os-auth-url http://controller:5000/v3 \
--os-project-domain-name Default --os-user-domain-name Default \
--os-project-name myproject --os-username myuser token issue
```

7、创建OpenStack client环境脚本

分别为admin和demo用户创建环境变量脚本：

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
替换ADMIN_PASS为admin用户的密码

替换DEMO_PASS为myuser用户的密码

运行脚本加载环境变量：

```
$ . admin-openrc
```
### Glance安装

1、创建数据库｜服务凭证｜API 端点

创建数据库：

作为root用户访问数据库，创建glance数据库并授权

```
$ mysql -u root -p
MariaDB [(none)]> CREATE DATABASE glance;
MariaDB [(none)]> GRANT ALL PRIVILEGES ON glance.* TO 'glance'@'localhost' \
IDENTIFIED BY 'GLANCE_DBPASS';
MariaDB [(none)]> GRANT ALL PRIVILEGES ON glance.* TO 'glance'@'%' \
IDENTIFIED BY 'GLANCE_DBPASS';
MariaDB [(none)]> exit
```
替换GLANCE_DBPASS，为glance数据库设置密码

```
$ . admin-openrc
```
创建glance服务凭证：

创建glance服务凭证：

创建glance用户

添加‘admin’角色到用户‘glance’

创建glance服务

```
$ openstack user create --domain default --password-prompt glance
$ openstack role add --project service --user glance admin
$ openstack service create --name glance --description "OpenStack Image" image
```
创建镜像服务API端点：

```
$ openstack endpoint create --region RegionOne image public http://controller:9292
$ openstack endpoint create --region RegionOne image internal http://controller:9292
$ openstack endpoint create --region RegionOne image admin http://controller:9292
```
2、安装和配置

安装软件包：

```
#yum install openstack-glance openstack-glance-api
```
配置glance：

编辑 /etc/glance/glance-api.conf 文件：

在[database]部分，配置数据库入口

在[keystone_authtoken] [paste_deploy]部分，配置身份认证服务入口

在[glance_store]部分，配置本地文件系统存储和镜像文件的位置

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
替换GLANCE_DBPASS为glance数据库的密码

替换GLANCE_PASS为glance用户的密码

同步数据库：

```
su -s /bin/sh -c "glance-manage db_sync" glance
```
启动镜像服务：

```
# systemctl enable openstack-glance-api.service
# systemctl start openstack-glance-api.service
```
3、验证

```
$ . admin-openrc
```
下载镜像

下载镜像

```
$ wget http://download.cirros-cloud.net/0.4.0/cirros-0.4.0-x86_64-disk.img
```

向Image服务上传镜像：

```
$ glance image-create --name "cirros" --file cirros-0.4.0-x86_64-disk.img --disk-format qcow2 --container-format bare --visibility=public
```

确认镜像上传并验证属性：

```
$ glance image-list
```
### Placement安装

1、创建数据库｜服务凭证｜API 端点

创建数据库：

作为root用户访问数据库，创建placement数据库并授权

```
$ mysql -u root -p
MariaDB [(none)]> CREATE DATABASE placement;
MariaDB [(none)]> GRANT ALL PRIVILEGES ON placement.* TO 'placement'@'localhost' \
IDENTIFIED BY 'PLACEMENT_DBPASS';
MariaDB [(none)]> GRANT ALL PRIVILEGES ON placement.* TO 'placement'@'%' \
IDENTIFIED BY 'PLACEMENT_DBPASS';
MariaDB [(none)]> exit
```
替换PLACEMENT_DBPASS，为placement数据库设置密码

```
$ . admin-openrc
```
创建placement服务凭证：

创建placement服务凭证：

创建placement用户

添加‘admin’角色到用户‘placement’

创建Placement API服务

```
$ openstack user create --domain default --password-prompt placement
$ openstack role add --project service --user placement admin
$ openstack service create --name placement --description "Placement API" placement
```
创建placement服务API端点：

```
$ openstack endpoint create --region RegionOne placement public http://controller:8778
$ openstack endpoint create --region RegionOne placement internal http://controller:8778
$ openstack endpoint create --region RegionOne placement admin http://controller:8778
```
2、安装和配置

安装软件包：

```
yum install openstack-placement-api
```
配置placement：

编辑 /etc/placement/placement.conf 文件：

在[placement_database]部分，配置数据库入口

在[api] [keystone_authtoken]部分，配置身份认证服务入口

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
替换PLACEMENT_DBPASS为placement数据库的密码

替换PLACEMENT_PASS为placement用户的密码

注：配置权限

```
# vim /etc/httpd/conf.d/00-placement-api.conf
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
同步数据库：

```
#su -s /bin/sh -c "placement-manage db sync" placement
```
启动httpd服务：

```
#systemctl restart httpd
```
3、验证

```
$ . admin-openrc
```
执行状态检查：

执行状态检查：

```
$ placement-status upgrade check
```

安装osc-placement，列出可用的资源类别及特性：

```
$ yum install python3-osc-placement
$ openstack --os-placement-api-version 1.2 resource class list --sort-column name
$ openstack --os-placement-api-version 1.6 trait list --sort-column name
```
### Nova安装

1、创建数据库｜服务凭证｜API 端点

创建数据库：

作为root用户访问数据库，创建nova、nova_api、nova_cell0 数据库并授权

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
替换NOVA_DBPASS，为nova数据库设置密码

```
$ . admin-openrc
```
创建nova服务凭证：

创建nova服务凭证：

创建nova用户

添加‘admin’角色到用户‘nova’

创建服务

```
$ openstack user create --domain default --password-prompt nova
$ openstack role add --project service --user nova admin
$ openstack service create --name nova --description "OpenStack Compute" compute
```
创建计算服务API端点：

创建计算服务API端点：

```
$ openstack endpoint create --region RegionOne compute public http://controller:8774/v2.1
$ openstack endpoint create --region RegionOne compute internal http://controller:8774/v2.1
$ openstack endpoint create --region RegionOne compute admin http://controller:8774/v2.1
```
2、安装和配置

安装软件包：

```
# yum install openstack-nova-api openstack-nova-conductor \
openstack-nova-novncproxy openstack-nova-scheduler openstack-nova-compute
```
配置nova：

编辑 /etc/nova/nova.conf 文件：

在[default]部分，启用计算和元数据的API，配置RabbitMQ消息队列入口，配置my_ip

在[api_database] [database]部分，配置数据库入口

在[api] [keystone_authtoken]部分，配置身份认证服务入口

在[vnc]部分，启用并配置远程控制台入口

在[glance]部分，配置镜像服务API的地址

在[oslo_concurrency]部分，配置lock path

在[placement]部分，配置placement服务的入口

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
替换RABBIT_PASS为RabbitMQ中openstack账户的密码

配置my_ip为控制节点的管理IP地址

替换NOVA_DBPASS为nova数据库的密码

替换NOVA_PASS为nova用户的密码

替换PLACEMENT_PASS为placement用户的密码

替换NEUTRON_PASS为neutron用户的密码

同步nova-api数据库：

```
su -s /bin/sh -c "nova-manage api_db sync" nova
```
注册cell0数据库：

```
su -s /bin/sh -c "nova-manage cell_v2 map_cell0" nova
```
创建cell1 cell：

```
su -s /bin/sh -c "nova-manage cell_v2 create_cell --name=cell1 --verbose" nova
```
同步nova数据库：

```
su -s /bin/sh -c "nova-manage db sync" nova
```
验证cell0和cell1注册正确：

```
su -s /bin/sh -c "nova-manage cell_v2 list_cells" nova
```
确定是否支持虚拟机硬件加速（x86架构）：

```
$ egrep -c '(vmx|svm)' /proc/cpuinfo
```

如果返回值为0则不支持硬件加速，需要配置libvirt使用QEMU而不是KVM：

```
# vim /etc/nova/nova.conf
[libvirt]
# ...
virt_type = qemu
```
如果返回值为1或更大的值，则支持硬件加速，不需要进行额外的配置

启动计算服务及其依赖项，并配置其开机启动：

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
添加计算节点到cell数据库：

确认计算节点存在：

```
$ . admin-openrc
$ openstack compute service list --service nova-compute
```
注册计算节点：

```
#su -s /bin/sh -c "nova-manage cell_v2 discover_hosts --verbose" nova
```
3、验证

```
$ . admin-openrc
```
列出服务组件，验证每个流程都成功启动和注册：

```
$ openstack compute service list
```

列出身份服务中的API端点，验证与身份服务的连接：

```
$ openstack catalog list
```

列出镜像服务中的镜像，验证与镜像服务的连接：

```
$ openstack image list
```

检查cells和placement API是否运作成功，以及其他必要条件是否已具备

```
#nova-status upgrade check
```
### Neutron安装

1、创建数据库｜服务凭证｜API 端点

创建数据库：

作为root用户访问数据库，创建neutron数据库并授权

```
$ mysql -u root -p
MariaDB [(none)]> CREATE DATABASE neutron;
MariaDB [(none)]> GRANT ALL PRIVILEGES ON neutron.* TO 'neutron'@'localhost' \
IDENTIFIED BY 'NEUTRON_DBPASS';
MariaDB [(none)]> GRANT ALL PRIVILEGES ON neutron.* TO 'neutron'@'%' \
IDENTIFIED BY 'NEUTRON_DBPASS';
MariaDB [(none)]> exit
```
替换NEUTRON_DBPASS，为neutron数据库设置密码

```
$ . admin-openrc
```
创建neutron服务凭证：

创建neutron用户

添加‘admin’角色到‘neutron’用户

创建neutron服务

```
$ openstack user create --domain default --password-prompt neutron
$ openstack role add --project service --user neutron admin
$ openstack service create --name neutron --description "OpenStack Networking" network
```
创建网络服务API端点：

```
$ openstack endpoint create --region RegionOne network public http://controller:9696
$ openstack endpoint create --region RegionOne network internal http://controller:9696
$ openstack endpoint create --region RegionOne network admin http://controller:9696
```
2、安装和配置Self-service网络

安装软件包：

```
# yum install openstack-neutron openstack-neutron-ml2 \
openstack-neutron-linuxbridge ebtables ipset
```
配置neutron：

编辑 /etc/neutron/neutron.conf 文件：

在[database]部分，配置数据库入口

在[default]部分，启用ml2插件和router插件，允许ip地址重叠，配置RabbitMQ消息队列入口

在[default] [keystone]部分，配置身份认证服务入口

在[default] [nova]部分，配置网络来通知计算网络拓扑的变化

在[oslo_concurrency]部分，配置lock path

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
替换NEUTRON_DBPASS为neutron数据库的密码

替换RABBIT_PASS为RabbitMQ中openstack账户的密码

替换NEUTRON_PASS为neutron用户的密码

替换NOVA_PASS为nova用户的密码

配置ML2插件：

编辑 /etc/neutron/plugins/ml2/ml2_conf.ini 文件：

在[ml2]部分，启用flat、vlan、vxlan网络，启用网桥及layer-2 population机制，启用端口安全扩展驱动

在[ml2_type_flat]部分，配置flat网络为provider虚拟网络

在[ml2_type_vxlan]部分，配置VXLAN网络标识符范围

在[securitygroup]部分，配置允许ipset

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
配置Linux bridge代理：

编辑 /etc/neutron/plugins/ml2/linuxbridge_agent.ini 文件：

在[linux_bridge]部分，映射provider虚拟网络到物理网络接口

在[vxlan]部分，启用vxlan覆盖网络，配置处理覆盖网络的物理网络接口IP地址，启用layer-2 population

在[securitygroup]部分，允许安全组，配置linux bridge iptables防火墙驱动

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
替换PROVIDER_INTERFACE_NAME为物理网络接口

替换OVERLAY_INTERFACE_IP_ADDRESS为控制节点的管理IP地址

配置Layer-3代理：

编辑 /etc/neutron/l3_agent.ini 文件：

在[default]部分，配置接口驱动为linuxbridge

```
# vim /etc/neutron/l3_agent.ini
[DEFAULT]
# ...
interface_driver = linuxbridge
```
配置DHCP代理：

编辑 /etc/neutron/dhcp_agent.ini 文件：

在[default]部分，配置linuxbridge接口驱动、Dnsmasq DHCP驱动，启用隔离的元数据

```
# vim /etc/neutron/dhcp_agent.ini
[DEFAULT]
# ...
interface_driver = linuxbridge
dhcp_driver = neutron.agent.linux.dhcp.Dnsmasq
enable_isolated_metadata = true
```
配置metadata代理：

编辑 /etc/neutron/metadata_agent.ini 文件：

在[default]部分，配置元数据主机和shared secret

```
# vim /etc/neutron/metadata_agent.ini
[DEFAULT]
# ...
nova_metadata_host = controller
metadata_proxy_shared_secret = METADATA_SECRET
```
替换METADATA_SECRET为合适的元数据代理secret

3、配置计算服务

编辑 /etc/nova/nova.conf 文件：

在[neutron]部分，配置访问参数，启用元数据代理，配置secret

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
替换NEUTRON_PASS为neutron用户的密码

替换METADATA_SECRET为合适的元数据代理secret

4、完成安装

添加链接：

```
#ln -s /etc/neutron/plugins/ml2/ml2_conf.ini /etc/neutron/plugin.ini
```
同步数据库：

```
# su -s /bin/sh -c "neutron-db-manage --config-file /etc/neutron/neutron.conf \
--config-file /etc/neutron/plugins/ml2/ml2_conf.ini upgrade head" neutron
```
重启计算API服务：

```
#systemctl restart openstack-nova-api.service
```
启动网络服务并配置开机启动：

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
5、验证

列出代理验证neutron代理启动成功：

```
$ openstack network agent list
```
### Cinder安装


1、创建数据库｜服务凭证｜API 端点

创建数据库：

作为root用户访问数据库，创建cinder数据库并授权

```
$ mysql -u root -p
MariaDB [(none)]> CREATE DATABASE cinder;
MariaDB [(none)]> GRANT ALL PRIVILEGES ON cinder.* TO 'cinder'@'localhost' \
IDENTIFIED BY 'CINDER_DBPASS';
MariaDB [(none)]> GRANT ALL PRIVILEGES ON cinder.* TO 'cinder'@'%' \
IDENTIFIED BY 'CINDER_DBPASS';
MariaDB [(none)]> exit
```
替换CINDER_DBPASS，为cinder数据库设置密码

$ . admin-openrc

创建cinder服务凭证：

创建cinder用户

添加‘admin’角色到用户‘cinder’

创建cinderv2和cinderv3服务

```
$ openstack user create --domain default --password-prompt cinder
$ openstack role add --project service --user cinder admin
$ openstack service create --name cinderv2 --description "OpenStack Block Storage" volumev2
$ openstack service create --name cinderv3 --description "OpenStack Block Storage" volumev3
```
创建块存储服务API端点：

创建块存储服务API端点：

```
$ openstack endpoint create --region RegionOne volumev2 public http://controller:8776/v2/%s
$ openstack endpoint create --region RegionOne volumev2 internal http://controller:8776/v2/%s
$ openstack endpoint create --region RegionOne volumev2 admin http://controller:8776/v2/%s
$ openstack endpoint create --region RegionOne volumev3 public http://controller:8776/v3/%s
$ openstack endpoint create --region RegionOne volumev3 internal http://controller:8776/v3/%s
$ openstack endpoint create --region RegionOne volumev3 admin http://controller:8776/v3/%s
```
2、安装和配置控制节点

安装软件包：

```
#yum install openstack-cinder
```
配置cinder：

编辑 /etc/cinder/cinder.conf 文件：

在[database]部分，配置数据库入口

在[DEFAULT]部分，配置RabbitMQ消息队列入口，配置my_ip

在[DEFAULT] [keystone_authtoken]部分，配置身份认证服务入口

在[oslo_concurrency]部分，配置lock path

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
替换CINDER_DBPASS为cinder数据库的密码

替换RABBIT_PASS为RabbitMQ中openstack账户的密码

配置my_ip为控制节点的管理IP地址

替换CINDER_PASS为cinder用户的密码

同步数据库：

```
su -s /bin/sh -c "cinder-manage db sync" cinder
```
配置计算使用块存储：

编辑 /etc/nova/nova.conf 文件

```
# vim /etc/nova/nova.conf
[cinder]
os_region_name = RegionOne
```
完成安装：

重启计算API服务

```
systemctl restart openstack-nova-api.service
```
启动块存储服务

```
# systemctl enable openstack-cinder-api.service openstack-cinder-scheduler.service
# systemctl start openstack-cinder-api.service openstack-cinder-scheduler.service
```
3、安装和配置存储节点

安装软件包：

```
yum install lvm2 device-mapper-persistent-data targetcli python-keystone
```
启动服务：

```
# systemctl enable lvm2-lvmetad.service
# systemctl start lvm2-lvmetad.service
```
创建LVM物理卷 /dev/sdb：

```
pvcreate /dev/sdb
```
创建LVM卷组 cinder-volumes：

```
vgcreate cinder-volumes /dev/sdb
```
编辑 /etc/lvm/lvm.conf 文件：

在devices部分，添加过滤以接受/dev/sdb设备拒绝其他设备

devices {

...

filter = [ "a/sdb/", "r/.*/"]

编辑 /etc/cinder/cinder.conf 文件：

在[lvm]部分，使用LVM驱动、cinder-volumes卷组、iSCSI协议和适当的iSCSI服务配置LVM后端

在[DEFAULT]部分，启用LVM后端，配置镜像服务API的位置

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
完成安装：

```
# systemctl enable openstack-cinder-volume.service target.service
# systemctl start openstack-cinder-volume.service target.service
```
4、安装和配置备份服务

编辑 /etc/cinder/cinder.conf 文件：

在[DEFAULT]部分，配置备份选项

```
[DEFAULT]
# ...
backup_driver = cinder.backup.drivers.swift.SwiftBackupDriver
backup_swift_url = SWIFT_URL
```
替换SWIFT_URL为对象存储服务的URL，该URL可以通过对象存储API端点找到：

```
$ openstack catalog show object-store
```
完成安装：

```
# systemctl enable openstack-cinder-backup.service
# systemctl start openstack-cinder-backup.service
```
5、验证

```
$ . admin-openrc
```
列出服务组件验证每个步骤成功：

$ openstack volume service list

注：目前暂未对swift组件进行支持，有条件的同学可以配置对接ceph。

### horizon安装

1、安装软件包

```plain
yum install openstack-horizon
```
2、修改/usr/share/openstack-dashboard/openstack_dashboard/local/local_settings.py
修改变量

```plain
ALLOWED_HOSTS = ['*', ]OPENSTACK_HOST = "controller"OPENSTACK_KEYSTONE_URL = "http://%s:5000/v3" % OPENSTACK_HOST
```
新增变量
```plain
OPENSTACK_API_VERSIONS = {    "identity": 3,    "image": 2,    "volume": 3,}WEBROOT = "/dashboard/"COMPRESS_OFFLINE = TrueOPENSTACK_KEYSTONE_DEFAULT_DOMAIN = "default"OPENSTACK_KEYSTONE_DEFAULT_ROLE = "admin"LOGIN_URL = '/dashboard/auth/login/'LOGOUT_URL = '/dashboard/auth/logout/'
```
3、在/usr/share/openstack-dashboard目录下执行
```plain
./manage.py compress
```
4、重启httpd服务
```plain
systemctl restart httpd
```
5、验证
打开浏览器，输入网址http://<host_ip>，登录horizon



