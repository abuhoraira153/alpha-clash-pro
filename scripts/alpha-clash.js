// function play() {
//   const homeSection = document.getElementById("home");
//   homeSection.classList.add("hidden");
//   const playGround = document.getElementById("play-ground");
//   playGround.classList.remove("hidden");
// }

// function continueGame() {
//   const alphabet = getRandomAlphabet();
//   //   console.log(alphabet);

//   const currentAlphabetElement = document.getElementById("current-alphabet");
//   currentAlphabetElement.innerText = alphabet;
//   setBackgroundColorById(alphabet);
// }
// function play() {
//   hideElementById("home");
//   showElementById("play-ground");
//   continueGame();
// }
function handleKeyboartKeyupEvent(event) {
  const playerPressed = event.key;
  console.log(playerPressed);

  if (playerPressed === "Escape") {
    gameOver();
  }

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText.toLocaleLowerCase();

  // console.log(currentAlphabet, playerPressed);
  if (currentAlphabet === playerPressed) {
    // console.log("You get a point!");
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);

    // const newScore = currentScore + 1;
    // currentScoreElement.innerText = newScore;

    const currentScore = getElementVlueById("current-score");
    const updatedScore = currentScore + 1;
    setTextElementValueById("current-score", updatedScore);

    removeBackgroundColorById(currentAlphabet);
    continueGame();
  } else {
    const life = getElementVlueById("life");
    const updatedLife = life - 1;
    setTextElementValueById("life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }
    // console.log("You lose a life!!");
    // const lifeRemainElement = document.getElementById("life");
    // const lifeRemainText = lifeRemainElement.innerText;
    // const lifeRemain = parseInt(lifeRemainText);
    // // console.log("lifeRemain", lifeRemain);
    // const newLife = lifeRemain - 1;
    // lifeRemainElement.innerText = newLife;
  }
}
document.addEventListener("keyup", handleKeyboartKeyupEvent);

function continueGame() {
  const alphabet = getRandomAlphabet();

  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  setBackgroundColorById(alphabet);
}
function play() {
  hideElementById("home");
  hideElementById("final-score");
  showElementById("play-ground");

  setTextElementValueById("life", 5);
  setTextElementValueById("current-score", 0);

  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");

  const lastScore = getElementVlueById("current-score");
  setTextElementValueById("last-score", lastScore);

  const currentAlphabet = getTextElementValueById("current-alphabet");
  removeBackgroundColorById(currentAlphabet);
}
