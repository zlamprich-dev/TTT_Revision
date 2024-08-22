function createPlayers(name, number) {
    const player = {
        name: name,
        playerNumber: number,
        talk: function () {
            console.log(name + ` has been assigned: Player ${this.playerNumber}`);
        }
    }
    player.talk();
    return player;
}

const p1 = createPlayers("Zach", 1);
const p2 = createPlayers("CPU", 2);

function createGameBoard() {
    let gameArea = document.getElementById("gameBoard");

    for (let i = 0; i <= 8; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.setAttribute("id", `${i}`);
        gridSquare.innerText = `${i}`;

        gameArea.append(gridSquare);
        console.log(`Creating Grid! Square ${i} created!`);
    }
}

function createScoreBoard(p1Name, p2Name) {
    p1.name = p1Name;
    p2.name = p2Name;
}

createGameBoard();
