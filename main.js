const board = document.querySelector('.board');
let player1='x';
let player2='o';
let currentPlayer = player1;
function createBoard(){
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
    
        //player1move
            div.addEventListener('click', function(){
                // if the cell is already filled don't do anything
                if (div.textContent !== '') return;
                 // currentPlayer x in a cell   
                    div.textContent = currentPlayer;
                    // switch the currentPlayer to the other player 
                currentPlayer = currentPlayer === player1 ? player2 : player1;
                
                })
                
                }
 }

createBoard();





