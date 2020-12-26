# Functions changed info

---------------diffs in subversion_libsvn_fs_base-1.so.0.0.0_abidiff.out:----------------

Functions changes summary: 0 Removed, 0 Changed (163 filtered out), 0 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



---------------diffs in subversion_mod_authz_svn.so_abidiff.out:----------------

Functions changes summary: 0 Removed, 0 Changed, 0 Added function

Variables changes summary: 0 Removed, 0 Changed (1 filtered out), 0 Added variable



---------------diffs in subversion_libsvn_ra_svn-1.so.0.0.0_abidiff.out:----------------

Functions changes summary: 0 Removed, 0 Changed (127 filtered out), 0 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



---------------diffs in subversion_libsvn_repos-1.so.0.0.0_abidiff.out:----------------

Functions changes summary: 0 Removed, 1 Changed (48 filtered out), 5 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



5 Added functions:



  'function svn_error_t* svn_repos__dump_magic_header_record(svn_stream_t*, int, apr_pool_t*)'    {svn_repos__dump_magic_header_record}

  'function svn_error_t* svn_repos__dump_uuid_header_record(svn_stream_t*, const char*, apr_pool_t*)'    {svn_repos__dump_uuid_header_record}

  'function svn_error_t* svn_repos__get_dump_editor(const svn_delta_editor_t**, void**, svn_stream_t*, const char*, apr_pool_t*)'    {svn_repos__get_dump_editor}

  'function svn_error_t* svn_repos_authz_parse2(svn_authz_t**, svn_stream_t*, svn_stream_t*, svn_repos_authz_warning_func_t, void*, apr_pool_t*, apr_pool_t*)'    {svn_repos_authz_parse2}

  'function svn_error_t* svn_repos_authz_read4(svn_authz_t**, const char*, const char*, svn_boolean_t, svn_repos_t*, svn_repos_authz_warning_func_t, void*, apr_pool_t*, apr_pool_t*)'    {svn_repos_authz_read4}



1 function with some indirect sub-type change:



  [C]'function svn_error_t* svn_authz__parse(authz_full_t**, svn_stream_t*, svn_stream_t*, apr_pool_t*, apr_pool_t*)' at authz_parse.c:1369:1 has some indirect sub-type changes:

    parameter 4 of type 'apr_pool_t*' changed:

      entity changed from 'apr_pool_t*' to compatible type 'typedef svn_repos_authz_warning_func_t' at svn_repos.h:4158:1

        in pointed to type 'struct apr_pool_t':

          entity changed from 'struct apr_pool_t' to 'function type void (void*, const svn_error_t*, apr_pool_t*)'

          type size changed from 0 to 64 (in bits)

    parameter 5 of type 'apr_pool_t*' changed:

      in pointed to type 'typedef apr_pool_t':

        entity changed from 'typedef apr_pool_t' to 'void'

        type size hasn't changed

    parameter 6 of type 'apr_pool_t*' was added

    parameter 7 of type 'apr_pool_t*' was added







---------------diffs in subversion_libsvn_client-1.so.0.0.0_abidiff.out:----------------

Functions changes summary: 8 Removed, 1 Changed (264 filtered out), 41 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



8 Removed functions:



  'function svn_error_t* svn_client__copy_foreign(const char*, const char*, svn_opt_revision_t*, svn_opt_revision_t*, svn_depth_t, svn_boolean_t, svn_boolean_t, svn_client_ctx_t*, apr_pool_t*)'    {svn_client__copy_foreign}

  'function svn_error_t* svn_client_shelf_get_paths(apr_hash_t**, const char*, const char*, svn_client_ctx_t*, apr_pool_t*, apr_pool_t*)'    {svn_client_shelf_get_paths}

  'function svn_error_t* svn_client_shelf_has_changes(svn_boolean_t*, const char*, const char*, svn_client_ctx_t*, apr_pool_t*)'    {svn_client_shelf_has_changes}

  'function svn_error_t* svn_client_shelve(const char*, const apr_array_header_t*, svn_depth_t, const apr_array_header_t*, svn_boolean_t, svn_boolean_t, svn_client_ctx_t*, apr_pool_t*)'    {svn_client_shelve}

  'function svn_error_t* svn_client_shelves_any(svn_boolean_t*, const char*, svn_client_ctx_t*, apr_pool_t*)'    {svn_client_shelves_any}

  'function svn_error_t* svn_client_shelves_delete(const char*, const char*, svn_boolean_t, svn_client_ctx_t*, apr_pool_t*)'    {svn_client_shelves_delete}

  'function svn_error_t* svn_client_shelves_list(apr_hash_t**, const char*, svn_client_ctx_t*, apr_pool_t*, apr_pool_t*)'    {svn_client_shelves_list}

  'function svn_error_t* svn_client_unshelve(const char*, const char*, svn_boolean_t, svn_boolean_t, svn_client_ctx_t*, apr_pool_t*)'    {svn_client_unshelve}



