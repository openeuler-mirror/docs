# 如何手动开启kdump服务<a name="ZH-CN_TOPIC_0192228834"></a>

## 问题现象<a name="section0712504256"></a>

执行命令行命令systemctl status kdump，显示状态信息如下：

![](figures/zh-cn_image_0192348006.png)显示无预留内存。

## 原因分析<a name="section118871366253"></a>

kdump需要预留出一段内存，运行kdump内核。当前无预留内存，无法运行kdump。

## 解决方法<a name="section5400186182614"></a>

方法1：修改/boot/efi/EFI/openEuler/grub.cfg，添加crashkernel=512M,high，重启系统。

方法2：在kickstart脚本的post段中，添加修改/boot/efi/EFI/openEuler/grub.cfg文件的命令，添加crashkernel=512M,high参数。

>![](public_sys-resources/icon-note.gif) **说明：**   
>kdump内核预留内存参数说明如下：  

**表 1**  crashkernel参数说明

<a name="table467312804815"></a>
<table><thead align="left"><tr id="row967318810483"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p188941929182618"><a name="p188941929182618"></a><a name="p188941929182618"></a>内核启动参数</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p389410298262"><a name="p389410298262"></a><a name="p389410298262"></a>描述</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p158944290262"><a name="p158944290262"></a><a name="p158944290262"></a>默认值</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p18894429132612"><a name="p18894429132612"></a><a name="p18894429132612"></a>备注</p>
</th>
</tr>
</thead>
<tbody><tr id="row26739804810"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1089402918267"><a name="p1089402918267"></a><a name="p1089402918267"></a>crashkernel=X</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p10894142915265"><a name="p10894142915265"></a><a name="p10894142915265"></a>在4G以下的物理内存预留X大小的内存给kdump使用。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1894229162614"><a name="p1894229162614"></a><a name="p1894229162614"></a>当前系统默认配置512M，用户根据实际情况调整。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p2895429202612"><a name="p2895429202612"></a><a name="p2895429202612"></a>该配置方法只在4G以下内存预留，必须保证4G以下连续可用内存足够预留。</p>
</td>
</tr>
<tr id="row16731682484"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p589512962618"><a name="p589512962618"></a><a name="p589512962618"></a>crashkernel=X@Y</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p10895329112616"><a name="p10895329112616"></a><a name="p10895329112616"></a>在Y起始地址预留X大小的内存给kdump使用。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1989572917263"><a name="p1989572917263"></a><a name="p1989572917263"></a>无，用户根据实际情况调整。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p6895329142617"><a name="p6895329142617"></a><a name="p6895329142617"></a>需要确保Y起始地址的X大小内存未被其他模块预留。</p>
</td>
</tr>
<tr id="row6674198124814"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p3895829132620"><a name="p3895829132620"></a><a name="p3895829132620"></a>crashkernel=X,high</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p589582910260"><a name="p589582910260"></a><a name="p589582910260"></a>在4G以下的物理内存中预留256M大小，在4G以上预留X大小内存给kdump使用。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p589516295260"><a name="p589516295260"></a><a name="p589516295260"></a>无，用户根据实际情况调整</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p389520290261"><a name="p389520290261"></a><a name="p389520290261"></a>确保4G以下内存有256M连续可用内存，4G以上有连续X大小内存可预留。实际预留内存大小为256M+X。</p>
</td>
</tr>
<tr id="row18674138204811"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p189512918262"><a name="p189512918262"></a><a name="p189512918262"></a>crashkernel=X,low</p>
<p id="p2895162915268"><a name="p2895162915268"></a><a name="p2895162915268"></a>crashkernel=Y,high</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p15895102916261"><a name="p15895102916261"></a><a name="p15895102916261"></a>在4G以下的物理内存中预留X大小，在4G以上预留Y大小内存给kdump使用。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p68951429102617"><a name="p68951429102617"></a><a name="p68951429102617"></a>无，用户根据实际情况调整</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p14895132942617"><a name="p14895132942617"></a><a name="p14895132942617"></a>需要确保4G以下有X大小连续可用内存，4G以上有Y大小连续可用内存。实际预留内存大小为X+Y。</p>
</td>
</tr>
</tbody>
</table>

## 问题现象<a name="zh-cn_topic_0151920731_sf8787c1a7e564af4ad6d72b45d07f036"></a>

安装操作系统完成时，可以开启kdump服务。

## 原因分析<a name="zh-cn_topic_0151920731_s2c25517ecc454d8eaaa7b81616ea29e8"></a>

x

当安装系统到第二块磁盘时，MBR和GRUB会默认安装到第二块磁盘sdb。这样会有下面两种情况：

1.  如果第一块磁盘中有完整系统，则加载第一块磁盘中的系统启动。
2.  如果第一块磁盘中没有完好的操作系统，则会导致硬盘启动失败。

以上两种情况都是因为BIOS默认从第一块磁盘sda中加载引导程序启动系统，如果sda没有系统，则会导致启动失败。

## 解决方法<a name="zh-cn_topic_0151920731_s9c2d562eab3549f3a0d44f642c8c118a"></a>

有以下两种解决方案：

-   当系统处于安装过程中，在选择磁盘（选择第一块或者两块都选择）后，指定引导程序安装到第一块盘sda中。
-   当系统已经安装完成，若BIOS支持选择从哪个磁盘启动，则可以通过修改BIOS中磁盘启动顺序，尝试重新启动系统。

