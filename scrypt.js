let openBtnModal= document.querySelector(".main-nav__toggle ");
let modalContainer= document.querySelector(".main-nav");
let  closeBtnModal= document.querySelector(".main-nav__toggle ");

openBtnModal.onclick= function() {
  modalContainer.classList.remove("main-nav--closen")
}

closeBtnModal.onclick= function() {
  modalContainer.classList.add("main-nav--closen")
}

