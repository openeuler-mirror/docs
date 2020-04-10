# Using the cron Service to Run Commands Periodically<a name="EN-US_TOPIC_0229622722"></a>

The at command can run commands at the scheduled time but only once. It means that after the running command is specified, the system completes the task at the specified time. If you need to run commands repeatedly, the cron service is a good helper.

## Cron Service<a name="en-us_topic_0151921016_sf459a6cad42745d190545846dd659f5a"></a>

The  **cron**  service searches the  **/var/spool/cron**  directory for  **crontab**  files named by the user name in the /etc/passwd file and loads the search results into memory to execute the commands in the  **crontab**  files. Each user has a crontab file, with the file name being the same as the user name. For example, the  **crontab**  file of the  **globus**  user is  **/var/spool/cron/globus**.

The  **cron**  service also reads the cron configuration file  **/etc/crontab**  every minute, which can be edited in various formats. If no crontab files are found, the  **cron**  service enters sleep mode and releases system resources. One minute later, the  **cron**  service is awoken to repeat the search work and command execution. Therefore, the background process occupies few resources and is wakened up every minute to check whether there are commands to be executed.

Command execution results are then mailed to users specified by the environment variable MAILTO in the /etc/crontab file. The  **cron**  service, once started, does not require manual intervention except when you need to replace periodic commands with new ones.

## crontab Command<a name="en-us_topic_0151921016_sc2a441f0f60f4bbd9abda7ebd7db464e"></a>

The crontab command is used to install, edit, remove, list, and perform other operations on crontab files. Each user has its own crontab files and can add commands to be executed to the files.

Here are common crontab command options:

-   crontab -u   //Set the  **cron**  service of a user. This option is required only when the  **crontab**  command is run by the  **root**  user.
-   crontab -l   //List details of the  **cron**  service of a user.
-   crontab -r   //Remove the  **cron**  service of a user.
-   crontab -e   //Edit the  **cron**  service of a user.

For example, to list cron service settings of the user  **root**, run the following command:

```
crontab -u root -l
```

## crontab Files<a name="en-us_topic_0151921016_s6df9ef6b5c304d2781e36d1f3281ac92"></a>

Enter the commands to be executed and time in crontab files. Each line in the files contains six fields. The first five fields are the time when the specified command is executed, and the last field is the command to be executed. Fields are separated by spaces or tabs. The format is as follows:

```
minute hour day-of-month month-of-year day-of-week commands
```

Each field is described as follows:

**Table  1**  Parameter description

<a name="en-us_topic_0151921016_t7d97d1204fe249d7ae0a87b4cf9a9353"></a>
<table><thead align="left"><tr id="en-us_topic_0151921016_r1d8017a30f5648a19724518fbc502fba"><th class="cellrowborder" valign="top" width="23.31%" id="mcps1.2.3.1.1"><p id="en-us_topic_0151921016_a4efedc128af6418a9113b81b6bc45280"><a name="en-us_topic_0151921016_a4efedc128af6418a9113b81b6bc45280"></a><a name="en-us_topic_0151921016_a4efedc128af6418a9113b81b6bc45280"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="76.69%" id="mcps1.2.3.1.2"><p id="en-us_topic_0151921016_a0aff089cd76f4ce8b57b3d78e2d5260c"><a name="en-us_topic_0151921016_a0aff089cd76f4ce8b57b3d78e2d5260c"></a><a name="en-us_topic_0151921016_a0aff089cd76f4ce8b57b3d78e2d5260c"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0151921016_r818177ba8472416a8b1a3ad5da3993fe"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151921016_ae9e45efeced0467fbcdb87cc563bbbc9"><a name="en-us_topic_0151921016_ae9e45efeced0467fbcdb87cc563bbbc9"></a><a name="en-us_topic_0151921016_ae9e45efeced0467fbcdb87cc563bbbc9"></a>minute</p>
</td>
<td class="cellrowborder" valign="top" width="76.69%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921016_a85a76e44d8f94ea0b0f3cdc347b64ea2"><a name="en-us_topic_0151921016_a85a76e44d8f94ea0b0f3cdc347b64ea2"></a><a name="en-us_topic_0151921016_a85a76e44d8f94ea0b0f3cdc347b64ea2"></a>The minute of the hour at which commands will be executed. Value range: 0–59.</p>
</td>
</tr>
<tr id="en-us_topic_0151921016_rb37d136bb14c4962a27c434fea54ca90"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151921016_ada2b1d186b5746d0800d40771e987e58"><a name="en-us_topic_0151921016_ada2b1d186b5746d0800d40771e987e58"></a><a name="en-us_topic_0151921016_ada2b1d186b5746d0800d40771e987e58"></a>hour</p>
</td>
<td class="cellrowborder" valign="top" width="76.69%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921016_ac546d5a8e6874f948430fb1ae7b1a9b2"><a name="en-us_topic_0151921016_ac546d5a8e6874f948430fb1ae7b1a9b2"></a><a name="en-us_topic_0151921016_ac546d5a8e6874f948430fb1ae7b1a9b2"></a>The hour of the day at which periodic commands will be executed. Value range: 0–23.</p>
</td>
</tr>
<tr id="en-us_topic_0151921016_r1fcedf929bd1479482bf2176f346918e"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151921016_a2d366d6adae349ec82a24a9d6354543e"><a name="en-us_topic_0151921016_a2d366d6adae349ec82a24a9d6354543e"></a><a name="en-us_topic_0151921016_a2d366d6adae349ec82a24a9d6354543e"></a>day-of-month</p>
</td>
<td class="cellrowborder" valign="top" width="76.69%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921016_a614c715381cb4d7693b03fab8933e328"><a name="en-us_topic_0151921016_a614c715381cb4d7693b03fab8933e328"></a><a name="en-us_topic_0151921016_a614c715381cb4d7693b03fab8933e328"></a>The day of month at which periodic commands will be executed. Value range: 1–31.</p>
</td>
</tr>
<tr id="en-us_topic_0151921016_r162a1d415a5640b48e3ed0a711627afb"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151921016_acc3a9f7fc87e478d9cc3969a712d806b"><a name="en-us_topic_0151921016_acc3a9f7fc87e478d9cc3969a712d806b"></a><a name="en-us_topic_0151921016_acc3a9f7fc87e478d9cc3969a712d806b"></a>month-of-year</p>
</td>
<td class="cellrowborder" valign="top" width="76.69%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921016_a9320fc6a49d44dedb32039060c335fe4"><a name="en-us_topic_0151921016_a9320fc6a49d44dedb32039060c335fe4"></a><a name="en-us_topic_0151921016_a9320fc6a49d44dedb32039060c335fe4"></a>The month of year at which periodic commands will be executed. Value range: 1–12.</p>
</td>
</tr>
<tr id="en-us_topic_0151921016_ra8ad0d8047f549d2850f0d67ecb0c3eb"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151921016_a80ab684536b646e2b5bf7f3b6d6e30e0"><a name="en-us_topic_0151921016_a80ab684536b646e2b5bf7f3b6d6e30e0"></a><a name="en-us_topic_0151921016_a80ab684536b646e2b5bf7f3b6d6e30e0"></a>day-of-week</p>
</td>
<td class="cellrowborder" valign="top" width="76.69%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921016_ab370eed19e3345019d5c83c21f6fcf5e"><a name="en-us_topic_0151921016_ab370eed19e3345019d5c83c21f6fcf5e"></a><a name="en-us_topic_0151921016_ab370eed19e3345019d5c83c21f6fcf5e"></a>The day of week at which periodic commands will be executed. Value range: 0–6.</p>
</td>
</tr>
<tr id="en-us_topic_0151921016_r0fc447476fb44ae6b0f478dfda8e2cc6"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151921016_a7cfb8dd547ea4872b91a4ccd59821a04"><a name="en-us_topic_0151921016_a7cfb8dd547ea4872b91a4ccd59821a04"></a><a name="en-us_topic_0151921016_a7cfb8dd547ea4872b91a4ccd59821a04"></a>commands</p>
</td>
<td class="cellrowborder" valign="top" width="76.69%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921016_abb56c882dc5a438fad111e1232ba1b21"><a name="en-us_topic_0151921016_abb56c882dc5a438fad111e1232ba1b21"></a><a name="en-us_topic_0151921016_abb56c882dc5a438fad111e1232ba1b21"></a>Periodic commands.</p>
</td>
</tr>
</tbody>
</table>