41 Added functions:



  'function svn_error_t* svn_client__condense_commit_items2(const char*, apr_array_header_t*, apr_pool_t*)'    {svn_client__condense_commit_items2}

  'function svn_error_t* svn_client__get_diff_writer_svn(svn_diff_tree_processor_t**, const char*, const char*, const char*, const apr_array_header_t*, const char*, svn_boolean_t, svn_boolean_t, svn_boolean_t, svn_boolean_t, svn_boolean_t, svn_boolean_t, svn_boolean_t, const char*, svn_stream_t*, svn_stream_t*, svn_client_ctx_t*, apr_pool_t*)'    {svn_client__get_diff_writer_svn}

  'function svn_error_t* svn_client__layout_list(const char*, svn_client__layout_func_t, void*, svn_client_ctx_t*, apr_pool_t*)'    {svn_client__layout_list}

  'function svn_error_t* svn_client__repos_to_wc_copy_by_editor(svn_boolean_t*, svn_node_kind_t, const char*, svn_revnum_t, const char*, svn_ra_session_t*, svn_client_ctx_t*, apr_pool_t*)'    {svn_client__repos_to_wc_copy_by_editor}

  'function svn_error_t* svn_client__repos_to_wc_copy_internal(svn_boolean_t*, svn_node_kind_t, const char*, svn_revnum_t, const char*, svn_ra_session_t*, svn_client_ctx_t*, apr_pool_t*)'    {svn_client__repos_to_wc_copy_internal}

  'function svn_error_t* svn_client__shelf_apply(svn_client__shelf_version_t*, svn_boolean_t, apr_pool_t*)'    {svn_client__shelf_apply}

  'function svn_error_t* svn_client__shelf_close(svn_client__shelf_t*, apr_pool_t*)'    {svn_client__shelf_close}

  'function svn_error_t* svn_client__shelf_delete(const char*, const char*, svn_boolean_t, svn_client_ctx_t*, apr_pool_t*)'    {svn_client__shelf_delete}

  'function svn_error_t* svn_client__shelf_delete_newer_versions(svn_client__shelf_t*, svn_client__shelf_version_t*, apr_pool_t*)'    {svn_client__shelf_delete_newer_versions}

  'function svn_error_t* svn_client__shelf_diff(svn_client__shelf_version_t*, const char*, svn_depth_t, svn_boolean_t, const svn_diff_tree_processor_t*, apr_pool_t*)'    {svn_client__shelf_diff}

  'function svn_error_t* svn_client__shelf_get_all_versions(apr_array_header_t**, svn_client__shelf_t*, apr_pool_t*, apr_pool_t*)'    {svn_client__shelf_get_all_versions}

  'function svn_error_t* svn_client__shelf_get_log_message(char**, svn_client__shelf_t*, apr_pool_t*)'    {svn_client__shelf_get_log_message}

  'function svn_error_t* svn_client__shelf_get_newest_version(svn_client__shelf_version_t**, svn_client__shelf_t*, apr_pool_t*, apr_pool_t*)'    {svn_client__shelf_get_newest_version}

  'function svn_error_t* svn_client__shelf_list(apr_hash_t**, const char*, svn_client_ctx_t*, apr_pool_t*, apr_pool_t*)'    {svn_client__shelf_list}

  'function svn_error_t* svn_client__shelf_mods_editor(const svn_delta_editor_t**, void**, svn_client__shelf_version_t*, svn_wc_notify_func2_t, void*, svn_client_ctx_t*, apr_pool_t*)'    {svn_client__shelf_mods_editor}

  'function svn_error_t* svn_client__shelf_open_existing(svn_client__shelf_t**, const char*, const char*, svn_client_ctx_t*, apr_pool_t*)'    {svn_client__shelf_open_existing}

  'function svn_error_t* svn_client__shelf_open_or_create(svn_client__shelf_t**, const char*, const char*, svn_client_ctx_t*, apr_pool_t*)'    {svn_client__shelf_open_or_create}

  'function svn_error_t* svn_client__shelf_paths_changed(apr_hash_t**, svn_client__shelf_version_t*, apr_pool_t*, apr_pool_t*)'    {svn_client__shelf_paths_changed}

  'function svn_error_t* svn_client__shelf_replay(svn_client__shelf_version_t*, const char*, const svn_delta_editor_t*, void*, svn_wc_notify_func2_t, void*, apr_pool_t*)'    {svn_client__shelf_replay}

  'function svn_error_t* svn_client__shelf_revprop_get(svn_string_t**, svn_client__shelf_t*, const char*, apr_pool_t*)'    {svn_client__shelf_revprop_get}

  'function svn_error_t* svn_client__shelf_revprop_list(apr_hash_t**, svn_client__shelf_t*, apr_pool_t*)'    {svn_client__shelf_revprop_list}

  'function svn_error_t* svn_client__shelf_revprop_set(svn_client__shelf_t*, const char*, const svn_string_t*, apr_pool_t*)'    {svn_client__shelf_revprop_set}

  'function svn_error_t* svn_client__shelf_revprop_set_all(svn_client__shelf_t*, apr_hash_t*, apr_pool_t*)'    {svn_client__shelf_revprop_set_all}

  'function svn_error_t* svn_client__shelf_save_new_version3(svn_client__shelf_version_t**, svn_client__shelf_t*, const apr_array_header_t*, svn_depth_t, const apr_array_header_t*, svn_client_status_func_t, void*, svn_client_status_func_t, void*, apr_pool_t*)'    {svn_client__shelf_save_new_version3}

  'function svn_error_t* svn_client__shelf_set_log_message(svn_client__shelf_t*, const char*, apr_pool_t*)'    {svn_client__shelf_set_log_message}

  'function svn_error_t* svn_client__shelf_test_apply_file(svn_boolean_t*, svn_client__shelf_version_t*, const char*, apr_pool_t*)'    {svn_client__shelf_test_apply_file}

  'function svn_error_t* svn_client__shelf_unapply(svn_client__shelf_version_t*, svn_boolean_t, apr_pool_t*)'    {svn_client__shelf_unapply}

  'function svn_error_t* svn_client__shelf_version_open(svn_client__shelf_version_t**, svn_client__shelf_t*, int, apr_pool_t*, apr_pool_t*)'    {svn_client__shelf_version_open}

  'function svn_error_t* svn_client__shelf_version_status_walk(svn_client__shelf_version_t*, const char*, svn_wc_status_func4_t, void*, apr_pool_t*)'    {svn_client__shelf_version_status_walk}

  'function svn_error_t* svn_client__wc_copy_mods(const char*, const char*, svn_wc_notify_func2_t, void*, svn_client_ctx_t*, apr_pool_t*)'    {svn_client__wc_copy_mods}

  'function svn_error_t* svn_client__wc_editor(const svn_delta_editor_t**, void**, const char*, svn_wc_notify_func2_t, void*, svn_ra_session_t*, svn_client_ctx_t*, apr_pool_t*)'    {svn_client__wc_editor}

  'function svn_error_t* svn_client__wc_editor_internal(const svn_delta_editor_t**, void**, const char*, svn_boolean_t, svn_boolean_t, svn_boolean_t, svn_wc_notify_func2_t, void*, svn_ra_session_t*, svn_client_ctx_t*, apr_pool_t*)'    {svn_client__wc_editor_internal}

  'function svn_error_t* svn_client__wc_replay(const char*, const apr_array_header_t*, svn_depth_t, const apr_array_header_t*, const svn_delta_editor_t*, void*, svn_wc_notify_func2_t, void*, svn_client_ctx_t*, apr_pool_t*)'    {svn_client__wc_replay}

  'function svn_error_t* svn_client_blame6(svn_revnum_t*, svn_revnum_t*, const char*, const svn_opt_revision_t*, const svn_opt_revision_t*, const svn_opt_revision_t*, const svn_diff_file_options_t*, svn_boolean_t, svn_boolean_t, svn_client_blame_receiver4_t, void*, svn_client_ctx_t*, apr_pool_t*)'    {svn_client_blame6}

  'function svn_error_t* svn_client_conflict_option_get_moved_to_abspath_candidates2(apr_array_header_t**, svn_client_conflict_option_t*, apr_pool_t*, apr_pool_t*)'    {svn_client_conflict_option_get_moved_to_abspath_candidates2}

  'function svn_error_t* svn_client_conflict_option_get_moved_to_repos_relpath_candidates2(apr_array_header_t**, svn_client_conflict_option_t*, apr_pool_t*, apr_pool_t*)'    {svn_client_conflict_option_get_moved_to_repos_relpath_candidates2}

  'function svn_error_t* svn_client_conflict_option_set_moved_to_abspath2(svn_client_conflict_option_t*, int, svn_client_ctx_t*, apr_pool_t*)'    {svn_client_conflict_option_set_moved_to_abspath2}

  'function svn_error_t* svn_client_conflict_option_set_moved_to_repos_relpath2(svn_client_conflict_option_t*, int, svn_client_ctx_t*, apr_pool_t*)'    {svn_client_conflict_option_set_moved_to_repos_relpath2}

  'function svn_error_t* svn_client_diff7(const apr_array_header_t*, const char*, const svn_opt_revision_t*, const char*, const svn_opt_revision_t*, const char*, svn_depth_t, svn_boolean_t, svn_boolean_t, svn_boolean_t, svn_boolean_t, svn_boolean_t, svn_boolean_t, svn_boolean_t, svn_boolean_t, svn_boolean_t, const char*, svn_stream_t*, svn_stream_t*, const apr_array_header_t*, svn_client_ctx_t*, apr_pool_t*)'    {svn_client_diff7}

  'function svn_error_t* svn_client_diff_peg7(const apr_array_header_t*, const char*, const svn_opt_revision_t*, const svn_opt_revision_t*, const svn_opt_revision_t*, const char*, svn_depth_t, svn_boolean_t, svn_boolean_t, svn_boolean_t, svn_boolean_t, svn_boolean_t, svn_boolean_t, svn_boolean_t, svn_boolean_t, svn_boolean_t, const char*, svn_stream_t*, svn_stream_t*, const apr_array_header_t*, svn_client_ctx_t*, apr_pool_t*)'    {svn_client_diff_peg7}

  'function svn_error_t* svn_client_revert4(const apr_array_header_t*, svn_depth_t, const apr_array_header_t*, svn_boolean_t, svn_boolean_t, svn_boolean_t, svn_client_ctx_t*, apr_pool_t*)'    {svn_client_revert4}



