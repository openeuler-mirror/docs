# Querying System-level Information<a name="EN-US_TOPIC_0184808143"></a>

## Description<a name="en-us_topic_0183074346_section1515625105210"></a>

The  **isula info**  command is run to query the system-level information, number of containers, and number of images.

## Usage<a name="en-us_topic_0183074346_section13717532165410"></a>

```
isula info
```

## Example<a name="en-us_topic_0183074346_section791377105511"></a>

Query system-level information, including the number of containers, number of images, kernel version, and operating system \(OS\).

```
$ isula info
Containers: 2
 Running: 0
 Paused: 0
 Stopped: 2
Images: 8
Server Version: 1.0.31
Logging Driver: json-file
Cgroup Driverr: cgroupfs
Hugetlb Pagesize: 2MB
Kernel Version: 4.19
Operating System: Fedora 29 (Twenty Nine)
OSType: Linux
Architecture: x86_64
CPUs: 8
Total Memory: 7 GB
Name: localhost.localdomain
iSulad Root Dir: /var/lib/isulad
```

