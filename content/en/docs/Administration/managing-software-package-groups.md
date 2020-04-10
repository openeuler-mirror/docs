# Managing Software Package Groups<a name="EN-US_TOPIC_0229622773"></a>

A software package set is a group of software packages that serve a common purpose, for example, a system tool set. You can use the DNF to install or delete software package groups, improving operation efficiency.

## Listing Software Package Groups<a name="en-us_topic_0151920930_s819c5bdbf2d944ce8d6e51218d242e02"></a>

The summary parameter can be used to list the number of all installed software package groups, available groups, and available environment groups in the system. The command is as follows:

```
dnf groups summary
```

The following is an example:

```
# dnf groups summary
Last metadata expiration check: 0:11:56 ago on Sat 17 Aug 2019 07:45:14 PM CST.
Available Groups: 8
```

To list all software package groups and their group IDs, run the following command:

```
dnf group list
```

The following is an example:

```
# dnf group list
Last metadata expiration check: 0:10:32 ago on Sat 17 Aug 2019 07:45:14 PM CST.
Available Environment Groups:
   Minimal Install
   Custom Operating System
   Server
Available Groups:
   Development Tools
   Graphical Administration Tools
   Headless Management
   Legacy UNIX Compatibility
   Network Servers
   Scientific Support
   Security Tools
   System Tools

```

## Displaying the Software Package Group Information<a name="en-us_topic_0151920930_seb574abb2d554bf5b83e8fd64928e387"></a>

To list the mandatory and optional packages contained in a software package group, run the following command:

```
dnf group info glob_expression...
```

The following is an example of displaying the Development Tools information:

```
# dnf group info "Development Tools"
Last metadata expiration check: 0:14:54 ago on Wed 05 Jun 2019 08:38:02 PM CST.

Group: Development Tools
 Description: A basic development environment.
 Mandatory Packages:
   binutils
   glibc-devel
   make
   pkgconf
   pkgconf-m4
   pkgconf-pkg-config
   rpm-sign
 Optional Packages:
   expect
```

## Installation Software Package Group<a name="en-us_topic_0151920930_s60f5aa4c97d4459a8228576824039ffa"></a>

Each software package group has its own name and corresponding group ID. You can use the software package group name or its ID to install the software package.

To install a software package group, run the following command as the user  **root**:

```
dnf group install group_name
```

```
dnf group install groupid
```

For example, to install the software package group of Development Tools, run the following command:

```
# dnf group install "Development Tools" 
```

```
# dnf group install development
```

## Deleting a Software Package Group<a name="en-us_topic_0151920930_s276dd3f12523439e957e3e91a78844de"></a>

To uninstall a software package group, you can use the group name or ID to run the following command as the user  **root**:

```
dnf group remove group_name
```

```
dnf group remove groupid
```

For example, to delete the software package group of Development Tools, run the following command:

```
# dnf group remove "Development Tools" 
```

```
# dnf group remove development
```

