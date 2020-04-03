# logs<a name="EN-US_TOPIC_0184808247"></a>

Syntax:  **docker logs \[**_options_**\]** _container_

Function: Captures logs in a container that is in the  **running**  or  **stopped**  state.

Parameter description:

**-f**  and  **--follow=false**: Print logs in real time.

**-t**  and  **--timestamps=false**: Display the log timestamp.

**--since**: Displays logs generated after the specified time.

**--tail="all"**: Sets the number of lines to be displayed. By default, all lines are displayed.

Example:

1.  Run the following command to check the logs of the jaegertracing container where a jaegertracing service runs:

    ```
    $ sudo docker logs jaegertracing
    {"level":"info","ts":1566979103.3696961,"caller":"healthcheck/handler.go:99","msg":"Health Check server started","http-port":14269,"status":"unavailable"}
    {"level":"info","ts":1566979103.3820567,"caller":"memory/factory.go:55","msg":"Memory storage configuration","configuration":{"MaxTraces":0}}
    {"level":"info","ts":1566979103.390773,"caller":"tchannel/builder.go:94","msg":"Enabling service discovery","service":"jaeger-collector"}
    {"level":"info","ts":1566979103.3908608,"caller":"peerlistmgr/peer_list_mgr.go:111","msg":"Registering active peer","peer":"127.0.0.1:14267"}
    {"level":"info","ts":1566979103.3922884,"caller":"all-in-one/main.go:186","msg":"Starting agent"}
    {"level":"info","ts":1566979103.4047635,"caller":"all-in-one/main.go:226","msg":"Starting jaeger-collector TChannel server","port":14267}
    {"level":"info","ts":1566979103.404901,"caller":"all-in-one/main.go:236","msg":"Starting jaeger-collector HTTP server","http-port":14268}
    {"level":"info","ts":1566979103.4577134,"caller":"all-in-one/main.go:256","msg":"Listening for Zipkin HTTP traffic","zipkin.http-port":9411}
    ```

      

2.  Add  **-f**  to the command to output the logs of the jaegertracing container in real time.

    ```
    $ sudo docker logs -f jaegertracing
    {"level":"info","ts":1566979103.3696961,"caller":"healthcheck/handler.go:99","msg":"Health Check server started","http-port":14269,"status":"unavailable"}
    {"level":"info","ts":1566979103.3820567,"caller":"memory/factory.go:55","msg":"Memory storage configuration","configuration":{"MaxTraces":0}}
    {"level":"info","ts":1566979103.390773,"caller":"tchannel/builder.go:94","msg":"Enabling service discovery","service":"jaeger-collector"}
    {"level":"info","ts":1566979103.3908608,"caller":"peerlistmgr/peer_list_mgr.go:111","msg":"Registering active peer","peer":"127.0.0.1:14267"}
    {"level":"info","ts":1566979103.3922884,"caller":"all-in-one/main.go:186","msg":"Starting agent"}
    ```

      


