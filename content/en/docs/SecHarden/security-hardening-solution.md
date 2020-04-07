# Security Hardening Solution<a name="EN-US_TOPIC_0192977541"></a>

This section describes the openEuler security hardening solution, including the hardening method and items.

## Security Hardening Method<a name="en-us_topic_0152100261_s026b5b11898d4d1da2242b39a31fe746"></a>

You can manually modify security hardening configurations or run commands to harden the system, or use the security hardening tool to modify security hardening items in batches. The openEuler security hardening tool runs as openEuler-security.service. When the system is started for the first time, the system automatically runs the service to execute the default hardening policy, and automatically set the service not to start as the system starts.

You can modify the  **security.conf**  file and use the security hardening tool to implement user-defined security hardening.

## Security Hardening Items<a name="en-us_topic_0152100261_sfc107567dc9e4c59919e7a0fd979889a"></a>

openEuler security hardening includes the following parts:

-   System services
-   File permissions
-   Kernel parameters
-   Authentication and authorization
-   Account passwords

