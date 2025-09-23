// Fecha objetivo
const fechaBoda = new Date("2025-10-26T21:30:00").getTime();

function actualizarCuenta() {
    const ahora = new Date().getTime();
    const diferencia = fechaBoda - ahora;

    if (diferencia < 0) {
        // En este caso, el HTML para el contador se puede cambiar para mostrar un mensaje
        document.querySelector(".tiempo").innerHTML = "¡Hoy es el gran día! 💍";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Solo actualizamos el contenido de los span de los números
    document.getElementById("dias-numero").innerHTML = dias;
    document.getElementById("horas-numero").innerHTML = horas;
    document.getElementById("minutos-numero").innerHTML = minutos;
    document.getElementById("segundos-numero").innerHTML = segundos;
}

// Actualizar cada segundo
setInterval(actualizarCuenta, 1000);

// Llamar a la función una vez al principio para evitar el parpadeo inicial
actualizarCuenta();

// animaciones
document.addEventListener("DOMContentLoaded", function() {
    const elementosAnimar = document.querySelectorAll('.animar-al-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 // Se activa cuando el 20% del elemento es visible
    });

    elementosAnimar.forEach(elemento => {
        observer.observe(elemento);
    });
});