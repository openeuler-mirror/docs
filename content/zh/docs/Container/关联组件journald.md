# 关联组件journald<a name="ZH-CN_TOPIC_0184808201"></a>

重启systemd-journald后需要重启docker daemon。journald通过pipe获取docker daemon的日志，如果journald服务重启，会导致该pipe被关闭，docker的日志写入操作便会触发SIGPIPE信号，该错误信号会导致docker daemon crash。由于忽略该信号影响严重，可能导致后续docker daemon的日志无法记录，因此建议用户在重启journald服务或者journald 异常后主动去重启docker daemon，保证docker日志能够被正常记录，避免daemon crash导致的状态异常。

