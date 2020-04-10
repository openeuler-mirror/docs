# An Error Occurs When stripsize Is Set to 4 During RAID 0 Volume Configuration<a name="EN-US_TOPIC_0229622794"></a>

## Symptom<a name="en-us_topic_0151920731_sf8787c1a7e564af4ad6d72b45d07f036"></a>

An error occurs when the  **stripsize**  parameter is set to  **4**  during RAID 0 volume configuration.

## Possible Cause<a name="en-us_topic_0151920731_s2c25517ecc454d8eaaa7b81616ea29e8"></a>

The 64 KB page table can be enabled only in the scenario where  **stripsize**  is set to  **64**.

## Solution<a name="en-us_topic_0151920731_s9c2d562eab3549f3a0d44f642c8c118a"></a>

You do not need to modify the configuration file. When running the  **lvcreate **command on openEuler, set  **stripesize**  to  **64**  because the minimum supported stripe size is 64 KB.

