# 使用Makefile实现编译的示例<a name="ZH-CN_TOPIC_0229243689"></a>

1.  cd到代码目录，此处以用户“/home/code”进行举例。

    ```
    cd /home/code
    ```

2.  创建1个头文件hello.h和2个函数hello.c、main.c。

    ```
    cd /home/code/
    ```

    hello.h代码内容示例：

    ```
    #pragma once
    #include <stdio.h>
    void hello();
    ```

    hello.c代码内容示例：

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

    main.c代码内容示例：

    ```
    #include "hello.h"
    #include <stdio.h>
    int main()
    {
            hello();
            return 0;
    }
    ```

3.  创建Makefile文件。

    ```
    vi Makefile
    ```

    Makefile文件内容示例：

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

4.  执行make命令。

    ```
    make
    ```

    命令执行后，会打印Makefile中执行的命令。如果不需要打印该信息，可以在执行make命令是加上参数-s。

    gcc -c main.c

    gcc -c hello.c

    gcc -o main main.o hello.o

5.  执行./main目标。

    ```
    ./main
    ```

    命令执行后，打印如下信息：

    The 1th say hello.

    The 2th say hello.

    The 3th say hello.

    The 4th say hello.


