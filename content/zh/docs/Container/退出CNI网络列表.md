# 退出CNI网络列表<a name="ZH-CN_TOPIC_0184808075"></a>

StopPodSandbox的时候，会调用退出CNI网络的接口，清理网络相关的资源。

>![](public_sys-resources/icon-note.gif) **说明：**   
>1. 在调用RemovePodSandbox接口之前，至少要调用一次StopPodSandbox接口  
>2. StopPodSandbox调用CNI接口失败，可能导致的网络资源残留。  

