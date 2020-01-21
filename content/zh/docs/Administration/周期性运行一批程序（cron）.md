# 周期性运行一批程序（cron）<a name="ZH-CN_TOPIC_0182317346"></a>

前面介绍at命令都会在一定时间内完成一定任务，但是它只能执行一次。也就是说，当指定了运行命令后，系统在指定时间完成任务，以后就不再执行了。但是在很多情况下需要周期性重复执行一些命令，这时候就需要使用cron命令来完成任务。

## 运行机制<a name="zh-cn_topic_0151921016_sf459a6cad42745d190545846dd659f5a"></a>

首先cron命令会搜索/var/spool/cron目录，寻找以/etc/passwd文件中的用户名命名的crontab文件，被找到的这种文件将装入内存。比如一个用户名为globus的用户，对应的crontab文件应该是/var/spool/cron/globus，即以该用户命名的crontab文件存放在/var/spool/cron目录下面。

cron命令还将搜索/etc/crontab文件，这个文件是用不同的格式写成的。cron启动以后，它将首先检查是否有用户设置了crontab文件，如果没有就转入睡眠状态，释放系统资源。所以该后台进程占用资源极少，它每分钟被换醒一次，查看当前是否有需要运行的命令。

命令执行结束后，任何输出都将作为邮件发送给crontab的所有者，或者是/etc/crontab文件中MAILTO环境变量中指定的用户。这是cron的工作原理，但是cron命令的执行不需要用户干涉，用户只需要修改crontab中要执行的命令。

## crontab命令<a name="zh-cn_topic_0151921016_sc2a441f0f60f4bbd9abda7ebd7db464e"></a>

crontab命令用于安装、删除或者显示用于驱动cron后台进程的表格。用户把需要执行的命令序列放到crontab文件中以获得执行，而且每个用户都可以有自己的crontab文件。

crontab命令的常用方法如下：

-   crontab -u   //设置某个用户的cron服务，root用户在执行crontab时需要此参数。
-   crontab -l    //列出某个用户cron服务的详细内容。
-   crontab -r   //删除某个用户的cron服务。
-   crontab -e  //编辑某个用户的cron服务。

例如root查看自己的cron设置。命令如下：

```
crontab -u root -l
```

## crontab文件<a name="zh-cn_topic_0151921016_s6df9ef6b5c304d2781e36d1f3281ac92"></a>

在crontab文件中输入需要执行的命令和时间。该文件中每行都包括6个域，其中前5个域是指定命令被执行的时间，最后一个域是要被执行的命令。每个域之间使用空格或者制表符分隔。格式如下：

```
minute hour day-of-month month-of-year day-of-week commands
```

对于每一项的说明如所示。

**表 1**  参数说明

<a name="zh-cn_topic_0151921016_t7d97d1204fe249d7ae0a87b4cf9a9353"></a>
<table><thead align="left"><tr id="zh-cn_topic_0151921016_r1d8017a30f5648a19724518fbc502fba"><th class="cellrowborder" valign="top" width="23.31%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0151921016_a4efedc128af6418a9113b81b6bc45280"><a name="zh-cn_topic_0151921016_a4efedc128af6418a9113b81b6bc45280"></a><a name="zh-cn_topic_0151921016_a4efedc128af6418a9113b81b6bc45280"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="76.69%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0151921016_a0aff089cd76f4ce8b57b3d78e2d5260c"><a name="zh-cn_topic_0151921016_a0aff089cd76f4ce8b57b3d78e2d5260c"></a><a name="zh-cn_topic_0151921016_a0aff089cd76f4ce8b57b3d78e2d5260c"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0151921016_r818177ba8472416a8b1a3ad5da3993fe"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151921016_ae9e45efeced0467fbcdb87cc563bbbc9"><a name="zh-cn_topic_0151921016_ae9e45efeced0467fbcdb87cc563bbbc9"></a><a name="zh-cn_topic_0151921016_ae9e45efeced0467fbcdb87cc563bbbc9"></a>minute</p>
</td>
<td class="cellrowborder" valign="top" width="76.69%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151921016_a85a76e44d8f94ea0b0f3cdc347b64ea2"><a name="zh-cn_topic_0151921016_a85a76e44d8f94ea0b0f3cdc347b64ea2"></a><a name="zh-cn_topic_0151921016_a85a76e44d8f94ea0b0f3cdc347b64ea2"></a>分钟（0~59）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0151921016_rb37d136bb14c4962a27c434fea54ca90"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151921016_ada2b1d186b5746d0800d40771e987e58"><a name="zh-cn_topic_0151921016_ada2b1d186b5746d0800d40771e987e58"></a><a name="zh-cn_topic_0151921016_ada2b1d186b5746d0800d40771e987e58"></a>hour</p>
</td>
<td class="cellrowborder" valign="top" width="76.69%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151921016_ac546d5a8e6874f948430fb1ae7b1a9b2"><a name="zh-cn_topic_0151921016_ac546d5a8e6874f948430fb1ae7b1a9b2"></a><a name="zh-cn_topic_0151921016_ac546d5a8e6874f948430fb1ae7b1a9b2"></a>小时（0~23）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0151921016_r1fcedf929bd1479482bf2176f346918e"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151921016_a2d366d6adae349ec82a24a9d6354543e"><a name="zh-cn_topic_0151921016_a2d366d6adae349ec82a24a9d6354543e"></a><a name="zh-cn_topic_0151921016_a2d366d6adae349ec82a24a9d6354543e"></a>day-of-month</p>
</td>
<td class="cellrowborder" valign="top" width="76.69%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151921016_a614c715381cb4d7693b03fab8933e328"><a name="zh-cn_topic_0151921016_a614c715381cb4d7693b03fab8933e328"></a><a name="zh-cn_topic_0151921016_a614c715381cb4d7693b03fab8933e328"></a>一个月的第几天（1~31）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0151921016_r162a1d415a5640b48e3ed0a711627afb"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151921016_acc3a9f7fc87e478d9cc3969a712d806b"><a name="zh-cn_topic_0151921016_acc3a9f7fc87e478d9cc3969a712d806b"></a><a name="zh-cn_topic_0151921016_acc3a9f7fc87e478d9cc3969a712d806b"></a>month-of-year</p>
</td>
<td class="cellrowborder" valign="top" width="76.69%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151921016_a9320fc6a49d44dedb32039060c335fe4"><a name="zh-cn_topic_0151921016_a9320fc6a49d44dedb32039060c335fe4"></a><a name="zh-cn_topic_0151921016_a9320fc6a49d44dedb32039060c335fe4"></a>一年的第几个月（1~12）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0151921016_ra8ad0d8047f549d2850f0d67ecb0c3eb"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151921016_a80ab684536b646e2b5bf7f3b6d6e30e0"><a name="zh-cn_topic_0151921016_a80ab684536b646e2b5bf7f3b6d6e30e0"></a><a name="zh-cn_topic_0151921016_a80ab684536b646e2b5bf7f3b6d6e30e0"></a>day-of-week</p>
</td>
<td class="cellrowborder" valign="top" width="76.69%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151921016_ab370eed19e3345019d5c83c21f6fcf5e"><a name="zh-cn_topic_0151921016_ab370eed19e3345019d5c83c21f6fcf5e"></a><a name="zh-cn_topic_0151921016_ab370eed19e3345019d5c83c21f6fcf5e"></a>一周的星期几（0~6），0代表星期天。</p>
</td>
</tr>
<tr id="zh-cn_topic_0151921016_r0fc447476fb44ae6b0f478dfda8e2cc6"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151921016_a7cfb8dd547ea4872b91a4ccd59821a04"><a name="zh-cn_topic_0151921016_a7cfb8dd547ea4872b91a4ccd59821a04"></a><a name="zh-cn_topic_0151921016_a7cfb8dd547ea4872b91a4ccd59821a04"></a>commands</p>
</td>
<td class="cellrowborder" valign="top" width="76.69%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151921016_abb56c882dc5a438fad111e1232ba1b21"><a name="zh-cn_topic_0151921016_abb56c882dc5a438fad111e1232ba1b21"></a><a name="zh-cn_topic_0151921016_abb56c882dc5a438fad111e1232ba1b21"></a>需要执行的命令。</p>
</td>
</tr>
</tbody>
</table>

