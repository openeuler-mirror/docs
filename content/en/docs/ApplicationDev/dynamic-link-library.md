# Dynamic Link Library<a name="EN-US_TOPIC_0229243620"></a>

You can use the  **-shared**  and  **-fPIC**  options to create a dynamic link library \(DLL\) with the source file, assembly file, or target file. The  **-fPIC**  option is used in the compilation phase. This option is used when the target file is generated, so as to generate location-independent code.

Example 1: Generate a DLL from the source file.

```
gcc -fPIC -shared test.c -o libtest.so
```

Example 2: Generate a DLL from the target file.

```
gcc -fPIC -c test.c -o test.o
gcc -shared test.o -o libtest.so
```

To link a DLL to an executable file, you need to list the name of the DLL in the command line.

Example: Compile  **main.c**  and  **libtest.so**  into  **app.out**. When  **app.out**  is running, the link library  **libtest.so**  is dynamically loaded.

```
gcc main.c libtest.so -o app.out
```

In this mode, the  **libtest.so**  file in the current directory is used.

If you choose to search for a DLL, to ensure that the DLL can be linked when the program is running, you must implement by using one of the following methods:

-   Save the DLL to a standard directory, for example,  **/usr/lib**.
-   Add the DLL path  **libaryDIR**  to the environment variable  **LD\_LIBRARY\_PATH**.

    export LD\_LIBRARY\_PATH=libraryDIR:$LD\_LIBRARY\_PATH

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >**LD\_LIBRARY\_PATH**  is an environment variable of the DLL. If the DLL is not in the default directories \(**/lib**  and  **/usr/lib**\), you need to specify the environment variable  **LD\_LIBRARY\_PATH**.  

-   Add the DLL path  **libaryDIR**  to  **/etc/ld.so.conf**  and run  **ldconfig**, or use the DLL path  **libaryDIR**  as a parameter to run  **ldconfig**.

```
gcc main.c -L libraryDIR -ltest -o app.out
export LD_LIBRARY_PATH=libraryDIR:$LD_LIBRARY_PATH
```

