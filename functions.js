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

function createScoreBoard() {
    let scoreArea = document.getElementById("scoreBoard")
    p1Name = p1.name;
    p2Name = p2.name;

    for (let i = 0; i <= 3; i++) {
        let textArea = document.createElement("div");
        textArea.setAttribute("id", `${i}`);
        textArea.innerText = `${i}`;

        scoreArea.append(textArea);
        console.log(`Creating Grid! Square ${i} created!`);
    }

    let playerName = document.getElementById("0")
    let cpuName = document.getElementById("2")
    let playerScore = document.getElementById("1")
    let cpuScore = document.getElementById("3")

    playerName.innerText = p1.name;
    cpuName.innerText = p2.name
    playerScore.innerText = 'Placeholder Player Score'
    cpuScore.innerText = 'Placeholder CPU Score'
}

createScoreBoard();
createGameBoard();
