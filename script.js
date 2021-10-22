var i = 0;
var txt = "Humanity is at its... last stand...The sentient AI has given one last chance... To save the world through a game of...  Rock-Paper-Scissors..."; 
var speed = 70; /* The speed/duration of the effect in milliseconds */

let wintext = "YOU WON! HUMANITY IS SAVED"
let losetext = "YOU LOST... BUT THERE IS STILL HOPE..."



function typeWriter() {
    if (i < txt.length) {
      document.getElementById("typing").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    
  }


function winType() {
    
    if (i < wintext.length) {
      document.getElementById("end-display").innerHTML += wintext.charAt(i);
      i++;
      setTimeout(winType, speed);
    }
    
  }

  function clearScreen() {
      document.getElementById("typing").innerHTML = "";
      
  }
  



  function loseType() {
    
    if (i < losetext.length) {
      document.getElementById("end-display").innerHTML += losetext.charAt(i);
      i++;
      setTimeout(loseType, speed);
    }
    
  }

 



typeWriter()

// setTimeout(function () { clearScreen()},13000)

// document.getElementById("typing").innerHTML = " ";
console.log("hello")
let outcome = document.querySelector(".outcome") 
let output = document.querySelector(".outcome-display")
let score = document.querySelector(".score-display")
let computerscore = 0, playerscore = 0,games = 0;
let endresult = document.querySelector(".end-display")
let inputs = document.querySelector(".inputs")

score.textContent = "Player : "+playerscore+"  Computer : "+computerscore+"  Game : "+games;
let computerGuess = computerPlay();
console.log(computerGuess)


function computerPlay()
{
    let array = ["Rock","Paper","Scissors"]
    const random = Math.floor(Math.random() * array.length);
    let computerguess = array[random]
    return computerguess.toLowerCase();
}

function rock()
{
    userguess = "rock"
    result()
    
}

function paper()
{
    userguess = "paper"
    result()
}

function scissors()
{
    userguess = "scissors"
    result()
}

function result()
{
    // let computerGuess = computerPlay()
    // let userguess = (guess.value).toLowerCase();
    if(computerGuess == userguess)
    {
        output.textContent = "It is a tie"
        
    }
    else if(userguess=="rock")
    {
        if(computerGuess=="scissors")
        {
            output.textContent = "You win"
            playerscore++
        }
        else
        {
            output.textContent = "You lose"
            computerscore++
        }
    }
    else if(userguess=="paper")
    {
        if(computerGuess=="rock")
        {
            output.textContent = "You win"
            playerscore++
        }
        else
        {
            output.textContent = "You lose"
            computerscore++
        }
    }
    else if(userguess == "scissors")
    {
        if(computerGuess=="paper")
        {
            output.textContent = "You win"
            playerscore++
        }
        else
        {
            output.textContent = "You lose"
            computerscore++
        }
    }
    else 
    {
        output.textContent = "Error"
    }

    computerGuess = computerPlay();
    console.log(computerGuess)
    games++
    score.textContent = "Player : "+playerscore+"  Computer : "+computerscore+"  Game : "+games;
    ultimatedecision()
    
    
    
};

function resetGame()
{
    playerscore = 0
    computerscore = 0
    games = 0
    score.textContent = "Player : "+playerscore+"  Computer : "+computerscore+"  Game : "+games;
    return;
};

function ultimatedecision(){
    if(games == 5)
    {
        if(playerscore > computerscore)
        {      
            outcome.style.display = "none";
            inputs.style.display = "none";
            // endresult.textContent = "YOU WON THE GAME"
            i=0
            winType()
            resetGame();
            
            
        }
        else 
        {
            outcome.style.display = "none";
            inputs.style.display = "none";
            // endresult.textContent = "COMPUTER WON THE GAME"
            i=0
            loseType()
            resetGame();
            
        }
    }
}  


