const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
})

const enlaceSuave = document.getElementById('conocenos');
if (enlaceSuave) {
    enlaceSuave.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el salto directo de la página
        const seccion = document.getElementById('know-us');
        if (seccion) {
            seccion.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

const enlaceProposito = document.getElementById('proposito');
if (enlaceProposito) {
    enlaceProposito.addEventListener('click', function(event) {
        event.preventDefault();
        const seccionProposito = document.getElementById('purpose');
        if (seccionProposito) {
            seccionProposito.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        navbarMenu.classList.remove('active');
        navbarToggle.classList.remove('active');
    });
}

const enlaceBeneficios = document.querySelector('a[href="#benefits"]');
if (enlaceBeneficios) {
    enlaceBeneficios.addEventListener('click', function(event) {
        event.preventDefault();
        const seccionBeneficios = document.getElementById('benefits');
        if (seccionBeneficios) {
            seccionBeneficios.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        navbarMenu.classList.remove('active');
        navbarToggle.classList.remove('active');
    });
}

const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const slider = document.querySelector('#slider');
const sliderSection = document.querySelectorAll('.slider-section');

let intervalo = null;
if (sliderSection.length > 0) {
    intervalo = setInterval(() => {moveToRight();}, 5000);
}

if (btnLeft) {
    btnLeft.addEventListener("click", () => {
        moveToLeft();
        clearInterval(intervalo);
        intervalo = setInterval(() => {moveToRight();}, 5000);
    });
}

if (btnRight) {
    btnRight.addEventListener("click", () => {
        moveToRight();
        clearInterval(intervalo);
        intervalo = setInterval(() => {moveToRight();}, 5000);
    });
}

let operacion = 0,
    counter = 0,
    widthImg = sliderSection.length > 0 ? 100 / sliderSection.length : 0;

function moveToRight() {
    if (sliderSection.length === 0) return;
    if (counter >= sliderSection.length - 1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        return;
    }
    counter++;
    operacion = operacion + widthImg
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = 'all 0.5s ease'
}

function moveToLeft() {
    if (sliderSection.length === 0) return;
    counter--;
    if (counter < 0) {
        counter = sliderSection.length - 1;
        operacion = widthImg * counter;
        slider.style.transform = `translate(-${operacion}%)`;
        return;
    }
    operacion = operacion - widthImg
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = 'all 0.5s ease'
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const navLinks = document.querySelectorAll('.navbar-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
        navbarToggle.classList.remove('active');
    });
});

/* Auth Modal Logic */
const modalAuth = document.getElementById('modal-auth');
const overlayAuth = document.querySelector('.modal-overlay');
const openAuthButtons = document.querySelectorAll('.navbar-button, .nav-button');
const closeAuthModal = document.querySelector('.close-modal');
const loginContainer = document.getElementById('login-container');
const registerContainer = document.getElementById('register-container');
const btnShowRegister = document.getElementById('btn-show-register');
const btnShowLogin = document.getElementById('btn-show-login');
/* Nuevo*/
const forgotContainer = document.getElementById('forgot-container');
const btnShowForgot = document.getElementById('btn-show-forgot');
const btnBackLogin = document.getElementById('btn-back-login');
const formForgot = document.getElementById('form-forgot');
/* Nuevo*/
const formLogin = document.getElementById('form-login');
const formRegister = document.getElementById('form-register');
const authMessage = document.getElementById('auth-message');
const togglePasswordButtons = document.querySelectorAll('.toggle-password');

// Open Modal
openAuthButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (modalAuth) {
            modalAuth.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            // Reset to login view by default
            showLogin();
        }
    });
});

// Close Modal
const closeModal = () => {
    if (modalAuth) {
        modalAuth.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (authMessage) authMessage.style.display = 'none';
    if (formLogin) formLogin.reset();
    if (formRegister) formRegister.reset();
};

if (closeAuthModal) closeAuthModal.addEventListener('click', closeModal);
if (overlayAuth) overlayAuth.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modalAuth) {
        closeModal();
    }
});

// Switch Views
function showRegister() {
    if (loginContainer) loginContainer.style.display = 'none';
    if (registerContainer) registerContainer.style.display = 'block';
    if (authMessage) authMessage.style.display = 'none';
}

function showLogin() {
    if (registerContainer) registerContainer.style.display = 'none';
    if (forgotContainer) forgotContainer.style.display = 'none';
    if (loginContainer) loginContainer.style.display = 'block';
    if (authMessage) authMessage.style.display = 'none';
}
/*Nuevo*/
function showForgot() {
    if (loginContainer) loginContainer.style.display = 'none';
    if (registerContainer) registerContainer.style.display = 'none';
    if (forgotContainer) forgotContainer.style.display = 'block';
    if (authMessage) authMessage.style.display = 'none';
}
/*Nuevo*/
if (btnShowRegister) {
    btnShowRegister.addEventListener('click', (e) => {
        e.preventDefault();
        showRegister();
    });
}

