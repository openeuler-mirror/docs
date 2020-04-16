# Starting the Installation<a name="EN-US_TOPIC_0229291223"></a>

## Booting from the CD/DVD-ROM Drive<a name="section1210220215326"></a>

Load the ISO image of openEuler from the CD/DVD-ROM drive of the server and restart the server. The procedure is as follows:

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>Before the installation, ensure that the server boots from the CD/DVD-ROM drive preferentially. The following steps describe how to install the openEuler using the virtual CD/DVD-ROM drive on the baseboard management controller \(BMC\). Installing the openEuler from a physical drive is simple. After the installation starts, the procedure for the physical drive is the same as that of the virtual drive.  

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


## Installation Wizard<a name="section510995610335"></a>

A boot menu is displayed after the system is booted using the boot medium. In addition to options for starting the installation program, some other options are available on the boot menu. During system installation, the  **Test this media & install openEuler 20.03 LTS**  mode is used by default. Press the arrow keys on the keyboard to change the selection, and press  **Enter**  when the desired option is highlighted.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   If you do not perform any operations within 1 minute, the system automatically selects the default option  **Test this media & install openEuler 20.03 LTS**  and enters the installation page.  
>-   During PM installation, if you cannot use the arrow keys to select boot options and the system does not respond after you press  **Enter**, click  ![](figures/en-us_image_0229420473.png)  on the BMC page and configure  **Key & Mouse Reset**.  

**Figure  4**  Installation Wizard<a name="fig1601161484619"></a>  
![](figures/installation-wizard.png "installation-wizard")

Installation wizard options are described as follows:

-   **Install openEuler 20.03 LTS**: Install openEuler on your server in GUI mode.

-   **Test this media & install openEuler 20.03 LTS**: Default option. Install openEuler on your server in GUI mode. The integrity of the installation medium is checked before the installation program is started. For details, see  [Installation in GUI Mode](installation-in-gui-mode.md).

-   **Troubleshooting**: Troubleshooting mode, which is used when the system cannot be installed properly. In troubleshooting mode, the following options are available:
    -   **Install openEuler 20.03-LTS in basic graphics mode**: Basic graphics installation mode. In this mode, the video driver is not started before the system starts and runs.
    -   **Rescue the openEuler system**: Rescue mode, which is used to restore the system. In rescue mode, the installation process is printed in the VNC or BMC, and the serial port is unavailable.


On the installation wizard screen, press  **e**  to go to the parameter editing screen of the selected option, and press  **c**  to go to the command-line interface \(CLI\). On the installation wizard page, select  **Test this media & install openEuler 20.03 LTS**  to enter the GUI installation mode.

Perform graphical installation operations using a keyboard.

-   Press  **Tab**  or  **Shift**+**Tab**  to move between GUI controls \(such as buttons, area boxes, and check boxes\).
-   Press the up or down arrow key to move a target in the list.
-   Press the left or right arrow key to move between the horizontal toolbar and watch bar.
-   Press the spacebar or  **Enter**  to select or delete highlighted options, expand or collapse a drop-down list.
-   Press  **Alt**+a shortcut key \(the shortcut key varies for different pages\) to select the control where the shortcut key is located. The shortcut key can be highlighted \(underlined\) by holding down Alt.

