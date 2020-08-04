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
// var titles = document.querySelectorAll('.title');
// console.log(titles);

// var odd = document.querySelectorAll('li:nth-child(odd');
// for(i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
// }

// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor = "#cccccc";
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
//console.log(itemList.childNodes);

// console.log(itemList.children);

// nextSibling

// nextElementsSibling

// previous Sibling

// previousElementsSibling


// Create Elements //
// create DIV
// var newDiv = document.createElement('div');
// console.log(newDiv);

// // add class
// newDiv.className = 'hello';

// // add id
// newDiv.id = 'helloID';

// // add attrib
// newDiv.setAttribute('title', 'hello world');

// // create text node
// var newDivText = document.createTextNode('Good Morning...');
// // console.log(newDivText)

// // add text 
// newDiv.appendChild(newDivText);
// //console.log(newDiv);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// container.insertBefore(newDiv, h1);
// newDiv.style.fontSize = '36px';



// var button = document.getElementById('button').addEventListener('click', function(e){
//     console.log('click function');
// });


// EVENTS //

// var button = document.getElementById('button');
// button.addEventListener('click', buttonClick);

// var box = document.getElementById('box');
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mousedown', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('dblclick', runEvent);

// box.addEventListener('mousemove', runEvent);

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent);

// function buttonClick(e){

    
    // console.log('Clicked');
    // document.querySelector('#header-title').textContent = 'Button Clicked';
    // document.querySelector('.list-group-item:first-child').style.backgroundColor = 'red';
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // var output = document.getElementById('output');
    // output.innerHTML = '<h3>'+ e.target.id +'</h3>'

// }

// function runEvent(e){

    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

//     e.preventDefault();
//      console.log('EVENT TYPE :' +e.type);

//      // output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>'

//      box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";

// }


// Mini project //

var form = document.querySelector('#addForm');
var itemList = document.querySelector('#items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', removeItem);

// filter event
filter.addEventListener('keyup', filterItems);

// Add item function
function addItem(e){
    e.preventDefault();
    
    // get input value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');

    // add class to li
    li.className = 'list-group-item';
    
    // add text node to li
    li.appendChild(document.createTextNode(newItem));

    // create new button element
    var deletebtn = document.createElement('button');
    
    // add classes to btn
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';

    // add text to btn
    deletebtn.appendChild(document.createTextNode('X'));

    // append btn to list 
    li.appendChild(deletebtn);

    // append item to list
    itemList.appendChild(li);

    // clear text in input
    var clear = document.getElementById('item');
    clear.value = '';
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ? ')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    // convert text to lower case
    var text = e.target.value.toLowerCase();

    // get lis
    var items = itemList.getElementsByTagName('li');

    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });

}
