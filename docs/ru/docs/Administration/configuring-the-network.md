# Настройка сети

\[\[toc]]

## Настройка IP-адреса

### Использование команды nmcli

> ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
> Конфигурация сети, настроенная командой **nmcli**, вступает в силу немедленно и сохраняется после перезапуска системы.

#### О команде nmcli

**nmcli** (NetworkManager Command Line Interface) — это утилита командной строки, предназначенная для настройки сети через NetworkManager. Основной формат **nmcli**:

```
 nmcli [OPTIONS] OBJECT { COMMAND | help }
```

В данной команде в качестве OBJECT может выступать одна из следующих опций:  **general**, **networking**, **radio**, **connection**, **device**.  **OPTIONS** — выбираемые опции, такие как **-t**, **--terse** (для обработки скриптов), **-p**, **--pretty** (для вывода информации в читаемом виде), **-h**, **--help**. Для получения дополнительной информации выполните команду **nmcli help**.

```
$ nmcli help
```

Стандартные команды:

- Чтобы отобразить общий статус NetworkManager, выполните следующую команду:

  ```
  $ nmcli general status
  ```

- Чтобы отобразить все соединения, выполните следующую команду:

  ```
  $ nmcli connection show
  ```

- Чтобы отобразить только текущие активные соединения, добавьте параметр **-a** или **--active** следующим образом:

  ```
  $ nmcli connection show --active
  ```

- Чтобы отобразить устройство, идентифицированное с помощью NetworkManager, и его статус подключения, выполните следующую команду:

  ```
  $ nmcli device status
  ```

- Пример: для запуска или остановки сетевых интерфейсов необходимо выполнить команду **nmcli** как пользователь **root**:

  ```
  # nmcli connection up id enp3s0
  # nmcli device disconnect enp3s0
  ```

#### Управление устройствами

##### Подключение к устройству

Выполните следующую команду, чтобы подключить NetworkManager к соответствующему сетевому устройству. Найдите корректную конфигурацию соединения и активируйте ее.

```
$nmcli device connect "$IFNAME"   
```

> Если соответствующая конфигурация соединения не существует, NetworkManager создает и активирует конфигурационный файл с настройками по умолчанию.

##### Отключение от устройства

Выполните следующую команду, чтобы отключить NetworkManager от сетевого устройства и не допустить автоматическую активацию устройства.

```
$nmcli device disconnect "$IFNAME"    
```

#### Настройка сетевых соединений

Выполните следующую команду, чтобы отобразить все доступные сетевые соединения:

```
$ nmcli con show


NAME    UUID                                  TYPE      DEVICE
enp4s0  5afce939-400e-42fd-91ee-55ff5b65deab  ethernet  enp4s0
enp3s0  c88d7b69-f529-35ca-81ab-aa729ac542fd  ethernet  enp3s0
virbr0  ba552da6-f014-49e3-91fa-ec9c388864fa  bridge    virbr0
```

> ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
> В командном выводе **NAME** — идентификатор соединения (имя).

После добавления сетевого соединения генерируется соответствующий конфигурационный файл и привязывается к соответствующему устройству. Чтобы получить информацию о доступных устройствах, выполните следующую команду:

```
$ nmcli dev status

DEVICE      TYPE      STATE      CONNECTION
enp3s0      ethernet  connected  enp3s0
enp4s0      ethernet  connected  enp4s0
virbr0      bridge    connected  virbr0
lo          loopback  unmanaged  --
virbr0-nic  tun       unmanaged  --
```

##### Настройка динамических IP-соединений

###### Настройка IP-адресов

Если для выделения ресурсов сети используется DHCP, выполните следующую команду, чтобы добавить конфигурационный файл данной сети:

```
nmcli connection add type ethernet con-name connection-name ifname interface-name
```

В данном примере создается конфигурационный файл с настройками динамического соединения под именем **net-test** выполнением следующей команды от имени пользователя **root**:

```
# nmcli connection add type ethernet con-name net-test ifname enp3s0
Connection 'net-test' (a771baa0-5064-4296-ac40-5dc8973967ab) successfully added.
```

NetworkManager устанавливает параметру **connection.autoconnect** значение **yes** и сохраняет настройки в файле **/etc/sysconfig/network-scripts/ifcfg-net-test**. В файле **/etc/sysconfig/network-scripts/ifcfg-net-test**  параметр **ONBOOT** имеет значение **yes**.

###### Активация соединения и проверка статуса подключения устройства

Чтобы активировать сетевое соединение, выполните следующую команду как пользователь **root**:

```
# nmcli con up net-test 
Connection successfully activated (D-Bus active path:/org/freedesktop/NetworkManager/ActiveConnection/5)
```

Проверьте статус подключения устройства следующей командой:

```
$ nmcli device status

DEVICE      TYPE      STATE      CONNECTION
enp4s0      ethernet  connected  enp4s0
enp3s0      ethernet  connected  net-test
virbr0      bridge    connected  virbr0
lo          loopback  unmanaged  --
virbr0-nic  tun       unmanaged  --
```

##### Настройка статических IP-соединений

###### Настройка IP-адресов

Чтобы добавить статическое сетевое соединение IPv4, выполните следующую команду:

```
nmcli connection add type ethernet con-name connection-name ifname interface-name ip4 address gw4 address
```

> ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
> Чтобы добавить IPv6-адрес и соответствующую информацию шлюза, используйте параметры **ip6** и **gw6**.

В данном примере создается конфигурационный файл с настройками статического соединения под именем **net-static** выполнением следующей команды от имени пользователя **root**:

```
# nmcli con add type ethernet con-name net-static ifname enp3s0 ip4 192.168.0.10/24 gw4 192.168.0.254
```

Также для данного устройства можно указать IPv6-адрес и шлюз. Пример:

```
# nmcli con add type ethernet con-name test-lab ifname enp3s0 ip4 192.168.0.10/24 gw4 192.168.0.254 ip6 abbe::**** gw6 2001:***::*
Connection 'net-static' (63aa2036-8665-f54d-9a92-c3035bad03f7) successfully added.
```

NetworkManager устанавливает внутреннему параметру **ipv4.method** значение **manual**, **connect.autoconnect** — значение **yes** и вносит настройки в файл **/etc/sysconfig/network-scripts/ifcfg-my-office**. В данном файле параметр **BOOTPROTO** имеет значение **none**, а **ONBOOT** — значение **yes**.

Чтобы настроить IPv4-адреса для двух серверов DNS, выполните следующую команду как пользователь с правами **root**.

```
# nmcli con mod net-static ipv4.dns "*.*.*.* *.*.*.*"
```

Чтобы настроить IPv6-адреса для двух серверов DNS, выполните следующую команду как пользователь с правами **root**.

```
# nmcli con mod net-static ipv6.dns "2001:4860:4860::**** 2001:4860:4860::****"
```

###### Активация соединения и проверка статуса подключения устройства

Чтобы активировать сетевое соединение, выполните следующую команду как пользователь **root**:

```
# nmcli con up net-static ifname enp3s0
Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/6)
```

