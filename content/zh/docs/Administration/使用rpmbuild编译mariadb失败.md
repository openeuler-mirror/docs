# 使用rpmbuild编译mariadb失败<a name="ZH-CN_TOPIC_0222550782"></a>

## 问题描述<a name="section883217013220"></a>

如果使用root账号登录系统，并在该账号下使用rpmbuild命令编译mariadb源代码，会出现编译失败现象，提示：

```
+ echo 'mysql can'\''t run test as root'
mysql can't run test as root
+ exit 1
```

## 原因分析<a name="section182011821122818"></a>

mariadb数据库不允许使用root权限的账号进行测试用例执行，所以会阻止编译过程（编译过程中会自动执行测试用例）。

## 解决方案<a name="section1490682573015"></a>

使用vi等文本编辑工具，修改mariadb.spec文件中runtest变量的值。

修改前：

```
%global runtest 1
```

修改后：

```
%global runtest 0
```

该修改关闭了编译阶段执行测试用例的功能，但不会影响编译和编译后的RPM包内容。

