# Мониторинг безопасных контейнеров

- [Мониторинг безопасных контейнеров](#monitoring-secure-containers)

## Описание

Для просмотра информации о состоянии указанного контейнера используется команда **kata events**. Информация включает, в том числе, память контейнера, процессор, PID, Blkio, память подкачки методом больших страниц и сетевую информацию.

## Использование

```
kata-runtime events [command options] <container-id>
```

## Параметры

- **-- interval value**: интервал запроса. Если этот параметр не указан, используется значение по умолчанию 5 секунд.
- **--stats:** вывод информации о контейнере и выход из запроса.

## Необходимые условия

Запрашиваемый контейнер должен находиться в состоянии **running**. В противном случае появится следующее сообщение об ошибке: "Container ID (\<container\_id>) does not exist".

Эту команду можно использовать для запроса состояния только одного контейнера.

## Пример

- Состояние контейнера выводится каждые три секунды.
  
  ```
  $ kata-runtime events --interval 3s 5779b2366f47
  {
      "data": {
          "blkio": {},
          "cpu": {
              "throttling": {},
              "usage": {
                  "kernel": 130000000,
                  "percpu": [
                      214098440
                  ],
                  "total": 214098440,
                  "user": 10000000
              }
          },
          "hugetlb": {},
          "intel_rdt": {},
          "interfaces": [
              {
                  "name": "lo",
                  "rx_bytes": 0,
                  "rx_dropped": 0,
                  "rx_errors": 0,
                  "rx_packets": 0,
                  "tx_bytes": 0,
                  "tx_dropped": 0,
                  "tx_errors": 0,
                  "tx_packets": 0
              }
          ],
          "memory": {
              "cache": 827392,
              "kernel": {
                  "failcnt": 0,
                  "limit": 9223372036854771712,
                  "max": 421888,
                  "usage": 221184
              },
              "kernelTCP": {
                  "failcnt": 0,
                  "limit": 0
              },
              "raw": {
                  "active_anon": 49152,
                  "active_file": 40960,
                  "cache": 827392,
                  "dirty": 0,
                  "hierarchical_memory_limit": 9223372036854771712,
                  "hierarchical_memsw_limit": 9223372036854771712,
                  "inactive_anon": 0,
                  "inactive_file": 839680,
                  "mapped_file": 540672,
                  "pgfault": 6765,
                  "pgmajfault": 0,
                  "pgpgin": 12012,
                  "pgpgout": 11803,
                  "rss": 4096,
                  "rss_huge": 0,
                  "shmem": 32768,
                  "swap": 0,
                  "total_active_anon": 49152,
                  "total_active_file": 40960,
                  "total_cache": 827392,
                  "total_dirty": 0,
                  "total_inactive_anon": 0,
                  "total_inactive_file": 839680,
                  "total_mapped_file": 540672,
                  "total_pgfault": 6765,
                  "total_pgmajfault": 0,
                  "total_pgpgin": 12012,
                  "total_pgpgout": 11803,
                  "total_rss": 4096,
                  "total_rss_huge": 0,
                  "total_shmem": 32768,
                  "total_swap": 0,
                  "total_unevictable": 0,
                  "total_writeback": 0,
                  "unevictable": 0,
                  "writeback": 0
              },
              "swap": {
                  "failcnt": 0,
                  "limit": 9223372036854771712,
                  "max": 34201600,
                  "usage": 1204224
              },
              "usage": {
                  "failcnt": 0,
                  "limit": 9223372036854771712,
                  "max": 34201600,
                  "usage": 1204224
              }
          },
          "pids": {
              "current": 1
          },
          "tcp": {},
          "tcp6": {},
          "udp": {},
          "udp6": {}
      },
      "id": "5779b2366f47cd1468ebb1ba7c52cbdde3c7d3a5f2af3eefadc8356700fc860b",
      "type": "stats"
  }
  ```

- Запрос завершается после появления информации о состоянии контейнера.
  
  ```
  kata-runtime events --stats <container_id>
  ```
  
  Формат командного вывода такой же, как и формат предыдущей команды. Однако результат выполнения этой команды отображается только один раз.