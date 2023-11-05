let m = 91716553919377;

let result = 0;
for(let n= 1; m > 0; n++){
    m -= n**3;
    result += 1;
}

if(m < 0)
    result = -1;
console.log(result);
