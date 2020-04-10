# Check and Update<a name="EN-US_TOPIC_0229622770"></a>

You can use the DNF to check whether any software package in your system needs to be updated. You can use the DNF to list the software packages to be updated. You can choose to update all packages at a time or update only specified packages.

## Checking For Update<a name="en-us_topic_0151920985_s0ff13c1280714829ac70c11363d8c742"></a>

To list all currently available updates, run the following command:

```
dnf check-update
```

The following is an example:

```
# dnf check-update
Last metadata expiration check: 0:02:10 ago on Sun 01 Sep 2019 11:28:07 PM  CST.

anaconda-core.aarch64       19.31.123-1.14             updates
anaconda-gui.aarch64        19.31.123-1.14             updates
anaconda-tui.aarch64        19.31.123-1.14             updates
anaconda-user-help.aarch64  19.31.123-1.14             updates
anaconda-widgets.aarch64    19.31.123-1.14             updates
bind-libs.aarch64           32:9.9.4-29.3              updates
bind-libs-lite.aarch64      32:9.9.4-29.3              updates
bind-license.noarch         32:9.9.4-29.3              updates
bind-utils.aarch64          32:9.9.4-29.3              updates
...
```

## Upgrade<a name="en-us_topic_0151920985_s1cc9f268f03d4a639fef810d5fff66b0"></a>

To upgrade a single software package, run the following command as the user  **root**:

```
dnf update package_name
```

For example, to upgrade the RPM package, run the following command:

```
# dnf update anaconda-gui.aarch64
Last metadata expiration check: 0:02:10 ago on Sun 01 Sep 2019 11:30:27 PM  CST.
Dependencies Resolved
================================================================================
 Package                  Arch         Version              Repository     Size
================================================================================
Updating:
 anaconda-gui             aarch64      19.31.123-1.14       updates       461 k
 anaconda-core            aarch64      19.31.123-1.14       updates       1.4 M
 anaconda-tui             aarch64      19.31.123-1.14       updates       274 k
 anaconda-user-help       aarch64      19.31.123-1.14       updates       315 k
 anaconda-widgets         aarch64      19.31.123-1.14       updates       748 k

Transaction Summary
================================================================================
Upgrade  5 Package

Total download size: 3.1 M
Is this ok [y/N]:
```

Similarly, to upgrade a software package group, run the following command as the user  **root**:

```
dnf group update group_name
```

## Updating All Packages and Their Dependencies<a name="en-us_topic_0151920985_s0b15cce573514b5fb768a25e87522580"></a>

To update all packages and their dependencies, run the following command as the user  **root**:

```
dnf update
```

