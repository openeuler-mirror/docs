# Functions changed info

---------------diffs in glib2_libglib-2.0.so.0.6200.5_abidiff.out:----------------

Functions changes summary: 0 Removed, 0 Changed (1 filtered out), 0 Added function

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



---------------diffs in glib2_libgio-2.0.so.0.6200.5_abidiff.out:----------------

Functions changes summary: 0 Removed, 1 Changed, 0 Added function

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



1 function with some indirect sub-type change:



  [C]'function gboolean g_file_monitor_source_handle_event(GFileMonitorSource*, GFileMonitorEvent, const gchar*, const gchar*, GFile*, gint64)' at glocalfilemonitor.c:343:1 has some indirect sub-type changes:

    parameter 1 of type 'GFileMonitorSource*' has sub-type changes:

      in pointed to type 'typedef GFileMonitorSource' at glocalfilemonitor.h:41:1:

        underlying type 'struct _GFileMonitorSource' at glocalfilemonitor.c:45:1 changed:

          type size hasn't changed

          1 data member change:

           type of 'gpointer _GFileMonitorSource::instance' changed:

             typedef name changed from gpointer to GWeakRef at gobject.h:884:1

             underlying type 'void*' changed:

               entity changed from 'void*' to 'struct {union {gpointer p;} priv;}' at gobject.h:881:1

               type size hasn't changed

           and name of '_GFileMonitorSource::instance' changed to '_GFileMonitorSource::instance_ref' at glocalfilemonitor.c:49:1





---------------diffs in glib2_libgmodule-2.0.so.0.6200.5_abidiff.out:----------------

---------------diffs in glib2_libgthread-2.0.so.0.6200.5_abidiff.out:----------------

---------------diffs in glib2_libgobject-2.0.so.0.6200.5_abidiff.out:----------------

---------------diffs in glib2_libgiofam.so_abidiff.out:----------------

