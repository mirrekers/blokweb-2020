var uitgeklapteMenu = document.getElementsByClassName("ham-b-menu");
var nav = document.querySelector("nav");
var menuKnop =document.getElementById("hamburgermenu");
var closedMenu = document.getElementsByClassName("close")

menuKnop.addEventListener("click",function(){
  uitgeklapteMenu.classlist.add("visible")
})

closedMenu.addEventListener("click",function(){
  uitgeklapteMenu.classlist.add("gone")
})

