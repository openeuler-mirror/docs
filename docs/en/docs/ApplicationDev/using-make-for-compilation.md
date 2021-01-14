# Using Make for Compilation

This chapter describes the basic knowledge of make compilation and provides examples for demonstration. For more information about Make, run the  **man make**  command.

[[toc]]

## Overview

The GNU make utility \(usually abbreviated as make\) is a tool for controlling the generation of executable files from source files. make automatically identifies which parts of the complex program have changed and need to be recompiled. Make uses a configuration file called makefiles to control how the program is built.

## Basics


### File Type

[Table 1](#table634145764320)  describes the file types that may be used in the makefiles file.

**Table  1**  File types

|  Extension (Suffix)   |Description |
|:---  |:----  |
| .c| C source code file. |
| .C，.cc或.cxx|  C++ source code file.|
|.m | Objective-C source code file. |
| .s| Assembly language source code file. |
|.i | Preprocessed C source code file. |
|.ii | Preprocessed C++ source code file. |
| .S| Pre-processed assembly language source code file. |
|.h | Header file contained in the program. |
| .o| Target file after compilation. |
|.so |Dynamic link library, which is a special target file. |
|.a | Static link library. |
| .out|Executable files, which do not have a fixed suffix. The system distinguishes executable files from unexecutable files based on file attributes. If the name of an executable file is not given, GCC generates a file named a.out. |

### make Work Process

The process of deploying make to generate an executable file from the source code file is described as follows:

1.  The make command reads the Makefiles, including the files named GNUmakefile, makefile, and Makefile in the current directory, the included makefile, and the rule files specified by the  **-f**,  **\-\-file**, and  **\-\-makefile**  options.
2.  Initialize variables.
3.  Derive implicit rules, analyze dependencies, and create a dependency chain.
4.  Determine which targets need to be regenerated based on the dependency chain.
5.  Run a command to generate the final file.

### make Options

make command format:  **make**  \[_option_\]... \[_target_\]...

In the preceding command:

_option_ : parameter option.

_target_ : target specified in Makefile.

[Table 2](#table261872312343)  describes the common make options.

**Table  2**  Common make options

|  options取值   |说明  |
|:---  |:----  |
| -C dir，--directory=dir | Specifies dir as the working directory after the make command starts to run.<br/>When there are multiple **-C** options, the final working directory of make is the relative path of the first directory. |
| -d | Displays all debugging information during execution of the make command. You can use the **-d** option to display all the information during the construction of the dependency chain and the reconstruction of the target. |
| -e，--enveronment-overrides | Overwrites the variable definition with the same name in Makefile with the environment variable definition. |
| -f file，--file=file，--makefile=file |  Specifies the file as the Makefile for the make command.|
| -p，--help | Displays help information. |
| -i，--ignore-errors | Ignores the errors occurred during the execution. |
| -k，--keep-going | When an error occurs during command execution, the make command is not terminated. The make command executes all commands as many as possible until a known error occurs. |
| -n，--just-print，--dry-run | Simulates the execution of commands (including the commands starting with @) in the actual execution sequence. This command is used only to display the execution process and has no actual execution effect. |
| -o file，--old-file=file，--assume-old=file | The specified file does not need to be rebuilt even if its dependency has expired, and no target of this dependency file is rebuilt. |
| -p，--print-date-base | Before the command is executed, all data of Makefile read by make and the version information of make are printed. If you only need to print the data, run the **make -qp** command to view the preset rules and variables before the make command is executed. You can run the **make -p -f /dev/null** command. |
| -r，--no-builtin-rules | Ignores the use of embedded implicit rules and the implicit suffix list of all suffix rules. |
| -R，--no-builtin-variabes | Ignores embedded hidden variables. |
|-s，--silent，--quiet  | Cancels the printing during the command execution. |
| -S，--no-keep-going，--stop | Cancels the **-k** option. In the recursive make process, the sub-make inherits the upper-layer command line option through the **MAKEFLAGS** variable. You can use the **-S** option in the sub-make to cancel the **-k** option transferred by the upper-layer command, or cancel the **-k** option in the system environment variable **MAKEFLAGS**. |
| -t，--touch | Updates the timestamp of all target files to the current system time. Prevents make from rebuilding all outdated target files. |
|  -v，version | Displays the make version. |

## Makefiles

Make is a tool that uses makefiles for compilation, linking, installation, and cleanup, so as to generate executable files and other related files from source code files. Therefore, makefiles describe the compilation and linking rules of the entire project, including which files need to be compiled, which files do not need to be compiled, which files need to be compiled first, which files need to be compiled later, and which files need to be rebuilt. The makefiles automate project compilation. You do not need to manually enter a large number of source files and parameters each time.

This chapter describes the structure and main contents of makefiles. For more information about makefiles, run the  **info make**  command.

### Makefile Structure

The makefile file structure is as follows:

_targets_:_prereguisites_

_command_

or

_targets_:_prerequisites_;_command_

_command_

In the preceding information:

-   _targets_ : targets, which can be target files, executable files, or tags.
-   _prerequisites_ : dependency files, which are the files or targets required for generating the  _targets_. There can be multiple or none of them.
-   _command_ : command \(any shell command\) to be executed by make. Multiple commands are allowed, and each command occupies a line.
-   Use colons \(:\) to separate the target files from the dependency files. Press  **Tab**  at the beginning of each command line.

The makefile file structure indicates the output target, the object on which the output target depends, and the command to be executed for generating the target.

### Makefile Contents

A makefile file consists of the following contents:

-   Explicit rule

    Specify the dependency, such as the file to be generated, dependency file, and generated command.

-   Implicit rule

    Specify the rule that is automatically derived by make. The make command supports the automatic derivation function.

-   Variable definition
-   File indicator

    The file indicator consists of three parts:

    -   Inclusion of other makefiles, for example, include xx.md
    -   Selective execution, for example, \#ifdef
    -   Definition of multiple command lines, for example, define...endef. \(define ... endef\)

-   Comment

    The comment starts with a number sign \(\#\).


## Examples



### Example of Using Makefile to Implement Compilation

1.  Run the  **cd**  command to go to the code directory. The  **~/code**  directory is used as an example.

    ```
    $ cd ~/code
    ```

2. Create a header file  **hello.h**  and two functions  **hello.c**  and  **main.c**.

    ```
    $ vi hello.h
    $ vi hello.c
    $ vi main.c
    ```

    The following is an example of the  **hello.h**  code:

    ```
    #pragma once
    #include <stdio.h>
    void hello();
    ```

    The following is an example of the  **hello.c**  code:

    ```
    #include "hello.h"
    void hello()
    {
            int i=1;
            while(i<5)
            {
                    printf("The %dth say hello.\n", i);
                    i++;
            }
    }
    
    ```

    The following is an example of the  **main.c**  code:

    ```
    #include "hello.h"
    #include <stdio.h>
    int main()
    {
            hello();
            return 0;
    }
    ```

3.  Create the makefile.

    ```
    $ vi Makefile
    ```

    The following provides an example of the makefile content:

    ```
    main:main.o hello.o
            gcc -o main main.o hello.o
    main.o:main.c
            gcc -c main.c
    hello.o:hello.c
            gcc -c hello.c
    clean:
            rm -f hello.o main.o main
    ```

4.  Run the  **make**  command.

    ```
    $ make
    ```

    After the command is executed, the commands executed in makefile are printed. If you do not need to print the information, add the  **-s**  option to the  **make**  command.

    gcc -c main.c

    gcc -c hello.c

    gcc -o main main.o hello.o

5.  Execute the ./main target.

    ```
    $ ./main
    ```

    After the command is executed, the following information is displayed:

    The 1th say hello.

    The 2th say hello.

    The 3th say hello.

    The 4th say hello.
