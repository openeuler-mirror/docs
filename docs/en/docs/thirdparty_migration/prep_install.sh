#!/bin/bash
# This script contains the preparations before installing openstack

HTTPD_CG="/etc/httpd/conf/httpd.conf"
QEMU_CG="/etc/libvirt/qemu.conf"

EDK2_UEFI_PATH="/usr/share/edk2"
UEFI_DIR_ARM="/usr/share/AAVMF"
UEFI_DIR_X86="/usr/share/OVMF"
DEVSTACK_HOME="/home/stack/devstack"

# Confirm installation mode for openstack
function install_mode()
{
	if [[ ! `rpm -qa` =~ "openeuler-lsb" ]]; then
		echo "Maybe you should confirm whether openeuler-lsb is installed"
		exit 1
	fi

	# init function is_openeuler
	sed -i "/\# Git Functions/i\\function is_openeuler {\n\tif [[ -z \"\$os_VENDOR\" ]]; then\n\tGetOSVersion\n\tfi\n\n\t[[ \"\$os_VENDOR\" =~ (openEuler) ]]\n}\n" $DEVSTACK_HOME/functions-common
	
	# build function is_openeuler in functions-common
	sed -i "s/elif is_fedora/elif is_fedora || is_openeuler/g" $DEVSTACK_HOME/functions-common
	sed -i "/DISTRO=\"f\$os_RELEASE\"/a\ \ \ \ elif [[ \"\$os_VENDOR\" =~ (openEuler) ]]; then\n\tDISTRO=\"openEuler-\$os_RELEASE\"" $DEVSTACK_HOME/functions-common
	# build function is_openeuler with remaining
	grep -nir "is_fedora" | grep -v functions-common | cut -d ":" -f1 | sort | uniq | for line in `xargs`
	do
	sed -i "s/is_fedora/is_fedora || is_openeuler/g" $line
	done
	
	# install glance
	sed -i "/\${LIBS_FROM_GIT} = 'ALL'/i\\\ \ \ \ if [ \$name == \"glance_store\" ]; then enabled=0; fi" $DEVSTACK_HOME/inc/python

	# source openrc
	sed -i "/openstack project list/i\\source openrc admin admin" $DEVSTACK_HOME/lib/neutron_plugins/services/l3

	# Change VIRTUALENV_CMD
	pip3 install virtualenv
	sed -i "s/python3 -m venv/virtualenv/g" $DEVSTACK_HOME/stackrc

	# Fixed git branch
	sed -i "s/master/stable\/train/g" $DEVSTACK_HOME/stackrc
	
	# Change pypi repo
    sed -i "s/\$cmd_pip install/\$cmd_pip install -i https:\/\/mirrors.aliyun.com\/pypi\/simple/g" $DEVSTACK_HOME/inc/python
}

# Config mod_wsgi
function mod_wsgi_cg()
{
	sudo ls -al $HTTPD_CG 2>&1 > /dev/null
	if [[ $? -ne 0 ]]; then
		echo "Maybe you should confirm whether httpd is installed"
		exit 1
	fi

	sudo sed -i "/Include conf.modules.d\/\*.conf/i\\LoadModule wsgi_module modules/mod_wsgi_python3.so" $HTTPD_CG
}

# QEMU support for uefi
function qemu_uefi_init()
{
	sudo ls -al $QEMU_CG 2>&1 > /dev/null
	if [[ $? -ne 0 ]]; then
		echo "Maybe you should confirm whether qemu is installed"
		exit 1
	fi

	if [[ `arch` == aarch64 ]]; then
		sudo sed -i '$anvram = [\"/usr/share/AAVMF/AAVMF_CODE.fd:/usr/share/AAVMF/AAVMF_VARS.fd\",\"/usr/share/edk2/aarch64/QEMU_EFI-pflash.raw:/usr/share/edk2/aarch64/vars-template-pflash.raw\"]' $QEMU_CG 
	fi
	if [[ `arch` == x86_64 ]]; then
		sudo sed -i '$anvram = [\"/usr/share/OVMF/OVMF_CODE.fd:/usr/share/OVMF/OVMF_VARS.fd\",\"/usr/share/edk2/ovmf/OVMF_CODE.fd:/usr/share/edk2/ovmf/OVMF_VARS.fd"]' $QEMU_CG
	fi
}

# Bugfix when yum install edk2
function edk2_uefi_init()
{
	if [[ ! -d $EDK2_UEFI_PATH ]]; then
		echo "Maybe you should confirm whether edk2 is installed"
		exit 1
	fi

	if [[ `arch` == "aarch64" ]]; then
		sudo mkdir $UEFI_DIR_ARM && pushd $UEFI_DIR_ARM
		sudo ln -s $EDK2_UEFI_PATH/aarch64/QEMU_EFI-pflash.raw AAVMF_CODE.fd
		sudo ln -s $EDK2_UEFI_PATH/aarch64/vars-tmplate-pflash.raw AAVMF_VARS.fd
		popd
	fi
	if [[ `arch` == "x86_64" ]]; then
		sudo mkdir $UEFI_DIR_X86 && pushd $UEFI_DIR_X86
		sudo ln -s $EDK2_UEFI_PATH/ovmf/OVMF_CODE.fd OVMF_CODE.fd
		sudo ln -s $EDK2_UEFI_PATH/ovmf/OVMF_VARS.fd OVMF_VARS.fd
		popd
	
	fi
	
	qemu_uefi_init
}

# Fixed libvirt version
function libvirt_version_fixed()
{
	if [[ ! `rpm -qa` =~ "python3-libvirt"  ]]; then
		echo "Maybe you should confirm whether python3-libvirt is installed"
		exit 1
	fi
	sudo sed -i "s/pip_uninstall libvirt-python//g" $DEVSTACK_HOME/lib/nova_plugins/functions-libvirt
	sudo sed -i "s/pip_install_gr libvirt-python//g" $DEVSTACK_HOME/lib/nova_plugins/functions-libvirt
}

# The installation system script execution process must depend on
function yum_pkgs()
{
	# install base service
	sudo yum install -y gcc-c++ python3-devel tar patch git
	# install necessary dependences
	sudo yum install -y python3-systemd
	sudo yum install -y libffi-devel
	sudo yum install -y open-iscsi-devel
	sudo yum install -y libxml2 libxml2-devel
	sudo yum install -y python3-lxml python3-libxml2 libxslt libxslt-devel
	sudo yum install -y pcp-system-tools
	sudo yum install -y haproxy
	if [[ `arch` == "aarch64" ]]; then
		sudo yum install -y edk2-aarch64 edk2-devel python3-edk2-devel
	fi
	if [[ `arch` == "x86_64" ]]; then
		sudo yum install -y edk2-ovmf edk2-devel python3-edk2-devel
	fi
	sudo yum install -y libvirt* python3-libvirt &&  libvirt_version_fixed
	sudo yum install -y qemu qemu-guest-agent && edk2_uefi_init
	sudo yum install -y httpd httpd-devel
	sudo yum install -y memcached
	sudo yum install -y mariadb-server
        sudo yum install -y rabbitmq-server
	sudo yum install -y python3-uWSGI python3-mod_wsgi && mod_wsgi_cg
	sudo yum install -y python3-copr python3-scss
	sudo yum install -y openeuler-lsb && install_mode
	sudo yum install -y python3-sqlalchemy python3-SQLAlchemy-Utils
}

yum_pkgs
