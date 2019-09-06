# 关联组件firewalld<a name="ZH-CN_TOPIC_0184808202"></a>

需要在重启或拉起firewalld之后重启docker服务，保证docker服务在firewalld之后启动。

-   firewalld服务启动会清空当前系统的iptables规则，所以在启动docker daemon过程中，重启firewalld可能会导致docker服务插入iptables规则失败，从而导致docker服务启动失败。
-   docker服务启动后重启firewalld服务，或者状态发生了变化（从启动到停止，或者从停止到启动），会导致docker的iptables规则被删除，创建带端口映射的容器失败。

