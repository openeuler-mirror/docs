# Установка и развертывание

В этой главе описывается процесс установки и развертывания A-Tune.

- [Установка и развертывание](#installation-and-deployment)
  - [Требования к программному и аппаратному обеспечению](#software-and-hardware-requirements)
  - [Подготовка среды](#environment-preparation)
  - [Установка A-Tune](#a-tune-installation)
    - [Режимы установки](#installation-modes)
    - [Процедура установки](#installation-procedure)
  - [Развертывание A-Tune](#a-tune-deployment)
  - [Запуск A-Tune](#starting-a-tune)
  - [Запуск движка A-Tune](#starting-a-tune-engine)

## Требования к программному и аппаратному обеспечению

### Требования к аппаратному обеспечению

- Процессор Huawei Kunpeng 920

### Требования к программному обеспечению

- Операционная система openEuler 21.03

## Подготовка среды

Подробная информация об установке операционной системы openEuler приведена в документе _Руководство по установке openEuler 21.03_.

## Установка A-Tune

В этом разделе описываются режимы и методы установки A-Tune.

### Режимы установки

A-Tune можно установить в режиме с одним узлом или распределенном режиме.

- Режим с одним узлом
  
  Клиент и сервер устанавливаются в одной системе.

- Распределенный режим
  
  Клиент и сервер устанавливаются в разных системах.

Данные режимы показаны на следующем рисунке:

![](./figures/en-us_image_0231122163.png)

  

### Процедура установки

Для установки A-Tune выполните следующие действия:

1. Смонтируйте ISO-файл образа openEuler.
   
   ```
   # mount openEuler-21.03-aarch64-dvd.iso /mnt
   ```

2. Сконфигурируйте локальный источник Yum.
   
   ```
   # vim /etc/yum.repos.d/local.repo
   ```
   
   Содержимое сконфигурированного файла выглядит следующим образом:
   
   ```
   [local]
   name=local
   baseurl=file:///mnt
   gpgcheck=1
   enabled=1
   ```

3. Импортируйте в систему открытый ключ GPG цифровой подписи RPM.
   
   ```
   # rpm --import /mnt/RPM-GPG-KEY-openEuler
   ```

4. Установите сервер A-Tune.
   
   > ![](./public_sys-resources/icon-note.gif) ПРИМЕЧАНИЕ:  
На этом шаге устанавливаются пакеты программного обеспечения сервера и клиента. В режиме развертывания с одним узлом пропустите **Шаг 5**.
   
   ```
   # yum install atune -y
   # yum install atune-engine -y
   ```

5. В распределенном режиме установите клиент A-Tune на соответствующий сервер.
   
   ```
   # yum install atune-client -y
   ```

6. Убедитесь, что установка выполнена.
   
   ```
   # rpm -qa | grep atune
   atune-client-xxx
   atune-db-xxx
   atune-xxx
   atune-engine-xxx
   ```
   
   Установка считается успешно выполненной, если на экране появляется приведенная информация.

## Развертывание A-Tune

В этой главе описывается способ развертывания A-Tune.

### Обзор

Далее приводится описание элементов конфигурации, содержащихся в конфигурационном файле**/etc/atuned/atuned.cnf**:

- Конфигурация для запуска службы A-Tune
  
  Укажите значения параметров в соответствии с фактической ситуацией.
  
  - **protocol**: протокол, используемый службой gRPC. Принимаемые значения — **unix** или **tcp**.  **unix** — режим обмена данными по локальным процессам посредством сокета, **tcp** — режим прослушивания порта сокета. Значение по умолчанию — **unix**.
  - **address**: IP-адрес прослушивающего сокета службы gRPC. Значение по умолчанию — **unix socket**. Если служба gRPC развертывается в распределенном режиме, задайте этому параметру значение IP-адреса прослушивающего сокета.
  - **port**: порт прослушивающего сокета сервера gRPC. Диапазон принимаемых значений — от 0 до 65535. Если параметру **protocol** задано значение **unix**, то настраивать этот параметр не требуется.
  - **connect**: перечень IP-адресов узлов, на которых размещена служба A-Tune при условии развертывания ее в кластере. IP-адреса разделяются запятыми (,).
  - **rest\_host**: адрес прослушивающего сокета службы REST. Значение по умолчанию — **localhost**.
  - **rest\_port**: порт прослушивающего сокета службы REST. Диапазон принимаемых значений — от 0 до 65535. Значение по умолчанию — 8383.
  - **engine\_host**: IP-адрес для подключения к службе A-Tune системы.
  - **engine\_port**: порт для подключения к службе A-Tune системы.
  - **sample\_num**: количество выборок, сделанных системой во время выполнения процесса анализа. Значение по умолчанию — 20.
  - **interval**: интервал, с которым система делает выборки во время выполнения процесса анализа. Значение по умолчанию — **5s**.
  - **grpc\_tls**: данным параметром включается проверка сертификата SSL/TLS для службы gRPC. По умолчанию эта функция выключена. Если вы включили функцию grpc\_tls, то прежде чем выполнять команду **atune-adm**, чтобы установить связь с сервером, задайте следующие переменные среды:
    - export ATUNE\_TLS=yes
    - export ATUNED\_CACERT=<Path of the client CA certificate>
    - export ATUNED\_CLIENTCERT=<Client certificate path>
    - export ATUNED\_CLIENTKEY=<Client key path>
    - export ATUNED\_SERVERCN=server
  - **tlsservercafile**: путь к сертификату CA сервера gPRC.
  - **tlsservercertfile**: путь к серверному сертификату gPRC.
  - **tlsserverkeyfile**: путь к ключу сервера gPRC.
  - **rest\_tls**: данным параметром включается проверка сертификата SSL/TLS для службы REST. Эта функция включена по умолчанию.
  - **tlsrestcacertfile**: путь к сертификату CA сервера службы REST.
  - **tlsrestservercertfile**: путь к серверному сертификату службы REST.
  - **tlsrestserverkeyfile**: ключевой путь к службе REST.
  - **engine\_tls**: данным параметром включается проверка сертификата SSL/TLS для службы движка A-Tune. Эта функция включена по умолчанию.
  - **tlsenginecacertfile**: путь к сертификату CA клиента службы движка A-Tune.
  - **tlsengineclientcertfile**: путь к сертификату клиента службы движка A-Tune.
  - **tlsengineclientkeyfile**: ключевой путь к клиенту службы движка A-Tune.

- Информация о системе
  
  Это информация о параметрах, которая требуется для оптимизации работы системы. Данная информация изменяется в соответствии с фактической ситуацией.
  
  - **disk**: информация о диске, собираемая в процессе анализа, или об указанном диске, собираемая во время его оптимизации.
  - **network**: информация о сетевой карте NIC, собираемая в процессе анализа, или об указанной карте NIC, собираемая во время ее оптимизации.
  - **user**: имя пользователя, применяемое для оптимизации команды ulimit. В настоящее время поддерживается только пользователь **root**.

- Информация о журнале
  
  Измените уровень журнала в соответствии с фактической ситуацией. По умолчанию установлен уровень журнала info. Информация о журнале записывается в файл **/var/log/messages**.

- Информация о мониторе
  
  Информация об оборудовании, которая по умолчанию собирается при запуске системы.

- Информация о Tuning
  
  Это информация о параметрах, которая требуется для настройки в офлайн-режиме.
  
  - **noise**: оценочное значение уровня гауссова шума.
  - **sel\_feature**: данным параметром включается функция создания рейтинга важности параметров настройки в офлайн-режиме. По умолчанию эта функция выключена.

#### Пример

```
#################################### server ############################### 
 # atuned config 
 [server] 
 # the protocol grpc server running on 
 # ranges: unix or tcp 
 protocol = unix 

 # the address that the grpc server to bind to
 # default is unix socket /var/run/atuned/atuned.sock
 # ranges: /var/run/atuned/atuned.sock or ip address
 address = /var/run/atuned/atuned.sock 

 # the atune nodes in cluster mode, separated by commas
 # it is valid when protocol is tcp
 # connect = ip01,ip02,ip03

 # the atuned grpc listening port
 # the port can be set between 0 to 65535 which not be used
 # port = 60001

 # the rest service listening port, default is 8383
 # the port can be set between 0 to 65535 which not be used
 rest_host = localhost
 rest_port = 8383

 # the tuning optimizer host and port, start by engine.service
 # if engine_host is same as rest_host, two ports cannot be same
 # the port can be set between 0 to 65535 which not be used
 engine_host = localhost
 engine_port = 3838

 # when run analysis command, the numbers of collected data.
 # default is 20
 sample_num = 20

 # interval for collecting data, default is 5s
 interval = 5

 # enable gRPC authentication SSL/TLS
 # default is false
 # grpc_tls = false
 # tlsservercafile = /etc/atuned/grpc_certs/ca.crt
 # tlsservercertfile = /etc/atuned/grpc_certs/server.crt
 # tlsserverkeyfile = /etc/atuned/grpc_certs/server.key

 # enable rest server authentication SSL/TLS
 # default is true
 rest_tls = true
 tlsrestcacertfile = /etc/atuned/rest_certs/ca.crt
 tlsrestservercertfile = /etc/atuned/rest_certs/server.crt
 tlsrestserverkeyfile = /etc/atuned/rest_certs/server.key

 # enable engine server authentication SSL/TLS
 # default is true
 engine_tls = true
 tlsenginecacertfile = /etc/atuned/engine_certs/ca.crt
 tlsengineclientcertfile = /etc/atuned/engine_certs/client.crt
 tlsengineclientkeyfile = /etc/atuned/engine_certs/client.key


 #################################### log ############################### 
 [log]
 # either "debug", "info", "warn", "error", "critical", default is "info"
 level = info

 #################################### monitor ############################### 
 [monitor]
 # with the module and format of the MPI, the format is {module}_{purpose}
 # the module is Either "mem", "net", "cpu", "storage"
 # the purpose is "topo"
 module = mem_topo, cpu_topo

 #################################### system ############################### 
 # you can add arbitrary key-value here, just like key = value
 # you can use the key in the profile
 [system]
 # the disk to be analysis
 disk = sda

 # the network to be analysis
 network = enp189s0f0

 user = root
 
 #################################### tuning ###############################
 # tuning configs
 [tuning]
 noise = 0.000000001
 sel_feature = false
```

Далее приводится описание элементов конфигурации, содержащихся в конфигурационном файле **/etc/atuned/atuned.cnf** A-Tune:

- Конфигурация для запуска службы движка A-Tune
  
  Укажите значения параметров в соответствии с фактической ситуацией.
  
  - **engine\_host**: адрес прослушивающего сокета службы движка A-Tune. Значение по умолчанию — **localhost**.
  - **engine\_port**: порт прослушивающего сокета службы движка A-Tune. Диапазон принимаемых значений — от 0 до 65535. Значение по умолчанию — 3838.
  - **engine\_tls**: данным параметром включается проверка сертификата SSL/TLS для службы движка A-Tune. Эта функция включена по умолчанию.
  - **tlsenginecacertfile**: путь к сертификату CA сервера службы движка A-Tune.
  - **tlsengineservercertfile**: путь к серверному сертификату службы движка A-Tune.
  - **tlsengineserverkeyfile**: ключевой путь к серверу службы движка A-Tune.

- Информация о журнале
  
  Измените уровень журнала в соответствии с фактической ситуацией. По умолчанию установлен уровень журнала info. Информация о журнале записывается в файл **/var/log/messages**.

#### Пример

```
#################################### engine ###############################
 [server]
 # the tuning optimizer host and port, start by engine.service
 # if engine_host is same as rest_host, two ports cannot be same
 # the port can be set between 0 to 65535 which not be used
 engine_host = localhost
 engine_port = 3838

 # enable engine server authentication SSL/TLS
 # default is true
 engine_tls = true
 tlsenginecacertfile = /etc/atuned/engine_certs/ca.crt
 tlsengineservercertfile = /etc/atuned/engine_certs/server.crt
 tlsengineserverkeyfile = /etc/atuned/engine_certs/server.key

 #################################### log ###############################
 [log]
 # either "debug", "info", "warn", "error", "critical", default is "info"
 level = info
```

## Запуск A-Tune

После установки необходимо запустить A-Tune.

- Запустите службу atuned.
  
  ```
  # systemctl start atuned
  ```

- Запросите статус службы atuned.
  
  ```
  # systemctl status atuned
  ```
  
  Служба считается успешно запущенной, если на экране появляются следующие выходные данные команды:
  
  ![](./figures/en-us_image_0214540398.png)

## Запуск движка A-Tune

Для использования функций ИИ необходимо запустить службу движка A-Tune.

- Запустите службу atune-engine.
  
  ```
  # systemctl start atune-engine
  ```

- Запросите статус службы atune-engine.
  
  ```
  # systemctl status atune-engine
  ```
  
  Служба считается успешно запущенной, если на экране появляются следующие выходные данные команды:
  
  ![](./figures/en-us_image_0245342444.png)