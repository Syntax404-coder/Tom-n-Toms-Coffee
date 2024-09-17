(function (){
  let menuBtn = document.querySelector("[data-js=menu_btn]")
  menuBtn.addEventListener("click", function () {
      let menuMobile = document.querySelector("[data-js=menu_mobile]");
      let menuMobileIcon = document.querySelector("[data-js=menu_btn_icon]");
      menuBtn.classList.toggle("clicked");
      menuMobile.classList.toggle("show"); 
      menuMobileIcon.classList.toggle("rotate");
  })
})();