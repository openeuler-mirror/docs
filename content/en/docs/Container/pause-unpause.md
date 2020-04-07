# pause/unpause<a name="EN-US_TOPIC_0184808248"></a>

Syntax:  **docker pause** _container_

**docker unpause** _container_

Function: The two commands are used in pairs. The  **docker pause**  command suspends all processes in a container, and the  **docker unpause**  command resumes the suspended processes.

Parameter description: none.

Example:

The following uses a container where the docker registry service runs as an example. After the  **docker pause**  command is executed to pause the process of the container, access of the registry service by running the  **curl**  command is blocked. You can run the  **docker unpause**  command to resume the suspended registry service. The registry service can be accessed by running the  **curl**  command.

1.  Run the following command to start a registry container:

    ```
    $ sudo docker run -d --name pause_test -p 5000:5000 registry
    ```

    Run the  **curl**  command to access the service. Check whether the status code  **200 OK**  is returned.

    ```
    $ sudo curl -v 127.0.0.1:5000
    ```

      

2.  Run the following command to stop the processes in the container:

    ```
    $ sudo docker pause pause_test
    ```

    Run the  **curl**  command to access the service to check whether it is blocked and wait until the service starts.

3.  Run the following command to resume the processes in the container:

    ```
    $ sudo docker unpause pause_test
    ```

    The cURL access in step 2 is restored and the request status code  **200 OK**  is returned.

      


