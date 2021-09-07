class Player{

constructor(){
//player1,player2, 1 and 2 are the numbers that are stored inside a variable called this.index
this.index = null;
this.score = 0;
this.rank = null;
this.distance = 0;
this.name = null;
}
//to get the count of the players from the database(playerCount)
getCount(){
var playerCountRef = database.ref("playerCount")
playerCountRef.on("value",(data)=>{
playerCount = data.val();
})
}
//function updates the value of playerCount in the database and the game has created it's own playerCount variable called "count" which is tracking the amount of players
updateCount(count){
database.ref("/").update({
playerCount: count
})
}

update(){
var playerIndex = "players/player"+this.index; //concatemation
database.ref(playerIndex).set({
name: this.name,
distance: this.distance,
score: this.score
})
}
//
static getPlayerInfo(){
var playersInfoRef = database.ref("players")
playersInfoRef.on("value",(data)=>{
allPlayers = data.val();
})
}

getPlayerAtEnd(){
database.ref("playerAtEnd").on("value",(data)=>{
this.rank = data.val();
});
}

static updatePlayerAtEnd(rank){
database.ref("/").update({
playerAtEnd: rank
})

}
}