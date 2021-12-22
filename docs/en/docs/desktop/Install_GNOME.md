#Installing GNOME on openEuler

GNOME is a desktop environment for Unix-like operating systems. As the officially released desktop of GNU Project, GNOME provides a comprehensive, easy-to-use, and user-friendly desktop environment for application usage and development.

For users, GNOME is a suite that integrates the desktop environment and applications. For developers, GNOME is an application development framework, consisting of a large number of function libraries. Applications written in GNOME can run properly even if users do not run the GNOME desktop environment.

GNOME includes basic software such as the file manager, app store, and text editor, and advanced applications and tools such as system sampling analysis, system logs, software engineering IDE, web browser, simple VM monitor, and developer document browser.

You are advised to create an administrator during the installation.

1. [Download](https://www.openeuler.org/en/) the openEuler ISO image, install the system, and update the software source. The Everything and EPOL sources need to be configured. The following command is used to install GNOME in minimum installation mode.

    ```
    sudo dnf update
    ```

2. Install a front library.

    ```
    sudo dnf install dejavu-fonts liberation-fonts gnu-*-fonts google-*-fonts
    ```

3. Install Xorg.

    ```
    sudo dnf install xorg-*
    ```

In this case, many unnecessary packages may be installed. You can run the following commands to install the required Xorg packages:

    sudo dnf install xorg-x11-apps xorg-x11-drivers xorg-x11-drv-ati \
    	xorg-x11-drv-dummy xorg-x11-drv-evdev xorg-x11-drv-fbdev xorg-x11-drv-intel \
    	xorg-x11-drv-libinput xorg-x11-drv-nouveau xorg-x11-drv-qxl \
    	xorg-x11-drv-synaptics-legacy xorg-x11-drv-v4l xorg-x11-drv-vesa \
    	xorg-x11-drv-vmware xorg-x11-drv-wacom xorg-x11-fonts xorg-x11-fonts-others \
    	xorg-x11-font-utils xorg-x11-server xorg-x11-server-utils xorg-x11-server-Xephyr \
    	xorg-x11-server-Xspice xorg-x11-util-macros xorg-x11-utils xorg-x11-xauth \
    	xorg-x11-xbitmaps xorg-x11-xinit xorg-x11-xkb-utils

4. Install GNOME and it components.

    ```
    sudo dnf install adwaita-icon-theme atk atkmm at-spi2-atk at-spi2-core baobab \
    	abattis-cantarell-fonts cheese clutter clutter-gst3 clutter-gtk cogl dconf \
    	dconf-editor devhelp eog epiphany evince evolution-data-server file-roller folks \
    	gcab gcr gdk-pixbuf2 gdm gedit geocode-glib gfbgraph gjs glib2 glibmm24 \
    	glib-networking gmime30 gnome-autoar gnome-backgrounds gnome-bluetooth \
    	gnome-boxes gnome-builder gnome-calculator gnome-calendar gnome-characters \
    	gnome-clocks gnome-color-manager gnome-contacts gnome-control-center \
    	gnome-desktop3 gnome-disk-utility gnome-font-viewer gnome-getting-started-docs \
    	gnome-initial-setup gnome-keyring gnome-logs gnome-menus gnome-music \
    	gnome-online-accounts gnome-online-miners gnome-photos gnome-remote-desktop \
    	gnome-screenshot gnome-session gnome-settings-daemon gnome-shell \
    	gnome-shell-extensions gnome-software gnome-system-monitor gnome-terminal \
    	gnome-tour gnome-user-docs gnome-user-share gnome-video-effects \
    	gnome-weather gobject-introspection gom grilo grilo-plugins \
    	gsettings-desktop-schemas gsound gspell gssdp gtk3 gtk4 gtk-doc gtkmm30 \
    	gtksourceview4 gtk-vnc2 gupnp gupnp-av gupnp-dlna gvfs json-glib libchamplain \
    	libdazzle libgdata libgee libgnomekbd libgsf libgtop2 libgweather libgxps libhandy \
    	libmediaart libnma libnotify libpeas librsvg2 libsecret libsigc++20 libsoup \
    	mm-common mutter nautilus orca pango pangomm libphodav python3-pyatspi \
    	python3-gobject rest rygel simple-scan sushi sysprof tepl totem totem-pl-parser \
    	tracker3 tracker3-miners vala vte291 yelp yelp-tools \
    	yelp-xsl zenity
    ```

5. Enable GNOME Display Manager (GDM).

    ```
    sudo systemctl enable gdm
    ```

6. Set the default login mode to GUI.

    ```
    sudo systemctl set-default graphical.target
    ```

Reboot the device for configuration verification.

    sudo reboot

7. If GDM cannot work:

Disable GDM if it is installed by default.

    sudo systemctl disable gdm

Install LightDM instead.

    sudo dnf install lightdm lightdm-gtk

Set the default desktop to GNOME as the root user.

    echo 'user-session=gnome' >> /etc/lightdm/lightdm.conf.d/60-lightdm-gtk-greeter.conf

Enable LightDM.

    sudo systemctl enable lightdm

Set the default login mode to GUI.

    sudo systemctl set-default graphical.target

Reboot the device for configuration verification.

    sudo reboot