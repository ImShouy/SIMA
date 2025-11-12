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

const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const slider = document.querySelector('#slider');
const sliderSection = document.querySelectorAll('.slider-section');

intervalo = setInterval(() => {moveToRight();}, 5000);

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