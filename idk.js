document.addEventListener("DOMContentLoaded", function (event) {

  var guessBox = document.querySelector("#guessbox")
  var guessButton = document.querySelector("#guessbutton")
  var guessButtonTwo = document.querySelector("#guessbuttontwo")
  var tryAgainSpot = document.querySelector("#tryagainspot")
  var firstWordLetters = document.querySelector("#firstwordletters")
  var letterZero = document.querySelector("#letterzero")
  var letterOne = document.querySelector("#letterone")
  var letterTwo = document.querySelector("#lettertwo")
  var letterThree = document.querySelector("#letterthree")
  var letterFour = document.querySelector("#letterfour")
  var letterFive = document.querySelector("#letterfive")
  var letterSix = document.querySelector("#lettersix")
  var hintSpot = document.querySelector("#hintspot")
  var hintButton = document.querySelector("#hintbutton")
  var hintButtonTwo = document.querySelector("#hintbuttontwo")
  var congratsSpot = document.querySelector("#congratsspot")
  var newGameButton = document.querySelector("#newgamebutton")


  // var firstWord = "cactus"
  // var firstWordRay = firstWord.split("")
  // var secondWord = "zamboni"
  // var secondWordRay = secondWord.split("")
  // var thirdWord = "juxtaposition"
  // var thirdWordRay = thirdWord.split("")

  guessButtonTwo.style.display = "none"
  hintButtonTwo.style.display = "none"
  letterSix.style.display = "none"

  function Game(word) {
    this.word = word
  }

  var firstGame = new Game ("cactus")
  var secondGame = new Game ("zamboni")

  Game.prototype.splittingWord = function () {
    word.split()

  };




  Game.prototype.checkingLetter = function () {
    var guess = guessBox.value.toLowerCase()
    var firstWordRay = word.split()
    for(var i = 0; i <= firstWordRay.length; i++){
      var guessSpot = firstWordRay.indexOf(guess)
      if (guessSpot === -1) {
        tryAgainSpot.innerHTML = "that letter isn't in the word...try again!"
      } else if (guessSpot === 0){
        letterZero.innerHTML = firstWordRay[0].toUpperCase()
        letterTwo.innerHTML = firstWordRay[2].toUpperCase()
        tryAgainSpot.innerHTML = "good guess!"
      } else if (guessSpot === 1){
        letterOne.innerHTML = firstWordRay[1].toUpperCase()
        tryAgainSpot.innerHTML = "good guess!"
      } else if (guessSpot === 2){
        letterTwo.innerHTML = firstWordRay[2].toUpperCase()
        tryAgainSpot.innerHTML = "good guess!"
      } else if (guessSpot === 3){
        letterThree.innerHTML = firstWordRay[3].toUpperCase()
        tryAgainSpot.innerHTML = "good guess!"
      } else if (guessSpot === 4){
        letterFour.innerHTML = firstWordRay[4].toUpperCase()
        tryAgainSpot.innerHTML = "good guess!"
      } else if (guessSpot === 5){
        letterFive.innerHTML = firstWordRay[5].toUpperCase()
        tryAgainSpot.innerHTML = "good guess!"
      }

    }
  };



  guessButton.addEventListener("click", function () {
    firstGame.checkingLetter()
  })

  var firstGame = new Game ("cactus")

  hintButton.addEventListener("click", function () {
    hintSpot.innerHTML = "I live in the desert."
  })

  newGameButton.addEventListener("click", function () {
    tryAgainSpot.innerHTML = ""
    hintSpot.innerHTML = ""
    letterZero.innerHTML = "_"
    letterOne.innerHTML = "_"
    letterTwo.innerHTML = "_"
    letterThree.innerHTML = "_"
    letterFour.innerHTML = "_"
    letterFive.innerHTML = "_"
    letterSix.style.display = "inline-block"
    letterSix.innerHTML = "_"
    guessBox.value = ""
    guessButton.style.display = "none"
    hintButton.style.display = "none"
    guessButtonTwo.style.display = "inline"
    hintButtonTwo.style.display = "inline"

  })

  guessButtonTwo.addEventListener("click", function () {
    var guess = guessBox.value.toLowerCase()
    for(var i = 0; i <= secondWordRay.length; i++){
      var guessSpot = secondWordRay.indexOf(guess)
      if (guessSpot === -1) {
        tryAgainSpot.innerHTML = "that letter isn't in the word...try again!"
      } else if (guessSpot === 0){
        letterZero.innerHTML = secondWordRay[0].toUpperCase()
        tryAgainSpot.innerHTML = "good guess!"
      } else if (guessSpot === 2){
        letterTwo.innerHTML = secondWordRay[2].toUpperCase()
        tryAgainSpot.innerHTML = "good guess!"
      } else if (guessSpot === 3){
        letterThree.innerHTML = secondWordRay[3].toUpperCase()
        tryAgainSpot.innerHTML = "good guess!"
      } else if (guessSpot === 4){
        letterFour.innerHTML = secondWordRay[4].toUpperCase()
        tryAgainSpot.innerHTML = "good guess!"
      } else if (guessSpot === 5){
        letterFive.innerHTML = secondWordRay[5].toUpperCase()
        tryAgainSpot.innerHTML = "good guess!"
      } else if (guessSpot === 6){
        letterSix.innerHTML = secondWordRay[6].toUpperCase()
        tryAgainSpot.innerHTML = "good guess!"
      }

    }

  })

  hintButtonTwo.addEventListener("click", function () {
    hintSpot.innerHTML = "I spend most of my time on the rink."
  })




















})
