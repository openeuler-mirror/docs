# Administrator Guide

-   [Terms of Use](terms-of-use.md)
-   [About This Document ](about-this-document.md)
-   [Basic Configuration](basic-configuration.md)
    -   [Using Commands](using-commands.md)
        -   [Setting the System Locale](setting-the-system-locale.md)
        -   [Setting the Keyboard Layout](setting-the-keyboard-layout.md)
        -   [Setting the Date and Time](setting-the-date-and-time.md)
            -   [Using the timedatectl Command](using-the-timedatectl-command.md)
            -   [Using the date Command](using-the-date-command.md)
            -   [Using the hwclock Command](using-the-hwclock-command.md)



-   [Viewing System Information](viewing-system-information.md)
-   [User Management](user-management.md)
    -   [Adding a User](adding-a-user.md)
    -   [Modifying a User Account](modifying-a-user-account.md)
    -   [Deleting Users](deleting-users.md)
    -   [Authorizing Administrator Accounts](authorizing-administrator-accounts.md)
        -   [Granting Rights to a Common User](granting-rights-to-a-common-user.md)


-   [Using the DNF to Manage Software Packages](using-the-dnf-to-manage-software-packages.md)
    -   [Configuring the DNF](configuring-the-dnf.md)
        -   [Modifying the Configuration File](modifying-the-configuration-file.md)
        -   [Creating a Local Software Repository](creating-a-local-software-repository.md)
        -   [Adding, Enabling, and Disabling Software Sources](adding-enabling-and-disabling-software-sources.md)

    -   [Managing Software Package](managing-software-package.md)
    -   [Managing Software Package Groups](managing-software-package-groups.md)
    -   [Check and Update](check-and-update.md)

-   [Service Management](service-management.md)
    -   [Introduction to systemd](introduction-to-systemd.md)
    -   [Features](features.md)
    -   [Managing System Services](managing-system-services.md)
    -   [Changing a Runlevel](changing-a-runlevel.md)
    -   [Shutting Down, Suspending, and Hibernating the Operating System](shutting-down-suspending-and-hibernating-the-operating-system.md)

-   [Process Management](process-management.md)
    -   [Managing System Processes](managing-system-processes.md)
        -   [Scheduling a Process](scheduling-a-process.md)
            -   [Using the at Command to Run Processes at the Scheduled Time](using-the-at-command-to-run-processes-at-the-scheduled-time.md)
            -   [Using the cron Service to Run Commands Periodically](using-the-cron-service-to-run-commands-periodically.md)

        -   [Suspending/Resuming a Process](suspending-resuming-a-process.md)

    -   [Viewing Processes](viewing-processes.md)

