function createPlayers(name, number) {
    const player = {
        name: name,
        playerNumber: number,
        talk: function () {
            console.log(name + ` has been assigned: Player ${this.playerNumber}`);
        }
    }
    player.talk();
    return player
}


const p1 = createPlayers("Zach", 1)
const p2 = createPlayers("CPU", 2)


function createScoreBoard(p1Name, p2Name){
    p1.name = p1Name;
    p2.name = p2Name;
    
    
}
