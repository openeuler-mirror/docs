# Installation Methods<a name="EN-US_TOPIC_0184808163"></a>

## Prerequisites<a name="en-us_topic_0182219820_section1653720537335"></a>

-   For better performance experience, a secure container needs to run on the bare metal server and must not run on VMs.
-   A secure container depends on the following components \(openEuler 1.0 version\). Ensure that the required components have been installed in the environment. To install iSulad, refer to  [Installation Methods](installation-methods.md).
    -   docker-engine
    -   qemu


## Installation Procedure<a name="en-us_topic_0182219820_section1824711310370"></a>

Released secure container components are integrated in the  **kata-containers-**_version_**.rpm**  package. You can run the  **rpm**  command to install the corresponding software.

```
rpm -ivh kata-containers-<version>.rpm
```

