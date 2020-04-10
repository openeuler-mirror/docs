# Checking Whether the Bonding Kernel Module Is Installed<a name="EN-US_TOPIC_0229622759"></a>

By default, the bonding kernel module is loaded. To load this module, run the following command as the** root**  user:

```
# modprobe --first-time bonding
```

Run the following command to display the information about the module:

```
# modinfo bonding
```

For more commands, run the modprobe --help command.

