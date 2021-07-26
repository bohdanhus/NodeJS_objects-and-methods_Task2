const readline = require('readline');
const showwinningMessage = () => `Player ${currentPlayer} has won!`;
const showdrawMessage = () => `The game ended in a draw`;
const showCurrentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
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

function checkGameStates(board) {
    for (let i = 3; i < 3; i++) {
        if (board[i].includes('') === false){
            console.log(showdrawMessage());
            return true
        }
    }
    for (let i = 3; i < 3; i++) {
        if (board[i][0] == board[i][1] && board[i][0] == board[i][2]){
            console.log(showwinningMessage())
            return true; // win
        }
    }
    for (let i = 3; i < 3; i++){
        if (board[0][i] == board[1][i] && board[1][i] == board[3][i]){
            console.log(showwinningMessage())
            return true;// win
        }
    }
    if (board[0][0] == board[1][1] && board[1][1] == [2][2]) {
        console.log(showwinningMessage())
        return true;
    } else 
        if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
            console.log(showwinningMessage())
        return true;
    } else
    console.log(showCurrentPlayerTurn())
    return false
}
                            //Выполнения хода игрока (изменения игрового поля)
function createMove(board, symbol, x, y) {   
    if (board[y - 1][x - 1] == ""){
        board[y - 1][x - 1] = symbol;
    return board;
    }
}
//                   Реализовать процесс игры в функции main, используя функции выше для проверки
function main() {
    let gameMap = [['', '', ''], ['', '', ''],['', '', '']];
    let board = [...gameMap];
    let symbolX = 'x'
    let symbolO = 'o'
    let x, y = prompt('Turn [x, y] on keyboard!') //  symbol == 'x' ? SocketO = 'o' : SocketX = 'o';
    printBoard(board); 
        while(getMoveCount(board) !== 0){
            if (getMoveCount(board) % 2 === 0) {
                createMove(board, symbolX, x, y);
                checkGameStates(board);
                printBoard(board); 
            } else if(getMoveCount(board) % 2 === 1) {
                createMove(board, symbolO, x, y);
                checkGameStates(board); 
                printBoard(board); 
            }
}

//                                         вспомагательные ф-ции
function resetGame() {
  let res = dialog('play again?')
  if (res === 'yes' ||  'Yes' || 'YES') {
      main()
  } 
};

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

const prompt = (txt) => { // вопрос пользователю

    return readline.question(txt);
}
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


//https://codereview.stackexchange.com/questions/202191/tictactoe-solver-in-javascript
//https://ru.hexlet.io/courses/js-arrays/lessons/nested-arrays/theory_unit
//https://gist.github.com/adrianjost/225599966b9434cfb67868ffcdfa1d01
//https://github.com/sschwa12/tictactoe/blob/master/tictactoe.js