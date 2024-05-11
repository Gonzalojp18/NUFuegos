
document.addEventListener('DOMContentLoaded', function () {


    let tlHeader = gsap.timeline({defaults: {duration: 1}});


    tlHeader.from(".typing-text", {
    autoAlpha: 0,
    ease: 'power1.out',
    x: -50,
});

tlHeader.from(".image-section img",{
    autoAlpha: 0,
    x: 50,
    stagger: 0.3,
})

tlHeader.from(".image-section img", {
    stagger: 1,
    ease: 'linear',
    duration:.2,
    scrollTrigger: {
        trigger: ".image-section img",
        start: "top top",
        end: "bottom",
        scrub: true
    }
})

// function startScrollAnimation() {
//     gsap.to(".main-banner", {
//         scrollTrigger: {
//             trigger: ".main-banner",
//             start: "top top",
//             end: "bottom top",
//             scrub: true
//         },
//         autoAlpha: 1,
//         ease: "none"
//     });
// }



} );

