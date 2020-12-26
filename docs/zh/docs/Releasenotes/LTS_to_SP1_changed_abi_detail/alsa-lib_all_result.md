# Functions changed info

---------------diffs in alsa-lib_libasound.so.2.0.0_abidiff.out:----------------

Functions changes summary: 8 Removed, 8 Changed (652 filtered out), 10 Added functions

Variables changes summary: 0 Removed, 0 Changed (1 filtered out), 0 Added variable



8 Removed functions:



  'function int snd_tplg_add_object(snd_tplg_t*, snd_tplg_obj_template_t*)'    {snd_tplg_add_object@@ALSA_0.9}

  'function int snd_tplg_build(snd_tplg_t*, const char*)'    {snd_tplg_build@@ALSA_0.9}

  'function int snd_tplg_build_file(snd_tplg_t*, const char*, const char*)'    {snd_tplg_build_file@@ALSA_0.9}

  'function void snd_tplg_free(snd_tplg_t*)'    {snd_tplg_free@@ALSA_0.9}

  'function snd_tplg_t* snd_tplg_new()'    {snd_tplg_new@@ALSA_0.9}

  'function int snd_tplg_set_manifest_data(snd_tplg_t*, void*, int)'    {snd_tplg_set_manifest_data@@ALSA_0.9}

  'function int snd_tplg_set_version(snd_tplg_t*, unsigned int)'    {snd_tplg_set_version@@ALSA_0.9}

  'function void snd_tplg_verbose(snd_tplg_t*, int)'    {snd_tplg_verbose@@ALSA_0.9}



10 Added functions:



  'function int snd_config_add_after(snd_config_t*, snd_config_t*)'    {snd_config_add_after@@ALSA_0.9}

  'function int snd_config_add_before(snd_config_t*, snd_config_t*)'    {snd_config_add_before@@ALSA_0.9}

  'function int snd_config_is_array(const snd_config_t*)'    {snd_config_is_array@@ALSA_0.9}

  'function int snd_dlpath(char*, size_t, const char*)'    {snd_dlpath@@ALSA_0.9}

  'function int snd_mixer_selem_id_parse(snd_mixer_selem_id_t*, const char*)'    {snd_mixer_selem_id_parse@@ALSA_0.9}

  'function int snd_pcm_extplug_set_param_link(snd_pcm_extplug_t*, int, int)'    {snd_pcm_extplug_set_param_link@@ALSA_0.9}

  'function snd_pcm_uframes_t snd_pcm_ioplug_avail(const snd_pcm_ioplug_t* const, const snd_pcm_uframes_t, const snd_pcm_uframes_t)'    {snd_pcm_ioplug_avail@@ALSA_0.9}

  'function size_t snd_strlcpy(char*, const char*, size_t)'    {snd_strlcpy@@ALSA_0.9}

  'function int snd_use_case_parse_ctl_elem_id(snd_ctl_elem_id_t*, const char*, const char*)'    {snd_use_case_parse_ctl_elem_id@@ALSA_0.9}

  'function int snd_use_case_parse_selem_id(snd_mixer_selem_id_t*, const char*, const char*)'    {snd_use_case_parse_selem_id@@ALSA_0.9}



