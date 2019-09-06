# 编辑SPEC文件<a name="ZH-CN_TOPIC_0186977704"></a>

spec 文件中有默认的内容，根据实际情况对相应的字段进行修改。文件如下所示：

```
$ vi hello.spec 

Name:     hello
Version:  2.10
Release:  1%{?dist}
Summary:  The "Hello World" program from GNU
Summary(zh_CN):  GNU "Hello World" 程序
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
"Hello World" 程序, 包含 FOSS 项目所需的所有部分, 包括配置, 构建, 国际化, 帮助文件等.

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
* Sun Dec 4 2016 Your Name <youremail@xxx.xxx> - 2.10-1
- Update to 2.10
* Sat Dec 3 2016 Your Name <youremail@xxx.xxx> - 2.9-1
- Update to 2.9
```

-   Name 标签是软件名，Version 标签是版本号，而 Release 标签是发布编号。
-   Summary 标签是简要说明，英文的话第一个字母应大写，以避免 rpmlint 工具（打包检查工具）警告。
-   License 标签说明软件包的协议版本，审查软件的 License 状态是打包者的职责，这可以通过检查源码或 LICENSE 文件，或与作者沟通来完成。
-   Group 标签过去用于按照 /usr/share/doc/rpm-/GROUPS 分类软件包。目前该标记已丢弃，vim的模板还有这一条，删掉即可，不过添加该标记也不会有任何影响。%changelog 标签应包含每个 Release 所做的更改日志，尤其应包含上游的安全/漏洞补丁的说明。%changelog 条目应包含版本字符串，以避免 rpmlint 工具警告。
-   多行的部分，如 %changelog 或 %description 由指令下一行开始，空行结束。
-   一些不需要的行 \(如 BuildRequires 和 Requires\) 可在行首使用 ‘\#’ 注释。
-   %prep、%build、%install、%file暂时用默认的，未做任何修改。

