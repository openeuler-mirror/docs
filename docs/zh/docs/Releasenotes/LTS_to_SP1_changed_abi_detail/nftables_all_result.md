# Functions changed info

---------------diffs in nftables_libnftables.so.1.0.0_abidiff.out:----------------

ELF SONAME changed

Functions changes summary: 409 Removed, 2 Changed (16 filtered out), 2 Added functions

Variables changes summary: 0 Removed (87 filtered out), 0 Changed, 0 Added variables

Function symbols changes summary: 2 Removed, 0 Added function symbols not referenced by debug info

Variable symbols changes summary: 0 Removed, 0 Added variable symbol not referenced by debug info



SONAME changed from 'libnftables.so.0' to 'libnftables.so.1'



409 Removed functions:



  [D] 'function void __memory_allocation_error(const char*, uint32_t)'    {__memory_allocation_error}

  [D] 'function void __netlink_abi_error(const char*, int, const char*)'    {__netlink_abi_error}

  [D] 'function void __netlink_init_error(const char*, int, const char*)'    {__netlink_init_error}

  [D] 'function int __stmt_binary_error(eval_ctx*, const location*, const location*, const char*, ...)'    {__stmt_binary_error}

  [D] 'function nftnl_expr* alloc_nft_expr(const char*)'    {alloc_nft_expr}

  [D] 'function nftnl_chain* alloc_nftnl_chain(const handle*)'    {alloc_nftnl_chain}

  [D] 'function nftnl_rule* alloc_nftnl_rule(const handle*)'    {alloc_nftnl_rule}

  [D] 'function nftnl_set* alloc_nftnl_set(const handle*)'    {alloc_nftnl_set}

  [D] 'function nftnl_table* alloc_nftnl_table(const handle*)'    {alloc_nftnl_table}

  [D] 'function expr* binop_expr_alloc(const location*, ops, expr*, expr*)'    {binop_expr_alloc}

  [D] 'function expr* bitmask_expr_to_binops(expr*)'    {bitmask_expr_to_binops}

  [D] 'function void cache_flush(mnl_socket*, nft_cache*, cmd_ops, list_head*, unsigned int, output_ctx*)'    {cache_flush}

  [D] 'function void cache_release(nft_cache*)'    {cache_release}

  [D] 'function int cache_update(mnl_socket*, nft_cache*, cmd_ops, list_head*, unsigned int, output_ctx*)'    {cache_update}

  [D] 'function void chain_add_hash(chain*, table*)'    {chain_add_hash}

  [D] 'function chain* chain_alloc(const char*)'    {chain_alloc}

  [D] 'function void chain_free(chain*)'    {chain_free}

  [D] 'function chain* chain_get(chain*)'    {chain_get}

  [D] 'function const char* chain_hookname_lookup(const char*)'    {chain_hookname_lookup}

  [D] 'function chain* chain_lookup(const table*, const handle*)'    {chain_lookup}

  [D] 'function const char* chain_policy2str(uint32_t)'    {chain_policy2str}

  [D] 'function void chain_print_plain(const chain*, output_ctx*)'    {chain_print_plain}

  [D] 'function const char* chain_type_name_lookup(const char*)'    {chain_type_name_lookup}

  [D] 'function cmd* cmd_alloc(cmd_ops, cmd_obj, const handle*, const location*, void*)'    {cmd_alloc}

  [D] 'function cmd* cmd_alloc_obj_ct(cmd_ops, int, const handle*, const location*, obj*)'    {cmd_alloc_obj_ct}

  [D] 'function int cmd_evaluate(eval_ctx*, cmd*)'    {cmd_evaluate}

  [D] 'function void cmd_free(cmd*)'    {cmd_free}

  [D] 'function void compound_expr_add(expr*, expr*)'    {compound_expr_add}

  [D] 'function expr* compound_expr_alloc(const location*, const expr_ops*)'    {compound_expr_alloc}

  [D] 'function void compound_expr_remove(expr*, expr*)'    {compound_expr_remove}

  [D] 'function expr* concat_expr_alloc(const location*)'    {concat_expr_alloc}

  [D] 'function const datatype* concat_type_alloc(uint32_t)'    {concat_type_alloc}

  [D] 'function void concat_type_destroy(const datatype*)'    {concat_type_destroy}

  [D] 'function stmt* connlimit_stmt_alloc(const location*)'    {connlimit_stmt_alloc}

  [D] 'function expr* constant_expr_alloc(const location*, const datatype*, byteorder, unsigned int, void*)'    {constant_expr_alloc}

  [D] 'function expr* constant_expr_join(const expr*, const expr*)'    {constant_expr_join}

  [D] 'function expr* constant_expr_splice(expr*, unsigned int)'    {constant_expr_splice}

  [D] 'function stmt* counter_stmt_alloc(const location*)'    {counter_stmt_alloc}

  [D] 'function const char* ct_dir2str(int)'    {ct_dir2str}

  [D] 'function expr* ct_expr_alloc(const location*, nft_ct_keys, int8_t, uint8_t)'    {ct_expr_alloc}

  [D] 'function void ct_expr_update_type(proto_ctx*, expr*)'    {ct_expr_update_type}

  [D] 'function const char* ct_label2str(unsigned long int)'    {ct_label2str}

  [D] 'function void ct_label_table_exit()'    {ct_label_table_exit}

  [D] 'function void ct_label_table_init()'    {ct_label_table_init}

  [D] 'function stmt* ct_stmt_alloc(const location*, nft_ct_keys, int8_t, expr*)'    {ct_stmt_alloc}

  [D] 'function error_record* data_unit_parse(const location*, const char*, uint64_t*)'    {data_unit_parse}

  [D] 'function const datatype* datatype_lookup(datatypes)'    {datatype_lookup}

  [D] 'function const datatype* datatype_lookup_byname(const char*)'    {datatype_lookup_byname}

  [D] 'function void datatype_print(const expr*, output_ctx*)'    {datatype_print}

  [D] 'function void devgroup_table_exit()'    {devgroup_table_exit}

  [D] 'function void devgroup_table_init()'    {devgroup_table_init}

  [D] 'function int do_command(netlink_ctx*, cmd*)'    {do_command}

  [D] 'function stmt* dup_stmt_alloc(const location*)'    {dup_stmt_alloc}

  [D] 'function void erec_add_location(error_record*, const location*)'    {erec_add_location}

  [D] 'function error_record* erec_create(error_record_types, const location*, const char*, ...)'    {erec_create}

  [D] 'function void erec_destroy(error_record*)'    {erec_destroy}

  [D] 'function void erec_print(output_ctx*, const error_record*, unsigned int)'    {erec_print}

  [D] 'function void erec_print_list(output_ctx*, list_head*, unsigned int)'    {erec_print_list}

  [D] 'function error_record* erec_vcreate(error_record_types, const location*, const char*, va_list)'    {erec_vcreate}

  [D] 'function expr* expr_alloc(const location*, const expr_ops*, const datatype*, byteorder, unsigned int)'    {expr_alloc}

  [D] 'function const datatype* expr_basetype(const expr*)'    {expr_basetype}

  [D] 'function int expr_binary_error(list_head*, const expr*, const expr*, const char*, ...)'    {expr_binary_error}

  [D] 'function expr* expr_clone(const expr*)'    {expr_clone}

  [D] 'function bool expr_cmp(const expr*, const expr*)'    {expr_cmp}

  [D] 'function void expr_describe(const expr*, output_ctx*)'    {expr_describe}

  [D] 'function void expr_free(expr*)'    {expr_free}

  [D] 'function expr* expr_get(expr*)'    {expr_get}

  [D] 'function void expr_print(const expr*, output_ctx*)'    {expr_print}

  [D] 'function void expr_set_type(expr*, const datatype*, byteorder)'    {expr_set_type}

  [D] 'function stmt* expr_stmt_alloc(const location*, expr*)'    {expr_stmt_alloc}

  [D] 'function void exthdr_dependency_kill(payload_dep_ctx*, expr*, unsigned int)'    {exthdr_dependency_kill}

  [D] 'function expr* exthdr_expr_alloc(const location*, const exthdr_desc*, uint8_t)'    {exthdr_expr_alloc}

  [D] 'function const exthdr_desc* exthdr_find_proto(uint8_t)'    {exthdr_find_proto}

  [D] 'function bool exthdr_find_template(expr*, const expr*, unsigned int*)'    {exthdr_find_template}

  [D] 'function int exthdr_gen_dependency(eval_ctx*, const expr*, const proto_desc*, proto_bases, stmt**)'    {exthdr_gen_dependency}

  [D] 'function void exthdr_init_raw(expr*, uint8_t, unsigned int, unsigned int, nft_exthdr_op, uint32_t)'    {exthdr_init_raw}

  [D] 'function stmt* exthdr_stmt_alloc(const location*, expr*, expr*)'    {exthdr_stmt_alloc}

  [D] 'function const char* family2str(unsigned int)'    {family2str}

  [D] 'function expr* fib_expr_alloc(const location*, unsigned int, unsigned int)'    {fib_expr_alloc}

  [D] 'function const char* fib_result_str(nft_fib_result)'    {fib_result_str}

  [D] 'function expr* flag_expr_alloc(const location*, const datatype*, byteorder, unsigned int, unsigned long int)'    {flag_expr_alloc}

  [D] 'function stmt* flow_offload_stmt_alloc(const location*, const char*)'    {flow_offload_stmt_alloc}

  [D] 'function void flowtable_add_hash(flowtable*, table*)'    {flowtable_add_hash}

  [D] 'function flowtable* flowtable_alloc(const location*)'    {flowtable_alloc}

  [D] 'function void flowtable_free(flowtable*)'    {flowtable_free}

  [D] 'function flowtable* flowtable_get(flowtable*)'    {flowtable_get}

  [D] 'function void flowtable_print(const flowtable*, output_ctx*)'    {flowtable_print}

  [D] 'function stmt* fwd_stmt_alloc(const location*)'    {fwd_stmt_alloc}

  [D] 'function const char* get_rate(uint64_t, uint64_t*)'    {get_rate}

  [D] 'function void get_set_decompose(table*, set*)'    {get_set_decompose}

  [D] 'function expr* get_set_intervals(const set*, const expr*)'    {get_set_intervals}

  [D] 'function const char* get_unit(uint64_t)'    {get_unit}

  [D] 'function void gmp_init()'    {gmp_init}

  [D] 'function void handle_free(handle*)'    {handle_free}

  [D] 'function void handle_merge(handle*, const handle*)'    {handle_merge}

  [D] 'function expr* hash_expr_alloc(const location*, uint32_t, bool, uint32_t, uint32_t, nft_hash_types)'    {hash_expr_alloc}

  [D] 'function const char* hooknum2str(unsigned int, unsigned int)'    {hooknum2str}

  [D] 'function void iface_cache_release()'    {iface_cache_release}

  [D] 'function void iface_cache_update()'    {iface_cache_update}

  [D] 'function void interval_map_decompose(expr*)'    {interval_map_decompose}

  [D] 'function stmt* limit_stmt_alloc(const location*)'    {limit_stmt_alloc}

  [D] 'function expr* list_expr_alloc(const location*)'    {list_expr_alloc}

  [D] 'function void list_expr_sort(list_head*)'    {list_expr_sort}

  [D] 'function const char* log_level(uint32_t)'    {log_level}

  [D] 'function int log_level_parse(const char*)'    {log_level_parse}

  [D] 'function stmt* log_stmt_alloc(const location*)'    {log_stmt_alloc}

  [D] 'function expr* map_expr_alloc(const location*, expr*, expr*)'    {map_expr_alloc}

  [D] 'function stmt* map_stmt_alloc(const location*)'    {map_stmt_alloc}

  [D] 'function expr* mapping_expr_alloc(const location*, expr*, expr*)'    {mapping_expr_alloc}

  [D] 'function void mark_table_exit()'    {mark_table_exit}

  [D] 'function void mark_table_init()'    {mark_table_init}

  [D] 'function markup* markup_alloc(uint32_t)'    {markup_alloc}

  [D] 'function void markup_free(markup*)'    {markup_free}

  [D] 'function expr* meta_expr_alloc(const location*, nft_meta_keys)'    {meta_expr_alloc}

  [D] 'function error_record* meta_key_parse(const location*, const char*, unsigned int*)'    {meta_key_parse}

  [D] 'function stmt* meta_stmt_alloc(const location*, nft_meta_keys, expr*)'    {meta_stmt_alloc}

  [D] 'function stmt* meta_stmt_meta_iiftype(const location*, uint16_t)'    {meta_stmt_meta_iiftype}

  [D] 'function stmt* meter_stmt_alloc(const location*)'    {meter_stmt_alloc}

  [D] 'function uint32_t mnl_batch_begin(nftnl_batch*, uint32_t)'    {mnl_batch_begin}

  [D] 'function void mnl_batch_end(nftnl_batch*, uint32_t)'    {mnl_batch_end}

  [D] 'function nftnl_batch* mnl_batch_init()'    {mnl_batch_init}

  [D] 'function bool mnl_batch_ready(nftnl_batch*)'    {mnl_batch_ready}

  [D] 'function void mnl_batch_reset(nftnl_batch*)'    {mnl_batch_reset}

  [D] 'function int mnl_batch_talk(netlink_ctx*, list_head*)'    {mnl_batch_talk}

  [D] 'function void mnl_err_list_free(mnl_err*)'    {mnl_err_list_free}

  [D] 'function uint16_t mnl_genid_get(netlink_ctx*)'    {mnl_genid_get}

  [D] 'function int mnl_nft_chain_batch_add(nftnl_chain*, nftnl_batch*, unsigned int, uint32_t)'    {mnl_nft_chain_batch_add}

  [D] 'function int mnl_nft_chain_batch_del(nftnl_chain*, nftnl_batch*, unsigned int, uint32_t)'    {mnl_nft_chain_batch_del}

  [D] 'function nftnl_chain_list* mnl_nft_chain_dump(netlink_ctx*, int)'    {mnl_nft_chain_dump}

  [D] 'function int mnl_nft_event_listener(mnl_socket*, unsigned int, output_ctx*, int (const nlmsghdr*, void*)*, void*)'    {mnl_nft_event_listener}

  [D] 'function int mnl_nft_flowtable_batch_add(nftnl_flowtable*, nftnl_batch*, unsigned int, uint32_t)'    {mnl_nft_flowtable_batch_add}

  [D] 'function int mnl_nft_flowtable_batch_del(nftnl_flowtable*, nftnl_batch*, unsigned int, uint32_t)'    {mnl_nft_flowtable_batch_del}

  [D] 'function nftnl_flowtable_list* mnl_nft_flowtable_dump(netlink_ctx*, int, const char*)'    {mnl_nft_flowtable_dump}

  [D] 'function int mnl_nft_obj_batch_add(nftnl_obj*, nftnl_batch*, unsigned int, uint32_t)'    {mnl_nft_obj_batch_add}

  [D] 'function int mnl_nft_obj_batch_del(nftnl_obj*, nftnl_batch*, unsigned int, uint32_t)'    {mnl_nft_obj_batch_del}

  [D] 'function nftnl_obj_list* mnl_nft_obj_dump(netlink_ctx*, int, const char*, const char*, uint32_t, bool, bool)'    {mnl_nft_obj_dump}

  [D] 'function int mnl_nft_rule_batch_add(nftnl_rule*, nftnl_batch*, unsigned int, uint32_t)'    {mnl_nft_rule_batch_add}

  [D] 'function int mnl_nft_rule_batch_del(nftnl_rule*, nftnl_batch*, unsigned int, uint32_t)'    {mnl_nft_rule_batch_del}

  [D] 'function int mnl_nft_rule_batch_replace(nftnl_rule*, nftnl_batch*, unsigned int, uint32_t)'    {mnl_nft_rule_batch_replace}

  [D] 'function nftnl_rule_list* mnl_nft_rule_dump(netlink_ctx*, int)'    {mnl_nft_rule_dump}

  [D] 'function nftnl_ruleset* mnl_nft_ruleset_dump(netlink_ctx*, uint32_t)'    {mnl_nft_ruleset_dump}

  [D] 'function int mnl_nft_set_batch_add(nftnl_set*, nftnl_batch*, unsigned int, uint32_t)'    {mnl_nft_set_batch_add}

  [D] 'function int mnl_nft_set_batch_del(nftnl_set*, nftnl_batch*, unsigned int, uint32_t)'    {mnl_nft_set_batch_del}

  [D] 'function nftnl_set_list* mnl_nft_set_dump(netlink_ctx*, int, const char*)'    {mnl_nft_set_dump}

  [D] 'function int mnl_nft_setelem_batch_add(nftnl_set*, nftnl_batch*, unsigned int, uint32_t)'    {mnl_nft_setelem_batch_add}

  [D] 'function int mnl_nft_setelem_batch_del(nftnl_set*, nftnl_batch*, unsigned int, uint32_t)'    {mnl_nft_setelem_batch_del}

  [D] 'function int mnl_nft_setelem_batch_flush(nftnl_set*, nftnl_batch*, unsigned int, uint32_t)'    {mnl_nft_setelem_batch_flush}

  [D] 'function int mnl_nft_setelem_get(netlink_ctx*, nftnl_set*)'    {mnl_nft_setelem_get}

  [D] 'function nftnl_set* mnl_nft_setelem_get_one(netlink_ctx*, nftnl_set*)'    {mnl_nft_setelem_get_one}

  [D] 'function int mnl_nft_table_batch_add(nftnl_table*, nftnl_batch*, unsigned int, uint32_t)'    {mnl_nft_table_batch_add}

  [D] 'function int mnl_nft_table_batch_del(nftnl_table*, nftnl_batch*, unsigned int, uint32_t)'    {mnl_nft_table_batch_del}

  [D] 'function nftnl_table_list* mnl_nft_table_dump(netlink_ctx*, int)'    {mnl_nft_table_dump}

  [D] 'function uint32_t mnl_seqnum_alloc(unsigned int*)'    {mnl_seqnum_alloc}

  [D] 'function monitor* monitor_alloc(uint32_t, uint32_t, const char*)'    {monitor_alloc}

  [D] 'function void monitor_free(monitor*)'    {monitor_free}

  [D] 'function void mpz_bitmask(__mpz_struct*, unsigned int)'    {mpz_bitmask}

  [D] 'function void* mpz_export_data(void*, const __mpz_struct*, byteorder, unsigned int)'    {mpz_export_data}

  [D] 'function uint16_t mpz_get_be16(const __mpz_struct*)'    {mpz_get_be16}

  [D] 'function uint32_t mpz_get_be32(const __mpz_struct*)'    {mpz_get_be32}

  [D] 'function uint16_t mpz_get_uint16(const __mpz_struct*)'    {mpz_get_uint16}

  [D] 'function uint32_t mpz_get_uint32(const __mpz_struct*)'    {mpz_get_uint32}

  [D] 'function uint64_t mpz_get_uint64(const __mpz_struct*)'    {mpz_get_uint64}

  [D] 'function uint8_t mpz_get_uint8(const __mpz_struct*)'    {mpz_get_uint8}

  [D] 'function void mpz_import_data(__mpz_struct*, void*, byteorder, unsigned int)'    {mpz_import_data}

  [D] 'function void mpz_init_bitmask(__mpz_struct*, unsigned int)'    {mpz_init_bitmask}

  [D] 'function void mpz_lshift_ui(__mpz_struct*, unsigned int)'    {mpz_lshift_ui}

  [D] 'function void mpz_prefixmask(__mpz_struct*, unsigned int, unsigned int)'    {mpz_prefixmask}

  [D] 'function void mpz_rshift_ui(__mpz_struct*, unsigned int)'    {mpz_rshift_ui}

  [D] 'function void mpz_switch_byteorder(__mpz_struct*, unsigned int)'    {mpz_switch_byteorder}

  [D] 'function bool must_print_eq_op(const expr*)'    {must_print_eq_op}

  [D] 'function const char* nat_etype2str(nft_nat_etypes)'    {nat_etype2str}

  [D] 'function stmt* nat_stmt_alloc(const location*, nft_nat_etypes)'    {nat_stmt_alloc}

  [D] 'function int netlink_add_chain_batch(netlink_ctx*, const cmd*, uint32_t)'    {netlink_add_chain_batch}

  [D] 'function int netlink_add_flowtable(netlink_ctx*, const cmd*, uint32_t)'    {netlink_add_flowtable}

  [D] 'function int netlink_add_obj(netlink_ctx*, const cmd*, uint32_t)'    {netlink_add_obj}

  [D] 'function int netlink_add_rule_batch(netlink_ctx*, const cmd*, uint32_t)'    {netlink_add_rule_batch}

  [D] 'function int netlink_add_set_batch(netlink_ctx*, const cmd*, uint32_t)'    {netlink_add_set_batch}

  [D] 'function int netlink_add_setelems_batch(netlink_ctx*, const handle*, const expr*, uint32_t)'    {netlink_add_setelems_batch}

  [D] 'function int netlink_add_table_batch(netlink_ctx*, const cmd*, uint32_t)'    {netlink_add_table_batch}

  [D] 'function expr* netlink_alloc_data(const location*, const nft_data_delinearize*, nft_registers)'    {netlink_alloc_data}

  [D] 'function expr* netlink_alloc_value(const location*, const nft_data_delinearize*)'    {netlink_alloc_value}

  [D] 'function int netlink_batch_send(netlink_ctx*, list_head*)'    {netlink_batch_send}

  [D] 'function void netlink_close_sock(mnl_socket*)'    {netlink_close_sock}

  [D] 'function int netlink_del_rule_batch(netlink_ctx*, const cmd*)'    {netlink_del_rule_batch}

  [D] 'function int netlink_delete_chain_batch(netlink_ctx*, const cmd*)'    {netlink_delete_chain_batch}

  [D] 'function int netlink_delete_flowtable(netlink_ctx*, const cmd*)'    {netlink_delete_flowtable}

  [D] 'function int netlink_delete_obj(netlink_ctx*, const cmd*, uint32_t)'    {netlink_delete_obj}

  [D] 'function int netlink_delete_set_batch(netlink_ctx*, const cmd*)'    {netlink_delete_set_batch}

  [D] 'function int netlink_delete_setelems_batch(netlink_ctx*, const cmd*)'    {netlink_delete_setelems_batch}

  [D] 'function int netlink_delete_table_batch(netlink_ctx*, const cmd*)'    {netlink_delete_table_batch}

  [D] 'function chain* netlink_delinearize_chain(netlink_ctx*, const nftnl_chain*)'    {netlink_delinearize_chain}

  [D] 'function obj* netlink_delinearize_obj(netlink_ctx*, nftnl_obj*)'    {netlink_delinearize_obj}

  [D] 'function rule* netlink_delinearize_rule(netlink_ctx*, nftnl_rule*)'    {netlink_delinearize_rule}

  [D] 'function set* netlink_delinearize_set(netlink_ctx*, const nftnl_set*)'    {netlink_delinearize_set}

  [D] 'function int netlink_delinearize_setelem(nftnl_set_elem*, const set*, nft_cache*)'    {netlink_delinearize_setelem}

  [D] 'function table* netlink_delinearize_table(netlink_ctx*, const nftnl_table*)'    {netlink_delinearize_table}

  [D] 'function void netlink_dump_chain(const nftnl_chain*, netlink_ctx*)'    {netlink_dump_chain}

  [D] 'function void netlink_dump_expr(const nftnl_expr*, FILE*, unsigned int)'    {netlink_dump_expr}

  [D] 'function void netlink_dump_obj(nftnl_obj*, netlink_ctx*)'    {netlink_dump_obj}

  [D] 'function void netlink_dump_rule(const nftnl_rule*, netlink_ctx*)'    {netlink_dump_rule}

  [D] 'function nftnl_ruleset* netlink_dump_ruleset(netlink_ctx*, const handle*, const location*)'    {netlink_dump_ruleset}

  [D] 'function void netlink_dump_set(const nftnl_set*, netlink_ctx*)'    {netlink_dump_set}

  [D] 'function int netlink_echo_callback(const nlmsghdr*, void*)'    {netlink_echo_callback}

  [D] 'function int netlink_events_trace_cb(const nlmsghdr*, int, netlink_mon_handler*)'    {netlink_events_trace_cb}

  [D] 'function int netlink_flush_chain(netlink_ctx*, const cmd*)'    {netlink_flush_chain}

  [D] 'function int netlink_flush_setelems(netlink_ctx*, const cmd*)'    {netlink_flush_setelems}

  [D] 'function void netlink_gen_data(const expr*, nft_data_linearize*)'    {netlink_gen_data}

  [D] 'function void netlink_gen_raw_data(const __mpz_struct*, byteorder, unsigned int, nft_data_linearize*)'    {netlink_gen_raw_data}

  [D] 'function uint16_t netlink_genid_get(netlink_ctx*)'    {netlink_genid_get}

  [D] 'function int netlink_get_setelem(netlink_ctx*, const handle*, const location*, table*, set*, expr*)'    {netlink_get_setelem}

  [D] 'function int netlink_io_error(netlink_ctx*, const location*, const char*, ...)'    {netlink_io_error}

  [D] 'function void netlink_linearize_rule(netlink_ctx*, nftnl_rule*, const rule*)'    {netlink_linearize_rule}

  [D] 'function int netlink_list_chains(netlink_ctx*, const handle*)'    {netlink_list_chains}

  [D] 'function int netlink_list_flowtables(netlink_ctx*, const handle*)'    {netlink_list_flowtables}

  [D] 'function int netlink_list_objs(netlink_ctx*, const handle*)'    {netlink_list_objs}

  [D] 'function int netlink_list_setelems(netlink_ctx*, const handle*, set*)'    {netlink_list_setelems}

  [D] 'function int netlink_list_sets(netlink_ctx*, const handle*)'    {netlink_list_sets}

  [D] 'function int netlink_list_table(netlink_ctx*, const handle*)'    {netlink_list_table}

  [D] 'function int netlink_list_tables(netlink_ctx*, const handle*)'    {netlink_list_tables}

  [D] 'function int netlink_markup_parse_cb(const nftnl_parse_ctx*)'    {netlink_markup_parse_cb}

  [D] 'function int netlink_monitor(netlink_mon_handler*, mnl_socket*)'    {netlink_monitor}

  [D] 'function mnl_socket* netlink_open_sock()'    {netlink_open_sock}

  [D] 'function stmt* netlink_parse_set_expr(const set*, const nft_cache*, const nftnl_expr*)'    {netlink_parse_set_expr}

  [D] 'function int netlink_rename_chain_batch(netlink_ctx*, const handle*, const cmd*)'    {netlink_rename_chain_batch}

  [D] 'function int netlink_replace_rule_batch(netlink_ctx*, const cmd*)'    {netlink_replace_rule_batch}

  [D] 'function int netlink_reset_objs(netlink_ctx*, const cmd*, uint32_t, bool)'    {netlink_reset_objs}

  [D] 'function void netlink_restart(mnl_socket*)'    {netlink_restart}

  [D] 'function YY_BUFFER_STATE nft__create_buffer(FILE*, int, yyscan_t)'    {nft__create_buffer}

  [D] 'function void nft__delete_buffer(YY_BUFFER_STATE, yyscan_t)'    {nft__delete_buffer}

  [D] 'function void nft__flush_buffer(YY_BUFFER_STATE, yyscan_t)'    {nft__flush_buffer}

  [D] 'function YY_BUFFER_STATE nft__scan_buffer(char*, yy_size_t, yyscan_t)'    {nft__scan_buffer}

  [D] 'function YY_BUFFER_STATE nft__scan_bytes(const char*, int, yyscan_t)'    {nft__scan_bytes}

  [D] 'function YY_BUFFER_STATE nft__scan_string(const char*, yyscan_t)'    {nft__scan_string}

  [D] 'function void nft__switch_to_buffer(YY_BUFFER_STATE, yyscan_t)'    {nft__switch_to_buffer}

  [D] 'function void* nft_alloc(yy_size_t, yyscan_t)'    {nft_alloc}

  [D] 'function void nft_cmd_expand(cmd*)'    {nft_cmd_expand}

  [D] 'function bool nft_ctx_output_get_echo(nft_ctx*)'    {nft_ctx_output_get_echo}

  [D] 'function bool nft_ctx_output_get_handle(nft_ctx*)'    {nft_ctx_output_get_handle}

  [D] 'function bool nft_ctx_output_get_ip2name(nft_ctx*)'    {nft_ctx_output_get_ip2name}

  [D] 'function bool nft_ctx_output_get_json(nft_ctx*)'    {nft_ctx_output_get_json}

  [D] 'function nft_numeric_level nft_ctx_output_get_numeric(nft_ctx*)'    {nft_ctx_output_get_numeric}

  [D] 'function bool nft_ctx_output_get_stateless(nft_ctx*)'    {nft_ctx_output_get_stateless}

  [D] 'function void nft_ctx_output_set_echo(nft_ctx*, bool)'    {nft_ctx_output_set_echo}

  [D] 'function void nft_ctx_output_set_handle(nft_ctx*, bool)'    {nft_ctx_output_set_handle}

  [D] 'function void nft_ctx_output_set_ip2name(nft_ctx*, bool)'    {nft_ctx_output_set_ip2name}

  [D] 'function void nft_ctx_output_set_json(nft_ctx*, bool)'    {nft_ctx_output_set_json}

  [D] 'function void nft_ctx_output_set_numeric(nft_ctx*, nft_numeric_level)'    {nft_ctx_output_set_numeric}

  [D] 'function void nft_ctx_output_set_stateless(nft_ctx*, bool)'    {nft_ctx_output_set_stateless}

  [D] 'function void nft_free(void*, yyscan_t)'    {nft_free}

  [D] 'function int nft_get_column(yyscan_t)'    {nft_get_column}

  [D] 'function int nft_get_debug(yyscan_t)'    {nft_get_debug}

  [D] 'function void* nft_get_extra(yyscan_t)'    {nft_get_extra}

  [D] 'function FILE* nft_get_in(yyscan_t)'    {nft_get_in}

  [D] 'function int nft_get_leng(yyscan_t)'    {nft_get_leng}

  [D] 'function int nft_get_lineno(yyscan_t)'    {nft_get_lineno}

  [D] 'function location* nft_get_lloc(yyscan_t)'    {nft_get_lloc}

  [D] 'function YYSTYPE* nft_get_lval(yyscan_t)'    {nft_get_lval}

  [D] 'function FILE* nft_get_out(yyscan_t)'    {nft_get_out}

  [D] 'function char* nft_get_text(yyscan_t)'    {nft_get_text}

  [D] 'function int nft_gmp_print(output_ctx*, const char*, ...)'    {nft_gmp_print}

  [D] 'function char* nft_if_indextoname(unsigned int, char*)'    {nft_if_indextoname}

  [D] 'function unsigned int nft_if_nametoindex(const char*)'    {nft_if_nametoindex}

  [D] 'function int nft_lex(YYSTYPE*, location*, yyscan_t)'    {nft_lex}

  [D] 'function int nft_lex_destroy(yyscan_t)'    {nft_lex_destroy}

  [D] 'function int nft_lex_init(yyscan_t*)'    {nft_lex_init}

  [D] 'function int nft_lex_init_extra(void*, yyscan_t*)'    {nft_lex_init_extra}

  [D] 'function int nft_parse(nft_ctx*, void*, parser_state*)'    {nft_parse}

  [D] 'function void nft_pop_buffer_state(yyscan_t)'    {nft_pop_buffer_state}

  [D] 'function int nft_print(output_ctx*, const char*, ...)'    {nft_print}

  [D] 'function void nft_push_buffer_state(YY_BUFFER_STATE, yyscan_t)'    {nft_push_buffer_state}

  [D] 'function void* nft_realloc(void*, yy_size_t, yyscan_t)'    {nft_realloc}

  [D] 'function void nft_restart(FILE*, yyscan_t)'    {nft_restart}

  [D] 'function void nft_set_column(int, yyscan_t)'    {nft_set_column}

  [D] 'function void nft_set_debug(int, yyscan_t)'    {nft_set_debug}

  [D] 'function void nft_set_extra(void*, yyscan_t)'    {nft_set_extra}

  [D] 'function void nft_set_in(FILE*, yyscan_t)'    {nft_set_in}

  [D] 'function void nft_set_lineno(int, yyscan_t)'    {nft_set_lineno}

  [D] 'function void nft_set_lloc(location*, yyscan_t)'    {nft_set_lloc}

  [D] 'function void nft_set_lval(YYSTYPE*, yyscan_t)'    {nft_set_lval}

  [D] 'function void nft_set_out(FILE*, yyscan_t)'    {nft_set_out}

  [D] 'function stmt* notrack_stmt_alloc(const location*)'    {notrack_stmt_alloc}

  [D] 'function expr* numgen_expr_alloc(const location*, nft_ng_types, uint32_t, uint32_t)'    {numgen_expr_alloc}

  [D] 'function void obj_add_hash(obj*, table*)'    {obj_add_hash}

  [D] 'function obj* obj_alloc(const location*)'    {obj_alloc}

  [D] 'function void obj_free(obj*)'    {obj_free}

  [D] 'function obj* obj_get(obj*)'    {obj_get}

  [D] 'function obj* obj_lookup(const table*, const char*, uint32_t)'    {obj_lookup}

  [D] 'function void obj_print(const obj*, output_ctx*)'    {obj_print}

  [D] 'function void obj_print_plain(const obj*, output_ctx*)'    {obj_print_plain}

  [D] 'function const char* obj_type_name(stmt_types)'    {obj_type_name}

  [D] 'function uint32_t obj_type_to_cmd(uint32_t)'    {obj_type_to_cmd}

  [D] 'function stmt* objref_stmt_alloc(const location*)'    {objref_stmt_alloc}

  [D] 'function const char* objref_type_name(uint32_t)'    {objref_type_name}

  [D] 'function void parser_init(nft_ctx*, parser_state*, list_head*, list_head*)'    {parser_init}

  [D] 'function bool payload_can_merge(const expr*, const expr*)'    {payload_can_merge}

  [D] 'function bool payload_dependency_exists(const payload_dep_ctx*, proto_bases)'    {payload_dependency_exists}

  [D] 'function void payload_dependency_kill(payload_dep_ctx*, expr*, unsigned int)'    {payload_dependency_kill}

  [D] 'function void payload_dependency_release(payload_dep_ctx*)'    {payload_dependency_release}

  [D] 'function void payload_dependency_reset(payload_dep_ctx*)'    {payload_dependency_reset}

  [D] 'function void payload_dependency_store(payload_dep_ctx*, stmt*, proto_bases)'    {payload_dependency_store}

  [D] 'function expr* payload_expr_alloc(const location*, const proto_desc*, unsigned int)'    {payload_expr_alloc}

  [D] 'function void payload_expr_complete(expr*, const proto_ctx*)'    {payload_expr_complete}

  [D] 'function void payload_expr_expand(list_head*, expr*, const proto_ctx*)'    {payload_expr_expand}

  [D] 'function expr* payload_expr_join(const expr*, const expr*)'    {payload_expr_join}

  [D] 'function bool payload_expr_trim(expr*, expr*, const proto_ctx*, unsigned int*)'    {payload_expr_trim}

  [D] 'function int payload_gen_dependency(eval_ctx*, const expr*, stmt**)'    {payload_gen_dependency}

  [D] 'function unsigned int payload_hdr_field(const expr*)'    {payload_hdr_field}

  [D] 'function void payload_init_raw(expr*, proto_bases, unsigned int, unsigned int)'    {payload_init_raw}

  [D] 'function bool payload_is_known(const expr*)'    {payload_is_known}

  [D] 'function bool payload_is_stacked(const proto_desc*, const expr*)'    {payload_is_stacked}

  [D] 'function stmt* payload_stmt_alloc(const location*, expr*, expr*)'    {payload_stmt_alloc}

  [D] 'function expr* prefix_expr_alloc(const location*, expr*, unsigned int)'    {prefix_expr_alloc}

  [D] 'function void proto_ctx_init(proto_ctx*, unsigned int, unsigned int)'    {proto_ctx_init}

  [D] 'function void proto_ctx_update(proto_ctx*, proto_bases, const location*, const proto_desc*)'    {proto_ctx_update}

  [D] 'function const proto_desc* proto_dev_desc(uint16_t)'    {proto_dev_desc}

  [D] 'function int proto_dev_type(const proto_desc*, uint16_t*)'    {proto_dev_type}

  [D] 'function int proto_find_num(const proto_desc*, const proto_desc*)'    {proto_find_num}

  [D] 'function const proto_desc* proto_find_upper(const proto_desc*, unsigned int)'    {proto_find_upper}

  [D] 'function stmt* queue_stmt_alloc(const location*)'    {queue_stmt_alloc}

  [D] 'function stmt* quota_stmt_alloc(const location*)'    {quota_stmt_alloc}

  [D] 'function expr* range_expr_alloc(const location*, expr*, expr*)'    {range_expr_alloc}

  [D] 'function void range_expr_value_high(__mpz_struct*, const expr*)'    {range_expr_value_high}

  [D] 'function void range_expr_value_low(__mpz_struct*, const expr*)'    {range_expr_value_low}

  [D] 'function error_record* rate_parse(const location*, const char*, uint64_t*, uint64_t*)'    {rate_parse}

  [D] 'function void rb_erase(rb_node*, rb_root*)'    {rb_erase}

  [D] 'function rb_node* rb_first(rb_root*)'    {rb_first}

  [D] 'function void rb_insert_color(rb_node*, rb_root*)'    {rb_insert_color}

  [D] 'function rb_node* rb_last(rb_root*)'    {rb_last}

  [D] 'function rb_node* rb_next(rb_node*)'    {rb_next}

  [D] 'function rb_node* rb_prev(rb_node*)'    {rb_prev}

  [D] 'function void rb_replace_node(rb_node*, rb_node*, rb_root*)'    {rb_replace_node}

  [D] 'function void realm_table_meta_exit()'    {realm_table_meta_exit}

  [D] 'function void realm_table_meta_init()'    {realm_table_meta_init}

  [D] 'function void realm_table_rt_exit()'    {realm_table_rt_exit}

  [D] 'function void realm_table_rt_init()'    {realm_table_rt_init}

  [D] 'function stmt* reject_stmt_alloc(const location*)'    {reject_stmt_alloc}

  [D] 'function expr* relational_expr_alloc(const location*, ops, expr*, expr*)'    {relational_expr_alloc}

  [D] 'function void relational_expr_pctx_update(proto_ctx*, const expr*)'    {relational_expr_pctx_update}

  [D] 'function expr* rt_expr_alloc(const location*, nft_rt_keys, bool)'    {rt_expr_alloc}

  [D] 'function void rt_expr_update_type(proto_ctx*, expr*)'    {rt_expr_update_type}

  [D] 'function void rt_symbol_table_free(symbol_table*)'    {rt_symbol_table_free}

  [D] 'function symbol_table* rt_symbol_table_init(const char*)'    {rt_symbol_table_init}

  [D] 'function rule* rule_alloc(const location*, const handle*)'    {rule_alloc}

  [D] 'function void rule_free(rule*)'    {rule_free}

  [D] 'function rule* rule_get(rule*)'    {rule_get}

  [D] 'function rule* rule_lookup(const chain*, uint64_t)'    {rule_lookup}

  [D] 'function error_record* rule_postprocess(rule*)'    {rule_postprocess}

  [D] 'function void rule_print(const rule*, output_ctx*)'    {rule_print}

  [D] 'function void scanner_destroy(void*)'    {scanner_destroy}

  [D] 'function int scanner_include_file(nft_ctx*, void*, const char*, const location*)'    {scanner_include_file}

  [D] 'function void* scanner_init(parser_state*)'    {scanner_init}

  [D] 'function void scanner_push_buffer(void*, const input_descriptor*, const char*)'    {scanner_push_buffer}

  [D] 'function int scanner_read_file(void*, const char*, const location*)'    {scanner_read_file}

  [D] 'function scope* scope_init(scope*, const scope*)'    {scope_init}

  [D] 'function void scope_release(const scope*)'    {scope_release}

  [D] 'function void set_add_hash(set*, table*)'    {set_add_hash}

  [D] 'function set* set_alloc(const location*)'    {set_alloc}

  [D] 'function set* set_clone(const set*)'    {set_clone}

  [D] 'function const datatype* set_datatype_alloc(const datatype*, unsigned int)'    {set_datatype_alloc}

  [D] 'function void set_datatype_destroy(const datatype*)'    {set_datatype_destroy}

  [D] 'function expr* set_elem_expr_alloc(const location*, expr*)'    {set_elem_expr_alloc}

  [D] 'function expr* set_expr_alloc(const location*, const set*)'    {set_expr_alloc}

  [D] 'function void set_free(set*)'    {set_free}

  [D] 'function set* set_get(set*)'    {set_get}

  [D] 'function set* set_lookup(const table*, const char*)'    {set_lookup}

  [D] 'function set* set_lookup_global(uint32_t, const char*, const char*, nft_cache*)'    {set_lookup_global}

  [D] 'function const char* set_policy2str(uint32_t)'    {set_policy2str}

  [D] 'function void set_print(const set*, output_ctx*)'    {set_print}

  [D] 'function void set_print_plain(const set*, output_ctx*)'    {set_print_plain}

  [D] 'function expr* set_ref_expr_alloc(const location*, set*)'    {set_ref_expr_alloc}

  [D] 'function stmt* set_stmt_alloc(const location*)'    {set_stmt_alloc}

  [D] 'function int set_to_intervals(list_head*, set*, expr*, bool, unsigned int, bool)'    {set_to_intervals}

  [D] 'function expr* socket_expr_alloc(const location*, nft_socket_keys)'    {socket_expr_alloc}

  [D] 'function stmt* stmt_alloc(const location*, const stmt_ops*)'    {stmt_alloc}

  [D] 'function int stmt_evaluate(eval_ctx*, stmt*)'    {stmt_evaluate}

  [D] 'function void stmt_free(stmt*)'    {stmt_free}

  [D] 'function void stmt_list_free(list_head*)'    {stmt_list_free}

  [D] 'function void stmt_print(const stmt*, output_ctx*)'    {stmt_print}

  [D] 'function void symbol_bind(scope*, const char*, expr*)'    {symbol_bind}

  [D] 'function expr* symbol_expr_alloc(const location*, symbol_types, scope*, const char*)'    {symbol_expr_alloc}

  [D] 'function symbol* symbol_get(const scope*, const char*)'    {symbol_get}

  [D] 'function symbol* symbol_lookup(const scope*, const char*)'    {symbol_lookup}

  [D] 'function error_record* symbol_parse(const expr*, expr**)'    {symbol_parse}

  [D] 'function void symbol_table_print(const symbol_table*, const datatype*, byteorder, output_ctx*)'    {symbol_table_print}

  [D] 'function int symbol_unbind(const scope*, const char*)'    {symbol_unbind}

  [D] 'function error_record* symbolic_constant_parse(const expr*, const symbol_table*, expr**)'    {symbolic_constant_parse}

  [D] 'function void symbolic_constant_print(const symbol_table*, const expr*, bool, output_ctx*)'    {symbolic_constant_print}

  [D] 'function void table_add_hash(table*, nft_cache*)'    {table_add_hash}

  [D] 'function table* table_alloc()'    {table_alloc}

  [D] 'function void table_free(table*)'    {table_free}

  [D] 'function table* table_get(table*)'    {table_get}

  [D] 'function table* table_lookup(const handle*, const nft_cache*)'    {table_lookup}

  [D] 'function expr* tcpopt_expr_alloc(const location*, uint8_t, uint8_t)'    {tcpopt_expr_alloc}

  [D] 'function bool tcpopt_find_template(expr*, const expr*, unsigned int*)'    {tcpopt_find_template}

  [D] 'function void tcpopt_init_raw(expr*, uint8_t, unsigned int, unsigned int, uint32_t)'    {tcpopt_init_raw}

  [D] 'function error_record* time_parse(const location*, const char*, uint64_t*)'    {time_parse}

  [D] 'function void time_print(uint64_t, output_ctx*)'    {time_print}

  [D] 'function expr* unary_expr_alloc(const location*, ops, expr*)'    {unary_expr_alloc}

  [D] 'function expr* variable_expr_alloc(const location*, scope*, symbol*)'    {variable_expr_alloc}

  [D] 'function expr* verdict_expr_alloc(const location*, int, const char*)'    {verdict_expr_alloc}

  [D] 'function stmt* verdict_stmt_alloc(const location*, expr*)'    {verdict_stmt_alloc}

  [D] 'function void xfree(void*)'    {xfree}

  [D] 'function void* xmalloc(size_t)'    {xmalloc}

  [D] 'function void* xmalloc_array(size_t, size_t)'    {xmalloc_array}

  [D] 'function void* xrealloc(void*, size_t)'    {xrealloc}

  [D] 'function char* xstrdup(const char*)'    {xstrdup}

  [D] 'function void xstrunescape(const char*, char*)'    {xstrunescape}

  [D] 'function stmt* xt_stmt_alloc(const location*)'    {xt_stmt_alloc}

  [D] 'function void* xzalloc(size_t)'    {xzalloc}



