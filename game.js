const net = require('net') // server api

const clients = []

const server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	const port = socket.remotePort;
	console.log('Client IP. Port: ', socket.remoteAddress);
	console.log('Client connected. Port: ', port);
	socket.on('close', () => {
		let index = clients.indexOf(socket);
		clients.splice(index, 1);
		console.log('Closed ', port)
	})
	clients.push(socket)
	socket.on('data', (message) => {		
		clients.forEach(client => {
			if (client !== socket) {
				client.write(message);
			}
		})
	})
	socket.pipe(process.stdout)
});

server.listen(1337, '127.0.0.1');
server.on('listening', () => { console.log('Listening on ', server.address()); })

//---__+++---__+++---__+++---__+++---__+++---__+++---__+++---__+++---__+++---__+++---__+++---__+++---__+++---__+++---__+++---__+++---__+++---__+++

const showwinningMessage = () => `Player has won!`; //${currentPlayer}
const showdrawMessage = () => `The game ended in a draw`;
const showCurrentPlayerTurn = () => `It's s turn`;

// const prom = (txt) => { 
//     let readline = require('readline');
//     return readline.question(txt);// вопрос пользователю
// };cat

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

function checkGameStates(board,symbol) {
    for (let i = 3; i < 3; i++) {
        if (board[i].includes('') === false){
            console.log(showdrawMessage());
            return true
        }
    }
    for (let i = 3; i < 3; i++) {
        if( board[i][0] == symbol && 
            board[i][1] == symbol &&
            board[i][2] == symbol ){
                console.log(showwinningMessage());
                return true; // win
        }
    }
    for (let i = 3; i < 3; i++){
        if( board[0][i] == symbol &&
            board[1][i] == symbol && 
            board[3][i] == symbol ){
                console.log(showwinningMessage());
                return true;// win
        }
    }
    if( board[0][0] == symbol && 
        board[1][1] == symbol &&
        board[2][2] == symbol ){
            console.log(showwinningMessage());
            return true;
    } else 
        if( board[0][2] == symbol &&
            board[1][1] == symbol &&
            board[2][0] == symbol ){
                console.log(showwinningMessage());
                return true;
    } else
        console.log(showCurrentPlayerTurn());
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
    let symbol == 'x' ? SocketO = 'o' : SocketX = 'x';
    printBoard(board); 
        while(getMoveCount(board) !== 0){
            if (getMoveCount(board) % 2 === 0) {
                createMove(board, symbolX, x, y);
                if (checkGameStates(board,symbol) == true){
                    resetGame()
                } 
                printBoard(board); 
            } else if(getMoveCount(board) % 2 === 1) {
                createMove(board, symbolO, x, y);
                if (checkGameStates(board,symbol) == true){
                    resetGame()
                } 
                printBoard(board); 
            }
        }
    };

main()

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
};















































//https://codereview.stackexchange.com/questions/202191/tictactoe-solver-in-javascript
//https://ru.hexlet.io/courses/js-arrays/lessons/nested-arrays/theory_unit
//https://gist.github.com/adrianjost/225599966b9434cfb67868ffcdfa1d01
//https://github.com/sschwa12/tictactoe/blob/master/tictactoe.js