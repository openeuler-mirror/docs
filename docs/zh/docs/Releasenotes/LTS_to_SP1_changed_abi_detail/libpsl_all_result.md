# Functions changed info

---------------diffs in libpsl_libpsl.so.5.3.3_abidiff.out:----------------

Functions changes summary: 0 Removed, 11 Changed (2 filtered out), 0 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



11 functions with some indirect sub-type change:



  [C]'function const psl_ctx_t* psl_builtin()' at psl.c:1365:1 has some indirect sub-type changes:

    return type changed:

      in pointed to type 'const psl_ctx_t':

        in unqualified underlying type 'typedef psl_ctx_t' at libpsl.h:94:1:

          underlying type 'struct _psl_ctx_st' at psl.c:153:1 changed:

            type name changed from '_psl_ctx_st' to 'psl_ctx_st'

            type size hasn't changed



            1 data member changes (6 filtered):

             type of '_psl_vector_t* _psl_ctx_st::suffixes' changed:

               in pointed to type 'typedef _psl_vector_t' at psl.c:151:1:

                 typedef name changed from _psl_vector_t to psl_vector_t at psl.c:151:1

                 underlying type 'struct {int (const _psl_entry_t**, const _psl_entry_t**)* cmp; _psl_entry_t** entry; int max; int cur;}' at psl.c:143:1 changed:

                   type size hasn't changed

                   1 data member changes (1 filtered):

                    type of 'int (const _psl_entry_t**, const _psl_entry_t**)* cmp' changed:

                      in pointed to type 'function type int (const _psl_entry_t**, const _psl_entry_t**)':

                        parameter 1 of type 'const _psl_entry_t**' has sub-type changes:

                          in pointed to type 'const _psl_entry_t*':

                            in pointed to type 'const _psl_entry_t':

                              'const _psl_entry_t' changed to 'const psl_entry_t'



             and name of '_psl_ctx_st::suffixes' changed to 'psl_ctx_st::suffixes' at psl.c:155:1



  [C]'function void psl_free(psl_ctx_t*)' at psl.c:1340:1 has some indirect sub-type changes:

    parameter 1 of type 'psl_ctx_t*' changed:

      pointed to type 'typedef psl_ctx_t' changed at libpsl.h:89:1, as reported earlier



  [C]'function int psl_is_cookie_domain_acceptable(const psl_ctx_t*, const char*, const char*)' at psl.c:1636:1 has some indirect sub-type changes:

    parameter 1 of type 'const psl_ctx_t*' changed:

      in pointed to type 'const psl_ctx_t':

        unqualified underlying type 'typedef psl_ctx_t' changed at libpsl.h:89:1, as reported earlier



  [C]'function int psl_is_public_suffix(const psl_ctx_t*, const char*)' at psl.c:990:1 has some indirect sub-type changes:



  [C]'function int psl_is_public_suffix2(const psl_ctx_t*, const char*, int)' at psl.c:1025:1 has some indirect sub-type changes:



  [C]'function psl_ctx_t* psl_latest(const char*)' at psl.c:1931:1 has some indirect sub-type changes:



  [C]'function psl_ctx_t* psl_load_file(const char*)' at psl.c:1155:1 has some indirect sub-type changes:



  [C]'function psl_ctx_t* psl_load_fp(FILE*)' at psl.c:1184:1 has some indirect sub-type changes:



  [C]'function int psl_suffix_count(const psl_ctx_t*)' at psl.c:1388:1 has some indirect sub-type changes:



  [C]'function int psl_suffix_exception_count(const psl_ctx_t*)' at psl.c:1411:1 has some indirect sub-type changes:



  [C]'function int psl_suffix_wildcard_count(const psl_ctx_t*)' at psl.c:1434:1 has some indirect sub-type changes:





