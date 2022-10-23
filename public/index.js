


let burgerIcon = document.getElementById("burger");
let menu = document.getElementById("menu");

// toggle showing the menu when we click on the burger icon using old js lol
// burgerIcon.onclick = function(){
//     menu.classList.toggle("hidden");
// }

// using modern js (arrow function and addEventListener)
burgerIcon.addEventListener("click", () => menu.classList.toggle("hidden"))

