# Managing Software Package<a name="EN-US_TOPIC_0229622707"></a>

The DNF enables you to query, install, and delete software packages.

## Searching for Software Packages<a name="en-us_topic_0151920885_s46a04fab4c23483fae17879a8e41e065"></a>

You can search for the required RPM package by its name, abbreviation, or description. The command is as follows:

```
dnf search term
```

The following is an example:

```
$   dnf search httpd
========================================== N/S matched: httpd ==========================================
httpd.aarch64 : Apache HTTP Server
httpd-devel.aarch64 : Development interfaces for the Apache HTTP server
httpd-manual.noarch : Documentation for the Apache HTTP server
httpd-tools.aarch64  : Tools for use with the Apache HTTP Server
libmicrohttpd.aarch64  : Lightweight library for embedding a webserver in applications
mod_auth_mellon.aarch64  : A SAML 2.0 authentication module for the Apache Httpd Server
mod_dav_svn.aarch64  : Apache httpd module for Subversion server
```

## Listing Software Packages<a name="en-us_topic_0151920885_s7d3d259d897442d48923201cefd38681"></a>

To list all installed and available RPM packages in the system, run the following command:

```
dnf list all
```

To list a specific RPM package in the system, run the following command:

```
dnf list glob_expression...
```

The following is an example:

```
$ dnf list httpd
Available Packages
httpd.aarch64              2.4.34-8.h5.oe1           Local
```

## Displaying RPM Package Information<a name="en-us_topic_0151920885_sa3608ad5110a4227aec8c51533a2501d"></a>

To view information about one or more RPM packages, run the following command:

```
dnf info package_name...
```

The following is a command example:

```
$ dnf info httpd
Available Packages
Name        : httpd
Version     : 2.4.34
Release     : 8.h5.oe1
Arch        : aarch64 
Size        : 1.2 M
Repo        : Local
Summary     : Apache HTTP Server
URL         : http://httpd.apache.org/
License     : ASL 2.0
Description : The Apache HTTP Server is a powerful, efficient, and extensible
            : web server.
```

## Installing an RPM Package<a name="en-us_topic_0151920885_scd8c0a169c5a44c4b34089ed169e0b6d"></a>

To install a software package and all its dependencies that have not been installed, run the following command as the user  **root**:

```
dnf install package_name
```

You can also add software package names to install multiple software packages at the same time. Add the  **strict=False**  parameter to the /etc/dnf/dnf.conf configuration file and run the  **dnf**  command to add --setopt=strict=0. Run the following command as the user  **root**:

```
dnf install package_name package_name... --setopt=strict=0
```

The following is an example:

```
# dnf install httpd
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>If the RPM package fails to be installed, see  [Installation Failure Caused by Software Package Conflict, File Conflict, or Missing Software Package](installation-failure-caused-by-software-package-conflict-file-conflict-or-missing-software-package.md).  

## Downloading Software Packages<a name="en-us_topic_0151920885_s0639a9b8fd9542feaffd406ebc481d75"></a>

To download the software package using the DNF, run the following command as the user  **root**:

```
dnf download package_name
```

If you need to download the dependency packages that are not installed, add  **--resolve**. The command is as follows:

```
dnf download --resolve package_name
```

The following is an example:

```
# dnf download --resolve httpd
```

## Deleting a Software Package<a name="en-us_topic_0151920885_s871972d10c9b4632b8db0cf35bd6a3f4"></a>

To uninstall the software package and related dependent software packages, run the following command as the user  **root**:

```
dnf remove package_name...
```

The following is an example:

```
# dnf remove totem
```

