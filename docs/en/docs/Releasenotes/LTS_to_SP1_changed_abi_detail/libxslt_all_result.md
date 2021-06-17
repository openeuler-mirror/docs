# Functions changed info

---------------diffs in libxslt_libexslt.so.0.8.20_abidiff.out:----------------

Functions changes summary: 0 Removed, 1 Changed (3 filtered out), 0 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



1 function with some indirect sub-type change:



  [C]'function int exsltDateXpathCtxtRegister(xmlXPathContextPtr, const xmlChar*)' at date.c:3852:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef xmlXPathContextPtr' has sub-type changes:

      underlying type 'xmlXPathContext*' changed:

        in pointed to type 'typedef xmlXPathContext' at xpath.h:39:1:

          underlying type 'struct _xmlXPathContext' at xpath.h:288:1 changed:

            type size changed from 2816 to 3072 (in bits)

            5 data member insertions:

              'unsigned long int _xmlXPathContext::opLimit', at offset 2816 (in bits) at xpath.h:359:1

              'unsigned long int _xmlXPathContext::opCount', at offset 2880 (in bits) at xpath.h:360:1

              'int _xmlXPathContext::depth', at offset 2944 (in bits) at xpath.h:361:1

              'int _xmlXPathContext::maxDepth', at offset 2976 (in bits) at xpath.h:362:1

              'int _xmlXPathContext::maxParserDepth', at offset 3008 (in bits) at xpath.h:363:1

            no data member changes (2 filtered);





---------------diffs in libxslt_libxslt.so.1.1.34_abidiff.out:----------------

Functions changes summary: 0 Removed, 20 Changed (175 filtered out), 2 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



2 Added functions:



  'function void xsltCompMatchClearCache(xsltTransformContextPtr, xsltCompMatchPtr)'    {xsltCompMatchClearCache@@LIBXML2_1.1.34}

  'function int xsltParseStylesheetUser(xsltStylesheetPtr, xmlDocPtr)'    {xsltParseStylesheetUser@@LIBXML2_1.1.34}



