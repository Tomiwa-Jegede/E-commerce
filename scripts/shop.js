import { dropdown } from "./index.js"
import { products } from "./product.js"
dropdown();

const productContainer = document.querySelector('.product-container');
let productHTML = '';
products.forEach(p => {
  productHTML += ` <div class="products">
        <img src=${p.img} alt="">
        Price:${p.price}
        <button class="add-to-cart">
          ADD TO CART
        </button>
      </div>`
})
productContainer.innerHTML = productHTML;