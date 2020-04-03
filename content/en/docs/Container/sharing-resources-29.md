# Sharing Resources<a name="EN-US_TOPIC_0184808175"></a>

Because the secure container runs on a virtualized and isolated lightweight VM, resources in some namespaces on the host cannot be accessed. Therefore,  **--net host**,  **--ipc host**,  **--pid host**, and  **--uts host**  are not supported during startup.

When a pod is started, all containers in the pod share the same net namespace and ipc namespace by default. If containers in the same pod need to share the pid namespace, you can use Kubernetes to configure the pid namespace. In Kubernetes 1.11, the pid namespace is disabled by default.

