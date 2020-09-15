# Release Package Integrity Check<a name="EN-US_TOPIC_0219108825"></a>

## Introduction<a name="section544295081513"></a>

To prevent the software package from being incompletely downloaded due to network or storage device faults during transmission, you need to verify the integrity of the software package after obtaining it. Only the software packages that pass the verification can be installed.

Compare the verification value recorded in the verification file with the .iso file verification value calculated manually to check whether the software package passes the verification. If the verification values are consistent, the integrity of the .iso file is not damaged. If they are inconsistent, you can confirm that the file integrity is damaged and you need to obtain the file again.

## Prerequisites<a name="section1839292418149"></a>

Before verifying the integrity of the release package, you need to prepare the following files:

.iso file:  **openEuler-1.0-base-aarch64-dvd.iso**

Verification file:  **openEuler-1.0-base-aarch64-dvd.iso.sha256sum**

## Procedure<a name="section3301113671818"></a>

To verify the file integrity, perform the following operations:

1.  Run the following command to obtain the verification value in the verification file:

    ```
    #cat openEuler-1.0-base-aarch64-dvd.iso.sha256sum 
    ```

2.  Run the following command to calculate the SHA256 verification value of the file:

    ```
    #sha256sum openEuler-1.0-base-aarch64-dvd.iso
    ```

    After the command is run, the verification value is displayed.

3.  Check whether the values calculated in step 1 and step 2 are consistent.

    If the verification values are consistent, the integrity of the .iso file is not damaged. If they are inconsistent, you can confirm that the file integrity is damaged and you need to obtain the file again.