1 function with some indirect sub-type change:



  [C]'function svn_error_t* svn_client__arbitrary_nodes_diff(const char**, svn_boolean_t*, const char*, const char*, svn_depth_t, const svn_diff_tree_processor_t*, svn_client_ctx_t*, apr_pool_t*, apr_pool_t*)' at diff_local.c:650:1 has some indirect sub-type changes:

    parameter 1 of type 'const char**' changed:

      in pointed to type 'const char*':

        entity changed from 'const char*' to 'const char'

        type size changed from 64 to 8 (in bits)

    parameter 2 of type 'svn_boolean_t*' changed:

      in pointed to type 'typedef svn_boolean_t':

        entity changed from 'typedef svn_boolean_t' to 'const char'

        type size changed from 32 to 8 (in bits)

    parameter 3 of type 'const char*' changed:

      entity changed from 'const char*' to 'typedef svn_depth_t' at svn_types_impl.h:151:1

      type size changed from 64 to 32 (in bits)

      type alignement changed from 0 to 32

    parameter 4 of type 'const char*' changed:

      in pointed to type 'const char':

        'const char' changed to 'const svn_diff_tree_processor_t'

    parameter 5 of type 'typedef svn_depth_t' changed:

      entity changed from 'typedef svn_depth_t' to 'svn_client_ctx_t*'

      type size changed from 32 to 64 (in bits)

      type alignement changed from 32 to 0

    parameter 6 of type 'const svn_diff_tree_processor_t*' changed:

      in pointed to type 'const svn_diff_tree_processor_t' at apr_pools.h:60:1:

        entity changed from 'const svn_diff_tree_processor_t' to 'typedef apr_pool_t' at apr_pools.h:60:1

        type size changed from 768 to 0 (in bits)

    parameter 7 of type 'svn_client_ctx_t*' was removed

    parameter 8 of type 'apr_pool_t*' was removed

    parameter 9 of type 'apr_pool_t*' was removed