Проверьте статус подключения устройства следующей командой:

```
$ nmcli device status

DEVICE      TYPE      STATE      CONNECTION
enp4s0      ethernet  connected  enp4s0
enp3s0      ethernet  connected  net-static
virbr0      bridge    connected  virbr0
lo          loopback  unmanaged  --
virbr0-nic  tun       unmanaged  --
```

Выполните следующую команду, чтобы просмотреть информацию о соединении (с опциями **-p** и 
**--pretty** для добавления заголовка и сегмента в командный вывод):

```
$ nmcli -p con show net-static 
===============================================================================
Connection profile details (net-static )
===============================================================================
connection.id:                          net-static
connection.uuid:                        b9f18801-6084-4aee-af28-c8f0598ff5e1
connection.stable-id:                   --
connection.type:                        802-3-ethernet
connection.interface-name:              enp3s0
connection.autoconnect:                 yes
connection.autoconnect-priority:        0
connection.autoconnect-retries:         -1 (default)
connection.multi-connect:               0 (default)
connection.auth-retries:                -1
connection.timestamp:                   1578988781
connection.read-only:                   no
connection.permissions:                 --
connection.zone:                        --
connection.master:                      --
connection.slave-type:                  --
connection.autoconnect-slaves:          -1 (default)
connection.secondaries:                 --
connection.gateway-ping-timeout:        0
connection.metered:                     unknown
connection.lldp:                        default
connection.mdns:                        -1 (default)
connection.llmnr:                       -1 (default)
```

##### Добавление соединения Wi-Fi

Соединение Wi-Fi добавляется одним из следующих способов:

**Способ 1. Подключение к сети Wi-Fi с помощью сетевого порта.**

Подключитесь к сети Wi-Fi по имени SSID или BSSID. Выполните следующую команду, чтобы найти подходящее соединение или создать соединение, а затем активировать его на устройстве.

```
$ nmcli device wifi connect "$SSID" password "$PASSWORD" ifname "$IFNAME"  
$ nmcli --ask device wifi connect "$SSID" 
```

**Способ 2. Подключение к сети Wi-Fi с помощью конфигурационного файла.**

1\. Проверьте наличие доступных точек доступа Wi-Fi следующей командой:

```
$ nmcli dev wifi list
```

2\. Сгенерируйте конфигурацию статического IP-адреса, с помощью которого DNS будет автоматически выделять соединения Wi-Fi, следующей командой:

```
$ nmcli con add con-name Wifi ifname wlan0 type wifi ssid MyWifi ip4 192.168.100.101/24 gw4 192.168.100.1
```

3\. Установите пароль WPA2, например, **answer**, следующей командой:

```
$ nmcli con modify Wifi wifi-sec.key-mgmt wpa-psk
$ nmcli con modify Wifi wifi-sec.psk answer
```

4\. Измените статус Wi-Fi следующей командой:

```
$ nmcli radio wifi [ on | off ]
```

##### Изменение атрибутов

Установите атрибут, например, **mtu**, следующей командой:

```
$ nmcli connection show id 'Wifi ' | grep mtu
802-11-wireless.mtu: auto
```

Выполните следующую команду, чтобы изменить атрибут.

```
$ nmcli connection modify id 'Wifi ' 802-11-wireless.mtu 1350
```

Выполните следующую команду, чтобы подтвердить изменение.

```
$ nmcli connection show id 'Wifi ' | grep mtu
802-11-wireless.mtu: 1350
```

#### Настройка статического маршрута

- Настройте статический маршрут для сетевого соединения командой **nmcli**:

  ```
  $ nmcli connection modify enp3s0 +ipv4.routes "192.168.122.0/24 10.10.10.1"
  ```

- Выполните следующую команду для настройки статического маршрута с помощью редактора:

  ```
  $ nmcli con edit type ethernet con-name enp3s0
  ===| nmcli interactive connection editor |===
  Adding a new '802-3-ethernet' connection
  Type 'help' or '?' for available commands.
  Type 'describe [<setting>.<prop>]' for detailed property description.
  You may edit the following settings: connection, 802-3-ethernet (ethernet), 802-1x, ipv4, ipv6, dcb
  nmcli> set ipv4.routes 192.168.122.0/24 10.10.10.1
  nmcli>
  nmcli> save persistent
  Saving the connection with 'autoconnect=yes'. That might result in an immediate activation of the connection.
  Do you still want to save? [yes] yes
  Connection 'enp3s0' (1464ddb4-102a-4e79-874a-0a42e15cc3c0) successfully saved.
  nmcli> quit
  ```

### Использование команды **ip**

> ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
> Конфигурация сети, настроенная командой **ip**, вступает в силу немедленно, но не сохраняется после перезапуска системы.

#### Настройка IP-адресов

Чтобы настроить IP-адрес для интерфейса, выполните команду **ip**. Формат команды (_interface-name_ означает имя NIC):

```
ip addr [ add | del ] address dev interface-name
```

##### Настройка статического IP-адреса

Чтобы настроить IP-адрес, выполните следующую команду как пользователь **root**:

```
# ip address add 192.168.0.10/24 dev enp3s0
```

Результат настройки можно проверить выполнением следующей команды от имени пользователя **root**:

```
# ip addr show dev enp3s0
2: enp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 52:54:00:aa:ad:4a brd ff:ff:ff:ff:ff:ff
    inet 192.168.202.248/16 brd 192.168.255.255 scope global dynamic noprefixroute enp3s0
       valid_lft 9547sec preferred_lft 9547sec
    inet 192.168.0.10/24 scope global enp3s0
       valid_lft forever preferred_lft forever
    inet6 fe80::32e8:cc22:9db2:f4d4/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
```

##### Настройка нескольких IP-адресов

Команда **ip** может использоваться для выделения одному интерфейсу нескольких IP-адресов. Для этого необходимо выполнить команду **ip** несколько раз от имени пользователя **root**. Пример:

```
# ip address add 192.168.2.223/24 dev enp4s0
# ip address add 192.168.4.223/24 dev enp4s0
# ip addr

3: enp4s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 52:54:00:aa:da:e2 brd ff:ff:ff:ff:ff:ff
    inet 192.168.203.12/16 brd 192.168.255.255 scope global dynamic noprefixroute enp4s0
       valid_lft 8389sec preferred_lft 8389sec
    inet 192.168.2.223/24 scope global enp4s0
       valid_lft forever preferred_lft forever
    inet 192.168.4.223/24 scope global enp4s0
       valid_lft forever preferred_lft forever
    inet6 fe80::1eef:5e24:4b67:f07f/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
```

#### Настройка статического маршрута

Чтобы добавить статический маршрут в таблицу маршрутизации, выполните команду **ip route add**. Чтобы удалить маршрут, выполните команду **ip route del**. Далее приведен общий формат команды **ip route**:

```
ip route [ add | del | change | append | replace ] destination-address
```

Вывод содержимого текущей таблицы IP-маршрутизации осуществляется командой **ip route**, выполняемой от имени пользователя **root**. Пример:

