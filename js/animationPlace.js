gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.gallery-img').forEach(image => {
    gsap.fromTo(image,
        { scale: 0.95 }, // Un poco más pequeña inicialmente
        {
            scale: 1.01, // Escala normal
            scrollTrigger: {
                trigger: image,
                start: "top bottom", // Inicia la animación cuando la parte superior de la imagen llega al final de la ventana
                end: "bottom top",
                scrub: true, // Suaviza el efecto con el scroll
                toggleActions: "restart pause reverse pause"
            }
        }
    );
});
