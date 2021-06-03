(function () {
  let pScore = 0;
  let cScore = 0;

  //starts game
  const startGame = ()=> {
    const playButton = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playButton.addEventListener('click', ()=> {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
  };

  //match
  const playMatch = ()=>{
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
      hand.addEventListener('animationend', function(){
        this.style.animation = '';
      });
    });
    //computer options
    const computerOptions = ['rock','paper','scissors'];

    options.forEach(option => {
      option.addEventListener('click', function(){
        //computer choice
        const computerNumber = Math.floor(Math.random() * 3);  
        const computerChoice = computerOptions[computerNumber];

        setTimeout(()=>{
        //call compareHands
        compareHands(this.textContent, computerChoice);
        //update images
        playerHand.src = `./img/${this.textContent}.png`;
        computerHand.src = `./img/${computerChoice}.png`;
        }, 2000);

        //animation
        playerHand.style.animation = 'shakePlayer 2s ease';
        computerHand.style.animation = 'shakeComputer 2s ease';
      });
    });
  };

  const updateScore = ()=>{
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice,computerChoice)=>{
    const winner = document.querySelector('.winner');
    //test for tie
    if(playerChoice === computerChoice){
      winner.textContent = 'Tie';
      return;
    }
    //test for player choice === 'rock', computer choice === 'scissors' / 'paper'
    if(playerChoice === 'rock'){
      if(computerChoice === 'scissors'){
        winner.textContent = 'Player Wins';
        pScore++;
        updateScore();
        return;
      }else{
        winner.textContent = 'Computer Wins';
        cScore++;
        updateScore();
        return;
      }
    }
    //test for player choice === 'paper', computer choice === 'scissors' / 'rock'
    if(playerChoice === 'paper'){
      if(computerChoice === 'scissors'){
        winner.textContent = 'Computer Wins';
        cScore++;
        updateScore();
        return;
      }else{
        winner.textContent = 'Player Wins';
        pScore++;
        updateScore();
        return;
      }
    }
    //test for player choice === 'scissors', computer choice === 'rock' / 'paper'
    if(playerChoice === 'scissors'){
      if(computerChoice === 'rock'){
        winner.textContent = 'Computer Wins';
        cScore++;
        updateScore();
        return;
      }else{
        winner.textContent = 'Player Wins';
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //call inner functions
  startGame();
  playMatch();
}());

//call whole game
// game();
