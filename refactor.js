class Game {
    constructor() {
        this.userName = 'user';
        this.computerName = 'computer';
        this.userMoveSymbol = '×';
        this.computerMoveSymbol = 'o';
        this.fieldSize = 3;
        this.history = [];

        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
    }

    getState() {
        return this.board
    }


    getMoveHistory() {
        return this.history
    }

    clear() {
        this.history = [];
        this.board = cloneDeep(initialGameBoard)
    }

    acceptUserMove(x, y) {
        if (!this.isCellFree(x, y)) {
            return this.throwException('cell is already taken')
        }

        this.updateHistory(this._userName, x, y);
        this.updateBoard(x, y)
    }

    createComputerMove() {
        if (this.getFreeCellsCount() === 0) {
            return this.throwException('no cells available')
        }

        const [x, y] = this.getFreeRandomCoordinates();
        this.updateHistory(this.computerName, x, y);
        this.updateBoard(x, y, {
            symbol: this.computerMoveSymbol
        })
    }

    isWinner(player) {
        const symbol = this.getSymbolForPlayer(player);
        const range = [...Array(this.fieldSize).keys()];
        const isEqual = this.checkCellEqual(symbol);

        const horizontal = range.reduce((res, i) =>
            isEqual(i, 0) && isEqual(i, 1) && isEqual(i, 2) || res, false);

        const vertical = range.reduce((res, i) =>
            isEqual(0, i) && isEqual(1, i) && isEqual(2, i) || res, false);

        const diagonal = isEqual(0, 0) && isEqual(1, 1) && isEqual(2, 2)
            || isEqual(0, 2) && isEqual(1, 1) && isEqual(2, 0)

        return horizontal
            || vertical
            || diagonal
            || false
    }

    checkGame() {
        if (this.isWinner(this.userName)) return `${this.userName} won!`;
        if (this.isWinner(this.computerName)) return `${this.computerName} won!`;
        if (this.getFreeCellsCount() === 0) return `nobody won :–(`;
        return 'continue'
    }


    updateBoard(x, y, config={}) {
        const {symbol=this.userMoveSymbol} = config;
        this.board[x][y] = symbol
    }

    updateHistory(turn, x, y) {
        this.history.push({turn, x, y})
    }

    throwException(msg) {
        throw new Error(msg)
    }

    isCellFree(x, y) {
        return !this.board[x][y]
    }

    getFreeCellsCount() {
        return this.board.reduce((total, row) =>
            row.reduce((count, el) =>
                el === '' ? ++count : count, total), 0)
    }

    getRandomCoordinate() {
        return Math.floor(Math.random() * (this.fieldSize - 0))
    }

    getFreeRandomCoordinates() {
        let x = this.getRandomCoordinate();
        let y = this.getRandomCoordinate();

        while (!!this.board[x][y]) {
            x = this.getRandomCoordinate();
            y = this.getRandomCoordinate()
        }

        return [x, y]
    }

    getSymbolForPlayer(player) {
        return player === this.userName
            ? this.userMoveSymbol
            : this.computerMoveSymbol
    }

    checkCellEqual(symbol) {
        return (i, j) =>
            this.board[i][j] === symbol
    }
}
printField(gameArray);
            for(;;){

                let x = prompt(`(${turn} turn) Enter x pos.: `);
                let y = prompt(`(${turn} turn) Enter y pos.: `);
                
                gameArray = move(gameArray, turn, x, y);          

                if(check(gameArray, turn)){
                    printField(gameArray)
                    alert(`${turn} win.`);
                    break;
                }

                turn == "X" ? turn = "O" : turn = "X"; 
                
                printField(gameArray);
                console.log(check(gameArray));
            }