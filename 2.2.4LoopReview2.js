const readLine = require('readLine-sync');

//11
// let answer1 = readLine.question("Do you want to quit? y or n: ");
// while (answer1 != "Y" && answer1 != "N" && answer1!="Yes "){
//     console.log("invalid choice");
//     answer1 = readLine.question("Try again. Enter y or n: ");
// }
// console.log(`You typed${answer1}`);
//12
let answer2 = readLine.question("Do you want to quit? Y/y or N/n: ");
while (answer2 != "Y" && answer2 != "y" && answer2 !="N" && answer2 !="n"){
    console.log("invalid choice");
    answer2 = readLine.question("Try again. Enter y or n:");
}
console.log(`You typed${answer2}`);
