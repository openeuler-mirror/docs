# events<a name="EN-US_TOPIC_0184808277"></a>

Syntax:  **docker events \[**_options_**\]**

Function: Obtains real-time events from the docker daemon.

Parameter description:

**--since=""**: Displays events generated after the specified timestamp.

**--until=""**: Displays events generated before the specified timestamp.

Example: 

After the  **docker events**  command is executed, a container is created and started by running the  **docker run**  command. create and start events are output.

```
$ sudo docker events
2019-08-28T16:23:09.338838795+08:00 container create 53450588a20800d8231aa1dc4439a734e16955387efb5f259c47737dba9e2b5e (image=busybox:latest, name=eager_wu)
2019-08-28T16:23:09.339909205+08:00 container attach 53450588a20800d8231aa1dc4439a734e16955387efb5f259c47737dba9e2b5e (image=busybox:latest, name=eager_wu)
2019-08-28T16:23:09.397717518+08:00 network connect e2e20f52662f1ee2b01545da3b02e5ec7ff9c85adf688dce89a9eb73661dedaa (container=53450588a20800d8231aa1dc4439a734e16955387efb5f259c47737dba9e2b5e, name=bridge, type=bridge)
2019-08-28T16:23:09.922224724+08:00 container start 53450588a20800d8231aa1dc4439a734e16955387efb5f259c47737dba9e2b5e (image=busybox:latest, name=eager_wu)
2019-08-28T16:23:09.924121158+08:00 container resize 53450588a20800d8231aa1dc4439a734e16955387efb5f259c47737dba9e2b5e (height=48, image=busybox:latest, name=eager_wu, width=210)
```

  

