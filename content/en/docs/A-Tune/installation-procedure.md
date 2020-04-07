# Installation Procedure<a name="EN-US_TOPIC_0213178454"></a>

To install the A-Tune, perform the following steps:

1.  Mount an openEuler ISO file.

    ```
    # mount openEuler-20.03-LTS-aarch64-dvd.iso /mnt
    ```

2.  Configure the local yum source.

    ```
    # vim /etc/yum.repos.d/local.repo
    ```

    The configured contents are as follows:

    ```
    [local]
    name=local
    baseurl=file:///mnt
    gpgcheck=0
    enabled=1
    ```

3.  Install an A-Tune server.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >In this step, both the server and client software packages are installed. For the single-node deployment, skip  **Step 4**.  

    ```
    # yum install atune -y
    ```

4.  For a distributed mode, install an A-Tune client.

    ```
    # yum install atune-client -y
    ```

5.  Check whether the installation is successful.

    ```
    # rpm -qa | grep atune
    atune-client-xxx
    atune-db-xxx
    atune-xxx
    ```

    If the preceding information is displayed, the installation is successful.


