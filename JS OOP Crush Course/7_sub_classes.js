class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummery(){
       return `${this.title} was written by ${this.author} in ${this.year}`;

    }
}
// Magazine sub class
class Magazine extends Book{
    constructor(title, author, year, month){
        super(title, author, year);
        this.month = month;
    }
}

// Initiate Magazine
const mag1 = new Magazine('Mag One', 'John Doe', '2013', 'Feb')

console.log(mag1);
console.log(mag1.getSummery());