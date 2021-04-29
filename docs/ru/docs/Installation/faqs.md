# Вопросы и ответы

\[\[toc]]

## Почему не удается запустить ОС openEuler после установки на втором диске?

### Признак

Во время установки операционная система устанавливается на втором диске **sdb**. ОС openEuler не удается запустить.

### Возможные причины

Когда ОС openEuler устанавливается на второй диск, MBR и GRUB устанавливаются на второй диск **sdb** по умолчанию. Могут возникнуть следующие две ситуации:

1. ОС openEuler, установленная на первом диске, загружается и запускается, если установлена полностью.
2. ОС openEuler, установленная на первом диске, не запускается с жестких дисков, если установлена неполностью.

Эти описанные ситуации возникают в связи с тем, что по умолчанию openEuler загружается с первого диска **sda** и запускается в окне BIOS. Если ОС openEuler не установлена на диске **sda**, перезапуск системы не выполняется.

### Решение

Эту проблему можно решить одним из следующих двух способов:

- Во время установки openEuler выберите первый диск или оба диска и установите загрузчик на первый диск **sda**.
- После установки ОС openEuler перезапустите ее, изменив параметр загрузки в окне BIOS.

## Почему ОС openEuler переходит в аварийный режим после включения питания?

### Признак

ОС openEuler переходит в аварийный режим сразу после включения питания.

![](./figures/en-us_image_0229291264.jpg)

### Возможные причины

Поврежденные файлы ОС приводят к сбою монтирования диска, или большое число операций ввода-вывода приводят к тайм-ауту монтирования диска (пороговое значение: 90 с).

Также проблему могут вызвать неожиданное отключение питания системы и низкая производительность ввода-вывода дисков.

### Решение

1. Введите пароль учетной записи **root** для входа в ОС openEuler.

2. Проверьте и восстановите файлы с помощью инструмента проверки файловой системы (fsck) и перезапустите openEuler.
   
   > ![](./public_sys-resources/icon-note.gif) ПРИМЕЧАНИЕ:  
Инструмент fsck проверяет файловые системы и корректирует несоответствия. Если питание системы выключено или неисправен диск, выполните команду **fsck** для проверки файловых систем. Выполните команды **fsck.ext3 -h** и **fsck.ext4 -h**, чтобы проверить метод использования инструмента **fsck**.

Если необходимо отключить механизм тайм-аута монтирования диска, добавьте **x-systemd.device-timeout=0** в файл **etc/fstab**. Пример:

```
#
# /etc/fstab
# Created by anaconda on Mon Sep 14 17:25:48 2015
#
# Accessible filesystems, by reference, are maintained under '/dev/disk'
# See man pages fstab(5), findfs(8), mount(8) and/or blkid(8) for more info
#
/dev/mapper/openEuler-root / ext4 defaults,x-systemd.device-timeout=0 0 0
UUID=afcc811f-4b20-42fc-9d31-7307a8cfe0df /boot ext4 defaults,x-systemd.device-timeout=0 0 0
/dev/mapper/openEuler-home /home ext4 defaults 0 0
/dev/mapper/openEuler-swap swap swap defaults 0 0
```

## Не удается переустановить openEuler в условиях существования в openEuler группы логических томов, которую невозможно активировать

### Признак

После отказа диска невозможно переустановить openEuler в связи с тем, что в openEuler существует группа логических томов, которую невозможно активировать.

### Возможные причины

Во время установки openEuler не удается активировать группу логических томов.

### Решение

Перед переустановкой openEuler восстановите нормальное состояние группы логических томов или выполните сброс состояния. Пример:

- Восстановите группу логических томов.
  
  1. Выполните следующую команду, чтобы сбросить активный статус проблемной группы логических томов и убедиться, что сообщение об ошибке «Can't open /dev/sdc exclusively mounted filesystem» не отображается:
     
     ```
      vgchange -a n testvg32947
     ```
  
  2. Выполните следующую команду, чтобы восстановить физический том на основе резервного файла:
     
     ```
     pvcreate --uuid JT7zlL-K5G4-izjB-3i5L-e94f-7yuX-rhkLjL --restorefile /etc/lvm/backup/testvg32947 /dev/sdc
     ```
  
  3. Выполните следующую команду, чтобы восстановить информацию о группе логических томов:
     
     ```
     vgcfgrestore testvg32947
     ```
  
  4. Выполните следующую команду, чтобы заново активировать группу логических томов:
     
     ```
      vgchange -ay testvg32947
     ```

- Выполните следующие команды, чтобы сбросить состояние группы логических томов:
  
  ```
  vgchange -a n testvg32947
  vgremove -y testvg32947
  ```

## Ошибка при выборе источника установки

### Признак

После выбора источника установки на экране появляется сообщение «Error checking software selection».

### Возможные причины

Причина заключается в некорректно установленной зависимости пакета программного обеспечения в источнике установки.

### Решение

Убедитесь в корректности источника установки. Используйте новый источник установки.

## Как вручную включить службу kdump?

### Признак

Выполните команду **systemctl status kdump**. Выводится следующая информация, указывающая на отсутствие памяти.

![](./figures/en-us_image_0229291280.png)

### Возможные причины

Службе kdump требуется, чтобы в системе была зарезервирована память для запуска ядра kdump. Однако память для службы kdump в системе не зарезервирована. В результате службу kdump невозможно запустить.

### Решение

Для сценария, в котором ОС уже установлена:

1. Добавьте **crashkernel=1024M,high** в файл **/boot/efi/EFI/openEuler/grub.cfg**.

