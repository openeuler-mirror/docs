# Management Modules<a name="EN-US_TOPIC_0230790876"></a>

## Overview<a name="section1231973321819"></a>

The Nginx service is a modular application that is distributed with many Dynamic Shared Objects \(DSOs\). DSOs can be dynamically loaded or unloaded when running if necessary. These modules are located in the  **/usr/lib64/nginx/modules/**  directory of the server operating system. This section describes how to load and write a module.

## Loading a Module<a name="section92221385320"></a>

To load a special DSO module, you can use the load module indication in the configuration file. Generally, the modules provided by independent software packages have their own configuration files in the  **/usr/share/nginx/modules**  directory.

The DSO is automatically loaded when the  **dnf install nginx**  command is used to install the Nginx in the openEuler operating system.

