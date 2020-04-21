// card
//how many
// type of cards
// properties of a card
/*
Color: Red,Green, Blue, Yellow
Number: 1,2,3,4,5,6,7,8,9
WildCards:+2, +4, Skip, Reverse, Choose Color, 
108

card= {
    number:1,
    color: blue,
    isWilid: false,
    typeOfWild:None,
    action:
}
*/
var cardNumber=1;
var color=['Red', 'Green', 'Yellow', 'Blue'];
var wild = ['+2', '+4', 'Reverse', 'Skip', 'Special'];
var canCahngeColor=true;
var colorNumber=0;
var COUNTER=1;

for(;;){
    var cardNumber=0;     
    for(;;){
        console.log(COUNTER++, ') Card: ', color[colorNumber], cardNumber);
        cardNumber++;
        if(cardNumber>9){
            break;
        }
    }
    var cardNumber=1;     
    for(var cardNumber=1;cardNumber<10;cardNumber++){
        console.log(COUNTER++, ') Card: ', color[colorNumber], cardNumber);
    }
    colorNumber++;
    if(colorNumber>3)
        break;
}