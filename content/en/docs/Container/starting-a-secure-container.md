# Starting a Secure Container<a name="EN-US_TOPIC_0184808170"></a>

You can use the Docker engine or iSulad as the container engine of the secure container. The invoking methods of the two engines are similar. You can select either of them to start a secure container.

To start a secure container, perform the following steps:

1.  Ensure that the secure container component has been correctly installed and deployed.
2.  Prepare the container image. If the container image is busybox, run the following commands to download the container image using the Docker engine or iSulad:

    ```
    docker pull busybox
    ```

    ```
    isula pull busybox
    ```

3.  Start a secure container. Run the following commands to start a secure container using the Docker engine and iSulad:

    ```
    docker run -tid --runtime kata-runtime --network none busybox <command>
    ```

    ```
    isula run -tid --runtime kata-runtime --network none busybox <command>
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The secure container supports the CNI network only and does not support the CNM network. The  **-p**  and  **--expose**  options cannot be used to expose container ports. When using a secure container, you need to specify the  **--net=none**  option.  

4.  Start a pod.
    1.  Start the pause container and obtain the sandbox ID of the pod based on the command output. Run the following commands to start a pause container using the Docker engine and iSulad:

        ```
        docker run -tid --runtime kata-runtime --network none --annotation io.kubernetes.docker.type=podsandbox <pause-image> <command>
        ```

        ```
        isula run -tid --runtime kata-runtime --network none --annotation io.kubernetes.cri.container-type=sandbox <pause-image> <command>
        ```

          

    1.  Create a service container and add it to the pod. Run the following commands to create a service container using the Docker engine and iSulad:

        ```
        docker run -tid --runtime kata-runtime --network none --annotation io.kubernetes.docker.type=container --annotation io.kubernetes.sandbox.id=<sandbox-id> busybox <command>
        ```

        ```
        isula run -tid --runtime kata-runtime --network none --annotation io.kubernetes.cri.container-type=container --annotation io.kubernetes.cri.sandbox-id=<sandbox-id> busybox <command>
        ```

        **--annotation**  is used to mark the container type, which is provided by the Docker engine and iSulad, but not provided by the open-source Docker engine in the upstream community.



