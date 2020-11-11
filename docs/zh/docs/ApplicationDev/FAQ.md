# FAQ
<!-- TOC -->

- [FAQ](#faq)
    - [部分依赖java-devel的应用程序自编译失败](#部分依赖java-devel的应用程序自编译失败)

<!-- /TOC -->

## 部分依赖java-devel的应用程序自编译失败  

### 问题描述  

部分依赖java-devel的应用程序会出现使用rpmbuild命令自编译失败的问题。 

### 原因分析  

为了提供更新的openjdk特性和对广大java应用程序的兼容，openEuler同时提供了openjdk-1.8.0、openjdk-11等多个版本的openjdk。部分应用程序在编译时需要依赖java-devel包，安装java-devel包时系统会默认安装更高版本的java-11-openjdk，从而导致这些应用的编译失败。  

### 解决方法

用户需手动使用如下命令安装java-1.8.0-openjdk后再使用rpmbuild命令进行自编译。  

```
# yum install java-1.8.0-openjdk   

```   
