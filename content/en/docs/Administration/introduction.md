# Introduction<a name="EN-US_TOPIC_0229622733"></a>

There are three types of host names:  **static**,  **transient**, and  **pretty**.

-   **static**: Static host name, which can be set by users and saved in the  **/etc/hostname**  file.
-   **transient**: Dynamic host name, which is maintained by the kernel. The initial value is a static host name. The default value is  **localhost**. The value can be changed when the DHCP or mDNS server is running.
-   **pretty**: Flexible host name, which can be set in any form \(including special characters/blanks\). Static and transient host names are subject to the general domain name restrictions.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>Static and transient host names can contain only letters \(a–z and A–Z\), digits \(0–9\), hyphens \(-\), underlines \(\_\), and periods \(.\). The host names cannot start or end with a period \(.\) or contain two consecutive periods \(.\). The host name can contain a maximum of 64 characters.  

