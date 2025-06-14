export const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItems = document.querySelector(".cart-body");
let cartHTML = '';
let quantity = 1
cart.forEach(items => {
  cartHTML += `    <ul>
          <li class="cart-img-container"><img src=${items.img} alt=""></li>
          <li>${items.price}</li>
          <li><button class="sub-btn ">-</button><div class="quantity">${quantity}</div><button class="add-btn ">+</button></li>
          <li>${quantity * items.price}</li>
          <li><button id=${items.id} class="cancel"><i class="fa-solid fa-xmark"></i></buttonclass=></li>
        </ul>`
});
if (cartItems) { cartItems.innerHTML = cartHTML }