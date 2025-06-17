const shopCategories = document.querySelector('.shop-categories');
import { categoriesContainer } from './categoriesContainer.js'
import { cartCounter } from "./shop.js"
import { cart } from "./cart.js"
let categories = ''
categoriesContainer.forEach(c => {
  categories += `  <a href="${c.link}">
      <div class="category-container">
        <div class="categories-img">
          <img src=${c.img}>
        </div>
        <div class="category-name">${c.name}</div>
      </div>
    </a>`
});
shopCategories.innerHTML = categories

/*----Cart Counter----*/
cartCounter.textContent = cart.length
if (cart.length === 0) { cartCounter.style.display = 'none' }
else {
  cartCounter.style.display = 'flex'
}
/*--------check if user went back to this page----*/
window.addEventListener('pageshow', (e) => {
  let backward=performance.getEntriesByType('navigation')[0].type==='back-forward';
  if(e.persisted||backward){window.location.reload()};
})