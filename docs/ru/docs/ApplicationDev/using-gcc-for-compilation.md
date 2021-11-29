# Применение компиляторов GCC

В этой главе описываются основные сведения о наборе компиляторов GCC и приводятся примеры для демонстрации их работы. Для получения дополнительной информации о GCC выполните команду **man gcc**.

\[\[toc]]

## Обзор

GNU Compiler Collection (GCC) — это набор мощных и высокопроизводительных многоплатформенных компиляторов для различных языков программирования, разработанный в рамках проекта GNU. Компиляторы GCC компилируют и компонуют программы-источники, программы сборки и целевые программы на языках C и C++ в исполняемые файлы. По умолчанию в ОС openEuler установлен пакет программного обеспечения GCC.

## Основные сведения

### Тип файла

Тип каждого указанного входного файла определяет метод компиляции, который будет выполнен. В [Табл. 1](#table634145764320) приведены стандартные типы файлов GCC

**Табл. 1** Стандартные типы файлов GCC

| Расширение (суффикс) | Описание                                                     |
| -------------------- | ------------------------------------------------------------ |
| .c                   | Файл с исходным кодом на языке C.                            |
| .C，.cc или .cxx     | Файл с исходным кодом на языке C++.                          |
| .m                   | Файл с исходным кодом на языке Objective-C.                  |
| .s                   | Файл с исходным кодом на языке Ассемблер.                    |
| .i                   | Файл с предварительно обработанным исходным кодом на языке C. |
| .ii                  | Файл с предварительно обработанным исходным кодом на языке C++. |
| .S                   | Файл с предварительно обработанным исходным кодом на языке Ассемблер. |
| .h                   | Файл заголовка, содержащийся в программе.                    |
| .o                   | Целевой файл после компиляции.                               |
| .so                  | Динамическая библиотека ссылок в виде специального целевого файла. |
| .a                   | Библиотека статических ссылок.                               |
| .out                 | Исполняемые файлы, не имеющие фиксированного суффикса. Система отличает исполняемые файлы от неисполняемых файлов по их атрибутам. Если имя исполняемого файла не указано, GCC генерирует файл с именем a.out. |


### Процесс компиляции

Чтобы сгенерировать исполняемые файлы из файлов исходного кода с помощью набора компиляторов GCC, необходимо выполнить операции предварительной обработки, компиляции, сборки и связывания.

1. Предварительная обработка: данная операция выполняется с исходной программой (например, файлом **.c**) с целью создания файла **.i**.
2. Компиляция: предварительно обработанный код файла **.i** компилируется на языке ассемблера и создается файл **.s**.
3. Сборка: сборка файла на языке ассемблера и создание целевого файла **.o**.
4. Связывание: файлы **.o** каждого модуля связываются, и создается исполняемый файл программы.

Файлы **.i, .s** и **.o** являются промежуточными или временными файлами. Если компилятор GCC используется также и для компиляции программ на языке C, эти файлы удаляются.

### Параметры команды компиляции

Формат команды компиляции, выполняемой с помощью GCC: **gcc** \[_options_] \[_filenames_]

Параметры:

*options*: параметры компиляции.

_filenames_: имя файла.

GCC — это мощный компилятор. В компиляторе предусмотрен ряд параметров, указываемых в поле *options*, но большинство из них используются редко. В [Табл. 2](#table1342946175212) приведено описание часто используемых параметров.

**Табл. 2** Часто используемые параметры GCC

| Параметр                | Описание                                                     | Пример                                                       |
| ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| -c                      | Компиляция и сборка указанных исходных файлов с целью создания целевых файлов без их связывания. Обычно этот параметр используется для компиляции файлов подпрограмм. | \# В приведенном примере с использованием параметра **-c** компилируются исходные файлы test1.c и test2.c.<br/>gcc -c test1.c test2.c |
| -S                      | Компиляция указанных исходных файлов с целью создания файла на языке ассемблера с суффиксом **.s**, но без сборки. | \# В приведенном примере компилятор используется для предварительной обработки circle.c, его трансляции на язык ассемблера и сохранения результата в файле circle.c.<br/>gcc -S circle.c |
| -E                      | Предварительная обработка указанных исходных файлов без их компиляции.<br/>По умолчанию выходные данные команды, выполняемой препроцессором, импортируются в стандартный поток результатов, например, для отображения на дисплее. Для импорта в файл выходных данных можно использовать параметр **-o**. | \# В приведенном примере результаты предварительной обработки экспортируются в файл circle.i.<br/>gcc -E circle.c -o circle.i |
| -o *файл*               | Генерация указанного файла с выходными данными команды при создании исполняемого файла. Имя должно отличаться от имени исходного файла. Если этот параметр не указан, GCC генерирует предустановленный исполняемый файл a.out. | \# В приведенном примере исходный файл используется в качестве входного файла, а исполняемый файл в качестве выходного файла. То есть, компилируется вся программа.<br/>gcc main.c func.c -o app.out |
| -g                      | Данный параметр содержит стандартную информацию отладки в исполняемых программах. | -                                                            |
| -L *путь\_к библиотеке* | Данный параметр добавляет путь к библиотеке в список путей для поиска файлов библиотеки. | \-                                                           |
| -l *путь\_к библиотеке* | Поиск указанной библиотеки функций во время операции связывания.<br/>Если компилятор GCC используется для компиляции и связывания программ, GCC по умолчанию привязывает библиотеку libc.a или libc.so. Однако другие библиотеки (например, нестандартные библиотеки и библиотеки сторонних разработчиков) добавляются вручную. | \# В приведенном примере параметр -l используется для связывания математической библиотеки.<br/>gcc main.c -o main.out -lm<br/>ПРИМЕЧАНИЕ:<br/>Имя файла математической библиотеки — libm.a. Префикс **lib** и суффикс **.a** являются стандартными, а **m** — это базовое имя. GCC автоматически добавляет эти префиксы и суффиксы к базовому имени после параметра -l. В этом примере используется базовое имя **m**. |
| -I *путь\_к заголовку*  | Добавляет путь к заголовку в список путей поиска файла заголовка. | \-                                                           |
| -static                 | Данный параметр служит для выполнения статической компиляции и связывания статических библиотек. Не используется для связывания динамических библиотек. | \-                                                           |
| -shared                 | Параметр по умолчанию, который может быть пропущен.<br/>Можно создать динамический файл библиотеки.<br/>Во время динамической компиляции связывается преимущественно динамическая библиотека. Статическая библиотека с тем же именем связывается только при отсутствии динамической библиотеки. | \-                                                           |
| -fPIC（или -fpic）      | Генерация независимого от местоположения целевого кода, для которого используется относительный адрес. Как правило, параметр -static используется для создания файла динамической библиотеки из целевого файла PIC. | \-                                                           |
### Компиляция нескольких файлов

Компиляция нескольких исходных файлов выполняется двумя способами.

- Одновременно компилируются несколько исходных файлов. Во время компиляции все файлы проходят повторную компиляцию.
  
  Пример. В этом примере файлы **test1.c** и **test2.c** компилируются и привязываются к исполняемому файлу **test**.
  
  ```
  $ gcc test1.c test2.c -o test
  ```

- Компилируется отдельно каждый исходный файл и затем связываются целевые файлы, сгенерированные после компиляции. Повторному процессу компиляции подвергаются только измененные файлы.
  
  В приведенном примере компилируются файлы **test1.c** и **test2.c** и далее целевые файлы **test1.o** и **test2.o** привязываются к исполняемому файлу **test**.
  
  ```
  $ gcc -c test1.c
  $ gcc -c test2.c
  $ gcc -o test1.o test2.o -o test
  ```

## Библиотеки

Библиотека представляет собой доработанный и многократно используемый код, который был написан для использования. Каждая программа зависит от имеющихся базовых библиотек.

Имя файла библиотеки имеет префикс **lib** и суффикс **.so** (динамическая библиотека) или **.a** (статическая библиотека). Между префиксом и суффиксом пользователь указывает имя файла библиотеки, например libfoo.so или libfoo.a. Поскольку все файлы библиотеки соответствуют одним спецификациям, то если параметром **-l** задать имя связанного файла библиотеки, префикс **lib** можно опустить. То есть, когда GCC обрабатывает **-lfoo**, автоматически связывается файл библиотеки **libfoo.so** или **libfoo.a**. При создании библиотеки необходимо указать полное имя файла **libfoo.so** или **libfoo.a**.

Библиотеки классифицируются на статические и динамические библиотеки в зависимости от времени связывания. Статическая библиотека связывает и упаковывает целевой файл **.o**, сгенерированный ассемблером, и библиотеку ссылок в исполняемый файл на этапе связывания. Динамическая библиотека не связывается с целевым кодом во время компиляции программы, но загружается при запуске программы. Разница заключается в следующем:

- Отличается объем занимаемых ресурсов.
  
  Статическая библиотека является частью сгенерированного исполняемого файла, в то время как динамическая библиотека представляет собой отдельный файл. Поэтому размеры исполняемых файлов и занимаемые ими дисковые пространства у статической и динамической библиотек отличаются, что приводит к разной загрузке ресурсов.

- Отличаются характеристики масштабируемости и совместимости.
  
  В случае изменения реализации функции в статической библиотеке необходимо повторно скомпилировать исполняемый файл. Для исполняемого файла, сгенерированного с помощью динамической связи, необходимо обновить только динамическую библиотеку, а исполняемый файл не требует повторной компиляции.

- Отличаются зависимости.
  
  Исполняемый файл статической библиотеки может работать независимо от остального содержимого, в то время как исполняемый файл динамической библиотеки зависит от содержимого динамической библиотеки. Поэтому статическая библиотека удобна для миграции.

- Отличаются скорости загрузки.
  
  Связывание статических библиотек осуществляется вместе с исполняемыми файлами, в то время как динамические библиотеки связываются только во время их загрузки или запуска в работу. Поэтому для одной и той же программы статическое связывание осуществляется быстрее, чем динамическое связывание.

### Библиотека динамических ссылок

Используя параметры **-shared** и **-fPIC**, можно создать библиотеку динамических ссылок (DLL) для связывания с исходным файлом, файлом сборки или целевым файлом. На этапе компиляции используется параметр **-fPIC**. Этот параметр требуется для генерации независимого от местоположения кода во время создания целевого файла.

Пример 1. В данном примере библиотека DLL создается из исходного файла.

```
$ gcc -fPIC -shared test.c -o libtest.so
```

Пример 2. В данном примере библиотека DLL создается из целевого файла.

```
$ gcc -fPIC -c test.c -o test.o
$ gcc -shared test.o -o libtest.so
```

Чтобы связать динамическую библиотеку ссылок с исполняемым файлом, необходимо указать имя DLL в командной строке.

В данном примере файлы **main.c** и **libtest.so** компилируются в **app.out**. Библиотека ссылок **libtest.so** динамически загружается во время исполнения файла **app.out**.

```
$ gcc main.c libtest.so -o app.out
```

В этом режиме используется файл **libtest.so** в текущем каталоге.

Если выбирается метод поиска DLL, чтобы удостовериться, что данную библиотеку можно связывать во время работы программы, необходимо применить один из следующих способов:

- Сохраните библиотеку DLL в стандартном каталоге, например **/usr/lib**.

- Добавьте путь **libaryDIR** к библиотеке DLL к переменной среды **LD\_LIBRARY\_PATH**.
  
  $ export LD\_LIBRARY\_PATH=libraryDIR:$LD\_LIBRARY\_PATH
  
  > ![](./public_sys-resources/icon-note.gif) ПРИМЕЧАНИЕ:  
**LD\_LIBRARY\_PATH** — это переменная среды библиотеки DLL. Данная переменная указывается, если DLL находится в других каталогах, а не в каталогах по умолчанию (**/lib** и **/usr/lib**).

- Добавьте путь **libaryDIR** к библиотеке DLL в файл **/etc/ld.so.conf** и выполните команду **ldconfig** или используйте путь **libaryDIR** к библиотеке DLL в качестве параметра для выполнения **ldconfig**.

```
$ gcc main.c -L libraryDIR -ltest -o app.out
$ export LD_LIBRARY_PATH=libraryDIR:$LD_LIBRARY_PATH
```

### Библиотека статических ссылок

Чтобы создать библиотеку статических ссылок (SLL), необходимо скомпилировать исходный файл в целевой файл, а затем выполнить команду **ar**, чтобы сжать целевой файл в SLL.

В данном примере компилируются и сжимаются исходные файлы **test1.c, test2.c** и **test3.c** в библиотеку SLL.

```
$ gcc -c test1.c test2.c test3.c
$ ar rcs libtest.a test1.o test2.o test3.o
```

Команда **ar** используется для сжатия резервных копий. Можно сжать несколько файлов в один резервный файл (также называемый архивным файлом) или извлечь файлы-участники из резервного файла. Чаще всего команда **ar** используется для сжатия целевых файлов в SLL.

Формат команды **ar** для сжатия целевых файлов в SLL:

ar rcs  _Sllfilename_ _Targetfilelist_

- _Sllfilename_: имя файла библиотеки статических ссылок.
- _Targetfilelist_: список целевых файлов.
- **r**: заменяет существующий целевой файл в библиотеке или добавляет новый целевой файл.
- **c**: создает библиотеку независимо от ее существования.
- **s**: создает индекс целевого файла. Скорость более оптимальна при создании большой библиотеки.

В данном примере создается файл **main.c** для использования библиотеки SLL.

```
$ gcc main.c -L libraryDIR -ltest -o test.out
```

Параметр **libraryDIR** задает путь к библиотеке **libtest.a**.

## Примеры

### Пример использования GCC для компиляции программ на языке C

1. Выполните команду **cd**, чтобы перейти в каталог хранения кода. В примере используется каталог **~/code**. Команда выглядит следующим образом:
   
   ```
   $ cd ~/code 
   ```

2. Скомпилируйте программу Hello World и сохраните ее в виде **helloworld.c**. Далее приведен пример с программой Hello World. Команда выглядит следующим образом:
   
   ```
   $ vi helloworld.c
   ```
   
   Пример кода:
   
   ```
   #include <stdio.h>    
   int main()    
   {    
          printf("Hello World!\n");       
          return 0;    
   }
   ```

3. Выполните следующую команду, чтобы скомпилировать код в каталог хранения кода:
   
   ```
   $ gcc helloworld.c -o helloworld
   ```
   
   Если ошибок нет, команда выполнена успешно.

4. После завершения компиляции генерируется файл helloworld. Проверьте результат компиляции. Пример:
   
   ```
   $ ./helloworld
   Hello World!
   ```

### Пример создания и использования библиотеки DLL с помощью компилятора GCC

1. Выполните команду **cd**, чтобы перейти в каталог хранения кода. В примере используется каталог **~/code**. В каталоге создайте подкаталоги **src, lib** и **include** для сохранения в них исходного файла, файла библиотеки DLL и файла заголовка соответственно.
   
   ```
   $ cd ~/code
   $ mkdir src lib include
   ```

2. Выполните команду **cd**, чтобы перейти в каталог **~/code/src,** и создайте две функции **—add.c** для добавления и **sub.c** для вычитания.
   
   ```
   $ cd ~/code/src
   $ vi add.c
   $ vi sub.c
   ```
   
   Пример кода **add.c:**
   
   ```
   #include "math.h"
   int add(int a, int b)
   {
           return a+b;
   }
   ```
   
   Пример кода **sub.c**:
   
   ```
   #include "math.h"
   int sub(int a, int b)
   {
           return a-b;
   }
   ```

3. Скомпилируйте исходные файлы **add.c** и **sub.c** в DLL-библиотеку libmath.so и сохраните данную библиотеку в каталоге **~/code/lib**.
   
   ```
   $ gcc -fPIC -shared add.c sub.c -o ~/code/lib/libmath.so
   ```

4. Перейдите в каталог **~/code/include**, создайте файл заголовка **math.h** и объявите его как файл заголовка функции.
   
   ```
   $ cd ~/code/include
   $ vi math.h
   ```
   
   Пример кода **math.h**:
   
   ```
   #ifndef __MATH_H_
   #define __MATH_H_
   int add(int a, int b);
   int sub(int a, int b);
   #endif
   ```

5. Выполните команду **cd**, чтобы перейти в каталог **~/code/src,** и создайте функцию **main.c,** которая будет инициировать операции добавления add() и вычитания sub().
   
   ```
   $ cd ~/code/src
   $ vi main.c
   ```
   
   Пример кода **math.c**:
   
   ```
   #include <stdio.h>
   #include "math.h"
   int main()
   {
           int a, b;
           printf("Please input a and b:\n");
           scanf("%d %d", &a, &b);
           printf("The add: %d\n", add(a,b));
           printf("The sub: %d\n", sub(a,b));
           return 0;
   }
   ```

6. Скомпилируйте **main.c** и **libtest.so** в код **math**.**out**.
   
   ```
   $ gcc main.c -I ~/code/include -L ~/code/lib -lmath -o math.out
   ```

7. Добавьте путь к библиотеке DLL в переменную среды.
   
   ```
   $ export LD_LIBRARY_PATH=~/code/lib:$LD_LIBRARY_PATH
   ```

8. Запустите на исполнение код **math.out**, выполнив следующую команду:
   
   ```
   $ ./math.out
   ```
   
   Выходные данные команды выглядят следующим образом:
   
   ```
   Please input a and b:
   9 2
   The add: 11
   The sub: 7
   ```

### Пример создания и использования библиотеки SLL с помощью компилятора GCC

1. Выполните команду **cd**, чтобы перейти в каталог хранения кода. В примере используется каталог **~/code**. В каталоге создайте подкаталоги **src, lib** и **include** для сохранения в них исходного файла, файла библиотеки SLL и файла заголовка соответственно.
   
   ```
   $ cd ~/code
   $ mkdir src lib include
   ```

2. Выполните команду **cd**, чтобы перейти в каталог **~/code/src,** и создайте две функции **—add.c** для добавления и **sub.c** для вычитания.
   
   ```
   $ cd ~/code/src
   $ vi add.c
   $ vi sub.c
   ```
   
   Пример кода **add.c:**
   
   ```
   #include "math.h"
   int add(int a, int b)
   {
           return a+b;
   }
   ```
   
   Пример кода **sub.c**:
   
   ```
   #include "math.h"
   int sub(int a, int b)
   {
           return a-b;
   }
   ```

3. Скомпилируйте исходные файлы **add.c** и **sub.c** в целевые файлы **add.o** и **sub.o**.
   
   ```
   $ gcc -c add.c sub.c
   ```

4. Выполните команду **ar,** чтобы сжать целевые файлы **add.o** и **sub.o** в SLL-библиотеку **libmath.a** и сохраните эту библиотеку в каталоге **~/code/lib**.
   
   ```
   $ ar rcs ~/code/lib/libmath.a add.o sub.o
   ```

5. Перейдите в каталог **~/code/include**, создайте файл заголовка **math.h** и объявите его как файл заголовка функции.
   
   ```
   $ cd ~/code/include
   $ vi math.h
   ```
   
   Пример кода **math.h**:
   
   ```
   #ifndef __MATH_H_
   #define __MATH_H_
   int add(int a, int b);
   int sub(int a, int b);
   #endif
   ```

6. Выполните команду **cd**, чтобы перейти в каталог **~/code/src,** и создайте функцию **main.c**, которая будет инициировать операции добавления add() и вычитания sub().
   
   ```
   $ cd ~/code/src
   $ vi main.c
   ```
   
   Пример кода **math.c**:
   
   ```
   #include <stdio.h>
   #include "math.h"
   int main()
   {
           int a, b;
           printf("Please input a and b:\n");
           scanf("%d %d", &a, &b);
           printf("The add: %d\n", add(a,b));
           printf("The sub: %d\n", sub(a,b));
           return 0;
   }
   ```

7. Скомпилируйте **main.c** и **libmath.a** в **math.out**.
   
   ```
   $ gcc main.c -I ~/code/include -L ~/code/lib -lmath -o math.out
   ```

8. Запустите на исполнение код **math.out**, выполнив следующую команду:
   
   ```
   $ ./math.out
   ```
   
   Выходные данные команды выглядят следующим образом:
   
   ```
   Please input a and b:
   9 2
   The add: 11
   The sub: 7
   ```