# Usage Guide<a name="EN-US_TOPIC_0184808089"></a>

iSulad runs the  **--privileged**  command to enable the privilege mode for containers. Do not add privileges to containers unless necessary. Comply with the principle of least privilege to reduce security risks.

```
isula run --rm -it --privileged busybox
```

