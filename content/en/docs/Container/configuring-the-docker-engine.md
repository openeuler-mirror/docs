# Configuring the Docker Engine<a name="EN-US_TOPIC_0184808166"></a>

To enable the Docker engine to support kata-runtime, perform the following steps to configure the Docker engine:

1.  Ensure that all software packages \(**docker-engine**  and  **kata-containers**\) have been installed in the environment.
2.  Stop the Docker engine.

    ```
    systemctl stop docker
    ```

3.  Modify the configuration file  **/etc/docker/daemon.json**  of the Docker engine and add the following configuration:

    ```
    {
      "runtimes": {
        "kata-runtime": {
          "path": "/usr/bin/kata-runtime",
          "runtimeArgs": [
              "--kata-config",
              "/usr/share/defaults/kata-containers/configuration.toml"
            ]
        }
      }
    }
    ```

4.  Restart the Docker engine.

    ```
    systemctl start docker
    ```


