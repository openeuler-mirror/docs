# KAE引擎使用示例代码<a name="ZH-CN_TOPIC_0231142827"></a>

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
    OpenSSL_add_all_algorithms(); 
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
    /*使能加速器异步功能，可选配置，设置为“0”表示不使能，设置为“1”表示使能，默认使能异步功能*/ 
```

```
    ENGINE_ctrl_cmd_string(e, "KAE_CMD_ENABLE_ASYNC", "1", 0) 
```

```
    ENGINE_init(e); 
```

```
 
```

```
    RSA *rsa = RSA_new_method(e);#指定引擎用于RSA加解密 
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

```
}
```

