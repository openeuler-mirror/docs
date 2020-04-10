# Why Is the Memory Usage of the libvirtd Service Queried by Running the systemctl and top Commands Different?<a name="EN-US_TOPIC_0229622744"></a>

## Symptom<a name="section687893492714"></a>

The output of the  **systemctl**  and  **systemd-cgtop**  commands shows that the libvirtd service occupies more than 1.5 GB memory, but the output of the  **top**  command shows that the libvirtd service occupies about 70 MB memory.

## Possible Cause<a name="section1314741154617"></a>

The memory displayed in the services \(including systemctl and systemd-cgtop\) managed by systemd can be obtained from  **memory.usage\_in\_bytes**  in Cgroup. Running the  **top**  command is to query the memory information in the  **/proc**  directory. The query results are different because the statistical method varies.

Generally, the memory used by service processes has the following types:

-   anon\_rss: anonymous pages in user mode address spaces, for example, memory allocated by calling the malloc function or the mmap function with configured  **MAP\_ANONYMOUS**. When the system memory is insufficient, this type of memory can be swapped by the kernel.
-   file\_rss: mapped pages in user mode address spaces, including map file \(such as mmap of a specified file\) and map tmpfs \(such as IPC shared memory\). When the system memory is insufficient, the kernel can reclaim these pages. Data may need to be synchronized between the kernel and map file before reclamation.
-   file\_cache: file cache \(page in page cache of disk file\), which is generated when a file is read or written. When the system memory is insufficient, the kernel can reclaim these pages. Data may need to be synchronized between the kernel and map file before reclamation.
-   buffer pages: belongs to page cache, for example, cache generated when block device files are read.

anon\_rss and file\_rss belong to the resident set size \(RSS\) of processes, and file\_cache and buffer pages belong to page cache. In brief:

RSS in the output of the  **top**  command = anon\_rss + file\_rss; Shared memory \(SHR\) = file\_rss

**memory.usage\_in\_bytes**  in Cgroup = cache + RSS + swap

In conclusion, the definition of memory usage obtained by running the  **systemd**  command is different from that obtained by running the  **top**  command. Therefore, the query results are different.

