# Functions changed info

---------------diffs in libgusb_libgusb.so.2.0.10_abidiff.out:----------------

Functions changes summary: 2 Removed, 1 Changed (11 filtered out), 13 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



2 Removed functions:



  'function GType g_usb_interface_get_type()'    {g_usb_interface_get_type@@LIBGUSB_0.1.0}

  'function void g_usb_source_set_callback(GUsbSource*, GSourceFunc, gpointer, GDestroyNotify)'    {g_usb_source_set_callback@@LIBGUSB_0.1.0}



13 Added functions:



  'function guint16 g_usb_device_get_spec(GUsbDevice*)'    {g_usb_device_get_spec@@LIBGUSB_0.3.1}

  'function guint8 g_usb_endpoint_get_address(GUsbEndpoint*)'    {g_usb_endpoint_get_address@@LIBGUSB_0.3.3}

  'function GUsbDeviceDirection g_usb_endpoint_get_direction(GUsbEndpoint*)'    {g_usb_endpoint_get_direction@@LIBGUSB_0.3.3}

  'function GBytes* g_usb_endpoint_get_extra(GUsbEndpoint*)'    {g_usb_endpoint_get_extra@@LIBGUSB_0.3.3}

  'function guint8 g_usb_endpoint_get_kind(GUsbEndpoint*)'    {g_usb_endpoint_get_kind@@LIBGUSB_0.3.3}

  'function guint16 g_usb_endpoint_get_maximum_packet_size(GUsbEndpoint*)'    {g_usb_endpoint_get_maximum_packet_size@@LIBGUSB_0.3.3}

  'function guint8 g_usb_endpoint_get_number(GUsbEndpoint*)'    {g_usb_endpoint_get_number@@LIBGUSB_0.3.3}

  'function guint8 g_usb_endpoint_get_polling_interval(GUsbEndpoint*)'    {g_usb_endpoint_get_polling_interval@@LIBGUSB_0.3.3}

  'function guint8 g_usb_endpoint_get_refresh(GUsbEndpoint*)'    {g_usb_endpoint_get_refresh@@LIBGUSB_0.3.3}

  'function guint8 g_usb_endpoint_get_synch_address(GUsbEndpoint*)'    {g_usb_endpoint_get_synch_address@@LIBGUSB_0.3.3}

  'function GType g_usb_endpoint_get_type()'    {g_usb_endpoint_get_type@@LIBGUSB_0.3.3}

  'function GPtrArray* g_usb_interface_get_endpoints(GUsbInterface*)'    {g_usb_interface_get_endpoints@@LIBGUSB_0.3.3}

  'function const gchar* g_usb_version_string()'    {g_usb_version_string@@LIBGUSB_0.3.1}



1 function with some indirect sub-type change:



  [C]'function GUsbInterface* g_usb_device_get_interface(GUsbDevice*, guint8, guint8, guint8, GError**)' at gusb-device.c:500:1 has some indirect sub-type changes:

    return type changed:

      in pointed to type 'typedef GUsbInterface' at gusb-interface.h:17:1:

        underlying type 'struct _GUsbInterface' at gusb-interface.c:38:1 changed:

          type size changed from 576 to 640 (in bits)

          1 data member insertion:

            'GPtrArray* _GUsbInterface::endpoints', at offset 576 (in bits) at gusb-interface.c:34:1





