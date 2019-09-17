# logs<a name="ZH-CN_TOPIC_0184808247"></a>

用法：**docker logs \[OPTIONS\] CONTAINER**

功能：抓取容器内的日志信息，容器可以使运行状态的也可以是停止状态的

选项：

-f, --follow=false        实时打印日志信息

-t, --timestamps=false     显示日志的时间戳

--since     显示指定时间之后的日志

--tail="all"              设置显示的行数，默认显示所有

示例：

1.  查看jaegertracing容器的日志信息，该容器上跑了一个jaegertracing服务

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

2.  加上-f选项，实时打印jaegertracing容器的日志信息

    ```
    $ sudo docker logs -f jaegertracing
    {"level":"info","ts":1566979103.3696961,"caller":"healthcheck/handler.go:99","msg":"Health Check server started","http-port":14269,"status":"unavailable"}
    {"level":"info","ts":1566979103.3820567,"caller":"memory/factory.go:55","msg":"Memory storage configuration","configuration":{"MaxTraces":0}}
    {"level":"info","ts":1566979103.390773,"caller":"tchannel/builder.go:94","msg":"Enabling service discovery","service":"jaeger-collector"}
    {"level":"info","ts":1566979103.3908608,"caller":"peerlistmgr/peer_list_mgr.go:111","msg":"Registering active peer","peer":"127.0.0.1:14267"}
    {"level":"info","ts":1566979103.3922884,"caller":"all-in-one/main.go:186","msg":"Starting agent"}
    ```


