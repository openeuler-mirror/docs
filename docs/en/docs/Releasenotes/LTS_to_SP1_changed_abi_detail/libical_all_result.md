# Functions changed info

---------------diffs in libical_libical_cxx.so.3.0.8_abidiff.out:----------------

---------------diffs in libical_libicalss_cxx.so.3.0.8_abidiff.out:----------------

---------------diffs in libical_libicalvcal.so.3.0.8_abidiff.out:----------------

---------------diffs in libical_libical.so.3.0.8_abidiff.out:----------------

Functions changes summary: 0 Removed, 1 Changed, 2 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable



2 Added functions:



  'function icaltimetype icalproperty_get_datetime_with_component(icalproperty*, icalcomponent*)'    {icalproperty_get_datetime_with_component}

  'function void icaltimezone_truncate_vtimezone(icalcomponent*, icaltimetype, icaltimetype, int)'    {icaltimezone_truncate_vtimezone}



1 function with some indirect sub-type change:



  [C]'function icalattach* icalattach_new_from_data(const char*, icalattach_free_fn_t, void*)' at icalattach.c:60:1 has some indirect sub-type changes:

    parameter 2 of type 'typedef icalattach_free_fn_t' changed:

      underlying type 'void (unsigned char*, void*)*' changed:

        in pointed to type 'function type void (unsigned char*, void*)':

          parameter 1 of type 'unsigned char*' changed:

            in pointed to type 'unsigned char':

              type name changed from 'unsigned char' to 'char'

              type size hasn't changed







---------------diffs in libical_libicalss.so.3.0.8_abidiff.out:----------------

---------------diffs in libical_libical-glib.so.3.0.8_abidiff.out:----------------

Functions changes summary: 196 Removed, 137 Changed (46 filtered out), 199 Added functions

Variables changes summary: 0 Removed, 0 Changed, 0 Added variable

Function symbols changes summary: 0 Removed, 1 Added function symbol not referenced by debug info

Variable symbols changes summary: 0 Removed, 0 Added variable symbol not referenced by debug info



