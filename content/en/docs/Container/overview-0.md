# Overview<a name="EN-US_TOPIC_0184808071"></a>

The container runtime interface \(CRI\) is provided to connect to the CNI network, including parsing the CNI network configuration file and adding or removing a pod to or from the CNI network. When a pod needs to support a network through a container network plug-in such as Canal, the CRI needs to be interconnected to Canal so as to provide the network capability for the pod.

