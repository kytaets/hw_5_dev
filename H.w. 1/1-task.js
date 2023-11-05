const num = 10;

let result = 0;
for(let i = 0; i<num; i++){
    if(i%3 === 0 || i%5 === 0)
       result += i;
}

console.log(result);

