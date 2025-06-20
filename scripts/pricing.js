const drop_down = document.querySelector(".drop-down");
export function dropdown() {
  /*----dropdown----*/
  const cancel_button = document.querySelector(".fa-xmark");
  const menu = document.querySelector(".menu");
  cancel_button.addEventListener('click', () => {
    drop_down.style.transform = "scaleX(0)"
  })
  menu.addEventListener('click', () => {
    drop_down.style.transform = "scaleX(1)"
  })
}
if (drop_down) { dropdown() }

/*------paid plan-----*/
export const buyPlanBtn = document.querySelectorAll('.buy-plans');
const freePlanBtn = document.querySelector('.free-plan');
import { vendorPlans } from "./product.js";
if (freePlanBtn) {
  freePlanBtn.addEventListener('click', () => {
    const plan = vendorPlans.find(v => v.id === freePlanBtn.id)
    if (plan) {
      vendorPlans.forEach(v => {
        let phoneNumber = '2349166635320'
        let message = `*PLAN*\ni would like the ${v.name}\nTotal:${v.price}`;
        const EncodedMessage = encodeURIComponent(message)
        const whatsApp = `https://wa.me/${phoneNumber}?text=${EncodedMessage}`;
        window.open(whatsApp, '_blank')
      })
    }
  })
}
const savedData = JSON.parse(localStorage.getItem('vendorCart'))
export let vendorCart = savedData || [];
buyPlanBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const vendor = vendorPlans.find(v => v.id === btn.id)
    if (vendor) { vendorCart.push(vendor) }
    localStorage.setItem('vendorCart', JSON.stringify(vendorCart))
  })
});
console.log(vendorCart)

