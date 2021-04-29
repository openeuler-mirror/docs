#Управление ресурсами виртуальных машин

\[\[toc]]

## Обзор

В данном разделе приведено описание процедуры управления дисками и сетевыми картами NIC с помощью команд QMP.

> ![](./figures/en-05.png)
> 
> Для управления виртуальными машинами в StratoVirt используется технология QMP. Перед выполнением команд QMP подключите StratoVirt к ВМ посредством QMP. Подробная информация приведена в разделе «Управление жизненным циклом виртуальной машины».

## Жесткие диски, подключаемые и отключаемые в горячем режиме

StratoVirt поддерживает настройку количества дисков в процессе работы виртуальной машины. То есть добавлять или удалять диски ВМ можно без остановки работы сервисов.

### Горячее подключение диска

**Процедура**

```
{"execute": "blockdev-add", "arguments": {"node-name": "drive-0", "file": {"driver": "file", "filename": "/path/to/block"}, "cache": {"direct": true}, "read-only": false}}
{"execute": "device_add", "arguments": {"id": "drive-0", "driver": "virtio-blk-mmio", "addr": "0x1"}}
```

**Параметр**

- Значение параметра имени узла node-name в blockdev-add должно совпадать со значением идентификатора id в device\_add. Оба принадлежат диску drive-0.

- /path/to/block — это зеркальный путь к диску, подключаемому в горячем режиме. В качестве данного пути нельзя использовать путь к образу диска, который загружает корневую файловую систему (rootfs).

- Параметр addr: 0х0 сопоставляется с vda виртуальной машины, 0х1 сопоставляется с vdb и так далее. Чтобы обеспечить совместимость с QMP-протоколом, «addr» можно заменить на «lun», но lun=0 сопоставляется с vdb клиента. В горячем режиме можно добавить только шесть дисков virtio-blk.

**Пример**

```
<- {"execute": "blockdev-add", "arguments": {"node-name": "drive-0", "file": {"driver": "file", "filename": "/path/to/block"}, "cache": {"direct": true}, "read-only": false}}
-> {"return": {}}
<- {"execute": "device_add", "arguments": {"id": "drive-0", "driver": "virtio-blk-mmio", "addr": "0x1"}}
-> {"return": {}}
```

### Горячее отключение диска

**Процедура**

**{"execute": "device\_del", "arguments": {"id":"drive-0"}}**

**Параметр**

id — это идентификатор диска, отключаемого в горячем режиме.

**Пример**

```
<- {"execute": "device_del", "arguments": {"id": "drive-0"}}
-> {"event":"DEVICE_DELETED","data":{"device":"drive-0","path":"drive-0"},"timestamp":{"seconds":1598513162,"microseconds":367129}}
-> {"return": {}}
```

## Сетевые карты NIC, подключаемые и отключаемые в горячем режиме

StratoVirt поддерживает настройку количества сетевых карт NIC в процессе работы виртуальной машины. То есть добавлять или удалять карты NIC можно без остановки работы сервисов.

### Горячее подключение карты NIC

**Подготовка (требуются полномочия уровня root)**

1. Создайте и включите мост Linux. Например, если имя моста — qbr0, выполните следующую команду:
   
   ```shell
   # brctl addbr qbr0
   # ifconfig qbr0 up
   ```

2. Создайте и включите устройство TAP. Например, если имя устройства TAP — tap0, выполните следующую команду:
   
   ```shell
   # ip tuntap add tap0 mode tap
   # ifconfig tap0 up
   ```

3. Добавьте устройство TAP к мосту.
   
   ```shell
   # brctl addif qbr0 tap0
   ```
   
   

**Процедура**

```
{"execute":"netdev_add", "arguments":{"id":"net-0", "ifname":"tap0"}}
{"execute":"device_add", "arguments":{"id":"net-0", "driver":"virtio-net-mmio", "addr":"0x0"}}
```

**Параметр**

- Идентификатор в netdev\_add должен совпадать с идентификатором в device\_add. Ifname — это имя устройства TAP.

- Параметр addr: 0х0 сопоставляется с eth0 виртуальной машины, 0х1 сопоставляется с eth1. В горячем режиме можно подключить только две NIC-карты virtio-net.

**Пример**

```
<- {"execute":"netdev_add", "arguments":{"id":"net-0", "ifname":"tap0"}}
<- {"execute":"device_add", "arguments":{"id":"net-0", "driver":"virtio-net-mmio", "addr":"0x0"}} 
```

Здесь addr:0x0 соответствует eth0 в виртуальной машине.

### Горячее отключение карты NIC

**Процедура**

**{"execute": "device\_del", "arguments": {"id": "net-0"}}**

**Параметр**

id — идентификатор сетевой карты NIC, например net-0.

**Пример**

```
<- {"execute": "device_del", "arguments": {"id": "net-0"}}
-> {"event":"DEVICE_DELETED","data":{"device":"net-0","path":"net-0"},"timestamp":{"seconds":1598513339,"microseconds":97310}}
-> {"return": {}}
```