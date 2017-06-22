// update the h1 to say higher or lower
// or if the number guess is correct, we change the body color

var randomNumber = randomFn(0, 10)

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

document.querySelector('h2').addEventListener('click', function () {
  var guessedNum = prompt('Type a number')
  askForANumber(guessedNum, 5)
})

// fn that checks numbers with the random number
function askForANumber (guessedNum, randomNumber) {
  if (guessedNum > randomNumber) {
    updateH1('lower, randomNumber is ' + randomNumber)
    document.querySelector('body').style.backgroundColor = 'rgb(119, 230, 233)'
  } else if (guessedNum < randomNumber) {
    updateH1('higher, randomNumber is ' + randomNumber)
    document.querySelector('body').style.backgroundColor = 'rgb(119, 230, 233)'
  } else if(guessedNum == randomNumber) {
    updateH1('correct')
    document.querySelector('body').style.backgroundColor = 'green'
  }
}