这些项都不能为空，必须指定值。除了数字还有几个特殊的符号“\*”、“/”和“-”、“，”。其中，\*代表所有的取值范围内的数字，/代表每的意思，“\*/5”表示每5个单位，“-”代表从某个数字到某个数字，“，”分开几个离散时数字。对于要执行的命令，调用的时候需要写出命令的完整路径。

例如晚上18点到22点之间每两个小时，在/tmp/test.txt文件中加入sleepy文本。在crontab文件中对应的行如下：

```
* 18-22/2 * * * echo "sleepy" >> /tmp/test.txt
```

每次编辑完某个用户的cron设置后，cron自动在/var/spool/cron下生成一个与此用户同名的文件。此用户的cron信息都记录在这个文件中，这个文件是不可以直接编辑的，只可以用crontab -e来编辑。用户也可以另外建立一个文件，使用“cron文件名”命令导入cron设置。

假设有个用户名为globus，它需要为自己创建的一个crontab文件。步骤如下：

1.  首先可以使用任何文本编辑器建立一个新文件，并将向该文件加入需要运行的命令和要定期执行的时间，假设该文件为 \~/globus.cron。
2.  然后使用crontab命令安装这个文件，使用crontab命令使之成为该用户的crontab文件。命令如下：

    ```
    crontab  globus. ~/globus.cron
    ```


这样crontab文件就建立好了，可以转到/var/spool/cron目录下面查看，发现多了一个globus文件。这个文件就是所需的crontab文件。

>![](public_sys-resources/icon-note.gif) **说明：**   
>cron启动后，每过一分钟读一次crontab文件，检查是否要执行里面的命令。因此该文件被修改后不需要重新启动cron服务。  

## 编辑配置文件<a name="zh-cn_topic_0151921016_s0fa658393642440d94ef2cf59d1b08d4"></a>

cron服务每分钟不仅要读一次/var/spool/cron内的所有文件，还需要读一次/etc/crontab，因此通过配置这个文件也能得到cron的服务。用crontab配置是针对某个用户的，而编辑/etc/crontab是针对系统的任务。此文件的文件格式如下：

```
SHELL=/bin/sh
PATH=/usr/bin:/usr/sbin:/sbin:/bin:/usr/lib/news/bin
MAILTO=root  //如果出现错误，或者有数据输出，数据作为邮件发给这个账号
HOME=/
#  run-parts
01  * * * *   root run-parts /etc/cron.hourly     //每个小时执行一次/etc/cron.hourly里的脚本
02 4 * * *   root run-parts /etc/cron.daily    //每天执行一次/etc/cron.daily里的脚本
22 4 * * 0  root run-parts /etc/cron.weekly     //每周执行一次/etc/cron.weekly里的脚本
42 4 1  * *  root run-parts /etc/cron.monthly     //每月执行一次/etc/cron.monthly里的脚本
```

>![](public_sys-resources/icon-note.gif) **说明：**   
>如果去掉run-parts参数，其后面就是运行的某个脚本名，而不是目录名。  

