import { vendorCart } from "./pricing.js";
/*------account Number Greneration-----*/
const account = document.querySelector('.account-page');
let accNum = "2049085596"
vendorCart.forEach(v => {
  let accountNumber = ""
  accountNumber += `  <div class="account-details">
      <div class="account-number"><span>Account Number:</span> ${accNum} <i class="fa-solid fa-clone"></i><div class="copied">Copied</div></div>
      <div class="account-name"><span>Account Name:</span> Tomiwa Jegede</div>
      <div class="account-name"><span>Bank:</span> Kuda</div>
      <div><span>Total:</span> &#8358;${v.price}</div>
      <button class="paid-btn">I HAVE PAID</button>
    </div>`
  if (account) { account.innerHTML = accountNumber }
})
/*---code to copy----*/
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
/*-----paid btn----*/
const paidBtn = document.querySelector('.paid-btn');
if (paidBtn) {
  paidBtn.addEventListener('click', () => {
    localStorage.removeItem('vendorCart')
    vendorCart.forEach((v) => {
      let phoneNumber = '2349166635320'
      let message = `*PLAN*\ni would like the ${v.name}\nTotal:${v.price}`;
      const EncodedMessage = encodeURIComponent(message)
      const whatsApp = `https://wa.me/${phoneNumber}?text=${EncodedMessage}`;
      window.open(whatsApp, '_blank')
    })
  })
}
vendorCart.forEach(v=>{
  console.log(v)
})

