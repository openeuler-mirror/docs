# FAQ

<!-- TOC -->

- [FAQ](#faq)
  - [The self-compilation of some applications that depend on the **java-devel** package fails.](#部分依赖java-devel的应用程序自编译失败)

<!-- /TOC -->

## The self-compilation of some applications that depend on the **java-devel** package fails.

### Symptom

The self-compilation of some applications that depend on java-devel fails when the rpmbuild command is executed.

### Cause Analysis

To provide OpenJDK features that are updated and compatible with Java applications, the openEuler provides OpenJDK of multiple versions, such as OpenJDK 1.8.0 and OpenJDK 11. The compilation of some applications depends on the **java-devel** package. When the **java-devel** package is installed, the system installs java-11-openjdk of a later version by default. As a result, the compilation of these applications fails.

### Solution

You need to run the following command to install java-1.8.0-openjdk and then run the **rpmbuild** command to perform self-compilation:

```
# yum install java-1.8.0-openjdk   

```