---------------diffs in subversion_libsvn_diff-1.so.0.0.0_abidiff.out:----------------

Functions changes summary: 0 Removed, 1 Changed (18 filtered out), 0 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



1 function with some indirect sub-type change:



  [C]'function svn_error_t* svn_diff_hunk__create_adds_single_line(svn_diff_hunk_t**, const char*, const svn_patch_t*, apr_pool_t*, apr_pool_t*)' at parse-diff.c:212:1 has some indirect sub-type changes:

    parameter 1 of type 'svn_diff_hunk_t**' has sub-type changes:

      in pointed to type 'svn_diff_hunk_t*':

        in pointed to type 'typedef svn_diff_hunk_t' at svn_diff.h:1077:1:

          underlying type 'struct svn_diff_hunk_t' at parse-diff.c:65:1 changed:

            type size changed from 1280 to 1344 (in bits)

            1 data member insertion:

              'svn_boolean_t svn_diff_hunk_t::is_pretty_print_mergeinfo', at offset 128 (in bits) at parse-diff.c:75:1

            13 data member changes (1 filtered):

             'svn_diff__hunk_range svn_diff_hunk_t::diff_text_range' offset changed from 128 to 192 (in bits) (by +64 bits)

             'svn_diff__hunk_range svn_diff_hunk_t::original_text_range' offset changed from 320 to 384 (in bits) (by +64 bits)

             'svn_diff__hunk_range svn_diff_hunk_t::modified_text_range' offset changed from 512 to 576 (in bits) (by +64 bits)

             'svn_linenum_t svn_diff_hunk_t::original_start' offset changed from 704 to 768 (in bits) (by +64 bits)

             'svn_linenum_t svn_diff_hunk_t::original_length' offset changed from 768 to 832 (in bits) (by +64 bits)

             'svn_linenum_t svn_diff_hunk_t::modified_start' offset changed from 832 to 896 (in bits) (by +64 bits)

             'svn_linenum_t svn_diff_hunk_t::modified_length' offset changed from 896 to 960 (in bits) (by +64 bits)

             'svn_linenum_t svn_diff_hunk_t::leading_context' offset changed from 960 to 1024 (in bits) (by +64 bits)

             'svn_linenum_t svn_diff_hunk_t::trailing_context' offset changed from 1024 to 1088 (in bits) (by +64 bits)

             'svn_boolean_t svn_diff_hunk_t::original_no_final_eol' offset changed from 1088 to 1152 (in bits) (by +64 bits)

             'svn_boolean_t svn_diff_hunk_t::modified_no_final_eol' offset changed from 1120 to 1184 (in bits) (by +64 bits)

             'svn_linenum_t svn_diff_hunk_t::original_fuzz' offset changed from 1152 to 1216 (in bits) (by +64 bits)

             'svn_linenum_t svn_diff_hunk_t::modified_fuzz' offset changed from 1216 to 1280 (in bits) (by +64 bits)





