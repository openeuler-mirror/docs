# Functions changed info

---------------diffs in rhash_librhash.so.0_abidiff.out:----------------

Functions changes summary: 0 Removed, 3 Changed, 0 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



3 functions with some indirect sub-type change:



  [C]'function int rhash_torrent_add_file(rhash, const char*, uint64_t)' at rhash_torrent.c:30:1 has some indirect sub-type changes:

    parameter 3 of type 'typedef uint64_t' changed:

      entity changed from 'typedef uint64_t' to compatible type 'long long unsigned int'

        type name changed from 'unsigned long int' to 'long long unsigned int'

        type size hasn't changed





  [C]'function size_t rhash_torrent_get_default_piece_length(uint64_t)' at rhash_torrent.c:60:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef uint64_t' changed:

      entity changed from 'typedef uint64_t' to compatible type 'long long unsigned int'

        type name changed from 'unsigned long int' to 'long long unsigned int'

        type size hasn't changed





  [C]'function rhash_uptr_t rhash_transmit(unsigned int, void*, rhash_uptr_t, rhash_uptr_t)' at rhash.c:695:1 has some indirect sub-type changes:

    parameter 3 of type 'typedef rhash_uptr_t' changed:

      underlying type 'typedef uintptr_t' at stdint.h:90:1 changed:

        entity changed from 'typedef uintptr_t' to compatible type 'long long unsigned int'

          type name changed from 'unsigned long int' to 'long long unsigned int'

          type size hasn't changed



    parameter 4 of type 'typedef rhash_uptr_t' changed:

      underlying type 'typedef uintptr_t' at stdint.h:90:1 changed:

        entity changed from 'typedef uintptr_t' to compatible type 'long long unsigned int'

          type name changed from 'unsigned long int' to 'long long unsigned int'

          type size hasn't changed







