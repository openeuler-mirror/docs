# Запрос информации о виртуальной машине

\[\[toc]]

## Обзор

StratoVirt можно использовать для запроса состояния виртуальной машины, информации о топологии и онлайн-статуса виртуального процессора vCPU. Для управления виртуальными машинами используется технология QMP. Поэтому перед запросом указанной информации убедитесь, что StratoVirt подключен к виртуальной машине.

## Запрос состояния виртуальной машины

Запрос состояния работы виртуальной машины выполняется командой query-status.

- Процедура
  
  **{ "execute": "query-status" }**

- Пример.

```
<- { "execute": "query-status" }
-> { "return": { "running": true,"singlestep": false,"status": "running" } 
```

## Запрос информации о топологии

Выполните команду query-cpus, чтобы запросить топологию всех процессоров.

- Процедура

**{ "execute": "query-cpus" }**

- Пример.

```
<- { "execute": "query-cpus" }
-> {"return":[{"CPU":0,"arch":"x86","current":true,"halted":false,"props":{"core-id":0,"socket-id":0,"thread-id":0},"qom_path":"/machine/unattached/device[0]","thread_id":8439},{"CPU":1,"arch":"x86","current":true,"halted":false,"props":{"core-id":0,"socket-id":1,"thread-id":0},"qom_path":"/machine/unattached/device[1]","thread_id":8440}]}
```

## Запрос онлайн-статуса vCPU

Выполните команду query--cpus, чтобы запросить онлайн- и офлайн-статусы всех виртуальных процессоров vCPU.

- Процедура

**{ "execute": "query-hotpluggable-cpus" }**

- Пример.

```
<- { "execute": "query-hotpluggable-cpus" }
-> {"return":[{"props":{"core-id":0,"socket-id":0,"thread-id":0},"qom-path":"/machine/unattached/device[0]","type":"host-x86-cpu","vcpus-count":1},{"props":{"core-id":0,"socket-id":1,"thread-id":0},"qom-path":"/machine/unattached/device[1]","type":"host-x86-cpu","vcpus-count":1}]}
```

В данном примере онлайн-vCPU имеют параметр `qom-path`, а у офлайн-vCPU его нет.