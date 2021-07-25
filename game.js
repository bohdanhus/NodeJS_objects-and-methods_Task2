const prompt = require('prompt');
// board[0] = ['0', '1', '2'];board[1] = ['0', '1', '2'];board[2] = ['0', '1', '2'];
let board = [['', '', ''], ['', '', ''], ['', '', '']];

function main() {
    let newBoard = [...board];
    console.log(printBoard(newBoard));

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
    function printBoard(array) {
        let field = "";
        for (let j = 0; j < array.length; j++) {
            for (let n = 0; n < array.length; n++) {
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


//https://codereview.stackexchange.com/questions/202191/tictactoe-solver-in-javascript
//https://ru.hexlet.io/courses/js-arrays/lessons/nested-arrays/theory_unit