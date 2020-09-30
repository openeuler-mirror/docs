# pkgship

<!-- TOC -->

- [pkgship](#pkgship)
    - [Overview](#overview)
    - [Architecture](#architecture)
    - [Downloading Software](#downloading-software)
    - [Operating Environments](#operating-environments)
    - [Installing the Tool](#installing-the-tool)
    - [Configuring Parameters](#configuring-parameters)
    - [Starting and Stopping Services](#starting-and-stopping-services)
    - [Tool Usage](#tool-usage)

<!-- /TOC -->

## Overview

pkgship is a query tool used to manage the dependency of OS software packages and provide a complete dependency graph. The pkgship provides functions such as software package dependency query, lifecycle management, and patch query.

1. Software package dependency query: Allows community personnel to understand the impact on software when software packages are introduced, updated, or deleted.
2. Lifecycle management: Tracks the release status of upstream software packages so that the maintenance personnel can learn about the current software status and upgrade the software properly in a timely manner.
3. Patch query: Allows community personnel to learn about the patches in the openEuler software package and obtain the patch information. For details, see [patch-tracking](patch-tracking.md).

## Architecture

The system is developed using Flask-RESTful and adopts the SQLAlchemy ORM query framework.

![avatar](./images/pkgship_outline.png)

## Downloading Software

* The repo source is officially released at <https://repo.openeuler.org/>
* You can obtain the source code at <https://gitee.com/openeuler/openEuler-Advisor/tree/master/packageship>
* You can obtain the RPM package of the beta version at <https://117.78.1.88/project/show/openEuler:Mainline>

## Operating Environments

* The available memory is greater than 700 MB.
* The Python version is 3.8 or later.
* The SQLite version is 3.32 or later.

## Installing the Tool

You can use either of the following methods to install the tool:

* Method 1: Mount the repo source using DNF.   
Use DNF to mount the repo source where the pkgship is located (for details, see the [Application Development Guide](https://openeuler.org/zh/docs/20.09/docs/ApplicationDev/%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87.html)), run the following command to download and install the pkgship and its dependencies:
  
  ```bash
  dnf install pkgship
  ```

* Method 2: Install the RPM package. Download the RPM package of the pkgship and run the following command to install the pkgship (x.x-x indicates the version number and needs to be replaced with the actual one):
  
  ```bash
  rpm -ivh pkgship-x.x-x.oe1.noarch.rpm
  ```
  
  or the following command:
  
  ```bash
  dnf install pkgship-x.x-x.oe1.noarch.rpm
  ```

## Configuring Parameters

1. Configure the parameters in the configuration file. The default configuration file of the system is stored in **/etc/pkgship/packge.ini**. Modify the configuration file as required.
   
   ```basn
   vim /etc/pkgship/package.ini
   ```
   
   ```ini
   [SYSTEM CONFIGURATION]
   
   ; Directory for storing the YAML file imported during database initialization. The YAML file records the location of the imported SQLite file.
   init_conf_path=/etc/pkgship/conf.yaml
   
   ; Path for storing the SQLite file that is successfully imported
   data_base_path=/var/run/pkgship_dbs
   
   ; Write port
   write_port=8080
   
   ; Query port
   query_port=8090
   
   ; Write permission access IP address
   write_ip_addr=127.0.0.1
   
   ; Query permission access IP address
   query_ip_addr=127.0.0.1
   
   ; Address of the remote service. The command line can directly invoke the remote service to complete data requests. You only need to add the -remote parameter to the end of each command line.
   remote_host=https://api.openeuler.org/pkgmanage
   
   [LOG]
   
   ; Path for storing logs
   log_path=/var/log/pkgship/
   
   ; Log level as follows:
   ; INFO DEBUG WARNING ERROR CRITICAL
   log_level=INFO
   
   ; Log name
   log_name=log_info.log
   
   ; Number of logs that are dynamically created after the size of a log file reaches the upper limit.
   backup_count=10
   
   ; Size of each log file
   max_bytes=314572800
   
   [uWSGI SERVICE CONFIGURATION]
   
   ; Path for storing uwsgi log
   daemonize=/var/log/uwsgi.log
   
   ; Size of data transmitted at the front- and back-end
   buffer-size=65536
   
   ; HTTP connection time
   http-timeout=600
   
   ; Server response time
   harakiri=600
   
   [TIMEDTASK]
   
   ; Whether to enable scheduled tasks
   open=True
   
   ; Set the time when a scheduled task is triggered
   hour=3
   minute=0
   
   [LIFECYCLE]
   ; Remote storage address of the YAML address of each package
   warehouse_remote=https://gitee.com/openeuler/openEuler-Advisor/raw/master/upstream-info/
   
   ; When executing a scheduled task, you can enable multi-thread execution and set the number of threads in the thread pool based on the server configuration.
   pool_workers=10
   
   ; Warehouse name
   warehouse=src-openeuler
   
   ```

2. Create a YAML configuration file to initialize the database. By default, the conf.yaml file is stored in the **/etc/pkgship/** directory. Based on this configuration, the pkgship reads the name of the database to be created and the SQLite file to be imported. An example of the conf.yaml file is as follows:
   
   ```yaml
   - dbname: openEuler-20.09
     src_db_file: /etc/pkgship/src.sqlite
     bin_db_file: /etc/pkgship/bin.sqlite
     lifecycle: enable
     priority: 1
   ```

> To change the storage path, change the value of **init\_conf\_path** in the **package.ini** file.

## Starting and Stopping Services

The pkgship uses the uWSGI web server. The commands for starting and stopping the service are as follows. You can specify whether to start the read-only (write-only) service or start the read and write services at the same time.

```bash
pkgshipd start [manage/selfpkg]

pkgshipd stop [manage/selfpkg]
```

## Tool Usage

1. Initialize the database.
   
   > Application scenario: After the service is started, to query the package information and package dependency in the corresponding database, such as Mainline and openEuler 20.09, you need to import the SQLite (including the source code library and binary library), which is generated by the database using createrepo, to the service, and generate the corresponding DB file. When the **lifecycle** parameter of the database is set to enable in the conf.yaml file, a corresponding table is generated in **lifecycle.db** to record database information. The database table name (**tablename**) is read from this file subsequently. The **\[-filepath]** parameter is optional.
   
   ```bash
   pkgship init [-filepath path]
   ```
   
   > Parameter description:   
**-filepath**: Specifies the path of the initialized configuration file. You can use either a relative path or an absolute path. If no parameter is specified, the default configuration is used for initialization.

2. Query a single package.
   
   You can query the information about a source code package (**packagename**) in a specified database table (**tablename**).
   
   > Application scenario: You can query information about a specific source code package in a specified database. The **packagename** and **tablename** are mandatory.
   
   ```bash
   pkgship single packagename tablename
   ```
   
   > Parameter description:   
**packagename**: Specifies the name of the source code package to be queried.   
**tablename**: Specifies the database name.

3. Query all packages.
   
   Query information about all packages in the database.
   
   > Application scenario: You can query information about all software packages in a specified database. The **tablename** is mandatory, and the **\[-packagename]** and **\[-maintainer]** are optional.
   
   ```bash
   pkgship list tablename [-packagename pkgName] [-maintainer maintainer]
   ```
   
   > Parameter description:   
**tablename**: Specifies the database name.   
**-packagename**: Matches the package whose name contains the parameter string.   
**-maintainer**: Matches the package in which **maintainer** is a parameter.

4. Query the installation dependency.
   
   Query the installation dependency of the binary package (binaryName).
   
   > Application scenario: When you need to install the binary package A, you need to install B, the installation dependency of A, and C, the installation dependency of B, etc. A can be successfully installed only after all the installation dependencies are installed in the system. Therefore, before installing the binary package A, you may need to query all installation dependencies of A. You can run the following command to query multiple databases based on the default priority of the platform, and to customize the database query priority.
   
   ```bash
   pkgship installdep binaryName [-dbs dbName1 dbName2...]
   ```
   
   > Parameter description:   
**-dbs**: Specifies the database query priority. **dbName** indicates the database name.

5. Query the compilation dependency.
   
   Query all compilation dependencies of the source code package (**sourceName**).
   
   > Application scenario: To compile the source code package A, you need to install B, the compilation dependency package of A. To install B, you need to obtain all installation dependency packages of B. Therefore, before compiling the source code package A, you may need to query the compilation dependencies of A and all installation dependencies of these compilation dependencies. You can run the following command to query multiple databases based on the default priority of the platform, and to customize the database query priority.
   
   ```bash
   pkgship builddep sourceName [-dbs dbName1 dbName2...]
   ```
   
   > Parameter description:   
**-dbs**: Specifies the database query priority. **dbName** indicates the database name.

6. Query the self-compilation and self-installation dependencies.
   
   Query the installation and compilation dependencies of a specified binary package (**binaryName**) or source code package (**sourceName**). In the command, **\[pkgName]** indicates the name of the binary package or source code package to be queried. When querying a binary package, you can query all installation dependencies of the binary package, and the compilation dependencies of the source code package corresponding to the binary package, as well as all installation dependencies of these compilation dependencies. When querying a source code package, you can query its compilation dependency, and all installation dependencies of these compilation dependencies, as well as all installation dependencies of the binary packages generated by the source code package. In addition, you can run this command together with the corresponding parameters to query the self-compilation dependency of a software package and the dependency of a subpackage.
   
   > Application scenario: If you want to introduce a new software package based on the existing version library, you need to introduce all compilation and installation dependencies of the software package. You can run this command to query these two dependency types at the same time to know the packages introduced by the new software package, and to query binary packages and source code packages.
   
   ```bash
    pkgship selfbuild [pkgName] [-dbs dbName1 dbName2 ] [-t source] [-s 1] [-w 1]
   ```
   
   > Parameter description:   
**-dbs:** Specifies the database priority. **dbName** indicates the database name. The following is an example:
   
   > ```bash
   > pkgship selfbuild pkgName -dbs dbName1 dbName2 
   > ```
   
   > **-t source/binary**: Specifies whether the package **pkgName** to be queried is a source code package or a binary package. If **-t** is not added, the package is a binary package by default.   
**-s**: This parameter is added to query all installation dependencies and compilation dependencies of the software package (that is, compilation dependencies of the source code package on which compilation depends), and all installation dependencies of the compilation dependencies. In the command, **0** following the **-s** indicates that the self-compilation dependency is not queried, and 1 indicates that the self-compilation dependency is queried. The default value is **0**, and you can specify the value to **1**. If the **-s** is not added, all installation dependencies, layer-1 compilation dependencies, and layer-1 compilation dependencies of the software package are queried. The following is an example of querying self-compilation dependencies:
   
   > ```bash
   > pkgship selfbuild pkgName -t source -s 1
   > ```
   
   > **-w**: When a binary package is introduced and this parameter is added, the source code package corresponding to the binary package and all binary packages generated by the source code package are displayed in the query result. In the command, **0** following **-w** indicates that the corresponding subpackage is not queried, and **1** indicates that the corresponding subpackage is queried. The default value is **0**, and you can specify the value to **1**. When **-w** is not added, only the corresponding source code package is displayed in the query result when a binary package is introduced. The following is an example of querying a subpackage:
   
   > ```bash
   > pkgship selfbuild pkgName -w 1
   > ```

7. Query dependency.   
Query the packages that depend on the source code package (**sourceName**) in a database (**dbName**).
   
   > Application scenario: You can run this command to query the software packages that will be affected by the upgrade or deletion of the software source code package A. This command displays the source code packages (for example, B) whose compilation depends on all binary packages generated by the source code package A, and the binary packages (for example, C1) whose installation depends on all binary packages generated by A. This command also displays the source code packages (for example, D) whose compilation depends on C1 and the binary package generated by B, and the binary packages (for example, E1) whose installation depends on C1 and the binary package generated by B, etc. Iterate the packages that depend on these binary packages. **\[-w 0/1]** is an optional parameter. The following is an example:
   
   ```bash
    pkgship bedepend sourceName dbName [-w 1]
   ```
   
   > Parameter description   
**-w (0/1)**: If the command does not contain configuration parameters or **\[-w 0]**, by default, the query result does not contain the subpackage of the corresponding binary package. When the command is followed by the configuration parameter or **\[-w 1]**, the dependency of the binary package C1 is queried, as well as the dependency of other binary packages (for example, C2 and C3) generated by C, the source code package corresponding to C1.

8. Modify package information.
   
   > Application scenario: You can modify the information about the maintainer and maintenance level of a specified source code package. **[-Packagename]**, **\[-maintainer]**, **\[-maintainlevel]**, **\[-filefolder]**, and **\[--batch]** are optional parameters.
   
   You can modify the information with either of the following methods:   
Method 1: Specify the source code package name (**packagename**) to modify the information about the maintainer (**Newmaintainer**) and maintenance level (**Newmaintainlevel**) of the source code package. The following is an example:
   
   ```bash
   pkgship updatepkg [-packagename packagename] [-maintainer Newmaintainer] [-maintainlevel Newmaintainlevel]
   ```
   
   > Parameter description:   
**-packagename**: Specifies the name of the package to be maintained.   
**-maintainer**: Specifies the maintainer of the update package.   
**-maintainlevel**: Specifies the maintenance level of the update package. The value ranges from 1 to 4, and the default value is **1**.
   
   Method 2: Specify the file path, and the maintainer, and maintenance level of the batch update package. The **--batch** parameter must be added to this command. The following is an example:
   
   ```bash
   pkgship updatepkg [--batch] [-filefolder path]
   ```
   
   > Parameter description:   
**-filefolder**: Specifies the YAML file where the package information is stored. The specified directory can contain only the updated YAML files.   
**--batch**: Specifies the update in batches. This parameter must be used together with the **\[-filefolder]** parameter.
   
   You can create a file named A.yaml, set the package name to A, and specify the YAML content to modify the package information.   
The YAML format of the package information is as follows:
   
   ```
   maintainer：Newmaintainlevel
   maintainlevel： Newmaintainlevel
   ```

9. Delete databases.
   
   > Application scenario: Delete a specified database (**dbName**).
   
   ```bash
   pkgship rm dbName
   ```

10. Query table information.
    
    > Application scenario: View all data tables in the current lifecycle database.
    
    ```bash
     pkgship tables
    ```

11. Query issues.
    
    > Application scenario: View information about all issues in all source code packages. The optional parameters include **\[-packagename]**, **\[-issue\_type]**, **\[-issue\_status]**, **\[-maintainer]**, **\[-page N]**, and **\[-pagesize pageSize]**.
    
    ```bash
     pkgship issue [-packagename pkgName],[-issue_type issueType],[-issue_status issueStatus],[-maintainer maintainer],[-page N],[-pagesize pageSize]
    ```
    
    > Parameter description:   
**-packagename**: Specifies the package name for fuzzy query.   
**-issue\_type**: Specifies the issue type for query.   
**-issue\_status**: Specifies the issue status for query.   
**-maintainer**: Specifies a maintainer for query.   
**-page**: Specifies the data on page N to be queried.   
**-pagesize**: Specifies the number of data records displayed on each page.
    
    ```bash
    Run the following command to specify a package name for fuzzy search:
    pkgship issue -packagename pkgName
    ```
    
    ```bash
    Run the following command to specify an issue type for query:
    pkgship issue -issue_type issueType
    ```
    
    ```bash
    Run the following command to specify an issue status for query:
    pkgship issue -issue_status issueStatus
    ```
    
    ```bash
    Run the following command to specify a maintainer for query:
    pkgship issue -maintainer maintainer
    ```
    
    ```bash
    Run the following command to specify the data of page N for query:
    pkgship issue -page N
    ```
    
    ```bash
    Run the following command to specify the number of data items of each page for query:
    pkgship issue -pagesize pageSize
    ```

12. Update the lifecycle of the software package.
    
    > Application scenario: Update the information about the issue, maintainer, and maintenance level of all software packages in the lifecycle table. The optional parameters include **\[--issue]** and **\[--package]**.
    
    ```bash
    pkgship update [--issue] [--package]
    ```
    
    > Parameter description:   
**--issue**: Updates the issue information of all software packages in the lifecycle table. Based on the software package names in the lifecycle table, the system crawls the issue information corresponding to the software package.   
**--package**: Updates the information about the lifecycle, maintainer, and maintenance level of all software packages in the lifecycle table.
    
    ```bash
    Run the following command to update the issue information of all software packages in the lifecycle table:
    pkgship update --issue
    ```
    
    ```bash
    Run the following command to update the lifecycles, maintainers, and maintenance levels of all software packages in the lifecycle table:
    pkgship update --package
    ```