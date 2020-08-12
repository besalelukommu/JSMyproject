"use strict"

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static countUsers(){
        console.log('there are 50 users');
    }

    register(){
        console.log(this.username+' is now registered...');
    }
}

// let bob = new User('bob', 'bob@gmail.com', '12345');
// bob.register();
// User.countUsers();

class Member extends User{
    constructor(username, email, password, memberPackage){
        super(username, email, password);
        this.package = memberPackage;

    }
    getPackage(){
        console.log(this.username+' is subscribed to the '+this.package+' package');
    }
}

let mike = new Member('mike', 'mike@gmail.com', 'pass123', 'Standard');

mike.getPackage();
mike.register();
Member.countUsers(); 