---------------diffs in subversion_libsvn_fs_x-1.so.0.0.0_abidiff.out:----------------

Functions changes summary: 0 Removed, 0 Changed (250 filtered out), 0 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



---------------diffs in subversion_libsvn_fs_util-1.so.0.0.0_abidiff.out:----------------

Functions changes summary: 0 Removed, 0 Changed (1 filtered out), 0 Added function

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



---------------diffs in subversion_mod_dav_svn.so_abidiff.out:----------------

Functions changes summary: 0 Removed, 0 Changed (76 filtered out), 0 Added functions

Variables changes summary: 0 Removed, 0 Changed (6 filtered out), 0 Added variables



---------------diffs in subversion_libsvn_swig_py-1.so.0.0.0_abidiff.out:----------------

---------------diffs in subversion_libsvn_auth_gnome_keyring-1.so.0.0.0_abidiff.out:----------------

---------------diffs in subversion_libsvn_ra_local-1.so.0.0.0_abidiff.out:----------------

Functions changes summary: 0 Removed, 0 Changed (1 filtered out), 0 Added function

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



---------------diffs in subversion_libsvn_ra-1.so.0.0.0_abidiff.out:----------------

Functions changes summary: 0 Removed, 0 Changed (72 filtered out), 0 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



---------------diffs in subversion_libsvn_fs-1.so.0.0.0_abidiff.out:----------------

