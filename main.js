// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate the ice cream sticks with a parallax effect
gsap.to("#icecream-almond", {
  y: 100,  // Move down by 100px
  scrollTrigger: {
    trigger: ".hero",  // The section triggering the scroll
    start: "top center",       // When the top of the hero section hits the center of the viewport
    scrub: true,               // Smooth scrolling effect
  }
});

gsap.to("#icecream-classic", {
  y: -20,  // Move up by 20px
  scrollTrigger: {
    trigger: ".hero",
    start: "top center",
    scrub: true,
  }
});

gsap.to("#icecream-white", {
  y: 150,  // Move down by 150px
  scrollTrigger: {
    trigger: ".hero",
    start: "top center",
    scrub: true,
  }
});

gsap.to("#icecream-classic2", {
  y: -50,  // Move up by 50px
  scrollTrigger: {
    trigger: ".slogan",
    start: "top center",
    scrub: true,
  }
});

gsap.to("#icecream-almond2", {
  y: 20,  // Move down by 20px
  scrollTrigger: {
    trigger: ".slogan",
    start: "top center",
    scrub: true,
  }
});
