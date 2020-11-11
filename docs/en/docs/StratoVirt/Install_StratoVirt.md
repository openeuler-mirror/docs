# Installing StratoVirt

[[toc]]

## Software and Hardware Requirements

### Minimum Hardware Requirements

- Processor architecture: Only the AArch64 and x86_64 processor architectures are supported. AArch64 requires ARMv8 or a later version and supports virtualization extension. x86_64 supports VT-x.

- 2-core CPU
- 4 GiB memory
- 16 GiB available disk space

### Software Requirements

Operating system: openEuler 20.09 or later



## Installing Components

To use StratoVirt virtualization, it is necessary to install StratoVirt. Before the installation, ensure that the openEuler yum source has been configured.

1. Run the following command as user root to install the StratoVirt components:

   ```
   # yum install stratovirt
   ```


2. Check whether the installation is successful.

   ```
   $ stratovirt -version
   StratoVirt 0.1.0
   ```


