let cardContainer = document.querySelector("#card-container")
let allCardsArray = Array.from(cardContainer.children)
let cardPicked1 = undefined
let cardPicked2 = undefined
let picked = undefined
let gameCounter = 0

let rounds = document.querySelector("#rounds")
let button = document.querySelector("button")

button.addEventListener("click",()=>{
    restart()
})

rounds.innerHTML = gameCounter

let div = document.querySelector("#card-container")
div.dataset.picked = "picked"


div.addEventListener("click",checker)


function checker(e){
    
    if(gameCounter==4||e.target.dataset.picked=="picked"){
        return 
    }
    if (cardPicked1==undefined){
    e.target.textContent = e.target.dataset.card
    e.target.dataset.picked = "picked"
    return cardPicked1 = e.target
    
    }
    if (cardPicked2==undefined){
        e.target.textContent = e.target.dataset.card
        cardPicked2 = e.target        
        if(cardPicked1.dataset.card==cardPicked2.dataset.card){
            cardPicked1.dataset.picked = "picked"
            cardPicked2.dataset.picked = "picked"
            cardPicked1=undefined
            cardPicked2=undefined
            gameCounter = (gameCounter + 1)
            rounds.innerHTML = gameCounter 
            if(gameCounter == 4){
                setTimeout(()=>{
                    alert('YOU WON!!!!!! You got all the pairs!!')
                    userInputPlayAgain()
                    ,10000})
            }
           return}
        else{ setTimeout(function (){    
            cardPicked1.textContent = ""
            cardPicked2.textContent  = ""
            cardPicked1.dataset.picked = ""
            cardPicked2.dataset.picked = ""
            cardPicked1=undefined
            cardPicked2=undefined     
},500)
}}}

function sort() {
    console.log('I have been called');
    // After converting node list to an array I can now create a shuffle and then insert them
    allCardsArray.sort( () => Math.random()-0.5)
    
    // Reinserting them into the dom
    allCardsArray.forEach(element => {
        cardContainer.append(element)
    });
}

const clearCardsText = ()=>{
        allCardsArray.forEach(div=>{
            div.innerHTML = '';
            div.dataset.picked = '';
            gameCounter = 0
            rounds.innerHTML = gameCounter 

        })
    }
const userInputPlayAgain = () =>{
    let userInput = confirm('Do you want to play again')
    userInput? restart() : alert('Thanks for playing')
}
const restart = () =>{
    clearCardsText()
    sort()
}

sort()