2. Перезагрузите систему, чтобы настройки вступили в силу.

3. Проверьте статус службы kdump следующей командой:
   
   ```
   systemctl status kdump
   ```
   
   Если выводится следующая информация, значит, статус службы kdump — **active**, то есть данная служба включена. Дальнейшие действия не требуется.
   
   ![](./figures/en-us_image_0229291272.png)

### Описание параметров

В следующей таблице описываются параметры памяти, резервируемой для ядра kdump.

**Табл. 1** Параметры crashkernel

| **Параметр загрузки ядра**            | **Описание**                                                 | **Значение по умолчанию**                                    | **Примечания**                                               |
| ------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| crashkernel=X                         | Данный параметр резервирует объем физической памяти X для ядра kdump, если он меньше 4 ГБ. | Укажите требуемое значение данного параметра.                | Настройка этого параметра необходима только в том случае, если память меньше 4 ГБ. Убедитесь, что доступной для непрерывного использования памяти достаточно. |
| crashkernel=X@Y                       | Данный параметр резервирует объем памяти X в начальном адресе Y для ядра kdump. | Укажите требуемое значение данного параметра.                | Убедитесь, что объем памяти X в начальном адресе Y не выделен для других модулей. |
| crashkernel=X,high                    | Данный параметр резервирует для ядра kdump 256 МБ физической памяти, если ее объем меньше 4 ГБ, и X физической памяти, если ее объем больше или равен 4 ГБ. | Укажите требуемое значение данного параметра. Рекомендуемое значение — **1024M,high**. | Убедитесь, что для непрерывного использования зарезервирован объем физической памяти 256 МБ, если он меньше 4 ГБ, и объем X, если он больше или равен 4 ГБ. Фактический размер зарезервированной памяти равен 256 МБ плюс X. |
| crashkernel=X,low  crashkernel=Y,high | Данный параметр резервирует для ядра kdump объем физической памяти X, если он меньше 4 ГБ, и Y, если объем больше или равен 4 ГБ. | Укажите требуемое значение данного параметра.                | Данный параметр резервирует для ядра kdump объем физической памяти X, если он меньше 4 ГБ, и Y, если объем больше или равен 4 ГБ. Фактический размер зарезервированной памяти равен X плюс Y. |

## Не удается выбрать один диск для переустановки в условиях, когда ОС openEuler установлена в логический том, состоящий из нескольких дисков

### Признак

Если ОС openEuler установлена в логическом томе, состоящем из нескольких дисков, при попытке выбрать один из дисков для переустановки будет отображаться сообщение об ошибке, показанной на [Рис. 1](#fig115949762617).

**Рис. 1** Сообщение об ошибке  
![](./figures/error-message.png "error-message")

### Возможные причины

Вышеуказанный логический том содержит несколько дисков. Если выбрать один из дисков для переустановки, логический том будет поврежден.

### Решение

Логический том, сформированный несколькими дисками, эквивалентен группе томов. Поэтому необходимо удалить только соответствующую группу томов.

1. Нажмите **Ctrl**+**Alt**+**F2** для переключения в интерфейс командной строки и выполните следующую команду, чтобы найти группу томов:
   
   ```
   vgs
   ```
   
   ![](./figures/en-us_image_0231657950.png)

2. Удалите группу томов следующей командой:
   
   ```
   vgremove euleros
   ```

3. Следующей командой перезапустите программу установки, чтобы изменение вступило в силу:
   
   ```
   systemctl restart anaconda
   ```
   
   > ![](./public_sys-resources/icon-note.gif) ПРИМЕЧАНИЕ:  
Чтобы обновить конфигурацию системы хранения, нажмите **Ctrl**+**Alt**+**F6** для возврата в графический интерфейс и нажмите **Refresh** в правом нижнем углу.

## Не удается установить openEuler на x86 PM в режиме UEFI из-за настройки безопасной загрузки

### Признак

Во время установки openEuler на x86 PM в режиме UEFI система остается на странице «No bootable device», и установка далее не выполняется, потому что включен режим безопасной загрузки, то есть параметр **secure boot** имеет значение **enabled** (по умолчанию установлено значение **disabled**), см. [Рис. 2](#fig115949762617).

**Рис. 2** Диалоговое окно, сообщающее об отсутствии загрузочного устройства  
![](./figures/dialog-box-showing-no-bootable-device.png "dialog-box-showing-no-bootable-device")

### Возможные причины

После включения режима безопасной загрузки, то есть установки параметру **secure boot** значения **enabled**, материнская плата проверяет загрузочную программу и ОС. Если загрузочная программа и ОС не имеют подпись соответствующего закрытого ключа, они не могут пройти процедуру аутентификации встроенного открытого ключа на материнской плате.

### Решение

Войдите в BIOS, установите параметр **secure boot** в значение **disabled** и повторно установите openEuler.

1. Во время запуска системы нажмите **F11** и введите пароль **Admin@9000**, чтобы получить доступ к BIOS.
   
   ![](./figures/bios.png)

2. Выберите **Administer Secure Boot**.
   
   ![](./figures/security.png)

3. Задайте параметру **Enforce Secure Boot** значение **Disabled**.
   
   ![](./figures/enforce-secure-boot.png)
   
   > ![](./public_sys-resources/icon-note.gif) ПРИМЕЧАНИЕ:  
Установив параметру **Enforce Secure Boot** значение **Disabled**, сохраните настройки и выйдите. Затем переустановите систему.