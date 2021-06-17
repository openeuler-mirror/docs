# Functions changed info

---------------diffs in pam_pam_timestamp.so_abidiff.out:----------------

---------------diffs in pam_pam_filter.so_abidiff.out:----------------

---------------diffs in pam_pam_issue.so_abidiff.out:----------------

---------------diffs in pam_pam_debug.so_abidiff.out:----------------

---------------diffs in pam_pam_userdb.so_abidiff.out:----------------

---------------diffs in pam_pam_mkhomedir.so_abidiff.out:----------------

---------------diffs in pam_pam_loginuid.so_abidiff.out:----------------

---------------diffs in pam_pam_echo.so_abidiff.out:----------------

---------------diffs in pam_pam_securetty.so_abidiff.out:----------------

---------------diffs in pam_pam_group.so_abidiff.out:----------------

---------------diffs in pam_pam_limits.so_abidiff.out:----------------

---------------diffs in pam_pam_tty_audit.so_abidiff.out:----------------

---------------diffs in pam_pam_motd.so_abidiff.out:----------------

---------------diffs in pam_pam_rhosts.so_abidiff.out:----------------

---------------diffs in pam_pam_selinux.so_abidiff.out:----------------

---------------diffs in pam_libpam.so.0.85.1_abidiff.out:----------------

Functions changes summary: 0 Removed, 1 Changed (38 filtered out), 3 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



3 Added functions:



  'function int pam_modutil_check_user_in_passwd(pam_handle_t*, const char*, const char*)'    {pam_modutil_check_user_in_passwd@@LIBPAM_MODUTIL_1.4.1}

  'function char* pam_modutil_search_key(pam_handle_t*, const char*, const char*)'    {pam_modutil_search_key@@LIBPAM_MODUTIL_1.3.2}

  'function int pam_start_confdir(const char*, const char*, const pam_conv*, const char*, pam_handle_t**)'    {pam_start_confdir@@LIBPAM_1.4}



1 function with some indirect sub-type change:



  [C]'function int pam_acct_mgmt(pam_handle_t*, int)' at pam_account.c:7:1 has some indirect sub-type changes:

    parameter 1 of type 'pam_handle_t*' has sub-type changes:

      in pointed to type 'typedef pam_handle_t' at _pam_types.h:18:1:

        underlying type 'struct pam_handle' at pam_private.h:147:1 changed:

          type size changed from 2944 to 3072 (in bits)

          2 data member insertions:

            'int pam_handle::authtok_verified', at offset 2944 (in bits) at pam_private.h:180:1

            'char* pam_handle::confdir', at offset 3008 (in bits) at pam_private.h:181:1

          no data member changes (2 filtered);





---------------diffs in pam_pam_access.so_abidiff.out:----------------

---------------diffs in pam_pam_sepermit.so_abidiff.out:----------------

---------------diffs in pam_pam_pwhistory.so_abidiff.out:----------------

---------------diffs in pam_pam_rootok.so_abidiff.out:----------------

---------------diffs in pam_pam_cracklib.so_abidiff.out:----------------

---------------diffs in pam_pam_ftp.so_abidiff.out:----------------

---------------diffs in pam_libpam_misc.so.0.82.1_abidiff.out:----------------

Functions changes summary: 0 Removed, 0 Changed, 0 Added function

Variables changes summary: 0 Removed, 0 Changed (2 filtered out), 0 Added variables



---------------diffs in pam_pam_keyinit.so_abidiff.out:----------------

Functions changes summary: 0 Removed, 0 Changed, 2 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



2 Added functions:



  'function int pam_sm_authenticate(pam_handle_t*, int, int, const char**)'    {pam_sm_authenticate}

  'function int pam_sm_setcred(pam_handle_t*, int, int, const char**)'    {pam_sm_setcred}



---------------diffs in pam_pam_mail.so_abidiff.out:----------------

---------------diffs in pam_pam_nologin.so_abidiff.out:----------------

---------------diffs in pam_pam_tally2.so_abidiff.out:----------------

---------------diffs in pam_pam_xauth.so_abidiff.out:----------------

---------------diffs in pam_pam_warn.so_abidiff.out:----------------

---------------diffs in pam_pam_exec.so_abidiff.out:----------------

---------------diffs in pam_pam_umask.so_abidiff.out:----------------

---------------diffs in pam_pam_stress.so_abidiff.out:----------------

---------------diffs in pam_pam_wheel.so_abidiff.out:----------------

---------------diffs in pam_pam_localuser.so_abidiff.out:----------------

---------------diffs in pam_pam_lastlog.so_abidiff.out:----------------

---------------diffs in pam_pam_faillock.so_abidiff.out:----------------

---------------diffs in pam_pam_time.so_abidiff.out:----------------

---------------diffs in pam_pam_tally.so_abidiff.out:----------------

---------------diffs in pam_pam_permit.so_abidiff.out:----------------

---------------diffs in pam_pam_unix.so_abidiff.out:----------------

---------------diffs in pam_pam_shells.so_abidiff.out:----------------

---------------diffs in pam_pam_faildelay.so_abidiff.out:----------------

---------------diffs in pam_pam_env.so_abidiff.out:----------------

---------------diffs in pam_pam_listfile.so_abidiff.out:----------------

---------------diffs in pam_libpamc.so.0.82.1_abidiff.out:----------------

Functions changes summary: 0 Removed, 0 Changed (1 filtered out), 0 Added function

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



---------------diffs in pam_pam_namespace.so_abidiff.out:----------------

---------------diffs in pam_pam_deny.so_abidiff.out:----------------

---------------diffs in pam_pam_succeed_if.so_abidiff.out:----------------

