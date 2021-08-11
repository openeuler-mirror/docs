# LibcarePlus

- [概述](#概述)
- [软硬件要求](#软硬件要求)
- [注意事项和约束](#注意事项和约束)
- [安装 LibcarePlus](#安装LibcarePlus)
- [制作 LibcarePlus 热补丁](#制作_LibcarePlus_热补丁)
- [应用 LibcarePlus 热补丁](#应用_LibcarePlus_热补丁)

## 概述

LibcarePlus 是一个用户态进程热补丁框架，可以在不重启进程的情况下对 Linux 系统上运行的目标进程进行热补丁操作。热补丁可以应用于 CVE 漏洞修复，也可以应用于不中断应用服务的紧急 bug 修复。

## 软硬件要求

在 openEuler 上使用 LibcarePlus，需要满足一定的软硬件要求：

- 当前仅支持 x86 体系架构。

- LibcarePlus 可以在任何支持安装 **libunwind**、 **elfutils** 以及 **binutils** 的 Linux 发行版系统上运行。但目前仅在 openEuler 20.03 LTS SP1 版本进行了验证。


## 注意事项和约束

使用 LibcarePlus，需遵循以下热补丁规范和约束：

- 仅支持对 C 语言编写的代码，不支持汇编语言等。
- 仅支持用户态程序，不支持动态库打补丁。
- 代码文件名必须符合 C 语言标识符命名规范：由字母（A-Z,a-z）、数字 （0-9）、下划线“_”组成；并且首字符不能是数字，但可以是字母或者下划线；不能包含“-”、“$”等特殊符号。
- 不支持增量补丁，即必须卸载原有补丁才能加载第二个补丁。 
- 不支持补丁自动加载。 
- 不支持补丁查询。 
- 被打热补丁的目标函数的出参和入参不能增加和删除。
- 静态函数补丁受限于系统中能找到该函数的符号表。
- 动态库热补丁只能对调用这个动态库的进程打补丁。
- 以下场景不支持热补丁:
  - 死循环函数、不退出函数、inline 函数、初始化函数、NMI 中断处理函数
  - 替换全局变量
  - 修改头文件
  - 数据结构成员变化（新增、删除、修改）
  - 动态库、静态函数、静态变量
  - 修改全局变量、TLS 变量、RCU 变量 
  - 修改包含 __LINE__ ， __FILE__ 等gcc编译宏的 C 文件 
  - 修改 intel 矢量汇编指令 



## 安装 LibcarePlus

### 安装软件依赖

LibcarePlus 运行依赖于 **libunwind**、 **elfutils** 和 **binutils**，在配置了 yum 源的 openEuler 系统上，可以参考如下命令安装 LibcarePlus 的依赖软件。

``` shell
$ sudo yum install -y binutils elfutils elfutils-libelf-devel libunwind-devel
```

#### 安装 LibcarePlus

```shell
$ yum install LibcarePlus -y
```

查看安装是否成功：

``` shell
$ libcare-ctl -help
usage: libcare-ctl [options] <cmd> [args]

Options:
  -v          - verbose mode
  -h          - this message

Commands:
  patch  - apply patch to a user-space process
  unpatch- unapply patch from a user-space process
  info   - show info on applied patches
  server - listen on a unix socket for commands
```

## 制作 LibcarePlus 热补丁

### 概述

LibcarePlus 支持如下方式制作热补丁：

- 手动制作
- 通过脚本制作

手动制作热补丁的过程繁琐，对于代码量较大的工程，例如QEMU，手动制作热补丁极其困难。建议使用 LibcarePlus 自带脚本一键式地生成热补丁文件。

#### 手动制作

本节以原文件 foo.c 和补丁文件 bar.c 为例，给出手动制作热补丁的指导。

1. 准备 C 语言编写的原文件和补丁文件。例如原文件 foo.c 和补丁文件 bar.c 。

    <details>
    <summary>点击展开 foo.c</summary>
    <p>

    ``` c
    // foo.c                                                                        
    #include <stdio.h>
    #include <time.h>

    void print_hello(void)
    {
        printf("Hello world!\n");
    }

    int main(void)
    {
        while (1) {
            print_hello();
            sleep(1);
        }
    }
    ```

    </p>
    </details>  

    <details>
    <summary>点击展开 bar.c</summary>
    <p>

    ``` c
    // bar.c                                                                                   
    #include <stdio.h>
    #include <time.h>
                                                                                    
    void print_hello(void)
    {
        printf("Hello world %s!\n", "being patched");
    }

    int main(void)
    {
        while (1) {
            print_hello();
            sleep(1);
        }
    }
    ```

    </p>
    </details> 

2. 编译得到原文件和补丁文件的汇编文件 **foo.s** 和 **bar.s**，参考命令如下：

    ``` shell
    $ gcc -S foo.c
    $ gcc -S bar.c
    $ ls
    bar.c  bar.s  foo.c  foo.s
    ```


3.  使用 **kpatch_gensrc** 对比 foo.s 和 bar.s 差异，生成包含原文件的汇编内容和差异内容的 foobar.s，参考命令如下：

    ``` shell
    $ sed -i 's/bar.c/foo.c/' bar.s
    $ kpatch_gensrc --os=rhel6 -i foo.s -i bar.s -o foobar.s --force-global
    ```

    由于 **kpatch_gensrc** 默认对同一 C 语言原文件进行对比，所以对比前需要使用 sed 命令将补丁汇编文件 bar.s 中的 bar.c 改为原文件名称 foo.c。随后调用 **kpatch_gensrc**，指定输入文件为 foo.s 与 bar.s，输出文件为 foobar.s。

4. 编译原文件的汇编文件 foo.s 和生成的汇编文件 foobar.s，得到可执行文件 foo 和 foobar，参考命令如下：

    ``` shell
    $ gcc -o foo foo.s
    $ gcc -o foobar foobar.s -Wl,-q
    ```



5. 利用 **kpatch_strip** 去除可执行程序 foo 和 foobar 的相同内容，保留制作热补丁所需要的内容。

    ``` shell
    $ kpatch_strip --strip foobar foobar.stripped
    $ kpatch_strip --rel-fixup foo foobar.stripped
    $ strip --strip-unneeded foobar.stripped
    $ kpatch_strip --undo-link foo foobar.stripped
    ```

    上述命令中的各参数含义为：

    - **--strip** 用于去除 foobar 中对于补丁制作无用的 section；
    - **--rel-fixup** 用于修复补丁内所访问的变量以及函数的地址；
    - **strip --strip-unneeded** 用于去除对于热补丁重定位操作无用的符号信息；
    - **--undo-link** 用于将补丁内符号的地址从绝对地址更改为相对地址。

6. 制作热补丁文件。

   通过以上操作，已经得到了热补丁制作所需的主要内容。接下来需要使用 **kpatch_make** 将原可执行文件的 **Build ID** 以及 **kpatch_strip** 的输出文件 **foobar.stripped** 作为参数传递给 **kpatch_make**，最终生成热补丁文件，参考命令如下：
   
    ``` shell
    $ str=$(readelf -n foo | grep 'Build ID')
    $ substr=${str##* }
    $ kpatch_make -b $substr foobar.stripped -o foo.kpatch
    $ ls
    bar.c  bar.s  foo  foobar  foobar.s  foobar.stripped  foo.c  foo.kpatch  foo.s
    ```
   
   至此，就得到了最终的热补丁文件 foo.kpatch。

#### 通过脚本制作

本节介绍如何利用 LibcarePlus 自带的 **libcare-patch-make** 脚本制作热补丁文件，仍以原文件 foo.c 和补丁文件 bar.c 为例。

1. 利用 diff 命令生成 foo.c 和 bar.c 的对比文件，命令如下所示:

    ``` shell
    $ diff -up foo.c bar.c > foo.patch
    ```

    foo.patch 文件内容如下所示：

    <details>
    <summary>点击展开 foo.patch</summary>
    <p>


    ``` diff
    --- foo.c	2020-12-09 15:39:51.159632075 +0800
    +++ bar.c	2020-12-09 15:40:03.818632220 +0800
    @@ -1,10 +1,10 @@
    -// foo.c
    +// bar.c
    #include <stdio.h>
    #include <time.h>

    void i_m_being_patched(void)
    {
    -    printf("i'm unpatched!\n");
    +    printf("you patched my %s\n", "tralala");
    }

    int main(void)
    ```

    </p>
    </details> 


2. 编写编译 foo.c 的 MakeFile 文件，具体如下所示：

    <details>
    <summary>点击展开 MakeFile</summary>
    <p>

	``` makefile
	all: foo
	
	foo: foo.c
		$(CC) -o $@ $<
	
	clean:
		rm -f foo

	install: foo
		mkdir $$DESTDIR || :
		cp foo $$DESTDIR
	```

    </p>
    </details> 


3. 编写好 MakeFile 之后，直接调用 **libcare-patch-make** 即可。若 **libcare-patch-make** 询问选择哪个文件进行打补丁操作，输入原文件名即可，具体如下所示：

    ``` shell
    $ libcare-patch-make --clean foo.patch
    rm -f foo
    BUILDING ORIGINAL CODE
    /usr/local/bin/libcare-cc -o foo foo.c
    INSTALLING ORIGINAL OBJECTS INTO /libcareplus/test/lpmake
    mkdir $DESTDIR || :
    cp foo $DESTDIR
    applying foo.patch...
    can't find file to patch at input line 3
    Perhaps you used the wrong -p or --strip option?
    The text leading up to this was:
    --------------------------
    |--- foo.c	2020-12-10 09:43:04.445375845 +0800
    |+++ bar.c	2020-12-10 09:48:36.778379648 +0800
    --------------------------
    File to patch: foo.c         
    patching file foo.c
    BUILDING PATCHED CODE
    /usr/local/bin/libcare-cc -o foo foo.c
    INSTALLING PATCHED OBJECTS INTO /libcareplus/test/.lpmaketmp/patched
    mkdir $DESTDIR || :
    cp foo $DESTDIR
    MAKING PATCHES
    Fixing up relocation printf@@GLIBC_2.2.5+fffffffffffffffc
    Fixing up relocation print_hello+0
    patch for /libcareplus/test/lpmake/foo is in /libcareplus/test/patchroot/700297b7bc56a11e1d5a6fb564c2a5bc5b282082.kpatch
    ```

    执行成功之后，输出显示：热补丁文件位于当前目录的 **patchroot** 目录下，可执行文件则在 **lpmake** 目录下。脚本生成的热补丁文件默认是采用 Build ID 作为热补丁文件的文件名。



## 应用 LibcarePlus 热补丁

本节以原文件 **foo.c** 和补丁文件 **bar.c** 为例，介绍 LibcarePlus 热补丁的应用指导。

### 前期准备

应用 LibcarePlus 热补丁之前，需要提前准备好原可执行程序 foo、以及热补丁文件 foo.kpatch。

### 加载热补丁

本节介绍应用 LibcarePlus 热补丁的具体流程。

1. 首先在第一个 shell 窗口运行需要打补丁的可执行程序，如下所示：

    ``` shell
    $ ./lpmake/foo
    Hello world!
    Hello world!
    Hello world!
    ```

2. 随后在第二个 shell 窗口运行 **libcare-ctl** 应用热补丁，命令如下所示：

    ``` shell
    $ libcare-ctl -v patch -p $(pidof foo) ./foo.kpatch
    ```

    若此时热补丁应用成功，第二个 shell 窗口会有如下输出：

    ``` shell
    1 patch hunk(s) have been successfully applied to PID '10999'
    ```

    而第一个 shell 窗口内运行的目标进程则会出现如下输出：

    ``` shell
    Hello world!
    Hello world!
    Hello world being patched!
    Hello world being patched!
    ```


### 卸载热补丁

本节介绍卸载 LibcarePlus 热补丁的具体流程。

1. 在第二个 shell 窗口执行如下命令：

    ``` shell
    $ libcare-ctl unpatch -p $(pidof foo)
    ```

    此时若热补丁卸载成功，第二个 shell 窗口会有如下输出：

    ``` shell
    1 patch hunk(s) were successfully cancelled from PID '10999'
    ```

2. 第一个 shell 窗口内运行的目标进程则会出现如下输出：

    ``` shell
    Hello world being patched!
    Hello world being patched!
    Hello world!
    Hello world!
    ```
