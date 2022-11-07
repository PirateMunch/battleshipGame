import { player } from './gameLogic/player.js'
import { newGrid } from './gameLogic/displayGrid.js'
import { startupScreenP1 } from './gameLogic/startupScreenP1.js';


startGame.addEventListener('click', (e) => {
   const startGame = document.getElementById('startGame'); 
    setGame()
    startupScreenP1()
});

function setGame () {
    newGrid(10);
};

