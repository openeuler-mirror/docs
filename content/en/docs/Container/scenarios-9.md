# Scenarios<a name="EN-US_TOPIC_0184808147"></a>

Secure computing mode \(seccomp\) is a simple sandboxing mechanism introduced to the Linux kernel from version 2.6.23. In some specific scenarios, you may want to perform some privileged operations in a container without starting the privileged container. You can add  **--cap-add**  at runtime to obtain some small-scope permissions. For container instances with strict security requirements, th capability granularity may not meet the requirements. You can use some methods to control the permission scope in a refined manner.

-   Example

    In a common container scenario, you can use the  **-v**  flag to map a directory \(including a binary file that cannot be executed by common users\) on the host to the container.

    In the container, you can add chmod 4777 \(the modification permission of the binary file\) to the S flag bit. In this way, on the host, common users who cannot run the binary file \(or whose running permission is restricted\) can obtain the permissions of the binary file \(such as the root permission\) when running the binary file after the action added to the S flag bit is performed, so as to escalate the permission or access other files.

    In this scenario, if strict security requirements are required, the chmod, fchmod, and fchmodat system calls need to be tailored by using seccomp. 


