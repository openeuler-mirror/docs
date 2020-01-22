# How Do I Manually Enable the kdump Service?<a name="EN-US_TOPIC_0214071175"></a>

## Symptom<a name="section0712504256"></a>

Run the systemctl status kdump command. The following information is displayed, indicating that no memory is reserved.

![](figures/en-us_image_0216604776.png)

## Possible Cause<a name="section118871366253"></a>

The kdump service requires the system to reserve memory for running the kdump kernel. However, the system does not reserve memory for the kdump service. As a result, the kdump service cannot be started.

## Solution<a name="section5400186182614"></a>

For the scenario where the OS has been installed

1.  Add  **crashkernel=1024M,high**  to  **/boot/efi/EFI/openEuler/grub.cfg**.
2.  Restart the system for configuration to take effect.
3.  Run the following command to check the kdump status:

    ```
    systemctl status kdump
    ```

    If the following information is displayed, the kdump status is  **active**, indicating that the kdump service is enabled. No further action is required.

    ![](figures/en-us_image_0216604777.png)


## Parameter Description<a name="section13001529145412"></a>

The following table describes the parameters of the memory reserved for the kdump kernel.

**Table  1**  crashkernel parameters

<a name="table467312804815"></a>
<table><thead align="left"><tr id="row967318810483"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p188941929182618"><a name="p188941929182618"></a><a name="p188941929182618"></a>Kernel Boot Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p389410298262"><a name="p389410298262"></a><a name="p389410298262"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p158944290262"><a name="p158944290262"></a><a name="p158944290262"></a>Default Value</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p18894429132612"><a name="p18894429132612"></a><a name="p18894429132612"></a>Remarks</p>
</th>
</tr>
</thead>
<tbody><tr id="row26739804810"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1089402918267"><a name="p1089402918267"></a><a name="p1089402918267"></a>crashkernel=X</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p10894142915265"><a name="p10894142915265"></a><a name="p10894142915265"></a>Reserve X of the physical memory for kdump when the physical memory is less than 4 GB.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1894229162614"><a name="p1894229162614"></a><a name="p1894229162614"></a>None. You can adjust the value as required.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p2895429202612"><a name="p2895429202612"></a><a name="p2895429202612"></a>This configuration method is used only when the memory is less than 4 GB. Ensure that the continuous available memory is sufficient.</p>
</td>
</tr>
<tr id="row16731682484"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p589512962618"><a name="p589512962618"></a><a name="p589512962618"></a>crashkernel=X@Y</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p10895329112616"><a name="p10895329112616"></a><a name="p10895329112616"></a>Reserve X of the memory at the start address Y for kdump.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1989572917263"><a name="p1989572917263"></a><a name="p1989572917263"></a>None. You can adjust the value as required.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p6895329142617"><a name="p6895329142617"></a><a name="p6895329142617"></a>Ensure that the X of the memory at the start address Y is not reserved for other modules.</p>
</td>
</tr>
<tr id="row6674198124814"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p3895829132620"><a name="p3895829132620"></a><a name="p3895829132620"></a>crashkernel=X,high</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p589582910260"><a name="p589582910260"></a><a name="p589582910260"></a>Reserve 256 MB of the physical memory for kdump when the physical memory is less than 4 GB, and X of the physical memory for kdump when the physical memory is greater than or equal to 4 GB.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p589516295260"><a name="p589516295260"></a><a name="p589516295260"></a>None. You can adjust the value based as required. The recommended value is <strong id="b181922057954"><a name="b181922057954"></a><a name="b181922057954"></a>1024M,high</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p389520290261"><a name="p389520290261"></a><a name="p389520290261"></a>Ensure that 256 MB of the memory is reserved for continuous use when the physical memory is less than 4 GB and X of the memory is reserved when the physical memory is greater than or equal to 4 GB. The actual reserved memory size equals 256 MB plus X.</p>
</td>
</tr>
<tr id="row18674138204811"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p189512918262"><a name="p189512918262"></a><a name="p189512918262"></a>crashkernel=X,low</p>
<p id="p2895162915268"><a name="p2895162915268"></a><a name="p2895162915268"></a>crashkernel=Y,high</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p15895102916261"><a name="p15895102916261"></a><a name="p15895102916261"></a>Reserve X of the physical memory for kdump when the physical memory is less than 4 GB and Y of the physical memory for kdump when the physical memory is greater than or equal to 4 GB.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p68951429102617"><a name="p68951429102617"></a><a name="p68951429102617"></a>None. You can adjust the value as required.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p14895132942617"><a name="p14895132942617"></a><a name="p14895132942617"></a>Ensure that X of the memory is reserved for continuous use when the physical memory is less than 4 GB and Y of the memory is reserved when the physical memory is greater than or equal to 4 GB. The actual reserved memory size equals X plus Y.</p>
</td>
</tr>
</tbody>
</table>

