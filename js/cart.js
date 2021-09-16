import { calc } from "./count.js";
import { headerTop } from "./count.js";

calc();
headerTop();
// remove adress 
const btnRemoveAdress = document.querySelector('.btn-remove-adress');
const inputs = document.querySelectorAll('.adess_info input');

btnRemoveAdress.addEventListener('click', () => {
  document.querySelector('.adress_city').innerHTML = '';
  inputs.forEach((el) => {
    el.value = '';
    console.log(el);
  })
})

// promocode  
const paymentBlockInput = document.querySelector('.payment_block input');
const PromocodeSum = document.querySelector('.Promocode-sum span');
let code = 'GHYU907H';
let orderSum = document.querySelector('.order-sum span');
let totalSum = document.querySelector('.total-sum span');

paymentBlockInput.addEventListener('input', () => {

  if (paymentBlockInput.value.trim().toLocaleUpperCase() === code) {
    document.querySelector('.promo-ok').innerHTML = `
    <svg data-name='plus' class="icon" width="24px" height="24px">
     <use data-name='plus' href="img/image-svg.svg#promocode"></use>
     </svg>
    `;
    PromocodeSum.innerHTML = 0.4;
    totalSum.innerHTML = (+orderSum.innerText - parseFloat(PromocodeSum.innerHTML)).toFixed(2);
  }
  else {
    document.querySelector('.promo-ok').innerHTML = '';
  }
})







