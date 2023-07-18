const board = document.querySelector('.board');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer')
function viewBoard(){
    board.style.gridTemplateColumns = `repeat(3, 100px)`;
    board.style.gridTemplateRows = `repeat(3, 100px)`;
    let numdivs = 9;
    for (let i = 0; i < numdivs; i++) {
        const div = document.createElement('div');
        div.style.border = '1px solid white'
        div.style.fontSize = '60px'
        div.style.color = 'white'
        div.style.textAlign = 'center'
        board.appendChild(div);
        div.addEventListener('click', function(e){
        div.textContent = player.textContent;
        })
        }
    
}
viewBoard();
