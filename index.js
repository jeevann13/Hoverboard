const board = document.querySelector('.board-body');
const colors = ['#00FFFF','FF6EC7', 'FF6EC7','#FF00FF', '#D400FF', '#39FF14', '#FFFF00', '#BFFF00', '#FFA500', '#FF2400'];
const squares = 400;

function getRandomColor(){
    const randColor =  colors[Math.floor(Math.random() * colors.length)];
    return randColor;
}

function setColor(ele){
    const  col =  getRandomColor();
    ele.style.background = col;
    // ele.style.boxShadow = `0 0 2px ${col}`;
}

function removeColor(ele){
    ele.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #1d1d1d';
}

for(let box = 0; box < squares; box++){
    const boxes = document.createElement('div');

    boxes.classList.add('box');
    board.appendChild(boxes);

    boxes.addEventListener('mouseover', () => setColor(boxes));
    boxes.addEventListener('mouseout', () => removeColor(boxes));
}



