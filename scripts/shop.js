import { dropdown } from "./index.js"
import { products } from "./product.js"
dropdown();
const productContainer = document.querySelector('.product-container');
export const cartCounter = document.querySelector('.counter')
let productHTML = '';
products.forEach(p => {
  productHTML += ` <div class="products">
        <div class="image-container"><img src=${p.img} alt=""></div>
        <div><span>${p.name}</span></div>
        <div><span>&#8358;${p.price}</span></div>
        <div><span>${p.location}</span></div>
        <button id=${p.id} class="add-to-cart">
          ADD TO CART
        </button>
      </div>`
})
if(productContainer){productContainer.innerHTML = productHTML;}

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
    cartCounter.innerHTML = cart.length
    btn.textContent = "ADDED"
    btn.disable = true

    setTimeout(() => {
      btn.textContent = "ADD TO CART"
      btn.disable = true
    }, 700)
    localStorage.setItem('cart', JSON.stringify(cart))
    if (cart.length === 1) { location.reload() }
  })
})
/*----Cart Counter----*/
cartCounter.textContent = cart.length
if (cart.length === 0) { cartCounter.style.display = 'none' }
else {
  cartCounter.style.display = 'flex'
}

