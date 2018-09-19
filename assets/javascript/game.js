// Computer selected solution 

// vars to hold random values for gemstones
var crystalz =0


// Game counters
var winsCounter = 0;
var lossesCounter = 0;

//variable to hold values for computer generated random numbers
var numberz = 0
var playertotal = 0




// Document Ready event before jquery entries

$(function() {
console.log("Test")
  // jQuery methods go here...

  // Computer selected solution 
numberz = Math.floor((Math.random() * 100 ) + 20);
console.log("Your random number is " + numberz);
$("#randomnumber").text(numberz);

});



$("#gemRow").click(function() {
crystalz = Math.floor((Math.random() * 12) + 1);
console.log("Your crystal vlaue is " + crystalz);
playertotal= playertotal + crystalz;
console.log("Player total is now " + playertotal);
if (playertotal===numberz) {
  console.log ("winner, winner, chicken dinner!");
}
  else if (playertotal>numberz) { 
    console.log ("LOSER!");
}
});

