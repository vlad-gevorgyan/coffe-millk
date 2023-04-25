const list = [
  {
    id: "1",
    name: "Гранулированный кофе"
  },
  {
    id: "2",
    name: "Гранулированный цикорий"
  },
  {
    id: "3",
    name: "Зерновой кофе"
  },
  {
    id: "4",
    name: "Гранулированный какао"
  },
  {
    id: "5",
    name: "Гранулированные кофейные напитки"
  },
  {
    id: "6",
    name: "Кофе порошкообразный"
  },
  {
    id: "7",
    name: "Сухое молоко гранулированное"
  },
]

const sectionCenter = document.querySelector(".vending-list");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(list);
  select()
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
      return `<div class="vending-card">
      <div class="vending-card_content">
        <div class="vending-card__header">
          <div class="vending-star_rating">
            <div class="star">
              <img src="./vendingpage-images/discount/star-color.png" alt="" class="star__activ">
              <img src="./vendingpage-images/discount/star-color.png" alt="" class="star__activ">
              <img src="./vendingpage-images/discount/star-color.png" alt="" class="star__activ">
              <img src="./vendingpage-images/discount/star-color.png" alt="" class="star__activ">
              <img src="./vendingpage-images/discount/star.png" alt="">
            </div>
            <p><span>4.0</span>&nbsp(32 отзыва)</p>
          </div>
          <div class="select">
            <div class="select__header">
              <span class="select__current">10 кг.</span>
              <div class="select__icon"><i class="fa-solid fa-chevron-down"></i></div>
            </div>
            <div class="select__body">
              <div class="select__item">10 кг.</div>
              <div class="select__item">18 кг.</div>
              <div class="select__item">25 кг.</div>
              <div class="select__item">30 кг.</div>
              <div class="select__item">33 кг.</div>
            </div>
          </div>
        </div>
        <div class="vending-card_img">
          <img class="vending-card_image" src="./vendingpage-images/vending-selection/card-img-1.png">
        </div>    
        <div class="vending-card__footer">
          <div class="vending-footer__content1">
            <h3>Наименование товара</h3>
            <p>${item.name}</p>
          </div>
          <div class="vending-footer__content2">
            <button class="vending-btn">Оставить заявку</button>
          </div>
        </div>
      </div>  
    </div>`
    });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}


// btn 
const btnMore = document.querySelector('.vending-btn_more')

btnMore.addEventListener("click", function () {
  addItem(list)
  displayMenuItems(list)
});

function addItem (arr) {
  arr.push(  {
    id: "1",
    name: "Гранулированный кофе"
  },
  {
    id: "2",
    name: "Гранулированный цикорий"
  },
  {
    id: "3",
    name: "Зерновой кофе"
  },
  {
    id: "4",
    name: "Гранулированный какао"
  },
  {
    id: "5",
    name: "Гранулированные кофейные напитки"
  },
  {
    id: "6",
    name: "Кофе порошкообразный"
  },
  {
    id: "7",
    name: "Сухое молоко гранулированное"
  },);
}