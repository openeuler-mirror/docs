# 调测DFx特性增强<a name="ZH-CN_TOPIC_0221461495"></a>

-   支持ARM64内核热补丁

    支持 ARM64 内核热补丁，可以不用重启修复内核漏洞和BUG。


-   ARM64 kdump 增强

    openEuler 内核支持预留大于 4G 的内存供 kdump 使用

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >Linux kernel 社区原生版本只支持预留 4G 以下内存。  


-   ARM64 NMI Watchdog 支持
    -   支持基于 PMU \(Performance Monitoring Unit\)  的 NMI Watchdog
    -   支持基于 SDEI \(Software Delegated Exception Interface\) 的 NMI Watchdog


-   ARM64 RAS 增强
    -   支持 ARM v8.2 RAS 扩展
    -   支持执行路径上内存ECC错误恢复


-   支持 SAS 盘暴力热插拔
-   支持 Statistical Profiling Extension 解析增强

    通过解析 SPE 事件，支持精确跟踪和记录 branch miss，LL cache miss，tlb miss等事件，增强perf调优功能。


