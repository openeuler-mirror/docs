# ps<a name="EN-US_TOPIC_0184808250"></a>

Syntax:** docker ps \[**_options_**\]**

Function: Lists containers in different states based on different parameters. If no parameter is added, all running containers are listed.

Parameter description:

**-a**  and  **--all=false**: Display the container.

**-f**  and  **--filter=\[\]**: Filter values. The available options are:  **exited=**_int_  \(exit code of the container\)  **status=**_restarting|running|paused|exited_  \(status code of the container\), for example,  **-f status=running**: lists the running containers.

**-l**  and  **--latest=false**: List the latest created container.

**-n=-1**: Lists the latest created  _n_  containers.

**--no-trunc=false**: Displays all 64-bit container IDs. By default, 12-bit container IDs are displayed.

**-q**  and  **--quiet=false**: Display the container ID.

**-s**  and  **--size=false**: Display the container size.

Example:

1.  Run the following command to lists running containers:

    ```
    $ sudo docker ps
    ```

2.  Run the following command to display all containers:

    ```
    $ sudo docker ps -a
    ```


