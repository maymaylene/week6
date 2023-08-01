let cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let cardSuits = ['♠️', '♦️', '🖤', '☘️'];

class Deck{
    constructor(newCards = newDeckofCards()){
    this.newCards = [];
    }

   lengthOfCards(){
    return this.newCards.length;
   }
    
  shuffleCards(){
         this.newCards.sort((a,b) => Math.random())
    }
}

class Card{
    constructor(cardValues, cardSuits){
        this.cardValues = cardValues;
        this.cardSuits = cardSuits;
    }

}

class Player{
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
    }

}

function newDeckofCards(){
    return cardSuits.map(suits => {
        return cardValues.map(values => {
            return new Card(suits, values)
        })
    })
}

function beginGame(){
    let newDeck = new Deck()
    newDeck.shuffleCards()

    let halfDeck = Math.ceil(newDeckofCards.lengthOfCards / 2)
    
}
