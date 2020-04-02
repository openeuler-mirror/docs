# rm<a name="EN-US_TOPIC_0184808253"></a>

Syntax:  **docker rm \[**_options_**\] **_container_ **\[**_container..._**\]**

Function: Deletes one or more containers.

Parameter description:

**-f**  and  **--force=false**: Forcibly delete a running container.

**-l**  and  **--link=false**: Remove the specified link and do not remove the underlying container.

**-v**  and  **--volumes=false**: Remove the volumes associated with the container.

Example:

1.  Run the following command to delete a stopped container:

    ```
    $ sudo docker rm test
    ```

2.  Run the following command to delete a running container:

    ```
    $ sudo docker rm -f rm_test
    ```


