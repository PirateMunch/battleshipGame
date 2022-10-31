const gameScreen = document.getElementById('gameScreen');

export function startupScreen() {
    const player = prompt('Enter your name');
    const startupScreen = document.getElementById('startupScreen');
    const playerInfo = document.createElement('div');
    playerInfo.className = 'playerInfo';
    playerInfo.innerText = `${player} - Place your ships!`;
    const placeShips = document.createElement('div');
    placeShips.className = 'placeShips';
    placeShips.innerText = `Ships go here and here
    <<<destroyer>>> <<Cruiser>> <<cruiser>> <sloop> <sloop>`


    startupScreen.appendChild(playerInfo);
    startupScreen.appendChild(placeShips);
};
