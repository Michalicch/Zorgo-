
/*
* МЕНЮ
*/
const openMenu = document.querySelector(".burger");
const menuUp = document.querySelector('.open-menu');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.open-menu-close');

/*Открытие меню после клика на бургер*/

openMenu.addEventListener("click", function(evt) {
  evt.preventDefault(); //отменяет все умолчания браузера
  menuUp.classList.add('open');
  overlay.classList.add('open');
  
});

/*Закрытие меню кликом на крестик*/

close.addEventListener ('click', function(){  
  overlay.classList.remove('open');
  menuUp.classList.remove("open");  
});

/*Закрытие меню кликом мимо меню*/

overlay.addEventListener ('click', function() {  
  overlay.classList.remove('open');
  menuUp.classList.remove("open");
  
});

/*Закрытие меню клавишей Esc*/

window.addEventListener ("keydown", function(evt){  
  if (evt.key === 'Escape') {
    if (menuUp.classList.contains("open")) {
      evt.preventDefault();
      overlay.classList.remove('open');
      menuUp.classList.remove("open"); 
    }
  }   
});

/*
*
* Слайдер
*
*/
// .certificates-slider