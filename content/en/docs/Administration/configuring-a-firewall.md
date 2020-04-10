# Configuring a Firewall<a name="EN-US_TOPIC_0229622608"></a>

To open the FTP service to the Internet, you need to configure the firewall and SElinux.

```
# firewall-cmd --add-service=ftp --permanent
success
# firewall-cmd --reload
success
# setsebool -P ftpd_full_access on
```

