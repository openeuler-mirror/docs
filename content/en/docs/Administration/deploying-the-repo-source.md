# Deploying the Repo Source<a name="EN-US_TOPIC_0229622749"></a>

1.  Run the following command to create the /srv/repo directory specified in the Nginx configuration file /etc/nginx/nginx.conf:

    ```
    mkdir -p /srv/repo
    ```

2.  Set the SELinux working mode to the permissive mode:

    ```
    setenforce permissive
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >After the repo server is restarted, you need to configure the repo server again.  

3.  Configure firewall rules to enable the port \(port 80\) configured for Nginx.

    ```
    firewall-cmd --add-port=80/tcp --permanent
    firewall-cmd --reload
    ```

    Check whether port 80 is enabled. If the output is** yes**, port 80 is enabled.

    ```
    firewall-cmd --query-port=80/tcp
    ```

    You can also enable port 80 using iptables.

    ```
    iptables -I INPUT -p tcp --dport 80 -j ACCEPT
    ```

4.  After the Nginx service is configured, you can use the IP address to access the web page, as shown in  [Figure 1](#en-us_topic_0151921017_fig1880404110396).

    **Figure  1**  Nginx deployment succeeded<a name="en-us_topic_0151921017_fig1880404110396"></a>  
    ![](figures/nginx-deployment-succeeded.png "nginx-deployment-succeeded")

5.  Use either of the following methods to add the repo source to the /srv/repo directory:
    -   Copy related files in the image to the /srv/repo directory.

        ```
        mount /home/openEuler/openEuler-20.03-LTS-aarch64-dvd.iso  /mnt/
        cp -r /mnt/Packages /srv/repo/
        cp -r /mnt/repodata /srv/repo/
        cp -r /mnt/RPM-GPG-KEY-openEuler /srv/repo/
        ```

        The  **openEuler-20.03-LTS-aarch64-dvd.iso**  file is stored in the  **/home/openEuler**  directory.

    -   Create a soft link for the repo source in the /srv/repo directory.

        ```
        ln -s /home/openEuler/os /srv/repo/os
        ```

        /home/openEuler/os is the created repo source, and /srv/repo/os points to /home/openEuler/os.



