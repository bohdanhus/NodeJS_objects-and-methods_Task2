const net = require('net')
let clients = [];

const startboard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
let gameboard = [...startboard];

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function getWinner(gameboard, current) {
	if (gameboard[0] == current && gameboard[1] == current && gameboard[2] == current) {
		return true
	} else if (gameboard[3] == current && gameboard[4] == current && gameboard[5] == current) {
		return true
	} else if (gameboard[6] == current && gameboard[7] == current && gameboard[8] == current) {
		return true
	} else if (gameboard[0] == current && gameboard[3] == current && gameboard[6] == current) {
		return true
	} else if (gameboard[1] == current && gameboard[4] == current && gameboard[7] == current) {
		return true
	} else if (gameboard[2] == current && gameboard[5] == current && gameboard[8] == current) {
		return true
	} else if (gameboard[0] == current && gameboard[4] == current && gameboard[8] == current) {
		return true
	} else if (gameboard[6] == current && gameboard[4] == current && gameboard[2] == current) {
		return true
	} else {
		return false
	}
}

function printBoard(board) {
	let string = `${board[0]}|${board[1]}|${board[2]}`;
	string += `\n-----`;
	string += `\n${board[3]}|${board[4]}|${board[5]}`;
	string += `\n-----`;
	string += `\n${board[6]}|${board[7]}|${board[8]}`;
	return string
}

function selector(current) {
	if (current === "X") {
		return "0";
	} else {
		return "X";
	}
}


function move(board, player, value) {
	if (checkEmptyCell(board, value)) {
		board[value - 1] = player;
		return true
	} else {
		return false
	}
}
function checkEmptyCell(board, value) {
	const cell = board[value - 1]
	return cell !== "X" || cell !== "O"
}

function currentValue(value) {
	if (isNaN(value) || value > 9 || value < 1 || value == undefined || value == null) {
		return false
	}
	return true
}
let playerO;
let playerX;
let count = 0;

let restart = false
function playerMove(firstPlayer, secondPlayer, current, value){
	
	if (clients.length > 1){
        if (currentValue(value) == true) {
			if (move(gameboard, current, value) == true){
                let gameboard = [...startboard]
				firstPlayer.write(`${printBoard(gameboard)}`)
				secondPlayer.write(`${printBoard(gameboard)}`)
				count++

                if (getWinner(gameboard,current) || count < 9){

                   firstPlayer.write(`Flawless victory `)
				   secondPlayer.write(``)
                   restart = true
				
				} else { 
                   firstPlayer.write(`nobody won`);
				   secondPlayer.write(`nobody won`)				
				}
			} else {	
			  firstPlayer.write(`This cell is not empty!`)
			}
		} else {
			firstPlayer.write(`Please enter valid value from!`)
		}
	} else {
        firstPlayer.write(`The game will start when a second player is connected!`)
	}
}



const server = net.createServer(function (socket) {
	socket.write("Wellcome, wait for the game to start\r\n");
	const port = socket.remotePort;
	const ip = socket.remoteAddress

	clients.push(socket);
	socket.pipe(process.stdout);

	console.log("Connected Port:", port);
	console.log("Client IP:", ip);

	if (clients.length === 1) {
		socket.write("waiting Player #2\n");

	} else if (clients.length === 2) {

		if (getRandomInt(10) > 5) {
			playerX = clients[0];
			playerO = clients[1];

		} else {
			playerX = clients[1];
			playerO = clients[0];
		}

		clients.forEach((clients) => {
			clients.write("Game is start\n");
		});

		playerX.write(`Your turn X. Enter a number from (1-9): \n`);
		playerO.write(`You are 0, please wait X for move \n`);
		playerX.on("data", (message) => {
			playerMove(playerX, playerO, "X", Number(message));
		});
		playerO.on("data", (message) => {
			playerMove(playerO, playerX, "0", Number(message));
		});
	}

	socket.on("close", () => {
		clients.splice(clients.indexOf(socket), 1)
		console.log("closed ", port);
	});
});

server.maxConnections = 2;
server.listen(1337, "127.0.0.1");
/*
And connect with a tcp client from the command line using netcat, the *nix
utility for reading and writing across tcp/udp network connections.
$ netcat 127.0.0.1 1337
You should see:
> Echo server
*/
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