```
# ip route

default via 192.168.0.1 dev enp3s0 proto dhcp metric 100
default via 192.168.0.1 dev enp4s0 proto dhcp metric 101
192.168.0.0/16 dev enp3s0 proto kernel scope link src 192.168.202.248 metric 100
192.168.0.0/16 dev enp4s0 proto kernel scope link src 192.168.203.12 metric 101
192.168.122.0/24 dev virbr0 proto kernel scope link src 192.168.122.1 linkdown
```

Чтобы добавить статический маршрут к адресу хоста, выполните следующую команду как пользователь **root**:

```
ip route add 192.168.2.1 via 10.0.0.1 [dev interface-name]
```

В данной команде **192.168.2.1** — это IP-адрес в десятичном представлении, **10.0.0.1** — узел следующего перехода, а *interface-name* — имя интерфейса для перехода на узел следующего перехода.

Чтобы добавить статический маршрут к сети, то есть IP-адрес из определенного диапазона, выполните следующую команду как пользователь **root**:

```
ip route add 192.168.2.0/24 via 10.0.0.1 [dev interface-name]
```

В данной команде **192.168.2.1** — IP-адрес целевой сети, *10.0.0.1* — префикс сети, а *interface-name* — имя NIC.

### Настройка сети через файл ifcfg

> ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
> Настройки сети, сконфигурированные в файле **ifcfg**, не вступают в силу немедленно. Чтобы настройки вступили в силу, необходимо перезапустить сетевую службу, выполнив команду **systemctl reload NetworkManager** как пользователь **root**.

#### Настройка статической сети

Далее на примере сетевого интерфейса **enp4s0** описана процедура настройки статической сети путем изменения файла **ifcfg,** выполняемого от имени пользователя **root**. Файл **ifcfg-enp4s0** генерируется в каталоге **/etc/sysconfig/network-scripts/**. Измените следующие параметры в файле:

```
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=none
IPADDR=192.168.0.10
PREFIX=24
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=enp4s0static
UUID=08c3a30e-c5e2-4d7b-831f-26c3cdc29293
DEVICE=enp4s0
ONBOOT=yes
```

#### Настройка динамической сети

Далее на примере сетевого интерфейса **em1** описана процедура настройки динамической сети путем изменения файла **ifcfg**. Файл **ifcfg-em1** генерируется в каталоге **/etc/sysconfig/network-scripts/**. Измените следующие параметры в файле:

```
DEVICE=em1
BOOTPROTO=dhcp
ONBOOT=yes
```

Чтобы настроить интерфейс для отправки различных имен хостов на сервер DHCP, добавьте в файл **ifcfg** следующее содержимое:

```
DHCP_HOSTNAME=hostname
```

Чтобы настроить интерфейс для игнорирования маршрутов, отправляемых сервером DHCP, в целях запрета обновления сетевыми службами файла /etc/resolv.conf, полученного от DHCP-сервера, добавьте в файл **ifcfg** следующее содержимое:

```
PEERDNS=no
```

Чтобы настроить интерфейс для использования определенного DNS-сервера, установите параметру PEERDNS значение **no** и добавьте в файл **ifcfg** следующее содержимое:

```
DNS1=ip-address
DNS2=ip-address
```

**ip-address** — это IP-адрес DNS-сервера. С помощью указанного DNS-сервера сетевая служба сможет обновлять файл **/etc/resolv.conf**.

#### Настройка шлюза по умолчанию

При определении шлюза по умолчанию необходимо выполнить синтаксический анализ файла **/etc/sysconfig/network**, а затем файла **ifcfg** и далее использовать последнее считанное значение **GATEWAY** как маршрут по умолчанию в таблице маршрутизации.

Когда для управления хостами в динамической сетевой среде используется NetworkManager, рекомендуется настроить шлюз по умолчанию для назначения DHCP.

## Настройка имени хоста

### Введение

Существует три типа имен хостов:  **static**, **transient**, **pretty**.

- **static**: статическое имя хоста, которое могут задавать пользователи, сохраняя его в файле **/etc/hostname**.
- **transient**: динамическое имя хоста, которое поддерживается ядром. В качестве первоначального значения используется статическое имя хоста. Значение по умолчанию — **localhost**. Значение можно изменять в процессе работы сервера DHCP или mDNS.
- **pretty**: гибкое имя хоста, которое можно настроить в любом формате (включая специальные символы и пробелы). На статические и динамические имена хостов накладываются общие ограничения, принятые для имен домена.

> ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
> Статические и динамические имена хостов могут содержать только буквы (a–z и A–Z), цифры (0–9), дефисы (-), подчеркивания (\_) и точки (.). Имена хостов не могут начинаться или заканчиваться точкой (.) или содержать подряд две точки (..). Имя хоста может включать максимум 64 символа.

### Настройка имени хоста командой **hostnamectl**

#### Просмотр всех имен хоста

Проверьте текущее имя хоста следующей командой:

```
$ hostnamectl status
```

> ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
> Если в команде не задан ни один параметр, по умолчанию используется параметр **status**.

#### Настройка имен хостов любого типа

Чтобы настроить имена хостов любого типа, выполните следующую команду как пользователь **root**:

```
# hostnamectl set-hostname name
```

#### Настройка имени хоста определенного типа

Чтобы настроить имя хоста определенного типа, выполните следующую команду как пользователь **root**:

```
# hostnamectl set-hostname name [option...]
```

Здесь можно указать один из параметров **--pretty**, **--static**, **--transient** или несколько.

Если вместе с параметром **--static** или **--transient** используется -**-pretty**, имена хостов статического или динамического типа упрощаются до гибкого типа путем замены пробелов дефисами (-) и удалением специальных символов.

Настраивая имя хоста с типом **pretty**, используйте кавычки, если имя хоста содержит пробелы или одиночные кавычки, или апострофы. Пример:

```
# hostnamectl set-hostname "Stephen's notebook" --pretty
```

#### Сброс типа имени хоста

Чтобы сбросить тип имени хоста и восстановить его формат по умолчанию, выполните следующую команду как пользователь **root**:

```
# hostnamectl set-hostname "" [option...]
```

В данной команде **""** — это пустая строка, а в качестве _option_ можно указать один из параметров 
**--pretty**,  **--static**, **--transient** или несколько.



#### Удаленное изменение имени хоста

Чтобы изменить имя хоста в удаленной системе, выполните команду **hostnamectl** как пользователь **root** с параметром **-H** или **--host**.

```
# hostnamectl set-hostname -H [username]@hostname new_hostname
```

В данной команде *hostname* означает имя удаленного хоста, которое требуется изменить, *username* — имя, определяемое пользователем, а *new\_hostname* — новое имя хоста.  Команда **hostnamectl** используется для подключения к удаленной системе через SSH.

### Настройка имени хоста командой **nmcli**

Чтобы запросить статическое имя хоста, выполните следующую команду:

```
$ nmcli general hostname
```

Чтобы присвоить хосту с именем статического типа имя **host-server**, выполните следующую команду как пользователь **root**:

```
# nmcli general hostname host-server
```

