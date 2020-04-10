# Failed to Upgrade the Accelerator Drivers<a name="EN-US_TOPIC_0231143172"></a>

## Symptom<a name="section0747162541710"></a>

After the accelerator drivers are upgraded, the driver version is not changed after the system is restarted.

## Possible Cause<a name="section7752122541710"></a>

Before the accelerator drivers are upgraded, the system upgrades other driver packages. These driver packages may update the boot file system initramfs, and update the accelerator drivers to initramfs before upgrade. For example, if the NIC driver is updated or initramfs is manually updated, the system loads the accelerator drivers from initramfs first during restart.

## Solution<a name="section5753192514171"></a>

After the accelerator drivers are upgraded, run the  **dracut --force**  command to update initramfs again.

