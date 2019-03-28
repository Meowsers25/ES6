import { Animal } from "./Animal";

let cat = new Animal("Cat", 4);
console.log(cat.type);
console.log(cat.legs);

let area = document.getElementById("try");
area.innerHTML = cat.legs;
