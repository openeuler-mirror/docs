# Example of Using Makefile to Implement Compilation<a name="EN-US_TOPIC_0229243689"></a>

1.  Run the  **cd**  command to go to the code directory. The  **/home/code**  directory is used as an example.

    ```
    cd /home/code
    ```

2.  Create a header file  **hello.h**  and two functions  **hello.c**  and  **main.c**.

    ```
    cd /home/code/
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
    vi Makefile
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
    make
    ```

    After the command is executed, the commands executed in makefile are printed. If you do not need to print the information, add the  **-s**  option to the  **make**  command.

    gcc -c main.c

    gcc -c hello.c

    gcc -o main main.o hello.o

5.  Execute the ./main target.

    ```
    ./main
    ```

    After the command is executed, the following information is displayed:

    The 1th say hello.

    The 2th say hello.

    The 3th say hello.

    The 4th say hello.


