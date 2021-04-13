# Решенные проблемы

Весь список проблем см. в разделе [Полный перечень проблем](https://gitee.com/organizations/src-openeuler/issues).

Подробнее о всех отправленных изменениях кода ядра см. в разделе [Отправка изменений кода](https://gitee.com/openeuler/kernel/commits/openEuler-1.0-LTS).

**Приложения и базовые службы**

| Проблема                                                     | Описание                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [I1TPY4](https://gitee.com/src-openeuler/mariadb/issues/I1TPY4) | Сбой установки x86/arm mariadb-server.                       |
| [I1TOV5](https://gitee.com/src-openeuler/lm_sensors/issues/I1TOV5) | Невозможен запуск по умолчанию lm\_sensors. systemd находится в состоянии сбоя. |
| [I1TOCE](https://gitee.com/src-openeuler/kexec-tools/issues/I1TOCE) | Не удается запустить службу kdump на физической машине с архитектурой x86 или ARM. |
| [I1TZH1](https://gitee.com/src-openeuler/firewalld/issues/I1TZH1) | Правило не вступает в силу, если порт назначения 80, и пакеты данных, получаемые с IP-адреса источника хоста, добавлены в сервер с архитектурой x86. |
| [I1T4O3](https://gitee.com/src-openeuler/lvm2/issues/I1T4O3) | Во время установки x86 PXE устанавливаются minimal, @core и @base с использованием %packages file в файле.ks, а после успешной установки запуск блокируется. |
| [I1T8JJ](https://gitee.com/src-openeuler/freeradius/issues/I1T8JJ) | Сбой установки сервера freeRADIUS с архитектурой ARM.        |
**Языки программирования и компиляторы**

| Проблема                                                     | Описание                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [I1RUM6](https://gitee.com/src-openeuler/file/issues/I1RUM6) | Следите за новостями сообщества, чтобы решить проблему некорректного типа файла, созданного после компиляции gcc -static-pie. |
**Виртуализация и контейнеры**

| Проблема                                                     | Описание                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [I1TB7N](https://gitee.com/openeuler/kernel/issues/I1TB7N?from=project-issue) | Таймер наблюдения за немаскируемыми прерываниями виртуальной машины PMU NMI не поддерживает горячее подключение процессора. |
| [I1TXAU](https://gitee.com/openeuler/kernel/issues/I1TXAU?from=project-issue) | Не удается запустить виртуальную машину, если в режиме процессора виртуальной машины настроена модель хоста. |
| [I1U8BP](https://gitee.com/openeuler/kernel/issues/I1U8BP?from=project-issue) | Если openEuler используется как образ для настройки доверенной загрузки, виртуальная машина не может идентифицировать устройство TPM. |
**Ядро**

| Проблема| Описание|
|:----------|:----------|
| [I17YPQ](https://gitee.com/openeuler/kernel/issues/I17YPQ?from=project-issue)| Диск, подключенный к плате контроллера LSI SAS3408 RAID, не идентифицируется во время установки.|
| [I1JZHT](https://gitee.com/openeuler/kernel/issues/I1JZHT?from=project-issue)| Netdevsim неоднократно загружается и удаляется, что приводит к перезагрузке системы.|
| [I1RUC8](https://gitee.com/openeuler/kernel/issues/I1RUC8?from=project-issue)| Большой спад производительности работы функции vmalloc на серверах с архитектурой x86.|
| [I1R86G](https://gitee.com/openeuler/kernel/issues/I1R86G?from=project-issue)| Сообщение об ошибке pread по время теста openEuler на открытой базе данных GaussDB, которая является причиной возврата к -EIO.|
| [I1SISM](https://gitee.com/openeuler/kernel/issues/I1SISM?from=project-issue) | Не удается смонтировать диск XFS емкостью size=8192 на платформе openEuler с архитектурой x86. |


**Безопасность**

| Проблема| Описание|
|:----------|:----------|
| [I1TQ15](https://gitee.com/openeuler/kernel/issues/I1TQ15?from=project-issue)| Сообщение об ошибке во время выполнения команды firewall-cmd --reload для добавления группы IP-адресов, которая не существует в поле заполнения адреса источника.|

**Аппаратное обеспечение и чипы**

| Проблема| Описание|
|:----------|:----------|
| [I1SY0K](https://gitee.com/openeuler/raspberrypi/issues/I1SY0K)| Функция Raspberry Pi Wi-Fi недоступна, не удается подключиться к сети Wi-Fi.|
| [I1R4G1](https://gitee.com/openeuler/raspberrypi/issues/I1R4G1)| Неоднократный сбой подключения к Raspberry Pi BT.|

**Файловая система**

| Проблема| Описание|
|:----------|:----------|
| [I1E0KN](https://gitee.com/src-openeuler/findutils/issues/I1E0KN)| В момент, когда пользователь одновременно создает и удаляет папки в файловой системе XFS и делает запрос папок командой find, происходит дамп памяти.|
| [I1MA88](https://gitee.com/src-openeuler/libguestfs/issues/I1MA88)| Служба libguestfs использует код Gnulib, который имеет уязвимость, что вызывает дамп памяти.|
| [I1T3GC](https://gitee.com/src-openeuler/nfs-utils/issues/I1T3GC)| Во время проверки смонтированного диска на клиенте NFS передается сообщение о сбое выделения памяти. |

**Сеть**

| Проблема| Описание|
|:----------|:----------|
| [I1TO3R](https://gitee.com/src-openeuler/network-manager-applet/issues/I1TO3R)| Ошибка вызова network-manager-appletda во время установки и ручной настройки ipv4.|
| [I1TYDG](https://gitee.com/src-openeuler/NetworkManager/issues/I1TYDG)| Служба NetworkManager не может восстановиться самостоятельно из-за ошибки службы D-Bus.|
| [I1AD7N](https://gitee.com/src-openeuler/initscripts/issues/I1AD7N)| Потеря IP-адреса при перезапуске сети в связи с изменением возвращаемого значения команды grep -L в файле network-scripts.|

**Системные инструменты**

| Проблема| Описание|
|:----------|:----------|
| [I1U7RL](https://gitee.com/src-openeuler/system-config-printer/issues/I1U7RL)| Ошибка во время установки system-config-printer.|
| [I1T8H4](https://gitee.com/src-openeuler/tuned/issues/I1T8H4)| После установки устройства с архитектурой x86/ARM по умолчанию выполняется команда systemctl -all --failed, при этом не удается запустить службу tuned. |

