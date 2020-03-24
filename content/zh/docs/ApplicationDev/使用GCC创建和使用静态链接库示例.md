# 使用GCC创建和使用静态链接库示例<a name="ZH-CN_TOPIC_0229243709"></a>

1.  cd到代码目录，此处以用户“/home/code”进行举例。并在该目录下创建src，lib，include子目录，分别用于存放源文件，动态库文件和头文件。

    ```
    cd /home/code
    mkdir src
    mkdir lib
    mkdir include
    ```

2.  cd到/home/code/src目录，创建2个函数add.c、sub.c，分别实现加、减。

    ```
    cd /home/code/src
    vi add.c
    vi sub.c
    ```

    add.c代码内容示例：

    ```
    #include "math.h"
    int add(int a, int b)
    {
            return a+b;
    }
    ```

    sub.c代码内容示例：

    ```
    #include "math.h"
    int sub(int a, int b)
    {
            return a-b;
    }
    ```

3.  将add.c、sub.c源文件编译为目标文件add.o、sub.o。

    ```
    gcc -c add.c sub.c
    ```

4.  将add.o、sub.o目标文件通过ar命令打包成静态库libmath.a，并将该动态库存放在/home/code/lib目录。

    ```
    ar rcs /home/code/lib/libmath.a add.o sub.o
    ```

5.  cd到/home/code/include目录，创建1个头文件math.h，声明函数的头文件。

    ```
    cd /home/code/include
    vi math.h
    ```

    math.h代码内容示例：

    ```
    #ifndef __MATH_H_
    #define __MATH_H_
    int add(int a, int b);
    int sub(int a, int b);
    #endif
    ```

6.  cd到/home/code/src目录，创建一个调用add\(\)和sub\(\)的main.c函数。

    ```
    cd /home/code/src
    vi main.c
    ```

    math.c代码内容示例：

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

7.  将main.c和libmath.a一起编译成math.out。

    ```
    gcc main.c -I /home/code/include -L /home/code/lib -lmath -o math.out
    ```

8.  执行math.out。

    ```
    ./math.out
    ```

    执行结果如下所示：

    ```
    Please input a and b:
    9 2
    The add: 11
    The sub: 7
    ```


