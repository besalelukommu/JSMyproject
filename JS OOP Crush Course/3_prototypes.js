// constructor
function Book(author, title, year){
    this.author = author;
    this.title = title;
    this.year = year;

}

// get summery
Book.prototype.getSummery = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

// Get Age
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}
// Revise / change year
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}

const book1 = new Book('John Doe', 'Book One', '2013');
const book2 = new Book('John Smith', 'Book Two', '2019');

console.log(book2);
book2.revise('2020');
console.log(book2);
//console.log(book1.getAge());