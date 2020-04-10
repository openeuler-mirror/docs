# Building an Existing Software Package<a name="EN-US_TOPIC_0229243723"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   If you use OBS for the first time, register an individual account on the OBS web page.  
>-   With this method, you must copy the modified code and commit it to the code directory before performing the following operations. The code directory is specified in the  **\_service**  file.  

To modify the source code of the existing software and build the modified source file into an RPM software package on the OBS web client, perform the following steps:

1.  Log in to OBS at  [http://openeuler-build.huawei.com/](http://openeuler-build.huawei.com/).
2.  Click  **All Projects**. The  **All Projects**  page is displayed.
3.  Click the project to be modified. The project details page is displayed. For example, click  **openEuler:Mainline**.
4.  On the project details page, search for the software package to be modified and click the software package name. The software package details page is displayed.
5.  Click  **Branch package**. In the displayed dialog box, click  **Accept**, as shown in  [Figure 1](#fig77646143214).

    **Figure  1** **Branch Confirmation**  page<a name="fig77646143214"></a>  
    ![](figures/branch-confirmation-page.png "branch-confirmation-page")

6.  Click the  **\_service**  file to go to the editing page, modify the file content, and click  **Save**. An example of the  **\_service**  file content is as follows.  **userCodeURL**  and  **userCommitID**  indicate the user code path and commission version number or branch, respectively.

    ```
    <services>
        <service name="tar_scm_kernel">
            <param name="scm">git</param>
            <param name="url">userCodeURL</param>
    	<param name="revision">userCommitID</param>
        </service>
        <service name="recompress">
    	<param name="compression">bz2</param>
    	<param name="file">*.tar</param>
         </service>
    </services>
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >Click  **Save**  to save the  **\_service**  file. OBS downloads the source code from the specified URL to the software directory of the corresponding OBS project based on the  **\_service**  file description and replaces the original file. For example, the  **kernel**  directory of the  **openEuler:Mainline**  project in the preceding example.  

7.  After the files are copied and replaced, OBS automatically starts to build the RPM software package. Wait until the build is complete and view the build status in the status bar on the right.
    -   **succeeded**: The build is successful. You can click  **succeeded**  to view the build logs, as shown in  [Figure 2](#fig10319114217337).

        **Figure  2** **Succeeded**  page<a name="fig10319114217337"></a>  
        ![](figures/succeeded-page.png "succeeded-page")

    -   **failed**: The build failed. Click  **failed**  to view error logs, locate the fault, and rebuild again.
    -   **unresolvable**: The build is not performed. The possible cause is that the dependency is missing.
    -   **disabled**: The build is manually closed or is queuing for build.
    -   **excluded**: The build is prohibited. The possible cause is that the .spec file is missing or the compilation of the target architecture is prohibited in the .spec file.


