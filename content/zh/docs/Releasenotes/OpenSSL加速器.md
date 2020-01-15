# OpenSSL加速器<a name="ZH-CN_TOPIC_0215756628"></a>

OpenSSL加速器搭载在 Kunpeng 920 处理器上联合提供硬件加速引擎功能，可适用于大数据、数据加密、智能安防、Web服务及分布式存储等应用场景。

-   通过加速 SSL/TLS 应用和数据压缩，显著降低处理器消耗，提高处理器效率。
-   通过 OpenSSL、zlib 标准接口实现业务快速迁移。

主要支持以下算法：

-   摘要算法 SM3
-   对称加密算法 SM4，支持CTR/XTS/CBC模式

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >SM4-XTS模式仅支持内核态使用。  

-   对称加密算法 AES, 支持 ECB/CTR/XTS/CBC 模式
-   非对称算法 RSA，支持异步模型，支持 Key Sizes 1024/2048/3072/4096
-   压缩解压缩算法，支持 zlib/gzip

