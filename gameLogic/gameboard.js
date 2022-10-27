import { ship } from './ship.js'

export function board () {
    let missedAttacks = [];

    let board = [
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        ];
    

    function newPlayerShips() {
        const cruiser = ship(2);
        const sloop = ship(1);
        return { cruiser, sloop };
    }

    let playerShips = newPlayerShips();

    const placeToBoard = (posistion1, posistion2) => {
        if (posistion2 > 0) {
            playerShips.cruiser.placeShip(posistion1, posistion2);
            board[posistion1][posistion2] = 'cruiser';
        } else {
            playerShips.sloop.placeShip(posistion1, posistion2);
            board[posistion1][posistion2] = 'sloop';
        }
        return board;
    };

    const receiveAttack = (posistion1, posistion2) => {
        if (board[posistion1][posistion2] === 'cruiser') {
            board[posistion1][posistion2] = 'hit';
            playerShips.cruiser.hit();
        } else {
            board[posistion1][posistion2] = 'miss';
        }
        return board;
    };

    const allShipSunk = () => {
        if (playerShips.sloop.isSunk() === true) return true;
    };

    return {
        missedAttacks,
        board,
        newPlayerShips,
        placeToBoard,
        receiveAttack,
        allShipSunk,
    };
};

// testing scripts below
// const ship = require('./ship');
// module.exports = board;
