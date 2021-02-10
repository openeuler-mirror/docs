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

- Запрос команд, поддерживаемых atune-adm, осуществляется командой **atune-adm help/--help/-h**.

- Все примеры команд приведены для режима с одним узлом. Для распределенного режима необходимо указать IP-адрес и номер порта. Пример:
  
  ```
  #  atune-adm -a 192.168.3.196 -p 60001 list
  ```

- Команды **define**, **update**, **undefine**, **collection**, **train** и **upgrade** нельзя выполнять через удаленный доступ.

- В квадратных скобках (\[]) в формате команды указывается необязательный параметр, а в угловых скобках (\<>) — обязательный параметр. Необходимо ввести фактическое значение параметра.

## Запрос типов рабочей нагрузки

### list

#### Функции

Команда служит для запроса поддерживаемых профилей и значений параметра Active.

#### Формат

**atune-adm list**

#### Пример

```
# atune-adm list

Support profiles:
+------------------------------------------------+-----------+
| ProfileName                                    | Active    |
+================================================+===========+
| arm-native-android-container-robox             | false     |
+------------------------------------------------+-----------+
| basic-test-suite-euleros-baseline-fio          | false     |
+------------------------------------------------+-----------+
| basic-test-suite-euleros-baseline-lmbench      | false     |
+------------------------------------------------+-----------+
| basic-test-suite-euleros-baseline-netperf      | false     |
+------------------------------------------------+-----------+
| basic-test-suite-euleros-baseline-stream       | false     |
+------------------------------------------------+-----------+
| basic-test-suite-euleros-baseline-unixbench    | false     |
+------------------------------------------------+-----------+
| basic-test-suite-speccpu-speccpu2006           | false     |
+------------------------------------------------+-----------+
| basic-test-suite-specjbb-specjbb2015           | false     |
+------------------------------------------------+-----------+
| big-data-hadoop-hdfs-dfsio-hdd                 | false     |
+------------------------------------------------+-----------+
| big-data-hadoop-hdfs-dfsio-ssd                 | false     |
+------------------------------------------------+-----------+
| big-data-hadoop-spark-bayesian                 | false     |
+------------------------------------------------+-----------+
| big-data-hadoop-spark-kmeans                   | false     |
+------------------------------------------------+-----------+
| big-data-hadoop-spark-sql1                     | false     |
+------------------------------------------------+-----------+
| big-data-hadoop-spark-sql10                    | false     |
+------------------------------------------------+-----------+
| big-data-hadoop-spark-sql2                     | false     |
+------------------------------------------------+-----------+
| big-data-hadoop-spark-sql3                     | false     |
+------------------------------------------------+-----------+
| big-data-hadoop-spark-sql4                     | false     |
+------------------------------------------------+-----------+
| big-data-hadoop-spark-sql5                     | false     |
+------------------------------------------------+-----------+
| big-data-hadoop-spark-sql6                     | false     |
+------------------------------------------------+-----------+
| big-data-hadoop-spark-sql7                     | false     |
+------------------------------------------------+-----------+
| big-data-hadoop-spark-sql8                     | false     |
+------------------------------------------------+-----------+
| big-data-hadoop-spark-sql9                     | false     |
+------------------------------------------------+-----------+
| big-data-hadoop-spark-tersort                  | false     |
+------------------------------------------------+-----------+
| big-data-hadoop-spark-wordcount                | false     |
+------------------------------------------------+-----------+
| cloud-compute-kvm-host                         | false     |
+------------------------------------------------+-----------+
| database-mariadb-2p-tpcc-c3                    | false     |
+------------------------------------------------+-----------+
| database-mariadb-4p-tpcc-c3                    | false     |
+------------------------------------------------+-----------+
| database-mongodb-2p-sysbench                   | false     |
+------------------------------------------------+-----------+
| database-mysql-2p-sysbench-hdd                 | false     |
+------------------------------------------------+-----------+
| database-mysql-2p-sysbench-ssd                 | false     |
+------------------------------------------------+-----------+
| database-postgresql-2p-sysbench-hdd            | false     |
+------------------------------------------------+-----------+
| database-postgresql-2p-sysbench-ssd            | false     |
+------------------------------------------------+-----------+
| default-default                                | false     |
+------------------------------------------------+-----------+
| docker-mariadb-2p-tpcc-c3                      | false     |
+------------------------------------------------+-----------+
| docker-mariadb-4p-tpcc-c3                      | false     |
+------------------------------------------------+-----------+
| hpc-gatk4-human-genome                         | false     |
+------------------------------------------------+-----------+
| in-memory-database-redis-redis-benchmark       | false     |
+------------------------------------------------+-----------+
| middleware-dubbo-dubbo-benchmark               | false     |
+------------------------------------------------+-----------+
| storage-ceph-vdbench-hdd                       | false     |
+------------------------------------------------+-----------+
| storage-ceph-vdbench-ssd                       | false     |
+------------------------------------------------+-----------+
| virtualization-consumer-cloud-olc              | false     |
+------------------------------------------------+-----------+
| virtualization-mariadb-2p-tpcc-c3              | false     |
+------------------------------------------------+-----------+
| virtualization-mariadb-4p-tpcc-c3              | false     |
+------------------------------------------------+-----------+
| web-apache-traffic-server-spirent-pingpo       | false     |
+------------------------------------------------+-----------+
| web-nginx-http-long-connection                 | true      |
+------------------------------------------------+-----------+
| web-nginx-https-short-connection               | false     |
+------------------------------------------------+-----------+

```

