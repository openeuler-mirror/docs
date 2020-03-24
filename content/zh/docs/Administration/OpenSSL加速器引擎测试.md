# OpenSSL加速器引擎测试<a name="ZH-CN_TOPIC_0231142821"></a>

用户可以通过以下命令测试部分加速器功能。

-   使用OpenSSL的软件算法测试RSA性能。

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed rsa2048
    ...
                     sign    verify    sign/s verify/s
    rsa 2048 bits 0.001384s 0.000035s   724.1  28365.8.
    ```

-   使用KAE引擎的测试RSA性能。

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -engine kae rsa2048
    ....
                     sign    verify    sign/s verify/s
    rsa 2048 bits 0.000355s 0.000022s   2819.0  45478.4
    ```


>![](public_sys-resources/icon-note.gif) **说明：**   
>使用KAE引擎加速后签名性能从724.1 sign/s提升到2819sign/s。  

-   使用OpenSSL的软件算法测试异步RSA性能。

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -async_jobs 36 rsa2048 
    ....
                      sign    verify    sign/s verify/s
    rsa 2048 bits 0.001318s 0.000032s    735.7  28555
    ```

-   使用KAE引擎的测试异步RSA性能。

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -engine kae -elapsed -async_jobs 36 rsa2048 
    .... 
                      sign    verify    sign/s verify/s
    rsa 2048 bits 0.000018s 0.000009s  54384.1 105317.0
    ```


>![](public_sys-resources/icon-note.gif) **说明：**   
>使用KAE引擎加速后异步RSA签名性能从735.7 sign/s提升到 54384.1sign/s。  

-   使用OpenSSL的软件算法测试SM4 CBC模式性能。

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -evp sm4-cbc
    You have chosen to measure elapsed time instead of user CPU time.
    ....
    Doing sm4-cbc for 3s on 10240 size blocks: 2196 sm4-cbc's in 3.00s  ....
    type          51200 bytes 102400 bytes1048576 bytes2097152 bytes4194304 bytes8388608 bytes
    sm4-cbc          82312.53k    85196.80k    85284.18k    85000.85k    85284.18k    85261.26k
    ```

-   使用KAE引擎的测试SM4 CBC模式性能。

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -engine kae -evp sm4-cbc
    engine "kae" set. 
    You have chosen to measure elapsed time instead of user CPU time.
    ...
    Doing sm4-cbc for 3s on 1048576 size blocks: 11409 sm4-cbc's in 3.00s
    ...
    type          51200 bytes 102400 bytes1048576 bytes2097152 bytes4194304 bytes8388608 bytes
    sm4-cbc         383317.33k   389427.20k   395313.15k   392954.73k   394264.58k   394264.58k
    ```


>![](public_sys-resources/icon-note.gif) **说明：**   
>使用KAE加速后SM4 CBC模式在输入数据块大小为8M时，从82312.53k/s提升到383317.33k/s。  

-   使用OpenSSL的软件算法测试SM3模式性能。

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -evp sm3
    You have chosen to measure elapsed time instead of user CPU time.
    Doing sm3 for 3s on 102400 size blocks: 1536 sm3's in 3.00s
    ....
    type          51200 bytes 102400 bytes1048576 bytes2097152 bytes4194304 bytes8388608 bytes
    sm3              50568.53k    52428.80k    52428.80k    52428.80k    52428.80k    52428.80k
    ```

-   使用KAE引擎测试SM3模式性能。

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -engine kae -evp sm3
    engine "kae" set.
    You have chosen to measure elapsed time instead of user CPU time.
    Doing sm3 for 3s on 102400 size blocks: 19540 sm3's in 3.00s
    ....
    type            51200 bytes  102400 bytes  1048576 bytes 2097152 bytes 4194304 bytes 8388608 bytes
    sm3             648243.20k   666965.33k   677030.57k   678778.20k   676681.05k   668292.44k
    ```


>![](public_sys-resources/icon-note.gif) **说明：**   
>使用KAE加速后SM3算法在输入数据块大小为8M时，从52428.80 k/s提升到668292.44k/s。  

-   使用OpenSSL软件算法测试AES算法CBC模式异步性能。

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -evp aes-128-cbc -async_jobs 4
    You have chosen to measure elapsed time instead of user CPU time.
    Doing aes-128-cbc for 3s on 51200 size blocks: 65773 aes-128-cbc's in 3.00s
    Doing aes-128-cbc for 3s on 102400 size blocks: 32910 aes-128-cbc's in 3.00s
    ....
    type          51200 bytes 102400 bytes1048576 bytes2097152 bytes4194304 bytes8388608 bytes
    aes-128-cbc    1122525.87k  1123328.00k  1120578.22k  1121277.27k  1119879.17k  1115684.86k
    ```

-   使用的KEA引擎测试AES算法CBC模式异步性能。

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -evp aes-128-cbc -async_jobs 4 -engine kae
    engine "kae" set.
    You have chosen to measure elapsed time instead of user CPU time.
    Doing aes-128-cbc for 3s on 51200 size blocks: 219553 aes-128-cbc's in 3.00s
    Doing aes-128-cbc for 3s on 102400 size blocks: 117093 aes-128-cbc's in 3.00s
    ....
    type          51200 bytes 102400 bytes1048576 bytes2097152 bytes4194304 bytes8388608 bytes
    aes-128-cbc    3747037.87k  3996774.40k  1189085.18k  1196774.74k  1196979.11k  1199570.94k
    ```


>![](public_sys-resources/icon-note.gif) **说明：**   
>-   AES仅支持数据长度为256KB及以下场景的异步使用。  
>-   使用KAE加速后AES算法在输入数据块为100K大小时，从1123328.00k/s提升到3996774.40 k/s 。  

