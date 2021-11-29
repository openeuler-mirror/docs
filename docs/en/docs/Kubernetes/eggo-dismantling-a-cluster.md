# Dismantling a Cluster

When service requirements decrease and the existing number of nodes is not required, you can delete nodes from the cluster to save system resources and reduce costs. Or, when the service does not require a cluster, you can delete the entire cluster.

## Deleting Nodes

You can use the command line to delete nodes from the cluster. For example, to delete all node types whose IP addresses are *192.168.0.5* and *192.168.0.6* from the k8s-cluster, run the following command:

```shell
$ eggo -d delete --id k8s-cluster 192.168.0.5 192.168.0.6
```

## Deleting the Entire Cluster

> ![](./public_sys-resources/icon-note.gif)**NOTE:**
>
> - When a cluster is deleted, all data in the cluster is deleted and cannot be restored. Exercise caution when performing this operation.
> - Currently, dismantling a cluster does not delete the containers and the container images. However, if the Kubernetes cluster is configured to install a container engine during the deployment, the container engine will be deleted. As a result, the containers may run abnormally.
> - Some error information may be displayed when dismantling the cluster. Generally, this is caused by the error results returned during the delete operations. The cluster can still be properly dismantled.
>

You can use the command line to delete the entire cluster. For example, run the following command to delete the k8s-cluster:

```shell
$ eggo -d cleanup --id k8s-cluster
```
