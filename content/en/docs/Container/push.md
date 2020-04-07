# push<a name="EN-US_TOPIC_0184808271"></a>

Syntax:  **docker push** _name_**\[**_:tag_**\]**

Function: Pushes an image to the image registry.

Parameter description: none.

Example:

1.  Run the following command to push an image to the private image registry at 192.168.1.110:5000.
2.  Label the image to be pushed. \(The  **docker tag**  command is described in the following section.\) In this example, the image to be pushed is busybox:sshd.

    ```
    $ sudo docker tag ubuntu:sshd 192.168.1.110:5000/busybox:sshd
    ```

3.  Run the following command to push the tagged image to the private image registry:

    ```
    $ sudo docker push 192.168.1.110:5000/busybox:sshd
    ```

    During the push, the system automatically checks whether the dependent layer exists in the image registry. If yes, the layer is skipped.


