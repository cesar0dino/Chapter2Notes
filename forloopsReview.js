//1
for(let i = 0; i<=150; i++){
    console.log(i);
}

//2
for(let i = 1; i<= 40; i++){
        console.log(i**2)
}

//3
for(let i = 1; i<= 30; i++){
    console.log(i**3)
}

//4
for(let i = 0; i<= 700; i++) {
    if (i % 5 == 0) {
        console.log(i)
    }
}

//5
for(let i = 350; i<= 1000; i++) {
    if (i % 10 == 0) {
        console.log(i)
    }
}

//6
let sum = 0;
for(let i=1; i<=50; i++){
    if(i % 2 == 0){
        sum += i;
    }
}
console.log(`sum: ${sum}`);