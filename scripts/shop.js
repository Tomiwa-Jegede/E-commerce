import { dropdown } from "./index.js"
import { products } from "./product.js"
dropdown();
const productContainer = document.querySelector('.product-container');

let productHTML = '';
products.forEach(p => {
  productHTML += ` <div class="products">
        <img src=${p.img} alt="">
        Price: &#8358;${p.price}
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
    if (isInCart) { isInCart.quantity += 1 }
    else {
      cart.push(productToAdd);
    }
    btn.textContent = "ADDED"
    btn.disable = true

    setTimeout(() => {
      btn.textContent = "ADD TO CART"
      btn.disable = true
    },700)
    localStorage.setItem('cart', JSON.stringify(cart))
  })
})
