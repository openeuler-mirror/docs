# Best Practices

### Huge Page Configuration

#### Overview

StratoVirt supports the configuration of huge pages for VMs. Compared with the traditional 4K memory page mode, huge page memory can effectively reduce the number of TLB misses and page fault interrupts, significantly improving the performance of memory-intensive services.



#### Precautions

  - The directory to which the huge pages are mounted must be an absolute path.
  - Memory huge pages can be configured only during startup.
  - Only static huge pages are supported.
  - Configure huge pages on the host before use.
  - To use the huge page feature, ensure that the VM memory size is an integer multiple of *huge page size*.

#### Mutually Exclusive Features

- If huge pages are configured, the balloon feature becomes invalid.


#### Configuration Methods

##### Configuring Huge Pages on the Host

###### Mounting

Mount the huge page file system to a specified directory. `/path/to/hugepages` is the user-defined empty directory.

```
$ mount -t hugetlbfs hugetlbfs /path/to/hugepages
```


###### Setting the Number of Huge Pages

* Set the number of static huge pages. `num` indicates the specified number.

  ```
  $ sysctl vm.nr_hugepages=num
  ```

* Query huge page statistics.

  ```
  $ cat /proc/meminfo | grep Hugepages
  ```

  To view statistics about huge pages of other sizes, view the related information in the `/sys/kernel/mm/hugepages/hugepages-*/` directory.

</br>

>![](./public_sys-resources/icon-notice.gif) **Notice** 
>Configure the StratoVirt memory specifications and huge pages based on the huge page usage. If the huge page resources are insufficient, the VM fails to be started.




#### Huge Page Configuration During StratoVirt Startup




- CLI

  ```
  -mem-path /page/to/hugepages
  ```

  In the preceding command, `/page/to/hugepages` indicates the directory to which the huge page file system is mounted. Only absolute paths are supported.


- JSON file

  ```json
  {
      "machine-config": {
          "mem_path": "/page/to/hugepages",
          ...    
      },
          ...
  }
  ```

  In the preceding command, `/page/to/hugepages` indicates the directory to which the huge page file system is mounted. Only absolute paths are supported.

</br>

>![](./public_sys-resources/icon-caution.gif) **Note**
>**Typical configuration**: Set **mem-path** in the StratoVirt command line to the *huge page file system mount directory*. The StratoVirt huge page feature is recommended for the typical configuration.




### Performance Improvement


#### Memory Noise Floor


To achieve the optimal memory noise floor, developers can use the methods provided by WIKI on the StratoVirt homepage for compilation and testing.

[https://gitee.com/openeuler/stratovirt/wikis/%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95-%E5%86%85%E5%AD%98%E5%BA%95%E5%99%AA?sort_id=3879743](https://gitee.com/openeuler/stratovirt/wikis/%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95-%E5%86%85%E5%AD%98%E5%BA%95%E5%99%AA?sort_id=3879743)


#### Cold Startup Time

To reduce the cold startup time, developers can also use the methods provided on by WIKI on the StratoVirt homepage to perform compilation tests.

[https://gitee.com/openeuler/stratovirt/wikis/%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95-%E5%86%B7%E5%90%AF%E5%8A%A8%E6%97%B6%E9%97%B4?sort_id=3879744](https://gitee.com/openeuler/stratovirt/wikis/%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95-%E5%86%B7%E5%90%AF%E5%8A%A8%E6%97%B6%E9%97%B4?sort_id=3879744)
