# Functions changed info

---------------diffs in openldap_libldap-2.4.so.2.10.13_abidiff.out:----------------

Functions changes summary: 0 Removed, 4 Changed (188 filtered out), 0 Added functions

Variables changes summary: 0 Removed, 2 Changed, 0 Added variables



4 functions with some indirect sub-type change:



  [C]'function int ldap_abandon(LDAP*, int)' at abandon.c:99:1 has some indirect sub-type changes:

    parameter 1 of type 'LDAP*' has sub-type changes:

      in pointed to type 'typedef LDAP' at ldap.h:754:1:

        underlying type 'struct ldap' at ldap-int.h:477:1 changed:

          type size hasn't changed

          1 data member change:

           type of 'ldap_common* ldap::ldc' changed:

             in pointed to type 'struct ldap_common' at ldap-int.h:389:1:

               type size changed from 3840 to 3904 (in bits)

               1 data member change:

                type of 'ldapoptions ldap_common::ldc_options' changed:

                  type size changed from 3072 to 3136 (in bits)

                  10 data member changes (4 filtered):

                   type of 'ldaptls ldapoptions::ldo_tls_info' changed:

                     type size changed from 576 to 640 (in bits)

                     1 data member insertion:

                       'char* ldaptls::lt_ecname', at offset 512 (in bits) at ldap-int.h:168:1

                     1 data member change:

                      'int ldaptls::lt_protocol_min' offset changed from 512 to 576 (in bits) (by +64 bits)



                   'int ldapoptions::ldo_tls_mode' offset changed from 2432 to 2496 (in bits) (by +64 bits)

                   'int ldapoptions::ldo_tls_require_cert' offset changed from 2464 to 2528 (in bits) (by +64 bits)

                   'int ldapoptions::ldo_tls_impl' offset changed from 2496 to 2560 (in bits) (by +64 bits)

                   'int ldapoptions::ldo_tls_crlcheck' offset changed from 2528 to 2592 (in bits) (by +64 bits)

                   'char* ldapoptions::ldo_def_sasl_mech' offset changed from 2560 to 2624 (in bits) (by +64 bits)

                   'char* ldapoptions::ldo_def_sasl_realm' offset changed from 2624 to 2688 (in bits) (by +64 bits)

                   'char* ldapoptions::ldo_def_sasl_authcid' offset changed from 2688 to 2752 (in bits) (by +64 bits)

                   'char* ldapoptions::ldo_def_sasl_authzid' offset changed from 2752 to 2816 (in bits) (by +64 bits)

                   'sasl_security_properties ldapoptions::ldo_sasl_secprops' offset changed from 2816 to 2880 (in bits) (by +64 bits)







  [C]'function void ldap_int_initialize_global_options(ldapoptions*, int*)' at init.c:517:1 has some indirect sub-type changes:

    parameter 1 of type 'ldapoptions*' has sub-type changes:

      pointed to type 'struct ldapoptions' changed at ldap-int.h:183:1, as reported earlier



  [C]'function int ldap_int_sasl_config(ldapoptions*, int, const char*)' at cyrus.c:909:1 has some indirect sub-type changes:

    parameter 1 of type 'ldapoptions*' has sub-type changes:

      pointed to type 'struct ldapoptions' changed at ldap-int.h:183:1, as reported earlier



  [C]'function void ldap_int_tls_destroy(ldapoptions*)' at tls2.c:102:1 has some indirect sub-type changes:

    parameter 1 of type 'ldapoptions*' has sub-type changes:

      pointed to type 'struct ldapoptions' changed at ldap-int.h:183:1, as reported earlier





---------------diffs in openldap_libslapi-2.4.so.2.10.13_abidiff.out:----------------

---------------diffs in openldap_libldap_r-2.4.so.2.10.13_abidiff.out:----------------

Functions changes summary: 0 Removed, 4 Changed (188 filtered out), 0 Added functions

Variables changes summary: 0 Removed, 2 Changed, 0 Added variables



