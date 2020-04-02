# Removing a Pod from the CNI Network List<a name="EN-US_TOPIC_0184808075"></a>

When StopPodSandbox is called, the interface for removing a pod from the CNI network list will be called to clear network resources.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>1. Before calling the RemovePodSandbox interface, you must call the StopPodSandbox interface at least once.  
>2. If StopPodSandbox fails to call the CNI, residual network resources may exist.  

