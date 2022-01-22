var gameState=0;
var database;
var playerCount;
var form,player,game;
var car1,car2,car3,car4;
var cars;
var allPlayers;
var car1Img,car2Img,car3Img,car4Img,track;

function preload(){
    car1Img = loadImage("IMAGES/car1.png");
    car2Img = loadImage("IMAGES/car2.png");
    car3Img = loadImage("IMAGES/car3.png");
    car4Img = loadImage("IMAGES/car4.png");
    track = loadImage("IMAGES/track.jpg");
}

function setup(){
    createCanvas(displayWidth-30,displayHeight-140);
    database= firebase.database();
    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
    if (playerCount == 4){
        game.updateState(1);
    }

    if (gameState == 1){
        clear();
        game.play();
    }

    if (gameState == 2){
        game.end();
    }
    
}

