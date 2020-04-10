# OBS Overview<a name="EN-US_TOPIC_0229243705"></a>

OBS is a general compilation framework based on the openSUSE distribution. It is used to build source code packages into RPM software packages or Linux images. OBS uses the automatic distributed compilation mode and supports the compilation of images and installation packages of multiple Linux OS distributions \(such as openEuler, SUSE, and Debian\) on multiple architecture platforms \(such as x86 and ARM64\).

OBS consists of the backend and frontend. The backend implements all core functions. The frontend provides web applications and APIs for interaction with the backend. In addition, OBS provides an API command line client OSC, which is developed in an independent repository.

OBS uses the project organization software package. Basic permission control, related repository, and build targets \(OS and architecture\) can be defined in the project. A project can contain multiple subprojects. Each subproject can be configured independently to complete a task.

