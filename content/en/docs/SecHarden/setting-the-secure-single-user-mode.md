# Setting the Secure Single-user Mode<a name="EN-US_TOPIC_0192977563"></a>

## Description<a name="en-us_topic_0152100389_s44a0f8c88c3f4133b947b003846078aa"></a>

When you log in to the system as user  **root**  in single-user mode, if the  **root**  password is not set, high security risks exist.

## Implementation<a name="en-us_topic_0152100389_s8beca83efcbd4f94ab4261c676d21ea0"></a>

This setting can be implemented by modifying the  **/etc/sysconfig/init**  file. Set  **SINGLE**  to  **SINGLE=/sbin/sulogin**.

