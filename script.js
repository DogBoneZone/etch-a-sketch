// Create square grid
let body = document.querySelector('body');
let container = document.createElement("div");
container.setAttribute("id", "container");
body.appendChild(container);

// Create individual squares for grid
const square = document.createElement("div");
square.setAttribute("class", "square");

let gridSize = 16;

for (let i=1; i <= gridSize; i++) {
    container.appendChild(square);
}