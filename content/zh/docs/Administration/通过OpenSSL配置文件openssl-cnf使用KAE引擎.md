# 通过OpenSSL配置文件openssl.cnf使用KAE引擎<a name="ZH-CN_TOPIC_0231142828"></a>

新建openssl.cnf 需要添加如下配置信息

```
openssl_conf=openssl_def 
[openssl_def] 
engines=engine_section 
[engine_section] 
kae=kae_section 
[kae_section] 
engine_id=kae 
dynamic_path=/usr/local/lib/engines-1.1/kae.so 
KAE_CMD_ENABLE_ASYNC=1    # 0，表示不使能异步功能，1表示使能异步功能，默认使能 
default_algorithms=ALL 
init=1
```

导出OPENSSL\_CONF环境变量：

```
export OPENSSL_CONF=/home/app/openssl.cnf  #该路径为openssl.cnf存放路径
```

使用OpenSSL配置文件示例如下：

```
#include <stdio.h>  
```

```
#include <stdlib.h>  
```

```

```

```
/* OpenSSL headers */  
```

```
#include <openssl/bio.h>  
```

```
#include <openssl/ssl.h>  
```

```
#include <openssl/err.h>  
```

```
#include <openssl/engine.h>  
```

```

```

```
int main(int argc, char **argv)  
```

```
{  
```

```
    /* Initializing OpenSSL */  
```

```
    SSL_load_error_strings();  
```

```
    ERR_load_BIO_strings();  
```

```
#Load openssl configure 
```

```
OPENSSL_init_crypto(OPENSSL_INIT_LOAD_CONFIG, NULL);    OpenSSL_add_all_algorithms();  
```

```

```

```
    /*You can use ENGINE_by_id Function to get the handle of the Huawei Accelerator Engine*/  
```

```
    ENGINE *e = ENGINE_by_id("kae"); 
```

```
    /*The user code*/  
```

```
    ……  
```

```

```

```
;  
```

```
    ENGINE_free(e);  
```

```
;
```