8 functions with some indirect sub-type change:



  [C]'function snd_pcm_access_t __old_snd_pcm_hw_params_set_access_first(snd_pcm_t*, snd_pcm_hw_params_t*)' at pcm.c:7936:1 has some indirect sub-type changes:

    Please note that the exported symbol of this function is snd_pcm_hw_params_set_access_first@ALSA_0.9

    parameter 1 of type 'snd_pcm_t*' has sub-type changes:

      in pointed to type 'typedef snd_pcm_t' at pcm.h:394:1:

        underlying type 'struct _snd_pcm' at pcm_local.h:189:1 changed:

          type size hasn't changed

          1 data member changes (2 filtered):

           type of 'const snd_pcm_fast_ops_t* _snd_pcm::fast_ops' changed:

             in pointed to type 'const snd_pcm_fast_ops_t':

               in unqualified underlying type 'typedef snd_pcm_fast_ops_t' at pcm_local.h:188:1:

                 underlying type 'struct {int (snd_pcm_t*, snd_pcm_status_t*)* status; int (snd_pcm_t*)* prepare; int (snd_pcm_t*)* reset; int (snd_pcm_t*)* start; int (snd_pcm_t*)* drop; int (snd_pcm_t*)* drain; int (snd_pcm_t*, int)* pause; typedef snd_pcm_state_t (snd_pcm_t*)* state; int (snd_pcm_t*)* hwsync; int (snd_pcm_t*, snd_pcm_sframes_t*)* delay; int (snd_pcm_t*)* resume; int (snd_pcm_t*, snd_pcm_t*)* link; int (snd_pcm_t*, snd_pcm_t*)* link_slaves; int (snd_pcm_t*)* unlink; typedef snd_pcm_sframes_t (snd_pcm_t*)* rewindable; typedef snd_pcm_sframes_t (snd_pcm_t*, typedef snd_pcm_uframes_t)* rewind; typedef snd_pcm_sframes_t (snd_pcm_t*)* forwardable; typedef snd_pcm_sframes_t (snd_pcm_t*, typedef snd_pcm_uframes_t)* forward; typedef snd_pcm_sframes_t (snd_pcm_t*, void*, typedef snd_pcm_uframes_t)* writei; typedef snd_pcm_sframes_t (snd_pcm_t*, void**, typedef snd_pcm_uframes_t)* writen; typedef snd_pcm_sframes_t (snd_pcm_t*, void*, typedef snd_pcm_uframes_t)* readi; typedef snd_pcm_sframes_t (snd_pcm_t*, void**, typedef snd_pcm_uframes_t)* readn; typedef snd_pcm_sframes_t (snd_pcm_t*)* avail_update; typedef snd_pcm_sframes_t (snd_pcm_t*, typedef snd_pcm_uframes_t, typedef snd_pcm_uframes_t)* mmap_commit; int (snd_pcm_t*, snd_pcm_uframes_t*, snd_htimestamp_t*)* htimestamp; int (snd_pcm_t*)* poll_descriptors_count; int (snd_pcm_t*, pollfd*, unsigned int)* poll_descriptors; int (snd_pcm_t*, pollfd*, unsigned int, unsigned short int*)* poll_revents; int (snd_pcm_t*, typedef snd_pcm_uframes_t)* may_wait_for_avail_min;}' at pcm_local.h:157:1 changed:

                   type size changed from 1856 to 1920 (in bits)

                   1 data member insertion:

                     'int (snd_pcm_t*, const snd_pcm_channel_area_t**, snd_pcm_uframes_t*, snd_pcm_uframes_t*)* mmap_begin', at offset 1856 (in bits) at pcm_local.h:187:1

                   1 data member changes (18 filtered):

                    type of 'int (snd_pcm_t*, snd_pcm_status_t*)* status' changed:

                      in pointed to type 'function type int (snd_pcm_t*, snd_pcm_status_t*)':

                        parameter 2 of type 'snd_pcm_status_t*' has sub-type changes:

                          in pointed to type 'typedef snd_pcm_status_t' at pcm.h:69:1:

                            underlying type 'struct snd_pcm_status' at asound.h:456:1 changed:

                              type size hasn't changed

                              1 data member insertion:

                                '__time_pad snd_pcm_status::pad1', at offset 32 (in bits) at asound.h:475:1







  [C]'function int __snd_ctl_elem_info_get_dimension(const snd_ctl_elem_info_t*, unsigned int)' at control.c:2546:1 has some indirect sub-type changes:

    Please note that the exported symbol of this function is snd_ctl_elem_info_get_dimension@@ALSA_0.9.3

    parameter 1 of type 'const snd_ctl_elem_info_t*' has sub-type changes:

      in pointed to type 'const snd_ctl_elem_info_t':

        in unqualified underlying type 'typedef snd_ctl_elem_info_t' at control.h:63:1:

          underlying type 'struct snd_ctl_elem_info' at asound.h:900:1 changed:

            type size hasn't changed

            1 data member deletion:

              'union {unsigned short int d[4]; unsigned short int* d_ptr;} snd_ctl_elem_info::dimen', at offset 1664 (in bits) at asound.h:929:1



            1 data member change:

             type of 'unsigned char snd_ctl_elem_info::reserved[56]' changed:

               type name changed from 'unsigned char[56]' to 'unsigned char[64]'

               array type size changed from 448 to 512

               array type subrange 1 changed length from 56 to 64

             and offset changed from 1728 to 1664 (in bits) (by -64 bits)



  [C]'function int _snd_ctl_hw_open(snd_ctl_t**, char*, snd_config_t*, snd_config_t*, int)' at control_hw.c:440:1 has some indirect sub-type changes:

    parameter 1 of type 'snd_ctl_t**' has sub-type changes:

      in pointed to type 'snd_ctl_t*':

        in pointed to type 'typedef snd_ctl_t' at control.h:214:1:

          underlying type 'struct _snd_ctl' at control_local.h:58:1 changed:

            type size hasn't changed

            1 data member change:

             type of 'const snd_ctl_ops_t* _snd_ctl::ops' changed:

               in pointed to type 'const snd_ctl_ops_t':

                 in unqualified underlying type 'typedef snd_ctl_ops_t' at control_local.h:56:1:

                   underlying type 'struct _snd_ctl_ops' at control_local.h:24:1 changed:

                     type size hasn't changed

                     1 data member changes (19 filtered):

                      type of 'int (snd_ctl_t*, snd_ctl_elem_value_t*)* _snd_ctl_ops::element_read' changed:

                        in pointed to type 'function type int (snd_ctl_t*, snd_ctl_elem_value_t*)':

                          parameter 2 of type 'snd_ctl_elem_value_t*' has sub-type changes:

                            in pointed to type 'typedef snd_ctl_elem_value_t' at control.h:66:1:

                              underlying type 'struct snd_ctl_elem_value' at asound.h:933:1 changed:

                                type size hasn't changed

                                1 data member deletion:

                                  'timespec snd_ctl_elem_value::tstamp', at offset 8768 (in bits) at asound.h:955:1



                                1 data member change:

                                 type of 'unsigned char snd_ctl_elem_value::reserved[112]' changed:

                                   type name changed from 'unsigned char[112]' to 'unsigned char[128]'

                                   array type size changed from 896 to 1024

                                   array type subrange 1 changed length from 112 to 128

                                 and offset changed from 8896 to 8768 (in bits) (by -128 bits)





    parameter 4 of type 'snd_config_t*' has sub-type changes:

      in pointed to type 'typedef snd_config_t' at conf.h:69:1:

        underlying type 'struct _snd_config' at conf.c:434:1 changed:

          type size hasn't changed

          1 data member changes (1 filtered):

           type of 'union {long int integer; long long int integer64; char* string; double real; void* ptr; struct {list_head fields; int join;} compound;} _snd_config::u' changed:

             type size hasn't changed

             1 data member change:

              type of 'struct {list_head fields; int join;} compound' changed:

                type size hasn't changed

                1 data member change:

                 type of 'int join' changed:

                   type name changed from 'int' to 'bool'

                   type size changed from 32 to 8 (in bits)









  [C]'function int _snd_rawmidi_hw_open(snd_rawmidi_t**, snd_rawmidi_t**, char*, snd_config_t*, snd_config_t*, int)' at rawmidi_hw.c:318:1 has some indirect sub-type changes:

    parameter 1 of type 'snd_rawmidi_t**' has sub-type changes:

      in pointed to type 'snd_rawmidi_t*':

        in pointed to type 'typedef snd_rawmidi_t' at rawmidi.h:68:1:

          underlying type 'struct _snd_rawmidi' at rawmidi_local.h:39:1 changed:

            type size hasn't changed

            1 data member change:

             type of 'const snd_rawmidi_ops_t* _snd_rawmidi::ops' changed:

               in pointed to type 'const snd_rawmidi_ops_t':

                 in unqualified underlying type 'typedef snd_rawmidi_ops_t' at rawmidi_local.h:37:1:

                   underlying type 'struct {int (snd_rawmidi_t*)* close; int (snd_rawmidi_t*, int)* nonblock; int (snd_rawmidi_t*, snd_rawmidi_info_t*)* info; int (snd_rawmidi_t*, snd_rawmidi_params_t*)* params; int (snd_rawmidi_t*, snd_rawmidi_status_t*)* status; int (snd_rawmidi_t*)* drop; int (snd_rawmidi_t*)* drain; typedef ssize_t (snd_rawmidi_t*, void*, typedef size_t)* write; typedef ssize_t (snd_rawmidi_t*, void*, typedef size_t)* read;}' at rawmidi_local.h:27:1 changed:

                     type size hasn't changed

                     1 data member changes (8 filtered):

                      type of 'int (snd_rawmidi_t*, snd_rawmidi_status_t*)* status' changed:

                        in pointed to type 'function type int (snd_rawmidi_t*, snd_rawmidi_status_t*)':

                          parameter 2 of type 'snd_rawmidi_status_t*' has sub-type changes:

                            in pointed to type 'typedef snd_rawmidi_status_t' at rawmidi.h:49:1:

                              underlying type 'struct snd_rawmidi_status' at asound.h:648:1 changed:

                                type size hasn't changed

                                1 data member insertion:

                                  '__time_pad snd_rawmidi_status::pad1', at offset 32 (in bits) at asound.h:741:1





            no data member change (1 filtered);



  [C]'function long int snd_midi_event_decode(snd_midi_event_t*, unsigned char*, long int, const snd_seq_event_t*)' at seq_midi_event.c:557:1 has some indirect sub-type changes:

    parameter 1 of type 'snd_midi_event_t*' has sub-type changes:

      in pointed to type 'typedef snd_midi_event_t' at seq_midi_event.h:43:1:

        underlying type 'struct snd_midi_event' at seq_midi_event.c:37:1 changed:

          type size hasn't changed

          1 data member change:

           type of 'size_t snd_midi_event::qlen' changed:

             typedef name changed from size_t to ssize_t at stdio.h:77:1

             underlying type 'unsigned long int' changed:

               entity changed from 'unsigned long int' to compatible type 'typedef __ssize_t' at types.h:191:1

                 type name changed from 'unsigned long int' to 'long int'

                 type size hasn't changed







  [C]'function int snd_pcm_direct_client_chk_xrun(snd_pcm_direct_t*, snd_pcm_t*)' at pcm_direct.c:632:1 has some indirect sub-type changes:

    parameter 1 of type 'snd_pcm_direct_t*' has sub-type changes:

      in pointed to type 'typedef snd_pcm_direct_t' at pcm_direct.h:130:1:

        underlying type 'struct snd_pcm_direct' at pcm_direct.h:120:1 changed:

          type size changed from 2816 to 2880 (in bits)

          2 data member insertions:

            'snd_pcm_direct_hw_ptr_alignment_t snd_pcm_direct::hw_ptr_alignment', at offset 2112 (in bits) at pcm_direct.h:175:1

            'int snd_pcm_direct::tstamp_type', at offset 2144 (in bits) at pcm_direct.h:176:1

          2 data member changes (1 filtered):

           type of 'union {struct {int shmid_sum; int* sum_buffer; mix_areas_16_t* mix_areas_16; mix_areas_32_t* mix_areas_32; mix_areas_24_t* mix_areas_24; mix_areas_u8_t* mix_areas_u8; mix_areas_16_t* remix_areas_16; mix_areas_32_t* remix_areas_32; mix_areas_24_t* remix_areas_24; mix_areas_u8_t* remix_areas_u8;} dmix; struct {} dsnoop; struct {long long unsigned int chn_mask;} dshare;} snd_pcm_direct::u' changed:

             type size hasn't changed

             1 data member deletion:

               'struct {} dsnoop' at pcm_direct.h:177:1



           and offset changed from 2112 to 2176 (in bits) (by +64 bits)

           'void (snd_pcm_direct_t*)* snd_pcm_direct::server_free' offset changed from 2752 to 2816 (in bits) (by +64 bits)



  [C]'function int snd_pcm_dmix_open(snd_pcm_t**, const char*, snd_pcm_direct_open_conf*, slave_params*, snd_config_t*, snd_config_t*, snd_pcm_stream_t, int)' at pcm_dmix.c:1010:1 has some indirect sub-type changes:

    parameter 3 of type 'snd_pcm_direct_open_conf*' has sub-type changes:

      in pointed to type 'struct snd_pcm_direct_open_conf' at pcm_direct.h:352:1:

        type size changed from 384 to 448 (in bits)

        2 data member insertions:

          'snd_pcm_direct_hw_ptr_alignment_t snd_pcm_direct_open_conf::hw_ptr_alignment', at offset 224 (in bits) at pcm_direct.h:360:1

          'int snd_pcm_direct_open_conf::tstamp_type', at offset 256 (in bits) at pcm_direct.h:361:1

        2 data member changes:

         'snd_config_t* snd_pcm_direct_open_conf::slave' offset changed from 256 to 320 (in bits) (by +64 bits)

         'snd_config_t* snd_pcm_direct_open_conf::bindings' offset changed from 320 to 384 (in bits) (by +64 bits)



  [C]'function int snd_use_case_get(snd_use_case_mgr_t*, const char*, const char**)' at main.c:1696:1 has some indirect sub-type changes:

    parameter 1 of type 'snd_use_case_mgr_t*' has sub-type changes:

      in pointed to type 'typedef snd_use_case_mgr_t' at use-case.h:194:1:

        underlying type 'struct snd_use_case_mgr' at ucm_local.h:191:1 changed:

          type size changed from 2752 to 1984 (in bits)

          3 data member deletions:

            'char snd_use_case_mgr::card_long_name[80]', at offset 64 (in bits) at ucm_local.h:193:1



            'snd_ctl_t* snd_use_case_mgr::ctl', at offset 2496 (in bits) at ucm_local.h:215:1



            'char* snd_use_case_mgr::ctl_dev', at offset 2560 (in bits) at ucm_local.h:216:1



          6 data member insertions:

            'char* snd_use_case_mgr::conf_dir_name', at offset 128 (in bits) at ucm_local.h:218:1

            'int snd_use_case_mgr::conf_format', at offset 256 (in bits) at ucm_local.h:220:1

            'list_head snd_use_case_mgr::once_list', at offset 448 (in bits) at ucm_local.h:226:1

            'int snd_use_case_mgr::default_list_executed', at offset 704 (in bits) at ucm_local.h:230:1

            'list_head snd_use_case_mgr::variable_list', at offset 1600 (in bits) at ucm_local.h:244:1

            'list_head snd_use_case_mgr::ctl_list', at offset 1728 (in bits) at ucm_local.h:247:1

          11 data member changes:

           type of 'char snd_use_case_mgr::conf_file_name[80]' changed:

             entity changed from 'char[80]' to 'char*'

             type size changed from 640 to 64 (in bits)

           and offset changed from 704 to 64 (in bits) (by -640 bits)

           'char* snd_use_case_mgr::comment' offset changed from 1344 to 192 (in bits) (by -1152 bits)

           'list_head snd_use_case_mgr::verb_list' offset changed from 1408 to 320 (in bits) (by -1088 bits)

           'list_head snd_use_case_mgr::default_list' offset changed from 1536 to 576 (in bits) (by -960 bits)

           'list_head snd_use_case_mgr::value_list' offset changed from 1664 to 768 (in bits) (by -896 bits)

           type of 'use_case_verb* snd_use_case_mgr::active_verb' changed:

             in pointed to type 'struct use_case_verb' at ucm_local.h:181:1:

               type size changed from 1216 to 1472 (in bits)

               2 data member insertions:

                 'list_head use_case_verb::rename_list', at offset 1216 (in bits) at ucm_local.h:208:1

                 'list_head use_case_verb::remove_list', at offset 1344 (in bits) at ucm_local.h:209:1

           and offset changed from 1792 to 896 (in bits) (by -896 bits)

           'list_head snd_use_case_mgr::active_devices' offset changed from 1856 to 960 (in bits) (by -896 bits)

           'list_head snd_use_case_mgr::active_modifiers' offset changed from 1984 to 1088 (in bits) (by -896 bits)

           'pthread_mutex_t snd_use_case_mgr::mutex' offset changed from 2112 to 1216 (in bits) (by -896 bits)

           'int snd_use_case_mgr::in_component_domain' offset changed from 2624 to 1856 (in bits) (by -768 bits)

           'char* snd_use_case_mgr::cdev' offset changed from 2688 to 1920 (in bits) (by -768 bits)





