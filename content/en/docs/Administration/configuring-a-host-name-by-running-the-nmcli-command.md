# Configuring a Host Name by Running the nmcli Command<a name="EN-US_TOPIC_0229622754"></a>

To query a static host name, run the following command:

```
# nmcli general hostname
```

To name a static host as  **host-server**, run the following command as user root:

```
# nmcli general hostname host-server
```

To enable the system to detect the change of the static host name, run the following command as the  **root**  user to restart the hostnamed service:

```
# systemctl restart systemd-hostnamed
```

