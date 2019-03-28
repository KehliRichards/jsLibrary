//ES6 JS Classes
class User {
    constructor(name){
      this.name = name;
      this.type = "Trial User"
    }
    //Method 1
    greet(){
      console.log('Welcome back, ' + this.name);
    }
    //Method 2
    status(){
      console.log('Current status: ' + this.type);
    }
}

//Extends
class TrialUser extends User {
    trialEnding() {
        console.log('Your trial will be ending soon, ' + this.name + '.' + ' Would you like to join our program?');
    }
}

//Practice
class BannedUser extends User {
    bannedAccount() {
        console.log('Your account has been banned for use of inappropriate language, ' + this.name + '.');
    }
    bStatus() {
        console.log('Banned User');
    }
}


//Instance of User class
var anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();

//Instance of TrialUSer class
var trialUser = new TrialUser("Paul");
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

//Practice
let bannedUser = new BannedUser("Jessie");
bannedUser.greet();
bannedUser.bannedAccount();
bannedUser.bStatus();