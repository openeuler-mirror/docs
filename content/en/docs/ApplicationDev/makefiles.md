# Makefiles<a name="EN-US_TOPIC_0229243670"></a>

Make is a tool that uses makefiles for compilation, linking, installation, and cleanup, so as to generate executable files and other related files from source code files. Therefore, makefiles describe the compilation and linking rules of the entire project, including which files need to be compiled, which files do not need to be compiled, which files need to be compiled first, which files need to be compiled later, and which files need to be rebuilt. The makefiles automate project compilation. You do not need to manually enter a large number of source files and parameters each time.

This chapter describes the structure and main contents of makefiles. For more information about makefiles, run the  **info make**  command.

## Makefile Structure<a name="section995817134618"></a>

The makefile file structure is as follows:

_targets_:_prereguisites_

_command_

or

_targets_:_prerequisites_;_command_

_command_

In the preceding information:

-   _targets_: targets, which can be target files, executable files, or tags.
-   _prerequisites_: dependency files, which are the files or targets required for generating the  _targets_. There can be multiple or none of them.
-   _command_: command \(any shell command\) to be executed by make. Multiple commands are allowed, and each command occupies a line.
-   Use colons \(:\) to separate the target files from the dependency files. Press  **Tab**  at the beginning of each command line.

The makefile file structure indicates the output target, the object on which the output target depends, and the command to be executed for generating the target.

## Makefile Contents<a name="section38571015162813"></a>

A makefile file consists of the following contents:

-   Explicit rule

    Specify the dependency, such as the file to be generated, dependency file, and generated command.

-   Implicit rule

    Specify the rule that is automatically derived by make. The make command supports the automatic derivation function.

-   Variable definition
-   File indicator

    The file indicator consists of three parts:

    -   Inclusion of other makefiles, for example, include xx.md
    -   Selective execution, for example, \#ifdef
    -   Definition of multiple command lines, for example, define...endef. \(define ... endef\)

-   Comment

    The comment starts with a number sign \(\#\).


