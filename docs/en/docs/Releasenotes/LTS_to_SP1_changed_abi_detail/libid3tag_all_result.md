# Functions changed info

---------------diffs in libid3tag_libid3tag.so.0.3.0_abidiff.out:----------------

Functions changes summary: 0 Removed, 1 Changed, 2 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



2 Added functions:



  'function int id3_compat_fixup(id3_tag*)'    {id3_compat_fixup}

  'function const id3_compat* id3_compat_lookup(const char*, size_t)'    {id3_compat_lookup}



1 function with some indirect sub-type change:



  [C]'function const id3_frametype* id3_frametype_lookup(const char*, unsigned int)' at frametype.gperf:327:1 has some indirect sub-type changes:

    parameter 2 of type 'unsigned int' changed:

      entity changed from 'unsigned int' to compatible type 'typedef size_t' at stddef.h:216:1

        type name changed from 'unsigned int' to 'unsigned long int'

        type size changed from 32 to 64 (in bits)





