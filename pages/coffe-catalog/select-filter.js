function selectFilter () {
let cross = document.querySelector('.select-filter__icon');
let filter = document.querySelector('.filter');
let selectFilter = document.querySelector('.select-filter');
let selectItem = document.querySelectorAll('.select-filter__item');
let modalWindow = document.querySelector('.modal-window');


filter.addEventListener("click", function () {
    modalWindow.classList.add("is-active");
    selectFilter.classList.add("is-active");
})

cross.addEventListener("click", function () {
    selectFilter.classList.remove("is-active")
    modalWindow.classList.remove("is-active")
})



selectItem.forEach(item => {
item.addEventListener('click', selectChoose)
});

function selectChoose() {
let text = this.innerText,
select = this.closest('.select-filter'),
currentText = select.querySelector('.select-filter__current');
currentText.innerText = text;
select.classList.remove('is-active');
modalWindow.classList.remove("is-active");
}

}
selectFilter ()