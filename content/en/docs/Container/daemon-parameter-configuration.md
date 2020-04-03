# Daemon Parameter Configuration<a name="EN-US_TOPIC_0184808196"></a>

You can add configuration items to the  **/etc/docker/daemon.json**  file to customize parameters. You can run the  **dockerd --help**  command to view related configuration items and their usage methods. A configuration example is as follows:

```
cat /etc/docker/daemon.json 
{        
    "debug": true,        
    "storage-driver": "overlay2",        
    "storage-opts": ["overlay2.override_kernel_check=true"] 
}
```

