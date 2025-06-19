export const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItems = document.querySelector(".cart-body");
const orderSummary = document.querySelector('.order-summary')
let cartHTML = '';
cart.forEach(items => {
  cartHTML += `    <ul>
          <li class="cart-img-container"><img src=${items.img} alt=""></li>
          <li>&#8358;${items.price}</li>
          <li><button id=${items.id} class="sub-btn ">-</button><div class="quantity">${items.quantity}</div><button id=${items.id} class="add-btn ">+</button></li>
          <li>&#8358;${items.quantity * items.price}</li>
          <li><button id=${items.id} class="remove-btn"><i class="fa-solid fa-xmark"></i></buttonclass=></li>
        </ul>`
});
if (cartItems) {
  cartItems.innerHTML = cartHTML;
}
/*----code to remove items from the cart-----*/
const removeBtn = document.querySelectorAll('.remove-btn');
removeBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const btnToRemove = cart.findIndex(itemToRemove => btn.id === itemToRemove.id)
    if (btnToRemove !== -1) { cart.splice(btnToRemove, 1) }
    localStorage.setItem('cart', JSON.stringify(cart))
    location.reload()
  })
})
if (cartItems) { emptyCart() }
function emptyCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="empty-cart">Your Cart Is Empty</div>';
    orderSummary.style.display = "none"
  }
}
/*----add and sub quantity----*/
const addBtn = document.querySelectorAll('.add-btn');
const subBtn = document.querySelectorAll('.sub-btn');
import { products } from "./product.js"

addBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const productToAdd = products.find(p => p.id === btn.id)
    const isInCart = cart.find(itemInCart => itemInCart.id === productToAdd.id)
    if (isInCart) { isInCart.quantity += 1 }
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload()
    console.log(cart)
  })

})
subBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const productToAdd = products.find(p => p.id === btn.id)
    const isInCart = cart.find(itemInCart => itemInCart.id === productToAdd.id)
    if (isInCart) { isInCart.quantity -= 1 }
    if (isInCart.quantity <= 1) { isInCart.quantity = 1 }
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload()
    console.log(cart)
  })
})


let orderSummaryHTML = "";
let subTotal = 0;
cart.forEach(item => {
  subTotal += item.quantity * item.price;
})
/*-----generation of order summary-----*/
orderSummaryHTML += `  <nav>Order Summary</nav>
      <div class="checkout-container">
        <div class="total-container">
          <div><span>Sub-Total:</span> &#8358;${subTotal}</div>
          <div><span>Shipping:</span> Pickup ONLY</div>
        </div>
        <div class="calc-total">
          <span>Total:</span> &#8358;${subTotal}
        </div>
      </div>
     <a href="account.html" target="_blank"> <button class="checkout-btn">
        CHECKOUT
      </button></a>`
if (orderSummary) { orderSummary.innerHTML = orderSummaryHTML }
/*------account Number Greneration-----*/
const account = document.querySelector('.account-page');
let accountNumber = ""
let accNum = "2049085596"
accountNumber += `  <div class="account-details">
      <div class="account-number"><span>Account Number:</span> ${accNum} <i class="fa-solid fa-clone"></i><div class="copied">Copied</div></div>
      <div class="account-name"><span>Account Name:</span> Tomiwa Jegede</div>
      <div class="account-name"><span>Bank:</span> Kuda</div>
      <div><span>Total:</span> &#8358;${subTotal}</div>
      <button class="paid-btn">I HAVE PAID</button>
    </div>`
if (account) { account.innerHTML = accountNumber }
/*-----checkout Btn-----*/
const paidBtn = document.querySelector('.paid-btn');
const phoneNumber = '2349166635320'
const total = cart.reduce((sum, item) => {
  return sum + (item.quantity * item.price)
}, 0)
if (paidBtn) {
  paidBtn.addEventListener('click', () => {
    localStorage.removeItem('cart')
    let message = '*Your order*:\n'
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x${item.quantity} - ₦${item.quantity * item.price}\n `
    })
    const EncodedMessage = encodeURIComponent(message + 'Total=₦' + total)
    const whatsApp = `https://wa.me/${phoneNumber}?text=${EncodedMessage}`;
    window.open(whatsApp, '_blank')
  })
}
/*------Copy To Clip-Board----*/
const copy = document.querySelector('.account-details div i');
const copied = document.querySelector('.copied')
if (copy) {
  copy.addEventListener('click', () => {
    const copiedAccountNumber = navigator.clipboard.writeText(accNum);
    copiedAccountNumber
      .then(() => {
        copied.style.opacity = '.8'
        setTimeout(() => {
          copied.style.opacity = '0'
        }, 2000)
      })
      .catch(() => {
        copied.textContent = 'Failed to copy'
      })
  })
}
/*----check if it went back or not-----*/
window.addEventListener('pageshow', e => {
  const backward = performance.getEntriesByType('navigation').type === 'back-forward';
  if (e.persisted || backward) {location.reload()}
})