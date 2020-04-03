# Description<a name="EN-US_TOPIC_0184808091"></a>

The Container Runtime Interface \(CRI\) provided by Kubernetes defines container and image service APIs. iSulad uses the CRI to interconnect with Kubernetes.

Since the container runtime is isolated from the image lifecycle, two services need to be defined. This API is defined by using  [Protocol Buffer](https://developers.google.com/protocol-buffers/)  based on  [gRPC](https://grpc.io/).

The current CRI version is v1alpha1. For official API description, access the following link:

[https://github.com/kubernetes/kubernetes/blob/release-1.14/pkg/kubelet/apis/cri/runtime/v1alpha2/api.proto](https://github.com/kubernetes/kubernetes/blob/release-1.14/pkg/kubelet/apis/cri/runtime/v1alpha2/api.proto)

iSulad uses the API description file of version 1.14 used by Pass, which is slightly different from the official API description file. API description in this document prevails.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>The listening IP address of the CRI WebSocket streaming service is  **127.0.0.1**  and the port number is  **10350**. The port number can be configured in the  **--websocket-server-listening-port**  command or in the  **daemon.json**  configuration file.  

