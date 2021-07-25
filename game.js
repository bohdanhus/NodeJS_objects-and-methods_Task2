const prompt = require('prompt');



function printBoard(board) {//Печать поля с сеткой
    let field = "";
    for (let j = 0; j < board.length; j++) {
        for (let n = 0; n < board.length; n++) {
            if (n === 0) {
                field += "  |";
            }
            if (n === 1) {
                field += " | ";
            } else field += " "
        }
        if (j !== 2) {
            field += "\n---------\n"
        }
    }
    return field
}

function checkGameStates(board, symbol) {
    if (
        board[0][0] === symbol && board[0][1] === symbol && board[0][2] === symbol || // Rows
        board[1][0] === symbol && board[1][1] === symbol && board[1][2] === symbol ||
        board[2][0] === symbol && board[2][1] === symbol && board[2][2] === symbol ||
        board[0][0] === symbol && board[1][0] === symbol && board[2][0] === symbol ||// Columns
        board[0][1] === symbol && board[1][1] === symbol && board[2][1] === symbol ||
        board[0][2] === symbol && board[1][2] === symbol && board[2][2] === symbol ||
        board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol ||  // Diagonals
        board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol ||;
)
    {
        return true;
    }
    return false;
}


function createMove(field, turn, x, y) {//Выполнения хода игрока (изменения игрового поля)
    if (board[y - 1][x - 1] == " ")
        board[y - 1][x - 1] = turn;
    return board;
}


//Реализовать процесс игры в функции main, используя функции выше для проверки
function main() {
    let board = [['', '', ''], ['', '', ''], ['', '', '']];
    let currentPlayer = "X";

    const showwinningMessage = () => `Player ${currentPlayer} has won!`;
    const showdrawMessage = () => `The game ended in a draw`;
    const showCurrentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
    console.log(printBoard(board));
    checkGameStates(board);
    createUserMove(); // !!!!!!!!!!!!!!!!!

}
//  вспомагательные ф-ции
function getMoveCount(board){//получает доску и возвращает количество сыгранных ходов.
    let moveCount = 0;
    for (let i = 0; i<board.length; i++){
        for (let j = 0 ; j<board[i].length ; j++){
            if (board[i][j]!==""){
                moveCount++
            }
        }
    }
    return moveCount
}
function resetGame() {

}
main();
// const didPlayerMove = (field, symbol) => {
//     // Обходим поле. Каждый элемент — это строчка в игровом поле.
//     for (const row of field) {
//         // метод includes проверяет присутствует ли элемент в массиве,
//         if (row.includes(symbol)) { // Если присутствует, значит мы нашли то, что искали.
//             return true;
//         }
//     }
//
//     // Если поле было просмотрено, но ничего не нашли,
//     // значит ходов не было.
//     return false;
// }
git

//https://codereview.stackexchange.com/questions/202191/tictactoe-solver-in-javascript
//https://ru.hexlet.io/courses/js-arrays/lessons/nested-arrays/theory_unit
//https://gist.github.com/adrianjost/225599966b9434cfb67868ffcdfa1d01
//https://github.com/sschwa12/tictactoe/blob/master/tictactoe.js