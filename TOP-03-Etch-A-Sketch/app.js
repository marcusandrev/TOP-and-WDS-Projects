const container = document.querySelector('.grid');
const cell = document.getElementsByClassName("cell");
const resetButton = document.querySelector(".reset");
const colorButton = document.querySelector(".color-buttons");
const currentColor = document.querySelector("#colorSelection");
const smallButton = document.querySelector(".small-size");
const mediumButton = document.querySelector(".medium-size");
const bigButton = document.querySelector(".big-size");
const gridSize = document.querySelector("#gridSize");
var gridCount = 80;
let penColor = "black";

function divGrid(gridNumber) {
    let _gridArea = gridCount * gridCount;
    for (let i = 1; i <= _gridArea; i++) {
        let _gridItem = document.createElement('div');
        _gridItem.classList.add('cell');
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.insertAdjacentElement('beforeend', _gridItem);
        
    }
    for (i = 0; i < _gridArea; i++) {
        cell[i].addEventListener('mouseenter', function (event) {
            event.target.style.backgroundColor = penColor;
            cell[i].style.backgroundColor = "#ffffff";
        })
    currentColor.style.backgroundColor = "black";
    }
}

divGrid(gridCount);


resetButton.addEventListener("click", function () {
   

    for (i=0; i < (gridCount * gridCount); i++) {
        cell[i].style.backgroundColor = "#ffffff";
    }

    penColor = "black";
    currentColor.style.backgroundColor = "black";
})


function userColorSelection(event) {
    penColor = event.target.value;
    currentColor.style.backgroundColor = penColor;
}

colorButton.addEventListener('change', userColorSelection, false);
colorButton.addEventListener('input', userColorSelection, false);


smallButton.addEventListener("click", function() {
    divGrid(10);
    
    for (i=0; i < (gridCount * gridCount); i++) {
        cell[i].style.backgroundColor = "#ffffff";
    }

    penColor = "black";
    currentColor.style.backgroundColor = "black";
})


mediumButton.addEventListener("click", function() {
    divGrid(40);
    
    for (i=0; i < (gridCount * gridCount); i++) {
        cell[i].style.backgroundColor = "#ffffff";
    }

    penColor = "black";
    currentColor.style.backgroundColor = "black";
})


bigButton.addEventListener("click", function() {
    divGrid(80);
    
    for (i=0; i < (gridCount * gridCount); i++) {
        cell[i].style.backgroundColor = "#ffffff";
    }

    penColor = "black";
    currentColor.style.backgroundColor = "black";
})