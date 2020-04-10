# Static Link Library<a name="EN-US_TOPIC_0229243727"></a>

To create a static link library \(SLL\), you need to compile the source file to the target file, and then run the  **ar**  command to compress the target file into an SLL.

Example: Compile and compress source files  **test1.c**,  **test2.c**, and  **test3.c**  into an SLL.

```
gcc -c test1.c test2.c test3.c
ar rcs libtest.a test1.o test2.o test3.o
```

The  **ar**  command is a backup compression command. You can compress multiple files into a backup file \(also called an archive file\) or extract member files from the backup file. The most common use of  **ar**  is to compress the target files into an SLL.

The format of the  **ar**  command to compress the target files into an SLL is as follows:

ar rcs  _Sllfilename_ _Targetfilelist_

-   _Sllfilename_: Name of the static library file.
-   _Targetfilelist_: Target file list.
-   **r**: replaces the existing target file in the library or adds a new target file.
-   **c**: creates a library regardless of whether the library exists.
-   **s**: creates the index of the target file. The speed can be improved when a large library is created.

Example: Create a main.c file to use the SLL.

```
gcc main.c -L libraryDIR -ltest -o test.out
```

In the preceding command,  **libraryDIR**  indicates the path of the libtest.a library.

