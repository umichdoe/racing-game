console.log("linked js racing game file yay!1 sanity check!!!");
// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
    // body...

    $(document).keydown(function(keyPressed) {
     if (keyPressed.keyCode == 65) {
     $('#player1').animate( {left: '+=100'}, 'fast');
    }});

    $(document).keydown(function(keyPressed) {
     if (keyPressed.keyCode == 76) {
     $('#player2').animate( {left: '+=100'}, 'fast');
    }});






}); //don't change this line
