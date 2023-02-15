//1
const readline = require("readline-sync");
let answer = readline.question("Do you want to hear a joke?" +
    "   Yes, No");
if (answer === "Yes"){
    console.log(`No`)}
else if (answer === "No"){
    console.log(`Ok`)
} else {
    console.log("invalid");
}
//2
let number = readline.question("Enter a number");
if (number % 2 === 0){
    console.log("divisible by 2");
} else {
    console.log("invalid");
}
//3
let number2 = readline.question( "Enter a number");
if (number2 % 2 === 0){
    console.log("divisible by 2");}
else {
    console.log("invalid");
}
if (number2 % 3 === 0){
    console.log("divisible by 3");
}
else {
    console.log("invalid");
}
if (number2 % 4 === 0){
    console.log("divisible by 4");
}
else {
    console.log("invalid");
}
if (number2 % 5 === 0){
    console.log("divisible by 5");
}
else {
    console.log("invalid");
}
if (number2 % 6 === 0) {
    console.log("divisible by 6");}
else {
    console.log("invalid");
}
//4
let number4 = Number(readline.question("What number am i thinking of?"));
if (number4 === 21){
    console.log(`Congratulations you got the number`)}
if (number4 > 21) {

    console.log("too high try again");
} else{console.log("too low try again");
}
if (number4 < 21) {
    console.log("too low try again");

}else {
    console.log("invalid");
}
//5
let currentPrice = readline.question( "Enter current price: ");
let originalPrice = readline.question( "Enter original price: ");
let diff = originalPrice-currentPrice;
let discount = (currentPrice / originalPrice).toFixed(2)
;console.log(`discount: ${discount}`);