4 functions with some indirect sub-type change:



  [C]'function int ldap_abandon(LDAP*, int)' at abandon.c:99:1 has some indirect sub-type changes:

    parameter 1 of type 'LDAP*' has sub-type changes:

      in pointed to type 'typedef LDAP' at ldap.h:754:1:

        underlying type 'struct ldap' at ldap-int.h:477:1 changed:

          type size hasn't changed

          1 data member change:

           type of 'ldap_common* ldap::ldc' changed:

             in pointed to type 'struct ldap_common' at ldap-int.h:389:1:

               type size changed from 6528 to 6592 (in bits)

               7 data member changes:

                type of 'ldapoptions ldap_common::ldc_options' changed:

                  type size changed from 3456 to 3520 (in bits)

                  11 data member changes (4 filtered):

                   type of 'ldaptls ldapoptions::ldo_tls_info' changed:

                     type size changed from 576 to 640 (in bits)

                     1 data member insertion:

                       'char* ldaptls::lt_ecname', at offset 512 (in bits) at ldap-int.h:168:1

                     1 data member change:

                      'int ldaptls::lt_protocol_min' offset changed from 512 to 576 (in bits) (by +64 bits)



                   'int ldapoptions::ldo_tls_mode' offset changed from 2432 to 2496 (in bits) (by +64 bits)

                   'int ldapoptions::ldo_tls_require_cert' offset changed from 2464 to 2528 (in bits) (by +64 bits)

                   'int ldapoptions::ldo_tls_impl' offset changed from 2496 to 2560 (in bits) (by +64 bits)

                   'int ldapoptions::ldo_tls_crlcheck' offset changed from 2528 to 2592 (in bits) (by +64 bits)

                   'char* ldapoptions::ldo_def_sasl_mech' offset changed from 2560 to 2624 (in bits) (by +64 bits)

                   'char* ldapoptions::ldo_def_sasl_realm' offset changed from 2624 to 2688 (in bits) (by +64 bits)

                   'char* ldapoptions::ldo_def_sasl_authcid' offset changed from 2688 to 2752 (in bits) (by +64 bits)

                   'char* ldapoptions::ldo_def_sasl_authzid' offset changed from 2752 to 2816 (in bits) (by +64 bits)

                   'sasl_security_properties ldapoptions::ldo_sasl_secprops' offset changed from 2816 to 2880 (in bits) (by +64 bits)

                   'ldap_pvt_thread_mutex_t ldapoptions::ldo_mutex' offset changed from 3072 to 3136 (in bits) (by +64 bits)



                'ldap_pvt_thread_mutex_t ldap_common::ldc_mutex' offset changed from 4224 to 4288 (in bits) (by +64 bits)

                'ldap_pvt_thread_mutex_t ldap_common::ldc_msgid_mutex' offset changed from 4608 to 4672 (in bits) (by +64 bits)

                'ldap_pvt_thread_mutex_t ldap_common::ldc_conn_mutex' offset changed from 4992 to 5056 (in bits) (by +64 bits)

                'ldap_pvt_thread_mutex_t ldap_common::ldc_req_mutex' offset changed from 5376 to 5440 (in bits) (by +64 bits)

                'ldap_pvt_thread_mutex_t ldap_common::ldc_res_mutex' offset changed from 5760 to 5824 (in bits) (by +64 bits)

                'ldap_pvt_thread_mutex_t ldap_common::ldc_abandon_mutex' offset changed from 6144 to 6208 (in bits) (by +64 bits)





  [C]'function void ldap_int_initialize_global_options(ldapoptions*, int*)' at init.c:517:1 has some indirect sub-type changes:

    parameter 1 of type 'ldapoptions*' has sub-type changes:

      pointed to type 'struct ldapoptions' changed at ldap-int.h:183:1, as reported earlier



  [C]'function int ldap_int_sasl_config(ldapoptions*, int, const char*)' at cyrus.c:909:1 has some indirect sub-type changes:

    parameter 1 of type 'ldapoptions*' has sub-type changes:

      pointed to type 'struct ldapoptions' changed at ldap-int.h:183:1, as reported earlier



  [C]'function void ldap_int_tls_destroy(ldapoptions*)' at tls2.c:102:1 has some indirect sub-type changes:

    parameter 1 of type 'ldapoptions*' has sub-type changes:

      pointed to type 'struct ldapoptions' changed at ldap-int.h:183:1, as reported earlier





---------------diffs in openldap_liblber-2.4.so.2.10.13_abidiff.out:----------------

