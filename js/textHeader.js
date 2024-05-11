gsap.to(".main-banner", {
    opacity: 1,
    duration: 4,
    ease: "power4.inOut",
    delay: 2 // Retraso para la aparición gradual
});

window.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const textPosition = document.querySelector(".main-banner").getBoundingClientRect().top;

    // Si el texto está visible en la ventana gráfica
    if (textPosition < windowHeight / 2) {
        const opacity = 1 - (scrollPosition / windowHeight);
        gsap.to(".main-banner", {
            opacity: opacity,
            duration: 0.5 });
    } else {
        gsap.to(".main-banner", {
            opacity: 1,
            duration: 0.5 });
    }
});
