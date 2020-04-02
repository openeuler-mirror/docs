# Executing a Command in a Running Container<a name="EN-US_TOPIC_0184808061"></a>

## Description<a name="en-us_topic_0183292669_section13350115135310"></a>

To execute a command in a running container, run the  **isula exec**  command. This command is executed in the default directory of the container. If a user-defined directory is specified for the basic image, the user-defined directory is used.

## **Usage**<a name="en-us_topic_0183292669_section188811239165314"></a>

```
isula exec [OPTIONS] CONTAINER COMMAND [ARG...]
```

## Parameters<a name="en-us_topic_0183292669_section4322824135919"></a>

The following table lists the parameters supported by the  **exec**  command.

**Table  1**  Parameter description

<a name="en-us_topic_0183292669_table123271972373"></a>
<table><tbody><tr id="en-us_topic_0183292669_row11911910193715"><td class="cellrowborder" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183292669_p1599121519378"><a name="en-us_topic_0183292669_p1599121519378"></a><a name="en-us_topic_0183292669_p1599121519378"></a><strong id="en-us_topic_0183292669_b129918157370"><a name="en-us_topic_0183292669_b129918157370"></a><a name="en-us_topic_0183292669_b129918157370"></a>Command</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183292669_p129921517375"><a name="en-us_topic_0183292669_p129921517375"></a><a name="en-us_topic_0183292669_p129921517375"></a>Parameter</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183292669_p159941513375"><a name="en-us_topic_0183292669_p159941513375"></a><a name="en-us_topic_0183292669_p159941513375"></a><strong id="en-us_topic_0183292669_b699131593718"><a name="en-us_topic_0183292669_b699131593718"></a><a name="en-us_topic_0183292669_b699131593718"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183292669_row27694315596"><td class="cellrowborder" rowspan="6" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183292669_p059393215315"><a name="en-us_topic_0183292669_p059393215315"></a><a name="en-us_topic_0183292669_p059393215315"></a><strong id="en-us_topic_0183292669_b1060012451269"><a name="en-us_topic_0183292669_b1060012451269"></a><a name="en-us_topic_0183292669_b1060012451269"></a>exec</strong></p>
<p id="en-us_topic_0183292669_p17332618610"><a name="en-us_topic_0183292669_p17332618610"></a><a name="en-us_topic_0183292669_p17332618610"></a>&nbsp;&nbsp;</p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183292669_p176843115914"><a name="en-us_topic_0183292669_p176843115914"></a><a name="en-us_topic_0183292669_p176843115914"></a>-d, --detach</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183292669_p166861121233"><a name="en-us_topic_0183292669_p166861121233"></a><a name="en-us_topic_0183292669_p166861121233"></a>Runs a command in the background.</p>
</td>
</tr>
<tr id="en-us_topic_0183292669_row144815810419"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183292669_p248105814415"><a name="en-us_topic_0183292669_p248105814415"></a><a name="en-us_topic_0183292669_p248105814415"></a>-e, --env</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183292669_p1240225963710"><a name="en-us_topic_0183292669_p1240225963710"></a><a name="en-us_topic_0183292669_p1240225963710"></a>Sets environment variables. (Note: Currently, iSulad does not use this function.)</p>
</td>
</tr>
<tr id="en-us_topic_0183292669_row225582276"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183292669_p16101657289"><a name="en-us_topic_0183292669_p16101657289"></a><a name="en-us_topic_0183292669_p16101657289"></a>-H, --host</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183292669_p10104456281"><a name="en-us_topic_0183292669_p10104456281"></a><a name="en-us_topic_0183292669_p10104456281"></a>Specifies the iSulad socket file path to be accessed.</p>
</td>
</tr>
<tr id="en-us_topic_0183292669_row185407613516"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183292669_p115401661558"><a name="en-us_topic_0183292669_p115401661558"></a><a name="en-us_topic_0183292669_p115401661558"></a>-i, --interactive</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183292669_p4818143019389"><a name="en-us_topic_0183292669_p4818143019389"></a><a name="en-us_topic_0183292669_p4818143019389"></a>Enables the standard input though no connection is set up. (Note: Currently, iSulad does not use this function.)</p>
</td>
</tr>
<tr id="en-us_topic_0183292669_row2054016654"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183292669_p65401663515"><a name="en-us_topic_0183292669_p65401663515"></a><a name="en-us_topic_0183292669_p65401663515"></a>-t, --tty</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183292669_p1783413176392"><a name="en-us_topic_0183292669_p1783413176392"></a><a name="en-us_topic_0183292669_p1783413176392"></a>Allocates a pseudo terminal. (Note: Currently, iSulad does not use this function.)</p>
</td>
</tr>
<tr id="en-us_topic_0183292669_row3321661767"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183292669_p18331961361"><a name="en-us_topic_0183292669_p18331961361"></a><a name="en-us_topic_0183292669_p18331961361"></a>-u, --user</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183292669_p93326361"><a name="en-us_topic_0183292669_p93326361"></a><a name="en-us_topic_0183292669_p93326361"></a>Logs in to the container as a specified user.</p>
</td>
</tr>
</tbody>
</table>

