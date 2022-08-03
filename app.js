const colorCell = (cell) => {
    cell.style.background = "#242423";
}

const generateGrid = (input) => {
    var width = (100/(Math.sqrt(input)))/100 * 500;
    for (let i=0; i < input; i++){
        const cell = document.createElement('div')
        cell.classList.add('cell');
        cell.setAttribute("style",`width:${width}px`);
        cell.onmouseover = function(){colorCell(cell)};
        //cell.addEventListener("click", colorCell(cell))
        const grids = document.getElementById('grid');
        grids.appendChild(cell);
    }
}
addEventListener('load', (event) => {
    const originalGrid = document.getElementById('cellQuantity').value
    generateGrid(originalGrid * originalGrid);
});

const createCanvas = () => {
    document.getElementById('grid').innerHTML = '';
    const quantity = document.getElementById('cellQuantity').value;
    var regex = /[0-9]|\./;
    if (regex.test(quantity)){
        if (quantity <= 0) {
            window.alert("the size has to be bigger than 0!");
            generateGrid(256);
        }
        else if (quantity > 100) {
            window.alert("the size has to be smaller than 100");
            generateGrid(256);
        }
        else {
            generateGrid(quantity * quantity);
        };
    }
    else {
        window.alert('Please enter a numerical value');
        generateGrid(256);
    }

    
}


// onclick of Grid icon, change background-color to black