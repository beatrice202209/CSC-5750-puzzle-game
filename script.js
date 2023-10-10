function swapTiles(cell1, cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
}


function simShuffle() {

    const cell1 = document.getElementById("cell43");
    const cell2 = document.getElementById("cell44");

    const parentElement = cell1.parentElement;
    parentElement.insertBefore(cell1, cell2);
}



// Function to shuffle the grid randomly
function shuffle() {
    for (var row = 1; row <= 4; row++) {
        for (var column = 1; column <= 4; column++) {
            var row2 = Math.floor(Math.random() * 4 + 1);
            var column2 = Math.floor(Math.random() * 4 + 1);
            swapTiles("cell" + row + column, "cell" + row2 + column2);
        }
    }
}

function clickTile(row, column) {
    var cell = document.getElementById("cell" + row + column);
    var tile = cell.className;
    if (tile != "tile16") {
        //check if the white tile is on the right
        if (column < 4) {
            if (document.getElementById("cell" + row + (column + 1)).className == "tile16") {
                swapTiles("cell" + row + column, "cell" + row + (column + 1));
                setTimeout(() => { Win() }, 1000); //async global function to delay alert window execution for 1 second
                return;
            }
        }
        //check if the white tile is on the left
        if (column > 1) {
            if (document.getElementById("cell" + row + (column - 1)).className == "tile16") {
                swapTiles("cell" + row + column, "cell" + row + (column - 1));
                return;
            }
        }
        // check if the white tile is above
        if (row > 1) {
            if (document.getElementById("cell" + (row - 1) + column).className == "tile16") {
                swapTiles("cell" + row + column, "cell" + (row - 1) + column);
                return;
            }
        }
        // check if the white tile is below
        if (row < 4) {
            if (document.getElementById("cell" + (row + 1) + column).className == "tile16") {
                swapTiles("cell" + row + column, "cell" + (row + 1) + column);
                return;
            }
        }
    }
}


function Win() {
    //Write some code logic here that determines if the tiles are all in order, hence the puzzle is won. If so, alert to the user that they won.
    if (document.getElementById("cell11").className == "tile1"
        && document.getElementById("cell12").className == "tile2"
        && document.getElementById("cell13").className == "tile3"
        && document.getElementById("cell14").className == "tile4"
        && document.getElementById("cell21").className == "tile5"
        && document.getElementById("cell22").className == "tile6"
        && document.getElementById("cell23").className == "tile7"
        && document.getElementById("cell24").className == "tile8"
        && document.getElementById("cell31").className == "tile9"
        && document.getElementById("cell32").className == "tile10"
        && document.getElementById("cell33").className == "tile11"
        && document.getElementById("cell34").className == "tile12"
        && document.getElementById("cell41").className == "tile13"
        && document.getElementById("cell42").className == "tile14"
        && document.getElementById("cell43").className == "tile15"
        && document.getElementById("cell44").className == "tile16"
    ) {
       // window.alert("Congratulations!!\n Amount spent on current game in seconds: " + time + "\n Number of moves so far: " + Number_of_moves + "\nWould you like to play again?")
        window.location.reload(); //Reload page upon confirmation
    }
}

setTimeout(() => { Win() }, 1000); 