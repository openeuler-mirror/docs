# Release Package Integrity Check<a name="EN-US_TOPIC_0229291245"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>This section describes how to verify the integrity of the release package in the AArch64 architecture. The procedure for verifying the integrity of the release package in the x86\_64 architecture is the same.  

## Introduction<a name="section544295081513"></a>

To prevent the software package from being incompletely downloaded due to network or storage device faults during transmission, you need to verify the integrity of the software package after obtaining it. Only the software packages that pass the verification can be installed.

Compare the verification value recorded in the verification file with the .iso file verification value calculated manually to check whether the software package passes the verification. If the verification values are consistent, the .iso file is not damaged. If they are inconsistent, you can confirm that the file is damaged and you need to obtain the file again.

## Prerequisites<a name="section1839292418149"></a>

Before verifying the integrity of the release package, you need to prepare the following files:

ISO file:  **openEuler-20.03-LTS-aarch64-dvd.iso**

Verification file:  **openEuler-20.03-LTS-aarch64-dvd.iso.sha256sum**

## Procedure<a name="section3301113671818"></a>

To verify the file integrity, perform the following operations:

1.  Obtain the verification value in the verification file. Run the following command:

    ```
    #cat openEuler-20.03-LTS-aarch64-dvd.iso.sha256sum 
    ```

2.  Calculate the SHA256 verification value of the file. Run the following command:

    ```
    #sha256sum openEuler-20.03-LTS-aarch64-dvd.iso
    ```

    After the command is run, the verification value is displayed.

3.  Check whether the values calculated in step 1 and step 2 are consistent.

    If the verification values are consistent, the .iso file is not damaged. If they are inconsistent, you can confirm that the file is damaged and you need to obtain the file again.


