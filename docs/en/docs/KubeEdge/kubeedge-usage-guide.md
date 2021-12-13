# KubeEdge Usage Guide

KubeEdge extends the capabilities of Kubernetes to edge scenarios and provides infrastructure support for the network, application deployment, and metadata synchronization between the cloud and the edge. The usage of KubeEdge is the same as that of Kubernetes. In addition, KubeEdge supports the management and control of edge devices. The following example describes how to use KubeEdge to implement edge-cloud synergy.

## 1. Preparations

**Example: KubeEdge Counter Demo**

The counter is a pseudo device. You can run this demo without any additional physical devices. The counter runs on the edge side. You can use the web interface on the cloud side to control the counter and get the counter value. Click the link below to view the schematic diagram.

For details, see https://github.com/kubeedge/examples/tree/master/kubeedge-counter-demo.

**1) This demo requires the KubeEdge v1.2.1 or later. In this example, the latest KubeEdge v1.8.0 is used.**

```
[root@ke-cloud ~]# kubectl get node
NAME       STATUS   ROLES        AGE   VERSION
ke-cloud   Ready    master       13h   v1.20.2
ke-edge1   Ready    agent,edge   64s   v1.19.3-kubeedge-v1.8.0

Note: In this document, the edge node ke-edge1 is used for verification. If you perform verification by referring to this document, you need to change the edge node name based on your actual deployment.
```

**2) Ensure that the following configuration items are enabled for the Kubernetes API server:**

```
--insecuret-port=8080
--insecure-bind-address=0.0.0.0
```
You can modify the `/etc/kubernetes/manifests/kube-apiserver.yaml` file, and then restart the Pod of the Kubernetes API server component to make the modifications take effect.

**3) Download the sample code:**

```
[root@ke-cloud ~]# git clone https://github.com/kubeedge/examples.git $GOPATH/src/github.com/kubeedge/examples
```

## 2. Creating the Device Model and Device

**1) Create the device model.**
```
[root@ke-cloud ~]# cd $GOPATH/src/github.com/kubeedge/examples/kubeedge-counter-demo/crds
[root@ke-cloud crds~]# kubectl create -f kubeedge-counter-model.yaml
```

**2) Create the device.**

Modify **matchExpressions** as required.

```
[root@ke-cloud ~]# cd $GOPATH/src/github.com/kubeedge/examples/kubeedge-counter-demo/crds
[root@ke-cloud crds~]# vim kubeedge-counter-instance.yaml
apiVersion: devices.kubeedge.io/v1alpha1
kind: Device
metadata:
  name: counter
  labels:
    description: 'counter'
    manufacturer: 'test'
spec:
  deviceModelRef:
    name: counter-model
  nodeSelector:
    nodeSelectorTerms:
    - matchExpressions:
      - key: 'kubernetes.io/hostname'
        operator: In
        values:
        - ke-edge1

status:
  twins:
    - propertyName: status
      desired:
        metadata:
          type: string
        value: 'OFF'
      reported:
        metadata:
          type: string
        value: '0'

[root@ke-cloud crds~]# kubectl create -f kubeedge-counter-instance.yaml
```

## 3. Deploying the Cloud Application

**1) Modify the code.**

The cloud application **web-controller-app** controls the edge application **pi-counter-app**. The default listening port of the cloud application is 80. Change the port number to 8089.
```
[root@ke-cloud ~]# cd $GOPATH/src/github.com/kubeedge/examples/kubeedge-counter-demo/web-controller-app
[root@ke-cloud web-controller-app~]# vim main.go
package main

import (
        "github.com/astaxie/beego"
        "github.com/kubeedge/examples/kubeedge-counter-demo/web-controller-app/controller"
)

func main() {
        beego.Router("/", new(controllers.TrackController), "get:Index")
        beego.Router("/track/control/:trackId", new(controllers.TrackController), "get,post:ControlTrack")

        beego.Run(":8089")
}
```

**2) Build the image.**

Note: When building the image, copy the source code to the path specified by **GOPATH**. Disable Go modules if they are enabled.

```
[root@ke-cloud web-controller-app~]# make all
[root@ke-cloud web-controller-app~]# make docker
```

**3) Deploy web-controller-app.**

```
[root@ke-cloud ~]# cd $GOPATH/src/github.com/kubeedge/examples/kubeedge-counter-demo/crds
[root@ke-cloud crds~]# kubectl apply -f kubeedge-web-controller-app.yaml
```

## 4. Deploying the Edge Application

