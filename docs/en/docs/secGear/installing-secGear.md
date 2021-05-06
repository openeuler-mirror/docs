# Installing secGear

## Environment Requirements

Currently, the secGear supports only the following software and hardware. More software and hardware will be available in the furture.

- Processor: The secGear supports only the x86_64 processor architecture, and the processor must support the Intel Software Guard Extensions (Intel SGX) function.

- Operating system: openEuler 21.03 or later

## Installation Guide

To use the secGear confidential computing programming framework, you need to install the secGear and secGear-devel development packages. Before the installation, ensure that the openEuler yum repository has been configured.

1. Run the following command as user root to install the secGear component:

   ```shell
   #yum install secGear
   #yum install secGear-devel
   ```  

2. Check whether the secGear is successfully installed. If the following command output is displayed, the installation is successful.

   ```shell
   #rpm -q secGear
   secGear-1.0-1.oe1.x86_64
   #rpm -q secGear-devel
   secGear-devel-1.0-1.oe1.x86_64
   ```
