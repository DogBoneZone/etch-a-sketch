// Global Variables
let gridSize = 16;
let paintColor = '#000000';
const colorPicker = document.querySelector("#colorPicker");
const randomColor = document.querySelector("#random");
const clearAllButton = document.querySelector("#clearAll");

// Painting Function
const paintFunc = () => {
    document.querySelectorAll(".square").forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = paintColor;
        })
    })
};

// Create grid
const createGrid = (size) => {
    console.log(gridSize);
    for (let i=1; i <= (gridSize*gridSize); i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        square.style.height = `${(600/gridSize)}px`;
        square.style.width = `${(600/gridSize)}px`;
        square.style.background = "white";
        container.appendChild(square);

        paintFunc();
    }
};

// Create squares in grid
const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);
const containerDiv = document.querySelector("#container");
createGrid(gridSize);

const removeChildNodes = (parent) => {
    containerDiv.innerHTML = '';
};

// Clear All Button
clearAllButton.addEventListener("click", () => {
    let gridInquiry = prompt("Select a grid size up to 100");
    if (gridInquiry > 100) {
        window.alert("Please enter a number from 1-100");
    } else {
        gridSize = Number(gridInquiry);
    }

    removeChildNodes(containerDiv);
    
    createGrid(gridSize);
});

// Paint Color Changer
colorPicker.addEventListener("change", (event) => {
    paintColor = event.target.value;
});

randomColor.addEventListener("click", () => {
    let randomRGB = Math.random() * 360;
    paintColor = `hsl(${randomRGB}, 100%, 50%)`;
});
