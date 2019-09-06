# kickstart文件简介<a name="ZH-CN_TOPIC_0187280632"></a>

## 简介<a name="zh-cn_topic_0151920746_sfb9d668f278f4de08438d71398a8ea06"></a>

kickstart文件是一个简单的文本文件，它包含了一个项目列表，列表中的每一个项目都有一个关键字用来识别。您可以通过Kickstart Configurator程序来生成kickstart文件，也可以手动编辑。

## 文件结构<a name="zh-cn_topic_0151920746_s79f86664d07a4b07b11b63023c3bcd6d"></a>

kickstart文件中各部分要遵循一定的顺序，每个部分中的各个选项（Item）并不需要按照一定的顺序排列。各部分的说明如下：

-   命令部分：这部分用来指定安装过程各种选项设置，要包含必选项。
-   %packages部分：这部分用来划定需要安装的软件包。
-   %pre和%post部分：这部分为预安装脚本和安装后脚本。

>![](public_sys-resources/icon-note.gif) **说明：**   
>%packages、%pre以及%post部分需要以%end结束。  

各个部分中的非必选项（Item）可以被省略。其中，以（\#）开头的行作为注释行被忽略。如果在kickstart安装中使用了不推荐的命令、选项或者语法，警告日志将会被记录到anaconda日志中。

