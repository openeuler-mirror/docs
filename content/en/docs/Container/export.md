# export<a name="EN-US_TOPIC_0184808245"></a>

Syntax:  **docker export** _container_

Function: Exports the file system content of a container to STDOUT in .tar format.

Parameter description: none.

Example:

Run the following commands to export the contents of the container named  **busybox**  to the  **busybox.tar**  package:

```
$ sudo docker export busybox > busybox.tar
$ ls
busybox.tar 
```

  

