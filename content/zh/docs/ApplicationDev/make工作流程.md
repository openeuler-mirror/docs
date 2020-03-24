# make工作流程<a name="ZH-CN_TOPIC_0229243674"></a>

使用make由源代码文件生成可执行文件，需要经过如下步骤。

1.  make命令会读入Makefile文件，包括当前目录下命名为"GNUmakefile" 、"makefile" 、"Makefile"的文件、被include的makefile文件、参数-f、--file、--makefile指定的规则文件。
2.  初始化变量。
3.  推导隐含规则，分析依赖关系，并创建依赖关系链。
4.  根据依赖关系链，决定哪些目标需要重新生成。
5.  执行生成命令，最终输出终极文件。

