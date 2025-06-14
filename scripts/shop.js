import { dropdown } from "./index.js"
import { products } from "./product.js"
dropdown();
const productContainer = document.querySelector('.product-container');

let productHTML = '';
products.forEach(p => {
  productHTML += ` <div class="products">
        <img src=${p.img} alt="">
        Price:${p.price}
        <button id=${p.id} class="add-to-cart">
          ADD TO CART
        </button>
      </div>`
})
productContainer.innerHTML = productHTML;

/*---addToCart----*/
import { cart } from "./cart.js"
const addToCart = document.querySelectorAll('.add-to-cart');
addToCart.forEach(btn => {
  btn.addEventListener('click', () => {
    const productToAdd = products.find(product => product.id === btn.id);
    const isInCart = cart.find(itemInCart => itemInCart.id === productToAdd.id);
    if (isInCart) { console.log('items is already in the cart') }
    else { cart.push(productToAdd) }
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log(cart)
  })
})
