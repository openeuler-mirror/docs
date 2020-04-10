# Compilation Process<a name="EN-US_TOPIC_0229243711"></a>

Using GCC to generate executable files from source code files requires preprocessing, compilation, assembly, and linking.

1.  Preprocessing: Preprocess the source program \(such as a .c file\) to generate an .i file.
2.  Compilation: Compile the preprocessed .i file into an assembly language to generate an .s file.
3.  Assemble: Assemble the assembly language file to generate the target file .o.
4.  Linking: Link the .o files of each module to generate an executable program file.

The .i, .s, and .o files are intermediate or temporary files. If the GCC is used to compile programs in C language at a time, these files will be deleted.

