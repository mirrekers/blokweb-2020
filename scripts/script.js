var nav = document.querySelector("nav");
var menuKnop =document.getElementById("hamburgermenu");
var closedMenu = document.getElementsByClassName("close")

menuKnop.addEventListener("click",function(){
  nav.classlist.add("visible")
})

closedMenu.addEventListener("click",function(){
  nav.classlist.remove("visible")
})

