console.log("linked js racing game file yay!1 sanity check!!!");
// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
    // body...

    function findPosition(player) {
      var currentPosition = player.position();
      var currentCoordinate = currentPosition.left;
      var rightCoordinate = currentCoordinate + 100;
      return rightCoordinate;
    }

    var player1 = $('#player1');
    var player2 = $('#player2');
    var positionPlayer1 = findPosition(player1);
    var positionPlayer2 = findPosition(player2);


    $(document).keydown(function(keyPressed) {

      if ( findPosition(player1) > $(window).width() ) {
        $('#player1').removeAttr('style');
        $('#player2').removeAttr('style');
        alert("Player 1 Won!");
      } else if (keyPressed.keyCode === 65) {
        $('#player1').animate( {left: '+=100'}, 'fast');
    }});

    $(document).keydown(function(keyPressed) {
      if ( findPosition(player2) > $(window).width() ) {
        $('#player1').removeAttr('style');
        $('#player2').removeAttr('style');
        alert("Player 2 Won!");
      } else if (keyPressed.keyCode === 75) {
        $('#player2').animate( {left: '+=100'}, 'fast');
    }});

}); //don't change this line
