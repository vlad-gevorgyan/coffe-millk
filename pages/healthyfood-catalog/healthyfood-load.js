const list = [
  {
    id: "discount",
    selectname: "select1",
    img: "healthyfoodpage-images/healthyfood-selection/card-img-1.png",
    name: "Цикорий и корень цикория"
  },
  {
    id: "ordinary",
    selectname: "select2",
    img: "healthyfoodpage-images/healthyfood-selection/card-img-1.png",
    name: "Цикорий и корень цикория"
  },
  {
    id: "discount",
    selectname: "select3",
    img: "healthyfoodpage-images/healthyfood-selection/card-img-1.png",
    name: "Ячменные напитки"
  },
  {
    id: "ordinary",
    selectname: "select4",
    img: "healthyfoodpage-images/healthyfood-selection/card-img-1.png",
    name: "Ячменные напитки"
  },
  {
    id: "discount",
    selectname: "select5",
    img: "healthyfoodpage-images/healthyfood-selection/card-img-1.png",
    name: "Напитки для здоровья"
  },
  {
    id: "ordinary",
    selectname: "select6",
    img: "healthyfoodpage-images/healthyfood-selection/card-img-1.png",
    name: "Напитки для здоровья"
  },
  {
    id: "discount",
    selectname: "select7",
    img: "healthyfoodpage-images/healthyfood-selection/card-img-1.png",
    name: "Протеиновые смеси"
  },
  {
    id: "ordinary",
    selectname: "select8",
    img: "healthyfoodpage-images/healthyfood-selection/card-img-1.png",
    name: "Протеиновые смеси"
  },
  {
    id: "discount",
    selectname: "select9",
    img: "healthyfoodpage-images/healthyfood-selection/card-img-1.png",
    name: "Толокняные каши"
  },
  {
    id: "ordinary",
    selectname: "select10",
    img: "healthyfoodpage-images/healthyfood-selection/card-img-1.png",
    name: "Толокняные каши"
  },
]

const sectionCenter = document.querySelector(".healthyfood-list");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(list);
  select()
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    if (item.id === "discount") {
      return `<div class="healthyfood-card">
      <div class="healthyfood-card_content">
        <div class="healthyfood-card__header">
          <div class="healthyfood-star_rating">
            <div class="star">
              <img src="./healthyfoodpage-images/discount/star-color.png" alt="" class="star__activ">
              <img src="./healthyfoodpage-images/discount/star-color.png" alt="" class="star__activ">
              <img src="./healthyfoodpage-images/discount/star-color.png" alt="" class="star__activ">
              <img src="./healthyfoodpage-images/discount/star-color.png" alt="" class="star__activ">
              <img src="./healthyfoodpage-images/discount/star.png" alt="">
            </div>
            <p><span>4.0</span>&nbsp(32 отзыва)</p>
          </div>
          <select id="${item.selectname}">
            <option value="100">100 г.</option>
            <option value="150">150 г.</option>
            <option value="165">165 г.</option>
            <option value="200">200 г.</option>
            <option value="500">500 г.</option>
            <option value="1000">1000 г.</option>
          </select>
        </div>
        <div class="healthyfood-card_img">
          <img class="healthyfood-card_image" src=${item.img}>
          <div class="percent">
            <img src="./healthyfoodpage-images/discount/percent.png" alt="">
          </div>
        </div>    
        <div class="healthyfood-card__footer">
          <div class="healthyfood-footer__content1">
            <h3>Наименование товара</h3>
            <p>${item.name}</p>
          </div>
          <div class="healthyfood-footer__content2">
            <div class="healthyfood-price">
              <div class="healthyfood-price1">350₽</div>
              <div class="healthyfood-price3">250₽</div>
            </div>
            <button class="healthyfood-btn">В корзину</button>
          </div>
        </div>
      </div>  
    </div>`
    }
    if (item.id === "ordinary") {
      return `<div class="healthyfood-card">
      <div class="healthyfood-card_content">
        <div class="healthyfood-card__header">
          <div class="healthyfood-star_rating">
            <div class="star">
              <img src="./healthyfoodpage-images/discount/star-color.png" alt="" class="star__activ">
              <img src="./healthyfoodpage-images/discount/star-color.png" alt="" class="star__activ">
              <img src="./healthyfoodpage-images/discount/star-color.png" alt="" class="star__activ">
              <img src="./healthyfoodpage-images/discount/star-color.png" alt="" class="star__activ">
              <img src="./healthyfoodpage-images/discount/star.png" alt="">
            </div>
            <p><span>4.0</span>&nbsp(32 отзыва)</p>
          </div>
          <select id="${item.selectname}">
            <option value="100">100 г.</option>
            <option value="150">150 г.</option>
            <option value="165">165 г.</option>
            <option value="200">200 г.</option>
            <option value="500">500 г.</option>
            <option value="1000">1000 г.</option>
          </select>
        </div>
        <div class="healthyfood-card_img">
          <img class="healthyfood-card_image" src=${item.img}>
        </div>    
        <div class="healthyfood-card__footer">
          <div class="healthyfood-footer__content1">
            <h3>Наименование товара</h3>
            <p>${item.name}</p>
          </div>
          <div class="healthyfood-footer__content2">
            <div class="healthyfood-price">
              <p class="healthyfood-price3" style="margin-top: 0">250₽</p>
            </div>
            <button class="healthyfood-btn">В корзину</button>
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
const btnMore = document.querySelector('.healthyfood-btn_more')

btnMore.addEventListener("click", function () {
  addItem(list)
  displayMenuItems(list)
  select()
});

function addItem (arr) {
  arr.push(  
    {
      id: "ordinary",
      selectname: "select11",
      img: "healthyfoodpage-images/healthyfood-selection/card-img-1.png",
      name: "Цикорий и корень цикория"
    },
    {
      id: "discount",
      selectname: "select12",
      img: "healthyfoodpage-images/healthyfood-selection/card-img-1.png",
      name: "Ячменные напитки"
    },
    {
      id: "ordinary",
      selectname: "select13",
      img: "healthyfoodpage-images/healthyfood-selection/card-img-1.png",
      name: "Ячменные напитки"
    },
    {
      id: "discount",
      selectname: "select14",
      img: "healthyfoodpage-images/healthyfood-selection/card-img-1.png",
      name: "Напитки для здоровья"
    },
    {
      id: "ordinary",
      selectname: "select15",
      img: "healthyfoodpage-images/healthyfood-selection/card-img-1.png",
      name: "Напитки для здоровья"
    },
    {
      id: "discount",
      selectname: "select16",
      img: "healthyfoodpage-images/healthyfood-selection/card-img-1.png",
      name: "Протеиновые смеси"
    },
    {
      id: "ordinary",
      selectname: "select17",
      img: "healthyfoodpage-images/healthyfood-selection/card-img-1.png",
      name: "Протеиновые смеси"
    },
    {
      id: "discount",
      selectname: "select18",
      img: "healthyfoodpage-images/healthyfood-selection/card-img-1.png",
      name: "Толокняные каши"
    },
    {
      id: "ordinary",
      selectname: "selectselect19",
      img: "healthyfoodpage-images/healthyfood-selection/card-img-SELECT1.png",
      name: "Толокняные каши"
    },)
}


