# Class Library<a name="EN-US_TOPIC_0229243733"></a>

The Java class library is implemented as a package, which is a collection of classes and interfaces. The Java compiler generates a bytecode file for each class, and the file name is the same as the class name. Therefore, conflicts may occur between classes with the same name. In the Java language, a group of classes and interfaces are encapsulated in a package. Class namespaces can be effectively managed by package. Classes in different packages do not conflict even if they have the same name. This solves the problem of conflicts between classes with the same name and facilitates the management of a large number of classes and interfaces. It also ensures the security of classes and interfaces.

In addition to many packages provided by Java, developers can customize packages by collecting compiled classes and interfaces into a package for future use.

Before using a custom package, you need to declare the package.

## Package Declaration<a name="section86594515472"></a>

The declaration format of a package is package pkg1\[.pkg2\[.pkg3...\]\].

To declare a package, you must create a directory. The subdirectory name must be the same as the package name. Then declare the package at the beginning of the class file that needs to be placed in the package, indicating that all classes of the file belong to the package. The dot \(.\) in the package declaration indicates the directory hierarchy. If the source program file does not contain the package statement, the package is specified as an anonymous package. An anonymous package does not have a path. Generally, Java still stores the classes in the source file in the current working directory \(that is, the directory where the Java source files are stored\).

The package declaration statement must be added to the beginning of the source program file and cannot be preceded by comments or spaces. If you use the same package declaration statement in different source program files, you can include the classes in different source program files in the same package.

## Package Reference<a name="section16903169811"></a>

In Java, there are two methods to use the common classes in the package provided by Java or the classes in the custom package.

-   Add the package name before the name of the class to be referenced.

    For example, name.A obj=new name.A \(\)

    **name**  indicates the package name,  **A**  indicates the class name, and  **obj**  indicates the object. This string indicates that class  **A**  in the  **name**  package is used to define an object  **obj**  in the program.

    Example: Create a test object of the Test class in the example package.

    ```
    example.Test test = new example.Test();
    ```

-   Use  **import**  at the beginning of the file to import the classes in the package.

    The format of the  **import**  statement is import pkg1\[.pkg2\[.pkg3...\]\].\(classname | \*\).

    **pkg1\[.pkg2\[.pkg3...\]\]**  indicates the package level, and  **classname**  indicates the class to be imported. If you want to import multiple classes from a package, you can use the wildcard \(\*\) instead.

    Example: Import the  **Test**  class in the  **example**  package.

    ```
    import example.Test;
    ```

    Example: Import the entire  **example**  package.

    ```
    import example.*;
    ```


