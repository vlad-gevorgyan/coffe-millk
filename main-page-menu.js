const hamburger = document.querySelector('#hamburger-1');
const menuTop = document.querySelector('.menu-top');
hamburger.addEventListener('click', (event) => {
  event.preventDefault
  hamburger.classList.toggle('is-active')
  
  
  if (document.querySelector('.hamburger').classList.contains('is-active')) {
    var hiddenElement = document.querySelector(".catalog-block");
    const btn = document.querySelector("#top__list1");
    btn.addEventListener('click', handleButtonClick)
    function handleButtonClick() {
      hamburger.classList.remove('is-active')
      menuTop.style.display = "none"
      hamburger.classList.remove("hamburger-active")
      logo.classList.remove("logo-active")
      main.classList.remove('not-active_display')
      footer.classList.remove('not-active_display')
      menu.classList.remove("not-active_display")
      navbar.classList.remove("navbar-notactive")
      searchIcon3.classList.remove("not-active_display")
      searchIcon2.classList.remove("not-active_display")
      searchIcon1.classList.remove("not-active_display")
      hiddenElement.scrollIntoView({block: "center", behavior: "auto"});
    }
    menuTop.style.display = "block";
    hamburger.classList.add("hamburger-active")
    logo.classList.add("logo-active")
    main.classList.add('not-active_display')
    footer.classList.add('not-active_display')
    menu.classList.add("not-active_display")
    navbar.classList.add("navbar-notactive")
    searchIcon3.classList.add("not-active_display")
    searchIcon2.classList.add("not-active_display")
    searchIcon1.classList.add("not-active_display")
  } else {
    menuTop.style.display = "none"
    hamburger.classList.remove("hamburger-active")
    logo.classList.remove("logo-active")
    main.classList.remove('not-active_display')
    footer.classList.remove('not-active_display')
    menu.classList.remove("not-active_display")
    navbar.classList.remove("navbar-notactive")
    searchIcon3.classList.remove("not-active_display")
    searchIcon2.classList.remove("not-active_display")
    searchIcon1.classList.remove("not-active_display")
  }
  // if (document.querySelector('.hamburger').classList.contains('is-active') && ) {
    
  // }
})