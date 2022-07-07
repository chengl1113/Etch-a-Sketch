const container = document.querySelector('#container');
let rows = 16;
let cols = 16;
for (let i = 0; i < rows; i++){
    for (let j = 0; j < cols; j++){
        const content = document.createElement('div');
        content.classList.add('square');
        container.appendChild(content);
    }
}

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener("mouseover", hover(square));
});

function hover(square){
    square.style.background = 'blue;'
}