if (btnShowLogin) {
    btnShowLogin.addEventListener('click', (e) => {
        e.preventDefault();
        showLogin();
    });
}
/*Nuevo*/
if (btnShowForgot) {
    btnShowForgot.addEventListener('click', (e) => {
        e.preventDefault();
        showForgot();
    });
}

if (btnBackLogin) {
    btnBackLogin.addEventListener('click', (e) => {
        e.preventDefault();
        showLogin();
    });
}
/*Nuevo*/

// Password Toggle
togglePasswordButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const input = this.previousElementSibling;
        if (input) {
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            
            // Update icon color
            if (type === 'text') {
                this.style.color = '#80D643';
            } else {
                this.style.color = '#aaa';
            }
        }
    });
});

// Form Validation and Submission
function showMessage(msg, type) {
    if (authMessage) {
        authMessage.textContent = msg;
        authMessage.className = 'auth-message ' + type;
        authMessage.style.display = 'block';
    }
}

if (formLogin) {
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('login-email');
        const passwordInput = document.getElementById('login-password');
        
        const email = emailInput ? emailInput.value : '';
        const password = passwordInput ? passwordInput.value : '';

        if (!email || !password) {
            showMessage('Por favor completa todos los campos', 'error');
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];
        const userIndex = users.findIndex(u => u.email === email);
        const user = users[userIndex];

        if (!user) {
            showMessage("Usuario no encontrado", "error");
            return;
        }

        // Check for lockout
        const now = Date.now();
        if (user.lockoutUntil && now < user.lockoutUntil) {
            const remainingSeconds = Math.ceil((user.lockoutUntil - now) / 1000);
            showMessage(`Cuenta bloqueada temporalmente. Intenta de nuevo en ${remainingSeconds} segundos.`, "error");
            return;
        }

        // Reset lockout if time passed
        if (user.lockoutUntil && now >= user.lockoutUntil) {
            user.lockoutUntil = null;
            user.failedAttempts = 0;
            users[userIndex] = user;
            localStorage.setItem("users", JSON.stringify(users));
        }

        if (user.password !== password) {
            // Increment failed attempts
            user.failedAttempts = (user.failedAttempts || 0) + 1;
            
            if (user.failedAttempts >= 3) {
                user.lockoutUntil = now + 30000; // 30 seconds lockout
                showMessage("Has excedido el número de intentos. Tu cuenta ha sido bloqueada por 30 segundos.", "error");
            } else {
                showMessage(`Contraseña incorrecta. Intentos restantes: ${3 - user.failedAttempts}`, "error");
            }
            
            users[userIndex] = user;
            localStorage.setItem("users", JSON.stringify(users));
            return;
        }

        // Login successful - reset counters
        user.failedAttempts = 0;
        user.lockoutUntil = null;
        
        // Record Login History
        user.loginHistory = user.loginHistory || [];
        user.loginHistory.unshift({
            date: new Date().toISOString(),
            ip: '192.168.1.' + Math.floor(Math.random() * 255), // Simulated IP
            device: 'Web Browser (Chrome/Edge)' // Simplified for demo
        });
        if (user.loginHistory.length > 10) user.loginHistory.pop();

        users[userIndex] = user;
        localStorage.setItem("users", JSON.stringify(users));

        // Check verification status
        if (!user.verified) {
            currentEmailForVerification = email;
            showVerificationModal();
            return;
        }
        // Guardar usuario activo
        localStorage.setItem("activeUser", JSON.stringify(user));

        // Simular Login
        const btn = formLogin.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Verificando...';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
            showMessage('¡Bienvenido de nuevo!', 'success');
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1500);
        }, 1500);
    });
}


if (formRegister) {
    formRegister.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('register-name');
        const emailInput = document.getElementById('register-email');
        const passwordInput = document.getElementById('register-password');

        const name = nameInput ? nameInput.value : '';
        const email = emailInput ? emailInput.value : '';
        const password = passwordInput ? passwordInput.value : '';

        if (!name || !email || !password) {
            showMessage('Por favor completa todos los campos', 'error');
            return;
        }

        if (password.length < 6) {
            showMessage('La contraseña debe tener al menos 6 caracteres', 'error');
            return;
        }

        // Cargar usuarios
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Validar si ya existe
        const emailExists = users.some(u => u.email === email);
        if (emailExists) {
            showMessage("Correo ya registrado", "error");
            return;
        }

        // Guardar usuario
        users.push({
            name,
            email,
            password,
            verified: false
        });
        localStorage.setItem("users", JSON.stringify(users));
        
        // Show verification modal instead of auto-login
        currentEmailForVerification = email;
        modalAuth.style.display = "none"; // Close auth modal
        showVerificationModal();
        
        // Clear form
        formRegister.reset();


    });
}


