# Использование KAE

\[\[toc]]

## Обзор

Kunpeng Accelerator Engine (KAE) — это библиотека программных средств ускорения openEuler, выполняющая роль движка аппаратного ускорения на базе процессора Kunpeng 920. Движок поддерживает симметричное шифрование, асимметричное шифрование и цифровую подпись. Он идеально подходит для ускорения работы приложений SSL/TLS и способен значительно снизить загрузку процессоров и повысить эффективность их работы. Кроме того, через стандартный интерфейс OpenSSL пользователи могут быстро переносить существующие службы.

KAE поддерживает следующие алгоритмы:

- Алгоритм дайджеста SM3 с поддержкой асинхронного режима.

- Алгоритм симметричного шифрования SM4, поддерживающий асинхронный режим, а также режимы CTR, XTS и CBC.

- Алгоритм симметричного шифрования AES, поддерживающий асинхронный режим, а также режимы ECB, CTR, XTS и CBC.

- Алгоритм асимметричного шифрования RSA, поддерживающий асинхронный режим и размеры ключей 1024, 2048, 3072 и 4096.

- Алгоритм согласования ключей DH, поддерживающий асинхронный режим и размеры ключей 768, 1024, 1536, 2048, 3072 и 4096.

## Сценарии применения

KAE применяется в сценариях, приведенных в [Табл. 1](#table11915824163418).

**Табл. 1** Сценарии применения

| Сценарий                                           | Данные                                               |
| -------------------------------------------------- | ---------------------------------------------------- |
| Большие данные                                     | Потоковые данные                                     |
| Шифрование данных                                  | Блочный тип данных                                   |
| Интеллектуальная защита и обеспечение безопасности | Данные видеопотоков                                  |
| Веб-сервисы                                        | Установление соединений с подтверждением (Handshake) |
## Установка, запуск и удаление KAE

### Установка пакетов программного обеспечения ускорителя

#### Подготовка к установке

##### Требования к среде

- Движок ускорителя должен быть включен на серверах TaiShan 200.

> ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:
> 
> - Необходимо импортировать лицензию на ускоритель. Для получения подробной информации см. раздел «Управление лицензиями» в [Руководстве пользователя iBMC стоечного сервера TaiShan (V500 или более поздней версии)](https://support.huawei.com/enterprise/en/doc/EDOC1100121685/426cffd9?idPath=7919749|9856522|21782478|8060757).
> - Если ускоритель используется в физической машине, SMMU необходимо отключить. Для получения подробной информации см. [Справочник по параметрам BIOS сервера TaiShan 200](https://support.huawei.com/enterprise/en/doc/EDOC1100088647).

- Процессор: Kunpeng 920
- ОС: openEuler-20.03-LTS-aarch64-dvd.iso

##### Описание программного обеспечения KAE

**Табл. 2** Пакеты программного обеспечения KAE в формате RPM

| Пакет ПО                                         | Описание                                                     |
| ------------------------------------------------ | ------------------------------------------------------------ |
| kae\_driver-version number-1.OS type.aarch64.rpm | Драйвер ускорителя, включая модули ядра uacce.ko, hisi\_qm.ko, hisi\_sec2.ko, hisi\_hpre.ko.<br/>Поддержка: алгоритмы SM3, SM4, AES, RSA и DH. |
| libwd-version number-1.OS type.aarch64.rpm       | Область применения: библиотека динамических ссылок libwd.so. Предоставляет интерфейсы для KAE. |
| libkae-version number-1.OS type.aarch64.rpm      | Зависимость: пакет libwd RPM. <br/>Область применения: библиотека динамических ссылок libwd.so.<br/>Поддержка: алгоритмы SM3, SM4, AES, RSA и DH. |


#### Установка пакета программного обеспечения ускорителя

##### Необходимые условия

- На локальном ПК установлен инструмент удаленного входа в SSH.

- ОС openEuler установлена.

- Инструмент RPM корректно работает.

- Установлена OpenSSL 1.1.1a или более поздняя версия.
  
  Запрос номера версии OpenSSL выполняется следующими командами:
  
  - openssl version

##### Процедура

1. Войдите в CLI openEuler OS как пользователь **root**.

2. Создайте каталог для хранения пакетов программного обеспечения движка ускорителя.

3. Скопируйте весь пакет программного обеспечения движка ускорителя в созданный каталог через SSH.

4. В данном каталоге выполните команду **rpm -ivh** для установки пакетов программного обеспечения движка ускорителя.
   
   > ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
Сначала установите пакет **libwd**, поскольку установка пакета **libkae** зависит от пакета **libwd**.
   
   ```
   rpm -ivh uacce*.rpm hisi*.rpm libwd-*.rpm libkae*.rpm
   ```
   
   ```
   Verifying...                          ################################# [100%]
   Preparing...                          ################################# [100%]
   checking installed modules
   uacce modules start to install
   Updating / installing...
      1:uacce-1.2.10-4.oe1               ################################# [ 14%]
   uacce modules installed
      2:libwd-1.2.10-3.oe1               ################################# [ 29%]
      3:libkae-1.2.10-3.oe1              ################################# [ 43%]
   checking installed modules
   hisi_hpre modules start to install
      4:hisi_hpre-1.2.10-4.oe1           ################################# [ 57%]
   hisi_hpre modules installed
   checking installed modules
   hisi_rde modules start to install
      5:hisi_rde-1.2.10-4.oe1            ################################# [ 71%]
   hisi_rde modules installed
   checking installed modules
   hisi_sec2 modules start to install
      6:hisi_sec2-1.2.10-4.oe1           ################################# [ 86%]
   hisi_sec2 modules installed
   checking installed modules
   hisi_zip modules start to install
      7:hisi_zip-1.2.10-4.oe1            ################################# [100%]
   hisi_zip modules installed
   ```

5. Выполните команду **rpm -qa** , чтобы проверить корректность установки пакетов программного обеспечения ускорителя. Выполните команду **rpm -ql**, чтобы проверить корректность файлов в данных пакетах программного обеспечения. Пример:
   
   ```
   rpm -qa|grep -E "hisi|uacce|libwd|libkae"
   ```
   
   ```
   hisi_rde-1.2.10-4.oe1.aarch64
   hisi_sec2-1.2.10-4.oe1.aarch64
   libkae-1.2.10-3.oe1.aarch64
   hisi_hpre-1.2.10-4.oe1.aarch64
   uacce-1.2.10-4.oe1.aarch64
   libwd-1.2.10-3.oe1.aarch64
   hisi_zip-1.2.10-4.oe1.aarch64
   ```
   
   ```
   rpm -ql uacce hisi* libwd* libkae
   ```
   
   ```
   /lib/modules/4.19.90-2003.4.0.0036.oe1.aarch64/extra/hisi_qm.ko
   /lib/modules/4.19.90-2003.4.0.0036.oe1.aarch64/extra/uacce.ko
   /etc/modprobe.d/hisi_hpre.conf
   /lib/modules/4.19.90-2003.4.0.0036.oe1.aarch64/extra/hisi_hpre.ko
   /etc/modprobe.d/hisi_rde.conf
   /lib/modules/4.19.90-2003.4.0.0036.oe1.aarch64/extra/hisi_rde.ko
   /etc/modprobe.d/hisi_sec2.conf
   /lib/modules/4.19.90-2003.4.0.0036.oe1.aarch64/extra/hisi_sec2.ko
   /etc/modprobe.d/hisi_zip.conf
   /lib/modules/4.19.90-2003.4.0.0036.oe1.aarch64/extra/hisi_zip.ko
   /usr/include/warpdrive/config.h
   /usr/include/warpdrive/include/uacce.h
   /usr/include/warpdrive/smm.h
   /usr/include/warpdrive/wd.h
   /usr/include/warpdrive/wd_bmm.h
   /usr/include/warpdrive/wd_cipher.h
   /usr/include/warpdrive/wd_comp.h
   /usr/include/warpdrive/wd_dh.h
   /usr/include/warpdrive/wd_digest.h
   /usr/include/warpdrive/wd_rsa.h
   /usr/lib64/libwd.so.1.2.10
   /usr/local/lib/engines-1.1/libkae.so.1.2.10
   ```

6. Перезапустите систему или выполните команды, чтобы вручную загрузить драйверы движка ускорителя в ядро, и проверьте успешность завершения загрузки драйверов.
   
   ```
   # modprobe uacce 
   # lsmod | grep uacce 
   # modprobe hisi_qm
   # lsmod | grep hisi_qm 
   # modprobe hisi_qm
   # modprobe hisi_sec2 # Loads the hisi_sec2 driver to the kernel based on the configuration file in /etc/modprobe.d/hisi_sec2.conf.
   # modprobe hisi_hpre # Loads the hisi_hpre driver to the kernel based on the configuration file in /etc/modprobe.d/hisi_hpre.conf.
   ```

##### Настройка переменной среды

Выполните следующую команду, чтобы экспортировать переменную среды (если указан каталог установки, используйте фактический каталог установки вместо **/usr/local**):

```
export OPENSSL_ENGINES=/usr/local/lib/engines-1.1
```

##### Проверка после установки

Выполните команду **rpm -qa**, чтобы проверить успешность установки пакетов программного обеспечения движка ускорителя.

Если в командном выводе содержится информация _имя пакета программного обеспечения-номер верси_и**-**, пакет программного обеспечения успешно установлен. Пример:

```
rpm -qa|grep -E "hisi|uacce|libwd|libkae"
```

```
hisi_rde-1.2.10-4.oe1.aarch64
hisi_sec2-1.2.10-4.oe1.aarch64
libkae-1.2.10-3.oe1.aarch64
hisi_hpre-1.2.10-4.oe1.aarch64
uacce-1.2.10-4.oe1.aarch64
libwd-1.2.10-3.oe1.aarch64
hisi_zip-1.2.10-4.oe1.aarch64
```

#### Выполнение обязательных операций после установки

##### Тестирование движка ускорителя OpenSSL

Для тестирования определенных функций ускорителя можно выполнить следующие команды.

- Тестирование производительности алгоритма RSA с помощью программного алгоритма OpenSSL.
  
  ```
  linux-rmw4:/usr/local/bin # ./openssl speed -elapsed rsa2048
  ...
                   sign    verify    sign/s verify/s
  rsa 2048 bits 0.001384s 0.000035s   724.1  28365.8.
  ```

- Тестирование производительности алгоритма RSA шифрования с помощью KAE.
  
  ```
  linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -engine kae rsa2048
  ....
                   sign    verify    sign/s verify/s
  rsa 2048 bits 0.000355s 0.000022s   2819.0  45478.4
  ```

> ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
#После ускорения с использованием движка KAE производительность сигнатур улучшилась с 724,1 подписей/с до 2819 подписей/с.

- Тестирование производительности алгоритма RSA асинхронного шифрования с помощью программного алгоритма OpenSSL.
  
  ```
  linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -async_jobs 36 rsa2048 
  ....
                    sign    verify    sign/s verify/s
  rsa 2048 bits 0.001318s 0.000032s    735.7  28555
  ```

- Тестирование производительности алгоритма RSA асинхронного шифрования с помощью KAE.
  
  ```
  linux-rmw4:/usr/local/bin # ./openssl speed -engine kae -elapsed -async_jobs 36 rsa2048 
  .... 
                    sign    verify    sign/s verify/s
  rsa 2048 bits 0.000018s 0.000009s  54384.1 105317.0
  ```

> ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
#После ускорения с использованием движка KAE производительность сигнатур алгоритма RSA асинхронного шифрования улучшилась с 735,7 подписей/с до 54384,1 подписей/с.

- Тестирование производительности в режиме SM4 CBC с помощью программного алгоритма OpenSSL.
  
  ```
  linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -evp sm4-cbc
  You have chosen to measure elapsed time instead of user CPU time.
  ....
  Doing sm4-cbc for 3s on 10240 size blocks: 2196 sm4-cbc's in 3.00s  ....
  type          51200 bytes 102400 bytes1048576 bytes2097152 bytes4194304 bytes8388608 bytes
  sm4-cbc          82312.53k    85196.80k    85284.18k    85000.85k    85284.18k    85261.26k
  ```

- Тестирование производительности в режиме SM4 CBC с помощью KAE.
  
  ```
  linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -engine kae -evp sm4-cbc
  engine "kae" set. 
  You have chosen to measure elapsed time instead of user CPU time.
  ...
  Doing sm4-cbc for 3s on 1048576 size blocks: 11409 sm4-cbc's in 3.00s
  ...
  type          51200 bytes 102400 bytes1048576 bytes2097152 bytes4194304 bytes8388608 bytes
  sm4-cbc         383317.33k   389427.20k   395313.15k   392954.73k   394264.58k   394264.58k
  ```

> ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
После ускорения с использованием движка KAE производительность в режиме SM4 CBC улучшается с 82312,53 кбит/с до 383317,33 кбит/с при условии, что размер блока входных данных составляет 8 МБ.

- Тестирование производительности в режиме SM3 с помощью программного алгоритма OpenSSL.
  
  ```
  linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -evp sm3
  You have chosen to measure elapsed time instead of user CPU time.
  Doing sm3 for 3s on 102400 size blocks: 1536 sm3's in 3.00s
  ....
  type          51200 bytes 102400 bytes1048576 bytes2097152 bytes4194304 bytes8388608 bytes
  sm3              50568.53k    52428.80k    52428.80k    52428.80k    52428.80k    52428.80k
  ```

- Тестирование производительности в режиме SM3 с помощью KAE.
  
  ```
  linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -engine kae -evp sm3
  engine "kae" set.
  You have chosen to measure elapsed time instead of user CPU time.
  Doing sm3 for 3s on 102400 size blocks: 19540 sm3's in 3.00s
  ....
  type            51200 bytes  102400 bytes  1048576 bytes 2097152 bytes 4194304 bytes 8388608 bytes
  sm3             648243.20k   666965.33k   677030.57k   678778.20k   676681.05k   668292.44k
  ```

> ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
После ускорения с использованием движка KAE производительность в режиме SM3 улучшается с 52428,80 кбит/с до 668292,44 кбит/с при условии, что размер блока входных данных составляет 8 МБ.

- Тестирование производительности алгоритма асинхронного шифрования AES в режиме CBC с помощью программного алгоритма OpenSSL.
  
  ```
  linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -evp aes-128-cbc -async_jobs 4
  You have chosen to measure elapsed time instead of user CPU time.
  Doing aes-128-cbc for 3s on 51200 size blocks: 65773 aes-128-cbc's in 3.00s
  Doing aes-128-cbc for 3s on 102400 size blocks: 32910 aes-128-cbc's in 3.00s
  ....
  type          51200 bytes 102400 bytes1048576 bytes2097152 bytes4194304 bytes8388608 bytes
  aes-128-cbc    1122525.87k  1123328.00k  1120578.22k  1121277.27k  1119879.17k  1115684.86k
  ```

- Тестирование производительности алгоритма асинхронного шифрования AES в режиме CBC с помощью движка KAE.
  
  ```
  linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -evp aes-128-cbc -async_jobs 4 -engine kae
  engine "kae" set.
  You have chosen to measure elapsed time instead of user CPU time.
  Doing aes-128-cbc for 3s on 51200 size blocks: 219553 aes-128-cbc's in 3.00s
  Doing aes-128-cbc for 3s on 102400 size blocks: 117093 aes-128-cbc's in 3.00s
  ....
  type          51200 bytes 102400 bytes1048576 bytes2097152 bytes4194304 bytes8388608 bytes
  aes-128-cbc    3747037.87k  3996774.40k  1189085.18k  1196774.74k  1196979.11k  1199570.94k
  ```

> ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:
> 
> - Алгоритм AES поддерживает только асинхронный режим, если длина данных не превышает 256 КБ.
> - После ускорения с использованием движка KAE производительность алгоритма AES улучшается с 1123328,00 кбит/с до 3996774,40 кбит/с при условии, что размер блока входных данных составляет 100 КБ.

### Обновление версии пакетов программного обеспечения ускорителя

#### Сценарий

Обновление версии программного обеспечения ускорителя, выполняемое командой **rpm -Uvh.**

#### Процедура

1. Загрузите пакеты программного обеспечения движка ускорителя последней версии с ресурса сообщества openEuler.

2. Войдите в CLI Linux как пользователь **root** через SSH.

3. Сохраните загруженные пакеты программного обеспечения в каталог.

4. В данном каталоге выполните команду **rpm -Uvh** для установки пакета ускорителя и пакета библиотек движка. Пример:
   
   Команда и ее выходные данные выглядят следующим образом:
   
   ![](./figures/en-us_image_0231143189.png)
   
   ![](./figures/en-us_image_0231143191.png)

5. Выполните команду **rpm -qa**, чтобы проверить успешность установки обновленной версии. Убедитесь, что запрошенная версия является последней версией.
   
   ![](./figures/en-us_image_0231143193.png)
   
   ![](./figures/en-us_image_0231143195.png)

6. Чтобы вручную удалить драйверы предыдущей версии, загрузить драйверы последней версии и проверить успешность загрузки новых драйверов, перезапустите систему или выполните следующие команды.
   
   ```
   Uninstall the existing drivers.
   # lsmod | grep uacce 
   uacce                 262144  3 hisi_hpre,hisi_sec2,hisi_qm 
   # 
   # rmmod hisi_hpre 
   # rmmod hisi_sec2 
   # rmmod hisi_qm 
   # rmmod uacce 
   # lsmod | grep uacce 
   # 
   Load the new drivers.# modprobe uacce
   # modprobe hisi_qm# modprobe hisi_sec2 #Loads the hisi_sec2 driver to the kernel based on the configuration file in /etc/modprobe.d/hisi_sec2.conf.
   # modprobe hisi_hpre  #Loads the hisi_hpre driver to the kernel based on the configuration file in /etc/modprobe.d/hisi_hpre.conf.
   # lsmod | grep uacce 
   uacce                36864  3 hisi_sec2,hisi_qm,hisi_hpre
   ```

### Удаление пакетов программного обеспечения ускорителя

#### Сценарий

Программное обеспечение движка ускорителя больше не требуется, или требуется установить новое программное обеспечение движка ускорителя.

#### Процедура

1. Войдите в CLI Linux как пользователь **root** через SSH.

2. Перезапустите систему или выполните следующие команды, чтобы вручную удалить загруженные в ядро драйверы ускорителя, и проверьте успешность удаления драйверов.
   
   ```
   # lsmod | grep uacce 
   uacce                36864  3 hisi_sec2,hisi_qm,hisi_hpre 
   # rmmod hisi_hpre 
   # rmmod hisi_sec2  
   # rmmod hisi_qm 
   # rmmod uacce 
   # lsmod | grep uacce 
   #
   ```

3. Выполните команду **rpm -e** для удаления пакетов программного обеспечения движка ускорителя. Пример:
   
   > ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
В силу определенной зависимой связи пакет **libkae** должен быть удален до удаления пакета **libwd**.
   
   ![](./figures/en-us_image_0231143196.png)
   
   ![](./figures/en-us_image_0231143197.png)

4. Выполните команду **rpm -qa \|grep**, чтобы проверить успешность удаления.
   
   ![](./figures/en-us_image_0231143198.png)

## Запрос журналов

В [Табл. 3](#table52821836) приведена информация, содержащаяся в журнале движка ускорителя.

**Табл. 3** Информация журнала

| Каталог   | Файл           | Описание                                                     |
| --------- | -------------- | ------------------------------------------------------------ |
| /var/log/ | kae.log        | По умолчанию уровень журнала движка OpenSSL — ошибка. Для установки уровня журнала выполните следующую процедуру:<br/>1. Выполните экспорт KAE\_CONF\_ENV=/var/log/.<br/>2. Создайте файл kae.cnf в каталоге /var/log/.<br/>3. В файле kae.cnf сконфигурируйте содержимое следующим образом:<br/>    \[LogSection]<br/>    debug\_level=error #Value <br/>    none/error/info/warning/debug<br/>ПРИМЕЧАНИЕ:<br/>В обычных случаях не рекомендуется включать информацию или уровень журнала отладки. Иначе ухудшается производительность ускорителя. |
| /var/log/ | message/syslog | Журналы ядра хранятся в каталоге /var/log/message.<br/>ПРИМЕЧАНИЕ:<br/>Также сбор журналов драйверов и ядра можно выполнить командой dmesg > /var/log/dmesg.log. |


## Применение движка ускорителя

> ![](./public_sys-resources/icon-note.gif) **ПРИМЕЧАНИЕ**:  
Не рекомендуется использовать движок KAE для вызова соответствующих алгоритмов, если нет приобретенной лицензии на движок. Иначе это может негативно повлиять на производительность алгоритма шифрования OpenSSL.

### Пример кода для KAE

```
#include <stdio.h> 

#include <stdlib.h> 

/* OpenSSL headers */ 

#include <openssl/bio.h> 

#include <openssl/ssl.h> 

#include <openssl/err.h> 

#include <openssl/engine.h> 

int main(int argc, char **argv) 

{ 

    /* Initializing OpenSSL */ 

    SSL_load_error_strings(); 

    ERR_load_BIO_strings(); 

    OpenSSL_add_all_algorithms(); 

    /*You can use ENGINE_by_id Function to get the handle of the Huawei Accelerator Engine*/ 

    ENGINE *e = ENGINE_by_id("kae"); 

    /* Enable the accelerator asynchronization function. This parameter is optional. The value 0 indicates disabled, and the value 1 indicates enabled. The asynchronous function is enabled by default. */

    ENGINE_ctrl_cmd_string(e, "KAE_CMD_ENABLE_ASYNC", "1", 0) 

    ENGINE_init(e); 

    RSA*rsa=RSA_new_method(e);#Specify the engine for RSA encryption and decryption.

    /*The user code*/ 

    ...... 

; 

    ENGINE_free(e); 

; 

}
```

### Использование KAE в конфигурационном файле openssl.cnf OpenSSL

Создайте файл **openssl.cnf** и запишите в него конфигурацию:

```
openssl_conf=openssl_def 
[openssl_def] 
engines=engine_section 
[engine_section] 
kae=kae_section 
[kae_section] 
engine_id=kae 
dynamic_path=/usr/local/lib/engines-1.1/kae.so 
KAE_CMD_ENABLE_ASYNC=1 #The value 0 indicates that the asynchronous function is disabled. The value 1 indicates that the asynchronous function is enabled. The asynchronous function is enabled by default.
default_algorithms=ALL 
init=1
```

Экспортируйте переменную среды **OPENSSL\_CONF**.

```
export OPENSSL_CONF=/home/app/openssl.cnf #Path for storing the openssl.cnf file
```

Ниже приведен пример конфигурационного файла OpenSSL:

```
#include <stdio.h>  

#include <stdlib.h>  

/* OpenSSL headers */  

#include <openssl/bio.h>  

#include <openssl/ssl.h>  

#include <openssl/err.h>  

#include <openssl/engine.h>  

int main(int argc, char **argv)  

{  

    /* Initializing OpenSSL */  

    SSL_load_error_strings();  

    ERR_load_BIO_strings();  

#Load openssl configure 

OPENSSL_init_crypto(OPENSSL_INIT_LOAD_CONFIG, NULL);    OpenSSL_add_all_algorithms();  

    /*You can use ENGINE_by_id Function to get the handle of the Huawei Accelerator Engine*/  

    ENGINE *e = ENGINE_by_id("kae"); 

    /*The user code*/  

    ......  

;  

    ENGINE_free(e);  

;
}
```

## Диагностика и устранение проблем

### Ошибка инициализации

#### Признак

Движок ускорителя не полностью загружен из-за ошибки инициализации.

#### Решение

1. Убедитесь в успешности загрузки драйверов ускорителя. В частности, выполните команду **lsmod**, чтобы проверить существование uacce.ko, qm.ko, sgl.ko, hisi\_sec2.ko, hisi\_hpre.ko, hisi\_zip.ko, hisi\_rde.ko.
   
   ```
   # lsmod | grep uacce
   uacce                  262144  2 hisi_hpre,hisi_qm,hisi_sec2,hisi_zip,hisi_rde
   ```

2. Убедитесь, что библиотека движка ускорителя существует в каталоге **/usr/lib64** (каталог для установки пакетов RPM) или **/usr/local/lib** (каталог для установки исходного кода) и каталоге установки OpenSSL, и убедитесь в корректности установки символической ссылки.
   
   ```
    [root@localhost home]# ll /usr/local/lib/engines-1.1/ |grep kae 
   #Check whether the KAE has been correctly installed and whether a soft link has been established. If yes, the displayed information is as follows:
   # ll /usr/local/lib/engines-1.1/ |grep kae
   lrwxrwxrwx. 1 root root     22 Nov 12 02:33 kae.so -> kae.so.1.0.1
   lrwxrwxrwx. 1 root root     22 Nov 12 02:33 kae.so.0 -> kae.so.1.0.1
   -rwxr-xr-x. 1 root root 112632 May 25  2019 kae.so.1.0.1
   [[root@localhost home]#
    [root@localhost home]# ll /usr/lib64/ | grep libwd  
   #Check whether libwd has been correctly installed and whether a soft link has been established. If yes, the displayed information is as follows:
   lrwxrwxrwx.  1 root root       14 Nov 12 02:33 libwd.so -> libwd.so.1.0.1
   lrwxrwxrwx.  1 root root       14 Nov 12 02:33 libwd.so.0 -> libwd.so.1.0.1
   -rwxr-xr-x.  1 root root   137120 May 25  2019 libwd.so.1.0.1
   [root@localhost home]#
   ```

3. Проверьте, можно ли экспортировать путь к библиотеке движка OpenSSL, выполнив команду **export**.
   
   ```
   # echo $OPENSSL_ENGINES 
   # export OPENSSL_ENGINES=/usr/local/lib/engines-1.1
   #  echo $OPENSSL_ENGINES
   /usr/local/lib/engines-1.1
   ```

### Сбой идентификации устройств ускорителя после установки движка ускорителя

#### Признак

После установки движка ускорителя невозможно идентифицировать устройства ускорителя.

#### Решение

1. Убедитесь, что устройство существует в виртуальной файловой системе. Обычно отображаются следующие устройства ускорителя:
   
   ```
   # ls -al /sys/class/uacce/
   total 0
   lrwxrwxrwx. 1 root root 0 Nov 14 03:45 hisi_hpre-2 -> ../../devices/pci0000:78/0000:78:00.0/0000:79:00.0/uacce/hisi_hpre-2
   lrwxrwxrwx. 1 root root 0 Nov 14 03:45 hisi_hpre-3 -> ../../devices/pci0000:b8/0000:b8:00.0/0000:b9:00.0/uacce/hisi_hpre-3
   lrwxrwxrwx. 1 root root 0 Nov 17 22:09 hisi_rde-4 -> ../../devices/pci0000:78/0000:78:01.0/uacce/hisi_rde-4
   lrwxrwxrwx. 1 root root 0 Nov 17 22:09 hisi_rde-5 -> ../../devices/pci0000:b8/0000:b8:01.0/uacce/hisi_rde-5
   lrwxrwxrwx. 1 root root 0 Nov 14 08:39 hisi_sec-0 -> ../../devices/pci0000:74/0000:74:01.0/0000:76:00.0/uacce/hisi_sec-0
   lrwxrwxrwx. 1 root root 0 Nov 14 08:39 hisi_sec-1 -> ../../devices/pci0000:b4/0000:b4:01.0/0000:b6:00.0/uacce/hisi_sec-1
   lrwxrwxrwx. 1 root root 0 Nov 17 22:09 hisi_zip-6 -> ../../devices/pci0000:74/0000:74:00.0/0000:75:00.0/uacce/hisi_zip-6
   lrwxrwxrwx. 1 root root 0 Nov 17 22:09 hisi_zip-7 -> ../../devices/pci0000:b4/0000:b4:00.0/0000:b5:00.0/uacce/hisi_zip-7
   ```

2. Если планируется использовать устройство HPRE, но устройство не найдено в шаге [1](#li1760055514614), проверьте корректность установки программного обеспечения ускорителя, в соответствии с разделом [Сбой обновления версий драйверов ускорителя](#failed-to-upgrade-the-accelerator-drivers).

3. Если программное обеспечение ускорителя установлено корректно, выполните команду **lspci**, чтобы проверить наличие физического устройства.
   
   ```
   # lspci | grep HPRE
   79:00.0 Network and computing encryption device: Huawei Technologies Co., Ltd. HiSilicon HPRE Engine (rev 21)
   b9:00.0 Network and computing encryption device: Huawei Technologies Co., Ltd. HiSilicon HPRE Engine (rev 21)
   ## lspci | grep SEC
   76:00.0 Network and computing encryption device: Huawei Technologies Co., Ltd. HiSilicon SEC Engine (rev 21)
   b6:00.0 Network and computing encryption device: Huawei Technologies Co., Ltd. HiSilicon SEC Engine (rev 21)
   ## lspci | grep RDE
   78:01.0 RAID bus controller: Huawei Technologies Co., Ltd. HiSilicon RDE Engine (rev 21)
   b8:01.0 RAID bus controller: Huawei Technologies Co., Ltd. HiSilicon RDE Engine (rev 21)
   ## lspci | grep ZIP
   75:00.0 Processing accelerators: Huawei Technologies Co., Ltd. HiSilicon ZIP Engine (rev 21)
   b5:00.0 Processing accelerators: Huawei Technologies Co., Ltd. HiSilicon ZIP Engine (rev 21)
   #
   ```

4. Если в шаге [3](#li1560012551369) физическое устройство не найдено, выполните следующие операции:
   
   - Убедитесь, что лицензия на ускоритель импортирована. Если лицензия на ускоритель не импортирована, ее необходимо импортировать. Для получения подробной информации см. раздел «Управление лицензиями» в [Руководстве пользователя iBMC стоечного сервера TaiShan (V500 или более поздней версии)](https://support.huawei.com/enterprise/en/doc/EDOC1100121685/426cffd9?idPath=7919749|9856522|21782478|8060757). После импорта лицензии на ускоритель выключите питание и перезапустите BMC, чтобы активировать лицензию.
   - Убедитесь, что версии BMC и BIOS поддерживают функцию ускорителя.

### Сбой обновления версий драйверов ускорителя

#### Признак

После обновления и перезапуска системы версия драйвера ускорителя не изменяется.

#### Возможные причины

Перед обновлением версий драйверов ускорителя система обновляет версии других пакетов драйверов. Перед обновлением версии эти пакеты драйверов могут обновлять загрузочную файловую систему initramfs и драйверы ускорителя до соответствия initramfs. Например, если обновлен драйвер NIC, или вручную обновлен initramfs, система в процессе перезапуска сначала загружает драйверы ускорителя с initramfs.

#### Решение

После обновления версий драйверов ускорителя выполните команду **dracut --force**, чтобы снова обновить initramfs.