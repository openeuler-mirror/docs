# Failed to Identify Accelerator Devices After the Acceleration Engine Is Installed<a name="EN-US_TOPIC_0231143171"></a>

## Symptom<a name="section14808174319516"></a>

After the acceleration engine is installed, the accelerator devices cannot be identified.

## Solution<a name="section168911281068"></a>

1.  <a name="li1760055514614"></a>Check whether the device exists in the virtual file system. Normally, the following accelerator devices are displayed:

    ```
    # ls -al /sys/class/uacce/
    total 0
    lrwxrwxrwx. 1 root root 0 Nov 14 03:45 hisi_hpre-2 -> ../../devices/pci0000:78/0000:78:00.0/0000:79:00.0/uacce/hisi_hpre-2
    lrwxrwxrwx. 1 root root 0 Nov 14 03:45 hisi_hpre-3 -> ../../devices/pci0000:b8/0000:b8:00.0/0000:b9:00.0/uacce/hisi_hpre-3
    lrwxrwxrwx. 1 root root 0 Nov 17 22:09 hisi_rde-4 -> ../../devices/pci0000:78/0000:78:01.0/uacce/hisi_rde-4
    lrwxrwxrwx. 1 root root 0 Nov 17 22:09 hisi_rde-5 -> ../../devices/pci0000:b8/0000:b8:01.0/uacce/hisi_rde-5
    lrwxrwxrwx. 1 root root 0 Nov 14 08:39 hisi_sec-0 -> ../../devices/pci0000:74/0000:74:01.0/0000:76:00.0/uacce/hisi_sec-0
    lrwxrwxrwx. 1 root root 0 Nov 14 08:39 hisi_sec-1 -> ../../devices/pci0000:b4/0000:b4:01.0/0000:b6:00.0/uacce/hisi_sec-1
    lrwxrwxrwx. 1 root root 0 Nov 17 22:09 hisi_zip-6 -> ../../devices/pci0000:74/0000:74:00.0/0000:75:00.0/uacce/hisi_zip-6
    lrwxrwxrwx. 1 root root 0 Nov 17 22:09 hisi_zip-7 -> ../../devices/pci0000:b4/0000:b4:00.0/0000:b5:00.0/uacce/hisi_zip-7
    ```

2.  If you want to use the HPRE device but the device is not found in  [1](#li1760055514614), check whether the accelerator software is correctly installed by referring to  [Failed to Upgrade the Accelerator Drivers](failed-to-upgrade-the-accelerator-drivers.md).
3.  <a name="li1560012551369"></a>If the accelerator software is correctly installed, run the  **lspci**  command to check whether the physical device exists.

    ```
    # lspci | grep HPRE
    79:00.0 Network and computing encryption device: Huawei Technologies Co., Ltd. HiSilicon HPRE Engine (rev 21)
    b9:00.0 Network and computing encryption device: Huawei Technologies Co., Ltd. HiSilicon HPRE Engine (rev 21)
    ## lspci | grep SEC
    76:00.0 Network and computing encryption device: Huawei Technologies Co., Ltd. HiSilicon SEC Engine (rev 21)
    b6:00.0 Network and computing encryption device: Huawei Technologies Co., Ltd. HiSilicon SEC Engine (rev 21)
    ## lspci | grep RDE
    78:01.0 RAID bus controller: Huawei Technologies Co., Ltd. HiSilicon RDE Engine (rev 21)
    b8:01.0 RAID bus controller: Huawei Technologies Co., Ltd. HiSilicon RDE Engine (rev 21)
    ## lspci | grep ZIP
    75:00.0 Processing accelerators: Huawei Technologies Co., Ltd. HiSilicon ZIP Engine (rev 21)
    b5:00.0 Processing accelerators: Huawei Technologies Co., Ltd. HiSilicon ZIP Engine (rev 21)
    #
    ```

4.  If no physical device is found in  [3](#li1560012551369), perform the following operations:
    -   Check whether the accelerator license has been imported. If no, import the accelerator license. For details, see "License Management" in the  [TaiShan Rack Server iBMC \(V500 or Later\) User Guide](https://support.huawei.com/enterprise/en/doc/EDOC1100121685/426cffd9?idPath=7919749|9856522|21782478|8060757). After the accelerator license is imported, power off and restart the BMC to enable the license.
    -   Check whether the BMC and BIOS versions support the accelerator feature.


