# Installation and Deployment

This chapter describes how to install and deploy the KubeOS tool.

<!-- TOC -->



- [Installation and Deployment](#installation-and-deployment)

  - [Software and Hardware Requirements](#software-and-hardware-requirements)

    - [Hardware Requirements](#hardware-requirements)
    - [Software Requirements](#software-requirements)
    - [Environment Preparation](#environment-preparation)

  - [KubeOS Installation](#kubeos-installation)

  - [KubeOS Deployment](#kubeos-deployment)

    - [Building the os-operator and os-proxy Images](#building-the-os-operator-and-os-proxy-images)
    - [Building a Container OS Image](#building-a-container-os-image)
    - [Deploying CRD, os-operator, and os-roxy](#deploying-crd-os-operator-and-os-proxy)

    

<!-- /TOC -->

## Software and Hardware Requirements

### Hardware Requirements

* Currently, only the x86 architecture is supported.

### Software Requirements

* OS: openEuler 21.09

### Environment Preparation

* Install the openEuler system. For details, see the _openEuler 21.09 Installation Guide_.
* Install qemu-img, bc, Parted, tar, Yum, and Docker.

## KubeOS Installation

To install KubeOS, perform the following steps:

1. Configure the Yum sources: openEuler 21.09 and openEuler 21.09:EPOL:

   ```
   [openEuler21.09] # openEuler 21.09 official source
   name=openEuler21.09
   baseurl=http://repo.openeuler.org/openEuler-21.09/everything/$basearch/ 
   enabled=1
   gpgcheck=1
   gpgkey=http://repo.openeuler.org/openEuler-21.09/everything/$basearch/RPM-GPG-KEY-openEuler
   ```

   ```
   [Epol] # openEuler 21.09:EPOL official source
   name=Epol
   baseurl=http://repo.openeuler.org/openEuler-21.09/EPOL/main/$basearch/
   enabled=1
   gpgcheck=1
   gpgkey=http://repo.openeuler.org/openEuler-21.09/OS/$basearch/RPM-GPG-KEY-openEuler 
   ```

2. Install KubeOS as the **root** user.

   ```shell
   # yum install KubeOS KubeOS-scripts -y
   ```


> ![](./public_sys-resources/icon-note.gif)**NOTE**:
>
> KubeOS is installed in the **/opt/kubeOS** directory, including the os-operator, os-proxy, os-agent binary files, container OS image build tools, and corresponding configuration files.

## KubeOS Deployment

After KubeOS is installed, you need to configure and deploy it. This section describes how to configure and deploy KubeOS.

### Building the os-operator and os-proxy Images

#### Environment Preparation

Before using Docker to create a container image, ensure that Docker has been installed and configured.

#### Procedure

1. Go to the working directory.

   ```shell
   cd /opt/kubeOS
   ```

2. Specify the image repository, name, and version for os-proxy.

   ```shell
   export IMG_PROXY=your_imageRepository/os-proxy_imageName:version
   ```

3. Specify the image repository, name, and version for os-operator.

   ```shell
   export IMG_OPERATOR=your_imageRepository/os-operator_imageName:version
   ```

4. Compile a Dockerfile to build an image. Pay attention to the following points when compiling a Dockerfile:

   * The os-operator and os-proxy images must be built based on the base image. Ensure the security of the base image.
   * Copy the os-operator and os-proxy binary files to the corresponding images.
   * Ensure that the **root** owner and owner group are assigned for the os-proxy binary file in the os-proxy image, and the file permission is **500**.
   * Ensure that the owner and owner group of the os-operator binary file in the os-operator image are the user who runs the os-operator process in the container, and the file permission is **500**.
   * The locations of the os-operator and os-proxy binary files in the image and the commands run during container startup must correspond to the parameters specified in the YAML file used for deployment.

   An example Dockerfile is as follows:

   ```
   FROM your_baseimage
   COPY ./bin/proxy /proxy
   ENTRYPOINT ["/proxy"]
   ```

   ```
   FROM your_baseimage
   COPY --chown=6552:6552 ./bin/operator /operator
   ENTRYPOINT ["/operator"]
   ```

   You can build the Dockerfile in multiple phases.

5. Build the images to be deployed in containers (os-operator and os-proxy images).

   ```shell
   # Specify the Dockerfile path of os-proxy.
   export DOCKERFILE_PROXY=your_dockerfile_proxy
   # Specify the Dockerfile path of os-operator.
   export DOCKERFILE_OPERATOR=your_dockerfile_operator
   # Build images.
   docker build -t ${IMG_OPERATOR} -f ${DOCKERFILE_OPERATOR} .
   docker build -t ${IMG_PROXY} -f ${DOCKERFILE_PROXY} .
   ```

6. Push the container images to the image repository.

   ```shell
   docker push ${IMG_OPERATOR}
   docker push ${IMG_PROXY}
   ```


### Building a Container OS Image

#### Precautions

* The **root** permissions are required for creating a container OS image.
* The RPM package source of the container OS image build tool is the full ISO file of openEuler, for example, **openEuler-21.09-everything-x86_64-dvd.iso**.
* By default, the container OS image built using the default RPM list is stored in the same path as the build tool. This partition must have at least 25 GiB free disk space.
* When creating a container OS image, you cannot customize the file system to be mounted.

#### Procedure

The command for creating a container OS is as follows:

**generate.sh** *ISO_PATH VERSION AGENT_PATH ENCRYPTED_PASSWD*

The parameters are described as follows:

- `ISO_PATH`: full ISO file path
- `AGENT_PATH`: os-agent binary file path

* `VERSION`: version of the created container OS image

* `ENCRYPTED_PASSWD`: password of the **root** user of the container OS image. The password is encrypted with a salt value and can be generated using OpenSSL or KIWI commands.


To create a container OS, perform the following steps:

1. Go to the execution directory.

   ```shell
   cd /opt/kubeOS/scripts
   ```

2. Run **generate.sh** to create the container OS. The following is a command example:

   ```shell
   bash generate.sh openEuler-21.09-everything-x86_64-dvd.iso v1 ../bin/os-agent '''$1$xyz$RdLyKTL32WEvK3lg8CXID0'''
   ```

   After the container OS image is created, the following files are generated in the **/opt/kubeOS/scripts** directory:

   - **system.qcow2**: system image. The default size of **system.qcow2** is 20 GiB. The size of the root file system partition is less than 2020 MiB, and the size of the Persist partition is less than 16 GiB.
   - **update.img**: partition image of the root file system that is used for upgrade.

   The created container OS image can be used only in the VM of the x86 architecture.


### Deploying CRD, os-operator, and os-proxy

#### Precautions

* Deploy the Kubernetes cluster first. For details, see the _openEuler 21.09 Kubernetes Cluster Deployment Guide_.

- The OS of the worker nodes to be upgraded in the cluster must be the container OS built using the method described in the previous section. If it is not, use **system.qcow2** to deploy the VM again. For details about how to deploy a VM, see the _openEuler 21.09 Virtualization User Guide_. Currently, the master nodes do not support container OS upgrade. Use openEuler 21.09 to deploy the upgrade on the master nodes.
- Compile the YAML files for deploying CustomResourceDefinition (CRD), os-operator, os-proxy, and role-based access control (RBAC) of the OS.
- The os-operator and os-proxy components are deployed in the Kubernetes cluster. os-operator must be deployed as a Deployment, and os-proxy as a DaemonSet.
- Deploy Kubernetes security mechanisms, such as the RBAC, pod service account, and security policy.

#### Procedure

1. Prepare YAML files, including those used for deploying CRD, RBAC, os-operator, and os-proxy of the OS. For details, see [YAML examples](https://gitee.com/openeuler/KubeOS/tree/master/docs/example/config). The following uses **crd.yaml**, **rbac.yaml**, and **manager.yaml** as examples.

2. Deploy CRD, RBAC, os-operator, and os-proxy. Assume that the **crd.yaml**, **rbac.yaml**, and **manager.yaml** files are stored in the **config/crd**, **config/rbac**, and **config/manager** directories, respectively. Run the following commands:

   ```shell
   kubectl apply -f confg/crd
   kubectl apply -f config/rbac 
   kubectl apply -f config/manager
   ```

3. After the deployment is complete, run the following command to check whether each component is started properly. If **STATUS** of all components is **Running**, the components are started properly.

   ```shell
   kubectl get pods -A
   ```
