# Multi-file Compilation<a name="EN-US_TOPIC_0229243724"></a>

There are two methods provided for compiling multiple source files.

-   Multiple source files are compiled at the same time. All files need to be recompiled during compilation.

    Example: Compile  **test1.c**  and  **test2.c**  and link them to the executable file  **test**.

    ```
    gcc test1.c test2.c -o test
    ```

-   Compile each source file, and then link the target files generated after compilation. During compilation, only modified files need to be recompiled.

    For example, compile  **test1.c**  and  **test2.c**, and link the target files  **test1.o**  and  **test2.o**  to the executable file  **test**.

    ```
    gcc -c test1.c
    gcc -c test2.c
    gcc -o test1.o test2.o -o test
    ```


