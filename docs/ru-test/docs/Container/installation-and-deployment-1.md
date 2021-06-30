# Установка и развертывание

- [Установка и развертывание](#installation-and-deployment-1)
  - [Методы установки](#installation-methods-26)
  - [Конфигурация настроек при развертывании](#deployment-configuration-27)
    - [Настройка контейнерного движка Docker](#configuring-the-docker-engine)
    - [Настройка iSulad](#isulad-configuration)
    - [Файл configuration.toml](#configuration-toml)

## Методы установки

### Необходимые условия

- В целях повышения производительности безопасный контейнер должен работать на физическом сервере без операционной системы и не должен работать на виртуальных машинах.
- Работа безопасного контейнера зависит от следующих компонентов (openEuler версии 1.0). Убедитесь, что в среде установлены необходимые компоненты. Для установки iSulad обратитесь к разделу [Методы установки.](#installation-methods.md)
  - docker-engine
  - qemu

### Процедура установки

Выпущенные релизы компонентов безопасного контейнера включены в пакет **kata-containers-**_version_**.rpm**. Соответствующее программное обеспечение устанавливается командой **rpm.**

```
rpm -ivh kata-containers-<version>.rpm
```

## Конфигурация настроек при развертывании

### Настройка контейнерного движка Docker

Чтобы контейнерный движок Docker поддерживал kata-runtime, настройте его, выполнив следующие шаги:

1. Убедитесь, что все пакеты программного обеспечения (**docker-engine** и **kata-container**) установлены в среде.

2. Остановите работу контейнерного движка Docker.
   
   ```
   systemctl stop docker
   ```

3. Измените конфигурационный файл **/etc/docker/daemon.json** движка Docker и добавьте следующие настройки:
   
   ```
   {
     "runtimes": {
       "kata-runtime": {
         "path": "/usr/bin/kata-runtime",
         "runtimeArgs": [
             "--kata-config",
             "/usr/share/defaults/kata-containers/configuration.toml"
           ]
       }
     }
   }
   ```

4. Перезапустите контейнерный движок Docker.
   
   ```
   systemctl start docker
   ```

### Настройка iSulad

Чтобы iSulad поддерживал новую среду выполнения kata-runtime, выполните следующие шаги, аналогичные тем, которые выполняются для контейнерного движка docker-engine:

1. Убедитесь, что все пакеты программного обеспечения (**iSulad** и **kata-container**) установлены в среде.

2. Остановите iSulad.
   
   ```
   systemctl stop isulad
   ```

3. Измените конфигурационный файл **/etc/isulad/daemon.json** iSulad и добавьте следующие настройки:
   
   ```
   {
     "runtimes": {
       "kata-runtime": {
         "path": "/usr/bin/kata-runtime",
         "runtime-args": [
             "--kata-config",
             "/usr/share/defaults/kata-containers/configuration.toml"
           ]
       }
     }
   }
   ```

4. Перезапустите iSulad.
   
   ```
   systemctl start isulad
   ```

### Файл configuration.toml

Безопасный контейнер предоставляет конфигурационный файл с глобальными настройками configuration.toml. Пользователи могут также настроить путь и параметры настройки конфигурационного файла безопасного контейнера.

Для указания частного файла в поле **runtimeArges** движка Docker настраивается параметр **--kata-config**. Путь по умолчанию к конфигурационному файлу: **/usr/share/defaults/kata-containers/configuration.toml**.

Далее перечислены общие поля в конфигурационном файле. Подробную информацию о параметрах конфигурационных файлов см. в [configuration.toml](#configuration-toml-31.md).

1. hypervisor.qemu
   
   - **path**: путь выполнения QEMU виртуализации.
   - **kernel**: путь выполнения ядра гостевой ОС.
   - **initrd**: путь выполнения initrd гостевой ОС.
   - **machine\_type**: тип аналогового чипа. Параметр принимает значение **virt** для архитектуры ARM и **pc** для архитектуры x86.
   - **kernel\_params**: текущие параметры ядра гостевой ОС.

2. proxy.kata
   
   - **path**: текущий путь к kata-proxy.
   - **enable\_debug**: активация функции отладки для процесса kata-proxy.

3. agent.kata
   
   - **enable\_blk\_mount**: включение возможности монтирования гостевой ОС для блочного устройства.
   - **enable\_debug**: активация функции отладки для процесса kata-agent.

4. runtime
   
   - **enable\_cpu\_memory\_hotplug**: включение функции горячей замены процессора и памяти.
   - **enable\_debug**: активация функции отладки для процесса kata-runtime.