The fields cannot be left unspecified. In addition to numerical values, the following special symbols are allowed: Asterisk \(\*\): a wildcard value. Forward slash \(/\): followed by a numeral N to indicate that commands will be executed at a regular interval of N. Hyphen \(-\): used with a range.Comma \(,\): used to separate discrete numbers. A complete path to the commands shall be provided.

For example, to allow the operating system to add sleepy to the /tmp/test.txt file every two hours from 18 pm to 22 pm, add the following line in a crontab file:

```
* 18-22/2 * * * echo "sleepy" >> /tmp/test.txt
```

Each time the cron service settings of a user are edited, the cron service generates in the /var/spool/cron directory a crontab file named after the user. The crontab file can be edited only using the crontab -e command. Alternatively, the user can create a file and run the crontab  _filename_  command to import its cron settings into the new file.

For example, to create a crontab file for the globus user, perform the following steps: The procedure is as follows:

1.  Create a file using any text editor. Add the commands that need to be executed periodically and the command execution interval to the new file. In this example, the new file is  **\~/globus.cron**.
2.  Run the following command to install the new file as the crontab file of the globus user: run the following command:

    ```
    crontab  globus. ~/globus.cron
    ```


After the new file is installed, you will find a file named globus in the  **/var/spool/cron**  directory. This file is the required crontab file.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>Do not restart the cron service after a crontab file is modified, because the cron service, once started, reads the crontab file every minute to check whether there are commands that need to be executed periodically. You do not need to restart the  **cron**  service after modifying the  **crontab**  file.  

## /etc/crontab File<a name="en-us_topic_0151921016_s0fa658393642440d94ef2cf59d1b08d4"></a>

The  **cron**  service reads all files in the  **/var/spool/cron**  directory and the  **crontab**  file in the  **/etc/crontab**  directory every minute. Therefore, you can use the  **cron**  service by configuring the  **crontab**  file. A crontab file contains user-specific commands, whereas the  **/etc/crontab**  file contains system-wide commands. Example /etc/crontab file

```
SHELL=/bin/sh
PATH=/usr/bin:/usr/sbin:/sbin:/bin:/usr/lib/news/bin
MAILTO=root //If an error occurs or data is output, the data is sent to the account by email.
HOME=/
#  run-parts
01 * * * * root run-parts /etc/cron.hourly //Run scripts in the /etc/cron.hourly directory once an hour.
02 4 * * *   root run-parts /etc/cron.daily    //Run scripts in the /etc/cron.daily directory once a day.
22 4 * * 0  root run-parts /etc/cron.weekly     //Run scripts in the /etc/cron.weekly directory once a week.
42 4 1  * *  root run-parts /etc/cron.monthly     //Run scripts in the /etc/cron.monthly directory once a month.
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>If the  **run-parts**  parameter is deleted, a script name instead of a directory name is executed.  

