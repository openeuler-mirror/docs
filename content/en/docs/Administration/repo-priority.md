# repo Priority<a name="EN-US_TOPIC_0229622799"></a>

If there are multiple repo sources, you can set the repo priority in the .repo file. If the priority is not set, the default priority is 99. If the same RPM package exists in the sources with the same priority, the latest version is installed.  **1**  indicates the highest priority and  **99**  indicates the lowest priority. For example, set the priority of  **openEuler.repo**  to  **2**.

```
[base]
name=base
baseurl=http://192.168.1.2/
enabled=1
priority=2
gpgcheck=1
gpgkey=http://192.168.1.2/RPM-GPG-KEY-openEuler
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>_gpgcheck_  indicates whether to enable the GNU private guard \(GPG\) to check the validity and security of sources of RPM packages.  **1**  indicates GPG check is enabled.  **0**  indicates the GPG check is disabled. If this option is not specified, the GPG check is enabled by default.  
>_gpgkey_  is the storage path of the signature public key.  

