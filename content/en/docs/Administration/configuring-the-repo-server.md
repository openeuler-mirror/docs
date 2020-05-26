# Configuring the Repo Server

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>This section uses the  **openEuler-20.03-LTS-aarch64-dvd.iso**  image file as an example. Modify the image file as required.  
<!-- TOC -->

- [Configuring the Repo Server](#configuring-the-repo-server)
    - [Overview](#overview)
    - [Creating or Updating a Local Repo Source](#creating-or-updating-a-local-repo-source)
        - [Obtaining the ISO Image File](#obtaining-the-iso-image-file)
        - [Mounting an ISO File to Create a Repo Source](#mounting-an-iso-file-to-create-a-repo-source)
        - [Creating a Local Repo Source](#creating-a-local-repo-source)
        - [Updating the Repo Source](#updating-the-repo-source)
    - [Deploying the Remote Repo Source](#deploying-the-remote-repo-source)
        - [Installing and Configuring Nginx](#installing-and-configuring-nginx)
        - [Starting Nginx](#starting-nginx)
        - [Deploying the Repo Source](#deploying-the-repo-source)
    - [Using the repo Source](#using-the-repo-source)
        - [Configuring repo as the yum Source](#configuring-repo-as-the-yum-source)
        - [repo Priority](#repo-priority)
        - [Related Commands of dnf](#related-commands-of-dnf)

<!-- /TOC -->


## Overview

Create the  **openEuler-20.03-LTS-aarch64-dvd.iso**  image provided by openEuler as the repo source. The following uses Nginx as an example to describe how to deploy the repo source and provide the HTTP service.

## Creating or Updating a Local Repo Source

Mount the openEuler image  **openEuler-20.03-LTS-aarch64-dvd.iso**  to create and update a repo source.


### Obtaining the ISO Image File

Obtain the openEuler software package from the following website:

[https://openeuler.org/zh/download.html](https://openeuler.org/zh/download.html)

### Mounting an ISO File to Create a Repo Source

Run the mount command to mount the image file.

The following is an example:

```
mount /home/openEuler/openEuler-20.03-LTS-aarch64-dvd.iso  /mnt/
```

The mounted mnt directory is as follows:

```
.
│── boot.catalog
│── docs
│── EFI
│── images
│── Packages
│── repodata
│── TRANS.TBL
└── RPM-GPG-KEY-openEuler
```

In the preceding command,  **Packages**  indicates the directory where the RPM package is stored,  **repodata**  indicates the directory where the repo source metadata is stored, and  **RPM-GPG-KEY-openEuler**  indicates the public key for signing openEuler.

### Creating a Local Repo Source

You can copy related files in the image to a local directory to create a local repo source. The following is an example:

```
mount /home/openEuler/openEuler-20.03-LTS-aarch64-dvd.iso  /mnt/
mkdir -p /srv/repo/
cp -r /mnt/Packages /srv/repo/
cp -r /mnt/repodata /srv/repo/
cp -r /mnt/RPM-GPG-KEY-openEuler /srv/repo/
```

The local repo directory is as follows:

```
.
│── Packages
│── repodata
└── RPM-GPG-KEY-openEuler
```

**Packages**  indicates the directory where the RPM package is stored,  **repodata**  indicates the directory where the repo source metadata is stored, and  **RPM-GPG-KEY-openEuler**  indicates the public key for signing openEuler.

### Updating the Repo Source

You can update the repo source in either of the following ways:

-   Use the ISO file of the new version to update the existing repo source. The method is the same as that for creating a repo source. That is, mount the image or copy the image to the local directory.
-   Add rpm packages to the Packages directory of the repo source and update the repo source. You can run the createrepo command to update the repo source.

    ```
    dnf install createrepo
    createrepo --update --workers=10 /srv/repo
    ```

    In this command, \-\-update indicates the update, and \-\-workers indicates the number of threads, which can be customized.


## Deploying the Remote Repo Source

Install openEuler OS and deploy the repo source using Nginx on openEuler OS.



### Installing and Configuring Nginx

1.  Download the Nginx tool and install it.
2.  After installing Nginx, configure /etc/nginx/nginx.conf.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The configuration content in this document is for reference only. You can configure the content based on the site requirements \(for example, security hardening requirements\).  

    ```
    user  root;
    worker_processes auto;                             # You are advised to set this parameter to core-1.
    error_log /var/log/nginx/error.log warn;            # log storage location
    pid        /var/run/nginx.pid;
    
    events {
        worker_connections  1024;
    }
    
    http {
        include       /etc/nginx/mime.types;
        default_type  application/octet-stream;
    
        log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                          '$status $body_bytes_sent "$http_referer" '
                          '"$http_user_agent" "$http_x_forwarded_for"';
    
        access_log  /var/log/nginx/access.log  main;
        sendfile        on;
        keepalive_timeout  65;
    
        server {
            listen       80;
    server_name localhost;                         #Server name (URL)
            client_max_body_size 4G;
    root /srv/repo;                              #Default service directory
    
            location / {
    autoindex on;                                    # Enable the access to lower-layer files in the directory.
                autoindex_exact_size on;
                autoindex_localtime  on; 
            }
    
        }
    
    }
    ```


### Starting Nginx

1.  Run the systemd command to start the Nginx service.

    ```
    systemctl enable nginx
    systemctl start nginx
    ```

2.  You can run the following command to check whether the Nginx is started successfully:

    ```
    systemctl status nginx
    ```

    -   [Figure 1](#en-us_topic_0151920971_fd25e3f1d664b4087ae26631719990a71)  indicates that the Nginx service is started successfully.

    **Figure  1**  The Nginx service is successfully started.<a name="en-us_topic_0151920971_fd25e3f1d664b4087ae26631719990a71"></a>  
    ![](figures/the-nginx-service-is-successfully-started.png "the-nginx-service-is-successfully-started")

    -   If the Nginx service fails to be started, view the error information.

    ```
    systemctl status nginx.service --full
    ```

    **Figure  2**  Nginx startup failure<a name="en-us_topic_0151920971_f1f9f3d086e454b9cba29a7cae96a4c54"></a>  
    ![](figures/nginx-startup-failure.png "nginx-startup-failure")

    As shown in  [Figure 2](#en-us_topic_0151920971_f1f9f3d086e454b9cba29a7cae96a4c54), the Nginx service fails to be created because the /var/spool/nginx/tmp/client\_body directory fails to be created. You need to manually create the directory. Similar problems are solved as follows:

    ```
    mkdir -p /var/spool/nginx/tmp/client_body
    mkdir -p /var/spool/nginx/tmp/proxy
    mkdir -p /var/spool/nginx/tmp/fastcgi
    mkdir -p /usr/share/nginx/uwsgi_temp
    mkdir -p /usr/share/nginx/scgi_temp
    ```


### Deploying the Repo Source

1.  Run the following command to create the /srv/repo directory specified in the Nginx configuration file /etc/nginx/nginx.conf:

    ```
    mkdir -p /srv/repo
    ```

2.  Set the SELinux working mode to the permissive mode:

    ```
    setenforce permissive
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >After the repo server is restarted, you need to configure the repo server again.  

3.  Configure firewall rules to enable the port \(port 80\) configured for Nginx.

    ```
    firewall-cmd --add-port=80/tcp --permanent
    firewall-cmd --reload
    ```

    Check whether port 80 is enabled. If the output is **yes**, port 80 is enabled.

    ```
    firewall-cmd --query-port=80/tcp
    ```

    You can also enable port 80 using iptables.

    ```
    iptables -I INPUT -p tcp --dport 80 -j ACCEPT
    ```

4.  After the Nginx service is configured, you can use the IP address to access the web page, as shown in  [Figure 3](#en-us_topic_0151921017_fig1880404110396).

    **Figure  3**  Nginx deployment succeeded<a name="en-us_topic_0151921017_fig1880404110396"></a>  
    ![](figures/nginx-deployment-succeeded.png "nginx-deployment-succeeded")

5.  Use either of the following methods to add the repo source to the /srv/repo directory:
    -   Copy related files in the image to the /srv/repo directory.

        ```
        mount /home/openEuler/openEuler-20.03-LTS-aarch64-dvd.iso  /mnt/
        cp -r /mnt/Packages /srv/repo/
        cp -r /mnt/repodata /srv/repo/
        cp -r /mnt/RPM-GPG-KEY-openEuler /srv/repo/
        ```

        The  **openEuler-20.03-LTS-aarch64-dvd.iso**  file is stored in the  **/home/openEuler**  directory.

    -   Create a soft link for the repo source in the /srv/repo directory.

        ```
        ln -s /home/openEuler/os /srv/repo/os
        ```

        /home/openEuler/os is the created repo source, and /srv/repo/os points to /home/openEuler/os.



## Using the repo Source

The repo source can be configured as a yum source. Yellow dog Updater,Modified \(yum for short\) is a shell front-end software package manager. Based on the Redhat package manager \(RPM\), YUM can automatically download the rpm package from the specified server, install the package, and process dependent relationship. It supports one-off installation for all dependent software packages.


### Configuring repo as the yum Source

You can configure the built repo as the yum source and create the \*\*\*.repo configuration file \(the extension .repo is mandatory\) in the /etc/yum.repos.d/ directory. You can configure the yum source on the local host or HTTP server.

-   Configuring the local yum source.

    Create the  **openEuler.repo**  file in the  **/etc/yum.repos.d**  directory and use the local repository as the yum source. The content of the  **openEuler.repo**  file is as follows:

    ```
    [base]
    name=base
    baseurl=file:///srv/repo
    enabled=1
    gpgcheck=1
    gpgkey=file:///srv/repo/RPM-GPG-KEY-openEuler
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    > _gpgcheck_  indicates whether to enable the GNU privacy guard \(GPG\) to check the validity and security of sources of RPM packages.  **1**  indicates GPG check is enabled.  **0**  indicates the GPG check is disabled. If this option is not specified, the GPG check is enabled by default.  
    > _gpgkey_  is the storage path of the signature public key.  

-   Configuring the yum source for the HTTP server

    Create the  **openEuler.repo**  file in the  **/etc/yum.repos.d**  directory and use the repository on the HTTP server as the yum source. The content of the  **openEuler.repo**  file is as follows:

    ```
    [base]
    name=base
    baseurl=http://192.168.1.2/
    enabled=1
    gpgcheck=1
    gpgkey=http://192.168.1.2/RPM-GPG-KEY-openEuler
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >192.168.1.2 is an example. Replace it with the actual IP address.  


### repo Priority

If there are multiple repo sources, you can set the repo priority in the .repo file. If the priority is not set, the default priority is 99. If the same RPM package exists in the sources with the same priority, the latest version is installed.  **1**  indicates the highest priority and  **99**  indicates the lowest priority. For example, set the priority of  **openEuler.repo**  to  **2**.

```
[base]
name=base
baseurl=http://192.168.1.2/
enabled=1
priority=2
gpgcheck=1
gpgkey=http://192.168.1.2/RPM-GPG-KEY-openEuler
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
> _gpgcheck_  indicates whether to enable the GNU private guard \(GPG\) to check the validity and security of sources of RPM packages.  **1**  indicates GPG check is enabled.  **0**  indicates the GPG check is disabled. If this option is not specified, the GPG check is enabled by default.  
> _gpgkey_  is the storage path of the signature public key.  

### Related Commands of dnf

The dnf command can automatically parse the dependency between packages during installation and upgrade. The common usage method is as follows:

```
dnf <command> <packages name>
```

Common commands are as follows:

-   Installation

    ```
    dnf install <packages name>
    ```

-   Upgrade

    ```
    dnf update <packages name>
    ```

-   Rollback

    ```
    dnf downgrade <packages name>
    ```

-   Checking for update

    ```
    dnf check-update
    ```

-   Uninstallation

    ```
    dnf remove <packages name>
    ```

-   Query

    ```
    dnf search <packages name>
    ```

-   Local installation

    ```
    dnf localinstall <absolute path to package name>
    ```

-   Viewing historical records

    ```
    dnf history
    ```

-   Clearing cache records

    ```
    dnf clean all
    ```

-   Updating cache

    ```
    dnf makecache
    ```