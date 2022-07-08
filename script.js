let rows = prompt("Enter the number of squares per row: (max 100)");



const container = document.querySelector('#container');
let containerWidth = container.clientWidth;
let containerHeight = container.clientHeight;
for (let i = 0; i < rows; i++){
    for (let j = 0; j < rows; j++){
        const content = document.createElement('div');
        content.classList.add('square');
        content.style.maxWidth = `${containerWidth/rows}px`;
        content.style.maxHeight = `${containerHeight/rows}px`;
        container.appendChild(content);
    }
}
let gridTemplate = '';
for (let i = 0; i < rows; i++){
    gridTemplate += '1fr ';
}

container.style.gridTemplateColumns = gridTemplate;
container.style.gridTemplateRows = gridTemplate;

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    })
});

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
})