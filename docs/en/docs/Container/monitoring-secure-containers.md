# Monitoring Secure Containers

## Description

The **kata events** command is used to view the status information of a specified container. The information includes but is not limited to the container memory, CPU, PID, block I/O, hugepage memory, and network information.

## Usage

```
kata-runtime metrics <sandbox id>
```

## Prerequisites

The container to be queried must be in the **running** state. Otherwise, the following error message will be displayed: "Container ID \(<container\_id\>\) does not exist".

This command can be used to query the status of one container at a time.

## Example

-   To display and refresh the container status every three seconds:

    ```
    $ kata-runtime metrics b1ea31830b57d08e1782e2bdb19cf9162908445cc283d371aa1e4923a91e0d0b
    # HELP go_gc_duration_seconds A summary of the pause duration of garbage collection cycles.
    # TYPE go_gc_duration_seconds summary
    go_gc_duration_seconds{quantile="0"} 2.717e-05
    go_gc_duration_seconds{quantile="0.25"} 3.7e-05
    go_gc_duration_seconds{quantile="0.5"} 4.043e-05
    go_gc_duration_seconds{quantile="0.75"} 4.633e-05
    go_gc_duration_seconds{quantile="1"} 0.00019117
    go_gc_duration_seconds_sum 0.00229451
    go_gc_duration_seconds_count 51
    # HELP go_goroutines Number of goroutines that currently exist.
    # TYPE go_goroutines gauge
    go_goroutines 29
    # HELP go_info Information about the Go environment.
    # TYPE go_info gauge
    go_info{version="go1.15.7"} 1
    # HELP go_memstats_alloc_bytes Number of bytes allocated and still in use.
    # TYPE go_memstats_alloc_bytes gauge
    go_memstats_alloc_bytes 2.487136e+06
    # HELP go_memstats_heap_idle_bytes Number of heap bytes waiting to be used.
    # TYPE go_memstats_heap_idle_bytes gauge
    go_memstats_heap_idle_bytes 6.2185472e+07
    # HELP go_memstats_heap_inuse_bytes Number of heap bytes that are in use.
    # TYPE go_memstats_heap_inuse_bytes gauge
    go_memstats_heap_inuse_bytes 4.333568e+06
    ...
    kata_guest_diskstat{disk="ram5",item="writes_merged"} 0
    kata_guest_diskstat{disk="ram6",item="discards"} 0
    kata_guest_diskstat{disk="ram6",item="discards_merged"} 0
    kata_guest_diskstat{disk="ram6",item="flushes"} 0
    kata_guest_diskstat{disk="ram6",item="in_progress"} 0
    kata_guest_diskstat{disk="ram6",item="merged"} 0
    kata_guest_diskstat{disk="ram6",item="reads"} 0
    kata_guest_diskstat{disk="ram6",item="sectors_discarded"} 0
    kata_guest_diskstat{disk="ram6",item="sectors_read"} 0
    kata_guest_diskstat{disk="ram6",item="sectors_written"} 0
    kata_guest_diskstat{disk="ram6",item="time_discarding"} 0
    kata_guest_diskstat{disk="ram6",item="time_flushing"} 0
    kata_guest_diskstat{disk="ram6",item="time_in_progress"} 0
    kata_guest_diskstat{disk="ram6",item="time_reading"} 0
    kata_guest_diskstat{disk="ram6",item="time_writing"} 0
    kata_guest_diskstat{disk="ram6",item="weighted_time_in_progress"} 0
    kata_guest_diskstat{disk="ram6",item="writes"} 0
    ...
    kata_shim_proc_status{item="vmlib"} 1.835008e+06
    kata_shim_proc_status{item="vmpeak"} 1.49815296e+09
    kata_shim_proc_status{item="vmpin"} 0
    kata_shim_proc_status{item="vmpmd"} 0
    kata_shim_proc_status{item="vmpte"} 655360
    kata_shim_proc_status{item="vmrss"} 3.2768e+07
    kata_shim_proc_status{item="vmsize"} 1.431044096e+09
    kata_shim_proc_status{item="vmstk"} 196608
    kata_shim_proc_status{item="vmswap"} 0
    kata_shim_proc_status{item="voluntary_ctxt_switches"} 43
    # HELP kata_shim_rpc_durations_histogram_milliseconds RPC latency distributions.
    # TYPE kata_shim_rpc_durations_histogram_milliseconds histogram
    kata_shim_rpc_durations_histogram_milliseconds_bucket{action="create",le="1"} 0
    kata_shim_rpc_durations_histogram_milliseconds_bucket{action="create",le="2"} 0
    kata_shim_rpc_durations_histogram_milliseconds_bucket{action="create",le="4"} 0
    kata_shim_rpc_durations_histogram_milliseconds_bucket{action="create",le="8"} 0
    kata_shim_rpc_durations_histogram_milliseconds_bucket{action="create",le="16"} 0
    kata_shim_rpc_durations_histogram_milliseconds_bucket{action="create",le="32"} 0
    ...
    kata_guest_netdev_stat{interface="eth0",item="recv_bytes"} 0
    kata_guest_netdev_stat{interface="eth0",item="recv_compressed"} 0
    kata_guest_netdev_stat{interface="eth0",item="recv_drop"} 0
    kata_guest_netdev_stat{interface="eth0",item="recv_errs"} 0
    kata_guest_netdev_stat{interface="eth0",item="recv_fifo"} 0
    kata_guest_netdev_stat{interface="eth0",item="recv_frame"} 0
    kata_guest_netdev_stat{interface="eth0",item="recv_multicast"} 0
    kata_guest_netdev_stat{interface="eth0",item="recv_packets"} 0
    kata_guest_netdev_stat{interface="eth0",item="sent_bytes"} 0
    kata_guest_netdev_stat{interface="eth0",item="sent_carrier"} 0
    kata_guest_netdev_stat{interface="eth0",item="sent_colls"} 0
    kata_guest_netdev_stat{interface="eth0",item="sent_compressed"} 0
    kata_guest_netdev_stat{interface="eth0",item="sent_drop"} 0
    kata_guest_netdev_stat{interface="eth0",item="sent_errs"} 0
    kata_guest_netdev_stat{interface="eth0",item="sent_fifo"} 0
    kata_guest_netdev_stat{interface="eth0",item="sent_packets"} 0
    kata_guest_netdev_stat{interface="eth1",item="recv_bytes"} 0
    kata_guest_netdev_stat{interface="eth1",item="recv_compressed"} 0
    ```


-   To exit the query after the container status is displayed:

    ```
    kata-runtime events --stats <container_id>
    ```

    The format of the command output is the same as that of the previous command. However, the query exits after the output is displayed once.


