const show_more_button = document.querySelector(".show-more");
const shop = document.querySelector('.shop');
show_more_button.addEventListener('click', () => {
  show_more_button.style.display = 'none';
  shop.classList.add('no-before')
  shop.style.overflow = 'visible'
})
