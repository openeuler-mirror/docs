# Managing VGs<a name="EN-US_TOPIC_0230942068"></a>

## Creating a VG<a name="section1621605611425"></a>

Run the  **vgcreate**  command to create a VG.

```
vgcreate [option] vgname pvname ...
```

In the preceding information:

-   _option_: command parameter options. Common parameter options are as follows:
    -   **-l**: specifies the maximum number of LVs that can be created on the VG.
    -   **-p**: specifies the maximum number of PVs that can be added to the VG.
    -   **-s**: specifies the PE size of a PV in the VG.

-   _vgname_: name of the VG to be created.
-   _pvname_: name of the PV to be added to the VG.

Example: Run the following command to create VG  **vg1**  and add the PVs  **/dev/sdb**  and  **/dev/sdc**  to the VG.

```
vgcreate vg1 /dev/sdb /dev/sdc  
```

## Viewing a VG<a name="section1288685245617"></a>

Run the  **vgdisplay**  command to view VG information.

```
vgdisplay [option] [vgname]
```

In the preceding information:

-   _option_: command parameter options. Common parameter options are as follows:
    -   **-s**: outputs information in short format.
    -   **-A**: displays only attributes of active VGs.

-   _vgname_: name of the VG to be viewed. If no VGs are specified, information about all VGs is displayed.

Example: Run the following command to display the basic information about VG  **vg1**:

```
vgdisplay vg1
```

## Modifying VG Attributes<a name="section134528410519"></a>

Run the  **vgchange**  command to modify the attributes of a VG.

```
vgchange [option] vgname
```

In the preceding information:

-   _option_: command parameter options. Common parameter options are as follows:
    -   **-a**: sets the active status of the VG.

-   _vgname_: name of the VG whose attributes are to be modified.

Example: Run the following command to change the status of  **vg1**  to active.

```
vgchange -ay vg1
```

## Extending a VG<a name="section9939647191712"></a>

Run the  **vgextend**  command to dynamically extend a VG. In this way, the VG size is extended by adding PVs to the VG.

```
vgextend [option] vgname pvname ...
```

In the preceding information:

-   _option_: command parameter options. Common parameter options are as follows:
    -   **dev**: debugging mode.
    -   **-t**: test only.

-   _vgname_: name of the VG whose size is to be extended.
-   _pvname_: name of the PV to be added to the VG.

Example: Run the following command to add PV  **/dev/sdb**  to VG  **vg1**:

```
vgextend vg1 /dev/sdb
```

## Shrinking a VG<a name="section187401776325"></a>

Run the  **vgreduce**  command to delete PVs from a VG to reduce the VG size. A VG must contain at least one PV.

```
vgreduce [option] vgname pvname ...
```

In the preceding information:

-   _option_: command parameter options. Common parameter options are as follows:
    -   **-a**: If no PVs are specified in the command, all empty PVs are deleted.
    -   **--removemissing**: deletes lost PVs in the VG to restore the VG to the normal state.

-   _vgname_: name of the VG to be shrunk.
-   _pvname_: name of the PV to be deleted from the VG.

Example: Run the following command to remove PV  **/dev/sdb2**  from VG  **vg1**:

```
vgreduce vg1 /dev/sdb2
```

## Deleting a VG<a name="section8655545125911"></a>

Run the  **vgremove**  command to delete a VG.

```
vgremove [option] vgname
```

In the preceding information:

-   _option_: command parameter options. Common parameter options are as follows:
    -   **-f**: forcibly deletes a VG without user confirmation.

-   _vgname_: name of the VG to be deleted.

Example: Run the following command to delete VG  **vg1**.

```
vgremove vg1
```

