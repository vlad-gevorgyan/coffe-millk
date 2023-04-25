const list = [
  {
    id: "discount",
    selectname: "select1",
    img: "teapage-images/tea-selection/card-img-1.png",
    name: "Черный чай"
  },
  {
    id: "ordinary",
    selectname: "select2",
    img: "teapage-images/tea-selection/card-img-1.png",
    name: "Черный чай"
  },
  {
    id: "discount",
    selectname: "select3",
    img: "teapage-images/tea-selection/card-img-2.png",
    name: "Зеленый чай"
  },
  {
    id: "ordinary",
    selectname: "select4",
    img: "teapage-images/tea-selection/card-img-2.png",
    name: "Зеленый чай"
  },
  {
    id: "discount",
    selectname: "select5",
    img: "teapage-images/tea-selection/card-img-3.png",
    name: "Молочный улунг"
  },
  {
    id: "ordinary",
    selectname: "select6",
    img: "teapage-images/tea-selection/card-img-3.png",
    name: "Молочный улунг"
  },
  {
    id: "discount",
    selectname: "select7",
    img: "teapage-images/tea-selection/card-img-1.png",
    name: "Травяной чай"
  },
  {
    id: "ordinary",
    selectname: "select8",
    img: "teapage-images/tea-selection/card-img-1.png",
    name: "Травяной чай"
  },
  {
    id: "discount",
    selectname: "select9",
    img: "teapage-images/tea-selection/card-img-2.png",
    name: "Матча"
  },
  {
    id: "ordinary",
    selectname: "select10",
    img: "teapage-images/tea-selection/card-img-2.png",
    name: "Матча"
  },
  {
    id: "discount",
    selectname: "select11",
    img: "teapage-images/tea-selection/card-img-3.png",
    name: "Пуэр"
  },
  {
    id: "ordinary",
    selectname: "select12",
    img: "teapage-images/tea-selection/card-img-3.png",
    name: "Пуэр"
  },
  {
    id: "discount",
    selectname: "select13",
    img: "teapage-images/tea-selection/card-img-4.png",
    name: "Кофейные напитки"
  },
  {
    id: "ordinary",
    selectname: "select14",
    img: "teapage-images/tea-selection/card-img-4.png",
    name: "Кофейные напитки"
  },
]

const sectionCenter = document.querySelector(".tea-list");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(list);
  select()
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    if (item.id === "discount") {
      return `<div class="tea-card">
      <div class="tea-card_content">
        <div class="tea-card__header">
          <div class="tea-star_rating">
            <div class="star">
              <img src="./teapage-images/discount/star-color.png" alt="" class="star__activ">
              <img src="./teapage-images/discount/star-color.png" alt="" class="star__activ">
              <img src="./teapage-images/discount/star-color.png" alt="" class="star__activ">
              <img src="./teapage-images/discount/star-color.png" alt="" class="star__activ">
              <img src="./teapage-images/discount/star.png" alt="">
            </div>
            <p><span>4.0</span>&nbsp(32 отзыва)</p>
          </div>
          <select id="${item.selectname}">
            <option value="100">100 г.</option>
            <option value="150">150 г.</option>
            <option value="165">165 г.</option>
            <option value="200">200 г.</option>
          </select>
        </div>
        <div class="tea-card_img">
          <img class="tea-card_image" src=${item.img}>
          <div class="percent">
            <img src="./teapage-images/discount/percent.png" alt="">
          </div>
        </div>    
        <div class="tea-card__footer">
          <div class="tea-footer__content1">
            <h3>Наименование товара</h3>
            <p>${item.name}</p>
          </div>
          <div class="tea-footer__content2">
            <div class="tea-price">
              <p class="tea-price1">350₽</p>
              <p class="tea-price3">250₽</p>
            </div>
            <button class="tea-btn">В корзину</button>
          </div>
        </div>
      </div>  
    </div>`
    }
    if (item.id === "ordinary") {
      return `<div class="tea-card">
      <div class="tea-card_content">
        <div class="tea-card__header">
          <div class="tea-star_rating">
            <div class="star">
              <img src="./teapage-images/discount/star-color.png" alt="" class="star__activ">
              <img src="./teapage-images/discount/star-color.png" alt="" class="star__activ">
              <img src="./teapage-images/discount/star-color.png" alt="" class="star__activ">
              <img src="./teapage-images/discount/star-color.png" alt="" class="star__activ">
              <img src="./teapage-images/discount/star.png" alt="">
            </div>
            <p><span>4.0</span>&nbsp(32 отзыва)</p>
          </div>
          <select id="${item.selectname}">
            <option value="100">100 г.</option>
            <option value="150">150 г.</option>
            <option value="165">165 г.</option>
            <option value="200">200 г.</option>
          </select>
        </div>
        <div class="tea-card_img">
          <img class="tea-card_image" src=${item.img}>
        </div>    
        <div class="tea-card__footer">
          <div class="tea-footer__content1">
            <h3>Наименование товара</h3>
            <p>${item.name}</p>
          </div>
          <div class="tea-footer__content2">
            <div class="tea-price">
              <p class="tea-price3">250₽</p>
            </div>
            <button class="tea-btn">В корзину</button>
          </div>
        </div>
      </div>  
    </div>`
    }
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}


// btn 
const btnMore = document.querySelector('.tea-btn_more')

btnMore.addEventListener("click", function () {
  addItem(list)
  displayMenuItems(list)
  select()
});

function addItem (arr) {
  arr.push(  {
    id: "discount",
    selectname: "select15",
    img: "teapage-images/tea-selection/card-img-1.png",
    name: "Черный чай"
  },
  {
    id: "ordinary",
    selectname: "select16",
    img: "teapage-images/tea-selection/card-img-1.png",
    name: "Черный чай"
  },
  {
    id: "discount",
    selectname: "select17",
    img: "teapage-images/tea-selection/card-img-2.png",
    name: "Зеленый чай"
  },
  {
    id: "ordinary",
    selectname: "select18",
    img: "teapage-images/tea-selection/card-img-2.png",
    name: "Зеленый чай"
  },
  {
    id: "discount",
    selectname: "select19",
    img: "teapage-images/tea-selection/card-img-3.png",
    name: "Молочный улунг"
  },
  {
    id: "ordinary",
    selectname: "select20",
    img: "teapage-images/tea-selection/card-img-3.png",
    name: "Молочный улунг"
  },
  {
    id: "discount",
    selectname: "select21",
    img: "teapage-images/tea-selection/card-img-1.png",
    name: "Травяной чайг"
  },
  {
    id: "ordinary",
    selectname: "select22",
    img: "teapage-images/tea-selection/card-img-1.png",
    name: "Травяной чай"
  },
  {
    id: "discount",
    selectname: "select23",
    img: "teapage-images/tea-selection/card-img-2.png",
    name: "Матча"
  },
  {
    id: "ordinary",
    selectname: "select24",
    img: "teapage-images/tea-selection/card-img-2.png",
    name: "Матча"
  },
  {
    id: "discount",
    selectname: "select25",
    img: "teapage-images/tea-selection/card-img-3.png",
    name: "Пуэр"
  },
  {
    id: "ordinary",
    selectname: "select26",
    img: "teapage-images/tea-selection/card-img-3.png",
    name: "Пуэр"
  },
  {
    id: "discount",
    selectname: "select27",
    img: "teapage-images/tea-selection/card-img-4.png",
    name: "Кофейные напитки"
  },
  {
    id: "ordinary",
    selectname: "select28",
    img: "teapage-images/tea-selection/card-img-4.png",
    name: "Кофейные напитки"
  },);
}