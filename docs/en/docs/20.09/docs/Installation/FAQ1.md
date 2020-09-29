# FAQ

<!-- TOC -->
- [FAQ](#faq)
  - [Failing to Start the Raspberry Pi](#树莓派启动失败)
    - [Symptom](#问题现象)
    - [Cause Analysis](#原因分析)
    - [Solution](#解决方法)

<!-- /TOC -->
## Failing to Start the Raspberry Pi

### Symptom

After the Raspberry Pi image released by the openEuler is written to the SD card, the Raspberry Pi fails to be started.

### Cause Analysis

The possible causes are as follows:

1. The downloaded image file is incomplete. To avoid this problem, ensure that the image passes the integrity verification.
2. An error occurs when the image is written to the SD card. In most cases, the error occurs when the image is written to the SD card in the Windows environment using the application software.

### Solution

Re-write the complete image to the SD card.