// GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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


//////////////////// MAGNUM STORIES ////////////////////

const carousel = document.querySelector(".carousel");

function scrollCarousel(e) {
  const rect = carousel.getBoundingClientRect();
  const x = e.clientX - rect.left; // Mouse X position within the carousel
  const scrollAmount = 100; // Amount to scroll on each mousemove
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;

  if (x < rect.width * 0.5) {
    // Scroll left when mouse is in the left 50% of the carousel
    carousel.scrollLeft = Math.max(0, carousel.scrollLeft - scrollAmount);
  } else if (x > rect.width * 0.5) {
    // Scroll right when mouse is in the right 50% of the carousel
    carousel.scrollLeft = Math.min(maxScroll, carousel.scrollLeft + scrollAmount);
  }
}

// Add event listener to scroll carousel based on mouse position
carousel.addEventListener("mousemove", scrollCarousel);

// Optional: Reset scroll when mouse leaves the carousel (this is up to your preference)
carousel.addEventListener("mouseleave", () => {
  gsap.to(carousel, { scrollLeft: 0, duration: 0.5 });
});

// Animate overlay on hover
document.querySelectorAll('.story').forEach(story => {
  story.addEventListener('mouseenter', () => {
    gsap.to(story.querySelector('.overlay'), { opacity: 1, duration: 0.3, ease: "power1.inOut" });
  });

  story.addEventListener('mouseleave', () => {
    gsap.to(story.querySelector('.overlay'), { opacity: 0, duration: 0.3, ease: "power1.inOut" });
  });
});
