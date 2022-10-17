const gameboard = require('../gameLogic/gameboard');

const mockGame = gameboard();

test('missed attacks', () => {
    expect(mockGame.missedAttacks).toEqual(expect.arrayContaining([]))
}); //pass

test('can place a ship', () => {
    expect(mockGame.placeShip(0, 2)).toEqual(expect.arrayContaining([[ 0, 1, 'cruiser', 3, 4, 5, 6, 7, 8, 9], [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]]));
}); //pass


test('can receive attacks', () => {
    mockGame.placeShip(0, 2);
    expect(mockGame.receiveAttack(0, 2)).toEqual(expect.arrayContaining([[ 0, 1, 'hit', 3, 4, 5, 6, 7, 8, 9], [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]]));
}) //if statement fails

// test('are all ships sunk?', () => {
//     expect(mockGame.allShipSunk()).toBe(true)
// })


