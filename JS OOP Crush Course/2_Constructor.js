// constructor
function Book(author, title, year){
    this.author = author;
    this.title = title;
    this.year = year;

    this.getSummery = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;

    }
}

const book1 = new Book('John Doe', 'Book One', '2013');
const book2 = new Book('John Smith', 'Book Two', '2019');

console.log(book1.getSummery());
console.log(book2.getSummery());