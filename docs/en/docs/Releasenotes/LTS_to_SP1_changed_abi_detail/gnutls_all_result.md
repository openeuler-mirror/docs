# Functions changed info

---------------diffs in gnutls_libgnutlsxx.so.28.1.0_abidiff.out:----------------

Functions changes summary: 0 Removed, 1 Changed (3 filtered out), 0 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



1 function with some indirect sub-type change:



  [C]'method void gnutls::certificate_credentials::set_retrieve_function(gnutls_certificate_retrieve_function*)' at gnutlsxx.cpp:735:1 has some indirect sub-type changes:

    parameter 1 of type 'gnutls_certificate_retrieve_function*' has sub-type changes:

      in pointed to type 'typedef gnutls_certificate_retrieve_function' at gnutls.h:2791:1:

        underlying type 'function type int (typedef gnutls_session_t, const gnutls_datum_t*, int, const gnutls_pk_algorithm_t*, int, gnutls_retr2_st*)' changed:

          parameter 4 of type 'const gnutls_pk_algorithm_t*' has sub-type changes:

            in pointed to type 'const gnutls_pk_algorithm_t':

              in unqualified underlying type 'typedef gnutls_pk_algorithm_t' at gnutls.h:881:1:

                underlying type 'enum __anonymous_enum__' at gnutls.h:833:1 changed:

                  type size hasn't changed

                  2 enumerator insertions:

                    '__anonymous_enum__::GNUTLS_PK_ECDH_X448' value '11'

                    '__anonymous_enum__::GNUTLS_PK_EDDSA_ED448' value '12'



                  1 enumerator change:

                    '__anonymous_enum__::GNUTLS_PK_MAX' from value '10' to '12' at gnutls.h:866:1







---------------diffs in gnutls_libgnutls.so.30.28.0_abidiff.out:----------------

Functions changes summary: 0 Removed, 34 Changed (580 filtered out), 23 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



23 Added functions:



  'function void _gnutls_buffer_clear(gnutls_buffer_st*)'    {_gnutls_buffer_clear@@GNUTLS_PRIVATE_3_4}

  'function void _gnutls_buffer_pop_datum(gnutls_buffer_st*, gnutls_datum_t*, size_t)'    {_gnutls_buffer_pop_datum@@GNUTLS_PRIVATE_3_4}

  'function int _gnutls_buffer_unescape(gnutls_buffer_st*)'    {_gnutls_buffer_unescape@@GNUTLS_PRIVATE_3_4}

  'function int _gnutls_iov_iter_init(iov_iter_st*, const giovec_t*, size_t, size_t)'    {_gnutls_iov_iter_init@@GNUTLS_PRIVATE_3_4}

  'function ssize_t _gnutls_iov_iter_next(iov_iter_st*, uint8_t**)'    {_gnutls_iov_iter_next@@GNUTLS_PRIVATE_3_4}

  'function int _gnutls_iov_iter_sync(iov_iter_st*, const uint8_t*, size_t)'    {_gnutls_iov_iter_sync@@GNUTLS_PRIVATE_3_4}

  'function int gnutls_aead_cipher_decryptv2(gnutls_aead_cipher_hd_t, void*, size_t, const giovec_t*, int, const giovec_t*, int, void*, size_t)'    {gnutls_aead_cipher_decryptv2@@GNUTLS_3_6_10}

  'function int gnutls_aead_cipher_encryptv2(gnutls_aead_cipher_hd_t, void*, size_t, const giovec_t*, int, const giovec_t*, int, void*, size_t*)'    {gnutls_aead_cipher_encryptv2@@GNUTLS_3_6_10}

  'function gnutls_certificate_verification_profiles_t gnutls_certificate_verification_profile_get_id(const char*)'    {gnutls_certificate_verification_profile_get_id@@GNUTLS_3_6_12}

  'function const char* gnutls_certificate_verification_profile_get_name(gnutls_certificate_verification_profiles_t)'    {gnutls_certificate_verification_profile_get_name@@GNUTLS_3_6_12}

  'function const char* gnutls_ext_get_name2(gnutls_session_t, unsigned int, gnutls_ext_parse_type_t)'    {gnutls_ext_get_name2@@GNUTLS_3_6_14}

  'function int gnutls_hkdf_expand(gnutls_mac_algorithm_t, const gnutls_datum_t*, const gnutls_datum_t*, void*, size_t)'    {gnutls_hkdf_expand@@GNUTLS_3_6_13}

  'function int gnutls_hkdf_extract(gnutls_mac_algorithm_t, const gnutls_datum_t*, const gnutls_datum_t*, void*)'    {gnutls_hkdf_extract@@GNUTLS_3_6_13}

  'function unsigned int gnutls_hmac_get_key_size(gnutls_mac_algorithm_t)'    {gnutls_hmac_get_key_size@@GNUTLS_3_6_12}

  'function int gnutls_pbkdf2(gnutls_mac_algorithm_t, const gnutls_datum_t*, const gnutls_datum_t*, unsigned int, void*, size_t)'    {gnutls_pbkdf2@@GNUTLS_3_6_13}

  'function int gnutls_pkcs7_print_signature_info(gnutls_pkcs7_signature_info_st*, gnutls_certificate_print_formats_t, gnutls_datum_t*)'    {gnutls_pkcs7_print_signature_info@@GNUTLS_3_6_14}

  'function gnutls_digest_algorithm_t gnutls_prf_hash_get(const gnutls_session_t)'    {gnutls_prf_hash_get@@GNUTLS_3_6_13}

  'function int gnutls_psk_server_get_username2(gnutls_session_t, gnutls_datum_t*)'    {gnutls_psk_server_get_username2@@GNUTLS_3_6_13}

  'function int gnutls_psk_set_client_credentials2(gnutls_psk_client_credentials_t, const gnutls_datum_t*, const gnutls_datum_t*, gnutls_psk_key_flags)'    {gnutls_psk_set_client_credentials2@@GNUTLS_3_6_13}

  'function void gnutls_psk_set_client_credentials_function2(gnutls_psk_client_credentials_t, gnutls_psk_client_credentials_function2*)'    {gnutls_psk_set_client_credentials_function2@@GNUTLS_3_6_13}

  'function void gnutls_psk_set_server_credentials_function2(gnutls_psk_server_credentials_t, gnutls_psk_server_credentials_function2*)'    {gnutls_psk_set_server_credentials_function2@@GNUTLS_3_6_13}

  'function gnutls_keylog_func gnutls_session_get_keylog_function(const gnutls_session_t)'    {gnutls_session_get_keylog_function@@GNUTLS_3_6_13}

  'function void gnutls_session_set_keylog_function(gnutls_session_t, gnutls_keylog_func)'    {gnutls_session_set_keylog_function@@GNUTLS_3_6_13}



