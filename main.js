document.addEventListener("DOMContentLoaded", function (event) {

  var guessBox = document.querySelector("#guessbox")
  var guessButton = document.querySelector("#guessbutton")
  var guessButtonTwo = document.querySelector("#guessbuttontwo")
  var guessButtonThree = document.querySelector("#guessbuttonthree")
  var hintButton = document.querySelector("#hintbutton")
  var hintButtonTwo = document.querySelector("#hintbuttontwo")
  var hintButtonThree = document.querySelector("#hintbuttonthree")
  var newGameButton = document.querySelector("#newgamebutton")
  var loseButt = document.querySelector("#losebutt")
  var winButt = document.querySelector("#winbutt")
  var firstWordLetters = document.querySelector("#firstwordletters")
  var letterZero = document.querySelector("#letterzero")
  var letterOne = document.querySelector("#letterone")
  var letterTwo = document.querySelector("#lettertwo")
  var letterThree = document.querySelector("#letterthree")
  var letterFour = document.querySelector("#letterfour")
  var letterFive = document.querySelector("#letterfive")
  var letterSix = document.querySelector("#lettersix")
  var letterSeven = document.querySelector("#letterseven")
  var letterEight = document.querySelector("#lettereight")
  var hintSpot = document.querySelector("#hintspot")
  var tryAgainSpot = document.querySelector("#tryagainspot")
  var congratsSpot = document.querySelector("#congratsspot")
  var loseSpot = document.querySelector("#losespot")
  var trySpot = document.querySelector("#trycounter")

  var words = ["cactus", "zamboni", "armadillo"]

  var firstWord = words[0]
  var firstWordRay = firstWord.split("")
  var secondWord = words[1]
  var secondWordRay = secondWord.split("")
  var thirdWord = words[2]
  var thirdWordRay = thirdWord.split("")
  var userguessesright = []
  var userguesseswrong = [0, 0, 0, 0, 0]

  guessButtonTwo.style.display = "none"
  guessButtonThree.style.display = "none"
  hintButtonTwo.style.display = "none"
  hintButtonThree.style.display = "none"
  letterSix.style.display = "none"
  letterSeven.style.display = "none"
  letterEight.style.display = "none"
  trySpot.innerHTML = "5"
  congratsSpot.style.display = "none"
  loseSpot.style.display = "none"


  function randomizer() {
  return Math.floor((Math.random() * words.length) + 1)
  }


  function wrongGuess() {
    tryAgainSpot.innerHTML = "that letter isn't in the word...try again!"
  }

  function correctGuess() {
    tryAgainSpot.innerHTML = "good guess!"
  }

  function resetGame() {
    tryAgainSpot.innerHTML = ""
    hintSpot.innerHTML = ""
    congratsSpot.style.display = "none"
    loseSpot.style.display = "none"
    letterZero.innerHTML = "_"
    letterOne.innerHTML = "_"
    letterTwo.innerHTML = "_"
    letterThree.innerHTML = "_"
    letterFour.innerHTML = "_"
    letterFive.innerHTML = "_"
    guessBox.value = ""
    trySpot.innerHTML = "5"
    userguessesright = []
    userguesseswrong = [0, 0, 0, 0, 0]
  }

  newGameButton.addEventListener("click", function () {
    resetGame()
    var choice = randomizer()
    if (choice == 1){
      guessButton.style.display = "inline"
      guessButtonTwo.style.display = "none"
      guessButtonThree.style.display = "none"
      hintButton.style.display = "inline"
      hintButtonTwo.style.display = "none"
      hintButtonThree.style.display = "none"
      letterSix.style.display = "none"
      letterSeven.style.display = "none"
      letterEight.style.display = "none"
    } else if (choice == 2){
      guessButton.style.display = "none"
      guessButtonTwo.style.display = "inline"
      guessButtonThree.style.display = "none"
      hintButton.style.display = "none"
      hintButtonTwo.style.display = "inline"
      hintButtonThree.style.display = "none"
      letterSix.style.display = "inline-block"
      letterSix.innerHTML = "_"
      letterSeven.style.display = "none"
      letterEight.style.display = "none"
    } else if (choice == 3){
      guessButton.style.display = "none"
      guessButtonTwo.style.display = "none"
      guessButtonThree.style.display = "inline"
      hintButton.style.display = "none"
      hintButtonTwo.style.display = "none"
      hintButtonThree.style.display = "inline"
      letterSix.style.display = "inline-block"
      letterSix.innerHTML = "_"
      letterSeven.style.display = "inline-block"
      letterSeven.innerHTML = "_"
      letterEight.style.display = "inline-block"
      letterEight.innerHTML = "_"
    }

  })

  guessButton.addEventListener("click", function () {
    var guess = guessBox.value.toLowerCase()
    var guessSpot = firstWordRay.indexOf(guess)
    if (guessSpot === -1) {
        wrongGuess()
        userguesseswrong.pop(0)
        trySpot.innerHTML = userguesseswrong.length
      } else if (guessSpot === 0){
        letterZero.innerHTML = firstWordRay[0].toUpperCase()
        letterTwo.innerHTML = firstWordRay[2].toUpperCase()
        correctGuess()
        userguessesright.push(firstWordRay[0],firstWordRay[2])
      } else if (guessSpot === 1){
        letterOne.innerHTML = firstWordRay[1].toUpperCase()
        correctGuess()
        userguessesright.push(firstWordRay[1])
      } else if (guessSpot === 2){
        letterTwo.innerHTML = firstWordRay[2].toUpperCase()
        correctGuess()
        userguessesright.push(firstWordRay[2])
      } else if (guessSpot === 3){
        letterThree.innerHTML = firstWordRay[3].toUpperCase()
        correctGuess()
        userguessesright.push(firstWordRay[3])
      } else if (guessSpot === 4){
        letterFour.innerHTML = firstWordRay[4].toUpperCase()
        correctGuess()
        userguessesright.push(firstWordRay[4])
      } else if (guessSpot === 5){
        letterFive.innerHTML = firstWordRay[5].toUpperCase()
        correctGuess()
        userguessesright.push(firstWordRay[5])
      }
      if (userguessesright.length === firstWordRay.length){
        congratsSpot.style.display = "block"
        userguessesright = []
        userguesseswrong = [0, 0, 0, 0, 0]
      }
      if (userguesseswrong.length === 0){
        loseSpot.style.display = "block"
      }
   console.log(userguessesright)
   console.log(userguesseswrong)

  })

  hintButton.addEventListener("click", function () {
    hintSpot.innerHTML = "I live in the desert."
  })


  guessButtonTwo.addEventListener("click", function () {
    var guess = guessBox.value.toLowerCase()
    var guessSpot = secondWordRay.indexOf(guess)
    if (guessSpot === -1) {
      wrongGuess()
      userguesseswrong.pop(0)
      trySpot.innerHTML = userguesseswrong.length
      } else if (guessSpot === 0){
        letterZero.innerHTML = secondWordRay[0].toUpperCase()
        correctGuess()
        userguessesright.push(secondWordRay[0])
      } else if (guessSpot === 1){
        letterOne.innerHTML = firstWordRay[1].toUpperCase()
        correctGuess()
        userguessesright.push(secondWordRay[1])
      } else if (guessSpot === 2){
        letterTwo.innerHTML = secondWordRay[2].toUpperCase()
        correctGuess()
        userguessesright.push(secondWordRay[2])
      } else if (guessSpot === 3){
        letterThree.innerHTML = secondWordRay[3].toUpperCase()
        correctGuess()
        userguessesright.push(secondWordRay[3])
      } else if (guessSpot === 4){
        letterFour.innerHTML = secondWordRay[4].toUpperCase()
        correctGuess()
        userguessesright.push(secondWordRay[4])
      } else if (guessSpot === 5){
        letterFive.innerHTML = secondWordRay[5].toUpperCase()
        correctGuess()
        userguessesright.push(secondWordRay[5])
      } else if (guessSpot === 6){
        letterSix.innerHTML = secondWordRay[6].toUpperCase()
        correctGuess()
        userguessesright.push(secondWordRay[6])
      }
      if (userguessesright.length === secondWordRay.length){
        congratsSpot.style.display = "block"
        userguessesright = []
        userguesseswrong = [0, 0, 0, 0, 0]
      }
      if (userguesseswrong.length === 0){
        loseSpot.style.display = "block"
      }
console.log(userguesseswrong)
  })

  hintButtonTwo.addEventListener("click", function () {
    hintSpot.innerHTML = "I spend most of my time on the rink."
  })

  guessButtonThree.addEventListener("click", function () {
    var guess = guessBox.value.toLowerCase()
    var guessSpot = thirdWordRay.indexOf(guess)
      if (guessSpot === -1) {
        wrongGuess()
        userguesseswrong.pop(0)
        trySpot.innerHTML = userguesseswrong.length
      } else if (guessSpot === 0){
        letterZero.innerHTML = thirdWordRay[0].toUpperCase()
        letterThree.innerHTML = thirdWordRay[3].toUpperCase()
        correctGuess()
        userguessesright.push(thirdWordRay[0])
        userguessesright.push(thirdWordRay[3])
      } else if (guessSpot === 1){
        letterOne.innerHTML = thirdWordRay[1].toUpperCase()
        correctGuess()
        userguessesright.push(thirdWordRay[1])
      } else if (guessSpot === 2){
        letterTwo.innerHTML = thirdWordRay[2].toUpperCase()
        correctGuess()
        userguessesright.push(thirdWordRay[2])
      } else if (guessSpot === 3){
        letterThree.innerHTML = thirdWordRay[3].toUpperCase()
        correctGuess()
        userguessesright.push(thirdWordRay[3])
      } else if (guessSpot === 4){
        letterFour.innerHTML = thirdWordRay[4].toUpperCase()
        correctGuess()
        userguessesright.push(thirdWordRay[4])
      } else if (guessSpot === 5){
        letterFive.innerHTML = thirdWordRay[5].toUpperCase()
        correctGuess()
        userguessesright.push(thirdWordRay[5])
      } else if (guessSpot === 6){
        letterSix.innerHTML = thirdWordRay[6].toUpperCase()
        letterSeven.innerHTML = thirdWordRay[7].toUpperCase()
        correctGuess()
        userguessesright.push(thirdWordRay[6])
        userguessesright.push(thirdWordRay[7])
      } else if (guessSpot === 7){
        letterSeven.innerHTML = thirdWordRay[7].toUpperCase()
        userguessesright.push(thirdWordRay[7])
        correctGuess()
      } else if (guessSpot === 8){
        letterEight.innerHTML = thirdWordRay[8].toUpperCase()
        correctGuess()
        userguessesright.push(thirdWordRay[8])
      }
      if (userguessesright.length === thirdWordRay.length){
        congratsSpot.style.display = "block"
        userguessesright = []
        userguesseswrong = [0, 0, 0, 0, 0]
      }
      if (userguesseswrong.length === 0){
        loseSpot.style.display = "block"
      }
      console.log(userguesseswrong)

  })

  hintButtonThree.addEventListener("click", function () {
    hintSpot.innerHTML = "My name means 'little armoured one'."
  })

loseButt.addEventListener("click",
function () {
  loseSpot.style.display = "none"

})

winButt.addEventListener("click", function () {
  congratsSpot.style.display = "none"
})

















})
