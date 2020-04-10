# Adding, Enabling, and Disabling Software Sources<a name="EN-US_TOPIC_0229622708"></a>

This section describes how to add, enable, and disable the software source repository by running the  **dnf config-manager**  command.

## Adding Software Source<a name="en-us_topic_0151920997_sb33361abbe6d4d779ea944c43e4060e2"></a>

To define a new software repository, you can add the repository part to the /etc/dnf/dnf.conf file or add the .repo file to the /etc/yum.repos.d/ directory. You are advised to add the .repo file. Each software source has its own .repo file. The following describes how to add the .repo file.

To add such a source to your system, run the following command as the user  **root**. After the command is executed, the corresponding .repo file is generated in the  **/etc/yum.repos.d/**  directory. In the command,  _repository\_url_  indicates the repo source address. For details, see  [Table 2](modifying-the-configuration-file.md#en-us_topic_0151921080_t2df9dceb0ff64b2f8db8ec5cd779792a).

```
dnf config-manager --add-repo repository_url
```

## Enabling a Software Repository<a name="en-us_topic_0151920997_sa4f6a5540ad94c8e85e08202c710d249"></a>

To enable the software source, run the following command as the user  **root**. In the command,  _repository_  indicates the repository ID in the new .repo file. You can run the  **dnf repolist**  command to query the repository ID.

```
dnf config-manager --set-enable repository
```

You can also use a global regular expression to enable all matching software sources. In the command,  _glob\_expression_  indicates the regular expression used to match multiple repository IDs.

```
dnf config-manager --set-enable glob_expression
```

## Disabling a Software Repository<a name="en-us_topic_0151920997_s7e19028d76de4a70a0324f7dc42bd4a5"></a>

To disable a software source, run the following command as the user  **root**:

```
dnf config-manager --set-disable repository
```

You can also use a global regular expression to disable all matching software sources.

```
dnf config-manager --set-disable glob_expression
```

