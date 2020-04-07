# Disabling the Globally Writable Permission on Unauthorized Files<a name="EN-US_TOPIC_0192977551"></a>

## Description<a name="en-us_topic_0152100310_sa21cb874bb404d61ad2f7f4c250817d6"></a>

Any user can modify globally writable files, which affects system integrity.

## Implementation<a name="en-us_topic_0152100310_s7aba94b80a444c3eac574f067a60ba01"></a>

1.  Search for all globally writable files.

    ```
    find / -type d \( -perm -o+w \) | grep -v procfind / -type f \( -perm -o+w \) | grep -v proc
    ```

2.  View the settings of files \(excluding files and directories with sticky bits\) listed in step 1, and delete the files or disable the globally writable permission on them. Run the following command to remove the permission. In the command,  _filename_  indicates the file name.

      

    ```
    chmod o-w  filename
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >You can run the following command to check whether the sticky bit is set for the file or directory. If the command output contains the  **T**  flag, the file or directory is with a sticky bit. In the command,  _filename_  indicates the name of the file or directory to be queried.  
    >```  
    >ls -l filename  
    >```  


