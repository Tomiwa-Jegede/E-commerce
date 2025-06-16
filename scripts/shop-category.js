const shopCategories = document.querySelector('.shop-categories');
import { categoriesContainer } from './categoriesContainer.js'
let categories = ''
categoriesContainer.forEach(c => {
  categories += `  <a href="${c.link}">
      <div class="category-container">
        <div class="categories-img">
          <img src=${c.img}>
        </div>
        <div>${c.name}</div>
      </div>
    </a>`
});
shopCategories.innerHTML = categories