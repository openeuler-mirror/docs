# Configuring Networking for a Secure Container

## Configuring Networking for a Secure Container Using CNI

Container Network Interface (CNI), a project of Cloud Native Computing Foundation (CNCF), consists of a group of specifications and libraries for configuring network interfaces of Linux containers.

Why is CNI required? There are various container platforms and network solutions (such as flannel and Calico). Manually adapting each new solution to the container platforms requires heavy workloads. With CNI, as long as a new network solution meets the CNI standard, the solution can provide network functions to all container platforms that comply with the CNI specifications.

CNI plugins are independent executable files invoked by the upper-layer container management platform.



## Enabling CNI for a Secure Container

Enable the following configuration item in the `configuration.toml` file:

```
[netmon]
# If enabled, the network monitoring process gets started when the
# sandbox is created. This allows for the detection of some additional
# network being added to the existing network namespace, after the
# sandbox has been created.
# (default: disabled)
enable_netmon = true

# Specify the path to the netmon binary.
path = "/usr/bin/kata-netmon"

# If enabled, the runtime will not create a network namespace for shim and hypervisor processes.
# This option may have some potential impacts to your host. It should only be used when you know what you're doing.
# `disable_new_netns` conflicts with `enable_netmon`
# `disable_new_netns` conflicts with `internetworking_model=tcfilter` and `internetworking_model=macvtap`. It works only
# with `internetworking_model=none`. The tap device will be in the host network namespace and can connect to a bridge
# (like OVS) directly.
# If you are using docker, `disable_new_netns` only works with `docker run --net=none`
# (default: false)
#disable_new_netns = true
```



## TAP-based Network Support

The secure container technology is implemented based on VMs. For a physical machine system, a secure container is equivalent to a VM. Therefore, the secure container can connect the VM in the Neutron network to an external network by using the test access point (TAP) technology. You do not need to pay attention to TAP device creation and bridging. You only need to hot plug the specified TAP device (on an existing host) into the VM in the pause container and update the NIC information.
