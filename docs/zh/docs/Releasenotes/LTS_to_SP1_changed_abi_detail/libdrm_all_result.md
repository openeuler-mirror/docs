# Functions changed info

---------------diffs in libdrm_libdrm.so.2.4.0_abidiff.out:----------------

Functions changes summary: 0 Removed, 0 Changed, 8 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



8 Added functions:



  'function int drmIsMaster(int)'    {drmIsMaster}

  'function void drmModeFreeFB2(drmModeFB2Ptr)'    {drmModeFreeFB2}

  'function drmModeFB2Ptr drmModeGetFB2(int, uint32_t)'    {drmModeGetFB2}

  'function int drmSyncobjQuery(int, uint32_t*, uint64_t*, uint32_t)'    {drmSyncobjQuery}

  'function int drmSyncobjQuery2(int, uint32_t*, uint64_t*, uint32_t, uint32_t)'    {drmSyncobjQuery2}

  'function int drmSyncobjTimelineSignal(int, const uint32_t*, uint64_t*, uint32_t)'    {drmSyncobjTimelineSignal}

  'function int drmSyncobjTimelineWait(int, uint32_t*, uint64_t*, unsigned int, int64_t, unsigned int, uint32_t*)'    {drmSyncobjTimelineWait}

  'function int drmSyncobjTransfer(int, uint32_t, uint64_t, uint32_t, uint64_t, uint32_t)'    {drmSyncobjTransfer}



---------------diffs in libdrm_libdrm_exynos.so.1.0.0_abidiff.out:----------------

---------------diffs in libdrm_libdrm_nouveau.so.2.0.0_abidiff.out:----------------

---------------diffs in libdrm_libdrm_amdgpu.so.1.0.0_abidiff.out:----------------

Functions changes summary: 0 Removed, 35 Changed (27 filtered out), 12 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



12 Added functions:



  'function int amdgpu_bo_list_create_raw(amdgpu_device_handle, uint32_t, drm_amdgpu_bo_list_entry*, uint32_t*)'    {amdgpu_bo_list_create_raw}

  'function int amdgpu_bo_list_destroy_raw(amdgpu_device_handle, uint32_t)'    {amdgpu_bo_list_destroy_raw}

  'function int amdgpu_cs_ctx_override_priority(amdgpu_device_handle, amdgpu_context_handle, int, unsigned int)'    {amdgpu_cs_ctx_override_priority}

  'function int amdgpu_cs_query_reset_state2(amdgpu_context_handle, uint64_t*)'    {amdgpu_cs_query_reset_state2}

  'function int amdgpu_cs_submit_raw2(amdgpu_device_handle, amdgpu_context_handle, uint32_t, int, drm_amdgpu_cs_chunk*, uint64_t*)'    {amdgpu_cs_submit_raw2}

  'function int amdgpu_cs_syncobj_export_sync_file2(amdgpu_device_handle, uint32_t, uint64_t, uint32_t, int*)'    {amdgpu_cs_syncobj_export_sync_file2}

  'function int amdgpu_cs_syncobj_import_sync_file2(amdgpu_device_handle, uint32_t, uint64_t, int)'    {amdgpu_cs_syncobj_import_sync_file2}

  'function int amdgpu_cs_syncobj_query(amdgpu_device_handle, uint32_t*, uint64_t*, unsigned int)'    {amdgpu_cs_syncobj_query}

  'function int amdgpu_cs_syncobj_query2(amdgpu_device_handle, uint32_t*, uint64_t*, unsigned int, uint32_t)'    {amdgpu_cs_syncobj_query2}

  'function int amdgpu_cs_syncobj_timeline_signal(amdgpu_device_handle, const uint32_t*, uint64_t*, uint32_t)'    {amdgpu_cs_syncobj_timeline_signal}

  'function int amdgpu_cs_syncobj_timeline_wait(amdgpu_device_handle, uint32_t*, uint64_t*, unsigned int, int64_t, unsigned int, uint32_t*)'    {amdgpu_cs_syncobj_timeline_wait}

  'function int amdgpu_cs_syncobj_transfer(amdgpu_device_handle, uint32_t, uint64_t, uint32_t, uint64_t, uint32_t)'    {amdgpu_cs_syncobj_transfer}



