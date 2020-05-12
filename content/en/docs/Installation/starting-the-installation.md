# Starting the Installation<a name="EN-US_TOPIC_0214071133"></a>

Mount the ISO image of openEuler 1.0 to the server from the CD/DVD-ROM and restart the server. The procedure is as follows:

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>Before the installation, ensure that the server boots from the CD/DVD-ROM drive preferentially. The following steps describe how to install the operating system using the virtual CD/DVD-ROM drive on the baseboard management controller \(BMC\). Installing the operating system from a physical drive is simple. After the installation starts, the procedure for the physical drive is the same as that for the virtual drive.  

1.  On the toolbar, click the icon shown in the following figure.

    **Figure  1**  Drive icon<a name="en-us_topic_0151920806_f6ff7658b349942ea87f4521c0256c32e"></a>  
    ![](figures/drive-icon.png "drive-icon")

    An image dialog box is displayed, as shown in the following figure.

    **Figure  2**  Image dialog box<a name="en-us_topic_0151920806_fb74fb37f86cd423aacf34bddedd6841a"></a>  
    ![](figures/image-dialog-box.png "image-dialog-box")

2.  Select  **Image File**  and then click  **Browse**. The  **Open**  dialog box is displayed.
3.  Select the image file and click  **Open**. In the image dialog box, click  **Connect**. If  **Connect**  changes to  **Disconnect**, the virtual CD/DVD-ROM drive is connected to the server.
4.  On the toolbar, click the restart icon shown in the following figure to restart the device.

    **Figure  3**  Restart icon<a name="en-us_topic_0151920806_f0d1f4f5f96de47b48c64b3535b2b60d1"></a>  
    ![](figures/restart-icon.png "restart-icon")

5.  A boot menu is displayed after the system is booted using the boot medium. In addition to options for starting the installation program, some other options are available on the boot menu. The  **Test this media & install openEuler 1.0 with GUI mode**  installation mode is used by default. Press the arrow keys on the keyboard to change the selection, and press  **Enter**  when the desired option is highlighted.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   If you do not perform any operations within 1 minute, the system automatically selects the default option  **Test this media & install openEuler 1.0 with GUI mode**  and enters the installation interface.  
    >-   During physical machine installation, if you cannot use the arrow keys to select boot options and the system does not respond after you press  **Enter**, click  ![](figures/en-us_image_0214071107.png)  on the BMC page and configure  **Key & Mouse Reset**.  

    **Figure  4**  Installation wizard<a name="fig1601161484619"></a>  
    ![](figures/installation-wizard.png "installation-wizard")

      

    Installation wizard options are described as follows:

    -   **Install openEuler 1.0 with GUI mode**: Install openEuler in GUI mode on your server.
    -   **Install openEuler 1.0 with text mode**: Install openEuler in text mode on your server. The installation is completed in  **tty0**  of the system. For details, see  **Installation Guide**  \>**Using Text Mode for Installation**.

    -   **Test this media & install openEuler 1.0 with GUI mode**: Default option. Install openEuler on your server using the graphical installation program. The integrity of the installation medium is checked before the installation program is started. For details, see  **Installation Guide**  \>  **Using GUI Mode for Installation**.

    -   **Troubleshooting**: Problem locating mode, which is used when the system cannot be installed properly. In the fault locating mode, the following options are available:
        -   **Install openEuler 1.0 in basic graphics mode**: Basic graphics installation mode. In this mode, the video driver is not started before the system starts and runs.
        -   **Rescue an openEuler system**: Rescue mode, which is used to restore the system. In rescue mode, the operating system installation process is printed in the VNC or BMC, and the serial port is unavailable.



