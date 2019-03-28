import Animal from "./animal.js";

let cat = new Animal("Cat", 4);
console.log(cat.type);

let area = document.getElementById("try");
area.innerHTML = cat.legs;
