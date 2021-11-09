var uitgeklapteMenu = document.querySelector("article");
var menuKnop =document.getElementById("hamburgermenu");
var closedMenu = document.getElementsByClassName("close")


menuKnop.addEventListener("click",function(){
  uitgeklapteMenu.classlist.add("visible")
})

closedMenu.addEventListener("click",function(){
  uitgeklapteMenu.classlist.remove("visible")
})

