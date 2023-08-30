const gameBoard = (() => {
    const gameContainer = document.querySelector('.boardContainer');
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++){
            board[i].push(Cell());
        }
    }    

    const getBoard = () => (board);

    const displayBoard = () => {
        //clear board
        while (gameContainer.childElementCount > 0){ gameContainer.removeChild(gameContainer.lastChild)};
        //displays board
        board.forEach((row, rowNum) => {
            row.forEach((col, index) => {
                const newCell = document.createElement('button');
                newCell.dataset.row = rowNum;
                newCell.dataset.col = index;
                newCell.setAttribute('class', 'cell');
                newCell.textContent = col.getValue();
                newCell.addEventListener('click', gameController.playRound);
                gameContainer.appendChild(newCell);
            })
        })
    };

    const addMarker = (row, col, player) => {
        board[row][col].addToken(player.getToken());
    };

    return {
        getBoard, 
        displayBoard,
        addMarker
         };
})();

const Player = (token, name) => {
    const getToken = () => token;
    const getName = () => name;
    return { 
        getToken, 
        getName
    };
};

function Cell() {
    let value = '';

    const addToken = (player) => {
        value = player;
    };

    const getValue = () => value;

    return {
        addToken,
        getValue
    };

}

const gameController = (() => {
    const player1 = Player('X','Player 1');
    const player2 = Player('O', 'Computer');
    const players = [player1, player2];

    let activePlayer = players[0];
    const getActivePlayer = () => activePlayer;    

    const playRound = (cellClicked) => {
        const cell = cellClicked.target;
        const row = cell.dataset.row;
        const col = cell.dataset.col;
        const board = gameBoard.getBoard();
        //check if cell is occupied
        if (board[row][col].getValue() !== ""){
            console.log('Cell not valid');    
            return;
        };
        //add player token to array
        gameBoard.addMarker(row, col, getActivePlayer());
        //update board
        gameBoard.displayBoard();
        //check if win
        CheckWin();

        //change active player turn
        getActivePlayer() === players[0] ? activePlayer = players[1] : activePlayer = players[0] 
        
        //win check
        function CheckWin(){
            const token = getActivePlayer().getToken();
            let win = false;
            //row
            if (board[row][0].getValue() == token &&
                board[row][1].getValue() == token &&
                board[row][2].getValue() == token) {
                win = true;
            }
            //column
            if (board[0][col].getValue() == token &&
                board[1][col].getValue() == token &&
                board[2][col].getValue() == token) {
                win = true;
            }
            //diag
            if (board[0][0].getValue() == token &&
                board[1][1].getValue() == token &&
                board[2][2].getValue() == token) {
                win = true;
            }
            if (board[2][0].getValue() == token &&
                board[1][1].getValue() == token &&
                board[0][2].getValue() == token) {
                win = true;
            }
            if (win === true){
                alert(`${gameController.getActivePlayer().getName()} has won the game!`)
            }
            };
             
            
        };
    return { 
        players, 
        playRound,
        getActivePlayer,
        activePlayer
    };
})();

gameBoard.displayBoard();