35 functions with some indirect sub-type change:



  [C]'function int amdgpu_bo_alloc(amdgpu_device_handle, amdgpu_bo_alloc_request*, amdgpu_bo_handle*)' at amdgpu_bo.c:78:1 has some indirect sub-type changes:

    parameter 3 of type 'amdgpu_bo_handle*' has sub-type changes:

      in pointed to type 'typedef amdgpu_bo_handle' at amdgpu.h:129:1:

        underlying type 'amdgpu_bo*' changed:

          in pointed to type 'struct amdgpu_bo' at amdgpu_internal.h:94:1:

            type size hasn't changed

            2 data member changes:

             type of 'amdgpu_device* amdgpu_bo::dev' changed:

               in pointed to type 'struct amdgpu_device' at amdgpu_internal.h:67:1:

                 type size changed from 9664 to 9792 (in bits)

                 6 data member changes (1 filtered):

                  type of 'drm_amdgpu_info_device amdgpu_device::dev_info' changed:

                    type size changed from 2816 to 2944 (in bits)

                    2 data member insertions:

                      '__u32 drm_amdgpu_info_device::pa_sc_tile_steering_override', at offset 2816 (in bits) at amdgpu_drm.h:1005:1

                      '__u64 drm_amdgpu_info_device::tcc_disabled_mask', at offset 2880 (in bits) at amdgpu_drm.h:1007:1



                  'amdgpu_gpu_info amdgpu_device::info' offset changed from 3776 to 3904 (in bits) (by +128 bits)

                  'amdgpu_bo_va_mgr amdgpu_device::vamgr' offset changed from 7104 to 7232 (in bits) (by +128 bits)

                  'amdgpu_bo_va_mgr amdgpu_device::vamgr_32' offset changed from 7744 to 7872 (in bits) (by +128 bits)

                  'amdgpu_bo_va_mgr amdgpu_device::vamgr_high' offset changed from 8384 to 8512 (in bits) (by +128 bits)

                  'amdgpu_bo_va_mgr amdgpu_device::vamgr_high_32' offset changed from 9024 to 9152 (in bits) (by +128 bits)



             type of 'int amdgpu_bo::cpu_map_count' changed:

               entity changed from 'int' to compatible type 'typedef int64_t' at stdint-intn.h:27:1

                 type name changed from 'int' to 'long int'

                 type size changed from 32 to 64 (in bits)





  [C]'function int amdgpu_bo_import(amdgpu_device_handle, amdgpu_bo_handle_type, uint32_t, amdgpu_bo_import_result*)' at amdgpu_bo.c:256:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_bo_list_create(amdgpu_device_handle, uint32_t, amdgpu_bo_handle*, uint8_t*, amdgpu_bo_list_handle*)' at amdgpu_bo.c:642:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier

    parameter 5 of type 'amdgpu_bo_list_handle*' has sub-type changes:

      in pointed to type 'typedef amdgpu_bo_list_handle' at amdgpu.h:134:1:

        underlying type 'amdgpu_bo_list*' changed:

          in pointed to type 'struct amdgpu_bo_list' at amdgpu_internal.h:108:1:

            type size hasn't changed

            1 data member change:

             type of 'amdgpu_device* amdgpu_bo_list::dev' changed:

               pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier





  [C]'function int amdgpu_bo_va_op_raw(amdgpu_device_handle, amdgpu_bo_handle, uint64_t, uint64_t, uint64_t, uint64_t, uint32_t)' at amdgpu_bo.c:773:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_create_bo_from_user_mem(amdgpu_device_handle, void*, uint64_t, amdgpu_bo_handle*)' at amdgpu_bo.c:580:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function void amdgpu_cs_chunk_fence_to_dep(amdgpu_cs_fence*, drm_amdgpu_cs_chunk_dep*)' at amdgpu_cs.c:919:1 has some indirect sub-type changes:

    parameter 1 of type 'amdgpu_cs_fence*' has sub-type changes:

      in pointed to type 'struct amdgpu_cs_fence' at amdgpu.h:270:1:

        type size hasn't changed

        1 data member change:

         type of 'amdgpu_context_handle amdgpu_cs_fence::context' changed:

           underlying type 'amdgpu_context*' changed:

             in pointed to type 'struct amdgpu_context' at amdgpu_internal.h:114:1:

               type size hasn't changed

               1 data member change:

                type of 'amdgpu_device* amdgpu_context::dev' changed:

                  pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier







  [C]'function int amdgpu_cs_create_syncobj(amdgpu_device_handle, uint32_t*)' at amdgpu_cs.c:648:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_cs_create_syncobj2(amdgpu_device_handle, uint32_t, uint32_t*)' at amdgpu_cs.c:638:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_cs_ctx_create(amdgpu_device_handle, amdgpu_context_handle*)' at amdgpu_cs.c:97:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_cs_ctx_create2(amdgpu_device_handle, uint32_t, amdgpu_context_handle*)' at amdgpu_cs.c:51:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_cs_destroy_syncobj(amdgpu_device_handle, uint32_t)' at amdgpu_cs.c:657:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_cs_export_syncobj(amdgpu_device_handle, uint32_t, int*)' at amdgpu_cs.c:743:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_cs_fence_to_handle(amdgpu_device_handle, amdgpu_cs_fence*, uint32_t, uint32_t*)' at amdgpu_cs.c:929:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_cs_import_syncobj(amdgpu_device_handle, int, uint32_t*)' at amdgpu_cs.c:753:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_cs_submit_raw(amdgpu_device_handle, amdgpu_context_handle, amdgpu_bo_list_handle, int, drm_amdgpu_cs_chunk*, uint64_t*)' at amdgpu_cs.c:855:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_cs_syncobj_import_sync_file(amdgpu_device_handle, uint32_t, int)' at amdgpu_cs.c:773:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_cs_syncobj_reset(amdgpu_device_handle, const uint32_t*, uint32_t)' at amdgpu_cs.c:666:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_cs_syncobj_wait(amdgpu_device_handle, uint32_t*, unsigned int, int64_t, unsigned int, uint32_t*)' at amdgpu_cs.c:698:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_device_deinitialize(amdgpu_device_handle)' at amdgpu_device.c:282:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_device_initialize(int, uint32_t*, uint32_t*, amdgpu_device_handle*)' at amdgpu_device.c:143:1 has some indirect sub-type changes:

    parameter 4 of type 'amdgpu_device_handle*' has sub-type changes:

      pointed to type 'typedef amdgpu_device_handle' changed at amdgpu.h:116:1, as reported earlier



  [C]'function int amdgpu_find_bo_by_cpu_mapping(amdgpu_device_handle, void*, uint64_t, amdgpu_bo_handle*, uint64_t*)' at amdgpu_bo.c:538:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function const char* amdgpu_get_marketing_name(amdgpu_device_handle)' at amdgpu_device.c:288:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_query_buffer_size_alignment(amdgpu_device_handle, amdgpu_buffer_size_alignments*)' at amdgpu_bo.c:507:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_query_crtc_from_id(amdgpu_device_handle, unsigned int, int32_t*)' at amdgpu_gpu_info.c:47:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_query_firmware_version(amdgpu_device_handle, unsigned int, unsigned int, unsigned int, uint32_t*, uint32_t*)' at amdgpu_gpu_info.c:114:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_query_gds_info(amdgpu_device_handle, amdgpu_gds_resource_info*)' at amdgpu_gpu_info.c:295:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_query_gpu_info(amdgpu_device_handle, amdgpu_gpu_info*)' at amdgpu_gpu_info.c:231:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_query_heap_info(amdgpu_device_handle, uint32_t, uint32_t, amdgpu_heap_info*)' at amdgpu_gpu_info.c:243:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_query_hw_ip_count(amdgpu_device_handle, unsigned int, uint32_t*)' at amdgpu_gpu_info.c:81:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_query_hw_ip_info(amdgpu_device_handle, unsigned int, unsigned int, drm_amdgpu_info_hw_ip*)' at amdgpu_gpu_info.c:97:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_query_info(amdgpu_device_handle, unsigned int, unsigned int, void*)' at amdgpu_gpu_info.c:33:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_query_sw_info(amdgpu_device_handle, amdgpu_sw_info, void*)' at amdgpu_device.c:293:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_read_mm_registers(amdgpu_device_handle, unsigned int, unsigned int, uint32_t, uint32_t, uint32_t*)' at amdgpu_gpu_info.c:62:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier



  [C]'function int amdgpu_va_range_alloc(amdgpu_device_handle, amdgpu_gpu_va_range, uint64_t, uint64_t, uint64_t, uint64_t*, amdgpu_va_handle*, uint64_t)' at amdgpu_vamgr.c:189:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier

    parameter 7 of type 'amdgpu_va_handle*' has sub-type changes:

      in pointed to type 'typedef amdgpu_va_handle' at amdgpu.h:139:1:

        underlying type 'amdgpu_va*' changed:

          in pointed to type 'struct amdgpu_va' at amdgpu_internal.h:59:1:

            type size hasn't changed

            1 data member change:

             type of 'amdgpu_device_handle amdgpu_va::dev' changed:

               details were reported earlier





  [C]'function int amdgpu_va_range_query(amdgpu_device_handle, amdgpu_gpu_va_range, uint64_t*, uint64_t*)' at amdgpu_vamgr.c:32:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef amdgpu_device_handle' has sub-type changes:

      underlying type 'amdgpu_device*' changed:

        pointed to type 'struct amdgpu_device' changed at amdgpu_internal.h:67:1, as reported earlier