Чтобы система смогла обнаружить изменение в имени хоста статического типа, перезапустите службу именования хостов, выполнив следующую команду как пользователь **root**:

```
# systemctl restart systemd-hostnamed
```

## Настройка объединения сетевых интерфейсов

### Выполнение команды **nmcli**

- Чтобы создать объединяющую связь с именем **mybond0**, выполните следующую команду:

  ```
  $ nmcli con add type bond con-name mybond0 ifname mybond0 mode active-backup
  ```

- Чтобы добавить ведомый (slave) интерфейс, выполните следующую команду:

  ```
  $ nmcli con add type bond-slave ifname enp3s0 master mybond0
  ```

  Для добавления другого ведомого интерфейса повторите предыдущую команду, указав новое имя интерфейса:

  ```
  $ nmcli con add type bond-slave ifname enp4s0 master mybond0
  Connection 'bond-slave-enp4s0' (05e56afc-b953-41a9-b3f9-0791eb49f7d3) successfully added.
  ```

- Чтобы активировать объединяющую связь, необходимо сначала активировать ведомый интерфейс следующей командой:

  ```
  $ nmcli con up bond-slave-enp3s0
  Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/14)
  ```

  ```
  $ nmcli con up bond-slave-enp4s0
  Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/15)
  ```

  Далее выполните следующую команду, чтобы активировать объединяющую связь.

  ```
  $ nmcli con up mybond0
  Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/16)
  ```

### Настройка объединения сетевых интерфейсов с использованием командной строки

#### Проверка установки модуля ядра, отвечающего за объединение интерфейсов

Модуль ядра, отвечающий за объединение интерфейсов (bonding kernel module), загружается по умолчанию. Чтобы загрузить этот модуль, выполните следующую команду как пользователь **root**:

```
# modprobe --first-time bonding
```

Чтобы вывести информацию о модуле, выполните следующую команду как пользователь **root**.

```
# modinfo bonding
```

Для получения сведений о других командах выполните команду **modprobe --help** как пользователь **root**.

#### Создание интерфейса объединения каналов

