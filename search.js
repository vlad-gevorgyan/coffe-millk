const searchIcon3 = document.querySelector(".nav-icon3")
const searchIcon2 = document.querySelector(".nav-icon2")
const searchIcon1 = document.querySelector(".nav-icon1")
const logo = document.querySelector(".logo")
const menu = document.querySelector(".menu")
const searchContent = document.querySelector(".search-content")
const navbar = document.querySelector(".navbar")
const closeSearch = document.querySelector(".close-search")
const main = document.querySelector(".main")
const footer = document.querySelector(".footer")
function search() {
  if(document.documentElement.clientWidth > 769) {
    searchIcon3.addEventListener('click', () => {
      searchIcon3.classList.add("not-active_display")
      searchContent.classList.add("active_display")
      navbar.classList.add("navbar_active")
      menu.classList.add("not-active_display")})
    searchContent.addEventListener("keypress", function(event) {
      if(event.key === "Enter") {
        searchIcon3.classList.remove("not-active_display")
        searchContent.classList.remove("active_display")
        navbar.classList.remove("navbar_active")
        menu.classList.remove("not-active_display")
      }})
  
  } else {
    searchIcon3.addEventListener('click', () => {
      searchIcon3.classList.add("not-active_display")
      searchIcon2.classList.add("not-active_display")
      searchIcon1.classList.add("not-active_display")
      logo.classList.add("not-active_display")
      hamburger.classList.add("not-active_display")
      menu.classList.add("not-active_display")
      searchContent.classList.add("active_display")
      closeSearch.classList.add("active_display")
      navbar.classList.add("navbar_active")
      main.classList.add('not-active_display')
      footer.classList.add('not-active_display')
    })
    
    
    closeSearch.addEventListener('click', () => {
      searchIcon3.classList.remove("not-active_display")
      searchIcon2.classList.remove("not-active_display")
      searchIcon1.classList.remove("not-active_display")
      logo.classList.remove("not-active_display")
      hamburger.classList.remove("not-active_display")
      menu.classList.remove("not-active_display")
      searchContent.classList.remove("active_display")
      navbar.classList.remove("navbar_active")
      main.classList.remove('not-active_display')
      footer.classList.remove('not-active_display')
    })
  }
};

search()
