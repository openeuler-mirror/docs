# Editing the SPEC File<a name="EN-US_TOPIC_0229243698"></a>

Run the following command to create the .spec file:

```
# vi hello.spec 
```

Write the corresponding content to the file and save the file. The following is an example of the file content. Modify the corresponding fields based on the actual requirements.

```
Name:     hello
Version:  2.10
Release:  1%{?dist}
Summary:  The "Hello World" program from GNU
Summary(zh_CN): GNU Hello World program
License:  GPLv3+
URL:      http://ftp.gnu.org/gnu/hello
Source0:  http://ftp.gnu.org/gnu/hello/%{name}-%{version}.tar.gz

BuildRequires:  gettext
Requires(post): info
Requires(preun): info

%description
The "Hello World" program, done with all bells and whistles of a proper FOSS
project, including configuration, build, internationalization, help files, etc.

%description -l zh_CN
The Hello World program contains all parts required by the FOSS project, including configuration, build, i18n, and help files.

%prep
%setup -q

%build
%configure
make %{?_smp_mflags}

%install
make install DESTDIR=%{buildroot}
%find_lang %{name}
rm -f %{buildroot}/%{_infodir}/dir

%post
/sbin/install-info %{_infodir}/%{name}.info %{_infodir}/dir || :

%preun
if [ $1 = 0 ] ; then
/sbin/install-info --delete %{_infodir}/%{name}.info %{_infodir}/dir || :
fi

%files -f %{name}.lang
%doc AUTHORS ChangeLog NEWS README THANKS TODO
%license COPYING
%{_mandir}/man1/hello.1.*
%{_infodir}/hello.info.*
%{_bindir}/hello

%changelog
* Thu Dec 26 2019 Your Name <youremail@xxx.xxx> - 2.10-1
- Update to 2.10
* Sat Dec 3 2016 Your Name <youremail@xxx.xxx> - 2.9-1
- Update to 2.9
```

-   The  **Name**  tag indicates the software name, the  **Version**  tag indicates the version number, and the  **Release**  tag indicates the release number.
-   The  **Summary**  tag is a brief description. The first letter of the tag must be capitalized to prevent the rpmlint tool \(packaging check tool\) from generating alarms.
-   The  **License**  tag describes the protocol version of the software package. The packager is responsible for checking the license status of the software, which can be implemented by checking the source code or license file or communicating with the author.
-   The  **Group**  tag is used to classify software packages by  **/usr/share/doc/rpm-/GROUPS**. Currently, this tag has been discarded. However, the VIM template still has this tag. You can delete it. However, adding this tag does not affect the system. The  **%changelog**  tag should contain the log of changes made for each release, especially the description of the upstream security/vulnerability patches. The  **%changelog**  tag should contain the version string to avoid the rpmlint tool from generating alarms.
-   If multiple lines are involved, such as %changelog or %description, start from the next line of the instruction and end with a blank line.
-   Some unnecessary lines \(such as BuildRequires and Requires\) can be commented out with a number sign \(\#\) at the beginning of the lines.
-   The default values of  **%prep**,  **%build**,  **%install**, and  **%file**  are retained.

