// Computer selected solution 

// vars to hold random values for  gemstones incl total 

var ruby = 0
var sapphire = 0
var diamond = 0
var emerald = 0

// Game counters
var winsCounter = 0;
var lossesCounter = 0;

//variable to hold values for computer generated random number and player total
var numberz = 0
var playertotal = 0


function restartGame(){
numberz = Math.floor((Math.random() * 100 ) + 20);
console.log("Your random number is " + numberz);
$("#randomnumber").text(numberz);
playertotal = 0
$("#crystal-value").text(playertotal)
}

// Document Ready event before jquery entries

$(restartGame()) 
 
console.log("Test")
  // jQuery methods go here...

  // Computer selected solution 
numberz = Math.floor((Math.random() * 100 ) + 20);
console.log("Your random number is " + numberz);
$("#randomnumber").text(numberz);


var emeraldClicked=false
var sapphireClicked=false
var diamondClicked=false
var rubyClicked=false


$("#gem1").click(function() {
  console.log ("test2")
  if (emeraldClicked ===false) {
    emerald = Math.floor((Math.random() * 12) + 1);
    console.log("Your crystal value is " + emerald);
  };
    playertotal= playertotal + emerald;
    console.log("Player total is now " + playertotal);
    $("#crystal-value").text(playertotal); 
    emeraldClicked=true
  
if (playertotal===numberz) {
  console.log ("winner, winner, chicken dinner!");
 
  $("#winsHTML").html(winsCounter+1); 
}
  else if (playertotal>numberz) { 
    console.log ("LOSER!");
  
    $("#lossesHTML").html(lossesCounter+1);
  }
    
  // restartGame();
});


if (sapphireClicked===false) {
  $("#gem2").click(function() {
var sapphire = Math.floor((Math.random() * 12) + 1);
 var sapphireClicked=true 
 console.log("Your crystal value is " + sapphire);
  playertotal= playertotal + sapphire;
  console.log("Player total is now " + playertotal);
  $("#crystal-value").text(playertotal); 
  if (playertotal===numberz) {
    console.log ("winner, winner, chicken dinner!");
   
    $("#winsHTML").html(winsCounter+1); 
  }
    else if (playertotal>numberz) { 
      console.log ("LOSER!");
    
      $("#lossesHTML").html(lossesCounter+1);
    }
    
    restartGame();
  });
  }
  if (diamondClicked===false) {
  $("#gem3").click(function() {
    var diamond = Math.floor((Math.random() * 12) + 1);
    var diamondClicked=true 
    console.log("Your crystal value is " + diamond);
    playertotal= playertotal + diamond;
    console.log("Player total is now " + playertotal);
    $("#crystal-value").text(playertotal); 
    if (playertotal===numberz) {
      console.log ("winner, winner, chicken dinner!");
     
      $("#winsHTML").html(winsCounter+1); 
    }
      else if (playertotal>numberz) { 
        console.log ("LOSER!");
      
        $("#lossesHTML").html(lossesCounter+1);
      }
    
        restartGame();
      });
    }
    if (rubyClicked===false) {
    $("#gem4").click(function() {
      var ruby = Math.floor((Math.random() * 12) + 1);
      var rubyClicked = true
      console.log("Your crystal value is " + ruby);
      playertotal= playertotal + ruby;
      console.log("Player total is now " + playertotal);
      $("#crystal-value").text(playertotal); 
      if (playertotal===numberz) {
        console.log ("winner, winner, chicken dinner!");
       
        $("#winsHTML").html(winsCounter+1); 
      }
        else if (playertotal>numberz) { 
          console.log ("LOSER!");
        
          $("#lossesHTML").html(lossesCounter+1);
        }
    
        restartGame();
      });
      }


