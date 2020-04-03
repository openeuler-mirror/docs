# Running a New Command in the Container<a name="EN-US_TOPIC_0184808173"></a>

The pause container functions only as a placeholder container. Therefore, if you start a pod, run a new command in the service container. The pause container does not execute the corresponding command. If only one container is started, run the following command directly:

```
docker exec -ti <container-id> <command>
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>1.  If the preceding command has no response because another host runs the  **docker restart**  or  **docker stop**  command to access the same container, you can press  **Ctrl**+**P**+**Q**  to exit the operation.  
>2.  If the  **-d**  option is used, the command is executed in the background and no error information is displayed. The exit code cannot be used to determine whether the command is executed correctly.  

