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
        board.forEach(row => {
            row.forEach((col, index) => {
                const newCell = document.createElement('button');
                newCell.setAttribute('class', 'cell');
                newCell.textContent = col.getValue();
                // newCell.addEventListener('click', gameController.playRound);
                gameContainer.appendChild(newCell);
            })
        })
    };

    return { getBoard, displayBoard };
})();

const Player = (token) => {
    let getToken = () => token;
    return { 
        getToken 
    };
};

function Cell() {
    let value = 0;

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
    const player1 = Player('x');
    const player2 = Player('o');
    const players = [player1, player2];

    let activePlayer = players[0];
    const getActivePlayer = () => activePlayer;

    

    const playRound = () => {
        console.log();
    };
    return { 
        players, 
        playRound,
        getActivePlayer 
    };
})();
