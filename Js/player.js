class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank = null;


    }

    getCount(){
      database.ref("PlayerCount").on("value",(data)=>{
          playerCount = data.val();

      }) 
    }

    updateCount(count){
        database.ref('/').update({
        PlayerCount:count
        })
        }

    update(){
        database.ref("Players/player"+this.index).update({
            Name:this.name,
            distance:this.distance
        })
    }
    static getPlayerInfo(){
        database.ref("Players").on("value",(data)=>{
        allPlayers = data.val();
        })
    }

    getCarsAtEnd(){
        database.ref('CarsAtEnd').on("value",(data)=>{
            this.rank = data.val();

        })
    }

    static updateCarsAtEnd(Rank){
        database.ref('/').update({
            CarsAtEnd:Rank
        })
    }

}