-   [Configuring the Network](configuring-the-network.md)
    -   [Configuring an IP Address](configuring-an-ip-address.md)
        -   [Using the nmcli Command](using-the-nmcli-command.md)
            -   [Introduction to nmcli](introduction-to-nmcli.md)
            -   [Setting Network Connections](setting-network-connections.md)
                -   [Configuring Dynamic IP Connections](configuring-dynamic-ip-connections.md)
                -   [Configuring Static IP Connections](configuring-static-ip-connections.md)
                -   [Adding a Wi-Fi Connection](adding-a-wi-fi-connection.md)
                -   [Modifying Attributes](modifying-attributes.md)

            -   [Configuring a Static Route](configuring-a-static-route.md)

        -   [Using the ip Command](using-the-ip-command.md)
            -   [Configuring IP Addresses](configuring-ip-addresses.md)
            -   [Configuring a Static Route](configuring-a-static-route-0.md)

        -   [Configuring the Network Through the ifcfg File](configuring-the-network-through-the-ifcfg-file.md)

    -   [Configuring a Host Name](configuring-a-host-name.md)
        -   [Introduction](introduction.md)
        -   [Configuring a Host Name by Running the hostnamectl Command](configuring-a-host-name-by-running-the-hostnamectl-command.md)
        -   [Configuring a Host Name by Running the nmcli Command](configuring-a-host-name-by-running-the-nmcli-command.md)

    -   [Configuring Network Bonding](configuring-network-bonding.md)
        -   [Running the nmcli Command](running-the-nmcli-command.md)
        -   [Configuring Network Bonding by Using a Command Line](configuring-network-bonding-by-using-a-command-line.md)
            -   [Checking Whether the Bonding Kernel Module Is Installed](checking-whether-the-bonding-kernel-module-is-installed.md)
            -   [Creating a Channel Bonding Interface](creating-a-channel-bonding-interface.md)
            -   [Creating a Slave Interface](creating-a-slave-interface.md)
            -   [Activating Channel Bonding](activating-channel-bonding.md)
            -   [Creating Multiple Bondings](creating-multiple-bondings.md)


    -   [IPv6 Differences \(vs IPv4\)](ipv6-differences-(vs-ipv4).md)
        -   [Restrictions](restrictions.md)
        -   [Configuration Description](configuration-description.md)
            -   [Setting the MTU of an Interface Device](setting-the-mtu-of-an-interface-device.md)
            -   [Stateful IPv6 Address Autoconfiguration](stateful-ipv6-address-autoconfiguration.md)
            -   [Kernel Supporting Socket-Related System Calls](kernel-supporting-socket-related-system-calls.md)
            -   [Persistency Configuration of the IPv4 dhclient Daemon Process](persistency-configuration-of-the-ipv4-dhclient-daemon-process.md)
            -   [Differences Between IPv4 and IPv6 Configuration Using the iproute Command](differences-between-ipv4-and-ipv6-configuration-using-the-iproute-command.md)
            -   [Configuration Differences of the NetworkManager Service](configuration-differences-of-the-networkmanager-service.md)

        -   [FAQ](faq.md)
            -   [The iscsi-initiator-utils Does Not Support the fe80 IPv6 Address.](the-iscsi-initiator-utils-does-not-support-the-fe80-ipv6-address.md)
            -   [The IPv6 Address Is Lost After the NIC Is Down.](the-ipv6-address-is-lost-after-the-nic-is-down.md)
            -   [Taking a Long Time to Add or Delete an IPv6 Address for a Bond Interface with Multiple IPv6 Addresses](taking-a-long-time-to-add-or-delete-an-ipv6-address-for-a-bond-interface-with-multiple-ipv6-addresse.md)
            -   [Rsyslog Log Transmission Is Delayed in the Scenario Where Both IPv4 and IPv6 Are Used](rsyslog-log-transmission-is-delayed-in-the-scenario-where-both-ipv4-and-ipv6-are-used.md)



-   [Managing Hard Disks Through LVM](managing-hard-disks-through-lvm.md)
    -   [LVM Overview](lvm-overview.md)
    -   [Installing the LVM](installing-the-lvm.md)
    -   [Managing PVs](managing-pvs.md)
    -   [Managing VGs](managing-vgs.md)
    -   [Managing LVs](managing-lvs.md)
    -   [Creating and Mounting a File System](creating-and-mounting-a-file-system.md)

-   [Using the KAE](using-the-kae.md)
    -   [Overview](overview.md)
    -   [Application Scenarios](application-scenarios.md)
    -   [Installing, Running, and Uninstalling the KAE](installing-running-and-uninstalling-the-kae.md)
        -   [Installing the Accelerator Software Packages](installing-the-accelerator-software-packages.md)
            -   [Preparing for Installation](preparing-for-installation.md)
            -   [Installing the Accelerator Software Package](installing-the-accelerator-software-package.md)
            -   [Performing Required Operations After Installation](performing-required-operations-after-installation.md)
                -   [Testing the OpenSSL Accelerator Engine](testing-the-openssl-accelerator-engine.md)


        -   [Upgrading the Accelerator Software Packages](upgrading-the-accelerator-software-packages.md)
        -   [Uninstalling the Accelerator Software Packages](uninstalling-the-accelerator-software-packages.md)

    -   [Querying Logs](querying-logs.md)
    -   [Application Cases](application-cases.md)
        -   [Acceleration Engine Application](acceleration-engine-application.md)
            -   [Example Code for the KAE](example-code-for-the-kae.md)
            -   [Using the KAE in the OpenSSL Configuration File openssl.cnf](using-the-kae-in-the-openssl-configuration-file-openssl-cnf.md)


    -   [Troubleshooting](troubleshooting.md)
        -   [Initialization Failure](initialization-failure.md)
        -   [Failed to Identify Accelerator Devices After the Acceleration Engine Is Installed](failed-to-identify-accelerator-devices-after-the-acceleration-engine-is-installed.md)
        -   [Failed to Upgrade the Accelerator Drivers](failed-to-upgrade-the-accelerator-drivers.md)


