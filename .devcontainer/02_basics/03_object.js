// singleton

//object literals

const mySym = Symbol("key1")    

const JsUser = {
    name: "abhsiehk",
    "full name":"Abhishek raut",
    mySym: "mykey1",
    [mySym]: "myvalue1",
    isLoggedin: false,
    age:10,
    lacation :"ranchi",
    email: "abishek@gamil.com",
    lastLoginDays: ["maonday","saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["Email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser.mySym)

JsUser.email = "abhishek453@gmail.com"
Object.freeze(JsUser) // it will not allow to change the value of object
JsUser.email = "abhishe1344@gmail.log"
// console.log(JsUser.email);
// console.log(JsUser);


JsUser.greeting = function () {
    console.log("Hello Js User");

}

JsUser.greeting2 = function () {
    console.log(`Hello ${this.name} welcome to js world`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());



