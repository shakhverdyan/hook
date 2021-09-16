export function calc() {
  const addToCart = document.querySelectorAll('.add_to_cart');

  addToCart.forEach((i) => { //перебираем  add to cart
    let countNum = 0;
    let countElem = document.createElement('div');
    countElem.classList.add('count');

    let countElemSpan = document.createElement('span');
    let addCart = i.closest('.add_to_cart');

    i.addEventListener('click', (event) => {
      event.target.closest('.add_to_cart').querySelector('.add').classList.add('hide'); // прячем блок add
      i.querySelector('.del').style.display = "block"; // показываем блок del

      addCart.insertAdjacentElement('afterbegin', countElem);
      countElem.appendChild(countElemSpan);

      let currentPrice = event.target.closest('.godsItem').querySelector('.godsItemPrice span');
      let sumOneGoods = event.target.closest('.wrap').querySelector('.curentSum');
      let sumFoOneProduct = +sumOneGoods.innerText;

      if (event.target.dataset.name === 'plus') { //работаем с кнопкой плюс
        countNum++;
        countElemSpan.innerHTML = countNum;
        currentPrice.innerText = (sumFoOneProduct * countNum).toFixed(2);
      }

      if (event.target.dataset.name === 'del') { // работам с кнопкой минус
        countNum--;
        if (countNum < 1) {
          i.querySelector('.del').style.display = "none";
          event.target.closest('.add_to_cart').querySelector('.add').classList.remove('hide');
          countElem.remove();
        }
        countElemSpan.innerHTML = countNum;
        currentPrice.innerText = (currentPrice.innerText - sumFoOneProduct).toFixed(2);

      }

      function total() { // ввод информации в блок тотал с общей суммой
        let AllCostroduct = document.querySelectorAll('.godsItemPrice span');
        let orderSum = document.querySelector('.order-sum span');
        let totalSum = document.querySelector('.total-sum span');
        let deliverySum = document.querySelector('.delivery-sum span').innerText;
        const PromocodeSum = document.querySelector('.Promocode-sum span').innerText;
        const sequent = document.querySelector('.sequent');
        let r = 0;

        for (let ite of AllCostroduct) {
          let y = +ite.innerText;
          r += y;
        }
        orderSum.innerText = r.toFixed(2);
        totalSum.innerHTML = (+orderSum.innerText + parseFloat(deliverySum) - parseFloat(PromocodeSum)).toFixed(2);
        sequent.innerText = totalSum.innerText;
      }
      total();

    })

  })

}

export function wishList() {
  // добавить в лист желаний
  let favorites = document.querySelectorAll('.favorite');

  favorites.forEach((el) => {
    el.addEventListener('click', () => {
      console.log('dsf');
      el.classList.toggle('favorite-active')
    })
  })

}