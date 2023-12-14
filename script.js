
function Gameboard() {
const board = []
const row = 4;
const column = 4;


for (let i = 0; i < row; i++) {
    board[i] = []
    for (let j = 0; j < column; j++) {
        board[i].push(Cell())
    }
}
console.log(board)
const dropToken = (column, player) => {
    const freeCells = board
    .filter(row => row.column.getValue() === 0)
    .map(row => row.column)
}
//when there a no freeCells then the game is a draw
    if(freeCells().length < 1) {
        console.log("Draw")
        startNewGame();
    }

    const lowestRow = freeCells.length - 1;
    board[lowestRow][column].addToken(player)



const Players = [
    {PlayerOne: 0},
    {PlayerTwo: 0}
]

}
function Cell() {
    let value = 0;
    const addToken = (player) => {
        value = player;
    }
    
    const getValue = () => value
    
    return { getValue, addToken}
}
Gameboard()