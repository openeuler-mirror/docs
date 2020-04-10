# Installing and Configuring the OSC<a name="EN-US_TOPIC_0229243692"></a>

## Prerequisites<a name="en-us_topic_0184337289_en-us_topic_0179586527_section62054258459"></a>

You have obtained the  **root**  permission, and have configured a repo source for openEuler.

## Procedure<a name="en-us_topic_0184337289_section1377610254816"></a>

1.  Install the OSC command line tool and its dependency as the  **root**  user.

    ```
    # dnf install osc build
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The compilation of RPM software packages depends on build.  

2.  Configure the OSC.
    1.  Run the following command to open the  **\~/.oscrc**  file:

        ```
        # vi ~/.oscrc
        ```

    2.  Add the  **user**  and  **pass**  fields to  **\~/.oscrc**. The values of  _userName_  and  _passWord_  are the account and password registered on the OBS website \([http://openeuler-build.huawei.com/](http://openeuler-build.huawei.com/)\).

        ```
        [general]
        apiurl = http://openeuler-build.huawei.com/
        no_verify = 1
        [http://openeuler-build.huawei.com/]
        user=userName
        pass=passWord
        ```

    3.  If the domain name  **openeuler-build.openeuler.org**  cannot be resolved, manually add the following line to the  **/etc/hosts**  file:  _ip-address_  indicates the IP address of OBS, which is http://117.78.1.88/.

        ```
        ip-address openeuler-build.openeuler.org
        ```



