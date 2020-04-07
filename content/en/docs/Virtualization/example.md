# Example<a name="EN-US_TOPIC_0183154314"></a>

This section provides examples of commands related to VM life cycle management.

-   Create a VM.

    The VM XML configuration file is  **openEulerVM.xml**. The command and output are as follows:

    ```
    # virsh define openEulerVM.xml
    Domain openEulerVM defined from openEulerVM.xml
    ```


-   Start a VM. 

    Run the following command to start the  _openEulerVM_:

    ```
    # virsh start openEulerVM
    Domain openEulerVM started
    ```

-   Reboot a VM.

    Run the following command to reboot the  _openEulerVM_:

    ```
    # virsh reboot openEulerVM
    Domain openEulerVM is being rebooted
    ```

-   Shut down a VM.

    Run the following command to shut down the  _openEulerVM_:

    ```
    # virsh shutdown openEulerVM
    Domain openEulerVM is being shutdown
    ```

-   Destroy a VM.
    -   If the  **nvram**  file is not used during the VM startup, run the following command to destroy the VM:

        ```
        # virsh undefine <VMInstanse>
        ```

    -   If the  **nvram**  file is used during the VM startup, run the following command to specify the  **nvram**  processing policy when destroying the VM:

        ```
        # virsh undefine <VMInstanse> <strategy>
        ```

        _strategy_  indicates the policy for destroying a VM. The values can be:

        --**nvram**: delete the corresponding  **nvram**  file when destroying a VM.

        --**keep-nvram**: destroy a VM but retain the corresponding  **nvram**  file.

        For example, to delete the  _openEulerVM_  and its  **nvram**  file, run the following command:

        ```
        # virsh undefine openEulerVM --nvram
        Domain openEulerVM has been undefined
        ```



