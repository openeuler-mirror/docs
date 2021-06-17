# Functions changed info

---------------diffs in OpenIPMI_libOpenIPMIutils.so.0.0.1_abidiff.out:----------------

---------------diffs in OpenIPMI_libOpenIPMIposix.so.0.0.1_abidiff.out:----------------

Functions changes summary: 0 Removed, 0 Changed, 2 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



2 Added functions:



  'function int sel_select_intr_sigmask(selector_s*, sel_send_sig_cb, long int, void*, timeval*, sigset_t*)'    {sel_select_intr_sigmask}

  'function int sel_setup_forked_process(selector_s*)'    {sel_setup_forked_process}



---------------diffs in OpenIPMI_libOpenIPMIglib.so.0.0.1_abidiff.out:----------------

---------------diffs in OpenIPMI_libOpenIPMIui.so.1.0.1_abidiff.out:----------------

---------------diffs in OpenIPMI_libOpenIPMI.so.0.0.5_abidiff.out:----------------

---------------diffs in OpenIPMI_libOpenIPMIpthread.so.0.0.1_abidiff.out:----------------

Functions changes summary: 0 Removed, 0 Changed, 2 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



2 Added functions:



  'function int sel_select_intr_sigmask(selector_s*, sel_send_sig_cb, long int, void*, timeval*, sigset_t*)'    {sel_select_intr_sigmask}

  'function int sel_setup_forked_process(selector_s*)'    {sel_setup_forked_process}



---------------diffs in OpenIPMI_libIPMIlanserv.so.0.0.1_abidiff.out:----------------

Functions changes summary: 0 Removed, 4 Changed (20 filtered out), 3 Added functions

Variables changes summary: 0 Removed, 0 Changed (4 filtered out), 0 Added variables



3 Added functions:



  'function void ipmbserv_handle_data(ipmbserv_data_t*, uint8_t*, unsigned int)'    {ipmbserv_handle_data}

  'function int ipmbserv_init(ipmbserv_data_t*)'    {ipmbserv_init}

  'function int ipmbserv_read_config(char**, sys_data_t*, const char**)'    {ipmbserv_read_config}



