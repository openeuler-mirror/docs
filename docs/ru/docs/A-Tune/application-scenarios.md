# Сценарии применения

Функциями приложения A-Tune можно пользоваться через atune-adm в клиенте CLI. В данной главе описываются функции и порядок использования клиента A-Tune.

- [Сценарии применения](#application-scenarios)
  - [Обзор](#overview-0)
  - [Запрос типов рабочей нагрузки](#querying-workload-types)
    - [list](#list)
  - [Анализ типа рабочей нагрузки и автоматическая оптимизация](#workload-type-analysis-and-auto-optimization)
    - [analysis](#analysis)
  - [Задаваемая пользователем модель](#user-defined-model)
    - [define](#define)
    - [collection](#collection)
    - [train](#train)
    - [undefine](#undefine)
  - [Запрос профилей](#querying-profiles)
    - [info](#info)
  - [Обновление профиля](#updating-a-profile)
    - [update](#update)
  - [Активация профиля](#activating-a-profile)
    - [profile](#profile)
  - [Откат профилей](#rolling-back-profiles)
    - [rollback](#rollback)
  - [Обновление базы данных](#updating-database)
    - [upgrade](#upgrade)
  - [Запрос информации о системе](#querying-system-information)
    - [check](#check)
  - [Автоматическая оптимизация параметров](#automatic-parameter-optimization)
    - [Tuning](#tuning)

## Обзор

-   Для использования A-Tune требуется разрешение **root**.
- Запрос команд, поддерживаемых atune-adm, осуществляется командой **atune-adm help/--help/-h**.

- Все примеры команд приведены для режима с одним узлом. Для распределенного режима необходимо указать IP-адрес и номер порта. Пример:
  
  ```
  #  atune-adm -a 192.168.3.196 -p 60001 list
  ```

- Команды **define**, **update**, **undefine**, **collection**, **train** и **upgrade** нельзя выполнять через удаленный доступ.

- В квадратных скобках (\[]) в формате команды указывается необязательный параметр, а в угловых скобках (\<>) — обязательный параметр. Необходимо ввести фактическое значение параметра.

-   В формате команды значения каждой команды приведены ниже.
    -   **WORKLOAD\_TYPE**: имя задаваемого пользователем типа рабочей нагрузки. Для получения более подробной информации о поддерживаемых типах рабочей нагрузки см. в результатах команды **list**.
    -   **PROFILE\_NAME**: имя задаваемого пользователем профиля.
    -   **PROFILE\_PATH**: путь к задаваемому пользователем профилю.



## Запрос типов рабочей нагрузки

### list

#### Функции

Команда служит для запроса поддерживаемых типов рабочей нагрузки, профилей и значений параметра Active.

#### Формат

**atune-adm list**

#### Пример

```
# atune-adm list

Support WorkloadTypes:
+-----------------------------------+------------------------+-----------+
| WorkloadType                      | ProfileName            | Active    |
+===================================+========================+===========+
| default                           | default                | true      |
+-----------------------------------+------------------------+-----------+
| webserver                         | ssl_webserver          | false     |
+-----------------------------------+------------------------+-----------+
| big_database                      | database               | false     |
+-----------------------------------+------------------------+-----------+
| big_data                          | big_data               | false     |
+-----------------------------------+------------------------+-----------+
| in-memory_computing               | in-memory_computing    | false     |
+-----------------------------------+------------------------+-----------+
| in-memory_database                | in-memory_database     | false     |
+-----------------------------------+------------------------+-----------+
| single_computer_intensive_jobs    | compute-intensive      | false     |
+-----------------------------------+------------------------+-----------+
| communication                     | rpc_communication      | false     |
+-----------------------------------+------------------------+-----------+
| idle                              | default                | false     |
+-----------------------------------+------------------------+-----------+

```

> ![](public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
>Если параметр Active имеет значение **true**, профиль активен. В этом примере активным является профиль типа по умолчанию.

## Анализ типа рабочей нагрузки и автоматическая оптимизация

### analysis

#### Функции

Команда служит для сбора статистики в реальном времени из системы с целью определения типа рабочей нагрузки и автоматической оптимизации нагрузки.

#### Формат

**atune-adm analysis** \[ПАРАМЕТРЫ]

#### Описание параметров

- ПАРАМЕТРЫ
  
  | **Параметр**            | **Описание**                                                 |
  | ----------------------- | ------------------------------------------------------------ |
  | --model, -m             | Новая модель, созданная после самообучения                   |


#### Пример

- Классификация и идентификация на основе модели по умолчанию.
  
  
  ```
  # atune-adm analysis
  ```

- Распознавание на основе задаваемой пользователем модели обучения.
  
  ```
  # atune-adm analysis --model /usr/libexec/atuned/analysis/models/new-model.m
  ```


## Задаваемая пользователем модель

С помощью приложения A-Tune пользователи могут определять и обучать новые модели. Для определения новой модели выполните следующие действия:

1. Командой **define** определите тип рабочей нагрузки и профиль.
2. Командой **collection** соберите данные профиля, соответствующие типу рабочей нагрузки.
3. Командой **train** запустите обучение модели.

### define

#### Функции

Команда служит для добавления задаваемого пользователем типа рабочей нагрузки и соответствующего элемента для оптимизации профиля.

#### Формат

**atune-adm define**  <WORKLOAD\_TYPE\> <PROFILE\_NAME\> <PROFILE\_PATH\>

#### Пример

Добавьте тип рабочей нагрузки. Для типа рабочей нагрузки установлено значение **test\_type**, для имени профиля — **test\_name**, а для файла с конфигурацией элемента оптимизации — **example.conf**. 

```
# atune-adm define test_service test_app test_scenario ./example.conf
```


Файл **example.conf** может выглядеть следующим образом (приведенные элементы оптимизации опциональны и приведены здесь только для примера). Командой **atune-adm info** можно посмотреть, как записан существующий профиль.

```
[main]
# list its parent profile
[tip]
# the recommended optimization, which should be performed manunaly
[check]
# check the environment
[affinity.irq]
# to change the affinity of irqs
[affinity.task]
# to change the affinity of tasks
[bios]
# to change the bios config
[bootloader.grub2]
# to change the grub2 config
[kernel_config]
# to change the kernel config
[script]
# the script extention of cpi
[sysctl]
# to change the /proc/sys/* config
[sysfs]
# to change the /sys/* config
[systemctl]
# to change the system service config
[ulimit]
# to change the resources limit of user
```


### collection

#### Функции

Команда служит для сбора данных о глобальном использовании ресурсов и статусе ОС во время работы служб с сохранением собранных данных в выходной файл формата CSV, который будет использоваться в качестве входного набора данных для обучения моделей.

> ![](public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:
> 
> - Эта команда зависит от применяемых утилит perf, mpstat, vmstat, iostat и sar.
> - В настоящее время поддерживается только процессор Kunpeng 920. Для проверки модели процессора выполните команду **dmidecode -t processor**.

#### Формат

**atune-adm collection**  \<ПАРАМЕТРЫ>

#### Описание параметров

- ПАРАМЕТРЫ
  
  | Параметр              | **Описание**                                                 |
  | --------------------- | ------------------------------------------------------------ |
  | --filename, -f        | Имя сгенерированного CSV-файла, используемого для обучения: *name*-*timestamp*.csv |
  | --output_path, -o     | Путь для хранения сгенерированного CSV-файла. Требуется абсолютный путь. |
  | --disk, -b            | Диск используемый во время работы сервиса, например /dev/sda. |
  | --network, -n         | Сетевой порт, используемый во время работы сервиса, например eth0. |
  | --workload _ type, -t | Тип рабочей нагрузки, который используется как этикетка для обучения. |
  | --duration, -d        | Время сбора данных во время работы сервиса, в секундах. По умолчанию составляет 1200 секунд. |
  | --interval, -i        | Интервал сбора данных, в секундах. По умолчанию составляет 5 секунд. |


#### Пример

```
# atune-adm collection --filename name --interval 5 --duration 1200 --output_path /home/data --disk sda --network eth0 --workload_type test_type 
```


### train

#### Функции

Команда служит для сбора данных, используемых в обучении модели. Во время обучения необходимо собрать данные минимум двух типов рабочей нагрузки. В противном случае поступает сообщение об ошибке.

#### Формат

**atune-adm train**  \<ПАРАМЕТРЫ>

#### Описание параметров

- ПАРАМЕТРЫ
  
  | Параметр| Описание|
  |----------|----------|
  | --data\_path, -d| Путь для хранения CSV-файлов, требующихся при обучении моделей|
  | --output\_file, -o| Модель, созданная во время обучения|



#### Пример

В данном примере в качестве входных данных для обучения используется CSV-файл в каталоге **data**. Созданная модель **new-model.m** сохраняется в каталоге **model**.

```
# atune-adm train --data_path /home/data --output_file /usr/libexec/atuned/analysis/models/new-model.m
```


### undefine

#### Функции

Удаление типа рабочей нагрузки, заданного пользователем.

#### Формат

**atune-adm undefine** \<WORKLOAD\_TYPE\>

#### Пример

В данном примере команда удаляет тип рабочей нагрузки **test\_type**.

```
# atune-adm undefine test_type 
```


## Запрос профилей

### info

#### Функции

Просмотр содержимого профиля типа рабочей нагрузки.

#### Формат

**atune-adm info**  <WORKLOAD\_TYPE_\>

#### Пример

В данном примере команда выводит содержимое профиля веб-сервера для просмотра.

```
# atune-adm info webserver

*** ssl_webserver:

#
# webserver tuned configuration
#
[main]
#TODO CONFIG

[kernel_config]
#TODO CONFIG

[bios]
#TODO CONFIG

[sysfs]
#TODO CONFIG

[sysctl]
fs.file-max=6553600
fs.suid_dumpable = 1
fs.aio-max-nr = 1048576
kernel.shmmax = 68719476736
kernel.shmall = 4294967296
kernel.shmmni = 4096
kernel.sem = 250 32000 100 128
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_syncookies = 1
net.ipv4.ip_local_port_range = 1024     65500
net.ipv4.tcp_max_tw_buckets = 5000
net.core.somaxconn = 65535
net.core.netdev_max_backlog = 262144
net.ipv4.tcp_max_orphans = 262144
net.ipv4.tcp_max_syn_backlog = 262144
net.ipv4.tcp_timestamps = 0
net.ipv4.tcp_synack_retries = 1
net.ipv4.tcp_syn_retries = 1
net.ipv4.tcp_fin_timeout = 1
net.ipv4.tcp_keepalive_time = 60
net.ipv4.tcp_mem =  362619      483495   725238
net.ipv4.tcp_rmem = 4096         87380   6291456
net.ipv4.tcp_wmem = 4096         16384   4194304
net.core.wmem_default = 8388608
net.core.rmem_default = 8388608
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216

[systemctl]
sysmonitor=stop
irqbalance=stop

[bootloader.grub2]
selinux=0
iommu.passthrough=1

[tip]
bind your master process to the CPU near the network = affinity
bind your network interrupt to the CPU that has this network = affinity
relogin into the system to enable limits setting = OS

[script]
openssl_hpre = 0
prefetch = off

[ulimit]
{user}.hard.nofile = 102400
{user}.soft.nofile = 102400

[affinity.task]
#TODO CONFIG

[affinity.irq]
#TODO CONFIG

[check]
#TODO CONFIG
```


## Обновление профиля

При необходимости можно обновить существующий профиль.

### update

#### Функции

Обновление элемент оптимизации типа рабочей нагрузки в соответствии с содержимым файла **new.conf**.

#### Формат

**atune-adm update**  \<profile> \<profile\_path>

#### Пример

**atune-adm update**  <WORKLOAD\_TYPE\> <PROFILE\_NAME\> <PROFILE\_FILE\>

```
# atune-adm update test_type test_name ./new.conf
```


## Активация профиля

### profile

#### Функции

Ручная активация профиля типа рабочей нагрузки.

#### Формат

**atune-adm profile **_<_WORKLOAD\_TYPE_\>_

#### Описание параметров

Для запроса поддерживаемых типов рабочей нагрузки запустите команду **list**.

#### Пример

В данном примере команда активирует профиль веб-сервера.

```
# atune-adm profile webserver
```


## Откат профилей

### rollback

#### Функции

Возврат с текущей конфигурации к исходной конфигурации системы.

#### Формат

**atune-adm rollback**

#### Пример

```
# atune-adm rollback
```


## Обновление базы данных

### upgrade

#### Функции

Обновление базы данных системы.

#### Формат

**atune-adm upgrade**  \<DB\_FILE>

#### Описание параметров

- DB\_FILE
  
  Путь к файлу новой базы данных.

#### Пример

В этом примере команда обновляет базу данных до версии **new\_sqlite.db**.

```
# atune-adm upgrade ./new_sqlite.db
```


## Запрос информации о системе

### check

#### Функции

Проверка информации о процессоре, операционной системе, BIOS и сетевой карте NIC.

#### Формат

**atune-adm check**

#### Пример

```
# atune-adm check
 cpu information:
     cpu:0   version: Kunpeng 920-6426  speed: 2600000000 HZ   cores: 64
     cpu:1   version: Kunpeng 920-6426  speed: 2600000000 HZ   cores: 64
 system information:
     DMIBIOSVersion: 0.59
     OSRelease: 4.19.36-vhulk1906.3.0.h356.eulerosv2r8.aarch64
 network information:
     name: eth0              product: HNS GE/10GE/25GE RDMA Network Controller
     name: eth1              product: HNS GE/10GE/25GE Network Controller
     name: eth2              product: HNS GE/10GE/25GE RDMA Network Controller
     name: eth3              product: HNS GE/10GE/25GE Network Controller
     name: eth4              product: HNS GE/10GE/25GE RDMA Network Controller
     name: eth5              product: HNS GE/10GE/25GE Network Controller
     name: eth6              product: HNS GE/10GE/25GE RDMA Network Controller
     name: eth7              product: HNS GE/10GE/25GE Network Controller
     name: docker0           product:
```


## Автоматическая оптимизация параметров

В приложении A-Tune имеется функция автоматического поиска оптимальной конфигурации, использование которой позволит избежать проблем, связанных с ручными операциями конфигурирования параметров и оценки производительности. Функция значительно повышает эффективность поиска оптимальной конфигурации.

### Tuning

#### Функции

Команда служит для поиска динамического пространства для параметров по указанному файлу проекта и нахождения оптимального решения в текущей конфигурации.

#### Формат

**atune-adm tuning** \[ПАРАМЕТРЫ] \<PROJECT\_YAML>

> ![](public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
Перед вводом команды убедитесь в выполнении следующих условий:
> 
>1.  Конфигурационный файл YAML сервера отредактирован и размещен администратором сервера в каталоге **/etc/atuned/tuning/** на сервере.
>2.  Конфигурационный файл YAML клиента отредактирован и размещен в любом каталоге на клиенте.

#### Описание параметров

- ПАРАМЕТРЫ
  
  | **Параметр**  | **Описание**                                                 |
  | ------------- | ------------------------------------------------------------ |
  | --restore, -r | Перед настройкой необходимо восстановить начальную конфигурацию. |
  | --project, -p | Имя проекта в восстанавливаемом файле YAML.                  |



  >![](public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:   
    >Два предыдущих параметра должны использоваться одновременно, и за параметром -p должно стоять конкретное имя проекта.

- **PROJECT\_YAML**: конфигурационный файл YAML клиента.

#### Описание конфигурации

**Табл. 1** Файл YAML на стороне сервера

| **Имя**       | **Описание**                                                 | **Тип**                                                      | **Диапазон значений** |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | --------------------- |
| project       | Название проекта.                                            | Строка символов                                              | -                     |
| startworkload | Скрипт для запуска сервиса, который необходимо оптимизировать. | Строка символов                                              | -                     |
| stopworkload  | Скрипт для остановки сервиса, который необходимо оптимизировать. | Строка символов                                              | -                     |
| maxiterations | Максимальное количество итераций оптимизации, служащее ограничением итераций на клиенте. Как правило, чем больше итераций, тем эффективнее оптимизация, однако времени на это требуется больше. Установите этот параметр в соответствии с условиями площадки. | Целое число                                                  | >10                   |
| object        | Параметры, которые необходимо оптимизировать, и связанные с ними данные. | Более подробная информация  приведена в [Табл. 2](#table9803156161910). |                       |



**Табл. 2** Описание элементов конфигурации объекта

| **Имя**     | **Описание**                                                 | **Тип**                               | **Диапазон значений**                                        |
| ----------- | ------------------------------------------------------------ | ------------------------------------- | ------------------------------------------------------------ |
| name        | Параметр, который необходимо оптимизировать.                | Строка символов                       | -                                                            |
| desc        | Описание оптимизируемых параметров.                          | Строка символов                       | -                                                            |
| get         | Скрипт для запроса значений параметров.                      | -                                     | -                                                            |
| set         | Скрипт для установки значений параметров.                    | -                                     | -                                                            |
| needrestart | Данный параметр указывает на необходимость перезапуска сервиса, чтобы оптимизированный параметр вступил в силу. | Перечислимый тип                      | **True** или **false**                                       |
| type        | Тип параметра. В настоящее время поддерживаются дискретный (**discrete**) и непрерывный (**continuous**) типы. | Перечислимый тип                      | **Discrete** или **continuous**                              |
| dtype       | Этот параметр доступен только в том случае, если тип имеет значение **discrete**. В настоящее время поддерживаются значения **int и **string**. | Перечислимый тип                      | int, string                                           |
| scope       | Диапазон настройки параметров. Этот параметр действителен, только когда параметр type имеет значение **discrete**, а dtype — значение **int**, либо type установлен в значение **continuous**. | Целое число | Значение задается пользователем и не должно выходить из допустимого диапазона данного параметра. |
| step        | Шаг значения параметра, который используется, если для параметра **dtype** задано значение **int**. | Целое число | Данное значение задается пользователем.                     |
| items       | Перечислимый тип, значение параметра не входит в область действия. Используется, если для параметра **dtype** задано значение **int**. | Целое число | Значение задается пользователем и не должно выходить из допустимого диапазона данного параметра. |
| options     | Диапазон значений перечислимого типа. Данный параметр используется, если параметр **dtype** имеет значение **string**. | Строка символов                       | Значение задается пользователем и не должно выходить из допустимого диапазона данного параметра. |
| ref         | Рекомендуемое начальное значение параметра. | Целое число или строка символов | Значение задается пользователем и не должно выходить из допустимого диапазона данного параметра. |



**Табл. 3** Описание элементов конфигурации файла YAML на стороне клиента

| **Имя**     | **Описание**                                                 | **Тип**                                                      | **Диапазон значений** |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ | --------------------- |
| project     | Имя проекта, которое должно совпадать с именем в конфигурационном файле на сервере. | Строка символов                                              | -                     |
| iterations  | Количество итераций оптимизации.                             | Целое число                                                  | ≥ 10                  |
| benchmark   | Скрипт для тестирования производительности.                  | -                                                            | -                     |
| evaluations | Показатель оценки результатов тестирования производительности. | Более подробная информация о настройке параметров оценки приведена в [Табл. 4](#table58847714266). | -                     |
| -           |                                                              |                                                              |                       |





**Табл. 4** Описание элементов конфигурации для оценки

| **Имя**   | **Описание**                                                 | **Тип**          | **Диапазон значений**                   |
| --------- | ------------------------------------------------------------ | ---------------- | --------------------------------------- |
| name      | Название показателя оценки.                                  | Строка символов  | -                                       |
| get       | Скрипт для получения результатов оценки производительности.  | -                | -                                       |
| type      | Определяет результат оценки — положительный или отрицательный. Значение **positive** указывает на минимальное значение производительности, значение **negative** указывает на максимальное значение производительности. | Перечислимый тип | **Positive** или **negative**           |
| weight    | Вес показателя. Диапазон принимаемых значений — от 0 до 100. | Целое число      | 0-100                                   |
| threshold | Минимально допустимый порог показателя.                      | Целое число      | Данное значение задается пользователем. |


#### Пример

Пример конфигурации файла YAML на стороне сервера:

```
project: "example"
maxiterations: 10
startworkload: ""
stopworkload: ""
object :
  -
    name : "vm.swappiness"
    info :
        desc : "the vm.swappiness"
        get : "sysctl -a | grep vm.swappiness"
        set : "sysctl -w vm.swappiness=$value"
        needrestart: "false"
        type : "continuous"
        scope :
          - 0
          - 10
        ref : 1
  -
    name : "irqbalance"
    info :
        desc : "system irqbalance"
        get : "systemctl status irqbalance"
        set : "systemctl $value sysmonitor;systemctl $value irqbalance"
        needrestart: "false"
        type : "discrete"
        options:
          - "start"
          - "stop"
        dtype : "string"
        ref : "start"
  -
    name : "net.tcp_min_tso_segs"
    info :
        desc : "the minimum tso number"
        get : "cat /proc/sys/net/ipv4/tcp_min_tso_segs"
        set : "echo $value > /proc/sys/net/ipv4/tcp_min_tso_segs"
        needrestart: "false"
        type : "continuous"
        scope:
          - 1
          - 16
        ref : 2
  -
    name : "prefetcher"
    info :
        desc : ""
        get : "cat /sys/class/misc/prefetch/policy"
        set : "echo $value > /sys/class/misc/prefetch/policy"
        needrestart: "false"
        type : "discrete"
        options:
          - "0"
          - "15"
        dtype : "string"
        ref : "15"
  -
    name : "kernel.sched_min_granularity_ns"
    info :
        desc : "Minimal preemption granularity for CPU-bound tasks"
        get : "sysctl kernel.sched_min_granularity_ns"
        set : "sysctl -w kernel.sched_min_granularity_ns=$value"
        needrestart: "false"
        type : "continuous"
        scope:
          - 5000000
          - 50000000
        ref : 10000000
  -
    name : "kernel.sched_latency_ns"
    info :
        desc : ""
        get : "sysctl kernel.sched_latency_ns"
        set : "sysctl -w kernel.sched_latency_ns=$value"
        needrestart: "false"
        type : "continuous"
        scope:
          - 10000000
          - 100000000
        ref : 16000000
```


Пример конфигурации файла YAML на стороне клиента:

```
project: "example"
iterations : 10
benchmark : "sh /home/Benchmarks/mysql/tunning_mysql.sh"
evaluations :
  -
    name: "tps"
    info:
        get: "echo -e '$out' |grep 'transactions:' |awk '{print $3}' | cut -c 2-"
        type: "negative"
        weight: 100
        threshold: 100
```



#### Пример

- В этом примере выполняется настройка.
  

```
# atune-adm tuning example-client.yaml
```


- Перед настройкой необходимо восстановить начальную конфигурацию. example — это имя проекта в файле YAML.
  
```
atune-adm tuning --restore --project example
```