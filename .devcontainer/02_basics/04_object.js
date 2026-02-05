//const TinderUser = new Object()
const tinderUser = {}

tinderUser.name = "John Doe"
tinderUser.age = 28
tinderUser.isMatch = false
tinderUser.lastLogin = new Date()

//console.log(tinderUser);

const regularUser = {
    emaiil: "abhishekraut@gmail.com",
    fullname: {
        userFirstName: {
            userFirstName: "Abhishek",
            userLastName: "Raut"
         }
    }
}

// console.log(regularUser.fullname.userFirstName.userFirstName);
// console.log(regularUser.fullname.userFirstName.userLastName);
// console.log(regularUser['fullname']['userFirstName']);
// console.log(regularUser['fullname']['userFirstName']['userLastName']);

//console.log(tinderUser);

const obj1 = {1: "one", 2: "two", 3: "three"}
const obj2 = {4: "four", 5: "five", 6: "six"}
const obj4 = {3: "three", 4: "four", 5: "five"} 

// const obj3 = {obj1, obj2,obj4} 
// const obj3 = Object.assign({}, obj1, obj2 , obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "abhishekraut@gmail.com"
    },
{
        id: 2,
        email: "john.doe@example.com"
    },
{
        id: 3,
        email: "jane.smith@example.com"
}

]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(Object.hasOwn('isLogged'));
// console.log(Object.hasOwn(tinderUser, 'isMatch'));