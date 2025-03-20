const imagenes = [
    "img/Mchina.jpg", "img/AñoN.png", "img/Te.png", "img/gastronomia1.jpg",
    "img/callejera.jpg", "img/innovacion.jpg", "img/GTecn.jpg", "img/IA.jpg"
];

let indiceActual = 0;
const imagenCarrusel = document.getElementById("imagen-carrusel");

function cambiarImagen(direccion) {
    indiceActual += direccion;

    // Si llegamos al final, volver al inicio
    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }
    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    }

    imagenCarrusel.src = imagenes[indiceActual];
}


document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar los cuadros
    const culturaBtn = document.getElementById("cultura");
    if (culturaBtn) {
        culturaBtn.addEventListener("click", () => {
            window.location.href = "cultura.html";
        });
    }

    const gastronomiaBtn = document.getElementById("gastronomia");
    if (gastronomiaBtn) {
        gastronomiaBtn.addEventListener("click", () => {
            window.location.href = "gastronomia.html";
        });
    }

    const impactoBtn = document.getElementById("impacto");
    if (impactoBtn) {
        impactoBtn.addEventListener("click", () => {
            window.location.href = "carrera.html";
        });
    }

    // Código para las tarjetas
    const cards = document.querySelectorAll('.card');
    if (cards.length > 0){
        cards.forEach(card => {
            card.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        });
    }
});
