# Failed to Compile MariaDB Using rpmbuild<a name="EN-US_TOPIC_0229622805"></a>

## Symptom<a name="section883217013220"></a>

When you log in to the system as user  **root**  and run the  **rpmbuild**  command to compile the MariaDB source code, the compilation fails and the following information is displayed:

```
+ echo 'mysql can'\''t run test as root'
mysql can't run test as root
+ exit 1
```

## Possible Cause<a name="section182011821122818"></a>

The MariaDB does not allow user  **root**  to execute test cases. However, test cases are automatically executed during compilation. As a result, the compilation process is blocked.

## Solution<a name="section1490682573015"></a>

Use a text editor, such as vi, to modify the value of the  **runtest**  variable in the  **mariadb.spec**  file.

Before the modification:

```
%global runtest 1
```

After the modification:

```
%global runtest 0
```

The modification disables the function of executing test cases during compilation, which does not affect the compilation and the RPM package content after compilation.