2 Added functions:



  [A] 'function unsigned int nft_ctx_output_get_flags(nft_ctx*)'    {nft_ctx_output_get_flags}

  [A] 'function void nft_ctx_output_set_flags(nft_ctx*, unsigned int)'    {nft_ctx_output_set_flags}



2 functions with some indirect sub-type change:



  [C]'function int nft_ctx_add_include_path(nft_ctx*, const char*)' at libnftables.c:102:1 has some indirect sub-type changes:

    parameter 1 of type 'nft_ctx*' has sub-type changes:

      in pointed to type 'struct nft_ctx' at nftables.h:111:1:

        type size changed from 1600 to 1856 (in bits)

        2 data member insertions:

          'scope* nft_ctx::top_scope', at offset 1728 (in bits) at nftables.h:123:1

          'void* nft_ctx::json_root', at offset 1792 (in bits) at nftables.h:124:1

        6 data member changes:

         type of 'output_ctx nft_ctx::output' changed:

           type size changed from 832 to 960 (in bits)

           5 data member deletions:

             'unsigned int output_ctx::stateless', at offset 32 (in bits) at nftables.h:20:1



             'unsigned int output_ctx::ip2name', at offset 64 (in bits) at nftables.h:21:1



             'unsigned int output_ctx::handle', at offset 96 (in bits) at nftables.h:22:1



             'unsigned int output_ctx::echo', at offset 128 (in bits) at nftables.h:23:1



             'unsigned int output_ctx::json', at offset 160 (in bits) at nftables.h:24:1



           1 data member insertion:

             'symbol_tables output_ctx::tbl', at offset 704 (in bits) at nftables.h:35:1

           1 data member change:

            offset changed from 192 to 64 (in bits) (by -128 bits)

           no data member change (1 filtered);



         'bool nft_ctx::check' offset changed from 1088 to 1216 (in bits) (by +128 bits)

         type of 'nft_cache nft_ctx::cache' changed:

           type size hasn't changed

           1 data member insertion:

             'uint32_t nft_cache::flags', at offset 224 (in bits) at nftables.h:102:1

           1 data member change:

            type of 'uint16_t nft_cache::genid' changed:

              typedef name changed from uint16_t to uint32_t at stdint-uintn.h:26:1

              underlying type 'typedef __uint16_t' at types.h:39:1 changed:

                typedef name changed from __uint16_t to __uint32_t at types.h:41:1

                underlying type 'unsigned short int' changed:

                  type name changed from 'unsigned short int' to 'unsigned int'

                  type size changed from 16 to 32 (in bits)



         and offset changed from 1152 to 1280 (in bits) (by +128 bits)

         'uint32_t nft_ctx::flags' offset changed from 1408 to 1536 (in bits) (by +128 bits)

         type of 'parser_state* nft_ctx::state' changed:

           in pointed to type 'struct parser_state' at parser.h:16:1:

             type size changed from 14720 to 640 (in bits)

             3 data member deletions:

               'unsigned int parser_state::indesc_idx', at offset 11328 (in bits) at parser.h:19:1



               'scope parser_state::top_scope', at offset 11520 (in bits) at parser.h:24:1



               'eval_ctx parser_state::ectx', at offset 12032 (in bits) at parser.h:29:1



             6 data member changes:

              type of 'input_descriptor* parser_state::indesc' changed:

                in pointed to type 'struct input_descriptor' at nftables.h:188:1:

                  type size changed from 704 to 960 (in bits)

                  3 data member insertions:

                    'list_head input_descriptor::list', at offset 0 (in bits) at nftables.h:189:1

                    'FILE* input_descriptor::f', at offset 128 (in bits) at nftables.h:190:1

                    'unsigned int input_descriptor::depth', at offset 192 (in bits) at nftables.h:191:1

                  8 data member changes:

                   'location input_descriptor::location' offset changed from 0 to 256 (in bits) (by +256 bits)

                   'input_descriptor_types input_descriptor::type' offset changed from 320 to 576 (in bits) (by +256 bits)

                   'const char* input_descriptor::name' offset changed from 384 to 640 (in bits) (by +256 bits)

                   'const char* input_descriptor::data' offset changed from 448 to 704 (in bits) (by +256 bits)

                   'unsigned int input_descriptor::lineno' offset changed from 512 to 768 (in bits) (by +256 bits)

                   'unsigned int input_descriptor::column' offset changed from 544 to 800 (in bits) (by +256 bits)

                   'off_t input_descriptor::token_offset' offset changed from 576 to 832 (in bits) (by +256 bits)

                   'off_t input_descriptor::line_offset' offset changed from 640 to 896 (in bits) (by +256 bits)



              'list_head* parser_state::msgs' offset changed from 11392 to 192 (in bits) (by -11200 bits)

              'unsigned int parser_state::nerrs' offset changed from 11456 to 256 (in bits) (by -11200 bits)

              'scope* parser_state::scopes[3]' offset changed from 11712 to 320 (in bits) (by -11392 bits)

              'unsigned int parser_state::scope' offset changed from 11904 to 512 (in bits) (by -11392 bits)

              'list_head* parser_state::cmds' offset changed from 11968 to 576 (in bits) (by -11392 bits)

             1 data member change:

              type of 'input_descriptor parser_state::indescs[16]' changed:

                entity changed from 'input_descriptor[16]' to 'struct list_head' at list.h:21:1

                type size changed from 11264 to 128 (in bits)

              and name of 'parser_state::indescs' changed to 'parser_state::indesc_list' at parser.h:18:1

         and offset changed from 1472 to 1600 (in bits) (by +128 bits)

         'void* nft_ctx::scanner' offset changed from 1536 to 1664 (in bits) (by +128 bits)



  [C]'function int nft_run_cmd_from_buffer(nft_ctx*, char*, size_t)' at libnftables.c:433:1 has some indirect sub-type changes:

    parameter 3 of type 'typedef size_t' was removed







2 Removed function symbols not referenced by debug info:



  netlink_flush_ruleset

  netlink_flush_table



