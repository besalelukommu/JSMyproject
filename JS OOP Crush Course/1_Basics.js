// const s = 'Hello';
// console.log(s.toUpperCase());

// OBJECT LITERAL //
const Book1 = {
    author : 'John Doe',
    title : 'Book One',
    year : '2016',
    getSummery : function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }  
};

const Book2 = {
    author : 'John Smith',
    title : 'Book two',
    year : '2018',
    getSummery : function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }  
};

// console.log(Book2.getSummery());
console.log(Object.keys(Book1));
console.log(Object.values(Book1));