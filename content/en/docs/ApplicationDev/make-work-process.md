# make Work Process<a name="EN-US_TOPIC_0229243674"></a>

The process of deploying make to generate an executable file from the source code file is described as follows:

1.  The make command reads the Makefiles, including the files named GNUmakefile, makefile, and Makefile in the current directory, the included makefile, and the rule files specified by the  **-f**,  **--file**, and  **--makefile**  options.
2.  Initialize variables.
3.  Derive implicit rules, analyze dependencies, and create a dependency chain.
4.  Determine which targets need to be regenerated based on the dependency chain.
5.  Run a command to generate the final file.

