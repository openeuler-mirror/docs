# iSulad Configuration<a name="EN-US_TOPIC_0226309119"></a>

To enable the iSulad to support the new container runtime kata-runtime, perform the following steps which are similar to those for the container engine docker-engine:

1.  Ensure that all software packages \(iSulad and kata-containers\) have been installed in the environment.
2.  Stop iSulad.

    ```
    systemctl stop isulad
    ```

3.  Modify the  **/etc/isulad/daemon.json**  configuration file of the iSulad and add the following configurations:

    ```
    {
      "runtimes": {
        "kata-runtime": {
          "path": "/usr/bin/kata-runtime",
          "runtime-args": [
              "--kata-config",
              "/usr/share/defaults/kata-containers/configuration.toml"
            ]
        }
      }
    }
    ```

4.  Restart iSulad.

    ```
    systemctl start isulad
    ```


