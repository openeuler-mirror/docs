# Management Module and SSL<a name="EN-US_TOPIC_0229622765"></a>

## Overview<a name="section1231973321819"></a>

The httpd service is a modular application that is distributed with many Dynamic Shared Objects \(DSOs\). DSOs can be dynamically loaded or unloaded when running if necessary. These modules are located in the /usr/lib64/httpd/modules/ directory of the server operating system. This section describes how to load and write a module.

## Loading a Module<a name="section92221385320"></a>

To load a special DSO module, you can use the load module indication in the configuration file. The modules provided by the independent software package have their own configuration files in the /etc/httpd/conf.modules.d directory.

For example, to load the asis DSO module, perform the following steps:

1.  In the /etc/httpd/conf.modules.d/00-optional.conf file, uncomment the following configuration line:

    ```
    LoadModule asis_module modules/mod_asis.so
    ```

2.  After the loading is complete, restart the httpd service to reload the configuration file.

    ```
    # systemctl restart httpd
    ```

3.  After the loading is complete, run the httpd -M command to check whether the asis DSO module is loaded.

    ```
    # httpd -M | grep asis
    ```

    If the following information is displayed, the asis DSO module is successfully loaded:

    ```
    asis_module (shared)
    ```


>![](public_sys-resources/icon-note.gif) **NOTE:**   
>**Common httpd commands**  
>-   httpd -v: views the httpd version number.  
>-   httpd -l: views the static modules compiled into the httpd program.  
>-   httpd -M: views the static modules and loaded dynamic modules that have been compiled into the httpd program.  

## Introduction to SSL<a name="section745572210620"></a>

Secure Sockets Layer \(SSL\) is an encryption protocol that allows secure communication between the server and client. The Transport Layer Security \(TLS\) protocol ensures security and data integrity for network communication. openEuler supports Mozilla Network Security Services \(NSS\) as the security protocol TLS. To load the SSL, perform the following steps:

1.  Install the  **mod\_ssl**  RPM package.

    ```
    # dnf install mod_ssl
    ```

2.  After the loading is complete, restart the httpd service to reload the configuration file.

    ```
    # systemctl restart httpd
    ```

3.  After the loading is complete, run the  **httpd -M**  command to check whether the SSL is loaded.

    ```
    # httpd -M | grep ssl
    ```

    If the following information is displayed, the SSL has been loaded successfully.

    ```
    ssl_module (shared)
    ```


