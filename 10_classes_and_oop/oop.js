const user = {
    username: "Shreya",
    loginCount: 8,
    signedIn: true,

    getuserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getuserDetails());
console.log(this);

function User(username,loginCount,isLoggedIn){
        this.username = username;
        this.loginCount = loginCount;
        this.isLoggedIn = isLoggedIn

    return this;
}
// 1. jb hm new keyword use krte h ek new object create hota h
//  2. constructor fxn call hota
// 3. this ke andr inject hojata h
// 4. hme data mil jata h
const userOne = new User("shreya",12,true)
console.log(userOne);
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);