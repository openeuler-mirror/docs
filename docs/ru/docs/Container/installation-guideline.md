# Инструкции по установке

1. Установите контейнерный движок iSulad.
   
   ```
   # yum install iSulad
   ```

2. Установите соответствующие пакеты системных контейнеров.
   
   ```
   # yum install isulad-tools authz isulad-lxcfs-toolkit lxcfs
   ```

3. Чтобы удостовериться в успешном запуске iSulad, выполните следующую команду:
   
   ```
   # systemctl status isulad
   ```

4. Включите службы lxcfs и authz.
   
   ```
   # systemctl start lxcfs
   # systemctl start authz
   ```