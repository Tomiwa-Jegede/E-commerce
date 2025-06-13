/*----heroSection----*/
const cancel_button = document.querySelector(".fa-xmark");
const drop_down = document.querySelector(".drop-down");
const menu = document.querySelector(".menu");
const show_more_button = document.querySelector(".show-more")
cancel_button.addEventListener('click', () => {
  drop_down.style.transform = "scaleX(0)"
})
menu.addEventListener('click', () => {
  drop_down.style.transform = "scaleX(1)"
})

