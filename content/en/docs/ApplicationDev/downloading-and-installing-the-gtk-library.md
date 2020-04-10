# Downloading and Installing the GTK Library<a name="EN-US_TOPIC_0229243714"></a>

Ensure that you have the  **root**  permission and run the following command:

```
# dnf list installed | grep gtk
```

If  **gtk2**  or  **gtk3**  is displayed, the GTK library has been installed. In this case, skip this step. Otherwise, run the following command to automatically download and install the GTK library:

```
# dnf -y install gtk2 libXtst libXrender  xauth
```