-   [Configuring Services](configuring-services.md)
    -   [Configuring the Repo Server](configuring-the-repo-server.md)
        -   [Overview](overview-1.md)
        -   [Creating or Updating a Local Repo Source](creating-or-updating-a-local-repo-source.md)
            -   [Obtaining the ISO Image File](obtaining-the-iso-image-file.md)
            -   [Mounting an ISO File to Create a Repo Source](mounting-an-iso-file-to-create-a-repo-source.md)
            -   [Creating a Local Repo Source](creating-a-local-repo-source.md)
            -   [Updating the Repo Source](updating-the-repo-source.md)

        -   [Deploying the Remote Repo Source](deploying-the-remote-repo-source.md)
            -   [Installing and Configuring Nginx](installing-and-configuring-nginx.md)
            -   [Starting Nginx](starting-nginx.md)
            -   [Deploying the Repo Source](deploying-the-repo-source.md)

        -   [Using the repo Source](using-the-repo-source.md)
            -   [Configuring repo as the yum Source](configuring-repo-as-the-yum-source.md)
            -   [repo Priority](repo-priority.md)
            -   [Related Commands of dnf](related-commands-of-dnf.md)


    -   [Configuring the FTP Server](configuring-the-ftp-server.md)
        -   [General Introduction](general-introduction.md)
        -   [Using vsftpd](using-vsftpd.md)
        -   [Configuring vsftpd](configuring-vsftpd.md)
            -   [vsftpd Configuration Files](vsftpd-configuration-files.md)
            -   [Default Configuration Description](default-configuration-description.md)
            -   [Setting the Local Time](setting-the-local-time.md)
            -   [Configuring Welcome Information](configuring-welcome-information.md)
            -   [Configuring the Login Permission of a System Account](configuring-the-login-permission-of-a-system-account.md)

        -   [Verifying Whether the FTP Service Is Successfully Set Up](verifying-whether-the-ftp-service-is-successfully-set-up.md)
        -   [Configuring a Firewall](configuring-a-firewall.md)
        -   [File Transmission](file-transmission.md)

    -   [Configuring the Web Server](configuring-the-web-server.md)
        -   [Apache Server](apache-server.md)
            -   [Overview](overview-2.md)
            -   [Managing httpd](managing-httpd.md)
            -   [Configuration File Description](configuration-file-description.md)
            -   [Management Module and SSL](management-module-and-ssl.md)
            -   [Verifying Whether the Web Service Is Successfully Set Up](verifying-whether-the-web-service-is-successfully-set-up.md)

        -   [Nginx Server](nginx-server.md)
            -   [Overview](overview-3.md)
            -   [Installing Nginx](installing-nginx.md)
            -   [Managing Nginx](managing-nginx.md)
            -   [Configuration File Description](configuration-file-description-4.md)
            -   [Management Modules](management-modules.md)
            -   [Verifying Whether the Web Service Is Successfully Set Up](verifying-whether-the-web-service-is-successfully-set-up-5.md)


    -   [Setting Up the Database Server](setting-up-the-database-server.md)
        -   [PostgreSQL Server](postgresql-server.md)
            -   [Software Description](software-description.md)
            -   [Configuring the Environment](configuring-the-environment.md)
                -   [Disabling the Firewall and Automatic Startup](disabling-the-firewall-and-automatic-startup.md)
                -   [Disabling SELinux](disabling-selinux.md)
                -   [Creating a User Group and a User](creating-a-user-group-and-a-user.md)
                -   [Creating Data Drives](creating-data-drives.md)
                -   [Data Directory Authorization](data-directory-authorization.md)

            -   [Installing, Running, and Uninstalling PostgreSQL](installing-running-and-uninstalling-postgresql.md)
                -   [Installing PostgreSQL](installing-postgresql.md)
                -   [Running PostgreSQL](running-postgresql.md)
                    -   [Initializing the Database](initializing-the-database.md)
                    -   [Starting the Database](starting-the-database.md)
                    -   [Logging In to the Database](logging-in-to-the-database.md)
                    -   [Configuring the Database Accounts and Passwords](configuring-the-database-accounts-and-passwords.md)
                    -   [Exiting the Database](exiting-the-database.md)
                    -   [Stopping the Database](stopping-the-database.md)

                -   [Uninstalling PostgreSQL](uninstalling-postgresql.md)

            -   [Managing Database Roles](managing-database-roles.md)
                -   [Creating a Role](creating-a-role.md)
                -   [Viewing Roles](viewing-roles.md)
                -   [Modifying a Role](modifying-a-role.md)
                -   [Deleting a Role](deleting-a-role.md)
                -   [Role Permissions](role-permissions.md)
                -   [Deleting User Permissions](deleting-user-permissions.md)

            -   [Managing Databases](managing-databases.md)
                -   [Creating a Database](creating-a-database.md)
                -   [Selecting a Database](selecting-a-database.md)
                -   [Viewing a Database](viewing-a-database.md)
                -   [Deleting a Database](deleting-a-database.md)
                -   [Backing Up a Database](backing-up-a-database.md)
                -   [Restoring a Database](restoring-a-database.md)


        -   [MariaDB Server](mariadb-server.md)
            -   [Software Description](software-description-6.md)
            -   [Configuring the Environment](configuring-the-environment-7.md)
                -   [Disabling the Firewall and Automatic Startup](disabling-the-firewall-and-automatic-startup-8.md)
                -   [Disabling SELinux](disabling-selinux-9.md)
                -   [Creating a User Group and a User](creating-a-user-group-and-a-user-10.md)
                -   [Creating Data Drives](creating-data-drives-11.md)
                -   [Creating a Database Directory and Granting Permissions](creating-a-database-directory-and-granting-permissions.md)

            -   [Installing, Running, and Uninstalling MariaDB Server](installing-running-and-uninstalling-mariadb-server.md)
                -   [Installing MariaDB](installing-mariadb.md)
                -   [Running MariaDB Server](running-mariadb-server.md)
                -   [Uninstalling MariaDB](uninstalling-mariadb.md)

            -   [Managing Database Users](managing-database-users.md)
                -   [Creating Users](creating-users.md)
                -   [Viewing Users](viewing-users.md)
                -   [Modifying Users](modifying-users.md)
                -   [Deleting Users](deleting-users-12.md)
                -   [Granting Permissions to a User](granting-permissions-to-a-user.md)
                -   [Deleting User Permissions](deleting-user-permissions-13.md)

            -   [Managing Databases](managing-databases-14.md)
                -   [Creating a Database](creating-a-database-15.md)
                -   [Viewing a Database](viewing-a-database-16.md)
                -   [Selecting a Database](selecting-a-database-17.md)
                -   [Deleting a Database](deleting-a-database-18.md)
                -   [Backing Up a Database](backing-up-a-database-19.md)
                -   [Restoring a Database](restoring-a-database-20.md)


        -   [MySQL Server](mysql-server.md)
            -   [Software Description](software-description-21.md)
            -   [Configuring the Environment](configuring-the-environment-22.md)
                -   [Disabling the Firewall and Automatic Startup](disabling-the-firewall-and-automatic-startup-23.md)
                -   [Disabling SELinux](disabling-selinux-24.md)
                -   [Creating a User Group and a User](creating-a-user-group-and-a-user-25.md)
                -   [Creating Data Drives](creating-data-drives-26.md)
                -   [Creating a Database Directory and Granting Permissions](creating-a-database-directory-and-granting-permissions-27.md)

            -   [Installing, Running, and Uninstalling MySQL](installing-running-and-uninstalling-mysql.md)
                -   [Installing MySQL](installing-mysql.md)
                -   [Running MySQL](running-mysql.md)
                -   [Uninstalling MySQL](uninstalling-mysql.md)

            -   [Managing Database Users](managing-database-users-28.md)
                -   [Creating Users](creating-users-29.md)
                -   [Viewing Users](viewing-users-30.md)
                -   [Modifying Users](modifying-users-31.md)
                -   [Deleting Users](deleting-users-32.md)
                -   [Granting Permissions to a User](granting-permissions-to-a-user-33.md)
                -   [Deleting User Permissions](deleting-user-permissions-34.md)

            -   [Managing Databases](managing-databases-35.md)
                -   [Creating a Database](creating-a-database-36.md)
                -   [Viewing a Database](viewing-a-database-37.md)
                -   [Selecting a Database](selecting-a-database-38.md)
                -   [Deleting a Database](deleting-a-database-39.md)
                -   [Backing Up a Database](backing-up-a-database-40.md)
                -   [Restoring a Database](restoring-a-database-41.md)




-   [FAQs](faqs.md)
    -   [Why Is the Memory Usage of the libvirtd Service Queried by Running the systemctl and top Commands Different?](why-is-the-memory-usage-of-the-libvirtd-service-queried-by-running-the-systemctl-and-top-commands-di.md)
    -   [An Error Occurs When stripsize Is Set to 4 During RAID 0 Volume Configuration](an-error-occurs-when-stripsize-is-set-to-4-during-raid-0-volume-configuration.md)
    -   [Failed to Compile MariaDB Using rpmbuild](failed-to-compile-mariadb-using-rpmbuild.md)
    -   [Failed to Start the SNTP Service Using the Default Configuration](failed-to-start-the-sntp-service-using-the-default-configuration.md)
    -   [Installation Failure Caused by Software Package Conflict, File Conflict, or Missing Software Package](installation-failure-caused-by-software-package-conflict-file-conflict-or-missing-software-package.md)


