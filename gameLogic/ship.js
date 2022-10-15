const ship = (length) => {
    let hits = 0
    let location;
    const hit = () => {
       return hits = hits + 1
    }
    const isSunk = () => {
        if (length === hits) return true;
    };
    return { length, hits, location, hit, isSunk };
};

module.exports = ship;
