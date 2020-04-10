# Compiling a Java Program Without a Package<a name="EN-US_TOPIC_0229243628"></a>

1.  Run the  **cd**  command to go to the code directory. The  **/home/code**  directory is used as an example. The command is as follows:

    ```
    # cd /home/code 
    ```

2.  Compile the Hello World program and save it as  **HelloWorld.java**. The following uses the Hello World program as an example. The command is as follows:

    ```
    # vi HelloWorld.java
    ```

    Code example:

    ```
    public class HelloWorld {     
         public static void main(String[] args) {         
             System.out.println("Hello World");     
          } 
    }
    ```

3.  Run the following command to compile the code in the code directory:

    ```
    # javac HelloWorld.java 
    ```

    If no error is reported, the execution is successful.

4.  After the compilation is complete, the HelloWorld.class file is generated. You can run the  **java**  command to view the result. The following is an example:

    ```
    # java HelloWorld
    Hello World
    ```


