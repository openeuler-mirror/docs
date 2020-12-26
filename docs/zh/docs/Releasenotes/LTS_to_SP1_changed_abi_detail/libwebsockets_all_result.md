# Functions changed info

---------------diffs in libwebsockets_libwebsockets.so.16_abidiff.out:----------------

ELF SONAME changed

Functions changes summary: 39 Removed, 19 Changed (100 filtered out), 274 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added (3 filtered out) variables



SONAME changed from 'libwebsockets.so.12' to 'libwebsockets.so.16'



39 Removed functions:



  [D] 'function int interface_to_sa(lws_vhost*, const char*, sockaddr_in*, size_t)'    {interface_to_sa}

  [D] 'function int lws_alloc_vfs_file(lws_context*, const char*, uint8_t**, lws_filepos_t*)'    {lws_alloc_vfs_file}

  [D] 'function lws* lws_client_connect(lws_context*, const char*, int, int, const char*, const char*, const char*, const char*, int)'    {lws_client_connect}

  [D] 'function lws* lws_client_connect_extended(lws_context*, const char*, int, int, const char*, const char*, const char*, const char*, int, void*)'    {lws_client_connect_extended}

  [D] 'function void lws_context_destroy2(lws_context*)'    {lws_context_destroy2}

  [D] 'function void lws_context_init_extensions(lws_context_creation_info*, lws_context*)'    {lws_context_init_extensions}

  [D] 'function int lws_context_init_server_ssl(lws_context_creation_info*, lws_vhost*)'    {lws_context_init_server_ssl}

  [D] 'function int lws_ext_parse_options(const lws_extension*, lws*, void*, const lws_ext_options*, const char*, int)'    {lws_ext_parse_options}

  [D] 'function int lws_extension_callback_pm_deflate(lws_context*, const lws_extension*, lws*, lws_extension_callback_reasons, void*, void*, size_t)'    {lws_extension_callback_pm_deflate}

  [D] 'function int lws_plat_change_pollfd(lws_context*, lws*, pollfd*)'    {lws_plat_change_pollfd}

  [D] 'function int lws_plat_check_connection_error(lws*)'    {lws_plat_check_connection_error}

  [D] 'function void lws_plat_context_early_destroy(lws_context*)'    {lws_plat_context_early_destroy}

  [D] 'function int lws_plat_context_early_init()'    {lws_plat_context_early_init}

  [D] 'function void lws_plat_context_late_destroy(lws_context*)'    {lws_plat_context_late_destroy}

  [D] 'function void lws_plat_delete_socket_from_fds(lws_context*, lws*, int)'    {lws_plat_delete_socket_from_fds}

  [D] 'function void lws_plat_drop_app_privileges(lws_context_creation_info*)'    {lws_plat_drop_app_privileges}

  [D] 'function const char* lws_plat_inet_ntop(int, void*, char*, int)'    {lws_plat_inet_ntop}

  [D] 'function int lws_plat_inet_pton(int, const char*, void*)'    {lws_plat_inet_pton}

  [D] 'function int lws_plat_init(lws_context*, lws_context_creation_info*)'    {lws_plat_init}

  [D] 'function void lws_plat_insert_socket_into_fds(lws_context*, lws*)'    {lws_plat_insert_socket_into_fds}

  [D] 'function int lws_plat_service(lws_context*, int)'    {lws_plat_service}

  [D] 'function void lws_plat_service_periodic(lws_context*)'    {lws_plat_service_periodic}

  [D] 'function int lws_plat_set_socket_options(lws_vhost*, int)'    {lws_plat_set_socket_options}

  [D] 'function int lws_poll_listen_fd(pollfd*)'    {lws_poll_listen_fd}

  [D] 'function int lws_read(lws*, unsigned char*, lws_filepos_t)'    {lws_read}

  [D] 'function void lws_server_get_canonical_hostname(lws_context*, lws_context_creation_info*)'    {lws_server_get_canonical_hostname}

  [D] 'function int lws_server_socket_service(lws_context*, lws*, pollfd*)'    {lws_server_socket_service}

  [D] 'function int lws_server_socket_service_ssl(lws*, lws_sockfd_type)'    {lws_server_socket_service_ssl}

  [D] 'function void lws_set_parent_carries_io(lws*)'    {lws_set_parent_carries_io}

  [D] 'function int lws_ssl_capable_read(lws*, unsigned char*, int)'    {lws_ssl_capable_read}

  [D] 'function int lws_ssl_capable_read_no_ssl(lws*, unsigned char*, int)'    {lws_ssl_capable_read_no_ssl}

  [D] 'function int lws_ssl_capable_write(lws*, unsigned char*, int)'    {lws_ssl_capable_write}

  [D] 'function int lws_ssl_capable_write_no_ssl(lws*, unsigned char*, int)'    {lws_ssl_capable_write_no_ssl}

  [D] 'function int lws_ssl_close(lws*)'    {lws_ssl_close}

  [D] 'function void lws_ssl_destroy(lws_vhost*)'    {lws_ssl_destroy}

  [D] 'function int lws_ssl_pending(lws*)'    {lws_ssl_pending}

  [D] 'function int lws_ssl_pending_no_ssl(lws*)'    {lws_ssl_pending_no_ssl}

  [D] 'function void lws_union_transition(lws*, connection_mode)'    {lws_union_transition}

  [D] 'function lws_vhost* lws_vhost_get(lws*)'    {lws_vhost_get}



