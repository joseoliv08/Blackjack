// How Blackjack works: player has to make 21 points or closest to 21 points, if those points are surpassed, player loses the game
// Can ask for a new card in each round

//NOTE: Math.random() generates a number between 0.000 to 0.999. If multiplied by 6, for example, goes from 0.000 to 5.9999
//      Math.floor() removes the decimal numbers: Math.floor( Math.random() * 6 ) + 1 ||| "+ 1" will make the numbers from 1 to 6 and not 0 to 5
//      Methods are simply functions attached to objects

// Create 2 variables, firstCard and secondCard
// Set their values to a random number between 2-11
let cards = [] // array
let sum = 0

let hasBlackJack = false
let isAlive = false

let message = ""

// Variable to change the text displayed
let messageEl = document.getElementById("message-el")
console.log(messageEl)

let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// Create an objetc with player info
let player = {
    name: "Pedro",
    chips: 200
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// Creation of the function to get random card
function getRandomCard() {
    let randomCard = Math.floor( Math.random() * 13 ) + 1
    
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}

// Function to start the game
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 

    renderGame()
}

// Function that render the cards
function renderGame() {
    // display the cards and the sum of points
    cardsEl.textContent = "Cards: "

    // Create a for loop that renders all the cards
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } 
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } 
    else {
        message = "You're out of the game! Bummer"
        isAlive = false
    }

    // Display the message in the messageEl 
    messageEl.textContent = message
}

function newCard() {
    // Only allow player to get a new card if Alive and does not have BlackJack
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()

        // add the final score the new card we requested
        sum += card

        // push the new card into the array
        cards.push(card)

        renderGame()

        console.warn("Already out of the game! Cannot ask for a new card.");
    }

}