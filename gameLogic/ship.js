export function ship(length) {
    let hits = 0;
    let location;

    function placeShip(posistion1, posistion2) {
        return (location = [posistion1][posistion2]);
    }

    function hit() {
        return (hits = hits + 1);
    }

    function isSunk() {
        if (length === hits) return true;
    }

    return { length, hits, location, hit, isSunk, placeShip };
}

// script for testing below.

// module.exports = ship;
