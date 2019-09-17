# repo优先级<a name="ZH-CN_TOPIC_0183245397"></a>

当有多个repo源时，可通过在.repo文件的priority参数设置repo的优先级（如果不设置，默认优先级是99，当相同优先级的源中存在相同rpm包时，会安装最新的版本）。其中，1为最高优先级，99为最低优先级，如给openEuler-1.0-Base.repo配置优先级为2：

```
[base]
name=base
baseurl=http://192.168.1.2/
enabled=1
priority=2
gpgcheck=1
gpgkey=http://192.168.1.2/RPM-GPG-KEY-openEuler
```

>![](public_sys-resources/icon-note.gif) **说明：**   
>gpgcheck可设置为1或0，1表示进行gpg（GNU Private Guard）校验，0表示不进行gpg校验，gpgcheck可以确定rpm 包的来源是有效和安全的。  
>gpgkey为签名公钥的存放路径。  

