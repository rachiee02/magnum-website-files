// GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

//////////////////// MAGNUM STORIES ////////////////////

const carousel = document.querySelector(".carousel");
let scrollSpeed = 0;
let animationFrame;

// Function to continuously scroll the carousel
function continuousScroll() {
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  
  // Update scroll position and ensure it doesn't exceed bounds
  carousel.scrollLeft = Math.min(Math.max(0, carousel.scrollLeft + scrollSpeed), maxScroll);
  
  // Only continue the animation if scroll speed is non-zero
  if (scrollSpeed !== 0) {
    animationFrame = requestAnimationFrame(continuousScroll);
  }
}

// Function to calculate and update scroll speed based on mouse position
function updateScrollSpeed(e) {
  const rect = carousel.getBoundingClientRect();
  const x = e.clientX - rect.left; // Mouse X position within the carousel
  
  const edgeThreshold = rect.width * 0.5; // 50% of the carousel width for faster sensitivity
  const maxSpeed = 200; // Maximum scroll speed for faster movement
  
  if (x < edgeThreshold) {
    // Mouse is near the left edge
    scrollSpeed = -maxSpeed * (1 - x / edgeThreshold);
  } else if (x > rect.width - edgeThreshold) {
    // Mouse is near the right edge
    scrollSpeed = maxSpeed * ((x - (rect.width - edgeThreshold)) / edgeThreshold);
  } else {
    // Mouse is in the center area, no scrolling
    scrollSpeed = 0;
  }
  
  // Start continuous scroll if it's not already running
  if (!animationFrame && scrollSpeed !== 0) {
    animationFrame = requestAnimationFrame(continuousScroll);
  }
}

// Stop scrolling when the mouse leaves the carousel area
function stopScroll() {
  scrollSpeed = 0;
  cancelAnimationFrame(animationFrame);
  animationFrame = null;
}

// Event listeners for mouse movement and leaving the carousel
carousel.addEventListener("mousemove", updateScrollSpeed);
carousel.addEventListener("mouseleave", stopScroll);

// Animate overlay on hover
document.querySelectorAll('.story').forEach(story => {
  story.addEventListener('mouseenter', () => {
    gsap.to(story.querySelector('.overlay'), { opacity: 1, duration: 0.3, ease: "power1.inOut" });
  });

  story.addEventListener('mouseleave', () => {
    gsap.to(story.querySelector('.overlay'), { opacity: 0, duration: 0.3, ease: "power1.inOut" });
  });
});
