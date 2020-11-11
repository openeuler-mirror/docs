# Installation Preparations

This section describes the compatibility of the hardware and software and the related configurations and preparations required for the installation.

<!-- TOC -->
- [Installation Preparations](#安装准备)
  - [Obtaining the Installation Source](#获取安装源)
  - [Verifying the Image Integrity](#镜像完整性校验)
    - [Overview](#简介)
    - [Prerequisites](#前提条件)
    - [Procedure](#操作指导)
  - [Installation Requirements](#安装要求)
    - [Hardware Compatibility](#硬件兼容支持)
    - [Minimum Hardware Specifications](#最小硬件要求)

<!-- /TOC -->
## Obtaining the Installation Source

Before installation, obtain the openEuler Raspberry Pi image and its verification file.

1. Log in to the [openEuler Community](https://openeuler.org) website.

2. Click **Download**.

3. Click the **Link** provided after **Download ISO**. The download list is displayed.

4. Click **openEuler-20.09**. The openEuler 20.09 version download list is displayed.

5. Click **Raspberry Pi**. The Raspberry Pi image download list is displayed.
   
   - **aarch64**: image of the AArch64 architecture

6. Click **aarch64** to download the Raspberry Pi AArch64 image download list.

7. Click **openEuler-20.09-raspi.aarch64.img.xz** to download the openEuler Raspberry Pi image to the local PC.

8. Click **openEuler-20.09-raspi.aarch64.img.xz.sha256sum** to download the verification file of the openEuler Raspberry Pi image to the local PC.

## Verifying the Image Integrity

### Overview

During package transmission, to prevent software packages from being incompletely downloaded due to network or storage device problems, you need to verify the integrity of the software packages after obtaining them. Only the software packages that pass the verification can be deployed.

Compare the verification value recorded in the verification file with the verification value that is manually calculated to determine whether the software package is complete. If the two values are the same, the downloaded file is complete. Otherwise, the downloaded file is incomplete and you need to obtain the software package again.

### Prerequisites

Before verifying the integrity of the image file, ensure that the following files are available:

Image file: **openEuler-20.09-raspi.aarch64.img.xz**

Verification file: **openEuler-20.09-raspi.aarch64.img.xz.sha256sum**

### Procedure

To verify the file integrity, perform the following procedure:

1. Obtain the verification value from the verification file. Run the following command:
   
   ```
   $ cat openEuler-20.09-raspi.aarch64.img.xz.sha256sum
   ```

2. Calculate the SHA256 verification value of the file. Run the following command:
   
   ```
   $ sha256sum openEuler-20.09-raspi.aarch64.img.xz
   ```
   
   After the command is executed, the verification value is displayed.

3. Check whether the verification value calculated in step 1 is consistent with that calculated in step 2.
   
   If the verification values are consistent, the downloaded file is not damaged. Otherwise, the downloaded file is incomplete and you need to obtain the file again.

## Installation Requirements

If the openEuler operating system is installed in the Raspberry Pi environment, the Raspberry Pi environment must meet the hardware compatibility and minimum hardware specifications as follows.

### Hardware Compatibility

Currently, the openEuler Raspberry Pi image supports the 3B, 3B+, and 4B versions.

### Minimum Hardware Specifications

[Table 1](#tff48b99c9bf24b84bb602c53229e2542) lists the minimum hardware specifications for the openEuler Raspberry Pi image.

**Table 1** Minimum hardware specifications

<a name="tff48b99c9bf24b84bb602c53229e2542"></a>

<table><thead align="left"><tr id="r36f08b63edea4973a8228200caa2a50b"><th class="cellrowborder" valign="top" width="11.19111911191119%" id="mcps1.2.4.1.1"><p id="aef3575d97cdf4dcfb65f8d0c8d2d4a76"><a name="aef3575d97cdf4dcfb65f8d0c8d2d4a76"></a><a name="aef3575d97cdf4dcfb65f8d0c8d2d4a76"></a><strong id="abf63bde6a66a4ce5b21d81948fcafe36"><a name="abf63bde6a66a4ce5b21d81948fcafe36"></a><a name="abf63bde6a66a4ce5b21d81948fcafe36"></a>Component Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="40.06400640064006%" id="mcps1.2.4.1.2"><p id="a919d3bb266c8432fb33c51fa8f3a4fc3"><a name="a919d3bb266c8432fb33c51fa8f3a4fc3"></a><a name="a919d3bb266c8432fb33c51fa8f3a4fc3"></a><strong id="a9386cf027c1e47d99651159bb62130e7"><a name="a9386cf027c1e47d99651159bb62130e7"></a><a name="a9386cf027c1e47d99651159bb62130e7"></a>Minimum Hardware Specifications</strong></p>
</th>
<th class="cellrowborder" valign="top" width="48.74487448744874%" id="mcps1.2.4.1.3"><p id="a3ac7cf4867974c4990ee6deab716db5f"><a name="a3ac7cf4867974c4990ee6deab716db5f"></a><a name="a3ac7cf4867974c4990ee6deab716db5f"></a><strong id="a0206841e981640cf833dc2556a7def50"><a name="a0206841e981640cf833dc2556a7def50"></a><a name="a0206841e981640cf833dc2556a7def50"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr id="ra68eff5c33a84bb2be6672a48a643d26"><td class="cellrowborder" valign="top" width="11.19111911191119%" headers="mcps1.2.4.1.1 "><p id="ac0a50d2069ab444cafff180647772df4"><a name="ac0a50d2069ab444cafff180647772df4"></a><a name="ac0a50d2069ab444cafff180647772df4"></a>Raspberry Pi version</p>
</td>
<td class="cellrowborder" valign="top" width="40.06400640064006%" headers="mcps1.2.4.1.2 "><a name="ul97131912175915"></a><a name="ul97131912175915"></a><ul id="ul97131912175915"><li>Raspberry Pi 3B</li><li>Raspberry Pi 3B+</li><li>Raspberry Pi 4B</li></ul>
</td>
<td class="cellrowborder" valign="top" width="48.74487448744874%" headers="mcps1.2.4.1.3 "><p id="a2601e9eece5f4c7bb02881c9ac647a61"><a name="a2601e9eece5f4c7bb02881c9ac647a61"></a><a name="a2601e9eece5f4c7bb02881c9ac647a61"></a>-</p>
</td>
</tr>
<tr id="rf2a5d43b74894a0882b7c17bdfeb697f"><td class="cellrowborder" valign="top" width="11.19111911191119%" headers="mcps1.2.4.1.1 "><p id="ad00611ec129a41a9841fb579eece7804"><a name="ad00611ec129a41a9841fb579eece7804"></a><a name="ad00611ec129a41a9841fb579eece7804"></a>Memory</p>
</td>
<td class="cellrowborder" valign="top" width="40.06400640064006%" headers="mcps1.2.4.1.2 "><p id="a94efe642b8694e5a85747e123b951efc"><a name="a94efe642b8694e5a85747e123b951efc"></a><a name="a94efe642b8694e5a85747e123b951efc"></a>≥ 2 GB (4 GB or higher recommended for better user experience)</p>
</td>
<td class="cellrowborder" valign="top" width="48.74487448744874%" headers="mcps1.2.4.1.3 "><p id="abfb44d28dca741f68df94e4e276d2410"><a name="abfb44d28dca741f68df94e4e276d2410"></a><a name="abfb44d28dca741f68df94e4e276d2410"></a>-</p>
</td>
</tr>
<tr id="rd2c1ebd93ea64e85a5f3fc88dc5ba456"><td class="cellrowborder" valign="top" width="11.19111911191119%" headers="mcps1.2.4.1.1 "><p id="afd36954546334c1681b5a391bbc386ae"><a name="afd36954546334c1681b5a391bbc386ae"></a><a name="afd36954546334c1681b5a391bbc386ae"></a>Drive</p>
</td>
<td class="cellrowborder" valign="top" width="40.06400640064006%" headers="mcps1.2.4.1.2 "><p id="p1224172312719"><a name="p1224172312719"></a><a name="p1224172312719"></a>8 GB or higher recommended for better user experience</p>
</td>
<td class="cellrowborder" valign="top" width="48.74487448744874%" headers="mcps1.2.4.1.3 "><p id="acc0affdd82e34f32966171e21855ef40"><a name="acc0affdd82e34f32966171e21855ef40"></a><a name="acc0affdd82e34f32966171e21855ef40"></a>-</p>
</td>
</tr>
</tbody>
</table>

