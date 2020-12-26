# Functions changed info

---------------diffs in plymouth_details.so_abidiff.out:----------------

---------------diffs in plymouth_libply-splash-core.so.5.0.0_abidiff.out:----------------

Functions changes summary: 4 Removed, 0 Changed (14 filtered out), 4 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



4 Removed functions:



  'function double ply_text_progress_bar_get_percent_done(ply_text_progress_bar_t*)'    {ply_text_progress_bar_get_percent_done}

  'function void ply_text_progress_bar_set_percent_done(ply_text_progress_bar_t*, double)'    {ply_text_progress_bar_set_percent_done}

  'function double ply_text_step_bar_get_percent_done(ply_text_step_bar_t*)'    {ply_text_step_bar_get_percent_done}

  'function void ply_text_step_bar_set_percent_done(ply_text_step_bar_t*, double)'    {ply_text_step_bar_set_percent_done}



4 Added functions:



  'function double ply_text_progress_bar_get_fraction_done(ply_text_progress_bar_t*)'    {ply_text_progress_bar_get_fraction_done}

  'function void ply_text_progress_bar_set_fraction_done(ply_text_progress_bar_t*, double)'    {ply_text_progress_bar_set_fraction_done}

  'function double ply_text_step_bar_get_fraction_done(ply_text_step_bar_t*)'    {ply_text_step_bar_get_fraction_done}

  'function void ply_text_step_bar_set_fraction_done(ply_text_step_bar_t*, double)'    {ply_text_step_bar_set_fraction_done}



---------------diffs in plymouth_label.so_abidiff.out:----------------

---------------diffs in plymouth_frame-buffer.so_abidiff.out:----------------

---------------diffs in plymouth_drm.so_abidiff.out:----------------

Functions changes summary: 0 Removed, 1 Changed, 0 Added function

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



1 function with some indirect sub-type change:



  [C]'function ply_renderer_plugin_interface_t* ply_renderer_backend_get_interface()' at plugin.c:1847:1 has some indirect sub-type changes:

    return type changed:

      in pointed to type 'typedef ply_renderer_plugin_interface_t' at ply-renderer-plugin.h:79:1:

        underlying type 'struct {ply_renderer_backend_t* (const char*, ply_terminal_t*)* create_backend; void (ply_renderer_backend_t*)* destroy_backend; bool (ply_renderer_backend_t*)* open_device; void (ply_renderer_backend_t*)* close_device; bool (ply_renderer_backend_t*)* query_device; bool (ply_renderer_backend_t*)* handle_change_event; bool (ply_renderer_backend_t*)* map_to_device; void (ply_renderer_backend_t*)* unmap_from_device; void (ply_renderer_backend_t*)* activate; void (ply_renderer_backend_t*)* deactivate; void (ply_renderer_backend_t*, ply_renderer_head_t*)* flush_head; ply_list_t* (ply_renderer_backend_t*)* get_heads; ply_pixel_buffer_t* (ply_renderer_backend_t*, ply_renderer_head_t*)* get_buffer_for_head; ply_renderer_input_source_t* (ply_renderer_backend_t*)* get_input_source; bool (ply_renderer_backend_t*, ply_renderer_input_source_t*)* open_input_source; void (ply_renderer_backend_t*, ply_renderer_input_source_t*, typedef ply_renderer_input_source_handler_t, void*)* set_handler_for_input_source; void (ply_renderer_backend_t*, ply_renderer_input_source_t*)* close_input_source; const char* (ply_renderer_backend_t*)* get_device_name; bool (ply_renderer_backend_t*, int*, int*, ply_pixel_buffer_rotation_t*, int*)* get_panel_properties; bool (ply_renderer_backend_t*)* get_capslock_state; const char* (ply_renderer_backend_t*)* get_keymap;}' at ply-renderer-plugin.h:38:1 changed:

          type size hasn't changed

          2 data member changes (19 filtered):

           type of 'void (ply_renderer_backend_t*)* activate' changed:

             in pointed to type 'function type void (ply_renderer_backend_t*)':

               parameter 1 of type 'ply_renderer_backend_t*' has sub-type changes:

                 in pointed to type 'typedef ply_renderer_backend_t' at ply-renderer-plugin.h:36:1:

                   underlying type 'struct _ply_renderer_backend' at plugin.c:132:1 changed:

                     type size hasn't changed

                     1 data member change:

                      type of 'ply_output_t* _ply_renderer_backend::outputs' changed:

                        in pointed to type 'typedef ply_output_t' at plugin.c:133:1:

                          underlying type 'struct {drmModeModeInfo mode; uint32_t connector_id; uint32_t connector_type; uint32_t controller_id; uint32_t possible_controllers; int device_scale; int link_status; ply_pixel_buffer_rotation_t rotation; bool tiled; bool connected;}' at plugin.c:118:1 changed:

                            type size hasn't changed

                            1 data member insertion:

                              'bool uses_hw_rotation', at offset 784 (in bits) at plugin.c:132:1





           type of 'void (ply_renderer_backend_t*, ply_renderer_head_t*)* flush_head' changed:

             in pointed to type 'function type void (ply_renderer_backend_t*, ply_renderer_head_t*)':

               parameter 2 of type 'ply_renderer_head_t*' has sub-type changes:

                 in pointed to type 'typedef ply_renderer_head_t' at ply-renderer.h:35:1:

                   underlying type 'struct _ply_renderer_head' at plugin.c:71:1 changed:

                     type size hasn't changed

                     1 data member insertion:

                       'bool _ply_renderer_head::uses_hw_rotation', at offset 1160 (in bits) at plugin.c:87:1

                     no data member change (1 filtered);







