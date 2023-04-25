let  items = [
  {
    id: "discount",
    selectname: "select",
  },
]

const sectionCenters = document.querySelectorAll(".slide");
// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(items);
  select()
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    if (item.id === 'discount') {
    return ` <div class="discount-card">
      <div class="discount-card__header">
        <div class="percent">
        <img src="./images/discount/percent.png" alt="">
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
        <img class="discount-card__img" src="./images/discount/percent-coffe.png" alt="">
        <div class="discount-card__rating">
          <div class="dstar-rating">
            <div class="star">
              <img src="./images/discount/star-color.png" alt="" class="star__activ">
              <img src="./images/discount/star-color.png" alt="" class="star__activ">
              <img src="./images/discount/star-color.png" alt="" class="star__activ">
              <img src="./images/discount/star-color.png" alt="" class="star__activ">
              <img src="./images/discount/star.png" alt="">
            </div>
            <p><span>4.0</span>&nbsp(32 отзыва)</p>
          </div>
          <div class="dcoffe">
            <img src="./images/discount/coffe.png">
            <img src="./images/discount/coffe.png">
            <img src="./images/discount/coffe.png">
            <img src="./images/discount/coffe.png">
            <img src="./images/discount/coffe.png">
          </div>
            <div class="d-coffe__parameter1">
              <p>Кислинка</p>
              <div class="d-coffe__parameter1img">
                <img src="./images/discount/round-color.png">
                <img src="./images/discount/round-color.png">
                <img src="./images/discount/round-color.png">
                <img src="./images/discount/round-color.png">
                <img src="./images/discount/round-color.png">
                <img src="./images/discount/round-color.png">
                <img src="./images/discount/round-color.png">
                <img src="./images/discount/round.png">
                <img src="./images/discount/round.png">
                <img src="./images/discount/round.png">
              </div>
          </div>
          <div class="d-coffe__parameter2">
            <p>Горчинка</p>
            <div class="d-coffe__parameter2img">
              <img src="./images/discount/round-color.png">
              <img src="./images/discount/round-color.png">
              <img src="./images/discount/round-color.png">
              <img src="./images/discount/round-color.png">
              <img src="./images/discount/round-color.png">
              <img src="./images/discount/round-color.png">
              <img src="./images/discount/round-color.png">
              <img src="./images/discount/round.png">
              <img src="./images/discount/round.png">
              <img src="./images/discount/round.png">
            </div>
          </div>
          <div class="d-coffe__parameter3">
            <p>Насыщенность</p>
            <div class="d-coffe__parameter3img">
              <img src="./images/discount/round-color.png">
              <img src="./images/discount/round-color.png">
              <img src="./images/discount/round-color.png">
              <img src="./images/discount/round-color.png">
              <img src="./images/discount/round-color.png">
              <img src="./images/discount/round-color.png">
              <img src="./images/discount/round-color.png">
              <img src="./images/discount/round.png">
              <img src="./images/discount/round.png">
              <img src="./images/discount/round.png">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="discount-card__footer">
      <div class="discount-footer__content1">
        <h3>Colombia Supremo</h3>
        <p>Свежеобжаренный кофе - описание товара, вкус, аромат</p>
      </div>
      <div class="discount-footer__content2">
        <div class="discount-price">
          <p class="discount-price1">350₽</p>
          <p class="discount-price3">250₽</p>
        </div>
        <button class="discount-btn">В корзину</button>
      </div>
    </div>`
    }
  });
  displayMenu = displayMenu.join("");
  sectionCenters.forEach((sectionCenter) => 
  sectionCenter.innerHTML = displayMenu)
}
