const ship = require('./ship');

const gameboard = () => {
    let missedAttacks = [];

    const newBoard = () => {
        return [
            [0,1,2,3,4,5,6,7,8,9],
            [0,1,2,3,4,5,6,7,8,9],
            [0,1,2,3,4,5,6,7,8,9],
            [0,1,2,3,4,5,6,7,8,9],
            [0,1,2,3,4,5,6,7,8,9],
            [0,1,2,3,4,5,6,7,8,9],
            [0,1,2,3,4,5,6,7,8,9],
            [0,1,2,3,4,5,6,7,8,9],
            [0,1,2,3,4,5,6,7,8,9],
            [0,1,2,3,4,5,6,7,8,9],
        ]
    };

    let board = newBoard ();   

    const placeShip = (posistion1, posistion2, cruiser) => {
        cruiser = ship(2)
        cruiser.location = [posistion1][posistion2];
        board[posistion1][posistion2] = 'cruiser';
        return board;
    };

    const receiveAttack = (posistion1, posistion2) => {
        if(board[posistion1][posistion2] === 'cruiser') {
            board[posistion1][posistion2] = 'hit';
        } else {
            board[posistion1][posistion2] = 'miss'
        }
        return board;
    };

    const allShipSunk = () => {
        return true;
    };

    return { missedAttacks, placeShip, receiveAttack, allShipSunk };
};

module.exports = gameboard;
