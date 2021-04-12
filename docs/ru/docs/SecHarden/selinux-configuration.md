# Настройка политики SELinux

## Обзор

Политика избирательного контроля доступа (Discretionary Access Control; DAC) определяет, разрешен или запрещен доступ к ресурсу в соответствии с правами, выданными отдельным пользователям или группам, и другими правами. Данная политика не позволяет системному администратору формировать комплексные и детальные политики безопасности. SELinux (Security-Enhanced Linux) — это модуль ядра Linux и подсистема безопасности Linux. SELinux реализует обязательный контроль доступа (Mandatory Access Control; MAC). Каждый процесс и системный ресурс имеет специальную метку безопасности. В дополнение к принципам, определенным политикой DAC, модуль SELinux устанавливает каждому типу процесса разрешение на доступ к одному типу ресурсов.

По умолчанию openEuler использует SELinux для повышения безопасности системы. SELinux имеет три режима:

- **permissive**: SELinux выдает аварийные сообщения, но не выполняет принудительно политику безопасности.
- **enforcing**: принудительное выполнение политики безопасности SELinux.
- **disabled**: политика безопасности SELinux не загружается.

## Описание конфигурации

Модуль SELinux включен в ОС openEuler по умолчанию в режиме **enforcing**. Изменить режим SELinux можно, изменив значение **SELINUX** в файле **/etc/selinux/config**.

- Чтобы отключить политику SELinux, выполните следующую команду:
  
  ```
  SELINUX=disabled
  ```

- Чтобы применить политику в режиме **permissive**, выполните следующую команду:
  
  ```
  SELINUX=permissive
  ```

> ![](./public_sys-resources/icon-note.gif) ПРИМЕЧАНИЕ:  
При переключении с режима отключенной политики в другой режим необходимо перезапустить систему, чтобы настройки режима вступили в силу.
> 
> ```
> # reboot  
> ```

## Команды SELinux

- Запрос режима SELinux. Приведенный пример команды показывает, что применяется режим **permissive** политики SELinux.
  
  ```
  # getenforce
  Permissive
  ```

- Установка режима SELinux. Значение **0** означает режим **permissive**, значение **1** — режим **enforcing**. В приведенном примере выполняется команда установки политики SELinux в режим **enforcing**. Эта команда не используется для установки режима отключенной политики. После перезапуска системы восстанавливается режим, установленный в файле **/etc/selinux/config**.
  
  ```
  # setenforce 1
  ```

- Запрос статуса SELinux. Статус SELinux передается параметром **SELinux status**. **enabled** означает, что политика SELinux включена, а **disabled** означает, что политика SELinux отключена. **Current mode** означает текущий режим политики безопасности SELinux.
  
  ```
  # sestatus
  SELinux status:                 enabled
  SELinuxfs mount:                /sys/fs/selinux
  SELinux root directory:         /etc/selinux
  Loaded policy name:             targeted
  Current mode:                   enforcing
  Mode from config file:          enforcing
  Policy MLS status:              enabled
  Policy deny_unknown status:     allowed
  Memory protection checking:     actual (secure)
  Max kernel policy version:      31
  ```