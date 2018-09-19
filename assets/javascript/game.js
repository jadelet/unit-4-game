// Computer selected solution 

// vars to hold random values for gemstones
var crystalz =""


// Game counters
var winsCounter = 0;
var lossesCounter = 0;

//variable to hold values for computer generated random number
var numberz = ""




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

});

