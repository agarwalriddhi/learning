var color=['Red', 'Green', 'Yellow', 'Blue'];
var wild = ['+2',  'Reverse', 'Skip','+4 and pick color', 'pick color'];
var canCahngeColor=true;
var COUNTER=0;

function pickRandom(cards){
    var num= Math.floor(Math.random()*108);
    return cards[num];
}

var cards = [];
for(var colorNumber=0;colorNumber<4;colorNumber++ ){
         
    for(var cardNumber=0;   cardNumber<10;  cardNumber++   ){
        cards[COUNTER++]=color[colorNumber] + cardNumber;
    }
    for(var cardNumber=1; cardNumber<=9; cardNumber++){
        cards[COUNTER++]=color[colorNumber]+cardNumber;
    }
    for(var wildCardNumder=0; wildCardNumder<5; wildCardNumder++){
        cards[COUNTER++]= color[colorNumber]+wild[wildCardNumder];    
    }
    for(var wildCardNumder=0; wildCardNumder<3; wildCardNumder++){
        cards[COUNTER++]= color[colorNumber]+wild[wildCardNumder];    
    }
}

var random_card=pickRandom(cards);
console.log('Choosen Card:', random_card);