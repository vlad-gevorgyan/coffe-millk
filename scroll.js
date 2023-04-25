const hiddenElement = document.querySelector(".catalog-block");
const btns = document.querySelectorAll("#menu__list1");
const firstScreenBtn = document.querySelector(".first-screen__btn")

btns.forEach( btn => {
  btn.addEventListener('click', function () {
    handleButtonClick(hiddenElement)})
})

firstScreenBtn.addEventListener("click", function () {
  handleButtonClick(hiddenElement)
})

function handleButtonClick(item) {
   item.scrollIntoView({block: "start", behavior: "auto"});
}
