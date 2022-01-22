class Form{
constructor(){
    this.title  = createElement("h1");
    this.input = createInput("Enter Name");
    this.button = createButton("Play");
    this.greeting = createElement("h2");
    this.reset = createButton("Reset");
}
hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
}

display(){
 
    this.title.html("Car Racing Game")

    this.title.position(width/2-90,50);

    this.input.position(width/2-50,height/2-50);
 
    this.button.position(width/2+20,height/2);

    this.reset.position(width-100,20);


    this.reset.mousePressed(()=>{
    player.updateCount(0);
    game.updateState(0);
    Player.updateCarsAtEnd(0);
    })

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
 
        player.name = this.input.value();
        playerCount+=1;

        player.index = playerCount;

        player.updateCount(playerCount);
        player.update();

 
        this.greeting.html("Hello "+player.name);
        this.greeting.position(width/2-70,height/2);
 })
}
}