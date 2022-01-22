class Game{
    constructor(){

    }
    getState(){
        database.ref('GameState').on("value",function(data){
            gameState=data.val();
        })
    }
    updateState(state){
    database.ref('/').update({
    GameState:state
    })
    }
    async start(){
        if(gameState == 0){
            player = new Player();
            var playerCountref = await database.ref('PlayerCount').once("value");
            if (playerCountref.exists()){
            playerCount = playerCountref.val();
            player.getCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car1.addImage(car1Img);
        car2 = createSprite(300,200);
        car2.addImage(car2Img);
        car3 = createSprite(500,200);
        car3.addImage(car3Img);
        car4 = createSprite(700,200);
        car4.addImage(car4Img);

        cars = [car1,car2,car3,car4];
    }
     
      play(){
      form.hide();
      Player.getPlayerInfo();
      player.getCarsAtEnd();
      if(allPlayers!== undefined){
          background(75,75,75);
      image(track,0,-height*4,width,height*5)
      var index = 0;
      var x = 175;
      var y = 0;

      for(var i in allPlayers){
          index += 1;
          x += 200;
          y = height - allPlayers[i].distance;
          cars[index-1].x = x
          cars[index-1].y = y
          if(index == player.index){
              camera.position.x = width/2;
              camera.position.y = cars[index-1].y
              fill ("red");
              ellipse (x,y,60,60);
          }
          else{
              cars[index-1].shapeColor = "red"
          }
      }
    }
      if (keyIsDown(UP_ARROW)&& player.index!== null){
          player.distance+= 10;
          player.update();
      }
      
      if(player.distance>3050){
          gameState = 2;
          player.rank +=1;
          Player.updateCarsAtEnd(player.rank)
      }
    

      drawSprites();
       
      } 

      end(){
        textSize(30);
        textFont("fantasy")
        rectMode(CENTER);
        fill ("skyblue");
        rect(width/2,cars[player.index-1].y-100,500,300);
        fill ("purple");
       if(player.index==1){
        image(car1Img,width/2-150,cars[player.index-1].y-100)
       }
       else if(player.index==2){
        image(car2Img,width/2-150,cars[player.index-1].y-100)
       }
       else if(player.index==3){
        image(car3Img,width/2-150,cars[player.index-1].y-100)
       }
       else if(player.index==4){
        image(car4Img,width/2-150,cars[player.index-1].y-100)
       }
        text ("YOUR RANK IS: "+player.rank,width/2-90,cars[player.index-1].y-50)

      }

    }


// .on - read the value from data base
// .set - write the value to data base
// .val - give the value that read from data base
// .ref - to refere the data base