var randomNumber = randomFn(0, 10)
var form = document.getElementById('form')

// fn that generates randomNum
// min and max always whole number
// random number between min and max (exclusive)
function randomFn (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

// this fn. updates h1 text content
function updateH1 (newH1) {
  var h1 = document.querySelector('h1')
  // var h1 = document.getElementsByTagName('h1')
  // updated the property of h1 dom node
  h1.textContent = newH1
}

document.querySelector('h4').addEventListener('click', function () {
  document.querySelector('h4').style.display = 'none'
  startNewGame()
})

function startNewGameButton () {
  document.querySelector('h4').style.display = 'block'
}

function startNewGame () {
  randomNumber = randomFn(0, 10)
  document.querySelector('h1').textContent = 'Higher Or Lower Game!'
  document.querySelector('body').style.backgroundColor = 'rgb(119, 230, 233)'
}

// using the guess button
document.querySelector('h2').addEventListener('click', function () {
  var number = document.getElementById('number').value
  askForANumber(number, randomNumber)
})

// using the enter in the form. this changes html but doesnt stay
form.onsubmit = function () {
  var number = document.getElementById('number').value
  askForANumber(number, randomNumber)
}

// fn that checks numbers with the random number
function askForANumber (guessedNum, randomNumber) {
  if (guessedNum > randomNumber) {
    updateH1('Go lower')
  } else if (guessedNum < randomNumber) {
    updateH1('Go higher')
  } else if (guessedNum == randomNumber) {
    updateH1('Correct')
    document.querySelector('body').style.backgroundColor = 'green'
    startNewGameButton()
  }
}

document.querySelector('button').addEventListener('click', function() {
  var red = randomizer()
  var green = randomizer()
  var blue = randomizer()
  var red2 = randomizer()
  var green2 = randomizer()
  var blue2 = randomizer()
  var rgbStr = "linear-gradient( -90deg, rgb(" + red + "," + green + "," + blue + "),rgb(" + red2 + "," + green2 + "," + blue2 + ") )"
  document.querySelector('body').style.background = rgbStr
})

var randomizer = function() {
  return (Math.floor(Math.random() * 256))
}




//click button, changes background color randomly