196 Removed functions:



  [D] 'function void i_cal_array_append(ICalArray*, GObject*)'    {i_cal_array_append}

  [D] 'function GObject* i_cal_array_element_at(ICalArray*, gint)'    {i_cal_array_element_at}

  [D] 'function ICalArray* i_cal_array_new(gint, gint)'    {i_cal_array_new}

  [D] 'function gchar* i_cal_component_as_ical_string_r(ICalComponent*)'    {i_cal_component_as_ical_string_r}

  [D] 'function ICalComponent* i_cal_component_new_clone(ICalComponent*)'    {i_cal_component_new_clone}

  [D] 'function ICalComponentKind i_cal_component_string_to_kind(const gchar*)'    {i_cal_component_string_to_kind}

  [D] 'function ICalPeriodType* i_cal_datetimeperiod_type_get_period(ICalDatetimeperiodType*)'    {i_cal_datetimeperiod_type_get_period}

  [D] 'function ICalTimetype* i_cal_datetimeperiod_type_get_time(ICalDatetimeperiodType*)'    {i_cal_datetimeperiod_type_get_time}

  [D] 'function GType i_cal_datetimeperiod_type_get_type()'    {i_cal_datetimeperiod_type_get_type}

  [D] 'function void i_cal_datetimeperiod_type_set_period(ICalDatetimeperiodType*, ICalPeriodType*)'    {i_cal_datetimeperiod_type_set_period}

  [D] 'function void i_cal_datetimeperiod_type_set_time(ICalDatetimeperiodType*, ICalTimetype*)'    {i_cal_datetimeperiod_type_set_time}

  [D] 'function gchar* i_cal_duration_type_as_ical_string_r(ICalDurationType*)'    {i_cal_duration_type_as_ical_string_r}

  [D] 'function gint i_cal_duration_type_as_int(ICalDurationType*)'    {i_cal_duration_type_as_int}

  [D] 'function ICalDurationType* i_cal_duration_type_bad_duration()'    {i_cal_duration_type_bad_duration}

  [D] 'function ICalDurationType* i_cal_duration_type_from_int(gint)'    {i_cal_duration_type_from_int}

  [D] 'function ICalDurationType* i_cal_duration_type_from_string(const gchar*)'    {i_cal_duration_type_from_string}

  [D] 'function guint i_cal_duration_type_get_days(ICalDurationType*)'    {i_cal_duration_type_get_days}

  [D] 'function guint i_cal_duration_type_get_hours(ICalDurationType*)'    {i_cal_duration_type_get_hours}

  [D] 'function guint i_cal_duration_type_get_minutes(ICalDurationType*)'    {i_cal_duration_type_get_minutes}

  [D] 'function guint i_cal_duration_type_get_seconds(ICalDurationType*)'    {i_cal_duration_type_get_seconds}

  [D] 'function GType i_cal_duration_type_get_type()'    {i_cal_duration_type_get_type}

  [D] 'function guint i_cal_duration_type_get_weeks(ICalDurationType*)'    {i_cal_duration_type_get_weeks}

  [D] 'function gint i_cal_duration_type_is_bad_duration(ICalDurationType*)'    {i_cal_duration_type_is_bad_duration}

  [D] 'function gint i_cal_duration_type_is_neg(ICalDurationType*)'    {i_cal_duration_type_is_neg}

  [D] 'function gint i_cal_duration_type_is_null_duration(ICalDurationType*)'    {i_cal_duration_type_is_null_duration}

  [D] 'function ICalDurationType* i_cal_duration_type_null_duration()'    {i_cal_duration_type_null_duration}

  [D] 'function void i_cal_duration_type_set_days(ICalDurationType*, guint)'    {i_cal_duration_type_set_days}

  [D] 'function void i_cal_duration_type_set_hours(ICalDurationType*, guint)'    {i_cal_duration_type_set_hours}

  [D] 'function void i_cal_duration_type_set_is_neg(ICalDurationType*, gint)'    {i_cal_duration_type_set_is_neg}

  [D] 'function void i_cal_duration_type_set_minutes(ICalDurationType*, guint)'    {i_cal_duration_type_set_minutes}

  [D] 'function void i_cal_duration_type_set_seconds(ICalDurationType*, guint)'    {i_cal_duration_type_set_seconds}

  [D] 'function void i_cal_duration_type_set_weeks(ICalDurationType*, guint)'    {i_cal_duration_type_set_weeks}

  [D] 'function ICalRequestStatus i_cal_enum_num_to_reqstat(gshort, gshort)'    {i_cal_enum_num_to_reqstat}

  [D] 'function gchar* i_cal_enum_reqstat_code_r(ICalRequestStatus)'    {i_cal_enum_reqstat_code_r}

  [D] 'function const gchar* i_cal_enum_reqstat_desc(ICalRequestStatus)'    {i_cal_enum_reqstat_desc}

  [D] 'function gshort i_cal_enum_reqstat_major(ICalRequestStatus)'    {i_cal_enum_reqstat_major}

  [D] 'function gshort i_cal_enum_reqstat_minor(ICalRequestStatus)'    {i_cal_enum_reqstat_minor}

  [D] 'function gdouble i_cal_geo_type_get_lat(ICalGeoType*)'    {i_cal_geo_type_get_lat}

  [D] 'function gdouble i_cal_geo_type_get_lon(ICalGeoType*)'    {i_cal_geo_type_get_lon}

  [D] 'function GType i_cal_geo_type_get_type()'    {i_cal_geo_type_get_type}

  [D] 'function icalgeotype i_cal_geo_type_new_default()'    {i_cal_geo_type_new_default}

  [D] 'function void i_cal_geo_type_set_lat(ICalGeoType*, gdouble)'    {i_cal_geo_type_set_lat}

  [D] 'function void i_cal_geo_type_set_lon(ICalGeoType*, gdouble)'    {i_cal_geo_type_set_lon}

  [D] 'function gint i_cal_langbind_access_array(gint*, gint)'    {i_cal_langbind_access_array}

  [D] 'function void i_cal_langbind_free_array(gint*)'    {i_cal_langbind_free_array}

  [D] 'function ICalComponent* i_cal_langbind_get_first_component(ICalComponent*, const gchar*)'    {i_cal_langbind_get_first_component}

  [D] 'function ICalParameter* i_cal_langbind_get_first_parameter(ICalProperty*)'    {i_cal_langbind_get_first_parameter}

  [D] 'function ICalProperty* i_cal_langbind_get_first_property(ICalComponent*, const gchar*)'    {i_cal_langbind_get_first_property}

  [D] 'function ICalComponent* i_cal_langbind_get_next_component(ICalComponent*, const gchar*)'    {i_cal_langbind_get_next_component}

  [D] 'function ICalParameter* i_cal_langbind_get_next_parameter(ICalProperty*)'    {i_cal_langbind_get_next_parameter}

  [D] 'function ICalProperty* i_cal_langbind_get_next_property(ICalComponent*, const gchar*)'    {i_cal_langbind_get_next_property}

  [D] 'function gint* i_cal_langbind_new_array(gint)'    {i_cal_langbind_new_array}

  [D] 'function gchar* i_cal_langbind_property_eval_string_r(ICalProperty*, const gchar*)'    {i_cal_langbind_property_eval_string_r}

  [D] 'function gchar* i_cal_langbind_quote_as_ical_r(const gchar*)'    {i_cal_langbind_quote_as_ical_r}

  [D] 'function gint i_cal_langbind_string_to_open_flag(const gchar*)'    {i_cal_langbind_string_to_open_flag}

  [D] 'function gchar* i_cal_parameter_as_ical_string_r(ICalParameter*)'    {i_cal_parameter_as_ical_string_r}

  [D] 'function ICalParameter* i_cal_parameter_new_clone(ICalParameter*)'    {i_cal_parameter_new_clone}

  [D] 'function ICalParameterKind i_cal_parameter_string_to_kind(const gchar*)'    {i_cal_parameter_string_to_kind}

  [D] 'function void i_cal_parser_set_gen_data(ICalParser*, void*)'    {i_cal_parser_set_gen_data}

  [D] 'function gchar* i_cal_parser_string_line_generator(gchar*, size_t, void*)'    {i_cal_parser_string_line_generator}

  [D] 'function gchar* i_cal_period_type_as_ical_string_r(ICalPeriodType*)'    {i_cal_period_type_as_ical_string_r}

  [D] 'function ICalPeriodType* i_cal_period_type_from_string(const gchar*)'    {i_cal_period_type_from_string}

  [D] 'function ICalDurationType* i_cal_period_type_get_duration(ICalPeriodType*)'    {i_cal_period_type_get_duration}

  [D] 'function ICalTimetype* i_cal_period_type_get_end(ICalPeriodType*)'    {i_cal_period_type_get_end}

  [D] 'function ICalTimetype* i_cal_period_type_get_start(ICalPeriodType*)'    {i_cal_period_type_get_start}

  [D] 'function GType i_cal_period_type_get_type()'    {i_cal_period_type_get_type}

  [D] 'function gint i_cal_period_type_is_null_period(ICalPeriodType*)'    {i_cal_period_type_is_null_period}

  [D] 'function gint i_cal_period_type_is_valid_period(ICalPeriodType*)'    {i_cal_period_type_is_valid_period}

  [D] 'function ICalPeriodType* i_cal_period_type_null_period()'    {i_cal_period_type_null_period}

  [D] 'function void i_cal_period_type_set_duration(ICalPeriodType*, ICalDurationType*)'    {i_cal_period_type_set_duration}

  [D] 'function void i_cal_period_type_set_end(ICalPeriodType*, ICalTimetype*)'    {i_cal_period_type_set_end}

  [D] 'function void i_cal_period_type_set_start(ICalPeriodType*, ICalTimetype*)'    {i_cal_period_type_set_start}

  [D] 'function const gchar* i_cal_property_as_ical_string_r(ICalProperty*)'    {i_cal_property_as_ical_string_r}

  [D] 'function gint i_cal_property_enum_belongs_to_property(ICalPropertyKind, gint)'    {i_cal_property_enum_belongs_to_property}

  [D] 'function gchar* i_cal_property_enum_to_string_r(gint)'    {i_cal_property_enum_to_string_r}

  [D] 'function gchar* i_cal_property_get_parameter_as_string_r(ICalProperty*, const gchar*)'    {i_cal_property_get_parameter_as_string_r}

  [D] 'function gchar* i_cal_property_get_property_name_r(const ICalProperty*)'    {i_cal_property_get_property_name_r}

  [D] 'function gchar* i_cal_property_get_value_as_string_r(const ICalProperty*)'    {i_cal_property_get_value_as_string_r}

  [D] 'function ICalProperty* i_cal_property_new_clone(ICalProperty*)'    {i_cal_property_new_clone}

  [D] 'function ICalPropertyKind i_cal_property_string_to_kind(const gchar*)'    {i_cal_property_string_to_kind}

  [D] 'function ICalPropertyMethod i_cal_property_string_to_method(const gchar*)'    {i_cal_property_string_to_method}

  [D] 'function ICalPropertyStatus i_cal_property_string_to_status(const gchar*)'    {i_cal_property_string_to_status}

  [D] 'function ICalPropertyKind i_cal_property_value_kind_to_kind(ICalValueKind)'    {i_cal_property_value_kind_to_kind}

  [D] 'function const gchar* i_cal_recur_freq_to_string(ICalRecurrenceTypeFrequency)'    {i_cal_recur_freq_to_string}

  [D] 'function const gchar* i_cal_recur_skip_to_string(ICalRecurrenceTypeSkip)'    {i_cal_recur_skip_to_string}

  [D] 'function ICalRecurrenceTypeFrequency i_cal_recur_string_to_freq(const gchar*)'    {i_cal_recur_string_to_freq}

  [D] 'function ICalRecurrenceTypeSkip i_cal_recur_string_to_skip(const gchar*)'    {i_cal_recur_string_to_skip}

  [D] 'function ICalRecurrenceTypeWeekday i_cal_recur_string_to_weekday(const gchar*)'    {i_cal_recur_string_to_weekday}

  [D] 'function const gchar* i_cal_recur_weekday_to_string(ICalRecurrenceTypeWeekday)'    {i_cal_recur_weekday_to_string}

  [D] 'function gchar* i_cal_recurrence_type_as_string_r(ICalRecurrenceType*)'    {i_cal_recurrence_type_as_string_r}

  [D] 'function void i_cal_recurrence_type_clear(ICalRecurrenceType*)'    {i_cal_recurrence_type_clear}

  [D] 'function ICalRecurrenceTypeWeekday i_cal_recurrence_type_day_day_of_week(gshort)'    {i_cal_recurrence_type_day_day_of_week}

  [D] 'function gint i_cal_recurrence_type_day_position(gshort)'    {i_cal_recurrence_type_day_position}

  [D] 'function ICalRecurrenceType* i_cal_recurrence_type_from_string(const gchar*)'    {i_cal_recurrence_type_from_string}

  [D] 'function GArray* i_cal_recurrence_type_get_by_day(ICalRecurrenceType*)'    {i_cal_recurrence_type_get_by_day}

  [D] 'function GArray* i_cal_recurrence_type_get_by_hour(ICalRecurrenceType*)'    {i_cal_recurrence_type_get_by_hour}

  [D] 'function GArray* i_cal_recurrence_type_get_by_minute(ICalRecurrenceType*)'    {i_cal_recurrence_type_get_by_minute}

  [D] 'function GArray* i_cal_recurrence_type_get_by_month(ICalRecurrenceType*)'    {i_cal_recurrence_type_get_by_month}

  [D] 'function GArray* i_cal_recurrence_type_get_by_month_day(ICalRecurrenceType*)'    {i_cal_recurrence_type_get_by_month_day}

  [D] 'function GArray* i_cal_recurrence_type_get_by_second(ICalRecurrenceType*)'    {i_cal_recurrence_type_get_by_second}

  [D] 'function GArray* i_cal_recurrence_type_get_by_set_pos(ICalRecurrenceType*)'    {i_cal_recurrence_type_get_by_set_pos}

  [D] 'function GArray* i_cal_recurrence_type_get_by_week_no(ICalRecurrenceType*)'    {i_cal_recurrence_type_get_by_week_no}

  [D] 'function GArray* i_cal_recurrence_type_get_by_year_day(ICalRecurrenceType*)'    {i_cal_recurrence_type_get_by_year_day}

  [D] 'function gint i_cal_recurrence_type_get_count(ICalRecurrenceType*)'    {i_cal_recurrence_type_get_count}

  [D] 'function ICalRecurrenceTypeFrequency i_cal_recurrence_type_get_freq(ICalRecurrenceType*)'    {i_cal_recurrence_type_get_freq}

  [D] 'function gshort i_cal_recurrence_type_get_interval(ICalRecurrenceType*)'    {i_cal_recurrence_type_get_interval}

  [D] 'function GType i_cal_recurrence_type_get_type()'    {i_cal_recurrence_type_get_type}

  [D] 'function ICalTimetype* i_cal_recurrence_type_get_until(ICalRecurrenceType*)'    {i_cal_recurrence_type_get_until}

  [D] 'function ICalRecurrenceTypeWeekday i_cal_recurrence_type_get_week_start(ICalRecurrenceType*)'    {i_cal_recurrence_type_get_week_start}

  [D] 'function gint i_cal_recurrence_type_month_is_leap(gshort)'    {i_cal_recurrence_type_month_is_leap}

  [D] 'function gint i_cal_recurrence_type_month_month(gshort)'    {i_cal_recurrence_type_month_month}

  [D] 'function gint i_cal_recurrence_type_rscale_is_supported()'    {i_cal_recurrence_type_rscale_is_supported}

  [D] 'function ICalArray* i_cal_recurrence_type_rscale_supported_calendars()'    {i_cal_recurrence_type_rscale_supported_calendars}

  [D] 'function void i_cal_recurrence_type_set_by_day(ICalRecurrenceType*, guint, gshort)'    {i_cal_recurrence_type_set_by_day}

  [D] 'function void i_cal_recurrence_type_set_by_hour(ICalRecurrenceType*, guint, gshort)'    {i_cal_recurrence_type_set_by_hour}

  [D] 'function void i_cal_recurrence_type_set_by_minute(ICalRecurrenceType*, guint, gshort)'    {i_cal_recurrence_type_set_by_minute}

  [D] 'function void i_cal_recurrence_type_set_by_month(ICalRecurrenceType*, guint, gshort)'    {i_cal_recurrence_type_set_by_month}

  [D] 'function void i_cal_recurrence_type_set_by_month_day(ICalRecurrenceType*, guint, gshort)'    {i_cal_recurrence_type_set_by_month_day}

  [D] 'function void i_cal_recurrence_type_set_by_second(ICalRecurrenceType*, guint, gshort)'    {i_cal_recurrence_type_set_by_second}

  [D] 'function void i_cal_recurrence_type_set_by_set_pos(ICalRecurrenceType*, guint, gshort)'    {i_cal_recurrence_type_set_by_set_pos}

  [D] 'function void i_cal_recurrence_type_set_by_week_no(ICalRecurrenceType*, guint, gshort)'    {i_cal_recurrence_type_set_by_week_no}

  [D] 'function void i_cal_recurrence_type_set_by_year_day(ICalRecurrenceType*, guint, gshort)'    {i_cal_recurrence_type_set_by_year_day}

  [D] 'function void i_cal_recurrence_type_set_count(ICalRecurrenceType*, gint)'    {i_cal_recurrence_type_set_count}

  [D] 'function void i_cal_recurrence_type_set_freq(ICalRecurrenceType*, ICalRecurrenceTypeFrequency)'    {i_cal_recurrence_type_set_freq}

  [D] 'function void i_cal_recurrence_type_set_interval(ICalRecurrenceType*, gshort)'    {i_cal_recurrence_type_set_interval}

  [D] 'function void i_cal_recurrence_type_set_until(ICalRecurrenceType*, ICalTimetype*)'    {i_cal_recurrence_type_set_until}

  [D] 'function void i_cal_recurrence_type_set_week_start(ICalRecurrenceType*, ICalRecurrenceTypeWeekday)'    {i_cal_recurrence_type_set_week_start}

  [D] 'function gchar* i_cal_reqstat_type_as_string_r(ICalReqstatType*)'    {i_cal_reqstat_type_as_string_r}

  [D] 'function ICalReqstatType* i_cal_reqstat_type_from_string(const gchar*)'    {i_cal_reqstat_type_from_string}

  [D] 'function ICalRequestStatus i_cal_reqstat_type_get_code(ICalReqstatType*)'    {i_cal_reqstat_type_get_code}

  [D] 'function const gchar* i_cal_reqstat_type_get_debug(ICalReqstatType*)'    {i_cal_reqstat_type_get_debug}

  [D] 'function const gchar* i_cal_reqstat_type_get_desc(ICalReqstatType*)'    {i_cal_reqstat_type_get_desc}

  [D] 'function GType i_cal_reqstat_type_get_type()'    {i_cal_reqstat_type_get_type}

  [D] 'function void i_cal_reqstat_type_set_code(ICalReqstatType*, ICalRequestStatus)'    {i_cal_reqstat_type_set_code}

  [D] 'function gchar* i_cal_time_as_ical_string_r(ICalTimetype*)'    {i_cal_time_as_ical_string_r}

  [D] 'function ICalTimetype* i_cal_time_current_time_with_zone(ICalTimezone*)'    {i_cal_time_current_time_with_zone}

  [D] 'function ICalTimetype* i_cal_time_from_day_of_year(const gint, const gint)'    {i_cal_time_from_day_of_year}

  [D] 'function ICalTimetype* i_cal_time_from_string(const gchar*)'    {i_cal_time_from_string}

  [D] 'function ICalTimetype* i_cal_time_from_timet_with_zone(const time_t, gint, ICalTimezone*)'    {i_cal_time_from_timet_with_zone}

  [D] 'function ICalTimetype* i_cal_time_null_date()'    {i_cal_time_null_date}

  [D] 'function ICalTimetype* i_cal_time_null_time()'    {i_cal_time_null_time}

  [D] 'function gint i_cal_time_span_is_busy(ICalTimeSpan*)'    {i_cal_time_span_is_busy}

  [D] 'function void i_cal_time_tiemzone_expand_vtimezone(ICalComponent*, gint, ICalArray*)'    {i_cal_time_tiemzone_expand_vtimezone}

  [D] 'function ICalTimetype* i_cal_time_today()'    {i_cal_time_today}

  [D] 'function gint i_cal_timetype_get_day(ICalTimetype*)'    {i_cal_timetype_get_day}

  [D] 'function gint i_cal_timetype_get_hour(ICalTimetype*)'    {i_cal_timetype_get_hour}

  [D] 'function gint i_cal_timetype_get_minute(ICalTimetype*)'    {i_cal_timetype_get_minute}

  [D] 'function gint i_cal_timetype_get_month(ICalTimetype*)'    {i_cal_timetype_get_month}

  [D] 'function gint i_cal_timetype_get_second(ICalTimetype*)'    {i_cal_timetype_get_second}

  [D] 'function GType i_cal_timetype_get_type()'    {i_cal_timetype_get_type}

  [D] 'function gint i_cal_timetype_get_year(ICalTimetype*)'    {i_cal_timetype_get_year}

  [D] 'function const ICalTimezone* i_cal_timetype_get_zone(ICalTimetype*)'    {i_cal_timetype_get_zone}

  [D] 'function gint i_cal_timetype_is_date(ICalTimetype*)'    {i_cal_timetype_is_date}

  [D] 'function gint i_cal_timetype_is_daylight(ICalTimetype*)'    {i_cal_timetype_is_daylight}

  [D] 'function gint i_cal_timetype_is_utc(ICalTimetype*)'    {i_cal_timetype_is_utc}

  [D] 'function ICalTimetype* i_cal_timetype_new()'    {i_cal_timetype_new}

  [D] 'function void i_cal_timetype_set_day(ICalTimetype*, gint)'    {i_cal_timetype_set_day}

  [D] 'function void i_cal_timetype_set_hour(ICalTimetype*, gint)'    {i_cal_timetype_set_hour}

  [D] 'function void i_cal_timetype_set_is_date(ICalTimetype*, gint)'    {i_cal_timetype_set_is_date}

  [D] 'function void i_cal_timetype_set_is_daylight(ICalTimetype*, gint)'    {i_cal_timetype_set_is_daylight}

  [D] 'function void i_cal_timetype_set_minute(ICalTimetype*, gint)'    {i_cal_timetype_set_minute}

  [D] 'function void i_cal_timetype_set_month(ICalTimetype*, gint)'    {i_cal_timetype_set_month}

  [D] 'function void i_cal_timetype_set_second(ICalTimetype*, gint)'    {i_cal_timetype_set_second}

  [D] 'function void i_cal_timetype_set_year(ICalTimetype*, gint)'    {i_cal_timetype_set_year}

  [D] 'function void i_cal_timezone_convert_time(ICalTimetype*, ICalTimezone*, ICalTimezone*)'    {i_cal_timezone_convert_time}

  [D] 'function const gchar* i_cal_timezone_phase_get_comment(ICalTimezonePhase*)'    {i_cal_timezone_phase_get_comment}

  [D] 'function ICalTimetype* i_cal_timezone_phase_get_dtstart(ICalTimezonePhase*)'    {i_cal_timezone_phase_get_dtstart}

  [D] 'function gint i_cal_timezone_phase_get_offsetto(ICalTimezonePhase*)'    {i_cal_timezone_phase_get_offsetto}

  [D] 'function ICalDatetimeperiodType* i_cal_timezone_phase_get_rdate(ICalTimezonePhase*)'    {i_cal_timezone_phase_get_rdate}

  [D] 'function const gchar* i_cal_timezone_phase_get_rrule(ICalTimezonePhase*)'    {i_cal_timezone_phase_get_rrule}

  [D] 'function GType i_cal_timezone_phase_get_type()'    {i_cal_timezone_phase_get_type}

  [D] 'function const gchar* i_cal_timezone_phase_get_tzname(ICalTimezonePhase*)'    {i_cal_timezone_phase_get_tzname}

  [D] 'function gint i_cal_timezone_phase_get_tzoffsetfrom(ICalTimezonePhase*)'    {i_cal_timezone_phase_get_tzoffsetfrom}

  [D] 'function gint i_cal_timezone_phase_is_stdandard(ICalTimezonePhase*)'    {i_cal_timezone_phase_is_stdandard}

  [D] 'function void i_cal_timezone_phase_set_dtstart(ICalTimezonePhase*, ICalTimetype*)'    {i_cal_timezone_phase_set_dtstart}

  [D] 'function void i_cal_timezone_phase_set_is_stdandard(ICalTimezonePhase*, gint)'    {i_cal_timezone_phase_set_is_stdandard}

  [D] 'function void i_cal_timezone_phase_set_offsetto(ICalTimezonePhase*, gint)'    {i_cal_timezone_phase_set_offsetto}

  [D] 'function void i_cal_timezone_phase_set_rdate(ICalTimezonePhase*, ICalDatetimeperiodType*)'    {i_cal_timezone_phase_set_rdate}

  [D] 'function void i_cal_timezone_phase_set_tzoffsetfrom(ICalTimezonePhase*, gint)'    {i_cal_timezone_phase_set_tzoffsetfrom}

  [D] 'function ICalTimetype* i_cal_timezonetype_get_last_mod(ICalTimezonetype*)'    {i_cal_timezonetype_get_last_mod}

  [D] 'function GType i_cal_timezonetype_get_type()'    {i_cal_timezonetype_get_type}

  [D] 'function const gchar* i_cal_timezonetype_get_tzid(ICalTimezonetype*)'    {i_cal_timezonetype_get_tzid}

  [D] 'function const gchar* i_cal_timezonetype_get_tzurl(ICalTimezonetype*)'    {i_cal_timezonetype_get_tzurl}

  [D] 'function void i_cal_timezonetype_set_last_mod(ICalTimezonetype*, ICalTimetype*)'    {i_cal_timezonetype_set_last_mod}

  [D] 'function ICalTriggerType* i_cal_trigger_type_from_int(const gint)'    {i_cal_trigger_type_from_int}

  [D] 'function ICalTriggerType* i_cal_trigger_type_from_string(const gchar*)'    {i_cal_trigger_type_from_string}

  [D] 'function ICalDurationType* i_cal_trigger_type_get_duration(ICalTriggerType*)'    {i_cal_trigger_type_get_duration}

  [D] 'function ICalTimetype* i_cal_trigger_type_get_time(ICalTriggerType*)'    {i_cal_trigger_type_get_time}

  [D] 'function GType i_cal_trigger_type_get_type()'    {i_cal_trigger_type_get_type}

  [D] 'function gint i_cal_trigger_type_is_bad_trigger(ICalTriggerType*)'    {i_cal_trigger_type_is_bad_trigger}

  [D] 'function gint i_cal_trigger_type_is_null_trigger(ICalTriggerType*)'    {i_cal_trigger_type_is_null_trigger}

  [D] 'function void i_cal_trigger_type_set_duration(ICalTriggerType*, ICalDurationType*)'    {i_cal_trigger_type_set_duration}

  [D] 'function void i_cal_trigger_type_set_time(ICalTriggerType*, ICalTimetype*)'    {i_cal_trigger_type_set_time}

  [D] 'function gchar* i_cal_value_as_ical_string_r(const ICalValue*)'    {i_cal_value_as_ical_string_r}

  [D] 'function ICalValue* i_cal_value_new_clone(const ICalValue*)'    {i_cal_value_new_clone}

  [D] 'function ICalValueKind i_cal_value_string_to_kind(const gchar*)'    {i_cal_value_string_to_kind}



