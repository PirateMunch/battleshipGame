import { board } from './gameboard.js'

export function player() {
    let boats = 5;
    let name = 'neal';
    let enemyBoard = board;

    function newGame() {
        enemyBoard = board;
        return enemyBoard;
    }

    function attack(posistion1, posistion2) {
        return enemyBoard().receiveAttack(posistion1, posistion2);
    }

    return { name, boats, newGame, attack, enemyBoard };
}

// Testing scripts below

// const ship = require('./ship');
// const board = require('./gameboard');
// module.exports = player;
