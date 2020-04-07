# Usage Guide<a name="EN-US_TOPIC_0184808153"></a>

iSulad uses  **--cap-add**  or  **--cap-drop**  to add or delete specific permissions for a container. Do not add extra permissions to the container unless necessary. You are advised to remove the default but unnecessary permissions from the container.

```
isula run --rm -it --cap-add all --cap-drop SYS_ADMIN rnd-dockerhub.huawei.com/official/busybox
```

