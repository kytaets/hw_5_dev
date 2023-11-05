const str = '1 9 3 -4 -5';

const list = str.split(' ');
let max = list[0];
let min = list[0];

for(let i of list){
    i = Number(i);
    if(i > max)
        max = i;
    else if(i < min)
        min = i;

}

console.log(`${max} ${min}`);