---------------diffs in libdrm_libdrm_etnaviv.so.1.0.0_abidiff.out:----------------

---------------diffs in libdrm_libkms.so.1.0.0_abidiff.out:----------------

---------------diffs in libdrm_libdrm_tegra.so.0.0.0_abidiff.out:----------------

---------------diffs in libdrm_libdrm_radeon.so.1.0.1_abidiff.out:----------------

---------------diffs in libdrm_libdrm_freedreno.so.1.0.0_abidiff.out:----------------

Functions changes summary: 6 Removed, 1 Changed (42 filtered out), 2 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



6 Removed functions:



  'function void fd_ringbuffer_emit_reloc_ring(fd_ringbuffer*, fd_ringmarker*, fd_ringmarker*)'    {fd_ringbuffer_emit_reloc_ring}

  'function void fd_ringmarker_del(fd_ringmarker*)'    {fd_ringmarker_del}

  'function uint32_t fd_ringmarker_dwords(fd_ringmarker*, fd_ringmarker*)'    {fd_ringmarker_dwords}

  'function int fd_ringmarker_flush(fd_ringmarker*)'    {fd_ringmarker_flush}

  'function void fd_ringmarker_mark(fd_ringmarker*)'    {fd_ringmarker_mark}

  'function fd_ringmarker* fd_ringmarker_new(fd_ringbuffer*)'    {fd_ringmarker_new}



