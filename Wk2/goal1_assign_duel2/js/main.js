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

      playerOne[2]-=f1;   //Inflicts the damage for player one
      playerTwo[2]-=f2;   //Inflicts the damage for player two

      console.log(playerOne[0]+":"+playerOne[2]+" ** "+playerTwo[0]+":"+playerTwo[2]);    //Logs the new healths to the console.

      var results = winnerCheck();    //Invokes the winnerCheck function

      console.log(results);   //Logs the results of the winnerCheck

      if (results === "There is no winner . . . yet."){   //Opens if else switch for the result of winnerCheck
        round++;    //Increments the round counter
        alert(playerOne[0]+":"+playerOne[2]+" *ROUND " + round + " OVER* "+playerTwo[0]+":"+playerTwo[2]);    //Alerts the player to the results of the last round.
      } else {    //Opens the else side of the switch
        alert(results);   //Alerts the user to the result of winnerCheck
        console.log("Program Broken");    //Logs the impending break in the program on the next line
        break;    //Actually breaks the program
      }   //closes the if switch

    }   //closes teh for loop

  }   //closes the fight function

  function winnerCheck(){   //Opens the winnerCheck function
    console.log("inside Winner Check");   //Logs that the program started the winnerCheck function
    var result = "There is no winner . . . yet.";   //Sets the result to be that nobody has one yet
    if(playerOne[2]<1 && playerTwo[2]<1){   //Starts if else statement for whether the healths of the players are less than 1
      result = "You Both Die";    //if both are less than one, both die
    } else if (playerOne[2]<1){   //first else statement if playerOne's health is less than 1
      result = playerTwo[0]+" is the winner!";    //playerTwo is the winner
    } else if (playerTwo[2]<1){   //second else statement if playerTwo's health is less than 1
      result = playerOne[0]+" is the winner!";    //playerTwo is the winner
    }

    return result;    //Returns the result

  }   //closes the winnerCheck function

  console.log("Program Starts Here");   //logs that the program is JUST starting

  fight();    //calls the fight function

})();   //closes the self executing function
