var color=['Red', 'Green', 'Yellow', 'Blue'];
var wild = ['+2', '+4', 'Reverse', 'Skip', 'Special'];
var canCahngeColor=true;
var COUNTER=1;

var colorNumber=0;
for(;; ){
    var cardNumber=0;     
    for(;;){
        console.log(COUNTER++, ') Card: ', color[colorNumber], cardNumber);
        cardNumber++;
        if(cardNumber>9){
            break;
        }
    }
    // Findout how Loop 18 - 20 is different from loop 8,9-15
    // Tell which is more confusing;
    for(var cardNumber=1; cardNumber<=9; cardNumber++){
        console.log(COUNTER++, ') Card: ', color[colorNumber], cardNumber);
    }
    colorNumber++;
    if(colorNumber>3)
        break;
}