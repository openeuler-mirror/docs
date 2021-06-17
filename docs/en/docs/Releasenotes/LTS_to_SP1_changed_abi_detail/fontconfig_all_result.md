# Functions changed info

---------------diffs in fontconfig_libfontconfig.so.1.12.0_abidiff.out:----------------

Functions changes summary: 0 Removed, 3 Changed (48 filtered out), 2 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



2 Added functions:



  'function FcChar8* IA__FcConfigGetFilename(FcConfig*, const FcChar8*)'    {FcConfigGetFilename}

  'function FcChar8* IA__FcStrBuildFilename(const FcChar8*, ...)'    {FcStrBuildFilename}



3 functions with some indirect sub-type change:



  [C]'function FcBool FcConfigAddRule(FcConfig*, FcRule*, FcMatchKind)' at fccfg.c:920:1 has some indirect sub-type changes:

    parameter 1 of type 'FcConfig*' has sub-type changes:

      in pointed to type 'typedef FcConfig' at fontconfig.h:324:1:

        underlying type 'struct _FcConfig' at fcint.h:505:1 changed:

          type size hasn't changed

          1 data member deletion:

            'FcHashTable* _FcConfig::uuid_table', at offset 1280 (in bits) at fcint.h:568:1



          1 data member insertion:

            'FcStrSet* _FcConfig::configMapDirs', at offset 64 (in bits) at fcint.h:512:1

          17 data member changes:

           'FcStrSet* _FcConfig::fontDirs' offset changed from 64 to 128 (in bits) (by +64 bits)

           'FcStrSet* _FcConfig::cacheDirs' offset changed from 128 to 192 (in bits) (by +64 bits)

           'FcStrSet* _FcConfig::configFiles' offset changed from 192 to 256 (in bits) (by +64 bits)

           'FcPtrList* _FcConfig::subst[3]' offset changed from 256 to 320 (in bits) (by +64 bits)

           'int _FcConfig::maxObjects' offset changed from 448 to 512 (in bits) (by +64 bits)

           'FcStrSet* _FcConfig::acceptGlobs' offset changed from 512 to 576 (in bits) (by +64 bits)

           'FcStrSet* _FcConfig::rejectGlobs' offset changed from 576 to 640 (in bits) (by +64 bits)

           'FcFontSet* _FcConfig::acceptPatterns' offset changed from 640 to 704 (in bits) (by +64 bits)

           'FcFontSet* _FcConfig::rejectPatterns' offset changed from 704 to 768 (in bits) (by +64 bits)

           'FcFontSet* _FcConfig::fonts[2]' offset changed from 768 to 832 (in bits) (by +64 bits)

           'time_t _FcConfig::rescanTime' offset changed from 896 to 960 (in bits) (by +64 bits)

           'int _FcConfig::rescanInterval' offset changed from 960 to 1024 (in bits) (by +64 bits)

           'FcRef _FcConfig::ref' offset changed from 992 to 1056 (in bits) (by +64 bits)

           'FcExprPage* _FcConfig::expr_pool' offset changed from 1024 to 1088 (in bits) (by +64 bits)

           'FcChar8* _FcConfig::sysRoot' offset changed from 1088 to 1152 (in bits) (by +64 bits)

           'FcStrSet* _FcConfig::availConfigFiles' offset changed from 1152 to 1216 (in bits) (by +64 bits)

           'FcPtrList* _FcConfig::rulesetList' offset changed from 1216 to 1280 (in bits) (by +64 bits)



  [C]'function void IA__FcCacheCreateTagFile(const FcConfig*)' at fccache.c:2023:1 has some indirect sub-type changes:

    Please note that the exported symbol of this function is FcCacheCreateTagFile

    parameter 1 of type 'const FcConfig*' changed:

      in pointed to type 'const FcConfig' at fontconfig.h:324:1:

        entity changed from 'const FcConfig' to 'typedef FcConfig' at fontconfig.h:324:1

        type size hasn't changed



  [C]'function FcStrList* IA__FcConfigGetCacheDirs(const FcConfig*)' at fccfg.c:763:1 has some indirect sub-type changes:

    Please note that the exported symbol of this function is FcConfigGetCacheDirs

    parameter 1 of type 'const FcConfig*' changed:

      in pointed to type 'const FcConfig' at fontconfig.h:324:1:

        entity changed from 'const FcConfig' to 'typedef FcConfig' at fontconfig.h:324:1

        type size hasn't changed





