# Example for Using GCC to Compile C Programs<a name="EN-US_TOPIC_0229243625"></a>

1.  Run the  **cd**  command to go to the code directory. The  **/home/code**  directory is used as an example. The command is as follows:

    ```
    cd /home/code 
    ```

2.  Compile the Hello World program and save it as  **helloworld.c**. The following uses the Hello World program as an example. The command is as follows:

    ```
    vi helloworld.c
    ```

    Code example:

    ```
    #include <stdio.h>    
    int main()    
    {    
           printf("Hello World!\n");       
           return 0;    
    }
    ```

3.  Run the following command to compile the code in the code directory:

    ```
    gcc helloworld.c -o helloworld
    ```

    If no error is reported, the execution is successful.

4.  After the compilation is complete, the helloworld file is generated. Check the compilation result. The following is an example:

    ```
    # ./helloworld
    Hello World!
    ```


