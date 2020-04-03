# cp<a name="EN-US_TOPIC_0184808241"></a>

Syntax:  **docker cp \[**_options_**\] **_container_**:**_src\_path_ _dest\_path_**|-**

**docker cp \[**_options_**\]** _src\_path_**|-** _container_**:**_dest\_path_

Function: Copies a file or folder from a path in a container to a path on the host or copies a file or folder from the host to the container:

Precautions: The  **docker cp**  command does not support the copy of files in virtual file systems such as  **/proc**,  **/sys**,  **/dev**, and  **/tmp**  in the container and files in the file systems mounted by users in the container.

Parameter description:

**-a**,  **--archive**: Sets the owner of the file copied to the container to the  **container**  user \(**--user**\).

**-L**,  **--follow-link**: Parses and traces the symbolic link of a file.

Example:

Run the following command to copy the  **/test**  directory in the registry container to the  **/home/**_aaa_  directory on the host:

```
$ sudo docker cp registry:/test /home/aaa
```

