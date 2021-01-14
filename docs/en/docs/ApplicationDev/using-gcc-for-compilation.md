# Using GCC for Compilation

This chapter describes the basic knowledge of GCC compilation and provides examples for demonstration. For more information about GCC, run the  **man gcc**  command.

[[toc]]

## Overview

The GNU Compiler Collection \(GCC\) is a powerful and high-performance multi-platform compiler developed by GNU. The GCC compiler can compile and link source programs, assemblers, and target programs of C and C++ into executable files. By default, the GCC software package is installed in the openEuler OS.

## Basics



### File Type

For any given input file, the file type determines which compilation to perform.  [Table 1](#table634145764320)  describes the common GCC file types.

**Table  1**  Common GCC file types

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

### Compilation Process

Using GCC to generate executable files from source code files requires preprocessing, compilation, assembly, and linking.

1.  Preprocessing: Preprocess the source program \(such as a **.c** file\) to generate an **.i** file.
2.  Compilation: Compile the preprocessed **.i** file into an assembly language to generate an **.s** file.
3.  Assemble: Assemble the assembly language file to generate the target file **.o**.
4.  Linking: Link the **.o** files of each module to generate an executable program file.

The **.i**, **.s**, and **.o** files are intermediate or temporary files. If the GCC is used to compile programs in C language at a time, these files will be deleted.

### Compilation Options

GCC compilation command format:  **gcc**  \[_options_\] \[_filenames_\]

In the preceding information:

_options_ : compilation options.

_filenames_ : file name.

GCC is a powerful compiler. It has many  _options_, but most of them are not commonly used.  [Table 2](#table1342946175212)  describes the common  _options_.

**Table  2**  Common GCC compilation options

|  options Value   |Description  |Example  |
|:---  |:----  |:----  |
| -c| Compiles and assembles specified source files to generate target files without linking them. It is usually used to compile subprogram files. | # Use the -c option to compile the source files test1.c and test2.c.<br/>gcc -c test1.c test2.c |
| -S | Compiles the specified source file to generate an assembly language file with the .s suffix but without assembling it. | # Use the compiler to preprocess circle.c, translate it into assembly language, and store the result in circle.s.<br/>gcc -S circle.c |
| -E |  Preprocesses specified source files without compiling them.<br/>By default, the output of the preprocessor is imported to a standard output stream, such as a display. You can use the -o option to import it to an output file.|  # Export the preprocessing result to the circle.i file.<br/>gcc -E circle.c -o circle.i|
| -o *file* |Generates a specified output file when an executable file is generated. The name must be different from that of the source file. If this option is not given, GCC generates the preset executable file a.out.  | # Use the source file as the input file and the executable file as the output file. That is, compile the entire program.<br/>gcc main.c func.c -o app.out |
| -g | Contains standard debugging information in executable programs. | - |
|-L *libary_path*  | Adds the library_path to the library file search path list. |-  |
|-l *libary_path*   | Searches for the specified function library during linking.<br/>When GCC is used to compile and link programs, GCC links libc.a or libc.so by default. However, other libraries (such as non-standard libraries and third-party libraries) need to be manually added. | # Use the -l option to link the math library.<br/>gcc main.c -o main.out -lm<br/>NOTE:<br/>The file name of the math library is libm.a. The prefix lib and suffix .a are standard, and m is the basic name. GCC automatically adds these prefixes and suffixes to the basic name following the -l option. In this example, the basic name is m. |
| -I *head_path* | Adds the head_path to the search path list of the header file. | - |
| -static | Performs static compilation and links static libraries. Do not link dynamic libraries. | - |
| -shared | Default option, which can be omitted.<br/>A dynamic library file can be generated.<br/>During dynamic compilation, the dynamic library is preferentially linked. The static library with the same name is linked only when there is no dynamic library.  | - |
| -fPIC（或-fpic） | Generates location-independent target code that uses a relative address. Generally, the -static option is used to generate a dynamic library file from the PIC target file. |  - |

### Multi-file Compilation

There are two methods provided for compiling multiple source files.

-   Multiple source files are compiled at the same time. All files need to be recompiled during compilation.

    Example: Compile  **test1.c**  and  **test2.c**  and link them to the executable file  **test**.

    ```
    $ gcc test1.c test2.c -o test
    ```

-   Compile each source file, and then link the target files generated after compilation. During compilation, only modified files need to be recompiled.

    For example, compile  **test1.c**  and  **test2.c**, and link the target files  **test1.o**  and  **test2.o**  to the executable file  **test**.

    ```
    $ gcc -c test1.c
    $ gcc -c test2.c
    $ gcc -o test1.o test2.o -o test
    ```


## Libraries

A library is mature and reusable code that has been written for use. Each program depends on many basic underlying libraries.

The library file name is prefixed with lib and suffixed with .so \(dynamic library\) or .a \(static library\). The middle part is the user-defined library file name, for example, libfoo.so or libfoo.a. Because all library files comply with the same specifications, the  **lib**  prefix can be omitted when the  **-l**  option specifies the name of the linked library file. That is, when GCC processes  **-lfoo**, the library file  **libfoo.so**  or  **libfoo.a**  is automatically linked. When creating a library, you must specify the full file name  **libfoo.so**  or  **libfoo.a**.

Libraries are classified into static libraries and dynamic libraries based on the linking time. The static library links and packs the target file .o generated by assembly and the referenced library into an executable file in the linking phase. The dynamic library is not linked to the target code when the program is compiled, but is loaded when the program is run. The differences are as follows:

-   The resource usage is different.

    The static library is a part of the generated executable file, while the dynamic library is a separate file. Therefore, the sizes and occupied disk space of the executable files of the static library and dynamic library are different, which leads to different resource usage.

-   The scalability and compatibility are different.

    If the implementation of a function in the static library changes, the executable file must be recompiled. For the executable file generated by dynamic linking, only the dynamic library needs to be updated, and the executable file does not need to be recompiled.

-   The dependency is different.

    The executable file of the static library can run without depending on any other contents, while the executable file of the dynamic library must depend on the dynamic library. Therefore, the static library is convenient to migrate.

-   The loading speeds are different.

    Static libraries are linked together with executable files, while dynamic libraries are linked only when they are loaded or run. Therefore, for the same program, static linking is faster than dynamic linking.



### Dynamic Link Library

You can use the  **-shared**  and  **-fPIC**  options to create a dynamic link library \(DLL\) with the source file, assembly file, or target file. The  **-fPIC**  option is used in the compilation phase. This option is used when the target file is generated, so as to generate location-independent code.

Example 1: Generate a DLL from the source file.

```
$ gcc -fPIC -shared test.c -o libtest.so
```

Example 2: Generate a DLL from the target file.

```
$ gcc -fPIC -c test.c -o test.o
$ gcc -shared test.o -o libtest.so
```

To link a DLL to an executable file, you need to list the name of the DLL in the command line.

Example: Compile  **main.c**  and  **libtest.so**  into  **app.out**. When  **app.out**  is running, the link library  **libtest.so**  is dynamically loaded.

```
$ gcc main.c libtest.so -o app.out
```

In this mode, the  **libtest.so**  file in the current directory is used.

If you choose to search for a DLL, to ensure that the DLL can be linked when the program is running, you must implement by using one of the following methods:

-   Save the DLL to a standard directory, for example,  **/usr/lib**.
-   Add the DLL path  **libaryDIR**  to the environment variable  **LD\_LIBRARY\_PATH**.

    $ export LD\_LIBRARY\_PATH=libraryDIR:$LD\_LIBRARY\_PATH

    >![](./public_sys-resources/icon-note.gif) **NOTE:**   
    >**LD\_LIBRARY\_PATH**  is an environment variable of the DLL. If the DLL is not in the default directories \(**/lib**  and  **/usr/lib**\), you need to specify the environment variable  **LD\_LIBRARY\_PATH**.  

-   Add the DLL path  **libaryDIR**  to  **/etc/ld.so.conf**  and run  **ldconfig**, or use the DLL path  **libaryDIR**  as a parameter to run  **ldconfig**.

```
$ gcc main.c -L libraryDIR -ltest -o app.out
$ export LD_LIBRARY_PATH=libraryDIR:$LD_LIBRARY_PATH
```

### Static Link Library

To create a static link library \(SLL\), you need to compile the source file to the target file, and then run the  **ar**  command to compress the target file into an SLL.

Example: Compile and compress source files  **test1.c**,  **test2.c**, and  **test3.c**  into an SLL.

```
$ gcc -c test1.c test2.c test3.c
$ ar rcs libtest.a test1.o test2.o test3.o
```

The  **ar**  command is a backup compression command. You can compress multiple files into a backup file \(also called an archive file\) or extract member files from the backup file. The most common use of  **ar**  is to compress the target files into an SLL.

The format of the  **ar**  command to compress the target files into an SLL is as follows:

ar rcs  _Sllfilename_ _Targetfilelist_

-   _Sllfilename_ : Name of the static library file.
-   _Targetfilelist_ : Target file list.
-   **r**: replaces the existing target file in the library or adds a new target file.
-   **c**: creates a library regardless of whether the library exists.
-   **s**: creates the index of the target file. The speed can be improved when a large library is created.

Example: Create a main.c file to use the SLL.

```
$ gcc main.c -L libraryDIR -ltest -o test.out
```

In the preceding command,  **libraryDIR**  indicates the path of the libtest.a library.

## Examples



### Example for Using GCC to Compile C Programs

1.  Run the  **cd**  command to go to the code directory. The  **~/code**  directory is used as an example. The command is as follows:

    ```
    $ cd ~/code 
    ```

2.  Compile the Hello World program and save it as  **helloworld.c**. The following uses the Hello World program as an example. The command is as follows:

    ```
    $ vi helloworld.c
    ```

    Code example:

    ```
    #include <stdio.h>    
    int main()    
    {    
           printf("Hello World!\n");       
           return 0;    
    }
    ```

3.  Run the following command to compile the code in the code directory:

    ```
    $ gcc helloworld.c -o helloworld
    ```

    If no error is reported, the execution is successful.

4.  After the compilation is complete, the helloworld file is generated. Check the compilation result. The following is an example:

    ```
    $ ./helloworld
    Hello World!
    ```


### Example for Creating and Using a DLL Using GCC

1.  Run the  **cd**  command to go to the code directory. The  **~/code**  directory is used as an example. Create the  **src**,  **lib**, and  **include**  subdirectories in the directory to store the source file, DLL file, and header file, respectively.

    ```
    $ cd ~/code
    $ mkdir src lib include
    ```
    
2.  Run the  **cd**  command to go to the  **~/code/src**  directory and create two functions  **add.c**  and  **sub.c**  to implement addition and subtraction, respectively.

    ```
    $ cd ~/code/src
    $ vi add.c
    $ vi sub.c
    ```

    The following is an example of the  **add.c**  code:

    ```
    #include "math.h"
    int add(int a, int b)
    {
            return a+b;
    }
    ```

    The following is an example of the  **sub.c**  code:

    ```
    #include "math.h"
    int sub(int a, int b)
    {
            return a-b;
    }
    ```

3.  Compile the source files add.c and sub.c into the DLL libmath.so, and store the DLL in the  **~/code/lib**  directory.

    ```
    $ gcc -fPIC -shared add.c sub.c -o ~/code/lib/libmath.so
    ```

4.  Go to the  **~/code/include**  directory, create a header file  **math.h**, and declare the header file of the function.

    ```
    $ cd ~/code/include
    $ vi math.h
    ```

    The following is an example of the  **math.h**  code:

    ```
    #ifndef __MATH_H_
    #define __MATH_H_
    int add(int a, int b);
    int sub(int a, int b);
    #endif
    ```

5.  Run the  **cd**  command to go to the  **~/code/src**  directory and create a  **main.c**  function that invokes add\(\) and sub\(\).

    ```
    $ cd ~/code/src
    $ vi main.c
    ```

    The following is an example of the  **math.c**  code:

    ```
    #include <stdio.h>
    #include "math.h"
    int main()
    {
            int a, b;
            printf("Please input a and b:\n");
            scanf("%d %d", &a, &b);
            printf("The add: %d\n", add(a,b));
            printf("The sub: %d\n", sub(a,b));
            return 0;
    }
    ```

6.  Compile  **main.c**  and  **libmath.so**  into  **math.out**.

    ```
    $ gcc main.c -I ~/code/include -L ~/code/lib -lmath -o math.out
    ```

7.  Add the path of the DLL to the environment variable.

    ```
    $ export LD_LIBRARY_PATH=~/code/lib:$LD_LIBRARY_PATH
    ```

8.  Run the following command to execute  **math.out**:

    ```
    $ ./math.out
    ```

    The command output is as follows:

    ```
    Please input a and b:
    9 2
    The add: 11
    The sub: 7
    ```


### Example for Creating and Using an SLL Using GCC

1.  Run the  **cd**  command to go to the code directory. The  **~/code**  directory is used as an example. Create the  **src**,  **lib**, and  **include**  subdirectories in the directory to store the source file, SLL file, and header file respectively.

    ```
    $ cd ~/code
    $ mkdir src lib include
    ```
    
2.  Run the  **cd**  command to go to the  **~/code/src**  directory and create two functions  **add.c**  and  **sub.c**  to implement addition and subtraction, respectively.

    ```
    $ cd ~/code/src
    $ vi add.c
    $ vi sub.c
    ```

    The following is an example of the  **add.c**  code:

    ```
    #include "math.h"
    int add(int a, int b)
    {
            return a+b;
    }
    ```

    The following is an example of the  **sub.c**  code:

    ```
    #include "math.h"
    int sub(int a, int b)
    {
            return a-b;
    }
    ```

3.  Compile the source files  **add.c**  and  **sub.c**  into the target files  **add.o**  and  **sub.o**.

    ```
    $ gcc -c add.c sub.c
    ```

4.  Run the  **ar**  command to compress the  **add.o**  and  **sub.o**  target files into the SLL  **libmath.a**  and save the SLL to the  **~/code/lib**  directory.

    ```
    $ ar rcs ~/code/lib/libmath.a add.o sub.o
    ```

5.  Go to the  **~/code/include**  directory, create a header file  **math.h**, and declare the header file of the function.

    ```
    $ cd ~/code/include
    $ vi math.h
    ```

    The following is an example of the  **math.h**  code:

    ```
    #ifndef __MATH_H_
    #define __MATH_H_
    int add(int a, int b);
    int sub(int a, int b);
    #endif
    ```

6.  Run the  **cd**  command to go to the  **~/code/src**  directory and create a  **main.c**  function that invokes add\(\) and sub\(\).

    ```
    $ cd ~/code/src
    $ vi main.c
    ```

    The following is an example of the  **math.c**  code:

    ```
    #include <stdio.h>
    #include "math.h"
    int main()
    {
            int a, b;
            printf("Please input a and b:\n");
            scanf("%d %d", &a, &b);
            printf("The add: %d\n", add(a,b));
            printf("The sub: %d\n", sub(a,b));
            return 0;
    }
    ```

7.  Compile  **main.c**  and  **libmath.a**  into  **math.out**.

    ```
    $ gcc main.c -I ~/code/include -L ~/code/lib -lmath -o math.out
    ```

8.  Run the following command to execute  **math.out**:

    ```
    $ ./math.out
    ```

    The command output is as follows:

    ```
    Please input a and b:
    9 2
    The add: 11
    The sub: 7
    ```
