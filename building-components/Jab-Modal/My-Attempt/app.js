// Setup DOM references
const triggerModalEl = document.querySelector(".trigger")
const closeModalEl = document.querySelector(".close")
const modalEl = document.querySelector(".modal")

function main() {
  // eventListener for opening the modal via trigger button
  triggerModalEl.addEventListener("click", function() {
    modalEl.classList.add("open")
  })

  // eventListener for closing the modal via closeEl click
  closeModalEl.addEventListener("click", function() {
    modalEl.classList.remove("open");
  })

  // eventListener for closing the modal via window click
  window.addEventListener("click", function(event) {
    if (event.target === modalEl) {
      modalEl.classList.remove("open")
    }
  })
}

main()