199 Added functions:



  [A] 'function ICalAttach* i_cal_attach_new_from_bytes(GBytes*)'    {i_cal_attach_new_from_bytes}

  [A] 'function gchar* i_cal_component_as_ical_string(ICalComponent*)'    {i_cal_component_as_ical_string}

  [A] 'function ICalComponent* i_cal_component_clone(ICalComponent*)'    {i_cal_component_clone}

  [A] 'function void i_cal_component_foreach_recurrence(ICalComponent*, ICalTime*, ICalTime*, ICalComponentForeachRecurrenceFunc, gpointer)'    {i_cal_component_foreach_recurrence}

  [A] 'function ICalComponent* i_cal_component_get_parent(ICalComponent*)'    {i_cal_component_get_parent}

  [A] 'function ICalComponentKind i_cal_component_kind_from_string(const gchar*)'    {i_cal_component_kind_from_string}

  [A] 'function void i_cal_component_set_parent(ICalComponent*, ICalComponent*)'    {i_cal_component_set_parent}

  [A] 'function void i_cal_component_take_component(ICalComponent*, ICalComponent*)'    {i_cal_component_take_component}

  [A] 'function void i_cal_component_take_property(ICalComponent*, ICalProperty*)'    {i_cal_component_take_property}

  [A] 'function ICalPeriod* i_cal_datetimeperiod_get_period(ICalDatetimeperiod*)'    {i_cal_datetimeperiod_get_period}

  [A] 'function ICalTime* i_cal_datetimeperiod_get_time(ICalDatetimeperiod*)'    {i_cal_datetimeperiod_get_time}

  [A] 'function GType i_cal_datetimeperiod_get_type()'    {i_cal_datetimeperiod_get_type}

  [A] 'function ICalDatetimeperiod* i_cal_datetimeperiod_new()'    {i_cal_datetimeperiod_new}

  [A] 'function void i_cal_datetimeperiod_set_period(ICalDatetimeperiod*, ICalPeriod*)'    {i_cal_datetimeperiod_set_period}

  [A] 'function void i_cal_datetimeperiod_set_time(ICalDatetimeperiod*, ICalTime*)'    {i_cal_datetimeperiod_set_time}

  [A] 'function gchar* i_cal_duration_as_ical_string(ICalDuration*)'    {i_cal_duration_as_ical_string}

  [A] 'function gint i_cal_duration_as_int(ICalDuration*)'    {i_cal_duration_as_int}

  [A] 'function guint i_cal_duration_get_days(ICalDuration*)'    {i_cal_duration_get_days}

  [A] 'function guint i_cal_duration_get_hours(ICalDuration*)'    {i_cal_duration_get_hours}

  [A] 'function guint i_cal_duration_get_minutes(ICalDuration*)'    {i_cal_duration_get_minutes}

  [A] 'function guint i_cal_duration_get_seconds(ICalDuration*)'    {i_cal_duration_get_seconds}

  [A] 'function GType i_cal_duration_get_type()'    {i_cal_duration_get_type}

  [A] 'function guint i_cal_duration_get_weeks(ICalDuration*)'    {i_cal_duration_get_weeks}

  [A] 'function gboolean i_cal_duration_is_bad_duration(ICalDuration*)'    {i_cal_duration_is_bad_duration}

  [A] 'function gboolean i_cal_duration_is_neg(ICalDuration*)'    {i_cal_duration_is_neg}

  [A] 'function gboolean i_cal_duration_is_null_duration(ICalDuration*)'    {i_cal_duration_is_null_duration}

  [A] 'function ICalDuration* i_cal_duration_new_bad_duration()'    {i_cal_duration_new_bad_duration}

  [A] 'function ICalDuration* i_cal_duration_new_from_int(gint)'    {i_cal_duration_new_from_int}

  [A] 'function ICalDuration* i_cal_duration_new_from_string(const gchar*)'    {i_cal_duration_new_from_string}

  [A] 'function ICalDuration* i_cal_duration_new_null_duration()'    {i_cal_duration_new_null_duration}

  [A] 'function void i_cal_duration_set_days(ICalDuration*, guint)'    {i_cal_duration_set_days}

  [A] 'function void i_cal_duration_set_hours(ICalDuration*, guint)'    {i_cal_duration_set_hours}

  [A] 'function void i_cal_duration_set_is_neg(ICalDuration*, gboolean)'    {i_cal_duration_set_is_neg}

  [A] 'function void i_cal_duration_set_minutes(ICalDuration*, guint)'    {i_cal_duration_set_minutes}

  [A] 'function void i_cal_duration_set_seconds(ICalDuration*, guint)'    {i_cal_duration_set_seconds}

  [A] 'function void i_cal_duration_set_weeks(ICalDuration*, guint)'    {i_cal_duration_set_weeks}

  [A] 'function ICalGeo* i_cal_geo_clone(const ICalGeo*)'    {i_cal_geo_clone}

  [A] 'function gdouble i_cal_geo_get_lat(ICalGeo*)'    {i_cal_geo_get_lat}

  [A] 'function gdouble i_cal_geo_get_lon(ICalGeo*)'    {i_cal_geo_get_lon}

  [A] 'function GType i_cal_geo_get_type()'    {i_cal_geo_get_type}

  [A] 'function ICalGeo* i_cal_geo_new(gdouble, gdouble)'    {i_cal_geo_new}

  [A] 'function void i_cal_geo_set_lat(ICalGeo*, gdouble)'    {i_cal_geo_set_lat}

  [A] 'function void i_cal_geo_set_lon(ICalGeo*, gdouble)'    {i_cal_geo_set_lon}

  [A] 'function void i_cal_object_free_global_objects()'    {i_cal_object_free_global_objects}

  [A] 'function gchar* i_cal_parameter_as_ical_string(ICalParameter*)'    {i_cal_parameter_as_ical_string}

  [A] 'function ICalParameter* i_cal_parameter_clone(ICalParameter*)'    {i_cal_parameter_clone}

  [A] 'function ICalParameterKind i_cal_parameter_kind_from_string(const gchar*)'    {i_cal_parameter_kind_from_string}

  [A] 'function gchar* i_cal_period_as_ical_string(ICalPeriod*)'    {i_cal_period_as_ical_string}

  [A] 'function ICalDuration* i_cal_period_get_duration(ICalPeriod*)'    {i_cal_period_get_duration}

  [A] 'function ICalTime* i_cal_period_get_end(ICalPeriod*)'    {i_cal_period_get_end}

  [A] 'function ICalTime* i_cal_period_get_start(ICalPeriod*)'    {i_cal_period_get_start}

  [A] 'function GType i_cal_period_get_type()'    {i_cal_period_get_type}

  [A] 'function gboolean i_cal_period_is_null_period(ICalPeriod*)'    {i_cal_period_is_null_period}

  [A] 'function gboolean i_cal_period_is_valid_period(ICalPeriod*)'    {i_cal_period_is_valid_period}

  [A] 'function ICalPeriod* i_cal_period_new_from_string(const gchar*)'    {i_cal_period_new_from_string}

  [A] 'function ICalPeriod* i_cal_period_new_null_period()'    {i_cal_period_new_null_period}

  [A] 'function void i_cal_period_set_duration(ICalPeriod*, ICalDuration*)'    {i_cal_period_set_duration}

  [A] 'function void i_cal_period_set_end(ICalPeriod*, ICalTime*)'    {i_cal_period_set_end}

  [A] 'function void i_cal_period_set_start(ICalPeriod*, ICalTime*)'    {i_cal_period_set_start}

  [A] 'function gchar* i_cal_property_as_ical_string(ICalProperty*)'    {i_cal_property_as_ical_string}

  [A] 'function ICalProperty* i_cal_property_clone(ICalProperty*)'    {i_cal_property_clone}

  [A] 'function gchar* i_cal_property_enum_to_string(gint)'    {i_cal_property_enum_to_string}

  [A] 'function const gchar* i_cal_property_get_color(ICalProperty*)'    {i_cal_property_get_color}

  [A] 'function ICalTime* i_cal_property_get_datetime_with_component(ICalProperty*, ICalComponent*)'    {i_cal_property_get_datetime_with_component}

  [A] 'function gchar* i_cal_property_get_parameter_as_string(ICalProperty*, const gchar*)'    {i_cal_property_get_parameter_as_string}

  [A] 'function gchar* i_cal_property_get_property_name(const ICalProperty*)'    {i_cal_property_get_property_name}

  [A] 'function gchar* i_cal_property_get_value_as_string(const ICalProperty*)'    {i_cal_property_get_value_as_string}

  [A] 'function ICalPropertyKind i_cal_property_kind_from_string(const gchar*)'    {i_cal_property_kind_from_string}

  [A] 'function gint i_cal_property_kind_has_property(ICalPropertyKind, gint)'    {i_cal_property_kind_has_property}

  [A] 'function ICalPropertyMethod i_cal_property_method_from_string(const gchar*)'    {i_cal_property_method_from_string}

  [A] 'function ICalProperty* i_cal_property_new_color(const gchar*)'    {i_cal_property_new_color}

  [A] 'function void i_cal_property_set_color(ICalProperty*, const gchar*)'    {i_cal_property_set_color}

  [A] 'function ICalPropertyStatus i_cal_property_status_from_string(const gchar*)'    {i_cal_property_status_from_string}

  [A] 'function void i_cal_property_take_parameter(ICalProperty*, ICalParameter*)'    {i_cal_property_take_parameter}

  [A] 'function void i_cal_property_take_value(ICalProperty*, ICalValue*)'    {i_cal_property_take_value}

  [A] 'function void i_cal_recurrence_clear(ICalRecurrence*)'    {i_cal_recurrence_clear}

  [A] 'function ICalRecurrenceWeekday i_cal_recurrence_day_day_of_week(gshort)'    {i_cal_recurrence_day_day_of_week}

  [A] 'function gint i_cal_recurrence_day_position(gshort)'    {i_cal_recurrence_day_position}

  [A] 'function ICalRecurrenceFrequency i_cal_recurrence_frequency_from_string(const gchar*)'    {i_cal_recurrence_frequency_from_string}

  [A] 'function const gchar* i_cal_recurrence_frequency_to_string(ICalRecurrenceFrequency)'    {i_cal_recurrence_frequency_to_string}

  [A] 'function gshort i_cal_recurrence_get_by_day(ICalRecurrence*, guint)'    {i_cal_recurrence_get_by_day}

  [A] 'function GArray* i_cal_recurrence_get_by_day_array(ICalRecurrence*)'    {i_cal_recurrence_get_by_day_array}

  [A] 'function gshort i_cal_recurrence_get_by_hour(ICalRecurrence*, guint)'    {i_cal_recurrence_get_by_hour}

  [A] 'function GArray* i_cal_recurrence_get_by_hour_array(ICalRecurrence*)'    {i_cal_recurrence_get_by_hour_array}

  [A] 'function gshort i_cal_recurrence_get_by_minute(ICalRecurrence*, guint)'    {i_cal_recurrence_get_by_minute}

  [A] 'function GArray* i_cal_recurrence_get_by_minute_array(ICalRecurrence*)'    {i_cal_recurrence_get_by_minute_array}

  [A] 'function gshort i_cal_recurrence_get_by_month(ICalRecurrence*, guint)'    {i_cal_recurrence_get_by_month}

  [A] 'function GArray* i_cal_recurrence_get_by_month_array(ICalRecurrence*)'    {i_cal_recurrence_get_by_month_array}

  [A] 'function gshort i_cal_recurrence_get_by_month_day(ICalRecurrence*, guint)'    {i_cal_recurrence_get_by_month_day}

  [A] 'function GArray* i_cal_recurrence_get_by_month_day_array(ICalRecurrence*)'    {i_cal_recurrence_get_by_month_day_array}

  [A] 'function gshort i_cal_recurrence_get_by_second(ICalRecurrence*, guint)'    {i_cal_recurrence_get_by_second}

  [A] 'function GArray* i_cal_recurrence_get_by_second_array(ICalRecurrence*)'    {i_cal_recurrence_get_by_second_array}

  [A] 'function gshort i_cal_recurrence_get_by_set_pos(ICalRecurrence*, guint)'    {i_cal_recurrence_get_by_set_pos}

  [A] 'function GArray* i_cal_recurrence_get_by_set_pos_array(ICalRecurrence*)'    {i_cal_recurrence_get_by_set_pos_array}

  [A] 'function gshort i_cal_recurrence_get_by_week_no(ICalRecurrence*, guint)'    {i_cal_recurrence_get_by_week_no}

  [A] 'function GArray* i_cal_recurrence_get_by_week_no_array(ICalRecurrence*)'    {i_cal_recurrence_get_by_week_no_array}

  [A] 'function gshort i_cal_recurrence_get_by_year_day(ICalRecurrence*, guint)'    {i_cal_recurrence_get_by_year_day}

  [A] 'function GArray* i_cal_recurrence_get_by_year_day_array(ICalRecurrence*)'    {i_cal_recurrence_get_by_year_day_array}

  [A] 'function gint i_cal_recurrence_get_count(ICalRecurrence*)'    {i_cal_recurrence_get_count}

  [A] 'function ICalRecurrenceFrequency i_cal_recurrence_get_freq(ICalRecurrence*)'    {i_cal_recurrence_get_freq}

  [A] 'function gshort i_cal_recurrence_get_interval(ICalRecurrence*)'    {i_cal_recurrence_get_interval}

  [A] 'function GType i_cal_recurrence_get_type()'    {i_cal_recurrence_get_type}

  [A] 'function ICalTime* i_cal_recurrence_get_until(ICalRecurrence*)'    {i_cal_recurrence_get_until}

  [A] 'function ICalRecurrenceWeekday i_cal_recurrence_get_week_start(ICalRecurrence*)'    {i_cal_recurrence_get_week_start}

  [A] 'function gboolean i_cal_recurrence_month_is_leap(gshort)'    {i_cal_recurrence_month_is_leap}

  [A] 'function gint i_cal_recurrence_month_month(gshort)'    {i_cal_recurrence_month_month}

  [A] 'function ICalRecurrence* i_cal_recurrence_new()'    {i_cal_recurrence_new}

  [A] 'function ICalRecurrence* i_cal_recurrence_new_from_string(const gchar*)'    {i_cal_recurrence_new_from_string}

  [A] 'function gboolean i_cal_recurrence_rscale_is_supported()'    {i_cal_recurrence_rscale_is_supported}

  [A] 'function ICalArray* i_cal_recurrence_rscale_supported_calendars()'    {i_cal_recurrence_rscale_supported_calendars}

  [A] 'function void i_cal_recurrence_set_by_day(ICalRecurrence*, guint, gshort)'    {i_cal_recurrence_set_by_day}

  [A] 'function void i_cal_recurrence_set_by_day_array(ICalRecurrence*, GArray*)'    {i_cal_recurrence_set_by_day_array}

  [A] 'function void i_cal_recurrence_set_by_hour(ICalRecurrence*, guint, gshort)'    {i_cal_recurrence_set_by_hour}

  [A] 'function void i_cal_recurrence_set_by_hour_array(ICalRecurrence*, GArray*)'    {i_cal_recurrence_set_by_hour_array}

  [A] 'function void i_cal_recurrence_set_by_minute(ICalRecurrence*, guint, gshort)'    {i_cal_recurrence_set_by_minute}

  [A] 'function void i_cal_recurrence_set_by_minute_array(ICalRecurrence*, GArray*)'    {i_cal_recurrence_set_by_minute_array}

  [A] 'function void i_cal_recurrence_set_by_month(ICalRecurrence*, guint, gshort)'    {i_cal_recurrence_set_by_month}

  [A] 'function void i_cal_recurrence_set_by_month_array(ICalRecurrence*, GArray*)'    {i_cal_recurrence_set_by_month_array}

  [A] 'function void i_cal_recurrence_set_by_month_day(ICalRecurrence*, guint, gshort)'    {i_cal_recurrence_set_by_month_day}

  [A] 'function void i_cal_recurrence_set_by_month_day_array(ICalRecurrence*, GArray*)'    {i_cal_recurrence_set_by_month_day_array}

  [A] 'function void i_cal_recurrence_set_by_second(ICalRecurrence*, guint, gshort)'    {i_cal_recurrence_set_by_second}

  [A] 'function void i_cal_recurrence_set_by_second_array(ICalRecurrence*, GArray*)'    {i_cal_recurrence_set_by_second_array}

  [A] 'function void i_cal_recurrence_set_by_set_pos(ICalRecurrence*, guint, gshort)'    {i_cal_recurrence_set_by_set_pos}

  [A] 'function void i_cal_recurrence_set_by_set_pos_array(ICalRecurrence*, GArray*)'    {i_cal_recurrence_set_by_set_pos_array}

  [A] 'function void i_cal_recurrence_set_by_week_no(ICalRecurrence*, guint, gshort)'    {i_cal_recurrence_set_by_week_no}

  [A] 'function void i_cal_recurrence_set_by_week_no_array(ICalRecurrence*, GArray*)'    {i_cal_recurrence_set_by_week_no_array}

  [A] 'function void i_cal_recurrence_set_by_year_day(ICalRecurrence*, guint, gshort)'    {i_cal_recurrence_set_by_year_day}

  [A] 'function void i_cal_recurrence_set_by_year_day_array(ICalRecurrence*, GArray*)'    {i_cal_recurrence_set_by_year_day_array}

  [A] 'function void i_cal_recurrence_set_count(ICalRecurrence*, gint)'    {i_cal_recurrence_set_count}

  [A] 'function void i_cal_recurrence_set_freq(ICalRecurrence*, ICalRecurrenceFrequency)'    {i_cal_recurrence_set_freq}

  [A] 'function void i_cal_recurrence_set_interval(ICalRecurrence*, gshort)'    {i_cal_recurrence_set_interval}

  [A] 'function void i_cal_recurrence_set_until(ICalRecurrence*, ICalTime*)'    {i_cal_recurrence_set_until}

  [A] 'function void i_cal_recurrence_set_week_start(ICalRecurrence*, ICalRecurrenceWeekday)'    {i_cal_recurrence_set_week_start}

  [A] 'function ICalRecurrenceSkip i_cal_recurrence_skip_from_string(const gchar*)'    {i_cal_recurrence_skip_from_string}

  [A] 'function const gchar* i_cal_recurrence_skip_to_string(ICalRecurrenceSkip)'    {i_cal_recurrence_skip_to_string}

  [A] 'function gchar* i_cal_recurrence_to_string(ICalRecurrence*)'    {i_cal_recurrence_to_string}

  [A] 'function ICalRecurrenceWeekday i_cal_recurrence_weekday_from_string(const gchar*)'    {i_cal_recurrence_weekday_from_string}

  [A] 'function const gchar* i_cal_recurrence_weekday_to_string(ICalRecurrenceWeekday)'    {i_cal_recurrence_weekday_to_string}

  [A] 'function ICalRequestStatus i_cal_reqstat_get_code(ICalReqstat*)'    {i_cal_reqstat_get_code}

  [A] 'function const gchar* i_cal_reqstat_get_debug(const ICalReqstat*)'    {i_cal_reqstat_get_debug}

  [A] 'function const gchar* i_cal_reqstat_get_desc(const ICalReqstat*)'    {i_cal_reqstat_get_desc}

  [A] 'function GType i_cal_reqstat_get_type()'    {i_cal_reqstat_get_type}

  [A] 'function ICalReqstat* i_cal_reqstat_new_from_string(const gchar*)'    {i_cal_reqstat_new_from_string}

  [A] 'function void i_cal_reqstat_set_code(ICalReqstat*, ICalRequestStatus)'    {i_cal_reqstat_set_code}

  [A] 'function gchar* i_cal_reqstat_to_string(ICalReqstat*)'    {i_cal_reqstat_to_string}

  [A] 'function gchar* i_cal_request_status_code(ICalRequestStatus)'    {i_cal_request_status_code}

  [A] 'function const gchar* i_cal_request_status_desc(ICalRequestStatus)'    {i_cal_request_status_desc}

  [A] 'function ICalRequestStatus i_cal_request_status_from_num(gshort, gshort)'    {i_cal_request_status_from_num}

  [A] 'function gshort i_cal_request_status_major(ICalRequestStatus)'    {i_cal_request_status_major}

  [A] 'function gshort i_cal_request_status_minor(ICalRequestStatus)'    {i_cal_request_status_minor}

  [A] 'function gchar* i_cal_time_as_ical_string(const ICalTime*)'    {i_cal_time_as_ical_string}

  [A] 'function ICalTime* i_cal_time_clone(const ICalTime*)'    {i_cal_time_clone}

  [A] 'function void i_cal_time_convert_timezone(ICalTime*, ICalTimezone*, ICalTimezone*)'    {i_cal_time_convert_timezone}

  [A] 'function void i_cal_time_convert_to_zone_inplace(ICalTime*, ICalTimezone*)'    {i_cal_time_convert_to_zone_inplace}

  [A] 'function void i_cal_time_get_date(const ICalTime*, gint*, gint*, gint*)'    {i_cal_time_get_date}

  [A] 'function gint i_cal_time_get_day(const ICalTime*)'    {i_cal_time_get_day}

  [A] 'function gint i_cal_time_get_hour(const ICalTime*)'    {i_cal_time_get_hour}

  [A] 'function gint i_cal_time_get_minute(const ICalTime*)'    {i_cal_time_get_minute}

  [A] 'function gint i_cal_time_get_month(const ICalTime*)'    {i_cal_time_get_month}

  [A] 'function gint i_cal_time_get_second(const ICalTime*)'    {i_cal_time_get_second}

  [A] 'function void i_cal_time_get_time(const ICalTime*, gint*, gint*, gint*)'    {i_cal_time_get_time}

  [A] 'function GType i_cal_time_get_type()'    {i_cal_time_get_type}

  [A] 'function gint i_cal_time_get_year(const ICalTime*)'    {i_cal_time_get_year}

  [A] 'function gboolean i_cal_time_is_daylight(const ICalTime*)'    {i_cal_time_is_daylight}

  [A] 'function ICalTime* i_cal_time_new()'    {i_cal_time_new}

  [A] 'function ICalTime* i_cal_time_new_current_with_zone(ICalTimezone*)'    {i_cal_time_new_current_with_zone}

  [A] 'function ICalTime* i_cal_time_new_from_day_of_year(const gint, const gint)'    {i_cal_time_new_from_day_of_year}

  [A] 'function ICalTime* i_cal_time_new_from_string(const gchar*)'    {i_cal_time_new_from_string}

  [A] 'function ICalTime* i_cal_time_new_from_timet_with_zone(const time_t, gint, ICalTimezone*)'    {i_cal_time_new_from_timet_with_zone}

  [A] 'function ICalTime* i_cal_time_new_null_date()'    {i_cal_time_new_null_date}

  [A] 'function ICalTime* i_cal_time_new_today()'    {i_cal_time_new_today}

  [A] 'function void i_cal_time_normalize_inplace(ICalTime*)'    {i_cal_time_normalize_inplace}

  [A] 'function void i_cal_time_set_date(ICalTime*, gint, gint, gint)'    {i_cal_time_set_date}

  [A] 'function void i_cal_time_set_day(ICalTime*, gint)'    {i_cal_time_set_day}

  [A] 'function void i_cal_time_set_hour(ICalTime*, gint)'    {i_cal_time_set_hour}

  [A] 'function void i_cal_time_set_is_date(ICalTime*, gboolean)'    {i_cal_time_set_is_date}

  [A] 'function void i_cal_time_set_is_daylight(ICalTime*, gboolean)'    {i_cal_time_set_is_daylight}

  [A] 'function void i_cal_time_set_minute(ICalTime*, gint)'    {i_cal_time_set_minute}

  [A] 'function void i_cal_time_set_month(ICalTime*, gint)'    {i_cal_time_set_month}

  [A] 'function void i_cal_time_set_second(ICalTime*, gint)'    {i_cal_time_set_second}

  [A] 'function void i_cal_time_set_time(ICalTime*, gint, gint, gint)'    {i_cal_time_set_time}

  [A] 'function void i_cal_time_set_year(ICalTime*, gint)'    {i_cal_time_set_year}

  [A] 'function ICalTimeSpan* i_cal_time_span_clone(const ICalTimeSpan*)'    {i_cal_time_span_clone}

  [A] 'function gboolean i_cal_time_span_get_is_busy(ICalTimeSpan*)'    {i_cal_time_span_get_is_busy}

  [A] 'function ICalTimeSpan* i_cal_time_span_new_timet(time_t, time_t, gboolean)'    {i_cal_time_span_new_timet}

  [A] 'function void i_cal_time_timezone_expand_vtimezone(ICalComponent*, gint, ICalArray*)'    {i_cal_time_timezone_expand_vtimezone}

  [A] 'function ICalDuration* i_cal_trigger_get_duration(ICalTrigger*)'    {i_cal_trigger_get_duration}

  [A] 'function ICalTime* i_cal_trigger_get_time(ICalTrigger*)'    {i_cal_trigger_get_time}

  [A] 'function GType i_cal_trigger_get_type()'    {i_cal_trigger_get_type}

  [A] 'function gboolean i_cal_trigger_is_bad_trigger(ICalTrigger*)'    {i_cal_trigger_is_bad_trigger}

  [A] 'function gboolean i_cal_trigger_is_null_trigger(ICalTrigger*)'    {i_cal_trigger_is_null_trigger}

  [A] 'function ICalTrigger* i_cal_trigger_new_from_int(const gint)'    {i_cal_trigger_new_from_int}

  [A] 'function ICalTrigger* i_cal_trigger_new_from_string(const gchar*)'    {i_cal_trigger_new_from_string}

  [A] 'function void i_cal_trigger_set_duration(ICalTrigger*, ICalDuration*)'    {i_cal_trigger_set_duration}

  [A] 'function void i_cal_trigger_set_time(ICalTrigger*, ICalTime*)'    {i_cal_trigger_set_time}

  [A] 'function gchar* i_cal_value_as_ical_string(const ICalValue*)'    {i_cal_value_as_ical_string}

  [A] 'function ICalValue* i_cal_value_clone(const ICalValue*)'    {i_cal_value_clone}

  [A] 'function ICalValueKind i_cal_value_kind_from_string(const gchar*)'    {i_cal_value_kind_from_string}

  [A] 'function ICalPropertyKind i_cal_value_kind_to_property_kind(ICalValueKind)'    {i_cal_value_kind_to_property_kind}