---------------diffs in plymouth_libply-boot-client.so.5.0.0_abidiff.out:----------------

---------------diffs in plymouth_text.so_abidiff.out:----------------

---------------diffs in plymouth_tribar.so_abidiff.out:----------------

---------------diffs in plymouth_space-flares.so_abidiff.out:----------------

---------------diffs in plymouth_fade-throbber.so_abidiff.out:----------------

---------------diffs in plymouth_libply.so.5.0.0_abidiff.out:----------------

---------------diffs in plymouth_libply-splash-graphics.so.5.0.0_abidiff.out:----------------

Functions changes summary: 4 Removed, 0 Changed (21 filtered out), 4 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



4 Removed functions:



  'function double ply_progress_animation_get_percent_done(ply_progress_animation_t*)'    {ply_progress_animation_get_percent_done}

  'function void ply_progress_animation_set_percent_done(ply_progress_animation_t*, double)'    {ply_progress_animation_set_percent_done}

  'function double ply_progress_bar_get_percent_done(ply_progress_bar_t*)'    {ply_progress_bar_get_percent_done}

  'function void ply_progress_bar_set_percent_done(ply_progress_bar_t*, double)'    {ply_progress_bar_set_percent_done}



4 Added functions:



  'function double ply_progress_animation_get_fraction_done(ply_progress_animation_t*)'    {ply_progress_animation_get_fraction_done}

  'function void ply_progress_animation_set_fraction_done(ply_progress_animation_t*, double)'    {ply_progress_animation_set_fraction_done}

  'function double ply_progress_bar_get_fraction_done(ply_progress_bar_t*)'    {ply_progress_bar_get_fraction_done}

  'function void ply_progress_bar_set_fraction_done(ply_progress_bar_t*, double)'    {ply_progress_bar_set_fraction_done}



---------------diffs in plymouth_two-step.so_abidiff.out:----------------

Functions changes summary: 0 Removed, 1 Changed, 0 Added function

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