Для создания интерфейса объединения (bonding) каналов можно создать файл с именем **ifcfg-bondN** в каталоге **/etc/sysconfig/network-scripts/** от имени пользователя **root** (заменив N фактическим номером интерфейса, например, 0).

Запишите соответствующее содержимое в конфигурационный файл в соответствии с типом интерфейса, который необходимо присоединить, например, сетевой интерфейс. Пример конфигурационного файла интерфейса:

```
DEVICE=bond0
NAME=bond0
TYPE=Bond
BONDING_MASTER=yes
IPADDR=192.168.1.1
PREFIX=24
ONBOOT=yes
BOOTPROTO=none
BONDING_OPTS="bonding parameters separated by spaces"
```

#### Создание ведомого интерфейса

После создания интерфейса объединения каналов необходимо добавить инструкции **MASTER** и **SLAVE** в конфигурационный файл ведомого (slave) интерфейса.

Например, для объединения двух сетевых интерфейсов enp3s0 и enp4s0 в режиме канала конфигурационные файлы будут выглядеть следующим образом:

```
TYPE=Ethernet
NAME=bond-slave-enp3s0
UUID=3b7601d1-b373-4fdf-a996-9d267d1cac40
DEVICE=enp3s0
ONBOOT=yes
MASTER=bond0
SLAVE=yes
```

```
TYPE=Ethernet
NAME=bond-slave-enp4s0
UUID=00f0482c-824f-478f-9479-abf947f01c4a
DEVICE=enp4s0
ONBOOT=yes
MASTER=bond0
SLAVE=yes
```

#### Активация функции объединения каналов

Чтобы активировать функцию объединения каналов, необходимо включить все ведомые интерфейсы. Как пользователь **root** выполните следующую команду:

```
# ifup enp3s0
Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/7)
```

```
# ifup enp4s0
Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/8)
```

> ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
> Если интерфейс находится в состоянии **up**, выполните команду **ifdown** *enp3s0*, чтобы изменить состояние на **down**. В команде *enp3s0* означает фактическое имя интерфейса NIC.

Далее включите все ведомые интерфейсы для включения функции объединения (не устанавливайте их в состояние **Down**).

Чтобы служба NetworkManager смогла определить изменения, внесенные системой, после каждого изменения выполните следующую команду как пользователь **root**:

```
# nmcli con load /etc/sysconfig/network-scripts/ifcfg-device
```

Для проверки статуса присоединенного интерфейса выполните следующую команду как пользователь с правами **root**.

```
# ip link show

1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: enp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
    link/ether 52:54:00:aa:ad:4a brd ff:ff:ff:ff:ff:ff
3: enp4s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
    link/ether 52:54:00:aa:da:e2 brd ff:ff:ff:ff:ff:ff
4: virbr0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN mode DEFAULT group default qlen 1000
    link/ether 86:a1:10:fb:ef:07 brd ff:ff:ff:ff:ff:ff
5: virbr0-nic: <BROADCAST,MULTICAST> mtu 1500 qdisc fq_codel master virbr0 state DOWN mode DEFAULT group default qlen 1000
    link/ether 52:54:00:29:35:4c brd ff:ff:ff:ff:ff:ff
```

#### Создание нескольких объединяющих связей

Система создает интерфейс объединения каналов для каждой объединяющей связи, включая инструкцию BONDING\_OPTS. Этот метод настройки позволяет использовать разные конфигурации нескольким объединенным устройствам. Выполните следующие операции для создания нескольких интерфейсов объединения каналов:

- Создайте несколько файлов **ifcfg-bondN**, содержащих инструкцию **BONDING\_OPTS**, чтобы сетевые скрипты создали требуемое число интерфейсов объединения каналов.
- Создайте новый или отредактируйте существующий конфигурационный файл интерфейса, который необходимо присоединить, и добавьте инструкцию **SLAVE**.
- С помощью инструкции **MASTER** выполняется привязка интерфейса, который необходимо присоединить, то есть ведомого интерфейса, к интерфейсу объединения каналов.

Пример конфигурационного файла YAML интерфейса объединения каналов:

```
DEVICE=bondN
NAME=bondN
TYPE=Bond
BONDING_MASTER=yes
IPADDR=192.168.1.1
PREFIX=24
ONBOOT=yes
BOOTPROTO=none
BONDING_OPTS="bonding parameters separated by spaces"
```

В этом примере замените N номером присоединяемого интерфейса. Например, для создания двух интерфейсов необходимо создать два конфигурационных файла **ifcfg-bond0** и **ifcfg-bond1** с корректными IP-адресами.

## Отличия IPv6 от IPv4

### Ограничения

- chrony поддерживает глобальные адреса, но не поддерживает адреса сети, которые предназначены только для коммуникаций в пределах одного сегмента местной сети (link-local address).
- Firefox поддерживает доступ к глобальному адресу через HTTP или HTTPS, но не поддерживает доступ к адресу link-local.

### Описание конфигурации

#### Настройка MTU устройства интерфейса

##### Обзор

В сценарии IPv6 в качестве значения PMTU текущего канала используется минимальное значение MTU всего маршрута. На основе данного значения PMTU источник определяет необходимость фрагментации пакетов. Остальным устройствам на всем маршруте фрагментировать пакеты не требуется. Это снижает нагрузку промежуточных устройств маршрутизации. Минимальное значение IPv6 PMTU — 1280.

##### Настройка MTU устройства интерфейса

Если MTU интерфейса, для которого сконфигурирован адрес IPv6, задано значение меньше **1280** (минимальное значение IPv6 PMTU), адрес IPv6 интерфейса будет удален, и его нельзя будет добавить снова. Поэтому в сценариях IPv6 значение MTU устройства интерфейса должно быть не меньше 1280. Чтобы просмотреть подробную информацию, выполните следующие команды как пользователь **root**:

```
# ip addr show enp3s0
3: enp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 52:54:00:62:xx:xx brd ff:ff:ff:ff:xx:xx
    inet 10.41.125.236/16 brd 10.41.255.255 scope global noprefixroute dynamic enp3s0
       valid_lft 38663sec preferred_lft 38663sec
    inet6 2001:222::2/64 scope global
       valid_lft forever preferred_lft forever
```

```
# ip link set dev enp3s0 mtu 1200
# ip addr show enp3s0
3: enp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1200 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 52:54:00:62:xx:xx brd ff:ff:ff:ff:xx:xx
    inet 10.41.125.236/16 brd 10.41.255.255 scope global noprefixroute dynamic enp3s0
       valid_lft 38642sec preferred_lft 38642sec
```

```
# ip addr add 2001:222::2/64 dev enp3s0
RTNETLINK answers: No buffer space available
```

```
# ip link set dev enp3s0 mtu 1500
# ip addr show enp3s0
3: enp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 52:54:00:62:xx:xx brd ff:ff:ff:ff:xx:xx
    inet 10.41.125.236/16 brd 10.41.255.255 scope global noprefixroute dynamic enp3s0
       valid_lft 38538sec preferred_lft 38538sec
```

```
# ip addr add 2001:222::2/64 dev enp3s0
# ip addr show enp3s0
3: enp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 52:54:00:62:xx:xx brd ff:ff:ff:ff:xx:xx
    inet 10.41.125.236/16 brd 10.41.255.255 scope global noprefixroute dynamic enp3s0
       valid_lft 38531sec preferred_lft 38531sec
    inet6 2001:222::2/64 scope global
       valid_lft forever preferred_lft forever
```

#### Автоматическая настройка адреса IPv6 с отслеживанием состояния

##### Обзор

Оба адреса — IPv6 и IPv4 — можно получить через DHCP от имени пользователя **root**. Используются следующие методы настройки адреса IPv6: автоматическая настройка без отслеживания состояния и автоматическая настройка с отслеживанием состояния.

- Автоматическая настройка без отслеживания состояния

  Для управления не требуется сервер DHCP. Устройство получает сетевой префикс в соответствии с процессом анонсирования маршрута маршрутизатором (Router Advertisement; RA), или же префиксу адреса link-local присваивается фиксированное значение fe80::. Идентификатор интерфейса автоматически получают на основе значения IPV6\_ADDR\_GEN\_MODE в файле ifcfg.

  1. Если значением IPv6\_ADDR\_GEN\_MODE является stable-privacy, устройство определяет случайный идентификатор интерфейса на основе информации об устройстве и сетевой среде.
  2. Если значением IPv6\_ADDR\_GEN\_MODE является EUI64, устройство определяет идентификатор интерфейса на основе MAC-адреса устройства.

- Автоматическая настройка с отслеживанием состояния: сервер DHCP управляет адресами IPv6 и арендует их на сервере DHCPv6 по протоколу DHCPv6.

  При автоматической настройке с отслеживанием состояния DHCPv6 может классифицировать клиенты по классам поставщиков, заданным на клиентах, и назначать разным типам клиентов адреса IPv6 из разных сегментов. В сценариях с адресами IPv4 клиент может настроить значение поля vendor-class-identifier с помощью опции -V в команде dhclient. Сервер DHCP классифицирует клиентов по значению данного поля в конфигурационном файле. Если в сценариях с адресами IPv6 для классификации клиентов используется такой же метод, настройка данной классификации не вступает в силу.

  ```
  dhclient -6 <interface> -V <vendor-class-identifier string> <interface>
  ```

  Это объясняется значительным отличием DHCPv6 от DHCP. Значение поля vendor-class-option в DHCPv6 заменяет значение поля vendor-class-identifier в DHCP. Однако опции -V в команде dhclient нельзя задать значение поля vendor-class-option.

##### Присвоение класса поставщика для команды dhclient при автоматической настройке адреса IPv6 с отслеживанием состояния

- Класс поставщика добавьте в клиенте с помощью конфигурационного файла.

  Конфигурационный файл клиента (/etc/dhcp/dhclient6.conf): место хранения файла можно настроить. Конфигурационный файл необходимо указать с помощью опции -cf команды dhclient.

  ```
  option dhcp6.vendor-class code 16 = {integer 32, integer 16, string};
  interface "enp3s0" {
          send dhcp6.vendor-class <Enterprise-ID number> <vendor class string length> <vendor class string>;
  }
  ```

  > ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:
  >
  > - \<Enterprise-ID number>: 32-значное целое число, которое задает идентификатор предприятия. Предприятие регистрируется через IANA.
  > - \<vendor class string length>: 16-значное число, указывающее длину строки класса поставщика.
  > - \<vendor class string>: строка символов класса поставщика, который необходимо задать, например HWHW.

  На клиенте:

  ```
  dhclient -6 <interface> -cf /etc/dhcp/dhclient6.conf
  ```

- Конфигурационный файл сервера DHCPv6 (/etc/dhcp/dhcpd6.conf) необходимо указать с помощью опции -cf команды dhcpd.

  ```
  option dhcp6.vendor-class code 16 = {integer 32, integer 16, string};
  subnet6 fc00:4:12:ffff::/64 {
          class "hw" {
                  match if substring ( option dhcp6.vendor-class, 6, 10 ) = "HWHW";
          }
          pool6 {
                  allow members of "hw";
                  range6 fc00:4:12:ffff::ff10 fc00:4:12:ffff::ff20;
          }
          pool6 {
                  allow unknown clients;
                  range6 fc00:4:12:ffff::100 fc00:4:12:ffff::120;
          }
  }
  ```

  > ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
  > Начальная позиция подстроки (опция dhcp6.vendor-class, 6, 10) — 6, поскольку подстрока содержит четыре байта \<Enterprise-ID number> и два байта \<string length>. Конечная позиция подстроки — 6+ \<vendor class string length>. В этом примере строка класса поставщика — HWHW, а длина строки — 4. Поэтому конечной позицией подстроки будет 6 + 4 = 10. Задайте \<vendor class string> и \<vendor class string length> в соответствии с фактическими потребностями.

  На сервере:

  ```
  dhcpd -6 -cf /etc/dhcp/dhcpd6.conf <interface>
  ```

#### Ядро с поддержкой системных вызовов, связанных с сокетами

##### Обзор

Длина адреса IPv6 увеличена до 128 бит, что означает достаточный объем ресурсов адресов IPv6. Заголовок IPv6 по сравнению с IPv4 проще, и кроме того, оптимизирована функция автоматической настройки IPv6. Классификация адресов IPv6: unicast (одноадресная передача), multicast (многоадресная передача), anycast (передача на любой адрес). Стандартные адреса одноадресной передачи включают link-local (адреса, предназначенные для коммуникаций в пределах одного сегмента местной сети), unique local (уникальные локальные адреса) и global (глобальные адреса). Поскольку глобальных адресов IPv6 достаточно, уникальные локальные адреса не используются (ранее известные как адреса site-local, от которых отказались в 2004 году). В настоящее время основными адресами одноадресной передачи являются link-local и глобальный адрес. Текущее ядро поддерживает системный вызов для создания сокетов. Адрес link-local и глобальный адрес с использованием адресов одноадресной передачи отличаются.

##### Различия между link-local и глобальным адресом в системном вызове с целью создания сокетов

RFC 2553: Основные расширения интерфейса сокетов для IPv6 определяют структуру данных sockaddr\_in6 следующим образом:

```
struct sockaddr_in6 {     
    uint8_t         sin6_len;       /* length of this struct */     
    sa_family_t     sin6_family;    /* AF_INET6 */     
    in_port_t       sin6_port;      /* transport layer port # */     
    uint32_t        sin6_flowinfo;  /* IPv6 flow information */     
    struct in6_addr sin6_addr;      /* IPv6 address */     
    uint32_t        sin6_scope_id;  /* set of interfaces for a scope */ 
}; 
```

> ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ:**  
> sin6\_scope\_id: 32-значное целое число. Для адреса link-local данное значение определяет индекс указанного интерфейса. Для link-range sin6\_addr данное значение определяет индекс указанного интерфейса. Для site-range sin6\_addr данное значение используется в качестве идентификатора объекта (адрес site-local отменен).

Если для связи с сокетом используется адрес link-local, при формировании адреса назначения необходимо указать индекс интерфейса, соответствующий данному адресу. Для преобразования имени интерфейса в индекс интерфейса можно использовать функцию if\_nametoindex. Подробная информация:

```
int port = 1234;
int sk_fd;
int iff_index = 0;
char iff_name[100] = "enp3s0";
char * ll_addr[100] = "fe80::123:456:789";
struct sockaddr_in6 server_addr;

