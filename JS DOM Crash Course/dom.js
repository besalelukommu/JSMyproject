//console.dir(document)

// console.log(document.title);
// console.log(document.all)

// GET ELEMENT BY ID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello world';
// headerTitle.innerHTML = 'Goodbye !!';
// headerTitle.innerHTML = '<h3>Hello</h3>'
// header .style.borderBottom = 'solid 3px #000';

// GET ELEMENTS BY CLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent = 'Hello World';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// GIVES ERROR
//items.style.backgroundColor = '#f4f4f4';

// for(i=0; i< items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// GET ELEMENTS BY TAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// li[1].textContent = 'Hello World';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// //GIVES ERROR
// //li.style.backgroundColor = '#f4f4f4';

// for(i=0; i< li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }


// QUERY SELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #000';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// //var submit = document.querySelector('input[type=submit');
// var submit = document.querySelector('.btn');
// submit.value = 'Search';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green';

// QUERY SELECTOR ALL //
var titles = document.querySelectorAll('.title');
console.log(titles);

var odd = document.querySelectorAll('li:nth-child(odd');
for(i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
}

