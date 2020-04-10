# Managing LVs<a name="EN-US_TOPIC_0230942069"></a>

## Creating an LV<a name="section1621605611425"></a>

Run the  **lvcreate**  command to create an LV.

```
lvcreate [option] vgname
```

In the preceding information:

-   _option_: command parameter options. Common parameter options are as follows:
    -   **-L**: specifies the size of the LV in kKmMgGtT.
    -   **-l**: specifies the size of the LV \(number of LEs\).
    -   **-n**: specifies the name of the LV to be created.
    -   **-s**: creates a snapshot.

-   _vgname_: name of the VG to be created.

Example 1: Run the following command to create a 10 GB LV in VG  **vg1**.

```
lvcreate -L 10G vg1
```

Example 1: Run the following command to create a 200 MB LV in VG  **vg1**  and name the LV  **lv1**.

```
lvcreate -L 200M -n lv1 vg1
```

## Viewing an LV<a name="section1288685245617"></a>

Run the  **lvdisplay**  command to view the LV information, including the size of the LV, its read and write status, and snapshot information.

```
lvdisplay [option] [lvname]
```

In the preceding information:

-   _option_: command parameter options. Common parameter options are as follows:
    -   **-v**: displays the mapping from LEs to PEs.

-   _lvname_: device file corresponding to the LV whose attributes are to be displayed. If this option is not set, attributes of all LVs are displayed.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >Device files corresponding to LVs are stored in the VG directory. For example, if LV  **lv1**  is created in VG  **vg1**, the device file corresponding to  **lv1**  is  **/dev/vg1/lv1**.  


Example: Run the following command to display the basic information about LV  **lv1**:

```
lvdisplay /dev/vg1/lv1
```

## Adjusting the LV Size<a name="section134528410519"></a>

Run the  **lvresize**  command to increase or reduce the size of an LVM LV. This may cause data loss. Therefore, exercise caution when running this command.

```
lvresize [option] vgname
```

In the preceding information:

-   _option_: command parameter options. Common parameter options are as follows:
    -   **-L**: specifies the size of the LV in kKmMgGtT.
    -   **-l**: specifies the size of the LV \(number of LEs\).
    -   **-f**: forcibly adjusts the size of the LV without user confirmation.

-   _lvname_: name of the LV to be adjusted.

Example 1: Run the following command to increase the size of LV  **/dev/vg1/lv1**  by 200 MB.

```
lvresize -L +200 /dev/vg1/lv1
```

Example 2: Run the following command to reduce the size of LV  **/dev/vg1/lv1**  by 200 MB.

```
lvresize -L -200 /dev/vg1/lv1
```

## Extending an LV<a name="section9939647191712"></a>

Run the  **lvextend**  command to dynamically extend the size of an LV online without interrupting the access of applications to the LV.

```
lvextend [option] lvname
```

In the preceding information:

-   _option_: command parameter options. Common parameter options are as follows:
    -   **-L**: specifies the size of the LV in kKmMgGtT.
    -   **-l**: specifies the size of the LV \(number of LEs\).
    -   **-f**: forcibly adjusts the size of the LV without user confirmation.

-   _lvname_: device file of the LV whose size is to be extended.

Example: Run the following command to increase the size of LV  **/dev/vg1/lv1**  by 100 MB.

```
lvextend -L +100M /dev/vg1/lv1
```

## Shrinking an LV<a name="section187401776325"></a>

Run the  **lvreduce**  command to reduce the size of an LV. This may delete existing data on the LV. Therefore, confirm whether the data can be deleted before running the command.

```
lvreduce [option] lvname
```

In the preceding information:

-   _option_: command parameter options. Common parameter options are as follows:
    -   **-L**: specifies the size of the LV in kKmMgGtT.
    -   **-l**: specifies the size of the LV \(number of LEs\).
    -   **-f**: forcibly adjusts the size of the LV without user confirmation.

-   _lvname_: device file of the LV whose size is to be extended.

Example: Run the following command to reduce the space of LV  **/dev/vg1/lvl**  by 100 MB:

```
lvreduce -L -100M /dev/vg1/lv1
```

## Deleting an LV<a name="section8655545125911"></a>

Run the  **lvremove**  command to delete an LV. If the LV has been mounted by running the  **mount**  command, you need to run the  **umount**  command to unmount the LV before running the  **lvremove**  command.

```
lvremove [option] vgname
```

In the preceding information:

-   _option_: command parameter options. Common parameter options are as follows:
    -   **-f**: forcibly deletes an LV without user confirmation.

-   _vgname_: name of the LV to be deleted.

Example: Run the following command to delete LV  **/dev/vg1/lv1**.

```
lvremove /dev/vg1/lv1
```

