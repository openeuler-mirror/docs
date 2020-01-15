# daemon umask配置<a name="ZH-CN_TOPIC_0184808199"></a>

容器主进程和exec进程的默认umask为0022，为了满足安全性需求，避免容器受到攻击，修改runc了实现，将默认umask修改为0027。修改后others群组将无法访问新建文件或目录。

docker启动容器时的默认umask值为0027，可以在dockerd启动时，使用--exec-opt native.umask=normal参数将容器启动时的umask修改为0022。

>![](public_sys-resources/icon-notice.gif) **须知：**   
>如果docker create/run也配置了native.umask参数，则以docker create/run中的配置为准。  

详细的配置见[docker create](create.md#ZH-CN_TOPIC_0184808242)和[docker run](run.md#ZH-CN_TOPIC_0184808254)章节的参数说明。

