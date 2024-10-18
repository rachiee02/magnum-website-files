// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate the ice cream sticks with a parallax effect
gsap.to("#icecream-almond", {
  y: 100,  // Move down by 100px
  scrollTrigger: {
    trigger: ".hero-section",  // The section triggering the scroll
    start: "top center",       // When the top of the hero section hits the center of the viewport
    scrub: true,               // Smooth scrolling effect
  }
});

gsap.to("#icecream-classic", {
  y: -100,  // Move up by 100px
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top center",
    scrub: true,
  }
});

gsap.to("#icecream-white", {
  y: 150,  // Move down by 150px
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top center",
    scrub: true,
  }
});

