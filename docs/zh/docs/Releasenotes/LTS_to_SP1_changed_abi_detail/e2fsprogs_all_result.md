# Functions changed info

---------------diffs in e2fsprogs_libe2p.so.2.3_abidiff.out:----------------

Functions changes summary: 0 Removed, 1 Changed (1 filtered out), 1 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



1 Added function:



  'function void e2p_feature_to_string(int, unsigned int, char*, size_t)'    {e2p_feature_to_string}



1 function with some indirect sub-type change:



  [C]'function void list_super(ext2_super_block*)' at ls.c:473:1 has some indirect sub-type changes:

    parameter 1 of type 'ext2_super_block*' has sub-type changes:

      in pointed to type 'struct ext2_super_block' at ext2_fs.h:639:1:

        type size hasn't changed

        2 data member changes:

         type of 'char ext2_super_block::s_volume_name[16]' changed:

           array element type 'char' changed: 

             entity changed from 'char' to compatible type 'typedef __u8' at ext2_types.h:22:1

               type name changed from 'char' to 'unsigned char'

               type size hasn't changed



           type name changed from 'char[16]' to '__u8[16]'

           type size hasn't changed



         type of 'char ext2_super_block::s_last_mounted[64]' changed:

           array element type 'char' changed: 

             entity changed from 'char' to compatible type 'typedef __u8' at ext2_types.h:22:1

               type name changed from 'char' to 'unsigned char'

               type size hasn't changed



           type name changed from 'char[64]' to '__u8[64]'

           type size hasn't changed







---------------diffs in e2fsprogs_libext2fs.so.2.4_abidiff.out:----------------

Functions changes summary: 0 Removed, 7 Changed (388 filtered out), 15 Added functions

Variables changes summary: 0 Removed, 0 Changed (2 filtered out), 0 Added variables



15 Added functions:



  'function errcode_t ext2fs_dirent_swab_in(ext2_filsys, char*, int)'    {ext2fs_dirent_swab_in}

  'function errcode_t ext2fs_dirent_swab_in2(ext2_filsys, char*, size_t, int)'    {ext2fs_dirent_swab_in2}

  'function errcode_t ext2fs_dirent_swab_out(ext2_filsys, char*, int)'    {ext2fs_dirent_swab_out}

  'function errcode_t ext2fs_dirent_swab_out2(ext2_filsys, char*, size_t, int)'    {ext2fs_dirent_swab_out2}

  'function blk64_t ext2fs_get_stat_i_blocks(ext2_filsys, ext2_inode*)'    {ext2fs_get_stat_i_blocks}

  'function errcode_t ext2fs_resize_array(unsigned long int, unsigned long int, unsigned long int, void*)'    {ext2fs_resize_array}

  'function void ext2fs_swap_ext_attr(char*, char*, int, int)'    {ext2fs_swap_ext_attr}

  'function void ext2fs_swap_ext_attr_entry(ext2_ext_attr_entry*, ext2_ext_attr_entry*)'    {ext2fs_swap_ext_attr_entry}

  'function void ext2fs_swap_ext_attr_header(ext2_ext_attr_header*, ext2_ext_attr_header*)'    {ext2fs_swap_ext_attr_header}

  'function void ext2fs_swap_group_desc(ext2_group_desc*)'    {ext2fs_swap_group_desc}

  'function void ext2fs_swap_group_desc2(ext2_filsys, ext2_group_desc*)'    {ext2fs_swap_group_desc2}

  'function void ext2fs_swap_inode(ext2_filsys, ext2_inode*, ext2_inode*, int)'    {ext2fs_swap_inode}

  'function void ext2fs_swap_inode_full(ext2_filsys, ext2_inode_large*, ext2_inode_large*, int, int)'    {ext2fs_swap_inode_full}

  'function void ext2fs_swap_mmp(mmp_struct*)'    {ext2fs_swap_mmp}

  'function void ext2fs_swap_super(ext2_super_block*)'    {ext2fs_swap_super}



