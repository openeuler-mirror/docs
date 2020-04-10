# Configuring a Host Name by Running the  **hostnamectl**  Command<a name="EN-US_TOPIC_0229622804"></a>

## Viewing All Host Names<a name="en-us_topic_0154473021_section547816643813"></a>

Run the following command to view the current host name:

```
# hostnamectl status
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>If no option is specified in the command, the  **status**  option is used by default.  

## Setting All Host Names<a name="en-us_topic_0154473021_section16458523193817"></a>

Run the following command as the  **root**  user to set all host names:

```
# hostnamectl set-hostname name
```

## Setting a Specific Host Name<a name="en-us_topic_0154473021_section19628194016387"></a>

Run the following command as the  **root**  user to set a specific host name:

```
# hostnamectl set-hostname name [option...]
```

The option may be one or more of  **--pretty**,  **--static**, and  **--transient**.

If  **--static**  or  **--transient**  is used together with  **--pretty**, the host names of the  **static**  or  **transient**  type will be simplified to the host names of the  **pretty**  type with spaces replaced with hyphens \(-\) and special characters deleted.

When setting a host name of the  **pretty**  type, use quotation marks if the host name contains spaces or single quotation marks. An example is as follows:

```
# hostnamectl set-hostname "Stephen's notebook" --pretty
```

## Clearing a Specific Host Name<a name="en-us_topic_0154473021_section1996517213917"></a>

To clear a specific host name and restore it to the default format, run the following command as the  **root**  user:

```
# hostnamectl set-hostname "" [option...]
```

In the preceding command,  **""**  is a blank character string, and the  _option_  may be one or more of  **--pretty**,  **--static**, and  **--transient**.

## Remotely Changing a Host Name<a name="en-us_topic_0154473021_section1530231411392"></a>

To change the host name in a remote system, run the  **hostnamectl**  command with the  **-H**  or  **--host**  option.

```
# hostnamectl set-hostname -H [username]@hostname new_hostname
```

In the preceding command,  _hostname_  indicates the name of the remote host to be configured,  _username _indicates the user-defined name, and  _new\_hostname_  indicates the new host name.  **hostnamectl**  is used to connect to the remote system through SSH.

