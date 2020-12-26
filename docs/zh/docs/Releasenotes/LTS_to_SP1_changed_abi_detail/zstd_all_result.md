# Functions changed info

---------------diffs in zstd_libzstd.so.1.4.5_abidiff.out:----------------

Functions changes summary: 24 Removed, 0 Changed, 0 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable

Function symbols changes summary: 0 Removed, 12 Added function symbols not referenced by debug info

Variable symbols changes summary: 0 Removed, 0 Added variable symbol not referenced by debug info



24 Removed functions:



  'function size_t ZSTDMT_compressCCtx(ZSTDMT_CCtx*, void*, size_t, void*, size_t, int)'    {ZSTDMT_compressCCtx}

  'function size_t ZSTDMT_compressStream(ZSTDMT_CCtx*, ZSTD_outBuffer*, ZSTD_inBuffer*)'    {ZSTDMT_compressStream}

  'function size_t ZSTDMT_compressStream_generic(ZSTDMT_CCtx*, ZSTD_outBuffer*, ZSTD_inBuffer*, ZSTD_EndDirective)'    {ZSTDMT_compressStream_generic}

  'function size_t ZSTDMT_compress_advanced(ZSTDMT_CCtx*, void*, size_t, void*, size_t, const ZSTD_CDict*, ZSTD_parameters, unsigned int)'    {ZSTDMT_compress_advanced}

  'function ZSTDMT_CCtx* ZSTDMT_createCCtx(unsigned int)'    {ZSTDMT_createCCtx}

  'function ZSTDMT_CCtx* ZSTDMT_createCCtx_advanced(unsigned int, ZSTD_customMem)'    {ZSTDMT_createCCtx_advanced}

  'function size_t ZSTDMT_endStream(ZSTDMT_CCtx*, ZSTD_outBuffer*)'    {ZSTDMT_endStream}

  'function size_t ZSTDMT_flushStream(ZSTDMT_CCtx*, ZSTD_outBuffer*)'    {ZSTDMT_flushStream}

  'function size_t ZSTDMT_freeCCtx(ZSTDMT_CCtx*)'    {ZSTDMT_freeCCtx}

  'function size_t ZSTDMT_getMTCtxParameter(ZSTDMT_CCtx*, ZSTDMT_parameter, unsigned int*)'    {ZSTDMT_getMTCtxParameter}

  'function size_t ZSTDMT_initCStream(ZSTDMT_CCtx*, int)'    {ZSTDMT_initCStream}

  'function size_t ZSTDMT_initCStream_advanced(ZSTDMT_CCtx*, void*, size_t, ZSTD_parameters, long long unsigned int)'    {ZSTDMT_initCStream_advanced}

  'function size_t ZSTDMT_initCStream_usingCDict(ZSTDMT_CCtx*, const ZSTD_CDict*, ZSTD_frameParameters, long long unsigned int)'    {ZSTDMT_initCStream_usingCDict}

  'function size_t ZSTDMT_resetCStream(ZSTDMT_CCtx*, long long unsigned int)'    {ZSTDMT_resetCStream}

  'function size_t ZSTDMT_setMTCtxParameter(ZSTDMT_CCtx*, ZSTDMT_parameter, unsigned int)'    {ZSTDMT_setMTCtxParameter}

  'function size_t ZSTDMT_sizeof_CCtx(ZSTDMT_CCtx*)'    {ZSTDMT_sizeof_CCtx}

  'function size_t ZSTD_CCtxParam_getParameter(ZSTD_CCtx_params*, ZSTD_cParameter, unsigned int*)'    {ZSTD_CCtxParam_getParameter}

  'function size_t ZSTD_CCtxParam_setParameter(ZSTD_CCtx_params*, ZSTD_cParameter, unsigned int)'    {ZSTD_CCtxParam_setParameter}

  'function size_t ZSTD_CCtx_resetParameters(ZSTD_CCtx*)'    {ZSTD_CCtx_resetParameters}

  'function size_t ZSTD_compress_generic(ZSTD_CCtx*, ZSTD_outBuffer*, ZSTD_inBuffer*, ZSTD_EndDirective)'    {ZSTD_compress_generic}

  'function size_t ZSTD_compress_generic_simpleArgs(ZSTD_CCtx*, void*, size_t, size_t*, void*, size_t, size_t*, ZSTD_EndDirective)'    {ZSTD_compress_generic_simpleArgs}

  'function size_t ZSTD_decompress_generic(ZSTD_DCtx*, ZSTD_outBuffer*, ZSTD_inBuffer*)'    {ZSTD_decompress_generic}

  'function size_t ZSTD_decompress_generic_simpleArgs(ZSTD_DCtx*, void*, size_t, size_t*, void*, size_t, size_t*)'    {ZSTD_decompress_generic_simpleArgs}

  'function size_t ZSTD_setDStreamParameter(ZSTD_DStream*, ZSTD_DStreamParameter_e, unsigned int)'    {ZSTD_setDStreamParameter}



12 Added function symbols not referenced by debug info:



  ZDICT_getDictHeaderSize

  ZSTD_CCtxParams_getParameter

  ZSTD_CCtxParams_setParameter

  ZSTD_DCtx_setParameter

  ZSTD_cParam_getBounds

  ZSTD_compress2

  ZSTD_compressStream2

  ZSTD_compressStream2_simpleArgs

  ZSTD_dParam_getBounds

  ZSTD_decompressBound

  ZSTD_decompressStream_simpleArgs

  ZSTD_getSequences



