gsap.registerPlugin(ScrollTrigger)

// gsap.to(".carrousel-drinking", {
//      ScrollTrigger:{
//         trigger: ".carrousel-drinking",
//         duration: 3,
//         x: -300,
//         repeat: -1,
//         pin: true,
//         start: "top center",
//         end: "bottom",
//         scrub: true
//      }
//     });


gsap.to(".carrousel-drinking", {
    scrollTrigger: {
      trigger: ".carrousel-drinking",
      start: "top 25%", // Inicia la animación cuando la parte superior del trigger llega al 50% del viewport
      end: "top 1%",   // Termina en el mismo punto
      scrub: 1,         // Hace que la animación siga suavemente el scroll, ajustando el tiempo de "scrub" para un efecto más suave
    },
    x: 1500,           // Reduce la distancia de movimiento para hacerla más sutil
    scale: 0.95,       // Escala ligeramente el elemento para añadir un efecto delicado
    ease: "none",      // Usa un easing lineal para una transición uniforme
    duration: 0.05        // Ajusta la duración para que la animación sea más lenta y suave
  });