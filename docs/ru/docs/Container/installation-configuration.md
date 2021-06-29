# Установка и настройка

- [Установка и настройка](./installation-configuration)
  - [Методы установки](#installation-methods)
  - [Конфигурация настроек при развертывании](#deployment-configuration)
    - [Метод конфигурирования](#configuration-mode)
    - [Описание системы хранения](#storage-description)
    - [Ограничения](#constraints)
    - [Привязка нескольких портов с помощью демона](#daemon-multi-port-binding)
    - [Настройка аутентификации TLS и включение удаленного доступа](#configuring-tls-authentication-and-enabling-remote-access)
    - [Настройка драйвера хранилища devicemapper](#devicemapper-storage-driver-configuration)

## Методы установки

iSulad устанавливается командой **yum** или **rpm**. Рекомендуется использовать команду **yum**, поскольку в этом случае зависимости устанавливаются автоматически.

В данном разделе приведены два метода настройки.

- (Рекомендуется) Выполните следующую команду для установки iSulad:
  
  ```
  $ sudo yum install -y iSulad
  ```

- Если для установки iSulad используется команда **rpm**, необходимо загрузить и вручную установить RMP-пакеты iSulad и все зависимости. Чтобы установить пакет RPM для одного комплекта iSulad (в том числе для установки пакетов зависимостей), выполните следующую команду:
  
  ```
  $ sudo rpm -ihv iSulad-xx.xx.xx-YYYYmmdd.HHMMSS.gitxxxxxxxx.aarch64.rpm
  ```

## Конфигурация настроек при развертывании

### Метод конфигурирования

Для настройки демона сервера iSulad **isulad** можно воспользоваться конфигурационным файлом или командой **isulad--xxx**. Приоритет в порядке убывания выглядит следующим образом: CLI > конфигурационный файл > конфигурация по умолчанию в коде.

> ![](./public_sys-resources/icon-note.gif) ПРИМЕЧАНИЕ:  
Если для управления процессом iSulad используется systemd, измените поле **OPTIONS** в файле **/etc/sysconfig/iSulad**, что будет равнозначно использованию командной строки.

- **CLI**
  
  Настройте iSulad, используя интерфейс командной строки, во время запуска службы. Чтобы просмотреть параметры конфигурации, выполните следующую команду:
  
  ```
  $ isulad --help
  lightweight container runtime daemon
  
  Usage:  isulad [global options]
  
  GLOBAL OPTIONS:
  
        --authorization-plugin            Use authorization plugin
        --cgroup-parent                   Set parent cgroup for all containers
        --cni-bin-dir                     The full path of the directory in which to search for CNI plugin binaries. Default: /opt/cni/bin
        --cni-conf-dir                    The full path of the directory in which to search for CNI config files. Default: /etc/cni/net.d
        --default-ulimit                  Default ulimits for containers (default [])
    -e, --engine                          Select backend engine
    -g, --graph                           Root directory of the iSulad runtime
    -G, --group                           Group for the unix socket(default is isulad)
        --help                            Show help
        --hook-spec                       Default hook spec file applied to all containers
    -H, --host                            The socket name used to create gRPC server
        --image-layer-check               Check layer intergrity when needed
        --image-opt-timeout               Max timeout(default 5m) for image operation
        --insecure-registry               Disable TLS verification for the given registry
        --insecure-skip-verify-enforce    Force to skip the insecure verify(default false)
        --log-driver                      Set daemon log driver, such as: file
    -l, --log-level                       Set log level, the levels can be: FATAL ALERT CRIT ERROR WARN NOTICE INFO DEBUG TRACE
        --log-opt                         Set daemon log driver options, such as: log-path=/tmp/logs/ to set directory where to store daemon logs
        --native.umask                    Default file mode creation mask (umask) for containers
        --network-plugin                  Set network plugin, default is null, suppport null and cni
    -p, --pidfile                         Save pid into this file
        --pod-sandbox-image               The image whose network/ipc namespaces containers in each pod will use. (default "rnd-dockerhub.huawei.com/library/pause-${machine}:3.0")
        --registry-mirrors                Registry to be prepended when pulling unqualified images, can be specified multiple times
        --start-timeout                   timeout duration for waiting on a container to start before it is killed
    -S, --state                           Root directory for execution state files
        --storage-driver                  Storage driver to use(default overlay2)
    -s, --storage-opt                     Storage driver options
        --tls                             Use TLS; implied by --tlsverify
        --tlscacert                       Trust certs signed only by this CA (default "/root/.iSulad/ca.pem")
        --tlscert                         Path to TLS certificate file (default "/root/.iSulad/cert.pem")
        --tlskey                          Path to TLS key file (default "/root/.iSulad/key.pem")
        --tlsverify                       Use TLS and verify the remote
        --use-decrypted-key               Use decrypted private key by default(default true)
    -V, --version                         Print the version
     --websocket-server-listening-port    CRI websocket streaming service listening port (default 10350)
  ```
  
  Пример. Запустите iSulad, измените уровень журнала на DEBUG.
  
  ```
  $ isulad -l DEBUG
  ```

- **Конфигурационный файл**
  
  Конфигурационный файл iSulad — **/etc/isulad/daemon.json**. Описание параметров, содержащихся в файле:
  
  | **Параметр**                         | **Пример**                                                   | **Описание**                                                 | **Примечания**                                               |
  | ------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
  | -e, --engine                         | "engine": "lcr"                                              | Исполняющая среда iSulad, которая по умолчанию имеет значение **Icr.** | --                                                           |
  | -G, --group                          | "group": "isulad"                                            | Группа сокетов.                                              | --                                                           |
  | --hook-spec                          | "hook-spec": "/etc/default/isulad/hooks/default.json"        | Конфигурационный файл обработчика по умолчанию для всех контейнеров. | --                                                           |
  | -H, --host                           | "hosts": "unix:///var/run/isulad.sock"                       | Режим связи.                                                 | Помимо локального сокета поддерживается также режим **tcp://ip:port**. Диапазон номеров портов — от 0 до 65535, не включая занятые порты. |
  | --log-driver                         | "log-driver": "file"                                         | Конфигурация диска журнала.                                  | --                                                           |
  | -l, --log-level                      | "log-level": "ERROR"                                         | Уровень вывода данных журнала.                               | --                                                           |
  | --log-opt                            | "log-opts": {  "log-file-mode": "0600",  "log-path": "/var/lib/isulad",  "max-file": "1",  "max-size": "30KB"  } | Конфигурация, имеющая отношение к журналу.                   | Пользователь может указать **max-file**, **max-size** и **log-path**. **max-file** задает количество файлов журнала. **max-size** означает  порог запуска функции предотвращения чрезмерного увеличения данных журнала.  Если значение параметра **max-file**  равно **1**, параметр  **max-size** недействителен. **Log-path** задает путь сохранения файлов журнала. Команда **log-file-mode**  используется для настройки разрешений на чтение и запись файлов журнала. Значение должно быть в восьмеричном формате, например 0666. |
  | --start-timeout                      | "start-timeout": "2m"                                        | Время, требующееся для запуска контейнера.                   | --                                                           |
  | --runtime                            | "default-runtime": "lcr"                                     | Исполняющая среда контейнера, которая по умолчанию имеет значение **Icr.** | Значение по умолчанию **lcr** используется в том случае, если исполняющая среда не была задана ни через командную строку, ни в  конфигурационном файле. Способ указания параметра выбирается по следующим приоритетам: Командная строка > конфигурационный файл > значение по умолчанию **lcr**.  В настоящее время поддерживаются среды **lcr** и **kata-runtime**. |
  | --                                   | "runtimes": {      "kata-runtime": {       "path": "/usr/bin/kata-runtime",       "runtime-args": [        "--kata-config",        "/usr/share/defaults/kata-containers/configuration.toml"       ]      }  } | Данный параметр настраивается при запуске контейнера для указания нескольких исполняющих сред. Заданная данной настройкой исполняющая  среда действительна для запуска контейнера. | Это белый список исполняющих сред контейнера. Специально  настроенные здесь исполняющие среды являются действительными  значениями. Среда **kata-runtime**  приведена здесь для примера. |
  | -p, --pidfile                        | "pidfile": "/var/run/isulad.pid"                             | Файл для хранения PID.                                       | Данный параметр требуется, только если необходимо запустить более двух движков контейнера. |
  | -g, --graph                          | "graph": "/var/lib/isulad"                                   | Корневой каталог для хранения исполняющих сред iSulad.       |                                                              |
  | -S, --state                          | "state": "/var/run/isulad"                                   | Корневой каталог для исполняющего файла.                     |                                                              |
  | --storage-driver                     | "storage-driver": "overlay2"                                 | Диск хранения образов, по умолчанию — **overlay2**.          | Поддерживается только **overlay2**.                          |
  | -s, --storage-opt                    | "storage-opts": [  "overlay2.override_kernel_check=true" ]   | Параметр настройки диска хранения образов.                   | Значения параметров:  overlay2.override_kernel_check=true  #Проверка версии ядра не выполняется.  overlay2.size=${size} #Квота rootfs устанавливается в значение  ${*размер*}.  overlay2.basesize=${size} #Эквивалентно overlay2.size. |
  | --image-opt-timeout                  | "image-opt-timeout": "5m"                                    | Время ожидания при работе с образом, которое по умолчанию составляет **5m**. | Значение **-1** означает,  что время ожидания не ограничено. |
  | --registry-mirrors                   | "registry-mirrors": [ "docker.io" ]                          | Адрес регистра.                                              | --                                                           |
  | --insecure-registry                  | "insecure-registries": [ ]                                   | Регистр без проверки TLS.                                    | --                                                           |
  | --native.umask                       | "native.umask": "secure"                                     | Политика создания пользовательских файлов, применяемая по отношению к контейнеру. Значение по умолчанию **secure**. Значение **normal** указывает на небезопасную конфигурацию. | Задайте значение **umask** для  контейнера. Значение может быть нулевым (**0027** по умолчанию), **normal** или **secure**.  normal  #Значением **umask**  запущенного контейнера является **0022**.  secure #Значением **umask**  запущенного контейнера является **0027** (значение по  умолчанию). |
  | --pod-sandbox-image                  | "pod-sandbox-image":  "rnd-dockerhub.huawei.com/library/pause-aarch64:3.0" | По умолчанию модуль pod использует данный образ. Значение по умолчанию — **rnd-dockerhub.huawei.com/library/pause-${machine}:3.0**. | --                                                           |
  | --network-plugin                     | "network-plugin": ""                                         | Указывает сетевой плагин. Нулевое значение по умолчанию указывает на то, что конфигурация сети недоступна, а созданная песочница имеет только карту NIC для шлейфового соединения. | Поддерживаются символы CNI и нуль. Другие недопустимые  значения приведут к сбою запуска iSulad. |
  | --cni-bin-dir                        | "cni-bin-dir": ""                                            | Параметр задает место хранения файла в двоичном формате, от которого зависит плагин CNI. | Значение по умолчанию — **/opt/cni/bin**.                    |
  | --cni-conf-dir                       | "cni-conf-dir": ""                                           | Параметр задает место хранения файла конфигурации сети CNI.  | Значение по умолчанию — **/etc/cni/net.d**.                  |
  | --image-layer-check=false            | "image-layer-check": false                                   | Проверка на целостность слоя образов. Чтобы включить эту  функцию, установите данному параметру значение **true**. Если функция не требуется, установите значение **false**. Функция отключена по умолчанию. | При запуске iSulad проверяется целостность слоя образов. Если  слой поврежден, соответствующие образы будут недоступны. iSulad не сможет  проверить пустые файлы, каталоги и файлы ссылок. Поэтому потеря  вышеупомянутых файлов по причине отключения питания может привести к  невозможности проверки образов iSulad на целостность. При изменении версии  iSulad убедитесь, что этот параметр поддерживается. Если не поддерживается, удалите его из конфигурационного файла. |
  | --insecure-skip-verify-enforce=false | "insecure-skip-verify-enforce": false                        | Данный параметр устанавливает, будет или не будет  принудительно пропущена проверка имени хоста или имени домена сертификата. Параметр  принимает значения логического типа, по умолчанию **false**. Если этому параметру будет установлено значение **true**, проверка имени хоста или имени домена сертификата будет пропущена. | Значение по умолчанию **false** (не пропущено). Примечание: в соответствии с  ограничениями библиотеки синтаксического анализа YAJL JSON, если значение,  указанное в конфигурационном файле **/etc/isulad/daemon.json**,  не относится к логическому типу, но отвечает требованиям к формату JSON, значение, которое iSulad будет использовать по умолчанию — **false**. |
  | --use-decrypted-key=true             | "use-decrypted-key": true                                    | Данный параметр задает, будет или не будет использован незашифрованный частный ключ. Это значение логического типа. Если этому параметру установлено значение **true**, используется незашифрованный частный ключ. Если этому параметру установлено значение **false**, используется зашифрованный частный ключ, то есть требуется двусторонняя аутентификация. | Значение по умолчанию **true** означает, что используется незашифрованный частный ключ.  Примечание: в соответствии с ограничениями библиотеки синтаксического анализа  YAJL JSON, если значение, указанное в конфигурационном файле **/etc/isulad/daemon.json**,  не относится к логическому типу, но отвечает требованиям к формату JSON,  значение, которое iSulad будет использовать по умолчанию — **true**. |
  | --tls                                | "tls":false                                                  | Данный параметр задает, будет или не будет использован TLS. Это значение логического типа. | Этот параметр используется только в режиме **-H tcp://IP:PORT**. Значение по умолчанию **false**. |
  | --tlsverify                          | "tlsverify":false                                            | Данный параметр задает, будет или не будет использован TLS и проверка удаленного доступа. Это значение логического типа. | Этот параметр используется только в режиме **-H tcp://IP:PORT**. |
  | --tlscacert  --tlscert  --tlskey     | "tls-config": {  "CAFile": "/root/.iSulad/ca.pem",  "CertFile": "/root/.iSulad/server-cert.pem",  "KeyFile":"/root/.iSulad/server-key.pem"  } | Конфигурация, связанная с сертификатом TLS.                  | Этот параметр используется только в режиме **-H tcp://IP:PORT**. |
  | --authorization-plugin               | "authorization-plugin": "authz-broker"                       | Плагин для аутентификации полномочий пользователя.           | Поддерживается только **authz-broker**.                      |
  | --cgroup-parent                      | "cgroup-parent": "lxc/mycgroup"                              | Родительский путь к группе cgroup контейнера по умолчанию. Тип значений — строковый. | Задает родительский путь к группе cgroup контейнера. Если на  клиенте указывается **--cgroup-parent**, параметр клиента имеет приоритет.  Примечание: если контейнер A запускается перед контейнером B,  в качестве родительского пути cgroup контейнера B устанавливается путь cgroup  контейнера A. При удалении контейнера необходимо удалить контейнер B, а затем  контейнер A. В противном случае могут остаться некоторые ресурсы cgroup. |
  | --default-ulimits                    | "default-ulimits": {  "nofile": {  "Name": "nofile",  "Hard": 6400,  "Soft": 3200  }  } | Указывает тип задаваемого пользователем ограничения ulimit — мягкое или жесткое ограничение. | Указывает тип ограничиваемых ресурсов, например nofile. Имена  в обоих полях должны быть одинаковыми, то есть nofile. В противном случае  поступает сообщение об ошибке. Значение жесткого ограничения **Hard** должно быть больше или равно значению мягкого ограничения **Soft**. Если значение в  поле **Hard** или **Soft** не установлено,  используется значение по умолчанию **0**. |
  | --websocket-server-listening-port    | "websocket-server-listening-port": 10350                     | Указывает порт прослушивания сервиса потоковой передачи WebSocket CRI. По умолчанию номер порта — **10350**. | Указывает порт прослушивания сервиса потоковой передачи  WebSocket CRI.  Если клиент указывает значение параметра **--websocket-server-listening-port**,  используется указанное значение. Диапазон номеров портов — от 1024 до 49151. |
  
  Пример.
  
  ```
  $ cat /etc/isulad/daemon.json
  {
      "group": "isulad",
      "default-runtime": "lcr",
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
      "use-decrypted-key": true,
      "insecure-skip-verify-enforce": false
  }
  ```
  
  > ![](./public_sys-resources/icon-notice.gif) ПРИМЕЧАНИЕ:  
  Конфигурационный файл по умолчанию **/etc/isulad/daemon.json** приведен только для справки. Настройте его в соответствии с условиями площадки.

### Описание системы хранения

| **Файл**    | **Каталог**          | **Описание**                                                 |
| ----------- | -------------------- | ------------------------------------------------------------ |
| \*          | /etc/default/isulad/ | Хранит конфигурационный файл OCI и файл шаблонов обработчика iSulad. Для конфигурационного файла установлено разрешение **0640**, а на проверку системного мониторинга установлено разрешение **0550**. |
| \*          | /etc/isulad/         | Конфигурационные файлы по умолчанию iSulad и seccomp.        |
| isulad.sock | /var/run/            | Файл канального взаимодействия, который используется для передачи информации между клиентом и iSulad. |
| isulad.pid  | /var/run/            | Файл для хранения PID-файлов iSulad. Также выполняет функцию блокировки файлов, которая предотвращает запуск нескольких экземпляров iSulad. |
| \*          | /run/lxc/            | Файл блокировки, создаваемый во время работы iSulad.         |
| \*          | /var/run/isulad/     | Файл кэш-памяти для обмена данными в реальном времени, который создается во время работы iSulad. |
| \*          | /var/run/isula/      | Файл кэш-памяти для обмена данными в реальном времени, который создается во время работы iSulad. |
| \*          | /var/lib/lcr/        | Временный каталог компонента LCR.                            |
| \*          | /var/lib/isulad/     | Корневой каталог, в котором работает iSulad и который хранит созданную конфигурацию контейнера, путь к журналу по умолчанию, файл базы данных и точку монтирования. **/var/lib/isulad/mnt/**: точка монтирования корневой файловой системы rootfs контейнера. **/var/lib/isulad/engines/lcr/**: каталог для хранения конфигурации контейнера LCR. Каждый контейнер имеет каталог с именем контейнера. |

### Ограничения

- В сценариях, требующих высокой степени параллелизма (одновременный запуск 200 контейнеров), механизм управления памятью Glibc может выделить часть памяти под функцию memory hole и значительно увеличить виртуальную память (например, до 10 ГБ). Эта проблема вызвана ограничением механизма управления памятью Glibc в сценариях с высокой степенью параллелизма, но не утечкой памяти. Таким образом, загрузка памяти не увеличивается бесконечно. Настройкой **MALLOC\_ARENA\_MAX** можно добиться уменьшения ошибок виртуальной памяти и оптимизировать загрузку физической памяти. Однако эта переменная среды приведет к ухудшению производительности параллельно выполняемых задач iSulad. Установите эту переменную среды в соответствии с условиями площадки.
  
  ```
  To balance performance and memory usage, set MALLOC_ARENA_MAX to 4. (The iSulad performance on the ARM64 server is affected by less than 10%.)
  
  Configuration method:
  1. To manually start iSulad, run the export MALLOC_ARENA_MAX=4 command and then start iSulad.
  2. If systemd manages iSulad, you can modify the /etc/sysconfig/iSulad file by adding MALLOC_ARENA_MAX=4.
  ```

- Меры предосторожности при настройке каталога, из которого был запущен демон
  
  Здесь в качестве примера приведен каталог **--root**. Если новым корневым каталогом демона является **/new/path/**, в котором находится определенный файл, и имя каталога или имя файла конфликтует с именем, требуемым iSulad (например, **engines** и **mnt**), возможно изменение исходного каталога или атрибутов файла, включая владельца и разрешения, со стороны iSulad.
  
  Поэтому следует внимательно отнестись к переопределению текущих каталогов и файлов, поскольку это может отразиться на атрибутах. Чтобы избежать изменений атрибутов файлов и проблем безопасности, вызванных конфликтами, рекомендуется указать новый каталог или файл для iSulad.

- Управление файлами журнала
  
  > ![](./public_sys-resources/icon-notice.gif) ПРИМЕЧАНИЕ:  
Взаимодействие функций журналов: журналы, как и iSulad, управляются посредством systemd, и затем передаются в rsyslogd. По умолчанию rsyslog ограничивает скорость записи журнала. Добавьте конфигурационный параметр **$imjournalRatelimitInterval 0** в файл **/etc/rsyslog.conf** и перезапустите службу rsyslogd.

- Ограничения на синтаксический анализ параметров командной строки
  
  При использовании интерфейса командной строки iSulad режим синтаксического анализа параметров немного отличается от режима настройки Docker. Независимо от того, какой флаг командной строки используется — длинный или короткий — в качестве параметра флага используется только первый пробел после флага или строка символов после знака равенства (=), непосредственно связанная с флагом. Подробное описание:
  
  1. При использовании короткого флага каждый символ в строке символов, который идет с дефисом (-), считается коротким флагом. Если есть знак равенства (=), то строка символов, следующая за знаком равенства (=), является параметром короткого флага, стоящего перед знаком равенства (=).
     
     **isula run -du=root busybox** эквивалентно **isula run -du root busybox**,  **isula run -d -u=root busybox** или **isula run -d -u root busybox**. Если используется **isula run -du:root**, то поскольку **-:**  не является допустимым коротким флагом, выдается сообщение об ошибке. Вышеприведенная команда эквивалентна команде **isula run -ud root busybox**. Однако этот метод не рекомендуется, поскольку он может вызвать семантические проблемы.
  
  2. При использовании длинного флага каждый символ в строке символов, который идет с **--**, считается длинным флагом. Если строка символов содержит знак равенства (=), строка символов перед знаком равенства (=) является длинным флагом, а строка символов после знака равенства (=) является параметром.
     
     ```
     isula run --user=root busybox
     ```
     
     или
     
     ```
     isula run --user root busybox
     ```

- После запуска контейнера iSulad пользователи, не имеющие полномочий root, не смогут выполнять команды **isula run -i/-t/-ti** и **isula attach/exec.**

- Для запуска контейнера OCI при подключении к нему iSulad можно использовать только среду выполнения kata-runtime.

### Привязка нескольких портов с помощью демона

#### Описание

Демон может привязать несколько сокетов UNIX или портов TCP и прослушивать эти порты. Клиент через данные порты может взаимодействовать с демоном.

#### Порты

Пользователь может указать один или несколько портов в поле для указания хостов в файле **/etc/isulad/daemon.json** или не указывать хосты.

```
{
    "hosts": [
        "unix:///var/run/isulad.sock",
        "tcp://localhost:5678",
        "tcp://127.0.0.1:6789"
    ]
}
```

Пользователь может настроить порт командой **-H** или **--host** в файле **/etc/sysconfig/iSulad** или не указывать хосты.

```
OPTIONS='-H unix:///var/run/isulad.sock --host tcp://127.0.0.1:6789'
```

Если хосты не будут указаны в файле **daemon.json** и в iSulad, демон будет прослушивать **unix:///var/run/isulad.sock** по умолчанию после запуска.

#### Ограничения

- Пользователь не может указать хост одновременно и в файле **/etc/isulad/daemon.json**, и в файле **/etc/sysconfig/iSuald**. В противном случае возникнет ошибка и iSulad нельзя будет запустить.
  
  ```
  unable to configure the isulad with file /etc/isulad/daemon.json: the following directives are specified both as a flag and in the configuration file: hosts: (from flag: [unix:///var/run/isulad.sock tcp://127.0.0.1:6789], from file: [unix:///var/run/isulad.sock tcp://localhost:5678 tcp://127.0.0.1:6789])
  ```

- Если указанный хост является сокетом UNIX, то сокет должен начинаться с **unix://**, за которым следует допустимый абсолютный путь.

- Если указанный хост является портом TCP, то порт должен начинаться с **tcp://**, за которым следует действительный IP-адрес и номер порта. IP-адрес может быть IP-адресом локального хоста.

- Можно указать максимум 10 действительных портов. Если будет указано более 10 портов, произойдет ошибка и не удастся запустить iSulad.

### Настройка аутентификации TLS и включение удаленного доступа

#### Описание

ISulad разработан в режиме C/S. По умолчанию процесс демона iSulad прослушивает только порт сокета local/var/run/isulad.sock. Поэтому команды для работы с контейнерами можно запускать только на локальном клиенте iSula. Чтобы разрешить удаленный доступ к контейнеру, процесс демона iSulad должен прослушивать порт удаленного доступа с помощью TCP/IP. Однако прослушивание выполняется простой настройкой tcp ip:port. В этом случае узлы с любыми IP-адресами могут связываться с iSulad, запрашивая i**isula -H tcp://**_IP-адрес удаленного сервер_а**:port**, что может вызвать проблемы с безопасностью. Поэтому для удаленного доступа рекомендуется использовать более безопасный режим — протокол защиты транспортного уровня (Transport Layer Security: TLS).

#### Создание сертификата TLS

- Пример генерации незашифрованного секретного ключа и сертификата
  
  ```
  #!/bin/bash
  set -e
  echo -n "Enter pass phrase:"
  read password
  echo -n "Enter public network ip:"
  read publicip
  echo -n "Enter host:"
  read HOST
  
  echo " => Using hostname: $publicip, You MUST connect to iSulad using this host!"
  
  mkdir -p $HOME/.iSulad
  cd $HOME/.iSulad
  rm -rf $HOME/.iSulad/*
  
  echo " => Generating CA key"
  openssl genrsa -passout pass:$password -aes256 -out ca-key.pem 4096
  echo " => Generating CA certificate"
  openssl req -passin pass:$password -new -x509 -days 365 -key ca-key.pem -sha256 -out ca.pem -subj "/C=CN/ST=zhejiang/L=hangzhou/O=Huawei/OU=iSulad/CN=iSulad@huawei.com"
  echo " => Generating server key"
  openssl genrsa -passout pass:$password -out server-key.pem 4096
  echo " => Generating server CSR"
  openssl req -passin pass:$password -subj /CN=$HOST -sha256 -new -key server-key.pem -out server.csr
  echo subjectAltName = DNS:$HOST,IP:$publicip,IP:127.0.0.1 >> extfile.cnf
  echo extendedKeyUsage = serverAuth >> extfile.cnf
  echo " => Signing server CSR with CA"
  openssl x509 -req -passin pass:$password -days 365 -sha256 -in server.csr -CA ca.pem -CAkey ca-key.pem -CAcreateserial -out server-cert.pem -extfile extfile.cnf
  echo " => Generating client key"
  openssl genrsa -passout pass:$password -out key.pem 4096
  echo " => Generating client CSR"
  openssl req -passin pass:$password -subj '/CN=client' -new -key key.pem -out client.csr
  echo " => Creating extended key usage"
  echo extendedKeyUsage = clientAuth > extfile-client.cnf
  echo " => Signing client CSR with CA"
  openssl x509 -req -passin pass:$password -days 365 -sha256 -in client.csr -CA ca.pem -CAkey ca-key.pem -CAcreateserial -out cert.pem -extfile extfile-client.cnf
  rm -v client.csr server.csr extfile.cnf extfile-client.cnf
  chmod -v 0400 ca-key.pem key.pem server-key.pem
  chmod -v 0444 ca.pem server-cert.pem cert.pem
  ```

- Пример генерации зашифрованного секретного ключа и файла запроса сертификата
  
  ```
  #!/bin/bash
  
  echo -n "Enter public network ip:"
  read publicip
  echo -n "Enter pass phrase:"
  read password
  
  # remove certificates from previous execution.
  rm -f *.pem *.srl *.csr *.cnf
  
  
  # generate CA private and public keys
  echo 01 > ca.srl
  openssl genrsa -aes256 -out ca-key.pem -passout pass:$password 2048
  openssl req -subj '/C=CN/ST=zhejiang/L=hangzhou/O=Huawei/OU=iSulad/CN=iSulad@huawei.com' -new -x509 -days $DAYS -passin pass:$password -key ca-key.pem -out ca.pem
  
  # create a server key and certificate signing request (CSR)
  openssl genrsa -aes256 -out server-key.pem -passout pass:$PASS 2048
  openssl req -new -key server-key.pem -out server.csr -passin pass:$password -subj '/CN=iSulad'
  
  echo subjectAltName = DNS:iSulad,IP:${publicip},IP:127.0.0.1 > extfile.cnf
  echo extendedKeyUsage = serverAuth >> extfile.cnf
  # sign the server key with our CA
  openssl x509 -req -days $DAYS -passin pass:$password -in server.csr -CA ca.pem -CAkey ca-key.pem -out server-cert.pem -extfile extfile.cnf
  
  # create a client key and certificate signing request (CSR)
  openssl genrsa -aes256 -out key.pem -passout pass:$password 2048
  openssl req -subj '/CN=client' -new -key key.pem -out client.csr -passin pass:$password
  
  # create an extensions config file and sign
  echo extendedKeyUsage = clientAuth > extfile.cnf
  openssl x509 -req -days 365 -passin pass:$password -in client.csr -CA ca.pem -CAkey ca-key.pem -out cert.pem -extfile extfile.cnf
  
  # remove the passphrase from the client and server key
  openssl rsa -in server-key.pem -out server-key.pem -passin pass:$password
  openssl rsa -in key.pem -out key.pem -passin pass:$password
  
  # remove generated files that are no longer required
  rm -f ca-key.pem ca.srl client.csr extfile.cnf server.csr
  ```

#### API

```
{
    "tls": true,
    "tls-verify": true,
    "tls-config": {
		"CAFile": "/root/.iSulad/ca.pem",
		"CertFile": "/root/.iSulad/server-cert.pem",
		"KeyFile":"/root/.iSulad/server-key.pem"
    }
}
```

#### Ограничения

Сервер поддерживает следующие режимы:

- Режим 1 (с проверкой клиента): tlsverify, tlscacert, tlscert, tlskey
- Режим 2 (без проверки клиента): tls, tlscert, tlskey

Клиент поддерживает следующие режимы:

- Режим 1 (проверяются идентификационные данные на основе сертификата клиента, проверяется сервер на основе указанного CA): tlsverify, tlscacert, tlscert, tlskey
- Режим 2 (с проверкой сервера): tlsverify, tlscacert

Режим 1 используется для сервера, а режим 2 — для клиента, если для связи применяется метод двусторонней аутентификации.

Режим 2 используется для сервера и клиента, если для связи применяется метод односторонней аутентификации.

> ![](./public_sys-resources/icon-notice.gif) ПРИМЕЧАНИЕ:
> 
> - Если для установки используется RPM, конфигурацию сервера можно изменить в файлах **/etc/isulad/daemon.json** и **/etc/sysconfig/iSulad**.
> - Рекомендуется двусторонняя аутентификация, поскольку этот метод безопаснее, чем режим без аутентификации или метод односторонней аутентификации.
> - Журналы компонентов с открытыми исходными кодами GRPC не передаются в iSulad. Для просмотра журналов gRPC установите переменные среды **gRPC\_VERBOSITY** и **gRPC\_TRACE** в соответствии с фактической ситуацией.  


#### Пример

На сервере:

```
 isulad -H=tcp://0.0.0.0:2376 --tlsverify --tlscacert ~/.iSulad/ca.pem --tlscert ~/.iSulad/server-cert.pem --tlskey ~/.iSulad/server-key.pem
```

На клиенте:

```
 isula version -H=tcp://$HOSTIP:2376 --tlsverify --tlscacert ~/.iSulad/ca.pem --tlscert ~/.iSulad/cert.pem --tlskey ~/.iSulad/key.pem
```

### Настройка драйвера хранилища devicemapper

Чтобы использовать драйвер хранилища devicemapper, необходимо настроить устройство thinpool, которому требуется независимое устройство блочного хранения с достаточным свободным пространством. В качестве примера приведено устройство **/dev/xvdf**. Метод настройки:

**1 Настройка thinpool**

2. Остановите службу iSulad.
   
   ```
   # systemctl stop isulad
   ```

3. Создайте том диспетчера логических томов (Logical Volume Manager; LVM) на устройстве блочного хранения.
   
   ```
   # pvcreate /dev/xvdf
   ```

4. Создайте группу томов на основе созданного физического тома.
   
   ```
   # vgcreate isula /dev/xvdf
   Volume group "isula" successfully created:
   ```

5. Создайте два логических тома с именами **thinpool** и **thinpoolmeta**.
   
   ```
   # lvcreate --wipesignatures y -n thinpool isula -l 95%VG
   Logical volume "thinpool" created.
   ```
   
   ```
   # lvcreate --wipesignatures y -n thinpoolmeta isula -l 1%VG
   Logical volume "thinpoolmeta" created.
   ```

6. Конвертируйте два логических тома в том данных пула с динамическим выделением ресурсов (thinpool) и том метаданных, используемых пулом thinpool.
   
   ```
   # lvconvert -y --zero n -c 512K --thinpool isula/thinpool --poolmetadata isula/thinpoolmeta
   
   WARNING: Converting logical volume isula/thinpool and isula/thinpoolmeta to
   thin pool's data and metadata volumes with metadata wiping.
   THIS WILL DESTROY CONTENT OF LOGICAL VOLUME (filesystem etc.)
   Converted isula/thinpool to thin pool.
   ```

  

**2 Изменение конфигурационных файлов iSulad**

3. Если в среде используется iSulad, сначала создайте резервную копию текущих данных.
   
   ```
   # mkdir /var/lib/isulad.bk
   # mv /var/lib/isulad/* /var/lib/isulad.bk
   ```

4. Измените конфигурационные файлы.
   
   Предоставляются два метода настройки. Выберите один в соответствии с условиями площадки.
   
   - Отредактируйте файл **/etc/isulad/daemon.json**, установите для параметра **storage-driver** значение **devicemapper**, а также задайте параметры, имеющие отношение к полю **storage-opts**. Для получения более подробной информации о соответствующих параметрах обратитесь к разделу [Описание параметров](#en-us_topic_0222861454_section1712923715282). Пример конфигурации:
     
     ```
     {
         "storage-driver": "devicemapper"
         "storage-opts": [
     	    "dm.thinpooldev=/dev/mapper/isula-thinpool",
     	    "dm.fs=ext4",
                 "dm.min_free_space=10%"
         ]
     }
     ```
   
   - Также можно явно указать соответствующие параметры запуска iSulad, внеся изменения в файл **/etc/sysconfig/iSulad**. Для получения более подробной информации о соответствующих параметрах обратитесь к разделу [Описание параметров](#en-us_topic_0222861454_section1712923715282). Пример конфигурации:
     
     ```
     OPTIONS="--storage-driver=devicemapper --storage-opt dm.thinpooldev=/dev/mapper/isula-thinpool --storage-opt dm.fs=ext4 --storage-opt dm.min_free_space=10%"
     ```

5. Чтобы настройки вступили в силу, запустите iSulad.
   
   ```
   # systemctl start isulad
   ```

#### Описание параметров

Более подробная информация о параметрах поля storage-opts приведена в [Табл. 1](#en-us_topic_0222861454_table3191161993812).

**Табл. 1** Описание параметров

| Параметр          | Обязательный или необязательный | Описание                                                     |
| ----------------- | ------------------------------- | ------------------------------------------------------------ |
| dm.fs             | Да                              | Тип файловой системы, используемой контейнером. Этот параметр необходимо установить в значение **ext4**, то есть **dm.fs=ext4**. |
| dm.basesize       | Нет                             | Максимальный размер пространства для хранения одного контейнера. В качестве единицы измерения можно указать **k**, **m**, **g**, **t** или **p**. Также для единиц измерения можно использовать прописные буквы, например **dm.basesize=50G**. Этот параметр действителен только во время первой инициализации. |
| dm.mkfsarg        | Нет                             | Указывает дополнительные параметры **mkfs** при создании базового устройства. Пример: **dm.mkfsarg=-O  ^has_journal** |
| dm.mountopt       | Нет                             | Указывает дополнительные параметры **mount** при монтировании контейнера. Пример: **dm.mountopt=nodiscard** |
| dm.thinpooldev    | Нет                             | Параметр задает устройство thinpool, используемое для хранения контейнеров или образов. |
| dm.min_free_space | Нет                             | Минимальный процент оставшегося места на диске. Например, **dm.min_free_space=10%** означает, что такие операции, связанные с хранением, как создание контейнера, не будут выполнены, если останется менее 10% места для хранения. |

#### Меры предосторожности

- Если при конфигурировании devicemapper не будет хватать памяти системы для автоматического увеличения емкости пула thinpool, отключите эту функцию.
  
  Чтобы отключить функцию автоматического увеличения емкости, задайте обоим параметрам **thin\_pool\_autoextend\_threshold** и **thin\_pool\_autoextend\_percent** в файле **/etc/lvm/profile/isula-thinpool.profile** значение **100**.
  
  ```
  activation {   
    thin_pool_autoextend_threshold=100   
    thin_pool_autoextend_percent=100 
  }
  ```

- При использовании devicemapper Ext4 выступает в качестве файловой системы контейнера. К конфигурационным параметрам iSulad необходимо добавить **--storage-opt dm.fs=ext4**.

- Если графическим драйвером (graphdriver) является devicemapper, а файлы метаданных повреждены и не могут быть восстановлены, необходимо вручную восстановить файлы метаданных. Запрещается оперировать метаданными драйвера хранилища devicemapper в демоне Docker напрямую, а также незаконно изменять их.

- Если при использовании LVM-диспетчера devicemapper пул thinpool devicemapper будет поврежден по причине сбоя питания, невозможно будет обеспечить целостность данных или восстановить поврежденный thinpool. Поэтому thinpool необходимо заново скомпоновать.

**Меры предосторожности при переключении пула хранилища devicemapper, когда на iSula включена функция пространства имен пользователей**

- Как правило, во время запуска контейнера путем к файлу метаданных устройств является путь **/var/lib/isulad/devicemapper/metadata/deviceset-metadata**.
- Если используются пространства имен пользователей, то путь к файлу метаданных устройств будет **/var/lib/isulad/**_userNSUID.GID_**/devicemapper/metadata/deviceset-metadata**.
- Если при использовании драйвера хранилища devicemapper контейнер переключается между сценарием пространства имен пользователей и обычным сценарием, необходимо очистить содержимое **BaseDeviceUUID** в соответствующем файле метаданных устройств deviceset-metadata. В сценарии повторной компоновки или увеличения емкости пула thinpool также необходимо очистить содержимое **BaseDeviceUUID** в файле deviceset-metadata. В противном случае не удастся перезапустить службу iSulad.