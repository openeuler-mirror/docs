# Service Management

This topic describes how to manage your operating system and services using the systemd.

[[toc]]

## Introduction to systemd

The systemd is a system and service manager for Linux operating systems. It is designed to be backward compatible with SysV and LSB init scripts, and provides a number of features such as Socket & D-Bus based activation of services, on-demand activation of daemons, system state snapshots, and mount & automount point management. With systemd, the service control logic and parallelization are refined.

### Systemd Units
In systemd, the targets of most actions are units, which are resources systemd know how to manage. Units are categorized by the type of resources they represent and defined in unit configuration files. For example, the avahi.service unit represents the Avahi daemon and is defined in the  **avahi.service**  file.  [Table 1](#en-us_topic_0151921012_t2dcb6d973cc249ed9ccd56729751ca6b)  lists available types of systemd units.

**Table  1**  Available types of systemd units

|  Unit Type |File Extension  |Description  |
|:---  |:----  |:----  |
| Service unit | .service | A system service. |
|  Target unit |  .target |  A group of systemd units. |
|  Automount unit |  .automount | A file system automount point. |
|  Device unit |  .device | A device file recognized by the kernel.  |
| Mount unit  | .mount  |  A file system mount point. |
| Path unit  |  .path |  A file or directory in a file system. |
|  Scope unit | .scope | An externally created process. |
|  Slice unit |  .slice | A group of hierarchically organized units that manage system processes. |
| Socket unit  |  .socket |  An inter-process communication socket.|
| Swap unit  |   .swap| A swap device or a swap file. |
|  Timer unit |  .timer |  A systemd timer. |


All available types of systemd units are located in one of the following directories listed in  [Table 2](#en-us_topic_0151921012_t2523a0a9a0c54f9b849e52d1efa0160c).

**Table  2**  Locations of available systemd units


|  Directory   |Description  |
|:---  |:----  |
| /usr/lib/systemd/system/| Systemd units distributed with installed RPM packages. |
|  /run/systemd/system/ |  Systemd units created at runtime.|
| /etc/systemd/system/ |  Systemd units created and managed by the system administrator. |

## Features

### Fast Activation
The systemd provides more aggressive parallelization than UpStart. The use of Socket- and D-Bus based activation reduces the time required to boot the operating system.

To accelerate system boot, systemd seeks to:

-   Activate only the necessary processes
-   Activate as many processes as possible in parallel

### On-Demand Activation
During SysVinit initialization, it activates all the possible background service processes that might be used. Users can log in only after all these service processes are activated. The drawbacks in SysVinit are obvious: slow system boot and a waste of system resources.

Some services may rarely or even never be used during system runtime. For example, CUPS, printing services are rarely used on most servers. SSHD is rarely accessed on many servers. It is unnecessary to spend time on starting these services and system resources.

systemd can only be activated when a service is requested. If the service request is over, systemd stops.

### Service Lifecycle Management by Cgroups
An important role of an init system is to track and manage the lifecycle of services. It can start and stop a service. However, it is more difficult than you could ever imagine to encode an init system into stopping services.

Service processes often run in background as daemons and sometimes fork twice. In UpStart, the expect stanza in the configuration file must be correctly configured. Otherwise, UpStart is unable to learn a daemon's PID by counting the number of forks. 

Things are made simpler with Cgroups, which have long been used to manage system resource quotas. The ease of use comes largely from its file-system-like user interface. When a parent service creates a child service, the latter inherits all attributes of the Cgroup to which the parent service belongs. This means that all relevant services are put into the same Cgroup. The systemd can find the PIDs of all relevant services simply by traversing their control group and then stop them one by one.

### Mount and Automount Point Management
In traditional Linux systems, users can use the  **/etc/fstab**  file to maintain fixed file system mount points. These mount points are automatically mounted during system startup. Once the startup is complete, these mount points are available. These mount points are file systems critical to system running, such as the  **HOME**  directory. Like SysVinit, systemd manages these mount points so that they can be automatically mounted at system startup. systemd is also compatible with the  **/etc/fstab**  file. You can continue to use this file to manage mount points.

There are times when you need to mount or unmount on demand. For example, a temporary mounting point is required for you to access the DVD content, and the mounting point is canceled \(using the  **umount**  command\) if you no longer need to access the content, thereby saving resources. This is traditionally achieved using the autofs service.

The systemd allows automatic mount without a need to install autofs.

### Transactional Dependency Management
System boot involves a host of separate jobs, some of which may be dependent on each other. For example, a network file system \(NFS\) can be mounted only after network connectivity is activated. The systemd can run a large number of dependent jobs in parallel, but not all of them. Looking back to the NFS example, it is impossible to mount NFS and activate network at the same time. Before running a job, systemd calculates its dependencies, creates a temporary transaction, and verifies that this transaction is consistent \(all relevant services can be activated without any dependency on each other\).

### Compatibility with SysVinit Scripts
Like UpStart, systemd introduces new configuration methods and has new requirements for application development. If you want to replace the currently running initialization system with systemd, systemd must be compatible with the existing program. It is difficult to modify all the service code in any Linux distribution in a short time for the purpose of using systemd.

The systemd provides features compatible with SysVinit and LSB initscripts. You do not need to modify the existing services and processes in the system. This reduces the cost of migrating the system to systemd, making it possible for users to replace the existing initialization system with systemd.

### System State Snapshots and System Restoration
The systemd can be started on demand. Therefore, the running status of the system changes dynamically, and you cannot know the specific services that are running in the system. systemd snapshots enable the current system running status to be saved and restored.

For example, if services A and B are running in the system, you can run the  **systemd**  command to create a snapshot for the current system running status. Then stop process A or make any other change to the system, for example, starting process C. After these changes, run the snapshot restoration command of systemd to restore the system to the point at which the snapshot was taken. That is, only services A and B are running. A possible application scenario is debugging. For example, when an exception occurs on the server, a user saves the current status as a snapshot for debugging, and then perform any operation, for example, stopping the service. After the debugging is complete, restore the snapshot.

## Managing System Services

The systemd provides the systemctl command to start, stop, restart, view, enable, and disable system services.

### Comparison Between SysVinit and systemd Commands
The  **systemctl**  command from the  **systemd**  command has the functions similar to the  **SysVinit**  command. Note that the  **service**  and  **chkconfig**  commands are supported in this version. For details, see  [Table 3](#en-us_topic_0151920917_ta7039963b0c74b909b72c22cbc9f2e28). You are advised to manage system services by running the  **systemctl**  command.

**Table  3**  Comparison between SysVinit and systemd commands


|  sysvinit命令   |systemd命令  |备注  |
|:---  |:----  |:----  |
| service network start | systemctl start network.service | Starts a service.|
| service network stop | systemctl stop network.service | Stops a service. |
| service network restart | systemctl restart network.service | Restarts a service. |
| service network reload | systemctl reload network.service | Reloads a configuration file without interrupting an operation. |
| service network condrestart | systemctl condrestart network.service | Restarts a service only if it is running. |
| service network status | systemctl status network.service | Checks the service running status. |
| chkconfig network on | systemctl enable network.service | Enables a service when the service activation time arrives or a trigger condition for enabling the service is met. |
| chkconfig network off | systemctl disable network.service |Disables a service when the service activation time arrives or a trigger condition for disabling the service is met.|
| chkconfig network | systemctl is-enabled network.service | Checks whether a service is enabled. |
| chkconfig \-\-list | systemctl list-unit-files \-\-type=service | Lists all services in each runlevel and checks whether they are enabled. |
| chkconfig network \-\-list | ls /etc/systemd/system/*.wants/network.service | Lists the runlevels in which a service is enabled and those in which the service is disabled. |
| chkconfig network \-\-add | systemctl daemon-reload | Used when you need to create a service file or change settings. |


### Listing Services
To list all currently loaded services, run the following command:

```
systemctl list-units --type service
```

To list all services regardless of whether they are loaded, run the following command \(with the all option\):

```
systemctl list-units --type service --all
```

Example list of all currently loaded services:

```
$ systemctl list-units --type service
UNIT                        LOAD   ACTIVE     SUB     JOB   DESCRIPTION  
atd.service                 loaded active     running       Deferred execution scheduler  
auditd.service              loaded active     running       Security Auditing Service  
avahi-daemon.service        loaded active     running       Avahi mDNS/DNS-SD Stack  
chronyd.service             loaded active     running       NTP client/server  
crond.service               loaded active     running       Command Scheduler  
dbus.service                loaded active     running       D-Bus System Message Bus  
dracut-shutdown.service     loaded active     exited        Restore /run/initramfs on shutdown  
firewalld.service           loaded active     running       firewalld - dynamic firewall daemon  
getty@tty1.service          loaded active     running       Getty on tty1  
gssproxy.service            loaded active     running       GSSAPI Proxy Daemon  
irqbalance.service          loaded active     running       irqbalance daemon  
iscsid.service              loaded activating start   start Open-iSCSI
```

### Displaying Service Status
To display the status of a service, run the following command:

```
systemctl status name.service
```

[Table 4](#en-us_topic_0151920917_t36cd267d69244ed39ae06bb117ed8e62)  describes the parameters in the command output.

**Table  4**  Output parameters


|  Parameter   |Description  |
|:---  |:----  |
| Loaded| Information on whether the service has been loaded, the absolute path to the service file, and a note of whether the service is enabled.|
|  Active |  Information on whether the service is running and a time stamp.|
| Main PID |  PID of the service. |
| CGroup |  Additional information about related control groups. |


To verify whether a particular service is running, run the following command:

```
systemctl is-active name.service
```

The output of the  **is-active**  command is as follows:

**Table  5**  Output of the is-active command

|  Status   |Description  |
|:---  |:----  |
| active(running)| One or more services are running in the system. |
|  active(exited) |  A service that ends properly after being executed only once. Currently, no program is running in the system. For example, the quotaon function is performed only when the program is started or mounted.|
| active(waiting) |  The program needs to wait for other events to continue running. For example, the print queue service is being started, but it needs to be queued (print jobs) so that it can continue to wake up the printer service to perform the next print function. |
| inactive |  The service is not running. |


Similarly, to determine whether a particular service is enabled, run the following command:

```
systemctl is-enabled name.service
```

The output of the  **is-enabled**  command is as follows:

**Table  6**  Output of the is-enabled command

|  Status   |Description  |
|:---  |:----  |
| enabled| Has been permanently enabled through Alias= Alias, .wants/, or .requires/ soft link in the /etc/systemd/system/ directory. |
|  enabled-runtime |  Has been temporarily enabled through Alias= Alias, .wants/, or .requires/ soft link in the /run/systemd/system/ directory.|
| linked |  Although the unit file is not in the standard unit directory, one or more soft links pointing to the unit file exist in the /etc/systemd/system/ permanent directory. |
| linked-runtime | Although the unit file is not in the standard unit directory, one or more soft links pointing to the unit file exist in the /run/systemd/system/ temporary directory. |
| masked | Has been masked permanently by the /etc/systemd/system/ directory (soft link to /dev/null). Therefore, the start operation fails. |
| masked-runtime |Has been masked temporarily by the /run/systemd/systemd/ directory (soft link to /dev/null). Therefore, the start operation fails. |
| static | Not enabled. There is no option available for the enable command in the [Install] section of the unit file. |
| indirect | Not enabled. But the list of values for the Also= option in the [Install] section of the unit file is not empty (that is, some units in the list may have been enabled), or the unit file has an alias soft link which is not in the Also= list. For a template unit, it indicates that an instance different from DefaultInstance= is enabled. |
| disabled | Not enabled. But the [Install] section of the unit file contains options available for the enable command. |
| generated | The unit file is dynamically generated by the unit generator. The generated unit file may not be directly enabled, but is implicitly enabled by the unit generator. |
| transient | The unit file is dynamically and temporarily generated by the runtime API. The temporary unit may not be enabled. |
| bad | The unit file is incorrect or other errors occur. is-enabled does not return this status, but displays an error message. The list-unit-files command may display this unit.|

For example, to display the status of gdm.service, run the  **systemctl status gdm.service**  command.

```
# systemctl status gdm.service
gdm.service - GNOME Display Manager   Loaded: loaded (/usr/lib/systemd/system/gdm.service; enabled)   Active: active (running) since Thu 2013-10-17 17:31:23 CEST; 5min ago
 Main PID: 1029 (gdm)
   CGroup: /system.slice/gdm.service
           ├─1029 /usr/sbin/gdm
           ├─1037 /usr/libexec/gdm-simple-slave --display-id /org/gno...           
           └─1047 /usr/bin/Xorg :0 -background none -verbose -auth /r...Oct 17 17:31:23 localhost systemd[1]: Started GNOME Display Manager.
```

### Starting a Service
To start a service, run the following command as the user  **root**:

```
systemctl start name.service
```

For example, to start the httpd service, run the following command:

```
# systemctl start httpd.service
```

### Stopping a Service
To stop a service, run the following command as the user  **root**:

```
systemctl stop name.service
```

For example, to stop the Bluetooth service, run the following command:

```
# systemctl stop bluetooth.service
```

### Restarting a Service
To restart a service, run the following command as the user  **root**:

```
systemctl restart name.service
```

This command stops the selected service in the current session and immediately starts it again. If the selected service is not running, this command starts it too.

For example, to restart the Bluetooth service, run the following command:

```
# systemctl restart bluetooth.service
```

### Enabling a Service
To configure a service to start automatically at system boot time, run the following command as the user  **root**:

```
systemctl enable name.service
```

For example, to configure the httpd service to start automatically at system boot time, run the following command:

```
# systemctl enable httpd.service
ln -s '/usr/lib/systemd/system/httpd.service' '/etc/systemd/system/multi-user.target.wants/httpd.service'
```

### Disabling a Service
To prevent a service from starting automatically at system boot time, run the following command as the user  **root**:

```
systemctl disable name.service
```

For example, to prevent the Bluetooth service from starting automatically at system boot time, run the following command:

```
# systemctl disable bluetooth.service
Removed /etc/systemd/system/bluetooth.target.wants/bluetooth.service.
Removed /etc/systemd/system/dbus-org.bluez.service.
```

## Changing a Runlevel

### Targets and Runlevels
In systemd, the concept of runlevels has been replaced with systemd targets to improve flexibility. For example, you can inherit an existing target and turn it into your own target by adding other services.  [Table 7](#en-us_topic_0151920939_t9af92c282ad240ea9a79fb08d26e8181)  provides a complete list of runlevels and their corresponding systemd targets.

**Table  7**  Mapping between runlevels and targets

|  Runlevel   |systemd Target  |Description  |
|:---  |:----  |:----  |
| 0 | runlevel0.target，poweroff.target | The operating system is powered off. |
| 1, s, single | runlevel1.target，rescue.target |The operating system is in single user mode. |
| 2, 4 | runlevel2.target，runlevel4.target，multi-user.target | The operating system is in user-defined or domain-specific runlevel (by default, it is equivalent to runlevel 3). |
| 3 | runlevel3.target，multi-user.target | The operating system is in non-graphical multi-user mode, and can be accessed from multiple consoles or networks. |
| 5 | runlevel5.target，graphical.target | The operating system is in graphical multi-user mode. All the services running at level 3 can be accessed through graphical login. |
| 6 | runlevel6.target，reboot.target | The operating system is rebooted. |
| emergency | emergency.target | Emergency shell. |


### Viewing the Default Startup Target
Run the following command to view the default startup target of the system:

```
systemctl get-default
```

### Viewing All Startup Targets
Run the following command to view all startup targets of the system:

```
systemctl list-units --type=target
```

### Changing the Default Target
To change the default target, run the following command as the user  **root**:

```
systemctl set-default name.target
```

### Changing the Current Target
To change the current target, run the following command as the user  **root**:

```
systemctl isolate name.target
```

### Changing to Rescue Mode
To change the operating system to rescue mode, run the following command as the user  **root**:

```
systemctl rescue
```

This command is similar to the  **systemctl isolate rescue.target**  command. After the command is executed, the following information is displayed on the serial port:

```
You are in rescue mode. After logging in, type "journalctl -xb" to viewsystem logs, "systemctl reboot" to reboot, "systemctl default" or "exit"to boot into default mode.
Give root password for maintenance
(or press Control-D to continue):
```

>![](./public_sys-resources/icon-note.gif) **NOTE:**   
>You need to restart the system to enter the normal working mode from the rescue mode.  

### Changing to Emergency Mode
To change the operating system to emergency mode, run the following command as the user  **root**:

```
systemctl emergency
```

This command is similar to the  **systemctl isolate emergency.target**  command. After the command is executed, the following information is displayed on the serial port:

```
You are in emergency mode. After logging in, type "journalctl -xb" to viewsystem logs, "systemctl reboot" to reboot, "systemctl default" or "exit"to boot into default mode.
Give root password for maintenance
(or press Control-D to continue):
```

>![](./public_sys-resources/icon-note.gif) **NOTE:**   
>You need to restart the system to enter the normal working mode from the emergency mode.  

## Shutting Down, Suspending, and Hibernating the Operating System

### systemctl Command
The systemd uses the systemctl command instead of old Linux system management commands to shut down, restart, suspend, and hibernate the operating system. Although previous Linux system management commands are still available in systemd for compatibility reasons, you are advised to use  **systemctl**  when possible. The mapping relationship is shown in  [Table 8](#en-us_topic_0151920964_t3daaaba6a03b4c36be9668efcdb61f3b).

**Table  8**  Mapping between old Linux system management commands and systemctl

|  Linux Management Command  |systemctl Command  | Description  |
|:---  |:----  |:----  |
| halt | systemctl halt | Shuts down the operating system. |
| poweroff | systemctl poweroff | Powers off the operating system. |
| reboot | systemctl reboot | Reboots the operating system. |


### Shutting Down the Operating System
To shut down the system and power off the operating system, run the following command as the user  **root**:

```
systemctl poweroff
```

To shut down the operating system without powering it off, run the following command as the user  **root**:

```
systemctl halt
```

By default, running either of these commands causes systemd to send an informative message to all login users. To prevent systemd from sending this message, run this command with the  **\-\-no\-wall**  option. The command is as follows:

```
systemctl --no-wall poweroff
```

### Restarting the Operating System
To restart the operating system, run the following command as the user  **root**:

```
systemctl reboot
```

By default, running either of these commands causes systemd to send an informative message to all login users. To prevent systemd from sending this message, run this command with the  **\-\-no\-wall**  option. The command is as follows:

```
systemctl --no-wall reboot
```

### Suspending the Operating System
To suspend the operating system, run the following command as the user  **root**:

```
systemctl suspend
```

### Hibernating the Operating System
To hibernate the operating system, run the following command as the user  **root**:

```
systemctl hibernate
```

To suspend and hibernate the operating system, run the following command as the user  **root**:

```
systemctl hybrid-sleep
```
