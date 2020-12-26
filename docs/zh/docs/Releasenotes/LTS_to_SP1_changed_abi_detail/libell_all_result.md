# Functions changed info

---------------diffs in libell_libell.so.0.0.2_abidiff.out:----------------

Functions changes summary: 13 Removed, 0 Changed, 148 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added (1 filtered out) variable



13 Removed functions:



  [D] 'function void l_fswatch_destroy(l_fswatch*)'    {l_fswatch_destroy}

  [D] 'function l_fswatch* l_fswatch_new(const char*, l_fswatch_cb_t, void*, l_fswatch_destroy_cb_t)'    {l_fswatch_new}

  [D] 'function bool l_genl_family_can_dump(l_genl_family*, uint8_t)'    {l_genl_family_can_dump}

  [D] 'function bool l_genl_family_can_send(l_genl_family*, uint8_t)'    {l_genl_family_can_send}

  [D] 'function uint32_t l_genl_family_get_version(l_genl_family*)'    {l_genl_family_get_version}

  [D] 'function bool l_genl_family_has_group(l_genl_family*, const char*)'    {l_genl_family_has_group}

  [D] 'function l_genl_family* l_genl_family_ref(l_genl_family*)'    {l_genl_family_ref}

  [D] 'function bool l_genl_family_set_watches(l_genl_family*, l_genl_watch_func_t, l_genl_watch_func_t, void*, l_genl_destroy_func_t)'    {l_genl_family_set_watches}

  [D] 'function void l_genl_family_unref(l_genl_family*)'    {l_genl_family_unref}

  [D] 'function l_genl* l_genl_new_default()'    {l_genl_new_default}

  [D] 'function bool l_genl_set_close_on_unref(l_genl*, bool)'    {l_genl_set_close_on_unref}

  [D] 'function bool l_genl_set_unicast_handler(l_genl*, l_genl_msg_func_t, void*, l_genl_destroy_func_t)'    {l_genl_set_unicast_handler}

  [D] 'function uint8_t* l_pem_load_certificate(const char*, size_t*)'    {l_pem_load_certificate}



