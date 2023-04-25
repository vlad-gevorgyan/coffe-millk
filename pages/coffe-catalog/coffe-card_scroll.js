const hiddenElement1 = document.querySelector(".coffe-card_description");
const hiddenElement2 = document.querySelector(".coffe-card_howtocook");
const hiddenElement3 = document.querySelector(".coffe-card_additionally");
const hiddenElement4 = document.querySelector(".coffe-card_reviews");
const description = document.querySelector(".description")
const howToCook = document.querySelector(".how-to-cook")
const additionally = document.querySelector(".additionally")
const reviews = document.querySelector(".reviews")


description.addEventListener("click", function () {
  handleButtonClick(hiddenElement1)
})
howToCook.addEventListener("click", function () {
  handleButtonClick(hiddenElement2)
})
additionally.addEventListener("click", function () {
  handleButtonClick(hiddenElement3)
})
reviews.addEventListener("click", function () {
  handleButtonClick(hiddenElement4)
})

function handleButtonClick(item) {
   item.scrollIntoView({block: "start", behavior: "auto"});
}