let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');
  let prices2 = document.querySelectorAll(".tea-price2")
  let prices1 = document.querySelectorAll(".tea-price1")
  let prices3 = document.querySelectorAll(".tea-price3")


  selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
      item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
      this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    let text = this.innerText,
        select = this.closest('.select'),
        currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');
    prices1.forEach (function(price1) {
      if(text === "100 г.") {
          price1.innerHTML = "350₽"
      } 
      if(text === "150 г.") {
          price1.innerHTML = "525₽"
      } 
      if(text === "165 г.") {
        price1.innerHTML = "577.5₽"
      } 
      if(text === "200 г.") {
        price1.innerHTML = "700₽"
      }  
    })
    prices2.forEach (function(price2) {
      if(text === "100 г.") {
        price2.innerHTML = "250₽"
      } 
      if(text === "150 г.") {
        price2.innerHTML = "375₽"
      } 
      if(text === "165 г.") {
        price2.innerHTML = "412.5₽"
      } 
      if(text === "200 г.") {
        price2.innerHTML = "500₽"
      } 
    })
    prices3.forEach (function(price3) {
      if(text === "100 г.") {
        price3.innerHTML = "250₽"
      } 
      if(text === "150 г.") {
        price3.innerHTML = "375₽"
      } 
      if(text === "165 г.") {
        price3.innerHTML = "412.5₽"
      } 
      if(text === "200 г.") {
        price3.innerHTML = "500₽"
      } 
    })
  }
};


select()