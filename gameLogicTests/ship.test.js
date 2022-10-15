const ship = require('../gameLogic/ship');

const mockShip = ship(2);
test('ship has a length', () => {
    expect(mockShip.length).toBe(2);
}); //pass

test('hit works', () => {
    expect(mockShip.hit()).toBe(1);
}); //pass

const mockSunkShip = ship(0);
test('isSunk works', () => {
    expect(mockSunkShip.isSunk()).toBe(true);
}); //pass