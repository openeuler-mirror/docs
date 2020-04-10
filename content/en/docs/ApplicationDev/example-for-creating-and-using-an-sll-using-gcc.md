# Example for Creating and Using an SLL Using GCC<a name="EN-US_TOPIC_0229243709"></a>

1.  Run the  **cd**  command to go to the code directory. The  **/home/code**  directory is used as an example. Create the  **src**,  **lib**, and  **include**  subdirectories in the directory to store the source file, SLL file, and header file respectively.

    ```
    cd /home/code
    mkdir src
    mkdir lib
    mkdir include
    ```

2.  Run the  **cd**  command to go to the  **/home/code/src**  directory and create two functions  **add.c**  and  **sub.c**  to implement addition and subtraction, respectively.

    ```
    cd /home/code/src
    vi add.c
    vi sub.c
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
    gcc -c add.c sub.c
    ```

4.  Run the  **ar**  command to compress the  **add.o**  and  **sub.o**  target files into the SLL  **libmath.a**  and save the SLL to the  **/home/code/lib**  directory.

    ```
    ar rcs /home/code/lib/libmath.a add.o sub.o
    ```

5.  Go to the  **/home/code/include**  directory, create a header file  **math.h**, and declare the header file of the function.

    ```
    cd /home/code/include
    vi math.h
    ```

    The following is an example of the  **math.h**  code:

    ```
    #ifndef __MATH_H_
    #define __MATH_H_
    int add(int a, int b);
    int sub(int a, int b);
    #endif
    ```

6.  Run the  **cd**  command to go to the  **/home/code/src**  directory and create a  **main.c**  function that invokes add\(\) and sub\(\).

    ```
    cd /home/code/src
    vi main.c
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
    gcc main.c -I /home/code/include -L /home/code/lib -lmath -o math.out
    ```

8.  Run the following command to execute  **math.out**:

    ```
    ./math.out
    ```

    The command output is as follows:

    ```
    Please input a and b:
    9 2
    The add: 11
    The sub: 7
    ```


