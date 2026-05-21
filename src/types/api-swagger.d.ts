export interface paths {
    "/admin-api/appointment-config/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsSuperUser] */
        get: operations["admin_api_appointment_config_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin-api/appointment-migrate/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.IsSuperUser] */
        post: operations["admin_api_appointment_migrate_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin-api/features/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * @description This overrides all feature flags globally
         *
         *     Permissions: [permissions.IsSuperUser]
         */
        post: operations["admin_api_features_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin-api/features/one-org/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * @description This overrides only one feature flag
         *
         *     Permissions: [permissions.IsSuperUser]
         */
        post: operations["admin_api_features_one_org_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin-api/finalize/doctor/{phone_number}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** @description Permissions: [permissions.IsSuperUser] */
        patch: operations["admin_api_finalize_doctor_partial_update"];
        trace?: never;
    };
    "/admin-api/finalize/organization/{id}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["admin_api_finalize_organization_partial_update"];
        trace?: never;
    };
    "/admin-api/fix-future-indexes/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.IsSuperUser] */
        post: operations["admin_api_fix_future_indexes_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin-api/login/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.rest_framework_AllowAny] */
        post: operations["admin_api_login_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin-api/organizations/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsSuperUser] */
        get: operations["admin_api_organizations_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin-api/report/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsSuperUser] */
        get: operations["admin_api_report_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin-api/unfinalized/doctors/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsSuperUser] */
        get: operations["admin_api_unfinalized_doctors_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin-api/unfinalized/organizations/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsSuperUser] */
        get: operations["admin_api_unfinalized_organizations_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/appointment-booking/cancel/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.rest_framework_IsAuthenticated] */
        post: operations["appointment_booking_cancel_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/appointment-booking/create/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.IsAuthenticated] */
        post: operations["appointment_booking_create_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/appointment-booking/create/{uuid}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.rest_framework_AllowAny] */
        get: operations["appointment_booking_create_retrieve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/appointment-booking/duplicate/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.rest_framework_AllowAny] */
        post: operations["appointment_booking_duplicate_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/appointment-booking/mine/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.rest_framework_IsAuthenticated] */
        get: operations["appointment_booking_mine_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/appointment-booking/patient-create/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.rest_framework_IsAuthenticated] */
        post: operations["appointment_booking_patient_create_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/appointment-booking/update/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.rest_framework_AllowAny] */
        post: operations["appointment_booking_update_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/appointment-booking/update/callback/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.rest_framework_AllowAny] */
        get: operations["appointment_booking_update_callback_retrieve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/appointment-calendar/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.CanModifyAppointment] */
        post: operations["appointment_calendar_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/appointment-calendar/{appointment_config}/{date}/intervals/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.rest_framework_AllowAny] */
        get: operations["appointment_calendar_intervals_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/appointment-calendar/{appointment_config}/days/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.rest_framework_AllowAny] */
        get: operations["appointment_calendar_days_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/appointment-calendar/cancel/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.CanModifyAppointment] */
        post: operations["appointment_calendar_cancel_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/appointment-config/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsAuthenticated] */
        get: operations["appointment_config_list"];
        put?: never;
        /** @description Permissions: [permissions.CanModifyAppointment] */
        post: operations["appointment_config_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/appointment-config/{uuid}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsAuthenticated] */
        get: operations["appointment_config_retrieve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** @description Permissions: [permissions.CanModifyAppointment] */
        patch: operations["appointment_config_partial_update"];
        trace?: never;
    };
    "/appointment-config/interval/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.CanModifyAppointment] */
        post: operations["appointment_config_interval_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/appointment-config/interval/{uuid}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** @description Permissions: [permissions.CanModifyAppointment] */
        delete: operations["appointment_config_interval_destroy"];
        options?: never;
        head?: never;
        /** @description Permissions: [permissions.CanModifyAppointment] */
        patch: operations["appointment_config_interval_partial_update"];
        trace?: never;
    };
    "/appointment-config/mine/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.rest_framework_IsAuthenticated] */
        get: operations["appointment_config_mine_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/fcm-devices/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.IsAuthenticated] */
        post: operations["fcm_devices_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/fcm-devices/{registration_id}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** @description Permissions: [permissions.IsAuthenticated] */
        delete: operations["fcm_devices_destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/feedback/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.rest_framework_AllowAny] */
        post: operations["feedback_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/growth-charts/{patient_uuid}/{type}/{uuid}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.CanReadGrowthCharts] */
        get: operations["growth_charts_retrieve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/management/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsAuthenticated] */
        get: operations["management_list"];
        put?: never;
        /** @description Permissions: [permissions.IsAuthenticated] */
        post: operations["management_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/management/{uuid}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** @description Permissions: [permissions.IsAuthenticated] */
        delete: operations["management_destroy"];
        options?: never;
        head?: never;
        /** @description Permissions: [permissions.IsAuthenticated] */
        patch: operations["management_partial_update"];
        trace?: never;
    };
    "/membership/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsAuthenticated] */
        get: operations["membership_list"];
        put?: never;
        /** @description Permissions: [permissions.CanAddCoWorker, permissions.HasSubscription] */
        post: operations["membership_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/membership-patient/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsAuthenticated] */
        get: operations["membership_patient_list"];
        put?: never;
        /** @description Permissions: [permissions.HasSubscription, permissions.CanAddPatient] */
        post: operations["membership_patient_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/membership-patient/{uuid}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsAuthenticated] */
        get: operations["membership_patient_retrieve"];
        put?: never;
        post?: never;
        /** @description Permissions: [permissions.HasSubscription, permissions.CanChangePatient] */
        delete: operations["membership_patient_destroy"];
        options?: never;
        head?: never;
        /** @description Permissions: [permissions.HasSubscription, permissions.CanChangePatient] */
        patch: operations["membership_patient_partial_update"];
        trace?: never;
    };
    "/membership-patient/{uuid}/treatments/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.CanReadDoctorTreatment] */
        get: operations["membership_patient_treatments_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/membership-patient/{uuid}/visits/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.CanReadPatientVisits] */
        get: operations["membership_patient_visits_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/membership-patient/bone-age-plot/{uuid}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.CanReadGrowthCharts, permissions.HasGrowthSubscription] */
        get: operations["membership_patient_bone_age_plot_retrieve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/membership-patient/light/{uuid}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.rest_framework_AllowAny] */
        get: operations["membership_patient_light_retrieve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/membership-patient/ocrs/{uuid}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.CanReadPatientVisits] */
        get: operations["membership_patient_ocrs_retrieve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/membership-patient/voice/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.HasSubscription, permissions.HasGrowthSubscription] */
        post: operations["membership_patient_voice_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/membership/{uuid}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsAuthenticated] */
        get: operations["membership_retrieve"];
        put?: never;
        post?: never;
        /** @description Permissions: [permissions.IsOwner] */
        delete: operations["membership_destroy"];
        options?: never;
        head?: never;
        /** @description Permissions: [permissions.IsOwner, permissions.HasSubscription] */
        patch: operations["membership_partial_update"];
        trace?: never;
    };
    "/membership/lookup/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.CanAddCoWorker, permissions.HasSubscription] */
        post: operations["membership_lookup_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/organizations/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.rest_framework_AllowAny] */
        get: operations["organizations_retrieve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** @description Permissions: [permissions.rest_framework_AllowAny] */
        patch: operations["organizations_partial_update"];
        trace?: never;
    };
    "/organizations/buy-plan/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.CanManageSubscription] */
        post: operations["organizations_buy_plan_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/organizations/buy-plan/callback/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.rest_framework_AllowAny] */
        get: operations["organizations_buy_plan_callback_retrieve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/organizations/favorite-strings/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsAuthenticated] */
        get: operations["organizations_favorite_strings_list"];
        put?: never;
        /** @description Permissions: [permissions.CanWriteFavorites] */
        post: operations["organizations_favorite_strings_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/organizations/favorite-strings/{uuid}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** @description Permissions: [permissions.CanWriteFavorites] */
        delete: operations["organizations_favorite_strings_destroy"];
        options?: never;
        head?: never;
        /** @description Permissions: [permissions.CanWriteFavorites] */
        patch: operations["organizations_favorite_strings_partial_update"];
        trace?: never;
    };
    "/organizations/remove-plan/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** @description Permissions: [permissions.CanManageSubscription, permissions.HasSubscription] */
        delete: operations["organizations_remove_plan_destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/organizations/report/management/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsAuthenticated] */
        get: operations["organizations_report_management_retrieve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/organizations/report/patient/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsAuthenticated] */
        get: operations["organizations_report_patient_retrieve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/organizations/report/patient/filters/allergies/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsAuthenticated] */
        get: operations["organizations_report_patient_filters_allergies_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/organizations/report/patient/filters/complaints/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsAuthenticated] */
        get: operations["organizations_report_patient_filters_complaints_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/organizations/report/patient/filters/diseases/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsAuthenticated] */
        get: operations["organizations_report_patient_filters_diseases_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/organizations/report/patient/filters/surgeries/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsAuthenticated] */
        get: operations["organizations_report_patient_filters_surgeries_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/organizations/report/visit/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsAuthenticated] */
        get: operations["organizations_report_visit_retrieve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/organizations/report/visit/filters/examination-report/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsAuthenticated] */
        get: operations["organizations_report_visit_filters_examination_report_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/organizations/report/visit/filters/medical-history/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsAuthenticated] */
        get: operations["organizations_report_visit_filters_medical_history_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/organizations/report/visit/filters/physician-diagnosis/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsAuthenticated] */
        get: operations["organizations_report_visit_filters_physician_diagnosis_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/organizations/report/visit/filters/treatment-plan/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsAuthenticated] */
        get: operations["organizations_report_visit_filters_treatment_plan_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/p_m_b_i/mine/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.rest_framework_IsAuthenticated] */
        get: operations["p_m_b_i_mine_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/patients/add/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.HasSubscription, permissions.CanAddPatient] */
        post: operations["patients_add_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/patients/add/light/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.HasSubscription, permissions.CanAddPatient] */
        post: operations["patients_add_light_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/patients/add/light/{uuid}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** @description Permissions: [permissions.HasSubscription, permissions.CanAddPatient] */
        patch: operations["patients_add_light_partial_update"];
        trace?: never;
    };
    "/patients/add/lookup/{national_number}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.HasSubscription, permissions.CanAddPatient] */
        get: operations["patients_add_lookup_retrieve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/payment/appointment-price/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.rest_framework_AllowAny] */
        get: operations["payment_appointment_price_retrieve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/payment/plans/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.rest_framework_AllowAny] */
        get: operations["payment_plans_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/payment/transactions/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.IsAuthenticated] */
        get: operations["payment_transactions_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/qrcode/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.rest_framework_IsAuthenticated] */
        post: operations["qrcode_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/register/doctor/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.rest_framework_NOT] */
        post: operations["register_doctor_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/register/organization/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.rest_framework_OR] */
        post: operations["register_organization_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reservation/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.rest_framework_AllowAny] */
        post: operations["reservation_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/secure-media/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * @description Serve private media files with signed, expiring URLs.
         *     Example: /api/secure-media/?file=uploads/photo.jpg&token=abc123&expires=1736000000
         *
         *     Permissions: [permissions.rest_framework_AllowAny]
         */
        get: operations["secure_media_retrieve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/uploader/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.rest_framework_IsAuthenticated] */
        post: operations["uploader_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/uploader/{uuid}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.rest_framework_AllowAny] */
        get: operations["uploader_retrieve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** @description Permissions: [permissions.rest_framework_AllowAny] */
        patch: operations["uploader_partial_update"];
        trace?: never;
    };
    "/users/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.rest_framework_IsAuthenticated] */
        get: operations["users_retrieve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** @description Permissions: [permissions.rest_framework_IsAuthenticated] */
        patch: operations["users_partial_update"];
        trace?: never;
    };
    "/users/account/switch/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.rest_framework_IsAuthenticated] */
        post: operations["users_account_switch_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/has-session/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.rest_framework_AllowAny] */
        get: operations["users_has_session_retrieve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/logout/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** @description Permissions: [permissions.rest_framework_AllowAny] */
        delete: operations["users_logout_destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/logout/other-sessions/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** @description Permissions: [permissions.rest_framework_IsAuthenticated] */
        delete: operations["users_logout_other_sessions_destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/otp/callback/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.rest_framework_AllowAny] */
        post: operations["users_otp_callback_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/otp/init/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.rest_framework_AllowAny] */
        post: operations["users_otp_init_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/visits/{uuid}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.CanReadPatientVisits] */
        get: operations["visits_retrieve"];
        put?: never;
        post?: never;
        /** @description Permissions: [permissions.HasSubscription] */
        delete: operations["visits_destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/visits/{uuid}/report/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.CanReadPatientVisits] */
        get: operations["visits_report_retrieve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/visits/callback/ocr/{id}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["visits_callback_ocr_partial_update"];
        trace?: never;
    };
    "/visits/callback/predict/{id}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["visits_callback_predict_partial_update"];
        trace?: never;
    };
    "/visits/callback/voice/{id}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["visits_callback_voice_partial_update"];
        trace?: never;
    };
    "/visits/choice/{uuid}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** @description Permissions: [permissions.HasGrowthSubscription, permissions.IsDoctor] */
        patch: operations["visits_choice_partial_update"];
        trace?: never;
    };
    "/visits/compare/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.CanReadPatientVisits] */
        post: operations["visits_compare_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/visits/doctor-result/{uuid}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** @description Permissions: [permissions.HasGrowthSubscription, permissions.IsDoctor] */
        patch: operations["visits_doctor_result_partial_update"];
        trace?: never;
    };
    "/visits/final/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.HasSubscription, permissions.CanAddVisit] */
        post: operations["visits_final_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/visits/final/{uuid}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** @description Permissions: [permissions.HasSubscription, permissions.CanAddVisit] */
        patch: operations["visits_final_partial_update"];
        trace?: never;
    };
    "/visits/ocr/{uuid}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.CanReadPatientVisits] */
        get: operations["visits_ocr_retrieve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/visits/ocr/data/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Permissions: [permissions.HasSubscription] */
        post: operations["visits_ocr_data_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/visits/ocr/data/{uuid}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** @description Permissions: [permissions.HasSubscription] */
        delete: operations["visits_ocr_data_destroy"];
        options?: never;
        head?: never;
        /** @description Permissions: [permissions.HasSubscription] */
        patch: operations["visits_ocr_data_partial_update"];
        trace?: never;
    };
    "/visits/treatment/{uuid}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Permissions: [permissions.CanReadDoctorTreatment] */
        get: operations["visits_treatment_retrieve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** @description Permissions: [permissions.HasSubscription, permissions.CanReadDoctorTreatment] */
        patch: operations["visits_treatment_partial_update"];
        trace?: never;
    };
    "/visits/voice/{uuid}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** @description Permissions: [permissions.HasVoiceSubscription, permissions.CanReadDoctorTreatment] */
        patch: operations["visits_voice_partial_update"];
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        AdminAppointmentMigrate: {
            /** Format: uri */
            input_json_file: string;
            /** Format: uuid */
            appointment_config: string;
        };
        AdminAppointmentMigrateRequest: {
            /** Format: binary */
            input_json_file: File;
            /** Format: uuid */
            appointment_config: string;
        };
        AdminFeatures: {
            /**
             * @description * `disabled` - Disabled
             *     * `limited` - Limited
             *     * `enabled` - Enabled
             * @enum {string}
             */
            ocr?: "disabled" | "limited" | "enabled";
            /**
             * @description * `disabled` - Disabled
             *     * `limited` - Limited
             *     * `enabled` - Enabled
             * @enum {string}
             */
            appointment?: "disabled" | "limited" | "enabled";
            /**
             * @description * `disabled` - Disabled
             *     * `limited` - Limited
             *     * `enabled` - Enabled
             * @enum {string}
             */
            voice?: "disabled" | "limited" | "enabled";
        };
        AdminFeaturesOneOrg: {
            /**
             * @description * `disabled` - Disabled
             *     * `limited` - Limited
             *     * `enabled` - Enabled
             * @enum {string}
             */
            ocr?: "disabled" | "limited" | "enabled";
            /**
             * @description * `disabled` - Disabled
             *     * `limited` - Limited
             *     * `enabled` - Enabled
             * @enum {string}
             */
            appointment?: "disabled" | "limited" | "enabled";
            /**
             * @description * `disabled` - Disabled
             *     * `limited` - Limited
             *     * `enabled` - Enabled
             * @enum {string}
             */
            voice?: "disabled" | "limited" | "enabled";
            /** Format: uuid */
            organization: string;
        };
        AdminFeaturesOneOrgRequest: {
            /**
             * @description * `disabled` - Disabled
             *     * `limited` - Limited
             *     * `enabled` - Enabled
             * @enum {string}
             */
            ocr?: "disabled" | "limited" | "enabled";
            /**
             * @description * `disabled` - Disabled
             *     * `limited` - Limited
             *     * `enabled` - Enabled
             * @enum {string}
             */
            appointment?: "disabled" | "limited" | "enabled";
            /**
             * @description * `disabled` - Disabled
             *     * `limited` - Limited
             *     * `enabled` - Enabled
             * @enum {string}
             */
            voice?: "disabled" | "limited" | "enabled";
            /** Format: uuid */
            organization: string;
        };
        AdminFeaturesRequest: {
            /**
             * @description * `disabled` - Disabled
             *     * `limited` - Limited
             *     * `enabled` - Enabled
             * @enum {string}
             */
            ocr?: "disabled" | "limited" | "enabled";
            /**
             * @description * `disabled` - Disabled
             *     * `limited` - Limited
             *     * `enabled` - Enabled
             * @enum {string}
             */
            appointment?: "disabled" | "limited" | "enabled";
            /**
             * @description * `disabled` - Disabled
             *     * `limited` - Limited
             *     * `enabled` - Enabled
             * @enum {string}
             */
            voice?: "disabled" | "limited" | "enabled";
        };
        AdminFinalizeDoctor: {
            first_name: string;
            last_name: string;
            specialty: string;
            /** Format: uri */
            medical_profile_url: string;
        };
        AdminFinalizeOrganization: {
            is_registered?: boolean;
        };
        AdminFixFutureIndex: {
            day_iterations: number;
            /** Format: uuid */
            orgnanization: string;
        };
        AdminFixFutureIndexRequest: {
            day_iterations: number;
            /** Format: uuid */
            orgnanization: string;
        };
        AdminLogin: {
            readonly sessionid: string;
            /** Format: date-time */
            readonly expires_at: string;
        };
        AdminLoginRequest: {
            username: string;
            password: string;
        };
        AppointmentBooking: {
            /** Format: uuid */
            readonly uuid: string;
            readonly patient_management_basic_info: components["schemas"]["PatientManagementBasicInfo"];
            readonly user: components["schemas"]["UserLight"];
            readonly remaining_seconds: number;
            /**
             * @description * `d` - Cancel By Doctor
             *     * `p` - Cancel By Patient
             *     * `s` - Cancel By System
             * @enum {string|null}
             */
            readonly cancel_action: "d" | "p" | "s" | null;
            readonly is_duplicated: boolean;
            readonly is_canceled: boolean;
            readonly is_emergency: boolean;
            readonly possible_interval_read_only: components["schemas"]["AppointmentCalendarInterval"];
            readonly appointment_calendar_interval: components["schemas"]["AppointmentCalendarInterval"];
            readonly patient_basic_infos: components["schemas"]["PatientManagementBasicInfo"][];
            readonly appointment_config_read_only: components["schemas"]["AppointmentConfigSuperLight"];
            /** Format: uuid */
            appointment_config: string;
            /** Format: uuid */
            possible_interval?: string | null;
        };
        AppointmentBookingCancel: {
            /** Format: uuid */
            appointment_booking: string;
        };
        AppointmentBookingCancelRequest: {
            /** Format: uuid */
            appointment_booking: string;
        };
        AppointmentBookingDuplicate: {
            /** Format: uuid */
            readonly uuid: string;
        };
        AppointmentBookingDuplicateRequest: {
            /** Format: uuid */
            appointment_booking: string;
        };
        AppointmentBookingLight: {
            /** Format: uuid */
            readonly uuid: string;
            readonly patient_management_basic_info: components["schemas"]["PatientManagementBasicInfo"];
            readonly user: components["schemas"]["UserLight"];
            readonly remaining_seconds: number;
            /**
             * @description * `d` - Cancel By Doctor
             *     * `p` - Cancel By Patient
             *     * `s` - Cancel By System
             * @enum {string|null}
             */
            readonly cancel_action: "d" | "p" | "s" | null;
            readonly is_duplicated: boolean;
            readonly is_canceled: boolean;
            readonly is_emergency: boolean;
            readonly possible_interval_read_only: components["schemas"]["AppointmentCalendarInterval"];
            readonly appointment_calendar_interval: components["schemas"]["AppointmentCalendarInterval"];
            readonly appointment_config_read_only: components["schemas"]["AppointmentConfigSuperLight"];
            /** Format: uuid */
            appointment_config: string;
        };
        AppointmentBookingPatientCreate: {
            /** Format: uuid */
            readonly uuid: string;
            /** Format: uuid */
            appointment_config: string;
        };
        AppointmentBookingPatientCreateRequest: {
            /** Format: uuid */
            appointment_config: string;
        };
        AppointmentBookingRequest: {
            phone_number: string;
            /** Format: uuid */
            appointment_config: string;
            /** Format: uuid */
            possible_interval?: string | null;
        };
        AppointmentCalendar: {
            data: components["schemas"]["DailyCalendar"][];
            /** Format: uuid */
            appointment_config: string;
        };
        AppointmentCalendarCancel: {
            intervals: string[];
        };
        AppointmentCalendarCancelRequest: {
            intervals: string[];
        };
        AppointmentCalendarDay: {
            /** Format: date */
            date: string;
            capacity: number;
            reserved: number;
        };
        AppointmentCalendarInterval: {
            /** Format: uuid */
            readonly uuid: string;
            /** Format: uuid */
            appointment_config: string;
            /** Format: date-time */
            start: string;
            /** Format: date-time */
            end: string;
            capacity: number;
            reserved?: number;
            readonly remaining: number;
            readonly has_remaining: boolean;
        };
        AppointmentCalendarIntervalRequest: {
            /** Format: uuid */
            appointment_config: string;
            /** Format: date-time */
            start: string;
            /** Format: date-time */
            end: string;
            capacity: number;
            reserved?: number;
        };
        AppointmentCalendarRequest: {
            data: components["schemas"]["DailyCalendarRequest"][];
            /** Format: uuid */
            appointment_config: string;
        };
        AppointmentConfig: {
            /** Format: uuid */
            readonly uuid: string;
            /** Format: uuid */
            user: string;
            readonly user_read_only: components["schemas"]["UserLight"];
            readonly organization_read_only: components["schemas"]["OrganizationLight"];
            readonly appointment_config_intervals: components["schemas"]["AppointmentConfigInterval"][];
        };
        AppointmentConfigInterval: {
            /** Format: uuid */
            readonly uuid: string;
            /** Format: uuid */
            appointment_config: string;
            /**
             * @description * `1` - Sunday
             *     * `2` - Monday
             *     * `3` - Tuesday
             *     * `4` - Wednesday
             *     * `5` - Thursday
             *     * `6` - Friday
             *     * `7` - Saturday
             * @enum {integer}
             */
            week_day: 1 | 2 | 3 | 4 | 5 | 6 | 7;
            /** Format: time */
            start: string;
            /** Format: time */
            end: string;
            /**
             * @description * `5` - 5 minutes
             *     * `10` - 10 minutes
             *     * `15` - 15 minutes
             *     * `30` - 30 minutes
             * @enum {integer}
             */
            every_minutes: 5 | 10 | 15 | 30;
            capacity: number;
        };
        AppointmentConfigIntervalRequest: {
            /** Format: uuid */
            appointment_config: string;
            /**
             * @description * `1` - Sunday
             *     * `2` - Monday
             *     * `3` - Tuesday
             *     * `4` - Wednesday
             *     * `5` - Thursday
             *     * `6` - Friday
             *     * `7` - Saturday
             * @enum {integer}
             */
            week_day: 1 | 2 | 3 | 4 | 5 | 6 | 7;
            /** Format: time */
            start: string;
            /** Format: time */
            end: string;
            /**
             * @description * `5` - 5 minutes
             *     * `10` - 10 minutes
             *     * `15` - 15 minutes
             *     * `30` - 30 minutes
             * @enum {integer}
             */
            every_minutes: 5 | 10 | 15 | 30;
            capacity: number;
        };
        AppointmentConfigLight: {
            /** Format: uuid */
            readonly uuid: string;
            /** Format: uuid */
            user: string;
            /** Format: date */
            base_booking_date?: string | null;
            readonly user_read_only: components["schemas"]["UserLight"];
            readonly organization_read_only: components["schemas"]["OrganizationLight"];
            readonly configured_days_per_week: number;
            readonly max_capacity_per_week: number;
            readonly current: boolean;
        };
        AppointmentConfigRequest: {
            /** Format: uuid */
            user: string;
        };
        AppointmentConfigSuperLight: {
            /** Format: uuid */
            readonly uuid: string;
            user: components["schemas"]["UserSuperLight"];
            /** Format: date */
            base_booking_date?: string | null;
            readonly organization_read_only: components["schemas"]["OrganizationLight"];
            readonly current: boolean;
        };
        AppointmentConfigSuperLightRequest: {
            user: components["schemas"]["UserSuperLightRequest"];
        };
        AppointmentPrice: {
            /** Format: double */
            price: number;
            /** Format: double */
            discount_price?: number | null;
            discount_percent?: number | null;
        };
        Attachment: {
            readonly id: number;
            attachment_files?: components["schemas"]["AttachmentFile"][] | null;
            /** Format: date-time */
            readonly created_at: string;
            /** Format: date-time */
            readonly updated_at: string | null;
            /** Format: uuid */
            readonly uuid: string;
            text?: string | null;
            /** Format: uuid */
            visit: string;
        };
        AttachmentFile: {
            readonly id: number;
            /** Format: date-time */
            readonly created_at: string;
            /** Format: date-time */
            readonly updated_at: string | null;
            /** Format: uuid */
            readonly uuid: string;
            /** Format: uri */
            file: string;
            /** Format: uuid */
            attachment: string;
        };
        AttachmentFileFinal: {
            /** Format: uri */
            file: string | null;
        };
        AttachmentFileFinalRequest: {
            /** Format: binary */
            file: File | null;
        };
        AttachmentFinal: {
            text?: string | null;
            attachment_files?: components["schemas"]["AttachmentFileFinal"][] | null;
        };
        AttachmentFinalRequest: {
            text?: string | null;
            attachment_files?: components["schemas"]["AttachmentFileFinalRequest"][] | null;
        };
        BoneAge: {
            readonly id: number;
            readonly coordinates: number[][][] | null;
            readonly bone_age_plot: components["schemas"]["PlotBase"] | null;
            /** Format: date-time */
            readonly created_at: string;
            /** Format: date-time */
            readonly updated_at: string | null;
            /** Format: uuid */
            readonly uuid: string;
            /** Format: uri */
            image_raw: string;
            /** Format: uri */
            image_preprocessed?: string | null;
            /** Format: uri */
            image_marked?: string | null;
            /** Format: double */
            result?: number | null;
            /** Format: double */
            doctor_result?: number | null;
            /** Format: double */
            choice_adult?: number | null;
            /** Format: double */
            choice_child?: number | null;
            /**
             * @description * `Delayed` - Delayed
             *     * `Advanced` - Advanced
             *     * `Normal` - Normal
             * @enum {string|null}
             */
            status?: "Delayed" | "Advanced" | "Normal" | "" | null;
            is_calculating?: boolean | null;
            /** Format: uuid */
            visit: string;
        };
        BoneAgeFinal: {
            /** Format: uri */
            image_raw: string | null;
        };
        BoneAgeFinalRequest: {
            /** Format: binary */
            image_raw: File | null;
        };
        BoneAgeStatusOnly: {
            /**
             * @description * `Delayed` - Delayed
             *     * `Advanced` - Advanced
             *     * `Normal` - Normal
             * @enum {string|null}
             */
            status?: "Delayed" | "Advanced" | "Normal" | "" | null;
        };
        BookingData: {
            readonly appointment_taker: string | null;
            /** Format: date-time */
            readonly appointment_start: string | null;
            /** Format: date-time */
            readonly appointment_end: string | null;
        };
        BuyPlan: {
            readonly url: string;
        };
        BuyPlanRequest: {
            /** Format: uuid */
            plan_uuid: string;
        };
        Calculation: {
            readonly id: number;
            readonly calculator_plot: components["schemas"]["PlotBase"] | null;
            readonly calculator_data: components["schemas"]["CalculatorData"] | null;
            /** Format: date-time */
            readonly created_at: string;
            /** Format: date-time */
            readonly updated_at: string | null;
            /** Format: uuid */
            readonly uuid: string;
            /** Format: double */
            bhi?: number | null;
            /** Format: double */
            mci?: number | null;
            /** Format: double */
            bhi_sds?: number | null;
            /** Format: double */
            mci_sds?: number | null;
            /** Format: double */
            weight?: number | null;
            /** Format: double */
            weight_sd?: number | null;
            /** Format: double */
            height?: number | null;
            /**
             * @description * `refer` - Refer
             *     * `reconsider` - Reconsider
             *     * `ok` - Ok
             * @enum {string|null}
             */
            height_status?: "refer" | "reconsider" | "ok" | "" | null;
            /** Format: double */
            height_sd?: number | null;
            /** Format: double */
            bmi?: number | null;
            /** Format: double */
            bmi_sd?: number | null;
            /**
             * @description * `UnderWeight` - UnderWeight
             *     * `NormalWeight` - NormalWeight
             *     * `OverWeight` - OverWeight
             *     * `Obesity` - Obesity
             * @enum {string|null}
             */
            bmi_status?: "UnderWeight" | "NormalWeight" | "OverWeight" | "Obesity" | "" | null;
            /** Format: double */
            head_circumference?: number | null;
            /** Format: double */
            arm_circumference?: number | null;
            /** Format: double */
            subscapular_skinfold?: number | null;
            /** Format: double */
            triceps_skinfold?: number | null;
            /** Format: uuid */
            visit: string;
        };
        CalculationFinal: {
            /** Format: double */
            weight?: number | null;
            /** Format: double */
            height?: number | null;
            /** Format: double */
            head_circumference?: number | null;
            /** Format: double */
            arm_circumference?: number | null;
            /** Format: double */
            subscapular_skinfold?: number | null;
            /** Format: double */
            triceps_skinfold?: number | null;
        };
        CalculationFinalRequest: {
            /** Format: double */
            weight?: number | null;
            /** Format: double */
            height?: number | null;
            /** Format: double */
            head_circumference?: number | null;
            /** Format: double */
            arm_circumference?: number | null;
            /** Format: double */
            subscapular_skinfold?: number | null;
            /** Format: double */
            triceps_skinfold?: number | null;
        };
        CalculationLight: {
            /** Format: uuid */
            readonly uuid: string;
            /** Format: double */
            weight?: number | null;
            /** Format: double */
            height?: number | null;
            /** Format: double */
            bmi?: number | null;
            /**
             * @description * `UnderWeight` - UnderWeight
             *     * `NormalWeight` - NormalWeight
             *     * `OverWeight` - OverWeight
             *     * `Obesity` - Obesity
             * @enum {string|null}
             */
            bmi_status?: "UnderWeight" | "NormalWeight" | "OverWeight" | "Obesity" | "" | null;
        };
        CalculatorData: {
            /** Format: double */
            hp: number | null;
            /** Format: double */
            hx: number | null;
            /** Format: double */
            hpd: number | null;
            /** Format: double */
            sds: number | null;
            /** Format: double */
            sec: number | null;
            /** Format: double */
            hest: number | null;
            /** Format: double */
            hestm: number | null;
            /** Format: double */
            poph: number | null;
            /** Format: double */
            sdhx: number | null;
            /** Format: double */
            sest: number | null;
            /** Format: double */
            hestp: number | null;
            /** Format: double */
            sestp: number | null;
            /** Format: double */
            sestm: number | null;
            /** Format: double */
            fmMeanHeight: number | null;
        };
        ChartInfo: {
            readonly chart_name: string;
            readonly x_axis_name: string;
            readonly y_axis_name: string;
            readonly x_grid_values: number[];
            readonly y_grid_values: number[];
        };
        ChooseOrg: {
            readonly sessionid: string;
            /** Format: date-time */
            readonly expires_at: string;
        };
        ChooseOrgRequest: {
            org_uuid?: string | null;
        };
        Color: {
            readonly light: string;
            readonly dark: string;
        };
        CurrentMedicine: {
            title: string;
            dose?: string | null;
        };
        CurrentMedicineRequest: {
            title: string;
            dose?: string | null;
        };
        DailyCalendar: {
            /** Format: date */
            date: string;
            intervals: components["schemas"]["Interval"][];
        };
        DailyCalendarRequest: {
            /** Format: date */
            date: string;
            intervals: components["schemas"]["IntervalRequest"][];
        };
        DayDistribution: {
            year: number;
            male: number;
            female: number;
        };
        Delta: {
            /** Format: double */
            readonly bone_age: number | null;
            /** Format: double */
            readonly bone_age_sd: number | null;
            /** Format: double */
            readonly bmi: number | null;
            /** Format: double */
            readonly height: number | null;
            /** Format: double */
            readonly weight: number | null;
            /** Format: double */
            readonly height_sd: number | null;
            /** Format: double */
            readonly weight_sd: number | null;
        };
        DoctorLight: {
            readonly is_registered: boolean;
            readonly first_name: string | null;
            readonly last_name: string | null;
            readonly specialty: string | null;
            readonly medical_number: string | null;
            /** Format: uri */
            readonly medical_profile_url: string | null;
            /** Format: uri */
            readonly national_card: string | null;
        };
        DoctorReadOnly: {
            readonly is_registered: boolean;
            readonly first_name: string | null;
            readonly last_name: string | null;
            /** Format: uri */
            readonly medical_profile_url: string | null;
            readonly specialty: string | null;
            readonly medical_number: string | null;
        };
        DoctorResult: {
            /** Format: double */
            doctor_result?: number | null;
        };
        DoctorSuperLight: {
            readonly is_registered: boolean;
            first_name?: string | null;
            last_name?: string | null;
            specialty?: string | null;
            medical_number?: string | null;
        };
        DoctorSuperLightRequest: {
            first_name?: string | null;
            last_name?: string | null;
            specialty?: string | null;
            medical_number?: string | null;
        };
        EndedMedicine: {
            title: string;
            /** Format: date */
            end_date?: string | null;
        };
        EndedMedicineRequest: {
            title: string;
            /** Format: date */
            end_date?: string | null;
        };
        FCMDevice: {
            /** Registration token */
            registration_id: string;
            /**
             * @description * `ios` - ios
             *     * `android` - android
             *     * `web` - web
             * @enum {string}
             */
            type: "ios" | "android" | "web";
        };
        FCMDeviceRequest: {
            /** Registration token */
            registration_id: string;
            /**
             * @description * `ios` - ios
             *     * `android` - android
             *     * `web` - web
             * @enum {string}
             */
            type: "ios" | "android" | "web";
        };
        FavoriteStrings: {
            readonly id: number;
            readonly children: components["schemas"]["FavoriteStrings"][];
            /** Format: date-time */
            readonly created_at: string;
            /** Format: date-time */
            readonly updated_at: string | null;
            /** Format: uuid */
            readonly uuid: string;
            /** @description Name of this group/folder (optional for leaf nodes) */
            name: string;
            /**
             * @description * `complaints` - Complaints
             *     * `diseases` - Diseases
             *     * `surgeries` - Surgeries
             *     * `allergies` - Allergies
             *     * `medicines` - Medicines
             *     * `medical_history` - Medical History
             *     * `p_c_e_r` - Paraclinical And Clinical Examination Report
             *     * `treatment_plan` - treatment_plan
             *     * `physician_diagnosis` - physician_diagnosis
             *     * `dose` - Dose
             * @enum {string}
             */
            tag: "complaints" | "diseases" | "surgeries" | "allergies" | "medicines" | "medical_history" | "p_c_e_r" | "treatment_plan" | "physician_diagnosis" | "dose";
            /** @description List of favorite strings */
            strings?: string[];
            /** Format: uuid */
            organization: string;
            /** @description Leave empty to make this a top-level item */
            parent?: number | null;
        };
        FavoriteStringsRequest: {
            /** @description Name of this group/folder (optional for leaf nodes) */
            name: string;
            /**
             * @description * `complaints` - Complaints
             *     * `diseases` - Diseases
             *     * `surgeries` - Surgeries
             *     * `allergies` - Allergies
             *     * `medicines` - Medicines
             *     * `medical_history` - Medical History
             *     * `p_c_e_r` - Paraclinical And Clinical Examination Report
             *     * `treatment_plan` - treatment_plan
             *     * `physician_diagnosis` - physician_diagnosis
             *     * `dose` - Dose
             * @enum {string}
             */
            tag: "complaints" | "diseases" | "surgeries" | "allergies" | "medicines" | "medical_history" | "p_c_e_r" | "treatment_plan" | "physician_diagnosis" | "dose";
            /** @description List of favorite strings */
            strings?: string[];
            /** @description Leave empty to make this a top-level item */
            parent?: number | null;
        };
        FeatureFlag: {
            /**
             * @description * `disabled` - Disabled
             *     * `limited` - Limited
             *     * `enabled` - Enabled
             * @enum {string}
             */
            readonly ocr: "disabled" | "limited" | "enabled";
            /**
             * @description * `disabled` - Disabled
             *     * `limited` - Limited
             *     * `enabled` - Enabled
             * @enum {string}
             */
            readonly appointment: "disabled" | "limited" | "enabled";
            /**
             * @description * `disabled` - Disabled
             *     * `limited` - Limited
             *     * `enabled` - Enabled
             * @enum {string}
             */
            readonly voice: "disabled" | "limited" | "enabled";
        };
        Feedback: {
            phone_number: string;
            name: string;
            text: string;
        };
        FeedbackRequest: {
            recaptcha_code: string;
            phone_number: string;
            name: string;
            text: string;
        };
        FilterList: {
            value: string;
        };
        Graph: {
            readonly key: string;
            readonly label: string;
            readonly color: components["schemas"]["Color"];
            readonly is_main: boolean;
        };
        GrowthChartDetail: {
            title: string;
            /**
             * @description * `CDC` - cdc
             *     * `WHO` - who
             * @enum {string}
             */
            org: "CDC" | "WHO";
            readonly chart: components["schemas"]["PlotBase"] | null;
        };
        GrowthChartList: {
            /** Format: uuid */
            readonly uuid: string;
            title: string;
            /**
             * @description * `CDC` - cdc
             *     * `WHO` - who
             * @enum {string}
             */
            org: "CDC" | "WHO";
        };
        HasSession: {
            readonly has_session: boolean;
        };
        HourDistribution: {
            hour: number;
            visits: number;
            labs: number;
        };
        HoverInfo: {
            readonly title: string;
            readonly value: string | null;
            readonly is_delta: boolean;
            readonly is_title: boolean;
            /**
             * @description * `refer` - Refer
             *     * `reconsider` - Reconsider
             *     * `ok` - Ok
             * @enum {string|null}
             */
            readonly status: "refer" | "reconsider" | "ok" | null;
        };
        Interval: {
            /** Format: time */
            start: string;
            /** Format: time */
            end: string;
            /**
             * @description * `5` - 5 minutes
             *     * `10` - 10 minutes
             *     * `15` - 15 minutes
             *     * `30` - 30 minutes
             * @enum {integer}
             */
            every_minutes: 5 | 10 | 15 | 30;
            capacity: number;
        };
        IntervalRequest: {
            /** Format: time */
            start: string;
            /** Format: time */
            end: string;
            /**
             * @description * `5` - 5 minutes
             *     * `10` - 10 minutes
             *     * `15` - 15 minutes
             *     * `30` - 30 minutes
             * @enum {integer}
             */
            every_minutes: 5 | 10 | 15 | 30;
            capacity: number;
        };
        ManagementLight: {
            readonly id: number;
            /** Format: date-time */
            readonly created_at: string;
            /** Format: date-time */
            readonly updated_at: string | null;
            is_deleted?: boolean;
            /** Format: uuid */
            readonly uuid: string;
            /**
             * @description * `waiting` - Waiting
             *     * `visiting` - Visiting
             *     * `done` - Done
             * @enum {string}
             */
            status: "waiting" | "visiting" | "done";
            /**
             * @description * `visit` - Visit
             *     * `lab` - Lab
             * @enum {string}
             */
            reason?: "visit" | "lab";
            index?: number;
            /**
             * @description * `is_inside` - IS INSIDE
             *     * `wait_to_go_inside` - Waint To Go Inside
             *     * `queued` - Queued
             * @enum {string}
             */
            state?: "is_inside" | "wait_to_go_inside" | "queued";
            /** Format: date-time */
            done_created_at?: string | null;
            is_paid?: boolean;
            is_managed?: boolean;
            /** Format: date-time */
            managed_time?: string | null;
            is_emergency?: boolean;
            is_migrated?: boolean;
            /** Format: uuid */
            organization: string;
            /** Format: uuid */
            created_for?: string | null;
            /** Format: uuid */
            patient: string;
        };
        ManagementStats: {
            visits: number;
            labs: number;
            total: number;
            hour_distribution: components["schemas"]["HourDistribution"][];
        };
        MembershipStats: {
            male: number;
            female: number;
            total: number;
            birth_year_distribution: components["schemas"]["DayDistribution"][];
        };
        OCRTestRow: {
            test: string;
            values: components["schemas"]["OCRValue"][];
        };
        OCRValue: {
            value?: string | null;
            unit?: string | null;
            reference_range?: string | null;
            abnormal?: boolean | null;
            /** Format: double */
            delta?: number | null;
        };
        OTPCallback: {
            readonly should_signup: boolean;
            readonly pending: boolean;
        };
        OTPCallbackRequest: {
            recaptcha_code: string;
            code: string;
            phone_number: string;
        };
        OTPInit: {
            phone_number: string;
            readonly remaining_seconds: number;
        };
        OTPInitRequest: {
            recaptcha_code: string;
            phone_number: string;
        };
        Ocr: {
            readonly id: number;
            ocr_images?: components["schemas"]["OcrImage"][] | null;
            ocr_datas?: components["schemas"]["OcrData"][] | null;
            /** Format: date-time */
            readonly created_at: string;
            /** Format: date-time */
            readonly updated_at: string | null;
            /** Format: uuid */
            readonly uuid: string;
            /** Format: date */
            report_created_at?: string | null;
            is_calculating?: boolean;
            /** Format: uuid */
            visit: string;
        };
        OcrAbnormalCountOnly: {
            /** Format: uuid */
            readonly uuid: string;
            readonly abnormal_count: number;
        };
        OcrData: {
            readonly id: number;
            /**
             * @description * `upper_out_of_range` - Upper Out of Range
             *     * `lower_out_of_range` - Lower Out of Range
             *     * `ok` - ok
             * @enum {string|null}
             */
            readonly status: "upper_out_of_range" | "lower_out_of_range" | "ok" | null;
            /** Format: date-time */
            readonly created_at: string;
            /** Format: date-time */
            readonly updated_at: string | null;
            /** Format: uuid */
            readonly uuid: string;
            test?: string | null;
            value?: string | null;
            unit?: string | null;
            reference_range?: string | null;
            abnormal?: boolean | null;
            label?: string | null;
            /** Format: uuid */
            readonly ocr: string;
        };
        OcrDataRequest: {
            /** Format: uuid */
            ocr_uuid: string;
            test?: string | null;
            value?: string | null;
            unit?: string | null;
            reference_range?: string | null;
            abnormal?: boolean | null;
            label?: string | null;
        };
        OcrFinal: {
            /** Format: date */
            report_created_at?: string | null;
            ocr_images?: components["schemas"]["OcrImageFinal"][];
        };
        OcrFinalRequest: {
            /** Format: date */
            report_created_at?: string | null;
            ocr_images?: components["schemas"]["OcrImageFinalRequest"][];
        };
        OcrImage: {
            readonly id: number;
            /** Format: date-time */
            readonly created_at: string;
            /** Format: date-time */
            readonly updated_at: string | null;
            /** Format: uuid */
            readonly uuid: string;
            /** Format: uri */
            image: string;
            /** Format: uuid */
            ocr: string;
        };
        OcrImageFinal: {
            /** Format: uri */
            image: string | null;
        };
        OcrImageFinalRequest: {
            /** Format: binary */
            image: File | null;
        };
        OcrSingleOutput: {
            column_1: string | null;
            column_2: string | null;
            column_3: string | null;
        };
        OcrSingleOutputRequest: {
            column_1: string | null;
            column_2: string | null;
            column_3: string | null;
        };
        Organization: {
            /** Format: uuid */
            readonly uuid: string;
            is_registered?: boolean;
            name: string;
            /**
             * @description * `Africa/Abidjan` - Africa/Abidjan
             *     * `Africa/Accra` - Africa/Accra
             *     * `Africa/Addis_Ababa` - Africa/Addis_Ababa
             *     * `Africa/Algiers` - Africa/Algiers
             *     * `Africa/Asmara` - Africa/Asmara
             *     * `Africa/Asmera` - Africa/Asmera
             *     * `Africa/Bamako` - Africa/Bamako
             *     * `Africa/Bangui` - Africa/Bangui
             *     * `Africa/Banjul` - Africa/Banjul
             *     * `Africa/Bissau` - Africa/Bissau
             *     * `Africa/Blantyre` - Africa/Blantyre
             *     * `Africa/Brazzaville` - Africa/Brazzaville
             *     * `Africa/Bujumbura` - Africa/Bujumbura
             *     * `Africa/Cairo` - Africa/Cairo
             *     * `Africa/Casablanca` - Africa/Casablanca
             *     * `Africa/Ceuta` - Africa/Ceuta
             *     * `Africa/Conakry` - Africa/Conakry
             *     * `Africa/Dakar` - Africa/Dakar
             *     * `Africa/Dar_es_Salaam` - Africa/Dar_es_Salaam
             *     * `Africa/Djibouti` - Africa/Djibouti
             *     * `Africa/Douala` - Africa/Douala
             *     * `Africa/El_Aaiun` - Africa/El_Aaiun
             *     * `Africa/Freetown` - Africa/Freetown
             *     * `Africa/Gaborone` - Africa/Gaborone
             *     * `Africa/Harare` - Africa/Harare
             *     * `Africa/Johannesburg` - Africa/Johannesburg
             *     * `Africa/Juba` - Africa/Juba
             *     * `Africa/Kampala` - Africa/Kampala
             *     * `Africa/Khartoum` - Africa/Khartoum
             *     * `Africa/Kigali` - Africa/Kigali
             *     * `Africa/Kinshasa` - Africa/Kinshasa
             *     * `Africa/Lagos` - Africa/Lagos
             *     * `Africa/Libreville` - Africa/Libreville
             *     * `Africa/Lome` - Africa/Lome
             *     * `Africa/Luanda` - Africa/Luanda
             *     * `Africa/Lubumbashi` - Africa/Lubumbashi
             *     * `Africa/Lusaka` - Africa/Lusaka
             *     * `Africa/Malabo` - Africa/Malabo
             *     * `Africa/Maputo` - Africa/Maputo
             *     * `Africa/Maseru` - Africa/Maseru
             *     * `Africa/Mbabane` - Africa/Mbabane
             *     * `Africa/Mogadishu` - Africa/Mogadishu
             *     * `Africa/Monrovia` - Africa/Monrovia
             *     * `Africa/Nairobi` - Africa/Nairobi
             *     * `Africa/Ndjamena` - Africa/Ndjamena
             *     * `Africa/Niamey` - Africa/Niamey
             *     * `Africa/Nouakchott` - Africa/Nouakchott
             *     * `Africa/Ouagadougou` - Africa/Ouagadougou
             *     * `Africa/Porto-Novo` - Africa/Porto-Novo
             *     * `Africa/Sao_Tome` - Africa/Sao_Tome
             *     * `Africa/Timbuktu` - Africa/Timbuktu
             *     * `Africa/Tripoli` - Africa/Tripoli
             *     * `Africa/Tunis` - Africa/Tunis
             *     * `Africa/Windhoek` - Africa/Windhoek
             *     * `America/Adak` - America/Adak
             *     * `America/Anchorage` - America/Anchorage
             *     * `America/Anguilla` - America/Anguilla
             *     * `America/Antigua` - America/Antigua
             *     * `America/Araguaina` - America/Araguaina
             *     * `America/Argentina/Buenos_Aires` - America/Argentina/Buenos_Aires
             *     * `America/Argentina/Catamarca` - America/Argentina/Catamarca
             *     * `America/Argentina/ComodRivadavia` - America/Argentina/ComodRivadavia
             *     * `America/Argentina/Cordoba` - America/Argentina/Cordoba
             *     * `America/Argentina/Jujuy` - America/Argentina/Jujuy
             *     * `America/Argentina/La_Rioja` - America/Argentina/La_Rioja
             *     * `America/Argentina/Mendoza` - America/Argentina/Mendoza
             *     * `America/Argentina/Rio_Gallegos` - America/Argentina/Rio_Gallegos
             *     * `America/Argentina/Salta` - America/Argentina/Salta
             *     * `America/Argentina/San_Juan` - America/Argentina/San_Juan
             *     * `America/Argentina/San_Luis` - America/Argentina/San_Luis
             *     * `America/Argentina/Tucuman` - America/Argentina/Tucuman
             *     * `America/Argentina/Ushuaia` - America/Argentina/Ushuaia
             *     * `America/Aruba` - America/Aruba
             *     * `America/Asuncion` - America/Asuncion
             *     * `America/Atikokan` - America/Atikokan
             *     * `America/Atka` - America/Atka
             *     * `America/Bahia` - America/Bahia
             *     * `America/Bahia_Banderas` - America/Bahia_Banderas
             *     * `America/Barbados` - America/Barbados
             *     * `America/Belem` - America/Belem
             *     * `America/Belize` - America/Belize
             *     * `America/Blanc-Sablon` - America/Blanc-Sablon
             *     * `America/Boa_Vista` - America/Boa_Vista
             *     * `America/Bogota` - America/Bogota
             *     * `America/Boise` - America/Boise
             *     * `America/Buenos_Aires` - America/Buenos_Aires
             *     * `America/Cambridge_Bay` - America/Cambridge_Bay
             *     * `America/Campo_Grande` - America/Campo_Grande
             *     * `America/Cancun` - America/Cancun
             *     * `America/Caracas` - America/Caracas
             *     * `America/Catamarca` - America/Catamarca
             *     * `America/Cayenne` - America/Cayenne
             *     * `America/Cayman` - America/Cayman
             *     * `America/Chicago` - America/Chicago
             *     * `America/Chihuahua` - America/Chihuahua
             *     * `America/Ciudad_Juarez` - America/Ciudad_Juarez
             *     * `America/Coral_Harbour` - America/Coral_Harbour
             *     * `America/Cordoba` - America/Cordoba
             *     * `America/Costa_Rica` - America/Costa_Rica
             *     * `America/Coyhaique` - America/Coyhaique
             *     * `America/Creston` - America/Creston
             *     * `America/Cuiaba` - America/Cuiaba
             *     * `America/Curacao` - America/Curacao
             *     * `America/Danmarkshavn` - America/Danmarkshavn
             *     * `America/Dawson` - America/Dawson
             *     * `America/Dawson_Creek` - America/Dawson_Creek
             *     * `America/Denver` - America/Denver
             *     * `America/Detroit` - America/Detroit
             *     * `America/Dominica` - America/Dominica
             *     * `America/Edmonton` - America/Edmonton
             *     * `America/Eirunepe` - America/Eirunepe
             *     * `America/El_Salvador` - America/El_Salvador
             *     * `America/Ensenada` - America/Ensenada
             *     * `America/Fort_Nelson` - America/Fort_Nelson
             *     * `America/Fort_Wayne` - America/Fort_Wayne
             *     * `America/Fortaleza` - America/Fortaleza
             *     * `America/Glace_Bay` - America/Glace_Bay
             *     * `America/Godthab` - America/Godthab
             *     * `America/Goose_Bay` - America/Goose_Bay
             *     * `America/Grand_Turk` - America/Grand_Turk
             *     * `America/Grenada` - America/Grenada
             *     * `America/Guadeloupe` - America/Guadeloupe
             *     * `America/Guatemala` - America/Guatemala
             *     * `America/Guayaquil` - America/Guayaquil
             *     * `America/Guyana` - America/Guyana
             *     * `America/Halifax` - America/Halifax
             *     * `America/Havana` - America/Havana
             *     * `America/Hermosillo` - America/Hermosillo
             *     * `America/Indiana/Indianapolis` - America/Indiana/Indianapolis
             *     * `America/Indiana/Knox` - America/Indiana/Knox
             *     * `America/Indiana/Marengo` - America/Indiana/Marengo
             *     * `America/Indiana/Petersburg` - America/Indiana/Petersburg
             *     * `America/Indiana/Tell_City` - America/Indiana/Tell_City
             *     * `America/Indiana/Vevay` - America/Indiana/Vevay
             *     * `America/Indiana/Vincennes` - America/Indiana/Vincennes
             *     * `America/Indiana/Winamac` - America/Indiana/Winamac
             *     * `America/Indianapolis` - America/Indianapolis
             *     * `America/Inuvik` - America/Inuvik
             *     * `America/Iqaluit` - America/Iqaluit
             *     * `America/Jamaica` - America/Jamaica
             *     * `America/Jujuy` - America/Jujuy
             *     * `America/Juneau` - America/Juneau
             *     * `America/Kentucky/Louisville` - America/Kentucky/Louisville
             *     * `America/Kentucky/Monticello` - America/Kentucky/Monticello
             *     * `America/Knox_IN` - America/Knox_IN
             *     * `America/Kralendijk` - America/Kralendijk
             *     * `America/La_Paz` - America/La_Paz
             *     * `America/Lima` - America/Lima
             *     * `America/Los_Angeles` - America/Los_Angeles
             *     * `America/Louisville` - America/Louisville
             *     * `America/Lower_Princes` - America/Lower_Princes
             *     * `America/Maceio` - America/Maceio
             *     * `America/Managua` - America/Managua
             *     * `America/Manaus` - America/Manaus
             *     * `America/Marigot` - America/Marigot
             *     * `America/Martinique` - America/Martinique
             *     * `America/Matamoros` - America/Matamoros
             *     * `America/Mazatlan` - America/Mazatlan
             *     * `America/Mendoza` - America/Mendoza
             *     * `America/Menominee` - America/Menominee
             *     * `America/Merida` - America/Merida
             *     * `America/Metlakatla` - America/Metlakatla
             *     * `America/Mexico_City` - America/Mexico_City
             *     * `America/Miquelon` - America/Miquelon
             *     * `America/Moncton` - America/Moncton
             *     * `America/Monterrey` - America/Monterrey
             *     * `America/Montevideo` - America/Montevideo
             *     * `America/Montreal` - America/Montreal
             *     * `America/Montserrat` - America/Montserrat
             *     * `America/Nassau` - America/Nassau
             *     * `America/New_York` - America/New_York
             *     * `America/Nipigon` - America/Nipigon
             *     * `America/Nome` - America/Nome
             *     * `America/Noronha` - America/Noronha
             *     * `America/North_Dakota/Beulah` - America/North_Dakota/Beulah
             *     * `America/North_Dakota/Center` - America/North_Dakota/Center
             *     * `America/North_Dakota/New_Salem` - America/North_Dakota/New_Salem
             *     * `America/Nuuk` - America/Nuuk
             *     * `America/Ojinaga` - America/Ojinaga
             *     * `America/Panama` - America/Panama
             *     * `America/Pangnirtung` - America/Pangnirtung
             *     * `America/Paramaribo` - America/Paramaribo
             *     * `America/Phoenix` - America/Phoenix
             *     * `America/Port-au-Prince` - America/Port-au-Prince
             *     * `America/Port_of_Spain` - America/Port_of_Spain
             *     * `America/Porto_Acre` - America/Porto_Acre
             *     * `America/Porto_Velho` - America/Porto_Velho
             *     * `America/Puerto_Rico` - America/Puerto_Rico
             *     * `America/Punta_Arenas` - America/Punta_Arenas
             *     * `America/Rainy_River` - America/Rainy_River
             *     * `America/Rankin_Inlet` - America/Rankin_Inlet
             *     * `America/Recife` - America/Recife
             *     * `America/Regina` - America/Regina
             *     * `America/Resolute` - America/Resolute
             *     * `America/Rio_Branco` - America/Rio_Branco
             *     * `America/Rosario` - America/Rosario
             *     * `America/Santa_Isabel` - America/Santa_Isabel
             *     * `America/Santarem` - America/Santarem
             *     * `America/Santiago` - America/Santiago
             *     * `America/Santo_Domingo` - America/Santo_Domingo
             *     * `America/Sao_Paulo` - America/Sao_Paulo
             *     * `America/Scoresbysund` - America/Scoresbysund
             *     * `America/Shiprock` - America/Shiprock
             *     * `America/Sitka` - America/Sitka
             *     * `America/St_Barthelemy` - America/St_Barthelemy
             *     * `America/St_Johns` - America/St_Johns
             *     * `America/St_Kitts` - America/St_Kitts
             *     * `America/St_Lucia` - America/St_Lucia
             *     * `America/St_Thomas` - America/St_Thomas
             *     * `America/St_Vincent` - America/St_Vincent
             *     * `America/Swift_Current` - America/Swift_Current
             *     * `America/Tegucigalpa` - America/Tegucigalpa
             *     * `America/Thule` - America/Thule
             *     * `America/Thunder_Bay` - America/Thunder_Bay
             *     * `America/Tijuana` - America/Tijuana
             *     * `America/Toronto` - America/Toronto
             *     * `America/Tortola` - America/Tortola
             *     * `America/Vancouver` - America/Vancouver
             *     * `America/Virgin` - America/Virgin
             *     * `America/Whitehorse` - America/Whitehorse
             *     * `America/Winnipeg` - America/Winnipeg
             *     * `America/Yakutat` - America/Yakutat
             *     * `America/Yellowknife` - America/Yellowknife
             *     * `Antarctica/Casey` - Antarctica/Casey
             *     * `Antarctica/Davis` - Antarctica/Davis
             *     * `Antarctica/DumontDUrville` - Antarctica/DumontDUrville
             *     * `Antarctica/Macquarie` - Antarctica/Macquarie
             *     * `Antarctica/Mawson` - Antarctica/Mawson
             *     * `Antarctica/McMurdo` - Antarctica/McMurdo
             *     * `Antarctica/Palmer` - Antarctica/Palmer
             *     * `Antarctica/Rothera` - Antarctica/Rothera
             *     * `Antarctica/South_Pole` - Antarctica/South_Pole
             *     * `Antarctica/Syowa` - Antarctica/Syowa
             *     * `Antarctica/Troll` - Antarctica/Troll
             *     * `Antarctica/Vostok` - Antarctica/Vostok
             *     * `Arctic/Longyearbyen` - Arctic/Longyearbyen
             *     * `Asia/Aden` - Asia/Aden
             *     * `Asia/Almaty` - Asia/Almaty
             *     * `Asia/Amman` - Asia/Amman
             *     * `Asia/Anadyr` - Asia/Anadyr
             *     * `Asia/Aqtau` - Asia/Aqtau
             *     * `Asia/Aqtobe` - Asia/Aqtobe
             *     * `Asia/Ashgabat` - Asia/Ashgabat
             *     * `Asia/Ashkhabad` - Asia/Ashkhabad
             *     * `Asia/Atyrau` - Asia/Atyrau
             *     * `Asia/Baghdad` - Asia/Baghdad
             *     * `Asia/Bahrain` - Asia/Bahrain
             *     * `Asia/Baku` - Asia/Baku
             *     * `Asia/Bangkok` - Asia/Bangkok
             *     * `Asia/Barnaul` - Asia/Barnaul
             *     * `Asia/Beirut` - Asia/Beirut
             *     * `Asia/Bishkek` - Asia/Bishkek
             *     * `Asia/Brunei` - Asia/Brunei
             *     * `Asia/Calcutta` - Asia/Calcutta
             *     * `Asia/Chita` - Asia/Chita
             *     * `Asia/Choibalsan` - Asia/Choibalsan
             *     * `Asia/Chongqing` - Asia/Chongqing
             *     * `Asia/Chungking` - Asia/Chungking
             *     * `Asia/Colombo` - Asia/Colombo
             *     * `Asia/Dacca` - Asia/Dacca
             *     * `Asia/Damascus` - Asia/Damascus
             *     * `Asia/Dhaka` - Asia/Dhaka
             *     * `Asia/Dili` - Asia/Dili
             *     * `Asia/Dubai` - Asia/Dubai
             *     * `Asia/Dushanbe` - Asia/Dushanbe
             *     * `Asia/Famagusta` - Asia/Famagusta
             *     * `Asia/Gaza` - Asia/Gaza
             *     * `Asia/Harbin` - Asia/Harbin
             *     * `Asia/Hebron` - Asia/Hebron
             *     * `Asia/Ho_Chi_Minh` - Asia/Ho_Chi_Minh
             *     * `Asia/Hong_Kong` - Asia/Hong_Kong
             *     * `Asia/Hovd` - Asia/Hovd
             *     * `Asia/Irkutsk` - Asia/Irkutsk
             *     * `Asia/Istanbul` - Asia/Istanbul
             *     * `Asia/Jakarta` - Asia/Jakarta
             *     * `Asia/Jayapura` - Asia/Jayapura
             *     * `Asia/Jerusalem` - Asia/Jerusalem
             *     * `Asia/Kabul` - Asia/Kabul
             *     * `Asia/Kamchatka` - Asia/Kamchatka
             *     * `Asia/Karachi` - Asia/Karachi
             *     * `Asia/Kashgar` - Asia/Kashgar
             *     * `Asia/Kathmandu` - Asia/Kathmandu
             *     * `Asia/Katmandu` - Asia/Katmandu
             *     * `Asia/Khandyga` - Asia/Khandyga
             *     * `Asia/Kolkata` - Asia/Kolkata
             *     * `Asia/Krasnoyarsk` - Asia/Krasnoyarsk
             *     * `Asia/Kuala_Lumpur` - Asia/Kuala_Lumpur
             *     * `Asia/Kuching` - Asia/Kuching
             *     * `Asia/Kuwait` - Asia/Kuwait
             *     * `Asia/Macao` - Asia/Macao
             *     * `Asia/Macau` - Asia/Macau
             *     * `Asia/Magadan` - Asia/Magadan
             *     * `Asia/Makassar` - Asia/Makassar
             *     * `Asia/Manila` - Asia/Manila
             *     * `Asia/Muscat` - Asia/Muscat
             *     * `Asia/Nicosia` - Asia/Nicosia
             *     * `Asia/Novokuznetsk` - Asia/Novokuznetsk
             *     * `Asia/Novosibirsk` - Asia/Novosibirsk
             *     * `Asia/Omsk` - Asia/Omsk
             *     * `Asia/Oral` - Asia/Oral
             *     * `Asia/Phnom_Penh` - Asia/Phnom_Penh
             *     * `Asia/Pontianak` - Asia/Pontianak
             *     * `Asia/Pyongyang` - Asia/Pyongyang
             *     * `Asia/Qatar` - Asia/Qatar
             *     * `Asia/Qostanay` - Asia/Qostanay
             *     * `Asia/Qyzylorda` - Asia/Qyzylorda
             *     * `Asia/Rangoon` - Asia/Rangoon
             *     * `Asia/Riyadh` - Asia/Riyadh
             *     * `Asia/Saigon` - Asia/Saigon
             *     * `Asia/Sakhalin` - Asia/Sakhalin
             *     * `Asia/Samarkand` - Asia/Samarkand
             *     * `Asia/Seoul` - Asia/Seoul
             *     * `Asia/Shanghai` - Asia/Shanghai
             *     * `Asia/Singapore` - Asia/Singapore
             *     * `Asia/Srednekolymsk` - Asia/Srednekolymsk
             *     * `Asia/Taipei` - Asia/Taipei
             *     * `Asia/Tashkent` - Asia/Tashkent
             *     * `Asia/Tbilisi` - Asia/Tbilisi
             *     * `Asia/Tehran` - Asia/Tehran
             *     * `Asia/Tel_Aviv` - Asia/Tel_Aviv
             *     * `Asia/Thimbu` - Asia/Thimbu
             *     * `Asia/Thimphu` - Asia/Thimphu
             *     * `Asia/Tokyo` - Asia/Tokyo
             *     * `Asia/Tomsk` - Asia/Tomsk
             *     * `Asia/Ujung_Pandang` - Asia/Ujung_Pandang
             *     * `Asia/Ulaanbaatar` - Asia/Ulaanbaatar
             *     * `Asia/Ulan_Bator` - Asia/Ulan_Bator
             *     * `Asia/Urumqi` - Asia/Urumqi
             *     * `Asia/Ust-Nera` - Asia/Ust-Nera
             *     * `Asia/Vientiane` - Asia/Vientiane
             *     * `Asia/Vladivostok` - Asia/Vladivostok
             *     * `Asia/Yakutsk` - Asia/Yakutsk
             *     * `Asia/Yangon` - Asia/Yangon
             *     * `Asia/Yekaterinburg` - Asia/Yekaterinburg
             *     * `Asia/Yerevan` - Asia/Yerevan
             *     * `Atlantic/Azores` - Atlantic/Azores
             *     * `Atlantic/Bermuda` - Atlantic/Bermuda
             *     * `Atlantic/Canary` - Atlantic/Canary
             *     * `Atlantic/Cape_Verde` - Atlantic/Cape_Verde
             *     * `Atlantic/Faeroe` - Atlantic/Faeroe
             *     * `Atlantic/Faroe` - Atlantic/Faroe
             *     * `Atlantic/Jan_Mayen` - Atlantic/Jan_Mayen
             *     * `Atlantic/Madeira` - Atlantic/Madeira
             *     * `Atlantic/Reykjavik` - Atlantic/Reykjavik
             *     * `Atlantic/South_Georgia` - Atlantic/South_Georgia
             *     * `Atlantic/St_Helena` - Atlantic/St_Helena
             *     * `Atlantic/Stanley` - Atlantic/Stanley
             *     * `Australia/ACT` - Australia/ACT
             *     * `Australia/Adelaide` - Australia/Adelaide
             *     * `Australia/Brisbane` - Australia/Brisbane
             *     * `Australia/Broken_Hill` - Australia/Broken_Hill
             *     * `Australia/Canberra` - Australia/Canberra
             *     * `Australia/Currie` - Australia/Currie
             *     * `Australia/Darwin` - Australia/Darwin
             *     * `Australia/Eucla` - Australia/Eucla
             *     * `Australia/Hobart` - Australia/Hobart
             *     * `Australia/LHI` - Australia/LHI
             *     * `Australia/Lindeman` - Australia/Lindeman
             *     * `Australia/Lord_Howe` - Australia/Lord_Howe
             *     * `Australia/Melbourne` - Australia/Melbourne
             *     * `Australia/NSW` - Australia/NSW
             *     * `Australia/North` - Australia/North
             *     * `Australia/Perth` - Australia/Perth
             *     * `Australia/Queensland` - Australia/Queensland
             *     * `Australia/South` - Australia/South
             *     * `Australia/Sydney` - Australia/Sydney
             *     * `Australia/Tasmania` - Australia/Tasmania
             *     * `Australia/Victoria` - Australia/Victoria
             *     * `Australia/West` - Australia/West
             *     * `Australia/Yancowinna` - Australia/Yancowinna
             *     * `Brazil/Acre` - Brazil/Acre
             *     * `Brazil/DeNoronha` - Brazil/DeNoronha
             *     * `Brazil/East` - Brazil/East
             *     * `Brazil/West` - Brazil/West
             *     * `CET` - CET
             *     * `CST6CDT` - CST6CDT
             *     * `Canada/Atlantic` - Canada/Atlantic
             *     * `Canada/Central` - Canada/Central
             *     * `Canada/Eastern` - Canada/Eastern
             *     * `Canada/Mountain` - Canada/Mountain
             *     * `Canada/Newfoundland` - Canada/Newfoundland
             *     * `Canada/Pacific` - Canada/Pacific
             *     * `Canada/Saskatchewan` - Canada/Saskatchewan
             *     * `Canada/Yukon` - Canada/Yukon
             *     * `Chile/Continental` - Chile/Continental
             *     * `Chile/EasterIsland` - Chile/EasterIsland
             *     * `Cuba` - Cuba
             *     * `EET` - EET
             *     * `EST` - EST
             *     * `EST5EDT` - EST5EDT
             *     * `Egypt` - Egypt
             *     * `Eire` - Eire
             *     * `Etc/GMT` - Etc/GMT
             *     * `Etc/GMT+0` - Etc/GMT+0
             *     * `Etc/GMT+1` - Etc/GMT+1
             *     * `Etc/GMT+10` - Etc/GMT+10
             *     * `Etc/GMT+11` - Etc/GMT+11
             *     * `Etc/GMT+12` - Etc/GMT+12
             *     * `Etc/GMT+2` - Etc/GMT+2
             *     * `Etc/GMT+3` - Etc/GMT+3
             *     * `Etc/GMT+4` - Etc/GMT+4
             *     * `Etc/GMT+5` - Etc/GMT+5
             *     * `Etc/GMT+6` - Etc/GMT+6
             *     * `Etc/GMT+7` - Etc/GMT+7
             *     * `Etc/GMT+8` - Etc/GMT+8
             *     * `Etc/GMT+9` - Etc/GMT+9
             *     * `Etc/GMT-0` - Etc/GMT-0
             *     * `Etc/GMT-1` - Etc/GMT-1
             *     * `Etc/GMT-10` - Etc/GMT-10
             *     * `Etc/GMT-11` - Etc/GMT-11
             *     * `Etc/GMT-12` - Etc/GMT-12
             *     * `Etc/GMT-13` - Etc/GMT-13
             *     * `Etc/GMT-14` - Etc/GMT-14
             *     * `Etc/GMT-2` - Etc/GMT-2
             *     * `Etc/GMT-3` - Etc/GMT-3
             *     * `Etc/GMT-4` - Etc/GMT-4
             *     * `Etc/GMT-5` - Etc/GMT-5
             *     * `Etc/GMT-6` - Etc/GMT-6
             *     * `Etc/GMT-7` - Etc/GMT-7
             *     * `Etc/GMT-8` - Etc/GMT-8
             *     * `Etc/GMT-9` - Etc/GMT-9
             *     * `Etc/GMT0` - Etc/GMT0
             *     * `Etc/Greenwich` - Etc/Greenwich
             *     * `Etc/UCT` - Etc/UCT
             *     * `Etc/UTC` - Etc/UTC
             *     * `Etc/Universal` - Etc/Universal
             *     * `Etc/Zulu` - Etc/Zulu
             *     * `Europe/Amsterdam` - Europe/Amsterdam
             *     * `Europe/Andorra` - Europe/Andorra
             *     * `Europe/Astrakhan` - Europe/Astrakhan
             *     * `Europe/Athens` - Europe/Athens
             *     * `Europe/Belfast` - Europe/Belfast
             *     * `Europe/Belgrade` - Europe/Belgrade
             *     * `Europe/Berlin` - Europe/Berlin
             *     * `Europe/Bratislava` - Europe/Bratislava
             *     * `Europe/Brussels` - Europe/Brussels
             *     * `Europe/Bucharest` - Europe/Bucharest
             *     * `Europe/Budapest` - Europe/Budapest
             *     * `Europe/Busingen` - Europe/Busingen
             *     * `Europe/Chisinau` - Europe/Chisinau
             *     * `Europe/Copenhagen` - Europe/Copenhagen
             *     * `Europe/Dublin` - Europe/Dublin
             *     * `Europe/Gibraltar` - Europe/Gibraltar
             *     * `Europe/Guernsey` - Europe/Guernsey
             *     * `Europe/Helsinki` - Europe/Helsinki
             *     * `Europe/Isle_of_Man` - Europe/Isle_of_Man
             *     * `Europe/Istanbul` - Europe/Istanbul
             *     * `Europe/Jersey` - Europe/Jersey
             *     * `Europe/Kaliningrad` - Europe/Kaliningrad
             *     * `Europe/Kiev` - Europe/Kiev
             *     * `Europe/Kirov` - Europe/Kirov
             *     * `Europe/Kyiv` - Europe/Kyiv
             *     * `Europe/Lisbon` - Europe/Lisbon
             *     * `Europe/Ljubljana` - Europe/Ljubljana
             *     * `Europe/London` - Europe/London
             *     * `Europe/Luxembourg` - Europe/Luxembourg
             *     * `Europe/Madrid` - Europe/Madrid
             *     * `Europe/Malta` - Europe/Malta
             *     * `Europe/Mariehamn` - Europe/Mariehamn
             *     * `Europe/Minsk` - Europe/Minsk
             *     * `Europe/Monaco` - Europe/Monaco
             *     * `Europe/Moscow` - Europe/Moscow
             *     * `Europe/Nicosia` - Europe/Nicosia
             *     * `Europe/Oslo` - Europe/Oslo
             *     * `Europe/Paris` - Europe/Paris
             *     * `Europe/Podgorica` - Europe/Podgorica
             *     * `Europe/Prague` - Europe/Prague
             *     * `Europe/Riga` - Europe/Riga
             *     * `Europe/Rome` - Europe/Rome
             *     * `Europe/Samara` - Europe/Samara
             *     * `Europe/San_Marino` - Europe/San_Marino
             *     * `Europe/Sarajevo` - Europe/Sarajevo
             *     * `Europe/Saratov` - Europe/Saratov
             *     * `Europe/Simferopol` - Europe/Simferopol
             *     * `Europe/Skopje` - Europe/Skopje
             *     * `Europe/Sofia` - Europe/Sofia
             *     * `Europe/Stockholm` - Europe/Stockholm
             *     * `Europe/Tallinn` - Europe/Tallinn
             *     * `Europe/Tirane` - Europe/Tirane
             *     * `Europe/Tiraspol` - Europe/Tiraspol
             *     * `Europe/Ulyanovsk` - Europe/Ulyanovsk
             *     * `Europe/Uzhgorod` - Europe/Uzhgorod
             *     * `Europe/Vaduz` - Europe/Vaduz
             *     * `Europe/Vatican` - Europe/Vatican
             *     * `Europe/Vienna` - Europe/Vienna
             *     * `Europe/Vilnius` - Europe/Vilnius
             *     * `Europe/Volgograd` - Europe/Volgograd
             *     * `Europe/Warsaw` - Europe/Warsaw
             *     * `Europe/Zagreb` - Europe/Zagreb
             *     * `Europe/Zaporozhye` - Europe/Zaporozhye
             *     * `Europe/Zurich` - Europe/Zurich
             *     * `Factory` - Factory
             *     * `GB` - GB
             *     * `GB-Eire` - GB-Eire
             *     * `GMT` - GMT
             *     * `GMT+0` - GMT+0
             *     * `GMT-0` - GMT-0
             *     * `GMT0` - GMT0
             *     * `Greenwich` - Greenwich
             *     * `HST` - HST
             *     * `Hongkong` - Hongkong
             *     * `Iceland` - Iceland
             *     * `Indian/Antananarivo` - Indian/Antananarivo
             *     * `Indian/Chagos` - Indian/Chagos
             *     * `Indian/Christmas` - Indian/Christmas
             *     * `Indian/Cocos` - Indian/Cocos
             *     * `Indian/Comoro` - Indian/Comoro
             *     * `Indian/Kerguelen` - Indian/Kerguelen
             *     * `Indian/Mahe` - Indian/Mahe
             *     * `Indian/Maldives` - Indian/Maldives
             *     * `Indian/Mauritius` - Indian/Mauritius
             *     * `Indian/Mayotte` - Indian/Mayotte
             *     * `Indian/Reunion` - Indian/Reunion
             *     * `Iran` - Iran
             *     * `Israel` - Israel
             *     * `Jamaica` - Jamaica
             *     * `Japan` - Japan
             *     * `Kwajalein` - Kwajalein
             *     * `Libya` - Libya
             *     * `MET` - MET
             *     * `MST` - MST
             *     * `MST7MDT` - MST7MDT
             *     * `Mexico/BajaNorte` - Mexico/BajaNorte
             *     * `Mexico/BajaSur` - Mexico/BajaSur
             *     * `Mexico/General` - Mexico/General
             *     * `NZ` - NZ
             *     * `NZ-CHAT` - NZ-CHAT
             *     * `Navajo` - Navajo
             *     * `PRC` - PRC
             *     * `PST8PDT` - PST8PDT
             *     * `Pacific/Apia` - Pacific/Apia
             *     * `Pacific/Auckland` - Pacific/Auckland
             *     * `Pacific/Bougainville` - Pacific/Bougainville
             *     * `Pacific/Chatham` - Pacific/Chatham
             *     * `Pacific/Chuuk` - Pacific/Chuuk
             *     * `Pacific/Easter` - Pacific/Easter
             *     * `Pacific/Efate` - Pacific/Efate
             *     * `Pacific/Enderbury` - Pacific/Enderbury
             *     * `Pacific/Fakaofo` - Pacific/Fakaofo
             *     * `Pacific/Fiji` - Pacific/Fiji
             *     * `Pacific/Funafuti` - Pacific/Funafuti
             *     * `Pacific/Galapagos` - Pacific/Galapagos
             *     * `Pacific/Gambier` - Pacific/Gambier
             *     * `Pacific/Guadalcanal` - Pacific/Guadalcanal
             *     * `Pacific/Guam` - Pacific/Guam
             *     * `Pacific/Honolulu` - Pacific/Honolulu
             *     * `Pacific/Johnston` - Pacific/Johnston
             *     * `Pacific/Kanton` - Pacific/Kanton
             *     * `Pacific/Kiritimati` - Pacific/Kiritimati
             *     * `Pacific/Kosrae` - Pacific/Kosrae
             *     * `Pacific/Kwajalein` - Pacific/Kwajalein
             *     * `Pacific/Majuro` - Pacific/Majuro
             *     * `Pacific/Marquesas` - Pacific/Marquesas
             *     * `Pacific/Midway` - Pacific/Midway
             *     * `Pacific/Nauru` - Pacific/Nauru
             *     * `Pacific/Niue` - Pacific/Niue
             *     * `Pacific/Norfolk` - Pacific/Norfolk
             *     * `Pacific/Noumea` - Pacific/Noumea
             *     * `Pacific/Pago_Pago` - Pacific/Pago_Pago
             *     * `Pacific/Palau` - Pacific/Palau
             *     * `Pacific/Pitcairn` - Pacific/Pitcairn
             *     * `Pacific/Pohnpei` - Pacific/Pohnpei
             *     * `Pacific/Ponape` - Pacific/Ponape
             *     * `Pacific/Port_Moresby` - Pacific/Port_Moresby
             *     * `Pacific/Rarotonga` - Pacific/Rarotonga
             *     * `Pacific/Saipan` - Pacific/Saipan
             *     * `Pacific/Samoa` - Pacific/Samoa
             *     * `Pacific/Tahiti` - Pacific/Tahiti
             *     * `Pacific/Tarawa` - Pacific/Tarawa
             *     * `Pacific/Tongatapu` - Pacific/Tongatapu
             *     * `Pacific/Truk` - Pacific/Truk
             *     * `Pacific/Wake` - Pacific/Wake
             *     * `Pacific/Wallis` - Pacific/Wallis
             *     * `Pacific/Yap` - Pacific/Yap
             *     * `Poland` - Poland
             *     * `Portugal` - Portugal
             *     * `ROC` - ROC
             *     * `ROK` - ROK
             *     * `Singapore` - Singapore
             *     * `Turkey` - Turkey
             *     * `UCT` - UCT
             *     * `US/Alaska` - US/Alaska
             *     * `US/Aleutian` - US/Aleutian
             *     * `US/Arizona` - US/Arizona
             *     * `US/Central` - US/Central
             *     * `US/East-Indiana` - US/East-Indiana
             *     * `US/Eastern` - US/Eastern
             *     * `US/Hawaii` - US/Hawaii
             *     * `US/Indiana-Starke` - US/Indiana-Starke
             *     * `US/Michigan` - US/Michigan
             *     * `US/Mountain` - US/Mountain
             *     * `US/Pacific` - US/Pacific
             *     * `US/Samoa` - US/Samoa
             *     * `UTC` - UTC
             *     * `Universal` - Universal
             *     * `W-SU` - W-SU
             *     * `WET` - WET
             *     * `Zulu` - Zulu
             *     * `localtime` - localtime
             * @enum {string}
             */
            readonly timezone: "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Asmera" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Timbuktu" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/ComodRivadavia" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Atka" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Buenos_Aires" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Catamarca" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Ciudad_Juarez" | "America/Coral_Harbour" | "America/Cordoba" | "America/Costa_Rica" | "America/Coyhaique" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Ensenada" | "America/Fort_Nelson" | "America/Fort_Wayne" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Indianapolis" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Jujuy" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Knox_IN" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Louisville" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Mendoza" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montreal" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Acre" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Rosario" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Shiprock" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Virgin" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/South_Pole" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Ashkhabad" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Calcutta" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Chongqing" | "Asia/Chungking" | "Asia/Colombo" | "Asia/Dacca" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Harbin" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kashgar" | "Asia/Kathmandu" | "Asia/Katmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macao" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Saigon" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Tel_Aviv" | "Asia/Thimbu" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ujung_Pandang" | "Asia/Ulaanbaatar" | "Asia/Ulan_Bator" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faeroe" | "Atlantic/Faroe" | "Atlantic/Jan_Mayen" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/ACT" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Canberra" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/LHI" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/NSW" | "Australia/North" | "Australia/Perth" | "Australia/Queensland" | "Australia/South" | "Australia/Sydney" | "Australia/Tasmania" | "Australia/Victoria" | "Australia/West" | "Australia/Yancowinna" | "Brazil/Acre" | "Brazil/DeNoronha" | "Brazil/East" | "Brazil/West" | "CET" | "CST6CDT" | "Canada/Atlantic" | "Canada/Central" | "Canada/Eastern" | "Canada/Mountain" | "Canada/Newfoundland" | "Canada/Pacific" | "Canada/Saskatchewan" | "Canada/Yukon" | "Chile/Continental" | "Chile/EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc/GMT" | "Etc/GMT+0" | "Etc/GMT+1" | "Etc/GMT+10" | "Etc/GMT+11" | "Etc/GMT+12" | "Etc/GMT+2" | "Etc/GMT+3" | "Etc/GMT+4" | "Etc/GMT+5" | "Etc/GMT+6" | "Etc/GMT+7" | "Etc/GMT+8" | "Etc/GMT+9" | "Etc/GMT-0" | "Etc/GMT-1" | "Etc/GMT-10" | "Etc/GMT-11" | "Etc/GMT-12" | "Etc/GMT-13" | "Etc/GMT-14" | "Etc/GMT-2" | "Etc/GMT-3" | "Etc/GMT-4" | "Etc/GMT-5" | "Etc/GMT-6" | "Etc/GMT-7" | "Etc/GMT-8" | "Etc/GMT-9" | "Etc/GMT0" | "Etc/Greenwich" | "Etc/UCT" | "Etc/UTC" | "Etc/Universal" | "Etc/Zulu" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belfast" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Kyiv" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Tiraspol" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Factory" | "GB" | "GB-Eire" | "GMT" | "GMT+0" | "GMT-0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico/BajaNorte" | "Mexico/BajaSur" | "Mexico/General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Ponape" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Samoa" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Truk" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US/Alaska" | "US/Aleutian" | "US/Arizona" | "US/Central" | "US/East-Indiana" | "US/Eastern" | "US/Hawaii" | "US/Indiana-Starke" | "US/Michigan" | "US/Mountain" | "US/Pacific" | "US/Samoa" | "UTC" | "Universal" | "W-SU" | "WET" | "Zulu" | "localtime";
            address_text?: string | null;
            /** Format: uri */
            address_url?: string | null;
            /** @description List of phone numbers */
            phone_numbers?: string[];
            /** @description List of favorite strings */
            medical_history_template?: string[];
            /** @description List of favorite strings */
            paraclinical_and_clinical_examination_report_template?: string[];
            /** @description List of favorite strings */
            treatment_plan_template?: string[];
            /** @description List of favorite strings */
            physician_diagnosis_template?: string[];
            subscription: components["schemas"]["Subscription"] | null;
            feature_flag: components["schemas"]["FeatureFlag"] | null;
        };
        OrganizationLight: {
            /** Format: uuid */
            readonly uuid: string;
            readonly id: number;
            is_registered?: boolean;
            name: string;
            /**
             * @description * `Africa/Abidjan` - Africa/Abidjan
             *     * `Africa/Accra` - Africa/Accra
             *     * `Africa/Addis_Ababa` - Africa/Addis_Ababa
             *     * `Africa/Algiers` - Africa/Algiers
             *     * `Africa/Asmara` - Africa/Asmara
             *     * `Africa/Asmera` - Africa/Asmera
             *     * `Africa/Bamako` - Africa/Bamako
             *     * `Africa/Bangui` - Africa/Bangui
             *     * `Africa/Banjul` - Africa/Banjul
             *     * `Africa/Bissau` - Africa/Bissau
             *     * `Africa/Blantyre` - Africa/Blantyre
             *     * `Africa/Brazzaville` - Africa/Brazzaville
             *     * `Africa/Bujumbura` - Africa/Bujumbura
             *     * `Africa/Cairo` - Africa/Cairo
             *     * `Africa/Casablanca` - Africa/Casablanca
             *     * `Africa/Ceuta` - Africa/Ceuta
             *     * `Africa/Conakry` - Africa/Conakry
             *     * `Africa/Dakar` - Africa/Dakar
             *     * `Africa/Dar_es_Salaam` - Africa/Dar_es_Salaam
             *     * `Africa/Djibouti` - Africa/Djibouti
             *     * `Africa/Douala` - Africa/Douala
             *     * `Africa/El_Aaiun` - Africa/El_Aaiun
             *     * `Africa/Freetown` - Africa/Freetown
             *     * `Africa/Gaborone` - Africa/Gaborone
             *     * `Africa/Harare` - Africa/Harare
             *     * `Africa/Johannesburg` - Africa/Johannesburg
             *     * `Africa/Juba` - Africa/Juba
             *     * `Africa/Kampala` - Africa/Kampala
             *     * `Africa/Khartoum` - Africa/Khartoum
             *     * `Africa/Kigali` - Africa/Kigali
             *     * `Africa/Kinshasa` - Africa/Kinshasa
             *     * `Africa/Lagos` - Africa/Lagos
             *     * `Africa/Libreville` - Africa/Libreville
             *     * `Africa/Lome` - Africa/Lome
             *     * `Africa/Luanda` - Africa/Luanda
             *     * `Africa/Lubumbashi` - Africa/Lubumbashi
             *     * `Africa/Lusaka` - Africa/Lusaka
             *     * `Africa/Malabo` - Africa/Malabo
             *     * `Africa/Maputo` - Africa/Maputo
             *     * `Africa/Maseru` - Africa/Maseru
             *     * `Africa/Mbabane` - Africa/Mbabane
             *     * `Africa/Mogadishu` - Africa/Mogadishu
             *     * `Africa/Monrovia` - Africa/Monrovia
             *     * `Africa/Nairobi` - Africa/Nairobi
             *     * `Africa/Ndjamena` - Africa/Ndjamena
             *     * `Africa/Niamey` - Africa/Niamey
             *     * `Africa/Nouakchott` - Africa/Nouakchott
             *     * `Africa/Ouagadougou` - Africa/Ouagadougou
             *     * `Africa/Porto-Novo` - Africa/Porto-Novo
             *     * `Africa/Sao_Tome` - Africa/Sao_Tome
             *     * `Africa/Timbuktu` - Africa/Timbuktu
             *     * `Africa/Tripoli` - Africa/Tripoli
             *     * `Africa/Tunis` - Africa/Tunis
             *     * `Africa/Windhoek` - Africa/Windhoek
             *     * `America/Adak` - America/Adak
             *     * `America/Anchorage` - America/Anchorage
             *     * `America/Anguilla` - America/Anguilla
             *     * `America/Antigua` - America/Antigua
             *     * `America/Araguaina` - America/Araguaina
             *     * `America/Argentina/Buenos_Aires` - America/Argentina/Buenos_Aires
             *     * `America/Argentina/Catamarca` - America/Argentina/Catamarca
             *     * `America/Argentina/ComodRivadavia` - America/Argentina/ComodRivadavia
             *     * `America/Argentina/Cordoba` - America/Argentina/Cordoba
             *     * `America/Argentina/Jujuy` - America/Argentina/Jujuy
             *     * `America/Argentina/La_Rioja` - America/Argentina/La_Rioja
             *     * `America/Argentina/Mendoza` - America/Argentina/Mendoza
             *     * `America/Argentina/Rio_Gallegos` - America/Argentina/Rio_Gallegos
             *     * `America/Argentina/Salta` - America/Argentina/Salta
             *     * `America/Argentina/San_Juan` - America/Argentina/San_Juan
             *     * `America/Argentina/San_Luis` - America/Argentina/San_Luis
             *     * `America/Argentina/Tucuman` - America/Argentina/Tucuman
             *     * `America/Argentina/Ushuaia` - America/Argentina/Ushuaia
             *     * `America/Aruba` - America/Aruba
             *     * `America/Asuncion` - America/Asuncion
             *     * `America/Atikokan` - America/Atikokan
             *     * `America/Atka` - America/Atka
             *     * `America/Bahia` - America/Bahia
             *     * `America/Bahia_Banderas` - America/Bahia_Banderas
             *     * `America/Barbados` - America/Barbados
             *     * `America/Belem` - America/Belem
             *     * `America/Belize` - America/Belize
             *     * `America/Blanc-Sablon` - America/Blanc-Sablon
             *     * `America/Boa_Vista` - America/Boa_Vista
             *     * `America/Bogota` - America/Bogota
             *     * `America/Boise` - America/Boise
             *     * `America/Buenos_Aires` - America/Buenos_Aires
             *     * `America/Cambridge_Bay` - America/Cambridge_Bay
             *     * `America/Campo_Grande` - America/Campo_Grande
             *     * `America/Cancun` - America/Cancun
             *     * `America/Caracas` - America/Caracas
             *     * `America/Catamarca` - America/Catamarca
             *     * `America/Cayenne` - America/Cayenne
             *     * `America/Cayman` - America/Cayman
             *     * `America/Chicago` - America/Chicago
             *     * `America/Chihuahua` - America/Chihuahua
             *     * `America/Ciudad_Juarez` - America/Ciudad_Juarez
             *     * `America/Coral_Harbour` - America/Coral_Harbour
             *     * `America/Cordoba` - America/Cordoba
             *     * `America/Costa_Rica` - America/Costa_Rica
             *     * `America/Coyhaique` - America/Coyhaique
             *     * `America/Creston` - America/Creston
             *     * `America/Cuiaba` - America/Cuiaba
             *     * `America/Curacao` - America/Curacao
             *     * `America/Danmarkshavn` - America/Danmarkshavn
             *     * `America/Dawson` - America/Dawson
             *     * `America/Dawson_Creek` - America/Dawson_Creek
             *     * `America/Denver` - America/Denver
             *     * `America/Detroit` - America/Detroit
             *     * `America/Dominica` - America/Dominica
             *     * `America/Edmonton` - America/Edmonton
             *     * `America/Eirunepe` - America/Eirunepe
             *     * `America/El_Salvador` - America/El_Salvador
             *     * `America/Ensenada` - America/Ensenada
             *     * `America/Fort_Nelson` - America/Fort_Nelson
             *     * `America/Fort_Wayne` - America/Fort_Wayne
             *     * `America/Fortaleza` - America/Fortaleza
             *     * `America/Glace_Bay` - America/Glace_Bay
             *     * `America/Godthab` - America/Godthab
             *     * `America/Goose_Bay` - America/Goose_Bay
             *     * `America/Grand_Turk` - America/Grand_Turk
             *     * `America/Grenada` - America/Grenada
             *     * `America/Guadeloupe` - America/Guadeloupe
             *     * `America/Guatemala` - America/Guatemala
             *     * `America/Guayaquil` - America/Guayaquil
             *     * `America/Guyana` - America/Guyana
             *     * `America/Halifax` - America/Halifax
             *     * `America/Havana` - America/Havana
             *     * `America/Hermosillo` - America/Hermosillo
             *     * `America/Indiana/Indianapolis` - America/Indiana/Indianapolis
             *     * `America/Indiana/Knox` - America/Indiana/Knox
             *     * `America/Indiana/Marengo` - America/Indiana/Marengo
             *     * `America/Indiana/Petersburg` - America/Indiana/Petersburg
             *     * `America/Indiana/Tell_City` - America/Indiana/Tell_City
             *     * `America/Indiana/Vevay` - America/Indiana/Vevay
             *     * `America/Indiana/Vincennes` - America/Indiana/Vincennes
             *     * `America/Indiana/Winamac` - America/Indiana/Winamac
             *     * `America/Indianapolis` - America/Indianapolis
             *     * `America/Inuvik` - America/Inuvik
             *     * `America/Iqaluit` - America/Iqaluit
             *     * `America/Jamaica` - America/Jamaica
             *     * `America/Jujuy` - America/Jujuy
             *     * `America/Juneau` - America/Juneau
             *     * `America/Kentucky/Louisville` - America/Kentucky/Louisville
             *     * `America/Kentucky/Monticello` - America/Kentucky/Monticello
             *     * `America/Knox_IN` - America/Knox_IN
             *     * `America/Kralendijk` - America/Kralendijk
             *     * `America/La_Paz` - America/La_Paz
             *     * `America/Lima` - America/Lima
             *     * `America/Los_Angeles` - America/Los_Angeles
             *     * `America/Louisville` - America/Louisville
             *     * `America/Lower_Princes` - America/Lower_Princes
             *     * `America/Maceio` - America/Maceio
             *     * `America/Managua` - America/Managua
             *     * `America/Manaus` - America/Manaus
             *     * `America/Marigot` - America/Marigot
             *     * `America/Martinique` - America/Martinique
             *     * `America/Matamoros` - America/Matamoros
             *     * `America/Mazatlan` - America/Mazatlan
             *     * `America/Mendoza` - America/Mendoza
             *     * `America/Menominee` - America/Menominee
             *     * `America/Merida` - America/Merida
             *     * `America/Metlakatla` - America/Metlakatla
             *     * `America/Mexico_City` - America/Mexico_City
             *     * `America/Miquelon` - America/Miquelon
             *     * `America/Moncton` - America/Moncton
             *     * `America/Monterrey` - America/Monterrey
             *     * `America/Montevideo` - America/Montevideo
             *     * `America/Montreal` - America/Montreal
             *     * `America/Montserrat` - America/Montserrat
             *     * `America/Nassau` - America/Nassau
             *     * `America/New_York` - America/New_York
             *     * `America/Nipigon` - America/Nipigon
             *     * `America/Nome` - America/Nome
             *     * `America/Noronha` - America/Noronha
             *     * `America/North_Dakota/Beulah` - America/North_Dakota/Beulah
             *     * `America/North_Dakota/Center` - America/North_Dakota/Center
             *     * `America/North_Dakota/New_Salem` - America/North_Dakota/New_Salem
             *     * `America/Nuuk` - America/Nuuk
             *     * `America/Ojinaga` - America/Ojinaga
             *     * `America/Panama` - America/Panama
             *     * `America/Pangnirtung` - America/Pangnirtung
             *     * `America/Paramaribo` - America/Paramaribo
             *     * `America/Phoenix` - America/Phoenix
             *     * `America/Port-au-Prince` - America/Port-au-Prince
             *     * `America/Port_of_Spain` - America/Port_of_Spain
             *     * `America/Porto_Acre` - America/Porto_Acre
             *     * `America/Porto_Velho` - America/Porto_Velho
             *     * `America/Puerto_Rico` - America/Puerto_Rico
             *     * `America/Punta_Arenas` - America/Punta_Arenas
             *     * `America/Rainy_River` - America/Rainy_River
             *     * `America/Rankin_Inlet` - America/Rankin_Inlet
             *     * `America/Recife` - America/Recife
             *     * `America/Regina` - America/Regina
             *     * `America/Resolute` - America/Resolute
             *     * `America/Rio_Branco` - America/Rio_Branco
             *     * `America/Rosario` - America/Rosario
             *     * `America/Santa_Isabel` - America/Santa_Isabel
             *     * `America/Santarem` - America/Santarem
             *     * `America/Santiago` - America/Santiago
             *     * `America/Santo_Domingo` - America/Santo_Domingo
             *     * `America/Sao_Paulo` - America/Sao_Paulo
             *     * `America/Scoresbysund` - America/Scoresbysund
             *     * `America/Shiprock` - America/Shiprock
             *     * `America/Sitka` - America/Sitka
             *     * `America/St_Barthelemy` - America/St_Barthelemy
             *     * `America/St_Johns` - America/St_Johns
             *     * `America/St_Kitts` - America/St_Kitts
             *     * `America/St_Lucia` - America/St_Lucia
             *     * `America/St_Thomas` - America/St_Thomas
             *     * `America/St_Vincent` - America/St_Vincent
             *     * `America/Swift_Current` - America/Swift_Current
             *     * `America/Tegucigalpa` - America/Tegucigalpa
             *     * `America/Thule` - America/Thule
             *     * `America/Thunder_Bay` - America/Thunder_Bay
             *     * `America/Tijuana` - America/Tijuana
             *     * `America/Toronto` - America/Toronto
             *     * `America/Tortola` - America/Tortola
             *     * `America/Vancouver` - America/Vancouver
             *     * `America/Virgin` - America/Virgin
             *     * `America/Whitehorse` - America/Whitehorse
             *     * `America/Winnipeg` - America/Winnipeg
             *     * `America/Yakutat` - America/Yakutat
             *     * `America/Yellowknife` - America/Yellowknife
             *     * `Antarctica/Casey` - Antarctica/Casey
             *     * `Antarctica/Davis` - Antarctica/Davis
             *     * `Antarctica/DumontDUrville` - Antarctica/DumontDUrville
             *     * `Antarctica/Macquarie` - Antarctica/Macquarie
             *     * `Antarctica/Mawson` - Antarctica/Mawson
             *     * `Antarctica/McMurdo` - Antarctica/McMurdo
             *     * `Antarctica/Palmer` - Antarctica/Palmer
             *     * `Antarctica/Rothera` - Antarctica/Rothera
             *     * `Antarctica/South_Pole` - Antarctica/South_Pole
             *     * `Antarctica/Syowa` - Antarctica/Syowa
             *     * `Antarctica/Troll` - Antarctica/Troll
             *     * `Antarctica/Vostok` - Antarctica/Vostok
             *     * `Arctic/Longyearbyen` - Arctic/Longyearbyen
             *     * `Asia/Aden` - Asia/Aden
             *     * `Asia/Almaty` - Asia/Almaty
             *     * `Asia/Amman` - Asia/Amman
             *     * `Asia/Anadyr` - Asia/Anadyr
             *     * `Asia/Aqtau` - Asia/Aqtau
             *     * `Asia/Aqtobe` - Asia/Aqtobe
             *     * `Asia/Ashgabat` - Asia/Ashgabat
             *     * `Asia/Ashkhabad` - Asia/Ashkhabad
             *     * `Asia/Atyrau` - Asia/Atyrau
             *     * `Asia/Baghdad` - Asia/Baghdad
             *     * `Asia/Bahrain` - Asia/Bahrain
             *     * `Asia/Baku` - Asia/Baku
             *     * `Asia/Bangkok` - Asia/Bangkok
             *     * `Asia/Barnaul` - Asia/Barnaul
             *     * `Asia/Beirut` - Asia/Beirut
             *     * `Asia/Bishkek` - Asia/Bishkek
             *     * `Asia/Brunei` - Asia/Brunei
             *     * `Asia/Calcutta` - Asia/Calcutta
             *     * `Asia/Chita` - Asia/Chita
             *     * `Asia/Choibalsan` - Asia/Choibalsan
             *     * `Asia/Chongqing` - Asia/Chongqing
             *     * `Asia/Chungking` - Asia/Chungking
             *     * `Asia/Colombo` - Asia/Colombo
             *     * `Asia/Dacca` - Asia/Dacca
             *     * `Asia/Damascus` - Asia/Damascus
             *     * `Asia/Dhaka` - Asia/Dhaka
             *     * `Asia/Dili` - Asia/Dili
             *     * `Asia/Dubai` - Asia/Dubai
             *     * `Asia/Dushanbe` - Asia/Dushanbe
             *     * `Asia/Famagusta` - Asia/Famagusta
             *     * `Asia/Gaza` - Asia/Gaza
             *     * `Asia/Harbin` - Asia/Harbin
             *     * `Asia/Hebron` - Asia/Hebron
             *     * `Asia/Ho_Chi_Minh` - Asia/Ho_Chi_Minh
             *     * `Asia/Hong_Kong` - Asia/Hong_Kong
             *     * `Asia/Hovd` - Asia/Hovd
             *     * `Asia/Irkutsk` - Asia/Irkutsk
             *     * `Asia/Istanbul` - Asia/Istanbul
             *     * `Asia/Jakarta` - Asia/Jakarta
             *     * `Asia/Jayapura` - Asia/Jayapura
             *     * `Asia/Jerusalem` - Asia/Jerusalem
             *     * `Asia/Kabul` - Asia/Kabul
             *     * `Asia/Kamchatka` - Asia/Kamchatka
             *     * `Asia/Karachi` - Asia/Karachi
             *     * `Asia/Kashgar` - Asia/Kashgar
             *     * `Asia/Kathmandu` - Asia/Kathmandu
             *     * `Asia/Katmandu` - Asia/Katmandu
             *     * `Asia/Khandyga` - Asia/Khandyga
             *     * `Asia/Kolkata` - Asia/Kolkata
             *     * `Asia/Krasnoyarsk` - Asia/Krasnoyarsk
             *     * `Asia/Kuala_Lumpur` - Asia/Kuala_Lumpur
             *     * `Asia/Kuching` - Asia/Kuching
             *     * `Asia/Kuwait` - Asia/Kuwait
             *     * `Asia/Macao` - Asia/Macao
             *     * `Asia/Macau` - Asia/Macau
             *     * `Asia/Magadan` - Asia/Magadan
             *     * `Asia/Makassar` - Asia/Makassar
             *     * `Asia/Manila` - Asia/Manila
             *     * `Asia/Muscat` - Asia/Muscat
             *     * `Asia/Nicosia` - Asia/Nicosia
             *     * `Asia/Novokuznetsk` - Asia/Novokuznetsk
             *     * `Asia/Novosibirsk` - Asia/Novosibirsk
             *     * `Asia/Omsk` - Asia/Omsk
             *     * `Asia/Oral` - Asia/Oral
             *     * `Asia/Phnom_Penh` - Asia/Phnom_Penh
             *     * `Asia/Pontianak` - Asia/Pontianak
             *     * `Asia/Pyongyang` - Asia/Pyongyang
             *     * `Asia/Qatar` - Asia/Qatar
             *     * `Asia/Qostanay` - Asia/Qostanay
             *     * `Asia/Qyzylorda` - Asia/Qyzylorda
             *     * `Asia/Rangoon` - Asia/Rangoon
             *     * `Asia/Riyadh` - Asia/Riyadh
             *     * `Asia/Saigon` - Asia/Saigon
             *     * `Asia/Sakhalin` - Asia/Sakhalin
             *     * `Asia/Samarkand` - Asia/Samarkand
             *     * `Asia/Seoul` - Asia/Seoul
             *     * `Asia/Shanghai` - Asia/Shanghai
             *     * `Asia/Singapore` - Asia/Singapore
             *     * `Asia/Srednekolymsk` - Asia/Srednekolymsk
             *     * `Asia/Taipei` - Asia/Taipei
             *     * `Asia/Tashkent` - Asia/Tashkent
             *     * `Asia/Tbilisi` - Asia/Tbilisi
             *     * `Asia/Tehran` - Asia/Tehran
             *     * `Asia/Tel_Aviv` - Asia/Tel_Aviv
             *     * `Asia/Thimbu` - Asia/Thimbu
             *     * `Asia/Thimphu` - Asia/Thimphu
             *     * `Asia/Tokyo` - Asia/Tokyo
             *     * `Asia/Tomsk` - Asia/Tomsk
             *     * `Asia/Ujung_Pandang` - Asia/Ujung_Pandang
             *     * `Asia/Ulaanbaatar` - Asia/Ulaanbaatar
             *     * `Asia/Ulan_Bator` - Asia/Ulan_Bator
             *     * `Asia/Urumqi` - Asia/Urumqi
             *     * `Asia/Ust-Nera` - Asia/Ust-Nera
             *     * `Asia/Vientiane` - Asia/Vientiane
             *     * `Asia/Vladivostok` - Asia/Vladivostok
             *     * `Asia/Yakutsk` - Asia/Yakutsk
             *     * `Asia/Yangon` - Asia/Yangon
             *     * `Asia/Yekaterinburg` - Asia/Yekaterinburg
             *     * `Asia/Yerevan` - Asia/Yerevan
             *     * `Atlantic/Azores` - Atlantic/Azores
             *     * `Atlantic/Bermuda` - Atlantic/Bermuda
             *     * `Atlantic/Canary` - Atlantic/Canary
             *     * `Atlantic/Cape_Verde` - Atlantic/Cape_Verde
             *     * `Atlantic/Faeroe` - Atlantic/Faeroe
             *     * `Atlantic/Faroe` - Atlantic/Faroe
             *     * `Atlantic/Jan_Mayen` - Atlantic/Jan_Mayen
             *     * `Atlantic/Madeira` - Atlantic/Madeira
             *     * `Atlantic/Reykjavik` - Atlantic/Reykjavik
             *     * `Atlantic/South_Georgia` - Atlantic/South_Georgia
             *     * `Atlantic/St_Helena` - Atlantic/St_Helena
             *     * `Atlantic/Stanley` - Atlantic/Stanley
             *     * `Australia/ACT` - Australia/ACT
             *     * `Australia/Adelaide` - Australia/Adelaide
             *     * `Australia/Brisbane` - Australia/Brisbane
             *     * `Australia/Broken_Hill` - Australia/Broken_Hill
             *     * `Australia/Canberra` - Australia/Canberra
             *     * `Australia/Currie` - Australia/Currie
             *     * `Australia/Darwin` - Australia/Darwin
             *     * `Australia/Eucla` - Australia/Eucla
             *     * `Australia/Hobart` - Australia/Hobart
             *     * `Australia/LHI` - Australia/LHI
             *     * `Australia/Lindeman` - Australia/Lindeman
             *     * `Australia/Lord_Howe` - Australia/Lord_Howe
             *     * `Australia/Melbourne` - Australia/Melbourne
             *     * `Australia/NSW` - Australia/NSW
             *     * `Australia/North` - Australia/North
             *     * `Australia/Perth` - Australia/Perth
             *     * `Australia/Queensland` - Australia/Queensland
             *     * `Australia/South` - Australia/South
             *     * `Australia/Sydney` - Australia/Sydney
             *     * `Australia/Tasmania` - Australia/Tasmania
             *     * `Australia/Victoria` - Australia/Victoria
             *     * `Australia/West` - Australia/West
             *     * `Australia/Yancowinna` - Australia/Yancowinna
             *     * `Brazil/Acre` - Brazil/Acre
             *     * `Brazil/DeNoronha` - Brazil/DeNoronha
             *     * `Brazil/East` - Brazil/East
             *     * `Brazil/West` - Brazil/West
             *     * `CET` - CET
             *     * `CST6CDT` - CST6CDT
             *     * `Canada/Atlantic` - Canada/Atlantic
             *     * `Canada/Central` - Canada/Central
             *     * `Canada/Eastern` - Canada/Eastern
             *     * `Canada/Mountain` - Canada/Mountain
             *     * `Canada/Newfoundland` - Canada/Newfoundland
             *     * `Canada/Pacific` - Canada/Pacific
             *     * `Canada/Saskatchewan` - Canada/Saskatchewan
             *     * `Canada/Yukon` - Canada/Yukon
             *     * `Chile/Continental` - Chile/Continental
             *     * `Chile/EasterIsland` - Chile/EasterIsland
             *     * `Cuba` - Cuba
             *     * `EET` - EET
             *     * `EST` - EST
             *     * `EST5EDT` - EST5EDT
             *     * `Egypt` - Egypt
             *     * `Eire` - Eire
             *     * `Etc/GMT` - Etc/GMT
             *     * `Etc/GMT+0` - Etc/GMT+0
             *     * `Etc/GMT+1` - Etc/GMT+1
             *     * `Etc/GMT+10` - Etc/GMT+10
             *     * `Etc/GMT+11` - Etc/GMT+11
             *     * `Etc/GMT+12` - Etc/GMT+12
             *     * `Etc/GMT+2` - Etc/GMT+2
             *     * `Etc/GMT+3` - Etc/GMT+3
             *     * `Etc/GMT+4` - Etc/GMT+4
             *     * `Etc/GMT+5` - Etc/GMT+5
             *     * `Etc/GMT+6` - Etc/GMT+6
             *     * `Etc/GMT+7` - Etc/GMT+7
             *     * `Etc/GMT+8` - Etc/GMT+8
             *     * `Etc/GMT+9` - Etc/GMT+9
             *     * `Etc/GMT-0` - Etc/GMT-0
             *     * `Etc/GMT-1` - Etc/GMT-1
             *     * `Etc/GMT-10` - Etc/GMT-10
             *     * `Etc/GMT-11` - Etc/GMT-11
             *     * `Etc/GMT-12` - Etc/GMT-12
             *     * `Etc/GMT-13` - Etc/GMT-13
             *     * `Etc/GMT-14` - Etc/GMT-14
             *     * `Etc/GMT-2` - Etc/GMT-2
             *     * `Etc/GMT-3` - Etc/GMT-3
             *     * `Etc/GMT-4` - Etc/GMT-4
             *     * `Etc/GMT-5` - Etc/GMT-5
             *     * `Etc/GMT-6` - Etc/GMT-6
             *     * `Etc/GMT-7` - Etc/GMT-7
             *     * `Etc/GMT-8` - Etc/GMT-8
             *     * `Etc/GMT-9` - Etc/GMT-9
             *     * `Etc/GMT0` - Etc/GMT0
             *     * `Etc/Greenwich` - Etc/Greenwich
             *     * `Etc/UCT` - Etc/UCT
             *     * `Etc/UTC` - Etc/UTC
             *     * `Etc/Universal` - Etc/Universal
             *     * `Etc/Zulu` - Etc/Zulu
             *     * `Europe/Amsterdam` - Europe/Amsterdam
             *     * `Europe/Andorra` - Europe/Andorra
             *     * `Europe/Astrakhan` - Europe/Astrakhan
             *     * `Europe/Athens` - Europe/Athens
             *     * `Europe/Belfast` - Europe/Belfast
             *     * `Europe/Belgrade` - Europe/Belgrade
             *     * `Europe/Berlin` - Europe/Berlin
             *     * `Europe/Bratislava` - Europe/Bratislava
             *     * `Europe/Brussels` - Europe/Brussels
             *     * `Europe/Bucharest` - Europe/Bucharest
             *     * `Europe/Budapest` - Europe/Budapest
             *     * `Europe/Busingen` - Europe/Busingen
             *     * `Europe/Chisinau` - Europe/Chisinau
             *     * `Europe/Copenhagen` - Europe/Copenhagen
             *     * `Europe/Dublin` - Europe/Dublin
             *     * `Europe/Gibraltar` - Europe/Gibraltar
             *     * `Europe/Guernsey` - Europe/Guernsey
             *     * `Europe/Helsinki` - Europe/Helsinki
             *     * `Europe/Isle_of_Man` - Europe/Isle_of_Man
             *     * `Europe/Istanbul` - Europe/Istanbul
             *     * `Europe/Jersey` - Europe/Jersey
             *     * `Europe/Kaliningrad` - Europe/Kaliningrad
             *     * `Europe/Kiev` - Europe/Kiev
             *     * `Europe/Kirov` - Europe/Kirov
             *     * `Europe/Kyiv` - Europe/Kyiv
             *     * `Europe/Lisbon` - Europe/Lisbon
             *     * `Europe/Ljubljana` - Europe/Ljubljana
             *     * `Europe/London` - Europe/London
             *     * `Europe/Luxembourg` - Europe/Luxembourg
             *     * `Europe/Madrid` - Europe/Madrid
             *     * `Europe/Malta` - Europe/Malta
             *     * `Europe/Mariehamn` - Europe/Mariehamn
             *     * `Europe/Minsk` - Europe/Minsk
             *     * `Europe/Monaco` - Europe/Monaco
             *     * `Europe/Moscow` - Europe/Moscow
             *     * `Europe/Nicosia` - Europe/Nicosia
             *     * `Europe/Oslo` - Europe/Oslo
             *     * `Europe/Paris` - Europe/Paris
             *     * `Europe/Podgorica` - Europe/Podgorica
             *     * `Europe/Prague` - Europe/Prague
             *     * `Europe/Riga` - Europe/Riga
             *     * `Europe/Rome` - Europe/Rome
             *     * `Europe/Samara` - Europe/Samara
             *     * `Europe/San_Marino` - Europe/San_Marino
             *     * `Europe/Sarajevo` - Europe/Sarajevo
             *     * `Europe/Saratov` - Europe/Saratov
             *     * `Europe/Simferopol` - Europe/Simferopol
             *     * `Europe/Skopje` - Europe/Skopje
             *     * `Europe/Sofia` - Europe/Sofia
             *     * `Europe/Stockholm` - Europe/Stockholm
             *     * `Europe/Tallinn` - Europe/Tallinn
             *     * `Europe/Tirane` - Europe/Tirane
             *     * `Europe/Tiraspol` - Europe/Tiraspol
             *     * `Europe/Ulyanovsk` - Europe/Ulyanovsk
             *     * `Europe/Uzhgorod` - Europe/Uzhgorod
             *     * `Europe/Vaduz` - Europe/Vaduz
             *     * `Europe/Vatican` - Europe/Vatican
             *     * `Europe/Vienna` - Europe/Vienna
             *     * `Europe/Vilnius` - Europe/Vilnius
             *     * `Europe/Volgograd` - Europe/Volgograd
             *     * `Europe/Warsaw` - Europe/Warsaw
             *     * `Europe/Zagreb` - Europe/Zagreb
             *     * `Europe/Zaporozhye` - Europe/Zaporozhye
             *     * `Europe/Zurich` - Europe/Zurich
             *     * `Factory` - Factory
             *     * `GB` - GB
             *     * `GB-Eire` - GB-Eire
             *     * `GMT` - GMT
             *     * `GMT+0` - GMT+0
             *     * `GMT-0` - GMT-0
             *     * `GMT0` - GMT0
             *     * `Greenwich` - Greenwich
             *     * `HST` - HST
             *     * `Hongkong` - Hongkong
             *     * `Iceland` - Iceland
             *     * `Indian/Antananarivo` - Indian/Antananarivo
             *     * `Indian/Chagos` - Indian/Chagos
             *     * `Indian/Christmas` - Indian/Christmas
             *     * `Indian/Cocos` - Indian/Cocos
             *     * `Indian/Comoro` - Indian/Comoro
             *     * `Indian/Kerguelen` - Indian/Kerguelen
             *     * `Indian/Mahe` - Indian/Mahe
             *     * `Indian/Maldives` - Indian/Maldives
             *     * `Indian/Mauritius` - Indian/Mauritius
             *     * `Indian/Mayotte` - Indian/Mayotte
             *     * `Indian/Reunion` - Indian/Reunion
             *     * `Iran` - Iran
             *     * `Israel` - Israel
             *     * `Jamaica` - Jamaica
             *     * `Japan` - Japan
             *     * `Kwajalein` - Kwajalein
             *     * `Libya` - Libya
             *     * `MET` - MET
             *     * `MST` - MST
             *     * `MST7MDT` - MST7MDT
             *     * `Mexico/BajaNorte` - Mexico/BajaNorte
             *     * `Mexico/BajaSur` - Mexico/BajaSur
             *     * `Mexico/General` - Mexico/General
             *     * `NZ` - NZ
             *     * `NZ-CHAT` - NZ-CHAT
             *     * `Navajo` - Navajo
             *     * `PRC` - PRC
             *     * `PST8PDT` - PST8PDT
             *     * `Pacific/Apia` - Pacific/Apia
             *     * `Pacific/Auckland` - Pacific/Auckland
             *     * `Pacific/Bougainville` - Pacific/Bougainville
             *     * `Pacific/Chatham` - Pacific/Chatham
             *     * `Pacific/Chuuk` - Pacific/Chuuk
             *     * `Pacific/Easter` - Pacific/Easter
             *     * `Pacific/Efate` - Pacific/Efate
             *     * `Pacific/Enderbury` - Pacific/Enderbury
             *     * `Pacific/Fakaofo` - Pacific/Fakaofo
             *     * `Pacific/Fiji` - Pacific/Fiji
             *     * `Pacific/Funafuti` - Pacific/Funafuti
             *     * `Pacific/Galapagos` - Pacific/Galapagos
             *     * `Pacific/Gambier` - Pacific/Gambier
             *     * `Pacific/Guadalcanal` - Pacific/Guadalcanal
             *     * `Pacific/Guam` - Pacific/Guam
             *     * `Pacific/Honolulu` - Pacific/Honolulu
             *     * `Pacific/Johnston` - Pacific/Johnston
             *     * `Pacific/Kanton` - Pacific/Kanton
             *     * `Pacific/Kiritimati` - Pacific/Kiritimati
             *     * `Pacific/Kosrae` - Pacific/Kosrae
             *     * `Pacific/Kwajalein` - Pacific/Kwajalein
             *     * `Pacific/Majuro` - Pacific/Majuro
             *     * `Pacific/Marquesas` - Pacific/Marquesas
             *     * `Pacific/Midway` - Pacific/Midway
             *     * `Pacific/Nauru` - Pacific/Nauru
             *     * `Pacific/Niue` - Pacific/Niue
             *     * `Pacific/Norfolk` - Pacific/Norfolk
             *     * `Pacific/Noumea` - Pacific/Noumea
             *     * `Pacific/Pago_Pago` - Pacific/Pago_Pago
             *     * `Pacific/Palau` - Pacific/Palau
             *     * `Pacific/Pitcairn` - Pacific/Pitcairn
             *     * `Pacific/Pohnpei` - Pacific/Pohnpei
             *     * `Pacific/Ponape` - Pacific/Ponape
             *     * `Pacific/Port_Moresby` - Pacific/Port_Moresby
             *     * `Pacific/Rarotonga` - Pacific/Rarotonga
             *     * `Pacific/Saipan` - Pacific/Saipan
             *     * `Pacific/Samoa` - Pacific/Samoa
             *     * `Pacific/Tahiti` - Pacific/Tahiti
             *     * `Pacific/Tarawa` - Pacific/Tarawa
             *     * `Pacific/Tongatapu` - Pacific/Tongatapu
             *     * `Pacific/Truk` - Pacific/Truk
             *     * `Pacific/Wake` - Pacific/Wake
             *     * `Pacific/Wallis` - Pacific/Wallis
             *     * `Pacific/Yap` - Pacific/Yap
             *     * `Poland` - Poland
             *     * `Portugal` - Portugal
             *     * `ROC` - ROC
             *     * `ROK` - ROK
             *     * `Singapore` - Singapore
             *     * `Turkey` - Turkey
             *     * `UCT` - UCT
             *     * `US/Alaska` - US/Alaska
             *     * `US/Aleutian` - US/Aleutian
             *     * `US/Arizona` - US/Arizona
             *     * `US/Central` - US/Central
             *     * `US/East-Indiana` - US/East-Indiana
             *     * `US/Eastern` - US/Eastern
             *     * `US/Hawaii` - US/Hawaii
             *     * `US/Indiana-Starke` - US/Indiana-Starke
             *     * `US/Michigan` - US/Michigan
             *     * `US/Mountain` - US/Mountain
             *     * `US/Pacific` - US/Pacific
             *     * `US/Samoa` - US/Samoa
             *     * `UTC` - UTC
             *     * `Universal` - Universal
             *     * `W-SU` - W-SU
             *     * `WET` - WET
             *     * `Zulu` - Zulu
             *     * `localtime` - localtime
             * @enum {string}
             */
            timezone?: "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Asmera" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Timbuktu" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/ComodRivadavia" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Atka" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Buenos_Aires" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Catamarca" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Ciudad_Juarez" | "America/Coral_Harbour" | "America/Cordoba" | "America/Costa_Rica" | "America/Coyhaique" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Ensenada" | "America/Fort_Nelson" | "America/Fort_Wayne" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Indianapolis" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Jujuy" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Knox_IN" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Louisville" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Mendoza" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montreal" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Acre" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Rosario" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Shiprock" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Virgin" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/South_Pole" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Ashkhabad" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Calcutta" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Chongqing" | "Asia/Chungking" | "Asia/Colombo" | "Asia/Dacca" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Harbin" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kashgar" | "Asia/Kathmandu" | "Asia/Katmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macao" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Saigon" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Tel_Aviv" | "Asia/Thimbu" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ujung_Pandang" | "Asia/Ulaanbaatar" | "Asia/Ulan_Bator" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faeroe" | "Atlantic/Faroe" | "Atlantic/Jan_Mayen" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/ACT" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Canberra" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/LHI" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/NSW" | "Australia/North" | "Australia/Perth" | "Australia/Queensland" | "Australia/South" | "Australia/Sydney" | "Australia/Tasmania" | "Australia/Victoria" | "Australia/West" | "Australia/Yancowinna" | "Brazil/Acre" | "Brazil/DeNoronha" | "Brazil/East" | "Brazil/West" | "CET" | "CST6CDT" | "Canada/Atlantic" | "Canada/Central" | "Canada/Eastern" | "Canada/Mountain" | "Canada/Newfoundland" | "Canada/Pacific" | "Canada/Saskatchewan" | "Canada/Yukon" | "Chile/Continental" | "Chile/EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc/GMT" | "Etc/GMT+0" | "Etc/GMT+1" | "Etc/GMT+10" | "Etc/GMT+11" | "Etc/GMT+12" | "Etc/GMT+2" | "Etc/GMT+3" | "Etc/GMT+4" | "Etc/GMT+5" | "Etc/GMT+6" | "Etc/GMT+7" | "Etc/GMT+8" | "Etc/GMT+9" | "Etc/GMT-0" | "Etc/GMT-1" | "Etc/GMT-10" | "Etc/GMT-11" | "Etc/GMT-12" | "Etc/GMT-13" | "Etc/GMT-14" | "Etc/GMT-2" | "Etc/GMT-3" | "Etc/GMT-4" | "Etc/GMT-5" | "Etc/GMT-6" | "Etc/GMT-7" | "Etc/GMT-8" | "Etc/GMT-9" | "Etc/GMT0" | "Etc/Greenwich" | "Etc/UCT" | "Etc/UTC" | "Etc/Universal" | "Etc/Zulu" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belfast" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Kyiv" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Tiraspol" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Factory" | "GB" | "GB-Eire" | "GMT" | "GMT+0" | "GMT-0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico/BajaNorte" | "Mexico/BajaSur" | "Mexico/General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Ponape" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Samoa" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Truk" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US/Alaska" | "US/Aleutian" | "US/Arizona" | "US/Central" | "US/East-Indiana" | "US/Eastern" | "US/Hawaii" | "US/Indiana-Starke" | "US/Michigan" | "US/Mountain" | "US/Pacific" | "US/Samoa" | "UTC" | "Universal" | "W-SU" | "WET" | "Zulu" | "localtime";
            address_text?: string | null;
            /** Format: uri */
            address_url?: string | null;
            /** @description List of phone numbers */
            phone_numbers?: string[];
        };
        OrganizationLightRequest: {
            is_registered?: boolean;
            name: string;
            /**
             * @description * `Africa/Abidjan` - Africa/Abidjan
             *     * `Africa/Accra` - Africa/Accra
             *     * `Africa/Addis_Ababa` - Africa/Addis_Ababa
             *     * `Africa/Algiers` - Africa/Algiers
             *     * `Africa/Asmara` - Africa/Asmara
             *     * `Africa/Asmera` - Africa/Asmera
             *     * `Africa/Bamako` - Africa/Bamako
             *     * `Africa/Bangui` - Africa/Bangui
             *     * `Africa/Banjul` - Africa/Banjul
             *     * `Africa/Bissau` - Africa/Bissau
             *     * `Africa/Blantyre` - Africa/Blantyre
             *     * `Africa/Brazzaville` - Africa/Brazzaville
             *     * `Africa/Bujumbura` - Africa/Bujumbura
             *     * `Africa/Cairo` - Africa/Cairo
             *     * `Africa/Casablanca` - Africa/Casablanca
             *     * `Africa/Ceuta` - Africa/Ceuta
             *     * `Africa/Conakry` - Africa/Conakry
             *     * `Africa/Dakar` - Africa/Dakar
             *     * `Africa/Dar_es_Salaam` - Africa/Dar_es_Salaam
             *     * `Africa/Djibouti` - Africa/Djibouti
             *     * `Africa/Douala` - Africa/Douala
             *     * `Africa/El_Aaiun` - Africa/El_Aaiun
             *     * `Africa/Freetown` - Africa/Freetown
             *     * `Africa/Gaborone` - Africa/Gaborone
             *     * `Africa/Harare` - Africa/Harare
             *     * `Africa/Johannesburg` - Africa/Johannesburg
             *     * `Africa/Juba` - Africa/Juba
             *     * `Africa/Kampala` - Africa/Kampala
             *     * `Africa/Khartoum` - Africa/Khartoum
             *     * `Africa/Kigali` - Africa/Kigali
             *     * `Africa/Kinshasa` - Africa/Kinshasa
             *     * `Africa/Lagos` - Africa/Lagos
             *     * `Africa/Libreville` - Africa/Libreville
             *     * `Africa/Lome` - Africa/Lome
             *     * `Africa/Luanda` - Africa/Luanda
             *     * `Africa/Lubumbashi` - Africa/Lubumbashi
             *     * `Africa/Lusaka` - Africa/Lusaka
             *     * `Africa/Malabo` - Africa/Malabo
             *     * `Africa/Maputo` - Africa/Maputo
             *     * `Africa/Maseru` - Africa/Maseru
             *     * `Africa/Mbabane` - Africa/Mbabane
             *     * `Africa/Mogadishu` - Africa/Mogadishu
             *     * `Africa/Monrovia` - Africa/Monrovia
             *     * `Africa/Nairobi` - Africa/Nairobi
             *     * `Africa/Ndjamena` - Africa/Ndjamena
             *     * `Africa/Niamey` - Africa/Niamey
             *     * `Africa/Nouakchott` - Africa/Nouakchott
             *     * `Africa/Ouagadougou` - Africa/Ouagadougou
             *     * `Africa/Porto-Novo` - Africa/Porto-Novo
             *     * `Africa/Sao_Tome` - Africa/Sao_Tome
             *     * `Africa/Timbuktu` - Africa/Timbuktu
             *     * `Africa/Tripoli` - Africa/Tripoli
             *     * `Africa/Tunis` - Africa/Tunis
             *     * `Africa/Windhoek` - Africa/Windhoek
             *     * `America/Adak` - America/Adak
             *     * `America/Anchorage` - America/Anchorage
             *     * `America/Anguilla` - America/Anguilla
             *     * `America/Antigua` - America/Antigua
             *     * `America/Araguaina` - America/Araguaina
             *     * `America/Argentina/Buenos_Aires` - America/Argentina/Buenos_Aires
             *     * `America/Argentina/Catamarca` - America/Argentina/Catamarca
             *     * `America/Argentina/ComodRivadavia` - America/Argentina/ComodRivadavia
             *     * `America/Argentina/Cordoba` - America/Argentina/Cordoba
             *     * `America/Argentina/Jujuy` - America/Argentina/Jujuy
             *     * `America/Argentina/La_Rioja` - America/Argentina/La_Rioja
             *     * `America/Argentina/Mendoza` - America/Argentina/Mendoza
             *     * `America/Argentina/Rio_Gallegos` - America/Argentina/Rio_Gallegos
             *     * `America/Argentina/Salta` - America/Argentina/Salta
             *     * `America/Argentina/San_Juan` - America/Argentina/San_Juan
             *     * `America/Argentina/San_Luis` - America/Argentina/San_Luis
             *     * `America/Argentina/Tucuman` - America/Argentina/Tucuman
             *     * `America/Argentina/Ushuaia` - America/Argentina/Ushuaia
             *     * `America/Aruba` - America/Aruba
             *     * `America/Asuncion` - America/Asuncion
             *     * `America/Atikokan` - America/Atikokan
             *     * `America/Atka` - America/Atka
             *     * `America/Bahia` - America/Bahia
             *     * `America/Bahia_Banderas` - America/Bahia_Banderas
             *     * `America/Barbados` - America/Barbados
             *     * `America/Belem` - America/Belem
             *     * `America/Belize` - America/Belize
             *     * `America/Blanc-Sablon` - America/Blanc-Sablon
             *     * `America/Boa_Vista` - America/Boa_Vista
             *     * `America/Bogota` - America/Bogota
             *     * `America/Boise` - America/Boise
             *     * `America/Buenos_Aires` - America/Buenos_Aires
             *     * `America/Cambridge_Bay` - America/Cambridge_Bay
             *     * `America/Campo_Grande` - America/Campo_Grande
             *     * `America/Cancun` - America/Cancun
             *     * `America/Caracas` - America/Caracas
             *     * `America/Catamarca` - America/Catamarca
             *     * `America/Cayenne` - America/Cayenne
             *     * `America/Cayman` - America/Cayman
             *     * `America/Chicago` - America/Chicago
             *     * `America/Chihuahua` - America/Chihuahua
             *     * `America/Ciudad_Juarez` - America/Ciudad_Juarez
             *     * `America/Coral_Harbour` - America/Coral_Harbour
             *     * `America/Cordoba` - America/Cordoba
             *     * `America/Costa_Rica` - America/Costa_Rica
             *     * `America/Coyhaique` - America/Coyhaique
             *     * `America/Creston` - America/Creston
             *     * `America/Cuiaba` - America/Cuiaba
             *     * `America/Curacao` - America/Curacao
             *     * `America/Danmarkshavn` - America/Danmarkshavn
             *     * `America/Dawson` - America/Dawson
             *     * `America/Dawson_Creek` - America/Dawson_Creek
             *     * `America/Denver` - America/Denver
             *     * `America/Detroit` - America/Detroit
             *     * `America/Dominica` - America/Dominica
             *     * `America/Edmonton` - America/Edmonton
             *     * `America/Eirunepe` - America/Eirunepe
             *     * `America/El_Salvador` - America/El_Salvador
             *     * `America/Ensenada` - America/Ensenada
             *     * `America/Fort_Nelson` - America/Fort_Nelson
             *     * `America/Fort_Wayne` - America/Fort_Wayne
             *     * `America/Fortaleza` - America/Fortaleza
             *     * `America/Glace_Bay` - America/Glace_Bay
             *     * `America/Godthab` - America/Godthab
             *     * `America/Goose_Bay` - America/Goose_Bay
             *     * `America/Grand_Turk` - America/Grand_Turk
             *     * `America/Grenada` - America/Grenada
             *     * `America/Guadeloupe` - America/Guadeloupe
             *     * `America/Guatemala` - America/Guatemala
             *     * `America/Guayaquil` - America/Guayaquil
             *     * `America/Guyana` - America/Guyana
             *     * `America/Halifax` - America/Halifax
             *     * `America/Havana` - America/Havana
             *     * `America/Hermosillo` - America/Hermosillo
             *     * `America/Indiana/Indianapolis` - America/Indiana/Indianapolis
             *     * `America/Indiana/Knox` - America/Indiana/Knox
             *     * `America/Indiana/Marengo` - America/Indiana/Marengo
             *     * `America/Indiana/Petersburg` - America/Indiana/Petersburg
             *     * `America/Indiana/Tell_City` - America/Indiana/Tell_City
             *     * `America/Indiana/Vevay` - America/Indiana/Vevay
             *     * `America/Indiana/Vincennes` - America/Indiana/Vincennes
             *     * `America/Indiana/Winamac` - America/Indiana/Winamac
             *     * `America/Indianapolis` - America/Indianapolis
             *     * `America/Inuvik` - America/Inuvik
             *     * `America/Iqaluit` - America/Iqaluit
             *     * `America/Jamaica` - America/Jamaica
             *     * `America/Jujuy` - America/Jujuy
             *     * `America/Juneau` - America/Juneau
             *     * `America/Kentucky/Louisville` - America/Kentucky/Louisville
             *     * `America/Kentucky/Monticello` - America/Kentucky/Monticello
             *     * `America/Knox_IN` - America/Knox_IN
             *     * `America/Kralendijk` - America/Kralendijk
             *     * `America/La_Paz` - America/La_Paz
             *     * `America/Lima` - America/Lima
             *     * `America/Los_Angeles` - America/Los_Angeles
             *     * `America/Louisville` - America/Louisville
             *     * `America/Lower_Princes` - America/Lower_Princes
             *     * `America/Maceio` - America/Maceio
             *     * `America/Managua` - America/Managua
             *     * `America/Manaus` - America/Manaus
             *     * `America/Marigot` - America/Marigot
             *     * `America/Martinique` - America/Martinique
             *     * `America/Matamoros` - America/Matamoros
             *     * `America/Mazatlan` - America/Mazatlan
             *     * `America/Mendoza` - America/Mendoza
             *     * `America/Menominee` - America/Menominee
             *     * `America/Merida` - America/Merida
             *     * `America/Metlakatla` - America/Metlakatla
             *     * `America/Mexico_City` - America/Mexico_City
             *     * `America/Miquelon` - America/Miquelon
             *     * `America/Moncton` - America/Moncton
             *     * `America/Monterrey` - America/Monterrey
             *     * `America/Montevideo` - America/Montevideo
             *     * `America/Montreal` - America/Montreal
             *     * `America/Montserrat` - America/Montserrat
             *     * `America/Nassau` - America/Nassau
             *     * `America/New_York` - America/New_York
             *     * `America/Nipigon` - America/Nipigon
             *     * `America/Nome` - America/Nome
             *     * `America/Noronha` - America/Noronha
             *     * `America/North_Dakota/Beulah` - America/North_Dakota/Beulah
             *     * `America/North_Dakota/Center` - America/North_Dakota/Center
             *     * `America/North_Dakota/New_Salem` - America/North_Dakota/New_Salem
             *     * `America/Nuuk` - America/Nuuk
             *     * `America/Ojinaga` - America/Ojinaga
             *     * `America/Panama` - America/Panama
             *     * `America/Pangnirtung` - America/Pangnirtung
             *     * `America/Paramaribo` - America/Paramaribo
             *     * `America/Phoenix` - America/Phoenix
             *     * `America/Port-au-Prince` - America/Port-au-Prince
             *     * `America/Port_of_Spain` - America/Port_of_Spain
             *     * `America/Porto_Acre` - America/Porto_Acre
             *     * `America/Porto_Velho` - America/Porto_Velho
             *     * `America/Puerto_Rico` - America/Puerto_Rico
             *     * `America/Punta_Arenas` - America/Punta_Arenas
             *     * `America/Rainy_River` - America/Rainy_River
             *     * `America/Rankin_Inlet` - America/Rankin_Inlet
             *     * `America/Recife` - America/Recife
             *     * `America/Regina` - America/Regina
             *     * `America/Resolute` - America/Resolute
             *     * `America/Rio_Branco` - America/Rio_Branco
             *     * `America/Rosario` - America/Rosario
             *     * `America/Santa_Isabel` - America/Santa_Isabel
             *     * `America/Santarem` - America/Santarem
             *     * `America/Santiago` - America/Santiago
             *     * `America/Santo_Domingo` - America/Santo_Domingo
             *     * `America/Sao_Paulo` - America/Sao_Paulo
             *     * `America/Scoresbysund` - America/Scoresbysund
             *     * `America/Shiprock` - America/Shiprock
             *     * `America/Sitka` - America/Sitka
             *     * `America/St_Barthelemy` - America/St_Barthelemy
             *     * `America/St_Johns` - America/St_Johns
             *     * `America/St_Kitts` - America/St_Kitts
             *     * `America/St_Lucia` - America/St_Lucia
             *     * `America/St_Thomas` - America/St_Thomas
             *     * `America/St_Vincent` - America/St_Vincent
             *     * `America/Swift_Current` - America/Swift_Current
             *     * `America/Tegucigalpa` - America/Tegucigalpa
             *     * `America/Thule` - America/Thule
             *     * `America/Thunder_Bay` - America/Thunder_Bay
             *     * `America/Tijuana` - America/Tijuana
             *     * `America/Toronto` - America/Toronto
             *     * `America/Tortola` - America/Tortola
             *     * `America/Vancouver` - America/Vancouver
             *     * `America/Virgin` - America/Virgin
             *     * `America/Whitehorse` - America/Whitehorse
             *     * `America/Winnipeg` - America/Winnipeg
             *     * `America/Yakutat` - America/Yakutat
             *     * `America/Yellowknife` - America/Yellowknife
             *     * `Antarctica/Casey` - Antarctica/Casey
             *     * `Antarctica/Davis` - Antarctica/Davis
             *     * `Antarctica/DumontDUrville` - Antarctica/DumontDUrville
             *     * `Antarctica/Macquarie` - Antarctica/Macquarie
             *     * `Antarctica/Mawson` - Antarctica/Mawson
             *     * `Antarctica/McMurdo` - Antarctica/McMurdo
             *     * `Antarctica/Palmer` - Antarctica/Palmer
             *     * `Antarctica/Rothera` - Antarctica/Rothera
             *     * `Antarctica/South_Pole` - Antarctica/South_Pole
             *     * `Antarctica/Syowa` - Antarctica/Syowa
             *     * `Antarctica/Troll` - Antarctica/Troll
             *     * `Antarctica/Vostok` - Antarctica/Vostok
             *     * `Arctic/Longyearbyen` - Arctic/Longyearbyen
             *     * `Asia/Aden` - Asia/Aden
             *     * `Asia/Almaty` - Asia/Almaty
             *     * `Asia/Amman` - Asia/Amman
             *     * `Asia/Anadyr` - Asia/Anadyr
             *     * `Asia/Aqtau` - Asia/Aqtau
             *     * `Asia/Aqtobe` - Asia/Aqtobe
             *     * `Asia/Ashgabat` - Asia/Ashgabat
             *     * `Asia/Ashkhabad` - Asia/Ashkhabad
             *     * `Asia/Atyrau` - Asia/Atyrau
             *     * `Asia/Baghdad` - Asia/Baghdad
             *     * `Asia/Bahrain` - Asia/Bahrain
             *     * `Asia/Baku` - Asia/Baku
             *     * `Asia/Bangkok` - Asia/Bangkok
             *     * `Asia/Barnaul` - Asia/Barnaul
             *     * `Asia/Beirut` - Asia/Beirut
             *     * `Asia/Bishkek` - Asia/Bishkek
             *     * `Asia/Brunei` - Asia/Brunei
             *     * `Asia/Calcutta` - Asia/Calcutta
             *     * `Asia/Chita` - Asia/Chita
             *     * `Asia/Choibalsan` - Asia/Choibalsan
             *     * `Asia/Chongqing` - Asia/Chongqing
             *     * `Asia/Chungking` - Asia/Chungking
             *     * `Asia/Colombo` - Asia/Colombo
             *     * `Asia/Dacca` - Asia/Dacca
             *     * `Asia/Damascus` - Asia/Damascus
             *     * `Asia/Dhaka` - Asia/Dhaka
             *     * `Asia/Dili` - Asia/Dili
             *     * `Asia/Dubai` - Asia/Dubai
             *     * `Asia/Dushanbe` - Asia/Dushanbe
             *     * `Asia/Famagusta` - Asia/Famagusta
             *     * `Asia/Gaza` - Asia/Gaza
             *     * `Asia/Harbin` - Asia/Harbin
             *     * `Asia/Hebron` - Asia/Hebron
             *     * `Asia/Ho_Chi_Minh` - Asia/Ho_Chi_Minh
             *     * `Asia/Hong_Kong` - Asia/Hong_Kong
             *     * `Asia/Hovd` - Asia/Hovd
             *     * `Asia/Irkutsk` - Asia/Irkutsk
             *     * `Asia/Istanbul` - Asia/Istanbul
             *     * `Asia/Jakarta` - Asia/Jakarta
             *     * `Asia/Jayapura` - Asia/Jayapura
             *     * `Asia/Jerusalem` - Asia/Jerusalem
             *     * `Asia/Kabul` - Asia/Kabul
             *     * `Asia/Kamchatka` - Asia/Kamchatka
             *     * `Asia/Karachi` - Asia/Karachi
             *     * `Asia/Kashgar` - Asia/Kashgar
             *     * `Asia/Kathmandu` - Asia/Kathmandu
             *     * `Asia/Katmandu` - Asia/Katmandu
             *     * `Asia/Khandyga` - Asia/Khandyga
             *     * `Asia/Kolkata` - Asia/Kolkata
             *     * `Asia/Krasnoyarsk` - Asia/Krasnoyarsk
             *     * `Asia/Kuala_Lumpur` - Asia/Kuala_Lumpur
             *     * `Asia/Kuching` - Asia/Kuching
             *     * `Asia/Kuwait` - Asia/Kuwait
             *     * `Asia/Macao` - Asia/Macao
             *     * `Asia/Macau` - Asia/Macau
             *     * `Asia/Magadan` - Asia/Magadan
             *     * `Asia/Makassar` - Asia/Makassar
             *     * `Asia/Manila` - Asia/Manila
             *     * `Asia/Muscat` - Asia/Muscat
             *     * `Asia/Nicosia` - Asia/Nicosia
             *     * `Asia/Novokuznetsk` - Asia/Novokuznetsk
             *     * `Asia/Novosibirsk` - Asia/Novosibirsk
             *     * `Asia/Omsk` - Asia/Omsk
             *     * `Asia/Oral` - Asia/Oral
             *     * `Asia/Phnom_Penh` - Asia/Phnom_Penh
             *     * `Asia/Pontianak` - Asia/Pontianak
             *     * `Asia/Pyongyang` - Asia/Pyongyang
             *     * `Asia/Qatar` - Asia/Qatar
             *     * `Asia/Qostanay` - Asia/Qostanay
             *     * `Asia/Qyzylorda` - Asia/Qyzylorda
             *     * `Asia/Rangoon` - Asia/Rangoon
             *     * `Asia/Riyadh` - Asia/Riyadh
             *     * `Asia/Saigon` - Asia/Saigon
             *     * `Asia/Sakhalin` - Asia/Sakhalin
             *     * `Asia/Samarkand` - Asia/Samarkand
             *     * `Asia/Seoul` - Asia/Seoul
             *     * `Asia/Shanghai` - Asia/Shanghai
             *     * `Asia/Singapore` - Asia/Singapore
             *     * `Asia/Srednekolymsk` - Asia/Srednekolymsk
             *     * `Asia/Taipei` - Asia/Taipei
             *     * `Asia/Tashkent` - Asia/Tashkent
             *     * `Asia/Tbilisi` - Asia/Tbilisi
             *     * `Asia/Tehran` - Asia/Tehran
             *     * `Asia/Tel_Aviv` - Asia/Tel_Aviv
             *     * `Asia/Thimbu` - Asia/Thimbu
             *     * `Asia/Thimphu` - Asia/Thimphu
             *     * `Asia/Tokyo` - Asia/Tokyo
             *     * `Asia/Tomsk` - Asia/Tomsk
             *     * `Asia/Ujung_Pandang` - Asia/Ujung_Pandang
             *     * `Asia/Ulaanbaatar` - Asia/Ulaanbaatar
             *     * `Asia/Ulan_Bator` - Asia/Ulan_Bator
             *     * `Asia/Urumqi` - Asia/Urumqi
             *     * `Asia/Ust-Nera` - Asia/Ust-Nera
             *     * `Asia/Vientiane` - Asia/Vientiane
             *     * `Asia/Vladivostok` - Asia/Vladivostok
             *     * `Asia/Yakutsk` - Asia/Yakutsk
             *     * `Asia/Yangon` - Asia/Yangon
             *     * `Asia/Yekaterinburg` - Asia/Yekaterinburg
             *     * `Asia/Yerevan` - Asia/Yerevan
             *     * `Atlantic/Azores` - Atlantic/Azores
             *     * `Atlantic/Bermuda` - Atlantic/Bermuda
             *     * `Atlantic/Canary` - Atlantic/Canary
             *     * `Atlantic/Cape_Verde` - Atlantic/Cape_Verde
             *     * `Atlantic/Faeroe` - Atlantic/Faeroe
             *     * `Atlantic/Faroe` - Atlantic/Faroe
             *     * `Atlantic/Jan_Mayen` - Atlantic/Jan_Mayen
             *     * `Atlantic/Madeira` - Atlantic/Madeira
             *     * `Atlantic/Reykjavik` - Atlantic/Reykjavik
             *     * `Atlantic/South_Georgia` - Atlantic/South_Georgia
             *     * `Atlantic/St_Helena` - Atlantic/St_Helena
             *     * `Atlantic/Stanley` - Atlantic/Stanley
             *     * `Australia/ACT` - Australia/ACT
             *     * `Australia/Adelaide` - Australia/Adelaide
             *     * `Australia/Brisbane` - Australia/Brisbane
             *     * `Australia/Broken_Hill` - Australia/Broken_Hill
             *     * `Australia/Canberra` - Australia/Canberra
             *     * `Australia/Currie` - Australia/Currie
             *     * `Australia/Darwin` - Australia/Darwin
             *     * `Australia/Eucla` - Australia/Eucla
             *     * `Australia/Hobart` - Australia/Hobart
             *     * `Australia/LHI` - Australia/LHI
             *     * `Australia/Lindeman` - Australia/Lindeman
             *     * `Australia/Lord_Howe` - Australia/Lord_Howe
             *     * `Australia/Melbourne` - Australia/Melbourne
             *     * `Australia/NSW` - Australia/NSW
             *     * `Australia/North` - Australia/North
             *     * `Australia/Perth` - Australia/Perth
             *     * `Australia/Queensland` - Australia/Queensland
             *     * `Australia/South` - Australia/South
             *     * `Australia/Sydney` - Australia/Sydney
             *     * `Australia/Tasmania` - Australia/Tasmania
             *     * `Australia/Victoria` - Australia/Victoria
             *     * `Australia/West` - Australia/West
             *     * `Australia/Yancowinna` - Australia/Yancowinna
             *     * `Brazil/Acre` - Brazil/Acre
             *     * `Brazil/DeNoronha` - Brazil/DeNoronha
             *     * `Brazil/East` - Brazil/East
             *     * `Brazil/West` - Brazil/West
             *     * `CET` - CET
             *     * `CST6CDT` - CST6CDT
             *     * `Canada/Atlantic` - Canada/Atlantic
             *     * `Canada/Central` - Canada/Central
             *     * `Canada/Eastern` - Canada/Eastern
             *     * `Canada/Mountain` - Canada/Mountain
             *     * `Canada/Newfoundland` - Canada/Newfoundland
             *     * `Canada/Pacific` - Canada/Pacific
             *     * `Canada/Saskatchewan` - Canada/Saskatchewan
             *     * `Canada/Yukon` - Canada/Yukon
             *     * `Chile/Continental` - Chile/Continental
             *     * `Chile/EasterIsland` - Chile/EasterIsland
             *     * `Cuba` - Cuba
             *     * `EET` - EET
             *     * `EST` - EST
             *     * `EST5EDT` - EST5EDT
             *     * `Egypt` - Egypt
             *     * `Eire` - Eire
             *     * `Etc/GMT` - Etc/GMT
             *     * `Etc/GMT+0` - Etc/GMT+0
             *     * `Etc/GMT+1` - Etc/GMT+1
             *     * `Etc/GMT+10` - Etc/GMT+10
             *     * `Etc/GMT+11` - Etc/GMT+11
             *     * `Etc/GMT+12` - Etc/GMT+12
             *     * `Etc/GMT+2` - Etc/GMT+2
             *     * `Etc/GMT+3` - Etc/GMT+3
             *     * `Etc/GMT+4` - Etc/GMT+4
             *     * `Etc/GMT+5` - Etc/GMT+5
             *     * `Etc/GMT+6` - Etc/GMT+6
             *     * `Etc/GMT+7` - Etc/GMT+7
             *     * `Etc/GMT+8` - Etc/GMT+8
             *     * `Etc/GMT+9` - Etc/GMT+9
             *     * `Etc/GMT-0` - Etc/GMT-0
             *     * `Etc/GMT-1` - Etc/GMT-1
             *     * `Etc/GMT-10` - Etc/GMT-10
             *     * `Etc/GMT-11` - Etc/GMT-11
             *     * `Etc/GMT-12` - Etc/GMT-12
             *     * `Etc/GMT-13` - Etc/GMT-13
             *     * `Etc/GMT-14` - Etc/GMT-14
             *     * `Etc/GMT-2` - Etc/GMT-2
             *     * `Etc/GMT-3` - Etc/GMT-3
             *     * `Etc/GMT-4` - Etc/GMT-4
             *     * `Etc/GMT-5` - Etc/GMT-5
             *     * `Etc/GMT-6` - Etc/GMT-6
             *     * `Etc/GMT-7` - Etc/GMT-7
             *     * `Etc/GMT-8` - Etc/GMT-8
             *     * `Etc/GMT-9` - Etc/GMT-9
             *     * `Etc/GMT0` - Etc/GMT0
             *     * `Etc/Greenwich` - Etc/Greenwich
             *     * `Etc/UCT` - Etc/UCT
             *     * `Etc/UTC` - Etc/UTC
             *     * `Etc/Universal` - Etc/Universal
             *     * `Etc/Zulu` - Etc/Zulu
             *     * `Europe/Amsterdam` - Europe/Amsterdam
             *     * `Europe/Andorra` - Europe/Andorra
             *     * `Europe/Astrakhan` - Europe/Astrakhan
             *     * `Europe/Athens` - Europe/Athens
             *     * `Europe/Belfast` - Europe/Belfast
             *     * `Europe/Belgrade` - Europe/Belgrade
             *     * `Europe/Berlin` - Europe/Berlin
             *     * `Europe/Bratislava` - Europe/Bratislava
             *     * `Europe/Brussels` - Europe/Brussels
             *     * `Europe/Bucharest` - Europe/Bucharest
             *     * `Europe/Budapest` - Europe/Budapest
             *     * `Europe/Busingen` - Europe/Busingen
             *     * `Europe/Chisinau` - Europe/Chisinau
             *     * `Europe/Copenhagen` - Europe/Copenhagen
             *     * `Europe/Dublin` - Europe/Dublin
             *     * `Europe/Gibraltar` - Europe/Gibraltar
             *     * `Europe/Guernsey` - Europe/Guernsey
             *     * `Europe/Helsinki` - Europe/Helsinki
             *     * `Europe/Isle_of_Man` - Europe/Isle_of_Man
             *     * `Europe/Istanbul` - Europe/Istanbul
             *     * `Europe/Jersey` - Europe/Jersey
             *     * `Europe/Kaliningrad` - Europe/Kaliningrad
             *     * `Europe/Kiev` - Europe/Kiev
             *     * `Europe/Kirov` - Europe/Kirov
             *     * `Europe/Kyiv` - Europe/Kyiv
             *     * `Europe/Lisbon` - Europe/Lisbon
             *     * `Europe/Ljubljana` - Europe/Ljubljana
             *     * `Europe/London` - Europe/London
             *     * `Europe/Luxembourg` - Europe/Luxembourg
             *     * `Europe/Madrid` - Europe/Madrid
             *     * `Europe/Malta` - Europe/Malta
             *     * `Europe/Mariehamn` - Europe/Mariehamn
             *     * `Europe/Minsk` - Europe/Minsk
             *     * `Europe/Monaco` - Europe/Monaco
             *     * `Europe/Moscow` - Europe/Moscow
             *     * `Europe/Nicosia` - Europe/Nicosia
             *     * `Europe/Oslo` - Europe/Oslo
             *     * `Europe/Paris` - Europe/Paris
             *     * `Europe/Podgorica` - Europe/Podgorica
             *     * `Europe/Prague` - Europe/Prague
             *     * `Europe/Riga` - Europe/Riga
             *     * `Europe/Rome` - Europe/Rome
             *     * `Europe/Samara` - Europe/Samara
             *     * `Europe/San_Marino` - Europe/San_Marino
             *     * `Europe/Sarajevo` - Europe/Sarajevo
             *     * `Europe/Saratov` - Europe/Saratov
             *     * `Europe/Simferopol` - Europe/Simferopol
             *     * `Europe/Skopje` - Europe/Skopje
             *     * `Europe/Sofia` - Europe/Sofia
             *     * `Europe/Stockholm` - Europe/Stockholm
             *     * `Europe/Tallinn` - Europe/Tallinn
             *     * `Europe/Tirane` - Europe/Tirane
             *     * `Europe/Tiraspol` - Europe/Tiraspol
             *     * `Europe/Ulyanovsk` - Europe/Ulyanovsk
             *     * `Europe/Uzhgorod` - Europe/Uzhgorod
             *     * `Europe/Vaduz` - Europe/Vaduz
             *     * `Europe/Vatican` - Europe/Vatican
             *     * `Europe/Vienna` - Europe/Vienna
             *     * `Europe/Vilnius` - Europe/Vilnius
             *     * `Europe/Volgograd` - Europe/Volgograd
             *     * `Europe/Warsaw` - Europe/Warsaw
             *     * `Europe/Zagreb` - Europe/Zagreb
             *     * `Europe/Zaporozhye` - Europe/Zaporozhye
             *     * `Europe/Zurich` - Europe/Zurich
             *     * `Factory` - Factory
             *     * `GB` - GB
             *     * `GB-Eire` - GB-Eire
             *     * `GMT` - GMT
             *     * `GMT+0` - GMT+0
             *     * `GMT-0` - GMT-0
             *     * `GMT0` - GMT0
             *     * `Greenwich` - Greenwich
             *     * `HST` - HST
             *     * `Hongkong` - Hongkong
             *     * `Iceland` - Iceland
             *     * `Indian/Antananarivo` - Indian/Antananarivo
             *     * `Indian/Chagos` - Indian/Chagos
             *     * `Indian/Christmas` - Indian/Christmas
             *     * `Indian/Cocos` - Indian/Cocos
             *     * `Indian/Comoro` - Indian/Comoro
             *     * `Indian/Kerguelen` - Indian/Kerguelen
             *     * `Indian/Mahe` - Indian/Mahe
             *     * `Indian/Maldives` - Indian/Maldives
             *     * `Indian/Mauritius` - Indian/Mauritius
             *     * `Indian/Mayotte` - Indian/Mayotte
             *     * `Indian/Reunion` - Indian/Reunion
             *     * `Iran` - Iran
             *     * `Israel` - Israel
             *     * `Jamaica` - Jamaica
             *     * `Japan` - Japan
             *     * `Kwajalein` - Kwajalein
             *     * `Libya` - Libya
             *     * `MET` - MET
             *     * `MST` - MST
             *     * `MST7MDT` - MST7MDT
             *     * `Mexico/BajaNorte` - Mexico/BajaNorte
             *     * `Mexico/BajaSur` - Mexico/BajaSur
             *     * `Mexico/General` - Mexico/General
             *     * `NZ` - NZ
             *     * `NZ-CHAT` - NZ-CHAT
             *     * `Navajo` - Navajo
             *     * `PRC` - PRC
             *     * `PST8PDT` - PST8PDT
             *     * `Pacific/Apia` - Pacific/Apia
             *     * `Pacific/Auckland` - Pacific/Auckland
             *     * `Pacific/Bougainville` - Pacific/Bougainville
             *     * `Pacific/Chatham` - Pacific/Chatham
             *     * `Pacific/Chuuk` - Pacific/Chuuk
             *     * `Pacific/Easter` - Pacific/Easter
             *     * `Pacific/Efate` - Pacific/Efate
             *     * `Pacific/Enderbury` - Pacific/Enderbury
             *     * `Pacific/Fakaofo` - Pacific/Fakaofo
             *     * `Pacific/Fiji` - Pacific/Fiji
             *     * `Pacific/Funafuti` - Pacific/Funafuti
             *     * `Pacific/Galapagos` - Pacific/Galapagos
             *     * `Pacific/Gambier` - Pacific/Gambier
             *     * `Pacific/Guadalcanal` - Pacific/Guadalcanal
             *     * `Pacific/Guam` - Pacific/Guam
             *     * `Pacific/Honolulu` - Pacific/Honolulu
             *     * `Pacific/Johnston` - Pacific/Johnston
             *     * `Pacific/Kanton` - Pacific/Kanton
             *     * `Pacific/Kiritimati` - Pacific/Kiritimati
             *     * `Pacific/Kosrae` - Pacific/Kosrae
             *     * `Pacific/Kwajalein` - Pacific/Kwajalein
             *     * `Pacific/Majuro` - Pacific/Majuro
             *     * `Pacific/Marquesas` - Pacific/Marquesas
             *     * `Pacific/Midway` - Pacific/Midway
             *     * `Pacific/Nauru` - Pacific/Nauru
             *     * `Pacific/Niue` - Pacific/Niue
             *     * `Pacific/Norfolk` - Pacific/Norfolk
             *     * `Pacific/Noumea` - Pacific/Noumea
             *     * `Pacific/Pago_Pago` - Pacific/Pago_Pago
             *     * `Pacific/Palau` - Pacific/Palau
             *     * `Pacific/Pitcairn` - Pacific/Pitcairn
             *     * `Pacific/Pohnpei` - Pacific/Pohnpei
             *     * `Pacific/Ponape` - Pacific/Ponape
             *     * `Pacific/Port_Moresby` - Pacific/Port_Moresby
             *     * `Pacific/Rarotonga` - Pacific/Rarotonga
             *     * `Pacific/Saipan` - Pacific/Saipan
             *     * `Pacific/Samoa` - Pacific/Samoa
             *     * `Pacific/Tahiti` - Pacific/Tahiti
             *     * `Pacific/Tarawa` - Pacific/Tarawa
             *     * `Pacific/Tongatapu` - Pacific/Tongatapu
             *     * `Pacific/Truk` - Pacific/Truk
             *     * `Pacific/Wake` - Pacific/Wake
             *     * `Pacific/Wallis` - Pacific/Wallis
             *     * `Pacific/Yap` - Pacific/Yap
             *     * `Poland` - Poland
             *     * `Portugal` - Portugal
             *     * `ROC` - ROC
             *     * `ROK` - ROK
             *     * `Singapore` - Singapore
             *     * `Turkey` - Turkey
             *     * `UCT` - UCT
             *     * `US/Alaska` - US/Alaska
             *     * `US/Aleutian` - US/Aleutian
             *     * `US/Arizona` - US/Arizona
             *     * `US/Central` - US/Central
             *     * `US/East-Indiana` - US/East-Indiana
             *     * `US/Eastern` - US/Eastern
             *     * `US/Hawaii` - US/Hawaii
             *     * `US/Indiana-Starke` - US/Indiana-Starke
             *     * `US/Michigan` - US/Michigan
             *     * `US/Mountain` - US/Mountain
             *     * `US/Pacific` - US/Pacific
             *     * `US/Samoa` - US/Samoa
             *     * `UTC` - UTC
             *     * `Universal` - Universal
             *     * `W-SU` - W-SU
             *     * `WET` - WET
             *     * `Zulu` - Zulu
             *     * `localtime` - localtime
             * @enum {string}
             */
            timezone?: "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Asmera" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Timbuktu" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/ComodRivadavia" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Atka" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Buenos_Aires" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Catamarca" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Ciudad_Juarez" | "America/Coral_Harbour" | "America/Cordoba" | "America/Costa_Rica" | "America/Coyhaique" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Ensenada" | "America/Fort_Nelson" | "America/Fort_Wayne" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Indianapolis" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Jujuy" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Knox_IN" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Louisville" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Mendoza" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montreal" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Acre" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Rosario" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Shiprock" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Virgin" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/South_Pole" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Ashkhabad" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Calcutta" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Chongqing" | "Asia/Chungking" | "Asia/Colombo" | "Asia/Dacca" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Harbin" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kashgar" | "Asia/Kathmandu" | "Asia/Katmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macao" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Saigon" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Tel_Aviv" | "Asia/Thimbu" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ujung_Pandang" | "Asia/Ulaanbaatar" | "Asia/Ulan_Bator" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faeroe" | "Atlantic/Faroe" | "Atlantic/Jan_Mayen" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/ACT" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Canberra" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/LHI" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/NSW" | "Australia/North" | "Australia/Perth" | "Australia/Queensland" | "Australia/South" | "Australia/Sydney" | "Australia/Tasmania" | "Australia/Victoria" | "Australia/West" | "Australia/Yancowinna" | "Brazil/Acre" | "Brazil/DeNoronha" | "Brazil/East" | "Brazil/West" | "CET" | "CST6CDT" | "Canada/Atlantic" | "Canada/Central" | "Canada/Eastern" | "Canada/Mountain" | "Canada/Newfoundland" | "Canada/Pacific" | "Canada/Saskatchewan" | "Canada/Yukon" | "Chile/Continental" | "Chile/EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc/GMT" | "Etc/GMT+0" | "Etc/GMT+1" | "Etc/GMT+10" | "Etc/GMT+11" | "Etc/GMT+12" | "Etc/GMT+2" | "Etc/GMT+3" | "Etc/GMT+4" | "Etc/GMT+5" | "Etc/GMT+6" | "Etc/GMT+7" | "Etc/GMT+8" | "Etc/GMT+9" | "Etc/GMT-0" | "Etc/GMT-1" | "Etc/GMT-10" | "Etc/GMT-11" | "Etc/GMT-12" | "Etc/GMT-13" | "Etc/GMT-14" | "Etc/GMT-2" | "Etc/GMT-3" | "Etc/GMT-4" | "Etc/GMT-5" | "Etc/GMT-6" | "Etc/GMT-7" | "Etc/GMT-8" | "Etc/GMT-9" | "Etc/GMT0" | "Etc/Greenwich" | "Etc/UCT" | "Etc/UTC" | "Etc/Universal" | "Etc/Zulu" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belfast" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Kyiv" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Tiraspol" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Factory" | "GB" | "GB-Eire" | "GMT" | "GMT+0" | "GMT-0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico/BajaNorte" | "Mexico/BajaSur" | "Mexico/General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Ponape" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Samoa" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Truk" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US/Alaska" | "US/Aleutian" | "US/Arizona" | "US/Central" | "US/East-Indiana" | "US/Eastern" | "US/Hawaii" | "US/Indiana-Starke" | "US/Michigan" | "US/Mountain" | "US/Pacific" | "US/Samoa" | "UTC" | "Universal" | "W-SU" | "WET" | "Zulu" | "localtime";
            address_text?: string | null;
            /** Format: uri */
            address_url?: string | null;
            /** @description List of phone numbers */
            phone_numbers?: string[];
        };
        OrganizationReportManagementResponse: {
            /** @default 123 */
            count: number;
            /**
             * Format: uri
             * @default http://api.example.org/accounts/?page=4
             */
            next: string | null;
            /**
             * Format: uri
             * @default http://api.example.org/accounts/?page=2
             */
            previous: string | null;
            results: components["schemas"]["PatientManagement"][];
            stats: components["schemas"]["ManagementStats"];
        };
        OrganizationReportMembershipResponse: {
            /** @default 123 */
            count: number;
            /**
             * Format: uri
             * @default http://api.example.org/accounts/?page=4
             */
            next: string | null;
            /**
             * Format: uri
             * @default http://api.example.org/accounts/?page=2
             */
            previous: string | null;
            results: components["schemas"]["PatientMembershipLight"][];
            stats: components["schemas"]["MembershipStats"];
        };
        OrganizationReportVisitResponse: {
            /** @default 123 */
            count: number;
            /**
             * Format: uri
             * @default http://api.example.org/accounts/?page=4
             */
            next: string | null;
            /**
             * Format: uri
             * @default http://api.example.org/accounts/?page=2
             */
            previous: string | null;
            results: components["schemas"]["VisitStatusOnly"][];
            stats: components["schemas"]["VisitStats"];
        };
        OrganizationUser: {
            /** Format: uuid */
            readonly uuid: string;
            /** Format: date-time */
            readonly created_at: string;
            readonly current: boolean;
            user: components["schemas"]["UserLight"];
            readonly is_owner: boolean;
            add_patient?: boolean;
            change_patient?: boolean;
            manage_subscription?: boolean;
            add_visit?: boolean;
            add_co_worker?: boolean;
            read_patient_visits?: boolean;
            read_doctor_treatment?: boolean;
            read_growth_charts?: boolean;
            favorites?: boolean;
            appointment?: boolean;
        };
        OrganizationUserLookup: {
            /** @description Phone number must not start with 0. Example: +989115083458 */
            phone_number?: string;
            readonly first_name: string | null;
            readonly last_name: string | null;
        };
        OrganizationUserLookupRequest: {
            /** @description Phone number must not start with 0. Example: +989115083458 */
            phone_number?: string;
        };
        OrganizationUserRequest: {
            user: components["schemas"]["UserLightRequest"];
            add_patient?: boolean;
            change_patient?: boolean;
            manage_subscription?: boolean;
            add_visit?: boolean;
            add_co_worker?: boolean;
            read_patient_visits?: boolean;
            read_doctor_treatment?: boolean;
            read_growth_charts?: boolean;
            favorites?: boolean;
            appointment?: boolean;
        };
        PaginatedAppointmentBookingLightList: {
            /** @example 123 */
            count: number;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=4
             */
            next?: string | null;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=2
             */
            previous?: string | null;
            results: components["schemas"]["AppointmentBookingLight"][];
        };
        PaginatedAppointmentCalendarDayList: {
            /** @example 123 */
            count: number;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=4
             */
            next?: string | null;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=2
             */
            previous?: string | null;
            results: components["schemas"]["AppointmentCalendarDay"][];
        };
        PaginatedAppointmentCalendarIntervalList: {
            /** @example 123 */
            count: number;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=4
             */
            next?: string | null;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=2
             */
            previous?: string | null;
            results: components["schemas"]["AppointmentCalendarInterval"][];
        };
        PaginatedAppointmentConfigLightList: {
            /** @example 123 */
            count: number;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=4
             */
            next?: string | null;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=2
             */
            previous?: string | null;
            results: components["schemas"]["AppointmentConfigLight"][];
        };
        PaginatedAppointmentConfigSuperLightList: {
            /** @example 123 */
            count: number;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=4
             */
            next?: string | null;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=2
             */
            previous?: string | null;
            results: components["schemas"]["AppointmentConfigSuperLight"][];
        };
        PaginatedFavoriteStringsList: {
            /** @example 123 */
            count: number;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=4
             */
            next?: string | null;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=2
             */
            previous?: string | null;
            results: components["schemas"]["FavoriteStrings"][];
        };
        PaginatedFilterListList: {
            /** @example 123 */
            count: number;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=4
             */
            next?: string | null;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=2
             */
            previous?: string | null;
            results: components["schemas"]["FilterList"][];
        };
        PaginatedOrganizationUserList: {
            /** @example 123 */
            count: number;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=4
             */
            next?: string | null;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=2
             */
            previous?: string | null;
            results: components["schemas"]["OrganizationUser"][];
        };
        PaginatedPatientManagementBasicInfoList: {
            /** @example 123 */
            count: number;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=4
             */
            next?: string | null;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=2
             */
            previous?: string | null;
            results: components["schemas"]["PatientManagementBasicInfo"][];
        };
        PaginatedPatientManagementList: {
            /** @example 123 */
            count: number;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=4
             */
            next?: string | null;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=2
             */
            previous?: string | null;
            results: components["schemas"]["PatientManagement"][];
        };
        PaginatedPatientMembershipLightList: {
            /** @example 123 */
            count: number;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=4
             */
            next?: string | null;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=2
             */
            previous?: string | null;
            results: components["schemas"]["PatientMembershipLight"][];
        };
        PaginatedPricingPlanReadOnlyList: {
            /** @example 123 */
            count: number;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=4
             */
            next?: string | null;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=2
             */
            previous?: string | null;
            results: components["schemas"]["PricingPlanReadOnly"][];
        };
        PaginatedTmpList: {
            /** @example 123 */
            count: number;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=4
             */
            next?: string | null;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=2
             */
            previous?: string | null;
            results: components["schemas"]["Tmp"][];
        };
        PaginatedTransactionList: {
            /** @example 123 */
            count: number;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=4
             */
            next?: string | null;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=2
             */
            previous?: string | null;
            results: components["schemas"]["Transaction"][];
        };
        PaginatedVisitLightList: {
            /** @example 123 */
            count: number;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=4
             */
            next?: string | null;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=2
             */
            previous?: string | null;
            results: components["schemas"]["VisitLight"][];
        };
        PaginatedVisitTreatmentList: {
            /** @example 123 */
            count: number;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=4
             */
            next?: string | null;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=2
             */
            previous?: string | null;
            results: components["schemas"]["VisitTreatment"][];
        };
        PatchedAdminFinalizeDoctorRequest: {
            /**
             * @description * `Accept` - Accept
             *     * `Deny` - Deny
             * @enum {string}
             */
            request_status?: "Accept" | "Deny";
            first_name?: string;
            last_name?: string;
            specialty?: string;
            /** Format: uri */
            medical_profile_url?: string;
        };
        PatchedAdminFinalizeOrganizationRequest: {
            /**
             * @description * `Accept` - Accept
             *     * `Deny` - Deny
             * @enum {string}
             */
            request_status?: "Accept" | "Deny";
            is_registered?: boolean;
        };
        PatchedAppointmentConfigIntervalRequest: {
            /** Format: uuid */
            appointment_config?: string;
            /**
             * @description * `1` - Sunday
             *     * `2` - Monday
             *     * `3` - Tuesday
             *     * `4` - Wednesday
             *     * `5` - Thursday
             *     * `6` - Friday
             *     * `7` - Saturday
             * @enum {integer}
             */
            week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
            /** Format: time */
            start?: string;
            /** Format: time */
            end?: string;
            /**
             * @description * `5` - 5 minutes
             *     * `10` - 10 minutes
             *     * `15` - 15 minutes
             *     * `30` - 30 minutes
             * @enum {integer}
             */
            every_minutes?: 5 | 10 | 15 | 30;
            capacity?: number;
        };
        PatchedAppointmentConfigRequest: {
            /** Format: date */
            base_booking_date?: string | null;
        };
        PatchedDoctorResultRequest: {
            /** Format: double */
            doctor_result?: number | null;
        };
        PatchedFavoriteStringsRequest: {
            /** @description Name of this group/folder (optional for leaf nodes) */
            name?: string;
            /** @description List of favorite strings */
            strings?: string[];
            /** @description Leave empty to make this a top-level item */
            parent?: number | null;
        };
        PatchedOcrDataRequest: {
            test?: string | null;
            value?: string | null;
            unit?: string | null;
            reference_range?: string | null;
            abnormal?: boolean | null;
            label?: string | null;
        };
        PatchedOrganizationRequest: {
            is_registered?: boolean;
            name?: string;
            address_text?: string | null;
            /** Format: uri */
            address_url?: string | null;
            /** @description List of phone numbers */
            phone_numbers?: string[];
            /** @description List of favorite strings */
            medical_history_template?: string[];
            /** @description List of favorite strings */
            paraclinical_and_clinical_examination_report_template?: string[];
            /** @description List of favorite strings */
            treatment_plan_template?: string[];
            /** @description List of favorite strings */
            physician_diagnosis_template?: string[];
        };
        PatchedOrganizationUserRequest: {
            add_patient?: boolean;
            change_patient?: boolean;
            manage_subscription?: boolean;
            add_visit?: boolean;
            add_co_worker?: boolean;
            read_patient_visits?: boolean;
            read_doctor_treatment?: boolean;
            read_growth_charts?: boolean;
            favorites?: boolean;
            appointment?: boolean;
        };
        PatchedPatientLightRequest: {
            national_number?: string;
            name?: string;
            /**
             * @description * `Male` - Male
             *     * `Female` - Female
             * @enum {string}
             */
            gender?: "Male" | "Female";
            /** Format: date */
            birth_date?: string;
            /** Format: double */
            fheight?: number | null;
            /** Format: double */
            mheight?: number | null;
            /**
             * @description * `T_E` - Tamin Ejtemai
             *     * `N_M` - Niroohaye Mosallah
             *     * `KH_D` - Khadamat Darmani
             *     * `T` - Takmili
             *     * `O` - Omr
             * @enum {string|null}
             */
            insurance?: "T_E" | "N_M" | "KH_D" | "T" | "O" | "" | null;
            /** @description Phone number must not start with 0. Example: +989115083458 */
            phone_number?: string | null;
            current_medicines?: components["schemas"]["CurrentMedicineRequest"][];
            ended_medicines?: components["schemas"]["EndedMedicineRequest"][];
            /** @description List of patient complaints */
            complaints?: string[];
            /** @description List of patient diseases */
            diseases?: string[];
            /** @description List of patient surgeries */
            surgeries?: string[];
            /** @description List of patient allergies */
            allergies?: string[];
        };
        PatchedPatientManagementRequest: {
            /**
             * @description * `waiting` - Waiting
             *     * `visiting` - Visiting
             *     * `done` - Done
             * @enum {string}
             */
            status?: "waiting" | "visiting" | "done";
            index?: number;
            /**
             * @description * `visit` - Visit
             *     * `lab` - Lab
             * @enum {string}
             */
            reason?: "visit" | "lab";
            /** Format: uuid */
            created_for?: string | null;
            /**
             * @description * `is_inside` - IS INSIDE
             *     * `wait_to_go_inside` - Waint To Go Inside
             *     * `queued` - Queued
             * @enum {string}
             */
            state?: "is_inside" | "wait_to_go_inside" | "queued";
            is_managed?: boolean;
        };
        PatchedPatientRequest: {
            current_medicines?: components["schemas"]["CurrentMedicineRequest"][];
            ended_medicines?: components["schemas"]["EndedMedicineRequest"][];
            national_number?: string;
            /** @description Phone number must not start with 0. Example: +989115083458 */
            phone_number?: string | null;
            /**
             * @description * `T_E` - Tamin Ejtemai
             *     * `N_M` - Niroohaye Mosallah
             *     * `KH_D` - Khadamat Darmani
             *     * `T` - Takmili
             *     * `O` - Omr
             * @enum {string|null}
             */
            insurance?: "T_E" | "N_M" | "KH_D" | "T" | "O" | "" | null;
            name?: string;
            /** Format: date */
            birth_date?: string;
            /**
             * @description * `Male` - Male
             *     * `Female` - Female
             * @enum {string}
             */
            gender?: "Male" | "Female";
            address?: string | null;
            /** Format: double */
            menarche_height?: number | null;
            /** Format: date */
            menarche_created_at?: string | null;
            /** Format: double */
            fheight?: number | null;
            /** Format: double */
            mheight?: number | null;
            gender_edited?: boolean;
            birth_date_edited?: boolean;
            /** Format: double */
            birth_height?: number | null;
            /** Format: double */
            birth_weight?: number | null;
            /** Format: double */
            birth_gestational_age?: number | null;
            /** Format: double */
            birth_head_circumference?: number | null;
            /** Format: double */
            birth_wrist_circumference?: number | null;
            /** Format: double */
            birth_arm_circumference?: number | null;
            /** @description List of patient complaints */
            complaints?: string[];
            /** @description List of patient diseases */
            diseases?: string[];
            /** @description List of patient surgeries */
            surgeries?: string[];
            /** @description List of patient allergies */
            allergies?: string[];
        };
        PatchedTreatmentRequest: {
            medicines?: components["schemas"]["CurrentMedicineRequest"][] | null;
            /** @description multi select tanner */
            tanner?: ("I" | "II" | "III" | "IV" | "V")[];
            /**
             * @description * `under_review` - Under Review
             *     * `under_treatment` - Under Treatment
             *     * `treatment_discontinued` - Treatment Discontinued
             *     * `referred` - Referred
             * @enum {string|null}
             */
            state?: "under_review" | "under_treatment" | "treatment_discontinued" | "referred" | "" | null;
            /** @description List of favorite strings */
            medical_history?: string[];
            /** @description List of favorite strings */
            paraclinical_and_clinical_examination_report?: string[];
            /** @description List of favorite strings */
            treatment_plan?: string[];
            /** @description List of favorite strings */
            physician_diagnosis?: string[];
            transcript?: string | null;
            /** Format: binary */
            audio_file?: File | null;
            is_calculating?: boolean;
        };
        PatchedUploaderRequest: {
            uploader_files_writable?: File[];
        };
        PatchedUserRequest: {
            /** @description Phone number must not start with 0. Example: +989115083458 */
            phone_number?: string;
            first_name?: string;
            last_name?: string;
            /** Format: binary */
            user_picture?: File | null;
            /**
             * @description * `fa` - Farsi
             *     * `en` - English
             *     * `de` - Deutsch
             * @enum {string}
             */
            language?: "fa" | "en" | "de";
            notification?: boolean;
            /**
             * @description * `10080` - 1 week
             *     * `43200` - 1 month
             *     * `129600` - 3 months
             *     * `259200` - 6 months
             * @enum {integer}
             */
            session_timeout_minutes?: 10080 | 43200 | 129600 | 259200;
        };
        PatchedVisitChoiceRequest: {
            /**
             * @description * `Adult` - Adult
             *     * `Child` - Child
             * @enum {string}
             */
            choice?: "Adult" | "Child";
        };
        PatchedVisitFinalRequest: {
            /** Format: date */
            report_created_at?: string;
            bone_age?: components["schemas"]["BoneAgeFinalRequest"] | null;
            ocr?: components["schemas"]["OcrFinalRequest"] | null;
            calculation?: components["schemas"]["CalculationFinalRequest"] | null;
            attachment?: components["schemas"]["AttachmentFinalRequest"] | null;
        };
        PatchedVisitOcrCallbackRequest: {
            result?: components["schemas"]["OcrSingleOutputRequest"][];
        };
        PatchedVisitPredictCallbackRequest: {
            prediction?: unknown;
            io_image?: string | null;
            coordinates?: number[][][] | null;
            change?: boolean;
        };
        PatchedVisitVoiceCallbackRequest: {
            result?: unknown;
        };
        PatchedVisitVoiceRequest: {
            /** Format: binary */
            audio_file?: File | null;
        };
        Patient: {
            readonly id: number;
            readonly management: components["schemas"]["ManagementLight"] | null;
            /** Format: date */
            readonly child_until: string;
            readonly growth_charts: components["schemas"]["GrowthChartList"][];
            readonly visit_medicines: components["schemas"]["CurrentMedicine"][];
            current_medicines?: components["schemas"]["CurrentMedicine"][];
            ended_medicines?: components["schemas"]["EndedMedicine"][];
            /** Format: date-time */
            readonly created_at: string;
            /** Format: date-time */
            readonly updated_at: string | null;
            /** Format: uuid */
            readonly uuid: string;
            national_number: string;
            /** @description Phone number must not start with 0. Example: +989115083458 */
            phone_number?: string | null;
            /**
             * @description * `T_E` - Tamin Ejtemai
             *     * `N_M` - Niroohaye Mosallah
             *     * `KH_D` - Khadamat Darmani
             *     * `T` - Takmili
             *     * `O` - Omr
             * @enum {string|null}
             */
            insurance?: "T_E" | "N_M" | "KH_D" | "T" | "O" | "" | null;
            name: string;
            /** Format: date */
            birth_date: string;
            /**
             * @description * `Male` - Male
             *     * `Female` - Female
             * @enum {string}
             */
            gender: "Male" | "Female";
            address?: string | null;
            /** Format: double */
            menarche_height?: number | null;
            /** Format: date */
            menarche_created_at?: string | null;
            /** Format: double */
            fheight?: number | null;
            /** Format: double */
            mheight?: number | null;
            gender_edited?: boolean;
            birth_date_edited?: boolean;
            /** Format: double */
            birth_height?: number | null;
            /** Format: double */
            birth_weight?: number | null;
            /** Format: double */
            birth_gestational_age?: number | null;
            /** Format: double */
            birth_head_circumference?: number | null;
            /** Format: double */
            birth_wrist_circumference?: number | null;
            /** Format: double */
            birth_arm_circumference?: number | null;
            /** @description List of patient complaints */
            complaints?: string[];
            /** @description List of patient diseases */
            diseases?: string[];
            /** @description List of patient surgeries */
            surgeries?: string[];
            /** @description List of patient allergies */
            allergies?: string[];
        };
        PatientBoneAgePlot: {
            readonly plot: components["schemas"]["PlotBase"] | null;
        };
        PatientLight: {
            /** Format: uuid */
            readonly uuid: string;
            national_number: string;
            name: string;
            /**
             * @description * `Male` - Male
             *     * `Female` - Female
             * @enum {string}
             */
            gender: "Male" | "Female";
            /** Format: date */
            birth_date: string;
            /** Format: double */
            fheight?: number | null;
            /** Format: double */
            mheight?: number | null;
            /**
             * @description * `T_E` - Tamin Ejtemai
             *     * `N_M` - Niroohaye Mosallah
             *     * `KH_D` - Khadamat Darmani
             *     * `T` - Takmili
             *     * `O` - Omr
             * @enum {string|null}
             */
            insurance?: "T_E" | "N_M" | "KH_D" | "T" | "O" | "" | null;
            /** @description Phone number must not start with 0. Example: +989115083458 */
            phone_number?: string | null;
            /** Format: date */
            readonly child_until: string;
            /** Format: uuid */
            readonly membership_uuid: string | null;
            readonly last_visit: components["schemas"]["VisitUuidCreatedAt"] | null;
            readonly is_real: boolean;
            current_medicines?: components["schemas"]["CurrentMedicine"][];
            ended_medicines?: components["schemas"]["EndedMedicine"][];
            /** @description List of patient complaints */
            complaints?: string[];
            /** @description List of patient diseases */
            diseases?: string[];
            /** @description List of patient surgeries */
            surgeries?: string[];
            /** @description List of patient allergies */
            allergies?: string[];
        };
        PatientLightRequest: {
            national_number: string;
            name: string;
            /**
             * @description * `Male` - Male
             *     * `Female` - Female
             * @enum {string}
             */
            gender: "Male" | "Female";
            /** Format: date */
            birth_date: string;
            /** Format: double */
            fheight?: number | null;
            /** Format: double */
            mheight?: number | null;
            /**
             * @description * `T_E` - Tamin Ejtemai
             *     * `N_M` - Niroohaye Mosallah
             *     * `KH_D` - Khadamat Darmani
             *     * `T` - Takmili
             *     * `O` - Omr
             * @enum {string|null}
             */
            insurance?: "T_E" | "N_M" | "KH_D" | "T" | "O" | "" | null;
            /** @description Phone number must not start with 0. Example: +989115083458 */
            phone_number?: string | null;
            current_medicines?: components["schemas"]["CurrentMedicineRequest"][];
            ended_medicines?: components["schemas"]["EndedMedicineRequest"][];
            /** @description List of patient complaints */
            complaints?: string[];
            /** @description List of patient diseases */
            diseases?: string[];
            /** @description List of patient surgeries */
            surgeries?: string[];
            /** @description List of patient allergies */
            allergies?: string[];
        };
        PatientManagement: {
            /** Format: uuid */
            readonly uuid: string;
            /** Format: date-time */
            readonly created_at: string;
            /** Format: date-time */
            readonly updated_at: string | null;
            /** Format: uuid */
            patient: string;
            readonly patient_read_only: components["schemas"]["PatientLight"];
            /**
             * @description * `waiting` - Waiting
             *     * `visiting` - Visiting
             *     * `done` - Done
             * @enum {string}
             */
            status: "waiting" | "visiting" | "done";
            index?: number;
            /**
             * @description * `visit` - Visit
             *     * `lab` - Lab
             * @enum {string}
             */
            reason?: "visit" | "lab";
            /** Format: uuid */
            created_for?: string | null;
            readonly created_for_read_only: components["schemas"]["UserLight"];
            /**
             * @description * `is_inside` - IS INSIDE
             *     * `wait_to_go_inside` - Waint To Go Inside
             *     * `queued` - Queued
             * @enum {string}
             */
            state?: "is_inside" | "wait_to_go_inside" | "queued";
            /** Format: date-time */
            done_created_at?: string | null;
            is_paid?: boolean;
            is_managed?: boolean;
            /** Format: date-time */
            managed_time?: string | null;
            is_emergency?: boolean;
            is_migrated?: boolean;
            readonly booking_data: components["schemas"]["BookingData"] | null;
        };
        PatientManagementBasicInfo: {
            /** Format: uuid */
            readonly uuid: string;
            readonly url: string | null;
            /** Format: uuid */
            appointment_booking: string;
            national_number: string;
            name: string;
            /**
             * @description * `Male` - Male
             *     * `Female` - Female
             * @enum {string}
             */
            gender: "Male" | "Female";
            /** Format: date */
            birth_date: string;
            /**
             * @description * `visit` - Visit
             *     * `lab` - Lab
             * @enum {string}
             */
            reason?: "visit" | "lab";
            /** @description Phone number must not start with 0. Example: +989115083458 */
            phone_number?: string | null;
            /** Format: double */
            fheight?: number | null;
            /** Format: double */
            mheight?: number | null;
            /**
             * @description * `T_E` - Tamin Ejtemai
             *     * `N_M` - Niroohaye Mosallah
             *     * `KH_D` - Khadamat Darmani
             *     * `T` - Takmili
             *     * `O` - Omr
             * @enum {string|null}
             */
            insurance?: "T_E" | "N_M" | "KH_D" | "T" | "O" | "" | null;
        };
        PatientManagementBasicInfoRequest: {
            /**
             * @description * `app` - App
             *     * `utility` - Utility
             * @enum {string}
             */
            utm: "app" | "utility";
            /** Format: uuid */
            appointment_calendar_interval: string;
            /** Format: uuid */
            appointment_booking: string;
            national_number: string;
            name: string;
            /**
             * @description * `Male` - Male
             *     * `Female` - Female
             * @enum {string}
             */
            gender: "Male" | "Female";
            /** Format: date */
            birth_date: string;
            /**
             * @description * `visit` - Visit
             *     * `lab` - Lab
             * @enum {string}
             */
            reason?: "visit" | "lab";
            /** @description Phone number must not start with 0. Example: +989115083458 */
            phone_number?: string | null;
            /** Format: double */
            fheight?: number | null;
            /** Format: double */
            mheight?: number | null;
            /**
             * @description * `T_E` - Tamin Ejtemai
             *     * `N_M` - Niroohaye Mosallah
             *     * `KH_D` - Khadamat Darmani
             *     * `T` - Takmili
             *     * `O` - Omr
             * @enum {string|null}
             */
            insurance?: "T_E" | "N_M" | "KH_D" | "T" | "O" | "" | null;
        };
        PatientManagementRequest: {
            /** Format: uuid */
            patient: string;
            /**
             * @description * `visit` - Visit
             *     * `lab` - Lab
             * @enum {string}
             */
            reason?: "visit" | "lab";
            /** Format: uuid */
            created_for?: string | null;
        };
        PatientMembership: {
            /** Format: uuid */
            readonly uuid: string;
            /** Format: date-time */
            readonly created_at: string;
            readonly patient: components["schemas"]["Patient"];
        };
        PatientMembershipLight: {
            /** Format: uuid */
            readonly uuid: string;
            /** Format: date-time */
            readonly created_at: string;
            patient: components["schemas"]["PatientLight"];
            /** Format: date */
            readonly last_visited: string | null;
        };
        PatientMembershipRequest: {
            /** Format: uuid */
            patient_uuid: string;
        };
        PatientOcrs: {
            readonly result: components["schemas"]["PatientOcrsResult"];
        };
        PatientOcrsHeader: {
            /** Format: date */
            date: string;
            /** Format: uuid */
            uuid: string;
        };
        PatientOcrsResult: {
            header: components["schemas"]["PatientOcrsHeader"][];
            table: components["schemas"]["OCRTestRow"][];
        };
        PatientRequest: {
            current_medicines?: components["schemas"]["CurrentMedicineRequest"][];
            ended_medicines?: components["schemas"]["EndedMedicineRequest"][];
            national_number: string;
            /** @description Phone number must not start with 0. Example: +989115083458 */
            phone_number?: string | null;
            /**
             * @description * `T_E` - Tamin Ejtemai
             *     * `N_M` - Niroohaye Mosallah
             *     * `KH_D` - Khadamat Darmani
             *     * `T` - Takmili
             *     * `O` - Omr
             * @enum {string|null}
             */
            insurance?: "T_E" | "N_M" | "KH_D" | "T" | "O" | "" | null;
            name: string;
            /** Format: date */
            birth_date: string;
            /**
             * @description * `Male` - Male
             *     * `Female` - Female
             * @enum {string}
             */
            gender: "Male" | "Female";
            address?: string | null;
            /** Format: double */
            menarche_height?: number | null;
            /** Format: date */
            menarche_created_at?: string | null;
            /** Format: double */
            fheight?: number | null;
            /** Format: double */
            mheight?: number | null;
            gender_edited?: boolean;
            birth_date_edited?: boolean;
            /** Format: double */
            birth_height?: number | null;
            /** Format: double */
            birth_weight?: number | null;
            /** Format: double */
            birth_gestational_age?: number | null;
            /** Format: double */
            birth_head_circumference?: number | null;
            /** Format: double */
            birth_wrist_circumference?: number | null;
            /** Format: double */
            birth_arm_circumference?: number | null;
            /** @description List of patient complaints */
            complaints?: string[];
            /** @description List of patient diseases */
            diseases?: string[];
            /** @description List of patient surgeries */
            surgeries?: string[];
            /** @description List of patient allergies */
            allergies?: string[];
        };
        PatientVoice: {
            readonly result: components["schemas"]["PatientVoiceResult"] | null;
        };
        PatientVoiceRequest: {
            /** Format: binary */
            audio: File;
            stage: number;
        };
        PatientVoiceResult: {
            name: string | null;
            /**
             * @description * `Male` - Male
             *     * `Female` - Female
             * @enum {string|null}
             */
            gender: "Male" | "Female" | null;
            /** Format: date */
            birth_date: string | null;
            /** Format: date */
            menarche_created_at: string | null;
            /**
             * @description * `T_E` - Tamin Ejtemai
             *     * `N_M` - Niroohaye Mosallah
             *     * `KH_D` - Khadamat Darmani
             *     * `T` - Takmili
             *     * `O` - Omr
             * @enum {string|null}
             */
            insurance: "T_E" | "N_M" | "KH_D" | "T" | "O" | null;
            address: string | null;
            related_phone_number: string | null;
            fheight: number | null;
            mheight: number | null;
            /** Format: double */
            birth_height: number | null;
            /** Format: double */
            birth_weight: number | null;
            /** Format: double */
            birth_gestational_age: number | null;
            /** Format: double */
            birth_head_circumference: number | null;
            /** Format: double */
            birth_wrist_circumference: number | null;
            /** Format: double */
            birth_arm_circumference: number | null;
            complaints: string[] | null;
            diseases: string[] | null;
            surgeries: string[] | null;
            allergies: string[] | null;
            ended_medicines: components["schemas"]["EndedMedicine"][] | null;
            current_medicines: components["schemas"]["CurrentMedicine"][] | null;
        };
        PatientVoiceResultRequest: {
            name: string | null;
            /**
             * @description * `Male` - Male
             *     * `Female` - Female
             * @enum {string|null}
             */
            gender: "Male" | "Female" | null;
            /** Format: date */
            birth_date: string | null;
            /** Format: date */
            menarche_created_at: string | null;
            /**
             * @description * `T_E` - Tamin Ejtemai
             *     * `N_M` - Niroohaye Mosallah
             *     * `KH_D` - Khadamat Darmani
             *     * `T` - Takmili
             *     * `O` - Omr
             * @enum {string|null}
             */
            insurance: "T_E" | "N_M" | "KH_D" | "T" | "O" | null;
            address: string | null;
            related_phone_number: string | null;
            fheight: number | null;
            mheight: number | null;
            /** Format: double */
            birth_height: number | null;
            /** Format: double */
            birth_weight: number | null;
            /** Format: double */
            birth_gestational_age: number | null;
            /** Format: double */
            birth_head_circumference: number | null;
            /** Format: double */
            birth_wrist_circumference: number | null;
            /** Format: double */
            birth_arm_circumference: number | null;
            complaints: string[] | null;
            diseases: string[] | null;
            surgeries: string[] | null;
            allergies: string[] | null;
            ended_medicines: components["schemas"]["EndedMedicineRequest"][] | null;
            current_medicines: components["schemas"]["CurrentMedicineRequest"][] | null;
        };
        PlanLight: {
            /** Format: uuid */
            readonly uuid: string;
            /** Format: double */
            readonly price: number;
            /**
             * @description * `Monthly` - Monthly
             *     * `Yearly` - Yearly
             * @enum {string}
             */
            readonly duration: "Monthly" | "Yearly";
            readonly growth: boolean;
        };
        PlotBase: {
            readonly chart_info: components["schemas"]["ChartInfo"];
            readonly curved_lines: components["schemas"]["Graph"][];
            readonly straight_lines: components["schemas"]["StraightLine"][];
            readonly coordinates: components["schemas"]["Slice"][];
            readonly static_points: components["schemas"]["Graph"][];
            readonly area_points: components["schemas"]["Graph"][];
        };
        Points: {
            /** Format: double */
            readonly x: number;
            /** Format: double */
            readonly y: number;
        };
        PricingPlanReadOnly: {
            /** Format: uuid */
            readonly uuid: string;
            /**
             * @description * `Basic` - Basic
             *     * `Advanced` - Advanced
             * @enum {string}
             */
            type: "Basic" | "Advanced";
            readonly current: boolean;
            /** Format: double */
            price: number;
            /** Format: double */
            discount_price?: number | null;
            discount_percent?: number | null;
            /**
             * @description * `Monthly` - Monthly
             *     * `Yearly` - Yearly
             * @default Monthly
             * @enum {string}
             */
            duration: "Monthly" | "Yearly";
            growth?: boolean;
            voice?: boolean;
        };
        QrCode: {
            readonly qrcode: string;
        };
        QrCodeRequest: {
            /** Format: uri */
            url: string;
        };
        RegisterDoctor: {
            /** Format: uri */
            national_card: string;
            medical_number: string;
        };
        RegisterDoctorRequest: {
            /** Format: binary */
            national_card: File;
            medical_number: string;
        };
        RegisterOrganization: {
            name: string;
            /** Format: uri */
            license: string;
        };
        RegisterOrganizationRequest: {
            name: string;
            /** Format: binary */
            license: File;
        };
        Reservation: {
            phone_number: string;
        };
        ReservationRequest: {
            recaptcha_code: string;
            phone_number: string;
        };
        Role: {
            readonly org: string;
            /** Format: uuid */
            readonly org_uuid: string;
            is_owner?: boolean;
            readonly current: boolean;
        };
        SessionInfo: {
            readonly current: boolean;
            /** Format: uuid */
            org_uuid?: string | null;
            /** Format: date-time */
            expires_at: string;
            ip?: string | null;
            device_type?: string | null;
            device_family?: string | null;
            os_family?: string | null;
            os_version?: string | null;
            browser_family?: string | null;
            browser_version?: string | null;
            accuracy_radius?: number | null;
            city?: string | null;
            continent_code?: string | null;
            continent_name?: string | null;
            country_code?: string | null;
            country_name?: string | null;
            is_in_european_union?: boolean | null;
            /** Format: double */
            latitude?: number | null;
            /** Format: double */
            longitude?: number | null;
            metro_code?: number | null;
            postal_code?: string | null;
            region_code?: string | null;
            region_name?: string | null;
            time_zone?: string | null;
            dma_code?: number | null;
            region?: string | null;
        };
        SessionInfoRequest: {
            /** Format: uuid */
            org_uuid?: string | null;
            /** Format: date-time */
            expires_at: string;
            ip?: string | null;
            device_type?: string | null;
            device_family?: string | null;
            os_family?: string | null;
            os_version?: string | null;
            browser_family?: string | null;
            browser_version?: string | null;
            accuracy_radius?: number | null;
            city?: string | null;
            continent_code?: string | null;
            continent_name?: string | null;
            country_code?: string | null;
            country_name?: string | null;
            is_in_european_union?: boolean | null;
            /** Format: double */
            latitude?: number | null;
            /** Format: double */
            longitude?: number | null;
            metro_code?: number | null;
            postal_code?: string | null;
            region_code?: string | null;
            region_name?: string | null;
            time_zone?: string | null;
            dma_code?: number | null;
            region?: string | null;
        };
        Slice: {
            /** Format: double */
            readonly x: number;
            readonly y_s: components["schemas"]["Y"][];
            readonly area_y_s: components["schemas"]["Ys"][] | null;
            readonly hover: components["schemas"]["HoverInfo"][] | null;
        };
        StraightLine: {
            readonly key: string;
            readonly label: string;
            readonly color: components["schemas"]["Color"];
            readonly is_main: boolean;
            /** Format: double */
            readonly x: number | null;
            /** Format: double */
            readonly y: number | null;
            readonly points: components["schemas"]["Points"][] | null;
        };
        Subscription: {
            /** Format: uuid */
            readonly uuid: string;
            readonly pricing_plan: components["schemas"]["PlanLight"];
            /** Format: date-time */
            readonly start: string;
            /** Format: date-time */
            readonly end: string;
        };
        SurroundingsData: {
            /** Format: uuid */
            previous_uuid: string | null;
            /** Format: uuid */
            next_uuid: string | null;
            day_difference: number | null;
        };
        Tmp: {
            /** Format: uuid */
            readonly uuid: string;
        };
        Transaction: {
            /** Format: date-time */
            readonly created_at: string;
            /** Format: int64 */
            amount: number;
            user: components["schemas"]["UserLight"];
            /**
             * @description * `success` - Success
             *     * `fail` - Fail
             *     * `pend` - Pend
             * @enum {string}
             */
            status: "success" | "fail" | "pend";
        };
        Treatment: {
            readonly id: number;
            medicines?: components["schemas"]["CurrentMedicine"][] | null;
            /** Format: date-time */
            readonly created_at: string;
            /** Format: date-time */
            readonly updated_at: string | null;
            /** Format: uuid */
            readonly uuid: string;
            /** @description multi select tanner */
            tanner?: ("I" | "II" | "III" | "IV" | "V")[];
            /**
             * @description * `under_review` - Under Review
             *     * `under_treatment` - Under Treatment
             *     * `treatment_discontinued` - Treatment Discontinued
             *     * `referred` - Referred
             * @enum {string|null}
             */
            state?: "under_review" | "under_treatment" | "treatment_discontinued" | "referred" | "" | null;
            /** @description List of favorite strings */
            medical_history?: string[];
            /** @description List of favorite strings */
            paraclinical_and_clinical_examination_report?: string[];
            /** @description List of favorite strings */
            treatment_plan?: string[];
            /** @description List of favorite strings */
            physician_diagnosis?: string[];
            transcript?: string | null;
            /** Format: uri */
            audio_file?: string | null;
            is_calculating?: boolean;
            /** Format: uuid */
            readonly visit: string;
        };
        Uploader: {
            /** Format: uuid */
            readonly uuid: string;
            readonly remaining_seconds: number;
            readonly uploader_files: components["schemas"]["UploaderFile"][];
        };
        UploaderFile: {
            /** Format: uri */
            file?: string | null;
            readonly file_name: string;
        };
        UploaderFileRequest: {
            /** Format: binary */
            file?: File | null;
        };
        User: {
            /** Format: uuid */
            readonly uuid: string;
            /** @description Phone number must not start with 0. Example: +989115083458 */
            phone_number?: string;
            first_name: string;
            last_name: string;
            /** Format: uri */
            user_picture?: string | null;
            /**
             * @description * `fa` - Farsi
             *     * `en` - English
             *     * `de` - Deutsch
             * @enum {string}
             */
            language?: "fa" | "en" | "de";
            /** Format: double */
            readonly credit: number;
            notification?: boolean;
            readonly is_superuser: boolean;
            /**
             * @description * `10080` - 1 week
             *     * `43200` - 1 month
             *     * `129600` - 3 months
             *     * `259200` - 6 months
             * @enum {integer}
             */
            session_timeout_minutes?: 10080 | 43200 | 129600 | 259200;
            /**
             * @description * `Africa/Abidjan` - Africa/Abidjan
             *     * `Africa/Accra` - Africa/Accra
             *     * `Africa/Addis_Ababa` - Africa/Addis_Ababa
             *     * `Africa/Algiers` - Africa/Algiers
             *     * `Africa/Asmara` - Africa/Asmara
             *     * `Africa/Asmera` - Africa/Asmera
             *     * `Africa/Bamako` - Africa/Bamako
             *     * `Africa/Bangui` - Africa/Bangui
             *     * `Africa/Banjul` - Africa/Banjul
             *     * `Africa/Bissau` - Africa/Bissau
             *     * `Africa/Blantyre` - Africa/Blantyre
             *     * `Africa/Brazzaville` - Africa/Brazzaville
             *     * `Africa/Bujumbura` - Africa/Bujumbura
             *     * `Africa/Cairo` - Africa/Cairo
             *     * `Africa/Casablanca` - Africa/Casablanca
             *     * `Africa/Ceuta` - Africa/Ceuta
             *     * `Africa/Conakry` - Africa/Conakry
             *     * `Africa/Dakar` - Africa/Dakar
             *     * `Africa/Dar_es_Salaam` - Africa/Dar_es_Salaam
             *     * `Africa/Djibouti` - Africa/Djibouti
             *     * `Africa/Douala` - Africa/Douala
             *     * `Africa/El_Aaiun` - Africa/El_Aaiun
             *     * `Africa/Freetown` - Africa/Freetown
             *     * `Africa/Gaborone` - Africa/Gaborone
             *     * `Africa/Harare` - Africa/Harare
             *     * `Africa/Johannesburg` - Africa/Johannesburg
             *     * `Africa/Juba` - Africa/Juba
             *     * `Africa/Kampala` - Africa/Kampala
             *     * `Africa/Khartoum` - Africa/Khartoum
             *     * `Africa/Kigali` - Africa/Kigali
             *     * `Africa/Kinshasa` - Africa/Kinshasa
             *     * `Africa/Lagos` - Africa/Lagos
             *     * `Africa/Libreville` - Africa/Libreville
             *     * `Africa/Lome` - Africa/Lome
             *     * `Africa/Luanda` - Africa/Luanda
             *     * `Africa/Lubumbashi` - Africa/Lubumbashi
             *     * `Africa/Lusaka` - Africa/Lusaka
             *     * `Africa/Malabo` - Africa/Malabo
             *     * `Africa/Maputo` - Africa/Maputo
             *     * `Africa/Maseru` - Africa/Maseru
             *     * `Africa/Mbabane` - Africa/Mbabane
             *     * `Africa/Mogadishu` - Africa/Mogadishu
             *     * `Africa/Monrovia` - Africa/Monrovia
             *     * `Africa/Nairobi` - Africa/Nairobi
             *     * `Africa/Ndjamena` - Africa/Ndjamena
             *     * `Africa/Niamey` - Africa/Niamey
             *     * `Africa/Nouakchott` - Africa/Nouakchott
             *     * `Africa/Ouagadougou` - Africa/Ouagadougou
             *     * `Africa/Porto-Novo` - Africa/Porto-Novo
             *     * `Africa/Sao_Tome` - Africa/Sao_Tome
             *     * `Africa/Timbuktu` - Africa/Timbuktu
             *     * `Africa/Tripoli` - Africa/Tripoli
             *     * `Africa/Tunis` - Africa/Tunis
             *     * `Africa/Windhoek` - Africa/Windhoek
             *     * `America/Adak` - America/Adak
             *     * `America/Anchorage` - America/Anchorage
             *     * `America/Anguilla` - America/Anguilla
             *     * `America/Antigua` - America/Antigua
             *     * `America/Araguaina` - America/Araguaina
             *     * `America/Argentina/Buenos_Aires` - America/Argentina/Buenos_Aires
             *     * `America/Argentina/Catamarca` - America/Argentina/Catamarca
             *     * `America/Argentina/ComodRivadavia` - America/Argentina/ComodRivadavia
             *     * `America/Argentina/Cordoba` - America/Argentina/Cordoba
             *     * `America/Argentina/Jujuy` - America/Argentina/Jujuy
             *     * `America/Argentina/La_Rioja` - America/Argentina/La_Rioja
             *     * `America/Argentina/Mendoza` - America/Argentina/Mendoza
             *     * `America/Argentina/Rio_Gallegos` - America/Argentina/Rio_Gallegos
             *     * `America/Argentina/Salta` - America/Argentina/Salta
             *     * `America/Argentina/San_Juan` - America/Argentina/San_Juan
             *     * `America/Argentina/San_Luis` - America/Argentina/San_Luis
             *     * `America/Argentina/Tucuman` - America/Argentina/Tucuman
             *     * `America/Argentina/Ushuaia` - America/Argentina/Ushuaia
             *     * `America/Aruba` - America/Aruba
             *     * `America/Asuncion` - America/Asuncion
             *     * `America/Atikokan` - America/Atikokan
             *     * `America/Atka` - America/Atka
             *     * `America/Bahia` - America/Bahia
             *     * `America/Bahia_Banderas` - America/Bahia_Banderas
             *     * `America/Barbados` - America/Barbados
             *     * `America/Belem` - America/Belem
             *     * `America/Belize` - America/Belize
             *     * `America/Blanc-Sablon` - America/Blanc-Sablon
             *     * `America/Boa_Vista` - America/Boa_Vista
             *     * `America/Bogota` - America/Bogota
             *     * `America/Boise` - America/Boise
             *     * `America/Buenos_Aires` - America/Buenos_Aires
             *     * `America/Cambridge_Bay` - America/Cambridge_Bay
             *     * `America/Campo_Grande` - America/Campo_Grande
             *     * `America/Cancun` - America/Cancun
             *     * `America/Caracas` - America/Caracas
             *     * `America/Catamarca` - America/Catamarca
             *     * `America/Cayenne` - America/Cayenne
             *     * `America/Cayman` - America/Cayman
             *     * `America/Chicago` - America/Chicago
             *     * `America/Chihuahua` - America/Chihuahua
             *     * `America/Ciudad_Juarez` - America/Ciudad_Juarez
             *     * `America/Coral_Harbour` - America/Coral_Harbour
             *     * `America/Cordoba` - America/Cordoba
             *     * `America/Costa_Rica` - America/Costa_Rica
             *     * `America/Coyhaique` - America/Coyhaique
             *     * `America/Creston` - America/Creston
             *     * `America/Cuiaba` - America/Cuiaba
             *     * `America/Curacao` - America/Curacao
             *     * `America/Danmarkshavn` - America/Danmarkshavn
             *     * `America/Dawson` - America/Dawson
             *     * `America/Dawson_Creek` - America/Dawson_Creek
             *     * `America/Denver` - America/Denver
             *     * `America/Detroit` - America/Detroit
             *     * `America/Dominica` - America/Dominica
             *     * `America/Edmonton` - America/Edmonton
             *     * `America/Eirunepe` - America/Eirunepe
             *     * `America/El_Salvador` - America/El_Salvador
             *     * `America/Ensenada` - America/Ensenada
             *     * `America/Fort_Nelson` - America/Fort_Nelson
             *     * `America/Fort_Wayne` - America/Fort_Wayne
             *     * `America/Fortaleza` - America/Fortaleza
             *     * `America/Glace_Bay` - America/Glace_Bay
             *     * `America/Godthab` - America/Godthab
             *     * `America/Goose_Bay` - America/Goose_Bay
             *     * `America/Grand_Turk` - America/Grand_Turk
             *     * `America/Grenada` - America/Grenada
             *     * `America/Guadeloupe` - America/Guadeloupe
             *     * `America/Guatemala` - America/Guatemala
             *     * `America/Guayaquil` - America/Guayaquil
             *     * `America/Guyana` - America/Guyana
             *     * `America/Halifax` - America/Halifax
             *     * `America/Havana` - America/Havana
             *     * `America/Hermosillo` - America/Hermosillo
             *     * `America/Indiana/Indianapolis` - America/Indiana/Indianapolis
             *     * `America/Indiana/Knox` - America/Indiana/Knox
             *     * `America/Indiana/Marengo` - America/Indiana/Marengo
             *     * `America/Indiana/Petersburg` - America/Indiana/Petersburg
             *     * `America/Indiana/Tell_City` - America/Indiana/Tell_City
             *     * `America/Indiana/Vevay` - America/Indiana/Vevay
             *     * `America/Indiana/Vincennes` - America/Indiana/Vincennes
             *     * `America/Indiana/Winamac` - America/Indiana/Winamac
             *     * `America/Indianapolis` - America/Indianapolis
             *     * `America/Inuvik` - America/Inuvik
             *     * `America/Iqaluit` - America/Iqaluit
             *     * `America/Jamaica` - America/Jamaica
             *     * `America/Jujuy` - America/Jujuy
             *     * `America/Juneau` - America/Juneau
             *     * `America/Kentucky/Louisville` - America/Kentucky/Louisville
             *     * `America/Kentucky/Monticello` - America/Kentucky/Monticello
             *     * `America/Knox_IN` - America/Knox_IN
             *     * `America/Kralendijk` - America/Kralendijk
             *     * `America/La_Paz` - America/La_Paz
             *     * `America/Lima` - America/Lima
             *     * `America/Los_Angeles` - America/Los_Angeles
             *     * `America/Louisville` - America/Louisville
             *     * `America/Lower_Princes` - America/Lower_Princes
             *     * `America/Maceio` - America/Maceio
             *     * `America/Managua` - America/Managua
             *     * `America/Manaus` - America/Manaus
             *     * `America/Marigot` - America/Marigot
             *     * `America/Martinique` - America/Martinique
             *     * `America/Matamoros` - America/Matamoros
             *     * `America/Mazatlan` - America/Mazatlan
             *     * `America/Mendoza` - America/Mendoza
             *     * `America/Menominee` - America/Menominee
             *     * `America/Merida` - America/Merida
             *     * `America/Metlakatla` - America/Metlakatla
             *     * `America/Mexico_City` - America/Mexico_City
             *     * `America/Miquelon` - America/Miquelon
             *     * `America/Moncton` - America/Moncton
             *     * `America/Monterrey` - America/Monterrey
             *     * `America/Montevideo` - America/Montevideo
             *     * `America/Montreal` - America/Montreal
             *     * `America/Montserrat` - America/Montserrat
             *     * `America/Nassau` - America/Nassau
             *     * `America/New_York` - America/New_York
             *     * `America/Nipigon` - America/Nipigon
             *     * `America/Nome` - America/Nome
             *     * `America/Noronha` - America/Noronha
             *     * `America/North_Dakota/Beulah` - America/North_Dakota/Beulah
             *     * `America/North_Dakota/Center` - America/North_Dakota/Center
             *     * `America/North_Dakota/New_Salem` - America/North_Dakota/New_Salem
             *     * `America/Nuuk` - America/Nuuk
             *     * `America/Ojinaga` - America/Ojinaga
             *     * `America/Panama` - America/Panama
             *     * `America/Pangnirtung` - America/Pangnirtung
             *     * `America/Paramaribo` - America/Paramaribo
             *     * `America/Phoenix` - America/Phoenix
             *     * `America/Port-au-Prince` - America/Port-au-Prince
             *     * `America/Port_of_Spain` - America/Port_of_Spain
             *     * `America/Porto_Acre` - America/Porto_Acre
             *     * `America/Porto_Velho` - America/Porto_Velho
             *     * `America/Puerto_Rico` - America/Puerto_Rico
             *     * `America/Punta_Arenas` - America/Punta_Arenas
             *     * `America/Rainy_River` - America/Rainy_River
             *     * `America/Rankin_Inlet` - America/Rankin_Inlet
             *     * `America/Recife` - America/Recife
             *     * `America/Regina` - America/Regina
             *     * `America/Resolute` - America/Resolute
             *     * `America/Rio_Branco` - America/Rio_Branco
             *     * `America/Rosario` - America/Rosario
             *     * `America/Santa_Isabel` - America/Santa_Isabel
             *     * `America/Santarem` - America/Santarem
             *     * `America/Santiago` - America/Santiago
             *     * `America/Santo_Domingo` - America/Santo_Domingo
             *     * `America/Sao_Paulo` - America/Sao_Paulo
             *     * `America/Scoresbysund` - America/Scoresbysund
             *     * `America/Shiprock` - America/Shiprock
             *     * `America/Sitka` - America/Sitka
             *     * `America/St_Barthelemy` - America/St_Barthelemy
             *     * `America/St_Johns` - America/St_Johns
             *     * `America/St_Kitts` - America/St_Kitts
             *     * `America/St_Lucia` - America/St_Lucia
             *     * `America/St_Thomas` - America/St_Thomas
             *     * `America/St_Vincent` - America/St_Vincent
             *     * `America/Swift_Current` - America/Swift_Current
             *     * `America/Tegucigalpa` - America/Tegucigalpa
             *     * `America/Thule` - America/Thule
             *     * `America/Thunder_Bay` - America/Thunder_Bay
             *     * `America/Tijuana` - America/Tijuana
             *     * `America/Toronto` - America/Toronto
             *     * `America/Tortola` - America/Tortola
             *     * `America/Vancouver` - America/Vancouver
             *     * `America/Virgin` - America/Virgin
             *     * `America/Whitehorse` - America/Whitehorse
             *     * `America/Winnipeg` - America/Winnipeg
             *     * `America/Yakutat` - America/Yakutat
             *     * `America/Yellowknife` - America/Yellowknife
             *     * `Antarctica/Casey` - Antarctica/Casey
             *     * `Antarctica/Davis` - Antarctica/Davis
             *     * `Antarctica/DumontDUrville` - Antarctica/DumontDUrville
             *     * `Antarctica/Macquarie` - Antarctica/Macquarie
             *     * `Antarctica/Mawson` - Antarctica/Mawson
             *     * `Antarctica/McMurdo` - Antarctica/McMurdo
             *     * `Antarctica/Palmer` - Antarctica/Palmer
             *     * `Antarctica/Rothera` - Antarctica/Rothera
             *     * `Antarctica/South_Pole` - Antarctica/South_Pole
             *     * `Antarctica/Syowa` - Antarctica/Syowa
             *     * `Antarctica/Troll` - Antarctica/Troll
             *     * `Antarctica/Vostok` - Antarctica/Vostok
             *     * `Arctic/Longyearbyen` - Arctic/Longyearbyen
             *     * `Asia/Aden` - Asia/Aden
             *     * `Asia/Almaty` - Asia/Almaty
             *     * `Asia/Amman` - Asia/Amman
             *     * `Asia/Anadyr` - Asia/Anadyr
             *     * `Asia/Aqtau` - Asia/Aqtau
             *     * `Asia/Aqtobe` - Asia/Aqtobe
             *     * `Asia/Ashgabat` - Asia/Ashgabat
             *     * `Asia/Ashkhabad` - Asia/Ashkhabad
             *     * `Asia/Atyrau` - Asia/Atyrau
             *     * `Asia/Baghdad` - Asia/Baghdad
             *     * `Asia/Bahrain` - Asia/Bahrain
             *     * `Asia/Baku` - Asia/Baku
             *     * `Asia/Bangkok` - Asia/Bangkok
             *     * `Asia/Barnaul` - Asia/Barnaul
             *     * `Asia/Beirut` - Asia/Beirut
             *     * `Asia/Bishkek` - Asia/Bishkek
             *     * `Asia/Brunei` - Asia/Brunei
             *     * `Asia/Calcutta` - Asia/Calcutta
             *     * `Asia/Chita` - Asia/Chita
             *     * `Asia/Choibalsan` - Asia/Choibalsan
             *     * `Asia/Chongqing` - Asia/Chongqing
             *     * `Asia/Chungking` - Asia/Chungking
             *     * `Asia/Colombo` - Asia/Colombo
             *     * `Asia/Dacca` - Asia/Dacca
             *     * `Asia/Damascus` - Asia/Damascus
             *     * `Asia/Dhaka` - Asia/Dhaka
             *     * `Asia/Dili` - Asia/Dili
             *     * `Asia/Dubai` - Asia/Dubai
             *     * `Asia/Dushanbe` - Asia/Dushanbe
             *     * `Asia/Famagusta` - Asia/Famagusta
             *     * `Asia/Gaza` - Asia/Gaza
             *     * `Asia/Harbin` - Asia/Harbin
             *     * `Asia/Hebron` - Asia/Hebron
             *     * `Asia/Ho_Chi_Minh` - Asia/Ho_Chi_Minh
             *     * `Asia/Hong_Kong` - Asia/Hong_Kong
             *     * `Asia/Hovd` - Asia/Hovd
             *     * `Asia/Irkutsk` - Asia/Irkutsk
             *     * `Asia/Istanbul` - Asia/Istanbul
             *     * `Asia/Jakarta` - Asia/Jakarta
             *     * `Asia/Jayapura` - Asia/Jayapura
             *     * `Asia/Jerusalem` - Asia/Jerusalem
             *     * `Asia/Kabul` - Asia/Kabul
             *     * `Asia/Kamchatka` - Asia/Kamchatka
             *     * `Asia/Karachi` - Asia/Karachi
             *     * `Asia/Kashgar` - Asia/Kashgar
             *     * `Asia/Kathmandu` - Asia/Kathmandu
             *     * `Asia/Katmandu` - Asia/Katmandu
             *     * `Asia/Khandyga` - Asia/Khandyga
             *     * `Asia/Kolkata` - Asia/Kolkata
             *     * `Asia/Krasnoyarsk` - Asia/Krasnoyarsk
             *     * `Asia/Kuala_Lumpur` - Asia/Kuala_Lumpur
             *     * `Asia/Kuching` - Asia/Kuching
             *     * `Asia/Kuwait` - Asia/Kuwait
             *     * `Asia/Macao` - Asia/Macao
             *     * `Asia/Macau` - Asia/Macau
             *     * `Asia/Magadan` - Asia/Magadan
             *     * `Asia/Makassar` - Asia/Makassar
             *     * `Asia/Manila` - Asia/Manila
             *     * `Asia/Muscat` - Asia/Muscat
             *     * `Asia/Nicosia` - Asia/Nicosia
             *     * `Asia/Novokuznetsk` - Asia/Novokuznetsk
             *     * `Asia/Novosibirsk` - Asia/Novosibirsk
             *     * `Asia/Omsk` - Asia/Omsk
             *     * `Asia/Oral` - Asia/Oral
             *     * `Asia/Phnom_Penh` - Asia/Phnom_Penh
             *     * `Asia/Pontianak` - Asia/Pontianak
             *     * `Asia/Pyongyang` - Asia/Pyongyang
             *     * `Asia/Qatar` - Asia/Qatar
             *     * `Asia/Qostanay` - Asia/Qostanay
             *     * `Asia/Qyzylorda` - Asia/Qyzylorda
             *     * `Asia/Rangoon` - Asia/Rangoon
             *     * `Asia/Riyadh` - Asia/Riyadh
             *     * `Asia/Saigon` - Asia/Saigon
             *     * `Asia/Sakhalin` - Asia/Sakhalin
             *     * `Asia/Samarkand` - Asia/Samarkand
             *     * `Asia/Seoul` - Asia/Seoul
             *     * `Asia/Shanghai` - Asia/Shanghai
             *     * `Asia/Singapore` - Asia/Singapore
             *     * `Asia/Srednekolymsk` - Asia/Srednekolymsk
             *     * `Asia/Taipei` - Asia/Taipei
             *     * `Asia/Tashkent` - Asia/Tashkent
             *     * `Asia/Tbilisi` - Asia/Tbilisi
             *     * `Asia/Tehran` - Asia/Tehran
             *     * `Asia/Tel_Aviv` - Asia/Tel_Aviv
             *     * `Asia/Thimbu` - Asia/Thimbu
             *     * `Asia/Thimphu` - Asia/Thimphu
             *     * `Asia/Tokyo` - Asia/Tokyo
             *     * `Asia/Tomsk` - Asia/Tomsk
             *     * `Asia/Ujung_Pandang` - Asia/Ujung_Pandang
             *     * `Asia/Ulaanbaatar` - Asia/Ulaanbaatar
             *     * `Asia/Ulan_Bator` - Asia/Ulan_Bator
             *     * `Asia/Urumqi` - Asia/Urumqi
             *     * `Asia/Ust-Nera` - Asia/Ust-Nera
             *     * `Asia/Vientiane` - Asia/Vientiane
             *     * `Asia/Vladivostok` - Asia/Vladivostok
             *     * `Asia/Yakutsk` - Asia/Yakutsk
             *     * `Asia/Yangon` - Asia/Yangon
             *     * `Asia/Yekaterinburg` - Asia/Yekaterinburg
             *     * `Asia/Yerevan` - Asia/Yerevan
             *     * `Atlantic/Azores` - Atlantic/Azores
             *     * `Atlantic/Bermuda` - Atlantic/Bermuda
             *     * `Atlantic/Canary` - Atlantic/Canary
             *     * `Atlantic/Cape_Verde` - Atlantic/Cape_Verde
             *     * `Atlantic/Faeroe` - Atlantic/Faeroe
             *     * `Atlantic/Faroe` - Atlantic/Faroe
             *     * `Atlantic/Jan_Mayen` - Atlantic/Jan_Mayen
             *     * `Atlantic/Madeira` - Atlantic/Madeira
             *     * `Atlantic/Reykjavik` - Atlantic/Reykjavik
             *     * `Atlantic/South_Georgia` - Atlantic/South_Georgia
             *     * `Atlantic/St_Helena` - Atlantic/St_Helena
             *     * `Atlantic/Stanley` - Atlantic/Stanley
             *     * `Australia/ACT` - Australia/ACT
             *     * `Australia/Adelaide` - Australia/Adelaide
             *     * `Australia/Brisbane` - Australia/Brisbane
             *     * `Australia/Broken_Hill` - Australia/Broken_Hill
             *     * `Australia/Canberra` - Australia/Canberra
             *     * `Australia/Currie` - Australia/Currie
             *     * `Australia/Darwin` - Australia/Darwin
             *     * `Australia/Eucla` - Australia/Eucla
             *     * `Australia/Hobart` - Australia/Hobart
             *     * `Australia/LHI` - Australia/LHI
             *     * `Australia/Lindeman` - Australia/Lindeman
             *     * `Australia/Lord_Howe` - Australia/Lord_Howe
             *     * `Australia/Melbourne` - Australia/Melbourne
             *     * `Australia/NSW` - Australia/NSW
             *     * `Australia/North` - Australia/North
             *     * `Australia/Perth` - Australia/Perth
             *     * `Australia/Queensland` - Australia/Queensland
             *     * `Australia/South` - Australia/South
             *     * `Australia/Sydney` - Australia/Sydney
             *     * `Australia/Tasmania` - Australia/Tasmania
             *     * `Australia/Victoria` - Australia/Victoria
             *     * `Australia/West` - Australia/West
             *     * `Australia/Yancowinna` - Australia/Yancowinna
             *     * `Brazil/Acre` - Brazil/Acre
             *     * `Brazil/DeNoronha` - Brazil/DeNoronha
             *     * `Brazil/East` - Brazil/East
             *     * `Brazil/West` - Brazil/West
             *     * `CET` - CET
             *     * `CST6CDT` - CST6CDT
             *     * `Canada/Atlantic` - Canada/Atlantic
             *     * `Canada/Central` - Canada/Central
             *     * `Canada/Eastern` - Canada/Eastern
             *     * `Canada/Mountain` - Canada/Mountain
             *     * `Canada/Newfoundland` - Canada/Newfoundland
             *     * `Canada/Pacific` - Canada/Pacific
             *     * `Canada/Saskatchewan` - Canada/Saskatchewan
             *     * `Canada/Yukon` - Canada/Yukon
             *     * `Chile/Continental` - Chile/Continental
             *     * `Chile/EasterIsland` - Chile/EasterIsland
             *     * `Cuba` - Cuba
             *     * `EET` - EET
             *     * `EST` - EST
             *     * `EST5EDT` - EST5EDT
             *     * `Egypt` - Egypt
             *     * `Eire` - Eire
             *     * `Etc/GMT` - Etc/GMT
             *     * `Etc/GMT+0` - Etc/GMT+0
             *     * `Etc/GMT+1` - Etc/GMT+1
             *     * `Etc/GMT+10` - Etc/GMT+10
             *     * `Etc/GMT+11` - Etc/GMT+11
             *     * `Etc/GMT+12` - Etc/GMT+12
             *     * `Etc/GMT+2` - Etc/GMT+2
             *     * `Etc/GMT+3` - Etc/GMT+3
             *     * `Etc/GMT+4` - Etc/GMT+4
             *     * `Etc/GMT+5` - Etc/GMT+5
             *     * `Etc/GMT+6` - Etc/GMT+6
             *     * `Etc/GMT+7` - Etc/GMT+7
             *     * `Etc/GMT+8` - Etc/GMT+8
             *     * `Etc/GMT+9` - Etc/GMT+9
             *     * `Etc/GMT-0` - Etc/GMT-0
             *     * `Etc/GMT-1` - Etc/GMT-1
             *     * `Etc/GMT-10` - Etc/GMT-10
             *     * `Etc/GMT-11` - Etc/GMT-11
             *     * `Etc/GMT-12` - Etc/GMT-12
             *     * `Etc/GMT-13` - Etc/GMT-13
             *     * `Etc/GMT-14` - Etc/GMT-14
             *     * `Etc/GMT-2` - Etc/GMT-2
             *     * `Etc/GMT-3` - Etc/GMT-3
             *     * `Etc/GMT-4` - Etc/GMT-4
             *     * `Etc/GMT-5` - Etc/GMT-5
             *     * `Etc/GMT-6` - Etc/GMT-6
             *     * `Etc/GMT-7` - Etc/GMT-7
             *     * `Etc/GMT-8` - Etc/GMT-8
             *     * `Etc/GMT-9` - Etc/GMT-9
             *     * `Etc/GMT0` - Etc/GMT0
             *     * `Etc/Greenwich` - Etc/Greenwich
             *     * `Etc/UCT` - Etc/UCT
             *     * `Etc/UTC` - Etc/UTC
             *     * `Etc/Universal` - Etc/Universal
             *     * `Etc/Zulu` - Etc/Zulu
             *     * `Europe/Amsterdam` - Europe/Amsterdam
             *     * `Europe/Andorra` - Europe/Andorra
             *     * `Europe/Astrakhan` - Europe/Astrakhan
             *     * `Europe/Athens` - Europe/Athens
             *     * `Europe/Belfast` - Europe/Belfast
             *     * `Europe/Belgrade` - Europe/Belgrade
             *     * `Europe/Berlin` - Europe/Berlin
             *     * `Europe/Bratislava` - Europe/Bratislava
             *     * `Europe/Brussels` - Europe/Brussels
             *     * `Europe/Bucharest` - Europe/Bucharest
             *     * `Europe/Budapest` - Europe/Budapest
             *     * `Europe/Busingen` - Europe/Busingen
             *     * `Europe/Chisinau` - Europe/Chisinau
             *     * `Europe/Copenhagen` - Europe/Copenhagen
             *     * `Europe/Dublin` - Europe/Dublin
             *     * `Europe/Gibraltar` - Europe/Gibraltar
             *     * `Europe/Guernsey` - Europe/Guernsey
             *     * `Europe/Helsinki` - Europe/Helsinki
             *     * `Europe/Isle_of_Man` - Europe/Isle_of_Man
             *     * `Europe/Istanbul` - Europe/Istanbul
             *     * `Europe/Jersey` - Europe/Jersey
             *     * `Europe/Kaliningrad` - Europe/Kaliningrad
             *     * `Europe/Kiev` - Europe/Kiev
             *     * `Europe/Kirov` - Europe/Kirov
             *     * `Europe/Kyiv` - Europe/Kyiv
             *     * `Europe/Lisbon` - Europe/Lisbon
             *     * `Europe/Ljubljana` - Europe/Ljubljana
             *     * `Europe/London` - Europe/London
             *     * `Europe/Luxembourg` - Europe/Luxembourg
             *     * `Europe/Madrid` - Europe/Madrid
             *     * `Europe/Malta` - Europe/Malta
             *     * `Europe/Mariehamn` - Europe/Mariehamn
             *     * `Europe/Minsk` - Europe/Minsk
             *     * `Europe/Monaco` - Europe/Monaco
             *     * `Europe/Moscow` - Europe/Moscow
             *     * `Europe/Nicosia` - Europe/Nicosia
             *     * `Europe/Oslo` - Europe/Oslo
             *     * `Europe/Paris` - Europe/Paris
             *     * `Europe/Podgorica` - Europe/Podgorica
             *     * `Europe/Prague` - Europe/Prague
             *     * `Europe/Riga` - Europe/Riga
             *     * `Europe/Rome` - Europe/Rome
             *     * `Europe/Samara` - Europe/Samara
             *     * `Europe/San_Marino` - Europe/San_Marino
             *     * `Europe/Sarajevo` - Europe/Sarajevo
             *     * `Europe/Saratov` - Europe/Saratov
             *     * `Europe/Simferopol` - Europe/Simferopol
             *     * `Europe/Skopje` - Europe/Skopje
             *     * `Europe/Sofia` - Europe/Sofia
             *     * `Europe/Stockholm` - Europe/Stockholm
             *     * `Europe/Tallinn` - Europe/Tallinn
             *     * `Europe/Tirane` - Europe/Tirane
             *     * `Europe/Tiraspol` - Europe/Tiraspol
             *     * `Europe/Ulyanovsk` - Europe/Ulyanovsk
             *     * `Europe/Uzhgorod` - Europe/Uzhgorod
             *     * `Europe/Vaduz` - Europe/Vaduz
             *     * `Europe/Vatican` - Europe/Vatican
             *     * `Europe/Vienna` - Europe/Vienna
             *     * `Europe/Vilnius` - Europe/Vilnius
             *     * `Europe/Volgograd` - Europe/Volgograd
             *     * `Europe/Warsaw` - Europe/Warsaw
             *     * `Europe/Zagreb` - Europe/Zagreb
             *     * `Europe/Zaporozhye` - Europe/Zaporozhye
             *     * `Europe/Zurich` - Europe/Zurich
             *     * `Factory` - Factory
             *     * `GB` - GB
             *     * `GB-Eire` - GB-Eire
             *     * `GMT` - GMT
             *     * `GMT+0` - GMT+0
             *     * `GMT-0` - GMT-0
             *     * `GMT0` - GMT0
             *     * `Greenwich` - Greenwich
             *     * `HST` - HST
             *     * `Hongkong` - Hongkong
             *     * `Iceland` - Iceland
             *     * `Indian/Antananarivo` - Indian/Antananarivo
             *     * `Indian/Chagos` - Indian/Chagos
             *     * `Indian/Christmas` - Indian/Christmas
             *     * `Indian/Cocos` - Indian/Cocos
             *     * `Indian/Comoro` - Indian/Comoro
             *     * `Indian/Kerguelen` - Indian/Kerguelen
             *     * `Indian/Mahe` - Indian/Mahe
             *     * `Indian/Maldives` - Indian/Maldives
             *     * `Indian/Mauritius` - Indian/Mauritius
             *     * `Indian/Mayotte` - Indian/Mayotte
             *     * `Indian/Reunion` - Indian/Reunion
             *     * `Iran` - Iran
             *     * `Israel` - Israel
             *     * `Jamaica` - Jamaica
             *     * `Japan` - Japan
             *     * `Kwajalein` - Kwajalein
             *     * `Libya` - Libya
             *     * `MET` - MET
             *     * `MST` - MST
             *     * `MST7MDT` - MST7MDT
             *     * `Mexico/BajaNorte` - Mexico/BajaNorte
             *     * `Mexico/BajaSur` - Mexico/BajaSur
             *     * `Mexico/General` - Mexico/General
             *     * `NZ` - NZ
             *     * `NZ-CHAT` - NZ-CHAT
             *     * `Navajo` - Navajo
             *     * `PRC` - PRC
             *     * `PST8PDT` - PST8PDT
             *     * `Pacific/Apia` - Pacific/Apia
             *     * `Pacific/Auckland` - Pacific/Auckland
             *     * `Pacific/Bougainville` - Pacific/Bougainville
             *     * `Pacific/Chatham` - Pacific/Chatham
             *     * `Pacific/Chuuk` - Pacific/Chuuk
             *     * `Pacific/Easter` - Pacific/Easter
             *     * `Pacific/Efate` - Pacific/Efate
             *     * `Pacific/Enderbury` - Pacific/Enderbury
             *     * `Pacific/Fakaofo` - Pacific/Fakaofo
             *     * `Pacific/Fiji` - Pacific/Fiji
             *     * `Pacific/Funafuti` - Pacific/Funafuti
             *     * `Pacific/Galapagos` - Pacific/Galapagos
             *     * `Pacific/Gambier` - Pacific/Gambier
             *     * `Pacific/Guadalcanal` - Pacific/Guadalcanal
             *     * `Pacific/Guam` - Pacific/Guam
             *     * `Pacific/Honolulu` - Pacific/Honolulu
             *     * `Pacific/Johnston` - Pacific/Johnston
             *     * `Pacific/Kanton` - Pacific/Kanton
             *     * `Pacific/Kiritimati` - Pacific/Kiritimati
             *     * `Pacific/Kosrae` - Pacific/Kosrae
             *     * `Pacific/Kwajalein` - Pacific/Kwajalein
             *     * `Pacific/Majuro` - Pacific/Majuro
             *     * `Pacific/Marquesas` - Pacific/Marquesas
             *     * `Pacific/Midway` - Pacific/Midway
             *     * `Pacific/Nauru` - Pacific/Nauru
             *     * `Pacific/Niue` - Pacific/Niue
             *     * `Pacific/Norfolk` - Pacific/Norfolk
             *     * `Pacific/Noumea` - Pacific/Noumea
             *     * `Pacific/Pago_Pago` - Pacific/Pago_Pago
             *     * `Pacific/Palau` - Pacific/Palau
             *     * `Pacific/Pitcairn` - Pacific/Pitcairn
             *     * `Pacific/Pohnpei` - Pacific/Pohnpei
             *     * `Pacific/Ponape` - Pacific/Ponape
             *     * `Pacific/Port_Moresby` - Pacific/Port_Moresby
             *     * `Pacific/Rarotonga` - Pacific/Rarotonga
             *     * `Pacific/Saipan` - Pacific/Saipan
             *     * `Pacific/Samoa` - Pacific/Samoa
             *     * `Pacific/Tahiti` - Pacific/Tahiti
             *     * `Pacific/Tarawa` - Pacific/Tarawa
             *     * `Pacific/Tongatapu` - Pacific/Tongatapu
             *     * `Pacific/Truk` - Pacific/Truk
             *     * `Pacific/Wake` - Pacific/Wake
             *     * `Pacific/Wallis` - Pacific/Wallis
             *     * `Pacific/Yap` - Pacific/Yap
             *     * `Poland` - Poland
             *     * `Portugal` - Portugal
             *     * `ROC` - ROC
             *     * `ROK` - ROK
             *     * `Singapore` - Singapore
             *     * `Turkey` - Turkey
             *     * `UCT` - UCT
             *     * `US/Alaska` - US/Alaska
             *     * `US/Aleutian` - US/Aleutian
             *     * `US/Arizona` - US/Arizona
             *     * `US/Central` - US/Central
             *     * `US/East-Indiana` - US/East-Indiana
             *     * `US/Eastern` - US/Eastern
             *     * `US/Hawaii` - US/Hawaii
             *     * `US/Indiana-Starke` - US/Indiana-Starke
             *     * `US/Michigan` - US/Michigan
             *     * `US/Mountain` - US/Mountain
             *     * `US/Pacific` - US/Pacific
             *     * `US/Samoa` - US/Samoa
             *     * `UTC` - UTC
             *     * `Universal` - Universal
             *     * `W-SU` - W-SU
             *     * `WET` - WET
             *     * `Zulu` - Zulu
             *     * `localtime` - localtime
             * @enum {string|null}
             */
            readonly current_org_timezone: "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Asmera" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Timbuktu" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/ComodRivadavia" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Atka" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Buenos_Aires" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Catamarca" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Ciudad_Juarez" | "America/Coral_Harbour" | "America/Cordoba" | "America/Costa_Rica" | "America/Coyhaique" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Ensenada" | "America/Fort_Nelson" | "America/Fort_Wayne" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Indianapolis" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Jujuy" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Knox_IN" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Louisville" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Mendoza" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montreal" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Acre" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Rosario" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Shiprock" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Virgin" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/South_Pole" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Ashkhabad" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Calcutta" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Chongqing" | "Asia/Chungking" | "Asia/Colombo" | "Asia/Dacca" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Harbin" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kashgar" | "Asia/Kathmandu" | "Asia/Katmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macao" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Saigon" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Tel_Aviv" | "Asia/Thimbu" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ujung_Pandang" | "Asia/Ulaanbaatar" | "Asia/Ulan_Bator" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faeroe" | "Atlantic/Faroe" | "Atlantic/Jan_Mayen" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/ACT" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Canberra" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/LHI" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/NSW" | "Australia/North" | "Australia/Perth" | "Australia/Queensland" | "Australia/South" | "Australia/Sydney" | "Australia/Tasmania" | "Australia/Victoria" | "Australia/West" | "Australia/Yancowinna" | "Brazil/Acre" | "Brazil/DeNoronha" | "Brazil/East" | "Brazil/West" | "CET" | "CST6CDT" | "Canada/Atlantic" | "Canada/Central" | "Canada/Eastern" | "Canada/Mountain" | "Canada/Newfoundland" | "Canada/Pacific" | "Canada/Saskatchewan" | "Canada/Yukon" | "Chile/Continental" | "Chile/EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc/GMT" | "Etc/GMT+0" | "Etc/GMT+1" | "Etc/GMT+10" | "Etc/GMT+11" | "Etc/GMT+12" | "Etc/GMT+2" | "Etc/GMT+3" | "Etc/GMT+4" | "Etc/GMT+5" | "Etc/GMT+6" | "Etc/GMT+7" | "Etc/GMT+8" | "Etc/GMT+9" | "Etc/GMT-0" | "Etc/GMT-1" | "Etc/GMT-10" | "Etc/GMT-11" | "Etc/GMT-12" | "Etc/GMT-13" | "Etc/GMT-14" | "Etc/GMT-2" | "Etc/GMT-3" | "Etc/GMT-4" | "Etc/GMT-5" | "Etc/GMT-6" | "Etc/GMT-7" | "Etc/GMT-8" | "Etc/GMT-9" | "Etc/GMT0" | "Etc/Greenwich" | "Etc/UCT" | "Etc/UTC" | "Etc/Universal" | "Etc/Zulu" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belfast" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Kyiv" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Tiraspol" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Factory" | "GB" | "GB-Eire" | "GMT" | "GMT+0" | "GMT-0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico/BajaNorte" | "Mexico/BajaSur" | "Mexico/General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Ponape" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Samoa" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Truk" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US/Alaska" | "US/Aleutian" | "US/Arizona" | "US/Central" | "US/East-Indiana" | "US/Eastern" | "US/Hawaii" | "US/Indiana-Starke" | "US/Michigan" | "US/Mountain" | "US/Pacific" | "US/Samoa" | "UTC" | "Universal" | "W-SU" | "WET" | "Zulu" | "localtime" | null;
            readonly is_inside_any_org: boolean;
            readonly doctor: components["schemas"]["DoctorReadOnly"] | null;
            readonly roles: components["schemas"]["Role"][];
            readonly sessions: components["schemas"]["SessionInfo"][];
        };
        UserLight: {
            /** Format: uuid */
            readonly uuid: string;
            /** Format: uri */
            readonly user_picture: string | null;
            first_name: string;
            last_name: string;
            phone_number: string;
            /** Format: double */
            readonly credit: number;
            readonly doctor: components["schemas"]["DoctorLight"] | null;
        };
        UserLightRequest: {
            first_name: string;
            last_name: string;
            phone_number: string;
        };
        UserSuperLight: {
            /** Format: uuid */
            readonly uuid: string;
            /** Format: uri */
            user_picture?: string | null;
            first_name: string;
            last_name: string;
            doctor: components["schemas"]["DoctorSuperLight"];
        };
        UserSuperLightRequest: {
            /** Format: binary */
            user_picture?: File | null;
            first_name: string;
            last_name: string;
            doctor: components["schemas"]["DoctorSuperLightRequest"];
        };
        Visit: {
            readonly id: number;
            bone_age?: components["schemas"]["BoneAge"];
            calculation?: components["schemas"]["Calculation"];
            treatment?: components["schemas"]["Treatment"];
            ocr?: components["schemas"]["Ocr"];
            attachment?: components["schemas"]["Attachment"];
            readonly surroundings_data: components["schemas"]["SurroundingsData"];
            readonly delta: components["schemas"]["Delta"];
            /** Format: date-time */
            readonly created_at: string;
            /** Format: date-time */
            readonly updated_at: string | null;
            /** Format: uuid */
            readonly uuid: string;
            /** Format: date */
            report_created_at: string;
            /** Format: uuid */
            organization: string;
            /** Format: uuid */
            patient: string;
            /** Format: uuid */
            created_by: string;
        };
        VisitChoice: {
            /** Format: uuid */
            readonly uuid: string;
        };
        VisitCompare: {
            readonly result: components["schemas"]["VisitCompareResult"];
        };
        VisitCompareHeader: {
            /** Format: date */
            date: string;
            /** Format: uuid */
            uuid: string;
        };
        VisitCompareHeaderRequest: {
            /** Format: date */
            date: string;
            /** Format: uuid */
            uuid: string;
        };
        VisitCompareRequest: {
            /** Format: uuid */
            uuid_1: string;
            /** Format: uuid */
            uuid_2: string;
        };
        VisitCompareResult: {
            header: components["schemas"]["VisitCompareHeader"][];
            table: components["schemas"]["VisitCompareRow"][];
        };
        VisitCompareResultRequest: {
            header: components["schemas"]["VisitCompareHeaderRequest"][];
            table: components["schemas"]["VisitCompareRowRequest"][];
        };
        VisitCompareRow: {
            test: string;
            unit: string | null;
            values: components["schemas"]["VisitCompareValue"][];
        };
        VisitCompareRowRequest: {
            test: string;
            unit: string | null;
            values: components["schemas"]["VisitCompareValueRequest"][];
        };
        VisitCompareValue: {
            val_1: string;
            val_2: string;
            /** Format: double */
            diff: number | null;
        };
        VisitCompareValueRequest: {
            val_1: string;
            val_2: string;
            /** Format: double */
            diff: number | null;
        };
        VisitFinal: {
            /** Format: uuid */
            readonly uuid: string;
            /** Format: date */
            report_created_at: string;
            bone_age?: components["schemas"]["BoneAgeFinal"] | null;
            ocr?: components["schemas"]["OcrFinal"] | null;
            calculation?: components["schemas"]["CalculationFinal"] | null;
            attachment?: components["schemas"]["AttachmentFinal"] | null;
            /** Format: uuid */
            patient: string;
        };
        VisitFinalRequest: {
            /** Format: date */
            report_created_at: string;
            bone_age?: components["schemas"]["BoneAgeFinalRequest"] | null;
            ocr?: components["schemas"]["OcrFinalRequest"] | null;
            calculation?: components["schemas"]["CalculationFinalRequest"] | null;
            attachment?: components["schemas"]["AttachmentFinalRequest"] | null;
            /** Format: uuid */
            patient: string;
        };
        VisitLight: {
            /** Format: uuid */
            readonly uuid: string;
            /** Format: date */
            report_created_at: string;
            calculation?: components["schemas"]["CalculationLight"];
        };
        VisitOcr: {
            /** Format: uuid */
            readonly uuid: string;
            ocr?: components["schemas"]["Ocr"];
            readonly surroundings_data: components["schemas"]["SurroundingsData"];
            /** Format: date */
            report_created_at: string;
            /** Format: uuid */
            patient: string;
        };
        VisitStats: {
            height: number;
            weight: number;
            bone_age: number;
            ocr: number;
            total: number;
            day_distribution: components["schemas"]["DayDistribution"][];
        };
        VisitStatusOnly: {
            /** Format: uuid */
            readonly uuid: string;
            /** Format: date-time */
            readonly created_at: string;
            /** Format: date */
            report_created_at: string;
            readonly patient: components["schemas"]["PatientLight"];
            readonly calculation: components["schemas"]["CalculationLight"];
            readonly bone_age: components["schemas"]["BoneAgeStatusOnly"];
            readonly ocr: components["schemas"]["OcrAbnormalCountOnly"];
            treatment?: components["schemas"]["Treatment"];
        };
        VisitTreatment: {
            /** Format: uuid */
            readonly uuid: string;
            /** Format: date */
            report_created_at: string;
            treatment?: components["schemas"]["Treatment"];
            readonly surroundings_data: components["schemas"]["SurroundingsData"];
        };
        VisitUuidCreatedAt: {
            /** Format: uuid */
            readonly uuid: string;
            /** Format: date-time */
            readonly created_at: string;
        };
        VisitVoice: {
            /** Format: uuid */
            readonly uuid: string;
            /** Format: uri */
            audio_file?: string | null;
        };
        VisitVoiceCallback: {
            result: unknown;
        };
        Y: {
            readonly key: string;
            /** Format: double */
            readonly y: number;
        };
        Ys: {
            readonly key: string;
            readonly y: number[];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    admin_api_appointment_config_list: {
        parameters: {
            query?: {
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedAppointmentConfigSuperLightList"];
                };
            };
        };
    };
    admin_api_appointment_migrate_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["AdminAppointmentMigrateRequest"];
                "application/json": components["schemas"]["AdminAppointmentMigrateRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AdminAppointmentMigrate"];
                };
            };
        };
    };
    admin_api_features_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["AdminFeaturesRequest"];
                "application/json": components["schemas"]["AdminFeaturesRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AdminFeatures"];
                };
            };
        };
    };
    admin_api_features_one_org_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["AdminFeaturesOneOrgRequest"];
                "application/json": components["schemas"]["AdminFeaturesOneOrgRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AdminFeaturesOneOrg"];
                };
            };
        };
    };
    admin_api_finalize_doctor_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                phone_number: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["PatchedAdminFinalizeDoctorRequest"];
                "application/json": components["schemas"]["PatchedAdminFinalizeDoctorRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AdminFinalizeDoctor"];
                };
            };
        };
    };
    admin_api_finalize_organization_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this organization. */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["PatchedAdminFinalizeOrganizationRequest"];
                "application/json": components["schemas"]["PatchedAdminFinalizeOrganizationRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AdminFinalizeOrganization"];
                };
            };
        };
    };
    admin_api_fix_future_indexes_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["AdminFixFutureIndexRequest"];
                "application/json": components["schemas"]["AdminFixFutureIndexRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AdminFixFutureIndex"];
                };
            };
        };
    };
    admin_api_login_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["AdminLoginRequest"];
                "application/json": components["schemas"]["AdminLoginRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AdminLogin"];
                };
            };
        };
    };
    admin_api_organizations_list: {
        parameters: {
            query?: {
                /** @description Which field to use when ordering the results. */
                ordering?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationLight"][];
                };
            };
        };
    };
    admin_api_report_list: {
        parameters: {
            query?: {
                created_at_after?: string;
                created_at_before?: string;
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedTmpList"];
                };
            };
        };
    };
    admin_api_unfinalized_doctors_list: {
        parameters: {
            query?: {
                /** @description Which field to use when ordering the results. */
                ordering?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserLight"][];
                };
            };
        };
    };
    admin_api_unfinalized_organizations_list: {
        parameters: {
            query?: {
                /** @description Which field to use when ordering the results. */
                ordering?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationLight"][];
                };
            };
        };
    };
    appointment_booking_cancel_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["AppointmentBookingCancelRequest"];
                "application/json": components["schemas"]["AppointmentBookingCancelRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppointmentBookingCancel"];
                };
            };
        };
    };
    appointment_booking_create_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["AppointmentBookingRequest"];
                "application/json": components["schemas"]["AppointmentBookingRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppointmentBooking"];
                };
            };
        };
    };
    appointment_booking_create_retrieve: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppointmentBooking"];
                };
            };
        };
    };
    appointment_booking_duplicate_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["AppointmentBookingDuplicateRequest"];
                "application/json": components["schemas"]["AppointmentBookingDuplicateRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppointmentBookingDuplicate"];
                };
            };
        };
    };
    appointment_booking_mine_list: {
        parameters: {
            query?: {
                is_future?: boolean;
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedAppointmentBookingLightList"];
                };
            };
        };
    };
    appointment_booking_patient_create_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["AppointmentBookingPatientCreateRequest"];
                "application/json": components["schemas"]["AppointmentBookingPatientCreateRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppointmentBookingPatientCreate"];
                };
            };
        };
    };
    appointment_booking_update_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["PatientManagementBasicInfoRequest"];
                "application/json": components["schemas"]["PatientManagementBasicInfoRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PatientManagementBasicInfo"];
                };
            };
        };
    };
    appointment_booking_update_callback_retrieve: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No response body */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    appointment_calendar_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AppointmentCalendarRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppointmentCalendar"];
                };
            };
        };
    };
    appointment_calendar_intervals_list: {
        parameters: {
            query?: {
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
            };
            header?: never;
            path: {
                appointment_config: string;
                date: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedAppointmentCalendarIntervalList"];
                };
            };
        };
    };
    appointment_calendar_days_list: {
        parameters: {
            query?: {
                from_date?: string;
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
                to_date?: string;
            };
            header?: never;
            path: {
                appointment_config: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedAppointmentCalendarDayList"];
                };
            };
        };
    };
    appointment_calendar_cancel_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["AppointmentCalendarCancelRequest"];
                "application/json": components["schemas"]["AppointmentCalendarCancelRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppointmentCalendarCancel"];
                };
            };
        };
    };
    appointment_config_list: {
        parameters: {
            query?: {
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedAppointmentConfigLightList"];
                };
            };
        };
    };
    appointment_config_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["AppointmentConfigRequest"];
                "application/json": components["schemas"]["AppointmentConfigRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppointmentConfig"];
                };
            };
        };
    };
    appointment_config_retrieve: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppointmentConfig"];
                };
            };
        };
    };
    appointment_config_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["PatchedAppointmentConfigRequest"];
                "application/json": components["schemas"]["PatchedAppointmentConfigRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppointmentConfig"];
                };
            };
        };
    };
    appointment_config_interval_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["AppointmentConfigIntervalRequest"];
                "application/json": components["schemas"]["AppointmentConfigIntervalRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppointmentConfigInterval"];
                };
            };
        };
    };
    appointment_config_interval_destroy: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No response body */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    appointment_config_interval_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["PatchedAppointmentConfigIntervalRequest"];
                "application/json": components["schemas"]["PatchedAppointmentConfigIntervalRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppointmentConfigInterval"];
                };
            };
        };
    };
    appointment_config_mine_list: {
        parameters: {
            query?: {
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedAppointmentConfigSuperLightList"];
                };
            };
        };
    };
    fcm_devices_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["FCMDeviceRequest"];
                "application/json": components["schemas"]["FCMDeviceRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FCMDevice"];
                };
            };
        };
    };
    fcm_devices_destroy: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                registration_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No response body */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    feedback_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["FeedbackRequest"];
                "application/json": components["schemas"]["FeedbackRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Feedback"];
                };
            };
        };
    };
    growth_charts_retrieve: {
        parameters: {
            query?: {
                /** @description Optional comparison visit UUID */
                uuid_1?: string;
                /** @description Optional comparison visit UUID */
                uuid_2?: string;
            };
            header?: never;
            path: {
                patient_uuid: string;
                type: string;
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GrowthChartDetail"];
                };
            };
        };
    };
    management_list: {
        parameters: {
            query?: {
                birth_date_after?: string;
                birth_date_before?: string;
                created_at_after?: string;
                created_at_before?: string;
                created_for?: string[];
                export?: boolean;
                /**
                 * @description * `Male` - Male
                 *     * `Female` - Female
                 */
                gender?: ("Female" | "Male")[];
                identity?: string;
                is_for_appointment?: boolean;
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
                /**
                 * @description * `visit` - Visit
                 *     * `lab` - Lab
                 */
                reason?: ("lab" | "visit")[];
                /**
                 * @description * `waiting` - Waiting
                 *     * `visiting` - Visiting
                 *     * `done` - Done
                 */
                status?: ("done" | "visiting" | "waiting")[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedPatientManagementList"];
                };
            };
        };
    };
    management_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["PatientManagementRequest"];
                "application/json": components["schemas"]["PatientManagementRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PatientManagement"];
                };
            };
        };
    };
    management_destroy: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No response body */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    management_partial_update: {
        parameters: {
            query?: {
                birth_date_after?: string;
                birth_date_before?: string;
                created_at_after?: string;
                created_at_before?: string;
                created_for?: string[];
                export?: boolean;
                /**
                 * @description * `Male` - Male
                 *     * `Female` - Female
                 */
                gender?: ("Female" | "Male")[];
                identity?: string;
                is_for_appointment?: boolean;
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
                /**
                 * @description * `visit` - Visit
                 *     * `lab` - Lab
                 */
                reason?: ("lab" | "visit")[];
                /**
                 * @description * `waiting` - Waiting
                 *     * `visiting` - Visiting
                 *     * `done` - Done
                 */
                status?: ("done" | "visiting" | "waiting")[];
            };
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["PatchedPatientManagementRequest"];
                "application/json": components["schemas"]["PatchedPatientManagementRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PatientManagement"];
                };
            };
        };
    };
    membership_list: {
        parameters: {
            query?: {
                identity?: string;
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedOrganizationUserList"];
                };
            };
        };
    };
    membership_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["OrganizationUserRequest"];
                "application/json": components["schemas"]["OrganizationUserRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationUser"];
                };
            };
        };
    };
    membership_patient_list: {
        parameters: {
            query?: {
                allergies?: string[];
                birth_date_after?: string;
                birth_date_before?: string;
                complaints?: string[];
                created_at_after?: string;
                created_at_before?: string;
                diseases?: string[];
                export?: boolean;
                /**
                 * @description * `Male` - Male
                 *     * `Female` - Female
                 */
                gender?: ("Female" | "Male")[];
                identity?: string;
                /**
                 * @description * `T_E` - Tamin Ejtemai
                 *     * `N_M` - Niroohaye Mosallah
                 *     * `KH_D` - Khadamat Darmani
                 *     * `T` - Takmili
                 *     * `O` - Omr
                 */
                insurance?: ("KH_D" | "N_M" | "O" | "T" | "T_E" | null)[];
                last_visited_after?: string;
                last_visited_before?: string;
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
                surgeries?: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedPatientMembershipLightList"];
                };
            };
        };
    };
    membership_patient_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["PatientMembershipRequest"];
                "application/json": components["schemas"]["PatientMembershipRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PatientMembership"];
                };
            };
        };
    };
    membership_patient_retrieve: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Patient"];
                };
            };
        };
    };
    membership_patient_destroy: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No response body */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    membership_patient_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["PatchedPatientRequest"];
                "application/json": components["schemas"]["PatchedPatientRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Patient"];
                };
            };
        };
    };
    membership_patient_treatments_list: {
        parameters: {
            query?: {
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
            };
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedVisitTreatmentList"];
                };
            };
        };
    };
    membership_patient_visits_list: {
        parameters: {
            query?: {
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
            };
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedVisitLightList"];
                };
            };
        };
    };
    membership_patient_bone_age_plot_retrieve: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PatientBoneAgePlot"];
                };
            };
        };
    };
    membership_patient_light_retrieve: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PatientMembershipLight"];
                };
            };
        };
    };
    membership_patient_ocrs_retrieve: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PatientOcrs"];
                };
            };
        };
    };
    membership_patient_voice_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["PatientVoiceRequest"];
                "application/json": components["schemas"]["PatientVoiceRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PatientVoice"];
                };
            };
        };
    };
    membership_retrieve: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationUser"];
                };
            };
        };
    };
    membership_destroy: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No response body */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    membership_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["PatchedOrganizationUserRequest"];
                "application/json": components["schemas"]["PatchedOrganizationUserRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationUser"];
                };
            };
        };
    };
    membership_lookup_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["OrganizationUserLookupRequest"];
                "application/json": components["schemas"]["OrganizationUserLookupRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationUserLookup"];
                };
            };
        };
    };
    organizations_retrieve: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Organization"];
                };
            };
        };
    };
    organizations_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["PatchedOrganizationRequest"];
                "application/json": components["schemas"]["PatchedOrganizationRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Organization"];
                };
            };
        };
    };
    organizations_buy_plan_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["BuyPlanRequest"];
                "application/json": components["schemas"]["BuyPlanRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BuyPlan"];
                };
            };
        };
    };
    organizations_buy_plan_callback_retrieve: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No response body */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    organizations_favorite_strings_list: {
        parameters: {
            query?: {
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedFavoriteStringsList"];
                };
            };
        };
    };
    organizations_favorite_strings_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["FavoriteStringsRequest"];
                "application/json": components["schemas"]["FavoriteStringsRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FavoriteStrings"];
                };
            };
        };
    };
    organizations_favorite_strings_destroy: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No response body */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    organizations_favorite_strings_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["PatchedFavoriteStringsRequest"];
                "application/json": components["schemas"]["PatchedFavoriteStringsRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FavoriteStrings"];
                };
            };
        };
    };
    organizations_remove_plan_destroy: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No response body */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    organizations_report_management_retrieve: {
        parameters: {
            query?: {
                birth_date_after?: string;
                birth_date_before?: string;
                created_at_after?: string;
                created_at_before?: string;
                created_for?: string[];
                export?: boolean;
                /**
                 * @description * `Male` - Male
                 *     * `Female` - Female
                 */
                gender?: ("Female" | "Male")[];
                identity?: string;
                is_for_appointment?: boolean;
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
                /**
                 * @description * `visit` - Visit
                 *     * `lab` - Lab
                 */
                reason?: ("lab" | "visit")[];
                /**
                 * @description * `waiting` - Waiting
                 *     * `visiting` - Visiting
                 *     * `done` - Done
                 */
                status?: ("done" | "visiting" | "waiting")[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationReportManagementResponse"];
                };
            };
        };
    };
    organizations_report_patient_retrieve: {
        parameters: {
            query?: {
                allergies?: string[];
                birth_date_after?: string;
                birth_date_before?: string;
                complaints?: string[];
                created_at_after?: string;
                created_at_before?: string;
                diseases?: string[];
                export?: boolean;
                /**
                 * @description * `Male` - Male
                 *     * `Female` - Female
                 */
                gender?: ("Female" | "Male")[];
                identity?: string;
                /**
                 * @description * `T_E` - Tamin Ejtemai
                 *     * `N_M` - Niroohaye Mosallah
                 *     * `KH_D` - Khadamat Darmani
                 *     * `T` - Takmili
                 *     * `O` - Omr
                 */
                insurance?: ("KH_D" | "N_M" | "O" | "T" | "T_E" | null)[];
                last_visited_after?: string;
                last_visited_before?: string;
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
                surgeries?: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationReportMembershipResponse"];
                };
            };
        };
    };
    organizations_report_patient_filters_allergies_list: {
        parameters: {
            query?: {
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedFilterListList"];
                };
            };
        };
    };
    organizations_report_patient_filters_complaints_list: {
        parameters: {
            query?: {
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedFilterListList"];
                };
            };
        };
    };
    organizations_report_patient_filters_diseases_list: {
        parameters: {
            query?: {
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedFilterListList"];
                };
            };
        };
    };
    organizations_report_patient_filters_surgeries_list: {
        parameters: {
            query?: {
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedFilterListList"];
                };
            };
        };
    };
    organizations_report_visit_retrieve: {
        parameters: {
            query?: {
                export?: boolean;
                identity?: string;
                medical_history?: string[];
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
                paraclinical_and_clinical_examination_report?: string[];
                physician_diagnosis?: string[];
                report_created_at_after?: string;
                report_created_at_before?: string;
                /**
                 * @description Filter by report data availability. Multiple options can be selected.
                 *
                 *     * `height` - Height
                 *     * `weight` - Weight
                 *     * `bone_age` - Bone Age
                 *     * `ocr` - Ocr
                 */
                report_options?: ("bone_age" | "height" | "ocr" | "weight")[];
                treatment_plan?: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationReportVisitResponse"];
                };
            };
        };
    };
    organizations_report_visit_filters_examination_report_list: {
        parameters: {
            query?: {
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedFilterListList"];
                };
            };
        };
    };
    organizations_report_visit_filters_medical_history_list: {
        parameters: {
            query?: {
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedFilterListList"];
                };
            };
        };
    };
    organizations_report_visit_filters_physician_diagnosis_list: {
        parameters: {
            query?: {
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedFilterListList"];
                };
            };
        };
    };
    organizations_report_visit_filters_treatment_plan_list: {
        parameters: {
            query?: {
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedFilterListList"];
                };
            };
        };
    };
    p_m_b_i_mine_list: {
        parameters: {
            query?: {
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedPatientManagementBasicInfoList"];
                };
            };
        };
    };
    patients_add_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["PatientRequest"];
                "application/json": components["schemas"]["PatientRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Patient"];
                };
            };
        };
    };
    patients_add_light_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["PatientLightRequest"];
                "application/json": components["schemas"]["PatientLightRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PatientLight"];
                };
            };
        };
    };
    patients_add_light_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["PatchedPatientLightRequest"];
                "application/json": components["schemas"]["PatchedPatientLightRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PatientLight"];
                };
            };
        };
    };
    patients_add_lookup_retrieve: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                national_number: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PatientLight"];
                };
            };
        };
    };
    payment_appointment_price_retrieve: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppointmentPrice"];
                };
            };
        };
    };
    payment_plans_list: {
        parameters: {
            query?: {
                /**
                 * @description * `Monthly` - Monthly
                 *     * `Yearly` - Yearly
                 */
                duration?: "Monthly" | "Yearly";
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedPricingPlanReadOnlyList"];
                };
            };
        };
    };
    payment_transactions_list: {
        parameters: {
            query?: {
                /** @description Which field to use when ordering the results. */
                ordering?: string;
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description Number of results to return per page. */
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedTransactionList"];
                };
            };
        };
    };
    qrcode_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["QrCodeRequest"];
                "application/json": components["schemas"]["QrCodeRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["QrCode"];
                };
            };
        };
    };
    register_doctor_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["RegisterDoctorRequest"];
                "application/json": components["schemas"]["RegisterDoctorRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RegisterDoctor"];
                };
            };
        };
    };
    register_organization_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["RegisterOrganizationRequest"];
                "application/json": components["schemas"]["RegisterOrganizationRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RegisterOrganization"];
                };
            };
        };
    };
    reservation_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["ReservationRequest"];
                "application/json": components["schemas"]["ReservationRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Reservation"];
                };
            };
        };
    };
    secure_media_retrieve: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No response body */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    uploader_create: {
        parameters: {
            query?: {
                /** @description Which field to use when ordering the results. */
                ordering?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Uploader"];
                };
            };
        };
    };
    uploader_retrieve: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Uploader"];
                };
            };
        };
    };
    uploader_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["PatchedUploaderRequest"];
                "application/json": components["schemas"]["PatchedUploaderRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Uploader"];
                };
            };
        };
    };
    users_retrieve: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
        };
    };
    users_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["PatchedUserRequest"];
                "application/json": components["schemas"]["PatchedUserRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
        };
    };
    users_account_switch_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["ChooseOrgRequest"];
                "application/json": components["schemas"]["ChooseOrgRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChooseOrg"];
                };
            };
        };
    };
    users_has_session_retrieve: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HasSession"];
                };
            };
        };
    };
    users_logout_destroy: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No response body */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    users_logout_other_sessions_destroy: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No response body */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    users_otp_callback_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["OTPCallbackRequest"];
                "application/json": components["schemas"]["OTPCallbackRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OTPCallback"];
                };
            };
        };
    };
    users_otp_init_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["OTPInitRequest"];
                "application/json": components["schemas"]["OTPInitRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OTPInit"];
                };
            };
        };
    };
    visits_retrieve: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Visit"];
                };
            };
        };
    };
    visits_destroy: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No response body */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    visits_report_retrieve: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Visit"];
                };
            };
        };
    };
    visits_callback_ocr_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this visit. */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["PatchedVisitOcrCallbackRequest"];
                "application/json": components["schemas"]["PatchedVisitOcrCallbackRequest"];
            };
        };
        responses: {
            /** @description No response body */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    visits_callback_predict_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this visit. */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["PatchedVisitPredictCallbackRequest"];
                "application/json": components["schemas"]["PatchedVisitPredictCallbackRequest"];
            };
        };
        responses: {
            /** @description No response body */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    visits_callback_voice_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this treatment. */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["PatchedVisitVoiceCallbackRequest"];
                "application/json": components["schemas"]["PatchedVisitVoiceCallbackRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VisitVoiceCallback"];
                };
            };
        };
    };
    visits_choice_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["PatchedVisitChoiceRequest"];
                "application/json": components["schemas"]["PatchedVisitChoiceRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VisitChoice"];
                };
            };
        };
    };
    visits_compare_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["VisitCompareRequest"];
                "application/json": components["schemas"]["VisitCompareRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VisitCompare"];
                };
            };
        };
    };
    visits_doctor_result_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["PatchedDoctorResultRequest"];
                "application/json": components["schemas"]["PatchedDoctorResultRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DoctorResult"];
                };
            };
        };
    };
    visits_final_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["VisitFinalRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VisitFinal"];
                };
            };
        };
    };
    visits_final_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["PatchedVisitFinalRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VisitFinal"];
                };
            };
        };
    };
    visits_ocr_retrieve: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VisitOcr"];
                };
            };
        };
    };
    visits_ocr_data_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["OcrDataRequest"];
                "application/json": components["schemas"]["OcrDataRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OcrData"];
                };
            };
        };
    };
    visits_ocr_data_destroy: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No response body */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    visits_ocr_data_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["PatchedOcrDataRequest"];
                "application/json": components["schemas"]["PatchedOcrDataRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OcrData"];
                };
            };
        };
    };
    visits_treatment_retrieve: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VisitTreatment"];
                };
            };
        };
    };
    visits_treatment_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["PatchedTreatmentRequest"];
                "application/json": components["schemas"]["PatchedTreatmentRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Treatment"];
                };
            };
        };
    };
    visits_voice_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["PatchedVisitVoiceRequest"];
                "application/json": components["schemas"]["PatchedVisitVoiceRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VisitVoice"];
                };
            };
        };
    };
}
