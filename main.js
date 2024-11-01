// GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

//////////////////// NAVIGATION FLIPPING EFFECT ////////////////////

// Select all nav link spans
const navLinks = document.querySelectorAll("nav ul li a span");

navLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, {
      duration: 0.4,
      rotationX: 360, // Flips the text 360 degrees
      ease: "back.out(1.7)"
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(link, {
      duration: 0.4,
      rotationX: 0, // Resets the rotation
      ease: "back.out(1.7)"
    });
  });
});

//////////////////// ICE CREAM STICKS ////////////////////

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

//////////////////// SCROLLING EFFECT FOR EACH SECTION ////////////////////

// Define the animation for text elements within each section
gsap.utils.toArray("section, .banner, .socials-section, footer").forEach(section => {
  // Select text elements within the section
  gsap.from(section.querySelectorAll("h1, h2, p"), {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    stagger: 0.5,  // Adds a staggered delay for each text element
    scrollTrigger: {
      trigger: section,
      start: "top 80%",  // Adjust this to control when the animation starts
      toggleActions: "play none none reverse"
    }
  });
});

gsap.utils.toArray("section").forEach(section => {
  // Select text elements within the section
  gsap.from(section.querySelectorAll(".ice-cream-images img, .story img"), {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,  // Adds a staggered delay for each text element
    scrollTrigger: {
      trigger: section,
      start: "top 80%",  // Adjust this to control when the animation starts
      toggleActions: "play none none reverse"
    }
  });
});