# Features<a name="EN-US_TOPIC_0229622795"></a>

## Fast Activation<a name="en-us_topic_0151920881_sdce1b1af1e954dca8bf767cc6b60c830"></a>

The systemd provides more aggressive parallelization than UpStart. The use of Socket- and D-Bus based activation reduces the time required to boot the operating system.

To accelerate system boot, systemd seeks to:

-   Activate only the necessary processes
-   Activate as many processes as possible in parallel

## On-Demand Activation<a name="en-us_topic_0151920881_sa8bdefb638e641e68c9e267818203431"></a>

During SysVinit initialization, it activates all the possible background service processes that might be used. Users can log in only after all these service processes are activated. The drawbacks in SysVinit are obvious: slow system boot and a waste of system resources.

Some services may rarely or even never be used during system runtime. For example, CUPS, printing services are rarely used on most servers. SSHD is rarely accessed on many servers. It is unnecessary to spend time on starting these services and system resources.

systemd can only be activated when a service is requested. If the service request is over, systemd stops.

## Service Lifecycle Management by Cgroups<a name="en-us_topic_0151920881_sd70777ce8df7458988f4dc8c1111aa7f"></a>

An important role of an init system is to track and manage the lifecycle of services. It can start and stop a service. However, it is more difficult than you could ever imagine to encode an init system into stopping services.

Service processes often run in background as daemons and sometimes fork twice. In UpStart, the expect stanza in the configuration file must be correctly configured. Otherwise, UpStart is unable to learn a daemon's PID by counting the number of forks. 

Things are made simpler with Cgroups, which have long been used to manage system resource quotas. The ease of use comes largely from its file-system-like user interface. When a parent service creates a child service, the latter inherits all attributes of the Cgroup to which the parent service belongs. This means that all relevant services are put into the same Cgroup. The systemd can find the PIDs of all relevant services simply by traversing their control group and then stop them one by one.

## Mount and Automount Point Management<a name="en-us_topic_0151920881_s6e38d4244a784161b1653d2cd5c9a534"></a>

In traditional Linux systems, users can use the  **/etc/fstab**  file to maintain fixed file system mount points. These mount points are automatically mounted during system startup. Once the startup is complete, these mount points are available. These mount points are file systems critical to system running, such as the  **HOME**  directory. Like SysVinit, systemd manages these mount points so that they can be automatically mounted at system startup. systemd is also compatible with the  **/etc/fstab**  file. You can continue to use this file to manage mount points.

There are times when you need to mount or unmount on demand. For example, a temporary mounting point is required for you to access the DVD content, and the mounting point is canceled \(using the  **umount**  command\) if you no longer need to access the content, thereby saving resources. This is traditionally achieved using the autofs service.

The systemd allows automatic mount without a need to install autofs.

## Transactional Dependency Management<a name="en-us_topic_0151920881_s06450a232d77497fa9c3acc3b6f945f5"></a>

System boot involves a host of separate jobs, some of which may be dependent on each other. For example, a network file system \(NFS\) can be mounted only after network connectivity is activated. The systemd can run a large number of dependent jobs in parallel, but not all of them. Looking back to the NFS example, it is impossible to mount NFS and activate network at the same time. Before running a job, systemd calculates its dependencies, creates a temporary transaction, and verifies that this transaction is consistent \(all relevant services can be activated without any dependency on each other\).

## Compatibility with SysVinit Scripts<a name="en-us_topic_0151920881_sd0270cdc6c0149cdba8df99ed5e196f5"></a>

Like UpStart, systemd introduces new configuration methods and has new requirements for application development. If you want to replace the currently running initialization system with systemd, systemd must be compatible with the existing program. It is difficult to modify all the service code in any Linux distribution in a short time for the purpose of using systemd.

The systemd provides features compatible with SysVinit and LSB initscripts. You do not need to modify the existing services and processes in the system. This reduces the cost of migrating the system to systemd, making it possible for users to replace the existing initialization system with systemd.

## System State Snapshots and System Restoration<a name="en-us_topic_0151920881_s265e30e28e584ff5acc821cdaf156e0b"></a>

The systemd can be started on demand. Therefore, the running status of the system changes dynamically, and you cannot know the specific services that are running in the system. systemd snapshots enable the current system running status to be saved and restored.

For example, if services A and B are running in the system, you can run the  **systemd**  command to create a snapshot for the current system running status. Then stop process A or make any other change to the system, for example, starting process C. After these changes, run the snapshot restoration command of systemd to restore the system to the point at which the snapshot was taken. That is, only services A and B are running. A possible application scenario is debugging. For example, when an exception occurs on the server, a user saves the current status as a snapshot for debugging, and then perform any operation, for example, stopping the service. After the debugging is complete, restore the snapshot.

