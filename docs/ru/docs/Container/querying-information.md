# Запрос информации

- [Запрос информации](#querying-information)
  - [Запрос версии службы](#querying-the-service-version)
  - [Запрос информации о системе](#querying-system-level-information)

## Запрос версии службы

### Описание

Версия службы iSulad запрашивается командой **isula version**.

### Использование

```
isula version
```

### Пример

Запрос информации о версии.

```
isula version
```

Если служба iSulad корректно работает, для просмотра доступна информация о версиях клиента, сервера и **OCI config**.

```
Client:
  Version:      1.0.31
  Git commit:   fa7f9902738e8b3d7f2eb22768b9a1372ddd1199
  Built:        2019-07-30T04:21:48.521198248-04:00

Server:
  Version:      1.0.31
  Git commit:   fa7f9902738e8b3d7f2eb22768b9a1372ddd1199
  Built:        2019-07-30T04:21:48.521198248-04:00

OCI config:
  Version:      1.0.0-rc5-dev
  Default file: /etc/default/isulad/config.json
```

Если служба iSulad не работает, запрашивается только информация о клиенте, и отображается сообщение, указывающее на таймаут соединения.

```
Client:
  Version:      1.0.31
  Git commit:   fa7f9902738e8b3d7f2eb22768b9a1372ddd1199
  Built:        2019-07-30T04:21:48.521198248-04:00

Can not connect with server.Is the iSulad daemon running on the host?
```

Поэтому команда **isula version** часто используется для проверки корректности работы службы iSulad.

## Запрос информации о системе

### Описание

Для запроса информации о системе, количестве контейнеров и количестве образов используется команда **isula info.**

### Использование

```
isula info
```

### Пример

Пример запроса информации о системе, в том числе о количестве контейнеров, количестве образов, версии ядра и операционной системе (ОС).

```
$ isula info
Containers: 2
 Running: 0
 Paused: 0
 Stopped: 2
Images: 8
Server Version: 1.0.31
Logging Driver: json-file
Cgroup Driverr: cgroupfs
Hugetlb Pagesize: 2MB
Kernel Version: 4.19
Operating System: Fedora 29 (Twenty Nine)
OSType: Linux
Architecture: x86_64
CPUs: 8
Total Memory: 7 GB
Name: localhost.localdomain
iSulad Root Dir: /var/lib/isulad
```