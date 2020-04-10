# Installation Through a QCOW2 Image<a name="EN-US_TOPIC_0229424318"></a>

This section describes how to create or use a QCOW2 image to install the openEuler.

## Creating a QCOW2 Image<a name="en-us_topic_0022605796_en-us_topic_0016259799_section66369966101113"></a>

1.  Install the  **qemu-img**  software package.

    ```
    # dnf install -y qemu-img
    ```

2.  Run the  **create**  command of the qemu-img tool to create an image file. The command format is as follows:

    ```
    $ qemu-img create -f <imgFormat> -o <fileOption> <fileName> <diskSize>
    ```

    The parameters are described as follows:

    -   _imgFormat_: Image format. The value can be  **raw**  or  **qcow2**.
    -   _fileOption_: File option, which is used to set features of an image file, such as specifying a backend image file, compression, and encryption.
    -   _fileName_: File name.
    -   _diskSize_: Disk size, which specifies the size of a block disk. The unit can be K, M, G, or T, indicating KiB, MiB, GiB, or TiB.

    For example, to create an image file  **openEuler-imge.qcow2**  whose disk size is 32 GB and format is qcow2, the command and output are as follows:

    ```
    $ qemu-img create -f qcow2 openEuler-image.qcow2 32G
    Formatting 'openEuler-image.qcow2', fmt=qcow2 size=34359738368 cluster_size=65536 lazy_refcounts=off refcount_bits=16
    ```


## Starting the Installation<a name="en-us_topic_0022605796_en-us_topic_0016259799_section47344128153516"></a>

Perform the following operations to start the installation:

1.  Prepare a QCOW2 image file.
2.  Prepare the VM network.
3.  Prepare the UEFI boot tool set EDK II.
4.  Prepare the VM XML configuration file.
5.  Create a VM.
6.  Start the VM.

For details, see the  _openEuler 20.03 LTS Virtualization User Guide_.

