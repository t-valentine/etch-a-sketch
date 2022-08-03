const colorCell = (cell) => {
    cell.style.background = "red";
}

const generateGrid = (input) => {
    var width = (100/(Math.sqrt(input)))/100 * (500 - Math.sqrt(input));
    console.log(width);
    console.log(input);
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
    if (quantity <= 0) {
        console.log("the size has to be bigger than 0!")
        generateGrid(256);
    }
    else if (quantity > 100) {
        console.log("the size has to be smaller than 100")
        generateGrid(256);
    }
    else {
        generateGrid(quantity * quantity);
    };
    
}


// onclick of Grid icon, change background-color to black