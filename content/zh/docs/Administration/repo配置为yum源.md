# repo配置为yum源<a name="ZH-CN_TOPIC_0183245396"></a>

构建好的repo可以配置为yum源使用，在/etc/yum.repos.d/目录下创建\*\*\*.repo的配置文件（必须以.repo为扩展名），分为本地和http服务器配置yum源两种方式：

-   配置本地yum源

    在/etc/yum.repos.d目录下创建openEuler-1.0-Base.repo文件，使用构建的本地repo作为yum源，openEuler-1.0-Base.repo的内容如下：

    ```
    [base]
    name=base
    baseurl=file:///srv/repo
    enabled=1
    gpgcheck=1
    gpgkey=file:///srv/repo/RPM-GPG-KEY-openEuler
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >gpgcheck可设置为1或0，1表示进行gpg（GNU Private Guard）校验，0表示不进行gpg校验，gpgcheck可以确定rpm包的来源是有效和安全的。  
    >gpgkey为签名公钥的存放路径。  

-   配置http服务器yum源

    在/etc/yum.repos.d目录下创建openEuler-1.0-Base.repo文件，使用http服务端的repo作为yum源，openEuler-1.0-Base.repo的内容如下：

    ```
    [base]
    name=base
    baseurl=http://192.168.1.2/
    enabled=1
    gpgcheck=1
    gpgkey=http://192.168.1.2/RPM-GPG-KEY-openEuler
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >“192.168.1.2”为示例地址，请用户根据实际情况进行配置。  


