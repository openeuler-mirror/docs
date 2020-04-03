# inspect<a name="EN-US_TOPIC_0184808246"></a>

Syntax:  **docker inspect \[**_options_**\] **_container_**|**_image _**\[**_container_|_image..._**\]**

Function: Returns the underlying information about a container or image.

Parameter description:

**-f**  and  **--format=""**: Output information in a specified format.

**-s**  and  **--size**: Display the total file size of the container when the query type is container.

**--type**: Returns the JSON format of the specified type.

**-t**  and  **--time=120**: Timeout interval, in seconds. If the  **docker inspect**  command fails to be executed within the timeout interval, the system stops waiting and immediately reports an error. The default value is  **120**.

Example:

1.  Run the following command to return information about a container:

    ```
    $ sudo docker inspect busybox_test
    [
        {
            "Id": "9fbb8649d5a8b6ae106bb0ac7686c40b3cbd67ec2fd1ab03e0c419a70d755577",
            "Created": "2019-08-28T07:43:51.27745746Z",
            "Path": "bash",
            "Args": [],
            "State": {
                "Status": "running",
                "Running": true,
                "Paused": false,
                "Restarting": false,
                "OOMKilled": false,
                "Dead": false,
                "Pid": 64177,
                "ExitCode": 0,
                "Error": "",
                "StartedAt": "2019-08-28T07:43:53.021226383Z",
                "FinishedAt": "0001-01-01T00:00:00Z"
            },
    ......
    ```

      

2.  Run the following command to return the specified information of a container in a specified format. The following uses the IP address of the busybox\_test container as an example.

    ```
    $ sudo docker inspect -f {{.NetworkSettings.IPAddress}} busybox_test
    172.17.0.91
    ```


