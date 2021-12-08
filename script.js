// Global Variables
let gridSize = 16;
let paintColor = '#000000';
const paintZone = document.querySelector("#paintZone");
const colorPicker = document.querySelector("#colorPicker");
const randomColor = document.querySelector("#random");
const rainbowColor = document.querySelector("#rainbow");
const clearAllButton = document.querySelector("#clearAll");
const header = document.querySelector("header");
let colorMode;

// Create Grid Size Label
let gridSizeLabel = document.createElement("div");
gridSizeLabel.setAttribute("id", "gridSizeLabel");
gridSizeLabel.style.fontSize = "large";
gridSizeLabel.textContent = `${gridSize} x ${gridSize}`;
header.appendChild(gridSizeLabel);

// Painting Function
const paintFunc = () => {
    document.querySelectorAll(".square").forEach(item => {
    item.addEventListener("mouseover", () => {
        if (colorMode === "rainbow") {
            randomColorFunc();
        }
        item.style.backgroundColor = paintColor;
        })
    })
};

// Create grid squares
const createGrid = (size) => {
    gridDiv.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridDiv.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i=1; i <= (size*size); i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        square.style.background = "white";
        grid.appendChild(square);
    }
        updateGridSizeLabel(gridSize);
        paintFunc();
};

// Create grid grid
const grid = document.createElement("div");
grid.setAttribute("id", "grid");
paintZone.appendChild(grid);
const gridDiv = document.querySelector("#grid");
createGrid(gridSize);

const removeChildNodes = (parent) => {
    parent.innerHTML = '';
};

// Clear All Button
clearAllButton.addEventListener("click", () => {
    let gridInquiry = prompt("Select a grid size up to 64");
    if (gridInquiry > 64||gridInquiry < 1) {
        window.alert("Please enter a number from 1-64");
    } else {
        gridSize = Number(gridInquiry);
    }

    removeChildNodes(gridDiv);
    
    createGrid(gridSize);
});

// Paint Color Changers
colorPicker.addEventListener("change", (event) => {
    colorMode = "";
    paintColor = event.target.value;
});

randomColor.addEventListener("click", () => {
    colorMode = "";
    randomColorFunc();
});

rainbowColor.addEventListener("click", () => {
    colorMode = "rainbow";
});

function randomColorFunc() {
    paintColor = `hsl(${Math.random() * 360}, ${Math.random() * 100}%, 50%)`;
};

function updateGridSizeLabel(newSize) {
    gridSizeLabel.textContent = `${newSize} x ${newSize}`;
}
