const number = 67;

let result = true;

if(number <= 1)
    result = false;

for(let i = 2; i < number; i++){
    if(number % i === 0){
        result = false;
        break;
    }
}

console.log(result);
