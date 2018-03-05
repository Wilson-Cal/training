function setUserName(username) {
    user.Username = username;
}

function setPassword(password) {
    user.Password = password;
}

//This is a JavaScript Object
var user = {
    'Username': setUserName, //Two ways to do this. setUserName - actually is the function. setUserName(arg) - Calls the function, gets the return value.
    'Password': setPassword
};

//This is a JavaScript Class
class User {
    constructor(name = 'bob') {
        this.username = name;
        this.favoriteFood = 'tomato';
    }
    getName() {
        return this.username;
    }
    getFavoriteFood() {
        return this.favoriteFood;
    }
}

console.log('\nJavaScript Class Example:');
var userClassObj = new User('Billy');
console.log(userClassObj.username);
console.log(userClassObj.favoriteFood);
console.log();
console.log('JavaScript Object Example:');
console.log(user);
user.Username('Bob');
user.Password('password');
console.log(user);