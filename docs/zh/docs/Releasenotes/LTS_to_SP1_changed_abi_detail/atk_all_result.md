# Functions changed info

---------------diffs in atk_libatk-1.0.so.0.23609.1_abidiff.out:----------------

Functions changes summary: 0 Removed, 2 Changed (63 filtered out), 5 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



5 Added functions:



  'function const gchar* atk_object_get_accessible_id(AtkObject*)'    {atk_object_get_accessible_id}

  'function void atk_object_set_accessible_id(AtkObject*, const gchar*)'    {atk_object_set_accessible_id}

  'function void atk_plug_set_child(AtkPlug*, AtkObject*)'    {atk_plug_set_child}

  'function gboolean atk_text_scroll_substring_to(AtkText*, gint, gint, AtkScrollType)'    {atk_text_scroll_substring_to}

  'function gboolean atk_text_scroll_substring_to_point(AtkText*, gint, gint, AtkCoordType, gint, gint)'    {atk_text_scroll_substring_to_point}



2 functions with some indirect sub-type change:



  [C]'function guint atk_add_focus_tracker(AtkEventListener)' at atkutil.c:129:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef AtkEventListener' has sub-type changes:

      underlying type 'void (AtkObject*)*' changed:

        in pointed to type 'function type void (AtkObject*)':

          parameter 1 of type 'AtkObject*' has sub-type changes:

            in pointed to type 'typedef AtkObject' at atkobject.h:459:1:

              underlying type 'struct _AtkObject' at atkobject.h:501:1 changed:

                type size hasn't changed

                1 data member changes (1 filtered):

                 type of 'AtkRole _AtkObject::role' changed:

                   underlying type 'enum __anonymous_enum__' at atkobject.h:230:1 changed:

                     type size hasn't changed

                     4 enumerator insertions:

                       '__anonymous_enum__::ATK_ROLE_CONTENT_DELETION' value '123'

                       '__anonymous_enum__::ATK_ROLE_CONTENT_INSERTION' value '124'

                       '__anonymous_enum__::ATK_ROLE_MARK' value '125'

                       '__anonymous_enum__::ATK_ROLE_SUGGESTION' value '126'



                     1 enumerator change:

                       '__anonymous_enum__::ATK_ROLE_LAST_DEFINED' from value '123' to '127' at atkobject.h:247:1







  [C]'function AtkTextAttribute atk_text_attribute_for_name(const gchar*)' at atktext.c:1258:1 has some indirect sub-type changes:

    return type changed:

      underlying type 'enum __anonymous_enum__' at atktext.h:68:1 changed:

        type size hasn't changed

        1 enumerator insertion:

          '__anonymous_enum__::ATK_TEXT_ATTR_TEXT_POSITION' value '28'



        1 enumerator change:

          '__anonymous_enum__::ATK_TEXT_ATTR_LAST_DEFINED' from value '28' to '29' at atktext.h:70:1







