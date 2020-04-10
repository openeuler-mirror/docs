# Initialization Failure<a name="EN-US_TOPIC_0231143170"></a>

## Symptom<a name="section189811511193010"></a>

The accelerator engine is not completely loaded due to an initialization failure.

## Solution<a name="section1049923014301"></a>

1.  Check whether the accelerator drivers are loaded successfully. Specifically, run the  **lsmod**  command to check whether uacce.ko, qm.ko, sgl.ko, hisi\_sec2.ko, hisi\_hpre.ko, hisi\_zip.ko, and hisi\_rde.ko exist.

    ```
    # lsmod | grep uacce
    uacce                  262144  2 hisi_hpre,hisi_qm,hisi_sec2,hisi_zip,hisi_rde
    ```

2.  Check whether the accelerator engine library exists in  **/usr/lib64**  \(directory for RPM installation\) or  **/usr/local/lib**  \(directory for source code installation\) and the OpenSSL installation directory, and check whether the correct soft link is established.

    ```
     [root@localhost home]# ll /usr/local/lib/engines-1.1/ |grep kae 
    #Check whether the KAE has been correctly installed and whether a soft link has been established. If yes, the displayed information is as follows:
    # ll /usr/local/lib/engines-1.1/ |grep kae
    lrwxrwxrwx. 1 root root     22 Nov 12 02:33 kae.so -> kae.so.1.0.1
    lrwxrwxrwx. 1 root root     22 Nov 12 02:33 kae.so.0 -> kae.so.1.0.1
    -rwxr-xr-x. 1 root root 112632 May 25  2019 kae.so.1.0.1
    [[root@localhost home]#
     [root@localhost home]# ll /usr/lib64/ | grep libwd  
    #Check whether libwd has been correctly installed and whether a soft link has been established. If yes, the displayed information is as follows:
    lrwxrwxrwx.  1 root root       14 Nov 12 02:33 libwd.so -> libwd.so.1.0.1
    lrwxrwxrwx.  1 root root       14 Nov 12 02:33 libwd.so.0 -> libwd.so.1.0.1
    -rwxr-xr-x.  1 root root   137120 May 25  2019 libwd.so.1.0.1
    [root@localhost home]#
    ```

3.  Check whether the path of the OpenSSL engine library can be exported by running the  **export**  command.

    ```
    # echo $OPENSSL_ENGINES 
    # export OPENSSL_ENGINES=/usr/local/lib/engines-1.1
    #  echo $OPENSSL_ENGINES
    /usr/local/lib/engines-1.1
    ```


