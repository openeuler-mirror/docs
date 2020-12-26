# Functions changed info

---------------diffs in tcl_libtcl8.6.so_abidiff.out:----------------

Functions changes summary: 4 Removed, 2 Changed (95 filtered out), 6 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added (3 filtered out) variables



4 Removed functions:



  'function int TclOODefineMixinObjCmd(ClientData, Tcl_Interp*, const int, Tcl_Obj* const*)'    {TclOODefineMixinObjCmd}

  'function int TclSkipUnlink(Tcl_Obj*)'    {TclSkipUnlink}

  'function int Tcl_EncodingObjCmd(ClientData, Tcl_Interp*, int, Tcl_Obj* const*)'    {Tcl_EncodingObjCmd}

  'function void TclpUnloadFile(Tcl_LoadHandle)'    {TclpUnloadFile}



6 Added functions:



  'function mp_err TclBN_mp_balance_mul(const mp_int*, const mp_int*, mp_int*)'    {TclBN_mp_balance_mul}

  'function int TclBN_mp_expt_d_ex(const mp_int*, mp_digit, mp_int*, int)'    {TclBN_mp_expt_d_ex}

  'function void TclBN_mp_set_ull(mp_int*, Tcl_WideUInt)'    {TclBN_mp_set_ull}

  'function mp_err TclBN_mp_signed_rsh(const mp_int*, int, mp_int*)'    {TclBN_mp_signed_rsh}

  'function mp_err TclBN_mp_to_radix(const mp_int*, char*, size_t, size_t*, int)'    {TclBN_mp_to_radix}

  'function mp_err TclBN_mp_to_ubin(const mp_int*, unsigned char*, size_t, size_t*)'    {TclBN_mp_to_ubin}