> ![](public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
Если параметр Active имеет значение **true**, профиль активен. В этом примере активным является профиль web-nginx-http-long-connection.

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
  | --characterization,  -c | Для  идентификации приложений используйте модель по умолчанию и не запускайте автоматическую оптимизацию |


#### Пример

- Идентификация приложения на основе модели по умолчанию.
  
  ```
  # atune-adm analysis --characterization
  ```

- Идентификация приложения на основе модели по умолчанию и автоматическая настройка.
  
  ```
  # atune-adm analysis
  ```

- Распознавание на основе задаваемой пользователем модели обучения.
  
  ```
  # atune-adm analysis --model /usr/libexec/atuned/analysis/models/new-model.m
  ```

## Задаваемая пользователем модель

С помощью приложения A-Tune пользователи могут определять и обучать новые модели. Для определения новой модели выполните следующие действия:

1. Командой **define** определите новый профиль.
2. Командой **collection** соберите системные данные, соответствующие приложению.
3. Командой **train** запустите обучение модели.

### define

#### Функции

Команда служит для добавления задаваемых пользователем сценариев и соответствующих элементов для настройки профиля.

#### Формат

**atune-adm define**  \<service\_type> \<application\_name> \<scenario\_name> \<profile\_path>

#### Пример

В данном примере добавляется профиль, тип службы которого **test\_service**, имя приложения — **test\_app**, имя сценария — **test\_scenario**, файл с конфигурацией элементов настройки профиля — **example.conf**.

```
# atune-adm define test_service test_app test_scenario ./example.conf
```

Файл **example.conf** может выглядеть следующим образом (приведенные элементы оптимизации опциональны и приведены здесь только для примера). Командой **atune-adm info** можно посмотреть, как записан существующий профиль.

```
 [main]
 # list its parent profile
 [kernel_config]
 # to change the kernel config
 [bios]
 # to change the bios config
 [bootloader.grub2]
 # to change the grub2 config
 [sysfs]
 # to change the /sys/* config
 [systemctl]
 # to change the system service status
 [sysctl]
 # to change the /proc/sys/* config
 [script]
 # the script extention of cpi
 [ulimit]
 # to change the resources limit of user
 [schedule_policy]
 # to change the schedule policy
 [check]
 # check the environment
 [tip]
 # the recommended optimization, which should be performed manunaly
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
  
  | Параметр          | **Описание**                                                 |
  | ----------------- | ------------------------------------------------------------ |
  | --filename, -f    | Имя сгенерированного CSV-файла, используемого для обучения: *name*-*timestamp*.csv |
  | --output_path, -o | Путь для хранения сгенерированного CSV-файла. Требуется абсолютный путь. |
  | --disk, -b        | Диск используемый во время работы сервиса, например /dev/sda. |
  | --network, -n     | Сетевой порт, используемый во время работы сервиса, например eth0. |
  | --app _ type, -t  | Тип приложения сервиса, используемый в качестве маркировки для  обучения. |
  | --duration, -d    | Время сбора  данных во время работы сервиса, в секундах. По умолчанию составляет 1200 секунд. |
  | --interval, -i    | Интервал сбора данных, в секундах. По умолчанию составляет 5 секунд. |


#### Пример

```
# atune-adm collection --filename name --interval 5 --duration 1200 --output_path /home/data --disk sda --network eth0 --app_type test_type 
```

### train

#### Функции

Команда служит для сбора данных, используемых в обучении модели. Во время обучения необходимо собрать данные минимум двух типов приложений. В противном случае поступает сообщение об ошибке.

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

Удаление профиля, заданного пользователем.

#### Формат

**atune-adm undefine** \<профиль>

#### Пример

В данном примере команда удаляет заданный пользователем профиль.

```
# atune-adm undefine test_service-test_app-test_scenario
```

## Запрос профилей

### info

#### Функции

Просмотр содержимого профиля.

#### Формат

**atune-adm info** \<профиль>

#### Пример

В данном примере команда выводит содержимое профиля web-nginx-http-long-connection для просмотра.

```
# atune-adm info web-nginx-http-long-connection

*** web-nginx-http-long-connection:

#
# nginx http long connection A-Tune configuration
#
[main]
include = default-default

[kernel_config]
#TODO CONFIG

[bios]
#TODO CONFIG

[bootloader.grub2]
iommu.passthrough = 1

[sysfs]
#TODO CONFIG

[systemctl]
sysmonitor = stop
irqbalance = stop

[sysctl]
fs.file-max = 6553600
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

[script]
prefetch = off
ethtool =  -X {network} hfunc toeplitz

[ulimit]
{user}.hard.nofile = 102400
{user}.soft.nofile = 102400

[schedule_policy]
#TODO CONFIG

[check]
#TODO CONFIG

[tip]
SELinux provides extra control and security features to linux kernel. Disabling SELinux will improve the performance but may cause security risks. = kernel
disable the nginx log = application
```

## Обновление профиля

При необходимости можно обновить существующий профиль.

### update

#### Функции

Обновление исходных элементов настройки в существующем профиле в соответствии с содержимым файла **new.conf**.

#### Формат

**atune-adm update**  \<profile> \<profile\_path>

#### Пример

В этом примере параметр настройки профиля с именем **test\_service-test\_app-test\_scenario** изменяется в соответствии с файлом **new.conf**.

```
# atune-adm update test_service-test_app-test_scenario ./new.conf
```

## Активация профиля

### profile

#### Функции

Ручная активация профиля.

#### Формат

**atune-adm profile** \<профиль>

#### Описание параметров

Имя профиля можно посмотреть в результатах команды **list**.

#### Пример

В данном примере команда активирует профиль web-nginx-http-long-connection.

```
# atune-adm profile web-nginx-http-long-connection
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
> 1. Конфигурационный файл YAML на стороне сервера отредактирован и сохранен в каталоге **/etc/atuned/tuning/** службы atuned.
> 2. Конфигурационный файл YAML на стороне клиента отредактирован и сохранен на клиенте atuned.

#### Описание параметров

- ПАРАМЕТРЫ
  
  | **Параметр**  | **Описание**                                                 |
  | ------------- | ------------------------------------------------------------ |
  | --restore, -r | Перед  настройкой необходимо восстановить начальную конфигурацию. |
  | --project, -p | Имя проекта в восстанавливаемом файле YAML.                  |
  | --restart, -c | Выполнение настройки на основе истории результатов настройки. |
  | --detail, -d  | Вывод на печать подробной информации о процессе настройки.   |




  >![](public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:   
  >Если используется данный параметр, после имени проекта должен стоять параметр -p и должен быть указан файл YAML данного проекта.  
- **PROJECT\_YAML**: конфигурационный файл YAML клиента.

#### Описание конфигурации

**Табл. 1** Файл YAML на стороне сервера

| **Имя**       | **Описание**                                                 | **Тип**                                                      | **Диапазон значений** |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | --------------------- |
| project       | Название проекта.                                            | Строка символов                                              | -                     |
| startworkload | Скрипт для запуска сервиса, который необходимо оптимизировать. | Строка символов                                              | -                     |
| stopworkload  | Скрипт для остановки сервиса, который необходимо оптимизировать. | Строка символов                                              | -                     |
| maxiterations | Максимальное количество итераций оптимизации, служащее ограничением итераций на клиенте. Как правило, чем больше итераций, тем эффективнее оптимизация, однако времени на это требуется больше. Установите этот параметр в соответствии с условиями площадки. | Целое число                                                  | >10                   |
| object        | Параметры, которые необходимо  оптимизировать, и связанные с ними данные. | Более подробная информация  приведена в [Табл. 2](#table9803156161910). |                       |



**Табл. 2** Описание элементов конфигурации объекта

| **Имя**     | **Описание**                                                 | **Тип**                               | **Диапазон значений**                                        |
| ----------- | ------------------------------------------------------------ | ------------------------------------- | ------------------------------------------------------------ |
| name        | Параметр, который необходимо  оптимизировать.                | Строка символов                       | -                                                            |
| desc        | Описание оптимизируемых параметров.                          | Строка символов                       | -                                                            |
| get         | Скрипт для запроса значений параметров.                      | -                                     | -                                                            |
| set         | Скрипт для установки значений параметров.                    | -                                     | -                                                            |
| needrestart | Данный параметр указывает на  необходимость перезапуска сервиса, чтобы оптимизированный параметр вступил в  силу. | Перечислимый тип                      | **True** или **false**                                       |
| type        | Тип параметра. В настоящее  время поддерживаются дискретный (**discrete**)  и непрерывный (**continuous**) типы. | Перечислимый тип                      | **Discrete** или **continuous**                              |
| dtype       | Этот параметр доступен только  в том случае, если тип имеет значение **discrete**.  В настоящее время поддерживаются значения **int,  float** и **string**. | Перечислимый тип                      | int, float, string                                           |
| scope       | Диапазон настройки параметров. Этот параметр действителен, только когда параметр type имеет значение **discrete**, а dtype — значение **int or float**, либо type установлен в  значение **continuous**. | Целое число/число с плавающей  точкой | Значение задается пользователем  и не должно выходить из допустимого диапазона данного параметра. |
| step        | Шаг значения параметра, который  используется, если для параметра **dtype**  задано значение **int or float**. | Целое число/число с плавающей  точкой | Данное значение задается  пользователем.                     |
| items       | Перечислимый тип, значение параметра не входит в область действия. Используется, если для параметра **dtype** задано значение **int or float**. | Целое число/число с плавающей  точкой | Значение задается пользователем  и не должно выходить из допустимого диапазона данного параметра. |
| options     | Диапазон значений перечислимого типа. Данный параметр используется, если параметр **dtype** имеет значение **string**. | Строка символов                       | Значение задается пользователем и  не должно выходить из допустимого диапазона данного параметра. |



**Табл. 3** Описание элементов конфигурации файла YAML на стороне клиента

| **Имя**               | **Описание**                                                 | **Тип**                                                      | **Диапазон значений**                               |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | --------------------------------------------------- |
| project               | Имя проекта, которое должно совпадать с именем в конфигурационном файле на сервере. | Строка символов                                              | -                                                   |
| engine                | Алгоритм настройки.                                          | Строка символов                                              | "random",  "forest", "gbrt", "bayes",  "extraTrees" |
| iterations            | Количество итераций оптимизации.                             | Целое число                                                  | ≥ 10                                                |
| random_starts         | Количество случайных итераций.                               | Целое число                                                  | <  iterations                                       |
| feature_filter_engine | Алгоритм поиска параметров,  который используется для выбора важных параметров. Данный параметр необязателен. | Строка символов                                              | "lhs"                                               |
| feature_filter_cycle  | Количество циклов поиска  параметров. Данный параметр используется для выбора важных параметров вместе  с параметром feature_filter_engine. | Целое число                                                  | -                                                   |
| feature_filter_iters  | Количество итераций для каждого цикла поиска параметров, которое используется для выбора важных  параметров вместе с параметром feature_filter_engine. | Целое число                                                  | -                                                   |
| split_count           | Количество равномерно выбранных параметров в диапазоне значений  настройки, которое используется для выбора важных параметров вместе с  параметром feature_filter_engine. | Целое число                                                  | -                                                   |
| benchmark             | Скрипт для тестирования  производительности.                 | -                                                            | -                                                   |
| evaluations           | Показатель оценки результатов  тестирования производительности. | Более подробная информация о  настройке параметров оценки приведена в [Табл. 4](#table58847714266). | -                                                   |
| -                     |                                                              |                                                              |                                                     |





**Табл. 4** Описание элементов конфигурации для оценки

| **Имя**   | **Описание**                                                 | **Тип**          | **Диапазон   значений**                  |
| --------- | ------------------------------------------------------------ | ---------------- | ---------------------------------------- |
| name      | Название показателя оценки.                                  | Строка символов  | -                                        |
| get       | Скрипт для получения результатов оценки производительности.  | -                | -                                        |
| type      | Определяет результат оценки — положительный или отрицательный.  Значение **positive** указывает на минимальное  значение производительности, значение **negative**  указывает на максимальное значение производительности. | Перечислимый тип | **Positive** или **negative**            |
| weight    | Вес показателя. Диапазон принимаемых значений — от 0 до 100. | Целое число      | 0-100                                    |
| threshold | Минимально допустимый порог показателя.                      | Целое число      | Данное значение задается  пользователем. |


#### Пример

Пример конфигурации файла YAML на стороне сервера:

```
project: "compress"
maxiterations: 500
startworkload: ""
stopworkload: ""
object :
  -
    name : "compressLevel"
    info :
        desc : "The compresslevel parameter is an integer from 1 to 9 controlling the level of compression"
        get : "cat /root/A-Tune/examples/tuning/compress/compress.py | grep 'compressLevel=' | awk -F '=' '{print $2}'"
        set : "sed -i 's/compressLevel=\\s*[0-9]*/compressLevel=$value/g' /root/A-Tune/examples/tuning/compress/compress.py"
        needrestart : "false"
        type : "continuous"
        scope :
          - 1
          - 9
        dtype : "int"
  -
    name : "compressMethod"
    info :
        desc : "The compressMethod parameter is a string controlling the compression method"
        get : "cat /root/A-Tune/examples/tuning/compress/compress.py | grep 'compressMethod=' | awk -F '=' '{print $2}' | sed 's/\"//g'"
        set : "sed -i 's/compressMethod=\\s*[0-9,a-z,\"]*/compressMethod=\"$value\"/g' /root/A-Tune/examples/tuning/compress/compress.py"
        needrestart : "false"
        type : "discrete"
        options :
          - "bz2"
          - "zlib"
          - "gzip"
        dtype : "string"
```

  

Пример конфигурации файла YAML на стороне клиента:

```
project: "compress"
engine : "gbrt"
iterations : 20
random_starts : 10

benchmark : "python3 /root/A-Tune/examples/tuning/compress/compress.py"
evaluations :
  -
    name: "time"
    info:
        get: "echo '$out' | grep 'time' | awk '{print $3}'"
        type: "positive"
        weight: 20
  -
    name: "compress_ratio"
    info:
        get: "echo '$out' | grep 'compress_ratio' | awk '{print $3}'"
        type: "negative"
        weight: 80
```

  

#### Пример

- В этом примере выполняется настройка.
  
  ```
  # atune-adm tuning --project compress --detail compress_client.yaml
  ```

- Перед настройкой необходимо восстановить начальную конфигурацию. compress — это имя проекта в файле YAML.
  
  ````
  # atune-adm tuning --restore --project compress
  ```