137 functions with some indirect sub-type change:



  [C]'function guchar* i_cal_attach_get_data(ICalAttach*)' at i-cal-attach.c:224:1 has some indirect sub-type changes:

    return type changed:

      in pointed to type 'typedef guchar':

        entity changed from 'typedef guchar' to 'const gchar'

        type size hasn't changed



  [C]'function ICalTimetype* i_cal_component_get_dtend(ICalComponent*)' at i-cal-component.c:1065:1 has some indirect sub-type changes:

    return type changed:

      in pointed to type 'typedef ICalTimetype' at i-cal-forward-declarations.h:44:1:

        typedef name changed from ICalTimetype to ICalTime at i-cal-forward-declarations.h:44:1

        underlying type 'struct _ICalTimetype' at i-cal-timetype.h:63:1 changed:

          type name changed from '_ICalTimetype' to '_ICalTime'

          type size hasn't changed



          no data member change (1 filtered);



  [C]'function ICalTimetype* i_cal_component_get_dtstamp(ICalComponent*)' at i-cal-component.c:1220:1 has some indirect sub-type changes:



  [C]'function ICalTimetype* i_cal_component_get_dtstart(ICalComponent*)' at i-cal-component.c:1026:1 has some indirect sub-type changes:



  [C]'function ICalTimetype* i_cal_component_get_due(ICalComponent*)' at i-cal-component.c:1104:1 has some indirect sub-type changes:



  [C]'function ICalDurationType* i_cal_component_get_duration(ICalComponent*)' at i-cal-component.c:1143:1 has some indirect sub-type changes:

    return type changed:

      in pointed to type 'typedef ICalDurationType' at i-cal-forward-declarations.h:35:1:

        typedef name changed from ICalDurationType to ICalDuration at i-cal-forward-declarations.h:35:1

        underlying type 'struct _ICalDurationType' at i-cal-duration-type.h:63:1 changed:

          type name changed from '_ICalDurationType' to '_ICalDuration'

          type size hasn't changed



          no data member change (1 filtered);



  [C]'function ICalTimetype* i_cal_component_get_recurrenceid(ICalComponent*)' at i-cal-component.c:1415:1 has some indirect sub-type changes:



  [C]'function void i_cal_component_set_dtend(ICalComponent*, ICalTimetype*)' at i-cal-component.c:1044:1 has some indirect sub-type changes:

    parameter 2 of type 'ICalTimetype*' changed:

      pointed to type 'typedef ICalTimetype' changed at i-cal-forward-declarations.h:45:1, as reported earlier



  [C]'function void i_cal_component_set_dtstamp(ICalComponent*, ICalTimetype*)' at i-cal-component.c:1199:1 has some indirect sub-type changes:



  [C]'function void i_cal_component_set_dtstart(ICalComponent*, ICalTimetype*)' at i-cal-component.c:1005:1 has some indirect sub-type changes:



  [C]'function void i_cal_component_set_due(ICalComponent*, ICalTimetype*)' at i-cal-component.c:1083:1 has some indirect sub-type changes:



  [C]'function void i_cal_component_set_duration(ICalComponent*, ICalDurationType*)' at i-cal-component.c:1122:1 has some indirect sub-type changes:

    parameter 2 of type 'ICalDurationType*' changed:

      pointed to type 'typedef ICalDurationType' changed at i-cal-forward-declarations.h:35:1, as reported earlier



  [C]'function void i_cal_component_set_recurrenceid(ICalComponent*, ICalTimetype*)' at i-cal-component.c:1394:1 has some indirect sub-type changes:



  [C]'function void i_cal_object_construct(ICalObject*, gpointer, GDestroyNotify, gboolean, GObject*)' at i-cal-object.c:320:1 has some indirect sub-type changes:

    return type changed:

      entity changed from 'void' to 'typedef gpointer' at gtypes.h:103:1

      type size changed from 0 to 64 (in bits)

    parameter 1 of type 'ICalObject*' changed:

      entity changed from 'ICalObject*' to 'typedef GType' at gtype.h:384:1

      type size hasn't changed



  [C]'function gchar* i_cal_parser_get_line(ICalParser*, gchar* (gchar*, typedef size_t, void*)*)' at i-cal-parser.c:220:1 has some indirect sub-type changes:

    parameter 2 of type 'gchar* (gchar*, typedef size_t, void*)*' changed:

      entity changed from 'gchar* (gchar*, typedef size_t, void*)*' to compatible type 'typedef ICalParserLineGenFunc' at i-cal-parser.h:80:1

    parameter 3 of type 'typedef gpointer' was added





  [C]'function ICalComponent* i_cal_parser_parse(ICalParser*, gchar* (gchar*, typedef size_t, void*)*)' at i-cal-parser.c:177:1 has some indirect sub-type changes:

    parameter 3 of type 'typedef gpointer' was added





  [C]'function ICalTimetype* i_cal_property_get_acknowledged(ICalProperty*)' at i-cal-derived-property.c:146:1 has some indirect sub-type changes:



  [C]'function ICalTimetype* i_cal_property_get_completed(ICalProperty*)' at i-cal-derived-property.c:1118:1 has some indirect sub-type changes:



  [C]'function ICalTimetype* i_cal_property_get_created(ICalProperty*)' at i-cal-derived-property.c:1292:1 has some indirect sub-type changes:



  [C]'function ICalTimetype* i_cal_property_get_datemax(ICalProperty*)' at i-cal-derived-property.c:1408:1 has some indirect sub-type changes:



  [C]'function ICalTimetype* i_cal_property_get_datemin(ICalProperty*)' at i-cal-derived-property.c:1466:1 has some indirect sub-type changes:



  [C]'function ICalTimetype* i_cal_property_get_dtend(ICalProperty*)' at i-cal-derived-property.c:1930:1 has some indirect sub-type changes:



  [C]'function ICalTimetype* i_cal_property_get_dtstamp(ICalProperty*)' at i-cal-derived-property.c:1988:1 has some indirect sub-type changes:



  [C]'function ICalTimetype* i_cal_property_get_dtstart(ICalProperty*)' at i-cal-derived-property.c:2046:1 has some indirect sub-type changes:



  [C]'function ICalTimetype* i_cal_property_get_due(ICalProperty*)' at i-cal-derived-property.c:2104:1 has some indirect sub-type changes:



  [C]'function ICalDurationType* i_cal_property_get_duration(ICalProperty*)' at i-cal-derived-property.c:2162:1 has some indirect sub-type changes:



  [C]'function ICalDurationType* i_cal_property_get_estimatedduration(ICalProperty*)' at i-cal-derived-property.c:2220:1 has some indirect sub-type changes:



  [C]'function ICalTimetype* i_cal_property_get_exdate(ICalProperty*)' at i-cal-derived-property.c:2278:1 has some indirect sub-type changes:



  [C]'function ICalRecurrenceType* i_cal_property_get_exrule(ICalProperty*)' at i-cal-derived-property.c:2391:1 has some indirect sub-type changes:

    return type changed:

      in pointed to type 'typedef ICalRecurrenceType' at i-cal-forward-declarations.h:42:1:

        typedef name changed from ICalRecurrenceType to ICalRecurrence at i-cal-forward-declarations.h:42:1

        underlying type 'struct _ICalRecurrenceType' at i-cal-recurrence-type.h:63:1 changed:

          type name changed from '_ICalRecurrenceType' to '_ICalRecurrence'

          type size hasn't changed



          no data member change (1 filtered);



  [C]'function ICalPeriodType* i_cal_property_get_freebusy(ICalProperty*)' at i-cal-derived-property.c:2449:1 has some indirect sub-type changes:

    return type changed:

      in pointed to type 'typedef ICalPeriodType' at i-cal-forward-declarations.h:39:1:

        typedef name changed from ICalPeriodType to ICalPeriod at i-cal-forward-declarations.h:39:1

        underlying type 'struct _ICalPeriodType' at i-cal-period-type.h:63:1 changed:

          type name changed from '_ICalPeriodType' to '_ICalPeriod'

          type size hasn't changed



          no data member change (1 filtered);



  [C]'function ICalGeoType* i_cal_property_get_geo(ICalProperty*)' at i-cal-derived-property.c:2507:1 has some indirect sub-type changes:

    return type changed:

      in pointed to type 'typedef ICalGeoType' at i-cal-forward-declarations.h:36:1:

        typedef name changed from ICalGeoType to ICalGeo at i-cal-forward-declarations.h:36:1

        underlying type 'struct _ICalGeoType' at i-cal-geo-type.h:63:1 changed:

          type name changed from '_ICalGeoType' to '_ICalGeo'

          type size hasn't changed



          no data member change (1 filtered);



  [C]'function ICalTimetype* i_cal_property_get_lastmodified(ICalProperty*)' at i-cal-derived-property.c:2681:1 has some indirect sub-type changes:



  [C]'function ICalTimetype* i_cal_property_get_maxdate(ICalProperty*)' at i-cal-derived-property.c:2852:1 has some indirect sub-type changes:



  [C]'function ICalTimetype* i_cal_property_get_mindate(ICalProperty*)' at i-cal-derived-property.c:3075:1 has some indirect sub-type changes:



  [C]'function ICalDatetimeperiodType* i_cal_property_get_rdate(ICalProperty*)' at i-cal-derived-property.c:4098:1 has some indirect sub-type changes:

    return type changed:

      in pointed to type 'typedef ICalDatetimeperiodType' at i-cal-forward-declarations.h:34:1:

        typedef name changed from ICalDatetimeperiodType to ICalDatetimeperiod at i-cal-forward-declarations.h:34:1

        underlying type 'struct _ICalDatetimeperiodType' at i-cal-datetimeperiod-type.h:65:1 changed:

          type name changed from '_ICalDatetimeperiodType' to '_ICalDatetimeperiod'

          type size hasn't changed



          no data member change (1 filtered);



  [C]'function ICalTimetype* i_cal_property_get_recurrenceid(ICalProperty*)' at i-cal-derived-property.c:4330:1 has some indirect sub-type changes:



  [C]'function ICalReqstatType* i_cal_property_get_requeststatus(ICalProperty*)' at i-cal-derived-property.c:4617:1 has some indirect sub-type changes:

    return type changed:

      in pointed to type 'typedef ICalReqstatType' at i-cal-forward-declarations.h:43:1:

        typedef name changed from ICalReqstatType to ICalReqstat at i-cal-forward-declarations.h:43:1

        underlying type 'struct _ICalReqstatType' at i-cal-reqstat-type.h:64:1 changed:

          type name changed from '_ICalReqstatType' to '_ICalReqstat'

          type size hasn't changed



          no data member change (1 filtered);



  [C]'function ICalRecurrenceType* i_cal_property_get_rrule(ICalProperty*)' at i-cal-derived-property.c:4846:1 has some indirect sub-type changes:



  [C]'function ICalTriggerType* i_cal_property_get_trigger(ICalProperty*)' at i-cal-derived-property.c:5356:1 has some indirect sub-type changes:

    return type changed:

      in pointed to type 'typedef ICalTriggerType' at i-cal-forward-declarations.h:47:1:

        typedef name changed from ICalTriggerType to ICalTrigger at i-cal-forward-declarations.h:47:1

        underlying type 'struct _ICalTriggerType' at i-cal-trigger-type.h:63:1 changed:

          type name changed from '_ICalTriggerType' to '_ICalTrigger'

          type size hasn't changed



          no data member change (1 filtered);



  [C]'function ICalTimetype* i_cal_property_get_tzuntil(ICalProperty*)' at i-cal-derived-property.c:5698:1 has some indirect sub-type changes:



  [C]'function ICalProperty* i_cal_property_new_acknowledged(ICalTimetype*)' at i-cal-derived-property.c:107:1 has some indirect sub-type changes:

    parameter 1 of type 'ICalTimetype*' changed:

      pointed to type 'typedef ICalTimetype' changed at i-cal-forward-declarations.h:45:1, as reported earlier



  [C]'function ICalProperty* i_cal_property_new_completed(ICalTimetype*)' at i-cal-derived-property.c:1079:1 has some indirect sub-type changes:



  [C]'function ICalProperty* i_cal_property_new_created(ICalTimetype*)' at i-cal-derived-property.c:1253:1 has some indirect sub-type changes:



  [C]'function ICalProperty* i_cal_property_new_datemax(ICalTimetype*)' at i-cal-derived-property.c:1369:1 has some indirect sub-type changes:



  [C]'function ICalProperty* i_cal_property_new_datemin(ICalTimetype*)' at i-cal-derived-property.c:1427:1 has some indirect sub-type changes:



  [C]'function ICalProperty* i_cal_property_new_dtend(ICalTimetype*)' at i-cal-derived-property.c:1891:1 has some indirect sub-type changes:



  [C]'function ICalProperty* i_cal_property_new_dtstamp(ICalTimetype*)' at i-cal-derived-property.c:1949:1 has some indirect sub-type changes:



  [C]'function ICalProperty* i_cal_property_new_dtstart(ICalTimetype*)' at i-cal-derived-property.c:2007:1 has some indirect sub-type changes:



  [C]'function ICalProperty* i_cal_property_new_due(ICalTimetype*)' at i-cal-derived-property.c:2065:1 has some indirect sub-type changes:



  [C]'function ICalProperty* i_cal_property_new_duration(ICalDurationType*)' at i-cal-derived-property.c:2123:1 has some indirect sub-type changes:

    parameter 1 of type 'ICalDurationType*' changed:

      pointed to type 'typedef ICalDurationType' changed at i-cal-forward-declarations.h:35:1, as reported earlier



  [C]'function ICalProperty* i_cal_property_new_estimatedduration(ICalDurationType*)' at i-cal-derived-property.c:2181:1 has some indirect sub-type changes:



  [C]'function ICalProperty* i_cal_property_new_exdate(ICalTimetype*)' at i-cal-derived-property.c:2239:1 has some indirect sub-type changes:



  [C]'function ICalProperty* i_cal_property_new_exrule(ICalRecurrenceType*)' at i-cal-derived-property.c:2352:1 has some indirect sub-type changes:

    parameter 1 of type 'ICalRecurrenceType*' changed:

      pointed to type 'typedef ICalRecurrenceType' changed at i-cal-forward-declarations.h:42:1, as reported earlier



  [C]'function ICalProperty* i_cal_property_new_freebusy(ICalPeriodType*)' at i-cal-derived-property.c:2410:1 has some indirect sub-type changes:

    parameter 1 of type 'ICalPeriodType*' changed:

      pointed to type 'typedef ICalPeriodType' changed at i-cal-forward-declarations.h:39:1, as reported earlier



  [C]'function ICalProperty* i_cal_property_new_geo(ICalGeoType*)' at i-cal-derived-property.c:2468:1 has some indirect sub-type changes:

    parameter 1 of type 'ICalGeoType*' changed:

      pointed to type 'typedef ICalGeoType' changed at i-cal-forward-declarations.h:36:1, as reported earlier



  [C]'function ICalProperty* i_cal_property_new_lastmodified(ICalTimetype*)' at i-cal-derived-property.c:2642:1 has some indirect sub-type changes:



  [C]'function ICalProperty* i_cal_property_new_maxdate(ICalTimetype*)' at i-cal-derived-property.c:2813:1 has some indirect sub-type changes:



  [C]'function ICalProperty* i_cal_property_new_mindate(ICalTimetype*)' at i-cal-derived-property.c:3036:1 has some indirect sub-type changes:



  [C]'function ICalProperty* i_cal_property_new_rdate(ICalDatetimeperiodType*)' at i-cal-derived-property.c:4059:1 has some indirect sub-type changes:

    parameter 1 of type 'ICalDatetimeperiodType*' changed:

      pointed to type 'typedef ICalDatetimeperiodType' changed at i-cal-forward-declarations.h:34:1, as reported earlier



  [C]'function ICalProperty* i_cal_property_new_recurrenceid(ICalTimetype*)' at i-cal-derived-property.c:4291:1 has some indirect sub-type changes:



  [C]'function ICalProperty* i_cal_property_new_requeststatus(ICalReqstatType*)' at i-cal-derived-property.c:4578:1 has some indirect sub-type changes:

    parameter 1 of type 'ICalReqstatType*' changed:

      pointed to type 'typedef ICalReqstatType' changed at i-cal-forward-declarations.h:43:1, as reported earlier



  [C]'function ICalProperty* i_cal_property_new_rrule(ICalRecurrenceType*)' at i-cal-derived-property.c:4807:1 has some indirect sub-type changes:



  [C]'function ICalProperty* i_cal_property_new_trigger(ICalTriggerType*)' at i-cal-derived-property.c:5317:1 has some indirect sub-type changes:

    parameter 1 of type 'ICalTriggerType*' changed:

      pointed to type 'typedef ICalTriggerType' changed at i-cal-forward-declarations.h:49:1, as reported earlier



  [C]'function ICalProperty* i_cal_property_new_tzuntil(ICalTimetype*)' at i-cal-derived-property.c:5659:1 has some indirect sub-type changes:



  [C]'function void i_cal_property_set_acknowledged(ICalProperty*, ICalTimetype*)' at i-cal-derived-property.c:125:1 has some indirect sub-type changes:



  [C]'function void i_cal_property_set_completed(ICalProperty*, ICalTimetype*)' at i-cal-derived-property.c:1097:1 has some indirect sub-type changes:



  [C]'function void i_cal_property_set_created(ICalProperty*, ICalTimetype*)' at i-cal-derived-property.c:1271:1 has some indirect sub-type changes:



  [C]'function void i_cal_property_set_datemax(ICalProperty*, ICalTimetype*)' at i-cal-derived-property.c:1387:1 has some indirect sub-type changes:



  [C]'function void i_cal_property_set_datemin(ICalProperty*, ICalTimetype*)' at i-cal-derived-property.c:1445:1 has some indirect sub-type changes:



  [C]'function void i_cal_property_set_dtend(ICalProperty*, ICalTimetype*)' at i-cal-derived-property.c:1909:1 has some indirect sub-type changes:



  [C]'function void i_cal_property_set_dtstamp(ICalProperty*, ICalTimetype*)' at i-cal-derived-property.c:1967:1 has some indirect sub-type changes:



  [C]'function void i_cal_property_set_dtstart(ICalProperty*, ICalTimetype*)' at i-cal-derived-property.c:2025:1 has some indirect sub-type changes:



  [C]'function void i_cal_property_set_due(ICalProperty*, ICalTimetype*)' at i-cal-derived-property.c:2083:1 has some indirect sub-type changes:



  [C]'function void i_cal_property_set_duration(ICalProperty*, ICalDurationType*)' at i-cal-derived-property.c:2141:1 has some indirect sub-type changes:



  [C]'function void i_cal_property_set_estimatedduration(ICalProperty*, ICalDurationType*)' at i-cal-derived-property.c:2199:1 has some indirect sub-type changes:



  [C]'function void i_cal_property_set_exdate(ICalProperty*, ICalTimetype*)' at i-cal-derived-property.c:2257:1 has some indirect sub-type changes:



  [C]'function void i_cal_property_set_exrule(ICalProperty*, ICalRecurrenceType*)' at i-cal-derived-property.c:2370:1 has some indirect sub-type changes:

    parameter 2 of type 'ICalRecurrenceType*' changed:

      pointed to type 'typedef ICalRecurrenceType' changed at i-cal-forward-declarations.h:42:1, as reported earlier



  [C]'function void i_cal_property_set_freebusy(ICalProperty*, ICalPeriodType*)' at i-cal-derived-property.c:2428:1 has some indirect sub-type changes:

    parameter 2 of type 'ICalPeriodType*' changed:

      pointed to type 'typedef ICalPeriodType' changed at i-cal-forward-declarations.h:39:1, as reported earlier



  [C]'function void i_cal_property_set_geo(ICalProperty*, ICalGeoType*)' at i-cal-derived-property.c:2486:1 has some indirect sub-type changes:

    parameter 2 of type 'ICalGeoType*' changed:

      pointed to type 'typedef ICalGeoType' changed at i-cal-forward-declarations.h:36:1, as reported earlier



  [C]'function void i_cal_property_set_lastmodified(ICalProperty*, ICalTimetype*)' at i-cal-derived-property.c:2660:1 has some indirect sub-type changes:



  [C]'function void i_cal_property_set_maxdate(ICalProperty*, ICalTimetype*)' at i-cal-derived-property.c:2831:1 has some indirect sub-type changes:



  [C]'function void i_cal_property_set_mindate(ICalProperty*, ICalTimetype*)' at i-cal-derived-property.c:3054:1 has some indirect sub-type changes:



  [C]'function void i_cal_property_set_rdate(ICalProperty*, ICalDatetimeperiodType*)' at i-cal-derived-property.c:4077:1 has some indirect sub-type changes:

    parameter 2 of type 'ICalDatetimeperiodType*' changed:

      pointed to type 'typedef ICalDatetimeperiodType' changed at i-cal-forward-declarations.h:34:1, as reported earlier



  [C]'function void i_cal_property_set_recurrenceid(ICalProperty*, ICalTimetype*)' at i-cal-derived-property.c:4309:1 has some indirect sub-type changes:



  [C]'function void i_cal_property_set_requeststatus(ICalProperty*, ICalReqstatType*)' at i-cal-derived-property.c:4596:1 has some indirect sub-type changes:

    parameter 2 of type 'ICalReqstatType*' changed:

      pointed to type 'typedef ICalReqstatType' changed at i-cal-forward-declarations.h:43:1, as reported earlier



  [C]'function void i_cal_property_set_rrule(ICalProperty*, ICalRecurrenceType*)' at i-cal-derived-property.c:4825:1 has some indirect sub-type changes:



  [C]'function void i_cal_property_set_trigger(ICalProperty*, ICalTriggerType*)' at i-cal-derived-property.c:5335:1 has some indirect sub-type changes:

    parameter 2 of type 'ICalTriggerType*' changed:

      pointed to type 'typedef ICalTriggerType' changed at i-cal-forward-declarations.h:49:1, as reported earlier



  [C]'function void i_cal_property_set_tzuntil(ICalProperty*, ICalTimetype*)' at i-cal-derived-property.c:5677:1 has some indirect sub-type changes:



  [C]'function ICalRecurIterator* i_cal_recur_iterator_new(ICalRecurrenceType*, ICalTimetype*)' at i-cal-recur-iterator.c:81:1 has some indirect sub-type changes:



  [C]'function ICalTimetype* i_cal_recur_iterator_next(ICalRecurIterator*)' at i-cal-recur-iterator.c:102:1 has some indirect sub-type changes:



  [C]'function gint i_cal_recur_iterator_set_start(ICalRecurIterator*, ICalTimetype*)' at i-cal-recur-iterator.c:124:1 has some indirect sub-type changes:



  [C]'function ICalTimetype* i_cal_time_add(ICalTimetype*, ICalDurationType*)' at i-cal-time.c:831:1 has some indirect sub-type changes:



  [C]'function void i_cal_time_adjust(ICalTimetype*, const gint, const gint, const gint, const gint)' at i-cal-time.c:596:1 has some indirect sub-type changes:



  [C]'function time_t i_cal_time_as_timet(ICalTimetype*)' at i-cal-time.c:250:1 has some indirect sub-type changes:

    parameter 1 of type 'ICalTimetype*' changed:

      in pointed to type 'typedef ICalTimetype':

        entity changed from 'typedef ICalTimetype' to 'const ICalTime'

        type size hasn't changed



  [C]'function gint i_cal_time_compare(ICalTimetype*, ICalTimetype*)' at i-cal-time.c:525:1 has some indirect sub-type changes:

    parameter 1 of type 'ICalTimetype*' changed:

      in pointed to type 'typedef ICalTimetype':

        entity changed from 'typedef ICalTimetype' to 'const ICalTime'

        type size hasn't changed

    parameter 2 of type 'ICalTimetype*' changed:

      in pointed to type 'typedef ICalTimetype':

        entity changed from 'typedef ICalTimetype' to 'const ICalTime'

        type size hasn't changed



  [C]'function gint i_cal_time_compare_date_only(ICalTimetype*, ICalTimetype*)' at i-cal-time.c:547:1 has some indirect sub-type changes:

    parameter 1 of type 'ICalTimetype*' changed:

      in pointed to type 'typedef ICalTimetype':

        entity changed from 'typedef ICalTimetype' to 'const ICalTime'

        type size hasn't changed

    parameter 2 of type 'ICalTimetype*' changed:

      in pointed to type 'typedef ICalTimetype':

        entity changed from 'typedef ICalTimetype' to 'const ICalTime'

        type size hasn't changed



  [C]'function gint i_cal_time_compare_date_only_tz(ICalTimetype*, ICalTimetype*, ICalTimezone*)' at i-cal-time.c:570:1 has some indirect sub-type changes:

    parameter 1 of type 'ICalTimetype*' changed:

      in pointed to type 'typedef ICalTimetype':

        entity changed from 'typedef ICalTimetype' to 'const ICalTime'

        type size hasn't changed

    parameter 2 of type 'ICalTimetype*' changed:

      in pointed to type 'typedef ICalTimetype':

        entity changed from 'typedef ICalTimetype' to 'const ICalTime'

        type size hasn't changed



  [C]'function ICalTimetype* i_cal_time_convert_to_zone(ICalTimetype*, ICalTimezone*)' at i-cal-time.c:661:1 has some indirect sub-type changes:

    parameter 1 of type 'ICalTimetype*' changed:

      in pointed to type 'typedef ICalTimetype':

        entity changed from 'typedef ICalTimetype' to 'const ICalTime'

        type size hasn't changed



  [C]'function gint i_cal_time_day_of_week(ICalTimetype*)' at i-cal-time.c:389:1 has some indirect sub-type changes:

    parameter 1 of type 'ICalTimetype*' changed:

      in pointed to type 'typedef ICalTimetype':

        entity changed from 'typedef ICalTimetype' to 'const ICalTime'

        type size hasn't changed



  [C]'function gint i_cal_time_day_of_year(ICalTimetype*)' at i-cal-time.c:370:1 has some indirect sub-type changes:

    parameter 1 of type 'ICalTimetype*' changed:

      in pointed to type 'typedef ICalTimetype':

        entity changed from 'typedef ICalTimetype' to 'const ICalTime'

        type size hasn't changed



  [C]'function ICalTimetype* i_cal_time_normalize(ICalTimetype*)' at i-cal-time.c:619:1 has some indirect sub-type changes:

    parameter 1 of type 'ICalTimetype*' changed:

      in pointed to type 'typedef ICalTimetype':

        entity changed from 'typedef ICalTimetype' to 'const ICalTime'

        type size hasn't changed



  [C]'function ICalTimeSpan* i_cal_time_span_new(ICalTimetype*, ICalTimetype*, gint)' at i-cal-time.c:764:1 has some indirect sub-type changes:



  [C]'function gint i_cal_time_start_doy_week(ICalTimetype*, gint)' at i-cal-time.c:409:1 has some indirect sub-type changes:

    parameter 1 of type 'ICalTimetype*' changed:

      in pointed to type 'typedef ICalTimetype':

        entity changed from 'typedef ICalTimetype' to 'const ICalTime'

        type size hasn't changed



  [C]'function ICalDurationType* i_cal_time_subtract(ICalTimetype*, ICalTimetype*)' at i-cal-time.c:853:1 has some indirect sub-type changes:



  [C]'function gint i_cal_time_week_number(ICalTimetype*)' at i-cal-time.c:429:1 has some indirect sub-type changes:

    parameter 1 of type 'ICalTimetype*' changed:

      in pointed to type 'typedef ICalTimetype':

        entity changed from 'typedef ICalTimetype' to 'const ICalTime'

        type size hasn't changed



  [C]'function void i_cal_timezone_get_utc_offset(ICalTimezone*, ICalTimetype*, gint*)' at i-cal-timezone.c:469:1 has some indirect sub-type changes:

    return type changed:

      entity changed from 'void' to compatible type 'typedef gint' at gtypes.h:49:1

        type name changed from 'void' to 'int'

        type size changed from 0 to 32 (in bits)



  [C]'function void i_cal_timezone_get_utc_offset_of_utc_time(ICalTimezone*, ICalTimetype*, gint*)' at i-cal-timezone.c:497:1 has some indirect sub-type changes:

    return type changed:

      entity changed from 'void' to compatible type 'typedef gint' at gtypes.h:49:1

        type name changed from 'void' to 'int'

        type size changed from 0 to 32 (in bits)



  [C]'function ICalTimetype* i_cal_value_get_date(ICalValue*)' at i-cal-derived-value.c:1806:1 has some indirect sub-type changes:



  [C]'function ICalTimetype* i_cal_value_get_datetime(ICalValue*)' at i-cal-derived-value.c:261:1 has some indirect sub-type changes:



  [C]'function ICalTimetype* i_cal_value_get_datetimedate(ICalValue*)' at i-cal-derived-value.c:319:1 has some indirect sub-type changes:



  [C]'function ICalDatetimeperiodType* i_cal_value_get_datetimeperiod(ICalValue*)' at i-cal-derived-value.c:377:1 has some indirect sub-type changes:



  [C]'function ICalDurationType* i_cal_value_get_duration(ICalValue*)' at i-cal-derived-value.c:1296:1 has some indirect sub-type changes:



  [C]'function ICalGeoType* i_cal_value_get_geo(ICalValue*)' at i-cal-derived-value.c:435:1 has some indirect sub-type changes:



  [C]'function ICalPeriodType* i_cal_value_get_period(ICalValue*)' at i-cal-derived-value.c:1067:1 has some indirect sub-type changes:



  [C]'function ICalRecurrenceType* i_cal_value_get_recur(ICalValue*)' at i-cal-derived-value.c:145:1 has some indirect sub-type changes:



  [C]'function ICalReqstatType* i_cal_value_get_requeststatus(ICalValue*)' at i-cal-derived-value.c:1748:1 has some indirect sub-type changes:



  [C]'function ICalTriggerType* i_cal_value_get_trigger(ICalValue*)' at i-cal-derived-value.c:203:1 has some indirect sub-type changes:



  [C]'function ICalValue* i_cal_value_new_date(ICalTimetype*)' at i-cal-derived-value.c:1787:1 has some indirect sub-type changes:



  [C]'function ICalValue* i_cal_value_new_datetime(ICalTimetype*)' at i-cal-derived-value.c:242:1 has some indirect sub-type changes:



  [C]'function ICalValue* i_cal_value_new_datetimedate(ICalTimetype*)' at i-cal-derived-value.c:300:1 has some indirect sub-type changes:



  [C]'function ICalValue* i_cal_value_new_datetimeperiod(ICalDatetimeperiodType*)' at i-cal-derived-value.c:358:1 has some indirect sub-type changes:



  [C]'function ICalValue* i_cal_value_new_duration(ICalDurationType*)' at i-cal-derived-value.c:1277:1 has some indirect sub-type changes:



  [C]'function ICalValue* i_cal_value_new_geo(ICalGeoType*)' at i-cal-derived-value.c:416:1 has some indirect sub-type changes:



  [C]'function ICalValue* i_cal_value_new_period(ICalPeriodType*)' at i-cal-derived-value.c:1048:1 has some indirect sub-type changes:



  [C]'function ICalValue* i_cal_value_new_recur(ICalRecurrenceType*)' at i-cal-derived-value.c:126:1 has some indirect sub-type changes:



  [C]'function ICalValue* i_cal_value_new_requeststatus(ICalReqstatType*)' at i-cal-derived-value.c:1729:1 has some indirect sub-type changes:



  [C]'function ICalValue* i_cal_value_new_trigger(ICalTriggerType*)' at i-cal-derived-value.c:184:1 has some indirect sub-type changes:



  [C]'function void i_cal_value_set_date(ICalValue*, ICalTimetype*)' at i-cal-derived-value.c:1766:1 has some indirect sub-type changes:



  [C]'function void i_cal_value_set_datetime(ICalValue*, ICalTimetype*)' at i-cal-derived-value.c:221:1 has some indirect sub-type changes:



  [C]'function void i_cal_value_set_datetimedate(ICalValue*, ICalTimetype*)' at i-cal-derived-value.c:279:1 has some indirect sub-type changes:



  [C]'function void i_cal_value_set_datetimeperiod(ICalValue*, ICalDatetimeperiodType*)' at i-cal-derived-value.c:337:1 has some indirect sub-type changes:



  [C]'function void i_cal_value_set_duration(ICalValue*, ICalDurationType*)' at i-cal-derived-value.c:1256:1 has some indirect sub-type changes:



  [C]'function void i_cal_value_set_geo(ICalValue*, ICalGeoType*)' at i-cal-derived-value.c:395:1 has some indirect sub-type changes:



  [C]'function void i_cal_value_set_period(ICalValue*, ICalPeriodType*)' at i-cal-derived-value.c:1027:1 has some indirect sub-type changes:



  [C]'function void i_cal_value_set_recur(ICalValue*, ICalRecurrenceType*)' at i-cal-derived-value.c:105:1 has some indirect sub-type changes:



  [C]'function void i_cal_value_set_requeststatus(ICalValue*, ICalReqstatType*)' at i-cal-derived-value.c:1708:1 has some indirect sub-type changes:



  [C]'function void i_cal_value_set_trigger(ICalValue*, ICalTriggerType*)' at i-cal-derived-value.c:163:1 has some indirect sub-type changes:





1 Added function symbol not referenced by debug info:



  i_cal_time_new_null_time



