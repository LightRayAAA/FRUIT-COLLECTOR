class Form{

constructor(){
this.title = createElement("h1")
this.input = createInput("");
this.playButton = createButton("Play");
}

hide(){
this.title.hide();
this.input.hide();
this.playButton.hide();
}

show(){
this.resetButton = createButton("Reset");
this.resetButton.position(950,25);
}

display(){
this.title.html("Fruit Catcher");
this.title.position(350,200);
this.title.style("font-size","70px")
this.title.style("color","white")
this.input.position(450,350);

this.playButton.position(585,350);

this.playButton.mousePressed(()=>{
this.input.hide();
this.playButton.hide();
this.title.hide();
player.name = this.input.value()
playerCount += 1
player.update()
player.updateCount(playerCount)
//this.resetButton.show();
this.show();
var name = this.input.value()
})
}
}