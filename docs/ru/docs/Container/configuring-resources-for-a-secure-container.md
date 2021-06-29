# Настройка ресурсов для безопасного контейнера

- [Настройка ресурсов для безопасного контейнера](#configuring-resources-for-a-secure-container)
  - [Общий доступ к ресурсам](#sharing-resources)
  - [Ограничение ресурсов процессора](#limiting-cpu-resources)
  - [Ограничение ресурсов памяти](#limiting-memory-resources)
  - [Ограничение ресурсов ввода-вывода блочной памяти](#limiting-block-i-o-resources)
  - [Ограничение ресурсов дескриптора файлов](#limiting-file-descriptor-resources)

Безопасный контейнер работает на виртуализированной и изолированной облегченной виртуальной машине. Поэтому настройка ресурсов делится на две части: настройка ресурсов для облегченной виртуальной машины, то есть ресурсов хоста, и настройка ресурсов для контейнеров в ВМ, то есть ресурсов гостевого контейнера. Далее подробно описываются данные два типа настройки.

## Общий доступ к ресурсам

Поскольку безопасный контейнер работает на виртуализированной и изолированной облегченной виртуальной машине, ресурсы в некоторых пространствах имен хоста недоступны. Поэтому **--net host**,  **--ipc host**,  **--pid host** и **--uts host** не поддерживаются во время запуска.

При запуске pod-группы все контейнеры в данной pod-группе по умолчанию имеют одинаковое пространство имен net и ipc. Если контейнерам в одной pod-группе необходимо общее пространство имен pid, его можно настроить с помощью Kubernetes. В Kubernetes 1.11 пространство имен pid отключено по умолчанию.

## Ограничение ресурсов процессора

1. Настройте ресурсы процессора для работы облегченной виртуальной машины.
   
   Под данной настройкой подразумевается настройка виртуальных процессоров (vCPU). Настройка ресурсов процессора для работы облегченной виртуальной машины осуществляется с помощью **--annotation com.github.containers.virtcontainers.sandbox\_cpu** безопасного контейнера. Эту опцию можно настроить только в pause-контейнере.
   
   ```
   docker run -tid --runtime kata-runtime --network none --annotation io.kubernetes.docker.type=podsandbox --annotation com.github.containers.virtcontainers.sandbox_cpu=<cpu-nums> <pause-image> <command>
   ```
   
   Пример.
   
   ```
   #Start a pause container.
   docker run -tid --runtime kata-runtime --network none --annotation io.kubernetes.docker.type=podsandbox --annotation com.github.containers.virtcontainers.sandbox_cpu=4 busybox sleep 999999
   be3255a3f66a35508efe419bc52eccd3b000032b9d8c9c62df611d5bdc115954
   
   #Access the container and check whether the number of CPUs is the same as that configured in the com.github.containers.virtcontainers.sandbox_cpu file.
   docker exec be32 lscpu
   Architecture:        aarch64
   Byte Order:          Little Endian
   CPU(s):              4
   On-line CPU(s) list: 0-3
   Thread(s) per core:  1
   Core(s) per socket:  1
   Socket(s):           4
   ```
   
   > ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
Максимально можно настроить количество процессоров (за исключением изолированных ядер), которые могут работать в операционной системе. Минимальное количество процессоров — 0,5.

2. Настройте ресурсы процессора для работы контейнера.
   
   Метод настройки ресурсов процессора для работы контейнера такой же, как и для контейнера Docker с открытым исходным кодом. Настроить ресурсы процессора можно установкой следующих параметров в команде **docker run**:
   
   | **Параметр**  | **Описание**                                                 |
   | ------------- | ------------------------------------------------------------ |
   | --cpu-shares  | Процент времени, на которое контейнер может занять ресурсы процессора. |
   | --cpus        | Количество процессоров, которые могут быть использованы контейнером. |
   | --cpu-period  | Период планирования процесса контейнера.                     |
   | --cpu-quota   | Время, на которое процесс контейнера может занять ресурсы процессора в период планирования. |
   | --cpuset-cpus | Список процессоров, которые могут быть использованы процессом контейнера.  <br />ПРИМЕЧАНИЕ:  <br />Если для безопасного контейнера используется параметр **--cpuset-cpus**, который выполняет привязку процессора, идентификационный номер процессора не должен превышать количество процессоров в облегченной виртуальной машине, которое равно номеру безопасного контейнера минус 1. (Идентификационные номера процессора в облегченной виртуальной машине начинаются с 0.) |
   | --cpuset-mems | Узел памяти, доступный процессу контейнера.  <br />ПРИМЕЧАНИЕ:  <br />Безопасные контейнеры не поддерживают архитектуру и конфигурацию с несколькими узлами памяти NUMA. Параметру **--cpuset-mems** памяти NUMA можно задать только значение **0**. |
   
3. Настройте функцию горячей замены процессора.
   
   > ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
Функция горячей замены процессора для безопасного контейнера требует компонента виртуализации QEMU.
   
   Для включения или отключения функции горячей замены процессора и памяти используется параметр **enable\_cpu\_memory\_hotplug** в конфигурационном файле kata-runtime **config.toml**. Значение по умолчанию **false** означает, что функция горячей замены процессора и памяти отключена. Если значение **true**, данная функция включена.
   
   Опция **--cpus** повторно используется в kata-runtime для реализации функции горячей замены процессора. Для определения количества процессоров, которые будут добавлены к облегченной виртуальной машине в горячем режиме, вычисляется общее количество опций **--cpus** всех контейнеров в pod-группе контейнеров.
   
   Пример.
   
   ```
   #Start a pause container. By default, one vCPU is allocated to a lightweight VM.
   docker run -tid --runtime kata-runtime --network none --annotation io.kubernetes.docker.type=podsandbox busybox sleep 999999
   77b40fb72f63b11dd3fcab2f6dabfc7768295fced042af8c7ad9c0286b17d24f
   
   #View the number of CPUs in the lightweight VM after the pause container is started.
   docker exec 77b40fb72f6 lscpu
   Architecture:          x86_64
   CPU op-mode(s):        32-bit, 64-bit
   Byte Order:            Little Endian
   CPU(s):                1
   On-line CPU(s) list:   0
   Thread(s) per core:    1
   Core(s) per socket:    1
   Socket(s):             1
   
   #Start a new container in the same pod and run the --cpus command to set the number of CPUs required by the container to 4.
   docker run -tid --runtime kata-runtime --network none --cpus 4 --annotation io.kubernetes.docker.type=container --annotation io.kubernetes.sandbox.id=77b40fb72f63b11dd3fcab2f6dabfc7768295fced042af8c7ad9c0286b17d24f busybox sleep 999999
   7234d666851d43cbdc41da356bf62488b89cd826361bb71d585a049b6cedafd3
   
   #View the number of CPUs in the current lightweight VM.
   docker exec 7234d6668 lscpu
   Architecture:          x86_64
   CPU op-mode(s):        32-bit, 64-bit
   Byte Order:            Little Endian
   CPU(s):                4
   On-line CPU(s) list:   0-3
   Thread(s) per core:    1
   Core(s) per socket:    1
   Socket(s):             4
   
   #View the number of CPUs in the lightweight VM after deleting the container where CPUs are hot added.
   docker rm -f 7234d666851d
   7234d666851d
   
   docker exec 77b40fb72f6  lscpu
   Architecture:          x86_64
   CPU op-mode(s):        32-bit, 64-bit
   Byte Order:            Little Endian
   CPU(s):                1
   On-line CPU(s) list:   0
   Thread(s) per core:    1
   Core(s) per socket:    1
   Socket(s):             1
   ```
   
     
   
     
   
   > ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
pause-контейнер используется только как временно-замещающий контейнер и не несет никакой рабочей нагрузки. Таким образом, при запуске облегченной виртуальной машины процессор, выделенный по умолчанию, может использоваться другими контейнерами. Поэтому для нового контейнера, запущенного в вышеприведенном примере, в облегченную виртуальную машину необходимо добавить в горячем режиме только три процессора.
   
   - После остановки контейнера, для которого в горячем режиме добавлен процессор, данный процессор удаляется при запуске контейнера.

## Ограничение ресурсов памяти

1. Настройте ресурсы памяти для работы облегченной виртуальной машины.
   
   Под данной настройкой подразумевается настройка памяти для работы данной ВМ. Настройка ресурсов памяти для работы облегченной виртуальной машины осуществляется с помощью 
   **--annotation com.github.containers.virtcontainers.sandbox\_mem** безопасного контейнера. Эту опцию можно настроить только в pause-контейнере.
   
   ```
   docker run -tid --runtime kata-runtime --network none --annotation io.kubernetes.docker.type=podsandbox --annotation com.github.containers.virtcontainers.sandbox_mem=<memory-size> <pause-image> <command>
   ```
   
   Пример.
   
   ```
   #Start a pause container and use --annotation com.github.containers.virtcontainers.sandbox_mem=4G to allocate 4 GB memory to the lightweight VM.
   docker run -tid --runtime kata-runtime --network none --annotation io.kubernetes.docker.type=podsandbox --annotation com.github.containers.virtcontainers.sandbox_mem=4G busybox sleep 999999
   1532c3e59e7a45cd6b419aa1db07dd0069b0cdd93097f8944177a25e457e4297
   
   #View the memory information of the lightweight VM and check whether the memory size is the same as that configured in the com.github.containers.virtcontainers.sandbox_mem file.
   docker exec 1532c3e free -m
                 total        used        free      shared  buff/cache   available
   Mem:           3950          20        3874          41          55        3858
   Swap:             0           0           0
   ```
   
   > ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:
   >
   > - Если размер памяти облегченной виртуальной машины не настроен с помощью **--annotation com.github.containers.virtcontainers.sandbox\_mem**, облегченная виртуальная машина по умолчанию использует 1 ГБ памяти.
   > - Минимальный размер памяти pod-группы безопасного контейнера составляет 1 ГБ, а максимальный размер памяти — 256 ГБ. Если размер памяти, выделенный пользователю, превышает 256 ГБ, может произойти неопределенная ошибка. В настоящее время безопасные контейнеры не поддерживают сценарий, когда размер памяти превышает 256 ГБ.
2. Настройте ресурсы памяти для работы контейнера.
   
   Метод настройки ресурсов памяти для работы контейнера такой же, как и для контейнера Docker с открытым исходным кодом. Настроить ресурсы памяти можно установкой параметров в команде **docker run**.
   
   | **Параметр** | Описание                                                     |
   | ------------ | ------------------------------------------------------------ |
   | -m/--memory  | Размер памяти, доступный для использования процессом контейнера.  ПРИМЕЧАНИЕ: <br />·      При отключении горячей замены модуля памяти значение **-m** не должно превышать размера памяти, выделенной при запуске облегченной виртуальной машины. |
   
3. Настройте функцию горячего добавления памяти.
   
   Функция горячего добавления памяти также настраивается опцией **enable\_cpu\_memory\_hotplug** в конфигурационном файле kata-runtime **config.toml**. Подробнее см. [3](#limiting-cpu-resources.md#en-us_topic_0183903699_li2167326144011).
   
   > ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
В настоящее время ресурсы памяти добавляются только в горячем режиме.
   
   Опция **-m** повторно используется в kata-runtime для реализации функции горячего добавления памяти. Для определения количества блоков памяти, которые будут добавлены к облегченной виртуальной машине в горячем режиме, вычисляется сумма всех опций **--m** всех контейнеров в pod-группе контейнеров.
   
   Пример.
   
   ```
   #Start a pause container. By default, 1 GB memory is allocated to the lightweight VM.
   docker run -tid --runtime kata-runtime --network none --annotation io.kubernetes.docker.type=podsandbox busybox sleep 999999
   99b78508ada3fa7dcbac457bb0f6e3784e64e7f7131809344c5496957931119f
   
   #View the memory size of the lightweight VM after the pause container is started.
   docker exec 99b78508ada free -m
                 total        used        free      shared  buff/cache   available
   Mem:            983          18         914          36          50         908
   Swap:             0           0           0
   
   #Start a new container in the same pod and run the -m command to set the memory size required by the container to 4 GB.
   docker run -tid --runtime kata-runtime --network none -m 4G --annotation io.kubernetes.docker.type=container --annotation io.kubernetes.sandbox.id=99b78508ada3fa7dcbac457bb0f6e3784e64e7f7131809344c5496957931119f busybox sleep 999999
   c49461745a712b2ef3127fdf43b2cbb034b7614e6060b13db12b7a5ff3c830c8
   
   #View the memory size of the lightweight VM.
   docker exec c49461745 free -m
                 total        used        free      shared  buff/cache   available
   Mem:           4055          69        3928          36          57        3891
   Swap:             0           0           0
   
   #After deleting the container where the CPU is hot added, check the memory size of the lightweight VM.
   docker rm -f c49461745
   c49461745
   
   #The hot added memory does not support the hot add function. Therefore, after the hot added memory container is deleted from the lightweight VM, the memory is still 4 GB.
   docker exec 99b78508ada free -m
                 total        used        free      shared  buff/cache   available
   Mem:           4055          69        3934          36          52        3894
   Swap:             0           0           0
   ```
   
   > ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
pause-контейнер используется только как временно-замещающий контейнер, и не несет никакой рабочей нагрузки. Таким образом, память, выделенная облегченной виртуальной машине во время запуска, может использоваться другими контейнерами. Поэтому для нового контейнера, запущенного в вышеприведенном примере, в облегченную виртуальную машину необходимо добавить в горячем режиме только 3 ГБ памяти.

## Ограничение ресурсов ввода-вывода блочной памяти

1. Настройте ресурсы ввода-вывода блочной памяти для работы облегченной виртуальной машины.
   
   Настройка ресурсов ввода-вывода блочной памяти для работы облегченной виртуальной машины безопасных контейнеров осуществляется с помощью **--annotation com.github.containers.virtcontainers.blkio\_cgroup**. Эту опцию можно настроить только в pause-контейнере.
   
   ```
   docker run -tid --runtime --network none --annotation io.kubernetes.docker.type=podsandbox --annotation com.github.containers.virtcontainers.blkio_cgroup=<blkio json string<pause-image> <command>
   ```
   
   Значение **--annotation com.github.containers.virtcontainers.blkio\_cgroup** должно соответствовать определению структуры.
   
   ```
   // BlkioCgroup for Linux cgroup 'blkio' data exchange
   type BlkioCgroup struct {
   	// Items specifies per cgroup values
   	Items []BlockIOCgroupItem `json:"blkiocgroup,omitempty"`
   }
   
   type BlockIOCgroupItem struct {
   	// Path represent path of blkio device
   	Path string `json:"path,omitempty"`
   	// Limits specifies the blkio type and value
   	Limits []IOLimit `json:"limits,omitempty"`
   }
   
   type IOLimit struct {
   	// Type specifies IO type
   	Type string `json:"type,omitempty"`
   	// Value specifies rate or weight value
   	Value uint64 `json:"value,omitempty"`
   }
   ```
   
   Значения поля **Type** в теле структуры **IOLimit**:
   
   ```
   // BlkioThrottleReadBps is the key to fetch throttle_read_bps
   BlkioThrottleReadBps = "throttle_read_bps"
   
   // BlkioThrottleWriteBps is the key to fetch throttle_write_bps
   BlkioThrottleWriteBps = "throttle_write_bps"
   
   // BlkioThrottleReadIOPS is the key to fetch throttle_read_iops
   BlkioThrottleReadIOPS = "throttle_read_iops"
   
   // BlkioThrottleWriteIOPS is the key to fetch throttle_write_iops
   BlkioThrottleWriteIOPS = "throttle_write_iops"
   
   // BlkioWeight is the key to fetch blkio_weight
   BlkioWeight = "blkio_weight"
   
   // BlkioLeafWeight is the key to fetch blkio_leaf_weight
   BlkioLeafWeight = "blkio_leaf_weight"
   ```
   
   Пример.
   
   ```
   docker run -tid --runtime kata-runtime --network none --annotation com.github.containers.virtcontainers.blkio_cgroup='{"blkiocgroup":[{"path":"/dev/sda","limits":[{"type":"throttle_read_bps","value":400},{"type":"throttle_write_bps","value":400},{"type":"throttle_read_iops","value":700},{"type":"throttle_write_iops","value":699}]},{"limits":[{"type":"blkio_weight","value":78}]}]}' busybox sleep 999999
   ```
   
   Вышеприведенная команда используется для ограничения трафика ввода-вывода блочной памяти диска **/dev/sda**, используемого запущенным безопасным контейнером. Для этого параметры настраиваются следующим образом: **throttle\_read\_bps** устанавливается в значение 400 bit/s, **throttle\_write\_bps** — 400 bit/s, **throttle\_read\_iops** — 700 times/s, **throttle\_write\_iops** — 699 times/s, **weight of the block I/O cgroup** — 78.

## Ограничение ресурсов дескриптора файлов

Чтобы предотвратить исчерпание ресурсов дескриптора файлов на хосте при открытии в контейнере большого количества файлов в общем каталоге **9p**, в безопасном контейнере настраивается максимальное количество дескрипторов файлов, которые могут быть открыты процессом QEMU безопасного контейнера.

Для этого повторно используется опция **--files-limit** в команде **docker run**. Эту опцию можно настроить только в pause-контейнере. Метод настройки:

```
docker run -tid --runtime kata-runtime --network none --annotation io.kubernetes.docker.type=podsandbox --files-limit <max-open-files> <pause-image> bash
```

> ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:
> 
> - Если значение **--files-limit** меньше минимального значения по умолчанию **1024** и не равно **0**, максимальному количеству дескрипторов файлов, доступных для открытия процессом QEMU безопасного контейнера, устанавливается минимальное значение **1024**.
> - Если значение **--files-limit** равно **0**, максимальным количеством дескрипторов файлов, которые могут быть открыты процессом QEMU безопасного контейнера, является значение по умолчанию, полученное путем деления максимального количества дескрипторов файлов, доступных для открытия системой (/proc/sys/fs/file-max), на 400.
> - Если максимальное количество дескрипторов файлов, которые могут быть открыты процессом QEMU безопасного контейнера, не отображается при запуске данного контейнера, это значение совпадает со значением системы по умолчанию.