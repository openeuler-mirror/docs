# Adding a Software Package<a name="EN-US_TOPIC_0229243677"></a>

To use the OSC tool of OBS to add a new software package, perform the following steps:

**Creating a Project**

1.  Create a project based on the dependency of the new software package and a proper project. For example, to create a project based on  **zlib**  of the  **openEuler:Mainline**  project, run the following command \(**zlib**  is any software package in the project\):

    ```
    # osc branch openEuler:Mainline zlib
    ```

2.  Delete unnecessary software packages added during project creation. For example, to delete the  **zlib**  software package, run the following command:

    ```
    # cd home:testUser:branches:openEuler:Mainline
    # osc rm zlib
    # osc commit -m "commit log"
    ```

3.  Create a software package in your own project. For example, to add the  **my-first-obs-package**  software package, run the following command:

    ```
    # mkdir my-first-obs-package 
    # cd my-first-obs-package
    ```


**Building an RPM Package**

1.  Add the prepared source file and .spec file to the software package directory.
2.  Modify the source code and .spec file, and upload all files of the corresponding software package to the OBS server. The following is a command example. The information after the  **-m**  parameter is the commission record.

    ```
    # cd home:testUser:branches:openEuler:Mainline
    # osc add my-first-obs-package
    # osc ci -m "commit log"
    ```

3.  Run the following command to obtain the repository name and architecture of the current project:

    ```
    # osc repos home:testUser:branches:openEuler:Mainline
    ```

4.  After the modification is committed, OBS automatically compiles the software package. You can run the following command to view the compilation logs of the corresponding repository. In the command,  _standard\_aarch64_  and  _aarch64_  indicate the repository name and architecture obtained in the command output.

    ```
    # cd home:testUser:branches:openEuler:Mainline/my-first-obs-package
    # osc buildlog standard_aarch64  aarch64
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >You can also open the created project on the web client to view the build logs.  


