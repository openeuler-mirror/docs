# Параметры ядра: пространство имен для записи

- [Параметры ядра: пространство имен для записи](#writable-namespace-kernel-parameters)

## Описание функционала

Для работающих в контейнерах служб, таких как базы данных, приложения обработки больших данных и обычные приложения, требуется установить и отрегулировать определенные параметры для достижения оптимальной производительности и надежности. Разрешения на изменение всех параметров ядра отключаются и включаются одновременно (с помощью привилегированного контейнера).

Если разрешение на изменение отключено, предоставляется только внешний интерфейс --sysctl, и параметры нельзя гибко изменять в контейнере.

Если разрешение на изменение включено, некоторые параметры ядра действуют глобально. Изменение ряда параметров в контейнере может повлиять на работу всех программ на хосте, что создаст большой риск безопасности.

Системные контейнеры предоставляют параметр **--ns-change-opt**, который можно использовать для динамической установки параметров ядра, связанных с пространством имен в контейнере. Принимаемые значения — **net** или **ipc**.

## Описание параметров

| Команда          | **Параметр**    | Описание значений                                            |
| ---------------- | --------------- | ------------------------------------------------------------ |
| isula create/run | --ns-change-opt | ·      Переменная строкового типа.<br />·      Принимаемые значения — **net** или **ipc**.<br />  **net**: поддерживаются все параметры пространства имен в каталоге **/proc/sys/net**.<br />  **ipc**: поддерживаются ниже перечисленные параметры пространства имен.<br />/proc/sys/kernel/msgmax<br />/proc/sys/kernel/msgmnb  <br />/proc/sys/kernel/msgmni  <br />/proc/sys/kernel/sem  <br />/proc/sys/kernel/shmall  <br />/proc/sys/kernel/shmmax  <br />/proc/sys/kernel/shmmni  <br />/proc/sys/kernel/shm_rmid_forced  <br />/proc/sys/fs/mqueue/msg_default  <br />/proc/sys/fs/mqueue/msg_max  <br />/proc/sys/fs/mqueue/msgsize_default  <br />/proc/sys/fs/mqueue/msgsize_max  <br />/proc/sys/fs/mqueue/queues_max  <br />·      При указании нескольких конфигураций пространства имен они отделяются запятыми (,). Например, **--ns-change-opt=net,ipc**. |

## Ограничения

- Если во время запуска контейнера указаны оба параметра **--privileged** (привилегированный контейнер) и **--ns-change-opt**, параметр **--ns-change-opt** не вступает в силу.

## Пример

Запустите контейнер и установите параметру **--ns-change-opt** значение **net**.

```
[root@localhost ~]# isula run -tid --ns-change-opt net --system-container --external-rootfs /root/myrootfs none init
4bf44a42b4a14fdaf127616c90defa64b4b532b18efd15b62a71cbf99ebc12d2
[root@localhost ~]# isula exec -it 4b mount | grep /proc/sys
proc on /proc/sys type proc (ro,nosuid,nodev,noexec,relatime)
proc on /proc/sysrq-trigger type proc (ro,nosuid,nodev,noexec,relatime)
proc on /proc/sys/net type proc (rw,nosuid,nodev,noexec,relatime)
```

Точка монтирования **/proc/sys/net** в контейнере имеет опцию **rw**, что указывает на то, что параметры ядра пространства имен, связанных с сетью, дают разрешения на чтение и запись.

Запустите другой контейнер и установите параметру **--ns-change-opt** значение **ipc**.

```
[root@localhost ~]# isula run -tid --ns-change-opt ipc --system-container --external-rootfs /root/myrootfs none init
c62e5e5686d390500dab2fa76b6c44f5f8da383a4cbbeac12cfada1b07d6c47f
[root@localhost ~]# isula exec -it c6 mount | grep /proc/sys
proc on /proc/sys type proc (ro,nosuid,nodev,noexec,relatime)
proc on /proc/sysrq-trigger type proc (ro,nosuid,nodev,noexec,relatime)
proc on /proc/sys/kernel/shmmax type proc (rw,nosuid,nodev,noexec,relatime)
proc on /proc/sys/kernel/shmmni type proc (rw,nosuid,nodev,noexec,relatime)
proc on /proc/sys/kernel/shmall type proc (rw,nosuid,nodev,noexec,relatime)
proc on /proc/sys/kernel/shm_rmid_forced type proc (rw,nosuid,nodev,noexec,relatime)
proc on /proc/sys/kernel/msgmax type proc (rw,nosuid,nodev,noexec,relatime)
proc on /proc/sys/kernel/msgmni type proc (rw,nosuid,nodev,noexec,relatime)
proc on /proc/sys/kernel/msgmnb type proc (rw,nosuid,nodev,noexec,relatime)
proc on /proc/sys/kernel/sem type proc (rw,nosuid,nodev,noexec,relatime)
proc on /proc/sys/fs/mqueue type proc (rw,nosuid,nodev,noexec,relatime)
```

Точка монтирования информации о параметрах ядра **ipc** в контейнере имеет опцию **rw**, что указывает на то, что параметры ядра пространства имен, связанных с **ipc**, дают разрешения на чтение и запись. 