7 functions with some indirect sub-type change:



  [C]'function errcode_t ext2fs_add_journal_device(ext2_filsys, ext2_filsys)' at mkjournal.c:371:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef ext2_filsys' has sub-type changes:

      underlying type 'struct_ext2_filsys*' changed:

        in pointed to type 'struct struct_ext2_filsys' at ext2fs.h:226:1:

          type size hasn't changed

          1 data member changes (13 filtered):

           type of 'ext2_super_block* struct_ext2_filsys::orig_super' changed:

             in pointed to type 'struct ext2_super_block' at ext2_fs.h:639:1:

               type size hasn't changed

               2 data member changes:

                type of 'char ext2_super_block::s_volume_name[16]' changed:

                  array element type 'char' changed: 

                    entity changed from 'char' to compatible type 'typedef __u8' at ext2_types.h:22:1

                      type name changed from 'char' to 'unsigned char'

                      type size hasn't changed



                  type name changed from 'char[16]' to '__u8[16]'

                  type size hasn't changed



                type of 'char ext2_super_block::s_last_mounted[64]' changed:

                  array element type 'char' changed: 

                    entity changed from 'char' to compatible type 'typedef __u8' at ext2_types.h:22:1

                      type name changed from 'char' to 'unsigned char'

                      type size hasn't changed



                  type name changed from 'char[64]' to '__u8[64]'

                  type size hasn't changed







  [C]'function ext2_off_t ext2fs_file_get_size(ext2_file_t)' at fileio.c:557:1 has some indirect sub-type changes:

    return type changed:

      underlying type 'typedef __u32' at ext2_types.h:76:1 changed:

        typedef name changed from __u32 to __s32 at ext2_types.h:98:1

        underlying type 'unsigned int' changed:

          type name changed from 'unsigned int' to 'int'

          type size hasn't changed





  [C]'function errcode_t ext2fs_file_lseek(ext2_file_t, ext2_off_t, int, ext2_off_t*)' at fileio.c:529:1 has some indirect sub-type changes:

    parameter 2 of type 'typedef ext2_off_t' changed:

      underlying type 'typedef __u32' at ext2_types.h:76:1 changed:

        typedef name changed from __u32 to __s32 at ext2_types.h:98:1

        underlying type 'unsigned int' changed:

          type name changed from 'unsigned int' to 'int'

          type size hasn't changed



    parameter 4 of type 'ext2_off_t*' changed:

      pointed to type 'typedef ext2_off_t' changed at ext2fs.h:80:1, as reported earlier



  [C]'function errcode_t ext2fs_file_set_size(ext2_file_t, ext2_off_t)' at fileio.c:657:1 has some indirect sub-type changes:



  [C]'function errcode_t ext2fs_file_set_size2(ext2_file_t, ext2_off64_t)' at fileio.c:619:1 has some indirect sub-type changes:

    parameter 2 of type 'typedef ext2_off64_t' changed:

      underlying type 'typedef __u64' at ext2_types.h:120:1 changed:

        typedef name changed from __u64 to __s64 at ext2_types.h:142:1

        underlying type 'long long unsigned int' changed:

          type name changed from 'long long unsigned int' to 'long long int'

          type size hasn't changed





  [C]'function errcode_t ext2fs_inode_size_set(ext2_filsys, ext2_inode*, ext2_off64_t)' at blknum.c:537:1 has some indirect sub-type changes:

    parameter 3 of type 'typedef ext2_off64_t' changed:

      underlying type 'typedef __u64' at ext2_types.h:120:1 changed:

        typedef name changed from __u64 to __s64 at ext2_types.h:142:1

        underlying type 'long long unsigned int' changed:

          type name changed from 'long long unsigned int' to 'long long int'

          type size hasn't changed





  [C]'function errcode_t ext2fs_mmp_csum_set(ext2_filsys, mmp_struct*)' at csum.c:62:1 has some indirect sub-type changes:

    parameter 2 of type 'mmp_struct*' has sub-type changes:

      in pointed to type 'struct mmp_struct' at ext2_fs.h:1097:1:

        type size hasn't changed

        2 data member changes:



         type of 'char mmp_struct::mmp_bdevname[32]' changed:

           array element type 'char' changed: 

             entity changed from 'char' to compatible type 'typedef __u8' at ext2_types.h:22:1

               type name changed from 'char' to 'unsigned char'

               type size hasn't changed



           type name changed from 'char[32]' to '__u8[32]'

           type size hasn't changed







---------------diffs in e2fsprogs_libcom_err.so.2.1_abidiff.out:----------------

---------------diffs in e2fsprogs_libss.so.2.0_abidiff.out:----------------

