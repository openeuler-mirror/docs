# Scenarios<a name="EN-US_TOPIC_0184808087"></a>

By default, iSulad starts common containers that are suitable for starting common processes. However, common containers have only the default permissions defined by capabilities in the  **/etc/default/isulad/config.json**  directory. To perform privileged operations \(such as use devices in the  **/sys**  directory\), a privileged container is required. By using this feature, user  **root**  in the container has  **root**  permissions of the host. Otherwise, user  **root**  in the container has only common user permissions of the host.

