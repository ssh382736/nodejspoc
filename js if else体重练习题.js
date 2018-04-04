'use strict';


var xiaoming = {
    high: 1.75,
    weight: 80.5
}

var bmi = Math.pow(xiaoming.high/xiaoming.weight,2)
console.log(bmi);
if(bmi<18.5){
    alert('too light');
}else if(bmi>18.5 && bmi <25){
    alert('normal');
}else if(bmi>25 && bmi<28){
    alert('a little fat');
}else{
    alert('omg you are too fat');
}






