let player = {
    name: "Per",
    money: 400
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


playerEl.textContent = player.name + ": $" + player.money
newEl = document.getElementById("new")
startEl = document.getElementById("start")

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    if (startEl.textContent === 'START GAME'){
        startEl.textContent = 'RESTART'
        
        isAlive = true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()        
    } else if (startEl.textContent === 'RESTART'){
        startEl.textContent = 'RESTART'
        
        isAlive = true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()   
        newEl.textContent = 'NEW CARD'
        player.money = 400
        playerEl.textContent = player.name + ": $" + player.money   
    }

}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum < 50) {
        message = "Do you want to draw a new card?"
    } else if (sum === 50) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        if (player.money>0){
            let card = getRandomCard()
            sum += card
            cards.push(card)
            player.money -= 100
            playerEl.textContent = player.name + ": $" + player.money
            renderGame() 
        } else{
            newEl.textContent = "GAME OVER and You don't have enough money"
        }
       
    } else{
        newEl.textContent = 'GAME OVER'
    }
}

console.log('Real feature1 branch')