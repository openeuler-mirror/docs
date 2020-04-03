# Journald Component<a name="EN-US_TOPIC_0184808201"></a>

After systemd-journald is restarted, Docker daemon needs to be restarted. Journald obtains the Docker daemon logs through a pipe. If the journald service is restarted, the pipe is disabled. The write operation of Docker logs triggers the SIGPIPE signal, which causes the Docker daemon crash. If this signal is ignored, the subsequent Docker daemon logs may fail to be recorded. Therefore, you are advised to restart Docker daemon after the journald service is restarted or becomes abnormal, ensuring that Docker logs can be properly recorded and preventing status exceptions caused by daemon crash.

