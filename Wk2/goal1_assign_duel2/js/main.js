/*
  Name: Steven Carter
  Date: 09/01/15
  Assignment: Goal1:
  Assignment: Duel1
*/

(function(){
  console.log("FIGHT!!!!!");

  //Player One

  var playerOne = ["Spiderman", 20, 100];
  var playerTwo = ["Batman", 20, 100];

  /*var playerOne[0] = "Spiderman";
  var playerTwo[0] = "Batman";

  //Player Damages
  var playerOne[1] = 20;
  var playerTwo[1] = 20;

  //Player Healths
  var playerOne[2] = 100;
  var playerTwo[2] = 100;*/

  //Start Round Counter
  var round = 0;

  function fight(){
    console.log("Inside the fight function here.");

    alert(playerOne[0]+":"+playerOne[2]+" *START* "+playerTwo[0]+":"+playerTwo[2]);


    //Start For Loop
    for (var i=0; i<10; i++){
      //Create Minimum Damages
      var minDamage1 = playerOne[1] * .5;
      var minDamage2 = playerTwo[1] * .5;

      //Random Damages Made
      var f1 = Math.floor(Math.random() * (playerOne[1]-minDamage1)+ minDamage1);
      var f2 = Math.floor(Math.random() * (playerTwo[1]-minDamage2)+ minDamage2);

      //Inflict Damage
      playerOne[2]-=f1;
      playerTwo[2]-=f2;

      console.log(playerOne[0]+":"+playerOne[2]+" ** "+playerTwo[0]+":"+playerTwo[2]);

      var results = winnerCheck();

      console.log(results);

      if (results === "There is no winner . . . yet."){
        round++;
        alert(playerOne[0]+":"+playerOne[2]+" *ROUND " + round + " OVER* "+playerTwo[0]+":"+playerTwo[2]);
      } else {
        alert(results);
        console.log("Program Broken")

        break;
      }

    };

  };

  function winnerCheck(){
    console.log("inside Winner Check")
    //starter variable
    var result = "There is no winner . . . yet.";
    //if statement
    if(playerOne[2]<1 && playerTwo[2]<1){
      result = "You Both Die";
    } else if (playerOne[2]<1){
      result = playerTwo[0]+" is the winner!"
    } else if (playerTwo[2]<1){
      result = playerOne[0]+" is the winner!"
    };

    return result;

  };

  console.log("Program Starts Here");

  fight();

})();
