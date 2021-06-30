# Управление образами

- [Управление образами](#image-management)
  - [Управление образами Docker](#docker-image-management)
    - [Вход в реестр](#logging-in-to-a-registry)
    - [Выход из реестра](#logging-out-of-a-registry)
    - [Извлечение образов из реестра](#pulling-images-from-a-registry)
    - [Удаление образов](#deleting-images)
    - [Загрузка образов](#loading-images)
    - [Вывод списка образов](#listing-images)
    - [Проверка образов](#inspecting-images)
    - [Двусторонняя аутентификация](#two-way-authentication)
  - [Управление образами встраиваемой системы](#embedded-image-management)
    - [Загрузка образов](#loading-images-3)
    - [Вывод списка образов](#listing-images-4)
    - [Проверка образов](#inspecting-images-5)
    - [Удаление образов](#deleting-images-6)

## Управление образами Docker

### Вход в реестр

#### Описание

Вход в реестр осуществляется командой **isula login**. После успешного входа можно выполнить команду **isula pull** для извлечения образов из реестра. Если реестр не требует пароля, команду выполнять не требуется перед извлечением образов.

#### Использование

```
isula login [OPTIONS] SERVER
```

#### Параметры

Подробная информация о параметрах команды **login** приведена в [**Табл. 1**](#command-line-parameters.md#en-us_topic_0189976507_table2711184314112).

#### Пример

```
$ isula login -u abc my.csp-edge.com:5000

Login Succeeded
```

### Выход из реестра

#### Описание

Выход из реестра осуществляется командой **isula logout**. Если команда **isula pull** будет запущена для извлечения образа из реестра после выхода из системы, образ не будет извлечен по причине непрохождения пользователем аутентификации.

#### Использование

```
isula logout SERVER
```

#### Параметры

Подробная информация о параметрах команды **logout** приведена в [**Табл. 2**](#command-line-parameters.md#en-us_topic_0189976507_table184058282137).

#### Пример

```
$ isula logout my.csp-edge.com:5000
Logout Succeeded
```

### Извлечение образов из реестра

#### Описание

Данная операция извлекает образы из реестра на локальный хост.

#### Использование

```
isula pull [OPTIONS] NAME[:TAG|@DIGEST]
```

#### Параметры

Подробная информация о параметрах команды **pull** приведена в [**Табл. 3**](#command-line-parameters.md#en-us_topic_0189976507_table157501230181515).

#### Пример

```
$ isula pull localhost:5000/official/busybox
Image "localhost:5000/official/busybox" pulling
Image "localhost:5000/official/busybox@sha256:bf510723d2cd2d4e3f5ce7e93bf1e52c8fd76831995ac3bd3f90ecc866643aff" pulled
```

### Удаление образов

#### Описание

Данная операция удаляет один или несколько образов.

#### Использование

```
isula rmi [OPTIONS] IMAGE [IMAGE...]
```

#### Параметры

Подробная информация о параметрах команды **rmi** приведена в [**Табл. 4**](#command-line-parameters.md#en-us_topic_0189976507_table856181871617).

#### Пример

```
$ isula rmi rnd-dockerhub.huawei.com/official/busybox
Image "rnd-dockerhub.huawei.com/official/busybox" removed
```

### Загрузка образов

#### Описание

Данная операция загружает образы из пакета .tar. Пакет .tar необходимо экспортировать с помощью команды **docker save** или он должен быть в том же формате.

#### Использование

```
isula load [OPTIONS]
```

#### Параметры

Подробная информация о параметрах команды **load** приведена в [**Табл. 5**](#command-line-parameters.md#en-us_topic_0189976507_table99761512187).

#### Пример

```
$ isula load -i busybox.tar
Load image from "/root/busybox.tar" success
```

### Вывод списка образов

#### Описание

Данная операция выводит список всех образов в текущей среде.

#### Использование

```
isula images
```

#### Параметры

Подробная информация о параметрах команды **images** приведена в [**Табл. 6**](#command-line-parameters.md#en-us_topic_0189976507_table1698717275206).

#### Пример

```
$ isula images
REF                                              IMAGE ID             CREATED              SIZE
rnd-dockerhub.huawei.com/official/busybox:latest e4db68de4ff2         2019-06-15 08:19:54  1.376 MB
```

### Проверка образов

#### Описание

После возврата информации о конфигурации образа можно, по мере необходимости, отфильтровать ее, используя параметр **-f**.

#### Использование

```
isula inspect [options] CONTAINER|IMAGE [CONTAINER|IMAGE...]
```

#### Параметры

Подробная информация о параметрах команды **inspect** приведена в [**Табл. 7**](#command-line-parameters.md#en-us_topic_0189976507_table73237211516).

#### Пример

```
$ isula inspect -f "{{json .image.id}}" rnd-dockerhub.huawei.com/official/busybox
"e4db68de4ff27c2adfea0c54bbb73a61a42f5b667c326de4d7d5b19ab71c6a3b"
```

### Двусторонняя аутентификация

#### Описание

После включения этой функции репозитории iSulad и образов взаимодействуют по HTTPS. В процессе взаимодействия проверяется подлинность репозиториев.

#### Использование

Эту функцию должен поддерживать соответствующий реестр, а iSulad должен быть сконфигурирован следующим образом:

1. Измените конфигурацию iSulad (путь по умолчанию: **/etc/isulad/daemon.json**) и установите параметру **use-decrypted-key** значение **false**.

2. Поместите соответствующие сертификаты в папку с именем реестра в каталоге **/etc/isulad/certs.d**. Для получения подробной информации о том, как генерировать сертификаты, посетите официальный веб-сайт Docker:
   
   - [https://docs.docker.com/engine/security/certificates/](https://docs.docker.com/engine/security/certificates/)
   - [https://docs.docker.com/engine/security/https/](https://docs.docker.com/engine/security/https/)

3. Выполните команду **systemctl restart isulad** для перезапуска iSulad.

#### Параметры

Параметры настраиваются в файле **/etc/isulad/daemon.json** или передаются при запуске iSulad.

```
isulad --use-decrypted-key=false
```

#### Пример

Установите параметру **use-decrypted-key** значение **false**.

```
$ cat /etc/isulad/daemon.json
{
    "group": "isulad",
    "graph": "/var/lib/isulad",
    "state": "/var/run/isulad",
    "engine": "lcr",
    "log-level": "ERROR",
    "pidfile": "/var/run/isulad.pid",
    "log-opts": {
        "log-file-mode": "0600",
        "log-path": "/var/lib/isulad",
        "max-file": "1",
        "max-size": "30KB"
    },
    "log-driver": "stdout",
    "hook-spec": "/etc/default/isulad/hooks/default.json",
    "start-timeout": "2m",
    "storage-driver": "overlay2",
    "storage-opts": [
        "overlay2.override_kernel_check=true"
    ],
    "registry-mirrors": [
        "docker.io"
    ],
    "insecure-registries": [
        "rnd-dockerhub.huawei.com"
    ],
    "pod-sandbox-image": "",
    "image-opt-timeout": "5m",
    "native.umask": "secure",
    "network-plugin": "",
    "cni-bin-dir": "",
    "cni-conf-dir": "",
    "image-layer-check": false,
    "use-decrypted-key": false,
    "insecure-skip-verify-enforce": false
}
```

Поместите сертификат в соответствующий каталог.

```
$ pwd
/etc/isulad/certs.d/my.csp-edge.com:5000
$ ls
ca.crt  tls.cert  tls.key
```

Перезапустите iSulad.

```
$ systemctl restart isulad
```

Выполните команду **pull**, чтобы загрузить образы из реестра:

```
$ isula pull my.csp-edge.com:5000/busybox
Image "my.csp-edge.com:5000/busybox" pulling
Image "my.csp-edge.com:5000/busybox@sha256:f1bdc62115dbfe8f54e52e19795ee34b4473babdeb9bc4f83045d85c7b2ad5c0" pulled
```

## Управление образами встраиваемой системы

### Загрузка образов

#### Описание

Операция загружает образы на основе файлов **manifest** образов встраиваемой системы. Параметру -**-type** необходимо установить значение **embedded**.

#### Использование

```
isula load [OPTIONS] --input=FILE --type=TYPE
```

#### Параметры

Подробная информация о параметрах команды **load** приведена в [**Табл. 5**](#command-line-parameters.md#en-us_topic_0189976507_table99761512187).

#### Пример

```
$ isula load -i test.manifest --type embedded
Load image from "/root/work/bugfix/tmp/ci_testcase_data/embedded/img/test.manifest" success
```

### Вывод списка образов

#### Описание

Данная операция выводит список всех образов в текущей среде.

#### Использование

```
isula images [OPTIONS]
```

#### Параметры

Подробная информация о параметрах команды **images** приведена в [**Табл. 6**](#command-line-parameters.md#en-us_topic_0189976507_table1698717275206).

#### Пример

```
$ isula images
REF                            IMAGE ID             CREATED              SIZE
test:v1                        9319da1f5233         2018-03-01 10:55:44  1.273 MB
```

### Проверка образов

#### Описание

После возврата информации о конфигурации образа можно, по мере необходимости, отфильтровать ее, используя параметр **-f**.

#### Использование

```
isula inspect [options] CONTAINER|IMAGE [CONTAINER|IMAGE...]
```

#### Параметры

Подробная информация о параметрах команды **inspect** приведена в [**Табл. 7**](#command-line-parameters.md#en-us_topic_0189976507_table73237211516).

#### Пример

```
$ isula inspect -f "{{json .created}}" test:v1
"2018-03-01T15:55:44.322987811Z"
```

### Удаление образов

#### Описание

Данная операция удаляет один или несколько образов.

#### Использование

```
isula rmi [OPTIONS] IMAGE [IMAGE...]
```

#### Параметры

Подробная информация о параметрах команды **rmi** приведена в [**Табл. 4**](#command-line-parameters.md#en-us_topic_0189976507_table856181871617).

#### Пример

```
$ isula rmi test:v1
Image "test:v1" removed
```