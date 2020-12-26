# Functions changed info

---------------diffs in libksba_libksba.so.8.12.0_abidiff.out:----------------

Functions changes summary: 0 Removed, 1 Changed (3 filtered out), 12 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



12 Added functions:



  'function void ksba_der_add_bts(ksba_der_t, void*, size_t, unsigned int)'    {ksba_der_add_bts@@KSBA_0.9}

  'function void ksba_der_add_der(ksba_der_t, void*, size_t)'    {ksba_der_add_der@@KSBA_0.9}

  'function void ksba_der_add_end(ksba_der_t)'    {ksba_der_add_end@@KSBA_0.9}

  'function void ksba_der_add_int(ksba_der_t, void*, size_t, int)'    {ksba_der_add_int@@KSBA_0.9}

  'function void ksba_der_add_oid(ksba_der_t, const char*)'    {ksba_der_add_oid@@KSBA_0.9}

  'function void ksba_der_add_ptr(ksba_der_t, int, int, void*, size_t)'    {ksba_der_add_ptr@@KSBA_0.9}

  'function void ksba_der_add_tag(ksba_der_t, int, int)'    {ksba_der_add_tag@@KSBA_0.9}

  'function void ksba_der_add_val(ksba_der_t, int, int, void*, size_t)'    {ksba_der_add_val@@KSBA_0.9}

  'function gpg_error_t ksba_der_builder_get(ksba_der_t, unsigned char**, size_t*)'    {ksba_der_builder_get@@KSBA_0.9}

  'function ksba_der_t ksba_der_builder_new(unsigned int)'    {ksba_der_builder_new@@KSBA_0.9}

  'function void ksba_der_builder_reset(ksba_der_t)'    {ksba_der_builder_reset@@KSBA_0.9}

  'function void ksba_der_release(ksba_der_t)'    {ksba_der_release@@KSBA_0.9}



1 function with some indirect sub-type change:



  [C]'function gpg_error_t _ksba_keyinfo_from_sexp(ksba_const_sexp_t, unsigned char**, size_t*)' at keyinfo.c:940:1 has some indirect sub-type changes:

    parameter 2 of type 'unsigned char**' changed:

      entity changed from 'unsigned char**' to 'int'

      type size changed from 64 to 32 (in bits)

    parameter 3 of type 'size_t*' changed:

      in pointed to type 'typedef size_t':

        entity changed from 'typedef size_t' to 'unsigned char*'

        type size hasn't changed

    parameter 4 of type 'size_t*' was added