2 functions with some indirect sub-type change:



  [C]'function int TclAddLiteralObj(CompileEnv*, Tcl_Obj*, LiteralEntry**)' at tclLiteral.c:601:1 has some indirect sub-type changes:

    parameter 1 of type 'CompileEnv*' has sub-type changes:

      in pointed to type 'typedef CompileEnv' at tclCompile.h:388:1:

        underlying type 'struct CompileEnv' at tclCompile.h:284:1 changed:

          type size hasn't changed

          1 data member changes (3 filtered):

           type of 'AuxData* CompileEnv::auxDataArrayPtr' changed:

             in pointed to type 'typedef AuxData' at tclCompile.h:270:1:

               underlying type 'struct AuxData' at tclCompile.h:266:1 changed:

                 type size hasn't changed

                 1 data member change:

                  type of 'const AuxDataType* AuxData::type' changed:

                    in pointed to type 'const AuxDataType':

                      in unqualified underlying type 'typedef AuxDataType' at tclCompile.h:258:1:

                        underlying type 'struct AuxDataType' at tclCompile.h:233:1 changed:

                          type size hasn't changed

                          1 data member changes (1 filtered):

                           type of 'AuxDataPrintProc* AuxDataType::disassembleProc' changed:

                             in pointed to type 'typedef AuxDataPrintProc' at tclCompile.h:222:1:

                               underlying type 'function type void (typedef ClientData, Tcl_Obj*, ByteCode*, unsigned int)' changed:

                                 parameter 3 of type 'ByteCode*' has sub-type changes:

                                   in pointed to type 'struct ByteCode' at tclCompile.h:414:1:

                                     type size hasn't changed

                                     1 data member changes (1 filtered):

                                      type of 'Proc* ByteCode::procPtr' changed:

                                        in pointed to type 'typedef Proc' at tclInt.h:963:1:

                                          underlying type 'struct Proc' at tclInt.h:937:1 changed:

                                            type size hasn't changed

                                            1 data member changes (1 filtered):

                                             type of 'Interp* Proc::iPtr' changed:

                                               in pointed to type 'typedef Interp' at tclInt.h:2145:1:

                                                 underlying type 'struct Interp' at tclInt.h:1761:1 changed:

                                                   type size hasn't changed

                                                   1 data member changes (8 filtered):

                                                    type of 'const TclStubs* Interp::stubTable' changed:

                                                      in pointed to type 'const TclStubs':

                                                        in unqualified underlying type 'struct TclStubs' at tclDecls.h:1845:1:

                                                          type size changed from 40512 to 41664 (in bits)

                                                          18 data member insertions:

                                                            'void ()* TclStubs::reserved631', at offset 40512 (in bits) at tclDecls.h:2504:1

                                                            'void ()* TclStubs::reserved632', at offset 40576 (in bits) at tclDecls.h:2505:1

                                                            'void ()* TclStubs::reserved633', at offset 40640 (in bits) at tclDecls.h:2506:1

                                                            'void ()* TclStubs::reserved634', at offset 40704 (in bits) at tclDecls.h:2507:1

                                                            'void ()* TclStubs::reserved635', at offset 40768 (in bits) at tclDecls.h:2508:1

                                                            'void ()* TclStubs::reserved636', at offset 40832 (in bits) at tclDecls.h:2509:1

                                                            'void ()* TclStubs::reserved637', at offset 40896 (in bits) at tclDecls.h:2510:1

                                                            'void ()* TclStubs::reserved638', at offset 40960 (in bits) at tclDecls.h:2511:1

                                                            'void ()* TclStubs::reserved639', at offset 41024 (in bits) at tclDecls.h:2512:1

                                                            'void ()* TclStubs::reserved640', at offset 41088 (in bits) at tclDecls.h:2513:1

                                                            'void ()* TclStubs::reserved641', at offset 41152 (in bits) at tclDecls.h:2514:1

                                                            'void ()* TclStubs::reserved642', at offset 41216 (in bits) at tclDecls.h:2515:1

                                                            'void ()* TclStubs::reserved643', at offset 41280 (in bits) at tclDecls.h:2516:1

                                                            'void ()* TclStubs::reserved644', at offset 41344 (in bits) at tclDecls.h:2517:1

                                                            'void ()* TclStubs::reserved645', at offset 41408 (in bits) at tclDecls.h:2518:1

                                                            'void ()* TclStubs::reserved646', at offset 41472 (in bits) at tclDecls.h:2519:1

                                                            'void ()* TclStubs::reserved647', at offset 41536 (in bits) at tclDecls.h:2520:1

                                                            'void ()* TclStubs::tclUnusedStubEntry', at offset 41600 (in bits) at tclDecls.h:2521:1

                                                          1 data member changes (6 filtered):

                                                           type of 'const TclStubHooks* TclStubs::hooks' changed:

                                                             in pointed to type 'const TclStubHooks':

                                                               in unqualified underlying type 'typedef TclStubHooks' at tclDecls.h:1843:1:

                                                                 underlying type 'struct {const TclPlatStubs* tclPlatStubs; const TclIntStubs* tclIntStubs; const TclIntPlatStubs* tclIntPlatStubs;}' at tclDecls.h:1820:1 changed:

                                                                   type size hasn't changed

                                                                   1 data member changes (1 filtered):

                                                                    type of 'const TclIntStubs* tclIntStubs' changed:

                                                                      in pointed to type 'const TclIntStubs':

                                                                        in unqualified underlying type 'struct TclIntStubs' at tclIntDecls.h:645:1:

                                                                          type size changed from 16576 to 16704 (in bits)

                                                                          2 data member insertions:

                                                                            'void ()* TclIntStubs::reserved257', at offset 16576 (in bits) at tclIntDecls.h:906:1

                                                                            'void ()* TclIntStubs::tclUnusedStubEntry', at offset 16640 (in bits) at tclIntDecls.h:907:1

                                                                          no data member changes (26 filtered);



















  [C]'function int TclBN_mp_unsigned_bin_size(mp_int*)' at bn_mp_ubin_size.c:7:1 has some indirect sub-type changes:

    return type changed:

      entity changed from 'int' to compatible type 'typedef size_t' at stddef.h:216:1

        type name changed from 'int' to 'unsigned long int'

        type size changed from 32 to 64 (in bits)

    parameter 1 of type 'mp_int*' changed:

      in pointed to type 'typedef mp_int':

        entity changed from 'typedef mp_int' to 'const mp_int'

        type size hasn't changed





