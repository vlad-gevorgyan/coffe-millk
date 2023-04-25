let  items = [
  {
    id: "ordinary",
    comment: "Я был очень доволен своей покупкой кофе на этом сайте! Они имеют широкий ассортимент кофе и быструю доставку. Кофе был свежим и ароматным, и я уже заказал свою следующую партию!",
    url: "./coffepage-images/coffe-card/review-people.png",
    name: "Наташа",
    city: "Орехово-Зуево"
  },
  {
    id: "ordinary",
    comment: "Этот сайт - мой новый любимый магазин для покупки кофе! Я нашел здесь свой любимый бренд кофе, и цены были ниже, чем в других магазинах.Быстрая доставка и отличный сервис клиентов!",
    url: "./coffepage-images/coffe-card/review-people.png",
    name: "Кирил",
    city: "Ликино-Дулева"
  },
  {
    id: "ordinary",
    comment:"Отличный кофе! Очень понравился аромат и вкус, действительно качественный продукт.Доставка была быстрой и удобной. Упаковка кофе была надежно запакована и пришла в целости и сохранности.",
    url: "./coffepage-images/coffe-card/review-people.png",
    name: "Василй",
    city: "Воронеж"
  },
]

const sectionCenter = document.querySelector(".reviews_containers");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(items);
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    if (item.id === 'ordinary') {
      return `<div class="reviews_container">
      <div class="reviews-container1">
        <img src="./coffepage-images/coffe-card/reviews-icon.png" class="reviews-icon">
        <div class="review-name_date">
          <h4>Отличный вкус!</h4>
          <p>21.12.2020</p>
        </div>
        <div class="reviev-rating">
          <div class="star">
            <img src="./coffepage-images/discount/star-color.png" alt="" class="star__activ">
            <img src="./coffepage-images/discount/star-color.png" alt="" class="star__activ">
            <img src="./coffepage-images/discount/star-color.png" alt="" class="star__activ">
            <img src="./coffepage-images/discount/star-color.png" alt="" class="star__activ">
            <img src="./coffepage-images/discount/star.png" alt="">
          </div>
        </div>
        <div class="review-comment">
          <p>${item.comment}</p>
        </div>
      </div>  
      <div class="reviews-container2">
        <div class="reviews-people">
          <img src="${item.url}" class="review-people_img">
          <div class="review-people_info">
            <h4>${item.name}</h4>
            <p>г. ${item.city}</p>
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
const btnMore = document.querySelector('.coffe-card-btn_more')

btnMore.addEventListener("click", function () {
  addItem(items)
  displayMenuItems(items)
});

function addItem (arr) {
  arr.push(
    {
      id: "ordinary",
      comment: "Этот кофе превзошел все мои ожидания! Он имеет отличный баланс между кислотностью и горечью, идеально подходит для любителей американо или капучино.",
      url: "./coffepage-images/coffe-card/review-people.png",
      name: "Артем",
      city: "Новосибирск"
    },
    {
      id: "ordinary",
      comment: "Отличный кофе! Очень понравился его глубокий и насыщенный вкус, прекрасно подходит для утреннего пробуждения.",
      url: "./coffepage-images/coffe-card/review-people.png",
      name: "Саша",
      city: "Москва"
    },
    {
      id: "ordinary",
      comment:"Отличный выбор для ценителей кофе! Рекомендую всем, кто ищет качественный и вкусный напиток.",
      url: "./coffepage-images/coffe-card/review-people.png",
      name: "Маша",
      city: "Брянск"
    },
  );
}