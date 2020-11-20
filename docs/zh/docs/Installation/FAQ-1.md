# FAQ
<!-- TOC -->

- [FAQ](#faq)
    - [树莓派启动失败](#树莓派启动失败)
    - [nmcli 命令连接 WIFI 失败](#nmcli-命令连接-wifi-失败)

<!-- /TOC -->

## 树莓派启动失败

### 问题现象

将 openEuler 发布的树莓派镜像刷写入 SD 卡后，树莓派启动失败。

### 原因分析

刷写 openEuler 发布的树莓派镜像后，树莓派启动失败，大致有以下几种情况：

1.  下载的镜像文件不完整，请确保该镜像通过完整性校验。
2.  镜像写入 SD 卡过程中出现问题，多出现在 Windows 环境下使用应用软件刷写镜像到 SD 卡的情况。

### 解决方法

将完整的镜像重新刷写入 SD 卡。

## nmcli 命令连接 WIFI 失败

### 问题现象

执行 `nmcli dev wifi connect SSID password PWD` 命令连接 WIFI 失败。例如提示 `Error: Connection activation failed: (7) Secrets were required, but not provided.` 等错误。

### 原因分析

执行的命令缺少密码。注意，如果密码中包含特殊字符，需要使用单引号将密码括起来。如果使用 nmcli 命令行连接 WIFI 失败，建议使用 nmtui 字符界面进行连接。

### 解决方法

执行 `nmtui` 命令进入到 nmtui 字符界面，按照以下步骤连接 WIFI。

1.  选择 `Edit a connection`，按 `Enter` 进入编辑网络连接窗口。
2.  按下键盘右方向键选择 `Add`，按 `Enter` 进入新建网络连接窗口。
3.  连接类型选择 `Wi-Fi` ，然后按下键盘右方向键选择 `Create`，按 `Enter` 进入 WIFI 编辑连接信息的界面。
4.  WIFI 连接信息界面主要需要编辑以下内容，其他信息根据实际情况而定。编辑结束后选择 `OK`，按 `Enter` 完成编辑并回退到编辑网络连接窗口。
    1.  `Profile name` 栏输入该 WIFI 连接的名称，这里可以使用默认名称，如 `Wi-Fi connection 1`；
    2.  `Device` 栏输入要使用的无线网卡接口，这里输入 `wlan0`；
    3.  `SSID` 栏输入要连接的 WIFI 的 SSID；
    4.  `Security` 栏选择 WIFI 密码加密方式，这里根据实际情况选择，例如选择 `WPA & WPA2 Personal`；
    5.  `Password` 栏输入 WIFI 密码。

5.  选择 `Back` 回退到最初的 nmtui 字符界面。
6.  选择 `Activate a connection`，按 `Enter` 进入激活网络连接窗口。
7.  查看添加的 WIFI 连接是否已激活（已激活的连接名称前有 `*` 标记）。如果未激活，选择该 WIFI 连接，然后按下键盘右方向键选择 `Activate`，按 `Enter` 激活该连接。待激活完成后，选择 `Back`，按 `Enter` 退出该激活界面，回退到最初的 nmtui 字符界面。
8.  选择 `Quit`，然后按下键盘右方向键选择 `OK`，按 `Enter` 退出 nmtui 字符界面。