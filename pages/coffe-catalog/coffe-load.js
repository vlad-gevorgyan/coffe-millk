let  items = [
  {
    id: "discount",
    selectname: "select1",
  },
  {
    id: "ordinary",
    selectname: "select2",
  },
  {
    id: "discount",
    selectname: "select3",
  },
  {
    id: "ordinary",
    selectname: "select4",
  },
  {
    id: "discount",
    selectname: "select5",
  },
  {
    id: "ordinary",
    selectname: "select6",
  },
  {
    id: "discount",
    selectname: "select7",
  },
  {
    id: "ordinary",
    selectname: "select8",
  },
  {
    id: "discount",
    selectname: "select9",
  },
  {
    id: "ordinary",
    selectname: "select10",
  },
]

const sectionCenter = document.querySelector(".card-list");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(items);
  select()
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    if (item.id === 'discount') {
    return `<div class="discount-card">
      <div class="discount-card__header">
        <div class="percent">
          <img src="./coffepage-images/discount/percent.png" alt="">
        </div>
        <select id="${item.selectname}">
          <option value="250">250 г.</option>
          <option value="1000">1000 г.</option>
        </select>
      </div>
      <div class="discount-card__content">
        <div class="card__content__header">
          <h3>Скидки</h3>
        </div>
        <div class="discount-card__content1">
          <a href="./coffe-card.html" style="text-decoration: none;color:black;"><img class="discount-card__img" src="./coffepage-images/discount/percent-coffe.png" alt=""></a>
          <div class="discount-card__rating">
            <div class="dstar-rating">
              <div class="star">
                <img src="./coffepage-images/discount/star-color.png" alt="" class="star__activ">
                <img src="./coffepage-images/discount/star-color.png" alt="" class="star__activ">
                <img src="./coffepage-images/discount/star-color.png" alt="" class="star__activ">
                <img src="./coffepage-images/discount/star-color.png" alt="" class="star__activ">
                <img src="./coffepage-images/discount/star.png" alt="">
              </div>
              <p><span>4.0</span>&nbsp(32 отзыва)</p>
            </div>
            <div class="dcoffe">
              <img src="./coffepage-images/discount/coffe.png">
              <img src="./coffepage-images/discount/coffe.png">
              <img src="./coffepage-images/discount/coffe.png">
              <img src="./coffepage-images/discount/coffe.png">
              <img src="./coffepage-images/discount/coffe.png">
            </div>
              <div class="d-coffe__parameter1">
                <p>Кислинка</p>
                <div class="d-coffe__parameter1img">
                  <img src="./coffepage-images/discount/round-color.png">
                  <img src="./coffepage-images/discount/round-color.png">
                  <img src="./coffepage-images/discount/round-color.png">
                  <img src="./coffepage-images/discount/round-color.png">
                  <img src="./coffepage-images/discount/round-color.png">
                  <img src="./coffepage-images/discount/round-color.png">
                  <img src="./coffepage-images/discount/round-color.png">
                  <img src="./coffepage-images/discount/round.png">
                  <img src="./coffepage-images/discount/round.png">
                  <img src="./coffepage-images/discount/round.png">
                </div>
            </div>
            <div class="d-coffe__parameter2">
              <p>Горчинка</p>
              <div class="d-coffe__parameter2img">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round.png">
                <img src="./coffepage-images/discount/round.png">
                <img src="./coffepage-images/discount/round.png">
              </div>
            </div>
            <div class="d-coffe__parameter3">
              <p>Насыщенность</p>
              <div class="d-coffe__parameter3img">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round.png">
                <img src="./coffepage-images/discount/round.png">
                <img src="./coffepage-images/discount/round.png">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="discount-card__footer">
        <div class="discount-footer__content1">
          <h3><a href="./coffe-card.html" style="text-decoration: none;color:black;">Colombia Supremo</a></h3>
          <p>Свежеобжаренный кофе - описание товара, вкус, аромат</p>
        </div>
        <div class="discount-footer__content2">
          <div class="discount-price">
            <p class="discount-price1">350₽</p>
            <p class="discount-price3">250₽</p>
          </div>
          <button class="discount-btn">В корзину</button>
        </div>
      </div>
    </div>`
    }
    if (item.id === 'ordinary') {
      return `<div class="discount-card">
      <div class="discount-card__header" ">
        <div class="card__content__title">
          <h4>Популярное</h4>
          <h4>Новый урожай</h4>
        </div>
        <select id="${item.selectname}">
          <option value="250">250 г.</option>
          <option value="1000">1000 г.</option>
        </select>
      </div>
      <div class="discount-card__content">
        <div class="discount-card__content1">
          <a href="./coffe-card.html" style="text-decoration: none;color:black;"><img class="discount-card__img" src="./coffepage-images/discount/percent-coffe.png" alt=""></a>
          <div class="discount-card__rating">
            <div class="dstar-rating">
              <div class="star">
                <img src="./coffepage-images/discount/star-color.png" alt="" class="star__activ">
                <img src="./coffepage-images/discount/star-color.png" alt="" class="star__activ">
                <img src="./coffepage-images/discount/star-color.png" alt="" class="star__activ">
                <img src="./coffepage-images/discount/star-color.png" alt="" class="star__activ">
                <img src="./coffepage-images/discount/star.png" alt="">
              </div>
              <p><span>4.0</span>&nbsp(32 отзыва)</p>
            </div>
            <div class="dcoffe">
              <img src="./coffepage-images/discount/coffe.png">
              <img src="./coffepage-images/discount/coffe.png">
              <img src="./coffepage-images/discount/coffe.png">
              <img src="./coffepage-images/discount/coffe.png">
              <img src="./coffepage-images/discount/coffe.png">
            </div>
              <div class="d-coffe__parameter1">
                <p>Кислинка</p>
                <div class="d-coffe__parameter1img">
                  <img src="./coffepage-images/discount/round-color.png">
                  <img src="./coffepage-images/discount/round-color.png">
                  <img src="./coffepage-images/discount/round-color.png">
                  <img src="./coffepage-images/discount/round-color.png">
                  <img src="./coffepage-images/discount/round-color.png">
                  <img src="./coffepage-images/discount/round-color.png">
                  <img src="./coffepage-images/discount/round-color.png">
                  <img src="./coffepage-images/discount/round.png">
                  <img src="./coffepage-images/discount/round.png">
                  <img src="./coffepage-images/discount/round.png">
                </div>
            </div>
            <div class="d-coffe__parameter2">
              <p>Горчинка</p>
              <div class="d-coffe__parameter2img">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round.png">
                <img src="./coffepage-images/discount/round.png">
                <img src="./coffepage-images/discount/round.png">
              </div>
            </div>
            <div class="d-coffe__parameter3">
              <p>Насыщенность</p>
              <div class="d-coffe__parameter3img">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round-color.png">
                <img src="./coffepage-images/discount/round.png">
                <img src="./coffepage-images/discount/round.png">
                <img src="./coffepage-images/discount/round.png">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="discount-card__footer">
        <div class="discount-footer__content1">
          <h3><a href="./coffe-card.html" style="text-decoration: none;color:black;">Colombia Supremo</a></h3>
          <p>Свежеобжаренный кофе - описание товара, вкус, аромат</p>
        </div>
        <div class="discount-footer__content2">
          <div class="discount-price">
            <p class="discount-price3" style="margin-top: calc(var(--margin) * 4.5);">250₽</p>
          </div>
          <button class="discount-btn">В корзину</button>
        </div>
      </div>
    </div>`
    }
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}


// btn 
const btnMore = document.querySelector('.coffe-btn_more')

btnMore.addEventListener("click", function () {
  addItem(items)
  displayMenuItems(items)
  select()
});

function addItem (arr) {
  arr.push(
    {
      id: "ordinary",
      selectname: "select11",
    },
    {
      id: "discount",
      selectname: "select12",
    },
    {
      id: "ordinary",
      selectname: "select13",
    },
    {
      id: "discount",
      selectname: "select14",
    },
    {
      id: "ordinary",
      selectname: "select15",
    },
    {
      id: "discount",
      selectname: "select16",
    },
    {
      id: "ordinary",
      selectname: "select17",
    },
    {
      id: "discount",
      selectname: "select18",
    },
    {
      id: "ordinary",
      selectname: "selectselect19",
    },
  );
}