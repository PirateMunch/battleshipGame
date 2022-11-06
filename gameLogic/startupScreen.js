export function startupScreen() {
    const player = prompt('Enter your name');
    const startupScreen = document.getElementById('startupScreen');
    const playerInfo = document.createElement('div');

    const patrolIcon1 = document.createElement('img');
    patrolIcon1.src = 'images/PatrolBoat/ShipPatrolHull.png';
    patrolIcon1.draggable = true;
    patrolIcon1.id = 'patrolIcon1';
    patrolIcon1.addEventListener('dragstart', dragStart)

    const patrolIcon2 = document.createElement('img');
    patrolIcon2.src = 'images/PatrolBoat/ShipPatrolHull.png';
    patrolIcon2.draggable = true;
    patrolIcon2.id = 'patrolIcon2';
    patrolIcon2.addEventListener('dragstart', dragStart)

    const destroyerIcon1 = document.createElement('img');
    destroyerIcon1.src = 'images/Destroyer/ShipDestroyerHull.png';
    destroyerIcon1.draggable = true;
    destroyerIcon1.id = 'destroyerIcon1';
    destroyerIcon1.addEventListener('dragstart', dragStart)

    const destroyerIcon2 = document.createElement('img');
    destroyerIcon2.src = 'images/Destroyer/ShipDestroyerHull.png';
    destroyerIcon2.draggable = true;
    destroyerIcon2.id = 'destroyerIcon2';
    destroyerIcon2.addEventListener('dragstart', dragStart)

    const cruiserIcon = document.createElement('img');
    cruiserIcon.src = 'images/Cruiser/ShipCruiserHull.png'
    cruiserIcon.draggable = true;
    cruiserIcon.id = 'cruiserIcon';
    cruiserIcon.addEventListener('dragstart', dragStart)

    playerInfo.className = 'playerInfo';
    playerInfo.innerText = `${player} - Set up your ships`;
    const placeShips = document.createElement('div');
    placeShips.className = 'placeShips';
    placeShips.innerText = `Place your ships :
    `

    startupScreen.appendChild(playerInfo);
    startupScreen.appendChild(placeShips);
    placeShips.appendChild(patrolIcon1);
    placeShips.appendChild(patrolIcon2);
    placeShips.appendChild(destroyerIcon1);
    placeShips.appendChild(destroyerIcon2)
    placeShips.appendChild(cruiserIcon)

    function dragStart (e) {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            e.target.classList.add('hide');
        }, 0);
        console.log('it works')
    }

    const gamecell = document.querySelectorAll('.gamecell');

    gamecell.forEach(cell => {
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', drop);
    });

    function dragEnter (e) {
        e.preventDefault();
        e.target.classList.add('drag-over')
    };

    function dragOver (e) {
        e.preventDefault();
        e.target.classList.add('drag-over')
    };

    function dragLeave (e) {
        e.target.classList.remove('drag-over')
    };

    function drop (e) {
        e.target.classList.remove('drag-over')
        // get the draggable element
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);
        // add it to drop target
        e.target.appendChild(draggable);
        //display draggable element
        draggable.classList.remove('hide')

        console.log(e.target)
        console.log(id)
    }
};

