# Automatic Deployment

Manual deployment of Kubernetes clusters requires manually deploying various components. This is both time- and labor-consuming, especially during large scale Kubernetes cluster deployment, as low efficiency and errors are likely to surface. To solve the problem, openEuler launched the Kubernetes cluster deployment tool in version 21.09. This highly flexible tool provides functions such as automatic deployment and deployment process tracking of large scale Kubernetes clusters.

The following describes the usage of the Kubernetes cluster automatic deployment tool.

## Architecture Overview



![](./figures/arch.png)

The overall architecture of automatic cluster deployment is shown in the figure above. The modules are described as follows:

- GitOps: Responsible for cluster configuration management, such as updating, creating, and deleting configurations.The cluster management function is not provided in version 21.09.
- InitCluster: The meta cluster, which functions as the central cluster to manage the other service clusters.
- eggops: Custom Resource Definitions (CRDs) and controllers used to abstract the Kubernetes clusters.
- master: The master node of Kubernetes, which provides the control plane of the cluster.
- worker: The load node of Kubernetes , which carries user services.
- ClusterA, ClusterB, and ClusterC: service clusters, which carry user services.

If you are interested in the Kubernetes cluster deployment tool provided by openEuler, visit [https://gitee.com/openeuler/eggo](https://gitee.com/openeuler/eggo).