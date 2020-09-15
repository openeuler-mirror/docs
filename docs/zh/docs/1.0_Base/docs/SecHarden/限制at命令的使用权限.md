# 限制at命令的使用权限<a name="ZH-CN_TOPIC_0192977552"></a>

## 说明<a name="zh-cn_topic_0152100391_s537ff0b05b114d12a100992eb3adee78"></a>

at命令用于创建在指定时间自动执行的任务。为避免任意用户通过at命令安排工作，造成系统易受攻击，需要指定可使用该命令的用户。

## 实现<a name="zh-cn_topic_0152100391_s3681c3be654d40558aefb25645ccb765"></a>

1.  删除/etc/at.deny文件。

    ```
    rm -f /etc/at.deny
    ```

2.  将/etc/at.allow的文件属主改为root:root。

    ```
    chown root:root /etc/at.allow
    ```

3.  控制/etc/at.allow的文件权限，仅root可操作。

    ```
    chmod og-rwx /etc/at.allow
    ```


