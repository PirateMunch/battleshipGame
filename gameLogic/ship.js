const ship = (length) => {
    let hits = 0;
    let location;
    
    const placeShip = (posistion1, posistion2) => {

        return location = [posistion1][posistion2];
    };

    const hit = () => {
        return hits = hits + 1
    };

    const isSunk = () => {
        if (length === hits) return true;
    };

    return { length, hits, location, hit, isSunk, placeShip };
};

module.exports = ship;
