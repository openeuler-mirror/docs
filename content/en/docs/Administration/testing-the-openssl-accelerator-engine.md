# Testing the OpenSSL Accelerator Engine<a name="EN-US_TOPIC_0231142821"></a>

You can run the following commands to test some accelerator functions.

-   Use the OpenSSL software algorithm to test the RSA performance.

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed rsa2048
    ...
                     sign    verify    sign/s verify/s
    rsa 2048 bits 0.001384s 0.000035s   724.1  28365.8.
    ```

-   Use the KAE to test the RSA performance.

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -engine kae rsa2048
    ....
                     sign    verify    sign/s verify/s
    rsa 2048 bits 0.000355s 0.000022s   2819.0  45478.4
    ```


>![](public_sys-resources/icon-note.gif) **NOTE:**   
>\#After KAE acceleration, the signature performance is improved from 724.1 sign/s to 2819 sign/s.  

-   Use the OpenSSL software algorithm to test the asynchronous RSA performance.

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -async_jobs 36 rsa2048 
    ....
                      sign    verify    sign/s verify/s
    rsa 2048 bits 0.001318s 0.000032s    735.7  28555
    ```

-   Use the KAE to test the asynchronous RSA performance.

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -engine kae -elapsed -async_jobs 36 rsa2048 
    .... 
                      sign    verify    sign/s verify/s
    rsa 2048 bits 0.000018s 0.000009s  54384.1 105317.0
    ```


>![](public_sys-resources/icon-note.gif) **NOTE:**   
>\#After KAE acceleration, the asynchronous RSA signature performance is improved from 735.7 sign/s to 54384.1 sign/s.  

-   Use the OpenSSL software algorithm to test the performance of the SM4 CBC mode.

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -evp sm4-cbc
    You have chosen to measure elapsed time instead of user CPU time.
    ....
    Doing sm4-cbc for 3s on 10240 size blocks: 2196 sm4-cbc's in 3.00s  ....
    type          51200 bytes 102400 bytes1048576 bytes2097152 bytes4194304 bytes8388608 bytes
    sm4-cbc          82312.53k    85196.80k    85284.18k    85000.85k    85284.18k    85261.26k
    ```

-   Use the KAE to test the SM4 CBC mode performance.

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


>![](public_sys-resources/icon-note.gif) **NOTE:**   
>After KAE acceleration, the SM4 CBC mode performance is improved from 82312.53 kbit/s to 383317.33 kbit/s when the input data block size is 8 MB.  

-   Use the OpenSSL software algorithm to test the SM3 mode performance.

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -evp sm3
    You have chosen to measure elapsed time instead of user CPU time.
    Doing sm3 for 3s on 102400 size blocks: 1536 sm3's in 3.00s
    ....
    type          51200 bytes 102400 bytes1048576 bytes2097152 bytes4194304 bytes8388608 bytes
    sm3              50568.53k    52428.80k    52428.80k    52428.80k    52428.80k    52428.80k
    ```

-   Use the KAE to test the SM3 mode performance.

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -engine kae -evp sm3
    engine "kae" set.
    You have chosen to measure elapsed time instead of user CPU time.
    Doing sm3 for 3s on 102400 size blocks: 19540 sm3's in 3.00s
    ....
    type            51200 bytes  102400 bytes  1048576 bytes 2097152 bytes 4194304 bytes 8388608 bytes
    sm3             648243.20k   666965.33k   677030.57k   678778.20k   676681.05k   668292.44k
    ```


>![](public_sys-resources/icon-note.gif) **NOTE:**   
>After KAE acceleration, the SM3 algorithm performance is improved from 52428.80 kbit/s to 668292.44 kbit/s when the input data block size is 8 MB.  

-   Use the OpenSSL software algorithm to test the asynchronous performance of the AES algorithm in CBC mode.

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -evp aes-128-cbc -async_jobs 4
    You have chosen to measure elapsed time instead of user CPU time.
    Doing aes-128-cbc for 3s on 51200 size blocks: 65773 aes-128-cbc's in 3.00s
    Doing aes-128-cbc for 3s on 102400 size blocks: 32910 aes-128-cbc's in 3.00s
    ....
    type          51200 bytes 102400 bytes1048576 bytes2097152 bytes4194304 bytes8388608 bytes
    aes-128-cbc    1122525.87k  1123328.00k  1120578.22k  1121277.27k  1119879.17k  1115684.86k
    ```

-   Use the KEA engine to test the asynchronous performance of the AES algorithm in CBC mode.

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


>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   The AES algorithm supports only asynchronous usage when the data length is 256 KB or less.  
>-   After KAE acceleration, the AES algorithm performance is improved from 1123328.00 kbit/s to 3996774.40 kbit/s when the input data block size is 100 KB.  

