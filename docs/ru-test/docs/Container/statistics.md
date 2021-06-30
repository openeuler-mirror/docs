# Статистика

- [Статистика](#statistics)
  - [events](#events)
  - [info](#info)
  - [version](#version)

## events

Синтаксис: **docker events \[**_options_**]**

Функция: получение событий в реальном времени от демона Docker.

Описание параметров:

**--since=""**: отображение журналов, сгенерированных после указанной отметки времени.

**--until=""**: отображение журналов, сгенерированных до указанной отметки времени.

Пример.

После выполнения команды **docker events** создается и запускается контейнер командой **docker run**. В командном выводе отображаются события создания и запуска.

```
$ sudo docker events
2019-08-28T16:23:09.338838795+08:00 container create 53450588a20800d8231aa1dc4439a734e16955387efb5f259c47737dba9e2b5e (image=busybox:latest, name=eager_wu)
2019-08-28T16:23:09.339909205+08:00 container attach 53450588a20800d8231aa1dc4439a734e16955387efb5f259c47737dba9e2b5e (image=busybox:latest, name=eager_wu)
2019-08-28T16:23:09.397717518+08:00 network connect e2e20f52662f1ee2b01545da3b02e5ec7ff9c85adf688dce89a9eb73661dedaa (container=53450588a20800d8231aa1dc4439a734e16955387efb5f259c47737dba9e2b5e, name=bridge, type=bridge)
2019-08-28T16:23:09.922224724+08:00 container start 53450588a20800d8231aa1dc4439a734e16955387efb5f259c47737dba9e2b5e (image=busybox:latest, name=eager_wu)
2019-08-28T16:23:09.924121158+08:00 container resize 53450588a20800d8231aa1dc4439a734e16955387efb5f259c47737dba9e2b5e (height=48, image=busybox:latest, name=eager_wu, width=210)
```

  

## info

Синтаксис: **docker info**

Функция: отображение информации о контейнере Docker, в том числе о количестве контейнеров, количестве образов, драйвере хранилища образов, драйвере выполнения контейнера, версии ядра и версии ОС хоста.

Описание параметров: --.

Пример.

```
$ sudo docker info
Containers: 4
 Running: 3
 Paused: 0
 Stopped: 1
Images: 45
Server Version: 18.09.0
Storage Driver: devicemapper
 Pool Name: docker-thinpool
 Pool Blocksize: 524.3kB
 Base Device Size: 10.74GB
 Backing Filesystem: ext4
 Udev Sync Supported: true
 Data Space Used: 11GB
 Data Space Total: 51GB
 Data Space Available: 39.99GB
 Metadata Space Used: 5.083MB
 Metadata Space Total: 532.7MB
 Metadata Space Available: 527.6MB
 Thin Pool Minimum Free Space: 5.1GB
 Deferred Removal Enabled: true
 Deferred Deletion Enabled: true
 Deferred Deleted Device Count: 0
......
```

  

## version

Синтаксис: **docker version**

Функция: отображение информации о версии Docker, в том числе версии клиента, версии сервера, версии Go, информации об ОС и Arch.

Описание параметров: --.

Пример.

```
$ sudo docker version
Client:
 Version:           18.09.0
 EulerVersion:      18.09.0.48
 API version:       1.39
 Go version:        go1.11
 Git commit:        cbf6283
 Built:             Mon Apr  1 00:00:00 2019
 OS/Arch:           linux/arm64
 Experimental:      false

Server:
 Engine:
  Version:          18.09.0
  EulerVersion:     18.09.0.48
  API version:      1.39 (minimum version 1.12)
  Go version:       go1.11
  Git commit:       cbf6283
  Built:            Mon Apr  1 00:00:00 2019
  OS/Arch:          linux/arm64
  Experimental:     false
```

  