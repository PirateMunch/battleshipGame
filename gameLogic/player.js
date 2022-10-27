const ship = require('./ship');
const board = require('./gameboard');

function player() {
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

module.exports = player;
