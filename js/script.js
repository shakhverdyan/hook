
import { calc } from "./count.js";
import { wishList } from "./count.js";
import { headerTop } from "./count.js";


const productSlider = document.querySelector('.product_slider');
const productSliderItem = document.querySelectorAll('.product_slider-item');
const dot = document.querySelectorAll('.dot');

wishList();
calc();
headerTop();

//слайдер на табах
let firstSlide = 1;

function hideSlide(slide) {
  productSliderItem.forEach((elem) => {
    elem.style.display = 'none';
  })
  dot.forEach((elem) => {
    elem.classList.remove('active');
  })
  productSliderItem[firstSlide - 1].style.display = 'block';
  dot[firstSlide - 1].classList.add('active');
}

hideSlide(1);

function showSlide(b) {
  hideSlide();
  productSliderItem[firstSlide - 1].style.display = 'none';
  dot[firstSlide - 1].classList.remove('active');
  productSliderItem[b].style.display = 'block';
  dot[b].classList.add('active');
}

productSlider.addEventListener('click', ((e) => {
  if (e.target.classList.contains('dot')) {
    for (let i = 0; i < dot.length; i++) {
      if (e.target == dot[i]) {
        showSlide(i)
      }
    }
  }
}))


// кнопка hide 
const btnMore = document.querySelector('.btn_more'),
  NutritionWrap = document.querySelector('.Nutrition_wrap');

let nutrition = NutritionWrap.closest('.Nutrition').children[0];

btnMore.addEventListener('click', () => {
  NutritionWrap.style.cssText = 'display:none; opacity:0;transition:all .5s;';

  nutrition.style = "cursor:pointer;";
})
nutrition.addEventListener('click', () => {
  NutritionWrap.style.cssText = 'display:block; opacity:1;transition:all .5s;';
})



























