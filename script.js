var randomNumber = randomFn(0,10);

// fn that generates randomNum
// min and max always whole number
// random number between min and max (exclusive)
function randomFn (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

// this fn. updates h1 text content
function updateH1(newH1) {
  var h1 = document.querySelector('h1')
  // var h1 = document.getElementsByTagName('h1')
  // updated the property of h1 dom node
  h1.textContent = newH1
}
function startNewGameButton(){
  document.querySelector('h4').style.display = 'block';
}

function startNewGame(){
  randomNumber = randomFn(0,10);
  document.querySelector('h1').textContent = 'Higher Or Lower Game!';
}

document.querySelector('h4').addEventListener('click', function () {
  document.querySelector('h4').style.display = 'none';
  startNewGame();
})

document.querySelector('h2').addEventListener('click', function () {
  var guessedNum = prompt('Type a number')
  askForANumber(guessedNum, randomNumber)
})

// fn that checks numbers with the random number
function askForANumber (guessedNum, randomNumber) {
  if (guessedNum > randomNumber) {
    updateH1('lower')
  } else if (guessedNum < randomNumber) {
    updateH1('higher')
  } else if(guessedNum == randomNumber) {
    updateH1('correct')
    startNewGameButton();
  }
}
