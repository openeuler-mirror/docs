# Installation Through the Network Using PXE<a name="EN-US_TOPIC_0229291253"></a>

To boot with PXE, you need to properly configure the server and your computer's network interface to support PXE.

If the target hardware is installed with a PXE-enabled NIC, we can configure it to boot the computer from network system files rather than local media \(such as CD-ROMs\) and execute the Anaconda installation program.

For installation through the network using PXE, the client uses a PXE-enabled NIC to send a broadcast request for DHCP information and IP address to the network. The DHCP server provides the client with an IP address and other network information, such as the IP address or host name of the DNS and FTP server \(which provides the files required for starting the installation program\), and the location of the files on the server.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>The TFTP, DHCP, and HTTP server configurations are not described here. For details, see  [Full-automatic Installation Guide](full-automatic-installation-guide.html).  

