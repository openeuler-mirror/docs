# Application Development Guide

This document describes the common tools used for application development and guides users to develop applications based on openEuler.

[[toc]]

## Overview

This document describes the following four parts to guide users to use openEuler and develop code based on openEuler.

-   Install and use the GCC compiler in the openEuler operating system \(OS\), and complete the development, compilation, and execution of simple code.
-   In the openEuler OS, use the JDK built-in tool to compile and execute code.
-   Install IntelliJ IDEA in the openEuler OS for Java development.
-   Create an RPM package locally or using the Open Build Service \(OBS\).

## Intended Audience

This document is intended for all users who use the openEuler OS for code development. You are expected to have the following experience or capabilities:

-   Have basic knowledge of the Linux OS.
-   Know how to use Linux command lines.

## Symbol Conventions

The symbols that may be found in this document are defined as follows.


|  Symbol   |Description  |
|:---  |:----  |
| ![](./figures/en-us_image_0229243712.png)|Indicates a potentially hazardous situation which, if not avoided, could result in equipment damage, data loss, performance deterioration, or unanticipated results.<br/>NOTICE is used to address practices not related to personal injury.|
| ![](./figures/en-us_image_0229243671.png)|Supplements the important information in the main text.<br/>NOTE is used to address information not related to personal injury, equipment damage, and environment deterioration.|


## Command Conventions

**Table  1**  Command conventions

|  Format   |Description |
|:---  |:----  |
| **Boldface**| Command keywords, which remain unchanged in the commands, are in **Boldface**. |
|  *Italic*| Command parameters, which are replaced with actual values in the commands, are in *italic*. |
| [ ] | Items in square brackets are optional. |
| { x \| y \| ... } | Optional items are grouped in braces and separated by vertical bars. One item is selected. |
| [ x \| y \| ... ] | Optional items are grouped in brackets and separated by vertical bars. One item is selected or no item is selected. |
|  { x \| y \| ... }\* | Optional items are grouped in brackets and separated by vertical bars. A minimum of one or a maximum of all can be selected. |
|  [ x \| y \| ... ]\* | Optional items are grouped in brackets and separated by vertical bars. One or more items are selected or no item is selected. |

