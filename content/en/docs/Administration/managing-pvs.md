# Managing PVs<a name="EN-US_TOPIC_0230915934"></a>

## Creating a PV<a name="section1621605611425"></a>

Run the  **pvcreate**  command to create a PV.

```
pvcreate [option] devname ...
```

In the preceding information:

-   _option_: command parameter options. Common parameter options are as follows:
    -   **-f**: forcibly creates a PV without user confirmation.
    -   **-u**: specifies the UUID of the device.
    -   **-y**: answers yes to all questions.

-   _devname_: specifies the name of the device corresponding to the PV to be created. If multiple PVs need to be created in batches, set this option to multiple device names and separate the names with spaces.

Example 1: Create PVs based on  **/dev/sdb**  and  **/dev/sdc**.

```
pvcreate /dev/sdb /dev/sdc
```

Example 2: Create PVs based on  **/dev/sdb1**  and  **/dev/sdb2**.

```
pvcreate /dev/sdb1 /dev/sdb2
```

## Viewing a PV<a name="section1288685245617"></a>

Run the  **pvdisplay**  command to view PV information, including PV name, VG to which the PV belongs, PV size, PE size, total number of PEs, number of available PEs, number of allocated PEs, and UUID.

```
pvdisplay [option] devname
```

In the preceding information:

-   _option_: command parameter options. Common parameter options are as follows:
    -   **-s**: outputs information in short format.
    -   **-m**: displays the mapping from PEs to LEs.

-   _devname_: indicates the device corresponding to the PV to be viewed. If no PVs are specified, information about all PVs is displayed.

Example: Run the following command to display the basic information about the PV  **/dev/sdb**:

```
pvdisplay /dev/sdb
```

## Modifying PV Attributes<a name="section134528410519"></a>

Run the  **pvchange**  command to modify the attributes of a PV.

```
pvchange [option] pvname ...
```

In the preceding information:

-   _option_: command parameter options. Common parameter options are as follows:
    -   **-u**: generates a new UUID.
    -   **-x**: indicates whether PE allocation is allowed.

-   _pvname_: specifies the name of the device corresponding to the PV to be modified. If multiple PVs need to be modified in batches, set this option to multiple device names and separate the names with spaces.

Example: Run the following command to prohibit PEs on the PV  **/dev/sdb**  from being allocated.

```
pvchange -x n /dev/sdb
```

## Deleting a PV<a name="section8655545125911"></a>

Run the  **pvremove**  command to delete a PV.

```
pvremove [option] pvname ...
```

In the preceding information:

-   _option_: command parameter options. Common parameter options are as follows:
    -   **-f**: forcibly deletes a PV without user confirmation.
    -   **-y**: answers yes to all questions.

-   _pvname_: specifies the name of the device corresponding to the PV to be deleted. If multiple PVs need to be deleted in batches, set this option to multiple device names and separate the names with spaces.

Example: Run the following command to delete the PV  **/dev/sdb**:

```
pvremove /dev/sdb
```