34 functions with some indirect sub-type change:



  [C]'function int _gnutls13_psk_ext_iter_next_binder(psk_ext_iter_st*, gnutls_datum_t*)' at psk_ext_parser.c:94:1 has some indirect sub-type changes:

    parameter 1 of type 'psk_ext_iter_st*' has sub-type changes:

      in pointed to type 'typedef psk_ext_iter_st' at psk_ext_parser.h:35:1:

        underlying type 'struct psk_ext_parser_st' at psk_ext_parser.h:26:1 changed:

          type size hasn't changed

          2 data member changes:



           type of 'ssize_t psk_ext_parser_st::binders_len' changed:

             typedef name changed from ssize_t to size_t at stddef.h:216:1

             underlying type 'typedef __ssize_t' at types.h:191:1 changed:

               entity changed from 'typedef __ssize_t' to compatible type 'unsigned long int'

                 type name changed from 'long int' to 'unsigned long int'

                 type size hasn't changed







  [C]'function int _gnutls_cipher_get_iv(gnutls_cipher_hd_t, void*, size_t)' at crypto-api.c:192:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef gnutls_cipher_hd_t' has sub-type changes:

      underlying type 'api_cipher_hd_st*' changed:

        in pointed to type 'struct api_cipher_hd_st' at crypto-api.c:36:1:

          type size hasn't changed

          1 data member changes (1 filtered):

           type of 'cipher_hd_st api_cipher_hd_st::ctx_dec' changed:

             underlying type 'struct {void* handle; const cipher_entry_st* e; cipher_encrypt_func encrypt; cipher_decrypt_func decrypt; aead_cipher_encrypt_func aead_encrypt; aead_cipher_decrypt_func aead_decrypt; cipher_auth_func auth; cipher_tag_func tag; cipher_setiv_func setiv; cipher_getiv_func getiv; cipher_deinit_func deinit;}' at cipher_int.h:57:1 changed:

               type size hasn't changed

               1 data member change:

                type of 'const cipher_entry_st* e' changed:

                  in pointed to type 'const cipher_entry_st':

                    in unqualified underlying type 'typedef cipher_entry_st' at gnutls_int.h:636:1:

                      underlying type 'struct cipher_entry_st' at gnutls_int.h:648:1 changed:

                        type size hasn't changed

                        2 data member deletions:

                          'bool cipher_entry_st::only_aead', at offset 232 (in bits) at gnutls_int.h:659:1



                          'bool cipher_entry_st::no_rekey', at offset 240 (in bits) at gnutls_int.h:660:1



                        no data member change (1 filtered);

                        1 data member change:

                         type of 'bool cipher_entry_st::xor_nonce' changed:

                           type name changed from 'bool' to 'unsigned int'

                           type size changed from 8 to 32 (in bits)

                         and name of 'cipher_entry_st::xor_nonce' changed to 'cipher_entry_st::flags' at gnutls_int.h:635:1







  [C]'function unsigned int _gnutls_ecc_curve_is_supported(gnutls_ecc_curve_t)' at ecc.c:295:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef gnutls_ecc_curve_t' has sub-type changes:

      underlying type 'enum __anonymous_enum__' at gnutls.h:988:1 changed:

        type size hasn't changed

        7 enumerator insertions:

          '__anonymous_enum__::GNUTLS_ECC_CURVE_GOST512C' value '15'

          '__anonymous_enum__::GNUTLS_ECC_CURVE_GOST256A' value '16'

          '__anonymous_enum__::GNUTLS_ECC_CURVE_GOST256B' value '17'

          '__anonymous_enum__::GNUTLS_ECC_CURVE_GOST256C' value '18'

          '__anonymous_enum__::GNUTLS_ECC_CURVE_GOST256D' value '19'

          '__anonymous_enum__::GNUTLS_ECC_CURVE_X448' value '20'

          '__anonymous_enum__::GNUTLS_ECC_CURVE_ED448' value '21'



        1 enumerator change:

          '__anonymous_enum__::GNUTLS_ECC_CURVE_MAX' from value '14' to '21' at gnutls.h:1032:1





  [C]'function void _gnutls_hello_set_default_version(gnutls_session_t, unsigned char, unsigned char)' at state.c:937:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef gnutls_session_t' has sub-type changes:

      underlying type 'gnutls_session_int*' changed:

        in pointed to type 'struct gnutls_session_int' at gnutls_int.h:1497:1:

          type size changed from 52416 to 59008 (in bits)

          1 data member changes (3 filtered):

           type of 'internals_st gnutls_session_int::internals' changed:

             underlying type 'struct {mbuffer_head_st record_buffer; int handshake_hash_buffer_prev_len; unsigned int handshake_hash_buffer_client_hello_len; unsigned int handshake_hash_buffer_client_kx_len; unsigned int handshake_hash_buffer_server_finished_len; unsigned int handshake_hash_buffer_client_finished_len; gnutls_buffer_st handshake_hash_buffer; bool resumable; send_ticket_state_t ticket_state; bye_state_t bye_state; reauth_state_t reauth_state; handshake_state_t handshake_final_state; handshake_state_t handshake_state; bool invalid_connection; bool may_not_read; bool may_not_write; bool read_eof; int last_alert; int last_handshake_in; int last_handshake_out; gnutls_priority_st* priorities; bool allow_large_records; bool allow_small_records; bool no_etm; bool no_ext_master_secret; bool allow_key_usage_violation; bool allow_wrong_pms; bool dumbfw; uint16_t dh_prime_bits; bool resumed; bool resumption_requested; security_parameters_st resumed_security_parameters; gnutls_datum_t resumption_data; mbuffer_head_st handshake_send_buffer; mbuffer_head_st handshake_header_recv_buffer; handshake_buffer_st handshake_recv_buffer[6]; int handshake_recv_buffer_size; mbuffer_head_st record_recv_buffer; mbuffer_head_st record_send_buffer; size_t record_send_buffer_user_size; mbuffer_head_st early_data_recv_buffer; gnutls_buffer_st early_data_presend_buffer; record_send_state_t rsend_state; gnutls_buffer_st record_key_update_buffer; gnutls_buffer_st record_presend_buffer; gnutls_buffer_st reauth_buffer; time_t expire_time; const mod_auth_st_int* auth_struct; uint8_t adv_version_major; uint8_t adv_version_minor; gnutls_certificate_request_t send_cert_req; size_t max_handshake_data_buffer_size; gnutls_pull_timeout_func pull_timeout_func; gnutls_pull_func pull_func; gnutls_push_func push_func; gnutls_vec_push_func vec_push_func; gnutls_errno_func errno_func; gnutls_transport_ptr_t transport_recv_ptr; gnutls_transport_ptr_t transport_send_ptr; gnutls_db_store_func db_store_func; gnutls_db_retr_func db_retrieve_func; gnutls_db_remove_func db_remove_func; void* db_ptr; gnutls_handshake_simple_hook_func user_hello_func; gnutls_handshake_hook_func h_hook; unsigned int h_type; int16_t h_post; gnutls_pcert_st* selected_cert_list; uint16_t selected_cert_list_length; gnutls_privkey_st* selected_key; gnutls_ocsp_data_st* selected_ocsp; uint16_t selected_ocsp_length; gnutls_status_request_ocsp_func selected_ocsp_func; void* selected_ocsp_func_ptr; bool selected_need_free; uint8_t default_record_version[2]; uint8_t default_hello_version[2]; void* user_ptr; bool direction; bool ignore_rdn_sequence; uint8_t rsa_pms_version[2]; int errnum; bool initial_negotiation_completed; void* post_negotiation_lock; transport_t transport; dtls_st dtls; unsigned int handshake_suspicious_loops; bool handshake_in_progress; bool premaster_set; unsigned int cb_tls_unique_len; unsigned char cb_tls_unique[36]; timespec handshake_start_time; timespec handshake_abs_timeout; unsigned int ertt; unsigned int handshake_timeout_ms; unsigned int record_timeout_ms; gnutls_datum_t post_handshake_cr_context; gnutls_buffer_st post_handshake_hash_buffer; unsigned int hsk_flags; timespec last_key_update; unsigned int key_update_count; gnutls_buffer_st full_client_hello; int extensions_offset; gnutls_buffer_st hb_local_data; gnutls_buffer_st hb_remote_data; timespec hb_ping_start; timespec hb_ping_sent; unsigned int hb_actual_retrans_timeout_ms; unsigned int hb_retrans_timeout_ms; unsigned int hb_total_timeout_ms; bool ocsp_check_ok; heartbeat_state_t hb_state; recv_state_t recv_state; bool sc_random_set; uint64_t flags; gnutls_certificate_verify_function* verify_callback; gnutls_typed_vdata_st* vc_data; gnutls_typed_vdata_st vc_sdata; unsigned int vc_elements; unsigned int vc_status; unsigned int additional_verify_flags; uint8_t cert_hash[32]; bool cert_hash_set; char saved_username[129]; bool saved_username_set; tfo_st tfo; gnutls_supplemental_entry_st* rsup; unsigned int rsup_size; hello_ext_entry_st* rexts; unsigned int rexts_size; __anonymous_struct__ ext_data[32]; uint32_t used_exts; gnutls_ext_flags_t ext_msg; unsigned int max_recv_size; const gnutls_group_entry_st* cand_ec_group; const gnutls_group_entry_st* cand_dh_group; const gnutls_group_entry_st* cand_group; uint8_t hrr_cs[2]; int session_ticket_renew; tls13_ticket_st tls13_ticket; uint32_t early_data_received; gnutls_anti_replay_t anti_replay; void* epoch_lock;}' at gnutls_int.h:1094:1 changed:

               type size changed from 27776 to 34048 (in bits)

               1 data member deletion:

                 'bool saved_username_set', at offset 16432 (in bits) at gnutls_int.h:1448:1



               2 data member insertions:

                 'gnutls_keylog_func keylog_func', at offset 10496 (in bits) at gnutls_int.h:1230:1

                 'int saved_username_size', at offset 16512 (in bits) at gnutls_int.h:1431:1

               4 data member changes (82 filtered):

                type of 'const mod_auth_st_int* auth_struct' changed:

                  in pointed to type 'const mod_auth_st_int':

                    in unqualified underlying type 'struct mod_auth_st_int' at auth.h:28:1:

                      type size hasn't changed

                      1 data member changes (11 filtered):

                       type of 'int (typedef gnutls_session_t, gnutls_buffer_st*)* mod_auth_st_int::gnutls_generate_client_certificate' changed:

                         in pointed to type 'function type int (typedef gnutls_session_t, gnutls_buffer_st*)':

                           parameter 1 of type 'typedef gnutls_session_t' has sub-type changes:

                             underlying type 'gnutls_session_int*' changed:

                               in pointed to type 'struct gnutls_session_int' at gnutls_int.h:1497:1:

                                 type size changed from 52416 to 59008 (in bits)

                                 3 data member changes (1 filtered):

                                  type of 'record_parameters_st* gnutls_session_int::record_parameters[4]' changed:

                                    array element type 'record_parameters_st*' changed: 

                                      in pointed to type 'typedef record_parameters_st' at gnutls_int.h:618:1:

                                        underlying type 'struct record_parameters_st' at gnutls_int.h:887:1 changed:

                                          type size hasn't changed

                                          2 data member changes (2 filtered):

                                           type of 'record_state_st record_parameters_st::read' changed:

                                             underlying type 'struct record_state_st' at gnutls_int.h:858:1 changed:

                                               type size hasn't changed

                                               2 data member changes:

                                                type of 'union {auth_cipher_hd_st tls12; api_aead_cipher_hd_st aead;} record_state_st::ctx' changed:

                                                  type size hasn't changed

                                                  1 data member changes (1 filtered):

                                                   type of 'auth_cipher_hd_st tls12' changed:

                                                     underlying type 'struct {cipher_hd_st cipher; union {digest_hd_st dig; mac_hd_st mac;} mac; unsigned int is_mac; unsigned int non_null; unsigned int etm; size_t tag_size;}' at cipher_int.h:204:1 changed:

                                                       type size hasn't changed

                                                       1 data member insertion:

                                                         'unsigned int continuous_mac', at offset 30 (in bits) at cipher_int.h:215:1

                                                       2 data member changes (2 filtered):

                                                        'unsigned int etm' offset changed from 29 to 28 (in bits) (by -1 bits)

                                                        'unsigned int non_null' offset changed from 30 to 29 (in bits) (by -1 bits)





                                                type of 'gnutls_uint64 record_state_st::sequence_number' changed:

                                                  typedef name changed from gnutls_uint64 to uint64_t at stdint-uintn.h:27:1

                                                  underlying type 'struct {unsigned char i[8];}' at gnutls_int.h:103:1 changed:

                                                    entity changed from 'struct {unsigned char i[8];}' to 'typedef __uint64_t' at types.h:44:1

                                                    type size hasn't changed







                                    type size hasn't changed



                                  type of 'internals_st gnutls_session_int::internals' changed:

                                    underlying type 'struct {mbuffer_head_st record_buffer; int handshake_hash_buffer_prev_len; unsigned int handshake_hash_buffer_client_hello_len; unsigned int handshake_hash_buffer_client_kx_len; unsigned int handshake_hash_buffer_server_finished_len; unsigned int handshake_hash_buffer_client_finished_len; gnutls_buffer_st handshake_hash_buffer; bool resumable; send_ticket_state_t ticket_state; bye_state_t bye_state; reauth_state_t reauth_state; handshake_state_t handshake_final_state; handshake_state_t handshake_state; bool invalid_connection; bool may_not_read; bool may_not_write; bool read_eof; int last_alert; int last_handshake_in; int last_handshake_out; gnutls_priority_st* priorities; bool allow_large_records; bool allow_small_records; bool no_etm; bool no_ext_master_secret; bool allow_key_usage_violation; bool allow_wrong_pms; bool dumbfw; uint16_t dh_prime_bits; bool resumed; bool resumption_requested; security_parameters_st resumed_security_parameters; gnutls_datum_t resumption_data; mbuffer_head_st handshake_send_buffer; mbuffer_head_st handshake_header_recv_buffer; handshake_buffer_st handshake_recv_buffer[6]; int handshake_recv_buffer_size; mbuffer_head_st record_recv_buffer; mbuffer_head_st record_send_buffer; size_t record_send_buffer_user_size; mbuffer_head_st early_data_recv_buffer; gnutls_buffer_st early_data_presend_buffer; record_send_state_t rsend_state; gnutls_buffer_st record_key_update_buffer; gnutls_buffer_st record_presend_buffer; gnutls_buffer_st reauth_buffer; time_t expire_time; const mod_auth_st_int* auth_struct; uint8_t adv_version_major; uint8_t adv_version_minor; gnutls_certificate_request_t send_cert_req; size_t max_handshake_data_buffer_size; gnutls_pull_timeout_func pull_timeout_func; gnutls_pull_func pull_func; gnutls_push_func push_func; gnutls_vec_push_func vec_push_func; gnutls_errno_func errno_func; gnutls_transport_ptr_t transport_recv_ptr; gnutls_transport_ptr_t transport_send_ptr; gnutls_db_store_func db_store_func; gnutls_db_retr_func db_retrieve_func; gnutls_db_remove_func db_remove_func; void* db_ptr; gnutls_handshake_simple_hook_func user_hello_func; gnutls_handshake_hook_func h_hook; unsigned int h_type; int16_t h_post; gnutls_pcert_st* selected_cert_list; uint16_t selected_cert_list_length; gnutls_privkey_st* selected_key; gnutls_ocsp_data_st* selected_ocsp; uint16_t selected_ocsp_length; gnutls_status_request_ocsp_func selected_ocsp_func; void* selected_ocsp_func_ptr; bool selected_need_free; uint8_t default_record_version[2]; uint8_t default_hello_version[2]; void* user_ptr; bool direction; bool ignore_rdn_sequence; uint8_t rsa_pms_version[2]; int errnum; bool initial_negotiation_completed; void* post_negotiation_lock; transport_t transport; dtls_st dtls; unsigned int handshake_suspicious_loops; bool handshake_in_progress; bool premaster_set; unsigned int cb_tls_unique_len; unsigned char cb_tls_unique[36]; timespec handshake_start_time; timespec handshake_abs_timeout; unsigned int ertt; unsigned int handshake_timeout_ms; unsigned int record_timeout_ms; gnutls_datum_t post_handshake_cr_context; gnutls_buffer_st post_handshake_hash_buffer; unsigned int hsk_flags; timespec last_key_update; unsigned int key_update_count; gnutls_buffer_st full_client_hello; int extensions_offset; gnutls_buffer_st hb_local_data; gnutls_buffer_st hb_remote_data; timespec hb_ping_start; timespec hb_ping_sent; unsigned int hb_actual_retrans_timeout_ms; unsigned int hb_retrans_timeout_ms; unsigned int hb_total_timeout_ms; bool ocsp_check_ok; heartbeat_state_t hb_state; recv_state_t recv_state; bool sc_random_set; uint64_t flags; gnutls_certificate_verify_function* verify_callback; gnutls_typed_vdata_st* vc_data; gnutls_typed_vdata_st vc_sdata; unsigned int vc_elements; unsigned int vc_status; unsigned int additional_verify_flags; uint8_t cert_hash[32]; bool cert_hash_set; char saved_username[129]; bool saved_username_set; tfo_st tfo; gnutls_supplemental_entry_st* rsup; unsigned int rsup_size; hello_ext_entry_st* rexts; unsigned int rexts_size; __anonymous_struct__ ext_data[32]; uint32_t used_exts; gnutls_ext_flags_t ext_msg; unsigned int max_recv_size; const gnutls_group_entry_st* cand_ec_group; const gnutls_group_entry_st* cand_dh_group; const gnutls_group_entry_st* cand_group; uint8_t hrr_cs[2]; int session_ticket_renew; tls13_ticket_st tls13_ticket; uint32_t early_data_received; gnutls_anti_replay_t anti_replay; void* epoch_lock;}' at gnutls_int.h:1094:1 changed:

                                      type size changed from 27776 to 34048 (in bits)

                                      1 data member deletion:

                                        'bool saved_username_set', at offset 16432 (in bits) at gnutls_int.h:1448:1



                                      2 data member insertions:

                                        'gnutls_keylog_func keylog_func', at offset 10496 (in bits) at gnutls_int.h:1230:1

                                        'int saved_username_size', at offset 16512 (in bits) at gnutls_int.h:1431:1

                                      76 data member changes (10 filtered):

                                       type of 'gnutls_priority_st* priorities' changed:

                                         in pointed to type 'struct gnutls_priority_st' at gnutls_int.h:921:1:

                                           type size hasn't changed

                                           1 data member changes (2 filtered):

                                            type of 'sign_algo_list_st gnutls_priority_st::sigalg' changed:

                                              underlying type 'struct sign_algo_list_st' at gnutls_int.h:935:1 changed:

                                                type size hasn't changed

                                                1 data member change:

                                                 type of 'const gnutls_sign_entry_st* sign_algo_list_st::entry[64]' changed:

                                                   array element type 'const gnutls_sign_entry_st*' changed: 

                                                     in pointed to type 'const gnutls_sign_entry_st':

                                                       in unqualified underlying type 'struct gnutls_sign_entry_st' at algorithms.h:344:1:

                                                         type size hasn't changed

                                                         1 data member insertion:

                                                           'unsigned int gnutls_sign_entry_st::hash_output_size', at offset 416 (in bits) at algorithms.h:373:1

                                                         1 data member changes (5 filtered):

                                                          type of 'gnutls_sign_algorithm_t gnutls_sign_entry_st::id' changed:

                                                            underlying type 'enum __anonymous_enum__' at gnutls.h:912:1 changed:

                                                              type size hasn't changed

                                                              1 enumerator insertion:

                                                                '__anonymous_enum__::GNUTLS_SIGN_EDDSA_ED448' value '46'



                                                              1 enumerator change:

                                                                '__anonymous_enum__::GNUTLS_SIGN_MAX' from value '45' to '46' at gnutls.h:948:1





                                                         no data member change (1 filtered);

                                                   type size hasn't changed







                                       type of 'security_parameters_st resumed_security_parameters' changed:

                                         underlying type 'struct {unsigned int entity; uint16_t epoch_read; uint16_t epoch_write; uint16_t epoch_next; uint16_t epoch_min; const gnutls_cipher_suite_entry_st* cs; const mac_entry_st* prf; uint8_t master_secret[48]; uint8_t client_random[32]; uint8_t server_random[32]; uint8_t session_id[32]; uint8_t session_id_size; time_t timestamp; uint8_t post_handshake_auth; uint16_t max_record_send_size; uint16_t max_record_recv_size; uint16_t max_user_record_send_size; uint16_t max_user_record_recv_size; uint32_t max_early_data_size; gnutls_certificate_type_t client_ctype; gnutls_certificate_type_t server_ctype; const gnutls_group_entry_st* grp; gnutls_sign_algorithm_t server_sign_algo; gnutls_sign_algorithm_t client_sign_algo; uint8_t ext_master_secret; uint8_t etm; uint8_t client_auth_type; uint8_t server_auth_type; int do_recv_supplemental; int do_send_supplemental; const version_entry_st* pversion;}' at gnutls_int.h:769:1 changed:

                                           type size hasn't changed

                                           1 data member changes (5 filtered):

                                            type of 'const version_entry_st* pversion' changed:

                                              in pointed to type 'const version_entry_st':

                                                in unqualified underlying type 'typedef version_entry_st' at gnutls_int.h:713:1:

                                                  underlying type 'struct {const char* name; gnutls_protocol_t id; unsigned int age; uint8_t major; uint8_t minor; transport_t transport; bool supported; bool explicit_iv; bool extensions; bool selectable_sighash; bool selectable_prf; bool obsolete; bool tls13_sem; bool false_start; bool only_extension; bool post_handshake_auth; bool key_shares; uint8_t tls_sig_sem;}' at gnutls_int.h:708:1 changed:

                                                    type size hasn't changed

                                                    1 data member insertion:

                                                      'bool multi_ocsp', at offset 280 (in bits) at gnutls_int.h:706:1

                                                    1 data member change:

                                                     'uint8_t tls_sig_sem' offset changed from 280 to 288 (in bits) (by +8 bits)





                                       type of 'mbuffer_head_st early_data_recv_buffer' changed:

                                         underlying type 'struct mbuffer_head_st' at gnutls_int.h:478:1 changed:

                                           type size hasn't changed

                                           1 data member changes (1 filtered):

                                            type of 'mbuffer_st* mbuffer_head_st::head' changed:

                                              in pointed to type 'struct mbuffer_st' at gnutls_int.h:410:1:

                                                type size hasn't changed

                                                1 data member changes (2 filtered):

                                                 type of 'gnutls_uint64 mbuffer_st::record_sequence' changed:

                                                   details were reported earlier







                                       type of 'gnutls_pcert_st* selected_cert_list' changed:

                                         in pointed to type 'typedef gnutls_pcert_st' at abstract.h:651:1:

                                           underlying type 'struct gnutls_pcert_st' at abstract.h:641:1 changed:

                                             type size hasn't changed

                                             1 data member change:

                                              type of 'gnutls_pubkey_t gnutls_pcert_st::pubkey' changed:

                                                underlying type 'gnutls_pubkey_st*' changed:

                                                  in pointed to type 'struct gnutls_pubkey_st' at abstract_int.h:54:1:

                                                    type size changed from 4032 to 4096 (in bits)

                                                    3 data member changes:

                                                     type of 'gnutls_pk_params_st gnutls_pubkey_st::params' changed:

                                                       underlying type 'struct {bigint_t params[16]; unsigned int params_nr; unsigned int pkflags; unsigned int qbits; gnutls_ecc_curve_t curve; gnutls_group_t dh_group; gnutls_gost_paramset_t gost_params; gnutls_datum_t raw_pub; gnutls_datum_t raw_priv; unsigned int seed_size; uint8_t seed[256]; gnutls_digest_algorithm_t palgo; gnutls_x509_spki_st spki; gnutls_pk_algorithm_t algo;}' at crypto-backend.h:194:1 changed:

                                                         type size changed from 3776 to 3840 (in bits)

                                                         2 data member changes (3 filtered):

                                                          type of 'gnutls_x509_spki_st spki' changed:

                                                            underlying type 'struct gnutls_x509_spki_st' at crypto-backend.h:175:1 changed:

                                                              type size changed from 128 to 192 (in bits)

                                                              2 data member insertions:

                                                                'gnutls_digest_algorithm_t gnutls_x509_spki_st::dsa_dig', at offset 128 (in bits) at crypto-backend.h:208:1

                                                                'unsigned int gnutls_x509_spki_st::flags', at offset 160 (in bits) at crypto-backend.h:212:1

                                                              no data member changes (2 filtered);



                                                          'gnutls_pk_algorithm_t algo' offset changed from 3712 to 3776 (in bits) (by +64 bits)



                                                     'unsigned int gnutls_pubkey_st::key_usage' offset changed from 3840 to 3904 (in bits) (by +64 bits)

                                                     'pin_info_st gnutls_pubkey_st::pin' offset changed from 3904 to 3968 (in bits) (by +64 bits)



                                       and offset changed from 10496 to 10560 (in bits) (by +64 bits)

                                       'uint16_t selected_cert_list_length' offset changed from 10560 to 10624 (in bits) (by +64 bits)

                                       'gnutls_privkey_st* selected_key' offset changed from 10624 to 10688 (in bits) (by +64 bits)

                                       'gnutls_ocsp_data_st* selected_ocsp' offset changed from 10688 to 10752 (in bits) (by +64 bits)

                                       'uint16_t selected_ocsp_length' offset changed from 10752 to 10816 (in bits) (by +64 bits)

                                       'gnutls_status_request_ocsp_func selected_ocsp_func' offset changed from 10816 to 10880 (in bits) (by +64 bits)

                                       'void* selected_ocsp_func_ptr' offset changed from 10880 to 10944 (in bits) (by +64 bits)

                                       'bool selected_need_free' offset changed from 10944 to 11008 (in bits) (by +64 bits)

                                       'uint8_t default_record_version[2]' offset changed from 10952 to 11016 (in bits) (by +64 bits)

                                       'uint8_t default_hello_version[2]' offset changed from 10968 to 11032 (in bits) (by +64 bits)

                                       'void* user_ptr' offset changed from 11008 to 11072 (in bits) (by +64 bits)

                                       'bool direction' offset changed from 11072 to 11136 (in bits) (by +64 bits)

                                       'bool ignore_rdn_sequence' offset changed from 11080 to 11144 (in bits) (by +64 bits)

                                       'uint8_t rsa_pms_version[2]' offset changed from 11088 to 11152 (in bits) (by +64 bits)

                                       'int errnum' offset changed from 11104 to 11168 (in bits) (by +64 bits)

                                       'bool initial_negotiation_completed' offset changed from 11136 to 11200 (in bits) (by +64 bits)

                                       'void* post_negotiation_lock' offset changed from 11200 to 11264 (in bits) (by +64 bits)

                                       'transport_t transport' offset changed from 11264 to 11328 (in bits) (by +64 bits)

                                       'dtls_st dtls' offset changed from 11328 to 11392 (in bits) (by +64 bits)

                                       'unsigned int handshake_suspicious_loops' offset changed from 11904 to 11968 (in bits) (by +64 bits)

                                       'bool handshake_in_progress' offset changed from 11936 to 12000 (in bits) (by +64 bits)

                                       'bool premaster_set' offset changed from 11944 to 12008 (in bits) (by +64 bits)

                                       'unsigned int cb_tls_unique_len' offset changed from 11968 to 12032 (in bits) (by +64 bits)

                                       'unsigned char cb_tls_unique[36]' offset changed from 12000 to 12064 (in bits) (by +64 bits)

                                       'timespec handshake_start_time' offset changed from 12288 to 12352 (in bits) (by +64 bits)

                                       'timespec handshake_abs_timeout' offset changed from 12416 to 12480 (in bits) (by +64 bits)

                                       'unsigned int ertt' offset changed from 12544 to 12608 (in bits) (by +64 bits)

                                       'unsigned int handshake_timeout_ms' offset changed from 12576 to 12640 (in bits) (by +64 bits)

                                       'unsigned int record_timeout_ms' offset changed from 12608 to 12672 (in bits) (by +64 bits)

                                       'gnutls_datum_t post_handshake_cr_context' offset changed from 12672 to 12736 (in bits) (by +64 bits)

                                       'gnutls_buffer_st post_handshake_hash_buffer' offset changed from 12800 to 12864 (in bits) (by +64 bits)

                                       'unsigned int hsk_flags' offset changed from 13056 to 13120 (in bits) (by +64 bits)

                                       'timespec last_key_update' offset changed from 13120 to 13184 (in bits) (by +64 bits)

                                       'unsigned int key_update_count' offset changed from 13248 to 13312 (in bits) (by +64 bits)

                                       'gnutls_buffer_st full_client_hello' offset changed from 13312 to 13376 (in bits) (by +64 bits)

                                       'int extensions_offset' offset changed from 13568 to 13632 (in bits) (by +64 bits)

                                       'gnutls_buffer_st hb_local_data' offset changed from 13632 to 13696 (in bits) (by +64 bits)

                                       'gnutls_buffer_st hb_remote_data' offset changed from 13888 to 13952 (in bits) (by +64 bits)

                                       'timespec hb_ping_start' offset changed from 14144 to 14208 (in bits) (by +64 bits)

                                       'timespec hb_ping_sent' offset changed from 14272 to 14336 (in bits) (by +64 bits)

                                       'unsigned int hb_actual_retrans_timeout_ms' offset changed from 14400 to 14464 (in bits) (by +64 bits)

                                       'unsigned int hb_retrans_timeout_ms' offset changed from 14432 to 14496 (in bits) (by +64 bits)

                                       'unsigned int hb_total_timeout_ms' offset changed from 14464 to 14528 (in bits) (by +64 bits)

                                       'bool ocsp_check_ok' offset changed from 14496 to 14560 (in bits) (by +64 bits)

                                       'heartbeat_state_t hb_state' offset changed from 14528 to 14592 (in bits) (by +64 bits)

                                       'recv_state_t recv_state' offset changed from 14560 to 14624 (in bits) (by +64 bits)

                                       'bool sc_random_set' offset changed from 14592 to 14656 (in bits) (by +64 bits)

                                       'uint64_t flags' offset changed from 14656 to 14720 (in bits) (by +64 bits)

                                       'gnutls_certificate_verify_function* verify_callback' offset changed from 14720 to 14784 (in bits) (by +64 bits)

                                       'gnutls_typed_vdata_st* vc_data' offset changed from 14784 to 14848 (in bits) (by +64 bits)

                                       'gnutls_typed_vdata_st vc_sdata' offset changed from 14848 to 14912 (in bits) (by +64 bits)

                                       'unsigned int vc_elements' offset changed from 15040 to 15104 (in bits) (by +64 bits)

                                       'unsigned int vc_status' offset changed from 15072 to 15136 (in bits) (by +64 bits)

                                       'uint8_t cert_hash[32]' offset changed from 15136 to 15200 (in bits) (by +64 bits)

                                       'bool cert_hash_set' offset changed from 15392 to 15456 (in bits) (by +64 bits)

                                       'char saved_username[129]' offset changed from 15400 to 15464 (in bits) (by +64 bits)

                                       'tfo_st tfo' offset changed from 16448 to 16576 (in bits) (by +128 bits)

                                       'gnutls_supplemental_entry_st* rsup' offset changed from 17664 to 17792 (in bits) (by +128 bits)

                                       'unsigned int rsup_size' offset changed from 17728 to 17856 (in bits) (by +128 bits)

                                       'hello_ext_entry_st* rexts' offset changed from 17792 to 17920 (in bits) (by +128 bits)

                                       'unsigned int rexts_size' offset changed from 17856 to 17984 (in bits) (by +128 bits)

                                       type of '__anonymous_struct__ ext_data[32]' changed:

                                         type name changed from '__anonymous_struct__[32]' to '__anonymous_struct__[64]'

                                         array type size changed from 6144 to 12288

                                         array type subrange 1 changed length from 32 to 64

                                       and offset changed from 17920 to 18048 (in bits) (by +128 bits)

                                       type of 'uint32_t used_exts' changed:

                                         typedef name changed from uint32_t to uint64_t at stdint-uintn.h:27:1

                                         underlying type 'typedef __uint32_t' at types.h:41:1 changed:

                                           typedef name changed from __uint32_t to __uint64_t at types.h:44:1

                                           underlying type 'unsigned int' changed:

                                             type name changed from 'unsigned int' to 'unsigned long int'

                                             type size changed from 32 to 64 (in bits)

                                       and offset changed from 24064 to 30336 (in bits) (by +6272 bits)

                                       'gnutls_ext_flags_t ext_msg' offset changed from 24096 to 30400 (in bits) (by +6304 bits)

                                       'unsigned int max_recv_size' offset changed from 24128 to 30432 (in bits) (by +6304 bits)

                                       'const gnutls_group_entry_st* cand_ec_group' offset changed from 24192 to 30464 (in bits) (by +6272 bits)

                                       type of 'const gnutls_group_entry_st* cand_dh_group' changed:

                                         in pointed to type 'const gnutls_group_entry_st':

                                           in unqualified underlying type 'typedef gnutls_group_entry_st' at gnutls_int.h:666:1:

                                             underlying type 'struct gnutls_group_entry_st' at gnutls_int.h:681:1 changed:

                                               type size hasn't changed

                                               1 data member changes (2 filtered):

                                                type of 'gnutls_pk_algorithm_t gnutls_group_entry_st::pk' changed:

                                                  underlying type 'enum __anonymous_enum__' at gnutls.h:833:1 changed:

                                                    type size hasn't changed

                                                    2 enumerator insertions:

                                                      '__anonymous_enum__::GNUTLS_PK_ECDH_X448' value '11'

                                                      '__anonymous_enum__::GNUTLS_PK_EDDSA_ED448' value '12'



                                                    1 enumerator change:

                                                      '__anonymous_enum__::GNUTLS_PK_MAX' from value '10' to '12' at gnutls.h:866:1





                                       and offset changed from 24256 to 30528 (in bits) (by +6272 bits)

                                       'const gnutls_group_entry_st* cand_group' offset changed from 24320 to 30592 (in bits) (by +6272 bits)

                                       'uint8_t hrr_cs[2]' offset changed from 24384 to 30656 (in bits) (by +6272 bits)

                                       'int session_ticket_renew' offset changed from 24416 to 30688 (in bits) (by +6272 bits)

                                       'tls13_ticket_st tls13_ticket' offset changed from 24448 to 30720 (in bits) (by +6272 bits)

                                       'uint32_t early_data_received' offset changed from 27584 to 33856 (in bits) (by +6272 bits)

                                       'void* epoch_lock' offset changed from 27712 to 33984 (in bits) (by +6272 bits)



                                  type of 'gnutls_key_st gnutls_session_int::key' changed:

                                    underlying type 'struct gnutls_key_st' at gnutls_int.h:535:1 changed:

                                      type size changed from 22336 to 22656 (in bits)

                                      12 data member changes:

                                       type of 'struct {gnutls_pk_params_st ecdh_params; gnutls_pk_params_st ecdhx_params; gnutls_pk_params_st dh_params;} gnutls_key_st::kshare' changed:

                                         type size changed from 11328 to 11520 (in bits)

                                         3 data member changes:



                                          'gnutls_pk_params_st ecdhx_params' offset changed from 3776 to 3840 (in bits) (by +64 bits)

                                          'gnutls_pk_params_st dh_params' offset changed from 7552 to 7680 (in bits) (by +128 bits)



                                       type of 'union {struct {uint8_t temp_secret[64]; unsigned int temp_secret_size; uint8_t e_ckey[64]; uint8_t hs_ckey[64]; uint8_t hs_skey[64]; uint8_t ap_ckey[64]; uint8_t ap_skey[64]; uint8_t ap_expkey[64]; uint8_t ap_rms[64];} tls13; struct {struct {gnutls_pk_params_st params; bigint_t x; bigint_t y; gnutls_datum_t raw;} ecdh; struct {gnutls_pk_params_st params; bigint_t client_Y;} dh; struct {bigint_t srp_key; bigint_t srp_g; bigint_t srp_p; bigint_t A; bigint_t B; bigint_t u; bigint_t b; bigint_t a; bigint_t x;} srp;} tls12;} gnutls_key_st::proto' changed:

                                         type size changed from 8448 to 8576 (in bits)

                                         1 data member change:

                                          type of 'struct {struct {gnutls_pk_params_st params; bigint_t x; bigint_t y; gnutls_datum_t raw;} ecdh; struct {gnutls_pk_params_st params; bigint_t client_Y;} dh; struct {bigint_t srp_key; bigint_t srp_g; bigint_t srp_p; bigint_t A; bigint_t B; bigint_t u; bigint_t b; bigint_t a; bigint_t x;} srp;} tls12' changed:

                                            type size changed from 8448 to 8576 (in bits)

                                            3 data member changes:

                                             type of 'struct {gnutls_pk_params_st params; bigint_t x; bigint_t y; gnutls_datum_t raw;} ecdh' changed:

                                               type size changed from 4032 to 4096 (in bits)

                                               3 data member changes (1 filtered):

                                                'bigint_t x' offset changed from 3776 to 3840 (in bits) (by +64 bits)

                                                'bigint_t y' offset changed from 3840 to 3904 (in bits) (by +64 bits)

                                                'gnutls_datum_t raw' offset changed from 3904 to 3968 (in bits) (by +64 bits)



                                             type of 'struct {gnutls_pk_params_st params; bigint_t client_Y;} dh' changed:

                                               type size changed from 3840 to 3904 (in bits)

                                               2 data member changes:



                                                'bigint_t client_Y' offset changed from 3776 to 3840 (in bits) (by +64 bits)

                                             and offset changed from 4032 to 4096 (in bits) (by +64 bits)

                                             'struct {bigint_t srp_key; bigint_t srp_g; bigint_t srp_p; bigint_t A; bigint_t B; bigint_t u; bigint_t b; bigint_t a; bigint_t x;} srp' offset changed from 7872 to 8000 (in bits) (by +128 bits)



                                       and offset changed from 11328 to 11520 (in bits) (by +192 bits)

                                       'binder_data_st gnutls_key_st::binders[2]' offset changed from 19776 to 20096 (in bits) (by +320 bits)

                                       'gnutls_datum_t gnutls_key_st::key' offset changed from 20288 to 20608 (in bits) (by +320 bits)

                                       'uint8_t gnutls_key_st::session_ticket_key[64]' offset changed from 20416 to 20736 (in bits) (by +320 bits)

                                       'uint8_t gnutls_key_st::previous_ticket_key[64]' offset changed from 20928 to 21248 (in bits) (by +320 bits)

                                       'uint8_t gnutls_key_st::initial_stek[64]' offset changed from 21440 to 21760 (in bits) (by +320 bits)

                                       'void* gnutls_key_st::auth_info' offset changed from 21952 to 22272 (in bits) (by +320 bits)

                                       'gnutls_credentials_type_t gnutls_key_st::auth_info_type' offset changed from 22016 to 22336 (in bits) (by +320 bits)

                                       'int gnutls_key_st::auth_info_size' offset changed from 22048 to 22368 (in bits) (by +320 bits)

                                       'auth_cred_st* gnutls_key_st::cred' offset changed from 22080 to 22400 (in bits) (by +320 bits)

                                       'struct {uint64_t last_result; uint8_t was_rotated; gnutls_stek_rotation_callback_t cb;} gnutls_key_st::totp' offset changed from 22144 to 22464 (in bits) (by +320 bits)

                                  and offset changed from 30080 to 36352 (in bits) (by +6272 bits)





                type of 'gnutls_privkey_st* selected_key' changed:

                  in pointed to type 'struct gnutls_privkey_st' at abstract_int.h:28:1:

                    type size hasn't changed

                    1 data member changes (1 filtered):

                     type of 'union {gnutls_x509_privkey_t x509; gnutls_pkcs11_privkey_t pkcs11; struct {gnutls_privkey_sign_func sign_func; gnutls_privkey_sign_data_func sign_data_func; gnutls_privkey_sign_hash_func sign_hash_func; gnutls_privkey_decrypt_func decrypt_func; gnutls_privkey_decrypt_func2 decrypt_func2; gnutls_privkey_deinit_func deinit_func; gnutls_privkey_info_func info_func; void* userdata; unsigned int bits;} ext;} gnutls_privkey_st::key' changed:

                       type size hasn't changed

                       1 data member changes (1 filtered):

                        type of 'gnutls_x509_privkey_t x509' changed:

                          underlying type 'gnutls_x509_privkey_int*' changed:

                            in pointed to type 'struct gnutls_x509_privkey_int' at x509_int.h:142:1:

                              type size changed from 4032 to 4096 (in bits)

                              5 data member changes:



                               'unsigned int gnutls_x509_privkey_int::expanded' offset changed from 3776 to 3840 (in bits) (by +64 bits)

                               'unsigned int gnutls_x509_privkey_int::flags' offset changed from 3808 to 3872 (in bits) (by +64 bits)

                               'asn1_node gnutls_x509_privkey_int::key' offset changed from 3840 to 3904 (in bits) (by +64 bits)

                               'pin_info_st gnutls_x509_privkey_int::pin' offset changed from 3904 to 3968 (in bits) (by +64 bits)





                and offset changed from 10624 to 10688 (in bits) (by +64 bits)

                'unsigned int additional_verify_flags' offset changed from 15104 to 15168 (in bits) (by +64 bits)

                'gnutls_anti_replay_t anti_replay' offset changed from 27648 to 33920 (in bits) (by +6272 bits)





  [C]'function int gnutls_ocsp_req_export(gnutls_ocsp_req_t, gnutls_datum_t*)' at ocsp.c:369:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef gnutls_ocsp_req_t' changed:

      typedef name changed from gnutls_ocsp_req_t to gnutls_ocsp_req_const_t at ocsp.h:145:1

      underlying type 'gnutls_ocsp_req_int*' changed:

        in pointed to type 'struct gnutls_ocsp_req_int':

          entity changed from 'struct gnutls_ocsp_req_int' to 'const gnutls_ocsp_req_int'

          type size hasn't changed



  [C]'function int gnutls_ocsp_req_get_extension(gnutls_ocsp_req_t, unsigned int, gnutls_datum_t*, unsigned int*, gnutls_datum_t*)' at ocsp.c:804:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef gnutls_ocsp_req_t' changed:

      typedef name changed from gnutls_ocsp_req_t to gnutls_ocsp_req_const_t at ocsp.h:145:1

      underlying type 'gnutls_ocsp_req_int*' changed:

        in pointed to type 'struct gnutls_ocsp_req_int':

          entity changed from 'struct gnutls_ocsp_req_int' to 'const gnutls_ocsp_req_int'

          type size hasn't changed



  [C]'function int gnutls_ocsp_req_get_nonce(gnutls_ocsp_req_t, unsigned int*, gnutls_datum_t*)' at ocsp.c:909:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef gnutls_ocsp_req_t' changed:

      typedef name changed from gnutls_ocsp_req_t to gnutls_ocsp_req_const_t at ocsp.h:145:1

      underlying type 'gnutls_ocsp_req_int*' changed:

        in pointed to type 'struct gnutls_ocsp_req_int':

          entity changed from 'struct gnutls_ocsp_req_int' to 'const gnutls_ocsp_req_int'

          type size hasn't changed



  [C]'function int gnutls_ocsp_req_get_version(gnutls_ocsp_req_t)' at ocsp.c:457:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef gnutls_ocsp_req_t' changed:

      typedef name changed from gnutls_ocsp_req_t to gnutls_ocsp_req_const_t at ocsp.h:145:1

      underlying type 'gnutls_ocsp_req_int*' changed:

        in pointed to type 'struct gnutls_ocsp_req_int':

          entity changed from 'struct gnutls_ocsp_req_int' to 'const gnutls_ocsp_req_int'

          type size hasn't changed



  [C]'function int gnutls_ocsp_req_print(gnutls_ocsp_req_t, gnutls_ocsp_print_formats_t, gnutls_datum_t*)' at ocsp_output.c:172:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef gnutls_ocsp_req_t' changed:

      typedef name changed from gnutls_ocsp_req_t to gnutls_ocsp_req_const_t at ocsp.h:145:1

      underlying type 'gnutls_ocsp_req_int*' changed:

        in pointed to type 'struct gnutls_ocsp_req_int':

          entity changed from 'struct gnutls_ocsp_req_int' to 'const gnutls_ocsp_req_int'

          type size hasn't changed



  [C]'function int gnutls_ocsp_resp_check_crt(gnutls_ocsp_resp_t, unsigned int, gnutls_x509_crt_t)' at ocsp.c:1357:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef gnutls_ocsp_resp_t' changed:

      typedef name changed from gnutls_ocsp_resp_t to gnutls_ocsp_resp_const_t at ocsp.h:197:1

      underlying type 'gnutls_ocsp_resp_int*' changed:

        in pointed to type 'struct gnutls_ocsp_resp_int':

          entity changed from 'struct gnutls_ocsp_resp_int' to 'const gnutls_ocsp_resp_int'

          type size hasn't changed



  [C]'function int gnutls_ocsp_resp_export(gnutls_ocsp_resp_t, gnutls_datum_t*)' at ocsp.c:401:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef gnutls_ocsp_resp_t' changed:

      typedef name changed from gnutls_ocsp_resp_t to gnutls_ocsp_resp_const_t at ocsp.h:197:1

      underlying type 'gnutls_ocsp_resp_int*' changed:

        in pointed to type 'struct gnutls_ocsp_resp_int':

          entity changed from 'struct gnutls_ocsp_resp_int' to 'const gnutls_ocsp_resp_int'

          type size hasn't changed



  [C]'function int gnutls_ocsp_resp_export2(gnutls_ocsp_resp_t, gnutls_datum_t*, gnutls_x509_crt_fmt_t)' at ocsp.c:419:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef gnutls_ocsp_resp_t' changed:

      typedef name changed from gnutls_ocsp_resp_t to gnutls_ocsp_resp_const_t at ocsp.h:197:1

      underlying type 'gnutls_ocsp_resp_int*' changed:

        in pointed to type 'struct gnutls_ocsp_resp_int':

          entity changed from 'struct gnutls_ocsp_resp_int' to 'const gnutls_ocsp_resp_int'

          type size hasn't changed



  [C]'function int gnutls_ocsp_resp_get_certs(gnutls_ocsp_resp_t, gnutls_x509_crt_t**, size_t*)' at ocsp.c:1868:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef gnutls_ocsp_resp_t' changed:

      typedef name changed from gnutls_ocsp_resp_t to gnutls_ocsp_resp_const_t at ocsp.h:197:1

      underlying type 'gnutls_ocsp_resp_int*' changed:

        in pointed to type 'struct gnutls_ocsp_resp_int':

          entity changed from 'struct gnutls_ocsp_resp_int' to 'const gnutls_ocsp_resp_int'

          type size hasn't changed



  [C]'function int gnutls_ocsp_resp_get_extension(gnutls_ocsp_resp_t, unsigned int, gnutls_datum_t*, unsigned int*, gnutls_datum_t*)' at ocsp.c:1678:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef gnutls_ocsp_resp_t' changed:

      typedef name changed from gnutls_ocsp_resp_t to gnutls_ocsp_resp_const_t at ocsp.h:197:1

      underlying type 'gnutls_ocsp_resp_int*' changed:

        in pointed to type 'struct gnutls_ocsp_resp_int':

          entity changed from 'struct gnutls_ocsp_resp_int' to 'const gnutls_ocsp_resp_int'

          type size hasn't changed



  [C]'function int gnutls_ocsp_resp_get_nonce(gnutls_ocsp_resp_t, unsigned int*, gnutls_datum_t*)' at ocsp.c:1756:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef gnutls_ocsp_resp_t' changed:

      typedef name changed from gnutls_ocsp_resp_t to gnutls_ocsp_resp_const_t at ocsp.h:197:1

      underlying type 'gnutls_ocsp_resp_int*' changed:

        in pointed to type 'struct gnutls_ocsp_resp_int':

          entity changed from 'struct gnutls_ocsp_resp_int' to 'const gnutls_ocsp_resp_int'

          type size hasn't changed



  [C]'function time_t gnutls_ocsp_resp_get_produced(gnutls_ocsp_resp_t)' at ocsp.c:1317:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef gnutls_ocsp_resp_t' changed:

      typedef name changed from gnutls_ocsp_resp_t to gnutls_ocsp_resp_const_t at ocsp.h:197:1

      underlying type 'gnutls_ocsp_resp_int*' changed:

        in pointed to type 'struct gnutls_ocsp_resp_int':

          entity changed from 'struct gnutls_ocsp_resp_int' to 'const gnutls_ocsp_resp_int'

          type size hasn't changed



  [C]'function int gnutls_ocsp_resp_get_responder2(gnutls_ocsp_resp_t, gnutls_datum_t*, unsigned int)' at ocsp.c:1216:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef gnutls_ocsp_resp_t' changed:

      typedef name changed from gnutls_ocsp_resp_t to gnutls_ocsp_resp_const_t at ocsp.h:197:1

      underlying type 'gnutls_ocsp_resp_int*' changed:

        in pointed to type 'struct gnutls_ocsp_resp_int':

          entity changed from 'struct gnutls_ocsp_resp_int' to 'const gnutls_ocsp_resp_int'

          type size hasn't changed



  [C]'function int gnutls_ocsp_resp_get_responder_raw_id(gnutls_ocsp_resp_t, unsigned int, gnutls_datum_t*)' at ocsp.c:1249:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef gnutls_ocsp_resp_t' changed:

      typedef name changed from gnutls_ocsp_resp_t to gnutls_ocsp_resp_const_t at ocsp.h:197:1

      underlying type 'gnutls_ocsp_resp_int*' changed:

        in pointed to type 'struct gnutls_ocsp_resp_int':

          entity changed from 'struct gnutls_ocsp_resp_int' to 'const gnutls_ocsp_resp_int'

          type size hasn't changed



  [C]'function int gnutls_ocsp_resp_get_response(gnutls_ocsp_resp_t, gnutls_datum_t*, gnutls_datum_t*)' at ocsp.c:1095:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef gnutls_ocsp_resp_t' changed:

      typedef name changed from gnutls_ocsp_resp_t to gnutls_ocsp_resp_const_t at ocsp.h:197:1

      underlying type 'gnutls_ocsp_resp_int*' changed:

        in pointed to type 'struct gnutls_ocsp_resp_int':

          entity changed from 'struct gnutls_ocsp_resp_int' to 'const gnutls_ocsp_resp_int'

          type size hasn't changed



  [C]'function int gnutls_ocsp_resp_get_signature_algorithm(gnutls_ocsp_resp_t)' at ocsp.c:1796:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef gnutls_ocsp_resp_t' changed:

      typedef name changed from gnutls_ocsp_resp_t to gnutls_ocsp_resp_const_t at ocsp.h:197:1

      underlying type 'gnutls_ocsp_resp_int*' changed:

        in pointed to type 'struct gnutls_ocsp_resp_int':

          entity changed from 'struct gnutls_ocsp_resp_int' to 'const gnutls_ocsp_resp_int'

          type size hasn't changed



  [C]'function int gnutls_ocsp_resp_print(gnutls_ocsp_resp_t, gnutls_ocsp_print_formats_t, gnutls_datum_t*)' at ocsp_output.c:642:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef gnutls_ocsp_resp_t' changed:

      typedef name changed from gnutls_ocsp_resp_t to gnutls_ocsp_resp_const_t at ocsp.h:197:1

      underlying type 'gnutls_ocsp_resp_int*' changed:

        in pointed to type 'struct gnutls_ocsp_resp_int':

          entity changed from 'struct gnutls_ocsp_resp_int' to 'const gnutls_ocsp_resp_int'

          type size hasn't changed



  [C]'function int gnutls_ocsp_resp_verify(gnutls_ocsp_resp_t, gnutls_x509_trust_list_t, unsigned int*, unsigned int)' at ocsp.c:2297:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef gnutls_ocsp_resp_t' changed:

      typedef name changed from gnutls_ocsp_resp_t to gnutls_ocsp_resp_const_t at ocsp.h:197:1

      underlying type 'gnutls_ocsp_resp_int*' changed:

        in pointed to type 'struct gnutls_ocsp_resp_int':

          entity changed from 'struct gnutls_ocsp_resp_int' to 'const gnutls_ocsp_resp_int'

          type size hasn't changed



  [C]'function int gnutls_ocsp_resp_verify_direct(gnutls_ocsp_resp_t, gnutls_x509_crt_t, unsigned int*, unsigned int)' at ocsp.c:2212:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef gnutls_ocsp_resp_t' changed:

      typedef name changed from gnutls_ocsp_resp_t to gnutls_ocsp_resp_const_t at ocsp.h:197:1

      underlying type 'gnutls_ocsp_resp_int*' changed:

        in pointed to type 'struct gnutls_ocsp_resp_int':

          entity changed from 'struct gnutls_ocsp_resp_int' to 'const gnutls_ocsp_resp_int'

          type size hasn't changed



  [C]'function int gnutls_ocsp_status_request_is_checked(gnutls_session_t, unsigned int)' at ocsp-api.c:622:1 has some indirect sub-type changes:

    return type changed:

      type name changed from 'int' to 'unsigned int'

      type size hasn't changed





  [C]'function int gnutls_privkey_set_spki(gnutls_privkey_t, const gnutls_x509_spki_t, unsigned int)' at privkey.c:1910:1 has some indirect sub-type changes:

    parameter 2 of type 'const gnutls_x509_spki_t' has sub-type changes:

      in unqualified underlying type 'typedef gnutls_x509_spki_t' at x509.h:431:1:

        underlying type 'gnutls_x509_spki_st*' changed:

          pointed to type 'struct gnutls_x509_spki_st' changed at crypto-backend.h:175:1, as reported earlier



  [C]'function int gnutls_psk_allocate_client_credentials(gnutls_psk_client_credentials_t*)' at psk.c:63:1 has some indirect sub-type changes:

    parameter 1 of type 'gnutls_psk_client_credentials_t*' has sub-type changes:

      in pointed to type 'typedef gnutls_psk_client_credentials_t' at gnutls.h:2590:1:

        underlying type 'gnutls_psk_client_credentials_st*' changed:

          in pointed to type 'struct gnutls_psk_client_credentials_st' at psk.h:29:1:

            type size changed from 384 to 448 (in bits)

            1 data member insertion:

              'gnutls_psk_client_credentials_function* gnutls_psk_client_credentials_st::get_function_legacy', at offset 320 (in bits) at psk.h:33:1

            2 data member changes:

             type of 'gnutls_psk_client_credentials_function* gnutls_psk_client_credentials_st::get_function' changed:

               in pointed to type 'typedef gnutls_psk_client_credentials_function' at gnutls.h:2653:1:

                 typedef name changed from gnutls_psk_client_credentials_function to gnutls_psk_client_credentials_function2 at gnutls.h:2653:1

                 underlying type 'function type int (typedef gnutls_session_t, char**, gnutls_datum_t*)' changed:

                   parameter 2 of type 'char**' changed:

                     in pointed to type 'char*' at gnutls.h:1220:1:

                       entity changed from 'char*' to 'typedef gnutls_datum_t' at gnutls.h:1220:1

                       type size changed from 64 to 128 (in bits)



             'const mac_entry_st* gnutls_psk_client_credentials_st::binder_algo' offset changed from 320 to 384 (in bits) (by +64 bits)



  [C]'function int gnutls_psk_allocate_server_credentials(gnutls_psk_server_credentials_t*)' at psk.c:211:1 has some indirect sub-type changes:

    parameter 1 of type 'gnutls_psk_server_credentials_t*' has sub-type changes:

      in pointed to type 'typedef gnutls_psk_server_credentials_t' at gnutls.h:2588:1:

        underlying type 'gnutls_psk_server_credentials_st*' changed:

          in pointed to type 'struct gnutls_psk_server_credentials_st' at psk.h:38:1:

            type size changed from 448 to 512 (in bits)

            1 data member insertion:

              'gnutls_psk_server_credentials_function* gnutls_psk_server_credentials_st::pwd_callback_legacy', at offset 128 (in bits) at psk.h:44:1

            7 data member changes:

             type of 'gnutls_psk_server_credentials_function* gnutls_psk_server_credentials_st::pwd_callback' changed:

               in pointed to type 'typedef gnutls_psk_server_credentials_function' at gnutls.h:2638:1:

                 typedef name changed from gnutls_psk_server_credentials_function to gnutls_psk_server_credentials_function2 at gnutls.h:2638:1

                 underlying type 'function type int (typedef gnutls_session_t, const char*, gnutls_datum_t*)' changed:

                   parameter 2 of type 'const char*' changed:

                     in pointed to type 'const char':

                       'const char' changed to 'const gnutls_datum_t'



             'gnutls_dh_params_t gnutls_psk_server_credentials_st::dh_params' offset changed from 128 to 192 (in bits) (by +64 bits)

             'unsigned int gnutls_psk_server_credentials_st::deinit_dh_params' offset changed from 192 to 256 (in bits) (by +64 bits)

             'gnutls_sec_param_t gnutls_psk_server_credentials_st::dh_sec_param' offset changed from 224 to 288 (in bits) (by +64 bits)

             'gnutls_params_function* gnutls_psk_server_credentials_st::params_func' offset changed from 256 to 320 (in bits) (by +64 bits)

             'char* gnutls_psk_server_credentials_st::hint' offset changed from 320 to 384 (in bits) (by +64 bits)

             'const mac_entry_st* gnutls_psk_server_credentials_st::binder_algo' offset changed from 384 to 448 (in bits) (by +64 bits)



  [C]'function int gnutls_pubkey_get_spki(gnutls_pubkey_t, gnutls_x509_spki_t, unsigned int)' at pubkey.c:2579:1 has some indirect sub-type changes:

    parameter 2 of type 'typedef gnutls_x509_spki_t' has sub-type changes:

      underlying type 'gnutls_x509_spki_st*' changed:

        pointed to type 'struct gnutls_x509_spki_st' changed at crypto-backend.h:175:1, as reported earlier



  [C]'function int gnutls_x509_crq_get_spki(gnutls_x509_crq_t, gnutls_x509_spki_t, unsigned int)' at crq.c:1065:1 has some indirect sub-type changes:

    parameter 2 of type 'typedef gnutls_x509_spki_t' has sub-type changes:

      underlying type 'gnutls_x509_spki_st*' changed:

        pointed to type 'struct gnutls_x509_spki_st' changed at crypto-backend.h:175:1, as reported earlier



  [C]'function int gnutls_x509_crq_get_tlsfeatures(gnutls_x509_crq_t, gnutls_x509_tlsfeatures_t, unsigned int, unsigned int*)' at crq.c:2857:1 has some indirect sub-type changes:

    parameter 2 of type 'typedef gnutls_x509_tlsfeatures_t' has sub-type changes:

      underlying type 'gnutls_x509_tlsfeatures_st*' changed:

        in pointed to type 'struct gnutls_x509_tlsfeatures_st' at x509_int.h:544:1:

          type size changed from 544 to 1056 (in bits)

          2 data member changes:

           type of 'uint16_t gnutls_x509_tlsfeatures_st::feature[32]' changed:

             type name changed from 'uint16_t[32]' to 'uint16_t[64]'

             array type size changed from 512 to 1024

             array type subrange 1 changed length from 32 to 64



           'unsigned int gnutls_x509_tlsfeatures_st::size' offset changed from 512 to 1024 (in bits) (by +512 bits)



  [C]'function int gnutls_x509_crt_get_spki(gnutls_x509_crt_t, gnutls_x509_spki_t, unsigned int)' at x509.c:1632:1 has some indirect sub-type changes:

    parameter 2 of type 'typedef gnutls_x509_spki_t' has sub-type changes:

      underlying type 'gnutls_x509_spki_st*' changed:

        pointed to type 'struct gnutls_x509_spki_st' changed at crypto-backend.h:175:1, as reported earlier



  [C]'function int gnutls_x509_privkey_get_spki(gnutls_x509_privkey_t, gnutls_x509_spki_t, unsigned int)' at privkey.c:1363:1 has some indirect sub-type changes:

    parameter 2 of type 'typedef gnutls_x509_spki_t' has sub-type changes:

      underlying type 'gnutls_x509_spki_st*' changed:

        pointed to type 'struct gnutls_x509_spki_st' changed at crypto-backend.h:175:1, as reported earlier



  [C]'function void gnutls_x509_spki_deinit(gnutls_x509_spki_t)' at spki.c:71:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef gnutls_x509_spki_t' has sub-type changes:

      underlying type 'gnutls_x509_spki_st*' changed:

        pointed to type 'struct gnutls_x509_spki_st' changed at crypto-backend.h:175:1, as reported earlier



  [C]'function int gnutls_x509_spki_init(gnutls_x509_spki_t*)' at spki.c:44:1 has some indirect sub-type changes:

    parameter 1 of type 'gnutls_x509_spki_t*' has sub-type changes:

      pointed to type 'typedef gnutls_x509_spki_t' changed at x509.h:431:1, as reported earlier