1 function with some indirect sub-type change:



  [C]'function ply_boot_splash_plugin_interface_t* ply_boot_splash_plugin_get_interface()' at plugin.c:1982:1 has some indirect sub-type changes:

    return type changed:

      in pointed to type 'typedef ply_boot_splash_plugin_interface_t' at ply-boot-splash-plugin.h:98:1:

        underlying type 'struct {ply_boot_splash_plugin_t* (ply_key_file_t*)* create_plugin; void (ply_boot_splash_plugin_t*)* destroy_plugin; void (ply_boot_splash_plugin_t*, ply_keyboard_t*)* set_keyboard; void (ply_boot_splash_plugin_t*, ply_keyboard_t*)* unset_keyboard; void (ply_boot_splash_plugin_t*, ply_pixel_display_t*)* add_pixel_display; void (ply_boot_splash_plugin_t*, ply_pixel_display_t*)* remove_pixel_display; void (ply_boot_splash_plugin_t*, ply_text_display_t*)* add_text_display; void (ply_boot_splash_plugin_t*, ply_text_display_t*)* remove_text_display; bool (ply_boot_splash_plugin_t*, ply_event_loop_t*, ply_buffer_t*, typedef ply_boot_splash_mode_t)* show_splash_screen; void (ply_boot_splash_plugin_t*, int)* system_update; void (ply_boot_splash_plugin_t*, const char*)* update_status; void (ply_boot_splash_plugin_t*, const char*, typedef size_t)* on_boot_output; void (ply_boot_splash_plugin_t*, double, double)* on_boot_progress; void (ply_boot_splash_plugin_t*)* on_root_mounted; void (ply_boot_splash_plugin_t*, ply_event_loop_t*)* hide_splash_screen; void (ply_boot_splash_plugin_t*, const char*)* display_message; void (ply_boot_splash_plugin_t*, const char*)* hide_message; void (ply_boot_splash_plugin_t*)* display_normal; void (ply_boot_splash_plugin_t*, const char*, int)* display_password; void (ply_boot_splash_plugin_t*, const char*, const char*)* display_question; void (ply_boot_splash_plugin_t*, ply_trigger_t*)* become_idle;}' at ply-boot-splash-plugin.h:51:1 changed:

          type size hasn't changed

          1 data member changes (20 filtered):

           type of 'void (ply_boot_splash_plugin_t*, ply_pixel_display_t*)* add_pixel_display' changed:

             in pointed to type 'function type void (ply_boot_splash_plugin_t*, ply_pixel_display_t*)':

               parameter 1 of type 'ply_boot_splash_plugin_t*' has sub-type changes:

                 in pointed to type 'typedef ply_boot_splash_plugin_t' at ply-boot-splash-plugin.h:49:1:

                   underlying type 'struct _ply_boot_splash_plugin' at plugin.c:129:1 changed:

                     type size changed from 3520 to 3392 (in bits)

                     2 data member deletions:

                       'double _ply_boot_splash_plugin::keyboard_indicator_horizontal_alignment', at offset 2048 (in bits) at plugin.c:149:1



                       'double _ply_boot_splash_plugin::keyboard_indicator_vertical_alignment', at offset 2112 (in bits) at plugin.c:150:1



                     1 data member insertion:

                       'int _ply_boot_splash_plugin::background_bgrt_raw_height', at offset 2784 (in bits) at plugin.c:167:1

                     23 data member changes:

                      type of 'mode_settings_t _ply_boot_splash_plugin::mode_settings[6]' changed:

                        array element type 'typedef mode_settings_t' changed: 

                          underlying type 'struct {bool suppress_messages; bool progress_bar_show_percent_complete; bool use_progress_bar; bool use_animation; bool use_firmware_background; char* title; char* subtitle;}' at plugin.c:118:1 changed:

                            type size hasn't changed

                            1 data member insertion:

                              'bool use_end_animation', at offset 32 (in bits) at plugin.c:124:1

                            1 data member change:

                             'bool use_firmware_background' offset changed from 32 to 40 (in bits) (by +8 bits)

                        type size hasn't changed



                      'double _ply_boot_splash_plugin::title_horizontal_alignment' offset changed from 2176 to 2048 (in bits) (by -128 bits)

                      'double _ply_boot_splash_plugin::title_vertical_alignment' offset changed from 2240 to 2112 (in bits) (by -128 bits)

                      'char* _ply_boot_splash_plugin::title_font' offset changed from 2304 to 2176 (in bits) (by -128 bits)

                      'double _ply_boot_splash_plugin::watermark_horizontal_alignment' offset changed from 2368 to 2240 (in bits) (by -128 bits)

                      'double _ply_boot_splash_plugin::watermark_vertical_alignment' offset changed from 2432 to 2304 (in bits) (by -128 bits)

                      'double _ply_boot_splash_plugin::animation_horizontal_alignment' offset changed from 2496 to 2368 (in bits) (by -128 bits)

                      'double _ply_boot_splash_plugin::animation_vertical_alignment' offset changed from 2560 to 2432 (in bits) (by -128 bits)

                      'char* _ply_boot_splash_plugin::animation_dir' offset changed from 2624 to 2496 (in bits) (by -128 bits)

                      'ply_progress_animation_transition_t _ply_boot_splash_plugin::transition' offset changed from 2688 to 2560 (in bits) (by -128 bits)

                      'double _ply_boot_splash_plugin::transition_duration' offset changed from 2752 to 2624 (in bits) (by -128 bits)

                      'uint32_t _ply_boot_splash_plugin::background_start_color' offset changed from 2816 to 2688 (in bits) (by -128 bits)

                      'uint32_t _ply_boot_splash_plugin::background_end_color' offset changed from 2848 to 2720 (in bits) (by -128 bits)

                      'int _ply_boot_splash_plugin::background_bgrt_raw_width' offset changed from 2880 to 2752 (in bits) (by -128 bits)

                      'double _ply_boot_splash_plugin::progress_bar_horizontal_alignment' offset changed from 2944 to 2816 (in bits) (by -128 bits)

                      'double _ply_boot_splash_plugin::progress_bar_vertical_alignment' offset changed from 3008 to 2880 (in bits) (by -128 bits)

                      'long int _ply_boot_splash_plugin::progress_bar_width' offset changed from 3072 to 2944 (in bits) (by -128 bits)

                      'long int _ply_boot_splash_plugin::progress_bar_height' offset changed from 3136 to 3008 (in bits) (by -128 bits)

                      'uint32_t _ply_boot_splash_plugin::progress_bar_bg_color' offset changed from 3200 to 3072 (in bits) (by -128 bits)

                      'uint32_t _ply_boot_splash_plugin::progress_bar_fg_color' offset changed from 3232 to 3104 (in bits) (by -128 bits)

                      'progress_function_t _ply_boot_splash_plugin::progress_function' offset changed from 3264 to 3136 (in bits) (by -128 bits)

                      'ply_trigger_t* _ply_boot_splash_plugin::idle_trigger' offset changed from 3328 to 3200 (in bits) (by -128 bits)

                      'ply_trigger_t* _ply_boot_splash_plugin::stop_trigger' offset changed from 3392 to 3264 (in bits) (by -128 bits)







---------------diffs in plymouth_script.so_abidiff.out:----------------

