# Поддержка функции OCI hooks

- Поддержка функции OCI hooks
  - [Описание](#description)
  - [API](#apis)
  - [Ограничения по использованию](#usage-restrictions)

## Описание

В течение жизненного цикла контейнера поддерживается работа стандартных механизмов перехвата (OCI hooks). Существует три типа стандартных перехватов:

- Перехват перед стартом (prestart hook): выполняется после выполнения команды **isula start** и до запуска процесса init контейнера.
- Перехват после старта (poststart hook): выполняется после запуска процесса init и перед возвратом результата выполнения команды **isula start**.
- Перехват после остановки (poststop hook): выполняется после остановки контейнера и перед возвратом результата выполнения команды остановки.

Спецификации формата конфигурации OCI hooks:

- **path**: (Обязательный параметр) Значением является строка символов, обозначающая абсолютный путь. Указанный файл должен иметь разрешение на выполнение.
- **args**: (Необязательный параметр) Значением является массив символов. Синтаксис такой же, как и у параметра **args** в **execv**.
- **env**: (Необязательный параметр) Значением является массив символов. Синтаксис такой же, как и у переменных среды. Содержимое представляет собой пару ключ-значение, например **PATH=/usr/bin**.
- **timeout**: (Необязательный параметр) Значением должно быть целое число больше 0. Задает период ожидания для выполнения перехвата. Если время работы процесса hook превышает заданный период, процесс hook аннулируется.

Конфигурация hook формируется в формате JSON и обычно хранится в файле, название которого заканчивается словом **json**. Пример:

```
{
        "prestart": [
            {
                "path": "/usr/bin/echo",
                "args": ["arg1", "arg2"],
                "env":  [ "key1=value1"],
                "timeout": 30
            },
            {
                "path": "/usr/bin/ls",
                "args": ["/tmp"]
            }
        ],
        "poststart": [
            {
                "path": "/usr/bin/ls",
                "args": ["/tmp"],
                "timeout": 5
            }
        ],
        "poststop": [
            {
                "path": "/tmp/cleanup.sh",
                "args": ["cleanup.sh", "-f"]
            }
        ]
}
```

## API

API для функции перехвата предоставляют и iSulad, и iSula. Конфигурации hook по умолчанию, которые предоставляет iSulad, применяются ко всем контейнерам. АPI для функции hook, которые предоставляет iSula, применяются только к текущему создаваемому контейнеру.

Конфигурации OCI hook по умолчанию, предоставляемые iSulad:

- Установите элемент конфигурации **hook-spec** в конфигурационном файле **/etc/isulad/daemon.json**, чтобы указать путь к файлу. Пример: **"hook-spec": "/etc/default/isulad/hooks/default.json"**
- Используя параметр **isulad --hook-spec**, установите путь к конфигурационному файлу hook.

Конфигурации OCI hook, предоставляемые iSula:

- **isula create --hook-spec**: путь к конфигурационному файлу hook в формате JSON.
- **isula run --hook-spec**: путь к конфигурационному файлу hook в формате JSON.

Конфигурация **run** вступает в силу на этапе создания.

## Ограничения по использованию

- Путь, указанный с помощью **hook-spec**, должен быть абсолютным путем.

- Должен существовать файл, заданный параметром **hook-spec**.

- Путь, указанный посредством **hook-spec**, должен содержать общий текстовый файл в формате JSON.

- Размер файла, заданного параметром **hook-spec**, не должен превышать 10 МБ.

- Заданный для функции перехвата параметр **path** должен быть абсолютным путем.

- Должен существовать файл, сконфигурированный для функции перехвата и обозначенный как **path**.

- Файл, сконфигурированный для функции перехвата и обозначенный как **path**, должен иметь разрешение на выполнение.

- Владельцем файла, сконфигурированного для функции перехвата и обозначенного как **path,** должен быть пользователь **root**.

- Только пользователь **root** имеет разрешение на запись в файле, сконфигурированном для функции перехвата и обозначенном как **path**.

- Значение **timeout**, заданное для функции перехвата, должно быть больше 0.
  
   