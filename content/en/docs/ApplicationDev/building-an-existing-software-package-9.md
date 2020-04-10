# Building an Existing Software Package<a name="EN-US_TOPIC_0229243721"></a>

**Creating a Project**

1.  You can copy an existing project to create a subproject of your own. For example, to copy the  **zlib**  software package in the  **openEuler:Mainline**  project to the new branch, run the following command:

    ```
    # osc branch openEuler:Mainline zlib
    ```

    If the following information is displayed, a new branch project  **home:testUser:branches:openEuler:Mainline**  is created for user  **testUser**.

    ```
    A working copy of the branched package can be checked out with:
    osc co home:testUser:branches:openEuler:Mainline/zlib
    ```

2.  Download the configuration file \(for example,  **\_service**\) of the software package to be modified to the local directory. In the preceding command,  _testUser_  indicates the account name configured in the  **\~/.oscrc**  configuration file. Change it based on the actual requirements.

    ```
    # osc co home:testUser:branches:openEuler:Mainline/zlib
    ```

    Information similar to the following is displayed:

    ```
    A    home:testUser:branches:openEuler:Mainline
    A    home:testUser:branches:openEuler:Mainline/zlib
    A    home:testUser:branches:openEuler:Mainline/zlib/_service
    ```

3.  Go to the local subproject directory and synchronize the remote code of the software package to the local host.

    ```
    # cd home:testUser:branches:openEuler:Mainline/zlib
    # osc up -S
    ```

    Information similar to the following is displayed:

    ```
    A    _service:tar_scm_kernel_repo:0001-Neon-Optimized-hash-chain-rebase.patch
    A    _service:tar_scm_kernel_repo:0002-Porting-optimized-longest_match.patch
    A    _service:tar_scm_kernel_repo:0003-arm64-specific-build-patch.patch
    A    _service:tar_scm_kernel_repo:zlib-1.2.11-optimized-s390.patch
    A    _service:tar_scm_kernel_repo:zlib-1.2.11.tar.xz
    A    _service:tar_scm_kernel_repo:zlib-1.2.5-minizip-fixuncrypt.patch
    A    _service:tar_scm_kernel_repo:zlib.spec
    ```


**Building an RPM Package**

1.  Rename the source file and add the renamed source file to the temporary storage of OBS.

    ```
    # rm -f _service;for file in `ls | grep -v .osc`;do new_file=${file##*:};mv $file $new_file;done
    # osc addremove *
    ```

2.  Modify the source code and .spec file, and synchronize all modifications of the corresponding software package to the OBS server. The following is a command example. The information after the  **-m**  parameter is the commission record.

    ```
    # osc ci -m "commit log"
    ```

3.  Run the following command to obtain the repository name and architecture of the current project:

    ```
    # osc repos home:testUser:branches:openEuler:Mainline
    ```

4.  After the modification is committed, OBS automatically compiles the software package. You can run the following command to view the compilation logs of the corresponding repository. In the command,  _standard\_aarch64_  and  _aarch64_  indicate the repository name and architecture obtained in the command output.

    ```
    # osc buildlog standard_aarch64  aarch64
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >You can also open the created project on the web client to view the build logs.  


