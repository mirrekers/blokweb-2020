// var uitgeklapteMenu = document.querySelector("article");
// var menuKnop =document.getElementById("hamburgermenu");
// var closedMenu = document.getElementsByClassName("close")


// menuKnop.addEventListener("click",function(){
//   uitgeklapteMenu.classlist.add("visible")
// })

// closedMenu.addEventListener("click",function(){
//   uitgeklapteMenu.classlist.remove("visible")
// })

//hierboven zie je hoe ik het zelf had geprobeerd. en dan werkte niet. ik had hulp gevraagd
//en we zijn samen gekomen tot de conclusie dat toggle beter zou werken in deze situatie

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".hamburgermenu");


function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    // hamburgermenu.style.display = "none";
    // hamburgermenu.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    // hamburgermenu.style.display = "block";
    // hamburgermenu.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

