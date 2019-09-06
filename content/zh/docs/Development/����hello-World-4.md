# 编译hello World<a name="ZH-CN_TOPIC_0186532438"></a>

安装完后，在系统上即可进行程序编译。

1.  cd到代码目录，此处以用户“/home/code”进行举例。如下所示：

    ```
    # cd /home/code 
    ```

2.  编写Hello World程序，保存为HelloWorld.java，此处以编译Hello World程序进行举例说明。示例如下：

    ```
    # vi helloworld.java
    ```

    代码内容示例：

    ```
    public class HelloWorld {     
         public static void main(String[] args) {         
             System.out.println("Hello World");     
          } 
    }
    ```

3.  在代码目录，执行编译，使用命令：

    ```
    # javac HelloWorld.java 
    ```

    编译执行未报错，表明执行通过。

4.  编译完成后，会生成 HelloWorld.class 文件，通过java命令可执行查看结果，示例如下：

    ```
    # java HelloWorld
    Hello World
    ```


