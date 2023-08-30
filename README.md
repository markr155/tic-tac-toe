Tic Tac Toe
Main goal here is to have as little global code as possible. Try tucking everything away inside of a module or factory. Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. If you need multiples of something (players!), create them with factories. 

<!-- 1. create gameboard array inside of gameboard object -->

<!-- 2. create player factories -->

<!-- 3. create gameController object -->

<!-- 4. display board to screen -->



player clicks on the board
check if click is legal move
display marker
    refresh whole board or just each cell?
    add image(x, o) that appears, some transform on entry

check if game finish
change turn to opponent