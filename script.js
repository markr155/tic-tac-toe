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
        console.log(`row: ${row},
        col: ${col},
        token: ${player.getToken()}`);
    };

    return {
        getBoard, 
        displayBoard,
        addMarker
         };
})();

const Player = (token) => {
    let getToken = () => token;
    return { 
        getToken 
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
    const player1 = Player('X');
    const player2 = Player('O');
    const players = [player1, player2];

    let activePlayer = players[0];
    const getActivePlayer = () => activePlayer;

    

    const playRound = (cellClicked) => {
        const cell = cellClicked.target;
        const row = cell.dataset.row;
        const col = cell.dataset.col;
        console.log(cell.target);
        //check if cell is occupied - check board array
            //if yes not legal, display error, end early no changes
            //if no continue
        if (gameBoard.getBoard()[row][col].getValue() !== ""){
            console.log('Cell not valid');    
            return;
        };
        //add player token to array
        gameBoard.addMarker(row, col, getActivePlayer());
        //update score
        //update board
        gameBoard.displayBoard();
        //check if win
        //change active player turn
        
    };
    return { 
        players, 
        playRound,
        getActivePlayer,
        activePlayer
    };
})();

gameBoard.displayBoard();