148 Added functions:



  [A] 'function bool l_aead_cipher_is_supported(l_aead_cipher_type)'    {l_aead_cipher_is_supported@@ELL_0.10}

  [A] 'function void l_cert_free(l_cert*)'    {l_cert_free@@ELL_0.10}

  [A] 'function const uint8_t* l_cert_get_der_data(l_cert*, size_t*)'    {l_cert_get_der_data@@ELL_0.10}

  [A] 'function const uint8_t* l_cert_get_dn(l_cert*, size_t*)'    {l_cert_get_dn@@ELL_0.10}

  [A] 'function l_key* l_cert_get_pubkey(l_cert*)'    {l_cert_get_pubkey@@ELL_0.10}

  [A] 'function l_cert_key_type l_cert_get_pubkey_type(l_cert*)'    {l_cert_get_pubkey_type@@ELL_0.10}

  [A] 'function l_cert* l_cert_new_from_der(const uint8_t*, size_t)'    {l_cert_new_from_der@@ELL_0.10}

  [A] 'function void l_certchain_free(l_certchain*)'    {l_certchain_free@@ELL_0.10}

  [A] 'function l_cert* l_certchain_get_leaf(l_certchain*)'    {l_certchain_get_leaf@@ELL_0.10}

  [A] 'function bool l_certchain_verify(l_certchain*, l_queue*, const char**)'    {l_certchain_verify@@ELL_0.10}

  [A] 'function void l_certchain_walk_from_ca(l_certchain*, l_cert_walk_cb_t, void*)'    {l_certchain_walk_from_ca@@ELL_0.10}

  [A] 'function void l_certchain_walk_from_leaf(l_certchain*, l_cert_walk_cb_t, void*)'    {l_certchain_walk_from_leaf@@ELL_0.10}

  [A] 'function ssize_t l_checksum_digest_length(l_checksum_type)'    {l_checksum_digest_length@@ELL_0.10}

  [A] 'function bool l_cipher_is_supported(l_cipher_type)'    {l_cipher_is_supported@@ELL_0.10}

  [A] 'function void* l_dbus_object_get_data(l_dbus*, const char*, const char*)'    {l_dbus_object_get_data@@ELL_0.10}

  [A] 'function bool l_dhcp_client_set_debug(l_dhcp_client*, l_dhcp_debug_cb_t, void*, l_dhcp_destroy_cb_t)'    {l_dhcp_client_set_debug@@ELL_0.10}

  [A] 'function char** l_dhcp_lease_get_dns(const l_dhcp_lease*)'    {l_dhcp_lease_get_dns@@ELL_0.10}

  [A] 'function char* l_dhcp_lease_get_domain_name(const l_dhcp_lease*)'    {l_dhcp_lease_get_domain_name@@ELL_0.10}

  [A] 'function void l_dir_watch_destroy(l_dir_watch*)'    {l_dir_watch_destroy@@ELL_0.10}

  [A] 'function l_dir_watch* l_dir_watch_new(const char*, l_dir_watch_event_func_t, void*, l_dir_watch_destroy_func_t)'    {l_dir_watch_new@@ELL_0.10}

  [A] 'function const l_ecc_curve* l_ecc_curve_get(const char*)'    {l_ecc_curve_get@@ELL_0.10}

  [A] 'function const l_ecc_curve* l_ecc_curve_get_ike_group(unsigned int)'    {l_ecc_curve_get_ike_group@@ELL_0.10}

  [A] 'function const char* l_ecc_curve_get_name(const l_ecc_curve*)'    {l_ecc_curve_get_name@@ELL_0.10}

  [A] 'function l_ecc_scalar* l_ecc_curve_get_order(const l_ecc_curve*)'    {l_ecc_curve_get_order@@ELL_0.10}

  [A] 'function l_ecc_scalar* l_ecc_curve_get_prime(const l_ecc_curve*)'    {l_ecc_curve_get_prime@@ELL_0.10}

  [A] 'function size_t l_ecc_curve_get_scalar_bytes(const l_ecc_curve*)'    {l_ecc_curve_get_scalar_bytes@@ELL_0.10}

  [A] 'function const unsigned int* l_ecc_curve_get_supported_ike_groups()'    {l_ecc_curve_get_supported_ike_groups@@ELL_0.10}

  [A] 'function const unsigned int* l_ecc_curve_get_supported_tls_groups()'    {l_ecc_curve_get_supported_tls_groups@@ELL_0.10}

  [A] 'function const l_ecc_curve* l_ecc_curve_get_tls_group(unsigned int)'    {l_ecc_curve_get_tls_group@@ELL_0.10}

  [A] 'function bool l_ecc_point_add(l_ecc_point*, const l_ecc_point*, const l_ecc_point*)'    {l_ecc_point_add@@ELL_0.10}

  [A] 'function void l_ecc_point_free(l_ecc_point*)'    {l_ecc_point_free@@ELL_0.10}

  [A] 'function l_ecc_point* l_ecc_point_from_data(const l_ecc_curve*, l_ecc_point_type, void*, size_t)'    {l_ecc_point_from_data@@ELL_0.10}

  [A] 'function ssize_t l_ecc_point_get_data(const l_ecc_point*, void*, size_t)'    {l_ecc_point_get_data@@ELL_0.10}

  [A] 'function ssize_t l_ecc_point_get_x(const l_ecc_point*, void*, size_t)'    {l_ecc_point_get_x@@ELL_0.10}

  [A] 'function bool l_ecc_point_inverse(l_ecc_point*)'    {l_ecc_point_inverse@@ELL_0.10}

  [A] 'function bool l_ecc_point_multiply(l_ecc_point*, const l_ecc_scalar*, const l_ecc_point*)'    {l_ecc_point_multiply@@ELL_0.10}

  [A] 'function l_ecc_point* l_ecc_point_new(const l_ecc_curve*)'    {l_ecc_point_new@@ELL_0.10}

  [A] 'function bool l_ecc_points_are_equal(const l_ecc_point*, const l_ecc_point*)'    {l_ecc_points_are_equal@@ELL_0.10}

  [A] 'function bool l_ecc_scalar_add(l_ecc_scalar*, const l_ecc_scalar*, const l_ecc_scalar*, const l_ecc_scalar*)'    {l_ecc_scalar_add@@ELL_0.10}

  [A] 'function void l_ecc_scalar_free(l_ecc_scalar*)'    {l_ecc_scalar_free@@ELL_0.10}

  [A] 'function ssize_t l_ecc_scalar_get_data(const l_ecc_scalar*, void*, size_t)'    {l_ecc_scalar_get_data@@ELL_0.10}

  [A] 'function int l_ecc_scalar_legendre(l_ecc_scalar*)'    {l_ecc_scalar_legendre@@ELL_0.10}

  [A] 'function bool l_ecc_scalar_multiply(l_ecc_scalar*, const l_ecc_scalar*, const l_ecc_scalar*)'    {l_ecc_scalar_multiply@@ELL_0.10}

  [A] 'function l_ecc_scalar* l_ecc_scalar_new(const l_ecc_curve*, void*, size_t)'    {l_ecc_scalar_new@@ELL_0.10}

  [A] 'function l_ecc_scalar* l_ecc_scalar_new_random(const l_ecc_curve*)'    {l_ecc_scalar_new_random@@ELL_0.10}

  [A] 'function bool l_ecc_scalar_sum_x(l_ecc_scalar*, const l_ecc_scalar*)'    {l_ecc_scalar_sum_x@@ELL_0.10}

  [A] 'function bool l_ecc_scalars_are_equal(const l_ecc_scalar*, const l_ecc_scalar*)'    {l_ecc_scalars_are_equal@@ELL_0.10}

  [A] 'function bool l_ecdh_generate_key_pair(const l_ecc_curve*, l_ecc_scalar**, l_ecc_point**)'    {l_ecdh_generate_key_pair@@ELL_0.10}

  [A] 'function bool l_ecdh_generate_shared_secret(const l_ecc_scalar*, const l_ecc_point*, l_ecc_scalar**)'    {l_ecdh_generate_shared_secret@@ELL_0.10}

  [A] 'function unsigned int l_genl_add_family_watch(l_genl*, const char*, l_genl_discover_func_t, l_genl_vanished_func_t, void*, l_genl_destroy_func_t)'    {l_genl_add_family_watch@@ELL_0.10}

  [A] 'function unsigned int l_genl_add_unicast_watch(l_genl*, const char*, l_genl_msg_func_t, void*, l_genl_destroy_func_t)'    {l_genl_add_unicast_watch@@ELL_0.10}

  [A] 'function bool l_genl_discover_families(l_genl*, l_genl_discover_func_t, void*, l_genl_destroy_func_t)'    {l_genl_discover_families@@ELL_0.10}

  [A] 'function void l_genl_family_free(l_genl_family*)'    {l_genl_family_free@@ELL_0.10}

  [A] 'function const l_genl_family_info* l_genl_family_get_info(l_genl_family*)'    {l_genl_family_get_info@@ELL_0.10}

  [A] 'function bool l_genl_family_info_can_dump(const l_genl_family_info*, uint8_t)'    {l_genl_family_info_can_dump@@ELL_0.10}

  [A] 'function bool l_genl_family_info_can_send(const l_genl_family_info*, uint8_t)'    {l_genl_family_info_can_send@@ELL_0.10}

  [A] 'function char** l_genl_family_info_get_groups(const l_genl_family_info*)'    {l_genl_family_info_get_groups@@ELL_0.10}

  [A] 'function uint32_t l_genl_family_info_get_id(const l_genl_family_info*)'    {l_genl_family_info_get_id@@ELL_0.10}

  [A] 'function const char* l_genl_family_info_get_name(const l_genl_family_info*)'    {l_genl_family_info_get_name@@ELL_0.10}

  [A] 'function uint32_t l_genl_family_info_get_version(const l_genl_family_info*)'    {l_genl_family_info_get_version@@ELL_0.10}

  [A] 'function bool l_genl_family_info_has_group(const l_genl_family_info*, const char*)'    {l_genl_family_info_has_group@@ELL_0.10}

  [A] 'function const char* l_genl_msg_get_extended_error(l_genl_msg*)'    {l_genl_msg_get_extended_error@@ELL_0.10}

  [A] 'function l_genl_msg* l_genl_msg_new_from_data(void*, size_t)'    {l_genl_msg_new_from_data@@ELL_0.10}

  [A] 'function void* l_genl_msg_to_data(l_genl_msg*, uint16_t, uint16_t, uint32_t, uint32_t, size_t*)'    {l_genl_msg_to_data@@ELL_0.10}

  [A] 'function bool l_genl_remove_family_watch(l_genl*, unsigned int)'    {l_genl_remove_family_watch@@ELL_0.10}

  [A] 'function bool l_genl_remove_unicast_watch(l_genl*, unsigned int)'    {l_genl_remove_unicast_watch@@ELL_0.10}

  [A] 'function bool l_genl_request_family(l_genl*, const char*, l_genl_discover_func_t, void*, l_genl_destroy_func_t)'    {l_genl_request_family@@ELL_0.10}

  [A] 'function uint32_t l_getrandom_uint32()'    {l_getrandom_uint32@@ELL_0.10}

  [A] 'function bool l_gpio_chip_find_line_offset(l_gpio_chip*, const char*, uint32_t*)'    {l_gpio_chip_find_line_offset@@ELL_0.10}

  [A] 'function void l_gpio_chip_free(l_gpio_chip*)'    {l_gpio_chip_free@@ELL_0.10}

  [A] 'function const char* l_gpio_chip_get_label(l_gpio_chip*)'    {l_gpio_chip_get_label@@ELL_0.10}

  [A] 'function char* l_gpio_chip_get_line_consumer(l_gpio_chip*, uint32_t)'    {l_gpio_chip_get_line_consumer@@ELL_0.10}

  [A] 'function char* l_gpio_chip_get_line_label(l_gpio_chip*, uint32_t)'    {l_gpio_chip_get_line_label@@ELL_0.10}

  [A] 'function const char* l_gpio_chip_get_name(l_gpio_chip*)'    {l_gpio_chip_get_name@@ELL_0.10}

  [A] 'function uint32_t l_gpio_chip_get_num_lines(l_gpio_chip*)'    {l_gpio_chip_get_num_lines@@ELL_0.10}

  [A] 'function l_gpio_chip* l_gpio_chip_new(const char*)'    {l_gpio_chip_new@@ELL_0.10}

  [A] 'function char** l_gpio_chips_with_line_label(const char*)'    {l_gpio_chips_with_line_label@@ELL_0.10}

  [A] 'function void l_gpio_reader_free(l_gpio_reader*)'    {l_gpio_reader_free@@ELL_0.10}

  [A] 'function bool l_gpio_reader_get(l_gpio_reader*, uint32_t, uint32_t*)'    {l_gpio_reader_get@@ELL_0.10}

  [A] 'function l_gpio_reader* l_gpio_reader_new(l_gpio_chip*, const char*, uint32_t, const uint32_t*)'    {l_gpio_reader_new@@ELL_0.10}

  [A] 'function void l_gpio_writer_free(l_gpio_writer*)'    {l_gpio_writer_free@@ELL_0.10}

  [A] 'function l_gpio_writer* l_gpio_writer_new(l_gpio_chip*, const char*, uint32_t, const uint32_t*, const uint32_t*)'    {l_gpio_writer_new@@ELL_0.10}

  [A] 'function bool l_gpio_writer_set(l_gpio_writer*, uint32_t, const uint32_t*)'    {l_gpio_writer_set@@ELL_0.10}

  [A] 'function l_key* l_key_generate_dh_private(void*, size_t)'    {l_key_generate_dh_private@@ELL_0.10}

  [A] 'function bool l_key_get_info(l_key*, l_key_cipher_type, l_checksum_type, size_t*, bool*)'    {l_key_get_info@@ELL_0.10}

  [A] 'function bool l_key_is_supported(uint32_t)'    {l_key_is_supported@@ELL_0.10}

  [A] 'function bool l_key_validate_dh_payload(void*, size_t, void*, size_t)'    {l_key_validate_dh_payload@@ELL_0.10}

  [A] 'function bool l_keyring_link(l_keyring*, const l_key*)'    {l_keyring_link@@ELL_0.10}

  [A] 'function bool l_keyring_link_nested(l_keyring*, const l_keyring*)'    {l_keyring_link_nested@@ELL_0.10}

  [A] 'function bool l_keyring_unlink(l_keyring*, const l_key*)'    {l_keyring_unlink@@ELL_0.10}

  [A] 'function bool l_keyring_unlink_nested(l_keyring*, const l_keyring*)'    {l_keyring_unlink_nested@@ELL_0.10}

  [A] 'function bool l_net_hostname_is_localhost(const char*)'    {l_net_hostname_is_localhost@@ELL_0.10}

  [A] 'function bool l_net_hostname_is_root(const char*)'    {l_net_hostname_is_root@@ELL_0.10}

  [A] 'function char* l_path_find(const char*, const char*, int)'    {l_path_find@@ELL_0.10}

  [A] 'function uint64_t l_path_get_mtime(const char*)'    {l_path_get_mtime@@ELL_0.10}

  [A] 'function const char* l_path_next(const char*, char**)'    {l_path_next@@ELL_0.10}

  [A] 'function int l_path_touch(const char*)'    {l_path_touch@@ELL_0.10}

  [A] 'function l_certchain* l_pem_load_certificate_chain(const char*)'    {l_pem_load_certificate_chain@@ELL_0.10}

  [A] 'function l_certchain* l_pem_load_certificate_chain_from_data(void*, size_t)'    {l_pem_load_certificate_chain_from_data@@ELL_0.10}

  [A] 'function l_queue* l_pem_load_certificate_list(const char*)'    {l_pem_load_certificate_list@@ELL_0.10}

  [A] 'function l_queue* l_pem_load_certificate_list_from_data(void*, size_t)'    {l_pem_load_certificate_list_from_data@@ELL_0.10}

  [A] 'function l_key* l_pem_load_private_key_from_data(void*, size_t, const char*, bool*)'    {l_pem_load_private_key_from_data@@ELL_0.10}

  [A] 'function ssize_t l_ringbuf_append(l_ringbuf*, void*, size_t)'    {l_ringbuf_append@@ELL_0.10}

  [A] 'function uint32_t l_rtnl_ifaddr4_add(l_netlink*, int, uint8_t, const char*, const char*, l_netlink_command_func_t, void*, l_netlink_destroy_func_t)'    {l_rtnl_ifaddr4_add@@ELL_0.10}

  [A] 'function uint32_t l_rtnl_ifaddr4_delete(l_netlink*, int, uint8_t, const char*, const char*, l_netlink_command_func_t, void*, l_netlink_destroy_func_t)'    {l_rtnl_ifaddr4_delete@@ELL_0.10}

  [A] 'function uint32_t l_rtnl_ifaddr4_dump(l_netlink*, l_netlink_command_func_t, void*, l_netlink_destroy_func_t)'    {l_rtnl_ifaddr4_dump@@ELL_0.10}

  [A] 'function void l_rtnl_ifaddr4_extract(const ifaddrmsg*, int, char**, char**, char**)'    {l_rtnl_ifaddr4_extract@@ELL_0.10}

  [A] 'function uint32_t l_rtnl_ifaddr6_add(l_netlink*, int, uint8_t, const char*, l_netlink_command_func_t, void*, l_netlink_destroy_func_t)'    {l_rtnl_ifaddr6_add@@ELL_0.10}

  [A] 'function uint32_t l_rtnl_ifaddr6_delete(l_netlink*, int, uint8_t, const char*, l_netlink_command_func_t, void*, l_netlink_destroy_func_t)'    {l_rtnl_ifaddr6_delete@@ELL_0.10}

  [A] 'function uint32_t l_rtnl_ifaddr6_dump(l_netlink*, l_netlink_command_func_t, void*, l_netlink_destroy_func_t)'    {l_rtnl_ifaddr6_dump@@ELL_0.10}

  [A] 'function void l_rtnl_ifaddr6_extract(const ifaddrmsg*, int, char**)'    {l_rtnl_ifaddr6_extract@@ELL_0.10}

  [A] 'function uint32_t l_rtnl_route4_add_connected(l_netlink*, int, uint8_t, const char*, const char*, uint8_t, l_netlink_command_func_t, void*, l_netlink_destroy_func_t)'    {l_rtnl_route4_add_connected@@ELL_0.10}

  [A] 'function uint32_t l_rtnl_route4_add_gateway(l_netlink*, int, const char*, const char*, uint32_t, uint8_t, l_netlink_command_func_t, void*, l_netlink_destroy_func_t)'    {l_rtnl_route4_add_gateway@@ELL_0.10}

  [A] 'function uint32_t l_rtnl_route4_dump(l_netlink*, l_netlink_command_func_t, void*, l_netlink_destroy_func_t)'    {l_rtnl_route4_dump@@ELL_0.10}

  [A] 'function void l_rtnl_route4_extract(const rtmsg*, uint32_t, uint32_t*, uint32_t*, char**, char**, char**)'    {l_rtnl_route4_extract@@ELL_0.10}

  [A] 'function uint32_t l_rtnl_route6_add_gateway(l_netlink*, int, const char*, uint32_t, uint8_t, l_netlink_command_func_t, void*, l_netlink_destroy_func_t)'    {l_rtnl_route6_add_gateway@@ELL_0.10}

  [A] 'function uint32_t l_rtnl_route6_delete_gateway(l_netlink*, int, const char*, uint32_t, uint8_t, l_netlink_command_func_t, void*, l_netlink_destroy_func_t)'    {l_rtnl_route6_delete_gateway@@ELL_0.10}

  [A] 'function uint32_t l_rtnl_route6_dump(l_netlink*, l_netlink_command_func_t, void*, l_netlink_destroy_func_t)'    {l_rtnl_route6_dump@@ELL_0.10}

  [A] 'function void l_rtnl_route6_extract(const rtmsg*, uint32_t, uint32_t*, uint32_t*, char**, char**, char**)'    {l_rtnl_route6_extract@@ELL_0.10}

  [A] 'function uint32_t l_rtnl_set_linkmode_and_operstate(l_netlink*, int, uint8_t, uint8_t, l_netlink_command_func_t, void*, l_netlink_destroy_func_t)'    {l_rtnl_set_linkmode_and_operstate@@ELL_0.10}

  [A] 'function uint32_t l_rtnl_set_mac(l_netlink*, int, const uint8_t*, bool, l_netlink_command_func_t, void*, l_netlink_destroy_func_t)'    {l_rtnl_set_mac@@ELL_0.10}

  [A] 'function uint32_t l_rtnl_set_powered(l_netlink*, int, bool, l_netlink_command_func_t, void*, l_netlink_destroy_func_t)'    {l_rtnl_set_powered@@ELL_0.10}

  [A] 'function char** l_settings_get_embedded_groups(l_settings*)'    {l_settings_get_embedded_groups@@ELL_0.10}

  [A] 'function const char* l_settings_get_embedded_value(l_settings*, const char*, const char**)'    {l_settings_get_embedded_value@@ELL_0.10}

  [A] 'function bool l_settings_has_embedded_group(l_settings*, const char*)'    {l_settings_has_embedded_group@@ELL_0.10}

  [A] 'function char** l_strv_append(char**, const char*)'    {l_strv_append@@ELL_0.10}

  [A] 'function char** l_strv_append_printf(char**, const char*, ...)'    {l_strv_append_printf@@ELL_0.10}

  [A] 'function char** l_strv_append_vprintf(char**, const char*, va_list)'    {l_strv_append_vprintf@@ELL_0.10}

  [A] 'function char** l_strv_copy(char**)'    {l_strv_copy@@ELL_0.10}

  [A] 'function void l_strv_free(char**)'    {l_strv_free@@ELL_0.10}

  [A] 'function char** l_strv_new()'    {l_strv_new@@ELL_0.10}

  [A] 'function uint64_t l_time_now()'    {l_time_now@@ELL_0.10}

  [A] 'function void l_timeout_set_callback(l_timeout*, l_timeout_notify_cb_t, void*, l_timeout_destroy_cb_t)'    {l_timeout_set_callback@@ELL_0.10}

  [A] 'function bool l_tls_prf_get_bytes(l_tls*, bool, const char*, uint8_t*, size_t)'    {l_tls_prf_get_bytes@@ELL_0.10}

  [A] 'function bool l_tls_set_debug(l_tls*, l_tls_debug_cb_t, void*, l_tls_destroy_cb_t)'    {l_tls_set_debug@@ELL_0.10}

  [A] 'function void l_tls_set_domain_mask(l_tls*, char**)'    {l_tls_set_domain_mask@@ELL_0.10}

  [A] 'function void l_tls_set_version_range(l_tls*, l_tls_version, l_tls_version)'    {l_tls_set_version_range@@ELL_0.10}

  [A] 'function bool l_tls_start(l_tls*)'    {l_tls_start@@ELL_0.10}

  [A] 'function uint32_t l_uintset_find_unused(l_uintset*, uint32_t)'    {l_uintset_find_unused@@ELL_0.10}

  [A] 'function void l_uintset_foreach(l_uintset*, l_uintset_foreach_func_t, void*)'    {l_uintset_foreach@@ELL_0.10}

  [A] 'function l_uintset* l_uintset_intersect(const l_uintset*, const l_uintset*)'    {l_uintset_intersect@@ELL_0.10}

  [A] 'function bool l_uintset_isempty(const l_uintset*)'    {l_uintset_isempty@@ELL_0.10}

  [A] 'function char* l_utf8_from_ucs2be(void*, ssize_t)'    {l_utf8_from_ucs2be@@ELL_0.10}

  [A] 'function size_t l_utf8_from_wchar(wchar_t, char*)'    {l_utf8_from_wchar@@ELL_0.10}

  [A] 'function void* l_utf8_to_ucs2be(const char*, size_t*)'    {l_utf8_to_ucs2be@@ELL_0.10}

  [A] 'function char* l_util_hexstring_upper(const unsigned char*, size_t)'    {l_util_hexstring_upper@@ELL_0.10}

  [A] 'function bool l_uuid_from_string(const char*, uint8_t*)'    {l_uuid_from_string@@ELL_0.10}

  [A] 'function bool l_uuid_v4(uint8_t*)'    {l_uuid_v4@@ELL_0.10}



