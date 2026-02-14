let gridContainer = document.querySelector('.container');
let square;

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        square = document.createElement('div');
        square.className = 'square';
        gridContainer.appendChild(square);

square.addEventListener('mouseenter', (e) => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;  
});
    }}

const recastBtn = document.getElementById('recast');



