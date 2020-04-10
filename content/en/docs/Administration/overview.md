# Overview<a name="EN-US_TOPIC_0231142813"></a>

Kunpeng Accelerator Engine \(KAE\) is a software acceleration library of openEuler, which provides hardware acceleration engine function on the Kunpeng 920 processor. The engine supports symmetric encryption, asymmetric encryption, and digital signature. It is ideal for accelerating SSL/TLS applications, and can significantly reduce processor consumption and improve processor efficiency. In addition, users can quickly migrate existing services through the standard OpenSSL interface.

The KAE supports the following algorithms:

-   Digest algorithm SM3, which supports the asynchronous mode.
-   Symmetric encryption algorithm SM4, which supports asynchronous, CTR, XTS, and CBC modes.

-   Symmetric encryption algorithm AES, which supports asynchronous, ECB, CTR, XTS, and CBC modes.
-   Asymmetric algorithm RSA, which supports asynchronous mode, and key sizes 1024, 2048, 3072, and 4096.
-   Key negotiation algorithm DH, which supports asynchronous mode, and key sizes 768, 1024, 1536, 2048, 3072, and 4096.

