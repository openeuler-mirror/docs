# Failed to Restart the Docker Service<a name="EN-US_TOPIC_0184808215"></a>

The Docker service cannot be restarted properly due to frequent startup in a short period The Docker system service is monitored by systemd. If the Docker service is restarted for more than five times within 10s, the systemd service detects the abnormal startup. Therefore, the Docker service is disabled. Docker can respond to the restart command and be normally restarted only when the next period of 10s starts.

