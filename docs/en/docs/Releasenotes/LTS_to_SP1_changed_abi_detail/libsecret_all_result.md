# Functions changed info

---------------diffs in libsecret_libsecret-1.so.0.0.0_abidiff.out:----------------

Functions changes summary: 0 Removed, 0 Changed, 35 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



35 Added functions:



  'function GType secret_backend_flags_get_type()'    {secret_backend_flags_get_type}

  'function void secret_backend_get(SecretBackendFlags, GCancellable*, GAsyncReadyCallback, gpointer)'    {secret_backend_get}

  'function SecretBackend* secret_backend_get_finish(GAsyncResult*, GError**)'    {secret_backend_get_finish}

  'function GType secret_backend_get_type()'    {secret_backend_get_type}

  'function GType secret_file_backend_get_type()'    {secret_file_backend_get_type}

  'function gboolean secret_file_collection_clear(SecretFileCollection*, GHashTable*, GError**)'    {secret_file_collection_clear}

  'function GType secret_file_collection_get_type()'    {secret_file_collection_get_type}

  'function gboolean secret_file_collection_replace(SecretFileCollection*, GHashTable*, const gchar*, SecretValue*, GError**)'    {secret_file_collection_replace}

  'function GList* secret_file_collection_search(SecretFileCollection*, GHashTable*)'    {secret_file_collection_search}

  'function void secret_file_collection_write(SecretFileCollection*, GCancellable*, GAsyncReadyCallback, gpointer)'    {secret_file_collection_write}

  'function gboolean secret_file_collection_write_finish(SecretFileCollection*, GAsyncResult*, GError**)'    {secret_file_collection_write_finish}

  'function SecretFileItem* secret_file_item_deserialize(GVariant*)'    {secret_file_item_deserialize}

  'function GType secret_file_item_get_type()'    {secret_file_item_get_type}

  'function GVariant* secret_file_item_serialize(SecretFileItem*)'    {secret_file_item_serialize}

  'function SecretValue* secret_password_lookup_binary_finish(GAsyncResult*, GError**)'    {secret_password_lookup_binary_finish}

  'function SecretValue* secret_password_lookup_binary_sync(const SecretSchema*, GCancellable*, GError**, ...)'    {secret_password_lookup_binary_sync}

  'function SecretValue* secret_password_lookupv_binary_sync(const SecretSchema*, GHashTable*, GCancellable*, GError**)'    {secret_password_lookupv_binary_sync}

  'function void secret_password_search(const SecretSchema*, SecretSearchFlags, GCancellable*, GAsyncReadyCallback, gpointer, ...)'    {secret_password_search}

  'function GList* secret_password_search_finish(GAsyncResult*, GError**)'    {secret_password_search_finish}

  'function GList* secret_password_search_sync(const SecretSchema*, SecretSearchFlags, GCancellable*, GError**, ...)'    {secret_password_search_sync}

  'function void secret_password_searchv(const SecretSchema*, GHashTable*, SecretSearchFlags, GCancellable*, GAsyncReadyCallback, gpointer)'    {secret_password_searchv}

  'function GList* secret_password_searchv_sync(const SecretSchema*, GHashTable*, SecretSearchFlags, GCancellable*, GError**)'    {secret_password_searchv_sync}

  'function void secret_password_store_binary(const SecretSchema*, const gchar*, const gchar*, SecretValue*, GCancellable*, GAsyncReadyCallback, gpointer, ...)'    {secret_password_store_binary}

  'function gboolean secret_password_store_binary_sync(const SecretSchema*, const gchar*, const gchar*, SecretValue*, GCancellable*, GError**, ...)'    {secret_password_store_binary_sync}

  'function void secret_password_storev_binary(const SecretSchema*, GHashTable*, const gchar*, const gchar*, SecretValue*, GCancellable*, GAsyncReadyCallback, gpointer)'    {secret_password_storev_binary}

  'function gboolean secret_password_storev_binary_sync(const SecretSchema*, GHashTable*, const gchar*, const gchar*, SecretValue*, GCancellable*, GError**)'    {secret_password_storev_binary_sync}

  'function GHashTable* secret_retrievable_get_attributes(SecretRetrievable*)'    {secret_retrievable_get_attributes}

  'function guint64 secret_retrievable_get_created(SecretRetrievable*)'    {secret_retrievable_get_created}

  'function gchar* secret_retrievable_get_label(SecretRetrievable*)'    {secret_retrievable_get_label}

  'function guint64 secret_retrievable_get_modified(SecretRetrievable*)'    {secret_retrievable_get_modified}

  'function GType secret_retrievable_get_type()'    {secret_retrievable_get_type}

  'function void secret_retrievable_retrieve_secret(SecretRetrievable*, GCancellable*, GAsyncReadyCallback, gpointer)'    {secret_retrievable_retrieve_secret}

  'function SecretValue* secret_retrievable_retrieve_secret_finish(SecretRetrievable*, GAsyncResult*, GError**)'    {secret_retrievable_retrieve_secret_finish}

  'function SecretValue* secret_retrievable_retrieve_secret_sync(SecretRetrievable*, GCancellable*, GError**)'    {secret_retrievable_retrieve_secret_sync}

  'function gchar* secret_value_unref_to_password(SecretValue*, gsize*)'    {secret_value_unref_to_password}