274 Added functions:



  [A] 'function int __lws_sul_insert(lws_dll2_owner_t*, lws_sorted_usec_list_t*, lws_usec_t)'    {__lws_sul_insert}

  [A] 'function lws_usec_t __lws_sul_service_ripe(lws_dll2_owner_t*, lws_usec_t)'    {__lws_sul_service_ripe}

  [A] 'function int __lws_system_attach(lws_context*, int, lws_attach_cb_t, lws_system_states_t, void*, lws_attach_item**)'    {__lws_system_attach}

  [A] 'function void lejp_change_callback(lejp_ctx*, signed char (lejp_ctx*, char)*)'    {lejp_change_callback}

  [A] 'function void lejp_check_path_match(lejp_ctx*)'    {lejp_check_path_match}

  [A] 'function void lejp_construct(lejp_ctx*, signed char (lejp_ctx*, char)*, void*, const char* const*, unsigned char)'    {lejp_construct}

  [A] 'function void lejp_destruct(lejp_ctx*)'    {lejp_destruct}

  [A] 'function const char* lejp_error_to_string(int)'    {lejp_error_to_string}

  [A] 'function int lejp_get_wildcard(lejp_ctx*, int, char*, int)'    {lejp_get_wildcard}

  [A] 'function int lejp_parse(lejp_ctx*, const unsigned char*, int)'    {lejp_parse}

  [A] 'function int lejp_parser_pop(lejp_ctx*)'    {lejp_parser_pop}

  [A] 'function int lejp_parser_push(lejp_ctx*, void*, const char* const*, unsigned char, lejp_callback)'    {lejp_parser_push}

  [A] 'function int lws_add_http_common_headers(lws*, unsigned int, const char*, lws_filepos_t, unsigned char**, unsigned char*)'    {lws_add_http_common_headers}

  [A] 'function lws* lws_adopt_descriptor_vhost_via_info(const lws_adopt_desc_t*)'    {lws_adopt_descriptor_vhost_via_info}

  [A] 'function void lws_b64_decode_state_init(lws_b64state*)'    {lws_b64_decode_state_init}

  [A] 'function int lws_b64_decode_stateful(lws_b64state*, const char*, size_t*, uint8_t*, size_t*, int)'    {lws_b64_decode_stateful}

  [A] 'function int lws_b64_decode_string_len(const char*, int, char*, int)'    {lws_b64_decode_string_len}

  [A] 'function int lws_b64_encode_string_url(const char*, int, char*, int)'    {lws_b64_encode_string_url}

  [A] 'function int lws_base64_size(int)'    {lws_base64_size}

  [A] 'function int lws_buflist_append_segment(lws_buflist**, const uint8_t*, size_t)'    {lws_buflist_append_segment}

  [A] 'function void lws_buflist_describe(lws_buflist**, void*, const char*)'    {lws_buflist_describe}

  [A] 'function void lws_buflist_destroy_all_segments(lws_buflist**)'    {lws_buflist_destroy_all_segments}

  [A] 'function int lws_buflist_linear_copy(lws_buflist**, size_t, uint8_t*, size_t)'    {lws_buflist_linear_copy}

  [A] 'function size_t lws_buflist_next_segment_len(lws_buflist**, uint8_t**)'    {lws_buflist_next_segment_len}

  [A] 'function size_t lws_buflist_total_len(lws_buflist**)'    {lws_buflist_total_len}

  [A] 'function size_t lws_buflist_use_segment(lws_buflist**, size_t)'    {lws_buflist_use_segment}

  [A] 'function int lws_callback_vhost_protocols_vhost(lws_vhost*, int, void*, size_t)'    {lws_callback_vhost_protocols_vhost}

  [A] 'function int lws_client_http_multipart(lws*, const char*, const char*, const char*, char**, char*)'    {lws_client_http_multipart}

  [A] 'function const char* lws_cmdline_option(int, const char**, const char*)'    {lws_cmdline_option}

  [A] 'function void lws_cmdline_option_handle_builtin(int, const char**, lws_context_creation_info*)'    {lws_cmdline_option_handle_builtin}

  [A] 'function lws* lws_create_adopt_udp(lws_vhost*, const char*, int, int, const char*, const char*, lws*, void*, const lws_retry_bo_t*)'    {lws_create_adopt_udp}

  [A] 'function int lws_dir(const char*, void*, lws_dir_callback_function*)'    {lws_dir}

  [A] 'function lws_diskcache_scan* lws_diskcache_create(const char*, uint64_t)'    {lws_diskcache_create}

  [A] 'function void lws_diskcache_destroy(lws_diskcache_scan**)'    {lws_diskcache_destroy}

  [A] 'function int lws_diskcache_finalize_name(char*)'    {lws_diskcache_finalize_name}

  [A] 'function int lws_diskcache_prepare(const char*, int, int)'    {lws_diskcache_prepare}

  [A] 'function int lws_diskcache_query(lws_diskcache_scan*, int, const char*, int*, char*, int, size_t*)'    {lws_diskcache_query}

  [A] 'function int lws_diskcache_secs_to_idle(lws_diskcache_scan*)'    {lws_diskcache_secs_to_idle}

  [A] 'function int lws_diskcache_trim(lws_diskcache_scan*)'    {lws_diskcache_trim}

  [A] 'function void lws_dll2_add_before(lws_dll2*, lws_dll2*)'    {lws_dll2_add_before}

  [A] 'function void lws_dll2_add_head(lws_dll2*, lws_dll2_owner*)'    {lws_dll2_add_head}

  [A] 'function void lws_dll2_add_sorted(lws_dll2_t*, lws_dll2_owner_t*, int (const lws_dll2_t*, const lws_dll2_t*)*)'    {lws_dll2_add_sorted}

  [A] 'function void lws_dll2_add_tail(lws_dll2*, lws_dll2_owner*)'    {lws_dll2_add_tail}

  [A] 'function void lws_dll2_clear(lws_dll2*)'    {lws_dll2_clear}

  [A] 'function int lws_dll2_foreach_safe(lws_dll2_owner*, void*, int (lws_dll2*, void*)*)'    {lws_dll2_foreach_safe}

  [A] 'function void lws_dll2_owner_clear(lws_dll2_owner*)'    {lws_dll2_owner_clear}

  [A] 'function void lws_dll2_remove(lws_dll2*)'    {lws_dll2_remove}

  [A] 'function void lws_explicit_bzero(void*, size_t)'    {lws_explicit_bzero}

  [A] 'function void lws_filename_purify_inplace(char*)'    {lws_filename_purify_inplace}

  [A] 'function int lws_finalize_write_http_header(lws*, unsigned char*, unsigned char**, unsigned char*)'    {lws_finalize_write_http_header}

  [A] 'function void lws_fts_close(lws_fts_file*)'    {lws_fts_close}

  [A] 'function lws_fts* lws_fts_create(int)'    {lws_fts_create}

  [A] 'function void lws_fts_destroy(lws_fts**)'    {lws_fts_destroy}

  [A] 'function int lws_fts_file_index(lws_fts*, const char*, int, int)'    {lws_fts_file_index}

  [A] 'function int lws_fts_fill(lws_fts*, uint32_t, const char*, size_t)'    {lws_fts_fill}

  [A] 'function lws_fts_file* lws_fts_open(const char*)'    {lws_fts_open}

  [A] 'function lws_fts_result* lws_fts_search(lws_fts_file*, lws_fts_search_params*)'    {lws_fts_search}

  [A] 'function int lws_fts_serialize(lws_fts*)'    {lws_fts_serialize}

  [A] 'function int lws_genaes_create(lws_genaes_ctx*, enum_aes_operation, enum_aes_modes, lws_gencrypto_keyelem*, enum_aes_padding, void*)'    {lws_genaes_create}

  [A] 'function int lws_genaes_crypt(lws_genaes_ctx*, const uint8_t*, size_t, uint8_t*, uint8_t*, uint8_t*, size_t*, int)'    {lws_genaes_crypt}

  [A] 'function int lws_genaes_destroy(lws_genaes_ctx*, unsigned char*, size_t)'    {lws_genaes_destroy}

  [A] 'function int lws_gencrypto_bits_to_bytes(int)'    {lws_gencrypto_bits_to_bytes}

  [A] 'function int lws_gencrypto_jwe_alg_to_definition(const char*, const lws_jose_jwe_alg**)'    {lws_gencrypto_jwe_alg_to_definition}

  [A] 'function int lws_gencrypto_jwe_enc_to_definition(const char*, const lws_jose_jwe_alg**)'    {lws_gencrypto_jwe_enc_to_definition}

  [A] 'function int lws_gencrypto_jws_alg_to_definition(const char*, const lws_jose_jwe_alg**)'    {lws_gencrypto_jws_alg_to_definition}

  [A] 'function size_t lws_gencrypto_padded_length(size_t, size_t)'    {lws_gencrypto_padded_length}

  [A] 'function void lws_genec_destroy(lws_genec_ctx*)'    {lws_genec_destroy}

  [A] 'function void lws_genec_destroy_elements(lws_gencrypto_keyelem*)'    {lws_genec_destroy_elements}

  [A] 'function int lws_genec_dump(lws_gencrypto_keyelem*)'    {lws_genec_dump}

  [A] 'function int lws_genecdh_compute_shared_secret(lws_genec_ctx*, uint8_t*, int*)'    {lws_genecdh_compute_shared_secret}

  [A] 'function int lws_genecdh_create(lws_genec_ctx*, lws_context*, const lws_ec_curves*)'    {lws_genecdh_create}

  [A] 'function int lws_genecdh_new_keypair(lws_genec_ctx*, enum_lws_dh_side, const char*, lws_gencrypto_keyelem*)'    {lws_genecdh_new_keypair}

  [A] 'function int lws_genecdh_set_key(lws_genec_ctx*, lws_gencrypto_keyelem*, enum_lws_dh_side)'    {lws_genecdh_set_key}

  [A] 'function int lws_genecdsa_create(lws_genec_ctx*, lws_context*, const lws_ec_curves*)'    {lws_genecdsa_create}

  [A] 'function int lws_genecdsa_hash_sig_verify_jws(lws_genec_ctx*, const uint8_t*, lws_genhash_types, int, const uint8_t*, size_t)'    {lws_genecdsa_hash_sig_verify_jws}

  [A] 'function int lws_genecdsa_hash_sign_jws(lws_genec_ctx*, const uint8_t*, lws_genhash_types, int, uint8_t*, size_t)'    {lws_genecdsa_hash_sign_jws}

  [A] 'function int lws_genecdsa_new_keypair(lws_genec_ctx*, const char*, lws_gencrypto_keyelem*)'    {lws_genecdsa_new_keypair}

  [A] 'function int lws_genecdsa_set_key(lws_genec_ctx*, lws_gencrypto_keyelem*)'    {lws_genecdsa_set_key}

  [A] 'function int lws_genhmac_destroy(lws_genhmac_ctx*, void*)'    {lws_genhmac_destroy}

  [A] 'function int lws_genhmac_init(lws_genhmac_ctx*, lws_genhmac_types, const uint8_t*, size_t)'    {lws_genhmac_init}

  [A] 'function size_t lws_genhmac_size(lws_genhmac_types)'    {lws_genhmac_size}

  [A] 'function int lws_genhmac_update(lws_genhmac_ctx*, void*, size_t)'    {lws_genhmac_update}

  [A] 'function int lws_genrsa_create(lws_genrsa_ctx*, lws_gencrypto_keyelem*, lws_context*, enum_genrsa_mode, lws_genhash_types)'    {lws_genrsa_create}

  [A] 'function void lws_genrsa_destroy(lws_genrsa_ctx*)'    {lws_genrsa_destroy}

  [A] 'function void lws_genrsa_destroy_elements(lws_gencrypto_keyelem*)'    {lws_genrsa_destroy_elements}

  [A] 'function int lws_genrsa_hash_sig_verify(lws_genrsa_ctx*, const uint8_t*, lws_genhash_types, const uint8_t*, size_t)'    {lws_genrsa_hash_sig_verify}

  [A] 'function int lws_genrsa_hash_sign(lws_genrsa_ctx*, const uint8_t*, lws_genhash_types, uint8_t*, size_t)'    {lws_genrsa_hash_sign}

  [A] 'function int lws_genrsa_new_keypair(lws_context*, lws_genrsa_ctx*, enum_genrsa_mode, lws_gencrypto_keyelem*, int)'    {lws_genrsa_new_keypair}

  [A] 'function int lws_genrsa_private_decrypt(lws_genrsa_ctx*, const uint8_t*, size_t, uint8_t*, size_t)'    {lws_genrsa_private_decrypt}

  [A] 'function int lws_genrsa_private_encrypt(lws_genrsa_ctx*, const uint8_t*, size_t, uint8_t*)'    {lws_genrsa_private_encrypt}

  [A] 'function int lws_genrsa_public_decrypt(lws_genrsa_ctx*, const uint8_t*, size_t, uint8_t*, size_t)'    {lws_genrsa_public_decrypt}

  [A] 'function int lws_genrsa_public_encrypt(lws_genrsa_ctx*, const uint8_t*, size_t, uint8_t*)'    {lws_genrsa_public_encrypt}

  [A] 'function void lws_get_effective_uid_gid(lws_context*, int*, int*)'    {lws_get_effective_uid_gid}

  [A] 'function void* lws_get_opaque_user_data(const lws*)'    {lws_get_opaque_user_data}

  [A] 'function const char* lws_get_peer_simple_fd(lws_sockfd_type, char*, size_t)'    {lws_get_peer_simple_fd}

  [A] 'function int lws_get_tsi(lws*)'    {lws_get_tsi}

  [A] 'function const lws_udp* lws_get_udp(const lws*)'    {lws_get_udp}

  [A] 'function lws_vhost* lws_get_vhost_by_name(lws_context*, const char*)'    {lws_get_vhost_by_name}

  [A] 'function const char* lws_get_vhost_iface(lws_vhost*)'    {lws_get_vhost_iface}

  [A] 'function int lws_get_vhost_listen_port(lws_vhost*)'    {lws_get_vhost_listen_port}

  [A] 'function const char* lws_get_vhost_name(lws_vhost*)'    {lws_get_vhost_name}

  [A] 'function int lws_get_vhost_port(lws_vhost*)'    {lws_get_vhost_port}

  [A] 'function void* lws_get_vhost_user(lws_vhost*)'    {lws_get_vhost_user}

  [A] 'function int lws_h2_client_stream_long_poll_rxonly(lws*)'    {lws_h2_client_stream_long_poll_rxonly}

  [A] 'function int lws_h2_get_peer_txcredit_estimate(lws*)'    {lws_h2_get_peer_txcredit_estimate}

  [A] 'function int lws_h2_update_peer_txcredit(lws*, int, int)'    {lws_h2_update_peer_txcredit}

  [A] 'function int lws_hdr_custom_copy(lws*, char*, int, const char*, int)'    {lws_hdr_custom_copy}

  [A] 'function int lws_hdr_custom_length(lws*, const char*, int)'    {lws_hdr_custom_length}

  [A] 'function int lws_hex_to_byte_array(const char*, uint8_t*, int)'    {lws_hex_to_byte_array}

  [A] 'function int lws_http_basic_auth_gen(const char*, const char*, char*, size_t)'    {lws_http_basic_auth_gen}

  [A] 'function int lws_http_compression_apply(lws*, const char*, unsigned char**, unsigned char*, char)'    {lws_http_compression_apply}

  [A] 'function int lws_http_get_uri_and_method(lws*, char**, int*)'    {lws_http_get_uri_and_method}

  [A] 'function int lws_http_headers_detach(lws*)'    {lws_http_headers_detach}

  [A] 'function int lws_http_is_redirected_to_get(lws*)'    {lws_http_is_redirected_to_get}

  [A] 'function int lws_http_mark_sse(lws*)'    {lws_http_mark_sse}

  [A] 'function int lws_humanize(char*, int, uint64_t, const lws_humanize_unit_t*)'    {lws_humanize}

  [A] 'function void lws_jose_destroy(lws_jose*)'    {lws_jose_destroy}

  [A] 'function void lws_jose_init(lws_jose*)'    {lws_jose_init}

  [A] 'function int lws_json_purify_len(const char*)'    {lws_json_purify_len}

  [A] 'function int lws_jwa_concat_kdf(lws_jwe*, int, uint8_t*, const uint8_t*, int)'    {lws_jwa_concat_kdf}

  [A] 'function int lws_jwe_auth_and_decrypt(lws_jwe*, char*, int*)'    {lws_jwe_auth_and_decrypt}

  [A] 'function int lws_jwe_auth_and_decrypt_cbc_hs(lws_jwe*, uint8_t*, uint8_t*, int)'    {lws_jwe_auth_and_decrypt_cbc_hs}

  [A] 'function void lws_jwe_be64(uint64_t, uint8_t*)'    {lws_jwe_be64}

  [A] 'function int lws_jwe_create_packet(lws_jwe*, const char*, size_t, const char*, char*, size_t, lws_context*)'    {lws_jwe_create_packet}

  [A] 'function void lws_jwe_destroy(lws_jwe*)'    {lws_jwe_destroy}

  [A] 'function int lws_jwe_encrypt(lws_jwe*, char*, int*)'    {lws_jwe_encrypt}

  [A] 'function void lws_jwe_init(lws_jwe*, lws_context*)'    {lws_jwe_init}

  [A] 'function int lws_jwe_json_parse(lws_jwe*, const uint8_t*, int, char*, int*)'    {lws_jwe_json_parse}

  [A] 'function int lws_jwe_parse_jose(lws_jose*, const char*, int, char*, int*)'    {lws_jwe_parse_jose}

  [A] 'function int lws_jwe_render_compact(lws_jwe*, char*, size_t)'    {lws_jwe_render_compact}

  [A] 'function int lws_jwe_render_flattened(lws_jwe*, char*, size_t)'    {lws_jwe_render_flattened}

  [A] 'function void lws_jwk_destroy(lws_jwk*)'    {lws_jwk_destroy}

  [A] 'function int lws_jwk_dump(lws_jwk*)'    {lws_jwk_dump}

  [A] 'function int lws_jwk_dup_oct(lws_jwk*, void*, int)'    {lws_jwk_dup_oct}

  [A] 'function int lws_jwk_export(lws_jwk*, int, char*, int*)'    {lws_jwk_export}

  [A] 'function int lws_jwk_generate(lws_context*, lws_jwk*, lws_gencrypto_kty, int, const char*)'    {lws_jwk_generate}

  [A] 'function int lws_jwk_import(lws_jwk*, lws_jwk_key_import_callback, void*, const char*, size_t)'    {lws_jwk_import}

  [A] 'function int lws_jwk_load(lws_jwk*, const char*, lws_jwk_key_import_callback, void*)'    {lws_jwk_load}

  [A] 'function int lws_jwk_rfc7638_fingerprint(lws_jwk*, char*)'    {lws_jwk_rfc7638_fingerprint}

  [A] 'function int lws_jwk_save(lws_jwk*, const char*)'    {lws_jwk_save}

  [A] 'function int lws_jwk_strdup_meta(lws_jwk*, enum_jwk_meta_tok, const char*, int)'    {lws_jwk_strdup_meta}

  [A] 'function int lws_jws_alloc_element(lws_jws_map*, int, char*, int*, size_t, size_t)'    {lws_jws_alloc_element}

  [A] 'function int lws_jws_b64_compact_map(const char*, int, lws_jws_map*)'    {lws_jws_b64_compact_map}

  [A] 'function int lws_jws_base64_enc(const char*, size_t, char*, size_t)'    {lws_jws_base64_enc}

  [A] 'function int lws_jws_compact_decode(const char*, int, lws_jws_map*, lws_jws_map*, char*, int*)'    {lws_jws_compact_decode}

  [A] 'function int lws_jws_compact_encode(lws_jws_map*, const lws_jws_map*, char*, int*)'    {lws_jws_compact_encode}

  [A] 'function void lws_jws_destroy(lws_jws*)'    {lws_jws_destroy}

  [A] 'function int lws_jws_dup_element(lws_jws_map*, int, char*, int*, void*, size_t, size_t)'    {lws_jws_dup_element}

  [A] 'function int lws_jws_encode_b64_element(lws_jws_map*, int, char*, int*, void*, size_t)'    {lws_jws_encode_b64_element}

  [A] 'function int lws_jws_encode_section(const char*, size_t, int, char**, char*)'    {lws_jws_encode_section}

  [A] 'function void lws_jws_init(lws_jws*, lws_jwk*, lws_context*)'    {lws_jws_init}

  [A] 'function int lws_jws_parse_jose(lws_jose*, const char*, int, char*, int*)'    {lws_jws_parse_jose}

  [A] 'function int lws_jws_randomize_element(lws_context*, lws_jws_map*, int, char*, int*, size_t, size_t)'    {lws_jws_randomize_element}

  [A] 'function int lws_jws_sig_confirm(lws_jws_map*, lws_jws_map*, lws_jwk*, lws_context*)'    {lws_jws_sig_confirm}

  [A] 'function int lws_jws_sig_confirm_compact(lws_jws_map*, lws_jwk*, lws_context*, char*, int*)'    {lws_jws_sig_confirm_compact}

  [A] 'function int lws_jws_sig_confirm_compact_b64(const char*, size_t, lws_jws_map*, lws_jwk*, lws_context*, char*, int*)'    {lws_jws_sig_confirm_compact_b64}

  [A] 'function int lws_jws_sig_confirm_compact_b64_map(lws_jws_map*, lws_jwk*, lws_context*, char*, int*)'    {lws_jws_sig_confirm_compact_b64_map}

  [A] 'function int lws_jws_sig_confirm_json(const char*, size_t, lws_jws*, lws_jwk*, lws_context*, char*, int*)'    {lws_jws_sig_confirm_json}

  [A] 'function int lws_jws_sign_from_b64(lws_jose*, lws_jws*, char*, size_t)'    {lws_jws_sign_from_b64}

  [A] 'function int lws_jws_write_compact(lws_jws*, char*, size_t)'    {lws_jws_write_compact}

  [A] 'function int lws_jws_write_flattened_json(lws_jws*, char*, size_t)'    {lws_jws_write_flattened_json}

  [A] 'function void lws_list_ptr_insert(lws_list_ptr*, lws_list_ptr*, lws_list_ptr_sort_func_t)'    {lws_list_ptr_insert}

  [A] 'function lws_usec_t lws_now_usecs()'    {lws_now_usecs}

  [A] 'function int lws_open(const char*, int, ...)'    {lws_open}

  [A] 'function int lws_parse_numeric_address(const char*, uint8_t*, size_t)'    {lws_parse_numeric_address}

  [A] 'function int lws_plat_read_file(const char*, void*, int)'    {lws_plat_read_file}

  [A] 'function int lws_plat_recommended_rsa_bits()'    {lws_plat_recommended_rsa_bits}

  [A] 'function int lws_plat_write_cert(lws_vhost*, int, int, void*, int)'    {lws_plat_write_cert}

  [A] 'function int lws_plat_write_file(const char*, void*, int)'    {lws_plat_write_file}

  [A] 'function int lws_pvo_get_str(void*, const char*, const char**)'    {lws_pvo_get_str}

  [A] 'function const lws_protocol_vhost_options* lws_pvo_search(const lws_protocol_vhost_options*, const char*)'    {lws_pvo_search}

  [A] 'function int lws_raw_transaction_completed(lws*)'    {lws_raw_transaction_completed}

  [A] 'function unsigned int lws_retry_get_delay_ms(lws_context*, const lws_retry_bo_t*, uint16_t*, char*)'    {lws_retry_get_delay_ms}

  [A] 'function int lws_retry_sul_schedule(lws_context*, int, lws_sorted_usec_list_t*, const lws_retry_bo_t*, sul_cb_t, uint16_t*)'    {lws_retry_sul_schedule}

  [A] 'function int lws_retry_sul_schedule_retry_wsi(lws*, lws_sorted_usec_list_t*, sul_cb_t, uint16_t*)'    {lws_retry_sul_schedule_retry_wsi}

  [A] 'function void lws_ring_dump(lws_ring*, uint32_t*)'    {lws_ring_dump}

  [A] 'function int lws_sa46_compare_ads(const lws_sockaddr46*, const lws_sockaddr46*)'    {lws_sa46_compare_ads}

  [A] 'function int lws_sa46_parse_numeric_address(const char*, lws_sockaddr46*)'    {lws_sa46_parse_numeric_address}

  [A] 'function int lws_sa46_write_numeric_address(lws_sockaddr46*, char*, size_t)'    {lws_sa46_write_numeric_address}

  [A] 'function int lws_seq_check_wsi(lws_seq_t*, lws*)'    {lws_seq_check_wsi}

  [A] 'function lws_seq_t* lws_seq_create(lws_seq_info_t*)'    {lws_seq_create}

  [A] 'function void lws_seq_destroy(lws_seq_t**)'    {lws_seq_destroy}

  [A] 'function lws_seq_t* lws_seq_from_user(void*)'    {lws_seq_from_user}

  [A] 'function lws_context* lws_seq_get_context(lws_seq_t*)'    {lws_seq_get_context}

  [A] 'function const char* lws_seq_name(lws_seq_t*)'    {lws_seq_name}

  [A] 'function int lws_seq_queue_event(lws_seq_t*, lws_seq_events_t, void*, void*)'    {lws_seq_queue_event}

  [A] 'function int lws_seq_timeout_us(lws_seq_t*, lws_usec_t)'    {lws_seq_timeout_us}

  [A] 'function lws_usec_t lws_seq_us_since_creation(lws_seq_t*)'    {lws_seq_us_since_creation}

  [A] 'function uint16_t lws_ser_ru16be(const uint8_t*)'    {lws_ser_ru16be}

  [A] 'function uint32_t lws_ser_ru32be(const uint8_t*)'    {lws_ser_ru32be}

  [A] 'function uint64_t lws_ser_ru64be(const uint8_t*)'    {lws_ser_ru64be}

  [A] 'function void lws_ser_wu16be(uint8_t*, uint16_t)'    {lws_ser_wu16be}

  [A] 'function void lws_ser_wu32be(uint8_t*, uint32_t)'    {lws_ser_wu32be}

  [A] 'function void lws_ser_wu64be(uint8_t*, uint64_t)'    {lws_ser_wu64be}

  [A] 'function void lws_set_opaque_user_data(lws*, void*)'    {lws_set_opaque_user_data}

  [A] 'function int lws_set_socks(lws_vhost*, const char*)'    {lws_set_socks}

  [A] 'function void lws_set_timer_usecs(lws*, lws_usec_t)'    {lws_set_timer_usecs}

  [A] 'function lws_spa* lws_spa_create_via_info(lws*, const lws_spa_create_info_t*)'    {lws_spa_create_via_info}

  [A] 'function void lws_state_reg_deregister(lws_state_notify_link_t*)'    {lws_state_reg_deregister}

  [A] 'function void lws_state_reg_notifier(lws_state_manager_t*, lws_state_notify_link_t*)'    {lws_state_reg_notifier}

  [A] 'function void lws_state_reg_notifier_list(lws_state_manager_t*, lws_state_notify_link_t* const*)'    {lws_state_reg_notifier_list}

  [A] 'function int lws_state_transition(lws_state_manager_t*, int)'    {lws_state_transition}

  [A] 'function int lws_state_transition_steps(lws_state_manager_t*, int)'    {lws_state_transition_steps}

  [A] 'function int lws_strexp_expand(lws_strexp_t*, const char*, size_t, size_t*, size_t*)'    {lws_strexp_expand}

  [A] 'function void lws_strexp_init(lws_strexp_t*, void*, lws_strexp_expand_cb, char*, size_t)'    {lws_strexp_init}

  [A] 'function void lws_strexp_reset_out(lws_strexp_t*, char*, size_t)'    {lws_strexp_reset_out}

  [A] 'function char* lws_strncpy(char*, const char*, size_t)'    {lws_strncpy}

  [A] 'function void lws_sul_schedule(lws_context*, int, lws_sorted_usec_list_t*, sul_cb_t, lws_usec_t)'    {lws_sul_schedule}

  [A] 'function void lws_system_blob_destroy(lws_system_blob_t*)'    {lws_system_blob_destroy}

  [A] 'function void lws_system_blob_direct_set(lws_system_blob_t*, const uint8_t*, size_t)'    {lws_system_blob_direct_set}

  [A] 'function int lws_system_blob_get(lws_system_blob_t*, uint8_t*, size_t*, size_t)'    {lws_system_blob_get}

  [A] 'function int lws_system_blob_get_single_ptr(lws_system_blob_t*, const uint8_t**)'    {lws_system_blob_get_single_ptr}

  [A] 'function size_t lws_system_blob_get_size(lws_system_blob_t*)'    {lws_system_blob_get_size}

  [A] 'function int lws_system_blob_heap_append(lws_system_blob_t*, const uint8_t*, size_t)'    {lws_system_blob_heap_append}

  [A] 'function void lws_system_blob_heap_empty(lws_system_blob_t*)'    {lws_system_blob_heap_empty}

  [A] 'function lws_context* lws_system_context_from_system_mgr(lws_state_manager_t*)'    {lws_system_context_from_system_mgr}

  [A] 'function lws_system_blob_t* lws_system_get_blob(lws_context*, lws_system_blob_item_t, int)'    {lws_system_get_blob}

  [A] 'function const lws_system_ops_t* lws_system_get_ops(lws_context*)'    {lws_system_get_ops}

  [A] 'function lws_state_manager_t* lws_system_get_state_manager(lws_context*)'    {lws_system_get_state_manager}

  [A] 'function lws_threadpool* lws_threadpool_create(lws_context*, const lws_threadpool_create_args*, const char*, ...)'    {lws_threadpool_create}

  [A] 'function int lws_threadpool_dequeue(lws*)'    {lws_threadpool_dequeue}

  [A] 'function void lws_threadpool_destroy(lws_threadpool*)'    {lws_threadpool_destroy}

  [A] 'function void lws_threadpool_dump(lws_threadpool*)'    {lws_threadpool_dump}

  [A] 'function lws_threadpool_task* lws_threadpool_enqueue(lws_threadpool*, const lws_threadpool_task_args*, const char*, ...)'    {lws_threadpool_enqueue}

  [A] 'function void lws_threadpool_finish(lws_threadpool*)'    {lws_threadpool_finish}

  [A] 'function lws_threadpool_task_status lws_threadpool_task_status_wsi(lws*, lws_threadpool_task**, void**)'    {lws_threadpool_task_status_wsi}

  [A] 'function void lws_threadpool_task_sync(lws_threadpool_task*, int)'    {lws_threadpool_task_sync}

  [A] 'function int lws_timed_callback_vh_protocol(lws_vhost*, const lws_protocols*, int, int)'    {lws_timed_callback_vh_protocol}

  [A] 'function int lws_timed_callback_vh_protocol_us(lws_vhost*, const lws_protocols*, int, lws_usec_t)'    {lws_timed_callback_vh_protocol_us}

  [A] 'function int lws_timingsafe_bcmp(void*, void*, uint32_t)'    {lws_timingsafe_bcmp}

  [A] 'function int lws_tls_acme_sni_cert_create(lws_vhost*, const char*, const char*)'    {lws_tls_acme_sni_cert_create}

  [A] 'function int lws_tls_acme_sni_csr_create(lws_context*, const char**, uint8_t*, size_t, char**, size_t*)'    {lws_tls_acme_sni_csr_create}

  [A] 'function int lws_tls_cert_updated(lws_context*, const char*, const char*, const char*, size_t, const char*, size_t)'    {lws_tls_cert_updated}

  [A] 'function int lws_tls_client_vhost_extra_cert_mem(lws_vhost*, const uint8_t*, size_t)'    {lws_tls_client_vhost_extra_cert_mem}

  [A] 'function int lws_tls_peer_cert_info(lws*, lws_tls_cert_info, lws_tls_cert_info_results*, size_t)'    {lws_tls_peer_cert_info}

  [A] 'function int lws_tls_vhost_cert_info(lws_vhost*, lws_tls_cert_info, lws_tls_cert_info_results*, size_t)'    {lws_tls_vhost_cert_info}

  [A] 'function lws_tokenize_elem lws_tokenize(lws_tokenize*)'    {lws_tokenize}

  [A] 'function int lws_tokenize_cstr(lws_tokenize*, char*, size_t)'    {lws_tokenize_cstr}

  [A] 'function void lws_tokenize_init(lws_tokenize*, const char*, int)'    {lws_tokenize_init}

  [A] 'function void lws_validity_confirmed(lws*)'    {lws_validity_confirmed}

  [A] 'function int lws_vbi_decode(void*, uint64_t*, size_t)'    {lws_vbi_decode}

  [A] 'function int lws_vbi_encode(uint64_t, void*)'    {lws_vbi_encode}

  [A] 'function int lws_write_numeric_address(const uint8_t*, int, char*, size_t)'    {lws_write_numeric_address}

  [A] 'function int lws_wsi_tx_credit(lws*, char, int)'    {lws_wsi_tx_credit}

  [A] 'function int lws_x509_create(lws_x509_cert**)'    {lws_x509_create}

  [A] 'function void lws_x509_destroy(lws_x509_cert**)'    {lws_x509_destroy}

  [A] 'function int lws_x509_info(lws_x509_cert*, lws_tls_cert_info, lws_tls_cert_info_results*, size_t)'    {lws_x509_info}

  [A] 'function int lws_x509_jwk_privkey_pem(lws_jwk*, void*, size_t, const char*)'    {lws_x509_jwk_privkey_pem}

  [A] 'function int lws_x509_parse_from_pem(lws_x509_cert*, void*, size_t)'    {lws_x509_parse_from_pem}

  [A] 'function int lws_x509_public_to_jwk(lws_jwk*, lws_x509_cert*, const char*, int)'    {lws_x509_public_to_jwk}

  [A] 'function int lws_x509_verify(lws_x509_cert*, lws_x509_cert*, const char*)'    {lws_x509_verify}

  [A] 'function size_t lwsac_align(size_t)'    {lwsac_align}

  [A] 'function int lwsac_cached_file(const char*, lwsac_cached_file_t*, size_t*)'    {lwsac_cached_file}

  [A] 'function void lwsac_detach(lwsac**)'    {lwsac_detach}

  [A] 'function int lwsac_extend(lwsac*, int)'    {lwsac_extend}

  [A] 'function void lwsac_free(lwsac**)'    {lwsac_free}

  [A] 'function lwsac* lwsac_get_next(lwsac*)'    {lwsac_get_next}

  [A] 'function size_t lwsac_get_tail_pos(lwsac*)'    {lwsac_get_tail_pos}

  [A] 'function void lwsac_info(lwsac*)'    {lwsac_info}

  [A] 'function void lwsac_reference(lwsac*)'    {lwsac_reference}

  [A] 'function uint8_t* lwsac_scan_extant(lwsac*, uint8_t*, size_t, int)'    {lwsac_scan_extant}

  [A] 'function size_t lwsac_sizeof(int)'    {lwsac_sizeof}

  [A] 'function uint64_t lwsac_total_alloc(lwsac*)'    {lwsac_total_alloc}

  [A] 'function uint64_t lwsac_total_overhead(lwsac*)'    {lwsac_total_overhead}

  [A] 'function void lwsac_unreference(lwsac**)'    {lwsac_unreference}

  [A] 'function void* lwsac_use(lwsac**, size_t, size_t)'    {lwsac_use}

  [A] 'function void* lwsac_use_backfill(lwsac**, size_t, size_t)'    {lwsac_use_backfill}

  [A] 'function void lwsac_use_cached_file_detach(lwsac_cached_file_t*)'    {lwsac_use_cached_file_detach}

  [A] 'function void lwsac_use_cached_file_end(lwsac_cached_file_t*)'    {lwsac_use_cached_file_end}

  [A] 'function void lwsac_use_cached_file_start(lwsac_cached_file_t)'    {lwsac_use_cached_file_start}

  [A] 'function void* lwsac_use_zero(lwsac**, size_t, size_t)'    {lwsac_use_zero}

  [A] 'function void lwsl_emit_stderr_notimestamp(int, const char*)'    {lwsl_emit_stderr_notimestamp}

  [A] 'function int lwsws_get_config_globals(lws_context_creation_info*, const char*, char**, int*)'    {lwsws_get_config_globals}

  [A] 'function int lwsws_get_config_vhosts(lws_context*, lws_context_creation_info*, const char*, char**, int*)'    {lwsws_get_config_vhosts}



