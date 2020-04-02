# port<a name="EN-US_TOPIC_0184808249"></a>

Syntax:  **docker port **_container_ **\[**_private\_port\[/proto\]_**\]**

Function: Lists the port mapping of a container or queries the host port where a specified port resides.

Parameter description: none.

Example:

1.  Run the following command to list all port mappings of a container:

    ```
    $ sudo docker port registry
    5000/tcp -> 0.0.0.0.:5000
    ```

2.  Run the following command to query the mapping of a specified container port:

    ```
    $ sudo docker port registry 5000
    0.0.0.0.:5000
    ```


