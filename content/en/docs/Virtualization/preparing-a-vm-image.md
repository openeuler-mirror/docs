# Preparing a VM Image<a name="EN-US_TOPIC_0183148730"></a>

## Overview<a name="section9430194412510"></a>

A VM image is a file that contains a virtual disk that has been installed and can be used to start the OS. VM images are in different formats, such as raw and qcow2. Compared with the raw format, the qcow2 format occupies less space and supports features such as snapshot, copy-on-write, AES encryption, and zlib compression. However, the performance of the qcow2 format is slightly lower than that of the raw format. The qemu-img tool is used to create image files. This section uses the qcow2 image file as an example to describe how to create a VM image.

## Creating an Image<a name="section48321731182310"></a>

To create a qcow2 image file, perform the following steps:

1.  Install the  **qemu-img**  software package.

    ```
    # yum install -y qemu-img
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

    For example, to create an image file openEuler-imge.qcow2 whose disk size is 4 GB and format is qcow2, the command and output are as follows:

    ```
    $ qemu-img create -f qcow2 openEuler-image.qcow2 4G
    Formatting 'openEuler-image.qcow2', fmt=qcow2 size=4294967296 cluster_size=65536 lazy_refcounts=off refcount_bits=16
    ```


## Changing the Image Disk Space<a name="section195364915292"></a>

If a VM requires larger disk space, you can use the qemu-img tool to change the disk space of the VM image. The method is as follows:

1.  Run the following command to query the disk space of the VM image:

    ```
    # qemu-img info <imgFiLeName>
    ```

    For example, if the command and output for querying the disk space of the openEuler-image.qcow2 image are as follows, the disk space of the image is 4 GiB.

    ```
    # qemu-img info openEuler-image.qcow2 
    image: openEuler-image.qcow2
    file format: qcow2
    virtual size: 4.0G (4294967296 bytes)
    disk size: 196K
    cluster_size: 65536
    Format specific information:
        compat: 1.1
        lazy refcounts: false
        refcount bits: 16
        corrupt: false
    ```

2.  Run the following command to change the image disk space. In the command,  _imgFiLeName_  indicates the image name, and  **+**  and  **-**  indicate the image disk space to be increased and decreased, respectively. The unit is KB, MB, GB, and T, indicating KiB, MiB, GiB, and TiB, respectively.

    ```
    # qemu-img resize <imgFiLeName> [+|-]<size>
    ```

    For example, to expand the disk space of the openEuler-image.qcow2 image to 24 GiB, that is, to add 20 GiB to the original 4 GiB, the command and output are as follows:

    ```
    # qemu-img resize openEuler-image.qcow2 +20G
    Image resized.
    ```

3.  Run the following command to check whether the image disk space is changed successfully:

    ```
    # qemu-img info <imgFiLeName>
    ```

    For example, if the openEuler-image.qcow2 image disk space has been expanded to 24 GiB, the command and output are as follows:

    ```
    # qemu-img info openEuler-image.qcow2 
    image: openEuler-image.qcow2
    file format: qcow2
    virtual size: 24G (25769803776 bytes)
    disk size: 200K
    cluster_size: 65536
    Format specific information:
        compat: 1.1
        lazy refcounts: false
        refcount bits: 16
        corrupt: false
    ```


