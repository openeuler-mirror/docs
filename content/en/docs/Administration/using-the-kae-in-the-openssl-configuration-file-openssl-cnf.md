# Using the KAE in the OpenSSL Configuration File openssl.cnf<a name="EN-US_TOPIC_0231142828"></a>

Create the  **openssl.cnf**  file and add the following configuration information to the file:

```
openssl_conf=openssl_def 
[openssl_def] 
engines=engine_section 
[engine_section] 
kae=kae_section 
[kae_section] 
engine_id=kae 
dynamic_path=/usr/local/lib/engines-1.1/kae.so 
KAE_CMD_ENABLE_ASYNC=1 #The value 0 indicates that the asynchronous function is disabled. The value 1 indicates that the asynchronous function is enabled. The asynchronous function is enabled by default.
default_algorithms=ALL 
init=1
```

Export the environment variable  **OPENSSL\_CONF**.

```
export OPENSSL_CONF=/home/app/openssl.cnf #Path for storing the openssl.cnf file
```

The following is an example of the OpenSSL configuration file:

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
    ......  
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

