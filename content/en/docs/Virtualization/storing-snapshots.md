# Storing Snapshots<a name="EN-US_TOPIC_0225484570"></a>

## Overview<a name="section1459575321614"></a>

The VM system may be damaged due to virus damage, system file deletion by mistake, or incorrect formatting. As a result, the system cannot be started. To quickly restore a damaged system, openEuler provides the storage snapshot function. openEuler can create a snapshot that records the VM status at specific time points without informing users \(usually within a few seconds\). The snapshot can be used to restore the VM to the status when the snapshots were taken. For example, a damaged system can be quickly restored with the help of snapshots, which improves system reliability.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>Currently, storage snapshots can be QCOW2 and RAW images only. Block devices are not supported.  

## Procedure<a name="section1234014366477"></a>

To create VM storage snapshots, perform the following steps:

1.  Log in to the host and run the  **virsh domblklist**  command to query the disk used by the VM.

    ```
    # virsh domblklist openEulerVM
      Target   Source
     ---------------------------------------------
      vda      /mnt/openEuler-image.qcow2
    ```


1.  Run the following command to create the VM disk snapshot  **openEuler-snapshot1.qcow2**:

    ```
    # virsh snapshot-create-as --domain openEulerVM --disk-only --diskspec vda,snapshot=external,file=/mnt/openEuler-snapshot1.qcow2 --atomic
    Domain snapshot 1582605802 created
    ```


1.  Run the following command to query disk snapshots:

    ```
    # virsh snapshot-list openEulerVM
     Name         Creation Time               State
    ---------------------------------------------------------
     1582605802   2020-02-25 12:43:22 +0800   disk-snapshot
    ```


