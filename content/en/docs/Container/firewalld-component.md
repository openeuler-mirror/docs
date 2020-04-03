# Firewalld Component<a name="EN-US_TOPIC_0184808202"></a>

You need to restart the Docker service after restarting or starting firewalld.

-   When the firewalld service is started, the iptables rules of the current system are cleared. Therefore, if the firewalld service is restarted during Docker daemon startup, the Docker service may fail to insert iptables rules, causing the Docker service startup failure.
-   If the firewalld service is restarted after the Docker service is started, or the status of the firewalld service \(service paused or resumed\) is changed, the iptables rules of the Docker service are deleted. As a result, the container with port mapping fails to be created.

