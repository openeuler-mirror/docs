# 使用hostnamectl配置主机名<a name="ZH-CN_TOPIC_0183005797"></a>

## 查看所有主机名<a name="zh-cn_topic_0154473021_section547816643813"></a>

查看当前的主机名，使用如下命令：

```
# hostnamectl status
```

>![](public_sys-resources/icon-note.gif) **说明：**   
>如果命令未指定任何选项，则默认使用status选项。  

## 设定所有主机名<a name="zh-cn_topic_0154473021_section16458523193817"></a>

在root权限下，设定系统中的所有主机名，使用如下命令：

```
# hostnamectl set-hostname name
```

## 设定特定主机名<a name="zh-cn_topic_0154473021_section19628194016387"></a>

在root权限下，通过不同的参数来设定特定主机名，使用如下命令：

```
# hostnamectl set-hostname name [option...]
```

其中option可以是\--pretty、\--static、\--transient中的一个或多个选项。

如果\--static或\--transient与\--pretty选项一同使用时，则会将static和transient主机名简化为pretty主机名格式，使用“-”替换空格，并删除特殊字符。

当设定pretty主机名时，如果主机名中包含空格或单引号，需要使用引号。命令示例如下：

```
# hostnamectl set-hostname "Stephen's notebook" --pretty
```

## 清除特定主机名<a name="zh-cn_topic_0154473021_section1996517213917"></a>

要清除特定主机名，并将其还原为默认形式，在root权限下，使用如下命令：

```
# hostnamectl set-hostname "" [option...]
```

其中 "" 是空白字符串，option是\--pretty、\--static和\--transient中的一个或多个选项。

## 远程更改主机名<a name="zh-cn_topic_0154473021_section1530231411392"></a>

在远程系统中运行hostnamectl命令时，要使用-H，\--host 选项，使用如下命令：

```
# hostnamectl set-hostname -H [username]@hostname new_hostname
```

其中hostname是要配置的远程主机，username为自选项，new\_hostname为新主机名。hostnamectl会通过SSH连接到远程系统。