2 Added functions:



  'function fd_ringbuffer* fd_ringbuffer_new_flags(fd_pipe*, uint32_t, fd_ringbuffer_flags)'    {fd_ringbuffer_new_flags}

  'function fd_ringbuffer* fd_ringbuffer_ref(fd_ringbuffer*)'    {fd_ringbuffer_ref}



1 function with some indirect sub-type change:



  [C]'function void fd_bo_cpu_fini(fd_bo*)' at freedreno_bo.c:355:1 has some indirect sub-type changes:

    parameter 1 of type 'fd_bo*' has sub-type changes:

      in pointed to type 'struct fd_bo' at freedreno_priv.h:157:1:

        type size hasn't changed

        1 data member changes (1 filtered):

         type of 'fd_device* fd_bo::dev' changed:

           in pointed to type 'struct fd_device' at freedreno_priv.h:82:1:

             type size hasn't changed

             1 data member change:

              type of 'const fd_device_funcs* fd_device::funcs' changed:

                in pointed to type 'const fd_device_funcs':

                  in unqualified underlying type 'struct fd_device_funcs' at freedreno_priv.h:61:1:

                    type size hasn't changed

                    1 data member changes (2 filtered):

                     type of 'fd_pipe* (fd_device*, enum fd_pipe_id, unsigned int)* fd_device_funcs::pipe_new' changed:

                       in pointed to type 'function type fd_pipe* (fd_device*, enum fd_pipe_id, unsigned int)':

                         return type changed:

                           in pointed to type 'struct fd_pipe' at freedreno_priv.h:126:1:

                             type size hasn't changed

                             1 data member changes (1 filtered):

                              type of 'const fd_pipe_funcs* fd_pipe::funcs' changed:

                                in pointed to type 'const fd_pipe_funcs':

                                  in unqualified underlying type 'struct fd_pipe_funcs' at freedreno_priv.h:118:1:

                                    type size hasn't changed

                                    1 data member changes (3 filtered):

                                     type of 'fd_ringbuffer* (fd_pipe*, typedef uint32_t, enum fd_ringbuffer_flags)* fd_pipe_funcs::ringbuffer_new' changed:

                                       in pointed to type 'function type fd_ringbuffer* (fd_pipe*, typedef uint32_t, enum fd_ringbuffer_flags)':

                                         return type changed:

                                           in pointed to type 'struct fd_ringbuffer' at freedreno_ringbuffer.h:64:1:

                                             type size changed from 704 to 768 (in bits)

                                             1 data member insertion:

                                               'union {atomic_t refcnt; uint64_t __pad;}', at offset 704 (in bits)

                                             2 data member changes (2 filtered):

                                              type of 'const fd_ringbuffer_funcs* fd_ringbuffer::funcs' changed:

                                                in pointed to type 'const fd_ringbuffer_funcs':

                                                  in unqualified underlying type 'struct fd_ringbuffer_funcs' at freedreno_priv.h:134:1:

                                                    type size hasn't changed

                                                    1 data member changes (7 filtered):

                                                     type of 'typedef uint32_t (fd_ringbuffer*, fd_ringbuffer*, typedef uint32_t, typedef uint32_t, typedef uint32_t)* fd_ringbuffer_funcs::emit_reloc_ring' changed:

                                                       in pointed to type 'function type typedef uint32_t (fd_ringbuffer*, fd_ringbuffer*, typedef uint32_t, typedef uint32_t, typedef uint32_t)':

                                                         parameter 4 of type 'typedef uint32_t' was removed

                                                         parameter 5 of type 'typedef uint32_t' was removed







                                              type of 'uint32_t fd_ringbuffer::flags' changed:

                                                entity changed from 'typedef uint32_t' to 'enum fd_ringbuffer_flags' at freedreno_ringbuffer.h:41:1

                                                type size hasn't changed

                                                type alignement changed from 0 to 32

















