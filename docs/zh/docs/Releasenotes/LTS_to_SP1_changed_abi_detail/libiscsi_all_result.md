# Functions changed info

---------------diffs in libiscsi_libiscsi.so.9.0.0_abidiff.out:----------------

ELF SONAME changed

Functions changes summary: 0 Removed, 1 Changed (196 filtered out), 4 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



SONAME changed from 'libiscsi.so.8' to 'libiscsi.so.9'



4 Added functions:



  'function scsi_task* iscsi_extended_copy_sync(iscsi_context*, int, iscsi_data*)'    {iscsi_extended_copy_sync}

  'function scsi_task* iscsi_extended_copy_task(iscsi_context*, int, iscsi_data*, iscsi_command_cb, void*)'    {iscsi_extended_copy_task}

  'function scsi_task* iscsi_receive_copy_results_sync(iscsi_context*, int, int, int, int)'    {iscsi_receive_copy_results_sync}

  'function scsi_task* iscsi_receive_copy_results_task(iscsi_context*, int, int, int, int, iscsi_command_cb, void*)'    {iscsi_receive_copy_results_task}



1 function with some indirect sub-type change:



  [C]'function scsi_task* iscsi_compareandwrite_iov_sync(iscsi_context*, int, uint64_t, unsigned char*, uint32_t, int, int, int, int, int, int, scsi_iovec*, int)' at sync.c:1164:1 has some indirect sub-type changes:

    parameter 1 of type 'iscsi_context*' has sub-type changes:

      in pointed to type 'struct iscsi_context' at iscsi-private.h:68:1:

        type size changed from 51968 to 51904 (in bits)

        1 data member deletion:

          'iscsi_in_pdu* iscsi_context::inqueue', at offset 42624 (in bits) at iscsi-private.h:145:1



        1 data member insertion:

          'int iscsi_context::tcp_nonblocking', at offset 41920 (in bits) at iscsi-private.h:112:1

        37 data member changes (5 filtered):

         'int iscsi_context::current_phase' offset changed from 41920 to 41952 (in bits) (by +32 bits)

         'int iscsi_context::next_phase' offset changed from 41952 to 41984 (in bits) (by +32 bits)

         'int iscsi_context::secneg_phase' offset changed from 41984 to 42016 (in bits) (by +32 bits)

         'int iscsi_context::login_attempts' offset changed from 42016 to 42048 (in bits) (by +32 bits)

         'int iscsi_context::is_loggedin' offset changed from 42048 to 42080 (in bits) (by +32 bits)

         'int iscsi_context::bind_interfaces_cnt' offset changed from 42080 to 42112 (in bits) (by +32 bits)

         'int iscsi_context::nops_in_flight' offset changed from 42112 to 42144 (in bits) (by +32 bits)

         'int iscsi_context::chap_a' offset changed from 42144 to 42176 (in bits) (by +32 bits)

         'int iscsi_context::chap_i' offset changed from 42176 to 42208 (in bits) (by +32 bits)

         'uint32_t iscsi_context::max_burst_length' offset changed from 42688 to 42624 (in bits) (by -64 bits)

         'uint32_t iscsi_context::first_burst_length' offset changed from 42720 to 42656 (in bits) (by -64 bits)

         'uint32_t iscsi_context::initiator_max_recv_data_segment_length' offset changed from 42752 to 42688 (in bits) (by -64 bits)

         'uint32_t iscsi_context::target_max_recv_data_segment_length' offset changed from 42784 to 42720 (in bits) (by -64 bits)

         'iscsi_initial_r2t iscsi_context::want_initial_r2t' offset changed from 42816 to 42752 (in bits) (by -64 bits)

         'iscsi_initial_r2t iscsi_context::use_initial_r2t' offset changed from 42848 to 42784 (in bits) (by -64 bits)

         'iscsi_immediate_data iscsi_context::want_immediate_data' offset changed from 42880 to 42816 (in bits) (by -64 bits)

         'iscsi_immediate_data iscsi_context::use_immediate_data' offset changed from 42912 to 42848 (in bits) (by -64 bits)

         'int iscsi_context::lun' offset changed from 42944 to 42880 (in bits) (by -64 bits)

         'int iscsi_context::no_auto_reconnect' offset changed from 42976 to 42912 (in bits) (by -64 bits)

         'int iscsi_context::reconnect_deferred' offset changed from 43008 to 42944 (in bits) (by -64 bits)

         'int iscsi_context::reconnect_max_retries' offset changed from 43040 to 42976 (in bits) (by -64 bits)

         'int iscsi_context::pending_reconnect' offset changed from 43072 to 43008 (in bits) (by -64 bits)

         'int iscsi_context::log_level' offset changed from 43104 to 43040 (in bits) (by -64 bits)

         'iscsi_log_fn iscsi_context::log_fn' offset changed from 43136 to 43072 (in bits) (by -64 bits)

         'int iscsi_context::mallocs' offset changed from 43200 to 43136 (in bits) (by -64 bits)

         'int iscsi_context::reallocs' offset changed from 43232 to 43168 (in bits) (by -64 bits)

         'int iscsi_context::frees' offset changed from 43264 to 43200 (in bits) (by -64 bits)

         'int iscsi_context::smallocs' offset changed from 43296 to 43232 (in bits) (by -64 bits)

         'void* iscsi_context::smalloc_ptrs[128]' offset changed from 43328 to 43264 (in bits) (by -64 bits)

         'int iscsi_context::smalloc_free' offset changed from 51520 to 51456 (in bits) (by -64 bits)

         'size_t iscsi_context::smalloc_size' offset changed from 51584 to 51520 (in bits) (by -64 bits)

         'int iscsi_context::cache_allocations' offset changed from 51648 to 51584 (in bits) (by -64 bits)

         'time_t iscsi_context::next_reconnect' offset changed from 51712 to 51648 (in bits) (by -64 bits)

         'int iscsi_context::scsi_timeout' offset changed from 51776 to 51712 (in bits) (by -64 bits)

         'iscsi_context* iscsi_context::old_iscsi' offset changed from 51840 to 51776 (in bits) (by -64 bits)

         'int iscsi_context::retry_cnt' offset changed from 51904 to 51840 (in bits) (by -64 bits)

         'int iscsi_context::no_ua_on_reconnect' offset changed from 51936 to 51872 (in bits) (by -64 bits)