memset(&server_addr,0,sizeof(structsockaddr_in6));
iff_index=if_nametoindex(iff_name);

server_addr.sin6_family=AF_INET6;
server_addr.sin6_port=htons(port);
server_addr.sin6_scope_id=iff_index;
inet_pton(AF_INET6, ll_addr, &(server_addr.sin6_addr));

sk_fd=socket(AF_INET6, SOCK_STREAM, IPPROTO_TCP);
connect(sk_fd, (struct sockaddr *)&server_addr, sizeof(struct sockaddr_in6));
```

#### Настройка атрибута постоянства демон-процесса dhclient при получении адресов IPv4

##### Обзор

Если при использовании службы NetworkManager для управления сетевыми службами в конфигурационном файле ifcfg-\<interface-name> интерфейса заданы настройки для получения IP-адреса в режиме DHCP, данная служба запускает демон-процесс dhclient.

dhclient предоставляет опцию -1, которая устанавливает атрибут постоянных попыток запроса IP-адреса либо прекращения попыток по истечении времени ожидания получения ответа на запрос от DHCP-сервера. Для демон-процесса IPv4 dhclient атрибут постоянства устанавливается путем настройки PERSISTENT\_DHCLIENT в конфигурационном файле ifcfg-\<interface-name>.

##### Ограничения

1. Если текущий процесс dhclient будет завершен, сетевая служба не сможет автоматически запустить его. Поэтому необходимо обеспечить меры надежности.
2. Если настроен атрибут PERSISTENT\_DHCLIENT, убедитесь, что соответствующий сервер DHCP существует. Если при запуске сетевой службы сервер DHCP не доступен, и процесс dhclient постоянно пытается отправлять пакеты с запросами, но не получает ответа, сетевая служба приостанавливается до истечения времени ожидания. Сетевая служба последовательно запускает процессы IPv4 dhclient нескольких интерфейсов NIC. Если атрибут постоянства настроен для NIC, но сервер DHCP не готов, сетевая служба будет приостановлена при получении адреса IPv4 для NIC. В результате NIC не может получить адрес IPv4 или IPv6.

Упомянутые выше ограничения применяются в особых сценариях. Необходимо предусмотреть меры обеспечения надежности.

##### Различия в конфигурации между IPv4 DHCP и IPv6 DHCPv6

Чтобы включить динамическое получение IP-адресов IPv4 и IPv6 с использованием DHCP или DHCPv6, необходимо на интерфейсе сконфигурировать параметр ifcfg-\<interface-name>. Метод настройки:

```
BOOTPROTO=none|bootp|dhcp
DHCPV6C=yes|no
PERSISTENT_DHCLIENT=yes|no|1|0
```

- BOOTPROTO:  **none** означает, что адрес IPv4 статически сконфигурирован. bootp\|dhcp включает функцию динамического получения адреса IPv4 клиентом DHCP dhclient.

- DHCPV6C:  **no** означает, что адрес IPv6 статически сконфигурирован, а **yes** означает, что на клиенте DHCPv6 dhclient включена функция динамического получения адреса IPv6.

- PERSISTENT\_DHCLIENT:  **no\|0** означает, что процесс IPv4 dhclient сконфигурирован с атрибутом nonpersistent. Если dhclient отправляет пакет запроса серверу DHCP, но не получает ответа, dhclient завершает сеанс через определенный период времени, и значение завершения равно 2.  **yes 1** означает, что процесс IPv4 dhclient сконфигурирован с атрибутом persistent. Процесс dhclient неоднократно отправляет пакеты запросов на сервер DHCP.  **Если PERSISTENT\_DHCLIENT не сконфигурирован, dhclient IPv4 устанавливается по умолчанию в значение yes\|1.**

  > ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
  > Конфигурация PERSISTENT\_DHCLIENT вступает в силу только для IPv4 и не вступает в силу для процессов dhclient -6, связанных с IPv6. По умолчанию конфигурация с атрибутом постоянства не применяется для IPv6.

#### Различия в использовании команды iprote для IPv4 и IPv6

##### Обзор

IPv4 и IPv6 — это два разных стандарта протоколов. Поэтому команда iprote отличается в использовании. В этом разделе приведены различия в использовании команды iprote для протоколов IPv4 и IPv6.

Для выполнения команд iprote необходимо иметь разрешения **root**.

##### Жизненный цикл IPv6-адреса

| Состояние IPv6 | Описание                                                     |
| -------------- | ------------------------------------------------------------ |
| tentative      | Временное состояние: новый добавленный адрес все еще находится в процессе обнаружения дубликатов (DAD). |
| preferred      | Привилегированное состояние: процесс DAD завершен, но пакет NA не получен, что указывает на то, что адрес не конфликтует. |
| deprecated     | состояние устаревания: адрес имеет период действия (valid\_lft или preferred\_lft). После истечения периода действия preferred\_lft адрес переходит в состояние устаревания.<br/>Адрес в этом состоянии нельзя использовать для создания нового соединения, но исходное соединение использовать можно. |
| invalid        | Недействительное состояние: если продление аренды не удается после истечения периода preferred\_lft, адрес переходит в состояние «недействительный» после истечения периода valid\_lft, что означает, что адрес нельзя использовать повторно. |

Примечания:

- preferred\_lft: основное время жизни. Если период preferred\_lft адреса не истек, адрес можно использовать для обычной передачи. Если есть несколько адресов с таким периодом, адрес выбирается в соответствии с механизмом ядра.
- valid\_lft: допустимое время жизни. Адрес нельзя использовать для создания новых соединений в течение периода \[preferred\_lft, validly\_lft]. Существующие соединения остаются действительными.

##### Команда ip link

Формат команды:

```
ip link set IFNAME mtu MTU
```

Минимальное значение PMTU IPv6 — 1280. Если MTU имеет значение меньше 1280, IPv6-адреса будут потеряны. Остальные устройства не смогут выполнять тест адреса Ipv6 командой ping.

##### Команда ip addr

1. Формат команды:

   ```
   ip [-6] addr add IFADDR dev IFNAME
   ```

   Можно добавить параметр -6 или не добавлять IPv6-адрес. Команда ip addr определяет тип адреса — IPv4 или IPv6.

   Если указан параметр -6, но IFADDR является адресом IPv4, возвращается сообщение об ошибке.

2. Формат команды:

   ```
   ip [-6] addr add IFADDR  dev IFNAME [home|nodad]
   ```

   Параметр \[home\|nodad] действителен только для IPv6-адресов.

   - home: домашний адрес, определенный рекомендациями RFC 6275. (Этот адрес получает мобильный узел из домашнего канала и является постоянным адресом мобильного узла. Если мобильный узел остается в одном домашнем канале, передача между различными объектами осуществляется в штатном режиме.)
   - nodad: означает, что функция обнаружения дубликатов адреса (DAD) не выполняется при добавлении этого IPv6-адреса. (RFC 4862) Если в устройстве для нескольких интерфейсов настроен один и тот же IPv6-адрес с параметром nodad, адрес IPv6 используется в порядке следования интерфейсов. Нельзя настроить для одного интерфейса один и тот же IPv6-адрес с параметром nodad и без данного параметра, поскольку сами адреса будут одинаковыми. В противном случае появится сообщение «RTNETLINK answers: File exists».

3. Формат команды:

   ```
   ip [-6] addr del IFADDR dev IFNAME
   ```

   Можно добавить параметр -6 или не удалять IPv6-адрес. Команда ip addr del определяет тип адреса — IPv4 или IPv6.

4. Формат команды:

   ```
   ip [-6] addr show dev IFNAME [tentative|-tentative|deprecated|-deprecated|dadfailed|-dadfailed|temporary]
   ```

   - Если параметр -6 не указан, отображаются оба типа адреса — IPv4 и IPv6. Если параметр -6 указан, отображаются только адреса IPv6.
   - \[tentative\|-tentative\|deprecated\|-deprecated\|dadfailed\|-dadfailed\|temporary]. Данные параметры предназначены только для адреса IPv6. Адреса можно фильтровать и просматривать на основе состояния адреса IPv6.
     1. tentative: (только для IPv6) с данным параметром перечисляются только те адреса, которые еще не прошли проверку на дубликаты адресов (DAD).
     2. -tentative: (только для IPv6) с данным параметром перечисляются только те адреса, которые не находятся в процессе проверки DAD.
     3. deprecated: (только для IPv6) с данным параметром перечисляются только устаревшие адреса.
     4. -deprecated: (только для IPv6) с данным параметром перечисляются только не устаревшие адреса.
     5. dadfailed: (только для IPv6) с данным параметром перечисляются только те адреса, которые прошли проверку на дубликаты адресов (DAD) с неуспешным результатом.
     6. -dadfailed: (только для IPv6) с данным параметром перечисляются только те адреса, которые не имели неуспешных результатов проверки DAD.
     7. temporary: (только для IPv6) с данным параметром перечисляются только адреса с временным состоянием.

##### Команда ip route

1. Формат команды:

   ```
   ip [-6] route add ROUTE [mtu lock MTU]
   ```

   - Параметр -6: при добавлении маршрута IPv6 можно добавить параметр -6 или не добавлять его. Команда ip route определяет тип адреса — IPv4 или IPv6.

   - mtu lock MTU: значение MTU заблокированного маршрута. Если MTU не заблокирован, его значение может быть изменено ядром во время процесса PMTUD. Если MTU заблокирован, попытка PMTUD не осуществляется. Ни для одного пакета IPv4 не устанавливается бит DF, а пакеты IPv6 сегментируются на основе MTU.

2. Формат команды:

   ```
   ip [-6] route del ROUTE
   ```

   Можно добавить параметр -6 при удалении маршрута IPv6. Команда ip route определяет тип адреса — IPv4 или IPv6.

##### Команда ip rule

1. Формат команды:

   ```
   ip [-6] rule list
   ```

   Параметр -6: если установлен параметр -6, выводятся маршруты, осуществляемые по протоколу IPv6. Если параметр -6 не установлен, выводятся маршруты, осуществляемые по протоколу IPv4. Поэтому параметр -6 устанавливается в соответствии с конкретным типом протокола.

2. Формат команды:

   ```
   ip [-6] rule [add|del] [from|to] ADDR table TABLE pref PREF
   ```

   Параметр -6: данный параметр необходимо сконфигурировать для записей маршрутизации IPv6. В противном случае появляется сообщение «Error: Invalid source address.». Поэтому параметр -6 не устанавливается для записей маршрутизации IPv4. В противном случае появляется сообщение «Error: Invalid source address.».

#### Различия в настройке службы NetworkManager

##### Обзор

Служба NetworkManager использует определение логического интерфейса ifup/ifdown для выполнения расширенных сетевых настроек. Большинство параметров задаются в конфигурационных файлах /etc/sysconfig/network и /etc/sysconfig/network-scripts/ifcfg-\<interface-name>. В первом файле задаются глобальные настройки, во втором — настройка определенного интерфейса NIC. Если два параметра конфликтуют, действие имеет второй.

##### Различия в настройках

Отличия при настройке конфигурации в файле /etc/sysconfig/network:

| IPv4| IPv6| Описание|
|:----------|:----------|:----------|
| \--| IPV6FORWARDING=yes/no| Передача по протоколу IPv6. По умолчанию пакеты IPv6 не передаются.|
| \--| IPV6\_AUTOCONF=yes/no| Если передача IPv6 включена, значением будет **no**. В противном случае значение **yes**. |
| \--| IPV6\_ROUTER=yes/no| Если передача IPv6 включена, значением будет **yes**. В противном случае значение **no**. |
| \--| IPV6\_AUTOTUNNEL=yes/no| Режим автоматического туннеля. Значение по умолчанию — **no**. |
| GATEWAY| IPV6\_DEFAULTGW=\<IPv6 address\[%interface]> (опционально)| Шлюз по умолчанию в IPv6.|
| \--| IPV6\_DEFAULTDEV=<interface> (опционально)| NIC переадресации по умолчанию.|
| \--| IPV6\_RADVD\_PIDFILE=<pid-file> (опционально)| Путь по умолчанию ipv6\_radvd\_pid — /var/run/radvd/radvd.pid.|
| \--| IPV6\_RADVD\_TRIGGER\_ACTION=startstop| Перезагрузка|

Отличия в /etc/sysconfig/network-scripts/ifcfg-\<interface-name> следующие:

| IPv4| IPv6| Описание|
|:----------|:----------|:----------|
| IPADDRn| IPV6ADDR=<IPv6 address>\[/<prefix length>]| IP-адрес.|
| PREFIXn| \--| Сетевой префикс, псевдоним сети и PPP недопустимы. Приоритет выше, чем приоритет NETMASK.|
| NETMASKn| \--| Маска подсети. Используется только для псевдонима и PPP.|
| GATEWAY| IPV6\_DEFAULTGW=\<IPv6 address\[%interface]> (опционально)| Шлюз по умолчанию.|
| MTU| IPV6\_MTU=<MTU of link> (опционально)| MTU по умолчанию.|
| IPV4\_FAILURE\_FATAL=yes/no| IPV6\_FAILURE\_FATAL| Значение по умолчанию — **no**. Если этому параметру установлено значение **yes**, ifup-eth завершается в случае сбоя на клиенте dhclient. |
| \--| IPV6\_PRIVACY=rfc3041| Отключено по умолчанию.|
| \--| IPV6INIT=yes/no| IPv6 включен по умолчанию.|
| \--| IPV6FORWARDING=yes/no| Эта функция отключена по умолчанию и отменена.|

### Вопросы и ответы

#### iscsi-initiator-utils не поддерживает IPv6-адрес fe80.

##### Признак

Когда клиент для входа на сервер iSCSI использует IPv6-адрес, выполняется команда iscsiadm -m node -p ipv6address -l. Если используется глобальный адрес, ipv6address в приведенном примере команды заменяется глобальным адресом. Однако адрес link-local (адрес IPv6, начинающийся с fe80) нельзя использовать, поскольку текущий механизм iscsi-initiator-utils не поддерживает такой тип адреса для входа на сервер iSCSI.

##### Возможные причины

При входе в систему с использованием команды формата iscsiadm -m node -p fe80::xxxx -l возвращается ошибка тайм-аута входа. Ошибка возникает в связи тем, что при использовании адреса link-local необходимо указать интерфейс. В противном случае функция iscsi\_io\_tcp\_connect не может инициировать функцию соединения, и генерируется стандартный код ошибки 22.

Если для входа используется команда формата iscsiadm -m node -p fe80::xxxx%enp3s0 -l, функция iscsi\_addr\_match сравнивает адрес fe80::xxxx%enp3s0 с адресом fe80::xxxx в информации об узле, возвращаемой сервером. Результаты сравнения не совпадают, что приводит к сбою входа.

Поэтому **текущий механизм iscsi-initiator-utils не поддерживает вход на сервер iSCSI с использованием адреса link-local.**

#### Адрес IPv6 утерян после перехода NIC в отключенное состояние.

##### Признак

Выполняется команда ip link down+up NIC или ifconfig down+up NIC для отключения NIC и затем повторного подключения. В результате проверки IP-адреса, настроенного на интерфейсе NIC, обнаруживается, что адрес IPv4 не утерян, а настроенный IPv6 адрес утерян.

##### Возможные причины

Если, согласно логике обработки ядра, интерфейс NIC установлен в отключенное (down) состояние, все адреса IPv4 и IPv6 сбрасываются. После перехода NIC в подключенное (up) состояние, адрес IPv4, а также автоматически сконфигурированный адрес link-local IPv6 на интерфейсе NIC автоматически восстанавливаются. Однако остальные IPv6-адреса по умолчанию утеряны. Чтобы сохранить эти IPv6-адреса, выполните команду **sysctl -w net.ipv6.conf.\< _имя NIC_ >.keep\_addr\_on\_down=1**.

#### Длительный период добавления или удаления нескольких IPv6-адресов для интерфейса объединения

##### Признак

Когда пользователи выполняют следующую команду для добавления или удаления (включая сброс на диск) адреса IPv6, время ожидания увеличивается линейно с увеличением количества адресов IPv6, настроенных на интерфейсе объединения (bond).  **X** — самые младшие 16 разрядов, которые меняются динамически. Например, чтобы добавить 3000 адресов IPv6 или удалить их с интерфейса объединения, который уже имеет четыре физических интерфейса NIC, использующих один поток, требуется около пяти минут, в то время как для обычного физического интерфейса NIC эта операция занимает менее 10 секунд.

```
ip a add/del 192:168::18:X/64 dev DEVICE
```

##### Возможные причины

При добавлении адреса IPv6 к интерфейсу объединения, адрес IPv6 многоадресной передачи генерируется и синхронизируется со всеми физическими интерфейсами NIC. Требуемое время увеличивается с увеличением количества IPv6-адресов. В результате это занимает слишком много времени.

##### Решение

Адрес IPv6 многоадресной передачи генерируется путем объединения самых младших 24 разрядов адреса IPv6 и 33-33-ff. Если адресов многоадресной передачи слишком много, операция добавления или удаления займет много времени. Если таких адресов немного, продолжительность не увеличится.

Рекомендуется настроить самые младшие 24 разряда адреса IPv6 так же, как и 24 старших разряда адреса IPv6. Таким образом, один интерфейс NIC сможет взаимодействовать с внешними устройствами, используя только один IP-адрес в одном сетевом сегменте.

#### Задержка передачи данных журнала Rsyslog при использовании обоих типов адресов — IPv4 и IPv6

##### Признак

Когда в конфигурационном файле клиента rsyslog сконфигурированы оба типа адреса — IPv4 и IPv6 — и настройки портов одинаковы, существует вероятность задержки вывода данных журнала во время сбора данных сервером.

##### Возможные причины

Задержка вызвана механизмом организации очереди буфера rsyslog. По умолчанию rsyslog записывает данные в файл только в том случае, если количество очередей буфера достигает определенного значения.

##### Решение

Можно отключить механизм организации очереди буфера, настроив режим Direct от имени пользователя **root**. Добавьте следующую информацию в начале нового конфигурационного файла с настройками удаленной передачи в каталоге /etc/rsyslog.d на сервере удаленной передачи rsyslog:

```
$ActionQueueType Direct
$MainMsgQueueType Direct
```

> ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:
>
> - В режиме Direct размер очереди уменьшается на 1. Поэтому для вывода следующего журнала в очереди резервируется один журнал.
> - Режим Direct ухудшает производительность rsyslog сервера.