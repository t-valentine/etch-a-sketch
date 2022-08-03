const createGrid = (input) => {
    var width = (100/(Math.sqrt(input)))/100 * 495;
    for (let i=0; i < input; i++){
        const cell = document.createElement('div')
        cell.classList.add('cell');
        cell.setAttribute("style",`width:${width}px`);
        const grids = document.getElementById('grid');
        grids.appendChild(cell);
    }
};

window.addEventListener('load', createGrid(16));
// onclick of Grid icon, change background-color to black