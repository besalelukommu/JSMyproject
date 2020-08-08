 class Book{
     constructor(title, author, year){
         this.title = title;
         this.author = author;
         this.year = year;
     }

     getSummery(){
        return `${this.title} was written by ${this.author} in ${this.year}`;

     }
     getAge(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
     }
     revised(newYear){
        this.year = newYear;
        this.revised = true;
     }

     static topBookStores(){
         return 'Barns & Nobel';
     }
 }

 // Instatiate Object
 const book1 = new Book('Book One', 'John Doe', '2020');

 console.log(book1);
 book1.revised('2017');
 console.log(book1);