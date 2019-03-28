class User {
    constructor(first, last, e) {
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

var userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); //undefined
console.log(userOne.f); //Paul
console.log(userOne.l); //O'Connor
console.log(userOne); //User { f: "Paul", l: "O'Connor", email: "poconnor@elevenfifty.org" }



class Player {
    constructor(name, number, avgPoints) {
        this.n = name;
        this.num = number;
        this.ap = avgPoints;
    }
}

let playerOne = new Player("MasterTyrr", "11", "195,567");
console.log(playerOne.n); //MasterTyrr
console.log(playerOne.num); //11
console.log(playerOne.ap); //195,567
console.log(playerOne); // Player { n: 'MasterTyrr', num: '11', ap: '195,567' }