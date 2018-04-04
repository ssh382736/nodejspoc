'use strict';


function test(a,b){
    if(arguments[0] === 55){
       return b; 
    }
    return a+b;
};

var sum = test(55,45);

console.log(sum);