19 functions with some indirect sub-type change:



  [C]'function int _lws_plat_service_tsi(lws_context*, int, int)' at unix-service.c:68:1 has some indirect sub-type changes:

    parameter 1 of type 'lws_context*' has sub-type changes:

      in pointed to type 'struct lws_context' at private-lib-core.h:303:1:

        type size changed from 46272 to 11392 (in bits)

        9 data member deletions:

          'time_t lws_context::last_timeout_check_s', at offset 0 (in bits) at private-libwebsockets.h:1017:1



          'unsigned int lws_context::ssl_gate_accepts', at offset 26 (in bits) at private-libwebsockets.h:1124:1



          'lws_conn_stats lws_context::conn_stats', at offset 42752 (in bits) at private-libwebsockets.h:1029:1



          'pthread_mutex_t lws_context::lock', at offset 43392 (in bits) at private-libwebsockets.h:1031:1



          'int lws_context::lock_depth', at offset 43776 (in bits) at private-libwebsockets.h:1032:1



          'lws_plugin* lws_context::plugin_list', at offset 44032 (in bits) at private-libwebsockets.h:1049:1



          'int lws_context::started_with_parent', at offset 45600 (in bits) at private-libwebsockets.h:1099:1



          'volatile int lws_context::service_tid', at offset 46080 (in bits) at private-libwebsockets.h:1132:1



          'int lws_context::service_tid_detected', at offset 46112 (in bits) at private-libwebsockets.h:1133:1



        26 data member insertions:

          'unsigned int lws_context::policy_updated', at offset 20 (in bits) at private-lib-core.h:511:1

          'unsigned int lws_context::max_fds_unrelated_to_ulimit', at offset 21 (in bits) at private-lib-core.h:510:1

          'unsigned int lws_context::finalize_destroy_after_internal_loops_stopped', at offset 22 (in bits) at private-lib-core.h:509:1

          'unsigned int lws_context::done_protocol_destroy_cb', at offset 23 (in bits) at private-lib-core.h:508:1

          'unsigned int lws_context::being_destroyed2', at offset 27 (in bits) at private-lib-core.h:504:1

          'unsigned int lws_context::inside_context_destroy', at offset 30 (in bits) at private-lib-core.h:501:1

          'lws_system_blob_t lws_context::system_blobs[8]', at offset 2304 (in bits) at private-lib-core.h:316:1

          'lws_retry_bo_t lws_context::default_retry', at offset 6976 (in bits) at private-lib-core.h:320:1

          'lws_sorted_usec_list_t lws_context::sul_system_state', at offset 7168 (in bits) at private-lib-core.h:321:1

          'http2_settings lws_context::set', at offset 7488 (in bits) at private-lib-core.h:328:1

          'lws_context_tls lws_context::tls', at offset 7808 (in bits) at private-lib-core.h:353:1

          'lws_state_manager_t lws_context::mgr_system', at offset 8448 (in bits) at private-lib-core.h:368:1

          'lws_state_notify_link_t lws_context::protocols_notify', at offset 8896 (in bits) at private-lib-core.h:369:1

          'lws_vhost* lws_context::no_listener_vhost_list', at offset 9280 (in bits) at private-lib-core.h:378:1

          'lws_vhost* lws_context::vhost_system', at offset 9408 (in bits) at private-lib-core.h:380:1

          'lws_event_loop_ops* lws_context::event_loop_ops', at offset 9536 (in bits) at private-lib-core.h:386:1

          'const lws_tls_ops* lws_context::tls_ops', at offset 9600 (in bits) at private-lib-core.h:390:1

          'lws_context** lws_context::pcontext_finalize', at offset 9792 (in bits) at private-lib-core.h:417:1

          'const char* lws_context::username', at offset 9856 (in bits) at private-lib-core.h:418:1

          'const char* lws_context::groupname', at offset 9920 (in bits) at private-lib-core.h:418:1

          'lws_threadpool* lws_context::tp_list_head', at offset 10048 (in bits) at private-lib-core.h:431:1

          'const lws_system_ops_t* lws_context::system_ops', at offset 10112 (in bits) at private-lib-core.h:440:1

          'void (void*, int)* lws_context::eventlib_signal_cb', at offset 10496 (in bits) at private-lib-core.h:456:1

          'int lws_context::count_event_loop_static_asset_handles', at offset 10784 (in bits) at private-lib-core.h:475:1

          'uint8_t lws_context::udp_loss_sim_tx_pc', at offset 11320 (in bits) at private-lib-core.h:524:1

          'uint8_t lws_context::udp_loss_sim_rx_pc', at offset 11328 (in bits) at private-lib-core.h:525:1

        43 data member changes:

         'unsigned int lws_context::protocol_init_done' offset changed from 27 to 25 (in bits) (by -2 bits)

         'unsigned int lws_context::requested_kill' offset changed from 28 to 26 (in bits) (by -2 bits)

         'unsigned int lws_context::being_destroyed1' offset changed from 29 to 28 (in bits) (by -1 bits)

         'unsigned int lws_context::being_destroyed' offset changed from 30 to 29 (in bits) (by -1 bits)

         'time_t lws_context::last_ws_ping_pong_check_s' offset changed from 64 to 10688 (in bits) (by +10624 bits)

         'time_t lws_context::time_up' offset changed from 128 to 10560 (in bits) (by +10432 bits)

         'const lws_plat_file_ops* lws_context::fops' offset changed from 192 to 9728 (in bits) (by +9536 bits)

         'lws_plat_file_ops lws_context::fops_platform' offset changed from 256 to 768 (in bits) (by +512 bits)

         'lws_plat_file_ops lws_context::fops_zip' offset changed from 1024 to 1536 (in bits) (by +512 bits)

         type of 'lws_context_per_thread lws_context::pt[32]' changed:

           array element type 'struct lws_context_per_thread' changed: 

             type size changed from 1280 to 3136 (in bits)

             9 data member deletions:

               'lws* lws_context_per_thread::rx_draining_ext_list', at offset 448 (in bits) at private-libwebsockets.h:801:1



               'lws* lws_context_per_thread::tx_draining_ext_list', at offset 512 (in bits) at private-libwebsockets.h:802:1



               'void* lws_context_per_thread::http_header_data', at offset 640 (in bits) at private-libwebsockets.h:810:1



               'allocated_headers* lws_context_per_thread::ah_list', at offset 704 (in bits) at private-libwebsockets.h:811:1



               'int lws_context_per_thread::ah_wait_list_length', at offset 832 (in bits) at private-libwebsockets.h:813:1



               'lws* lws_context_per_thread::pending_read_list', at offset 896 (in bits) at private-libwebsockets.h:815:1



               'uint32_t lws_context_per_thread::ah_pool_length', at offset 1184 (in bits) at private-libwebsockets.h:850:1



               'short int lws_context_per_thread::ah_count_in_use', at offset 1216 (in bits) at private-libwebsockets.h:852:1



               'unsigned char lws_context_per_thread::lock_depth', at offset 1240 (in bits) at private-libwebsockets.h:854:1



             21 data member insertions:

               'unsigned char lws_context_per_thread::is_destroyed', at offset 2 (in bits) at private-lib-core-net.h:479:1

               'unsigned char lws_context_per_thread::destroy_self', at offset 3 (in bits) at private-lib-core-net.h:478:1

               'unsigned char lws_context_per_thread::event_loop_destroy_processing_done', at offset 4 (in bits) at private-lib-core-net.h:477:1

               'unsigned char lws_context_per_thread::event_loop_foreign', at offset 5 (in bits) at private-lib-core-net.h:476:1

               'unsigned char lws_context_per_thread::inside_lws_service', at offset 6 (in bits) at private-lib-core-net.h:475:1

               'unsigned char lws_context_per_thread::inside_service', at offset 7 (in bits) at private-lib-core-net.h:474:1

               'lws_dll2_owner lws_context_per_thread::seq_owner', at offset 192 (in bits) at private-lib-core-net.h:359:1

               'lws_dll2_owner_t lws_context_per_thread::attach_owner', at offset 384 (in bits) at private-lib-core-net.h:360:1

               'lws_sorted_usec_list_t lws_context_per_thread::sul_ah_lifecheck', at offset 1088 (in bits) at private-lib-core-net.h:377:1

               'lws_sorted_usec_list_t lws_context_per_thread::sul_tls', at offset 1408 (in bits) at private-lib-core-net.h:380:1

               'lws_sorted_usec_list_t lws_context_per_thread::sul_plat', at offset 1728 (in bits) at private-lib-core-net.h:383:1

               'lws_pt_tls lws_context_per_thread::tls', at offset 2048 (in bits) at private-lib-core-net.h:398:1

               'lws* lws_context_per_thread::fake_wsi', at offset 2240 (in bits) at private-lib-core-net.h:400:1

               'lws_context* lws_context_per_thread::context', at offset 2304 (in bits) at private-lib-core-net.h:402:1

               'volatile lws_foreign_thread_pollfd* volatile lws_context_per_thread::foreign_pfd_list', at offset 2496 (in bits) at private-lib-core-net.h:412:1

               'lws* lws_context_per_thread::pipe_wsi', at offset 2624 (in bits) at private-lib-core-net.h:418:1

               'lws_pt_role_http lws_context_per_thread::http', at offset 2688 (in bits) at private-lib-core-net.h:426:1

               'volatile int lws_context_per_thread::service_tid', at offset 3040 (in bits) at private-lib-core-net.h:466:1

               'int lws_context_per_thread::service_tid_detected', at offset 3072 (in bits) at private-lib-core-net.h:467:1

               'volatile unsigned char lws_context_per_thread::inside_poll', at offset 3104 (in bits) at private-lib-core-net.h:469:1

               'volatile unsigned char lws_context_per_thread::foreign_spinlock', at offset 3112 (in bits) at private-lib-core-net.h:470:1

             6 data member changes:

              'pollfd* lws_context_per_thread::fds' offset changed from 384 to 2432 (in bits) (by +2048 bits)

              'unsigned long int lws_context_per_thread::count_conns' offset changed from 960 to 2944 (in bits) (by +1984 bits)

              'unsigned char* lws_context_per_thread::serv_buf' offset changed from 1024 to 2368 (in bits) (by +1344 bits)

              'lws_sockfd_type lws_context_per_thread::dummy_pipe_fds[2]' offset changed from 1088 to 2560 (in bits) (by +1472 bits)

              'unsigned int lws_context_per_thread::fds_count' offset changed from 1152 to 3008 (in bits) (by +1856 bits)

              'unsigned char lws_context_per_thread::tid' offset changed from 1232 to 3120 (in bits) (by +1888 bits)

             3 data member changes:

              type of 'pthread_mutex_t lws_context_per_thread::lock' changed:

                entity changed from 'typedef pthread_mutex_t' to 'struct lws_dll2_owner' at lws-dll2.h:261:1

                type size changed from 384 to 192 (in bits)

              and name of 'lws_context_per_thread::lock' changed to 'lws_context_per_thread::dll_buflist_owner' at private-lib-core-net.h:358:1

              type of 'lws* lws_context_per_thread::timeout_list' changed:

                entity changed from 'lws*' to 'struct lws_dll2_owner' at lws-dll2.h:261:1

                type size changed from 64 to 192 (in bits)

              and name of 'lws_context_per_thread::timeout_list' changed to 'lws_context_per_thread::pt_sul_owner' at private-lib-core-net.h:371:1

              type of 'lws* lws_context_per_thread::ah_wait_list' changed:

                entity changed from 'lws*' to 'typedef lws_sorted_usec_list_t' at lws-timeout-timer.h:205:1

                type size changed from 64 to 320 (in bits)

              and name of 'lws_context_per_thread::ah_wait_list' changed to 'lws_context_per_thread::sul_seq_heartbeat' at private-lib-core-net.h:374:1

           type name changed from 'lws_context_per_thread[32]' to 'lws_context_per_thread[1]'

           array type size changed from 40960 to 3136

           array type subrange 1 changed length from 32 to 1

         and offset changed from 1792 to 3840 (in bits) (by +2048 bits)

         type of 'lws** lws_context::lws_lookup' changed:

           in pointed to type 'lws*':

             in pointed to type 'struct lws' at private-lib-core-net.h:642:1:

               type size changed from 4864 to 8256 (in bits)

               19 data member deletions:

                 'unsigned int lws::extension_data_pending', at offset 2 (in bits) at private-libwebsockets.h:1960:1



                 'time_t lws::pending_timeout_limit', at offset 2880 (in bits) at private-libwebsockets.h:1850:1



                 'lws** lws::same_vh_protocol_prev', at offset 3328 (in bits) at private-libwebsockets.h:1863:1



                 'lws* lws::same_vh_protocol_next', at offset 3392 (in bits) at private-libwebsockets.h:1863:1



                 'unsigned char* lws::rxflow_buffer', at offset 3712 (in bits) at private-libwebsockets.h:1873:1



                 'unsigned char* lws::trunc_alloc', at offset 3776 (in bits) at private-libwebsockets.h:1875:1



                 'SSL* lws::ssl', at offset 4096 (in bits) at private-libwebsockets.h:1887:1



                 'BIO* lws::client_bio', at offset 4160 (in bits) at private-libwebsockets.h:1888:1



                 'lws* lws::pending_read_list_prev', at offset 4224 (in bits) at private-libwebsockets.h:1889:1



                 'uint32_t lws::rxflow_len', at offset 4416 (in bits) at private-libwebsockets.h:1908:1



                 'uint32_t lws::rxflow_pos', at offset 4448 (in bits) at private-libwebsockets.h:1909:1



                 'unsigned int lws::trunc_alloc_len', at offset 4480 (in bits) at private-libwebsockets.h:1910:1



                 'unsigned int lws::trunc_offset', at offset 4512 (in bits) at private-libwebsockets.h:1911:1



                 'unsigned int lws::trunc_len', at offset 4544 (in bits) at private-libwebsockets.h:1912:1



                 'unsigned char lws::count_act_ext', at offset 4704 (in bits) at private-libwebsockets.h:1982:1



                 'uint8_t lws::ietf_spec_revision', at offset 4712 (in bits) at private-libwebsockets.h:1984:1



                 'char lws::mode', at offset 4720 (in bits) at private-libwebsockets.h:1985:1



                 'char lws::state', at offset 4728 (in bits) at private-libwebsockets.h:1986:1



                 'char lws::state_pre_close', at offset 4736 (in bits) at private-libwebsockets.h:1987:1



               61 data member insertions:

                 'unsigned int lws::client_suppress_CONNECTION_ERROR', at offset 3 (in bits) at private-lib-core-net.h:825:1

                 'unsigned int lws::client_no_follow_redirect', at offset 4 (in bits) at private-lib-core-net.h:824:1

                 'unsigned int lws::client_subsequent_mime_part', at offset 5 (in bits) at private-lib-core-net.h:823:1

                 'unsigned int lws::close_needs_ack', at offset 5 (in bits) at private-lib-core-net.h:785:1

                 'unsigned int lws::client_mux_migrated', at offset 6 (in bits) at private-lib-core-net.h:822:1

                 'unsigned int lws::client_mux_substream', at offset 7 (in bits) at private-lib-core-net.h:821:1

                 'unsigned int lws::told_event_loop_closed', at offset 7 (in bits) at private-lib-core-net.h:783:1

                 'unsigned int lws::client_h2_alpn', at offset 8 (in bits) at private-lib-core-net.h:820:1

                 'unsigned int lws::client_pipeline', at offset 9 (in bits) at private-lib-core-net.h:819:1

                 'unsigned int lws::interpreting', at offset 10 (in bits) at private-lib-core-net.h:780:1

                 'unsigned int lws::redirected_to_get', at offset 10 (in bits) at private-lib-core-net.h:818:1

                 'unsigned int lws::keepalive_active', at offset 12 (in bits) at private-lib-core-net.h:816:1

                 'unsigned int lws::transaction_from_pipeline_queue', at offset 13 (in bits) at private-lib-core-net.h:815:1

                 'unsigned int lws::shadow', at offset 18 (in bits) at private-lib-core-net.h:805:1

                 'unsigned int lws::outer_will_close', at offset 19 (in bits) at private-lib-core-net.h:804:1

                 'unsigned int lws::could_have_pending', at offset 20 (in bits) at private-lib-core-net.h:803:1

                 'unsigned int lws::do_broadcast', at offset 21 (in bits) at private-lib-core-net.h:770:1

                 'unsigned int lws::skip_fallback', at offset 21 (in bits) at private-lib-core-net.h:801:1

                 'unsigned int lws::validity_hup', at offset 22 (in bits) at private-lib-core-net.h:800:1

                 'unsigned int lws::oom4', at offset 23 (in bits) at private-lib-core-net.h:799:1

                 'unsigned int lws::do_bind', at offset 24 (in bits) at private-lib-core-net.h:798:1

                 'unsigned int lws::h2_acked_settings', at offset 25 (in bits) at private-lib-core-net.h:766:1

                 'unsigned int lws::proxied_ws_parent', at offset 25 (in bits) at private-lib-core-net.h:797:1

                 'unsigned int lws::h1_ws_proxied', at offset 26 (in bits) at private-lib-core-net.h:796:1

                 'unsigned int lws::h2_stream_carries_sse', at offset 26 (in bits) at private-lib-core-net.h:765:1

                 'unsigned int lws::close_when_buffered_out_drained', at offset 27 (in bits) at private-lib-core-net.h:795:1

                 'unsigned int lws::unix_skt', at offset 28 (in bits) at private-lib-core-net.h:794:1

                 'unsigned int lws::protocol_bind_balance', at offset 29 (in bits) at private-lib-core-net.h:793:1

                 'unsigned int lws::mux_substream', at offset 30 (in bits) at private-lib-core-net.h:761:1

                 'unsigned int lws::event_pipe', at offset 31 (in bits) at private-lib-core-net.h:791:1

                 '_lws_h2_related lws::h2', at offset 3264 (in bits) at private-lib-core-net.h:649:1

                 'lws_sorted_usec_list_t lws::sul_validity', at offset 4608 (in bits) at private-lib-core-net.h:682:1

                 'lws_dll2 lws::dll_buflist', at offset 4928 (in bits) at private-lib-core-net.h:684:1

                 'lws_dll2 lws::same_vh_protocol', at offset 5120 (in bits) at private-lib-core-net.h:685:1

                 'lws_dll2 lws::vh_awaiting_socket', at offset 5312 (in bits) at private-lib-core-net.h:686:1

                 'lws_dll2 lws::dll_cli_active_conns', at offset 5504 (in bits) at private-lib-core-net.h:692:1

                 'lws_dll2 lws::dll2_cli_txn_queue', at offset 5696 (in bits) at private-lib-core-net.h:693:1

                 'lws_dll2_owner lws::dll2_cli_txn_queue_owner', at offset 5888 (in bits) at private-lib-core-net.h:694:1

                 'const lws_role_ops* lws::role_ops', at offset 6400 (in bits) at private-lib-core-net.h:707:1

                 'lws_sequencer* lws::seq', at offset 6528 (in bits) at private-lib-core-net.h:709:1

                 'const lws_retry_bo_t* lws::retry_policy', at offset 6592 (in bits) at private-lib-core-net.h:710:1

                 'lws_threadpool_task* lws::tp_task', at offset 6656 (in bits) at private-lib-core-net.h:713:1

                 'lws_udp* lws::udp', at offset 6720 (in bits) at private-lib-core-net.h:721:1

                 'client_info_stash* lws::stash', at offset 6784 (in bits) at private-lib-core-net.h:724:1

                 'char* lws::cli_hostname_copy', at offset 6848 (in bits) at private-lib-core-net.h:725:1

                 'const addrinfo* lws::dns_results', at offset 6912 (in bits) at private-lib-core-net.h:726:1

                 'const addrinfo* lws::dns_results_next', at offset 6976 (in bits) at private-lib-core-net.h:727:1

                 'void* lws::opaque_user_data', at offset 7168 (in bits) at private-lib-core-net.h:731:1

                 'lws_buflist* lws::buflist', at offset 7232 (in bits) at private-lib-core-net.h:733:1

                 'lws_buflist* lws::buflist_out', at offset 7296 (in bits) at private-lib-core-net.h:734:1

                 'lws_lws_tls lws::tls', at offset 7360 (in bits) at private-lib-core-net.h:737:1

                 'lws_wsi_state_t lws::wsistate', at offset 7776 (in bits) at private-lib-core-net.h:747:1

                 'lws_wsi_state_t lws::wsistate_pre_close', at offset 7808 (in bits) at private-lib-core-net.h:748:1

                 'int lws::flags', at offset 7904 (in bits) at private-lib-core-net.h:756:1

                 'uint16_t lws::ocport', at offset 8032 (in bits) at private-lib-core-net.h:834:1

                 'uint16_t lws::retry', at offset 8064 (in bits) at private-lib-core-net.h:835:1

                 'uint8_t lws::bound_vhost_index', at offset 8136 (in bits) at private-lib-core-net.h:846:1

                 'uint8_t lws::lsp_channel', at offset 8144 (in bits) at private-lib-core-net.h:847:1

                 'uint8_t lws::addrinfo_idx', at offset 8160 (in bits) at private-lib-core-net.h:853:1

                 'uint8_t lws::sys_tls_client_cert', at offset 8168 (in bits) at private-lib-core-net.h:854:1

                 'uint8_t lws::immortal_substream_count', at offset 8184 (in bits) at private-lib-core-net.h:862:1

               47 data member changes:

                'unsigned int lws::client_http_body_pending' offset changed from 3 to 14 (in bits) (by +11 bits)

                'unsigned int lws::client_rx_avail' offset changed from 4 to 15 (in bits) (by +11 bits)

                'unsigned int lws::chunked' offset changed from 5 to 16 (in bits) (by +11 bits)

                'unsigned int lws::do_ws' offset changed from 6 to 17 (in bits) (by +11 bits)

                'unsigned int lws::rxflow_will_be_applied' offset changed from 7 to 7968 (in bits) (by +7961 bits)

                'unsigned int lws::seen_zero_length_recv' offset changed from 8 to 1 (in bits) (by -7 bits)

                'unsigned int lws::cgi_stdout_zero_length' offset changed from 9 to 2 (in bits) (by -7 bits)

                'unsigned int lws::parent_pending_cb_on_writable' offset changed from 10 to 3 (in bits) (by -7 bits)

                'unsigned int lws::ipv6' offset changed from 12 to 4 (in bits) (by -8 bits)

                'unsigned int lws::waiting_to_send_close_frame' offset changed from 13 to 6 (in bits) (by -7 bits)

                'unsigned int lws::told_user_closed' offset changed from 14 to 8 (in bits) (by -6 bits)

                'unsigned int lws::already_did_cce' offset changed from 15 to 9 (in bits) (by -6 bits)

                'unsigned int lws::sending_chunked' offset changed from 16 to 11 (in bits) (by -5 bits)

                'unsigned int lws::favoured_pollin' offset changed from 17 to 12 (in bits) (by -5 bits)

                'unsigned int lws::cache_intermediaries' offset changed from 18 to 13 (in bits) (by -5 bits)

                'unsigned int lws::cache_revalidate' offset changed from 19 to 14 (in bits) (by -5 bits)

                'unsigned int lws::cache_reuse' offset changed from 20 to 15 (in bits) (by -5 bits)

                'unsigned int lws::conn_stat_done' offset changed from 21 to 16 (in bits) (by -5 bits)

                'unsigned int lws::rxflow_change_to' offset changed from 23 to 17 (in bits) (by -6 bits)

                type of 'volatile unsigned int lws::leave_pollout_active' changed:

                  'volatile unsigned int' changed to 'volatile char'

                and offset changed from 25 to 8200 (in bits) (by +8175 bits)

                'unsigned int lws::socket_is_permanently_unusable' offset changed from 25 to 19 (in bits) (by -6 bits)

                type of 'volatile unsigned int lws::handling_pollout' changed:

                  'volatile unsigned int' changed to 'volatile char'

                and offset changed from 26 to 8192 (in bits) (by +8166 bits)

                'unsigned int lws::user_space_externally_allocated' offset changed from 26 to 20 (in bits) (by -6 bits)

                'unsigned int lws::listener' offset changed from 27 to 23 (in bits) (by -4 bits)

                'unsigned int lws::seen_nonpseudoheader' offset changed from 28 to 24 (in bits) (by -4 bits)

                'lws_context* lws::context' offset changed from 2944 to 6080 (in bits) (by +3136 bits)

                type of 'lws_vhost* lws::vhost' changed:

                  in pointed to type 'struct lws_vhost' at private-lib-core-net.h:511:1:

                    type size changed from 4160 to 8192 (in bits)

                    11 data member deletions:

                      'char lws_vhost::http_proxy_address[128]', at offset 0 (in bits) at private-libwebsockets.h:902:1



                      'unsigned int lws_vhost::user_supplied_ssl_ctx', at offset 31 (in bits) at private-libwebsockets.h:964:1



                      'lws_conn_stats lws_vhost::conn_stats', at offset 2048 (in bits) at private-libwebsockets.h:917:1



                      'const lws_http_mount* lws_vhost::mount_list', at offset 2816 (in bits) at private-libwebsockets.h:920:1



                      'lws** lws_vhost::same_vh_protocol_list', at offset 3392 (in bits) at private-libwebsockets.h:931:1



                      'SSL_CTX* lws_vhost::ssl_ctx', at offset 3456 (in bits) at private-libwebsockets.h:933:1



                      'SSL_CTX* lws_vhost::ssl_client_ctx', at offset 3520 (in bits) at private-libwebsockets.h:934:1



                      'unsigned int lws_vhost::http_proxy_port', at offset 3744 (in bits) at private-libwebsockets.h:945:1



                      'int lws_vhost::ssl_info_event_mask', at offset 4000 (in bits) at private-libwebsockets.h:956:1



                      'int lws_vhost::use_ssl', at offset 4032 (in bits) at private-libwebsockets.h:962:1



                      'int lws_vhost::allow_non_ssl_on_ssl_port', at offset 4064 (in bits) at private-libwebsockets.h:963:1



                    21 data member insertions:

                      'uint8_t lws_vhost::from_ss_policy', at offset 4 (in bits) at private-lib-core-net.h:603:1

                      'uint8_t lws_vhost::allocated_vhost_protocols', at offset 7 (in bits) at private-lib-core-net.h:600:1

                      'lws_vhost_role_h2 lws_vhost::h2', at offset 1024 (in bits) at private-lib-core-net.h:521:1

                      'lws_vhost_role_http lws_vhost::http', at offset 1344 (in bits) at private-lib-core-net.h:524:1

                      'char lws_vhost::socks_proxy_address[128]', at offset 2560 (in bits) at private-lib-core-net.h:531:1

                      'char lws_vhost::socks_password[96]', at offset 4352 (in bits) at private-lib-core-net.h:533:1

                      'const lws_retry_bo_t* lws_vhost::retry_policy', at offset 5312 (in bits) at private-lib-core-net.h:547:1

                      'const char* lws_vhost::listen_accept_role', at offset 5568 (in bits) at private-lib-core-net.h:552:1

                      'const char* lws_vhost::listen_accept_protocol', at offset 5632 (in bits) at private-lib-core-net.h:553:1

                      'const char* lws_vhost::unix_socket_perms', at offset 5696 (in bits) at private-lib-core-net.h:554:1

                      'void (lws_vhost*, void*)* lws_vhost::finalize', at offset 5760 (in bits) at private-lib-core-net.h:556:1

                      'void* lws_vhost::finalize_arg', at offset 5824 (in bits) at private-lib-core-net.h:557:1

                      'lws_dll2_owner* lws_vhost::same_vh_protocol_owner', at offset 6144 (in bits) at private-lib-core-net.h:563:1

                      'lws_vhost* lws_vhost::no_listener_vhost_list', at offset 6208 (in bits) at private-lib-core-net.h:564:1

                      'lws_dll2_owner lws_vhost::abstract_instances_owner', at offset 6272 (in bits) at private-lib-core-net.h:565:1

                      'lws_dll2_owner lws_vhost::dll_cli_active_conns_owner', at offset 6464 (in bits) at private-lib-core-net.h:568:1

                      'lws_dll2_owner lws_vhost::vh_awaiting_socket_owner', at offset 6656 (in bits) at private-lib-core-net.h:570:1

                      'lws_vhost_tls lws_vhost::tls', at offset 6848 (in bits) at private-lib-core-net.h:573:1

                      'lws_timed_vh_protocol* lws_vhost::timed_vh_protocol_list', at offset 7680 (in bits) at private-lib-core-net.h:576:1

                      'unsigned int lws_vhost::socks_proxy_port', at offset 7872 (in bits) at private-lib-core-net.h:585:1

                      'int lws_vhost::count_bound_wsi', at offset 8096 (in bits) at private-lib-core-net.h:594:1

                    24 data member changes:

                     type of 'unsigned int lws_vhost::being_destroyed' changed:

                       entity changed from 'unsigned int' to compatible type 'typedef uint8_t' at stdint-uintn.h:24:1

                         type name changed from 'unsigned int' to 'unsigned char'

                         type size changed from 32 to 8 (in bits)

                     and offset changed from 29 to 5 (in bits) (by -24 bits)

                     type of 'unsigned int lws_vhost::created_vhost_protocols' changed:

                       entity changed from 'unsigned int' to compatible type 'typedef uint8_t' at stdint-uintn.h:24:1

                         type name changed from 'unsigned int' to 'unsigned char'

                         type size changed from 32 to 8 (in bits)

                     and offset changed from 30 to 6 (in bits) (by -24 bits)

                     'char lws_vhost::proxy_basic_auth_token[128]' offset changed from 1024 to 0 (in bits) (by -1024 bits)

                     'lws_context* lws_vhost::context' offset changed from 2688 to 5184 (in bits) (by +2496 bits)

                     'lws_vhost* lws_vhost::vhost_next' offset changed from 2752 to 5248 (in bits) (by +2496 bits)

                     'lws* lws_vhost::lserv_wsi' offset changed from 2880 to 5376 (in bits) (by +2496 bits)

                     'const char* lws_vhost::name' offset changed from 2944 to 5440 (in bits) (by +2496 bits)

                     'const char* lws_vhost::iface' offset changed from 3008 to 5504 (in bits) (by +2496 bits)

                     'int lws_vhost::bind_iface' offset changed from 3072 to 7840 (in bits) (by +4768 bits)

                     'const lws_protocols* lws_vhost::protocols' offset changed from 3136 to 5888 (in bits) (by +2752 bits)

                     'void** lws_vhost::protocol_vh_privs' offset changed from 3200 to 5952 (in bits) (by +2752 bits)

                     'const lws_protocol_vhost_options* lws_vhost::pvo' offset changed from 3264 to 6016 (in bits) (by +2752 bits)

                     'const lws_protocol_vhost_options* lws_vhost::headers' offset changed from 3328 to 6080 (in bits) (by +2752 bits)

                     'void* lws_vhost::user' offset changed from 3648 to 7744 (in bits) (by +4096 bits)

                     'int lws_vhost::listen_port' offset changed from 3712 to 7808 (in bits) (by +4096 bits)

                     type of 'unsigned int lws_vhost::options' changed:

                       entity changed from 'unsigned int' to compatible type 'typedef uint64_t' at stdint-uintn.h:27:1

                         type name changed from 'unsigned int' to 'unsigned long int'

                         type size changed from 32 to 64 (in bits)

                     and offset changed from 3776 to 5120 (in bits) (by +1344 bits)

                     'int lws_vhost::count_protocols' offset changed from 3808 to 7904 (in bits) (by +4096 bits)

                     'int lws_vhost::ka_time' offset changed from 3840 to 7936 (in bits) (by +4096 bits)

                     'int lws_vhost::ka_probes' offset changed from 3872 to 7968 (in bits) (by +4096 bits)

                     'int lws_vhost::ka_interval' offset changed from 3904 to 8000 (in bits) (by +4096 bits)

                     'int lws_vhost::keepalive_timeout' offset changed from 3936 to 8032 (in bits) (by +4096 bits)

                     'int lws_vhost::timeout_secs_ah_idle' offset changed from 3968 to 8064 (in bits) (by +4096 bits)

                     'unsigned char lws_vhost::default_protocol_index' offset changed from 4104 to 8136 (in bits) (by +4032 bits)

                     'unsigned char lws_vhost::raw_protocol_index' offset changed from 4112 to 8144 (in bits) (by +4032 bits)

                    1 data member change:

                     type of 'const lws_extension* lws_vhost::extensions' changed:

                       entity changed from 'const lws_extension*' to 'char[96]'

                       type size changed from 64 to 768 (in bits)

                     and name of 'lws_vhost::extensions' changed to 'lws_vhost::socks_user' at private-lib-core-net.h:532:1

                and offset changed from 3008 to 6144 (in bits) (by +3136 bits)

                'lws* lws::parent' offset changed from 3072 to 6208 (in bits) (by +3136 bits)

                'lws* lws::child_list' offset changed from 3136 to 6272 (in bits) (by +3136 bits)

                'lws* lws::sibling_list' offset changed from 3200 to 6336 (in bits) (by +3136 bits)

                type of 'const lws_protocols* lws::protocol' changed:

                  in pointed to type 'const lws_protocols':

                    in unqualified underlying type 'struct lws_protocols' at lws-protocols-plugins.h:44:1:

                      type size hasn't changed

                      1 data member change:

                       type of 'lws_callback_function* lws_protocols::callback' changed:

                         in pointed to type 'typedef lws_callback_function' at lws-callbacks.h:879:1:

                           underlying type 'function type int (lws*, enum lws_callback_reasons, void*, void*, typedef size_t)' changed:

                             parameter 2 of type 'enum lws_callback_reasons' has sub-type changes:

                               type size hasn't changed

                               1 enumerator deletion:

                                 'lws_callback_reasons::LWS_CALLBACK_CHILD_WRITE_VIA_PARENT' value '68'



                               42 enumerator insertions:

                                 'lws_callback_reasons::LWS_CALLBACK_EVENT_WAIT_CANCELLED' value '71'

                                 'lws_callback_reasons::LWS_CALLBACK_VHOST_CERT_AGING' value '72'

                                 'lws_callback_reasons::LWS_CALLBACK_TIMER' value '73'

                                 'lws_callback_reasons::LWS_CALLBACK_VHOST_CERT_UPDATE' value '74'

                                 'lws_callback_reasons::LWS_CALLBACK_CLIENT_CLOSED' value '75'

                                 'lws_callback_reasons::LWS_CALLBACK_CLIENT_HTTP_DROP_PROTOCOL' value '76'

                                 'lws_callback_reasons::LWS_CALLBACK_WS_SERVER_BIND_PROTOCOL' value '77'

                                 'lws_callback_reasons::LWS_CALLBACK_WS_SERVER_DROP_PROTOCOL' value '78'

                                 'lws_callback_reasons::LWS_CALLBACK_WS_CLIENT_BIND_PROTOCOL' value '79'

                                 'lws_callback_reasons::LWS_CALLBACK_WS_CLIENT_DROP_PROTOCOL' value '80'

                                 'lws_callback_reasons::LWS_CALLBACK_RAW_SKT_BIND_PROTOCOL' value '81'

                                 'lws_callback_reasons::LWS_CALLBACK_RAW_SKT_DROP_PROTOCOL' value '82'

                                 'lws_callback_reasons::LWS_CALLBACK_RAW_FILE_BIND_PROTOCOL' value '83'

                                 'lws_callback_reasons::LWS_CALLBACK_RAW_FILE_DROP_PROTOCOL' value '84'

                                 'lws_callback_reasons::LWS_CALLBACK_CLIENT_HTTP_BIND_PROTOCOL' value '85'

                                 'lws_callback_reasons::LWS_CALLBACK_HTTP_CONFIRM_UPGRADE' value '86'

                                 'lws_callback_reasons::LWS_CALLBACK_RAW_PROXY_CLI_RX' value '89'

                                 'lws_callback_reasons::LWS_CALLBACK_RAW_PROXY_SRV_RX' value '90'

                                 'lws_callback_reasons::LWS_CALLBACK_RAW_PROXY_CLI_CLOSE' value '91'

                                 'lws_callback_reasons::LWS_CALLBACK_RAW_PROXY_SRV_CLOSE' value '92'

                                 'lws_callback_reasons::LWS_CALLBACK_RAW_PROXY_CLI_WRITEABLE' value '93'

                                 'lws_callback_reasons::LWS_CALLBACK_RAW_PROXY_SRV_WRITEABLE' value '94'

                                 'lws_callback_reasons::LWS_CALLBACK_RAW_PROXY_CLI_ADOPT' value '95'

                                 'lws_callback_reasons::LWS_CALLBACK_RAW_PROXY_SRV_ADOPT' value '96'

                                 'lws_callback_reasons::LWS_CALLBACK_RAW_PROXY_CLI_BIND_PROTOCOL' value '97'

                                 'lws_callback_reasons::LWS_CALLBACK_RAW_PROXY_SRV_BIND_PROTOCOL' value '98'

                                 'lws_callback_reasons::LWS_CALLBACK_RAW_PROXY_CLI_DROP_PROTOCOL' value '99'

                                 'lws_callback_reasons::LWS_CALLBACK_RAW_PROXY_SRV_DROP_PROTOCOL' value '100'

                                 'lws_callback_reasons::LWS_CALLBACK_RAW_CONNECTED' value '101'

                                 'lws_callback_reasons::LWS_CALLBACK_VERIFY_BASIC_AUTHORIZATION' value '102'

                                 'lws_callback_reasons::LWS_CALLBACK_WSI_TX_CREDIT_GET' value '103'

                                 'lws_callback_reasons::LWS_CALLBACK_MQTT_NEW_CLIENT_INSTANTIATED' value '200'

                                 'lws_callback_reasons::LWS_CALLBACK_MQTT_IDLE' value '201'

                                 'lws_callback_reasons::LWS_CALLBACK_MQTT_CLIENT_ESTABLISHED' value '202'

                                 'lws_callback_reasons::LWS_CALLBACK_MQTT_SUBSCRIBED' value '203'

                                 'lws_callback_reasons::LWS_CALLBACK_MQTT_CLIENT_WRITEABLE' value '204'

                                 'lws_callback_reasons::LWS_CALLBACK_MQTT_CLIENT_RX' value '205'

                                 'lws_callback_reasons::LWS_CALLBACK_MQTT_UNSUBSCRIBED' value '206'

                                 'lws_callback_reasons::LWS_CALLBACK_MQTT_DROP_PROTOCOL' value '207'

                                 'lws_callback_reasons::LWS_CALLBACK_MQTT_CLIENT_CLOSED' value '208'

                                 'lws_callback_reasons::LWS_CALLBACK_MQTT_ACK' value '209'

                                 'lws_callback_reasons::LWS_CALLBACK_MQTT_RESEND' value '210'





                and offset changed from 3264 to 6464 (in bits) (by +3200 bits)

                'void* lws::user_space' offset changed from 3584 to 7040 (in bits) (by +3456 bits)

                'void* lws::opaque_parent_data' offset changed from 3648 to 7104 (in bits) (by +3456 bits)

                'lws_sock_file_fd_type lws::desc' offset changed from 4352 to 7744 (in bits) (by +3392 bits)

                'int lws::position_in_fds_table' offset changed from 4384 to 7840 (in bits) (by +3456 bits)

                'int lws::chunk_remaining' offset changed from 4576 to 7872 (in bits) (by +3296 bits)

                'unsigned int lws::cache_secs' offset changed from 4608 to 7936 (in bits) (by +3328 bits)

                'unsigned short int lws::c_port' offset changed from 4688 to 8048 (in bits) (by +3360 bits)

                'char lws::lws_rx_parse_state' offset changed from 4744 to 8080 (in bits) (by +3336 bits)

                'char lws::rx_frame_type' offset changed from 4752 to 8088 (in bits) (by +3336 bits)

                'char lws::pending_timeout' offset changed from 4760 to 8096 (in bits) (by +3336 bits)

                'char lws::tsi' offset changed from 4768 to 8104 (in bits) (by +3336 bits)

                'char lws::protocol_interpret_idx' offset changed from 4776 to 8112 (in bits) (by +3336 bits)

                'char lws::redirects' offset changed from 4784 to 8120 (in bits) (by +3336 bits)

                'uint8_t lws::rxflow_bitmap' offset changed from 4792 to 8128 (in bits) (by +3336 bits)

                'char lws::chunk_parser' offset changed from 4800 to 8152 (in bits) (by +3352 bits)

                'char lws::reason_bf' offset changed from 4808 to 8176 (in bits) (by +3368 bits)

               6 data member changes (5 filtered):

                type of 'u lws::u' changed:

                  entity changed from 'union u' to 'struct _lws_http_mode_related' at private-lib-roles-http.h:217:1

                  type size changed from 2880 to 3264 (in bits)

                and name of 'lws::u' changed to 'lws::http' at private-lib-core-net.h:646:1

                type of 'lws* lws::timeout_list' changed:

                  in pointed to type 'struct lws' at private-lib-roles-ws.h:90:1:

                    type name changed from 'lws' to '_lws_websocket_related'

                    type size changed from 4864 to 1920 (in bits)

                    62 data member deletions:

                      'unsigned int lws::extension_data_pending', at offset 2 (in bits) at private-libwebsockets.h:1960:1



                      'unsigned int lws::client_http_body_pending', at offset 3 (in bits) at private-libwebsockets.h:1954:1



                      'unsigned int lws::client_rx_avail', at offset 4 (in bits) at private-libwebsockets.h:1953:1



                      'unsigned int lws::chunked', at offset 5 (in bits) at private-libwebsockets.h:1952:1



                      'unsigned int lws::do_ws', at offset 6 (in bits) at private-libwebsockets.h:1951:1



                      'unsigned int lws::rxflow_will_be_applied', at offset 7 (in bits) at private-libwebsockets.h:1941:1



                      'volatile unsigned int lws::leave_pollout_active', at offset 25 (in bits) at private-libwebsockets.h:1974:1



                      'unsigned int lws::socket_is_permanently_unusable', at offset 25 (in bits) at private-libwebsockets.h:1924:1



                      'volatile unsigned int lws::handling_pollout', at offset 26 (in bits) at private-libwebsockets.h:1973:1



                      'unsigned int lws::user_space_externally_allocated', at offset 26 (in bits) at private-libwebsockets.h:1923:1



                      'unsigned int lws::listener', at offset 27 (in bits) at private-libwebsockets.h:1922:1



                      'unsigned int lws::redirect_to_https', at offset 27 (in bits) at private-libwebsockets.h:1969:1



                      'unsigned int lws::seen_nonpseudoheader', at offset 28 (in bits) at private-libwebsockets.h:1921:1



                      'unsigned int lws::use_ssl', at offset 28 (in bits) at private-libwebsockets.h:1963:1



                      'unsigned int lws::upgraded_to_http2', at offset 29 (in bits) at private-libwebsockets.h:1920:1



                      'unsigned int lws::http2_substream', at offset 30 (in bits) at private-libwebsockets.h:1919:1



                      'unsigned int lws::hdr_parsing_completed', at offset 31 (in bits) at private-libwebsockets.h:1918:1



                      'time_t lws::pending_timeout_limit', at offset 2880 (in bits) at private-libwebsockets.h:1850:1



                      'lws_context* lws::context', at offset 2944 (in bits) at private-libwebsockets.h:1854:1



                      'lws_vhost* lws::vhost', at offset 3008 (in bits) at private-libwebsockets.h:1855:1



                      'lws* lws::parent', at offset 3072 (in bits) at private-libwebsockets.h:1856:1



                      'lws* lws::child_list', at offset 3136 (in bits) at private-libwebsockets.h:1857:1



                      'lws* lws::sibling_list', at offset 3200 (in bits) at private-libwebsockets.h:1858:1



                      'const lws_protocols* lws::protocol', at offset 3264 (in bits) at private-libwebsockets.h:1862:1



                      'lws** lws::same_vh_protocol_prev', at offset 3328 (in bits) at private-libwebsockets.h:1863:1



                      'lws* lws::same_vh_protocol_next', at offset 3392 (in bits) at private-libwebsockets.h:1863:1



                      'lws* lws::timeout_list', at offset 3456 (in bits) at private-libwebsockets.h:1864:1



                      'lws** lws::timeout_list_prev', at offset 3520 (in bits) at private-libwebsockets.h:1865:1



                      'void* lws::user_space', at offset 3584 (in bits) at private-libwebsockets.h:1870:1



                      'void* lws::opaque_parent_data', at offset 3648 (in bits) at private-libwebsockets.h:1871:1



                      'unsigned char* lws::rxflow_buffer', at offset 3712 (in bits) at private-libwebsockets.h:1873:1



                      'unsigned char* lws::trunc_alloc', at offset 3776 (in bits) at private-libwebsockets.h:1875:1



                      'const lws_extension* lws::active_extensions[2]', at offset 3840 (in bits) at private-libwebsockets.h:1883:1



                      'void* lws::act_ext_user[2]', at offset 3968 (in bits) at private-libwebsockets.h:1884:1



                      'SSL* lws::ssl', at offset 4096 (in bits) at private-libwebsockets.h:1887:1



                      'BIO* lws::client_bio', at offset 4160 (in bits) at private-libwebsockets.h:1888:1



                      'lws* lws::pending_read_list_prev', at offset 4224 (in bits) at private-libwebsockets.h:1889:1



                      'lws* lws::pending_read_list_next', at offset 4288 (in bits) at private-libwebsockets.h:1889:1



                      'lws_sock_file_fd_type lws::desc', at offset 4352 (in bits) at private-libwebsockets.h:1902:1



                      'int lws::position_in_fds_table', at offset 4384 (in bits) at private-libwebsockets.h:1907:1



                      'uint32_t lws::rxflow_len', at offset 4416 (in bits) at private-libwebsockets.h:1908:1



                      'uint32_t lws::rxflow_pos', at offset 4448 (in bits) at private-libwebsockets.h:1909:1



                      'unsigned int lws::trunc_alloc_len', at offset 4480 (in bits) at private-libwebsockets.h:1910:1



                      'unsigned int lws::trunc_offset', at offset 4512 (in bits) at private-libwebsockets.h:1911:1



                      'unsigned int lws::trunc_len', at offset 4544 (in bits) at private-libwebsockets.h:1912:1



                      'int lws::chunk_remaining', at offset 4576 (in bits) at private-libwebsockets.h:1914:1



                      'unsigned int lws::cache_secs', at offset 4608 (in bits) at private-libwebsockets.h:1916:1



                      'unsigned short int lws::c_port', at offset 4688 (in bits) at private-libwebsockets.h:1977:1



                      'unsigned char lws::count_act_ext', at offset 4704 (in bits) at private-libwebsockets.h:1982:1



                      'uint8_t lws::ietf_spec_revision', at offset 4712 (in bits) at private-libwebsockets.h:1984:1



                      'char lws::mode', at offset 4720 (in bits) at private-libwebsockets.h:1985:1



                      'char lws::state', at offset 4728 (in bits) at private-libwebsockets.h:1986:1



                      'char lws::state_pre_close', at offset 4736 (in bits) at private-libwebsockets.h:1987:1



                      'char lws::lws_rx_parse_state', at offset 4744 (in bits) at private-libwebsockets.h:1988:1



                      'char lws::rx_frame_type', at offset 4752 (in bits) at private-libwebsockets.h:1989:1



                      'char lws::pending_timeout', at offset 4760 (in bits) at private-libwebsockets.h:1990:1



                      'char lws::tsi', at offset 4768 (in bits) at private-libwebsockets.h:1991:1



                      'char lws::protocol_interpret_idx', at offset 4776 (in bits) at private-libwebsockets.h:1992:1



                      'char lws::redirects', at offset 4784 (in bits) at private-libwebsockets.h:1993:1



                      'uint8_t lws::rxflow_bitmap', at offset 4792 (in bits) at private-libwebsockets.h:1994:1



                      'char lws::chunk_parser', at offset 4800 (in bits) at private-libwebsockets.h:2000:1



                      'char lws::reason_bf', at offset 4808 (in bits) at private-libwebsockets.h:2003:1



                    18 data member insertions:

                      'lws_dll2_owner _lws_websocket_related::proxy_owner', at offset 64 (in bits) at private-lib-roles-ws.h:100:1

                      'char _lws_websocket_related::actual_protocol[16]', at offset 256 (in bits) at private-lib-roles-ws.h:101:1

                      'size_t _lws_websocket_related::proxy_buffered', at offset 384 (in bits) at private-lib-roles-ws.h:102:1

                      'uint8_t _lws_websocket_related::ping_payload_buf[141]', at offset 448 (in bits) at private-lib-roles-ws.h:106:1

                      'uint8_t _lws_websocket_related::mask[4]', at offset 1592 (in bits) at private-lib-roles-ws.h:131:1

                      'size_t _lws_websocket_related::rx_packet_length', at offset 1664 (in bits) at private-lib-roles-ws.h:133:1

                      'uint32_t _lws_websocket_related::rx_ubuf_head', at offset 1728 (in bits) at private-lib-roles-ws.h:134:1

                      'uint32_t _lws_websocket_related::rx_ubuf_alloc', at offset 1760 (in bits) at private-lib-roles-ws.h:135:1

                      'uint8_t _lws_websocket_related::ping_payload_len', at offset 1792 (in bits) at private-lib-roles-ws.h:137:1

                      'uint8_t _lws_websocket_related::mask_idx', at offset 1800 (in bits) at private-lib-roles-ws.h:138:1

                      'uint8_t _lws_websocket_related::opcode', at offset 1808 (in bits) at private-lib-roles-ws.h:139:1

                      'uint8_t _lws_websocket_related::rsv', at offset 1816 (in bits) at private-lib-roles-ws.h:140:1

                      'uint8_t _lws_websocket_related::rsv_first_msg', at offset 1824 (in bits) at private-lib-roles-ws.h:141:1

                      'uint8_t _lws_websocket_related::close_in_ping_buffer_len', at offset 1832 (in bits) at private-lib-roles-ws.h:143:1

                      'uint8_t _lws_websocket_related::utf8', at offset 1840 (in bits) at private-lib-roles-ws.h:144:1

                      'uint8_t _lws_websocket_related::stashed_write_type', at offset 1848 (in bits) at private-lib-roles-ws.h:145:1

                      'uint8_t _lws_websocket_related::tx_draining_stashed_wp', at offset 1856 (in bits) at private-lib-roles-ws.h:146:1

                      'uint8_t _lws_websocket_related::ietf_spec_revision', at offset 1864 (in bits) at private-lib-roles-ws.h:147:1

                    1 data member changes (16 filtered):

                     type of 'u lws::u' changed:

                       entity changed from 'union u' to 'unsigned char*'

                       type size changed from 2880 to 64 (in bits)

                     and name of 'lws::u' changed to '_lws_websocket_related::rx_ubuf' at private-lib-roles-ws.h:91:1

                and name of 'lws::timeout_list' changed to 'lws::ws' at private-lib-core-net.h:652:1

                type of 'lws** lws::timeout_list_prev' changed:

                  entity changed from 'lws**' to 'struct lws_muxable' at private-lib-core-net.h:36:1

                  type size changed from 64 to 320 (in bits)

                and name of 'lws::timeout_list_prev' changed to 'lws::mux' at private-lib-core-net.h:662:1

                type of 'const lws_extension* lws::active_extensions[2]' changed:

                  entity changed from 'const lws_extension*[2]' to 'struct lws_tx_credit' at private-lib-core.h:141:1

                and name of 'lws::active_extensions' changed to 'lws::txc' at private-lib-core-net.h:663:1

                type of 'void* lws::act_ext_user[2]' changed:

                  entity changed from 'void*[2]' to 'typedef lws_sorted_usec_list_t' at lws-timeout-timer.h:205:1

                  type size changed from 128 to 320 (in bits)

                and name of 'lws::act_ext_user' changed to 'lws::sul_timeout' at private-lib-core-net.h:680:1

                type of 'lws* lws::pending_read_list_next' changed:

                  entity changed from 'lws*' to 'typedef lws_sorted_usec_list_t' at lws-timeout-timer.h:205:1

                  type size changed from 64 to 320 (in bits)

                and name of 'lws::pending_read_list_next' changed to 'lws::sul_hrtimer' at private-lib-core-net.h:681:1

         and offset changed from 43840 to 9664 (in bits) (by -34176 bits)

         'lws_vhost* lws_context::vhost_list' offset changed from 43904 to 9216 (in bits) (by -34688 bits)

         'lws_vhost* lws_context::vhost_pending_destruction_list' offset changed from 43968 to 9344 (in bits) (by -34624 bits)

         'lws_deferred_free* lws_context::deferred_free_list' offset changed from 44096 to 9984 (in bits) (by -34112 bits)

         'void* lws_context::external_baggage_free_on_destroy' offset changed from 44160 to 10176 (in bits) (by -33984 bits)

         type of 'const lws_token_limits* lws_context::token_limits' changed:

           in pointed to type 'const lws_token_limits':

             in unqualified underlying type 'struct lws_token_limits' at lws-http.h:368:1:

               type size changed from 1456 to 1520 (in bits)

               1 data member change:

                type of 'unsigned short int lws_token_limits::token_limit[91]' changed:

                  type name changed from 'unsigned short int[91]' to 'unsigned short int[95]'

                  array type size changed from 1456 to 1520

                  array type subrange 1 changed length from 91 to 95



         and offset changed from 44224 to 10240 (in bits) (by -33984 bits)

         'void* lws_context::user_space' offset changed from 44288 to 10304 (in bits) (by -33984 bits)

         'const char* lws_context::server_string' offset changed from 44352 to 9472 (in bits) (by -34880 bits)

         'const lws_protocol_vhost_options* lws_context::reject_service_keywords' offset changed from 44416 to 10368 (in bits) (by -34048 bits)

         'lws_reload_func lws_context::deprecation_cb' offset changed from 44480 to 10432 (in bits) (by -34048 bits)

         type of 'char lws_context::canonical_hostname[128]' changed:

           type name changed from 'char[128]' to 'char[96]'

           array type size changed from 1024 to 768

           array type subrange 1 changed length from 128 to 96

         and offset changed from 44544 to 0 (in bits) (by -44544 bits)

         'int lws_context::max_fds' offset changed from 45568 to 10752 (in bits) (by -34816 bits)

         'int lws_context::uid' offset changed from 45632 to 10816 (in bits) (by -34816 bits)

         'int lws_context::gid' offset changed from 45664 to 10848 (in bits) (by -34816 bits)

         'int lws_context::fd_random' offset changed from 45696 to 10880 (in bits) (by -34816 bits)

         'int lws_context::count_wsi_allocated' offset changed from 45728 to 10912 (in bits) (by -34816 bits)

         'int lws_context::count_cgi_spawned' offset changed from 45760 to 10944 (in bits) (by -34816 bits)

         type of 'unsigned int lws_context::options' changed:

           entity changed from 'unsigned int' to compatible type 'typedef uint64_t' at stdint-uintn.h:27:1

             type name changed from 'unsigned int' to 'unsigned long int'

             type size changed from 32 to 64 (in bits)

         and offset changed from 45792 to 10624 (in bits) (by -35168 bits)

         'unsigned int lws_context::fd_limit_per_thread' offset changed from 45824 to 10976 (in bits) (by -34848 bits)

         'unsigned int lws_context::timeout_secs' offset changed from 45856 to 11008 (in bits) (by -34848 bits)

         'unsigned int lws_context::pt_serv_buf_size' offset changed from 45888 to 11040 (in bits) (by -34848 bits)

         'int lws_context::max_http_header_data' offset changed from 45920 to 11072 (in bits) (by -34848 bits)

         'int lws_context::simultaneous_ssl_restriction' offset changed from 45952 to 11136 (in bits) (by -34816 bits)

         'int lws_context::simultaneous_ssl' offset changed from 45984 to 11168 (in bits) (by -34816 bits)

         'unsigned int lws_context::doing_protocol_init' offset changed from 46048 to 24 (in bits) (by -46024 bits)

         type of 'short int lws_context::max_http_header_pool' changed:

           type name changed from 'short int' to 'int'

           type size changed from 16 to 32 (in bits)

         and offset changed from 46144 to 11104 (in bits) (by -35040 bits)

         'short int lws_context::count_threads' offset changed from 46160 to 11216 (in bits) (by -34944 bits)

         'short int lws_context::plugin_protocol_count' offset changed from 46176 to 11232 (in bits) (by -34944 bits)

         'short int lws_context::plugin_extension_count' offset changed from 46192 to 11248 (in bits) (by -34944 bits)

         'short int lws_context::server_string_len' offset changed from 46208 to 11264 (in bits) (by -34944 bits)

         'unsigned short int lws_context::ws_ping_pong_interval' offset changed from 46224 to 11280 (in bits) (by -34944 bits)

         'unsigned short int lws_context::deprecation_pending_listen_close_count' offset changed from 46240 to 11296 (in bits) (by -34944 bits)

         'uint8_t lws_context::max_fi' offset changed from 46256 to 11312 (in bits) (by -34944 bits)



  [C]'function int lws_add_http_header_by_token(lws*, lws_token_indexes, const unsigned char*, int, unsigned char**, unsigned char*)' at header.c:108:1 has some indirect sub-type changes:

    parameter 2 of type 'enum lws_token_indexes' has sub-type changes:

      type size hasn't changed

      5 enumerator insertions:

        'lws_token_indexes::WSI_TOKEN_REPLAY_NONCE' value '84'

        'lws_token_indexes::WSI_TOKEN_COLON_PROTOCOL' value '85'

        'lws_token_indexes::WSI_TOKEN_X_AUTH_TOKEN' value '86'

        'lws_token_indexes::_WSI_TOKEN_CLIENT_ALPN' value '94'

        'lws_token_indexes::WSI_TOKEN_UNKNOWN_VALUE_PART' value '97'



      13 enumerator changes:

        'lws_token_indexes::_WSI_TOKEN_CLIENT_SENT_PROTOCOLS' from value '84' to '87' at lws-http.h:215:1

        'lws_token_indexes::_WSI_TOKEN_CLIENT_PEER_ADDRESS' from value '85' to '88' at lws-http.h:215:1

        'lws_token_indexes::_WSI_TOKEN_CLIENT_URI' from value '86' to '89' at lws-http.h:215:1

        'lws_token_indexes::_WSI_TOKEN_CLIENT_HOST' from value '87' to '90' at lws-http.h:215:1

        'lws_token_indexes::_WSI_TOKEN_CLIENT_ORIGIN' from value '88' to '91' at lws-http.h:215:1

        'lws_token_indexes::_WSI_TOKEN_CLIENT_METHOD' from value '89' to '92' at lws-http.h:215:1

        'lws_token_indexes::_WSI_TOKEN_CLIENT_IFACE' from value '90' to '93' at lws-http.h:215:1

        'lws_token_indexes::WSI_TOKEN_COUNT' from value '91' to '95' at lws-http.h:215:1

        'lws_token_indexes::WSI_TOKEN_NAME_PART' from value '92' to '96' at lws-http.h:215:1

        'lws_token_indexes::WSI_TOKEN_SKIPPING' from value '93' to '98' at lws-http.h:215:1

        'lws_token_indexes::WSI_TOKEN_SKIPPING_SAW_CR' from value '94' to '99' at lws-http.h:215:1

        'lws_token_indexes::WSI_PARSING_COMPLETE' from value '95' to '100' at lws-http.h:215:1

        'lws_token_indexes::WSI_INIT_TOKEN_MUXURL' from value '96' to '101' at lws-http.h:215:1





  [C]'function lws* lws_adopt_descriptor_vhost(lws_vhost*, lws_adoption_type, lws_sock_file_fd_type, const char*, lws*)' at adopt.c:312:1 has some indirect sub-type changes:

    parameter 2 of type 'typedef lws_adoption_type' has sub-type changes:

      underlying type 'enum __anonymous_enum__' at libwebsockets.h:4484:1 changed:

        type size hasn't changed

        1 enumerator deletion:

          '__anonymous_enum__::LWS_ADOPT_WS_PARENTIO' value '8'



        3 enumerator insertions:

          '__anonymous_enum__::LWS_ADOPT_FLAG_UDP' value '16'

          '__anonymous_enum__::LWS_ADOPT_RAW_SOCKET_UDP' value '18'

          '__anonymous_enum__::LWS_ADOPT_FLAG_RAW_PROXY' value '32'





  [C]'function int lws_chunked_html_process(lws_process_html_args*, lws_process_html_state*)' at server.c:3066:1 has some indirect sub-type changes:

    parameter 1 of type 'lws_process_html_args*' has sub-type changes:

      in pointed to type 'struct lws_process_html_args' at lws-http.h:132:1:

        type size hasn't changed

        1 data member insertion:

          'int lws_process_html_args::chunked', at offset 160 (in bits) at lws-http.h:137:1



  [C]'function lws* lws_client_connect_via_info(lws_client_connect_info*)' at connect.c:29:1 has some indirect sub-type changes:

    parameter 1 of type 'lws_client_connect_info*' changed:

      in pointed to type 'struct lws_client_connect_info':

        entity changed from 'struct lws_client_connect_info' to 'const lws_client_connect_info'

        type size changed from 1344 to 1792 (in bits)



  [C]'function lws* lws_client_reset(lws**, int, const char*, int, const char*, const char*)' at client-handshake.c:1043:1 has some indirect sub-type changes:

    parameter 7 of type 'char' was added





  [C]'function lws_context* lws_create_context(lws_context_creation_info*)' at context.c:194:1 has some indirect sub-type changes:

    parameter 1 of type 'lws_context_creation_info*' changed:

      in pointed to type 'struct lws_context_creation_info':

        entity changed from 'struct lws_context_creation_info' to 'const lws_context_creation_info'

        type size changed from 3584 to 5440 (in bits)



  [C]'function lws_vhost* lws_create_vhost(lws_context*, lws_context_creation_info*)' at vhost.c:466:1 has some indirect sub-type changes:

    parameter 2 of type 'lws_context_creation_info*' changed:

      in pointed to type 'struct lws_context_creation_info':

        entity changed from 'struct lws_context_creation_info' to 'const lws_context_creation_info'

        type size changed from 3584 to 5440 (in bits)



  [C]'function int lws_genhash_init(lws_genhash_ctx*, int)' at lws-genhash.c:35:1 has some indirect sub-type changes:

    parameter 2 of type 'int' changed:

      entity changed from 'int' to 'enum lws_genhash_types' at lws-genhash.h:36:1

      type size hasn't changed

      type alignement changed from 0 to 32



  [C]'function size_t lws_genhash_size(int)' at lws-gencrypto-common.c:630:1 has some indirect sub-type changes:

    parameter 1 of type 'int' changed:

      entity changed from 'int' to 'enum lws_genhash_types' at lws-genhash.h:36:1

      type size hasn't changed

      type alignement changed from 0 to 32



  [C]'function const char* lws_get_peer_simple(lws*, char*, int)' at network.c:132:1 has some indirect sub-type changes:

    parameter 3 of type 'int' changed:

      entity changed from 'int' to compatible type 'typedef size_t' at stddef.h:216:1

        type name changed from 'int' to 'unsigned long int'

        type size changed from 32 to 64 (in bits)



  [C]'function size_t lws_get_peer_write_allowance(lws*)' at wsi.c:437:1 has some indirect sub-type changes:

    return type changed:

      typedef name changed from size_t to lws_fileofs_t at libwebsockets.h:514:1

      underlying type 'unsigned long int' changed:

        type name changed from 'unsigned long int' to 'long long int'

        type size hasn't changed





  [C]'function int lws_get_random(lws_context*, void*, int)' at unix-misc.c:51:1 has some indirect sub-type changes:

    return type changed:

      entity changed from 'int' to compatible type 'typedef size_t' at stddef.h:216:1

        type name changed from 'int' to 'unsigned long int'

        type size changed from 32 to 64 (in bits)



  [C]'function int lws_hdr_copy(lws*, char*, int, lws_token_indexes)' at parsers.c:539:1 has some indirect sub-type changes:

    parameter 4 of type 'enum lws_token_indexes' has sub-type changes:

      enum type 'enum lws_token_indexes' changed at libwebsockets.h:3313:1, as reported earlier



  [C]'function int lws_init_vhost_client_ssl(const lws_context_creation_info*, lws_vhost*)' at vhost.c:863:1 has some indirect sub-type changes:

    parameter 1 of type 'const lws_context_creation_info*' has sub-type changes:

      in pointed to type 'const lws_context_creation_info':

        in unqualified underlying type 'struct lws_context_creation_info' at lws-context-vhost.h:244:1:

          type size changed from 3584 to 5440 (in bits)

          35 data member insertions:

            'void* lws_context_creation_info::client_ssl_cert_mem', at offset 2368 (in bits) at lws-context-vhost.h:477:1

            'unsigned int lws_context_creation_info::client_ssl_cert_mem_len', at offset 2432 (in bits) at lws-context-vhost.h:480:1

            'void* lws_context_creation_info::client_ssl_ca_mem', at offset 2624 (in bits) at lws-context-vhost.h:491:1

            'unsigned int lws_context_creation_info::client_ssl_ca_mem_len', at offset 2688 (in bits) at lws-context-vhost.h:494:1

            'const char* lws_context_creation_info::error_document_404', at offset 3392 (in bits) at lws-context-vhost.h:574:1

            'const char* lws_context_creation_info::alpn', at offset 3456 (in bits) at lws-context-vhost.h:578:1

            'void** lws_context_creation_info::foreign_loops', at offset 3520 (in bits) at lws-context-vhost.h:585:1

            'void (void*, int)* lws_context_creation_info::signal_cb', at offset 3584 (in bits) at lws-context-vhost.h:599:1

            'lws_context** lws_context_creation_info::pcontext', at offset 3648 (in bits) at lws-context-vhost.h:605:1

            'void (lws_vhost*, void*)* lws_context_creation_info::finalize', at offset 3712 (in bits) at lws-context-vhost.h:611:1

            'void* lws_context_creation_info::finalize_arg', at offset 3776 (in bits) at lws-context-vhost.h:616:1

            'unsigned int lws_context_creation_info::max_http_header_pool2', at offset 3840 (in bits) at lws-context-vhost.h:620:1

            'long int lws_context_creation_info::ssl_client_options_set', at offset 3904 (in bits) at lws-context-vhost.h:626:1

            'long int lws_context_creation_info::ssl_client_options_clear', at offset 3968 (in bits) at lws-context-vhost.h:628:1

            'const char* lws_context_creation_info::tls1_3_plus_cipher_list', at offset 4032 (in bits) at lws-context-vhost.h:631:1

            'const char* lws_context_creation_info::client_tls_1_3_plus_cipher_list', at offset 4096 (in bits) at lws-context-vhost.h:638:1

            'const char* lws_context_creation_info::listen_accept_role', at offset 4160 (in bits) at lws-context-vhost.h:644:1

            'const char* lws_context_creation_info::listen_accept_protocol', at offset 4224 (in bits) at lws-context-vhost.h:649:1

            'const lws_protocols** lws_context_creation_info::pprotocols', at offset 4288 (in bits) at lws-context-vhost.h:653:1

            'void* lws_context_creation_info::server_ssl_cert_mem', at offset 4352 (in bits) at lws-context-vhost.h:664:1

            'unsigned int lws_context_creation_info::server_ssl_cert_mem_len', at offset 4416 (in bits) at lws-context-vhost.h:668:1

            'void* lws_context_creation_info::server_ssl_private_key_mem', at offset 4480 (in bits) at lws-context-vhost.h:671:1

            'unsigned int lws_context_creation_info::server_ssl_private_key_mem_len', at offset 4544 (in bits) at lws-context-vhost.h:676:1

            'void* lws_context_creation_info::server_ssl_ca_mem', at offset 4608 (in bits) at lws-context-vhost.h:678:1

            'unsigned int lws_context_creation_info::server_ssl_ca_mem_len', at offset 4672 (in bits) at lws-context-vhost.h:682:1

            'const char* lws_context_creation_info::username', at offset 4736 (in bits) at lws-context-vhost.h:684:1

            'const char* lws_context_creation_info::groupname', at offset 4800 (in bits) at lws-context-vhost.h:686:1

            'const char* lws_context_creation_info::unix_socket_perms', at offset 4864 (in bits) at lws-context-vhost.h:688:1

            'const lws_system_ops_t* lws_context_creation_info::system_ops', at offset 4928 (in bits) at lws-context-vhost.h:692:1

            'det_lat_buf_cb_t lws_context_creation_info::detailed_latency_cb', at offset 4992 (in bits) at lws-context-vhost.h:695:1

            'const char* lws_context_creation_info::detailed_latency_filepath', at offset 5056 (in bits) at lws-context-vhost.h:698:1

            'const lws_retry_bo_t* lws_context_creation_info::retry_and_idle_policy', at offset 5120 (in bits) at lws-context-vhost.h:700:1

            'lws_state_notify_link_t* const* lws_context_creation_info::register_notifier_list', at offset 5184 (in bits) at lws-context-vhost.h:704:1

            'uint8_t lws_context_creation_info::udp_loss_sim_tx_pc', at offset 5248 (in bits) at lws-context-vhost.h:708:1

            'uint8_t lws_context_creation_info::udp_loss_sim_rx_pc', at offset 5256 (in bits) at lws-context-vhost.h:711:1

          44 data member changes (2 filtered):

           type of 'const lws_extension* lws_context_creation_info::extensions' changed:

             in pointed to type 'const lws_extension':

               in unqualified underlying type 'struct lws_extension' at lws-ws-ext.h:139:1:

                 type size hasn't changed

                 1 data member change:

                  type of 'lws_extension_callback_function* lws_extension::callback' changed:

                    in pointed to type 'typedef lws_extension_callback_function' at lws-ws-ext.h:133:1:

                      underlying type 'function type int (lws_context*, const lws_extension*, lws*, enum lws_extension_callback_reasons, void*, void*, typedef size_t)' changed:

                        parameter 4 of type 'enum lws_extension_callback_reasons' has sub-type changes:

                          type size hasn't changed

                          17 enumerator deletions:

                            'lws_extension_callback_reasons::LWS_EXT_CB_SERVER_CONTEXT_CONSTRUCT' value '0'

                            'lws_extension_callback_reasons::LWS_EXT_CB_CLIENT_CONTEXT_CONSTRUCT' value '1'

                            'lws_extension_callback_reasons::LWS_EXT_CB_SERVER_CONTEXT_DESTRUCT' value '2'

                            'lws_extension_callback_reasons::LWS_EXT_CB_CLIENT_CONTEXT_DESTRUCT' value '3'

                            'lws_extension_callback_reasons::LWS_EXT_CB_CHECK_OK_TO_REALLY_CLOSE' value '6'

                            'lws_extension_callback_reasons::LWS_EXT_CB_CHECK_OK_TO_PROPOSE_EXTENSION' value '7'

                            'lws_extension_callback_reasons::LWS_EXT_CB_DESTROY_ANY_WSI_CLOSING' value '9'

                            'lws_extension_callback_reasons::LWS_EXT_CB_ANY_WSI_ESTABLISHED' value '10'

                            'lws_extension_callback_reasons::LWS_EXT_CB_PACKET_RX_PREPARSE' value '11'

                            'lws_extension_callback_reasons::LWS_EXT_CB_PACKET_TX_DO_SEND' value '13'

                            'lws_extension_callback_reasons::LWS_EXT_CB_HANDSHAKE_REPLY_TX' value '14'

                            'lws_extension_callback_reasons::LWS_EXT_CB_FLUSH_PENDING_TX' value '15'

                            'lws_extension_callback_reasons::LWS_EXT_CB_EXTENDED_PAYLOAD_RX' value '16'

                            'lws_extension_callback_reasons::LWS_EXT_CB_CAN_PROXY_CLIENT_CONNECTION' value '17'

                            'lws_extension_callback_reasons::LWS_EXT_CB_1HZ' value '18'

                            'lws_extension_callback_reasons::LWS_EXT_CB_REQUEST_ON_WRITEABLE' value '19'

                            'lws_extension_callback_reasons::LWS_EXT_CB_IS_WRITEABLE' value '20'







           type of 'unsigned int lws_context_creation_info::options' changed:

             entity changed from 'unsigned int' to compatible type 'typedef uint64_t' at stdint-uintn.h:27:1

               type name changed from 'unsigned int' to 'unsigned long int'

               type size changed from 32 to 64 (in bits)

           and offset changed from 800 to 832 (in bits) (by +32 bits)

           'void* lws_context_creation_info::user' offset changed from 832 to 896 (in bits) (by +64 bits)

           'int lws_context_creation_info::ka_time' offset changed from 896 to 960 (in bits) (by +64 bits)

           'int lws_context_creation_info::ka_probes' offset changed from 928 to 992 (in bits) (by +64 bits)

           'int lws_context_creation_info::ka_interval' offset changed from 960 to 1024 (in bits) (by +64 bits)

           'SSL_CTX* lws_context_creation_info::provided_client_ssl_ctx' offset changed from 1024 to 1088 (in bits) (by +64 bits)

           type of 'short int lws_context_creation_info::max_http_header_data' changed:

             type name changed from 'short int' to 'unsigned short int'

             type size hasn't changed



           and offset changed from 1088 to 1152 (in bits) (by +64 bits)

           type of 'short int lws_context_creation_info::max_http_header_pool' changed:

             type name changed from 'short int' to 'unsigned short int'

             type size hasn't changed



           and offset changed from 1104 to 1168 (in bits) (by +64 bits)

           'unsigned int lws_context_creation_info::count_threads' offset changed from 1120 to 1184 (in bits) (by +64 bits)

           'unsigned int lws_context_creation_info::fd_limit_per_thread' offset changed from 1152 to 1216 (in bits) (by +64 bits)

           'unsigned int lws_context_creation_info::timeout_secs' offset changed from 1184 to 1248 (in bits) (by +64 bits)

           'const char* lws_context_creation_info::ecdh_curve' offset changed from 1216 to 1280 (in bits) (by +64 bits)

           'const char* lws_context_creation_info::vhost_name' offset changed from 1280 to 1344 (in bits) (by +64 bits)

           'const char* const* lws_context_creation_info::plugin_dirs' offset changed from 1344 to 1408 (in bits) (by +64 bits)

           'const lws_protocol_vhost_options* lws_context_creation_info::pvo' offset changed from 1408 to 1472 (in bits) (by +64 bits)

           'int lws_context_creation_info::keepalive_timeout' offset changed from 1472 to 1536 (in bits) (by +64 bits)

           'const char* lws_context_creation_info::log_filepath' offset changed from 1536 to 1600 (in bits) (by +64 bits)

           'const lws_http_mount* lws_context_creation_info::mounts' offset changed from 1600 to 1664 (in bits) (by +64 bits)

           'const char* lws_context_creation_info::server_string' offset changed from 1664 to 1728 (in bits) (by +64 bits)

           'unsigned int lws_context_creation_info::pt_serv_buf_size' offset changed from 1728 to 1792 (in bits) (by +64 bits)

           'unsigned int lws_context_creation_info::max_http_header_data2' offset changed from 1760 to 1824 (in bits) (by +64 bits)

           'long int lws_context_creation_info::ssl_options_set' offset changed from 1792 to 1856 (in bits) (by +64 bits)

           'long int lws_context_creation_info::ssl_options_clear' offset changed from 1856 to 1920 (in bits) (by +64 bits)

           'unsigned short int lws_context_creation_info::ws_ping_pong_interval' offset changed from 1920 to 1984 (in bits) (by +64 bits)

           'const lws_protocol_vhost_options* lws_context_creation_info::headers' offset changed from 1984 to 2048 (in bits) (by +64 bits)

           'const lws_protocol_vhost_options* lws_context_creation_info::reject_service_keywords' offset changed from 2048 to 2112 (in bits) (by +64 bits)

           'void* lws_context_creation_info::external_baggage_free_on_destroy' offset changed from 2112 to 2176 (in bits) (by +64 bits)

           'const char* lws_context_creation_info::client_ssl_private_key_password' offset changed from 2176 to 2240 (in bits) (by +64 bits)

           'const char* lws_context_creation_info::client_ssl_cert_filepath' offset changed from 2240 to 2304 (in bits) (by +64 bits)

           'const char* lws_context_creation_info::client_ssl_private_key_filepath' offset changed from 2304 to 2496 (in bits) (by +192 bits)

           'const char* lws_context_creation_info::client_ssl_ca_filepath' offset changed from 2368 to 2560 (in bits) (by +192 bits)

           'const char* lws_context_creation_info::client_ssl_cipher_list' offset changed from 2432 to 2752 (in bits) (by +320 bits)

           'const lws_plat_file_ops* lws_context_creation_info::fops' offset changed from 2496 to 2816 (in bits) (by +320 bits)

           'int lws_context_creation_info::simultaneous_ssl_restriction' offset changed from 2560 to 2880 (in bits) (by +320 bits)

           'const char* lws_context_creation_info::socks_proxy_address' offset changed from 2624 to 2944 (in bits) (by +320 bits)

           'unsigned int lws_context_creation_info::socks_proxy_port' offset changed from 2688 to 3008 (in bits) (by +320 bits)

           'int lws_context_creation_info::bind_iface' offset changed from 2720 to 3040 (in bits) (by +320 bits)

           'int lws_context_creation_info::ssl_info_event_mask' offset changed from 2752 to 3072 (in bits) (by +320 bits)

           'unsigned int lws_context_creation_info::timeout_secs_ah_idle' offset changed from 2784 to 3104 (in bits) (by +320 bits)

           'unsigned short int lws_context_creation_info::ip_limit_ah' offset changed from 2816 to 3136 (in bits) (by +320 bits)

           'unsigned short int lws_context_creation_info::ip_limit_wsi' offset changed from 2832 to 3152 (in bits) (by +320 bits)

           'uint32_t lws_context_creation_info::http2_settings[7]' offset changed from 2848 to 3168 (in bits) (by +320 bits)

           type of 'void* lws_context_creation_info::_unused[8]' changed:

             type name changed from 'void*[8]' to 'void*[2]'

             array type size changed from 512 to 128

             array type subrange 1 changed length from 8 to 2

           and offset changed from 3072 to 5312 (in bits) (by +2240 bits)



  [C]'function void lws_ring_bump_head(lws_ring*, size_t)' at lws-ring.c:152:1 has some indirect sub-type changes:

    parameter 1 of type 'lws_ring*' has sub-type changes:

      in pointed to type 'struct lws_ring' at private-lib-core.h:185:1:

        type size changed from 320 to 256 (in bits)

        4 data member changes:

         type of 'size_t lws_ring::buflen' changed:

           typedef name changed from size_t to uint32_t at stdint-uintn.h:26:1

           underlying type 'unsigned long int' changed:

             entity changed from 'unsigned long int' to compatible type 'typedef __uint32_t' at types.h:41:1

               type name changed from 'unsigned long int' to 'unsigned int'

               type size changed from 64 to 32 (in bits)



         'size_t lws_ring::element_len' offset changed from 192 to 160 (in bits) (by -32 bits)

         'uint32_t lws_ring::head' offset changed from 256 to 192 (in bits) (by -64 bits)

         'uint32_t lws_ring::oldest_tail' offset changed from 288 to 224 (in bits) (by -64 bits)



  [C]'function void lws_set_timeout(lws*, pending_timeout, int)' at wsi-timeout.c:138:1 has some indirect sub-type changes:

    parameter 2 of type 'enum pending_timeout' has sub-type changes:

      type size hasn't changed

      1 enumerator deletion:

        'pending_timeout::PENDING_TIMEOUT_AWAITING_EXTENSION_CONNECT_RESPONSE' value '7'



      8 enumerator insertions:

        'pending_timeout::PENDING_TIMEOUT_UNUSED1' value '7'

        'pending_timeout::PENDING_TIMEOUT_UDP_IDLE' value '26'

        'pending_timeout::PENDING_TIMEOUT_CLIENT_CONN_IDLE' value '27'

        'pending_timeout::PENDING_TIMEOUT_LAGGING' value '28'

        'pending_timeout::PENDING_TIMEOUT_THREADPOOL' value '29'

        'pending_timeout::PENDING_TIMEOUT_THREADPOOL_TASK' value '30'

        'pending_timeout::PENDING_TIMEOUT_KILLED_BY_PROXY_CLIENT_CLOSE' value '31'

        'pending_timeout::PENDING_TIMEOUT_USER_OK' value '32'





  [C]'function lws_spa* lws_spa_create(lws*, const char* const*, int, int, lws_spa_fileupload_cb, void*)' at lws-spa.c:624:1 has some indirect sub-type changes:

    return type changed:

      in pointed to type 'struct lws_spa' at lws-spa.c:87:1:

        type size changed from 640 to 832 (in bits)

        4 data member deletions:

          'const char* const* lws_spa::param_names', at offset 128 (in bits) at lws-spa.c:401:1



          'int lws_spa::count_params', at offset 192 (in bits) at lws-spa.c:402:1



          'void* lws_spa::opt_data', at offset 384 (in bits) at lws-spa.c:405:1



          'int lws_spa::max_storage', at offset 576 (in bits) at lws-spa.c:409:1



        6 data member changes:

         type of 'lws_urldecode_stateful* lws_spa::s' changed:

           in pointed to type 'struct lws_urldecode_stateful' at lws-spa.c:59:1:

             type size changed from 4544 to 4608 (in bits)

             2 data member insertions:

               'lws* lws_urldecode_stateful::wsi', at offset 128 (in bits) at lws-spa.c:62:1

               'uint8_t lws_urldecode_stateful::matchable', at offset 4448 (in bits) at lws-spa.c:75:1

             17 data member changes (1 filtered):

              type of 'unsigned int lws_urldecode_stateful::boundary_real_crlf' changed:

                entity changed from 'unsigned int' to compatible type 'typedef uint8_t' at stdint-uintn.h:24:1

                  type name changed from 'unsigned int' to 'unsigned char'

                  type size changed from 32 to 8 (in bits)

              and offset changed from 28 to 4 (in bits) (by -24 bits)

              type of 'unsigned int lws_urldecode_stateful::subname' changed:

                entity changed from 'unsigned int' to compatible type 'typedef uint8_t' at stdint-uintn.h:24:1

                  type name changed from 'unsigned int' to 'unsigned char'

                  type size changed from 32 to 8 (in bits)

              and offset changed from 29 to 5 (in bits) (by -24 bits)

              type of 'unsigned int lws_urldecode_stateful::inside_quote' changed:

                entity changed from 'unsigned int' to compatible type 'typedef uint8_t' at stdint-uintn.h:24:1

                  type name changed from 'unsigned int' to 'unsigned char'

                  type size changed from 32 to 8 (in bits)

              and offset changed from 30 to 6 (in bits) (by -24 bits)

              type of 'unsigned int lws_urldecode_stateful::multipart_form_data' changed:

                entity changed from 'unsigned int' to compatible type 'typedef uint8_t' at stdint-uintn.h:24:1

                  type name changed from 'unsigned int' to 'unsigned char'

                  type size changed from 32 to 8 (in bits)

              and offset changed from 31 to 7 (in bits) (by -24 bits)

              'char lws_urldecode_stateful::name[32]' offset changed from 128 to 192 (in bits) (by +64 bits)

              'char lws_urldecode_stateful::temp[32]' offset changed from 384 to 448 (in bits) (by +64 bits)

              'char lws_urldecode_stateful::content_type[32]' offset changed from 640 to 704 (in bits) (by +64 bits)

              'char lws_urldecode_stateful::content_disp[32]' offset changed from 896 to 960 (in bits) (by +64 bits)

              'char lws_urldecode_stateful::content_disp_filename[256]' offset changed from 1152 to 1216 (in bits) (by +64 bits)

              'char lws_urldecode_stateful::mime_boundary[128]' offset changed from 3200 to 3264 (in bits) (by +64 bits)

              'int lws_urldecode_stateful::out_len' offset changed from 4224 to 4288 (in bits) (by +64 bits)

              'int lws_urldecode_stateful::pos' offset changed from 4256 to 4320 (in bits) (by +64 bits)

              'int lws_urldecode_stateful::hdr_idx' offset changed from 4288 to 4352 (in bits) (by +64 bits)

              'int lws_urldecode_stateful::mp' offset changed from 4320 to 4384 (in bits) (by +64 bits)

              'int lws_urldecode_stateful::sum' offset changed from 4352 to 4416 (in bits) (by +64 bits)

              'urldecode_stateful lws_urldecode_stateful::state' offset changed from 4416 to 4480 (in bits) (by +64 bits)

              'lws_urldecode_stateful_cb lws_urldecode_stateful::output' offset changed from 4480 to 4544 (in bits) (by +64 bits)



         'char** lws_spa::params' offset changed from 256 to 640 (in bits) (by +384 bits)

         'int* lws_spa::param_length' offset changed from 320 to 512 (in bits) (by +192 bits)

         'char* lws_spa::storage' offset changed from 448 to 704 (in bits) (by +256 bits)

         'char* lws_spa::end' offset changed from 512 to 768 (in bits) (by +256 bits)

         'char lws_spa::finalized' offset changed from 608 to 576 (in bits) (by -32 bits)

        1 data member change:

         type of 'lws_spa_fileupload_cb lws_spa::opt_cb' changed:

           typedef name changed from lws_spa_fileupload_cb to lws_spa_create_info_t at lws-spa.h:115:1

           underlying type 'int (void*, const char*, const char*, char*, int, enum lws_spa_fileupload_states)*' changed:

             entity changed from 'int (void*, const char*, const char*, char*, int, enum lws_spa_fileupload_states)*' to 'struct lws_spa_create_info' at lws-spa.h:104:1

             type size changed from 64 to 448 (in bits)

         and name of 'lws_spa::opt_cb' changed to 'lws_spa::i' at lws-spa.c:89:1



  [C]'function const unsigned char* lws_token_to_string(lws_token_indexes)' at header.c:30:1 has some indirect sub-type changes:

    parameter 1 of type 'enum lws_token_indexes' has sub-type changes:

      enum type 'enum lws_token_indexes' changed at libwebsockets.h:3313:1, as reported earlier