Functions changes summary: 0 Removed, 0 Changed (108 filtered out), 0 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



---------------diffs in subversion_libsvn_ra_serf-1.so.0.0.0_abidiff.out:----------------

Functions changes summary: 0 Removed, 0 Changed (58 filtered out), 0 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



---------------diffs in subversion_libsvn_subr-1.so.0.0.0_abidiff.out:----------------

Functions changes summary: 1 Removed, 0 Changed (122 filtered out), 11 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



1 Removed function:



  'function const char* svn_relpath__internal_style(const char*, apr_pool_t*)'    {svn_relpath__internal_style}



11 Added functions:



  'function svn_error_t* svn_dirent_canonicalize_safe(const char**, const char**, const char*, apr_pool_t*, apr_pool_t*)'    {svn_dirent_canonicalize_safe}

  'function svn_error_t* svn_dirent_internal_style_safe(const char**, const char**, const char*, apr_pool_t*, apr_pool_t*)'    {svn_dirent_internal_style_safe}

  'function const svn_opt_subcommand_desc3_t* svn_opt_get_canonical_subcommand3(const svn_opt_subcommand_desc3_t*, const char*)'    {svn_opt_get_canonical_subcommand3}

  'function const apr_getopt_option_t* svn_opt_get_option_from_code3(int, const apr_getopt_option_t*, const svn_opt_subcommand_desc3_t*, apr_pool_t*)'    {svn_opt_get_option_from_code3}

  'function void svn_opt_print_generic_help3(const char*, const svn_opt_subcommand_desc3_t*, const apr_getopt_option_t*, const char*, apr_pool_t*, FILE*)'    {svn_opt_print_generic_help3}

  'function svn_error_t* svn_opt_print_help5(apr_getopt_t*, const char*, svn_boolean_t, svn_boolean_t, svn_boolean_t, const char*, const char*, const svn_opt_subcommand_desc3_t*, const apr_getopt_option_t*, const int*, const char*, apr_pool_t*)'    {svn_opt_print_help5}

  'function void svn_opt_subcommand_help4(const char*, const svn_opt_subcommand_desc3_t*, const apr_getopt_option_t*, const int*, apr_pool_t*)'    {svn_opt_subcommand_help4}

  'function svn_boolean_t svn_opt_subcommand_takes_option4(const svn_opt_subcommand_desc3_t*, int, const int*)'    {svn_opt_subcommand_takes_option4}

  'function svn_error_t* svn_relpath__make_internal(const char**, const char*, apr_pool_t*, apr_pool_t*)'    {svn_relpath__make_internal}

  'function svn_error_t* svn_relpath_canonicalize_safe(const char**, const char**, const char*, apr_pool_t*, apr_pool_t*)'    {svn_relpath_canonicalize_safe}

  'function svn_error_t* svn_uri_canonicalize_safe(const char**, const char**, const char*, apr_pool_t*, apr_pool_t*)'    {svn_uri_canonicalize_safe}



---------------diffs in subversion_mod_dontdothat.so_abidiff.out:----------------

Functions changes summary: 0 Removed, 0 Changed, 0 Added function

Variables changes summary: 0 Removed, 0 Changed (1 filtered out), 0 Added variable



---------------diffs in subversion_libsvn_delta-1.so.0.0.0_abidiff.out:----------------

Functions changes summary: 0 Removed, 1 Changed (37 filtered out), 4 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



4 Added functions:



  'function svn_error_t* svn_delta_path_driver3(const svn_delta_editor_t*, void*, const apr_array_header_t*, svn_boolean_t, svn_delta_path_driver_cb_func2_t, void*, apr_pool_t*)'    {svn_delta_path_driver3}

  'function svn_error_t* svn_delta_path_driver_finish(svn_delta_path_driver_state_t*, apr_pool_t*)'    {svn_delta_path_driver_finish}

  'function svn_error_t* svn_delta_path_driver_start(svn_delta_path_driver_state_t**, const svn_delta_editor_t*, void*, svn_delta_path_driver_cb_func2_t, void*, apr_pool_t*)'    {svn_delta_path_driver_start}

  'function svn_error_t* svn_delta_path_driver_step(svn_delta_path_driver_state_t*, const char*, apr_pool_t*)'    {svn_delta_path_driver_step}



