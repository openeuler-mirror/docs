# Installing StratoVirt


## Software and Hardware Requirements

### Minimum Hardware Requirements

- Processor architecture: Only AArch64 and x86_64 are supported. AArch64 requires ARMv8 or later and supports virtualization extension. x86_64 supports VT-x.

- 2-core CPU
- 4 GiB memory
- 16 GiB available disk space

### Software Requirements

Operating system: openEuler 21.03



## Component Installation

To use StratoVirt virtualization, install StratoVirt first. Before the installation, ensure that the openEuler yum source has been configured.

1. Run the following command to install the StratoVirt component as user **root**:

   ```
   # yum install stratovirt
   ```

   

2. Check whether the installation is successful.

   ```
   $ stratovirt -version
   StratoVirt 2.0.0
   ```
