
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

let player1Name = prompt("Please Enter Player 1's Name: ");
let player2Name = prompt("Please Enter Player 2's Name: ");

const p1 = createPlayers(player1Name, 1);
const p2 = createPlayers(player2Name, 2);

let currentPlayer = p1;
const gameBoard = (function () {
    const gameSpaces = [];
    let gameArea = document.getElementById("gameBoard");

    for (let i = 0; i <= 8; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.setAttribute("id", `${i}`);
        gridSquare.setAttribute("class", "gameSquare");
        gridSquare.addEventListener('click', makePlayersMove);
        gridSquare.innerText = ``;

        gameSpaces[i] = gridSquare; // Stores the DOM element itself instead of the text content

        gameArea.append(gridSquare);
    }

    return gameSpaces;
})();

const scoreBoardCreate = (function () {
    let scoreArea = document.getElementById("scoreBoard");
    p1Name = p1.name;
    p2Name = p2.name;

    for (let i = 0; i <= 3; i++) {
        let textArea = document.createElement("div");
        textArea.setAttribute("id", `${i}`);
        textArea.innerText = ``;

        scoreArea.append(textArea);
    }

    let playerName = document.getElementById("0");
    let altPlayerName = document.getElementById("2");
    let playerScore = document.getElementById("1");
    let altPlayerScore = document.getElementById("3");

    playerName.innerText = p1.name;
    altPlayerName.innerText = p2.name;
    playerScore.innerText = `${p1.name}'s Score: `;
    altPlayerScore.innerText = `${p2.name}'s Score: `;
})();

function checkPlayer() {
    if (currentPlayer === p1) {
        console.log(`${p1.name}'s turn!`);
    } else if (currentPlayer === p2) {
        console.log(`${p2.name}'s turn!`);

    }
}

function checkWinConditions() {
    const winPatterns = [
        [0, 1, 2], // Row 1
        [3, 4, 5], // Row 2
        [6, 7, 8], // Row 3
        [0, 3, 6], // Column 1
        [1, 4, 7], // Column 2
        [2, 5, 8], // Column 3
        [0, 4, 8], // Diagonal 1
        [2, 4, 6]  // Diagonal 2
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a].textContent &&
            gameBoard[a].textContent === gameBoard[b].textContent &&
            gameBoard[a].textContent === gameBoard[c].textContent) {
            console.log(`${gameBoard[a].textContent} wins!`);
            return;
        }
    }
}

function makePlayersMove(event) {
    let clickedSquare = event.target;
    if (clickedSquare.textContent === 'X' || clickedSquare.textContent === 'O') {
        return; // Prevents overwriting pre-existing moves
    }
    clickedSquare.textContent = currentPlayer === p1 ? 'X' : 'O';
    checkWinConditions();
    currentPlayer = currentPlayer === p1 ? p2 : p1; // Switch player on move
    checkPlayer(); // Update player turn info
}
