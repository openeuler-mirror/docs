# Подключение с помощью безопасного контейнера iSula

## Обзор

В целях улучшения изолирующей среды для работы контейнеров и повышения безопасности системы можно подключить StratoVirt к безопасному контейнеру iSula, используя безопасный контейнер iSula.

## Подключение с помощью безопасного контейнера iSula

### **Необходимые условия**

Установлены контейнеры iSulad и Kata. iSulad поддерживает среду выполнения контейнера kata-runtime и драйвер хранилища devicemapper.

Ниже приведено описание установки и настройки контейнеров iSulad и Kata.

1. Настройте репозиторий yum и установите контейнеры iSulad и Kata с разрешением пользователя root.
   
   ```shell
   # yum install iSulad
   # yum install kata-containers
   ```

2. Создайте и настройте хранилище.
   
   Необходимо спланировать диск (например, /dev/sdx), который будет отформатирован.
   
   ```shell
   # pvcreate /dev/sdxx
   # vgcreate isulaVG0 /dev/sdxx
   # lvcreate --wipesignatures y -n thinpool isulaVG0 -l 95%VG
   # lvcreate --wipesignatures y -n thinpoolmeta isulaVG0 -l 1%VG
   # lvconvert -y --zero n -c 512K --thinpool isulaVG0/thinpool --poolmetadata isulaVG0/thinpoolmeta
   ```
   
   Добавьте следующее содержимое в конфигурационный файл /etc/lvm/profile/isulaVG0-thinpool.profile.
   
   ```
   activation {
       thin_pool_autoextend_threshold=80
       thin_pool_autoextend_percent=20
   }
   ```
   
   Измените параметры storage-driver и storage-opts в конфигурационном файле /etc/isulad/daemon.json следующим образом. Установите тип драйвера хранилища по умолчанию на devicemapper.
   
   ```
   "storage-driver": "devicemapper",
   "storage-opts": [
    "dm.thinpooldev=/dev/mapper/isulaVG0-thinpool",
    "dm.fs=ext4",
    "dm.min_free_space=10%"
   ],
   
   ```

3. Выполните следующую команду для перезапуска isulad.
   
   ```shell
   # systemctl daemon-reload
   # systemctl restart isulad
   ```

4. Проверьте, выполнен ли процесс настройки драйвера хранилища iSula.
   
   ```shell
   # isula info
   ```
   
   Если отображаются следующие выходные данные, конфигурация выполнена успешно.
   
   ```
   Storage Driver: devicemapper
   ```

5. Откройте файл /etc/isulad/daemon.json. Если значение kata-runtime не настроено, установите для параметра runtime значение kata-runtime.
   
   ```json
   "runtimes": {
       "kata-runtime": {
           "path": "/usr/bin/kata-runtime",
           "runtimeArgs": [
               "--kata-config",
               "/usr/share/defaults/kata-containers/configuration.toml"
           ]
       }
   },
   ```

### **Руководство по подключению**

StratoVirt подключается к безопасному контейнеру iSula, то есть осуществляется подключение StratoVirt к kata-runtime в безопасном контейнере iSula. Процедура:

1. Создайте файл скрипта stratovirt.sh в любом каталоге (например, /home) и добавьте разрешение на выполнение файла в качестве пользователя с разрешением root.
   
   ```shell
   # touch /home/stratovirt.sh
   # chmod +x /home/stratovirt.sh
   ```
   
   Ниже приведено содержимое файла stratovirt.sh, который используется для определения пути к StratoVirt.
   
   ```
   #!/bin/bash
   export STRATOVIRT_LOG_LEVEL=info  # set log level which includes trace, debug, info, warn and error.
   /usr/bin/stratovirt $@
   ```
   
   ​

2. Измените файл конфигурации kata (путь по умолчанию — /usr/share/defaults/kata-containers/configuration.toml). Установите тип гипервизора безопасного контейнера на stratovirt, ядро на абсолютный путь к образу ядра StratoVirt, а initrd на файл образа initrd kata-containers. При установке контейнеров kata с помощью yum два файла образов по умолчанию загружаются и хранятся в каталоге /var/lib/kata/. Во время настройки можно использовать и другие образы.
   
   Справочная информация о конфигурации:
   
   ```shell
   [hypervisor.stratovirt]
   path = "/home/stratovirt.sh"
   kernel = "/var/lib/kata/vmlinux.bin"
   initrd = "/var/lib/kata/kata-containers-initrd.img"
   block_device_driver = "virtio-mmio"
   use_vsock = true
   enable_netmon = true
   internetworking_model="tcfilter"
   sandbox_cgroup_with_emulator = false
   disable_new_netns = false
   disable_block_device_use = false
   disable_vhost_net = true
   ```

3. Используйте разрешение root и команду **isula** для запуска безопасного контейнера BusyBox, чтобы подключить StratoVirt к безопасному контейнеру.
   
   ```shell
   # isula run -tid --runtime=kata-runtime --net=none --name test busybox:latest sh
   ```

4. Запустите команду **isula ps**, чтобы определить, правильно ли выполняется тест безопасного контейнера. Если да, выполните следующую команду для доступа к тестовому контейнеру.
   
   ```
   # isula exec –ti test sh
   ```

Теперь вы можете запускать команды контейнера на тестовом контейнере.