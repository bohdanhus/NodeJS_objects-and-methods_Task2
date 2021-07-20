let board = [
    'X','X','X',
    'X','X','X',
    'X','X','X'
];
let player = 'X';
const  printBoard = () => {
    let line = "";
    for (let i = 1; i < 10; i++){
        line += board[i-1] + ' | ';
        if (i % 3 === 0){  
            console.log(line);
            console.log('__________')
           line = "";
        }
    }
}
if ( board[0] == board[1] && board[1] == board[2]) {}  
// 1,2,3; 4,5,6; 7,8,9; 1,5,9; 3,5,7; 2,5,8; 1,4,7; 3,6,9;

console.log(printBoard(board));