The **pi-counter-app** application on the edge is controlled by the cloud application. The edge application communicates with the MQTT server to perform simple counting.

**1) Modify the code and build the image.**

Change the value of **GOARCH** to **amd64** in `Makefile` to run the container.

```
[root@ke-cloud ~]# cd $GOPATH/src/github.com/kubeedge/examples/kubeedge-counter-demo/counter-mapper
[root@ke-cloud counter-mapper~]# vim Makefile
.PHONY: all pi-execute-app docker clean
all: pi-execute-app

pi-execute-app:
        GOARCH=amd64 go build -o pi-counter-app main.go

docker:
        docker build . -t kubeedge/kubeedge-pi-counter:v1.0.0

clean:
        rm -f pi-counter-app

[root@ke-cloud counter-mapper~]# make all
[root@ke-cloud counter-mapper~]# make docker
```

**2) Deploy pi-counter-app.**

```
[root@ke-cloud ~]# cd $GOPATH/src/github.com/kubeedge/examples/kubeedge-counter-demo/crds
[root@ke-cloud crds~]# kubectl apply -f kubeedge-pi-counter-app.yaml

Note: To prevent Pod deployment from being stuck at `ContainerCreating`, run the docker save, scp, and docker load commands to release the image to the edge.

[root@ke-cloud ~]# docker save -o kubeedge-pi-counter.tar kubeedge/kubeedge-pi-counter:v1.0.0
[root@ke-cloud ~]# scp kubeedge-pi-counter.tar root@192.168.1.56:/root
[root@ke-edge1 ~]# docker load -i kubeedge-pi-counter.tar
```

## 5. Trying the Demo

Now, the KubeEdge Demo is deployed on the cloud and edge as follows:

```
[root@ke-cloud ~]# kubectl get pods -o wide
NAME                                    READY   STATUS    RESTARTS   AGE     IP             NODE       NOMINATED NODE   READINESS GATES
kubeedge-counter-app-758b9b4ffd-f8qjj   1/1     Running   0          26m     192.168.1.66   ke-cloud   <none>           <none>
kubeedge-pi-counter-c69698d6-rb4xz      1/1     Running   0          2m      192.168.1.56   ke-edge1   <none>           <none>
```

Let's test the running effect of the Demo.

**1) Execute the ON command.**
On the web page, select **ON** and click **Execute**. You can run the following command on the edge node to view the execution result:
```
[root@ke-edge1 ~]# docker logs -f counter-container-id
```

**2) Check the counter's STATUS.**
On the web page, select **STATUS** and click **Execute**. The current counter status is displayed on the web page.

**3) Execute the OFF command.**
On the web page, select **OFF** and click **Execute**. You can run the following command on the edge node to view the execution result:
```
[root@ke-edge1 ~]# docker logs -f counter-container-id
```

## 6. Others

**1) For more official KubeEdge examples, visit https://github.com/kubeedge/examples.**

|Name | Description |
|---|---|
|  [LED-RaspBerry-Pi](led-raspberrypi/README.md)     |Controlling a LED light with Raspberry Pi using KubeEdge platform.
|[Data Analysis @ Edge](apache-beam-analysis/README.md) | Analyzing data at edge by using Apache Beam and KubeEdge.
| [Security@Edge](security-demo/README.md) | Security at edge using SPIRE for identity management.
[Bluetooth-CC2650-demo](bluetooth-CC2650-demo/README.md)     |Controlling a CC2650 SensorTag bluetooth device using KubeEdge platform.
| [Play Music @Edge through WeChat](wechat-demo/README.md) | Play music at edge based on WeChat and KubeEdge.
| [Play Music @Edge through Web](web-demo/README.md) | Play music at edge based on Web and KubeEdge.
| [Collecting temperature @Edge](temperature-demo/README.md) | Collecting temperature at edge based KubeEdge.
| [Control pseudo device counter and collect data](kubeedge-counter-demo/README.md) | Control pseudo device counter and collect data based KubeEdge.
  [Play Music @Edge through Twitter](ke-twitter-demo/README.md)| Play music at edge based on Twitter and KubeEdge.
  [Control Zigbee @Edge through cloud](kubeedge-edge-ai-application/README.md) | Face detection at cloud using OpenCV and using it to control zigbee on edge using KubeEdge.

**2) Use EdgeMesh to discover edge services.**

https://github.com/kubeedge/edgemesh

**3) Customize the cloud-edge message route.**

https://kubeedge.io/en/docs/developer/custom_message_deliver/
