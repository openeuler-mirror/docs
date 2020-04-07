# Modification Operations<a name="EN-US_TOPIC_0184808231"></a>

## Precautions for Starting Multiple Processes in Container Using docker exec <a name="en-us_topic_0182302405_section29233372507"></a>

When the first  **docker exec**  command executed in a container is the  **bash**  command, ensure that all processes started by  **exec**  are stopped before you run the  **exit**  command. Otherwise, the device may stop responding when you run the  **exit**  command. To ensure that the process started by  **exec**  is still running in the background when the  **exit**  command is run, add  **nohup**  when starting the process.

## Usage Conflict Between docker rename and docker stats  _container\_name_<a name="en-us_topic_0182302405_section98192042125013"></a>

If you run the  **docker stats **_container\_name_  command to monitor a container in real time, after the container is renamed by using  **docker rename**, the name displayed after  **docker stats**  is executed is the original name instead of the renamed one.

## Failed to Perform docker rename Operation on Container in restarting State<a name="en-us_topic_0182302405_section822914713508"></a>

When the rename operation is performed on a container in the restarting state, Docker modifies the container network configuration accordingly. The container in the restarting state may not be started and the network does not exist. As a result, the rename operation reports an error indicating that the sandbox does not exist. You are advised to rename only containers that are not in the restarting state.

## docker cp<a name="en-us_topic_0182302405_section25225495012"></a>

1.  When you run  **docker cp**  to copy files to a container, all operations on the container can be performed only after the  **docker cp**  command is executed.
2.  When a container runs as a non-**root**  user, and you run the  **docker cp**  command to copy a non-**root**  file on the host to the container, the permission role of the file in the container changes to  **root**. Different from the  **cp**  command, the  **docker cp**  command changes UIDs and GIDs of the files copied to the container to  **root**.

## docker login<a name="en-us_topic_0182302405_section350717582508"></a>

After the  **docker login**  command is executed,  **usrer/passwd**  encrypted by AES \(256-bit\) is saved in  **/root/.docker/config.json**. At the same time,  _root_**.docker/aeskey**  \(permission 0600\) is generated to decrypt  **usrer/passwd**  in  **/root/.docker/config.json**. Currently, AES key cannot be updated periodically. You need to manually delete the AES key for updating. After AES key is updated, you need to log in to Docker daemon again to push the AES key no matter whether Docker daemon is restarted. For example:

```
root@hello:~/workspace/dockerfile# docker login 
Login with your Docker ID to push and pull images from Docker Hub. If you don't have a Docker ID, head over to https://hub.docker.com to create one. 
Username: example Password: 
Login Succeeded 
root@hello:~/workspace/dockerfile# docker push example/empty 
The push refers to a repository [docker.io/example/empty] 
547b6288eb33: Layer already exists 
latest: digest: sha256:99d4fb4ce6c6f850f3b39f54f8eca0bbd9e92bd326761a61f106a10454b8900b size: 524 
root@hello:~/workspace/dockerfile# rm /root/.docker/aeskey 
root@hello:~/workspace/dockerfile# docker push example/empty 
WARNING: Error loading config file:/root/.docker/config.json - illegal base64 data at input byte 0 
The push refers to a repository [docker.io/example/empty] 
547b6288eb33: Layer already exists 
errors: 
denied: requested access to the resource is denied 
unauthorized: authentication required 
root@hello:~/workspace/dockerfile# docker login 
Login with your Docker ID to push and pull images from Docker Hub. If you don't have a Docker ID, head over to https://hub.docker.com to create one. 
Username: example 
Password: 
Login Succeeded 
root@hello:~/workspace/dockerfile# docker push example/empty 
The push refers to a repository [docker.io/example/empty] 
547b6288eb33: Layer already exists 
latest: digest: sha256:99d4fb4ce6c6f850f3b39f54f8eca0bbd9e92bd326761a61f106a10454b8900b size: 524
```

