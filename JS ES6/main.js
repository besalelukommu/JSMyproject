"use strict"

// var a = 'test1';
// let b = 'test2';

function testVar(){
    var a=30;
    if(true){
        var a = 50;
        console.log(a);
    }
    console.log(a);
}

function testLet(){
    let a=30;
    if(true){
        let a = 50;
        console.log(a);
    }
    console.log(a);
}

testLet();

const colors = [];

colors.push('red');
colors.push('blue');

// colors = 'green';

console.log(colors);