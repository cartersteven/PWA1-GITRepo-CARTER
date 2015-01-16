/*
  Name: Steven Carter
  Date: 015/01/15
  Assignment: Duel2
*/


(function(){    //Open self executing function
  console.log("FIGHT!!!!!");    //Console log identifies that the function is self executing.

  var playerOne = ["Spiderman", 20, 100];   //Array for player one's stats
  var playerTwo = ["Batman", 20, 100];    //Array for player two's stats


  var round = 0;    //This sets the round counter to zero. This is because round one has not started yet.

  function fight(){   //Defines the beginning of the fight function
    console.log("Inside the fight function here.");   //Console log that identifies that the fight function has been invoked.

    alert(playerOne[0]+":"+playerOne[2]+" *START* "+playerTwo[0]+":"+playerTwo[2]);   //Alerts the user that the fight has started.

    for (var i=0; i<10; i++){   //Starts for loop for the actual fight

      var minDamage1 = playerOne[1] * .5;   //Sets the minimum damage for player one to half of the maximum damage.
      var minDamage2 = playerTwo[1] * .5;   //Sets the minimum damage for player two to half of the maximum damage.

      var f1 = Math.floor(Math.random() * (playerOne[1]-minDamage1)+ minDamage1);   //calculates a random whole number for the damage dealt to player 1
      var f2 = Math.floor(Math.random() * (playerTwo[1]-minDamage2)+ minDamage2);   //calculates a random whole number for the damage dealt to player 2

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
