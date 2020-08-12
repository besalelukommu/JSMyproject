"use strict"
let name = 'John';

function makeUpper(word){
    return word.toUpperCase();
}

let template = `<h1>${makeUpper('Hello')}, ${name}</h1><p>this is a javascript template</p>` ;

document.getElementById('template').innerHTML = template;
 