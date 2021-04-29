# Подключение с помощью безопасного контейнера iSula

\[\[toc]]

## Обзор

В целях улучшения изолирующей среды для работы контейнеров и повышения безопасности системы необходимо подключить Kata к StratoVirt, используя безопасный контейнер iSula.

## Подключение с помощью безопасного контейнера iSula

**Необходимые условия**

Установлены контейнеры iSulad и Kata.

**Процедура**

Путь по умолчанию для конфигурационного файла Kata: /usr/share/defaults/kata-containers/configuration.toml.

1. Скомпилируйте kata-kernel.
   
   - Загрузите [kata-containers/packaging](https://github.com/kata-containers/packaging.git)
   - Вставьте соответствующий конфигурационный файл в /kernel/configs/ папки ядра и переименуйте `.config`:
   
   ```
   cp x86_64_kata_kvm_4.14.x /home/kernel/.config
   ```
   
   - Войдите в папку kernel/ и выполните команду:
   
   ```
   make -j vmlinux
   objcopy -O binary vmlinux vmlinux.bin
   ```

2. Скомпилируйте Kata containers-initrd.img.
   
   - Загрузите [kata\_integration](https://gitee.com/openeuler/kata_integration.git)
   - Войдите в каталог kata\_Integration и загрузите [kata-agent](https://github.com/kata-containers/agent)
   - В kata\_integration/ создайте папку `build` в каталоге интеграции.
   - Переименуйте каталог kata-agent в `agent`.
   - Войдите в папку agent/.
   - Примените патч:
   
   ```
   ./apply-patches
   ```
   
   - Войдите в каталог kata\_integration/ и скомпилируйте:
   
   ```
   make initrd
   ```
   
   - Войдите в папку сборки и проверьте результаты компиляции: kata-agent kata-containers-initrd.img

3. Измените конфигурационный файл, задав типу гипервизора безопасной песочницы значение stratovirt.
   
   ```
   [hypervisor.stratovirt]
   path = "/home/stratovirt.sh"
   kernel = "/home/kernel/vmlinux.bin"
   initrd = "/var/lib/kata/kata-containers-initrd.img"
   block_device_driver = "virtio-mmio"
   use_vsock = true
   enable_netmon = false
   internetworking_model="none"
   sandbox_cgroup_with_emulator = false
   disable_new_netns = false
   ```

4. В качестве пути к исполняемому файлу безопасной песочницы установите абсолютный путь stratovirt.sh. Содержимое скрипта stratovirt.sh:
   
   ```
   #!/bin/bash
   export STRATOVIRT_LOG_LEVEL=info  # set log level which includes trace, debug, info, warn and error.
   /usr/bin/stratovirt $@
   ```

5. Выполните команду iSulad, чтобы подключить Kata к StratoVirt.
   
   ```
   $ isula run -tid --runtime=kata-runtime --name test busybox:latest sh
   ```