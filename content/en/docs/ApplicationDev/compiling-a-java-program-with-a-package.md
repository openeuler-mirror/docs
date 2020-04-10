# Compiling a Java Program with a Package<a name="EN-US_TOPIC_0229243675"></a>

1.  Run the  **cd**  command to go to the code directory. The  **/home/code**  directory is used as an example. Create the  **/home/code/Test/my/example**,  **/home/code/Hello/world/developers**, and  **/home/code/Hi/openos/openeuler**  subdirectories in the directory to store source files.

    ```
    cd /home/code
    
    mkdir -p Test/my/example
    mkdir -p Hello/world/developers
    mkdir -p Hi/openos/openeuler
    ```

2.  Run the  **cd**  command to go to the  **/home/code/Test/my/example**  directory and create  **Test.java**.

    ```
    cd /home/code/Test/my/example
    vi Test.java
    ```

    The following is an example of the Test.java code:

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

3.  Run the  **cd**  command to go to the  **/home/code/Hello/world/developers**  directory and create  **Hello.java**.

    ```
    cd /home/code/Hello/world/developers
    vi Hello.java
    ```

    The following is an example of the Hello.java code:

    ```
    package world.developers;
    public class Hello {
      public void hello(){
       System.out.println("Hello, openEuler.");
      }
    }
    ```

4.  Run the  **cd**  command to go to the  **/home/code/Hi/openos/openeuler**  directory and create  **Hi.java**.

    ```
    cd /home/code/Hi/openos/openeuler
    vi Hi.java
    ```

    The following is an example of the Hi.java code:

    ```
    package openos.openeuler;
    public class Hi {
      public void hi(){
       System.out.println("Hi, the global developers.");
      }
    }
    ```

5.  Run the  **cd**  command to go to the  **/home/code**  directory and use javac to compile the source file.

    ```
    cd /home/code
    javac -classpath Hello:Hi Test/my/example/Test.java
    ```

    After the command is executed, the  **Test.class**,  **Hello.class**, and  **Hi.class**  files are generated in the  **/home/code/Test/my/example**,  **/home/code/Hello/world/developers**, and  **/home/code/Hi/openos/openeuler**  directories.

6.  Run the  **cd**  command to go to the  **/home/code**  directory and run the  **Test**  program using Java.

    ```
    cd /home/code
    java -classpath Test:Hello:Hi my/example/Test
    ```

    The command output is as follows:

    ```
    Hello, openEuler.
    Hi, the global developers.
    ```


