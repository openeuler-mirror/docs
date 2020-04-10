# Failed to Start the SNTP Service Using the Default Configuration<a name="EN-US_TOPIC_0231587845"></a>

## Symptom<a name="section883217013220"></a>

The SNTP service fails to be started with the default configuration.

## Possible Cause<a name="section182011821122818"></a>

The domain name of the NTP server is not added to the default configuration.

## Solution<a name="section1490682573015"></a>

Modify the  **/etc/sysconfig/sntp**  file and add the domain name of the NTP server in China:  **0.generic.pool.ntp.org**.

