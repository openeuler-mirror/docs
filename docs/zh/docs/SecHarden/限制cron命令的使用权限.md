# 限制cron命令的使用权限<a name="ZH-CN_TOPIC_0192977553"></a>

## 说明<a name="zh-cn_topic_0152100335_sd1be7f48ab304e97b21867e554f115dd"></a>

cron命令用于创建例行性任务。为避免任意用户通过cron命令安排工作，造成系统易受攻击，需要指定可使用该命令的用户。

## 实现<a name="zh-cn_topic_0152100335_s138659793af743d082dce3e785546b5b"></a>

1.  删除/etc/cron.deny文件。

    ```
    rm -f /etc/at.deny
    ```

2.  将/etc/cron.allow的文件属主改为root:root。

    ```
    chown root:root /etc/cron.allow
    ```

3.  控制/etc/cron.allow的文件权限，仅root可操作。

    ```
    chmod og-rwx /etc/cron.allow
    ```


