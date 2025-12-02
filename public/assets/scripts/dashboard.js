document.addEventListener('DOMContentLoaded', () => {

    let activeUser = JSON.parse(localStorage.getItem("activeUser"));

    if (!activeUser) {
        window.location.href = "index.html";
        return;
    }

    const userNameElements = document.querySelectorAll(".user-info .name");
    const userAvatar = document.querySelector(".avatar");
    const welcomeTitle = document.querySelector(".welcome-banner h1");

    userNameElements.forEach(el => el.textContent = activeUser.name);

    if (userAvatar) {
        userAvatar.textContent = activeUser.name.charAt(0).toUpperCase();
    }

    if (welcomeTitle) {
        welcomeTitle.textContent = `¡Hola, ${activeUser.name}! 👋`;
    }

    const settingsName = document.querySelector('#settings input[type="text"]');
    const settingsEmail = document.querySelector('#settings input[type="email"]');

    if (settingsName) settingsName.value = activeUser.name;
    if (settingsEmail) settingsEmail.value = activeUser.email;

    const btnLogout = document.getElementById('btn-logout');
    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            if (confirm("¿Cerrar sesión?")) {
                localStorage.removeItem("activeUser");
                window.location.href = "index.html";
            }
        });
    }

    let parcels = JSON.parse(localStorage.getItem('sima_parcels')) || [];
    let devices = JSON.parse(localStorage.getItem('sima_devices')) || [];

    const sidebarLinks = document.querySelectorAll('.sidebar-nav li');
    const sections = document.querySelectorAll('.view-section');
    const toggleMenuBtn = document.getElementById('toggle-menu');
    const sidebar = document.querySelector('.sidebar');

    const modalParcel = document.getElementById('modal-parcel');
    const modalDevice = document.getElementById('modal-device');
    const btnAddParcel = document.getElementById('btn-add-parcel');
    const btnAddDevice = document.getElementById('btn-add-device');
    const btnCreateNew = document.getElementById('btn-create-new');
    const closeModals = document.querySelectorAll('.close-modal');
    const formParcel = document.getElementById('form-parcel');
    const formDevice = document.getElementById('form-device');

    const parcelsContainer = document.getElementById('parcels-container');
    const devicesContainer = document.getElementById('devices-container');
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
            card.innerHTML = `
                <div class="icon-box green"><i class="fas fa-leaf"></i></div>
                <h3>${parcel.name}</h3>
                <p>${parcel.crop} - ${parcel.area} m²</p>
                <div style="margin-top: 10px; font-size: 0.8rem; color: #888;">
                    <i class="fas fa-link"></i> ${countLinkedDevices(parcel.id)} dispositivos
                </div>
                <button class="btn-secondary" style="margin-top: 10px; width: 100%;" onclick="deleteParcel(${index})">Eliminar</button>
            `;
            parcelsContainer.appendChild(card);
        });
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
                <button class="btn-secondary" style="margin-top: 10px; width: 100%;" onclick="deleteDevice(${index})">Eliminar</button>
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

    function countLinkedDevices(parcelId) {
        return devices.filter(d => d.parcelId === parcelId).length;
    }

    formParcel.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(formParcel);
        const newParcel = {
            id: Date.now().toString(),
            name: formData.get('name'),
            crop: formData.get('crop'),
            area: formData.get('area')
        };
        
        parcels.push(newParcel);
        localStorage.setItem('sima_parcels', JSON.stringify(parcels));
        renderParcels();
        closeModal(modalParcel);
        formParcel.reset();
        alert('Parcela creada exitosamente');
    });

    formDevice.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(formDevice);
        const newDevice = {
            id: Date.now().toString(),
            serial: formData.get('serial'),
            name: formData.get('name'),
            type: formData.get('type'),
            parcelId: null
        };

        devices.push(newDevice);
        localStorage.setItem('sima_devices', JSON.stringify(devices));
        renderDevices();
        closeModal(modalDevice);
        formDevice.reset();
        alert('Dispositivo registrado exitosamente');
    });

    window.deleteParcel = (index) => {
        if (confirm('¿Eliminar esta parcela?')) {
            const parcelId = parcels[index].id;
            devices.forEach(d => {
                if (d.parcelId === parcelId) d.parcelId = null;
            });
            localStorage.setItem('sima_devices', JSON.stringify(devices));
            
            parcels.splice(index, 1);
            localStorage.setItem('sima_parcels', JSON.stringify(parcels));
            renderParcels();
            renderDevices();
        }
    };

    window.deleteDevice = (index) => {
        if (confirm('¿Eliminar este dispositivo?')) {
            devices.splice(index, 1);
            localStorage.setItem('sima_devices', JSON.stringify(devices));
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

        localStorage.setItem('sima_devices', JSON.stringify(devices));
        renderDevices();
        renderParcels();
        alert('Vinculación actualizada correctamente');
        navigateTo('parcels');
    });

    renderParcels();
    renderDevices();
});

