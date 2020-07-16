// Grab references to various HTML elements
const hamburgerEl = document.querySelector(".hamburger");
const navEl = document.querySelector("nav");
const contentEl = document.querySelector(".content");
const hamburgerBarsEl = document.querySelectorAll("span");

// Write a function to toggle the off-canvas menu
function toggleNav() {
  // Add click event to hamburger icon
  hamburgerEl.addEventListener("click", function() {
    navEl.classList.toggle("open")
    contentEl.classList.toggle("shift")
    animate();
  })
}

// Write a separate function that animates the hamburger bars
function animate() {
  // Loop through the spans (hamburger bars) and add the .change class
  for (let bar of hamburgerBarsEl) {
    console.log(bar);
    bar.classList.toggle("change")
  }
}

toggleNav();