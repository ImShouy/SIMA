const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
})

const enlaceSuave = document.getElementById('conocenos');
        enlaceSuave.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el salto directo de la página
        const seccion = document.getElementById('know-us');
        seccion.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
});

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

let intervalo = setInterval(() => {moveToRight();}, 5000);

btnLeft.addEventListener("click", () => {
    moveToLeft();
    clearInterval(intervalo);
    intervalo = setInterval(() => {moveToRight();}, 5000);
});

btnRight.addEventListener("click", () => {
    moveToRight();
    clearInterval(intervalo);
    intervalo = setInterval(() => {moveToRight();}, 5000);
});

let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
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

/*Rregister*/
const modal = document.getElementById('modal-unete');
const overlay = document.querySelector('.modal-overlay');
const openButtons = document.querySelectorAll('.navbar-button, .nav-button');
const closeModal = document.querySelector('.close-modal');
const formUnete = document.getElementById('form-unete');
const mensajeEnviado = document.getElementById('mensaje-enviado');

// Abrir modal
openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

// Cerrar modal
const cerrarModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

closeModal.addEventListener('click', cerrarModal);
overlay.addEventListener('click', cerrarModal);

// Envío del formulario
formUnete.addEventListener('submit', (e) => {
    e.preventDefault();
    formUnete.style.display = 'none';
    mensajeEnviado.style.display = 'block';

    setTimeout(() => {
        cerrarModal();
        formUnete.reset();
        formUnete.style.display = 'block';
        mensajeEnviado.style.display = 'none';
    }, 2500);
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

    