const gameboard = require('../gameLogic/gameboard');

const mockGame = gameboard();

test('missed attacks', () => {
    expect(mockGame.missedAttacks).toEqual(expect.arrayContaining([]))
}); //pass

test('can place a ship', () => {
    expect(mockGame.placeShip(2)).toEqual(expect.arrayContaining([[0], [1], ['cruiser'],]));
}); //pass


test('can receive attacks', () => {
    expect(mockGame.receiveAttack(2)).toEqual(expect.arrayContaining([[0], [1], ['hit'],]));
}) //if statement fails

// test('are all ships sunk?', () => {
//     expect(mockGame.allShipSunk()).toBe(true)
// })


