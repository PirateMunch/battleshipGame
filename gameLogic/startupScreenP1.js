export function startupScreenP1() {
    const player = prompt('Enter your name');
    const startupScreen = document.getElementById('startupScreen');
    const gameScreen = document.getElementById('gameScreen');
    const playerInfo = document.createElement('div');

    // remove start buttons and replace with main menu link
    const startButtons = document.getElementById('startButtons');
    startButtons.style.display = 'none'
    const mainMenu = document.getElementById('mainMenu');
    mainMenu.style.display = 'flex';
    mainMenu.addEventListener('click', () => {
        alert('This will reset alll progress!')
        document.location.reload();
        console.log('wehleooo')
    })

    const patrolIcon1 = document.createElement('img');
    patrolIcon1.src = 'images/PatrolBoat/ShipPatrolHull.png';
    patrolIcon1.draggable = true;
    patrolIcon1.id = 'patrolIcon1';
    patrolIcon1.dataset.value = 2;
    patrolIcon1.addEventListener('dragstart', dragStart)

    const patrolIcon2 = document.createElement('img');
    patrolIcon2.src = 'images/PatrolBoat/ShipPatrolHull.png';
    patrolIcon2.draggable = true;
    patrolIcon2.id = 'patrolIcon2';
    patrolIcon2.dataset.value = 2;
    patrolIcon2.addEventListener('dragstart', dragStart)

    const destroyerIcon1 = document.createElement('img');
    destroyerIcon1.src = 'images/Destroyer/ShipDestroyerHull.png';
    destroyerIcon1.draggable = true;
    destroyerIcon1.id = 'destroyerIcon1';
    destroyerIcon1.dataset.value = 3;
    destroyerIcon1.addEventListener('dragstart', dragStart)

    const destroyerIcon2 = document.createElement('img');
    destroyerIcon2.src = 'images/Destroyer/ShipDestroyerHull.png';
    destroyerIcon2.draggable = true;
    destroyerIcon2.id = 'destroyerIcon2';
    destroyerIcon2.dataset.value = 3;
    destroyerIcon2.addEventListener('dragstart', dragStart)

    const cruiserIcon = document.createElement('img');
    cruiserIcon.src = 'images/Cruiser/ShipCruiserHull.png'
    cruiserIcon.draggable = true;
    cruiserIcon.id = 'cruiserIcon';
    cruiserIcon.dataset.value = 4;
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

        console.log(boatSize(e).boatSize)

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
        //highlight other cells?
        // if returns work much better then if else
        // still breaks after a few cells, still returns Cruiser?

        if (boatSize(e).boatSize == 2) 
           return e.target.nextSibling.classList.add('drag-over')
        if (boatSize(e).boatSize == 3) 
            return e.target.nextSibling.classList.add('drag-over') &&
            e.target.nextSibling.nextSibling.classList.add('drag-over');
        if (boatSize(e).boatSize == 4)
            return e.target.nextSibling.classList.add('drag-over') &&
            e.target.nextSibling.nextSibling.classList.add('drag-over') &&
            e.target.nextSibling.nextSibling.nextSibling.classList.add('drag-over');
        

    };

    function dragOver (e) {
        e.preventDefault();
        e.target.classList.add('drag-over')
        
        
        if (boatSize(e).boatSize == 2) 
            return e.target.nextSibling.classList.add('drag-over')
        if (boatSize(e).boatSize == 3) 
            return e.target.nextSibling.classList.add('drag-over') &&
            e.target.nextSibling.nextSibling.classList.add('drag-over');
        if (boatSize(e).boatSize == 4)
            return e.target.nextSibling.classList.add('drag-over') &&
            e.target.nextSibling.nextSibling.classList.add('drag-over') &&
            e.target.nextSibling.nextSibling.nextSibling.classList.add('drag-over');
        
    };

    function dragLeave (e) {
        e.target.classList.remove('drag-over')

        if (boatSize(e).boatSize == 2) 
            return e.target.nextSibling.classList.remove('drag-over')
        if (boatSize(e).boatSize == 3) 
            return e.target.nextSibling.classList.remove('drag-over') &&
            e.target.nextSibling.nextSibling.classList.remove('drag-over');
        if (boatSize(e).boatSize == 4)
            return e.target.nextSibling.classList.remove('drag-over') &&
            e.target.nextSibling.nextSibling.classList.remove('drag-over')&&
            e.target.nextSibling.nextSibling.nextSibling.classList.remove('drag-over');
        
    };

    function drop (e) {
        e.target.classList.remove('drag-over')

        // removes ship aswell.......>>
    //     if (boatSize(e).boatSize == 2) 
    //     return e.target.nextSibling.classList.remove('drag-over')
    // if (boatSize(e).boatSize == 3) 
    //     return e.target.nextSibling.classList.remove('drag-over') &&
    //     e.target.nextSibling.nextSibling.classList.remove('drag-over');
    // if (boatSize(e).boatSize == 4)
    //     return e.target.nextSibling.classList.remove('drag-over') &&
    //     e.target.nextSibling.nextSibling.classList.remove('drag-over')&&
    //     e.target.nextSibling.nextSibling.nextSibling.classList.remove('drag-over');
    
        // get the draggable element and append it
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);
        e.target.appendChild(draggable);
        //display draggable element
        draggable.classList.remove('hide')

        console.log(e.target)
        console.log(id)
    }


    ////// this is spamming/breaking shit.  cruiser default thing here
    function boatSize (e) {
        //highlight other cells here maybe?
        let boatSize = e.target.dataset.value
        console.log(boatSize)
        
        if (boatSize == 2) {
            console.log('patrol here')
            boatSize = 2
            // e.target.nextSibling.classList.add('drag-over')
            // console.log(e.target.nextSibling)
        } else if (boatSize == 3) {
            console.log('destroyer here')
            boatSize = 3
            // e.target.nextSibling.nextSibling.classList.add('drag-over')
            // console.log(e.target.nextSibling.nextSibling)
        } else {
            console.log('cruiser here')
            boatSize = 4
            // e.target.nextSibling.nextSibling.nextSibling.classList.add('drag-over')
            // console.log(e.target.nextSibling.nextSibling.nextSibling)
        }
        return { boatSize }
    }


};

