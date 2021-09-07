class Game{

constructor(){
    
}
//to get the current state of the gamestate from the database(gamestate)
getState(){
var gameStateRef = database.ref("gameState")
gameStateRef.on("value",(data)=>{
gameState = data.val()
})
}
//function updates the value of gameState in the database and the game has created it's own gamestate variable called "state" which is tracking the state of the game
update(state){
database.ref("/").update({
gameState: state
})
}

async start(){
if(gameState == 0){
player = new Player()
var playerCountRef = await database.ref("playerCount").once("value")
if(playerCountRef.exists()){
playerCount = playerCountRef.val()
player.getCount()
}
}
form = new Form()
form.display()
player1 = createSprite(200,500)
player1.addImage("player1",player_img)
player2 = createSprite(800,500)
player2.addImage("player2",player_img)
players = [player1,player2]
}

play(){
form.hide()
Player.getPlayerInfo()
player.getPlayerAtEnd()
image(back_img,0,0,1000,800)
var x = 100
var y = 200
var index = 0
drawSprites();
for(var plr in allPlayers){
index = index + 1
x = 500 - allPlayers[plr].distance
y = 500
players[index - 1].x = x
players[index - 1].y = y
if(index == player.index){
text(allPlayers[plr].name,x-25,y+25)
}
text("player1"+allPlayers.player1.score,50,50)
text("player2"+allPlayers.player2.score,50,100)
}
if(player.score>=5){
gameState = 2
player.rank+=1
Player.updatePlayerAtEnd(player.rank)
player.update();
this.showRanks();
}
if(keyIsDown(RIGHT_ARROW)&&player.index!=null){
player.distance += 10
player.update();
}

if(keyIsDown(LEFT_ARROW)&&player.index!=null){
player.distance -= 10
player.update();
}

if(frameCount%20==0){
fruits = createSprite(random(100,1000),0,100,100)
fruits.velocityY = 6
var rand = Math.round(random(1,5))
switch(rand){

case 1:fruits.addImage("fruit1",fruit1_img)
break

case 2:fruits.addImage("fruit2",fruit2_img)
break

case 3:fruits.addImage("fruit3",fruit3_img)
break

case 4:fruits.addImage("fruit4",fruit4_img)
break

case 5:fruits.addImage("fruit5",fruit5_img)
break
}
fruitGroup.add(fruits)
}
if(player.index!==null){
for(var i = 0; i < fruitGroup.length; i++){
if(fruitGroup.get(i).isTouching(players)){
fruitGroup.get(i).destroy()
player.score += 1
player.update()
}
}
}
}
showRanks(){
alert("You have finished the game!, your rank is "+player.rank+"!")
}
gameOver(){
textSize(20)
text("Game Over!")
}
end(){
this.gameOver();
}
}