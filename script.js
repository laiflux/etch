let gridContainer = document.querySelector('.container');


for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
       const square = document.createElement('div');
        square.className = 'square';
        gridContainer.appendChild(square);

        let squareInteractionCount = 0;

square.addEventListener('mouseenter', (e) => {
    
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;  
    
});

square.addEventListener('mouseover', () => {
        squareInteractionCount++;
        let newOpacity = 1 - (squareInteractionCount * 0.1);
        square.style.opacity = Math.max(newOpacity, 0);
        });
    }
}


const recastBtn = document.getElementById('recast');

recastBtn.addEventListener('click', () => {
    let newGridLength = +prompt("please enter the number of squares per side for the new grid");

    gridContainer.innerHTML = "";
    let newGridSquare = 100 / newGridLength;

    for (let i = 0; i < newGridLength * newGridLength; i++) {
        if (isNaN(newGridLength) || newGridLength <= 0 || newGridLength > 100) {
            alert("please enter digits. no more than 100. or less than 1.");
            return;
        } else if (newGridLength === null) {
            return; 
        } else {
            const newSquare = document.createElement('div');
            newSquare.className = "newSquare";
            newSquare.style.flexBasis = `${newGridSquare}%`;
            newSquare.style.height = `${newGridSquare}%`;
            newSquare.style.border = "0.01rem solid #444";
            
            gridContainer.appendChild(newSquare);

            let interactionCount = 0;

    newSquare.addEventListener('mouseenter', (e) => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
    
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;  
});
    newSquare.addEventListener('mouseover', () => {
        interactionCount++;
        let newOpacity = 1 - (interactionCount * 0.1);
        
        newSquare.style.opacity = Math.max(newOpacity, 0);
    });
    }
}
})

