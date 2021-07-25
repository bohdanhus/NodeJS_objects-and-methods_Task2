
export * as game from 'game.js'
const userName = 'user';
const computerName = 'computer';
const userMoveSymbol = '×';
const displayBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let game;

beforeEach(() => {
    game = new Game()
});

describe('Game', () => {

    it('Should return empty game board', () => {
        const board = game.getState();
        expect(board).toEqual(displayBoard)
    });
//  it('Game saves computers\'s move in history', () => {
//    const stub = sinon.stub(Math, 'random').returns(0.5)
//
//     game.createComputerMove()
//     const history = game.getMoveHistory()
//
//    expect(history).to.deep.equal([{turn: computerName, x: 0, y: 0}])
//    expect(history).to.deep.equal([{turn: computerName, x: 1, y: 1}])
//    stub.restore()
//   })
// it('Computer moves in top left cell', () => {
//     game.createComputerMove()
//     const board = game.getState()
//
//     expect(board[0][0]).toEqualqual(computerMoveSymbol)
// })
//     it('Game saves user\'s move in history', () => {
//         const x = 1, y = 1
//
//         game.acceptUserMove(x, y)
//         const history = game.getMoveHistory()
//
//         expect(history).to.deep.equal([{turn: 'useName, x, y}])
//     })
//     it('Game saves computers\'s move in history', () => {
//         game.createComputerMove()
//         const history = game.getMoveHistory()
//
//         expect(history).to.deep.equal([{turn: 'computerName', x: 0, y: 0}])
//     })
//     it('Game saves 1 user\'s move and 1 computer\'s move in history', () => {
//         const x = 1, y = 1
//
//         game.acceptUserMove(x, y)
//         game.createComputerMove()
//         const history = game.getMoveHistory()
//
//         expect(history.length).to.equal(2)
//         expect(history[0].turn).to.equal(userName)
//         expect(history[1].turn).to.equal(computerName)
//     })
// });