$( document ).ready(function(){
    
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    
    function randomNumber() {
        return Math.floor(Math.random()*11+1);
    }
    
    var Random=Math.floor(Math.random()*120+19)

    $('#randomNumber').text(Random);
  
    var num1= randomNumber();
    var num2= randomNumber();
    var num3= randomNumber();
    var num4= randomNumber();
    
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  //resets the game
  function reset(){
        Random=Math.floor(Math.random()*120+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= randomNumber();
        num2= randomNumber();
        num3= randomNumber();
        num4= randomNumber();
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 

  function yay(){
  alert("You win!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }

  function loser(){
  alert ("Sorre, you have lost!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }

    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
            //sets win/lose conditions
          if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);

            if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   
  }); 