## Constraints<a name="en-us_topic_0183292669_section18811125219118"></a>

-   If no parameter is specified in the  **isula exec**  command, the  **-it**  parameter is used by default, indicating that a pseudo terminal is allocated and the container is accessed in interactive mode.
-   When you run the  **isula exec**  command to execute a script and run a background process in the script, you need to use the  **nohup**  flag to ignore the  **SIGHUP**  signal.

    When you run the  **isula exec**  command to execute a script and run a background process in the script, you need to use the  **nohup**  flag. Otherwise, the kernel sends the  **SIGHUP**  signal to the process executed in the background when the process \(first process of the session\) exits. As a result, the background process exits and zombie processes occur.

-   After running the  **isula exec**  command to access the container process, do not run background programs. Otherwise, the system will be suspended.

    To run the  **isula exec**  command to execute a background process, perform the following steps:

    1.  Run the  **isula exec container\_name bash**  command to access the container.
    2.  After entering the container, run the  **script &**  command.
    3.  Run the  **exit**  command. The terminal stops responding.

    ```
    After the isula exec command is executed to enter the container, the background program stops responding because the isula exec command is executed to enter the container and run the background while1 program. When the bash command is run to exit the process, the while1 program does not exit and becomes an orphan process, which is taken over by process 1.
    The while1 process is executed by the initial bash process fork &exec of the container. The while1 process copies the file handle of the bash process. As a result, the handle is not completely closed when the bash process exits.
    The console process cannot receive the handle closing event, epoll_wait stops responding, and the process does not exit.
    ```

-   Do not run the  **isula exec**  command in the background. Otherwise, the system may be suspended.

    Run the  **isula exec**  command in the background as follows:

    Run the  **isula exec script &**  command in the background, for example,  **isula exec container\_name script &,isula exec**. The command is executed in the background. The script continuously displays a file by running the  **cat**  command. Normally, there is output on the current terminal. If you press  **Enter**  on the current terminal, the client exits the stdout read operation due to the I/O read failure. As a result, the terminal does not output data. The server continues to write data to the buffer of the FIFO because the process is still displaying files by running the  **cat**  command. When the buffer is full, the process in the container is suspended in the write operation.

-   When a lightweight container uses the  **exec**  command to execute commands with pipe operations, you are advised to run the  **/bin/bash -c**  command.

    Typical application scenarios:

    Run the  **isula exec container\_name -it ls /test | grep "xx" | wc -l**  command to count the number of xx files in the test directory. The output is processed by  **grep**  and  **wc**  through the pipe because  **ls /test**  is executed with  **exec**. The output of  **ls /test**  executed by  **exec**  contains line breaks. When the output is processed, the result is incorrect.

    Cause: Run the  **ls /test**  command using  **exec**. The command output contains a line feed character. Run the** | grep "xx" | wc -l**  command for the output. The processing result is 2 \(two lines\).

    ```
    [root@localhost ~]# isula exec  -it container ls /test
    xx    xx10  xx12  xx14  xx3   xx5   xx7   xx9
    xx1   xx11  xx13  xx2   xx4   xx6   xx8
    [root@localhost ~]#
    ```

    Suggestion: When running the  **run/exec**  command to perform pipe operations, run the  **/bin/bash -c**  command to perform pipe operations in the container.

    ```
    [root@localhost ~]# isula exec  -it container  /bin/sh -c "ls /test | grep "xx" | wc -l"
    15
    [root@localhost ~]#
    ```

-   Do not use the  **echo**  option to input data to the standard input of the  **exec**  command. Otherwise, the client will be suspended. The echo value should be directly transferred to the container as a command line parameter.

    ```
    [root@localhost ~]# echo ls | isula exec 38 /bin/sh
    
    
    ^C
    [root@localhost ~]# 
    ```

    The client is suspended when the preceding command is executed because the preceding command is equivalent to input  **ls**  to  **stdin**. Then EOF is read and the client does not send data and waits for the server to exit. However, the server cannot determine whether the client needs to continue sending data. As a result, the server is suspended in reading data, and both parties are suspended.

    The correct execution method is as follows:

    ```
    [root@localhost ~]# isula exec 38 ls
    bin   dev   etc   home  proc  root  sys   tmp   usr   var
    ```


## Example<a name="en-us_topic_0183292669_section1734193235916"></a>

Run the echo command in a running container.

```
$ isula exec c75284634bee echo "hello,world"
hello,world
```