20 functions with some indirect sub-type change:



  [C]'function int xslAddCall(xsltTemplatePtr, xmlNodePtr)' at xsltutils.c:2457:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef xsltTemplatePtr' has sub-type changes:

      underlying type 'xsltTemplate*' changed:

        in pointed to type 'typedef xsltTemplate' at xsltInternals.h:264:1:

          underlying type 'struct _xsltTemplate' at xsltInternals.h:274:1 changed:

            type size hasn't changed

            1 data member changes (2 filtered):

             type of '_xsltStylesheet* _xsltTemplate::style' changed:

               in pointed to type 'struct _xsltStylesheet' at xsltInternals.h:1476:1:

                 type size changed from 3328 to 3392 (in bits)

                 1 data member insertion:

                   'xmlXPathContextPtr _xsltStylesheet::xpathCtxt', at offset 3328 (in bits) at xsltInternals.h:1635:1

                 1 data member changes (6 filtered):

                  type of 'xsltElemPreCompPtr _xsltStylesheet::preComps' changed:

                    underlying type 'xsltElemPreComp*' changed:

                      in pointed to type 'typedef xsltElemPreComp' at xsltInternals.h:391:1:

                        underlying type 'struct _xsltElemPreComp' at xsltInternals.h:479:1 changed:

                          type size hasn't changed

                          1 data member changes (2 filtered):

                           type of 'xsltTransformFunction _xsltElemPreComp::func' changed:

                             underlying type 'void (typedef xsltTransformContextPtr, typedef xmlNodePtr, typedef xmlNodePtr, typedef xsltElemPreCompPtr)*' changed:

                               in pointed to type 'function type void (typedef xsltTransformContextPtr, typedef xmlNodePtr, typedef xmlNodePtr, typedef xsltElemPreCompPtr)':

                                 parameter 1 of type 'typedef xsltTransformContextPtr' has sub-type changes:

                                   underlying type 'xsltTransformContext*' changed:

                                     in pointed to type 'typedef xsltTransformContext' at xsltInternals.h:382:1:

                                       underlying type 'struct _xsltTransformContext' at xsltInternals.h:1677:1 changed:

                                         type size changed from 3776 to 3904 (in bits)

                                         2 data member insertions:

                                           'unsigned long int _xsltTransformContext::opLimit', at offset 3776 (in bits) at xsltInternals.h:1783:1

                                           'unsigned long int _xsltTransformContext::opCount', at offset 3840 (in bits) at xsltInternals.h:1784:1

                                         1 data member changes (8 filtered):

                                          type of 'xmlXPathContextPtr _xsltTransformContext::xpathCtxt' changed:

                                            underlying type 'xmlXPathContext*' changed:

                                              in pointed to type 'typedef xmlXPathContext' at xpath.h:39:1:

                                                underlying type 'struct _xmlXPathContext' at xpath.h:288:1 changed:

                                                  type size changed from 2816 to 3072 (in bits)

                                                  5 data member insertions:

                                                    'unsigned long int _xmlXPathContext::opLimit', at offset 2816 (in bits) at xpath.h:359:1

                                                    'unsigned long int _xmlXPathContext::opCount', at offset 2880 (in bits) at xpath.h:360:1

                                                    'int _xmlXPathContext::depth', at offset 2944 (in bits) at xpath.h:361:1

                                                    'int _xmlXPathContext::maxDepth', at offset 2976 (in bits) at xpath.h:362:1

                                                    'int _xmlXPathContext::maxParserDepth', at offset 3008 (in bits) at xpath.h:363:1

                                                  no data member changes (2 filtered);











  [C]'function void xsltApplyImports(xsltTransformContextPtr, xmlNodePtr, xmlNodePtr, xsltStylePreCompPtr)' at transform.c:4685:1 has some indirect sub-type changes:

    parameter 4 of type 'typedef xsltStylePreCompPtr' changed:

      typedef name changed from xsltStylePreCompPtr to xsltElemPreCompPtr at xsltInternals.h:392:1

      underlying type 'xsltStylePreComp*' changed:

        in pointed to type 'typedef xsltStylePreComp' at xsltInternals.h:391:1:

          typedef name changed from xsltStylePreComp to xsltElemPreComp at xsltInternals.h:391:1

          underlying type 'struct _xsltStylePreComp' at xsltInternals.h:1370:1 changed:

            type name changed from '_xsltStylePreComp' to '_xsltElemPreComp'

            type size changed from 2624 to 320 (in bits)

            29 data member deletions:

              'int _xsltStylePreComp::has_stype', at offset 320 (in bits) at xsltInternals.h:1381:1



              'int _xsltStylePreComp::number', at offset 352 (in bits) at xsltInternals.h:1382:1



              'const xmlChar* _xsltStylePreComp::order', at offset 384 (in bits) at xsltInternals.h:1383:1



              'int _xsltStylePreComp::has_order', at offset 448 (in bits) at xsltInternals.h:1384:1



              'int _xsltStylePreComp::descending', at offset 480 (in bits) at xsltInternals.h:1385:1



              'const xmlChar* _xsltStylePreComp::lang', at offset 512 (in bits) at xsltInternals.h:1386:1



              'int _xsltStylePreComp::has_lang', at offset 576 (in bits) at xsltInternals.h:1387:1



              'xsltLocale _xsltStylePreComp::locale', at offset 640 (in bits) at xsltInternals.h:1388:1



              'const xmlChar* _xsltStylePreComp::case_order', at offset 704 (in bits) at xsltInternals.h:1389:1



              'int _xsltStylePreComp::lower_first', at offset 768 (in bits) at xsltInternals.h:1390:1



              'const xmlChar* _xsltStylePreComp::use', at offset 832 (in bits) at xsltInternals.h:1392:1



              'int _xsltStylePreComp::has_use', at offset 896 (in bits) at xsltInternals.h:1393:1



              'int _xsltStylePreComp::noescape', at offset 928 (in bits) at xsltInternals.h:1395:1



              'const xmlChar* _xsltStylePreComp::name', at offset 960 (in bits) at xsltInternals.h:1397:1



              'int _xsltStylePreComp::has_name', at offset 1024 (in bits) at xsltInternals.h:1398:1



              'const xmlChar* _xsltStylePreComp::ns', at offset 1088 (in bits) at xsltInternals.h:1399:1



              'int _xsltStylePreComp::has_ns', at offset 1152 (in bits) at xsltInternals.h:1400:1



              'const xmlChar* _xsltStylePreComp::mode', at offset 1216 (in bits) at xsltInternals.h:1402:1



              'const xmlChar* _xsltStylePreComp::modeURI', at offset 1280 (in bits) at xsltInternals.h:1403:1



              'const xmlChar* _xsltStylePreComp::test', at offset 1344 (in bits) at xsltInternals.h:1405:1



              'xsltTemplatePtr _xsltStylePreComp::templ', at offset 1408 (in bits) at xsltInternals.h:1407:1



              'const xmlChar* _xsltStylePreComp::select', at offset 1472 (in bits) at xsltInternals.h:1409:1



              'int _xsltStylePreComp::ver11', at offset 1536 (in bits) at xsltInternals.h:1411:1



              'const xmlChar* _xsltStylePreComp::filename', at offset 1600 (in bits) at xsltInternals.h:1412:1



              'int _xsltStylePreComp::has_filename', at offset 1664 (in bits) at xsltInternals.h:1413:1



              'xsltNumberData _xsltStylePreComp::numdata', at offset 1728 (in bits) at xsltInternals.h:1415:1



              'xmlXPathCompExprPtr _xsltStylePreComp::comp', at offset 2432 (in bits) at xsltInternals.h:1417:1



              'xmlNsPtr* _xsltStylePreComp::nsList', at offset 2496 (in bits) at xsltInternals.h:1418:1



              'int _xsltStylePreComp::nsNr', at offset 2560 (in bits) at xsltInternals.h:1419:1



            3 data member changes (2 filtered):

             name of '_xsltStylePreComp::next' changed to '_xsltElemPreComp::next' at xsltInternals.h:472:1

             name of '_xsltStylePreComp::func' changed to '_xsltElemPreComp::func' at xsltInternals.h:475:1

             type of 'const xmlChar* _xsltStylePreComp::stype' changed:

               entity changed from 'const xmlChar*' to compatible type 'typedef xsltElemPreCompDeallocator' at xsltInternals.h:461:1

                 in pointed to type 'const unsigned char':

                   entity changed from 'const unsigned char' to 'function type void (_xsltElemPreComp*)'

                   type size changed from 8 to 64 (in bits)

             and name of '_xsltStylePreComp::stype' changed to '_xsltElemPreComp::free' at xsltInternals.h:480:1



  [C]'function void xsltApplyTemplates(xsltTransformContextPtr, xmlNodePtr, xmlNodePtr, xsltStylePreCompPtr)' at transform.c:4857:1 has some indirect sub-type changes:



  [C]'function void xsltAttribute(xsltTransformContextPtr, xmlNodePtr, xmlNodePtr, xsltStylePreCompPtr)' at attributes.c:754:1 has some indirect sub-type changes:



  [C]'function void xsltCallTemplate(xsltTransformContextPtr, xmlNodePtr, xmlNodePtr, xsltStylePreCompPtr)' at transform.c:4754:1 has some indirect sub-type changes:



  [C]'function void xsltChoose(xsltTransformContextPtr, xmlNodePtr, xmlNodePtr, xsltStylePreCompPtr)' at transform.c:5234:1 has some indirect sub-type changes:



  [C]'function void xsltComment(xsltTransformContextPtr, xmlNodePtr, xmlNodePtr, xsltStylePreCompPtr)' at transform.c:4300:1 has some indirect sub-type changes:



  [C]'function void xsltCopy(xsltTransformContextPtr, xmlNodePtr, xmlNodePtr, xsltStylePreCompPtr)' at transform.c:3936:1 has some indirect sub-type changes:



  [C]'function void xsltCopyOf(xsltTransformContextPtr, xmlNodePtr, xmlNodePtr, xsltStylePreCompPtr)' at transform.c:4410:1 has some indirect sub-type changes:



  [C]'function void xsltDebug(xsltTransformContextPtr, xmlNodePtr, xmlNodePtr, xsltStylePreCompPtr)' at extra.c:55:1 has some indirect sub-type changes:



  [C]'function void xsltDocumentElem(xsltTransformContextPtr, xmlNodePtr, xmlNodePtr, xsltStylePreCompPtr)' at transform.c:3400:1 has some indirect sub-type changes:



  [C]'function void xsltElement(xsltTransformContextPtr, xmlNodePtr, xmlNodePtr, xsltStylePreCompPtr)' at transform.c:4092:1 has some indirect sub-type changes:



  [C]'function void xsltForEach(xsltTransformContextPtr, xmlNodePtr, xmlNodePtr, xsltStylePreCompPtr)' at transform.c:5499:1 has some indirect sub-type changes:



  [C]'function void xsltIf(xsltTransformContextPtr, xmlNodePtr, xmlNodePtr, xsltStylePreCompPtr)' at transform.c:5393:1 has some indirect sub-type changes:



  [C]'function void xsltNumber(xsltTransformContextPtr, xmlNodePtr, xmlNodePtr, xsltStylePreCompPtr)' at transform.c:4628:1 has some indirect sub-type changes:



  [C]'function void xsltProcessingInstruction(xsltTransformContextPtr, xmlNodePtr, xmlNodePtr, xsltStylePreCompPtr)' at transform.c:4344:1 has some indirect sub-type changes:



  [C]'function void xsltSort(xsltTransformContextPtr, xmlNodePtr, xmlNodePtr, xsltStylePreCompPtr)' at transform.c:3914:1 has some indirect sub-type changes:



  [C]'function void xsltText(xsltTransformContextPtr, xmlNodePtr, xmlNodePtr, xsltStylePreCompPtr)' at transform.c:4055:1 has some indirect sub-type changes:



  [C]'function void xsltValueOf(xsltTransformContextPtr, xmlNodePtr, xmlNodePtr, xsltStylePreCompPtr)' at transform.c:4554:1 has some indirect sub-type changes:



  [C]'function xmlXPathFunction xsltXPathFunctionLookup(xmlXPathContextPtr, const xmlChar*, const xmlChar*)' at functions.c:68:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef xmlXPathContextPtr' changed:

      entity changed from 'typedef xmlXPathContextPtr' to compatible type 'void*'

        in pointed to type 'struct _xmlXPathContext':

          entity changed from 'struct _xmlXPathContext' to 'void'

          type size changed from 2816 to 0 (in bits)





