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

// Magazine Constructor
function Magazine(title, author, year, month){
    Book.call(this, author, title, year);
    this.month = month;
}

// Inherite prototype
Magazine.prototype = Object.create(Book.prototype);

// Instatiate Magazine object
const mag1 = new Magazine('Magazine one','John Doe', '2020', 'Jan');
console.log(mag1);

console.log(mag1.getSummery());