1 function with some indirect sub-type change:



  [C]'function svn_error_t* svn_element__tree_set(svn_element__tree_t*, int, const svn_element__content_t*)' at element.c:379:1 has some indirect sub-type changes:

    return type changed:

      entity changed from 'svn_error_t*' to 'void'

      type size changed from 64 to 0 (in bits)





---------------diffs in subversion_libsvn_wc-1.so.0.0.0_abidiff.out:----------------

Functions changes summary: 2 Removed, 3 Changed (173 filtered out), 7 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



2 Removed functions:



  'function svn_error_t* svn_wc__find_repos_node_in_wc(apr_array_header_t**, svn_wc__db_t*, const char*, const char*, apr_pool_t*, apr_pool_t*)'    {svn_wc__find_repos_node_in_wc}

  'function svn_error_t* svn_wc__get_shelves_dir(char**, svn_wc_context_t*, const char*, apr_pool_t*, apr_pool_t*)'    {svn_wc__get_shelves_dir}



7 Added functions:



  'function svn_error_t* svn_wc__db_find_copies_of_repos_path(apr_array_header_t**, svn_wc__db_t*, const char*, const char*, svn_node_kind_t, apr_pool_t*, apr_pool_t*)'    {svn_wc__db_find_copies_of_repos_path}

  'function svn_error_t* svn_wc__db_find_repos_node_in_wc(apr_array_header_t**, svn_wc__db_t*, const char*, const char*, apr_pool_t*, apr_pool_t*)'    {svn_wc__db_find_repos_node_in_wc}

  'function svn_error_t* svn_wc__db_find_working_nodes_with_basename(apr_array_header_t**, svn_wc__db_t*, const char*, const char*, svn_node_kind_t, apr_pool_t*, apr_pool_t*)'    {svn_wc__db_find_working_nodes_with_basename}

  'function svn_error_t* svn_wc__find_copies_of_repos_path(apr_array_header_t**, const char*, const char*, svn_node_kind_t, svn_wc_context_t*, apr_pool_t*, apr_pool_t*)'    {svn_wc__find_copies_of_repos_path}

  'function svn_error_t* svn_wc__find_working_nodes_with_basename(apr_array_header_t**, const char*, const char*, svn_node_kind_t, svn_wc_context_t*, apr_pool_t*, apr_pool_t*)'    {svn_wc__find_working_nodes_with_basename}

  'function svn_error_t* svn_wc__get_experimental_dir(char**, svn_wc_context_t*, const char*, apr_pool_t*, apr_pool_t*)'    {svn_wc__get_experimental_dir}

  'function svn_error_t* svn_wc_revert6(svn_wc_context_t*, const char*, svn_depth_t, svn_boolean_t, const apr_array_header_t*, svn_boolean_t, svn_boolean_t, svn_boolean_t, svn_cancel_func_t, void*, svn_wc_notify_func2_t, void*, apr_pool_t*)'    {svn_wc_revert6}



