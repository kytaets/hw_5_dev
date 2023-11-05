const index_of_sum = (numbers) => {
    let numbers_rev = [...numbers];
    numbers_rev.reverse();

    for(const num in numbers){

        const part1 = numbers.slice(0,num);
        const part2 = numbers_rev.slice(0,numbers.length-num-1);

        let sum1 = 0;
        let sum2 = 0;

        if(part1.length !== 0)
            sum1 = part1.reduce((a,b) => a+b );

        if(part2.length !== 0)
            sum2 = part2.reduce((a,b) => a+b );

        if(sum1 === sum2)
            return num;
    }
    return -1;
}
