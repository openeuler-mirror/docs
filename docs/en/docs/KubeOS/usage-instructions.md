# Usage Instructions

<!-- TOC -->



- [Usage Instructions](#usage-instructions)

  - [Precautions](#precautions)

  - [Upgrade](#upgrade)

  - [Rollback](#rollback)

    - [Application Scenarios](#application-scenarios)

    - [Manual Rollback](#manual-rollback)

    - [KubeOS-based Rollback](#kubeos-based-rollback)

      

<!-- /TOC -->

## Precautions

1. KubeOS provides atomic upgrade for all software packages. By default, single-package upgrade is not supported.
2. KubeOS supports container OSs with two partitions. Partitions more than two are not supported.
3. You can view the upgrade logs of a single node in the **/var/log/messages** file on the node.
4. Strictly follow the upgrade and rollback processes described in this document. If the processes are invoked in an abnormal sequence, the system may fail to be upgraded or rolled back.

## Upgrade

Compile the YAML file to deploy the instance of the OS custom resource (CR) in the cluster. The following is an example YAML file for deploying the CR instance:

```
apiVersion: upgrade.openeuler.org/v1alpha1
kind: OS
metadata:
  name: os-sample
spec:
  osversion: KubeOS 1.0.0
  imageurl: edit.image.url
  maxunavailable: 1
  checksum: image checksum
  flagsafe: imageurl is safe or not
```

Parameter description:

| Parameter           | Description                            | Mandatory (Yes/No)|
| -------------- | ----------------------------------- | -------- |
| osversion      | Address of the image used for the upgrade                | Yes       |
| imageurl       | Version of the OS image used for the upgrade            | Yes       |
| maxunavailable | Number of nodes that are upgraded concurrently                | Yes       |
| checksum       | Checksum (SHA-256) value of the image used for the upgrade| Yes       |
| flagsafe       | Whether `imageurl` specifies a secure address| Yes       |

The address specified by `imageurl` contains the protocol. Only the HTTP or HTTPS protocol is supported. If `imageurl` is set to an HTTPS address, secure transmission is used. If `imageurl` is set to an HTTP address, set `flagsafe` to `true`, because the image can be downloaded only when the address is secure. If `imageurl` is set to an HTTP address but `flagsafe` is not set to `true`, the address is insecure by default. The image will not be downloaded, and a message is written to the log of the node to be upgraded indicating that the address is insecure.

You are advised to set `imageurl` to an HTTPS address. In this case, ensure that the required certificate has been installed on the node to be upgraded. If the image server is maintained by yourself, you need to sign the certificate and ensure that the certificate has been installed on the node to be upgraded. Place the certificate in the **/etc/pki/ca-trust/source/anchors** directory of the container OS and run the `update-ca-trust extract` command to install the certificate. The administrator specifies the address and must ensure the security of the address. The intranet address is recommended.

Assume that the YAML file is **upgrade_v1alpha1_os.yaml**.

Check the OS version of the node that is not upgraded.

```
kubectl get nodes -o custom-columns='NAME:.metadata.name,OS:.status.nodeInfo.osImage'
```

Run the following command to deploy the CR instance in the cluster. The node is upgraded based on the configured parameters.

```
kubectl apply -f upgrade_v1alpha1_os.yaml
```

Check the node OS version again to determine whether the node upgrade is complete.

```
kubectl get nodes -o custom-columns='NAME:.metadata.name,OS:.status.nodeInfo.osImage'
```

> ![](./public_sys-resources/icon-note.gif)**NOTE**:
>
> If the upgrade needs to be performed again, modify the `imageurl`, `osversion`, `checksum`, `maxunavailable`, or `flagsafe` parameter in the **upgrade_v1alpha1_os.yaml** file.

## Rollback

### Application Scenarios

- If a node cannot be started, you can only manually roll back the container OS to the previous version that can be properly started.
- If a node can be started and run the system, you can manually or use KubeOS (similar to the upgrade) to roll back the container OS. You are advised to use KubeOS.

### Manual Rollback

Manually restart the node and select the second boot option to roll back the container OS. Manual rollback can only roll back the container OS to the version before the upgrade.

### KubeOS-based Rollback

1. Modify the YAML configuration file (for example, **upgrade_v1alpha1_os.yaml**) of the OS CR instance. Set the `imageurl`, `osversion`, `checksum`, and `flagsafe` parameters to the information about the target version to be rolled back to.

2. Update the CR instance in the cluster.

   ```
   kubectl apply -f upgrade_v1alpha1_os.yaml
   ```

   After the update is complete, the node rolls back the container OS based on the configuration information.

3. Check the OS version of the container on the node to determine whether the rollback is successful.

   ```
   kubectl get nodes -o custom-columns='NAME:.metadata.name,OS:.status.nodeInfo.osImage'
   ```
