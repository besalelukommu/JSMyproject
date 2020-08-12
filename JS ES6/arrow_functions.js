"use strict"

function Prefixer(prefix){
    this.prefix = prefix;

}

// Prefixer.prototype.prefixArray = function(arr){
//     let that = this;
//     return arr.map(function(x){
//         console.log(that.prefix + x);
//     });
// }

Prefixer.prototype.prefixArray = function(arr){
        //let that = this;
        return arr.map((x)=>{
            console.log(this.prefix + x);
        });
    }

let pre = new Prefixer('Hello ');
pre.prefixArray(['Bob', 'Jeff']);

// let add = function(a, b){
//     let sum = a+b;
//     console.log(sum);
//     return false;
// }
let add = (a,b)=>{
    console.log(a+b);
    return false;
}

add(2,21);

// Promises
// imediatly resolved
// var myPromise = Promise.resolve('Foooo');

// myPromise.then((res) => console.log(res));

var myPromise = new Promise(function(resolve, reject){
    setTimeout(() => resolve(4), 2000)
});
myPromise.then((res) =>{
    res +=3;
    console.log(res)
})
