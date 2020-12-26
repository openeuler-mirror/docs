# Functions changed info

---------------diffs in libnet_libnet.so.9.0.0_abidiff.out:----------------

ELF SONAME changed

Functions changes summary: 1 Removed, 1 Changed (132 filtered out), 1 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



SONAME changed from 'libnet.so.1' to 'libnet.so.9'



1 Removed function:



  'function void __libnet_print_vers()'    {__libnet_print_vers}



1 Added function:



  'function libnet_ptag_t libnet_build_ospfv2_hello_neighbor(uint32_t, uint16_t, uint8_t, uint8_t, uint32_t, uint32_t, uint32_t, uint32_t, const uint8_t*, uint32_t, libnet_t*, libnet_ptag_t)'    {libnet_build_ospfv2_hello_neighbor}



1 function with some indirect sub-type change:



  [C]'function int libnet_adv_cull_header(libnet_t*, libnet_ptag_t, uint8_t**, uint32_t*)' at libnet_advanced.c:53:1 has some indirect sub-type changes:

    parameter 1 of type 'libnet_t*' has sub-type changes:

      in pointed to type 'typedef libnet_t' at libnet-structures.h:229:1:

        underlying type 'struct libnet_context' at libnet-structures.h:186:1 changed:

          type size changed from 3200 to 3264 (in bits)

          1 data member insertion:

            'libnet_ether_addr libnet_context::link_addr', at offset 3200 (in bits) at libnet-structures.h:227:1

          1 data member change:

           type of 'libnet_stats libnet_context::stats' changed:

             type size hasn't changed

             3 data member changes:





              type of 'uint64_t libnet_stats::bytes_written' changed:

                typedef name changed from uint64_t to __int64_t at types.h:43:1

                underlying type 'typedef __uint64_t' at types.h:44:1 changed:

                  entity changed from 'typedef __uint64_t' to compatible type 'long int'

                    type name changed from 'unsigned long int' to 'long int'

                    type size hasn't changed











