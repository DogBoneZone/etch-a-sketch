// Create square grid
const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);

// Create individual squares for grid
let gridSize = 16;

for (let i=1; i <= gridSize; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.style.background = "white";
    container.appendChild(square);
}