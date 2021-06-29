# Перезагрузка и завершение работы контейнера

- [Перезагрузка и завершение работы контейнера](#reboot-or-shutdown-in-a-container)

## Описание функционала

В системном контейнере доступны команды **reboot** и **shutdown**. Команда **reboot** перезагружает контейнер, а команда **shutdown** — завершает работу контейнера.

## Описание параметров

| Команда          | **Параметр** | Описание значений                                            |
| ---------------- | ------------ | ------------------------------------------------------------ |
| isula create/run | --restart    | ·    Переменная строкового типа.<br />·    Поддерживаемые значения:<br />**on-reboot**: перезапуск системного контейнера. |

## Ограничения

- Функция завершения работы зависит от фактической ОС рабочей среды контейнера.
- Выполняя команду **shutdown -h now** для завершения работы системы, не открывайте несколько консолей. Например, при запуске команды **isula run -ti** для открытия консоли и выполнения команды **isula attach** с контейнером в другой bash-оболочке хоста открывается другая консоль. В этом случае происходит сбой выполнения команды **shutdown**.

## Пример

- Укажите параметр **--restart on-reboot** при запуске контейнера. Пример:
  
  ```
  [root@localhost ~]# isula run -tid --restart on-reboot --system-container --external-rootfs /root/myrootfs none init
  106faae22a926e22c828a0f2b63cf5c46e5d5986ea8a5b26de81390d0ed9714f
  ```

- В контейнере выполните команду **reboot**.
  
  ```
  [root@localhost ~]# isula exec -it 10 bash
  [root@localhost /]# reboot
  ```
  
  Убедитесь, что контейнер перезагрузился.
  
  ```
  [root@localhost ~]# isula exec -it 10 ps aux
  USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
  root         1  0.1  0.0  21588  9504 ?        Ss   12:11   0:00 init
  root        14  0.1  0.0  27024  9376 ?        Ss   12:11   0:00 /usr/lib/system
  root        17  0.0  0.0  18700  5876 ?        Ss   12:11   0:00 /usr/lib/system
  dbus        22  0.0  0.0   9048  3624 ?        Ss   12:11   0:00 /usr/bin/dbus-d
  root        26  0.0  0.0   8092  3012 ?        Rs+  12:13   0:00 ps aux
  ```

- В контейнере выполните команду **shutdown**.
  
  ```
  [root@localhost ~]# isula exec -it 10 bash
  [root@localhost /]# shutdown -h now
  [root@localhost /]# [root@localhost ~]#
  ```
  
  Убедитесь, что контейнер завершил работу.
  
  ```
  [root@localhost ~]# isula exec -it 10 bash
  Error response from daemon: Exec container error;Container is not running:106faae22a926e22c828a0f2b63cf5c46e5d5986ea8a5b26de81390d0ed9714f
  ```