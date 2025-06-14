export function dropdown(){
  /*----dropdown----*/
const cancel_button = document.querySelector(".fa-xmark");
const drop_down = document.querySelector(".drop-down");
const menu = document.querySelector(".menu");
cancel_button.addEventListener('click', () => {
  drop_down.style.transform = "scaleX(0)"
})
menu.addEventListener('click', () => {
  drop_down.style.transform = "scaleX(1)"
})
}
dropdown()
