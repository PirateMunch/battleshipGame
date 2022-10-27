export function newGrid(numberCells) {
    let label = 0;
    let cellWidth = 20/numberCells + "rem";
    let cellHeight = 20/numberCells + "rem";
    const mainContainerDiv = document.getElementById("gameScreen");
    let divArray = [];
    // Iterate through for loop creating 16 divs || input
    for (let i = 0; i < numberCells; i++) {
        // For each div, loop through and create nested divs
        divArray[i] = document.createElement("div");
        // Add the new element with text content
        mainContainerDiv.appendChild(divArray[i]);
        // Iterate through for loop creating divs
        for (let j = 0; j < numberCells; j++) {
            const newDiv = document.createElement("div");
            const classAttribute = document.createAttribute("class");
            classAttribute.value = 'gamecell';
            newDiv.setAttributeNode(classAttribute);
            //Give each cell a number to its data-set
            const classAttribute2 = document.createAttribute("data-set");
            classAttribute2.value = `${label}`;
            newDiv.setAttributeNode(classAttribute2);
            // Create a style attribute for cell width, then assign value
            const widthHeightAttribute = document.createAttribute("style")
            widthHeightAttribute.value = `width: ${cellWidth}; height: ${cellHeight};`;
            // Add the style attribute to the div
            newDiv.setAttributeNode(widthHeightAttribute);
            divArray[i].appendChild(newDiv);
            label++
        }
    }
}