let toggleBtnNav= document.querySelector(".main-nav__toggle");
let navMenu= document.querySelector(".main-nav");


toggleBtnNav.onclick= function() {
 if (navMenu.classList.contains("main-nav--closen")) {
  navMenu.classList.remove("main-nav--closen");
  navMenu.classList.add("main-nav--open");
  toggleBtnNav.classList.remove("main-nav__toggle--closen");
  toggleBtnNav.classList.add("main-nav__toggle--open");


 } else {
  navMenu.classList.remove("main-nav--open");
  navMenu.classList.add("main-nav--closen");
  toggleBtnNav.classList.remove("main-nav__toggle--open");
  toggleBtnNav.classList.add("main-nav__toggle--closen");
 }
}


