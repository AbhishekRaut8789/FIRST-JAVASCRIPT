const name = "abhisehk"
const repocount = 50

//  console.log(name + " has " + repocount + " repositories")

// console.log(` Hello my name is ${name} and my repo count is ${repocount} ` );

const gameName = new String('ABHISHEK-RAUT-com')

// console.log(gameName[0]);
// console.log(gameName.__proto___);

// console.log(gameName.toUpperCase());
// console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('H'));

const newString = gameName.substring(0, 7)
console.log(newString);

const anotherString = gameName.slice(-4, 2)
console.log(anotherString);

const newStringOne ="     Abhishek    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://abhishek.com/abhishek%20raut"
 
console.log (url.replace('%20', '-'))
console.log(url);

console.log(url.includes('abhishek'))

console.log(url.includes('deepu'))

console.log(gameName.split('-'))
