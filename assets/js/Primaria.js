window.sr = ScrollReveal();

// Configura el efecto de movimiento para los elementos
sr.reveal('.left-text-content', {
    duration: 800, // Duración de la animación en milisegundos
    origin: 'left', // Origen del efecto (izquierda)
    distance: '100px', // Distancia desde la que aparece el elemento
    easing: 'linear', // Tipo de efecto de movimiento
    viewFactor: 0.5, // Porcentaje de visibilidad para activar el efecto
    reset: true // Reveal de nuevo los elementos al desplazarse hacia arriba
});

// Configura el segundo efecto de movimiento
sr.reveal('.left-text-content', {
    duration: 800,
    origin: 'right',
    distance: '100px',
    easing: 'linear',
    viewFactor: 0.5,
    reset: true
});
