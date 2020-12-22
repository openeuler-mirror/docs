# LibcarePlus

<!-- TOC -->

- [LibcarePlus](#libcareplus)
    - [Overview](#overview)
    - [Hardware and Software Requirements](#hardware-and-software-requirements)
    - [Precautions and Constraints](#precautions-and-constraints)
    - [Installing LibcarePlus](#installing-libcareplus)
        - [Software Installation Dependencies](#software-installation-dependencies)
            - [Installing LibcarePlus](#installing-libcareplus-1)
    - [Creating LibcarePlus Hot Patches](#creating-libcareplus-hot-patches)
        - [Introduction](#introduction)
            - [Manual Creation](#manual-creation)
            - [Creation Through a Script](#creation-through-a-script)
    - [Applying the LibcarePlus Hot Patch](#applying-the-libcareplus-hot-patch)
        - [Preparation](#preparation)
        - [Loading the Hot Patch](#loading-the-hot-patch)
        - [Uninstalling the Hot Patch](#uninstalling-the-hot-patch)

<!-- /TOC -->

## Overview

LibcarePlus is a hot patch framework for user-mode processes. It can perform hot patch operations on target processes running on the Linux system without restarting the processes. Hot patches can be used to fix CVEs and urgent bugs that do not interrupt application services.

## Hardware and Software Requirements

The following software and hardware requirements must be met to use LibcarePlus on openEuler:

- Currently, only the x86 architecture is supported.

- LibcarePlus can run on any Linux distribution that supports **libunwind**, **elfutils**, and **binutils**. However, this feature has been verified only on openEuler 20.03 LTS SP1.

## Precautions and Constraints

When using LibcarePlus, comply with the following hot patch specifications and constraints:

- Only the code written in the C language is supported. The assembly language is not supported.
- Only user-mode programs are supported. Dynamic library patches are not supported.
- The code file name must comply with the C language identifier naming specifications. That is, the code file name consists of letters (A-Z and a-z), digits (0-9), and underscores (_) but the first character cannot be a digit. Special characters such as hyphens (-) and dollar signs ($) are not allowed.
- Incremental patches are not supported. That is, the second patch can be loaded only after the original patch is uninstalled.
- Automatic patch loading is not supported.
- Patch query is not supported.
- The output and input parameters of the target function for which the hot patch is installed cannot be added or deleted.
- The static function patch is restricted by the symbol table that can find the function in the system.
- The dynamic library hot patch can be installed only for the process that calls the dynamic library.
- Hot patches are not supported in the following scenarios:
  - Infinite loop function, non-exit function, inline function, initialization function, and non-maskable interrupt (NMI) function
  - Replacing global variables
  - Modifying the header file
  - Changing (adding, deleting, or modifying) data structure members
  - Dynamic library, static function, and static variables
  - Modifying global variables, TLS variables, and RCU variables
  - Modifying the C files that contain GCC macros such as __LINE__ and __FILE__
  - Modifying the Intel vector assembly instruction

## Installing LibcarePlus

### Software Installation Dependencies

The LibcarePlus running depends on **libunwind**, **elfutils**, and **binutils**. On the openEuler system configured with the yum repo, you can run the following commands to install the software on which LibcarePlus depends:

``` shell
$ sudo yum install -y binutils elfutils elfutils-libelf-devel libunwind-devel
```

#### Installing LibcarePlus

```shell
$ yum install LibcarePlus -y
```

Check whether LibcarePlus is installed.

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

## Creating LibcarePlus Hot Patches

### Introduction

LibcarePlus hot patch creation methods:

- Manual creation
- Creation through a script

The process of manually creating a hot patch is complex. For a project with a large amount of code, for example, QEMU, it is extremely difficult to manually create a hot patch. You are advised to use the script provided by LibcarePlus to generate a hot patch file with one click.

#### Manual Creation

The following takes the original file foo.c and the patch file bar.c as examples to describe how to manually create a hot patch.

1. Prepare the original file and patch file written in the C language. For example, foo.c and bar.c.

    <details>
    <summary>Expand foo.c</summary>
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
    <summary>Expand bar.c</summary>
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

2. Build the original file and patch file to obtain the assembly files **foo.s** and **bar.s**.

    ``` shell
    $ gcc -S foo.c
    $ gcc -S bar.c
    $ ls
    bar.c  bar.s  foo.c  foo.s
    ```

3. Use **kpatch_gensrc** to compare foo.s and bar.s and generate the foobar.s file that contains the assembly content of the original file and the differences.

    ``` shell
    $ sed -i 's/bar.c/foo.c/' bar.s
    $ kpatch_gensrc --os=rhel6 -i foo.s -i bar.s -o foobar.s --force-global
    ```

    By default, **kpatch_gensrc** compares the original files in the same C language. Therefore, before the comparison, you need to run the sed command to change the file name bar.c in the patch assembly file bar.s to the original file name foo.c. Call **kpatch_gensrc** to specify the input files as foo.s and bar.s and the output file as foobar.s.

4. Build the assembly file foo.s in the original file and the generated assembly file foobar.s to obtain the executable files foo and foobar.

    ``` shell
    $ gcc -o foo foo.s
    $ gcc -o foobar foobar.s -Wl,-q
    ```



5. Use **kpatch_strip** to remove the duplicate content from the executable foo and foobar and reserve the content required for creating hot patches.

    ``` shell
    $ kpatch_strip --strip foobar foobar.stripped
    $ kpatch_strip --rel-fixup foo foobar.stripped
    $ strip --strip-unneeded foobar.stripped
    $ kpatch_strip --undo-link foo foobar.stripped
    ```

    The options in the preceding command are described as follows:

    - **--strip** removes useless sections for patch creation from the foobar.
    - **--rel-fixup** repairs the address of the variables and functions accessed in the patch.
    - **strip --strip-unneeded** removes the useless symbol information for hot patch relocation.
    - **--undo-link** changes the symbol address in a patch from absolute to relative.

6. Create a hot patch file.

   After the preceding operations, the contents required for creating the hot patch are obtained. Run the **kpatch_make** command to input parameters **Build ID** of the original executable file and **foobar.stripped** (output file of **kpatch_strip**) to **kpatch_make** to generate a hot patch file.

    ``` shell
    $ str=$(readelf -n foo | grep 'Build ID')
    $ substr=${str##* }
    $ kpatch_make -b $substr foobar.stripped -o foo.kpatch
    $ ls
    bar.c  bar.s  foo  foobar  foobar.s  foobar.stripped  foo.c  foo.kpatch  foo.s
    ```

   The final hot patch file foo.kpatch is obtained.

#### Creation Through a Script

This section describes how to use LibcarePlus built-in **libcare-patch-make** script to create a hot patch file. The original file foo.c and patch file bar.c are used as an example.

1. Run the diff command to generate the comparison file of foo.c and bar.c.

    ``` shell
    $ diff -up foo.c bar.c > foo.patch
    ```

    The content of the foo.patch file is as follows:

    <details>
    <summary>Expand foo.patch</summary>
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


2. Write the makefile for building foo.c as follows:

    <details>
    <summary>Expand makefile</summary>
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


3. After the makefile is done, directly call **libcare-patch-make**. If **libcare-patch-make** asks you which file to install the patch, enter the original file name, as shown in the following:

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

    After the command is executed, the output indicates that the hot patch file is in the **patchroot** directory of the current directory, and the executable file is in the **lpmake** directory. By default, the Build ID is used to name a hot patch file generated by a script.



## Applying the LibcarePlus Hot Patch

This following uses the original file **foo.c** and patch file **bar.c** as an example to describe how to use the LibcarePlus hot patch.

### Preparation

Before using the LibcarePlus hot patch, prepare the original executable program foo and hot patch file foo.kpatch.

### Loading the Hot Patch

The procedure for applying the LibcarePlus hot patch is as follows:

1. In the first shell window, run the executable program to be patched:

    ``` shell
    $ ./lpmake/foo
    Hello world!
    Hello world!
    Hello world!
    ```

2. In the second shell window, run the **libcare-ctl** command to apply the hot patch:

    ``` shell
    $ libcare-ctl -v patch -p $(pidof foo) ./foo.kpatch
    ```

    If the hot patch is applied successfully, the following information is displayed in the second shell window:

    ``` shell
    1 patch hunk(s) have been successfully applied to PID '10999'
    ```

    The following information is displayed for the target process running in the first shell window:

    ``` shell
    Hello world!
    Hello world!
    Hello world being patched!
    Hello world being patched!
    ```


### Uninstalling the Hot Patch

The procedure for uninstalling the LibcarePlus hot patch is as follows:

1. Run the following command in the second shell window:

    ``` shell
    $ libcare-ctl unpatch -p $(pidof foo)
    ```

    If the hot patch is uninstalled successfully, the following information is displayed in the second shell window:

    ``` shell
    1 patch hunk(s) were successfully cancelled from PID '10999'
    ```

2. The following information is displayed for the target process running in the first shell window:

    ``` shell
    Hello world being patched!
    Hello world being patched!
    Hello world!
    Hello world!
    ```
