document.addEventListener('DOMContentLoaded', () => {

    let activeUser = JSON.parse(localStorage.getItem("activeUser"));

    if (!activeUser) {
        window.location.href = "index.html";
        return;
    }

    /* --- LANGUAGE CONFIGURATION --- */
    const translations = {
        es: {
            nav_home: "Inicio",
            nav_parcels: "Parcelas",
            nav_devices: "Dispositivos IoT",
            nav_linking: "Vinculación",
            nav_map: "Mapa",
            nav_notifications: "Notificaciones",
            nav_settings: "Configuración",
            search_placeholder: "Buscar en tu granja...",
            welcome_title: `¡Hola, ${activeUser.name}! 👋`,
            welcome_subtitle: "Aquí tienes un resumen de tu actividad reciente.",
            quick_access: "Acceso Rápido",
            card_parcels_title: "Mis Parcelas",
            card_parcels_desc: "Gestiona tus cultivos",
            card_devices_title: "Dispositivos",
            card_devices_desc: "Monitorea tus sensores",
            card_link_title: "Vincular",
            card_link_desc: "Conecta dispositivos",
            system_status: "Estado del Sistema",
            stat_active_parcels: "Parcelas Activas",
            stat_online_sensors: "Sensores Online",
            stat_pending_alerts: "Alertas Pendientes",
            section_parcels_title: "Mis Parcelas",
            btn_new_parcel: "Nueva Parcela",
            section_devices_title: "Dispositivos IoT",
            btn_new_device: "Nuevo Dispositivo",
            section_linking_title: "Vinculación",
            section_linking_desc: "Asocia tus dispositivos IoT a tus parcelas para comenzar a monitorear.",
            link_step_1: "1. Selecciona una Parcela",
            link_step_2: "2. Selecciona Dispositivos",
            btn_link_confirm: "Vincular Dispositivos",
            section_map_title: "Mapa de Cultivos",
            section_map_desc: "Visualiza el estado de tus parcelas en tiempo real.",
            section_notifications_title: "Notificaciones",
            section_settings_title: "Configuración",
            settings_language_title: "Idioma",
            settings_language_label: "Seleccionar Idioma",
            settings_profile_title: "Información Personal",
            label_profile_photo: "Foto de Perfil",
            label_name: "Nombre",
            btn_save_changes: "Guardar",
            settings_security_title: "Seguridad",
            label_current_password: "Contraseña Actual",
            label_new_password: "Nueva Contraseña",
            label_confirm_password: "Confirmar Nueva Contraseña",
            btn_update_password: "Actualizar Contraseña",
            settings_danger_zone: "Zona de Peligro",
            settings_delete_desc: "Una vez que elimines tu cuenta, no hay vuelta atrás. Por favor, ten cuidado.",
            btn_delete_account: "Eliminar Cuenta",
            btn_view_history: "Ver Historial de Accesos",
            modal_history_title: "Historial de Inicio de Sesión",
            table_date: "Fecha",
            table_ip: "IP",
            table_device: "Dispositivo",
            settings_notifications_title: "Preferencias de Notificaciones",
            label_email_notifications: "Recibir correos electrónicos",
            settings_plan_title: "Mi Plan",
            plan_free: "Gratuito",
            plan_premium: "Premium",
            btn_upgrade: "Mejorar Plan",
            btn_downgrade: "Cancelar Premium",
            feature_parcels: "Máx. 5 Parcelas",
            feature_devices: "Máx. 10 Dispositivos",
            feature_support: "Soporte Básico",
            feature_unlimited: "Parcelas y Dispositivos Ilimitados",
            feature_priority: "Soporte Prioritario",
            feature_analytics: "Analítica Avanzada",
            label_sowing_date: "Fecha de Siembra",
            error_duplicate_parcel: "Ya existe una parcela con ese nombre.",
            nav_pests: "Plagas",
            section_pests_title: "Registro de Plagas",
            btn_new_pest: "Registrar Plaga",
            modal_pest_title: "Registrar Plaga",
            label_pest_name: "Nombre de la Plaga",
            label_pest_type: "Tipo",
            label_pest_severity: "Gravedad",
            label_pest_date: "Fecha de Detección",
            label_pest_parcel: "Parcela Afectada",
            label_pest_observation: "Observación",
            btn_save_pest: "Guardar Plaga",
            nav_fertilizers: "Fertilizantes",
            section_fertilizers_title: "Registro de Fertilizantes",
            btn_new_fertilizer: "Registrar Fertilizante",
            modal_fertilizer_title: "Registrar Fertilizante",
            label_fertilizer_name: "Nombre del Fertilizante",
            label_fertilizer_type: "Tipo",
            label_fertilizer_date: "Fecha de Aplicación",
            label_fertilizer_parcel: "Parcela Aplicada",
            label_fertilizer_quantity: "Cantidad/Dosis",
            btn_save_fertilizer: "Guardar Fertilizante",
            label_pest_parcel: "Parcela Afectada",
            label_pest_observation: "Observación",
            btn_save_pest: "Guardar Plaga",
            nav_fertilizers: "Fertilizantes",
            section_fertilizers_title: "Registro de Fertilizantes",
            btn_new_fertilizer: "Registrar Fertilizante",
            modal_fertilizer_title: "Registrar Fertilizante",
            label_fertilizer_name: "Nombre del Fertilizante",
            label_fertilizer_type: "Tipo",
            label_fertilizer_date: "Fecha de Aplicación",
            label_fertilizer_parcel: "Parcela Aplicada",
            label_fertilizer_quantity: "Cantidad/Dosis",
            btn_save_fertilizer: "Guardar Fertilizante"
        },
        en: {
            nav_home: "Home",
            nav_parcels: "Parcels",
            nav_devices: "IoT Devices",
            nav_linking: "Linking",
            nav_map: "Map",
            nav_notifications: "Notifications",
            nav_settings: "Settings",
            search_placeholder: "Search your farm...",
            welcome_title: `Hello, ${activeUser.name}! 👋`,
            welcome_subtitle: "Here is a summary of your recent activity.",
            quick_access: "Quick Access",
            card_parcels_title: "My Parcels",
            card_parcels_desc: "Manage your crops",
            card_devices_title: "Devices",
            card_devices_desc: "Monitor your sensors",
            card_link_title: "Link",
            card_link_desc: "Connect devices",
            system_status: "System Status",
            stat_active_parcels: "Active Parcels",
            stat_online_sensors: "Online Sensors",
            stat_pending_alerts: "Pending Alerts",
            section_parcels_title: "My Parcels",
            btn_new_parcel: "New Parcel",
            section_devices_title: "IoT Devices",
            btn_new_device: "New Device",
            section_linking_title: "Linking",
            section_linking_desc: "Associate your IoT devices with your parcels to start monitoring.",
            link_step_1: "1. Select a Parcel",
            link_step_2: "2. Select Devices",
            btn_link_confirm: "Link Devices",
            section_map_title: "Crop Map",
            section_map_desc: "Visualize the status of your parcels in real-time.",
            section_notifications_title: "Notifications",
            section_settings_title: "Settings",
            settings_language_title: "Language",
            settings_language_label: "Select Language",
            settings_profile_title: "Personal Information",
            label_profile_photo: "Profile Photo",
            label_name: "Name",
            btn_save_changes: "Save",
            settings_security_title: "Security",
            label_current_password: "Current Password",
            label_new_password: "New Password",
            label_confirm_password: "Confirm New Password",
            btn_update_password: "Update Password",
            settings_danger_zone: "Danger Zone",
            settings_delete_desc: "Once you delete your account, there is no going back. Please be certain.",
            btn_delete_account: "Delete Account",
            btn_view_history: "View Login History",
            modal_history_title: "Login History",
            table_date: "Date",
            table_ip: "IP",
            table_device: "Device",
            settings_notifications_title: "Notification Preferences",
            label_email_notifications: "Receive emails",
            settings_plan_title: "My Plan",
            plan_free: "Free",
            plan_premium: "Premium",
            btn_upgrade: "Upgrade Plan",
            btn_downgrade: "Cancel Premium",
            feature_parcels: "Max 5 Parcels",
            feature_devices: "Max 10 Devices",
            feature_support: "Basic Support",
            feature_unlimited: "Unlimited Parcels & Devices",
            feature_priority: "Priority Support",
            feature_analytics: "Advanced Analytics",
            label_sowing_date: "Sowing Date",
            label_sowing_date: "Sowing Date",
            error_duplicate_parcel: "A parcel with this name already exists.",
            nav_pests: "Pests",
            section_pests_title: "Pest Registration",
            btn_new_pest: "Register Pest",
            modal_pest_title: "Register Pest",
            label_pest_name: "Pest Name",
            label_pest_type: "Type",
            label_pest_severity: "Severity",
            label_pest_date: "Detection Date",
            label_pest_parcel: "Affected Parcel",
            label_pest_observation: "Observation",
            btn_save_pest: "Save Pest",
            nav_fertilizers: "Fertilizers",
            section_fertilizers_title: "Fertilizer Registry",
            btn_new_fertilizer: "Register Fertilizer",
            modal_fertilizer_title: "Register Fertilizer",
            label_fertilizer_name: "Fertilizer Name",
            label_fertilizer_type: "Type",
            label_fertilizer_date: "Application Date",
            label_fertilizer_parcel: "Applied Parcel",
            label_fertilizer_quantity: "Quantity/Dose",
            btn_save_fertilizer: "Save Fertilizer"
        },
        qu: {
            nav_home: "Qallariy",
            nav_parcels: "Chakrakuna",
            nav_devices: "IoT Aparatokuna",
            nav_linking: "Tinkuchiy",
            nav_map: "Mapa",
            nav_notifications: "Willaykuna",
            nav_settings: "Allichaykuna",
            search_placeholder: "Chakraykita maskay...",
            welcome_title: `¡Allinllachu, ${activeUser.name}! 👋`,
            welcome_subtitle: "Kaypi kachkan llank'asqaykiq pisichaynin.",
            quick_access: "Utqaylla Yaykuy",
            card_parcels_title: "Chakraykuna",
            card_parcels_desc: "Kawsayniykikunata qhaway",
            card_devices_title: "Aparatokuna",
            card_devices_desc: "Musyaqniykikunata qhaway",
            card_link_title: "Tinkuchiy",
            card_link_desc: "Aparatokunata tinkuchiy",
            system_status: "Sistemaq Kaynin",
            stat_active_parcels: "Llamk'achkaq Chakrakuna",
            stat_online_sensors: "Musyaqkuna Internetpi",
            stat_pending_alerts: "Manaraq Qhawasqa Alertakuna",
            section_parcels_title: "Chakraykuna",
            btn_new_parcel: "Musuq Chakra",
            section_devices_title: "IoT Aparatokuna",
            btn_new_device: "Musuq Aparato",
            section_linking_title: "Tinkuchiy",
            section_linking_desc: "IoT aparatokunata chakraykikunawan tinkuchiy qhawayta qallarinaykipaq.",
            link_step_1: "1. Huk Chakrata Akllay",
            link_step_2: "2. Aparatokunata Akllay",
            btn_link_confirm: "Aparatokunata Tinkuchiy",
            section_map_title: "Kawsay Mapa",
            section_map_desc: "Chakraykikunaq kayninta chiqa pachapi qhaway.",
            section_notifications_title: "Willaykuna",
            section_settings_title: "Allichaykuna",
            settings_language_title: "Simi",
            settings_language_label: "Simita Akllay",
            settings_profile_title: "Kikiykiq Willaynin",
            label_profile_photo: "Uyayuq Rikcha",
            label_name: "Suti",
            btn_save_changes: "Tikraykunata",
            settings_security_title: "Waqaychay",
            label_current_password: "Kunan Kichana",
            label_new_password: "Musuq Kichana",
            label_confirm_password: "Musuq Kichanata Chiqanchay",
            btn_update_password: "Kichanata Musuqyachiy",
            settings_danger_zone: "Manchay Zona",
            settings_delete_desc: "Yupayniyki chinkachisqayki qhipamanqa, manañam kutichiy atikunqachu. Allinta qhaway.",
            btn_delete_account: "Yupayta Chinkachiy",
            btn_view_history: "Yaykuy Historialta Qhaway",
            modal_history_title: "Yaykuy Historial",
            table_date: "P'unchaw",
            table_ip: "IP",
            table_device: "Aparato",
            settings_notifications_title: "Willaykuna Allichay",
            label_email_notifications: "Chaskiy willaykunata",
            settings_plan_title: "Ñuqap Plan",
            plan_free: "Qullqilla",
            plan_premium: "Premium",
            btn_upgrade: "Plan Allinchay",
            btn_downgrade: "Premium Cancelay",
            feature_parcels: "Max 5 Chakrakuna",
            feature_devices: "Max 10 Aparatokuna",
            feature_support: "Yanapay",
            feature_unlimited: "Mana Yupayniyuq",
            feature_priority: "Ñawpaq Yanapay",
            feature_analytics: "Analítica",
            label_sowing_date: "Tarpuy P'unchaw",
            feature_analytics: "Analítica",
            label_sowing_date: "Tarpuy P'unchaw",
            error_duplicate_parcel: "Kay sutiyuq chakraqa kanña.",
            nav_pests: "Plagakuna",
            section_pests_title: "Plagakuna Qillqay",
            btn_new_pest: "Musuq Plaga",
            modal_pest_title: "Plaga Qillqay",
            label_pest_name: "Plaga Suti",
            label_pest_type: "Hina",
            label_pest_severity: "Gravedad",
            label_pest_date: "P'unchaw",
            label_pest_parcel: "Chakra",
            label_pest_observation: "Qhaway",
            btn_save_pest: "Waqaychay",
            nav_fertilizers: "Wanu",
            section_fertilizers_title: "Wanu Qillqay",
            btn_new_fertilizer: "Wanu Qillqay",
            modal_fertilizer_title: "Wanu Qillqay",
            label_fertilizer_name: "Wanu Sutin",
            label_fertilizer_type: "Imayna",
            label_fertilizer_date: "Pacha",
            label_fertilizer_parcel: "Chakra",
            label_fertilizer_quantity: "Hayka",
            btn_save_fertilizer: "Waqaychay"
        }
    };

    let currentLang = localStorage.getItem('sima_lang') || 'es';
    const languageSelect = document.getElementById('language-select');

    function updateLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('sima_lang', lang);
        
        // Update Select Value
        if (languageSelect) {
            languageSelect.value = lang;
        }

        // Update Text Elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update Placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }

    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            updateLanguage(e.target.value);
        });
    }

    // Initialize Language
    updateLanguage(currentLang);


    const userNameElements = document.querySelectorAll(".user-info .name");
    const userAvatars = document.querySelectorAll(".avatar");
    const welcomeTitle = document.querySelector(".welcome-banner h1");

    userNameElements.forEach(el => el.textContent = activeUser.name);

    if (userAvatars.length > 0) {
        userAvatars.forEach(avatar => {
            avatar.textContent = activeUser.name.charAt(0).toUpperCase();
        });
    }

    if (welcomeTitle) {
        welcomeTitle.textContent = `¡Hola, ${activeUser.name}! 👋`;
    }

    const formProfile = document.getElementById('form-profile');
    const profileNameInput = document.getElementById('profile-name');
    const profileEmailInput = document.getElementById('profile-email');
    const profilePhotoInput = document.getElementById('profile-photo');
    const profilePreview = document.getElementById('profile-preview');
    const emailNotificationsCheckbox = document.getElementById('email-notifications');
    const btnViewHistory = document.getElementById('btn-view-history');
    const modalHistory = document.getElementById('modal-history');
    const historyTableBody = document.getElementById('history-table-body');

    if (btnViewHistory && modalHistory) {
        btnViewHistory.addEventListener('click', () => {
            openModal(modalHistory);
            renderLoginHistory();
        });
        
        // Close modal logic is handled by generic closeModals, but we need to ensure it's included
        // The generic logic selects .close-modal, so it should work if we added that class in HTML
    }

    window.addEventListener('click', (e) => {
        if (e.target === modalParcel) closeModal(modalParcel);
        if (e.target === modalDevice) closeModal(modalDevice);
        if (e.target === modalHistory) closeModal(modalHistory);
    });

    function renderLoginHistory() {
        if (!historyTableBody) return;
        historyTableBody.innerHTML = '';
        
        const history = activeUser.loginHistory || [];
        
        if (history.length === 0) {
            historyTableBody.innerHTML = `<tr><td colspan="3" style="text-align: center; padding: 15px;">No hay historial disponible.</td></tr>`;
            return;
        }

        // Sort desc
        history.sort((a, b) => new Date(b.date) - new Date(a.date));

        history.forEach(entry => {
            const date = new Date(entry.date).toLocaleString();
            const row = document.createElement('tr');
            row.style.borderBottom = '1px solid #eee';
            row.innerHTML = `
                <td style="padding: 10px;">${date}</td>
                <td style="padding: 10px;">${entry.ip || 'N/A'}</td>
                <td style="padding: 10px;">${entry.device || 'N/A'}</td>
            `;
            historyTableBody.appendChild(row);
        });
    }

    if (profileNameInput) profileNameInput.value = activeUser.name;
    if (profileEmailInput) profileEmailInput.value = activeUser.email;

    // Initialize Notification Preferences
    if (emailNotificationsCheckbox) {
        // Default to true if not set
        if (!activeUser.preferences) {
            activeUser.preferences = { notifications: true };
        }
        emailNotificationsCheckbox.checked = activeUser.preferences.notifications !== false;

        emailNotificationsCheckbox.addEventListener('change', (e) => {
            activeUser.preferences = activeUser.preferences || {};
            activeUser.preferences.notifications = e.target.checked;
            
            // Save to localStorage
            localStorage.setItem("activeUser", JSON.stringify(activeUser));
            
            // Update in users list
            let users = JSON.parse(localStorage.getItem("users")) || [];
            const userIndex = users.findIndex(u => u.email === activeUser.email);
            if (userIndex !== -1) {
                users[userIndex].preferences = activeUser.preferences;
                localStorage.setItem("users", JSON.stringify(users));
            }

            addNotification('success', 'Guardado', 'Preferencias actualizadas');
        });
    }

    // Plan Logic
    const currentPlanName = document.getElementById('current-plan-name');
    const planBadge = document.getElementById('plan-badge');
    const planFeatures = document.getElementById('plan-features');
    const btnUpgradePlan = document.getElementById('btn-upgrade-plan');

    const plans = {
        free: {
            nameKey: 'plan_free',
            color: '#95a5a6',
            features: ['feature_parcels', 'feature_devices', 'feature_support']
        },
        premium: {
            nameKey: 'plan_premium',
            color: '#f1c40f',
            features: ['feature_unlimited', 'feature_priority', 'feature_analytics']
        }
    };

    function renderPlan() {
        if (!currentPlanName) return;
        
        const userPlan = activeUser.plan || 'free';
        const planData = plans[userPlan];
        
        // Update Text
        currentPlanName.textContent = translations[currentLang][planData.nameKey];
        currentPlanName.setAttribute('data-i18n', planData.nameKey); // For dynamic language switch
        
        // Update Badge
        planBadge.style.backgroundColor = planData.color;
        
        // Update Features
        planFeatures.innerHTML = '';
        planData.features.forEach(featKey => {
            const li = document.createElement('li');
            li.style.marginBottom = '5px';
            li.innerHTML = `<i class="fas fa-check" style="color: #2ecc71; margin-right: 8px;"></i> ${translations[currentLang][featKey]}`;
            li.setAttribute('data-i18n', featKey); // We might need a more complex way to handle list items with icons for pure i18n function, but this works for render
            planFeatures.appendChild(li);
        });

        // Update Button
        if (userPlan === 'free') {
            btnUpgradePlan.textContent = translations[currentLang]['btn_upgrade'];
            btnUpgradePlan.setAttribute('data-i18n', 'btn_upgrade');
            btnUpgradePlan.style.backgroundColor = '#f1c40f';
            btnUpgradePlan.style.color = '#2c3e50';
        } else {
            btnUpgradePlan.textContent = translations[currentLang]['btn_downgrade'];
            btnUpgradePlan.setAttribute('data-i18n', 'btn_downgrade');
            btnUpgradePlan.style.backgroundColor = '#e74c3c';
            btnUpgradePlan.style.color = 'white';
        }
    }

    if (btnUpgradePlan) {
        btnUpgradePlan.addEventListener('click', () => {
            const current = activeUser.plan || 'free';
            const newPlan = current === 'free' ? 'premium' : 'free';
            
            activeUser.plan = newPlan;
            localStorage.setItem("activeUser", JSON.stringify(activeUser));
            
            // Update users list
            let users = JSON.parse(localStorage.getItem("users")) || [];
            const userIndex = users.findIndex(u => u.email === activeUser.email);
            if (userIndex !== -1) {
                users[userIndex].plan = newPlan;
                localStorage.setItem("users", JSON.stringify(users));
            }

            renderPlan();
            addNotification('success', 'Plan Actualizado', `Ahora eres ${newPlan.toUpperCase()}`);
        });
    }

    // Initial Render
    renderPlan();

    // Load existing photo
    if (activeUser.photo) {
        if (userAvatars.length > 0) {
            userAvatars.forEach(avatar => {
                avatar.textContent = '';
                avatar.style.backgroundImage = `url(${activeUser.photo})`;
                avatar.style.backgroundSize = 'cover';
                avatar.style.backgroundPosition = 'center';
            });
        }
        if (profilePreview) {
            profilePreview.innerHTML = '';
            profilePreview.style.backgroundImage = `url(${activeUser.photo})`;
            profilePreview.style.backgroundSize = 'cover';
            profilePreview.style.backgroundPosition = 'center';
        }
    }

    if (profilePhotoInput && profilePreview) {
        profilePhotoInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                if (!file.type.startsWith('image/')) {
                    addNotification('alert', 'Error', 'Formato no válido. Por favor sube una imagen.');
                    profilePhotoInput.value = ''; // Clear input
                    return;
                }
                
                const reader = new FileReader();
                reader.onload = (e) => {
                    profilePreview.innerHTML = '';
                    profilePreview.style.backgroundImage = `url(${e.target.result})`;
                    profilePreview.style.backgroundSize = 'cover';
                    profilePreview.style.backgroundPosition = 'center';
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (formProfile) {
        formProfile.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const newName = profileNameInput.value.trim();
            const newEmail = profileEmailInput.value.trim();
            const file = profilePhotoInput ? profilePhotoInput.files[0] : null;

            if (!newName || !newEmail) {
                addNotification('alert', 'Error', 'Por favor completa todos los campos del perfil.');
                return;
            }

            const saveProfile = (photoBase64) => {
                // Update Active User
                activeUser.name = newName;
                activeUser.email = newEmail;
                if (photoBase64) {
                    activeUser.photo = photoBase64;
                }
                localStorage.setItem("activeUser", JSON.stringify(activeUser));

                // Update in Users List
                const currentStoredUser = JSON.parse(localStorage.getItem("activeUser")); // Re-read to be safe or just use activeUser
                // Logic to update the main users list (mocked for now as we did before)
                let users = JSON.parse(localStorage.getItem("users")) || [];
                // We assume we find by old email or just update the one that matches current session
                // Since we might have changed email, this is tricky without ID. 
                // For this demo, let's just update activeUser in session.
                
                // Update UI
                userNameElements.forEach(el => el.textContent = newName);
                
                if (photoBase64) {
                    if (userAvatars.length > 0) {
                        userAvatars.forEach(avatar => {
                            avatar.textContent = '';
                            avatar.style.backgroundImage = `url(${photoBase64})`;
                            avatar.style.backgroundSize = 'cover';
                            avatar.style.backgroundPosition = 'center';
                        });
                    }
                } else if (!activeUser.photo) {
                    // If no photo and no new photo, ensure initials
                     if (userAvatars.length > 0) {
                        userAvatars.forEach(avatar => {
                            avatar.style.backgroundImage = 'none';
                            avatar.textContent = newName.charAt(0).toUpperCase();
                        });
                     }
                }

                // Update translations with new name
                translations.es.welcome_title = `¡Hola, ${newName}! 👋`;
                translations.en.welcome_title = `Hello, ${newName}! 👋`;
                translations.qu.welcome_title = `¡Allinllachu, ${newName}! 👋`;
                
                updateLanguage(currentLang);

                addNotification('info', 'Perfil Actualizado', 'Tus datos han sido guardados exitosamente.');
            };

            if (file) {
                if (!file.type.startsWith('image/')) {
                    addNotification('alert', 'Error', 'Formato no válido. Por favor sube una imagen.');
                    return;
                }
                const reader = new FileReader();
                reader.onload = (e) => {
                    saveProfile(e.target.result);
                };
                reader.readAsDataURL(file);
            } else {
                saveProfile(null);
            }
        });
    }

    const formPassword = document.getElementById('form-password');
    if (formPassword) {
        formPassword.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(formPassword);
            const currentPass = formData.get('current-password');
            const newPass = formData.get('new-password');
            const confirmPass = formData.get('confirm-password');

            // 1. Validate new password match
            if (newPass !== confirmPass) {
                addNotification('alert', 'Error', 'Las contraseñas nuevas no coinciden.');
                return;
            }

            // 2. Validate current password
            // We need to check against the stored user data. activeUser might not have the password if we stripped it (we didn't).
            // But let's check the persistent users list to be sure.
            let users = JSON.parse(localStorage.getItem("users")) || [];
            const userIndex = users.findIndex(u => u.email === activeUser.email);
            
            if (userIndex === -1) {
                addNotification('alert', 'Error', 'Usuario no encontrado. Por favor inicia sesión nuevamente.');
                return;
            }

            const storedUser = users[userIndex];
            if (storedUser.password !== currentPass) {
                addNotification('alert', 'Error', 'Contraseña actual incorrecta.');
                return;
            }

            // 3. Update Password
            users[userIndex].password = newPass;
            localStorage.setItem("users", JSON.stringify(users));
            
            // Update activeUser password too just in case
            activeUser.password = newPass;
            localStorage.setItem("activeUser", JSON.stringify(activeUser));

            addNotification('info', 'Contraseña Actualizada', 'Tu contraseña ha sido cambiada exitosamente.');
            formPassword.reset();
        });
    }

    const btnLogout = document.getElementById('btn-logout');
    const btnDeleteAccount = document.getElementById('btn-delete-account');

    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            if (confirm("¿Cerrar sesión?")) {
                localStorage.removeItem("activeUser");
                window.location.href = "index.html";
            }
        });
    }

    if (btnDeleteAccount) {
        btnDeleteAccount.addEventListener('click', () => {
            const confirmMsg = currentLang === 'es' ? "¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer." :
                               currentLang === 'en' ? "Are you sure you want to delete your account? This action cannot be undone." :
                               "¿Chiqaptachu yupayniyki chinkachiyta munanki? Kaytaqa manam kutichiy atikunqachu.";
            
            if (confirm(confirmMsg)) {
                // 1. Remove from users list
                let users = JSON.parse(localStorage.getItem("users")) || [];
                const newUsers = users.filter(u => u.email !== activeUser.email);
                localStorage.setItem("users", JSON.stringify(newUsers));

                // 2. Remove user specific data
                const userKey = activeUser.email.replace(/[^a-zA-Z0-9]/g, '_');
                localStorage.removeItem(`sima_parcels_${userKey}`);
                localStorage.removeItem(`sima_devices_${userKey}`);
                localStorage.removeItem(`sima_notifications_${userKey}`);
                localStorage.removeItem(`sima_lang`); // Optional: clear lang pref or keep it

                // 3. Remove active session
                localStorage.removeItem("activeUser");

                // 4. Redirect
                alert(currentLang === 'es' ? "Tu cuenta ha sido eliminada." : currentLang === 'en' ? "Your account has been deleted." : "Yupayniyki chinkachisqaña.");
                window.location.href = "index.html";
            }
        });
    }

    const userKey = activeUser.email.replace(/[^a-zA-Z0-9]/g, '_'); // Sanitize email for key usage

    const PEST_RECOMMENDATIONS = {
        "Insecto": ["Aplicar insecticida orgánico", "Introducir depredadores naturales (mariquitas)", "Rotación de cultivos"],
        "Hongo": ["Aplicar fungicida a base de cobre", "Reducir la humedad del suelo", "Podar hojas afectadas"],
        "Bacteria": ["Retirar plantas infectadas inmediatamente", "Desinfectar herramientas", "Evitar riego por aspersión"],
        "Virus": ["Controlar vectores (insectos)", "Eliminar plantas enfermas", "Usar semillas certificadas"],
        "Otro": ["Consultar con un especialista", "Monitorear avance diariamente"]
    };

    let parcels = JSON.parse(localStorage.getItem(`sima_parcels_${userKey}`)) || [];
    let devices = JSON.parse(localStorage.getItem(`sima_devices_${userKey}`)) || [];
    let pests = JSON.parse(localStorage.getItem(`sima_pests_${userKey}`)) || [];
    let fertilizers = JSON.parse(localStorage.getItem(`sima_fertilizers_${userKey}`)) || [];

    const sidebarLinks = document.querySelectorAll('.sidebar-nav li');
    const sections = document.querySelectorAll('.view-section');
    const toggleMenuBtn = document.getElementById('toggle-menu');
    const sidebar = document.querySelector('.sidebar');

    const modalParcel = document.getElementById('modal-parcel');
    const modalDevice = document.getElementById('modal-device');
    const modalPest = document.getElementById('modal-pest');
    const modalFertilizer = document.getElementById('modal-fertilizer');
    const btnAddParcel = document.getElementById('btn-add-parcel');
    const btnAddDevice = document.getElementById('btn-add-device');
    const btnAddPest = document.getElementById('btn-add-pest');
    const btnAddFertilizer = document.getElementById('btn-add-fertilizer');
    const btnCreateNew = document.getElementById('btn-create-new');
    const closeModals = document.querySelectorAll('.close-modal');
    const formParcel = document.getElementById('form-parcel');
    const formDevice = document.getElementById('form-device');
    const formPest = document.getElementById('form-pest');
    const formFertilizer = document.getElementById('form-fertilizer');

    const parcelsContainer = document.getElementById('parcels-container');
    const devicesContainer = document.getElementById('devices-container');
    const pestsContainer = document.getElementById('pests-container');
    const fertilizersContainer = document.getElementById('fertilizers-container');
    const linkParcelSelect = document.getElementById('link-parcel-select');
    const linkDevicesList = document.getElementById('link-devices-list');
    const btnLinkConfirm = document.getElementById('btn-link-confirm');

    function navigateTo(targetId) {
        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.target === targetId) {
                link.classList.add('active');
            }
        });

        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetId) {
                section.classList.add('active');
            }
        });

        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
        }

        if (targetId === 'linking') {
            renderLinkingInterface();
        }

        if (targetId === 'map-view') {
            setTimeout(() => {
                initMap();
            }, 100);
        }

        if (targetId === 'pests') {
            if (pestsContainer) {
                renderPests();
                renderPestParcelSelect();
            }
        }

        if (targetId === 'fertilizers') {
            if (fertilizersContainer) {
                renderFertilizers();
                renderFertilizerParcelSelect();
            }
        }
    }

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.dataset.target;
            navigateTo(target);
        });
    });

    window.navigateTo = navigateTo;

    if (toggleMenuBtn) {
        toggleMenuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    if (btnAddParcel) {
        btnAddParcel.addEventListener('click', () => {
            document.getElementById('parcel-id').value = '';
            formParcel.reset();
            modalParcel.querySelector('h2').textContent = translations[currentLang].btn_new_parcel;
            modalParcel.querySelector('button[type="submit"]').textContent = translations[currentLang].btn_new_parcel;
            openModal(modalParcel);
        });
    }

    if (btnAddDevice) {
        btnAddDevice.addEventListener('click', () => {
            document.getElementById('device-id').value = '';
            formDevice.reset();
            modalDevice.querySelector('h2').textContent = translations[currentLang].btn_new_device;
            modalDevice.querySelector('button[type="submit"]').textContent = translations[currentLang].btn_new_device;
            openModal(modalDevice);
        });
    }

    if (btnAddPest) {
        btnAddPest.addEventListener('click', () => {
            renderPestParcelSelect();
            openModal(modalPest);
        });
    }

    if (btnAddFertilizer) {
        btnAddFertilizer.addEventListener('click', () => {
            formFertilizer.reset();
            document.getElementById('fertilizer-id').value = '';
            renderFertilizerParcelSelect();
            modalFertilizer.querySelector('h2').textContent = translations[currentLang].modal_fertilizer_title || 'Registrar Fertilizante';
            modalFertilizer.querySelector('button[type="submit"]').textContent = translations[currentLang].btn_save_fertilizer || 'Guardar Fertilizante';
            openModal(modalFertilizer);
        });
    }

    if (closeModals) {
        closeModals.forEach(btn => {
            btn.addEventListener('click', () => {
                closeModal(modalParcel);
                closeModal(modalDevice);
                closeModal(modalHistory);
                if (modalPest) closeModal(modalPest);
            });
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modalParcel) closeModal(modalParcel);
        if (e.target === modalDevice) closeModal(modalDevice);
        if (e.target === modalHistory) closeModal(modalHistory);
        if (e.target === modalPest) closeModal(modalPest);
        if (e.target === modalFertilizer) closeModal(modalFertilizer);
    });

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            sidebar.classList.contains('active') && 
            !sidebar.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });

    function openModal(modal) {
        modal.style.display = 'flex';
    }

    function closeModal(modal) {
        modal.style.display = 'none';
    }

    if (btnAddParcel) btnAddParcel.addEventListener('click', () => openModal(modalParcel));
    if (btnAddDevice) btnAddDevice.addEventListener('click', () => openModal(modalDevice));
    if (btnCreateNew) btnCreateNew.addEventListener('click', () => openModal(modalParcel));

    closeModals.forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal(modalParcel);
            closeModal(modalDevice);
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === modalParcel) closeModal(modalParcel);
        if (e.target === modalDevice) closeModal(modalDevice);
    });

    // Crop Selection Logic
    const cropSelect = document.getElementById('crop-select');
    const cropManual = document.getElementById('crop-manual');

    if (cropSelect && cropManual) {
        cropSelect.addEventListener('change', () => {
            if (cropSelect.value === 'other') {
                cropManual.style.display = 'block';
                cropManual.required = true;
            } else {
                cropManual.style.display = 'none';
                cropManual.required = false;
            }
        });
    }



    window.openEditDeviceModal = (index) => {
        const device = devices[index];
        document.getElementById('device-id').value = device.id;
        formDevice.querySelector('[name="serial"]').value = device.serial;
        formDevice.querySelector('[name="name"]').value = device.name;
        formDevice.querySelector('[name="type"]').value = device.type;

        modalDevice.querySelector('h2').textContent = 'Editar Dispositivo';
        modalDevice.querySelector('button[type="submit"]').textContent = 'Actualizar Dispositivo';
        openModal(modalDevice);
    };

    // Parcel Map Logic
    let parcelMap;
    let parcelMarker;

    function initParcelMap() {
        if (parcelMap) return;

        const defaultLat = -12.0464;
        const defaultLng = -77.0428;

        parcelMap = L.map('map-parcel-select').setView([defaultLat, defaultLng], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(parcelMap);

        parcelMarker = L.marker([defaultLat, defaultLng], { draggable: true }).addTo(parcelMap);

        parcelMarker.on('dragend', function(e) {
            const position = parcelMarker.getLatLng();
            document.getElementById('parcel-lat').value = position.lat;
            document.getElementById('parcel-lng').value = position.lng;
        });

        parcelMap.on('click', function(e) {
            parcelMarker.setLatLng(e.latlng);
            document.getElementById('parcel-lat').value = e.latlng.lat;
            document.getElementById('parcel-lng').value = e.latlng.lng;
        });
    }

    // Reset modals on open for new items
    if (btnAddParcel) {
        btnAddParcel.addEventListener('click', () => {
            formParcel.reset();
            document.getElementById('parcel-id').value = '';
            cropManual.style.display = 'none';
            modalParcel.querySelector('h2').textContent = 'Nueva Parcela';
            modalParcel.querySelector('button[type="submit"]').textContent = 'Guardar';
            
            openModal(modalParcel);
            
            // Initialize map after modal is visible
            setTimeout(() => {
                initParcelMap();
                parcelMap.invalidateSize();
                // Set default or current location
                const defaultLat = -12.0464;
                const defaultLng = -77.0428;
                parcelMarker.setLatLng([defaultLat, defaultLng]);
                parcelMap.setView([defaultLat, defaultLng], 13);
                document.getElementById('parcel-lat').value = defaultLat;
                document.getElementById('parcel-lng').value = defaultLng;
            }, 200);
        });
    }

    if (btnAddDevice) {
        btnAddDevice.addEventListener('click', () => {
            formDevice.reset();
            document.getElementById('device-id').value = '';
            modalDevice.querySelector('h2').textContent = 'Nuevo Dispositivo IoT';
            modalDevice.querySelector('button[type="submit"]').textContent = 'Registrar Dispositivo';
            openModal(modalDevice);
        });
    }

    function renderParcels() {
        parcelsContainer.innerHTML = '';
        if (parcels.length === 0) {
            parcelsContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-seedling fa-3x" style="color: #ccc; margin-bottom: 1rem;"></i>
                    <p>No tienes parcelas registradas aún.</p>
                </div>`;
            return;
        }

        parcels.forEach((parcel, index) => {
            const card = document.createElement('div');
            card.className = 'action-card';
            
            // Irrigation Logic
            let irrigationHtml = '';
            const today = new Date().toISOString().split('T')[0];
            
            if (parcel.nextIrrigation) {
                const isDue = parcel.nextIrrigation <= today;
                const dateDisplay = new Date(parcel.nextIrrigation).toLocaleDateString();
                
                irrigationHtml = `
                    <div style="margin-top: 5px; font-size: 0.85rem; color: ${isDue ? '#e74c3c' : '#2ecc71'}; font-weight: bold;">
                        <i class="fas fa-tint"></i> Riego: ${isDue ? '¡Pendiente!' : dateDisplay}
                    </div>
                `;
            } else {
                irrigationHtml = `
                    <div style="margin-top: 5px; font-size: 0.85rem; color: #95a5a6;">
                        <i class="fas fa-tint"></i> Riego: No programado
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="icon-box green"><i class="fas fa-leaf"></i></div>
                <h3>${parcel.name}</h3>
                <p>${parcel.crop} - ${parcel.area} m²</p>
                <p style="font-size: 0.8rem; color: #666; margin-top: 5px;"><i class="far fa-calendar-alt"></i> Sembrado: ${parcel.sowingDate || 'N/A'}</p>
                ${irrigationHtml}
                <div style="margin-top: 10px; font-size: 0.8rem; color: #888;">
                    <i class="fas fa-link"></i> ${countLinkedDevices(parcel.id)} dispositivos
                </div>
                <div style="margin-top: 15px; display: flex; flex-direction: column; gap: 10px;">
                    <button class="btn-secondary" style="width: 100%; background-color: #3498db; color: white;" onclick="completeIrrigation(${index})">
                        <i class="fas fa-tint"></i> Registrar Riego
                    </button>
                    <div style="display: flex; gap: 10px;">
                        <button class="btn-secondary" style="flex: 1; font-size: 0.85rem; padding: 8px;" onclick="openEditParcelModal(${index})">Editar</button>
                        <button class="btn-secondary" style="flex: 1; font-size: 0.85rem; padding: 8px; background-color: #e74c3c; color: white;" onclick="deleteParcel(${index})">Eliminar</button>
                    </div>
                </div>
            `;
            parcelsContainer.appendChild(card);
        });
    }

    window.completeIrrigation = (index) => {
        const parcel = parcels[index];
        // Set next irrigation to 3 days from now (simple logic for demo)
        const nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + 3);
        parcel.nextIrrigation = nextDate.toISOString().split('T')[0];
        
        saveParcels();
        renderParcels();
        addNotification('success', 'Riego Completado', `Se ha registrado el riego para ${parcel.name}. Próximo riego: ${parcel.nextIrrigation}`);
    };

    function checkIrrigationReminders() {
        const today = new Date().toISOString().split('T')[0];
        const settings = JSON.parse(localStorage.getItem(`sima_settings_${userKey}`)) || {};
        const emailEnabled = settings.emailNotifications;

        parcels.forEach(parcel => {
            if (parcel.nextIrrigation && parcel.nextIrrigation <= today) {
                // Check if we already notified today to avoid spam (optional, skipping for simple demo)
                addNotification('alert', 'Riego Pendiente', `Es momento de regar la parcela: ${parcel.name}`, 'high');
                
                if (emailEnabled) {
                    console.log(`Sending email reminder for ${parcel.name} to ${userKey}`);
                    // In a real app, this would trigger a backend email service
                }
            }
        });
    }

    function renderPests() {
        if (!pestsContainer) return;
        pestsContainer.innerHTML = '';
        if (pests.length === 0) {
            pestsContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-bug fa-3x" style="color: #ccc; margin-bottom: 1rem;"></i>
                    <p>No hay plagas registradas.</p>
                </div>`;
            return;
        }

        pests.forEach((pest, index) => {
            const card = document.createElement('div');
            card.className = 'action-card';
            const severityColor = pest.severity === 'Alta' ? 'red' : pest.severity === 'Media' ? 'orange' : 'green';
            
            let recommendationsHtml = '';
            if (pest.recommendations && pest.recommendations.length > 0) {
                recommendationsHtml = `<div style="margin-top: 10px; font-size: 0.85rem; background: #f9f9f9; padding: 8px; border-radius: 5px;">
                    <strong>Recomendaciones:</strong>
                    <ul style="padding-left: 20px; margin: 5px 0;">
                        ${pest.recommendations.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>`;
            } else {
                recommendationsHtml = `<div style="margin-top: 10px; font-size: 0.85rem; color: #777; font-style: italic;">No hay recomendaciones disponibles.</div>`;
            }

            const isTreated = pest.status === 'Treated';
            const statusBadge = isTreated 
                ? `<span class="badge" style="background-color: #2ecc71; color: white;">Tratado</span>` 
                : `<span class="badge" style="background-color: #e74c3c; color: white;">Pendiente</span>`;

            card.innerHTML = `
                <div class="icon-box ${severityColor}"><i class="fas fa-bug"></i></div>
                <h3>${pest.name} ${statusBadge}</h3>
                <p>${pest.type} - ${pest.severity}</p>
                <p style="font-size: 0.8rem; color: #666; margin-top: 5px;"><i class="far fa-calendar-alt"></i> ${pest.date}</p>
                <div style="margin-top: 10px; font-size: 0.8rem; color: #888;">
                    <i class="fas fa-map-marker-alt"></i> ${getParcelName(pest.parcelId)}
                </div>
                ${recommendationsHtml}
                <div style="display: flex; gap: 10px; margin-top: 10px;">
                    ${!isTreated ? `<button class="btn-secondary" style="flex: 1; background-color: #2ecc71; color: white;" onclick="markPestTreated(${index})">Aplicado</button>` : ''}
                    <button class="btn-secondary" style="flex: 1; background-color: #e74c3c; color: white;" onclick="deletePest(${index})">Eliminar</button>
                </div>
            `;
            pestsContainer.appendChild(card);
        });
    }

    window.markPestTreated = (index) => {
        pests[index].status = 'Treated';
        savePests();
        renderPests();
        addNotification('success', 'Actualizado', 'Tratamiento marcado como aplicado.');
    };

    function getParcelName(id) {
        const p = parcels.find(p => p.id === id);
        return p ? p.name : 'Desconocida';
    }

    function renderPestParcelSelect() {
        const select = document.getElementById('pest-parcel-select');
        if (!select) return;
        select.innerHTML = '<option value="">Seleccionar...</option>';
        parcels.forEach(p => {
            const option = document.createElement('option');
            option.value = p.id;
            option.textContent = p.name;
            select.appendChild(option);
        });
    }

    function renderFertilizerParcelSelect() {
        const select = document.getElementById('fertilizer-parcel-select');
        if (!select) return;
        select.innerHTML = '<option value="">Seleccionar...</option>';
        parcels.forEach(p => {
            const option = document.createElement('option');
            option.value = p.id;
            option.textContent = p.name;
            select.appendChild(option);
        });
    }

    window.deletePest = (index) => {
        if (confirm("¿Eliminar este registro de plaga?")) {
            pests.splice(index, 1);
            savePests();
            renderPests();
            addNotification('info', 'Eliminado', 'Registro de plaga eliminado.');
        }
    };

    function savePests() {
        localStorage.setItem(`sima_pests_${userKey}`, JSON.stringify(pests));
    }

    function renderFertilizers() {
        if (!fertilizersContainer) return;
        fertilizersContainer.innerHTML = '';
        if (fertilizers.length === 0) {
            fertilizersContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-flask fa-3x" style="color: #ccc; margin-bottom: 1rem;"></i>
                    <p>No hay fertilizantes registrados.</p>
                </div>`;
            return;
        }

        fertilizers.forEach((fertilizer, index) => {
            const card = document.createElement('div');
            card.className = 'action-card';
            
            card.innerHTML = `
                <div class="icon-box green"><i class="fas fa-flask"></i></div>
                <h3>${fertilizer.name}</h3>
                <p>${fertilizer.type} - ${fertilizer.quantity}</p>
                <p style="font-size: 0.8rem; color: #666; margin-top: 5px;"><i class="far fa-calendar-alt"></i> ${fertilizer.date}</p>
                <div style="margin-top: 10px; font-size: 0.8rem; color: #888;">
                    <i class="fas fa-map-marker-alt"></i> ${getParcelName(fertilizer.parcelId)}
                </div>
                <div style="display: flex; gap: 10px; margin-top: 10px;">
                    <button class="btn-secondary" style="flex: 1;" onclick="openEditFertilizerModal(${index})">Editar</button>
                    <button class="btn-secondary" style="flex: 1; background-color: #e74c3c; color: white;" onclick="deleteFertilizer(${index})">Eliminar</button>
                </div>
            `;
            fertilizersContainer.appendChild(card);
        });
    }

    window.openEditFertilizerModal = (index) => {
        const fertilizer = fertilizers[index];
        document.getElementById('fertilizer-id').value = fertilizer.id;
        formFertilizer.querySelector('[name="name"]').value = fertilizer.name;
        formFertilizer.querySelector('[name="type"]').value = fertilizer.type;
        formFertilizer.querySelector('[name="date"]').value = fertilizer.date;
        formFertilizer.querySelector('[name="quantity"]').value = fertilizer.quantity;
        
        renderFertilizerParcelSelect();
        formFertilizer.querySelector('[name="parcel-id"]').value = fertilizer.parcelId;

        modalFertilizer.querySelector('h2').textContent = 'Editar Fertilizante';
        modalFertilizer.querySelector('button[type="submit"]').textContent = 'Actualizar Fertilizante';
        openModal(modalFertilizer);
    };

    window.deleteFertilizer = (index) => {
        if (confirm("¿Eliminar este registro de fertilizante?")) {
            fertilizers.splice(index, 1);
            saveFertilizers();
            renderFertilizers();
            addNotification('info', 'Eliminado', 'Registro de fertilizante eliminado.');
        }
    };

    function saveFertilizers() {
        localStorage.setItem(`sima_fertilizers_${userKey}`, JSON.stringify(fertilizers));
    }

    function renderFertilizers() {
        if (!fertilizersContainer) return;
        fertilizersContainer.innerHTML = '';
        if (fertilizers.length === 0) {
            fertilizersContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-flask fa-3x" style="color: #ccc; margin-bottom: 1rem;"></i>
                    <p>No hay fertilizantes registrados.</p>
                </div>`;
            return;
        }

        fertilizers.forEach((fertilizer, index) => {
            const card = document.createElement('div');
            card.className = 'action-card';
            
            card.innerHTML = `
                <div class="icon-box green"><i class="fas fa-flask"></i></div>
                <h3>${fertilizer.name}</h3>
                <p>${fertilizer.type} - ${fertilizer.quantity}</p>
                <p style="font-size: 0.8rem; color: #666; margin-top: 5px;"><i class="far fa-calendar-alt"></i> ${fertilizer.date}</p>
                <div style="margin-top: 10px; font-size: 0.8rem; color: #888;">
                    <i class="fas fa-map-marker-alt"></i> ${getParcelName(fertilizer.parcelId)}
                </div>
                <div style="display: flex; gap: 10px; margin-top: 10px;">
                    <button class="btn-secondary" style="flex: 1;" onclick="openEditFertilizerModal(${index})">Editar</button>
                    <button class="btn-secondary" style="flex: 1; background-color: #e74c3c; color: white;" onclick="deleteFertilizer(${index})">Eliminar</button>
                </div>
            `;
            fertilizersContainer.appendChild(card);
        });
    }

    window.openEditFertilizerModal = (index) => {
        const fertilizer = fertilizers[index];
        document.getElementById('fertilizer-id').value = fertilizer.id;
        formFertilizer.querySelector('[name="name"]').value = fertilizer.name;
        formFertilizer.querySelector('[name="type"]').value = fertilizer.type;
        formFertilizer.querySelector('[name="date"]').value = fertilizer.date;
        formFertilizer.querySelector('[name="quantity"]').value = fertilizer.quantity;
        
        renderFertilizerParcelSelect();
        formFertilizer.querySelector('[name="parcel-id"]').value = fertilizer.parcelId;

        modalFertilizer.querySelector('h2').textContent = 'Editar Fertilizante';
        modalFertilizer.querySelector('button[type="submit"]').textContent = 'Actualizar Fertilizante';
        openModal(modalFertilizer);
    };

    window.deleteFertilizer = (index) => {
        if (confirm("¿Eliminar este registro de fertilizante?")) {
            fertilizers.splice(index, 1);
            saveFertilizers();
            renderFertilizers();
            addNotification('info', 'Eliminado', 'Registro de fertilizante eliminado.');
        }
    };

    function saveFertilizers() {
        localStorage.setItem(`sima_fertilizers_${userKey}`, JSON.stringify(fertilizers));
    }

    function renderDevices() {
        devicesContainer.innerHTML = '';
        if (devices.length === 0) {
            devicesContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-microchip fa-3x" style="color: #ccc; margin-bottom: 1rem;"></i>
                    <p>No hay dispositivos registrados.</p>
                </div>`;
            return;
        }

        devices.forEach((device, index) => {
            const card = document.createElement('div');
            card.className = 'action-card';
            const statusColor = device.parcelId ? 'green' : 'yellow';
            const statusText = device.parcelId ? 'Vinculado' : 'Sin vincular';
            
            card.innerHTML = `
                <div class="icon-box ${statusColor}">
                    <i class="fas ${getDeviceIcon(device.type)}"></i>
                </div>
                <h3>${device.name}</h3>
                <p>${device.serial}</p>
                <span class="badge" style="background-color: ${device.parcelId ? '#2ecc71' : '#f1c40f'}">${statusText}</span>
                <div style="margin-top: 15px; display: flex; flex-direction: column; gap: 10px;">
                    <button class="btn-secondary" style="width: 100%; background-color: #80D643; color: white;" onclick="openCalibrationModal(${index})">
                        <i class="fas fa-tools"></i> Calibrar
                    </button>
                    <div style="display: flex; gap: 10px;">
                        <button class="btn-secondary" style="flex: 1; font-size: 0.85rem; padding: 8px;" onclick="openEditDeviceModal(${index})">Editar</button>
                        <button class="btn-secondary" style="flex: 1; font-size: 0.85rem; padding: 8px; background-color: #e74c3c; color: white;" onclick="deleteDevice(${index})">Eliminar</button>
                    </div>
                </div>
            `;
            devicesContainer.appendChild(card);
        });
    }

    function getDeviceIcon(type) {
        switch(type) {
            case 'humidity': return 'fa-tint';
            case 'temperature': return 'fa-thermometer-half';
            case 'ph': return 'fa-flask';
            case 'station': return 'fa-cloud-sun';
            default: return 'fa-microchip';
        }
    }

    /* --- CALIBRATION LOGIC --- */
    let currentCalibrationDeviceIndex = null;
    const modalCalibration = document.getElementById('modal-calibration');

    window.openCalibrationModal = (index) => {
        currentCalibrationDeviceIndex = index;
        const device = devices[index];
        
        // Reset Modal State
        document.getElementById('calibration-step-1').style.display = 'block';
        document.getElementById('calibration-step-2').style.display = 'none';
        document.getElementById('calibration-step-3').style.display = 'none';
        document.getElementById('calibration-progress').style.width = '0%';
        
        renderCalibrationHistory(device);
        openModal(modalCalibration);
    };

    window.startCalibration = () => {
        document.getElementById('calibration-step-1').style.display = 'none';
        document.getElementById('calibration-step-2').style.display = 'block';
        
        const status = document.getElementById('calibration-status');
        const progress = document.getElementById('calibration-progress');
        
        status.textContent = "Conectando con sensor...";
        progress.style.width = "30%";
        
        setTimeout(() => {
            status.textContent = "Ajustando valores de referencia...";
            progress.style.width = "60%";
            
            setTimeout(() => {
                status.textContent = "Verificando lecturas...";
                progress.style.width = "90%";
                
                setTimeout(() => {
                    finishCalibration();
                }, 1500);
            }, 2000);
        }, 2000);
    };

    function finishCalibration() {
        document.getElementById('calibration-step-2').style.display = 'none';
        document.getElementById('calibration-step-3').style.display = 'block';
        
        // Simulate Success/Failure (80% Success)
        const success = Math.random() > 0.2;
        const device = devices[currentCalibrationDeviceIndex];
        
        if (success) {
            document.getElementById('calibration-result-success').style.display = 'block';
            document.getElementById('calibration-result-error').style.display = 'none';
            
            // Log History
            if (!device.calibrationHistory) device.calibrationHistory = [];
            device.calibrationHistory.unshift({
                date: new Date().toLocaleString(),
                status: 'Exitoso',
                technician: activeUser.name
            });
            
            saveDevices();
            renderCalibrationHistory(device);
            addNotification('success', 'Calibración Completada', `El sensor ${device.name} ha sido calibrado.`);
        } else {
            document.getElementById('calibration-result-success').style.display = 'none';
            document.getElementById('calibration-result-error').style.display = 'block';
            
            // Log History (Failed)
            if (!device.calibrationHistory) device.calibrationHistory = [];
            device.calibrationHistory.unshift({
                date: new Date().toLocaleString(),
                status: 'Fallido',
                technician: activeUser.name
            });
            saveDevices();
            renderCalibrationHistory(device);
        }
    }

    window.retryCalibration = () => {
        window.startCalibration();
    };

    window.closeCalibrationModal = () => {
        closeModal(modalCalibration);
    };

    function renderCalibrationHistory(device) {
        const container = document.getElementById('calibration-history');
        container.innerHTML = '';
        
        if (!device.calibrationHistory || device.calibrationHistory.length === 0) {
            container.innerHTML = '<p style="color: #999; text-align: center;">Sin historial de calibración.</p>';
            return;
        }
        
        device.calibrationHistory.forEach(log => {
            const item = document.createElement('div');
            item.style.padding = '8px';
            item.style.borderBottom = '1px solid #f0f0f0';
            item.style.display = 'flex';
            item.style.justifyContent = 'space-between';
            
            const color = log.status === 'Exitoso' ? '#2ecc71' : '#e74c3c';
            
            item.innerHTML = `
                <span>${log.date}</span>
                <span style="color: ${color}; font-weight: bold;">${log.status}</span>
            `;
            container.appendChild(item);
        });
    }

    function saveDevices() {
        localStorage.setItem(`sima_devices_${userKey}`, JSON.stringify(devices));
    }

    function countLinkedDevices(parcelId) {
        return devices.filter(d => d.parcelId === parcelId).length;
    }

    formParcel.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(formParcel);
        const name = formData.get('name');
        const cropSelect = formData.get('crop-select');
        const cropManual = formData.get('crop-manual');
        const area = formData.get('area');
        const sowingDate = formData.get('sowing-date');
        const id = formData.get('parcel-id');
        const lat = formData.get('lat');
        const lng = formData.get('lng');

        const crop = cropSelect === 'other' ? cropManual : cropSelect;

        if (id) {
            // Edit
            const index = parcels.findIndex(p => p.id === id);
            if (index !== -1) {
                // Check duplicate name (exclude current)
                const duplicate = parcels.some(p => p.name.toLowerCase() === name.toLowerCase() && p.id !== id);
                if (duplicate) {
                    addNotification('warning', 'Duplicado', translations[currentLang].error_duplicate_parcel || "Nombre duplicado");
                    return;
                }

                parcels[index] = { ...parcels[index], name, crop, area, sowingDate, lat, lng };
                addNotification('success', 'Éxito', 'Parcela actualizada correctamente.');
            }
        } else {
            // New
            // Check duplicate name
            const duplicate = parcels.some(p => p.name.toLowerCase() === name.toLowerCase());
            if (duplicate) {
                addNotification('warning', 'Duplicado', translations[currentLang].error_duplicate_parcel || "Nombre duplicado");
                return;
            }

            const newParcel = {
                id: Date.now().toString(),
                name,
                crop,
                area,
                sowingDate,
                lat,
                lng,
                devices: []
            };
            parcels.push(newParcel);
            addNotification('success', 'Éxito', 'Parcela registrada correctamente.');
        }

        saveParcels();
        renderParcels();
        closeModal(modalParcel);
        formParcel.reset();
    });

    window.openEditParcelModal = (index) => {
        const parcel = parcels[index];
        document.getElementById('parcel-id').value = parcel.id;
        formParcel.querySelector('[name="name"]').value = parcel.name;
        formParcel.querySelector('[name="area"]').value = parcel.area;
        formParcel.querySelector('[name="sowing-date"]').value = parcel.sowingDate || '';
        document.getElementById('parcel-lat').value = parcel.lat || -12.0464;
        document.getElementById('parcel-lng').value = parcel.lng || -77.0428;
        
        const cropOptions = Array.from(cropSelect.options).map(o => o.value);
        if (cropOptions.includes(parcel.crop)) {
            cropSelect.value = parcel.crop;
            cropManual.style.display = 'none';
        } else {
            cropSelect.value = 'other';
            cropManual.style.display = 'block';
            cropManual.value = parcel.crop;
        }

        modalParcel.querySelector('h2').textContent = 'Editar Parcela';
        modalParcel.querySelector('button[type="submit"]').textContent = 'Actualizar Parcela';
        openModal(modalParcel);

        // Update Map
        setTimeout(() => {
            initParcelMap();
            parcelMap.invalidateSize();
            const lat = parseFloat(parcel.lat) || -12.0464;
            const lng = parseFloat(parcel.lng) || -77.0428;
            parcelMarker.setLatLng([lat, lng]);
            parcelMap.setView([lat, lng], 13);
        }, 200);
    };

    function saveParcels() {
        localStorage.setItem(`sima_parcels_${userKey}`, JSON.stringify(parcels));
    }

    formDevice.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(formDevice);
        const id = formData.get('device-id');

        if (id) {
            // Update existing
            const index = devices.findIndex(d => d.id === id);
            if (index !== -1) {
                devices[index].serial = formData.get('serial');
                devices[index].name = formData.get('name');
                devices[index].type = formData.get('type');
                addNotification('info', 'Dispositivo Actualizado', `El dispositivo "${devices[index].name}" ha sido modificado.`);
            }
        } else {
            // Create new
            const newDevice = {
                id: Date.now().toString(),
                serial: formData.get('serial'),
                name: formData.get('name'),
                type: formData.get('type'),
                parcelId: null
            };
            devices.push(newDevice);
            addNotification('info', 'Nuevo Dispositivo', `Has registrado el dispositivo "${newDevice.name}" exitosamente.`);
        }

        localStorage.setItem(`sima_devices_${userKey}`, JSON.stringify(devices));
        renderDevices();
        closeModal(modalDevice);
        formDevice.reset();
    });

    window.deleteParcel = (index) => {
        if (confirm('¿Eliminar esta parcela?')) {
            const parcelId = parcels[index].id;
            devices.forEach(d => {
                if (d.parcelId === parcelId) d.parcelId = null;
            });
            localStorage.setItem(`sima_devices_${userKey}`, JSON.stringify(devices));
            
            parcels.splice(index, 1);
            localStorage.setItem(`sima_parcels_${userKey}`, JSON.stringify(parcels));
            renderParcels();
            renderDevices();
        }
    };

    window.deleteDevice = (index) => {
        if (confirm('¿Eliminar este dispositivo?')) {
            devices.splice(index, 1);
            localStorage.setItem(`sima_devices_${userKey}`, JSON.stringify(devices));
            renderDevices();
        }
    };

    function renderLinkingInterface() {
        linkParcelSelect.innerHTML = '<option value="">Seleccionar...</option>';
        parcels.forEach(p => {
            const option = document.createElement('option');
            option.value = p.id;
            option.textContent = p.name;
            linkParcelSelect.appendChild(option);
        });

        linkDevicesList.innerHTML = '<p class="text-muted">Selecciona una parcela primero</p>';
        btnLinkConfirm.disabled = true;
    }

    linkParcelSelect.addEventListener('change', () => {
        const parcelId = linkParcelSelect.value;
        if (!parcelId) {
            linkDevicesList.innerHTML = '<p class="text-muted">Selecciona una parcela primero</p>';
            btnLinkConfirm.disabled = true;
            return;
        }

        linkDevicesList.innerHTML = '';
        const availableDevices = devices;
        
        if (availableDevices.length === 0) {
            linkDevicesList.innerHTML = '<p class="text-muted">No hay dispositivos registrados.</p>';
            return;
        }

        availableDevices.forEach(d => {
            const isLinkedToThis = d.parcelId === parcelId;
            const isLinkedToOther = d.parcelId && d.parcelId !== parcelId;
            
            const div = document.createElement('div');
            div.className = 'checkbox-item';
            div.innerHTML = `
                <input type="checkbox" id="dev-${d.id}" value="${d.id}" ${isLinkedToThis ? 'checked' : ''}>
                <label for="dev-${d.id}">
                    ${d.name} (${d.serial}) 
                    ${isLinkedToOther ? '<small class="text-muted">- Vinculado a otra parcela</small>' : ''}
                </label>
            `;
            linkDevicesList.appendChild(div);
        });

        btnLinkConfirm.disabled = false;
    });

    btnLinkConfirm.addEventListener('click', () => {
        const parcelId = linkParcelSelect.value;
        if (!parcelId) return;

        const checkboxes = linkDevicesList.querySelectorAll('input[type="checkbox"]');
        let updatedCount = 0;

        checkboxes.forEach(cb => {
            const device = devices.find(d => d.id === cb.value);
            if (device) {
                if (cb.checked) {
                    device.parcelId = parcelId;
                } else if (device.parcelId === parcelId) {
                    device.parcelId = null;
                }
                updatedCount++;
            }
        });

        localStorage.setItem(`sima_devices_${userKey}`, JSON.stringify(devices));
        renderDevices();
        renderParcels();
        localStorage.setItem(`sima_devices_${userKey}`, JSON.stringify(devices));
        renderDevices();
        renderParcels();
        addNotification('info', 'Vinculación Exitosa', `Se han vinculado ${updatedCount} dispositivos a la parcela.`);
        navigateTo('parcels');
    });

    if (formPest) {
        formPest.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(formPest);
            
            const type = formData.get('type');
            
            // Generate recommendations based on type
            const recommendations = PEST_RECOMMENDATIONS[type] || [];

            const newPest = {
                id: Date.now().toString(),
                name: formData.get('name'),
                type: type,
                severity: formData.get('severity'),
                date: formData.get('date'),
                parcelId: formData.get('parcel-id'),
                observation: formData.get('observation'),
                recommendations: recommendations,
                status: 'Pending'
            };

            pests.push(newPest);
            savePests();
            renderPests();
            closeModal(modalPest);
            formPest.reset();
            
            if (recommendations.length > 0) {
                addNotification('success', 'Registrado', 'Plaga registrada. Se han generado recomendaciones.');
            } else {
                addNotification('warning', 'Registrado', 'Plaga registrada. No hay recomendaciones específicas.');
            }
        });
    }

    if (formFertilizer) {
        formFertilizer.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(formFertilizer);
            const id = formData.get('fertilizer-id');

            if (id) {
                // Edit
                const index = fertilizers.findIndex(f => f.id === id);
                if (index !== -1) {
                    fertilizers[index] = {
                        ...fertilizers[index],
                        name: formData.get('name'),
                        type: formData.get('type'),
                        date: formData.get('date'),
                        parcelId: formData.get('parcel-id'),
                        quantity: formData.get('quantity')
                    };
                    addNotification('success', 'Actualizado', 'Fertilizante actualizado correctamente.');
                }
            } else {
                // New
                const newFertilizer = {
                    id: Date.now().toString(),
                    name: formData.get('name'),
                    type: formData.get('type'),
                    date: formData.get('date'),
                    parcelId: formData.get('parcel-id'),
                    quantity: formData.get('quantity')
                };
                fertilizers.push(newFertilizer);
                addNotification('success', 'Registrado', 'Fertilizante registrado correctamente.');
            }

            saveFertilizers();
            renderFertilizers();
            closeModal(modalFertilizer);
            formFertilizer.reset();
        });
    }



    renderParcels();
    renderDevices();
    renderPests();

    /* --- DYNAMIC DASHBOARD LOGIC --- */

    /* --- DYNAMIC DASHBOARD LOGIC --- */

    let notifications = JSON.parse(localStorage.getItem(`sima_notifications_${userKey}`)) || [];
    let currentNotificationFilter = 'all';

    const statParcels = document.getElementById('stat-parcels');
    const statSensors = document.getElementById('stat-sensors');
    const statAlerts = document.getElementById('stat-alerts');
    const notifBadge = document.getElementById('notif-badge');
    const notificationsContainer = document.getElementById('notifications-container');

    function updateStats() {
        if (statParcels) statParcels.textContent = parcels.length;
        
        const onlineSensors = devices.length; // Simulating all registered devices are online
        if (statSensors) statSensors.textContent = onlineSensors;

        const unreadAlerts = notifications.filter(n => !n.read).length;
        if (statAlerts) statAlerts.textContent = unreadAlerts;
        if (notifBadge) {
            notifBadge.textContent = unreadAlerts;
            notifBadge.style.display = unreadAlerts > 0 ? 'inline-block' : 'none';
        }
    }

    window.filterNotifications = (filter) => {
        currentNotificationFilter = filter;
        
        // Update UI buttons
        const buttons = document.querySelectorAll('.filter-group button');
        buttons.forEach(btn => btn.classList.remove('active'));
        
        const btnMap = {
            'all': 0, 'high': 1, 'medium': 2, 'low': 3
        };
        if (buttons[btnMap[filter]]) buttons[btnMap[filter]].classList.add('active');
        
        renderNotifications();
    };

    function renderNotifications() {
        if (!notificationsContainer) return;
        notificationsContainer.innerHTML = '';

        let filtered = notifications;
        if (currentNotificationFilter !== 'all') {
            filtered = notifications.filter(n => n.priority === currentNotificationFilter);
        }

        if (filtered.length === 0) {
            notificationsContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-bell-slash fa-3x" style="color: #ccc; margin-bottom: 1rem;"></i>
                    <p>No tienes notificaciones ${currentNotificationFilter !== 'all' ? 'con esta prioridad' : 'nuevas'}.</p>
                </div>`;
            return;
        }

        // Sort by Priority (High > Medium > Low) then Date Desc
        const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
        
        filtered.sort((a, b) => {
            const pA = priorityOrder[a.priority] || 1;
            const pB = priorityOrder[b.priority] || 1;
            
            if (pA !== pB) return pB - pA; // Higher priority first
            return new Date(b.date) - new Date(a.date); // Newer first
        });

        filtered.forEach((notif, index) => {
            // Find original index for actions
            const originalIndex = notifications.findIndex(n => n.id === notif.id);
            
            const item = document.createElement('div');
            item.className = `notification-item ${notif.read ? '' : 'unread'}`;
            
            let borderStyle = '';
            if (notif.priority === 'high') borderStyle = 'border-left: 4px solid #e74c3c;';
            else if (notif.priority === 'medium') borderStyle = 'border-left: 4px solid #f39c12;';
            else borderStyle = 'border-left: 4px solid #3498db;';
            
            item.style = borderStyle;

            item.innerHTML = `
                <div class="notif-icon ${notif.type === 'alert' ? 'warning' : 'info'}">
                    <i class="fas ${notif.type === 'alert' ? 'fa-exclamation-triangle' : 'fa-info-circle'}"></i>
                </div>
                <div class="notif-content">
                    <h4>${notif.title} <span style="font-size: 0.7rem; padding: 2px 5px; border-radius: 4px; background: #eee; color: #666; margin-left: 5px;">${getPriorityLabel(notif.priority)}</span></h4>
                    <p>${notif.message}</p>
                    <span class="time">${timeAgo(notif.date)}</span>
                </div>
                ${!notif.read ? `<button class="btn-secondary" style="margin-left: auto; padding: 5px 10px; font-size: 0.8rem;" onclick="markAsRead(${originalIndex})">Leído</button>` : ''}
            `;
            notificationsContainer.appendChild(item);
        });
    }

    function getPriorityLabel(priority) {
        switch(priority) {
            case 'high': return 'Alta';
            case 'medium': return 'Media';
            case 'low': return 'Baja';
            default: return 'Baja';
        }
    }

    window.markAsRead = (index) => {
        notifications[index].read = true;
        localStorage.setItem(`sima_notifications_${userKey}`, JSON.stringify(notifications));
        renderNotifications();
        updateStats();
    };

    function addNotification(type, title, message, priority = 'low') {
        const newNotif = {
            id: Date.now(),
            type: type, // 'alert' or 'info'
            title: title,
            message: message,
            priority: priority, // 'high', 'medium', 'low'
            date: new Date().toISOString(),
            read: false
        };
        notifications.push(newNotif);
        localStorage.setItem(`sima_notifications_${userKey}`, JSON.stringify(notifications));
        renderNotifications();
        updateStats();
        
        // Show browser notification if supported and allowed
        if ("Notification" in window && Notification.permission === "granted") {
            new Notification(title, { body: message });
        }
    }

    function timeAgo(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const seconds = Math.floor((now - date) / 1000);
        
        if (seconds < 60) return 'Hace unos segundos';
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `Hace ${minutes} min`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `Hace ${hours} horas`;
        return date.toLocaleDateString();
    }

    // Hook into existing functions to update stats
    const originalRenderParcels = renderParcels;
    renderParcels = function() {
        originalRenderParcels();
        updateStats();
    };

    const originalRenderDevices = renderDevices;
    renderDevices = function() {
        originalRenderDevices();
        updateStats();
    };

    // Initial Render
    updateStats();
    renderNotifications();

    /* --- SIMULATION SYSTEM --- */
    function startSimulation() {
        // Request notification permission
        if ("Notification" in window && Notification.permission !== "granted") {
            Notification.requestPermission();
        }

        setInterval(() => {
            // 30% chance to trigger an event every 10 seconds
            if (Math.random() > 0.7) {
                const eventType = Math.random() > 0.5 ? 'alert' : 'info';
                
                if (eventType === 'alert') {
                    const parcel = parcels.length > 0 ? parcels[Math.floor(Math.random() * parcels.length)].name : 'Parcela General';
                    addNotification('alert', `Alerta en ${parcel}`, 'Se han detectado valores anómalos en los sensores de humedad.', 'high');
                } else {
                    const topics = ['Reporte Semanal', 'Clima', 'Consejo Agrónomo', 'Actualización de Sistema'];
                    const topic = topics[Math.floor(Math.random() * topics.length)];
                    addNotification('info', `Nuevo: ${topic}`, 'Hay nueva información disponible para revisar en tu panel.', 'low');
                }
            }
        }, 10000); // Check every 10 seconds
    }

    startSimulation();

    /* --- MAP LOGIC --- */
    let map;
    let markers = [];

    function initMap() {
        if (map) {
            map.invalidateSize();
            return;
        }

        // Default center (can be adjusted or geolocation used)
        const defaultLat = -12.0464;
        const defaultLng = -77.0428;

        map = L.map('map').setView([defaultLat, defaultLng], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        renderMapMarkers();
    }

    function renderMapMarkers() {
        if (!map) return;

        // Clear existing markers
        markers.forEach(marker => map.removeLayer(marker));
        markers = [];

        // Base coordinates for fallback
        const baseLat = -12.0464;
        const baseLng = -77.0428;

        parcels.forEach((parcel, index) => {
            // Use saved coordinates or fallback to random simulation
            let lat, lng;
            
            if (parcel.lat && parcel.lng) {
                lat = parseFloat(parcel.lat);
                lng = parseFloat(parcel.lng);
            } else {
                // Fallback simulation (deterministic based on index)
                lat = baseLat + (Math.random() - 0.5) * 0.05;
                lng = baseLng + (Math.random() - 0.5) * 0.05;
            }

            const status = calculateParcelStatus(parcel.id);
            const color = getStatusColor(status);

            const markerIcon = L.divIcon({
                className: 'custom-div-icon',
                html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 5px rgba(0,0,0,0.5);"></div>`,
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            });

            const marker = L.marker([lat, lng], { icon: markerIcon }).addTo(map);
            
            // Popup Content
            const linkedDevices = devices.filter(d => d.parcelId === parcel.id);
            let sensorDataHtml = '';
            
            if (linkedDevices.length > 0) {
                linkedDevices.forEach(d => {
                    // Simulate sensor reading
                    let reading = '';
                    if (d.type === 'humidity') reading = `${Math.floor(Math.random() * 100)}%`;
                    if (d.type === 'temperature') reading = `${Math.floor(Math.random() * 35)}°C`;
                    if (d.type === 'ph') reading = `${(Math.random() * 14).toFixed(1)}`;
                    
                    if (reading) {
                        sensorDataHtml += `<div><small>${d.name}:</small> <strong>${reading}</strong></div>`;
                    }
                });
            } else {
                sensorDataHtml = '<small class="text-muted">Sin sensores vinculados</small>';
            }

            const popupContent = `
                <div style="min-width: 200px;">
                    <h3 style="margin: 0 0 10px 0; color: #2c3e50;">${parcel.name}</h3>
                    <div style="margin-bottom: 10px;">
                        <strong>Cultivo:</strong> ${parcel.crop}<br>
                        <strong>Estado:</strong> <span style="color: ${color}; font-weight: bold;">${getStatusText(status)}</span>
                    </div>
                    <div style="background: #f8f9fa; padding: 10px; border-radius: 5px;">
                        ${sensorDataHtml}
                    </div>
                    <div style="margin-top: 10px; font-size: 0.8rem; color: #888;">
                        Actualizado: ${new Date().toLocaleTimeString()}
                    </div>
                </div>
            `;

            marker.bindPopup(popupContent);
            markers.push(marker);
        });
        
        // Fit bounds if there are markers
        if (markers.length > 0) {
            const group = new L.featureGroup(markers);
            map.fitBounds(group.getBounds().pad(0.2));
        }
    }

    function calculateParcelStatus(parcelId) {
        // Simulate status logic based on linked devices
        // In a real app, this would check actual sensor values against thresholds
        const linkedDevices = devices.filter(d => d.parcelId === parcelId);
        
        if (linkedDevices.length === 0) return 'normal'; // Default if no sensors

        // Randomly determine status for demo purposes if sensors exist
        const rand = Math.random();
        if (rand > 0.8) return 'critical';
        if (rand > 0.6) return 'attention';
        return 'normal';
    }

    function getStatusColor(status) {
        switch(status) {
            case 'normal': return '#2ecc71';
            case 'attention': return '#f1c40f';
            case 'critical': return '#e74c3c';
            default: return '#2ecc71';
        }
    }

    function getStatusText(status) {
        switch(status) {
            case 'normal': return 'Normal';
            case 'attention': return 'Atención';
            case 'critical': return 'Crítico';
            default: return 'Normal';
        }
    }

    checkIrrigationReminders();
});

