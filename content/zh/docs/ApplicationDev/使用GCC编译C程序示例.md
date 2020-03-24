# 使用GCC编译C程序示例<a name="ZH-CN_TOPIC_0229243625"></a>

1.  cd到代码目录，此处以用户“/home/code”进行举例。如下所示：

    ```
    cd /home/code 
    ```

2.  编写Hello World程序，保存为helloworld.c，此处以编译Hello World程序进行举例说明。示例如下：

    ```
    vi helloworld.c
    ```

    代码内容示例：

    ```
    #include <stdio.h>    
    int main()    
    {    
           printf("Hello World!\n");       
           return 0;    
    }
    ```

3.  在代码目录，执行编译，使用命令：

    ```
    gcc helloworld.c -o helloworld
    ```

    编译执行未报错，表明执行通过。

4.  编译完成后，会生成helloworld文件，查看编译结果，示例如下：

    ```
    # ./helloworld
    Hello World!
    ```


