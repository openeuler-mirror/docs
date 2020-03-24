# 编译带包的java程序示例<a name="ZH-CN_TOPIC_0229243675"></a>

1.  cd到代码目录，此处以用户“/home/code”进行举例。并在该目录下创建“/home/code/Test/my/example”、“/home/code/Hello/world/developers”、“/home/code/Hi/openos/openeuler”子目录，分别用于存放源文件。

    ```
    cd /home/code
    
    mkdir -p Test/my/example
    mkdir -p Hello/world/developers
    mkdir -p Hi/openos/openeuler
    ```

2.  cd到/home/code/Test/my/example目录，创建Test.java。

    ```
    cd /home/code/Test/my/example
    vi Test.java
    ```

    Test.java代码内容示例：

    ```
    package my.example;
    import world.developers.Hello;
    import openos.openeuler.Hi;
    public class Test {
      public static void main(String[] args) {
       Hello me = new Hello();
       me.hello();
       Hi you = new Hi();
       you.hi();
      }
    }
    ```

3.  cd到/home/code/Hello/world/developers目录，创建Hello.java。

    ```
    cd /home/code/Hello/world/developers
    vi Hello.java
    ```

    Hello.java代码内容示例：

    ```
    package world.developers;
    public class Hello {
      public void hello(){
       System.out.println("Hello, openEuler.");
      }
    }
    ```

4.  cd到/home/code/Hi/openos/openeuler目录，创建Hi.java。

    ```
    cd /home/code/Hi/openos/openeuler
    vi Hi.java
    ```

    Hi.java代码内容示例：

    ```
    package openos.openeuler;
    public class Hi {
      public void hi(){
       System.out.println("Hi, the global developers.");
      }
    }
    ```

5.  cd到/home/code，使用javac编译源文件。

    ```
    cd /home/code
    javac -classpath Hello:Hi Test/my/example/Test.java
    ```

    执行完命令后，会在“/home/code/Test/my/example”、“/home/code/Hello/world/developers”、“/home/code/Hi/openos/openeuler”目录下分别生成Test.class、Hello.class、Hi.class文件。

6.  cd到/home/code，使用java运行Test程序。

    ```
    cd /home/code
    java -classpath Test:Hello:Hi my/example/Test
    ```

    执行结果如下所示：

    ```
    Hello, openEuler.
    Hi, the global developers.
    ```


