// Get all the elements we think we need
const openModalTriggerEl = document.querySelector(".trigger");
const closeModalTriggerEl = document.querySelector(".close");
const modalEl = document.querySelector(".modal");

function main() {
  openModalTriggerEl.addEventListener("click", function() {
    modalEl.classList.add("open")
  })

  closeModalTriggerEl.addEventListener("click", function() {
    modalEl.classList.remove("open");
  })
  
}

main();