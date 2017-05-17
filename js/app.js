console.log("linked js racing game file yay!1 sanity check!!!");
// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
    // body...

    function findPositionOne() {
      var currentPositionOne = $('#player1').position();
      var currentCoordinateOne = currentPositionOne.left;
      var rightCoordinateOne = currentCoordinateOne + 200;
      return rightCoordinateOne;
    }

    function findPositionTwo() {
      var currentPositionTwo = $('#player2').position();
      var currentCoordinateTwo = currentPositionTwo.left;
      var rightCoordinateTwo = currentCoordinateTwo + 200;
      return rightCoordinateTwo;
    }

    $(document).keydown(function(keyPressed) {

      if ( findPositionOne() > $(window).width() ) {
        alert("You won!");
        $('#player1').removeAttr('style');
        $('#player2').removeAttr('style');
      } else if (keyPressed.keyCode === 65) {
     $('#player1').animate( {left: '+=100'}, 'fast');
    }});

    $(document).keydown(function(keyPressed) {
      if ( findPositionTwo() > $(window).width() ) {
        alert("You won!");
        $('#player1').removeAttr('style');
        $('#player2').removeAttr('style');
      } else if (keyPressed.keyCode === 75) {
     $('#player2').animate( {left: '+=100'}, 'fast');
    }});

/*
if function findPositionOne() > $(window).width();
  $('#player1').removeAttr('style');
  reset
  alert("You won")

*/

/*

check window width
if window width - player width <=0 negative
then do this
otherwise do this


//finds position of left
$('#player1').position();
store into a variable
this is an object.
then do e.g. aaa.left; to get number


*/



}); //don't change this line