3 functions with some indirect sub-type change:



  [C]'function svn_error_t* svn_wc__conflict_read_tree_conflict(svn_wc_conflict_reason_t*, svn_wc_conflict_action_t*, const char**, svn_wc__db_t*, const char*, const svn_skel_t*, apr_pool_t*, apr_pool_t*)' at conflicts.c:948:1 has some indirect sub-type changes:

    parameter 4 of type 'svn_wc__db_t*' changed:

      in pointed to type 'typedef svn_wc__db_t':

        entity changed from 'typedef svn_wc__db_t' to 'const char*'

        type size changed from 448 to 64 (in bits)

    parameter 5 of type 'const char*' changed:

      in pointed to type 'const char' at wc_db.h:128:1:

        entity changed from 'const char' to 'typedef svn_wc__db_t' at wc_db.h:128:1

        type size changed from 8 to 448 (in bits)

    parameter 6 of type 'const svn_skel_t*' changed:

      in pointed to type 'const svn_skel_t':

        'const svn_skel_t' changed to 'const char'

    parameter 7 of type 'apr_pool_t*' changed:

      in pointed to type 'typedef apr_pool_t':

        entity changed from 'typedef apr_pool_t' to 'const svn_skel_t'

        type size changed from 0 to 320 (in bits)

    parameter 9 of type 'apr_pool_t*' was added





  [C]'function svn_error_t* svn_wc__conflict_skel_add_tree_conflict(svn_skel_t*, svn_wc__db_t*, const char*, svn_wc_conflict_reason_t, svn_wc_conflict_action_t, const char*, apr_pool_t*, apr_pool_t*)' at conflicts.c:536:1 has some indirect sub-type changes:

    parameter 7 of type 'apr_pool_t*' changed:

      in pointed to type 'typedef apr_pool_t':

        entity changed from 'typedef apr_pool_t' to 'const char'

        type size changed from 0 to 8 (in bits)

    parameter 9 of type 'apr_pool_t*' was added





  [C]'function svn_error_t* svn_wc__diff7(const char**, svn_boolean_t*, svn_wc_context_t*, const char*, svn_depth_t, svn_boolean_t, const apr_array_header_t*, const svn_diff_tree_processor_t*, svn_cancel_func_t, void*, apr_pool_t*, apr_pool_t*)' at diff_local.c:436:1 has some indirect sub-type changes:

    parameter 1 of type 'const char**' changed:

      entity changed from 'const char**' to 'typedef svn_boolean_t' at svn_types.h:141:1

      type size changed from 64 to 32 (in bits)

    parameter 2 of type 'svn_boolean_t*' changed:

      in pointed to type 'typedef svn_boolean_t' at svn_wc.h:179:1:

        typedef name changed from svn_boolean_t to svn_wc_context_t at svn_wc.h:179:1

        underlying type 'int' changed:

          entity changed from 'int' to 'struct svn_wc_context_t' at wc.h:220:1

          type size changed from 32 to 192 (in bits)

    parameter 3 of type 'svn_wc_context_t*' changed:

      in pointed to type 'typedef svn_wc_context_t':

        entity changed from 'typedef svn_wc_context_t' to 'const char'

        type size changed from 192 to 8 (in bits)

    parameter 4 of type 'const char*' changed:

      entity changed from 'const char*' to 'typedef svn_depth_t' at svn_types_impl.h:151:1

      type size changed from 64 to 32 (in bits)

      type alignement changed from 0 to 32

    parameter 5 of type 'typedef svn_depth_t' changed:

      typedef name changed from svn_depth_t to svn_boolean_t at svn_types.h:141:1

      underlying type 'enum svn_depth_t' at svn_types.h:504:1 changed:

        entity changed from 'enum svn_depth_t' to 'int'

        type size hasn't changed

        type alignement changed from 32 to 0

    parameter 6 of type 'typedef svn_boolean_t' changed:

      entity changed from 'typedef svn_boolean_t' to 'const apr_array_header_t*'

      type size changed from 32 to 64 (in bits)

    parameter 7 of type 'const apr_array_header_t*' changed:

      in pointed to type 'const apr_array_header_t':

        'const apr_array_header_t' changed to 'const svn_diff_tree_processor_t'

    parameter 8 of type 'const svn_diff_tree_processor_t*' changed:

      entity changed from 'const svn_diff_tree_processor_t*' to compatible type 'typedef svn_cancel_func_t' at svn_types.h:1085:1

        in pointed to type 'const svn_diff_tree_processor_t':

          entity changed from 'const svn_diff_tree_processor_t' to 'function type svn_error_t* (void*)'

          type size changed from 768 to 64 (in bits)

    parameter 9 of type 'typedef svn_cancel_func_t' changed:

      entity changed from 'typedef svn_cancel_func_t' to compatible type 'void*'

        in pointed to type 'function type svn_error_t* (void*)':

          entity changed from 'function type svn_error_t* (void*)' to 'void'

          type size changed from 64 to 0 (in bits)

    parameter 12 of type 'apr_pool_t*' was removed







---------------diffs in subversion_libsvn_fs_fs-1.so.0.0.0_abidiff.out:----------------

Functions changes summary: 0 Removed, 0 Changed (234 filtered out), 0 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



