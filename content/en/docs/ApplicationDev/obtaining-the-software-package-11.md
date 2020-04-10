# Obtaining the Software Package<a name="EN-US_TOPIC_0229243681"></a>

After the RPM software package is built, run the following command to obtain the RPM software package using the OSC:

```
# osc getbinaries home:testUser:branches:openEuler:Mainline my-first-obs-package standard_aarch64 aarch64
```

The parameters in the command are described as follows. You can modify the parameters according to the actual situation.

-   _home:testUser:branches:openEuler:Mainline_: name of the project to which the software package belongs.
-   _my-first-obs-package_: name of the software package.
-   _standard\_aarch64_: repository name.
-   _aarch64_: repository architecture name.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>You can also obtain the software package built using OSC from the web page. For details, see  [Building an RPM Package](building-an-rpm-package-8.md).  

