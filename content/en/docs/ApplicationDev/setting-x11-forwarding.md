# Setting X11 Forwarding<a name="EN-US_TOPIC_0229243627"></a>

Switch to the SSHD configuration directory.

```
# cd ~/.ssh
```

If the directory does not exist, run the following command to create the directory and then switch to the directory:

```
# mkdir ~/.ssh
```

Edit the configuration file in the  **.ssh**  directory and save the file.

1.  Run the  **vim**  command to open the configuration file.

    ```
    # vim config
    ```

2.  Add the following content to the end of the file and save the file:

    ```
    Host *
    		  ForwardAgent yes
    		  ForwardX11 yes
    ```


