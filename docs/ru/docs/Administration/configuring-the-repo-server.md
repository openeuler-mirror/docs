# Конфигурирование сервера-репозитория

> ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ:** 
>
> openEuler предоставляет несколько источников репозитория, которые пользователи могут загрузить через Интернет. Для получения подробной информации об источниках репозитория см. раздел [Установка системы](./../Releasenotes/installing-the-os.html). При отсутствии возможности получить источник репозитория openEuler через Интернет, воспользуйтесь предоставляемым сообществом openEuler пакетом ISO-файлов, с помощью которого можно создать источник локального репозитория openEuler. В данном разделе в качестве примера используется файл **openEuler-20.03-LTS-aarch64-dvd.iso**. Измените ISO-файл в соответствии с требованиями.

<!-- TOC -->

- [Конфигурирование сервера-репозитория](#configuring-the-repo-server)
  - [Обзор](#overview)
  - [Создание и обновление источника локального репозитория](#creating-or-updating-a-local-repo-source)
    - [Получение ISO-файла](#obtaining-the-iso-file)
    - [Монтирование ISO-файла для создания источника репозитория](#mounting-an-iso-file-to-create-a-repo-source)
    - [Создание источника локального репозитория](#creating-a-local-repo-source)
    - [Обновление источника репозитория](#updating-the-repo-source)
  - [Развертывание источника удаленного репозитория](#deploying-the-remote-repo-source)
    - [Установка и настройка Nginx](#installing-and-configuring-nginx)
    - [Запуск Nginx](#starting-nginx)
    - [Развертывание источника репозитория](#deploying-the-repo-source)
  - [Использование источника репозитория](#using-the-repo-source)
    - [Настройка репозитория в качестве источника Yum](#configuring-repo-as-the-yum-source)
    - [Приоритет репозитория](#repo-priority)
    - [Команды dnf](#related-commands-of-dnf)

<!-- /TOC -->

## Обзор

Создайте предоставляемый сообществом openEuler файл **openEuler-20.03-LTS-aarch64-dvd.iso** в качестве источника репозитория. Далее приводится описание способа развертывания источника репозитория и предоставления HTTP-сервиса на примере Nginx.

## Создание и обновление источника локального репозитория

Смонтируйте ISO-файл **openEuler-20.03-LTS-aarch64-dvd.iso** для создания и обновления источника репозитория.

### Получение ISO-файла

Скачайте ISO-файл openEuler с веб-сайта:

[https://repo.openeuler.org/openEuler-20.03-LTS/ISO/](https://repo.openeuler.org/openEuler-20.03-LTS/ISO/)

### Монтирование ISO-файла для создания источника репозитория

Чтобы смонтировать ISO-файл, выполните команду mount как пользователь **root**.

Пример:

```
# mount /home/openEuler/openEuler-20.03-LTS-aarch64-dvd.iso /mnt/
```

Смонтированный каталог **mnt**:

```
.
│── boot.catalog
│── docs
│── EFI
│── images
│── Packages
│── repodata
│── TRANS.TBL
└── RPM-GPG-KEY-openEuler
```

Здесь **Packages** означает каталог, в котором хранится пакет RPM, **repodata** означает каталог, в котором хранятся метаданные источника репозитория, а **RPM-GPG-KEY-openEuler** — это открытый ключ для подписи openEuler.

### Создание источника локального репозитория

Чтобы создать источник локального репозитория, скопируйте соответствующие файлы из ISO-пакета в локальный каталог. Пример:

```
# mount /home/openEuler/openEuler-20.03-LTS-aarch64-dvd.iso /mnt/
$ mkdir -p ~/srv/repo/
$ cp -r /mnt/Packages ~/srv/repo/
$ cp -r /mnt/repodata ~/srv/repo/
$ cp -r /mnt/RPM-GPG-KEY-openEuler ~/srv/repo/
```

Каталог локального репозитория:

```
.
│── Packages
│── repodata
└── RPM-GPG-KEY-openEuler
```

**Packages** означает каталог, в котором хранится пакет RPM, **repodata** означает каталог, в котором хранятся метаданные источника репозитория, а **RPM-GPG-KEY-openEuler** — это открытый ключ для подписи openEuler.

### Обновление источника репозитория

Обновить источник репозитория можно одним из следующих способов:

- Использование ISO-файла новой версии для обновления существующего источника репозитория. Метод тот же, что и метод, используемый для создания источника репозитория. Смонтируйте ISO-файл или скопируйте его в локальный каталог.

- Добавьте RPM-пакеты в каталог **Packages** источника репозитория и выполните следующую команду для обновления источника:
  
  ```
  $ createrepo --update --workers=10 ~/srv/repo
  ```

В данной команде параметр --**update** означает обновление, а параметр --**workers** — количество потоков, которые можно настроить.

> ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ:**  
Если в выходных данных команды содержится фраза "createrepo: command not found", установите программное обеспечение **createrepo**, выполнив команду **dnf install createrepo** как пользователь **root**.

## Развертывание источника удаленного репозитория

Установите ОС openEuler и разверните на ней источник репозитория с помощью Nginx.

### Установка и настройка Nginx

1. Загрузите инструмент Nginx и установите его как пользователь **root**.

2. Установив Nginx, сконфигурируйте /etc/nginx/nginx.conf как пользователь **root**.
   
   > ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ:**  
Конфигурация в данном документе приведена только в качестве примера. Сконфигурируйте содержимое в соответствии с требованиями объекта (например, требованиями по усилению безопасности).
   
   ```
   user  nginx;
   worker_processes auto;                             # You are advised to set this parameter to core-1.
   error_log /var/log/nginx/error.log warn;            # log storage location
   pid        /var/run/nginx.pid;
   
   events {
       worker_connections  1024;
   }
   
   http {
       include       /etc/nginx/mime.types;
       default_type  application/octet-stream;
   
       log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                         '$status $body_bytes_sent "$http_referer" '
                         '"$http_user_agent" "$http_x_forwarded_for"';
   
       access_log  /var/log/nginx/access.log  main;
       sendfile        on;
       keepalive_timeout  65;
   
       server {
           listen       80;
    	server_name localhost;                         #Server name (URL)
           client_max_body_size 4G;
    	root /usr/share/nginx/repo;                 #Default service directory
   
           location / {
    		autoindex on;	# Enable the access to lower-layer files in the directory.
               autoindex_exact_size on;
               autoindex_localtime  on; 
           }
   
       }
   
   }
   ```

### Запуск Nginx

1. Чтобы запустить службу Nginx, выполните следующие команды как пользователь **root**:
   
   ```
   # systemctl enable nginx
   # systemctl start nginx
   ```

2. Чтобы удостовериться в успешном запуске Nginx, выполните следующую команду:
   
   ```
   $ systemctl status nginx
   ```
   
   - На [Рис. 1](#en-us_topic_0151920971_fd25e3f1d664b4087ae26631719990a71) показана успешно запущенная служба Nginx.
     
     **Рис. 1** Успешно запущенная служба Nginx<a name="en-us_topic_0151920971_fd25e3f1d664b4087ae26631719990a71"></a>  
![](./figures/the-nginx-service-is-successfully-started.png "the-nginx-service-is-successfully-started")
   
   - Если не удается запустить службу Nginx, просмотрите информацию об ошибках.
   
   ```
   $ systemctl status nginx.service --full
   ```
   
   **Рис. 2** Сбой запуска Nginx<a name="en-us_topic_0151920971_f1f9f3d086e454b9cba29a7cae96a4c54"></a>  
![](./figures/nginx-startup-failure.png "nginx-startup-failure")
   
   В соответствии с [Рис. 2](#en-us_topic_0151920971_f1f9f3d086e454b9cba29a7cae96a4c54) служба Nginx не создана по причине сбоя создания каталога **/var/spool/nginx/tmp/client\_body**. Необходимо вручную создать каталог как пользователь **root**. Методы решения подобных проблем:
   
   ```
   # mkdir -p /var/spool/nginx/tmp/client_body
   # mkdir -p /var/spool/nginx/tmp/proxy
   # mkdir -p /var/spool/nginx/tmp/fastcgi
   # mkdir -p /usr/share/nginx/uwsgi_temp
   # mkdir -p /usr/share/nginx/scgi_temp
   ```

### Развертывание источника репозитория

1. Чтобы создать каталог /usr/share/nginx/repo, указанный в конфигурационном файле Nginx /etc/nginx/nginx.conf, выполните следующую команду как пользователь **root**:
   
   ```
   # mkdir -p /usr/share/nginx/repo
   ```

2. Измените права на доступ к каталогу **/usr/share/nginx/repo**, выполнив следующую команду как пользователь **root**:
   
   ```
   # chmod -R 755 /usr/share/nginx/repo
   ```

3. Чтобы включить порт (порт 80), настроенный для службы Nginx, сконфигурируйте правила межсетевого экрана как пользователь **root**.
   
   ```
   # firewall-cmd --add-port=80/tcp --permanent
   # firewall-cmd --reload
   ```
   
   Убедитесь, что порт 80 включен, действуя как пользователь **root**. Если в выходных данных команды результат **yes**, порт 80 включен.
   
   ```
   # firewall-cmd --query-port=80/tcp
   ```
   
   Также можно включить порт 80, используя утилиту iptables как пользователь **root**.
   
   ```
   # iptables -I INPUT -p tcp --dport 80 -j ACCEPT
   ```

4. Сконфигурировав службу Nginx, по IP-адресу получите доступ к веб-странице (см. [Рис. 3)](#en-us_topic_0151921017_fig1880404110396).
   
   **Рис. 3** Успешно развернутая служба Nginx<a name="en-us_topic_0151921017_fig1880404110396"></a>  
![](./figures/nginx-deployment-succeeded.png "nginx-deployment-succeeded")

5. Добавить источник репозитория к каталогу **/usr/share/nginx/repo** можно одним из следующих способов:
   
   - Как пользователь **root** скопируйте соответствующие файлы в каталог **/usr/share/nginx/repo**.
     
     ```
     # mount /home/openEuler/openEuler-20.03-LTS-aarch64-dvd.iso  /mnt/
     # cp -r /mnt/Packages /usr/share/nginx/repo/
     # cp -r /mnt/repodata /usr/share/nginx/repo/
     # cp -r /mnt/RPM-GPG-KEY-openEuler /usr/share/nginx/repo/
     # chmod -R 755 /usr/share/nginx/repo
     ```
     
     Файл **openEuler-20.03-LTS-aarch64-dvd.iso** сохраняется в каталоге **/home/openEuler**.
   
   - Как пользователь **root** создайте символическую ссылку на источник репозитория в каталоге **/usr/share/nginx/repo**.
     
     ```
     # ln -s /mnt /usr/share/nginx/repo/os
     ```
     
     **/mnt** — это созданный источник репозитория, на него указывает **/usr/share/nginx/repo/os**.

## Использование источника репозитория

Источник репозитория можно сконфигурировать как источник Yum. Yellow dog Updater, Modified (сокращенно Yum)— это инструмент командной строки с открытым кодом для управления пакетами формата RPM. На основе менеджера управления пакетами в системах Red Hat инструмент Yum автоматически загружает RPM-пакет с указанного сервера, устанавливает этот пакет и необходимые зависимости. Yum поддерживает единовременную установку всех зависимых пакетов программного обеспечения.

### Настройка репозитория в качестве источника Yum

Как пользователь **root** сконфигурируйте встроенный репозиторий как источник Yum и создайте конфигурационный файл .repo (расширение .repo является обязательным) в каталоге **/etc/yum.repos.d/**. Настроить источник Yum можно на локальном хосте или HTTP-сервере.

- Настройка локального источника Yum.
  
  Создайте файл **openEuler.repo** в каталоге **/etc/yum.repos.d** и используйте локальный репозиторий в качестве источника Yum. Содержимое файла **openEuler.repo**:
  
  ```
  [base]
  name=base
  baseurl=file:///home/openEuler/srv/repo
  enabled=1
  gpgcheck=1
  gpgkey=file:///home/openEuler/srv/repo/RPM-GPG-KEY-openEuler
  ```
  
  > ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ:**
  > 
  > - repoid в \[repoid] — это идентификатор репозитория для хранения пакетов программного обеспечения. Данные идентификаторы во всех конфигурационных файлах .repo должны быть уникальными. В данном примере repoid имеет значение **base**.
  > - **name** — это строка, описанная в репозитории программного обеспечения.
  > - **baseurl** — адрес репозитория программного обеспечения.
  > - Параметром **enabled** включается репозиторий источника программного обеспечения. Принимаемые значения — **1** или **0**. Значение по умолчанию **1** означает, что репозиторий источника программного обеспечения включен.
  > - Параметром **gpgcheck** включается функция шифрования информации и создания электронных цифровых подписей GNU Privacy Guard (GnuPG, GPG) с целью проверки действительности и безопасности источников пакетов RPM. **1** означает, что проверка GPG включена. **0** означает, что проверка GPG выключена. Если этот параметр не задан, проверка GPG включается по умолчанию.
  > - **gpgkey** — открытый ключ, используемый для проверки подписи.

- Настройка источника Yum для HTTP-сервера
  
  Создайте файл **openEuler.repo** в каталоге**/etc/yum.repos.d**.
  
  - Если источник репозитория HTTP-сервера, развернутого пользователем, используется в качестве источника Yum, содержимое файла **openEuler.repo** выглядит следующим образом:
    
    ```
    [base]
    name=base
    baseurl=http://192.168.139.209/
    enabled=1
    gpgcheck=1
    gpgkey=http://192.168.139.209/RPM-GPG-KEY-openEuler
    ```
    
    > ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ:**  
Адрес 192.168.139.209 использован как пример. Замените его действительным IP-адресом.
  
  - Если источник репозитория openEuler, предоставленный сообществом openEuler, используется как источник Yum, содержимое файла **openEuler.repo** (источник репозитория ОС на базе aarch64 взят в качестве примера) будет следующим:
    
    ```
    [base]
    name=base
    baseurl=http://repo.openeuler.org/openEuler-20.03-LTS/OS/aarch64/
    enabled=1
    gpgcheck=1
    gpgkey=http://repo.openeuler.org/openEuler-20.03-LTS/OS/aarch64/RPM-GPG-KEY-openEuler
    ```

### Приоритет репозитория

При наличии нескольких источников репозитория можно задать приоритет в файле .repo. Если приоритет не будет задан, будет использовано значение по умолчанию 99. Если в несколько источников с одинаковым приоритетом включен один и тот же пакет, устанавливается последняя версия. Значение **1** означает наивысший приоритет, значение **99** — самый низкий приоритет. Например, установите приоритет **openEuler.repo** равным 2.

```
[base]
name=base
baseurl=http://192.168.139.209/
enabled=1
priority=2
gpgcheck=1
gpgkey=http://192.168.139.209/RPM-GPG-KEY-openEuler
```

### Команды dnf

Команды dnf могут автоматически анализировать зависимости между пакетами во время установки и обновления. Обычно используется следующий метод:

```
dnf <command> <packages name>
```

Стандартные команды:

- Установка
  
  Как пользователь **root** выполните следующую команду.
  
  ```
  # dnf install <packages name>
  ```

- Обновление
  
  Как пользователь **root** выполните следующую команду.
  
  ```
  # dnf update <packages name>
  ```

- Возврат к предыдущему состоянию
  
  Как пользователь **root** выполните следующую команду.
  
  ```
  # dnf downgrade <packages name>
  ```

- Проверка обновления
  
  ```
  $ dnf check-update
  ```

- Деинсталляция
  
  Как пользователь **root** выполните следующую команду.
  
  ```
  # dnf remove <packages name>
  ```

- Поиск
  
  ```
  $ dnf search <packages name>
  ```

- Локальная установка
  
  Как пользователь **root** выполните следующую команду.
  
  ```
  # dnf localinstall <absolute path to package name>
  ```

- Просмотр истории
  
  ```
  $ dnf history
  ```

- Очистка кэша
  
  ```
  $ dnf clean all
  ```

- Обновление кэша
  
  ```
  $ dnf makecache
  ```