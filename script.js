import { player } from './gameLogic/player.js'
import { newGrid } from './gameLogic/displayGrid.js'
import { startupScreen } from './gameLogic/startupScreen.js';


startGame.addEventListener('click', (e) => {
   const startGame = document.getElementById('startGame'); 
    setGame()
    startupScreen()
});

function setGame () {
    newGrid(10);
};

