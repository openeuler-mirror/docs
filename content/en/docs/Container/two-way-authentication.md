# Two-Way Authentication<a name="EN-US_TOPIC_0184808130"></a>

## Description<a name="en-us_topic_0183267668_section7370111865810"></a>

After this function is enabled, iSulad and image repositories communicate over HTTPS. Both iSulad and image repositories verify the validity of each other.

## Usage<a name="en-us_topic_0183267668_section7154330115816"></a>

The corresponding registry needs to support this function and iSulad needs to be configured as follows:

1.  Modify iSulad configuration \(default path:  **/etc/isulad/daemon.json**\) and set  **use-decrypted-key**  to  **false**.
2.  Place related certificates in the folder named after the registry in the  **/etc/isulad/certs.d**  directory. For details about how to generate certificates, visit the official Docker website:
    -   [https://docs.docker.com/engine/security/certificates/](https://docs.docker.com/engine/security/certificates/)
    -   [https://docs.docker.com/engine/security/https/](https://docs.docker.com/engine/security/https/)


1.  Run the  **systemctl restart isulad**  command to restart iSulad.

## Parameters<a name="en-us_topic_0183267668_section1368424465811"></a>

Parameters can be configured in the  **/etc/isulad/daemon.json**  file or carried when iSulad is started.

```
isulad --use-decrypted-key=false
```

## Example<a name="en-us_topic_0183267668_section29146333101"></a>

Set  **use-decrypted-key**  to  **false**.

```
$ cat /etc/isulad/daemon.json
{
    "group": "isulad",
    "graph": "/var/lib/isulad",
    "state": "/var/run/isulad",
    "engine": "lcr",
    "log-level": "ERROR",
    "pidfile": "/var/run/isulad.pid",
    "log-opts": {
        "log-file-mode": "0600",
        "log-path": "/var/lib/isulad",
        "max-file": "1",
        "max-size": "30KB"
    },
    "log-driver": "stdout",
    "hook-spec": "/etc/default/isulad/hooks/default.json",
    "start-timeout": "2m",
    "storage-driver": "overlay2",
    "storage-opts": [
        "overlay2.override_kernel_check=true"
    ],
    "registry-mirrors": [
        "docker.io"
    ],
    "insecure-registries": [
        "rnd-dockerhub.huawei.com"
    ],
    "pod-sandbox-image": "",
    "image-opt-timeout": "5m",
    "native.umask": "secure",
    "network-plugin": "",
    "cni-bin-dir": "",
    "cni-conf-dir": "",
    "image-layer-check": false,
    "use-decrypted-key": false,
    "insecure-skip-verify-enforce": false
}
```

Place the certificate in the corresponding directory.

```
$ pwd
/etc/isulad/certs.d/my.csp-edge.com:5000
$ ls
ca.crt  tls.cert  tls.key
```

Restart iSulad.

```
$ systemctl restart isulad
```

Run the  **pull**  command to download images from the registry:

```
$ isula pull my.csp-edge.com:5000/busybox
Image "my.csp-edge.com:5000/busybox" pulling
Image "my.csp-edge.com:5000/busybox@sha256:f1bdc62115dbfe8f54e52e19795ee34b4473babdeb9bc4f83045d85c7b2ad5c0" pulled
```

