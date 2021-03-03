# Руководство по установке

В этом разделе описывается, как включить функцию Raspberry Pi после [Записи образа Raspberry Pi на SD-карту](./安装方式介绍-1.html).

\[\[toc]]

## Запуск системы

Записав образ на SD-карту, вставьте ее в устройство Raspberry Pi и включите питание SD-карты.

Более подробную информацию об аппаратном обеспечении Raspberry Pi можно получить на [официальном веб-сайте Raspberry Pi](https://www.raspberrypi.org/).

## Вход в систему

Войти на Raspberry Pi можно одним из следующих способов:

1. Локальный вход
   
   Подключите к Raspberry Pi монитор (интерфейсом видеовыхода Raspberry Pi является Micro HDMI), клавиатуру и мышь и запустите Raspberry Pi. На мониторе появится журнал запуска Raspberry Pi. Запустив Raspberry Pi, введите имя пользователя **root** и пароль openeuler для входа.

2. Удаленный вход через SSH
   
   По умолчанию Raspberry Pi автоматически получает IP-адреса, используя режим DHCP. Если Raspberry Pi подключен к известному маршрутизатору, то можно проверить IP-адрес, войдя на данный маршрутизатор. Новым IP-адресом является IP-адрес Raspberry Pi.
   
   **Рис. 1** Получение IP-адреса  
!\[](./figures/Obtain the IP address)
   
   Согласно данному рисунку IP-адресом Raspberry Pi является **192.168.31.109**. Вы можете выполнить команду `ssh root@192.168.31.109` и ввести пароль `openeuler` для удаленного входа в Raspberry Pi.

## Настройка системы

### Расширение раздела корневого каталога

Пространство раздела корневого каталога по умолчанию небольшое. Поэтому перед использованием раздела необходимо расширить его.

Чтобы увеличить емкость раздела корневого каталога, выполните следующую процедуру:

1. Чтобы проверить информацию о разделе диска, выполните команду `fdisk -l` как пользователь **root**. Выходные данные команды выглядят следующим образом:
   
   ```
   # fdisk -l
   Disk /dev/mmcblk0: 14.86 GiB, 15931539456 bytes, 31116288 sectors
   Units: sectors of 1 * 512 = 512 bytes
   Sector size (logical/physical): 512 bytes / 512 bytes
   I/O size (minimum/optimal): 512 bytes / 512 bytes
   Disklabel type: dos
   Disk identifier: 0xf2dc3842
   
   Device         Boot   Start     End Sectors  Size Id Type
   /dev/mmcblk0p1 *       8192  593919  585728  286M  c W95 FAT32 (LBA)
   /dev/mmcblk0p2       593920 1593343  999424  488M 82 Linux swap / Solaris
   /dev/mmcblk0p3      1593344 5044223 3450880  1.7G 83 Linux
   ```
   
   Диск SD-карты имеет обозначение **/dev/mmcblk0** и содержит три раздела:
   
   - **/dev/mmcblk0p1**: раздел загрузки
   - **/dev/mmcblk0p2**: раздел подкачки
   - **/dev/mmcblk0p3**: раздел корневого каталога
   
   Здесь необходимо расширить емкость раздела `/dev/mmcblk0p3`.

2. Выполните команду `fdisk /dev/mmcblk0` как пользователь **root**, на экране появится интерактивный интерфейс командной строки. Чтобы увеличить емкость раздела, выполните следующую процедуру, см. [Рис. 2](#zh-cn_topic_0151920806_f6ff7658b349942ea87f4521c0256c315).
   
   1. Введите `p`, чтобы проверить информацию о разделе.
      
      Запишите номер начального сектора раздела `/dev/mmcblk0p3`, то есть значение в столбце `Start` информации о разделе `/dev/mmcblk0p3`. В данном примере номером начального сектора является `1593344`.
   
   2. Введите `d`, чтобы удалить раздел.
   
   3. Введите `3` или нажмите `Enter`, чтобы удалить раздел, номер которого `3`. То есть раздел `/dev/mmcblk0p3`.
   
   4. Введите `n`, чтобы создать раздел.
   
   5. Введите `p` или нажмите `Enter` для создания раздела типа `Primary`.
   
   6. Введите `3` или нажмите `Enter`, чтобы создать раздел, номер которого `3`. То есть раздел `/dev/mmcblk0p3`.
   
   7. Введите номер начального сектора нового раздела, записанный на шаге `1`. В данном примере номером начального сектора является `1593344`.
      
      > ![](./public_sys-resources/icon-notice.gif) ПРИМЕЧАНИЕ:  
Не нажимайте **Enter** и не используйте параметры по умолчанию.
   
   8. Нажмите `Enter`, чтобы использовать номер последнего сектора по умолчанию в качестве номера конечного сектора нового раздела.
   
   9. Введите `N`, не изменяя ID сектора.
   
   10. Введите `w`, чтобы сохранить настройки раздела и выйти из интерактивного интерфейса командной строки.
   
   **Рис. 2** Увеличение емкости раздела  
!\[](./figures/Expand the partition capacity)

3. Выполните команду `fdisk -l` как пользователь **root**, чтобы проверить информацию о разделе диска, и убедитесь, что раздел диска настроен корректно. Выходные данные команды выглядят следующим образом:
   
   ```
   # fdisk -l
   Disk /dev/mmcblk0: 14.86 GiB, 15931539456 bytes, 31116288 sectors
   Units: sectors of 1 * 512 = 512 bytes
   Sector size (logical/physical): 512 bytes / 512 bytes
   I/O size (minimum/optimal): 512 bytes / 512 bytes
   Disklabel type: dos
   Disk identifier: 0xf2dc3842
   
   Device         Boot   Start      End  Sectors  Size Id Type
   /dev/mmcblk0p1 *       8192   593919   585728  286M  c W95 FAT32 (LBA)
   /dev/mmcblk0p2       593920  1593343   999424  488M 82 Linux swap / Solaris
   /dev/mmcblk0p3      1593344 31116287 29522944 14.1G 83 Linux
   ```

4. Чтобы увеличить размер незагруженной файловой системы, выполните команду `resize2fs /dev/mmcblk0p3` как пользователь **root**.

5. Выполните команду `df -lh`, чтобы проверить информацию о пространстве диска, и убедитесь, что раздел корневого каталога увеличен.
   
   > ![](./public_sys-resources/icon-notice.gif) ПРИМЕЧАНИЕ:  
Если раздел корневого каталога не увеличен, выполните команду `reboot`, чтобы перезапустить Raspberry Pi, а затем выполните команду `resize2fs /dev/mmcblk0p3` как пользователь **root**.

### Подключение к сети Wi-Fi

Чтобы подключиться к сети Wi-Fi, выполните следующую процедуру:

1. Проверьте IP-адрес и информацию сетевого адаптера.
   
   `ip a`
   
   Получите информацию об адаптере беспроводной сети **wlan0**:
   
   ```
   1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
       link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
       inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
       inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
   2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
       link/ether dc:a6:32:50:de:57 brd ff:ff:ff:ff:ff:ff
       inet 192.168.31.109/24 brd 192.168.31.255 scope global dynamic noprefixroute eth0
       valid_lft 41570sec preferred_lft 41570sec
       inet6 fe80::cd39:a969:e647:3043/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
   3: wlan0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc fq_codel state DOWN group default qlen 1000
       link/ether e2:e6:99:89:47:0c brd ff:ff:ff:ff:ff:ff
   ```

2. Проверьте информацию о доступных сетях Wi-Fi.
   
   `nmcli dev wifi`

3. Подключитесь к сети Wi-Fi.
   
   Для этого выполните команду `nmcli dev wifi connect SSID password PWD` как пользователь **root**.
   
   В данной команде `SSID` означает SSID доступной сети Wi-Fi, информация о которой была получена на предыдущем шаге, `PWD` — это пароль к сети Wi-Fi. Например, если `SSID` — `openEuler-wifi`, а пароль `12345678`, командой для подключения к сети Wi-Fi будет `nmcli dev wifi connect openEuler-wifi password 12345678`. Соединение успешно установилось.
   
   ```
   Device 'wlan0' successfully activated with '26becaab-4adc-4c8e-9bf0-1d63cf5fa3f1'.
   ```

4. Проверьте IP-адрес и информацию об адаптере беспроводной сети.
   
   `ip a`
   
   ```
   1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
       link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
       inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
       inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
   2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
       link/ether dc:a6:32:50:de:57 brd ff:ff:ff:ff:ff:ff
       inet 192.168.31.109/24 brd 192.168.31.255 scope global dynamic noprefixroute eth0
       valid_lft 41386sec preferred_lft 41386sec
       inet6 fe80::cd39:a969:e647:3043/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
   3: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
       link/ether dc:a6:32:50:de:58 brd ff:ff:ff:ff:ff:ff
       inet 192.168.31.110/24 brd 192.168.31.255 scope global dynamic noprefixroute wlan0
       valid_lft 43094sec preferred_lft 43094sec
       inet6 fe80::394:d086:27fa:deba/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
   ```