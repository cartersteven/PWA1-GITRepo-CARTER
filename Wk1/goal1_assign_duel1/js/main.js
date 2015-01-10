/*
  Name: Steven Carter
  Date: 09/01/15
  Assignment: Goal1:
  Assignment: Duel1
*/

(function(){
  console.log("FIGHT!!!!!");

  //Player Names
  var playerOneName = "Spiderman";
  var playerTwoName = "Batman";

  //Player Damages
  var playerOneDamage = 20;
  var playerTwoDamage = 20;

  //Player Healths
  var playerOneHealth = 100;
  var playerTwoHealth = 100;

  //Start Round Counter
  var round = 0;

  function fight(){
    console.log("Inside the fight function here.");

    alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);


    //Start For Loop
    for (var i=0; i<10; i++){
      //Create Minimum Damages
      var minDamage1 = playerOneDamage * .5;
      var minDamage2 = playerTwoDamage * .5;

      //Random Damages Made
      var f1 = Math.floor(Math.random() * (playerOneDamage-minDamage1)+ minDamage1);
      var f2 = Math.floor(Math.random() * (playerTwoDamage-minDamage2)+ minDamage2);

      //Inflict Damage
      playerOneHealth-=f1;
      playerTwoHealth-=f2;

      console.log(playerOneName+":"+playerOneHealth+" ** "+playerTwoName+":"+playerTwoHealth);

      var results = winnerCheck();

      console.log(results);

      if (results === "There is no winner . . . yet."){
        round++;
        alert(playerOneName+":"+playerOneHealth+" *ROUND " + round + " OVER* "+playerTwoName+":"+playerTwoHealth);
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
    if(playerOneHealth<1 && playerTwoHealth<1){
      result = "You Both Die";
    } else if (playerOneHealth<1){
      result = playerTwoName+" is the winner!"
    } else if (playerTwoHealth<1){
      result = playerOneName+" is the winner!"
    };
    
    return result;

  };
  console.log("Program Starts Here");
  fight();

})();
