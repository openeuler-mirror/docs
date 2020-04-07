# Adding a Pod to the CNI Network List<a name="EN-US_TOPIC_0184808074"></a>

If  **--network-plugin=cni**  is configured for iSulad and the default network plane is configured, a pod is automatically added to the default network plane when the pod is started. If the additional network configuration is configured in the pod configuration, the pod is added to these additional network planes when the pod is started.

**port\_mappings**  in the pod configuration is also a network configuration item, which is used to set the port mapping of the pod. To set port mapping, perform the following steps:

```
"port_mappings":[
     { 
         "protocol": 1,
         "container_port": 80,
         "host_port": 8080
      }
]
```

-   **protocol**: protocol used for mapping. The value can be  **tcp**  \(identified by 0\) or  **udp**  \(identified by 1\).
-   **container\_port**: port through which the container is mapped.
-   **host\_port**: port mapped to the host.

