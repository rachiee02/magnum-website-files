// Store images as variables
let classicImg = document.querySelector("#classic");
let minisImg = document.querySelector("#minis");
let doublesImg = document.querySelector("#doubles");
let duetsImg = document.querySelector("#duets");
let veganImg = document.querySelector("#vegan");

// Store list items as variables
let classicItem = document.querySelector("#classic-item");
let minisItem = document.querySelector("#minis-item");
let doublesItem = document.querySelector("#doubles-item");
let duetsItem = document.querySelector("#duets-item");
let veganItem = document.querySelector("#vegan-item");

// Function to hide all images except Classic to display
function hideAllImages() {
    classicImg.classList.remove("active");
    minisImg.classList.remove("active");
    doublesImg.classList.remove("active");
    duetsImg.classList.remove("active");
    veganImg.classList.remove("active");
}

// Add event listeners to each list item to show the corresponding image on hover
classicItem.addEventListener("mouseenter", () => {
    hideAllImages();
    classicImg.classList.add("active");
});

minisItem.addEventListener("mouseenter", () => {
    hideAllImages();
    minisImg.classList.add("active");
});

doublesItem.addEventListener("mouseenter", () => {
    hideAllImages();
    doublesImg.classList.add("active");
});

duetsItem.addEventListener("mouseenter", () => {
    hideAllImages();
    duetsImg.classList.add("active");
});

veganItem.addEventListener("mouseenter", () => {
    hideAllImages();
    veganImg.classList.add("active");
});

// Restore Classic image when mouse leaves the list
document.querySelector(".flavours").addEventListener("mouseleave", () => {
    hideAllImages();
    classicImg.classList.add("active");
});
