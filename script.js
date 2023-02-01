let cardPicked1 = undefined
let cardPicked2 = undefined
let picked = undefined
let gameCounter = 0

let rounds = document.querySelector("#rounds")
let button = document.querySelector("button")

button.addEventListener("click",()=>{
   window.location.reload()
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
                gameCounter.innerHTML = gameCounter+ " You got all the pairs!!"
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