4 functions with some indirect sub-type change:



  [C]'function int chan_init(channel_t*)' at serv.c:212:1 has some indirect sub-type changes:

    parameter 1 of type 'channel_t*' has sub-type changes:

      in pointed to type 'typedef channel_t' at msg.h:61:1:

        underlying type 'struct channel_s' at serv.h:120:1 changed:

          type size changed from 1984 to 2048 (in bits)

          1 data member insertion:

            'int channel_s::prim_ipmb_in_cfg_file', at offset 1984 (in bits) at serv.h:224:1

          no data member changes (19 filtered);



  [C]'function void debug_log_raw_msg(sys_data_t*, unsigned char*, unsigned int, const char*, ...)' at serv.c:240:1 has some indirect sub-type changes:

    parameter 1 of type 'sys_data_t*' has sub-type changes:

      in pointed to type 'typedef sys_data_t' at msg.h:124:1:

        underlying type 'struct sys_data_s' at serv.h:325:1 changed:

          type size changed from 18688 to 18752 (in bits)

          1 data member insertion:

            'int (void*, channel_t*)* sys_data_s::ipmb_channel_init', at offset 18688 (in bits) at serv.h:414:1

          no data member changes (17 filtered);



  [C]'function void handle_asf(lanserv_data_t*, uint8_t*, int, void*, int)' at lanserv_asf.c:96:1 has some indirect sub-type changes:

    parameter 1 of type 'lanserv_data_t*' has sub-type changes:

      in pointed to type 'typedef lanserv_data_t' at lanserv.h:73:1:

        underlying type 'struct lanserv_data_s' at lanserv.h:219:1 changed:

          type size changed from 192960 to 193024 (in bits)

          20 data member changes (1 filtered):



           'user_t* lanserv_data_s::users' offset changed from 2304 to 2368 (in bits) (by +64 bits)

           'pef_data_t* lanserv_data_s::pef' offset changed from 2368 to 2432 (in bits) (by +64 bits)

           'unsigned int lanserv_data_s::default_session_timeout' offset changed from 2432 to 2496 (in bits) (by +64 bits)

           'unsigned char* lanserv_data_s::bmc_key' offset changed from 2496 to 2560 (in bits) (by +64 bits)

           'void* lanserv_data_s::user_info' offset changed from 2560 to 2624 (in bits) (by +64 bits)

           'void (lanserv_data_t*, iovec*, int, void*, int)* lanserv_data_s::send_out' offset changed from 2624 to 2688 (in bits) (by +64 bits)

           'int (lanserv_data_t*, void*, int)* lanserv_data_s::gen_rand' offset changed from 2688 to 2752 (in bits) (by +64 bits)

           'session_t lanserv_data_s::sessions[64]' offset changed from 2752 to 2816 (in bits) (by +64 bits)

           'uint32_t lanserv_data_s::sid_seq' offset changed from 191168 to 191232 (in bits) (by +64 bits)

           'ipmi_authdata_t lanserv_data_s::challenge_auth' offset changed from 191232 to 191296 (in bits) (by +64 bits)

           'unsigned int lanserv_data_s::next_challenge_seq' offset changed from 191296 to 191360 (in bits) (by +64 bits)

           'lanparm_data_t lanserv_data_s::lanparm' offset changed from 191328 to 191392 (in bits) (by +64 bits)

           'unsigned char lanserv_data_s::lanparm_changed[8]' offset changed from 191904 to 191968 (in bits) (by +64 bits)

           'unsigned int lanserv_data_s::persist_changed' offset changed from 191968 to 192032 (in bits) (by +64 bits)

           'lanparm_data_t lanserv_data_s::lanparm_rollback' offset changed from 192000 to 192064 (in bits) (by +64 bits)

           'char* lanserv_data_s::config_prog' offset changed from 192576 to 192640 (in bits) (by +64 bits)

           'lan_addr_t lanserv_data_s::lan_addr' offset changed from 192640 to 192704 (in bits) (by +64 bits)

           'int lanserv_data_s::lan_addr_set' offset changed from 192896 to 192960 (in bits) (by +64 bits)

           'uint16_t lanserv_data_s::port' offset changed from 192928 to 192992 (in bits) (by +64 bits)



  [C]'function int ra_setup(serserv_data_t*)' at serial_ipmi.c:310:1 has some indirect sub-type changes:

    parameter 1 of type 'serserv_data_t*' has sub-type changes:

      in pointed to type 'typedef serserv_data_t' at serserv.h:62:1:

        underlying type 'struct serserv_data_s' at serserv.h:80:1 changed:

          type size changed from 3072 to 3136 (in bits)

          17 data member changes:



           'os_handler_t* serserv_data_s::os_hnd' offset changed from 2240 to 2304 (in bits) (by +64 bits)

           'sys_data_t* serserv_data_s::sysinfo' offset changed from 2304 to 2368 (in bits) (by +64 bits)

           'void* serserv_data_s::user_info' offset changed from 2368 to 2432 (in bits) (by +64 bits)

           'int serserv_data_s::bind_fd' offset changed from 2432 to 2496 (in bits) (by +64 bits)

           'int serserv_data_s::con_fd' offset changed from 2464 to 2528 (in bits) (by +64 bits)

           'int serserv_data_s::connected' offset changed from 2496 to 2560 (in bits) (by +64 bits)

           'void (serserv_data_t*, unsigned char*, unsigned int)* serserv_data_s::send_out' offset changed from 2560 to 2624 (in bits) (by +64 bits)

           'ser_codec_t* serserv_data_s::codec' offset changed from 2624 to 2688 (in bits) (by +64 bits)

           'void* serserv_data_s::codec_info' offset changed from 2688 to 2752 (in bits) (by +64 bits)

           'ser_oem_handler_t* serserv_data_s::oem' offset changed from 2752 to 2816 (in bits) (by +64 bits)

           'void* serserv_data_s::oem_info' offset changed from 2816 to 2880 (in bits) (by +64 bits)

           'int serserv_data_s::debug' offset changed from 2880 to 2944 (in bits) (by +64 bits)

           'unsigned char serserv_data_s::my_ipmb' offset changed from 2920 to 2984 (in bits) (by +64 bits)

           'unsigned char serserv_data_s::global_enables' offset changed from 2928 to 2992 (in bits) (by +64 bits)

           'unsigned char serserv_data_s::attn_chars[8]' offset changed from 2936 to 3000 (in bits) (by +64 bits)

           'unsigned int serserv_data_s::attn_chars_len' offset changed from 3008 to 3072 (in bits) (by +64 bits)





---------------diffs in OpenIPMI_libOpenIPMIcmdlang.so.0.0.5_abidiff.out:----------------

