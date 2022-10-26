const ship = require('./ship');

const player = () => {
    const cruiser = ship(3);
    const sloop = ship(2);
    const scout = ship(1);
    const name = 'neal';
    return {cruiser, sloop, scout, name}
};

module.exports = player