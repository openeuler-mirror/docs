# Functions changed info

---------------diffs in pkgconf_libpkgconf.so.3.0.0_abidiff.out:----------------

Functions changes summary: 0 Removed, 1 Changed (4 filtered out), 0 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



1 function with some indirect sub-type change:



  [C]'function void pkgconf_client_dir_list_build(pkgconf_client_t*, const pkgconf_cross_personality_t*)' at client.c:61:1 has some indirect sub-type changes:

    parameter 2 of type 'const pkgconf_cross_personality_t*' has sub-type changes:

      in pointed to type 'const pkgconf_cross_personality_t':

        in unqualified underlying type 'typedef pkgconf_cross_personality_t' at libpkgconf.h:68:1:

          underlying type 'struct pkgconf_cross_personality_' at libpkgconf.h:196:1 changed:

            type size changed from 704 to 768 (in bits)

            1 data member insertion:

              'bool pkgconf_cross_personality_::want_default_static', at offset 704 (in bits) at libpkgconf.h:206:1