---------------diffs in gnutls_libgnutls-dane.so.0.4.1_abidiff.out:----------------

Functions changes summary: 0 Removed, 2 Changed (7 filtered out), 0 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



2 functions with some indirect sub-type change:



  [C]'function int dane_query_data(dane_query_t, unsigned int, unsigned int*, unsigned int*, unsigned int*, gnutls_datum_t*)' at dane.c:116:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef dane_query_t' has sub-type changes:

      underlying type 'dane_query_st*' changed:

        in pointed to type 'struct dane_query_st' at dane.c:62:1:

          type size hasn't changed

          1 data member change:

           type of 'ub_result* dane_query_st::result' changed:

             in pointed to type 'struct ub_result' at unbound.h:123:1:

               type size hasn't changed

               1 data member insertion:

                 'int ub_result::was_ratelimited', at offset 704 (in bits) at unbound.h:211:1

               1 data member change:

                'int ub_result::ttl' offset changed from 704 to 736 (in bits) (by +32 bits)





  [C]'function int dane_verify_session_crt(dane_state_t, gnutls_session_t, const char*, const char*, unsigned int, unsigned int, unsigned int, unsigned int*)' at dane.c:929:1 has some indirect sub-type changes:

    parameter 2 of type 'typedef gnutls_session_t' has sub-type changes:

      underlying type 'gnutls_session_int*' changed:

        in pointed to type 'struct gnutls_session_int' at gnutls_int.h:1497:1:

          type size changed from 52416 to 59008 (in bits)

          3 data member changes (1 filtered):

           type of 'record_parameters_st* gnutls_session_int::record_parameters[4]' changed:

             array element type 'record_parameters_st*' changed: 

               in pointed to type 'typedef record_parameters_st' at gnutls_int.h:618:1:

                 underlying type 'struct record_parameters_st' at gnutls_int.h:887:1 changed:

                   type size hasn't changed

                   3 data member changes (1 filtered):

                    type of 'const cipher_entry_st* record_parameters_st::cipher' changed:

                      in pointed to type 'const cipher_entry_st':

                        in unqualified underlying type 'typedef cipher_entry_st' at gnutls_int.h:636:1:

                          underlying type 'struct cipher_entry_st' at gnutls_int.h:648:1 changed:

                            type size hasn't changed

                            2 data member deletions:

                              'bool cipher_entry_st::only_aead', at offset 232 (in bits) at gnutls_int.h:659:1



                              'bool cipher_entry_st::no_rekey', at offset 240 (in bits) at gnutls_int.h:660:1



                            no data member change (1 filtered);

                            1 data member change:

                             type of 'bool cipher_entry_st::xor_nonce' changed:

                               type name changed from 'bool' to 'unsigned int'

                               type size changed from 8 to 32 (in bits)

                             and name of 'cipher_entry_st::xor_nonce' changed to 'cipher_entry_st::flags' at gnutls_int.h:635:1



                    type of 'record_state_st record_parameters_st::read' changed:

                      underlying type 'struct record_state_st' at gnutls_int.h:858:1 changed:

                        type size hasn't changed

                        2 data member changes:

                         type of 'union {auth_cipher_hd_st tls12; api_aead_cipher_hd_st aead;} record_state_st::ctx' changed:

                           type size hasn't changed

                           1 data member changes (1 filtered):

                            type of 'auth_cipher_hd_st tls12' changed:

                              underlying type 'struct {cipher_hd_st cipher; union {digest_hd_st dig; mac_hd_st mac;} mac; unsigned int is_mac; unsigned int non_null; unsigned int etm; size_t tag_size;}' at cipher_int.h:204:1 changed:

                                type size hasn't changed

                                1 data member insertion:

                                  'unsigned int continuous_mac', at offset 30 (in bits) at cipher_int.h:215:1

                                2 data member changes (2 filtered):

                                 'unsigned int etm' offset changed from 29 to 28 (in bits) (by -1 bits)

                                 'unsigned int non_null' offset changed from 30 to 29 (in bits) (by -1 bits)





                         type of 'gnutls_uint64 record_state_st::sequence_number' changed:

                           typedef name changed from gnutls_uint64 to uint64_t at stdint-uintn.h:27:1

                           underlying type 'struct {unsigned char i[8];}' at gnutls_int.h:103:1 changed:

                             entity changed from 'struct {unsigned char i[8];}' to 'typedef __uint64_t' at types.h:44:1

                             type size hasn't changed







             type size hasn't changed



           type of 'internals_st gnutls_session_int::internals' changed:

             underlying type 'struct {mbuffer_head_st record_buffer; int handshake_hash_buffer_prev_len; unsigned int handshake_hash_buffer_client_hello_len; unsigned int handshake_hash_buffer_client_kx_len; unsigned int handshake_hash_buffer_server_finished_len; unsigned int handshake_hash_buffer_client_finished_len; gnutls_buffer_st handshake_hash_buffer; bool resumable; send_ticket_state_t ticket_state; bye_state_t bye_state; reauth_state_t reauth_state; handshake_state_t handshake_final_state; handshake_state_t handshake_state; bool invalid_connection; bool may_not_read; bool may_not_write; bool read_eof; int last_alert; int last_handshake_in; int last_handshake_out; gnutls_priority_st* priorities; bool allow_large_records; bool allow_small_records; bool no_etm; bool no_ext_master_secret; bool allow_key_usage_violation; bool allow_wrong_pms; bool dumbfw; uint16_t dh_prime_bits; bool resumed; bool resumption_requested; security_parameters_st resumed_security_parameters; gnutls_datum_t resumption_data; mbuffer_head_st handshake_send_buffer; mbuffer_head_st handshake_header_recv_buffer; handshake_buffer_st handshake_recv_buffer[6]; int handshake_recv_buffer_size; mbuffer_head_st record_recv_buffer; mbuffer_head_st record_send_buffer; size_t record_send_buffer_user_size; mbuffer_head_st early_data_recv_buffer; gnutls_buffer_st early_data_presend_buffer; record_send_state_t rsend_state; gnutls_buffer_st record_key_update_buffer; gnutls_buffer_st record_presend_buffer; gnutls_buffer_st reauth_buffer; time_t expire_time; const mod_auth_st_int* auth_struct; uint8_t adv_version_major; uint8_t adv_version_minor; gnutls_certificate_request_t send_cert_req; size_t max_handshake_data_buffer_size; gnutls_pull_timeout_func pull_timeout_func; gnutls_pull_func pull_func; gnutls_push_func push_func; gnutls_vec_push_func vec_push_func; gnutls_errno_func errno_func; gnutls_transport_ptr_t transport_recv_ptr; gnutls_transport_ptr_t transport_send_ptr; gnutls_db_store_func db_store_func; gnutls_db_retr_func db_retrieve_func; gnutls_db_remove_func db_remove_func; void* db_ptr; gnutls_handshake_simple_hook_func user_hello_func; gnutls_handshake_hook_func h_hook; unsigned int h_type; int16_t h_post; gnutls_pcert_st* selected_cert_list; uint16_t selected_cert_list_length; gnutls_privkey_st* selected_key; gnutls_ocsp_data_st* selected_ocsp; uint16_t selected_ocsp_length; gnutls_status_request_ocsp_func selected_ocsp_func; void* selected_ocsp_func_ptr; bool selected_need_free; uint8_t default_record_version[2]; uint8_t default_hello_version[2]; void* user_ptr; bool direction; bool ignore_rdn_sequence; uint8_t rsa_pms_version[2]; int errnum; bool initial_negotiation_completed; void* post_negotiation_lock; transport_t transport; dtls_st dtls; unsigned int handshake_suspicious_loops; bool handshake_in_progress; bool premaster_set; unsigned int cb_tls_unique_len; unsigned char cb_tls_unique[36]; timespec handshake_start_time; timespec handshake_abs_timeout; unsigned int ertt; unsigned int handshake_timeout_ms; unsigned int record_timeout_ms; gnutls_datum_t post_handshake_cr_context; gnutls_buffer_st post_handshake_hash_buffer; unsigned int hsk_flags; timespec last_key_update; unsigned int key_update_count; gnutls_buffer_st full_client_hello; int extensions_offset; gnutls_buffer_st hb_local_data; gnutls_buffer_st hb_remote_data; timespec hb_ping_start; timespec hb_ping_sent; unsigned int hb_actual_retrans_timeout_ms; unsigned int hb_retrans_timeout_ms; unsigned int hb_total_timeout_ms; bool ocsp_check_ok; heartbeat_state_t hb_state; recv_state_t recv_state; bool sc_random_set; uint64_t flags; gnutls_certificate_verify_function* verify_callback; gnutls_typed_vdata_st* vc_data; gnutls_typed_vdata_st vc_sdata; unsigned int vc_elements; unsigned int vc_status; unsigned int additional_verify_flags; uint8_t cert_hash[32]; bool cert_hash_set; char saved_username[129]; bool saved_username_set; tfo_st tfo; gnutls_supplemental_entry_st* rsup; unsigned int rsup_size; hello_ext_entry_st* rexts; unsigned int rexts_size; __anonymous_struct__ ext_data[32]; uint32_t used_exts; gnutls_ext_flags_t ext_msg; unsigned int max_recv_size; const gnutls_group_entry_st* cand_ec_group; const gnutls_group_entry_st* cand_dh_group; const gnutls_group_entry_st* cand_group; uint8_t hrr_cs[2]; int session_ticket_renew; tls13_ticket_st tls13_ticket; uint32_t early_data_received; gnutls_anti_replay_t anti_replay; void* epoch_lock;}' at gnutls_int.h:1094:1 changed:

               type size changed from 27776 to 34048 (in bits)

               1 data member deletion:

                 'bool saved_username_set', at offset 16432 (in bits) at gnutls_int.h:1448:1



               2 data member insertions:

                 'gnutls_keylog_func keylog_func', at offset 10496 (in bits) at gnutls_int.h:1230:1

                 'int saved_username_size', at offset 16512 (in bits) at gnutls_int.h:1431:1

               78 data member changes (8 filtered):

                type of 'gnutls_priority_st* priorities' changed:

                  in pointed to type 'struct gnutls_priority_st' at gnutls_int.h:921:1:

                    type size hasn't changed

                    1 data member changes (2 filtered):

                     type of 'sign_algo_list_st gnutls_priority_st::sigalg' changed:

                       underlying type 'struct sign_algo_list_st' at gnutls_int.h:935:1 changed:

                         type size hasn't changed

                         1 data member change:

                          type of 'const gnutls_sign_entry_st* sign_algo_list_st::entry[64]' changed:

                            array element type 'const gnutls_sign_entry_st*' changed: 

                              in pointed to type 'const gnutls_sign_entry_st':

                                in unqualified underlying type 'struct gnutls_sign_entry_st' at algorithms.h:344:1:

                                  type size hasn't changed

                                  1 data member insertion:

                                    'unsigned int gnutls_sign_entry_st::hash_output_size', at offset 416 (in bits) at algorithms.h:373:1

                                  1 data member changes (5 filtered):

                                   type of 'gnutls_sign_algorithm_t gnutls_sign_entry_st::id' changed:

                                     underlying type 'enum __anonymous_enum__' at gnutls.h:912:1 changed:

                                       type size hasn't changed

                                       1 enumerator insertion:

                                         '__anonymous_enum__::GNUTLS_SIGN_EDDSA_ED448' value '46'



                                       1 enumerator change:

                                         '__anonymous_enum__::GNUTLS_SIGN_MAX' from value '45' to '46' at gnutls.h:948:1





                                  no data member change (1 filtered);

                            type size hasn't changed







                type of 'security_parameters_st resumed_security_parameters' changed:

                  underlying type 'struct {unsigned int entity; uint16_t epoch_read; uint16_t epoch_write; uint16_t epoch_next; uint16_t epoch_min; const gnutls_cipher_suite_entry_st* cs; const mac_entry_st* prf; uint8_t master_secret[48]; uint8_t client_random[32]; uint8_t server_random[32]; uint8_t session_id[32]; uint8_t session_id_size; time_t timestamp; uint8_t post_handshake_auth; uint16_t max_record_send_size; uint16_t max_record_recv_size; uint16_t max_user_record_send_size; uint16_t max_user_record_recv_size; uint32_t max_early_data_size; gnutls_certificate_type_t client_ctype; gnutls_certificate_type_t server_ctype; const gnutls_group_entry_st* grp; gnutls_sign_algorithm_t server_sign_algo; gnutls_sign_algorithm_t client_sign_algo; uint8_t ext_master_secret; uint8_t etm; uint8_t client_auth_type; uint8_t server_auth_type; int do_recv_supplemental; int do_send_supplemental; const version_entry_st* pversion;}' at gnutls_int.h:769:1 changed:

                    type size hasn't changed

                    1 data member changes (5 filtered):

                     type of 'const version_entry_st* pversion' changed:

                       in pointed to type 'const version_entry_st':

                         in unqualified underlying type 'typedef version_entry_st' at gnutls_int.h:713:1:

                           underlying type 'struct {const char* name; gnutls_protocol_t id; unsigned int age; uint8_t major; uint8_t minor; transport_t transport; bool supported; bool explicit_iv; bool extensions; bool selectable_sighash; bool selectable_prf; bool obsolete; bool tls13_sem; bool false_start; bool only_extension; bool post_handshake_auth; bool key_shares; uint8_t tls_sig_sem;}' at gnutls_int.h:708:1 changed:

                             type size hasn't changed

                             1 data member insertion:

                               'bool multi_ocsp', at offset 280 (in bits) at gnutls_int.h:706:1

                             1 data member change:

                              'uint8_t tls_sig_sem' offset changed from 280 to 288 (in bits) (by +8 bits)





                type of 'mbuffer_head_st early_data_recv_buffer' changed:

                  underlying type 'struct mbuffer_head_st' at gnutls_int.h:478:1 changed:

                    type size hasn't changed

                    1 data member changes (1 filtered):

                     type of 'mbuffer_st* mbuffer_head_st::head' changed:

                       in pointed to type 'struct mbuffer_st' at gnutls_int.h:410:1:

                         type size hasn't changed

                         1 data member changes (2 filtered):

                          type of 'gnutls_uint64 mbuffer_st::record_sequence' changed:

                            details were reported earlier







                'gnutls_pcert_st* selected_cert_list' offset changed from 10496 to 10560 (in bits) (by +64 bits)

                'uint16_t selected_cert_list_length' offset changed from 10560 to 10624 (in bits) (by +64 bits)

                'gnutls_privkey_st* selected_key' offset changed from 10624 to 10688 (in bits) (by +64 bits)

                'gnutls_ocsp_data_st* selected_ocsp' offset changed from 10688 to 10752 (in bits) (by +64 bits)

                'uint16_t selected_ocsp_length' offset changed from 10752 to 10816 (in bits) (by +64 bits)

                'gnutls_status_request_ocsp_func selected_ocsp_func' offset changed from 10816 to 10880 (in bits) (by +64 bits)

                'void* selected_ocsp_func_ptr' offset changed from 10880 to 10944 (in bits) (by +64 bits)

                'bool selected_need_free' offset changed from 10944 to 11008 (in bits) (by +64 bits)

                'uint8_t default_record_version[2]' offset changed from 10952 to 11016 (in bits) (by +64 bits)

                'uint8_t default_hello_version[2]' offset changed from 10968 to 11032 (in bits) (by +64 bits)

                'void* user_ptr' offset changed from 11008 to 11072 (in bits) (by +64 bits)

                'bool direction' offset changed from 11072 to 11136 (in bits) (by +64 bits)

                'bool ignore_rdn_sequence' offset changed from 11080 to 11144 (in bits) (by +64 bits)

                'uint8_t rsa_pms_version[2]' offset changed from 11088 to 11152 (in bits) (by +64 bits)

                'int errnum' offset changed from 11104 to 11168 (in bits) (by +64 bits)

                'bool initial_negotiation_completed' offset changed from 11136 to 11200 (in bits) (by +64 bits)

                'void* post_negotiation_lock' offset changed from 11200 to 11264 (in bits) (by +64 bits)

                'transport_t transport' offset changed from 11264 to 11328 (in bits) (by +64 bits)

                'dtls_st dtls' offset changed from 11328 to 11392 (in bits) (by +64 bits)

                'unsigned int handshake_suspicious_loops' offset changed from 11904 to 11968 (in bits) (by +64 bits)

                'bool handshake_in_progress' offset changed from 11936 to 12000 (in bits) (by +64 bits)

                'bool premaster_set' offset changed from 11944 to 12008 (in bits) (by +64 bits)

                'unsigned int cb_tls_unique_len' offset changed from 11968 to 12032 (in bits) (by +64 bits)

                'unsigned char cb_tls_unique[36]' offset changed from 12000 to 12064 (in bits) (by +64 bits)

                'timespec handshake_start_time' offset changed from 12288 to 12352 (in bits) (by +64 bits)

                'timespec handshake_abs_timeout' offset changed from 12416 to 12480 (in bits) (by +64 bits)

                'unsigned int ertt' offset changed from 12544 to 12608 (in bits) (by +64 bits)

                'unsigned int handshake_timeout_ms' offset changed from 12576 to 12640 (in bits) (by +64 bits)

                'unsigned int record_timeout_ms' offset changed from 12608 to 12672 (in bits) (by +64 bits)

                'gnutls_datum_t post_handshake_cr_context' offset changed from 12672 to 12736 (in bits) (by +64 bits)

                'gnutls_buffer_st post_handshake_hash_buffer' offset changed from 12800 to 12864 (in bits) (by +64 bits)

                'unsigned int hsk_flags' offset changed from 13056 to 13120 (in bits) (by +64 bits)

                'timespec last_key_update' offset changed from 13120 to 13184 (in bits) (by +64 bits)

                'unsigned int key_update_count' offset changed from 13248 to 13312 (in bits) (by +64 bits)

                'gnutls_buffer_st full_client_hello' offset changed from 13312 to 13376 (in bits) (by +64 bits)

                'int extensions_offset' offset changed from 13568 to 13632 (in bits) (by +64 bits)

                'gnutls_buffer_st hb_local_data' offset changed from 13632 to 13696 (in bits) (by +64 bits)

                'gnutls_buffer_st hb_remote_data' offset changed from 13888 to 13952 (in bits) (by +64 bits)

                'timespec hb_ping_start' offset changed from 14144 to 14208 (in bits) (by +64 bits)

                'timespec hb_ping_sent' offset changed from 14272 to 14336 (in bits) (by +64 bits)

                'unsigned int hb_actual_retrans_timeout_ms' offset changed from 14400 to 14464 (in bits) (by +64 bits)

                'unsigned int hb_retrans_timeout_ms' offset changed from 14432 to 14496 (in bits) (by +64 bits)

                'unsigned int hb_total_timeout_ms' offset changed from 14464 to 14528 (in bits) (by +64 bits)

                'bool ocsp_check_ok' offset changed from 14496 to 14560 (in bits) (by +64 bits)

                'heartbeat_state_t hb_state' offset changed from 14528 to 14592 (in bits) (by +64 bits)

                'recv_state_t recv_state' offset changed from 14560 to 14624 (in bits) (by +64 bits)

                'bool sc_random_set' offset changed from 14592 to 14656 (in bits) (by +64 bits)

                'uint64_t flags' offset changed from 14656 to 14720 (in bits) (by +64 bits)

                'gnutls_certificate_verify_function* verify_callback' offset changed from 14720 to 14784 (in bits) (by +64 bits)

                'gnutls_typed_vdata_st* vc_data' offset changed from 14784 to 14848 (in bits) (by +64 bits)

                'gnutls_typed_vdata_st vc_sdata' offset changed from 14848 to 14912 (in bits) (by +64 bits)

                'unsigned int vc_elements' offset changed from 15040 to 15104 (in bits) (by +64 bits)

                'unsigned int vc_status' offset changed from 15072 to 15136 (in bits) (by +64 bits)

                'unsigned int additional_verify_flags' offset changed from 15104 to 15168 (in bits) (by +64 bits)

                'uint8_t cert_hash[32]' offset changed from 15136 to 15200 (in bits) (by +64 bits)

                'bool cert_hash_set' offset changed from 15392 to 15456 (in bits) (by +64 bits)

                'char saved_username[129]' offset changed from 15400 to 15464 (in bits) (by +64 bits)

                'tfo_st tfo' offset changed from 16448 to 16576 (in bits) (by +128 bits)

                'gnutls_supplemental_entry_st* rsup' offset changed from 17664 to 17792 (in bits) (by +128 bits)

                'unsigned int rsup_size' offset changed from 17728 to 17856 (in bits) (by +128 bits)

                'hello_ext_entry_st* rexts' offset changed from 17792 to 17920 (in bits) (by +128 bits)

                'unsigned int rexts_size' offset changed from 17856 to 17984 (in bits) (by +128 bits)

                type of '__anonymous_struct__ ext_data[32]' changed:

                  type name changed from '__anonymous_struct__[32]' to '__anonymous_struct__[64]'

                  array type size changed from 6144 to 12288

                  array type subrange 1 changed length from 32 to 64

                and offset changed from 17920 to 18048 (in bits) (by +128 bits)

                type of 'uint32_t used_exts' changed:

                  typedef name changed from uint32_t to uint64_t at stdint-uintn.h:27:1

                  underlying type 'typedef __uint32_t' at types.h:41:1 changed:

                    typedef name changed from __uint32_t to __uint64_t at types.h:44:1

                    underlying type 'unsigned int' changed:

                      type name changed from 'unsigned int' to 'unsigned long int'

                      type size changed from 32 to 64 (in bits)

                and offset changed from 24064 to 30336 (in bits) (by +6272 bits)

                'gnutls_ext_flags_t ext_msg' offset changed from 24096 to 30400 (in bits) (by +6304 bits)

                'unsigned int max_recv_size' offset changed from 24128 to 30432 (in bits) (by +6304 bits)

                'const gnutls_group_entry_st* cand_ec_group' offset changed from 24192 to 30464 (in bits) (by +6272 bits)

                type of 'const gnutls_group_entry_st* cand_dh_group' changed:

                  in pointed to type 'const gnutls_group_entry_st':

                    in unqualified underlying type 'typedef gnutls_group_entry_st' at gnutls_int.h:666:1:

                      underlying type 'struct gnutls_group_entry_st' at gnutls_int.h:681:1 changed:

                        type size hasn't changed

                        2 data member changes (1 filtered):

                         type of 'gnutls_ecc_curve_t gnutls_group_entry_st::curve' changed:

                           underlying type 'enum __anonymous_enum__' at gnutls.h:988:1 changed:

                             type size hasn't changed

                             7 enumerator insertions:

                               '__anonymous_enum__::GNUTLS_ECC_CURVE_GOST512C' value '15'

                               '__anonymous_enum__::GNUTLS_ECC_CURVE_GOST256A' value '16'

                               '__anonymous_enum__::GNUTLS_ECC_CURVE_GOST256B' value '17'

                               '__anonymous_enum__::GNUTLS_ECC_CURVE_GOST256C' value '18'

                               '__anonymous_enum__::GNUTLS_ECC_CURVE_GOST256D' value '19'

                               '__anonymous_enum__::GNUTLS_ECC_CURVE_X448' value '20'

                               '__anonymous_enum__::GNUTLS_ECC_CURVE_ED448' value '21'



                             1 enumerator change:

                               '__anonymous_enum__::GNUTLS_ECC_CURVE_MAX' from value '14' to '21' at gnutls.h:1032:1





                         type of 'gnutls_pk_algorithm_t gnutls_group_entry_st::pk' changed:

                           underlying type 'enum __anonymous_enum__' at gnutls.h:833:1 changed:

                             type size hasn't changed

                             2 enumerator insertions:

                               '__anonymous_enum__::GNUTLS_PK_ECDH_X448' value '11'

                               '__anonymous_enum__::GNUTLS_PK_EDDSA_ED448' value '12'



                             1 enumerator change:

                               '__anonymous_enum__::GNUTLS_PK_MAX' from value '10' to '12' at gnutls.h:866:1





                and offset changed from 24256 to 30528 (in bits) (by +6272 bits)

                'const gnutls_group_entry_st* cand_group' offset changed from 24320 to 30592 (in bits) (by +6272 bits)

                'uint8_t hrr_cs[2]' offset changed from 24384 to 30656 (in bits) (by +6272 bits)

                'int session_ticket_renew' offset changed from 24416 to 30688 (in bits) (by +6272 bits)

                'tls13_ticket_st tls13_ticket' offset changed from 24448 to 30720 (in bits) (by +6272 bits)

                'uint32_t early_data_received' offset changed from 27584 to 33856 (in bits) (by +6272 bits)

                'gnutls_anti_replay_t anti_replay' offset changed from 27648 to 33920 (in bits) (by +6272 bits)

                'void* epoch_lock' offset changed from 27712 to 33984 (in bits) (by +6272 bits)



           type of 'gnutls_key_st gnutls_session_int::key' changed:

             underlying type 'struct gnutls_key_st' at gnutls_int.h:535:1 changed:

               type size changed from 22336 to 22656 (in bits)

               12 data member changes:

                type of 'struct {gnutls_pk_params_st ecdh_params; gnutls_pk_params_st ecdhx_params; gnutls_pk_params_st dh_params;} gnutls_key_st::kshare' changed:

                  type size changed from 11328 to 11520 (in bits)

                  3 data member changes:



                   'gnutls_pk_params_st ecdhx_params' offset changed from 3776 to 3840 (in bits) (by +64 bits)

                   type of 'gnutls_pk_params_st dh_params' changed:

                     underlying type 'struct {bigint_t params[16]; unsigned int params_nr; unsigned int pkflags; unsigned int qbits; gnutls_ecc_curve_t curve; gnutls_group_t dh_group; gnutls_gost_paramset_t gost_params; gnutls_datum_t raw_pub; gnutls_datum_t raw_priv; unsigned int seed_size; uint8_t seed[256]; gnutls_digest_algorithm_t palgo; gnutls_x509_spki_st spki; gnutls_pk_algorithm_t algo;}' at crypto-backend.h:194:1 changed:

                       type size changed from 3776 to 3840 (in bits)

                       2 data member changes (3 filtered):

                        type of 'gnutls_x509_spki_st spki' changed:

                          underlying type 'struct gnutls_x509_spki_st' at crypto-backend.h:175:1 changed:

                            type size changed from 128 to 192 (in bits)

                            2 data member insertions:

                              'gnutls_digest_algorithm_t gnutls_x509_spki_st::dsa_dig', at offset 128 (in bits) at crypto-backend.h:208:1

                              'unsigned int gnutls_x509_spki_st::flags', at offset 160 (in bits) at crypto-backend.h:212:1

                            no data member changes (2 filtered);



                        'gnutls_pk_algorithm_t algo' offset changed from 3712 to 3776 (in bits) (by +64 bits)

                   and offset changed from 7552 to 7680 (in bits) (by +128 bits)



                type of 'union {struct {uint8_t temp_secret[64]; unsigned int temp_secret_size; uint8_t e_ckey[64]; uint8_t hs_ckey[64]; uint8_t hs_skey[64]; uint8_t ap_ckey[64]; uint8_t ap_skey[64]; uint8_t ap_expkey[64]; uint8_t ap_rms[64];} tls13; struct {struct {gnutls_pk_params_st params; bigint_t x; bigint_t y; gnutls_datum_t raw;} ecdh; struct {gnutls_pk_params_st params; bigint_t client_Y;} dh; struct {bigint_t srp_key; bigint_t srp_g; bigint_t srp_p; bigint_t A; bigint_t B; bigint_t u; bigint_t b; bigint_t a; bigint_t x;} srp;} tls12;} gnutls_key_st::proto' changed:

                  type size changed from 8448 to 8576 (in bits)

                  1 data member change:

                   type of 'struct {struct {gnutls_pk_params_st params; bigint_t x; bigint_t y; gnutls_datum_t raw;} ecdh; struct {gnutls_pk_params_st params; bigint_t client_Y;} dh; struct {bigint_t srp_key; bigint_t srp_g; bigint_t srp_p; bigint_t A; bigint_t B; bigint_t u; bigint_t b; bigint_t a; bigint_t x;} srp;} tls12' changed:

                     type size changed from 8448 to 8576 (in bits)

                     3 data member changes:

                      type of 'struct {gnutls_pk_params_st params; bigint_t x; bigint_t y; gnutls_datum_t raw;} ecdh' changed:

                        type size changed from 4032 to 4096 (in bits)

                        3 data member changes (1 filtered):

                         'bigint_t x' offset changed from 3776 to 3840 (in bits) (by +64 bits)

                         'bigint_t y' offset changed from 3840 to 3904 (in bits) (by +64 bits)

                         'gnutls_datum_t raw' offset changed from 3904 to 3968 (in bits) (by +64 bits)



                      type of 'struct {gnutls_pk_params_st params; bigint_t client_Y;} dh' changed:

                        type size changed from 3840 to 3904 (in bits)

                        2 data member changes:



                         'bigint_t client_Y' offset changed from 3776 to 3840 (in bits) (by +64 bits)

                      and offset changed from 4032 to 4096 (in bits) (by +64 bits)

                      'struct {bigint_t srp_key; bigint_t srp_g; bigint_t srp_p; bigint_t A; bigint_t B; bigint_t u; bigint_t b; bigint_t a; bigint_t x;} srp' offset changed from 7872 to 8000 (in bits) (by +128 bits)



                and offset changed from 11328 to 11520 (in bits) (by +192 bits)

                'binder_data_st gnutls_key_st::binders[2]' offset changed from 19776 to 20096 (in bits) (by +320 bits)

                'gnutls_datum_t gnutls_key_st::key' offset changed from 20288 to 20608 (in bits) (by +320 bits)

                'uint8_t gnutls_key_st::session_ticket_key[64]' offset changed from 20416 to 20736 (in bits) (by +320 bits)

                'uint8_t gnutls_key_st::previous_ticket_key[64]' offset changed from 20928 to 21248 (in bits) (by +320 bits)

                'uint8_t gnutls_key_st::initial_stek[64]' offset changed from 21440 to 21760 (in bits) (by +320 bits)

                'void* gnutls_key_st::auth_info' offset changed from 21952 to 22272 (in bits) (by +320 bits)

                'gnutls_credentials_type_t gnutls_key_st::auth_info_type' offset changed from 22016 to 22336 (in bits) (by +320 bits)

                'int gnutls_key_st::auth_info_size' offset changed from 22048 to 22368 (in bits) (by +320 bits)

                'auth_cred_st* gnutls_key_st::cred' offset changed from 22080 to 22400 (in bits) (by +320 bits)

                'struct {uint64_t last_result; uint8_t was_rotated; gnutls_stek_rotation_callback_t cb;} gnutls_key_st::totp' offset changed from 22144 to 22464 (in bits) (by +320 bits)

           and offset changed from 30080 to 36352 (in bits) (by +6272 bits)





