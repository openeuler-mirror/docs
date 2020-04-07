# Removing a Symbolic Link to  **/dev/null**<a name="EN-US_TOPIC_0192977549"></a>

## Description<a name="en-us_topic_0152100319_s939da4be32704857aeabb523a53d9d49"></a>

A symbolic link to  **/dev/null**  may be used by malicious users. This affects system security. You are advised to delete these symbolic links to improve system security.

## Special Scenario<a name="section880225516586"></a>

After openEuler is installed, symbolic links to  **/dev/null**  may exist. These links may have corresponding functions. \(Some of them are preconfigured and may be depended by other components.\) Rectify the fault based on the site requirements. For details, see  [Implementation](#en-us_topic_0152100319_s1b24647cdd834a8eaca3032611baf072).

For example, openEuler supports UEFI and legacy BIOS installation modes. The GRUB packages supported in the two boot scenarios are installed by default. If you select the legacy BIOS installation mode, a symbolic link  **/etc/grub2-efi.cfg**  is generated. If you select the UEFI installation mode, a symbolic link  **/etc/grub2.cfg**  is generated. You need to process these symbolic links based on the site requirements.

## Implementation<a name="en-us_topic_0152100319_s1b24647cdd834a8eaca3032611baf072"></a>

1.  <a name="en-us_topic_0152100319_l4dc74664c4fb400aaf91fb314c4f9da6"></a>Run the following command to search for symbolic links to  **/dev/null**:

    ```
    find dirname -type l -follow 2>/dev/null
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >_dir__name_  indicates the directory to be searched. Normally, key system directories, such as  **/bin**,  **/boot**,  **/usr**,  **/lib64**,  **/lib**, and  **/var**, need to be searched.  

2.  If these symbolic links are useless, run the following command to delete them:

    ```
    rm -f filename
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >_filename_  indicates the file name obtained in  [Step 1](#en-us_topic_0152100319_l4dc74664c4fb400aaf91fb314c4f9da6).  


