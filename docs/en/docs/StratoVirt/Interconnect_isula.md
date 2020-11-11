# Interconnecting with the iSula Secure Container

[[toc]]

## Overview

To provide a better isolation environment for containers and improve system security, it is necessary to connect Kata to StratoVirt in the iSula secure container scenario.

## Interconnection with an iSula Secure Container

**Prerequisites**

iSulad and Kata containers have been installed.

**Operations**



The default path of the Kata configuration file is /usr/share/defaults/kata-containers/configuration.toml. 

1. Modify the configuration file to set the hypervisor type of the secure sandbox to stratovirt.

   ```
   [hypervisor.stratovirt]
   ```

2. Set the execution file path of the secure sandbox to the absolute path of stratovirt.sh. The content of the stratovirt.sh script is as follows:

   ```
   #!/bin/bash
   export STRATOVIRT_LOG_LEVEL=info  # set log level which includes trace, debug, info, warn and error.
   /usr/bin/stratovirt $@
   ```

3. Run iSulad to connect Kata to StratoVirt.

   ```
   $ isula run -tid --runtime=kata-runtime --name test busybox:latest sh
   ```

