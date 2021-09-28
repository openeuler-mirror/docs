# KubeEdge使用文档

KubeEdge将Kubernetes的能力延伸到了边缘场景中，为云和边缘之间的网络，应用部署和元数据同步提供基础架构支持。KubeEdge在使用上与Kubernetes保持完全一致，除此之外还扩展了对边缘设备的管理与控制。本节将通过一个简单的例子向用户演示如何通过KubeEdge完成设备边云协同任务。

## 1. 准备工作

**选用示例：KubeEdge Counter Demo**

计数器是一个伪设备，用户无需任何额外的物理设备即可运行此演示。计数器在边缘侧运行，用户可以从云侧在Web中对其进行控制，也可以从云侧在Web中获得计数器值。原理图如下：

详细文档参考：https://github.com/kubeedge/examples/tree/master/kubeedge-counter-demo

**1）本示例要求KubeEdge版本必须是v1.2.1+，此次选择最新版的KubeEdge v1.8.0**

```
[root@ke-cloud ~]# kubectl get node
NAME       STATUS   ROLES        AGE   VERSION
ke-cloud   Ready    master       13h   v1.20.2
ke-edge1   Ready    agent,edge   64s   v1.19.3-kubeedge-v1.8.0

说明：本文接下来的验证将使用边缘节点ke-edge1进行，如果你参考本文进行相关验证，后续边缘节点名称的配置需要根据你的实际情况进行更改。
```

**2）确保k8s apiserver开启了以下配置：**

```
--insecuret-port=8080
--insecure-bind-address=0.0.0.0
```
可以通过修改/etc/kubernetes/manifests/kube-apiserver.yaml文件，并重启k8s-apiserver组件的pod来进行更改。

**3）下载示例代码：**

```
[root@ke-cloud ~]# git clone https://github.com/kubeedge/examples.git $GOPATH/src/github.com/kubeedge/examples
```

## 2. 创建device model和device

**1）创建device model**
```
[root@ke-cloud ~]# cd $GOPATH/src/github.com/kubeedge/examples/kubeedge-counter-demo/crds
[root@ke-cloud crds~]# kubectl create -f kubeedge-counter-model.yaml
```

**2）创建device**

根据你的实际情况修改matchExpressions：

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

## 3. 部署云端应用

**1）修改代码**

云端应用web-controller-app用来控制边缘端的pi-counter-app应用，该程序默认监听的端口号为80，此处修改为8089，如下所示：
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

**2）构建镜像**

注意：构建镜像时，请将源码拷贝到GOPATH对应的路径下，如果开启了go mod请关闭。

```
[root@ke-cloud web-controller-app~]# make all
[root@ke-cloud web-controller-app~]# make docker
```

**3）部署web-controller-app**

```
[root@ke-cloud ~]# cd $GOPATH/src/github.com/kubeedge/examples/kubeedge-counter-demo/crds
[root@ke-cloud crds~]# kubectl apply -f kubeedge-web-controller-app.yaml
```

## 4. 部署边缘端应用

边缘端的pi-counter-app应用受云端应用控制，主要与mqtt服务器通信，进行简单的计数功能。

**1）修改代码与构建镜像**

需要将Makefile中的GOARCH修改为amd64才能运行该容器。

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

**2）部署Pi Counter App**

```
[root@ke-cloud ~]# cd $GOPATH/src/github.com/kubeedge/examples/kubeedge-counter-demo/crds
[root@ke-cloud crds~]# kubectl apply -f kubeedge-pi-counter-app.yaml

说明：为了防止Pod的部署卡在`ContainerCreating`，这里直接通过docker save、scp和docker load命令将镜像发布到边缘端

[root@ke-cloud ~]# docker save -o kubeedge-pi-counter.tar kubeedge/kubeedge-pi-counter:v1.0.0
[root@ke-cloud ~]# scp kubeedge-pi-counter.tar root@192.168.1.56:/root
[root@ke-edge1 ~]# docker load -i kubeedge-pi-counter.tar
```

## 5. 体验Demo

现在，KubeEdge Demo的云端部分和边缘端的部分都已经部署完毕，如下：

```
[root@ke-cloud ~]# kubectl get pods -o wide
NAME                                    READY   STATUS    RESTARTS   AGE     IP             NODE       NOMINATED NODE   READINESS GATES
kubeedge-counter-app-758b9b4ffd-f8qjj   1/1     Running   0          26m     192.168.1.66   ke-cloud   <none>           <none>
kubeedge-pi-counter-c69698d6-rb4xz      1/1     Running   0          2m      192.168.1.56   ke-edge1   <none>           <none>
```

我们现在开始测试一下该Demo运行效果：

**1）执行ON命令**
在web页面上选择ON，并点击Execute，可以在edge节点上通过以下命令查看执行结果：
```
[root@ke-edge1 ~]# docker logs -f counter-container-id
```

**2）查看counter STATUS**
在web页面上选择STATUS，并点击Execute，会在Web页面上返回counter当前的status，如下所示：

**3）执行OFF命令**
在web页面上选择OFF，并点击Execute，可以再edge节点上通过以下命令查看执行结果：
```
[root@ke-edge1 ~]# docker logs -f counter-container-id
```

## 6. 其它

**1）更过多的KubeEdge官方示例请参考 https://github.com/kubeedge/examples**

|Name | Description |
|---|---|
|  [LED-RaspBerry-Pi](led-raspberrypi/README.md)     |Controlling a LED light with Raspberry Pi using KubeEdge platform
|[Data Analysis @ Edge](apache-beam-analysis/README.md) | Analyzing data at edge by using Apache Beam and KubeEdge
| [Security@Edge](security-demo/README.md) | Security at edge using SPIRE for identity management
[Bluetooth-CC2650-demo](bluetooth-CC2650-demo/README.md)     |Controlling a CC2650 SensorTag bluetooth device using KubeEdge platform
| [Play Music @Edge through WeChat](wechat-demo/README.md) | Play music at edge based on WeChat and KubeEdge
| [Play Music @Edge through Web](web-demo/README.md) | Play music at edge based on Web and KubeEdge
| [Collecting temperature @Edge](temperature-demo/README.md) | Collecting temperature at edge based KubeEdge
| [Control pseudo device counter and collect data](kubeedge-counter-demo/README.md) | Control pseudo device counter and collect data based KubeEdge
  [Play Music @Edge through Twitter](ke-twitter-demo/README.md)| Play music at edge based on Twitter and KubeEdge.
  [Control Zigbee @Edge through cloud](kubeedge-edge-ai-application/README.md) | Face detection at cloud using OpenCV and using it to control zigbee on edge using Kubeedge.

**2）使用EdgeMesh做边缘服务发现**

https://github.com/kubeedge/edgemesh

**3）自定义云边消息路由**

https://kubeedge.io/en/docs/developer/custom_message_deliver/

