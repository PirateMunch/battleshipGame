import { player } from './gameLogic/player.js'
import { newGrid } from './gameLogic/displayGrid.js'

function hello() {
    console.log('hello')
}
const startGame = document.getElementById('startGame');
const gameScreen = document.getElementById('gameScreen');

startGame.addEventListener('click', (e) => {
    setGame()
})

function setGame () {
    newGrid(10);


    // const projectSection = document.getElementById('projectSection');
    // const formDiv = document.createElement('div');
    // formDiv.className = 'formDiv';
    // projectSection.appendChild(formDiv);
    // const form = document.createElement('form');
    // form.name = 'form';
    // form.id = 'form';
    // form.className = 'form1';
    // formDiv.appendChild(form);

// test stuff below --
    // const player1 = player();
    // const player2 = player();
    // const player1Board = player1.enemyBoard()
    // player1Board.placeToBoard(0, 2);
    // player1Board.placeToBoard(0, 3);
    // console.log(player1Board.board)

}