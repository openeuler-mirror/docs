# Подготовка

\[\[toc]]

## Конфигурирование среды разработки

- Минимальные требования к аппаратному обеспечению среды разработки при использовании физических машин приведены в [Табл. 1](#table154419352610).
  
  **Табл. 1** Минимально требуемые спецификации аппаратного обеспечения
  
  | Компонент             | Минимально требуемые спецификации аппаратного обеспечения    | Описание                                                     |
  | --------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
  | Архитектура           | AArch64 <br />x86\_64                                        | 64-разрядная архитектура ARM<br/>64-разрядная архитектура Intel x86 |
  | Центральный процессор | Процессор Huawei серии Kunpeng 920<br/>Intel ® Xeon®         | \-                                                           |
  | Память                | ≥ 4 ГБ (для удобства пользователей рекомендуется 8 ГБ и больше) | \-                                                           |
  | Жесткий диск          | ≥ 120 ГБ (для удобства пользователей)                        | Жесткий диск поддерживает интерфейсы IDE, SATA, SAS.         |
  


- Минимальные требования к виртуальному пространству среды разработки при использовании виртуальных машин приведены в [Табл. 2](#table780410493819).
  
  **Табл. 2** Минимальные требования к виртуальному пространству среды разработки
  
  | Компонент             | Минимальные требования к виртуальному пространству среды разработки |
  | --------------------- | ------------------------------------------------------------ |
  | Архитектура           | AArch64<br/> x86\_64                                         |
  | Центральный процессор | Два процессора                                               |
  | Память                | ≥ 4 ГБ (для удобства пользователей рекомендуется 8 ГБ и больше) |
  | Жесткий диск          | ≥ 32 ГБ (для удобства пользователей рекомендуется 120 ГБ и больше) |
  
  
  

### Требования к ОС

Необходима операционная система openEuler.

Подробная информация об установке операционной системы openEuler приведена в документе \[*Руководство по установке openEuler 20.03-LTS*] (./../Installation/Installation.html). На странице **SOFTWARE SELECTION** выберите **Development Tools** в области **Add-Ons for Selected Environment**.

## Настройка источника репозитория

Сконфигурируйте онлайн-источник Yum, получив онлайн-источник репозитория openEuler. Альтернативный вариант: сконфигурируйте локальный источник Yum, смонтировав файл ISO и создав локальный источник репозитория openEuler.

### Настройка источника репозитория методом получения его файла

> ![](./public_sys-resources/icon-note.gif) ПРИМЕЧАНИЕ:  
openEuler предоставляет несколько источников репозитория, которые пользователи могут загрузить онлайн. Для получения подробной информации об источниках репозитория см. раздел [Установка системы](./../Releasenotes/installing-the-os.html). В этом разделе настройка источника репозитория ОС в качестве источника Yum приводится на примере файла **openEuler\_aarch64.repo**.

1. Перейдите в каталог источника Yum и проверьте в нем конфигурационный файл .repo.
   
   ```
   $ cd /etc/yum.repos.d
   $ ls 
   openEuler.repo
   ```

2. Измените файл **openEuler\_aarch64.repo** как пользователь с правами **root**. Сконфигурируйте онлайн-источник репозитория openEuler как источник Yum.
   
   ```
   # vi openEuler.repo
   ```
   
   Измените файл **openEuler\_aarch64.repo** следующим образом:
   
   ```
   [osrepo]

   name=osrepo

   baseurl=http://repo.openeuler.org/openEuler-20.03-LTS/OS/aarch64/

   enabled=1

   gpgcheck=1
   gpgkey=http://repo.openeuler.org/openEuler-20.03-LTS/OS/aarch64/RPM-GPG-KEY-openEuler
   ```

****


> ![](./public_sys-resources/icon-note.gif) ПРИМЕЧАНИЕ:
> 
> - repoid в \[*repoid*] — это идентификатор репозитория для хранения пакетов программного обеспечения. Данные идентификаторы во всех конфигурационных файлах .repo должны быть уникальными. В данном примере repoid имеет значение **base**.
> - **name** — это строка, описанная в репозитории программного обеспечения.
> - **baseurl** — адрес репозитория программного обеспечения.
> - Параметром **enabled** включается репозиторий источника программного обеспечения. Принимаемые значения — **1** или **0**. Значение по умолчанию **1** означает, что репозиторий источника программного обеспечения включен.
> - Параметром **gpgcheck** включается функция шифрования информации и создания электронных цифровых подписей GNU Privacy Guard (GnuPG, GPG) с целью проверки действительности и безопасности источников пакетов RPM. **1** означает, что проверка GPG включена. **0** означает, что проверка GPG выключена. Если этот параметр не задан, проверка GPG включается по умолчанию.
> - **gpgkey** — открытый ключ, используемый для проверки подписи.

### Настройка источника репозитория методом монтирования файла ISO

> ![](./public_sys-resources/icon-note.gif)ПРИМЕЧАНИЕ:  
openEuler предоставляет несколько пакетов с релизами ISO. Для получения подробной информации о пакетах с релизами ISO см. раздел [Установка системы](./../Releasenotes/installing-the-os.html). В этом разделе в качестве примера используются файл **openEuler-20.03-LTS-aarch64-dvd.iso** и файл верификации **openEuler-20.03-LTS-aarch64-dvd.iso.sha256sum**. Измените значение в соответствии с фактическими требованиями.

1. Загрузите пакет с релизом ISO.
   
   - Загрузите образ ISO с помощью межплатформенного инструмента передачи файлов.
     
     1. Войдите в сообщество openEuler на странице [https://openeuler.org](https://openeuler.org).
     
     2. Нажмите **Download**.
     
     3. Нажмите на ссылку, стоящую после **Download ISO**. На экране появится список пакетов для загрузки.
     
     4. Выберите версию, например openEuler 20.03-LTS. Затем нажмите **openEuler-20.03-LTS**. На экране появится список пакетов для загрузки.
     
     5. Нажмите **ISO**. Откроется список файлов ISO для загрузки.
        
        - **aarch64**: файл образа ISO для архитектуры AArch64
        - **x86\_64**: файл образа ISO для архитектуры x86\_64
        - **source**: файл образа ISO для исходного кода openEuler
     
     6. Нажмите **aarch64**.
     
     7. Нажмите **openEuler-20.03-LTS-aarch64-dvd.iso**, чтобы загрузить пакет с релизами openEuler на локальный хост.
     
     8. Нажмите **openEuler-20.03-LTS-aarch64-dvd.iso.sha256sum**, чтобы загрузить файл верификации openEuler на локальный хост.
     
     9. Войдите в ОС openEuler и создайте каталог для хранения пакета с релизами и файла верификации, например ~ / iso\*\*.
        
        ```
        $ mkdir ~/iso
        ```
     
     10. Выгрузите локальный пакет с релизами openEuler и файл верификации в целевую ОС openEuler с помощью межплатформенного инструмента передачи файлов (например, WinSCP).
   
   - Выполните команду **wget**, чтобы загрузить образ ISO.
     
     1. Войдите в сообщество openEuler на странице [https://openeuler.org](https://openeuler.org).
     
     2. Нажмите **Download**.
     
     3. Нажмите на ссылку, стоящую после **Download ISO**. На экране появится список пакетов для загрузки.
     
     4. Выберите версию, например openEuler 20.03-LTS. Затем нажмите **openEuler-20.03-LTS**. На экране появится список пакетов для загрузки.
     
     5. Нажмите **ISO**. Откроется список файлов ISO для загрузки.
        
        - **aarch64**: файл образа ISO для архитектуры AArch64
        - **x86\_64**: файл образа ISO для архитектуры x86\_64
        - **source**: файл образа ISO для исходного кода openEuler
     
     6. Нажмите **aarch64**.
     
     7. Щелкните правой кнопкой мыши файл **openEuler-20.03-LTS-aarch64-dvd.iso** и выберите **Copy URL** из контекстного меню, чтобы скопировать адрес пакета с релизом openEuler.
     
     8. Щелкните правой кнопкой мыши файл **openEuler-20.03-LTS-aarch64-dvd.iso.sha256sum** и выберите **Copy URL** из контекстного меню, чтобы скопировать адрес файла верификации openEuler.
     
     9. Войдите в ОС openEuler, создайте каталог (например, **~/iso**) для хранения пакета с релизами и файла верификации и перейдите в данный каталог.
        
        ```
        $ mkdir ~/iso
        $ cd ~/iso
        ```
     
     10. Выполните команду **wget**, чтобы удаленно загрузить пакет с релизами и файл верификации. В данной команде **ipaddriso** и **ipaddrisosum** являются адресами, скопированными на шагах [1.g](#li62369349505) и [1.h](#li9236203405015).
         
         ```
         $ wget ipaddriso
         $ wget ipaddrisosum
         ```

2. Проверьте целостность пакета с релизами.
   
   1. Возьмите верификационный код из файла верификации.
      
      ```
      $ cat openEuler-20.03-LTS-aarch64-dvd.iso.sha256sum
      ```
   
   2. Вычислите верификационный код SHA256 для пакета с релизом openEuler.
      
      ```
      $ sha256sum openEuler-20.03-LTS-aarch64-dvd.iso 
      ```
      
      После выполнения команды появляется верификационный код.
   
   3. Убедитесь, что значения, вычисленные на шагах 1 и 2, совпадают.
      
      Если верификационные коды совпадают, файл.iso не поврежден. Если они не совпадают, файл поврежден, и необходимо получить его заново.

3. <a name="li6236932222"></a>Смонтируйте файл ISO и сконфигурируйте его как источник репозитория.
   
   Чтобы смонтировать файл образа, выполните команду **mount** как пользователь с правами **root**.
   
   Пример:
   
   ```
   # mount /home/iso/openEuler-20.03-LTS-aarch64-dvd.iso /mnt/
   ```
   
   Смонтированный каталог **mnt**:
   
   ```
   .
   │── boot.catalog
   │── docs
   │── EFI
   │── images
   │── Packages
   │── repodata
   │── TRANS.TBL
   └── RPM-GPG-KEY-openEuler
   ```
   
   Здесь **Packages** означает каталог, в котором хранится пакет RPM, **repodata** означает каталог, в котором хранятся метаданные источника репозитория, а **RPM-GPG-KEY-openEuler** — это открытый ключ для подписи openEuler.

4. Перейдите в каталог источника Yum и проверьте в нем конфигурационный файл .repo.
   
   ```
   $ cd /etc/yum.repos.d
   $ ls 
   openEuler.repo
   ```

5. Измените файл **openEuler\_aarch64.repo** как пользователь с правами **root**. Сконфигурируйте локальный источник репозитория openEuler, созданный на шаге [3](#li6236932222), в качестве источника Yum.
   
   ```
   # vi openEuler.repo
   ```
   
   Измените файл **openEuler\_aarch64.repo** следующим образом:
   
   ```
   [localosrepo]
   name=localosrepo
   baseurl=file:///mnt
   enabled=1
   gpgcheck=1
   gpgkey=file:///mnt/RPM-GPG-KEY-openEuler
   ```

## Установка пакета программного обеспечения

Установите программное обеспечение, необходимое для разработки. Инструментальное программное средство выбирается в зависимости от среды разработки, а методы установки не отличаются. В этом разделе описывается, как установить широко используемые пакеты программного обеспечения (например, JDK и rpm-build). Некоторые инструментальные программные средства, такие как GCC и GNU make, по умолчанию предусмотрены в ОС openEuler.

### Установка комплекта разработчика JDK

1. Выполните команду **dnf list installiert \| grep jdk**, чтобы убедиться, что комплект JDK установлен.
   
   ```
   $ dnf list installed | grep jdk
   ```
   
   Проверьте выходные данные команды. Если выходные данные команды содержат «jdk», значит, комплект разработчика JDK установлен. Если данной информации нет в выходных данных, комплект не установлен.

2. Очистите кэш.
   
   ```
   $ dnf clean all
   ```

3. Создайте кэш.
   
   ```
   $ dnf makecache
   ```

4. Запросите пакет JDK, который можно установить.
   
   ```
   $ dnf search jdk | grep jdk
   ```
   
   Проверьте выходные данные команды и установите программный пакет **java-x.x.x-openjdk-devel.aarch64**. x.x.x означает номер версии.

5. Как пользователь с правами **root** установите комплект JDK. Далее в качестве примера приведен пакет **java-1.8.0-openjdk-devel**.
   
   ```
   # dnf install java-1.8.0-openjdk-devel.aarch64
   ```

6. Запросите информацию о программном обеспечении JDK.
   
   ```
   $ java -version
   ```
   
   Проверьте выходные данные команды. Если выходные данные команды содержат информацию «openjdk version «1.8.0\_232»», значит, комплект разработчика JDK установлен корректно. В выходных данных команды **1.8.0\_232** означает версию JDK.

### Установка пакета программного обеспечения rpm-build

1. Выполните команду **dnf list installed \| grep rpm-build**, чтобы убедиться, что комплект rpm-build установлен.
   
   ```
   $ dnf list installed | grep rpm-build
   ```
   
   Проверьте выходные данные команды. Если выходные данные команды содержат «rpm-build», значит, программное обеспечение установлено. Если данной информации нет в выходных данных, комплект не установлен.

2. Очистите кэш.
   
   ```
   $ dnf clean all
   ```

3. Создайте кэш.
   
   ```
   $ dnf makecache
   ```

4. Как пользователь с правами **root** установите пакет rpm-build.
   
   ```
   # dnf install rpm-build
   ```

5. Запросите версию ПО rpm-build.
   
   ```
   $ rpmbuild --version
   ```

## Использование среды IDE для разработки приложений Java

Для компиляции и запуска небольших приложений Java можно сразу воспользоваться комплектом JDK. Однако этот метод не подходит с точки зрения требований к разработке средних и крупных приложений Java. Чтобы создать условия для разработки приложений Java на базе ОС openEuler, установите и используйте среду IDE, выполнив следующие шаги.

### Обзор

IntelliJ IDEA является популярной интегрированной средой разработки программного обеспечения для языка программирования Java. Выпуск сообщества IntelliJ IDEA доступен для бесплатного скачивания. В настоящее время openEuler поддерживает разработку Java в интегрированной среде IntelliJ IDEA (IDE), что повышает эффективность работы разработчиков.

### Вход на сервер с помощью MobaXterm

Терминал MobaXterm зарекомендовал себя как отличный клиент SSH. Данный терминал с компонентом X Server легко решает задачи удаленного графического интерфейса пользователя.

Необходимо предварительно скачать, установить и запустить MobaXterm, а затем войти на сервер в режиме SSH, чтобы выполнить следующие операции.

### Настройка среды JDK

Перед настройкой JAVA\_HOME необходимо найти путь установки комплекта JDK. Комплект JDK должен быть установлен. Если нет установленного JDK, установите его, следуя инструкциям в разделах Подготовка > Установка пакета программного обеспечения > Установка комплекта разработчика JDK.

Проверьте установки Java следующей командой:

```
$ which java
/usr/bin/java
```

Выполните следующую команду, чтобы проверить каталог, на который указывает символическая ссылка:

```
$ ls -la /usr/bin/java
lrwxrwxrwx. 1 root root  22 Mar 6 20:28 /usr/bin/java -> /etc/alternatives/java
$ ls -la /etc/alternatives/java
lrwxrwxrwx. 1 root root  83 Mar 6 20:28 /etc/alternatives/java -> /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.232.b09-1.h2.aarch64/jre/bin/java
```

Фактический путь **/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.232.b09-1.h2.aarch64**. Настройте **JAVA\_HOME** и **PATH**, выполнив следующую команду.

```
$ export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.232.b09-1.h2.aarch64
$ export PATH=$JAVA_HOME/bin:$PATH
```

### Загрузка и установка библиотеки GTK

Выполните следующую команду:

```
$ dnf list installed | grep gtk
```

Если отображается **gtk2** или **gtk3**, значит, библиотека GTK установлена. В таком случае пропустите этот шаг. В противном случае, как пользователь с правами **root**, выполните следующую команду, чтобы автоматически загрузить и установить библиотеку GTK:

```
# dnf -y install gtk2 libXtst libXrender  xauth
```

### Настройка переадресации X11

Перейдите в каталог конфигурации SSHD.

```
$ cd ~/.ssh
```

Если каталог не существует, создайте его, выполнив следующую команду, а затем перейдите в каталог:

```
$ mkdir ~/.ssh
```

Измените конфигурационный файл в каталоге **.ssh** и сохраните файл.

1. Выполните команду **vim**, чтобы открыть конфигурационный файл.
   
   ```
   $ vim config
   ```

2. Запишите в конец файла следующее содержимое и сохраните его:
   
   ```
   Host *
    	  ForwardAgent yes
    	  ForwardX11 yes
   ```

### Загрузка и запуск IntelliJ IDEA

Выполнив вышеуказанные настройки среды, скачайте и запустите IntelliJ IDEA. Последняя версия IntelliJ IDEA несовместима с openEuler в ряде функций. Рекомендуется скачать пакет Linux версии 2018 по [данной ссылке](https://www.jetbrains.com/idea/download/other.html). Переместите загруженный пакет в каталог, в который необходимо установить программное обеспечение, и распакуйте его.

```
$ tar xf ideaIC-2018.3.tar.gz
```

Распаковав пакет, перейдите в каталог IntelliJ IDEA и запустите IntelliJ IDEA.

```
$ cd ./idea-IC-183.4284.148
$ bin/idea.sh &
```