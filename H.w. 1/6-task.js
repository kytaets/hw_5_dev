const input = 123456789;

let number = String(input);
let result = '';
number = number.split('');
let max;

while(number.length !== 0) {
    max = Number(number[0]);

    for (let i of number) {
        i = Number(i);
        if (i > max)
            max = i;
    }

    result += max;
    number.splice(number.indexOf(String(max)), 1);
}

console.log(result);