// Usuarios existentes (simulado)
if (formForgot) {
    formForgot.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('forgot-email').value.trim();
        
        if (!email) {
            showMessage("Por favor ingresa tu correo", "error");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const emailExists = users.some(u => u.email === email);

        if (!emailExists) {
            showMessage("Correo no registrado", "error");
            return;
        }

        showMessage("Te enviamos un enlace de recuperación a tu correo", "success");
    });
}

// Define missing variables for verification elements
const modalVerification = document.getElementById('modal-verification');
const verificationCodeInput = document.getElementById('verification-code');
const btnVerifyCode = document.getElementById('btn-verify-code');
const btnResendEmail = document.getElementById('btn-resend-email');
// Declarar elementos faltantes para la verificación
const verificationStatusMessage = document.getElementById('verification-status-message');
const resendContainer = document.getElementById('resend-container');

// Variable para almacenar el correo actual que se está verificando
let currentEmailForVerification = '';

function showVerificationModal() {
    modalVerification.style.display = 'flex';
    verificationStatusMessage.textContent = '';
    verificationStatusMessage.className = '';
    resendContainer.style.display = 'none';
    if(verificationCodeInput) verificationCodeInput.value = '';
}

if (btnVerifyCode) {
    btnVerifyCode.addEventListener('click', () => {
        const code = verificationCodeInput.value.trim();
        
        if (code === '123456') {
            // Valid code
            let users = JSON.parse(localStorage.getItem("users")) || [];
            const userIndex = users.findIndex(u => u.email === currentEmailForVerification);
            
            if (userIndex !== -1) {
                users[userIndex].verified = true;
                
                // Record Login History
                users[userIndex].loginHistory = users[userIndex].loginHistory || [];
                users[userIndex].loginHistory.unshift({
                    date: new Date().toISOString(),
                    ip: '192.168.1.' + Math.floor(Math.random() * 255),
                    device: 'Web Browser (Chrome/Edge)'
                });
                if (users[userIndex].loginHistory.length > 10) users[userIndex].loginHistory.pop();

                localStorage.setItem("users", JSON.stringify(users));
                
                // Log user in
                localStorage.setItem("activeUser", JSON.stringify(users[userIndex]));
                
                verificationStatusMessage.textContent = '¡Código correcto! Cuenta verificada. Redirigiendo...';
                verificationStatusMessage.style.color = '#2ecc71';
                
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1500);
            }
        } else {
            // Invalid code
            verificationStatusMessage.textContent = 'Código incorrecto. Inténtalo de nuevo.';
            verificationStatusMessage.style.color = '#e74c3c';
        }
    });
}

if (btnResendEmail) {
    btnResendEmail.addEventListener('click', () => {
        // Simulate resending email
        const btn = btnResendEmail;
        const originalText = btn.textContent;
        btn.textContent = 'Enviando...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
            resendContainer.style.display = 'none';
            verificationStatusMessage.textContent = 'Nuevo código enviado. Por favor revisa tu bandeja.';
            verificationStatusMessage.style.color = '#3498db';
        }, 1500);
    });
}

// Close verification modal
if (modalVerification) {
    const closeBtn = modalVerification.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modalVerification.style.display = 'none';
        });
    }
    
    modalVerification.addEventListener('click', (e) => {
        if (e.target === modalVerification) {
            modalVerification.style.display = 'none';
        }
    });
}

function parseJwt(token) {
    const base64Url = token.split('.')[1]; // parte payload
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);

    // Decodificar el token
    const payload = parseJwt(response.credential);

    // payload contiene info del usuario: name, email, picture, etc.
    const googleUser = {
        name: payload.name,
        email: payload.email,
        verified: true,
        loginMethod: "google"
    };

    // Guardar usuario activo
    localStorage.setItem("activeUser", JSON.stringify(googleUser));

    // Mostrar mensaje
    showMessage('Inicio de sesión con Google exitoso', 'success');

    // Redirigir al dashboard
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 1500);
}



window.onload = function () {
    google.accounts.id.initialize({
        client_id: '404303874004-eutc2k9hkfijihef9nheri6enuc24j49.apps.googleusercontent.com',
        callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
        document.getElementById('google-signin-button'),
        {
            theme: 'outline',        // estilo del botón
            size: 'large',           // tamaño
            width: '100%',           // ocupa todo el ancho del contenedor
            type: 'standard',        // icono + texto
            shape: 'rectangular'     // forma rectangular
        }
    );
    google.accounts.id.prompt(); // Muestra el One Tap si es posible
};