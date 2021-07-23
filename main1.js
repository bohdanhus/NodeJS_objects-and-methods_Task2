const prompt = require('prompt');

let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

const game = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [2, 5, 8],
    [1, 4, 7],
    [3, 6, 9]
];

function displayGameBoard(array) {
    let field = "";
    for (let j = 0; j < array.length; j++) {
        for (let n = 0; n < array.length; n++) {
            if (n == 0) {
                field += "  |";
            }
            if (n == 1) {
                field += " | ";
            } else field += "  "
        }
        if (j !== 2) {
            field += "\n----------\n"
        }
    }
    console.log(field)
}

function checkForAWinner (board) {
    if (
        /* найдена победная комбинация, нужно проверить доску
        на ёё наличие и если она присутствует то узнать какой символ */
    ) {
        endOfTheGame()

    } else if () {
        draw()
    }
}

function draw (board) {

};
function endOfTheGame(symbol) {
    if (symbol == "x"){
        console.log("Крестики победили!");
    } else if (symbol == "o"){
        console.log("Сегодня нолики одержали победу!")
    }
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

displayGameBoard(board)

//https://codereview.stackexchange.com/questions/202191/tictactoe-solver-in-javascript
//https://ru.hexlet.io/courses/js-arrays/lessons/nested-arrays/theory_unit